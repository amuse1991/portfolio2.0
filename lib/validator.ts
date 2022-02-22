import { Either, left, right } from "fp-ts/lib/Either";
import * as R from "ramda";

export const isDef = item => !R.equals(item, undefined);
export const isNotNull = item => !R.equals(item, null);
export const hasValue = item => R.allPass([isDef, isNotNull])(item);
export const hasValueEither = (item): Either<typeof item, Error> =>
  hasValue(item) ? right(item) : left(new Error("item is undefined or null"));

const validator = {
  isDef,
  isNotNull,
  hasValue,
  hasValueEither
};

export default validator;
