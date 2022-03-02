export const hexToRgba = (hexCode: string, a: number = 0) => {
  if (hexCode.includes("#")) {
    hexCode = hexCode.slice(1);
  }
  const codes = hexCode.match(/\w{2}/g);
  if (!codes) throw new Error(`${hexCode}는 잘못된 색상 값입니다.`);
  const [r, g, b] = codes.map(code => parseInt(code, 16));
  return `(${r},${g},${b},${a})`;
};
