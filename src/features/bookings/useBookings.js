import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useUrl } from '../../hooks/useUrl';
import { PAGE_SIZE } from '../../utils/constant';

export function useBookings() {
  const queryClient = useQueryClient();

  const { readUrl: filterUrl } = useUrl('status');
  const { readUrl: sortByUrl } = useUrl('sortBy');
  const { readUrl: pageUrl } = useUrl('page');

  //Filter
  const filterValue = filterUrl();
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { filed: 'status', value: filterValue };

  //Sort
  const sortByRow = sortByUrl() || 'startDate-desc';
  const [filed, direction] = sortByRow.split('-');
  const sortBy = { filed, direction };

  //Pagination
  const page = !pageUrl() ? 1 : Number(pageUrl());

  //Query
  const {
    data: { data: bookings, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  //Pre-Fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { bookings, isLoading, error, count };
}
