/* class combiner */
export function cls(...input) {
  return input.map((cond) => {
    if (typeof cond === 'object') {
      return Object.keys(cond).filter(key => cond[key] === true).join(" ");
    }
    return cond;
  }).join(" ")
};
