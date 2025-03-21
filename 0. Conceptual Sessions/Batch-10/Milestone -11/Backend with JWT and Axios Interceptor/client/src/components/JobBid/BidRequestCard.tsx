import { format } from 'date-fns';
import { IJobBid } from '../../types/jobBid';

interface IBidRequestCardProps {
  jobBid: IJobBid;
  handleStatusChange: (
    jobBidId: string,
    jobId: string,
    updatedStatus: 'In Progress' | 'Rejected' | 'Completed'
  ) => void;
}

export default function BidRequestCard({
  jobBid,
  handleStatusChange,
}: IBidRequestCardProps) {
  const {
    _id,
    jobId,
    jobTitle,
    jobCategory,
    bidAmount,
    bidDeadline,
    bidderEmail,
    status,
  } = jobBid || {};

  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        {jobTitle}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        {bidderEmail}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        {format(new Date(bidDeadline), 'MM/dd/yyyy')}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        ${bidAmount}
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <p
            className={`px-3 py-1 bg-blue-100/60 text-xs ${
              jobCategory === 'Web Development' && 'text-blue-500 '
            } ${jobCategory === 'Graphics Design' && 'text-green-500'} ${
              jobCategory === 'Digital Marketing' && 'text-red-500'
            } rounded-full`}
          >
            {jobCategory}
          </p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
            status === 'Pending' && 'bg-yellow-100/60 text-yellow-500'
          } ${status === 'In Progress' && 'bg-blue-100/60 text-blue-500'} ${
            status === 'Rejected' && 'bg-red-100/60 text-red-500'
          } ${status === 'Completed' && 'bg-green-100/60 text-green-500'}`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              status === 'Pending' && 'bg-yellow-500'
            } ${status === 'In Progress' && 'bg-blue-500'} ${
              status === 'Rejected' && 'bg-red-500'
            } ${status === 'Completed' && 'bg-green-500'}`}
          ></span>
          <h2 className="text-sm font-normal">{status}</h2>
        </div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          {/* Accept Button */}
          <button
            onClick={() => handleStatusChange(_id, jobId, 'In Progress')}
            disabled={status === 'In Progress' || status === 'Completed'}
            title="Accept Bid Request"
            className="text-gray-500 transition-colors duration-200 disabled:cursor-not-allowed hover:text-red-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </button>

          {/* Reject Button */}
          <button
            onClick={() => handleStatusChange(_id, jobId, 'Rejected')}
            disabled={status === 'Rejected' || status === 'Completed'}
            title="Reject Bid Request"
            className="text-gray-500 transition-colors duration-200 disabled:cursor-not-allowed hover:text-yellow-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}
