export default class ErrorHandler {
  static async run<T>(run: Function, fallback: T, errorMessage?: string): Promise<T> {
    try {
      return await run().data;
    } catch (error) {
      errorMessage ? console.error(errorMessage) : console.error(error);
      return fallback;
    }
  }
}
