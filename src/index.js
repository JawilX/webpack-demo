import { cube } from "./math.js";

function component() {
  const element = document.createElement('pre')

  // lodash，现在通过一个 script 引入
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')

  return element
}

document.body.appendChild(component())
