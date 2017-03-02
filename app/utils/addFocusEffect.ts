import {toggleStyle} from "app/utils/toggleStyle";

export function addFocusEffect(domElement, style) {
  toggleStyle(domElement, style, 'focus', 'blur');
  domElement.setAttribute('has-on-focus-effect', '');
}
