export const search = (array, key) => {
  let arr = array;
  
  if (key) {
    arr = arr.filter(
      ({ username, firstName, lastName }) =>
        username.toLowerCase().includes(key) ||
        `${firstName.toLowerCase()}${lastName.toLowerCase()}`.includes(
          key
        )
    );
    return arr;
  }
  return [];
};

export const timeOfPost = (date) => {
  const currentDate = new Date();
  const formattedDate = new Date(date);

  const timeDiff = currentDate - formattedDate;

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  let result = "";

  if (years > 0) {
    result = `${years} year${years > 1 ? "s" : ""}`;
  } else if (months > 0) {
    result = `${months} month${months > 1 ? "s" : ""}`;
  } else if (days > 0) {
    result = `${days} day${days > 1 ? "s" : ""}`;
  } else if (hours > 0) {
    result = `${hours} hr${hours > 1 ? "s" : ""}`;
  } else if (minutes > 0) {
    result = `${minutes} min${minutes > 1 ? "s" : ""}`;
  } else {
    result = `${seconds} sec${seconds > 1 ? "s" : ""}`;
  }

  return result;
};
