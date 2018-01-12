/**
 * Indicates that a hardware feature must not be used.
 *
 * @author nmaerchy <nm@studer-raimann.ch>
 * @version 1.0.0
 */
export class HardwareAccessError extends Error {

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, HardwareAccessError.prototype);
  }
}

/**
 * Indicates that the location must not be used.
 *
 * @author nmaerchy <nm@studer-raimann.ch>
 * @version 1.0.0
 */
export class LocationAccessError extends HardwareAccessError {

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, LocationAccessError.prototype);
  }
}
