import { useLocation } from 'react-router-dom';
import {
  AM,
  CLOSED,
  COMPLETED,
  IN_PROGRESS,
  ND,
  PLANNING,
  PM,
  RD,
  ST,
  TH,
  monthNames,
} from './constants';

// Format Date Time
export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);

  // Get day and determine the ordinal suffix
  const day = date.getUTCDate();
  const ordinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return TH;
    switch (day % 10) {
      case 1:
        return ST;
      case 2:
        return ND;
      case 3:
        return RD;
      default:
        return TH;
    }
  };

  const month = monthNames[date.getUTCMonth()];

  // Get year
  const year = date.getUTCFullYear();

  // Get hours and format to 12-hour format
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? PM : AM;
  hours = hours % 12 || 12; // convert 0 hours to 12 for 12 AM/PM

  return `${day}${ordinalSuffix(
    day,
  )} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
};

// return color for status
export const getStatusColor = (status: string): string => {
  switch (status) {
    case IN_PROGRESS:
      return '#1aa3ea';
    case PLANNING:
      return '#ff4500';
    case COMPLETED:
      return '#ffce0f';
    case CLOSED:
      return '#12aa18';
    default:
      return '#12aa18';
  }
};

// return background color for status
export const getStatusBgColor = (status: string): string => {
  switch (status) {
    case IN_PROGRESS:
      return '#bff1e9';
    case PLANNING:
      return '#ffebc6';
    case COMPLETED:
      return '#fffbb6';
    case CLOSED:
      return '#ccffcc';
    default:
      return '#ccffcc';
  }
};
