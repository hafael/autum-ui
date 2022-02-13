'use strict';

var NotificationIcon = require('@/Components/NotificationIcon');
var NotificationCentral = require('@/Components/NotificationCentral');

var components = { NotificationIcon: NotificationIcon.NotificationIcon, NotificationCentral: NotificationCentral.NotificationCentral };

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

module.exports = plugin;
