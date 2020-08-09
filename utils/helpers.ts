import { Period } from '../types';

export const dateToYYYYMMDD = (date: Date) => {
  if (date instanceof Date) {
    return [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, '0'),
      String(date.getDate()).padStart(2, '0'),
    ].join('');
  }

  return date;
};

export const dateToMMDDYY = (dateStr: string) => {
  const date = new Date(dateStr);
  return [
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0'),
    String(date.getFullYear()).slice(2),
  ].join('/');
};

export const quarterString = (quarter: number) => {
  if (quarter > 4) {
    return `${quarter - 4} OT`;
  }
  switch (quarter) {
    case 1:
      return '1st';
    case 2:
      return '2nd';
    case 3:
      return '3rd';
    case 4:
      return '4th';
    default:
      return 'n/a';
  }
};

export const formatClock = (period: Period, clock: string) => {
  if (period.isHalftime) return 'Halftime';
  if (period.isEndOfPeriod) return `End of ${quarterString(period.current)}`;
  return `${clock} ${quarterString(period.current)}`;
};

export const formatFinalSting = (period: Period) => {
  const diff = period.current - 4;
  const endedInRegulation = diff === 0;
  if (endedInRegulation) return 'Final';
  return `Final(${diff} OT)`;
};

export const formatTime = (startTimeUTC: string) => {
  const date = new Date(Date.parse(startTimeUTC));
  return date.toLocaleTimeString('en-US', {
    minute: '2-digit',
    hour: '2-digit',
  });
};
