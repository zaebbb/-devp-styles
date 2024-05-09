const o = (s, t, a) => [
  s,
  ...Object.entries(t).filter(([e, n]) => !!n).map(([e]) => e),
  ...a
].join(" "), c = {
  classNames: o
};
export {
  o as classNames,
  c as default
};
