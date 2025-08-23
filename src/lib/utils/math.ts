// Safe rounding utility
export const round2 = (v: number): number =>
  Math.round((v + Number.EPSILON) * 100) / 100;
