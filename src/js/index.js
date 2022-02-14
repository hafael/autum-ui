import components from './components'

const AutumUI = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        Vue.component(component.name, component)
      }
    }
  }
}

export default AutumUI