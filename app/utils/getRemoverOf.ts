export function getRemoverOf(domElement) {
  return function() {
    domElement.parentNode.removeChild(domElement);
  };
}
