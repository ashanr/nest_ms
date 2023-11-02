/**
 * Validates the latitude value.
 * @param {string} latitude - The latitude to validate.
 * @returns {boolean} - Returns true if valid, false otherwise.
 */
export function isValidLatitude(latitude: string): boolean {
    const lat = Number(latitude);
    return lat >= -90 && lat <= 90;
  }
  
  /**
   * Validates the longitude value.
   * @param {string} longitude - The longitude to validate.
   * @returns {boolean} - Returns true if valid, false otherwise.
   */
  export function isValidLongitude(longitude: string): boolean {
    const lon = Number(longitude);
    return lon >= -180 && lon <= 180;
  }
  