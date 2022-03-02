import { hexToRgba } from "../../../lib/hexToRgba";

describe("hexToRgba", () => {
  it("hex색상값을 넣으면 rgb값을 반환한다.", () => {
    const redHex = "#FF0000";
    expect(hexToRgba(redHex)).to.equal("(255,0,0,0)");
  });

  it("hex색상값과 a값을 넣으면 rgba값을 반환한다.", () => {
    const redHex = "#FF0000";
    expect(hexToRgba(redHex, 0.2)).to.equal("(255,0,0,0.2)");
  });
});
