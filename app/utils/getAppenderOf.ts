export function getAppenderOf(domElement) {
  return function(parentDomElement) {
    parentDomElement.appendChild(domElement);
  };
}
