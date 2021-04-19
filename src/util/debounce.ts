export const debounce = (fn: any, wait: number) => {
  let t: any
  return (...args: any) => {
    clearTimeout(t)
    t = setTimeout(() => fn.apply(this, args), wait)
  }
}
