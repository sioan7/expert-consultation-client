export class Tools {

  /**
   * Gets a property safely or the default value if provided.
   */
  static safeGet<T>(getter: () => T, defaultValue?: T): T {
    try {
      const value: T = getter();
      return (value === null || value === undefined) ? defaultValue : value;
    } catch (e) {
      return defaultValue;
    }
  }
}
