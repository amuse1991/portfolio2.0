export const dpToRem = (dp: number) => `${dp * 0.0625}rem`;

const space = {
  small: dpToRem(4),
  normal: dpToRem(8),
  large: dpToRem(16),
  xLarge: dpToRem(24)
};

export default space;
