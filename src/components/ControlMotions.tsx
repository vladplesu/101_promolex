import { Stack } from '@mui/material';
import { GridColumns, GridValidRowModel } from '@mui/x-data-grid';
import { useMemo } from 'react';
import { useTabs } from '../hooks';
import { useCommitteeMotionsByLegislatureQuery } from '../queries';
import { SecondaryTab, SecondaryTabs } from './SecondaryTabs';
import { Table } from './Table';

const motionsTableColumns: GridColumns<GridValidRowModel> = [
  {
    field: 'denumireProiect',
    headerName: 'Denumire moțiune',
    flex: 1,
    sortable: false,
  },
  {
    field: 'numeDep',
    headerName: 'Autorii moțiunii',
    flex: 1,
  },
  {
    field: 'dataVot1Lect',
    headerName: 'Data examinării în plen',
    flex: 0.4,
  },
  {
    field: 'decizia1Lect',
    headerName: 'Rezultat',
    flex: 0.3,
    sortable: false,
  },
];

export function ControlMotions() {
  const { tabValue, handleTabChange } = useTabs();

  const { data: simpleMotions, isInitialLoading: isLoadingSimpleMotions } =
    useCommitteeMotionsByLegislatureQuery('simplă', {
      enabled: tabValue === 0,
      refetchOnMount: false,
    });

  const {
    data: censorShipMotions,
    isInitialLoading: isLoadingcensorShipMotions,
  } = useCommitteeMotionsByLegislatureQuery('de cenzură', {
    enabled: tabValue === 1,
    refetchOnMount: false,
  });

  const simpleMotionsData = useMemo(
    () =>
      simpleMotions?.map((motion, index) => ({
        ...motion,
        numeDep: motion.numeDep.map(({ fullName }) => fullName).join(', '),
        id: index,
      })) ?? [],
    [simpleMotions],
  );

  const censorShipMotionsDta = useMemo(
    () =>
      censorShipMotions?.map((motion, index) => ({
        ...motion,
        numeDep: motion.numeDep.map(({ fullName }) => fullName).join(', '),
        id: index,
      })) ?? [],
    [censorShipMotions],
  );

  return (
    <Stack gap={6} mt={9}>
      <SecondaryTabs
        onChange={handleTabChange}
        scrollButtons='auto'
        value={tabValue}
      >
        <SecondaryTab label='Moțiuni simple' />
        <SecondaryTab label='Moțiuni de cenzură' />
      </SecondaryTabs>

      {tabValue === 0 && (
        <Table
          columns={motionsTableColumns}
          getRowHeight={() => 'auto'}
          height={510}
          isLoading={isLoadingSimpleMotions}
          getRowId={(row) => row.id}
          hideFooter={!simpleMotionsData?.length}
          pageSize={5}
          rows={simpleMotionsData}
        />
      )}
      {tabValue === 1 && (
        <Table
          columns={motionsTableColumns}
          getRowHeight={() => 'auto'}
          height={510}
          isLoading={isLoadingcensorShipMotions}
          getRowId={(row) => row.id}
          hideFooter={!censorShipMotionsDta?.length}
          pageSize={5}
          rows={censorShipMotionsDta}
        />
      )}
    </Stack>
  );
}
