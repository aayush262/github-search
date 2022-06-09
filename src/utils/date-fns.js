import { format, parseISO } from "date-fns";

export const dateFns = {
  formatDate: (datetime) => {
    return format(parseISO(datetime), "MM/dd/yyyy");
  },
};
