import {getAppenderOf} from "app/utils/getAppenderOf";
import {getStylerOf} from "app/utils/getStylerOf";
import {getRemoverOf} from "app/utils/getRemoverOf";

export function WidgetRole(domElement) {
  this.appendTo = getAppenderOf(domElement);

  this.insertAfter = function(siblingDOMElement) {
    siblingDOMElement.parentNode.insertBefore(domElement, siblingDOMElement.nextSibling);
  };

  this.setInternalName = function(internalName) {
    domElement.setAttribute('internal-name', internalName);
  };

  this.setStyle = getStylerOf(domElement);

  this.hide = function() {
    domElement.style.display = 'none';
  };

  this.show = function() {
    domElement.style.display = '';
  };

  this.isShown = function() {
    return domElement.style.display !== 'none';
  };

  this.toggle = function() {
    var style = domElement.style;
    style.display = style.display === 'none' ? '' : 'none';
  };

  this.remove = getRemoverOf(domElement);
}
