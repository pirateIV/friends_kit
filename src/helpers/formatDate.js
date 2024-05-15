import { format, formatDistanceToNow } from "date-fns";

const formatPostCreatedTime = (date) => {
  return format(date, "dd MMMM 'at' hh:mm aa");
};

function formatPostDate(postDate) {
  const currentDate = new Date();

  // Calculate the distance between the post date and the current date
  const distance = formatDistanceToNow(postDate, { addSuffix: true });
  // console.log(distance)

  // // Return the formatted date based on the distance
  // if (distance.includes('minute') || distance.includes('hour')) {
  //     return distance;
  // } else if (distance.includes('1 day ago')) {
  //     return `Yesterday at ${format(postDate, "dd MMMM")}`;
  // } else if (distance.includes('month') || distance.includes('year')) {
  //     return postDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  // }
  return distance;
}

export { formatPostCreatedTime, formatPostDate };
