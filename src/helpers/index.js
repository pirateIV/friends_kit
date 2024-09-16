export const handleUserName = (user) => user.firstName + " " + user.lastName;
export const handleCompareUsers = (user1, user2, case1, case2) => {
  user1?.id === user2.id ? case1 : case2;
};
export const handleCompareCases = (statement, case1, case2) =>
  statement ? case1 : case2;
