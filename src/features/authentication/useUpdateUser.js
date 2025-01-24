import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCurrentUser as updateCurrentUserApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateCurrentUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUserApi,

    onSuccess: (data) => {
      toast.success('Account successfully updated');

      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    updateCurrentUser,
    isUpdating,
  };
}
