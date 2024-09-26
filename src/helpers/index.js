import moment from "moment";

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

export function formatDateLabel(date) {
  const now = moment();
  const messageDate = moment(date);

  if (now.isSame(messageDate, "day")) {
    return "Today";
  } else if (now.subtract(1, "days").isSame(messageDate, "day")) {
    return "Yesterday";
  } else if (now.isSame(messageDate, "week")) {
    return messageDate.format("dddd");
  } else if (now.subtract(1, "week").isBefore(messageDate)) {
    return "Last week";
  } else {
    return messageDate.format("DD-MM-YYYY").replace(/-/g, "/");
  }
}

export function groupMessagesByDate(messages) {
  return messages?.reduce((groups, message) => {
    const dateLabel = formatDateLabel(message.timestamp);

    if (!groups[dateLabel]) {
      groups[dateLabel] = [];
    }

    return { ...groups, [dateLabel]: [...(groups[dateLabel] || []), message] };
  }, {});
}
