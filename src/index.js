function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({default: _}) => {
    const element = document.createElement('div')

    // lodash，现在通过一个 script 引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    return element
  }).catch(error => 'An error occurred while loading the component')

}

getComponent().then(component => {
  document.body.appendChild(component)
})
