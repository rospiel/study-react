export function isNull(value: any): boolean {
  return (typeof value === 'object' && value === null) || value === undefined;
}

export function nonNull(value: any): boolean {
  return !isNull(value);
}

export function isTrue(value: boolean): boolean {
  return nonNull(value) && value === true;
}

export function isFalse(value: boolean): boolean {
  return !isTrue(value);
}

export function isEmpty(value: string): boolean {
  return isNull(value) || value.length === 0;
}