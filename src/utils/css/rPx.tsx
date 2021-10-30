// pixel to rem
export const rPx = (px: number): number => {
  const rem = (1 / 16) * px;
  return rem;
};
