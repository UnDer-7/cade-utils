abstract class Exception extends Error {
  protected constructor(
    public readonly message: string,
    public readonly error: any,
  ) {
    super(message);

    console.warn('Thrown error: ', error);
  }
}
