import Assert from './validation/Assert';

export default abstract class EnvironmentVariables {
  protected getVariable(name: string): string {
    const env = process.env[name];
    Assert.notBlank(env, { errorMessage: `Environment Variable [${ name }] Not Fount` });

    // @ts-ignore
    return env;
  }
}
