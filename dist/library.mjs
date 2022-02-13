import { NotificationIcon } from '@/Components/NotificationIcon';
import { NotificationCentral } from '@/Components/NotificationCentral';

var components = { NotificationIcon, NotificationCentral };

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

export { plugin as default };
