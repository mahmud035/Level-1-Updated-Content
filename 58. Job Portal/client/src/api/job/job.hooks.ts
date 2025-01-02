import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { IAddJob, IDeleteJob, IJob, IUpdateJob } from '../../types/job';
import {
  createJob,
  deleteJob,
  getJob,
  getJobs,
  getRecruiterJobs,
  updateJob,
} from './job.api';

//* Queries Hook
export const useGetJobsQuery = () => {
  return useQuery({
    queryKey: ['jobs'],
    queryFn: getJobs,
  });
};

export const useGetJobQuery = (jobId: string) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['jobs', jobId],
    queryFn: () => getJob(jobId),
    initialData: () =>
      (
        queryClient.getQueryData(['jobs']) as { data: IJob[] | undefined }
      )?.data?.find((d: IJob) => d._id === jobId),

    initialDataUpdatedAt: () =>
      queryClient.getQueryState(['todos'])?.dataUpdatedAt,
  });
};

export const useGetRecruiterJobsQuery = (recruiterEmail: string) => {
  return useQuery({
    queryKey: ['jobs', 'recruiter-jobs', { recruiterEmail }],
    queryFn: () => getRecruiterJobs(recruiterEmail),
  });
};

//* Mutations Hook
export const useCreateJobMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (jobData: IAddJob) => createJob(jobData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
};

export const useUpdateJobMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (jobInfo: IUpdateJob) => updateJob(jobInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
};

export const useDeleteJobMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (jobInfo: IDeleteJob) => deleteJob(jobInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
};
