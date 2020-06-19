import Verify from './Verify';
import { AssertException } from '../Exception/AssertException';

export default abstract class Assert {
  public static notNull(value: any, errorMessage = 'Not Null assertion failed'): void {
    if (Verify.isNull(value)) {
      throw new AssertException(errorMessage);
    }
  }

  /**
   * @param value
   * @param options default values<ul>
   *   <li><b>errorMessage: </b>Not Empty assertion failed</li>
   *   <li><b>handleNull: </b>true</li>
   * </ul>
   */
  public static notBlank(value: string | null | undefined, options?: AssertOptions) {
    const errorMessage = options?.errorMessage || 'Not Empty assertion failed';
    const handleNull = options?.handleNull || true;

    if (handleNull) Assert.notNull(value);

    if(value!.toString().replace(/\s/g, '').length) {
      throw new AssertException(errorMessage);
    }
  }
}

interface AssertOptions {
  errorMessage?: string;
  handleNull?: boolean;
}
