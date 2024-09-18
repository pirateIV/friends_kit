export const handleUserName = (user) => user.firstName + " " + user.lastName;
export const handleCompareUsers = (user1, user2, case1, case2) => {
  user1?.id === user2.id ? case1 : case2;
};
export const handleCompareCases = (statement, case1, case2) =>
  statement ? case1 : case2;

export const filterArray = (arr) => {
  // Remove leading empty strings
  while (arr.length > 0 && arr[0] === "") {
    arr.shift();
  }

  // Remove trailing empty strings
  while (arr.length > 0 && arr[arr.length - 1] === "") {
    arr.pop();
  }

  // Filter out consecutive empty strings
  const result = [];
  let lastNonEmpty = null;
  for (const item of arr) {
    if (item !== "") {
      result.push(item);
      lastNonEmpty = item;
    } else if (lastNonEmpty !== null) {
      result.push(item);
      lastNonEmpty = null;
    }
  }

  return result;
};
