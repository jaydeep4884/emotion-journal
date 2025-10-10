import { createContext } from "react";

export const token = createContext("AvD5BtTs4JYEu7Xp");
export const auth = createContext(localStorage.getItem("token") ? true : false);
