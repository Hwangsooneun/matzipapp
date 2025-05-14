import {getMarkers} from '@/api';
import {queryKeys} from '@/constants';
import {useQuery} from '@tanstack/react-query';
import {UseQueryCustomOptions} from '@/types/common';
import {Marker} from '@/types/domain';

function useGetMarkers(queryOptions?: UseQueryCustomOptions<Marker[]>) {
  return useQuery({
    queryFn: getMarkers,
    queryKey: [queryKeys.MARKER, queryKeys.GET_MARKERS],
    ...queryOptions,
  });
}

export default useGetMarkers;
