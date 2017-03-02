export function ifKey(code, handler) {
  return function(e) {
    if (e.code === code) {
      e.preventDefault();

      handler();
    }
  };
}
