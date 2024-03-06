export const classList = (...args: Array<string | undefined>) => ({ className: args.filter(arg => arg).join(' ') })