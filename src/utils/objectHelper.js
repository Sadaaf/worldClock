/**
 *
 * @param {Object} object - the object to make copy of
 * @returns {Object} The instance of deep copied object
 */
export const deepCopyObject = (object) => JSON.parse(JSON.stringify(object));
