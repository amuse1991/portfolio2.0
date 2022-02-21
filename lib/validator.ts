import { Either, left, right } from "fp-ts/lib/Either";
import * as R from "ramda";

const isDef = item => !R.equals(item, undefined);
const isNotNull = item => !R.equals(item, null);
const hasValue = item => R.allPass([isDef, isNotNull])(item);
const hasValueEither = (item): Either<typeof item, Error> =>
  hasValue(item) ? right(item) : left(new Error("item is undefined or null"));

const validator = {
  isDef,
  isNotNull,
  hasValue,
  hasValueEither
};

export default validator;
