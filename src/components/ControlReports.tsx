import { MenuItem, Select, Stack, Typography } from '@mui/material';
import { GridColumns, GridValidRowModel } from '@mui/x-data-grid';
import { useMemo } from 'react';
import { useTabs } from '../hooks';
import {
  useCommitteeHearingReportsByLegislatureQuery,
  useCommitteeInstitutionReportsByLegislatureQuery,
} from '../queries';
import { SecondaryTab, SecondaryTabs } from './SecondaryTabs';
import { Table } from './Table';

const publicReportsTableColumns: GridColumns<GridValidRowModel> = [
  {
    field: 'autPublica',
    headerName: 'Autoritatea publică',
    flex: 0.4,
  },
  {
    field: 'tipRaport',
    headerName: 'Tipul raportului',
    flex: 0.4,
    sortable: false,
  },
  {
    field: 'termenPrezentare',
    headerName: 'Termenul de prezentare',
    flex: 0.4,
    sortable: false,
  },
  {
    field: 'prevederiLegale',
    headerName: 'Prevederi legale',
    flex: 0.4,
    sortable: false,
  },
  {
    field: 'dataPrezentarii',
    headerName: 'Data prezentării',
    flex: 0.3,
  },
];

const reportsAuditingTableColumns: GridColumns<GridValidRowModel> = [
  {
    field: 'autPublica',
    headerName: 'Autoritatea publică',
    flex: 0.4,
  },
  {
    field: 'tematica',
    headerName: 'Tematică',
    flex: 1,
    sortable: false,
  },
  {
    field: 'dataSedinta',
    headerName: 'Data ședinței plenare',
    flex: 0.3,
  },
];

export function ControlReports() {
  const { tabValue, handleTabChange } = useTabs();

  const {
    data: institutionReports,
    isInitialLoading: isLoadingInstitutionReports,
  } = useCommitteeInstitutionReportsByLegislatureQuery({
    enabled: tabValue === 0,
    refetchOnMount: false,
  });

  const institutionReportsData = useMemo(
    () =>
      institutionReports?.map((report, index) => ({ ...report, id: index })) ??
      [],
    [institutionReports],
  );

  const { data: hearingReports, isInitialLoading: isLoadingHearingReports } =
    useCommitteeHearingReportsByLegislatureQuery({
      enabled: tabValue === 1,
      refetchOnMount: false,
    });

  const hearingReportsData = useMemo(
    () =>
      hearingReports?.map((report, index) => ({ ...report, id: index })) ?? [],
    [hearingReports],
  );

  return (
    <Stack gap={6} mt={9}>
      <SecondaryTabs
        onChange={handleTabChange}
        scrollButtons='auto'
        value={tabValue}
      >
        <SecondaryTab label='Rapoartele instituțiilor publice' />
        <SecondaryTab label='Audierea în plen a rapoartelor' />
      </SecondaryTabs>

      <Stack alignItems='center' direction='row' gap={2}>
        <Typography>Selectează anul</Typography>
        <Select labelId='year' value={2023}>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
        </Select>
      </Stack>

      {tabValue === 0 && (
        <Table
          columns={publicReportsTableColumns}
          height={510}
          isLoading={isLoadingInstitutionReports}
          getRowId={(row) => row.id}
          hideFooter={!institutionReportsData.length}
          pageSize={5}
          rows={institutionReportsData}
        />
      )}
      {tabValue === 1 && (
        <Table
          columns={reportsAuditingTableColumns}
          height={510}
          isLoading={isLoadingHearingReports}
          getRowId={(row) => row.id}
          hideFooter={!hearingReportsData.length}
          pageSize={5}
          rows={hearingReportsData}
        />
      )}
    </Stack>
  );
}
