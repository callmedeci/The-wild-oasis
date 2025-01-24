import { subDays } from 'date-fns';
import { useUrl } from '../../hooks/useUrl';
import { useQuery } from '@tanstack/react-query';
import { getBookingsAfterDate } from '../../services/apiBookings';

export function useRecentBookings() {
  const { readUrl } = useUrl('last');
  const numDays = !readUrl() ? 7 : Number(readUrl());

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: bookings } = useQuery({
    queryKey: ['bookings', `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });

  return { isLoading, bookings };
}
