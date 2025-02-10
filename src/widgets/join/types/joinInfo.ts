import { JOINCONTENT } from "../model/constants";

export type JoinInfo = {
  [key in (typeof JOINCONTENT)[number]]: string | number;
};
