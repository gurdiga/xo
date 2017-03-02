import * as _ from "lodash";
import * as moment from "moment";
import {WidgetRole} from "app/widgets/WidgetRole";
import {createDOMElement} from "app/utils/createDOMElement";
import {delegateTo} from "app/utils/delegateTo";
import {assert} from "app/utils/assert";

export function CompletionLabel(completionTime) {
  assert(_.isDate(completionTime), 'CompletionLabel expects the completionTime argument to be a Date object');

  var domElement = createElement();
  WidgetRole.apply(this, [domElement]);

  addContent(domElement, completionTime);

  this.getData = delegateTo(completionTime, 'toISOString');
}

function createElement() {
  var style = {
    'font-size': '12px',
    'color': 'gray'
  };

  return createDOMElement('completion-label', style);
}

function addContent(domElement, completionTime) {
  var content = document.createDocumentFragment();
  var preposition = document.createTextNode('completat la ');
  var timeElement = createTimeElement(completionTime);

  content.appendChild(preposition);
  content.appendChild(timeElement);
  domElement.appendChild(content);
}

function createTimeElement(completionTime) {
  var timeElement = document.createElement('time');

  var humanReadableTimestamp = moment(completionTime).format('DD.MM.YYYY HH:mm');
  var internalTimestamp = completionTime.toISOString();

  timeElement.textContent = humanReadableTimestamp;
  timeElement.setAttribute('datetime', internalTimestamp);

  return timeElement;
}
