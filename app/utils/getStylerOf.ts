import {addStyle} from "app/utils/addStyle";

export function getStylerOf(domElement) {
  return function(style) {
    addStyle(domElement, style);
  };
}

