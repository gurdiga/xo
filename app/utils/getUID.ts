var sequence = 1;

export function getUID() {
  return 'uid' + ++sequence;
}
