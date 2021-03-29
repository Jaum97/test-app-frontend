/**
 * generates a 10 - 11 random string to use as id
 * @param prefix prefix before id
 * @example
 * getRandomId('component') // component-7zjmd0ux1cf
 */
export function getRandomId(prefix?: string): string {
  const id = Math.random().toString(36).substring(2, 15);

  return `${prefix}${prefix ? "-" : ""}${id}`;
}
