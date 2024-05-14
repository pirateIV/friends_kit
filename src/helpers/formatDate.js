import { format } from "date-fns";

const formatPostCreatedTime = (date) => format(date, "dd MMMM 'at' HH:mm");

export default formatPostCreatedTime;
