import React from 'react';

interface BadgeStatusProps {
  //   status: 'PENDING' | 'PROCESSING' | 'DELIVERED' | 'COMPLETED' | 'CANCELLED' | 'FAILED';
  status: string;
}

export default function BadgeStatus({ status }: BadgeStatusProps) {
  let backgroundStatus: string;

  switch (status) {
    case 'PENDING':
      backgroundStatus = 'bg-[#FFC92B]';
      break;
    case 'PROCESSING':
      backgroundStatus = 'bg-cyan-500';
      break;
    case 'DELIVERED':
      backgroundStatus = 'bg-blue-500';
      break;
    case 'COMPLETED':
      backgroundStatus = 'bg-blue-500';
      break;
    case 'CANCELLED':
      backgroundStatus = 'bg-orange-500';
      break;
    case 'FAILED':
      backgroundStatus = 'bg-red-500';
      break;
    default:
      backgroundStatus = 'bg-gray-300';
  }
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs text-white font-medium ${backgroundStatus}`}
    >
      {status.toLowerCase()}
    </span>
  );
}
