export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
  };

  const formattedDate = date.toLocaleDateString('en-US', options);

  const day = date.getDate();
  let daySuffix;

  // Special case for 11, 12, 13 which always use "th" as the suffix.
  if (day >= 11 && day <= 13) {
    daySuffix = 'th';
  } else {
    switch (day % 10) {
      case 1:
        daySuffix = 'st';
        break;
      case 2:
        daySuffix = 'nd';
        break;
      case 3:
        daySuffix = 'rd';
        break;
      default:
        daySuffix = 'th';
        break;
    }
  }

  return formattedDate.replace(String(day), `${day}${daySuffix}`);
};
