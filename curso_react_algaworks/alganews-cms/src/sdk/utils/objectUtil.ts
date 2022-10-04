export function isNull(value: any): boolean {
  return value === null || value === undefined;
}

export function nonNull(value: any): boolean {
  return isFalse(isNull(value));
}

export function isTrue(value: boolean): boolean {
  return value;
}

export function isFalse(value: boolean): boolean {
  return !isTrue(value);
}
