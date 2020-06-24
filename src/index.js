import _ from 'lodash'
// import Print from './print.js'

function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  // lodash，现在通过一个 script 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  // element.onclick = Print.bind(null, 'Hello webpack!')

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
