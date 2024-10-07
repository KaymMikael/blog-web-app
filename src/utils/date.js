import { format } from "date-fns";

export const formatBlogDate = (date) => format(new Date(date), "E MMM d, y");
export const getTimeStamp = (date) => format(date, "yyyy-MM-dd HH:mm:ss");
