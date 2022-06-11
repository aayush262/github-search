import { decode } from "js-base64";

export const base64 = {
  decoder: (content) => {
    return decode(content);
  },
};
