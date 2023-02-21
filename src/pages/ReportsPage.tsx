import SearchIcon from '@mui/icons-material/Search';
import {
  Container,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { sortBy } from 'lodash';
import { useMemo, useState } from 'react';
import { Header, Loading, ReportItem } from '../components';
import { useReportsQuery } from '../queries';

export function ReportsPage() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('pubdate-newest');

  const { data: reports, isLoading } = useReportsQuery();

  const filteredReports = useMemo(
    () =>
      reports?.filter((report) =>
        report.title
          .split(' ')
          .some((word) => word.toLowerCase().includes(search.toLowerCase())),
      ) ?? [],
    [reports, search],
  );

  const sortedReports = useMemo(() => {
    if (sort === 'pubdate-newest') {
      return sortBy(filteredReports, (report) => report.pubdate).reverse();
    }
    if (sort === 'pubdate-oldest') {
      return sortBy(filteredReports, (report) => report.pubdate);
    }
    return sortBy(filteredReports, (report) => report.title);
  }, [filteredReports, sort]);

  return (
    <Stack>
      <Header title='Publicații' />
      <Container>
        <Stack direction='row' pt={12}>
          <TextField
            fullWidth
            InputProps={{
              startAdornment: <SearchIcon color='disabled' />,
            }}
            placeholder='Caută...'
            onChange={(event) => setSearch(event.target.value)}
            sx={{
              maxWidth: 330,
            }}
            value={search}
          />

          <Stack alignItems='center' direction='row' gap={2} ml='auto'>
            <Typography variant='h6'>Sortează după</Typography>
            <Select
              onChange={(event) => setSort(event.target.value as string)}
              sx={{
                minWidth: 145,
              }}
              value={sort}
            >
              <MenuItem value='pubdate-newest'>Cele mai noi</MenuItem>
              <MenuItem value='pubdate-oldest'>Cele mai vechi</MenuItem>
              <MenuItem value='title'>Nume</MenuItem>
            </Select>
          </Stack>
        </Stack>
        {isLoading ? (
          <Loading />
        ) : (
          <Stack gap={12} py={10}>
            {sortedReports.map((report) => (
              <ReportItem key={report.rid} report={report} />
            ))}
          </Stack>
        )}
      </Container>
    </Stack>
  );
}
