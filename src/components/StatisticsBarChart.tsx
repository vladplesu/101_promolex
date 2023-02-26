import { Stack, Typography } from '@mui/material';
import { ChartData } from 'chart.js';
import { BarChart } from './BarChart';

type StatisticsPieChartProps = {
  data: ChartData<'bar', (number | undefined)[], string>;
  title: string;
};

export function StatisticsBarChart({ data, title }: StatisticsPieChartProps) {
  return (
    <Stack
      border={1}
      borderColor='divider'
      borderRadius={2}
      boxShadow={3}
      px={6}
      py={4}
    >
      <Typography fontWeight={700} variant='h6'>
        {title}
      </Typography>
      <BarChart chartHeight={1} data={data} />
    </Stack>
  );
}
