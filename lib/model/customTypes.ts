import mongoose from "mongoose";

export default class TechTags extends mongoose.SchemaType {
  constructor(key: any, options: any) {
    super(key, options, "TechTags");
  }

  // `cast()` takes a parameter that can be anything. You need to
  // validate the provided `val` and throw a `CastError` if you
  // can't convert it.
  cast(val: any) {
    let _val = Number(val);
    if (isNaN(_val)) {
      throw new Error("TechTags: " + val + " is not a number");
    }
    _val = Math.round(_val);
    if (_val < -0x80 || _val > 0x7f) {
      throw new Error(
        "TechTags: " + val + " is outside of the range of valid 8-bit ints"
      );
    }
    return _val;
  }
}
