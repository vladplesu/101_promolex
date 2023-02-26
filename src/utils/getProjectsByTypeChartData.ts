import { ChartData } from 'chart.js';
import { chain, groupBy, keys, values } from 'lodash';
import { RegisteredProjectsStatistics } from '../types';

const projectTypeMap = [
  {
    color: '#88A9B5',
    key: 'lege',
    label: 'Legi',
  },
  { color: '#BAE2F1', key: 'moțiune', label: 'Moțiuni' },
  { color: '#3868D7', key: 'hotărâre', label: 'Hotărâri' },
];

export const getProjectsByTypeChartData = (
  projects: RegisteredProjectsStatistics<'proiect_act'>[],
): ChartData<'pie', number[], string> => {
  const projectsByType = groupBy(projects, 'proiectAct');

  const sortedProjectTypeMap = chain(projectTypeMap)
    .sortBy(({ key }) => keys(projectsByType).indexOf(key))
    .value();

  const labels: string[] = sortedProjectTypeMap.map(({ label }) => label);

  return {
    labels,
    datasets: [
      {
        label: 'Nr. proiecte',
        data: values(projects).map((p) => parseInt(p.total, 10)),
        backgroundColor: sortedProjectTypeMap.map(({ color }) => color),
      },
    ],
  };
};
