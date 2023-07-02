export const search = (array, key) => {
  let arr = array;
  if (key) {
    const lowerCaseKey = key.toLowerCase();
    arr = arr.filter(
      ({ username, firstName, lastName }) =>
        username.toLowerCase().includes(lowerCaseKey) ||
        firstName.toLowerCase().includes(lowerCaseKey) ||
        lastName.toLowerCase().includes(lowerCaseKey)
    );
    return arr;
  }
  return [];
};
