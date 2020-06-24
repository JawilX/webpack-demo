import _ from 'lodash'

function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  // lodash，现在通过一个 script 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
