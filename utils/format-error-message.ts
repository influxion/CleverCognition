export function formatErrorMessage(err: Error): string {
    return JSON.stringify(err, Object.getOwnPropertyNames(err));
  }