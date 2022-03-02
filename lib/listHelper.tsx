import { nanoid } from "@reduxjs/toolkit";
import * as R from "ramda";

export const strToLi = (str: string) => <li key={nanoid()}>{str}</li>;
export const arrToLi = (items: string[]) => items.map(item => strToLi(item));
