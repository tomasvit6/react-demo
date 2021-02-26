import { is } from 'ramda';

export const vertical = (val = 20): number[] => [val, 0];
export const horizontal = (val = 20): number[] => [0, val];
export const topAndHorizontal = (val = 20): number[] => [val, val, 0, val];
export const bottomAndHorizontal = (val = 20): number[] => [0, val, val, val];
export const onlyTop = (val = 5): number[] => [val, val, 0, 0];
export const onlyBottom = (val = 5): number[] => [0, 0, val, val];
export const onlyLeft = (val = 5): number[] => [val, 0, 0, val];
export const onlyRight = (val = 5): number[] => [0, val, val, 0];
export const border = (color: string, size = 1, type = 'solid'): string => `${size}px ${type} ${color}`;
export const transition = (timingInMs = 150, property = 'all', mode = 'linear'): string =>
  `${property} ${timingInMs}ms ${mode}`;

export const setProp = (
  obj: Record<string, any>,
  key: string,
  value: number | string | boolean,
): Record<string, any> => {
  if (value) {
    obj[key] = value;
  }

  return obj;
};

export const toCssValue = (value: number | 'auto' | (number | 'auto')[], important = false): string => {
  let cssRule: string;

  if (is(Array, value)) {
    cssRule = (value as (number | 'auto')[]).map((v) => (is(Number, v) ? ` ${v}px` : ` ${v}`)).join(' ');
  } else {
    cssRule = is(Number, value) ? `${value}px` : value.toString();
  }
  if (important) {
    cssRule += ' !important';
  }

  return cssRule;
};
