import { format } from "date-fns";

const formatPostCreatedTime = (date) => {
  return format(date, "dd MMMM 'at' hh:mm aa");
};

export default formatPostCreatedTime;
