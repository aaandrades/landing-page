export const calcX = (y: number, ly: number) =>
  -(y - ly - window.innerHeight / 2) / 20;

export const calcY = (x: number, lx: number) =>
  (x - lx - window.innerWidth / 2) / 20;
