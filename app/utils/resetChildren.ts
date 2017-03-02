import {appendWidgets} from "app/utils/appendWidgets";
import {emptyDOMElement} from "app/utils/emptyDOMElement";

export function resetChildren(domElement, children) {
  emptyDOMElement(domElement);
  appendWidgets(children).to(domElement);
}
