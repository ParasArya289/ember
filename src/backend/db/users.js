import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    avatar:
      "https://pbs.twimg.com/profile_images/1605458814068674563/V2sT6f64_400x400.jpg",
    firstName: "Paras",
    lastName: "Arya",
    username: "parasarya",
    password: "parasarya123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
