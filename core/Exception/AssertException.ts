export class AssertException extends Exception {
  public constructor(
    public readonly message: string
  ) {
    super(message, null);
  }
}
