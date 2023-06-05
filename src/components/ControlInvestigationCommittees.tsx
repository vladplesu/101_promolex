import { Link, Stack } from '@mui/material';
import {
  GridColumns,
  GridRenderCellParams,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { useMemo } from 'react';
import { useCommitteeInvestigationCommissionsByLegislatureQuery } from '../queries';
import { Deputy, Routes } from '../types';
import { formatDate } from '../utils';
import { StyledRouterLink } from './StyledRouterLink';
import { Table } from './Table';

const investigationCommitteesTableColumns: GridColumns<GridValidRowModel> = [
  {
    field: 'denComisie',
    headerName: 'Denumirea comisiei',
    flex: 1,
    // renderCell: ({ value }) => <TextWithTooltip text={value} />,
    minWidth: 400,
  },
  {
    field: 'dataConst',
    headerName: 'Data constituirii',
    flex: 0.4,
    // renderCell: ({ value }) => <TextWithTooltip text={value} />,
    minWidth: 120,
    valueFormatter: (params) => formatDate(params.value),
  },
  {
    field: 'componenta',
    headerName: 'Componența',
    flex: 0.5,
    renderCell: ({ value }: GridRenderCellParams<Deputy[]>) => (
      <Stack direction='row' flexWrap='wrap' columnGap={1}>
        {value?.map(({ did, fullName }) => (
          <StyledRouterLink
            key={did}
            sx={{ whiteSpace: 'nowrap' }}
            to={`${Routes.Deputies}/detalii/${did}`}
          >
            {fullName}
          </StyledRouterLink>
        ))}
      </Stack>
    ),
    minWidth: 160,
  },
  {
    field: 'dataPrezParl',
    headerName: 'Data prezentării raportului',
    flex: 0.4,
    sortable: false,
    // renderCell: ({ value }) => <TextWithTooltip text={value} />,
    minWidth: 160,
    valueFormatter: (params) => formatDate(params.value),
  },
  {
    field: 'raportFile',
    headerName: 'Raportul',
    flex: 0.3,
    sortable: false,
    renderCell: ({ value }) =>
      !value ? (
        '-'
      ) : (
        <Link href={value} target='_blank'>
          Vezi raportul
        </Link>
      ),
    minWidth: 100,
  },
];

export function ControlInvestigationCommittees() {
  const { data, isInitialLoading } =
    useCommitteeInvestigationCommissionsByLegislatureQuery({
      refetchOnMount: false,
    });

  const tableData = useMemo(
    () =>
      data?.map((report, index) => ({
        ...report,
        id: index,
      })) ?? [],
    [data],
  );

  return (
    <Stack gap={6} mt={9}>
      <Table
        columns={investigationCommitteesTableColumns}
        height='auto'
        isLoading={isInitialLoading}
        getRowHeight={() => 'auto'}
        getRowId={(row) => row.id}
        hideFooter={!tableData?.length}
        rows={tableData}
      />
    </Stack>
  );
}
