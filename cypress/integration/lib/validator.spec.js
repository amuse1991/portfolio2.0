import validator from "../../../lib/validator";
import { Either } from "fp-ts/Either";

describe("validator.ts", () => {
  it(".isDef(i) :: !undefined 확인 후, boolean 반환", () => {
    const { isDef } = validator;
    expect(isDef(undefined)).to.be.false;
    expect(isDef("abc")).to.be.true;
  });

  it(".isNotNull(i) :: !null 확인 후, boolean 반환", () => {
    const { isNotNull } = validator;
    expect(isNotNull(null)).to.be.false;
    expect(isNotNull("abc")).to.be.true;
  });

  it(".hasValue(i) :: !undefined && !null 확인 후 boolean 반환", () => {
    const { hasValue } = validator;
    expect(hasValue(null)).to.be.false;
    expect(hasValue(undefined)).to.be.false;
    expect(hasValue("abc")).to.be.true;
  });

  context(".hasValueEither :: ", () => {
    it("값이 있을 경우 { right : 값 } 객체 반환", () => {
      const { hasValueEither } = validator;
      const value = "abc";

      const result = hasValueEither(value);

      expect(result).to.have.property("right");
      expect(result.right).to.eql(value);
    });

    it("값이 null일 경우 { left : Error } 객체 반환", () => {
      const { hasValueEither } = validator;
      const value = null;

      const result = hasValueEither(value);

      expect(result).to.have.property("left");
      expect(result.left).to.be.instanceOf(Error);
    });

    it("값이 undefined일 경우 { left : Error } 객체 반환", () => {
      const { hasValueEither } = validator;
      const value = undefined;

      const result = hasValueEither(value);

      expect(result).to.have.property("left");
      expect(result.left).to.be.instanceOf(Error);
    });
  });
});
