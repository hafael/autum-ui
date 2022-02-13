'use strict';

var vue = require('vue');

function render$7(_ctx, _cache) {
  return (vue.openBlock(), vue.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    vue.createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    })
  ]))
}

function render$6(_ctx, _cache) {
  return (vue.openBlock(), vue.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    vue.createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M6 18L18 6M6 6l12 12"
    })
  ]))
}

var script$5 = {

        name: 'NotificationIcon',

        components: {
            BellIcon: render$7,
        },

        props: {
            unreadNotifications: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                opened: false,
            }
        },

        methods: {
            toggleNotifications() {
                this.opened = !this.opened;
                this.$emit('toggle', this.opened);
            }
        }
    };

const _hoisted_1$5 = { class: "w-3 h-3 top-1 right-0 absolute" };
const _hoisted_2$5 = /*#__PURE__*/vue.createElementVNode("span", { class: "w-full h-full rounded-full bg-blue-200 dark:bg-blue-400 animate-ping absolute top-0 left-0" }, null, -1 /* HOISTED */);
const _hoisted_3$3 = /*#__PURE__*/vue.createElementVNode("span", { class: "w-3 h-3 rounded-full bg-blue-400 dark:bg-blue-600 absolute top-0 left-0" }, null, -1 /* HOISTED */);
const _hoisted_4$2 = [
  _hoisted_2$5,
  _hoisted_3$3
];

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BellIcon = vue.resolveComponent("BellIcon");

  return (vue.openBlock(), vue.createElementBlock("button", {
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.toggleNotifications && $options.toggleNotifications(...args))),
    class: "cursor-pointer relative inline-flex items-center justify-center p-2 text-gray-600 focus:text-gray-800 hover:text-gray-800 active:text-gray-800 dark:hover:text-gray-300 dark:active:text-gray-300"
  }, [
    vue.createVNode(_component_BellIcon, { class: "w-6 h-6" }),
    vue.withDirectives(vue.createElementVNode("span", _hoisted_1$5, _hoisted_4$2, 512 /* NEED_PATCH */), [
      [vue.vShow, $props.unreadNotifications]
    ])
  ]))
}

script$5.render = render$5;
script$5.__file = "src/js/Components/NotificationIcon.vue";

var script$4 = {
        emits: ['close'],

        props: {
            show: {
                default: false
            },
            maxWidth: {
                default: '2xl'
            },
            closeable: {
                default: true
            },
        },

        watch: {
            show: {
                immediate: true,
                handler: (show) => {
                    if (show) {
                        document.body.style.overflow = 'hidden';
                    } else {
                        document.body.style.overflow = null;
                    }
                }
            }
        },

        setup(props, {emit}) {
            const close = () => {
                if (props.closeable) {
                    emit('close');
                }
            };

            const closeOnEscape = (e) => {
                if (e.key === 'Escape' && props.show) {
                    close();
                }
            };

            vue.onMounted(() => document.addEventListener('keydown', closeOnEscape));
            vue.onUnmounted(() => {
                document.removeEventListener('keydown', closeOnEscape);
                document.body.style.overflow = null;
            });

            return {
                close,
            }
        },

        computed: {
            maxWidthClass() {
                return {
                    'sm': 'sm:max-w-sm',
                    'md': 'sm:max-w-md',
                    'lg': 'sm:max-w-lg',
                    'xl': 'sm:max-w-xl',
                    '2xl': 'sm:max-w-2xl',
                }[this.maxWidth]
            }
        }
    };

const _hoisted_1$4 = {
  class: "fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50",
  "scroll-region": ""
};
const _hoisted_2$4 = /*#__PURE__*/vue.createElementVNode("div", { class: "absolute inset-0 bg-gray-500 opacity-75" }, null, -1 /* HOISTED */);
const _hoisted_3$2 = [
  _hoisted_2$4
];

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
    vue.createVNode(vue.Transition, { "leave-active-class": "duration-200" }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("div", _hoisted_1$4, [
          vue.createVNode(vue.Transition, {
            "enter-active-class": "ease-out duration-300",
            "enter-from-class": "opacity-0",
            "enter-to-class": "opacity-100",
            "leave-active-class": "ease-in duration-200",
            "leave-from-class": "opacity-100",
            "leave-to-class": "opacity-0"
          }, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode("div", {
                class: "fixed inset-0 transform transition-all",
                onClick: _cache[0] || (_cache[0] = (...args) => ($setup.close && $setup.close(...args)))
              }, _hoisted_3$2, 512 /* NEED_PATCH */), [
                [vue.vShow, $props.show]
              ])
            ]),
            _: 1 /* STABLE */
          }),
          vue.createVNode(vue.Transition, {
            "enter-active-class": "ease-out duration-300",
            "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
            "leave-active-class": "ease-in duration-200",
            "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
            "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          }, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode("div", {
                class: vue.normalizeClass(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto dark:bg-gray-800 dark:text-white", $options.maxWidthClass])
              }, [
                ($props.show)
                  ? vue.renderSlot(_ctx.$slots, "default", { key: 0 })
                  : vue.createCommentVNode("v-if", true)
              ], 2 /* CLASS */), [
                [vue.vShow, $props.show]
              ])
            ]),
            _: 3 /* FORWARDED */
          })
        ], 512 /* NEED_PATCH */), [
          [vue.vShow, $props.show]
        ])
      ]),
      _: 3 /* FORWARDED */
    })
  ]))
}

script$4.render = render$4;
script$4.__file = "src/js/Jetstream/Modal.vue";

var script$3 = {
        emits: ['close'],

        components: {
            Modal: script$4,
            XIcon: render$6
        },

        props: {
            show: {
                default: false
            },
            maxWidth: {
                default: '2xl'
            },
            closeable: {
                default: true
            },
        },

        methods: {
            close() {
                this.$emit('close');
            },
        }
    };

const _hoisted_1$3 = { class: "px-6 pt-4 pb-3 flex justify-between items-center border-b border-gray-200 dark:border-gray-700" };
const _hoisted_2$3 = { class: "text-lg" };
const _hoisted_3$1 = { class: "p-6" };
const _hoisted_4$1 = { class: "px-6 py-4 bg-gray-100 text-right dark:bg-black" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_XIcon = vue.resolveComponent("XIcon");
  const _component_modal = vue.resolveComponent("modal");

  return (vue.openBlock(), vue.createBlock(_component_modal, {
    show: $props.show,
    "max-width": $props.maxWidth,
    closeable: $props.closeable,
    onClose: $options.close
  }, {
    default: vue.withCtx(() => [
      vue.createElementVNode("div", _hoisted_1$3, [
        vue.createElementVNode("div", _hoisted_2$3, [
          vue.renderSlot(_ctx.$slots, "title")
        ]),
        ($props.closeable)
          ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "close p-2 cursor-pointer",
              onClick: _cache[0] || (_cache[0] = (...args) => ($options.close && $options.close(...args)))
            }, [
              vue.createVNode(_component_XIcon, { class: "w-5 h-5 text-gray-600" })
            ]))
          : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("div", _hoisted_3$1, [
        vue.renderSlot(_ctx.$slots, "content")
      ]),
      vue.createElementVNode("div", _hoisted_4$1, [
        vue.renderSlot(_ctx.$slots, "footer")
      ])
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["show", "max-width", "closeable", "onClose"]))
}

script$3.render = render$3;
script$3.__file = "src/js/Jetstream/DialogModal.vue";

var script$2 = {
        props: {
            type: {
                type: String,
                default: 'submit',
            },
            href: {
                type: String,
                default: null,
            },
            alt: {},
            title: {},
        }
    };

const _hoisted_1$2 = ["type"];
const _hoisted_2$2 = ["href", "title", "alt"];

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (!$props.href)
    ? (vue.openBlock(), vue.createElementBlock("button", {
        key: 0,
        type: $props.type,
        class: "inline-flex items-center justify-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 dark:bg-gray-500 dark:hover:bg-gray-700 transition"
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 8 /* PROPS */, _hoisted_1$2))
    : (vue.openBlock(), vue.createElementBlock("a", {
        key: 1,
        class: "inline-flex items-center justify-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 dark:bg-gray-500 dark:hover:bg-gray-700 transition",
        href: $props.href,
        title: $props.title,
        alt: $props.title
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 8 /* PROPS */, _hoisted_2$2))
}

script$2.render = render$2;
script$2.__file = "src/js/Jetstream/Button.vue";

var script$1 = {
        props: {
            type: {
                type: String,
                default: 'button',
            },
            href: {
                type: String,
                default: null,
            },
            alt: {},
            title: {},
        }
    };

const _hoisted_1$1 = ["type"];
const _hoisted_2$1 = ["href", "title", "alt"];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (!$props.href)
    ? (vue.openBlock(), vue.createElementBlock("button", {
        key: 0,
        type: $props.type,
        class: "inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 dark:bg-gray-800 dark:text-gray-300 transition"
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 8 /* PROPS */, _hoisted_1$1))
    : (vue.openBlock(), vue.createElementBlock("a", {
        key: 1,
        class: "inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition",
        href: $props.href,
        title: $props.title,
        alt: $props.title
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 8 /* PROPS */, _hoisted_2$1))
}

script$1.render = render$1;
script$1.__file = "src/js/Jetstream/SecondaryButton.vue";

var script = {

        name: 'NotificationCentral',

        components: {
            JetDialogModal: script$3,
            JetButton: script$2,
            JetSecondaryButton: script$1
        },

        props: {
            notifications: {
                type: Object,
                default: {
                    data: [],
                    meta: {}
                }
            }
        },

        computed: {
            hasNotifications() {
                return !_.isEmpty(this.notifications.data);
            },

            hasUnreadNotications() {
                return !_.isEmpty(_.filter(this.notifications.data, (n) => {
                    return _.isEmpty(n.read_at);
                }));
            },

            showViewAllButton() {
                return _.size(this.filteredNotifications) <= 5;
            },

            filteredNotifications() {
                if(!this.viewAll) {
                    return _.slice(this.notifications.data, 0, 5);
                }
                return this.notifications.data;
            }
        },

        data() {
            return {
                reading: {},
                showingNotificationModal: false,
                viewAll: false
            }
        },

        methods: {
            openNotification(notification) {
                this.reading = Object.assign({}, notification);
                this.showingNotificationModal = true;
                setTimeout(() => {
                    if(this.showingNotificationModal) {
                        this.markAsRead();
                    }
                }, 1300);
            },

            closeNotification() {
                this.showingNotificationModal = false;
                this.reading = {};
            },
            
            markAsRead() {
                let self = this;

                axios.get(route('api.notifications.read', self.reading.id)).then((response) => {
                    console.log('markAsRead response', response);
                    self.$emit('update', response.data);
                }).catch((error) => {
                    console.log('markAsRead error', error);
                });
            },

            callToAction(url) {
                this.closeNotification();
                if(!_.isEmpty(url)) {
                    setTimeout(() => {
                        window.location.href = url;
                    }, 1500);
                }
            },

            closeNotificationCentral() {
                this.viewAll = false;
                this.$emit('close');
            },

            clearAllNotifications() {
                let self = this;

                axios.delete(route('api.notifications.clear')).then((response) => {
                    console.log('clearAllNotifications response', response);
                    self.$emit('update');
                }).catch((error) => {
                    console.log('clearAllNotifications error', error);
                });
            }
        }
    };

const _hoisted_1 = { class: "bg-gray-50 dark:bg-black" };
const _hoisted_2 = { class: "px-4 flex justify-between items-center" };
const _hoisted_3 = /*#__PURE__*/vue.createElementVNode("h3", { class: "text-md uppercase text-gray-400" }, "Notificações", -1 /* HOISTED */);
const _hoisted_4 = { class: "text-gray-700 dark:text-gray-400 px-4" };
const _hoisted_5 = { class: "mt-3 space-y-1 divide-y divide-gray-200" };
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { class: "relative w-3 mr-3" };
const _hoisted_8 = { class: "w-3 h-3 top-2 absolute" };
const _hoisted_9 = {
  key: 0,
  class: "w-full h-full rounded-full bg-red-100 dark:bg-red-200 animate-ping absolute top-0 left-0"
};
const _hoisted_10 = { class: "flex justify-between w-full" };
const _hoisted_11 = { class: "text-md font-semibold" };
const _hoisted_12 = { class: "text-sm text-gray-600 dark:text-gray-400" };
const _hoisted_13 = { class: "text-right w-20" };
const _hoisted_14 = { class: "text-xs text-gray-400" };
const _hoisted_15 = { class: "text-xs text-gray-400" };
const _hoisted_16 = {
  key: 0,
  class: "flex justify-between mx-4 mb-2 mt-3"
};
const _hoisted_17 = /*#__PURE__*/vue.createTextVNode(" Notificação ");
const _hoisted_18 = { class: "text-2xl font-bold mb-3" };
const _hoisted_19 = { class: "text-xl font-semibold text-gray-500 dark:text-gray-200 mb-3" };
const _hoisted_20 = ["innerHTML"];
const _hoisted_21 = { class: "text-gray-500 text-sm" };
const _hoisted_22 = /*#__PURE__*/vue.createTextVNode(" Fechar ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_jet_secondary_button = vue.resolveComponent("jet-secondary-button");
  const _component_jet_button = vue.resolveComponent("jet-button");
  const _component_jet_dialog_modal = vue.resolveComponent("jet-dialog-modal");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      _hoisted_3,
      vue.createElementVNode("a", {
        href: "#",
        onClick: _cache[0] || (_cache[0] = (...args) => ($options.closeNotificationCentral && $options.closeNotificationCentral(...args))),
        class: "text-sm font-bold uppercase text-indigo-500 hover:underline"
      }, "Fechar")
    ]),
    vue.withDirectives(vue.createElementVNode("p", _hoisted_4, "Nenhuma notificação nova.", 512 /* NEED_PATCH */), [
      [vue.vShow, !$options.hasUnreadNotications]
    ]),
    vue.createElementVNode("div", _hoisted_5, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.filteredNotifications, (notification) => {
        return (vue.openBlock(), vue.createElementBlock("div", {
          class: "flex px-4 py-2 cursor-pointer bg-white dark:bg-gray-900",
          key: notification.id,
          onClick: $event => ($options.openNotification(notification))
        }, [
          vue.createElementVNode("span", _hoisted_7, [
            vue.createElementVNode("span", _hoisted_8, [
              (!notification.read_at)
                ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_9))
                : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("span", {
                class: vue.normalizeClass(["w-3 h-3 rounded-full absolute top-0 left-0", {
                                'bg-red-200 dark:bg-red-300': !notification.read_at,
                                'bg-blue-200 dark:bg-blue-300': notification.read_at
                             }])
              }, null, 2 /* CLASS */)
            ])
          ]),
          vue.createElementVNode("div", _hoisted_10, [
            vue.createElementVNode("div", null, [
              vue.createElementVNode("h3", _hoisted_11, vue.toDisplayString(notification.data.subject), 1 /* TEXT */),
              vue.createElementVNode("p", _hoisted_12, vue.toDisplayString(notification.data.greeting), 1 /* TEXT */)
            ]),
            vue.createElementVNode("div", _hoisted_13, [
              vue.createElementVNode("p", _hoisted_14, vue.toDisplayString(_ctx.$filters.fromDateTime(notification.created_at, 'd/m/Y')), 1 /* TEXT */),
              vue.createElementVNode("p", _hoisted_15, vue.toDisplayString(_ctx.$filters.fromDateTime(notification.created_at, 'HH:mm')), 1 /* TEXT */)
            ])
          ])
        ], 8 /* PROPS */, _hoisted_6))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    ($options.hasNotifications)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_16, [
          vue.withDirectives(vue.createElementVNode("a", {
            href: "#",
            onClick: _cache[1] || (_cache[1] = $event => ($data.viewAll = true)),
            class: "text-sm font-bold text-indigo-500 hover:underline"
          }, "Ver mais", 512 /* NEED_PATCH */), [
            [vue.vShow, $options.showViewAllButton]
          ]),
          vue.createElementVNode("a", {
            href: "#",
            onClick: _cache[2] || (_cache[2] = (...args) => ($options.clearAllNotifications && $options.clearAllNotifications(...args))),
            class: "text-sm font-bold text-red-500 hover:underline"
          }, "Limpar")
        ]))
      : vue.createCommentVNode("v-if", true),
    vue.createCommentVNode(" Show Notification Modal "),
    vue.createVNode(_component_jet_dialog_modal, {
      show: $data.showingNotificationModal,
      onClose: $options.closeNotification
    }, {
      title: vue.withCtx(() => [
        _hoisted_17
      ]),
      content: vue.withCtx(() => [
        vue.createElementVNode("h3", _hoisted_18, vue.toDisplayString($data.reading.data.subject), 1 /* TEXT */),
        vue.createElementVNode("h4", _hoisted_19, vue.toDisplayString($data.reading.data.greeting), 1 /* TEXT */),
        vue.createElementVNode("div", {
          class: "block relative my-2 text-gray-800 dark:text-gray-300",
          innerHTML: $data.reading.data.body
        }, null, 8 /* PROPS */, _hoisted_20),
        vue.createElementVNode("p", _hoisted_21, vue.toDisplayString(_ctx.$filters.fromDateTime($data.reading.created_at)), 1 /* TEXT */)
      ]),
      footer: vue.withCtx(() => [
        vue.createVNode(_component_jet_secondary_button, {
          onClick: $options.closeNotification,
          class: "mr-2"
        }, {
          default: vue.withCtx(() => [
            _hoisted_22
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"]),
        vue.createVNode(_component_jet_button, {
          onClick: _cache[3] || (_cache[3] = $event => ($options.callToAction($data.reading.data.action_url)))
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString($data.reading.data.action_text), 1 /* TEXT */)
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["show", "onClose"])
  ]))
}

script.render = render;
script.__file = "src/js/Components/NotificationCentral.vue";

var components = { NotificationIcon: script$5, NotificationCentral: script };

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
