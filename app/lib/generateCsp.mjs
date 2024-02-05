/**
 * @typedef {Record<string, string>} CspSet
 * @typedef {Array<CspSet>} CspSets
 *
 * @param {CspSets} sets
 * @returns {string}
 */
export const generateCsp = (sets) => {
  /** @type {Map<string, Set<string>>} */
  const map = new Map();

  for (const set of sets) {
    for (const [key, values] of Object.entries(set)) {
      if (!map.has(key)) {
        map.set(key, new Set());
      }

      for (const value of values.split(" ").filter((value) => value !== "")) {
        // @ts-expect-error The if statement above guarantees that the key exists
        map.get(key).add(value);
      }
    }
  }

  return (
    Array.from(map)
      .map(([key, values]) => {
        const array = Array.from(values);
        return array.length > 0 ? `${key} ${array.join(" ")}` : key;
      })
      .join("; ") + ";"
  );
};
