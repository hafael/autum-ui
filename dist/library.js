'use strict';

var vue = require('vue');

var script$J = {
    props: {
        align: {
            default: 'right'
        },
        width: {
            default: '48'
        },
        contentClasses: {
            default: () => ['py-1', 'bg-white']
        }
    },

    setup() {
        let open = vue.ref(false);

        const closeOnEscape = (e) => {
            if (open.value && e.keyCode === 27) {
                open.value = false;
            }
        };

        vue.onMounted(() => document.addEventListener('keydown', closeOnEscape));
        vue.onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));

        return {
            open,
        }
    },

    computed: {
        widthClass() {
            return {
                '48': 'w-48',
            }[this.width.toString()]
        },

        alignmentClasses() {
            if (this.align === 'left') {
                return 'origin-top-left left-0'
            } else if (this.align === 'right') {
                return 'origin-top-right right-0'
            } else {
                return 'origin-top'
            }
        },
    }
};

const _hoisted_1$H = { class: "relative" };

function render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$H, [
    vue.createElementVNode("div", {
      onClick: _cache[0] || (_cache[0] = $event => ($setup.open = ! $setup.open))
    }, [
      vue.renderSlot(_ctx.$slots, "trigger")
    ]),
    vue.createCommentVNode(" Full Screen Dropdown Overlay "),
    vue.withDirectives(vue.createElementVNode("div", {
      class: "fixed inset-0 z-40",
      onClick: _cache[1] || (_cache[1] = $event => ($setup.open = false))
    }, null, 512 /* NEED_PATCH */), [
      [vue.vShow, $setup.open]
    ]),
    vue.createVNode(vue.Transition, {
      "enter-active-class": "transition ease-out duration-200",
      "enter-from-class": "transform opacity-0 scale-95",
      "enter-to-class": "transform opacity-100 scale-100",
      "leave-active-class": "transition ease-in duration-75",
      "leave-from-class": "transform opacity-100 scale-100",
      "leave-to-class": "transform opacity-0 scale-95"
    }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("div", {
          class: vue.normalizeClass(["absolute z-50 mt-2 rounded-md shadow-lg", [$options.widthClass, $options.alignmentClasses]]),
          style: {"display":"none"},
          onClick: _cache[2] || (_cache[2] = $event => ($setup.open = false))
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["rounded-md ring-1 ring-black ring-opacity-5", $props.contentClasses])
          }, [
            vue.renderSlot(_ctx.$slots, "content")
          ], 2 /* CLASS */)
        ], 2 /* CLASS */), [
          [vue.vShow, $setup.open]
        ])
      ]),
      _: 3 /* FORWARDED */
    })
  ]))
}

script$J.render = render$Z;
script$J.__file = "src/js/Jetstream/Dropdown.vue";

var script$I = {
        props: ['href', 'as'],
        computed: {
            hasIcon() {
                return !! this.$slots.icon
            }
        }
    };

const _hoisted_1$G = {
  key: 0,
  type: "submit",
  class: "block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
};
const _hoisted_2$t = { class: "w-full flex items-center" };
const _hoisted_3$m = {
  key: 0,
  class: "mr-2"
};
const _hoisted_4$f = ["href"];
const _hoisted_5$8 = { class: "w-full flex items-center" };
const _hoisted_6$7 = {
  key: 0,
  class: "mr-2"
};
const _hoisted_7$6 = { class: "w-full flex items-center" };
const _hoisted_8$5 = {
  key: 0,
  class: "mr-2"
};

function render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_inertia_link = vue.resolveComponent("inertia-link");

  return (vue.openBlock(), vue.createElementBlock("div", null, [
    ($props.as == 'button')
      ? (vue.openBlock(), vue.createElementBlock("button", _hoisted_1$G, [
          vue.createElementVNode("div", _hoisted_2$t, [
            ($options.hasIcon)
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$m, [
                  vue.renderSlot(_ctx.$slots, "icon")
                ]))
              : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "default")
          ])
        ]))
      : ($props.as =='a')
        ? (vue.openBlock(), vue.createElementBlock("a", {
            key: 1,
            href: $props.href,
            class: "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
          }, [
            vue.createElementVNode("div", _hoisted_5$8, [
              ($options.hasIcon)
                ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$7, [
                    vue.renderSlot(_ctx.$slots, "icon")
                  ]))
                : vue.createCommentVNode("v-if", true),
              vue.renderSlot(_ctx.$slots, "default")
            ])
          ], 8 /* PROPS */, _hoisted_4$f))
        : (vue.openBlock(), vue.createBlock(_component_inertia_link, {
            key: 2,
            href: $props.href,
            class: "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("div", _hoisted_7$6, [
                ($options.hasIcon)
                  ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8$5, [
                      vue.renderSlot(_ctx.$slots, "icon")
                    ]))
                  : vue.createCommentVNode("v-if", true),
                vue.renderSlot(_ctx.$slots, "default")
              ])
            ]),
            _: 3 /* FORWARDED */
          }, 8 /* PROPS */, ["href"]))
  ]))
}

script$I.render = render$Y;
script$I.__file = "src/js/Jetstream/DropdownLink.vue";

function render$X(_ctx, _cache) {
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

function render$W(_ctx, _cache) {
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
      d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    })
  ]))
}

function render$V(_ctx, _cache) {
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
      d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    }),
    vue.createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    })
  ]))
}

function render$U(_ctx, _cache) {
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
      d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
    })
  ]))
}

function render$T(_ctx, _cache) {
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
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    }),
    vue.createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    })
  ]))
}

function render$S(_ctx, _cache) {
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
      d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    })
  ]))
}

function render$R(_ctx, _cache) {
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
      d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    })
  ]))
}

function render$Q(_ctx, _cache) {
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
      d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    })
  ]))
}

function render$P(_ctx, _cache) {
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
      d: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
    })
  ]))
}

function render$O(_ctx, _cache) {
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
      d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    })
  ]))
}

function render$N(_ctx, _cache) {
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
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ]))
}

function render$M(_ctx, _cache) {
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
      d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
    })
  ]))
}

function render$L(_ctx, _cache) {
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
      d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]))
}

function render$K(_ctx, _cache) {
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
      d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    })
  ]))
}

function render$J(_ctx, _cache) {
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

function render$I(_ctx, _cache) {
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
      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
    })
  ]))
}

var script$H = {
        name: 'NavbarSettingsDropdown',

        components: {
            JetDropdown: script$J,
            JetDropdownLink: script$I,
            BriefcaseIcon: render$W,
            CogIcon: render$V,
            UserCircleIcon: render$L,
            PuzzleIcon: render$P,
            UserAddIcon: render$M, 
            UserGroupIcon: render$K, 
            LogoutIcon: render$S
        },

        methods: {
            profileIs(profile) {
                return _.includes(this.$page.props.user.profiles, profile);
            },
            logout() {
                axios.post(route('logout')).then((response) => {
                    window.location.replace('/');
                }).catch((error) => {
                    this.$inertia.post(route('logout'));
                });
            },
        }
    };

const _hoisted_1$F = {
  key: 0,
  class: "flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
};
const _hoisted_2$s = ["src", "alt"];
const _hoisted_3$l = {
  key: 1,
  class: "inline-flex rounded-md"
};
const _hoisted_4$e = {
  type: "button",
  class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"
};
const _hoisted_5$7 = /*#__PURE__*/vue.createElementVNode("svg", {
  class: "ml-2 -mr-0.5 h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /*#__PURE__*/vue.createElementVNode("path", {
    "fill-rule": "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })
], -1 /* HOISTED */);
const _hoisted_6$6 = { class: "block px-4 py-2 text-xs text-gray-400 border-b border-gray-200" };
const _hoisted_7$5 = { class: "block w-full truncated" };
const _hoisted_8$4 = { class: "block w-full truncated" };
const _hoisted_9$4 = /*#__PURE__*/vue.createTextVNode(" Área do Gerente ");
const _hoisted_10$4 = /*#__PURE__*/vue.createTextVNode(" Área Administrativa ");
const _hoisted_11$3 = /*#__PURE__*/vue.createTextVNode(" Meu Perfil ");
const _hoisted_12$3 = /*#__PURE__*/vue.createTextVNode(" Meus Contatos ");
const _hoisted_13$3 = /*#__PURE__*/vue.createTextVNode(" API ");
const _hoisted_14$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "border-t border-gray-100" }, null, -1 /* HOISTED */);
const _hoisted_15$2 = /*#__PURE__*/vue.createTextVNode(" Sair ");

function render$H(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BriefcaseIcon = vue.resolveComponent("BriefcaseIcon");
  const _component_jet_dropdown_link = vue.resolveComponent("jet-dropdown-link");
  const _component_CogIcon = vue.resolveComponent("CogIcon");
  const _component_UserCircleIcon = vue.resolveComponent("UserCircleIcon");
  const _component_UserGroupIcon = vue.resolveComponent("UserGroupIcon");
  const _component_LogoutIcon = vue.resolveComponent("LogoutIcon");
  const _component_jet_dropdown = vue.resolveComponent("jet-dropdown");

  return (vue.openBlock(), vue.createBlock(_component_jet_dropdown, {
    align: "right",
    width: "48"
  }, {
    trigger: vue.withCtx(() => [
      (_ctx.$page.props.jetstream.managesProfilePhotos)
        ? (vue.openBlock(), vue.createElementBlock("button", _hoisted_1$F, [
            vue.createElementVNode("img", {
              class: "h-8 w-8 rounded-full object-cover",
              src: _ctx.$page.props.user.profile_photo_url,
              alt: _ctx.$page.props.user.name
            }, null, 8 /* PROPS */, _hoisted_2$s)
          ]))
        : (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$l, [
            vue.createElementVNode("button", _hoisted_4$e, [
              vue.createTextVNode(vue.toDisplayString(_ctx.$page.props.user.name) + " ", 1 /* TEXT */),
              _hoisted_5$7
            ])
          ]))
    ]),
    content: vue.withCtx(() => [
      vue.createCommentVNode(" Account Management "),
      vue.createElementVNode("div", _hoisted_6$6, [
        vue.createElementVNode("span", _hoisted_7$5, vue.toDisplayString(_ctx.$page.props.user.name) + " " + vue.toDisplayString(_ctx.$page.props.user.lastname), 1 /* TEXT */),
        vue.createElementVNode("strong", _hoisted_8$4, "@" + vue.toDisplayString(_ctx.$page.props.user.username), 1 /* TEXT */)
      ]),
      ($options.profileIs('manager'))
        ? (vue.openBlock(), vue.createBlock(_component_jet_dropdown_link, {
            key: 0,
            href: _ctx.route('manager.dashboard')
          }, {
            icon: vue.withCtx(() => [
              vue.createVNode(_component_BriefcaseIcon, { class: "w-4 h-4" })
            ]),
            default: vue.withCtx(() => [
              _hoisted_9$4
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["href"]))
        : vue.createCommentVNode("v-if", true),
      ($options.profileIs('admin') || _ctx.$page.props.user.is_admin)
        ? (vue.openBlock(), vue.createBlock(_component_jet_dropdown_link, {
            key: 1,
            href: _ctx.route('admin.dashboard')
          }, {
            icon: vue.withCtx(() => [
              vue.createVNode(_component_CogIcon, { class: "w-4 h-4" })
            ]),
            default: vue.withCtx(() => [
              _hoisted_10$4
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["href"]))
        : vue.createCommentVNode("v-if", true),
      vue.createVNode(_component_jet_dropdown_link, {
        href: _ctx.route('profile.show')
      }, {
        icon: vue.withCtx(() => [
          vue.createVNode(_component_UserCircleIcon, { class: "w-4 h-4" })
        ]),
        default: vue.withCtx(() => [
          _hoisted_11$3
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["href"]),
      vue.createVNode(_component_jet_dropdown_link, {
        href: _ctx.route('contacts.index')
      }, {
        icon: vue.withCtx(() => [
          vue.createVNode(_component_UserGroupIcon, { class: "w-4 h-4" })
        ]),
        default: vue.withCtx(() => [
          _hoisted_12$3
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["href"]),
      (_ctx.$page.props.jetstream.hasApiFeatures)
        ? (vue.openBlock(), vue.createBlock(_component_jet_dropdown_link, {
            key: 2,
            href: _ctx.route('api-tokens.index')
          }, {
            default: vue.withCtx(() => [
              _hoisted_13$3
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["href"]))
        : vue.createCommentVNode("v-if", true),
      _hoisted_14$2,
      vue.createCommentVNode(" Authentication "),
      vue.createElementVNode("form", {
        onSubmit: _cache[0] || (_cache[0] = vue.withModifiers((...args) => ($options.logout && $options.logout(...args)), ["prevent"]))
      }, [
        vue.createVNode(_component_jet_dropdown_link, { as: "button" }, {
          icon: vue.withCtx(() => [
            vue.createVNode(_component_LogoutIcon, { class: "w-4 h-4" })
          ]),
          default: vue.withCtx(() => [
            _hoisted_15$2
          ]),
          _: 1 /* STABLE */
        })
      ], 32 /* HYDRATE_EVENTS */)
    ]),
    _: 1 /* STABLE */
  }))
}

script$H.render = render$H;
script$H.__file = "src/js/Components/NavbarSettingsDropdown.vue";

var script$G = {

        name: 'NotificationIcon',

        components: {
            BellIcon: render$X,
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

const _hoisted_1$E = { class: "w-3 h-3 top-1 right-0 absolute" };
const _hoisted_2$r = /*#__PURE__*/vue.createElementVNode("span", { class: "w-full h-full rounded-full bg-blue-200 dark:bg-blue-400 animate-ping absolute top-0 left-0" }, null, -1 /* HOISTED */);
const _hoisted_3$k = /*#__PURE__*/vue.createElementVNode("span", { class: "w-3 h-3 rounded-full bg-blue-400 dark:bg-blue-600 absolute top-0 left-0" }, null, -1 /* HOISTED */);
const _hoisted_4$d = [
  _hoisted_2$r,
  _hoisted_3$k
];

function render$G(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BellIcon = vue.resolveComponent("BellIcon");

  return (vue.openBlock(), vue.createElementBlock("button", {
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.toggleNotifications && $options.toggleNotifications(...args))),
    class: "cursor-pointer relative inline-flex items-center justify-center p-2 text-gray-600 focus:text-gray-800 hover:text-gray-800 active:text-gray-800 dark:hover:text-gray-300 dark:active:text-gray-300"
  }, [
    vue.createVNode(_component_BellIcon, { class: "w-6 h-6" }),
    vue.withDirectives(vue.createElementVNode("span", _hoisted_1$E, _hoisted_4$d, 512 /* NEED_PATCH */), [
      [vue.vShow, $props.unreadNotifications]
    ])
  ]))
}

script$G.render = render$G;
script$G.__file = "src/js/Components/NotificationIcon.vue";

var script$F = {
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

const _hoisted_1$D = {
  class: "fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50",
  "scroll-region": ""
};
const _hoisted_2$q = /*#__PURE__*/vue.createElementVNode("div", { class: "absolute inset-0 bg-gray-500 opacity-75" }, null, -1 /* HOISTED */);
const _hoisted_3$j = [
  _hoisted_2$q
];

function render$F(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
    vue.createVNode(vue.Transition, { "leave-active-class": "duration-200" }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("div", _hoisted_1$D, [
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
              }, _hoisted_3$j, 512 /* NEED_PATCH */), [
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

script$F.render = render$F;
script$F.__file = "src/js/Jetstream/Modal.vue";

var script$E = {
        name: 'JetDialogModal',
        
        emits: ['close'],

        components: {
            Modal: script$F,
            XIcon: render$J
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

const _hoisted_1$C = { class: "px-6 pt-4 pb-3 flex justify-between items-center border-b border-gray-200 dark:border-gray-700" };
const _hoisted_2$p = { class: "text-lg" };
const _hoisted_3$i = { class: "p-6" };
const _hoisted_4$c = { class: "px-6 py-4 bg-gray-100 text-right dark:bg-black" };

function render$E(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_XIcon = vue.resolveComponent("XIcon");
  const _component_modal = vue.resolveComponent("modal");

  return (vue.openBlock(), vue.createBlock(_component_modal, {
    show: $props.show,
    "max-width": $props.maxWidth,
    closeable: $props.closeable,
    onClose: $options.close
  }, {
    default: vue.withCtx(() => [
      vue.createElementVNode("div", _hoisted_1$C, [
        vue.createElementVNode("div", _hoisted_2$p, [
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
      vue.createElementVNode("div", _hoisted_3$i, [
        vue.renderSlot(_ctx.$slots, "content")
      ]),
      vue.createElementVNode("div", _hoisted_4$c, [
        vue.renderSlot(_ctx.$slots, "footer")
      ])
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["show", "max-width", "closeable", "onClose"]))
}

script$E.render = render$E;
script$E.__file = "src/js/Jetstream/DialogModal.vue";

var script$D = {
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

const _hoisted_1$B = ["type"];
const _hoisted_2$o = ["href", "title", "alt"];

function render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return (!$props.href)
    ? (vue.openBlock(), vue.createElementBlock("button", {
        key: 0,
        type: $props.type,
        class: "inline-flex items-center justify-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 dark:bg-gray-500 dark:hover:bg-gray-700 transition"
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 8 /* PROPS */, _hoisted_1$B))
    : (vue.openBlock(), vue.createElementBlock("a", {
        key: 1,
        class: "inline-flex items-center justify-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 dark:bg-gray-500 dark:hover:bg-gray-700 transition",
        href: $props.href,
        title: $props.title,
        alt: $props.title
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 8 /* PROPS */, _hoisted_2$o))
}

script$D.render = render$D;
script$D.__file = "src/js/Jetstream/Button.vue";

var script$C = {
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

const _hoisted_1$A = ["type"];
const _hoisted_2$n = ["href", "title", "alt"];

function render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return (!$props.href)
    ? (vue.openBlock(), vue.createElementBlock("button", {
        key: 0,
        type: $props.type,
        class: "inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 dark:bg-gray-800 dark:text-gray-300 transition"
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 8 /* PROPS */, _hoisted_1$A))
    : (vue.openBlock(), vue.createElementBlock("a", {
        key: 1,
        class: "inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition",
        href: $props.href,
        title: $props.title,
        alt: $props.title
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 8 /* PROPS */, _hoisted_2$n))
}

script$C.render = render$C;
script$C.__file = "src/js/Jetstream/SecondaryButton.vue";

var script$B = {

        name: 'NotificationCentral',

        components: {
            JetDialogModal: script$E,
            JetButton: script$D,
            JetSecondaryButton: script$C
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

const _hoisted_1$z = { class: "bg-gray-50 dark:bg-black" };
const _hoisted_2$m = { class: "px-4 flex justify-between items-center" };
const _hoisted_3$h = /*#__PURE__*/vue.createElementVNode("h3", { class: "text-md uppercase text-gray-400" }, "Notificações", -1 /* HOISTED */);
const _hoisted_4$b = { class: "text-gray-700 dark:text-gray-400 px-4" };
const _hoisted_5$6 = { class: "mt-3 space-y-1 divide-y divide-gray-200" };
const _hoisted_6$5 = ["onClick"];
const _hoisted_7$4 = { class: "relative w-3 mr-3" };
const _hoisted_8$3 = { class: "w-3 h-3 top-2 absolute" };
const _hoisted_9$3 = {
  key: 0,
  class: "w-full h-full rounded-full bg-red-100 dark:bg-red-200 animate-ping absolute top-0 left-0"
};
const _hoisted_10$3 = { class: "flex justify-between w-full" };
const _hoisted_11$2 = { class: "text-md font-semibold" };
const _hoisted_12$2 = { class: "text-sm text-gray-600 dark:text-gray-400" };
const _hoisted_13$2 = { class: "text-right w-20" };
const _hoisted_14$1 = { class: "text-xs text-gray-400" };
const _hoisted_15$1 = { class: "text-xs text-gray-400" };
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

function render$B(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_jet_secondary_button = vue.resolveComponent("jet-secondary-button");
  const _component_jet_button = vue.resolveComponent("jet-button");
  const _component_jet_dialog_modal = vue.resolveComponent("jet-dialog-modal");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$z, [
    vue.createElementVNode("div", _hoisted_2$m, [
      _hoisted_3$h,
      vue.createElementVNode("a", {
        href: "#",
        onClick: _cache[0] || (_cache[0] = (...args) => ($options.closeNotificationCentral && $options.closeNotificationCentral(...args))),
        class: "text-sm font-bold uppercase text-indigo-500 hover:underline"
      }, "Fechar")
    ]),
    vue.withDirectives(vue.createElementVNode("p", _hoisted_4$b, "Nenhuma notificação nova.", 512 /* NEED_PATCH */), [
      [vue.vShow, !$options.hasUnreadNotications]
    ]),
    vue.createElementVNode("div", _hoisted_5$6, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.filteredNotifications, (notification) => {
        return (vue.openBlock(), vue.createElementBlock("div", {
          class: "flex px-4 py-2 cursor-pointer bg-white dark:bg-gray-900",
          key: notification.id,
          onClick: $event => ($options.openNotification(notification))
        }, [
          vue.createElementVNode("span", _hoisted_7$4, [
            vue.createElementVNode("span", _hoisted_8$3, [
              (!notification.read_at)
                ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_9$3))
                : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("span", {
                class: vue.normalizeClass(["w-3 h-3 rounded-full absolute top-0 left-0", {
                                'bg-red-200 dark:bg-red-300': !notification.read_at,
                                'bg-blue-200 dark:bg-blue-300': notification.read_at
                             }])
              }, null, 2 /* CLASS */)
            ])
          ]),
          vue.createElementVNode("div", _hoisted_10$3, [
            vue.createElementVNode("div", null, [
              vue.createElementVNode("h3", _hoisted_11$2, vue.toDisplayString(notification.data.subject), 1 /* TEXT */),
              vue.createElementVNode("p", _hoisted_12$2, vue.toDisplayString(notification.data.greeting), 1 /* TEXT */)
            ]),
            vue.createElementVNode("div", _hoisted_13$2, [
              vue.createElementVNode("p", _hoisted_14$1, vue.toDisplayString(_ctx.$filters.fromDateTime(notification.created_at, 'd/m/Y')), 1 /* TEXT */),
              vue.createElementVNode("p", _hoisted_15$1, vue.toDisplayString(_ctx.$filters.fromDateTime(notification.created_at, 'HH:mm')), 1 /* TEXT */)
            ])
          ])
        ], 8 /* PROPS */, _hoisted_6$5))
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

script$B.render = render$B;
script$B.__file = "src/js/Components/NotificationCentral.vue";

var script$A = {
        name: 'ToggleDarkMode',
        components: {
            MoonIcon: render$R,
            SunIcon: render$O,
        },

        computed: {
            isDarkMode() {
                return this.darkMode && this.check;
            },
            check() {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    return true;
                }
                return false;
            }
        },

        data() {
            return {
                darkMode: false
            };
        },

        mounted() {
            // if(this.check && !this.darkMode) {
            //     this.darkMode = this.check;
            // }

            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
                this.darkMode = true;
            } else {
                document.documentElement.classList.remove('dark');
                this.darkMode = false;
            }
        },

        methods: {
            toggleDarkMode() {
                this.darkMode = !this.darkMode;

                if(this.darkMode) {
                    document.documentElement.classList.add('dark');
                    localStorage.theme = 'dark';
                }else {
                    document.documentElement.classList.remove('dark');
                    localStorage.theme = 'light';
                }
            }
        }
    };

function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SunIcon = vue.resolveComponent("SunIcon");
  const _component_MoonIcon = vue.resolveComponent("MoonIcon");

  return (vue.openBlock(), vue.createElementBlock("button", {
    class: "cursor-pointer rounded-md p-2 text-gray-600 focus:text-gray-800 hover:text-gray-800 active:text-gray-800 dark:hover:text-gray-300 dark:active:text-gray-300",
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.toggleDarkMode && $options.toggleDarkMode(...args)))
  }, [
    ($options.isDarkMode)
      ? (vue.openBlock(), vue.createBlock(_component_SunIcon, {
          key: 0,
          class: "w-6 h-6"
        }))
      : (vue.openBlock(), vue.createBlock(_component_MoonIcon, {
          key: 1,
          class: "w-6 h-6"
        }))
  ]))
}

script$A.render = render$A;
script$A.__file = "src/js/Components/ToggleDarkMode.vue";

var script$z = {
        name: 'AppHead',
        props: {
            title: String,
        },
        computed: {
            metaDescription() {
                return `Autum é uma empresa de serviços financeiros com sede na cidade do Rio de Janeiro.`;
            },
            metaTitle() {
                return this.title ? `${this.title} – Autum Wallet` : 'Autum Wallet';
            },
            metaUrl() {
                return route('welcome');
            }
        }
    };

const _hoisted_1$y = /*#__PURE__*/vue.createElementVNode("meta", {
  "head-key": "description",
  name: "description",
  content: "Autum é uma empresa de serviços financeiros disruptivos em blockchain com sede na cidade do Rio de Janeiro."
}, null, -1 /* HOISTED */);
const _hoisted_2$l = /*#__PURE__*/vue.createElementVNode("meta", {
  name: "author",
  content: "Autum"
}, null, -1 /* HOISTED */);
const _hoisted_3$g = /*#__PURE__*/vue.createElementVNode("meta", {
  name: "copyright",
  content: "Autum"
}, null, -1 /* HOISTED */);
const _hoisted_4$a = /*#__PURE__*/vue.createElementVNode("meta", {
  name: "application-name",
  content: "Wallet"
}, null, -1 /* HOISTED */);
const _hoisted_5$5 = ["content"];
const _hoisted_6$4 = /*#__PURE__*/vue.createElementVNode("meta", {
  property: "og:site_name",
  content: "Autum Wallet"
}, null, -1 /* HOISTED */);
const _hoisted_7$3 = /*#__PURE__*/vue.createElementVNode("meta", {
  property: "og:type",
  content: "website"
}, null, -1 /* HOISTED */);
const _hoisted_8$2 = /*#__PURE__*/vue.createElementVNode("meta", {
  property: "og:locale",
  content: "pt_BR"
}, null, -1 /* HOISTED */);
const _hoisted_9$2 = /*#__PURE__*/vue.createElementVNode("meta", {
  property: "og:image",
  content: "/images/autum-og-image-default.jpg"
}, null, -1 /* HOISTED */);
const _hoisted_10$2 = ["content"];
const _hoisted_11$1 = ["content"];
const _hoisted_12$1 = /*#__PURE__*/vue.createElementVNode("meta", {
  name: "twitter:card",
  content: "summary"
}, null, -1 /* HOISTED */);
const _hoisted_13$1 = ["content"];
const _hoisted_14 = ["content"];
const _hoisted_15 = /*#__PURE__*/vue.createElementVNode("meta", {
  name: "twitter:image",
  content: "/images/autum-og-image-default.jpg"
}, null, -1 /* HOISTED */);

function render$z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_inertia_head = vue.resolveComponent("inertia-head");

  return (vue.openBlock(), vue.createBlock(_component_inertia_head, { title: $options.metaTitle }, {
    default: vue.withCtx(() => [
      _hoisted_1$y,
      _hoisted_2$l,
      _hoisted_3$g,
      _hoisted_4$a,
      vue.createElementVNode("meta", {
        property: "og:title",
        content: $options.metaTitle
      }, null, 8 /* PROPS */, _hoisted_5$5),
      _hoisted_6$4,
      _hoisted_7$3,
      _hoisted_8$2,
      _hoisted_9$2,
      vue.createElementVNode("meta", {
        property: "og:url",
        content: $options.metaUrl
      }, null, 8 /* PROPS */, _hoisted_10$2),
      vue.createElementVNode("meta", {
        property: "og:description",
        content: $options.metaDescription
      }, null, 8 /* PROPS */, _hoisted_11$1),
      _hoisted_12$1,
      vue.createElementVNode("meta", {
        name: "twitter:title",
        content: $options.metaTitle
      }, null, 8 /* PROPS */, _hoisted_13$1),
      vue.createElementVNode("meta", {
        name: "twitter:description",
        content: $options.metaDescription
      }, null, 8 /* PROPS */, _hoisted_14),
      _hoisted_15,
      vue.renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["title"]))
}

script$z.render = render$z;
script$z.__file = "src/js/Components/AppHead.vue";

var script$y = {
        props: ['message']
    };

const _hoisted_1$x = { class: "text-sm text-red-600 dark:text-red-500" };

function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", null, [
    vue.createElementVNode("p", _hoisted_1$x, vue.toDisplayString($props.message), 1 /* TEXT */)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, $props.message]
  ])
}

script$y.render = render$y;
script$y.__file = "src/js/Jetstream/InputError.vue";

var script$x = {
        props: ['value']
    };

const _hoisted_1$w = { class: "block font-medium text-sm text-gray-700 dark:text-gray-300" };
const _hoisted_2$k = { key: 0 };
const _hoisted_3$f = { key: 1 };

function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$w, [
    ($props.value)
      ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$k, vue.toDisplayString($props.value), 1 /* TEXT */))
      : (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$f, [
          vue.renderSlot(_ctx.$slots, "default")
        ]))
  ]))
}

script$x.render = render$x;
script$x.__file = "src/js/Jetstream/Label.vue";

var script$w = {
        name: 'MediaImageUploader',
        components: {
            JetButton: script$D,
            JetSecondaryButton: script$C,
            JetInputError: script$y,
            JetLabel: script$x,
            JetDialogModal: script$E,
            PhotographIcon: render$Q,
            ZoomInIcon: render$I,
            TrashIcon: render$N
        },

        props: {
            modelValue: {},
            currentSrc: {
                type: String,
                default: null
            },
            btnSelectText: {
                type: String,
                default: 'Selecionar'
            },
            btnRemoveText: {
                type: String,
                default: 'Remover'
            },
            btnCancelText: {
                type: String,
                default: 'Cancelar'
            },
            imageClass: {
                type: String,
                default: 'image/*'
            },
            accept: {
                type: String,
                default: 'image/*'
            },
            multiple: {
                type: Boolean,
                default: false
            },
            imageCircle: {
                type: Boolean,
                default: false
            }
        },

        emits: ['clear', 'delete', 'preview', 'change', 'cancel', 'update:modelValue'],

        data() {
            return {
                mediaPreview: null,
                modalPreview: false,
                mimePreview: 'image/jpeg',
                modelValueBackup: null,
                form: this.$inertia.form({
                    media: null,
                }),
            };
        },

        mounted() {
            this.modelValueBackup = this.modelValue;
        },

        watch: {
            modelValue: {
                handler: function(val) {
                    if(_.isEmpty(val) && !_.isEmpty(this.$refs.media.value)) {
                        this.clearPhotoFileInput();
                    }
                },
                deep: true
            }
        },

        methods: {

            showPreviewModal() {
                this.modalPreview = true;
            },
            clearPhotoFileInput() {
                if (this.$refs.media?.value) {
                    this.$refs.media.value = null;
                    this.$emit('clear');
                    this.mediaPreview = null;
                }
            },

            selectNewFile() {
                this.$refs.media.click();
            },

            updateMediaPreview() {
                const files = this.$refs.media.files;
                const media = files[0];

                if (! media) return;

                const reader = new FileReader();

                reader.onload = (e) => {
                    this.mediaPreview = e.target.result;
                    this.mimePreview = media.type;
                    this.$emit('preview', this.mediaPreview);
                    this.$emit('change', files);
                    this.$emit('update:modelValue', files);
                };

                reader.readAsDataURL(media);
            },
            
            deleteMedia() {
                this.$emit('delete');
            },

            cancel() {
                this.form.reset();
                this.clearPhotoFileInput();
                this.$emit('cancel');
                this.$emit('update:modelValue', this.modelValueBackup);
            },
        }
    };

const _hoisted_1$v = { class: "block" };
const _hoisted_2$j = { class: "flex items-center" };
const _hoisted_3$e = ["accept", "multiple"];
const _hoisted_4$9 = { class: "mr-3" };
const _hoisted_5$4 = ["src"];
const _hoisted_6$3 = { class: "ml-3 space-x-2" };
const _hoisted_7$2 = /*#__PURE__*/vue.createTextVNode(" Prever ");
const _hoisted_8$1 = ["src"];
const _hoisted_9$1 = ["src"];
const _hoisted_10$1 = /*#__PURE__*/vue.createTextVNode(" Fechar ");

function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PhotographIcon = vue.resolveComponent("PhotographIcon");
  const _component_ZoomInIcon = vue.resolveComponent("ZoomInIcon");
  const _component_jet_secondary_button = vue.resolveComponent("jet-secondary-button");
  const _component_TrashIcon = vue.resolveComponent("TrashIcon");
  const _component_jet_dialog_modal = vue.resolveComponent("jet-dialog-modal");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$v, [
    vue.createElementVNode("div", _hoisted_2$j, [
      vue.createCommentVNode(" Media File Input "),
      vue.createElementVNode("input", {
        type: "file",
        class: "hidden",
        ref: "media",
        accept: $props.accept,
        multiple: $props.multiple,
        onChange: _cache[0] || (_cache[0] = (...args) => ($options.updateMediaPreview && $options.updateMediaPreview(...args)))
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3$e),
      vue.createElementVNode("div", _hoisted_4$9, [
        vue.createCommentVNode(" Current Media File "),
        vue.withDirectives(vue.createElementVNode("div", null, [
          vue.createElementVNode("img", {
            src: $props.currentSrc,
            class: vue.normalizeClass([{'rounded-full': $props.imageCircle, 'rounded': !$props.imageCircle }, "h-20 w-20 object-cover"])
          }, null, 10 /* CLASS, PROPS */, _hoisted_5$4)
        ], 512 /* NEED_PATCH */), [
          [vue.vShow, !$data.mediaPreview && $props.currentSrc]
        ]),
        vue.withDirectives(vue.createElementVNode("div", null, [
          vue.createElementVNode("span", {
            class: vue.normalizeClass(["block w-20 h-20 bg-gray-300 dark:bg-gray-600 flex items-center justify-center", {'rounded-full': $props.imageCircle, 'rounded': !$props.imageCircle }]),
            style: 'background-size: cover; background-repeat: no-repeat; background-position: center center;'
          }, [
            vue.createVNode(_component_PhotographIcon, { class: "w-6 h-6 text-gray-600 dark:text-gray-300" })
          ], 2 /* CLASS */)
        ], 512 /* NEED_PATCH */), [
          [vue.vShow, !$data.mediaPreview && !$props.currentSrc]
        ]),
        vue.createCommentVNode(" New Media File Preview "),
        vue.withDirectives(vue.createElementVNode("div", {
          onClick: _cache[1] || (_cache[1] = (...args) => ($options.showPreviewModal && $options.showPreviewModal(...args)))
        }, [
          vue.createElementVNode("span", {
            class: vue.normalizeClass(["block w-20 h-20 cursor-pointer bg-gray-300 dark:bg-gray-600 flex items-end justify-end relative", {'rounded-full': $props.imageCircle, 'rounded': !$props.imageCircle }]),
            style: vue.normalizeStyle('background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + $data.mediaPreview + '\');')
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(["block w-20 h-20 opacity-60 bg-gradient-to-t from-black via-transparent absolute top-0 left-0", {'rounded-full': $props.imageCircle, 'rounded': !$props.imageCircle }])
            }, null, 2 /* CLASS */),
            vue.createVNode(_component_ZoomInIcon, { class: "w-4 h-4 m-2 text-white" })
          ], 6 /* CLASS, STYLE */)
        ], 512 /* NEED_PATCH */), [
          [vue.vShow, $data.mediaPreview]
        ])
      ]),
      vue.createElementVNode("div", _hoisted_6$3, [
        vue.withDirectives(vue.createVNode(_component_jet_secondary_button, {
          type: "button",
          onClick: vue.withModifiers($options.selectNewFile, ["prevent"])
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_PhotographIcon, { class: "w-5 h-5" })
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"]), [
          [vue.vShow, !$data.mediaPreview]
        ]),
        ($props.currentSrc && !$data.mediaPreview)
          ? (vue.openBlock(), vue.createBlock(_component_jet_secondary_button, {
              key: 0,
              type: "button",
              onClick: vue.withModifiers($options.deleteMedia, ["prevent"])
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_TrashIcon, { class: "w-5 h-5 text-red-500" })
              ]),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["onClick"]))
          : vue.createCommentVNode("v-if", true),
        vue.withDirectives(vue.createVNode(_component_jet_secondary_button, {
          type: "button",
          onClick: vue.withModifiers($options.cancel, ["prevent"])
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString($props.btnCancelText), 1 /* TEXT */)
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"]), [
          [vue.vShow, $data.mediaPreview]
        ])
      ])
    ]),
    vue.createCommentVNode(" Preview Modal "),
    vue.createVNode(_component_jet_dialog_modal, { show: $data.modalPreview }, {
      title: vue.withCtx(() => [
        _hoisted_7$2
      ]),
      content: vue.withCtx(() => [
        ($props.currentSrc && !$data.mediaPreview)
          ? (vue.openBlock(), vue.createElementBlock("img", {
              key: 0,
              src: $props.currentSrc,
              class: "mx-auto"
            }, null, 8 /* PROPS */, _hoisted_8$1))
          : ($data.mediaPreview)
            ? (vue.openBlock(), vue.createElementBlock("img", {
                key: 1,
                src: $data.mediaPreview,
                class: "mx-auto"
              }, null, 8 /* PROPS */, _hoisted_9$1))
            : vue.createCommentVNode("v-if", true)
      ]),
      footer: vue.withCtx(() => [
        vue.createVNode(_component_jet_secondary_button, {
          onClick: _cache[2] || (_cache[2] = $event => ($data.modalPreview = false))
        }, {
          default: vue.withCtx(() => [
            _hoisted_10$1
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["show"])
  ]))
}

script$w.render = render$w;
script$w.__file = "src/js/Components/MediaImageUploader.vue";

var script$v = {
        props: ['on'],
    };

const _hoisted_1$u = { class: "text-sm text-gray-600" };

function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    vue.createVNode(vue.Transition, {
      "leave-active-class": "transition ease-in duration-1000",
      "leave-from-class": "opacity-100",
      "leave-to-class": "opacity-0"
    }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("div", _hoisted_1$u, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 512 /* NEED_PATCH */), [
          [vue.vShow, $props.on]
        ])
      ]),
      _: 3 /* FORWARDED */
    })
  ]))
}

script$v.render = render$v;
script$v.__file = "src/js/Jetstream/ActionMessage.vue";

const _hoisted_1$t = { class: "md:col-span-1 flex justify-between" };
const _hoisted_2$i = { class: "px-4 sm:px-0" };
const _hoisted_3$d = { class: "text-xl font-bold text-gray-900 dark:text-white" };
const _hoisted_4$8 = { class: "mt-1 text-sm text-gray-600 dark:text-gray-400" };
const _hoisted_5$3 = { class: "px-4 sm:px-0" };

function render$u(_ctx, _cache) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$t, [
    vue.createElementVNode("div", _hoisted_2$i, [
      vue.createElementVNode("h3", _hoisted_3$d, [
        vue.renderSlot(_ctx.$slots, "title")
      ]),
      vue.createElementVNode("p", _hoisted_4$8, [
        vue.renderSlot(_ctx.$slots, "description")
      ])
    ]),
    vue.createElementVNode("div", _hoisted_5$3, [
      vue.renderSlot(_ctx.$slots, "aside")
    ])
  ]))
}

const script$u = {};


script$u.render = render$u;
script$u.__file = "src/js/Jetstream/SectionTitle.vue";

var script$t = {
        components: {
            JetSectionTitle: script$u,
        },

        props: ['responsive'],

        computed: {
            hasActions() {
                return !! this.$slots.actions
            }
        }
    };

const _hoisted_1$s = { class: "mt-5 md:mt-0 md:col-span-2" };
const _hoisted_2$h = {
  key: 0,
  class: "flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md dark:bg-black dark:text-white"
};

function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_jet_section_title = vue.resolveComponent("jet-section-title");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["md:grid md:grid-cols-3 md:gap-6", {'lg:grid-cols-1 lg:gap-3': $props.responsive}])
  }, [
    vue.createVNode(_component_jet_section_title, null, {
      title: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "title")
      ]),
      description: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "description")
      ]),
      _: 3 /* FORWARDED */
    }),
    vue.createElementVNode("div", _hoisted_1$s, [
      vue.createElementVNode("div", {
        class: vue.normalizeClass(["px-4 py-5 sm:p-6 bg-white dark:bg-gray-900 text-gray-300 shadow", $options.hasActions ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md'])
      }, [
        vue.renderSlot(_ctx.$slots, "content")
      ], 2 /* CLASS */),
      ($options.hasActions)
        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$h, [
            vue.renderSlot(_ctx.$slots, "actions")
          ]))
        : vue.createCommentVNode("v-if", true)
    ])
  ], 2 /* CLASS */))
}

script$t.render = render$t;
script$t.__file = "src/js/Jetstream/ActionSection.vue";

const _hoisted_1$r = {
  width: "48",
  src: "/img/autum-logo-color.png",
  alt: "Autum Wallet brand logo"
};

function render$s(_ctx, _cache) {
  return (vue.openBlock(), vue.createElementBlock("img", _hoisted_1$r))
}

const script$s = {};


script$s.render = render$s;
script$s.__file = "src/js/Jetstream/ApplicationLogo.vue";

const _hoisted_1$q = {
  width: "48",
  src: "/img/autum-logo-color.png",
  alt: "Autum Wallet brand logo"
};

function render$r(_ctx, _cache) {
  return (vue.openBlock(), vue.createElementBlock("img", _hoisted_1$q))
}

const script$r = {};


script$r.render = render$r;
script$r.__file = "src/js/Jetstream/ApplicationMark.vue";

const _hoisted_1$p = { class: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100" };
const _hoisted_2$g = { class: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg" };

function render$q(_ctx, _cache) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$p, [
    vue.createElementVNode("div", null, [
      vue.renderSlot(_ctx.$slots, "logo")
    ]),
    vue.createElementVNode("div", _hoisted_2$g, [
      vue.renderSlot(_ctx.$slots, "default")
    ])
  ]))
}

const script$q = {};


script$q.render = render$q;
script$q.__file = "src/js/Jetstream/AuthenticationCard.vue";

const _hoisted_1$o = /*#__PURE__*/vue.createElementVNode("img", {
  class: "w-16 h-16",
  src: "/img/autum-logo-color.png",
  alt: "Autum Wallet brand logo"
}, null, -1 /* HOISTED */);

function render$p(_ctx, _cache) {
  const _component_inertia_link = vue.resolveComponent("inertia-link");

  return (vue.openBlock(), vue.createBlock(_component_inertia_link, { href: '/' }, {
    default: vue.withCtx(() => [
      _hoisted_1$o
    ]),
    _: 1 /* STABLE */
  }))
}

const script$p = {};


script$p.render = render$p;
script$p.__file = "src/js/Jetstream/AuthenticationCardLogo.vue";

var script$o = {
        data() {
            return {
                show: true,
            }
        },

        computed: {
            style() {
                return this.$page.props.jetstream.flash?.bannerStyle || 'success'
            },

            message() {
                return this.$page.props.jetstream.flash?.banner || ''
            },
        }
    };

const _hoisted_1$n = { class: "max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8" };
const _hoisted_2$f = { class: "flex items-center justify-between flex-wrap" };
const _hoisted_3$c = { class: "w-0 flex-1 flex items-center min-w-0" };
const _hoisted_4$7 = {
  key: 0,
  class: "h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};
const _hoisted_5$2 = /*#__PURE__*/vue.createElementVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1 /* HOISTED */);
const _hoisted_6$2 = [
  _hoisted_5$2
];
const _hoisted_7$1 = {
  key: 1,
  class: "h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};
const _hoisted_8 = /*#__PURE__*/vue.createElementVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
}, null, -1 /* HOISTED */);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = { class: "ml-3 font-medium text-sm text-white truncate" };
const _hoisted_11 = { class: "flex-shrink-0 sm:ml-3" };
const _hoisted_12 = /*#__PURE__*/vue.createElementVNode("svg", {
  class: "h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /*#__PURE__*/vue.createElementVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1 /* HOISTED */);
const _hoisted_13 = [
  _hoisted_12
];

function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    ($data.show && $options.message)
      ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass({ 'bg-indigo-500': $options.style == 'success', 'bg-red-700': $options.style == 'danger' })
        }, [
          vue.createElementVNode("div", _hoisted_1$n, [
            vue.createElementVNode("div", _hoisted_2$f, [
              vue.createElementVNode("div", _hoisted_3$c, [
                vue.createElementVNode("span", {
                  class: vue.normalizeClass(["flex p-2 rounded-lg", { 'bg-indigo-600': $options.style == 'success', 'bg-red-600': $options.style == 'danger' }])
                }, [
                  ($options.style == 'success')
                    ? (vue.openBlock(), vue.createElementBlock("svg", _hoisted_4$7, _hoisted_6$2))
                    : vue.createCommentVNode("v-if", true),
                  ($options.style == 'danger')
                    ? (vue.openBlock(), vue.createElementBlock("svg", _hoisted_7$1, _hoisted_9))
                    : vue.createCommentVNode("v-if", true)
                ], 2 /* CLASS */),
                vue.createElementVNode("p", _hoisted_10, vue.toDisplayString($options.message), 1 /* TEXT */)
              ]),
              vue.createElementVNode("div", _hoisted_11, [
                vue.createElementVNode("button", {
                  type: "button",
                  class: vue.normalizeClass(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition", { 'hover:bg-indigo-600 focus:bg-indigo-600': $options.style == 'success', 'hover:bg-red-600 focus:bg-red-600': $options.style == 'danger' }]),
                  "aria-label": "Dismiss",
                  onClick: _cache[0] || (_cache[0] = vue.withModifiers($event => ($data.show = false), ["prevent"]))
                }, _hoisted_13, 2 /* CLASS */)
              ])
            ])
          ])
        ], 2 /* CLASS */))
      : vue.createCommentVNode("v-if", true)
  ]))
}

script$o.render = render$o;
script$o.__file = "src/js/Jetstream/Banner.vue";

var script$n = {
    emits: ['update:checked'],

    props: {
        checked: {
            type: [Array, Boolean],
            default: false,
        },
        value: {
            default: null,
        },
    },

    computed: {
        proxyChecked: {
            get() {
                return this.checked;
            },

            set(val) {
                this.$emit("update:checked", val);
            },
        },
    },
};

const _hoisted_1$m = ["value"];

function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
    type: "checkbox",
    value: $props.value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($options.proxyChecked) = $event)),
    class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  }, null, 8 /* PROPS */, _hoisted_1$m)), [
    [vue.vModelCheckbox, $options.proxyChecked]
  ])
}

script$n.render = render$n;
script$n.__file = "src/js/Jetstream/Checkbox.vue";

var script$m = {
        emits: ['close'],

        components: {
            Modal: script$F,
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

const _hoisted_1$l = { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" };
const _hoisted_2$e = { class: "sm:flex sm:items-start" };
const _hoisted_3$b = /*#__PURE__*/vue.createElementVNode("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" }, [
  /*#__PURE__*/vue.createElementVNode("svg", {
    class: "h-6 w-6 text-red-600",
    stroke: "currentColor",
    fill: "none",
    viewBox: "0 0 24 24"
  }, [
    /*#__PURE__*/vue.createElementVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1 /* HOISTED */);
const _hoisted_4$6 = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" };
const _hoisted_5$1 = { class: "text-lg" };
const _hoisted_6$1 = { class: "mt-2" };
const _hoisted_7 = { class: "px-6 py-4 bg-gray-100 text-right" };

function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_modal = vue.resolveComponent("modal");

  return (vue.openBlock(), vue.createBlock(_component_modal, {
    show: $props.show,
    "max-width": $props.maxWidth,
    closeable: $props.closeable,
    onClose: $options.close
  }, {
    default: vue.withCtx(() => [
      vue.createElementVNode("div", _hoisted_1$l, [
        vue.createElementVNode("div", _hoisted_2$e, [
          _hoisted_3$b,
          vue.createElementVNode("div", _hoisted_4$6, [
            vue.createElementVNode("h3", _hoisted_5$1, [
              vue.renderSlot(_ctx.$slots, "title")
            ]),
            vue.createElementVNode("div", _hoisted_6$1, [
              vue.renderSlot(_ctx.$slots, "content")
            ])
          ])
        ])
      ]),
      vue.createElementVNode("div", _hoisted_7, [
        vue.renderSlot(_ctx.$slots, "footer")
      ])
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["show", "max-width", "closeable", "onClose"]))
}

script$m.render = render$m;
script$m.__file = "src/js/Jetstream/ConfirmationModal.vue";

var script$l = {
        props: {
            readonly: {
                type: Boolean,
                default: () => { return false }
            },
            disabled: {
                type: Boolean,
                default: () => { return false }
            },
            mask: {},
            modelValue: {}
        },

        emits: ['update:modelValue'],

        methods: {
            focus() {
                this.$refs.input.focus();
            },
            maskaEvent(ev) {
                this.$emit('update:modelValue', ev.target.getAttribute('data-mask-raw-value'));
            }
        }
    };

const _hoisted_1$k = ["value", "readonly", "disabled"];
const _hoisted_2$d = ["value", "readonly", "disabled"];

function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_maska = vue.resolveDirective("maska");

  return (!$props.mask)
    ? (vue.openBlock(), vue.createElementBlock("input", {
        key: 0,
        class: vue.normalizeClass(["border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-indigo-400", {
            'bg-gray-200 dark:bg-gray-700': $props.disabled,
            'bg-gray-200 dark:bg-black cursor-not-allowed': $props.readonly
        }]),
        value: $props.modelValue,
        onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
        readonly: $props.readonly,
        disabled: $props.disabled,
        ref: "input"
      }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_1$k))
    : vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
        key: 1,
        class: vue.normalizeClass(["border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-indigo-400", {
            'bg-gray-200 dark:bg-gray-700': $props.disabled,
            'bg-gray-200 dark:bg-black cursor-not-allowed': $props.readonly
        }]),
        value: $props.modelValue,
        onMaska: _cache[1] || (_cache[1] = (...args) => ($options.maskaEvent && $options.maskaEvent(...args))),
        readonly: $props.readonly,
        disabled: $props.disabled,
        ref: "input"
      }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_2$d)), [
        [_directive_maska, $props.mask]
      ])
}

script$l.render = render$l;
script$l.__file = "src/js/Jetstream/Input.vue";

var script$k = {
        emits: ['confirmed'],

        props: {
            title: {
                default: 'Confirmar senha',
            },
            content: {
                default: 'Para sua segurança, confirme sua senha para continuar.',
            },
            button: {
                default: 'Autorizar',
            }
        },

        components: {
            JetButton: script$D,
            JetDialogModal: script$E,
            JetInput: script$l,
            JetInputError: script$y,
            JetSecondaryButton: script$C,
        },

        data() {
            return {
                confirmingPassword: false,
                form: {
                    password: '',
                    error: '',
                },
            }
        },

        methods: {
            startConfirmingPassword() {
                axios.get(route('password.confirmation')).then(response => {
                    if (response.data.confirmed) {
                        this.$emit('confirmed');
                    } else {
                        this.confirmingPassword = true;

                        setTimeout(() => this.$refs.password.focus(), 250);
                    }
                });
            },

            confirmPassword() {
                this.form.processing = true;

                axios.post(route('password.confirm'), {
                    password: this.form.password,
                }).then(() => {
                    this.form.processing = false;
                    this.closeModal();
                    this.$nextTick(() => this.$emit('confirmed'));
                }).catch(error => {
                    this.form.processing = false;
                    this.form.error = error.response.data.errors.password[0];
                    this.$refs.password.focus();
                });
            },

            closeModal() {
                this.confirmingPassword = false;
                this.form.password = '';
                this.form.error = '';
            },
        }
    };

const _hoisted_1$j = { class: "mt-4" };

function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_jet_input = vue.resolveComponent("jet-input");
  const _component_jet_input_error = vue.resolveComponent("jet-input-error");
  const _component_jet_secondary_button = vue.resolveComponent("jet-secondary-button");
  const _component_jet_button = vue.resolveComponent("jet-button");
  const _component_jet_dialog_modal = vue.resolveComponent("jet-dialog-modal");

  return (vue.openBlock(), vue.createElementBlock("span", null, [
    vue.createElementVNode("span", {
      onClick: _cache[0] || (_cache[0] = (...args) => ($options.startConfirmingPassword && $options.startConfirmingPassword(...args)))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ]),
    vue.createVNode(_component_jet_dialog_modal, {
      show: $data.confirmingPassword,
      onClose: $options.closeModal
    }, {
      title: vue.withCtx(() => [
        vue.createTextVNode(vue.toDisplayString($props.title), 1 /* TEXT */)
      ]),
      content: vue.withCtx(() => [
        vue.createTextVNode(vue.toDisplayString($props.content) + " ", 1 /* TEXT */),
        vue.createElementVNode("div", _hoisted_1$j, [
          vue.createVNode(_component_jet_input, {
            type: "password",
            class: "mt-1 block w-3/4",
            placeholder: "Senha",
            ref: "password",
            modelValue: $data.form.password,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($data.form.password) = $event)),
            onKeyup: vue.withKeys($options.confirmPassword, ["enter"])
          }, null, 8 /* PROPS */, ["modelValue", "onKeyup"]),
          vue.createVNode(_component_jet_input_error, {
            message: $data.form.error,
            class: "mt-2"
          }, null, 8 /* PROPS */, ["message"])
        ])
      ]),
      footer: vue.withCtx(() => [
        vue.createVNode(_component_jet_secondary_button, { onClick: $options.closeModal }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString(_ctx.__('Cancel')), 1 /* TEXT */)
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"]),
        vue.createVNode(_component_jet_button, {
          class: vue.normalizeClass(["ml-2", { 'opacity-25': $data.form.processing }]),
          onClick: $options.confirmPassword,
          disabled: $data.form.processing
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString($props.button), 1 /* TEXT */)
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick", "class", "disabled"])
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["show", "onClose"])
  ]))
}

script$k.render = render$k;
script$k.__file = "src/js/Jetstream/ConfirmsPassword.vue";

/**
 * Vue Currency Input 2.4.0
 * (c) 2018-2022 Matthias Stiller
 * @license MIT
 */

const escapeRegExp = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};
const removeLeadingZeros = (str) => {
    return str.replace(/^0+(0$|[^0])/, '$1');
};
const count = (str, search) => {
    return (str.match(new RegExp(escapeRegExp(search), 'g')) || []).length;
};
const substringBefore = (str, search) => {
    return str.substring(0, str.indexOf(search));
};

var CurrencyDisplay;
(function (CurrencyDisplay) {
    CurrencyDisplay["symbol"] = "symbol";
    CurrencyDisplay["narrowSymbol"] = "narrowSymbol";
    CurrencyDisplay["code"] = "code";
    CurrencyDisplay["name"] = "name";
    CurrencyDisplay["hidden"] = "hidden";
})(CurrencyDisplay || (CurrencyDisplay = {}));
var ValueScaling;
(function (ValueScaling) {
    ValueScaling["precision"] = "precision";
    ValueScaling["thousands"] = "thousands";
    ValueScaling["millions"] = "millions";
    ValueScaling["billions"] = "billions";
})(ValueScaling || (ValueScaling = {}));

const DECIMAL_SEPARATORS = [',', '.', '٫'];
const INTEGER_PATTERN = '(0|[1-9]\\d*)';
class CurrencyFormat {
    constructor(options) {
        var _a, _b, _c, _d, _e, _f;
        const { currency, currencyDisplay, locale, precision, accountingSign } = options;
        this.locale = locale;
        this.options = {
            style: 'currency',
            currency,
            currencySign: accountingSign ? 'accounting' : undefined,
            currencyDisplay: currencyDisplay !== CurrencyDisplay.hidden ? currencyDisplay : undefined
        };
        const numberFormat = new Intl.NumberFormat(locale, this.options);
        const formatParts = numberFormat.formatToParts(123456);
        this.currency = (_a = formatParts.find(({ type }) => type === 'currency')) === null || _a === void 0 ? void 0 : _a.value;
        this.digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => i.toLocaleString(locale));
        this.decimalSymbol = (_b = formatParts.find(({ type }) => type === 'decimal')) === null || _b === void 0 ? void 0 : _b.value;
        this.groupingSymbol = (_c = formatParts.find(({ type }) => type === 'group')) === null || _c === void 0 ? void 0 : _c.value;
        this.minusSign = (_d = numberFormat.formatToParts(-1).find(({ type }) => type === 'minusSign')) === null || _d === void 0 ? void 0 : _d.value;
        if (this.decimalSymbol === undefined) {
            this.minimumFractionDigits = this.maximumFractionDigits = 0;
        }
        else if (typeof precision === 'number') {
            this.minimumFractionDigits = this.maximumFractionDigits = precision;
        }
        else {
            this.minimumFractionDigits = (_e = precision === null || precision === void 0 ? void 0 : precision.min) !== null && _e !== void 0 ? _e : numberFormat.resolvedOptions().minimumFractionDigits;
            this.maximumFractionDigits = (_f = precision === null || precision === void 0 ? void 0 : precision.max) !== null && _f !== void 0 ? _f : numberFormat.resolvedOptions().maximumFractionDigits;
        }
        const getPrefix = (str) => {
            return substringBefore(str, this.digits[1]);
        };
        const getSuffix = (str) => {
            return str.substring(str.lastIndexOf(this.decimalSymbol ? this.digits[0] : this.digits[1]) + 1);
        };
        this.prefix = getPrefix(numberFormat.format(1));
        this.suffix = getSuffix(numberFormat.format(1));
        this.negativePrefix = getPrefix(numberFormat.format(-1));
        this.negativeSuffix = getSuffix(numberFormat.format(-1));
    }
    parse(str) {
        if (str) {
            const negative = this.isNegative(str);
            str = this.normalizeDigits(str);
            str = this.stripCurrency(str, negative);
            str = this.stripSignLiterals(str);
            const fraction = this.decimalSymbol ? `(?:${escapeRegExp(this.decimalSymbol)}(\\d*))?` : '';
            const match = this.stripGroupingSeparator(str).match(new RegExp(`^${INTEGER_PATTERN}${fraction}$`));
            if (match && this.isValidIntegerFormat(this.decimalSymbol ? str.split(this.decimalSymbol)[0] : str, Number(match[1]))) {
                return Number(`${negative ? '-' : ''}${this.onlyDigits(match[1])}.${this.onlyDigits(match[2] || '')}`);
            }
        }
        return null;
    }
    isValidIntegerFormat(formattedNumber, integerNumber) {
        const options = { ...this.options, minimumFractionDigits: 0 };
        return [
            this.stripCurrency(this.normalizeDigits(integerNumber.toLocaleString(this.locale, {
                ...options,
                useGrouping: true
            })), false),
            this.stripCurrency(this.normalizeDigits(integerNumber.toLocaleString(this.locale, {
                ...options,
                useGrouping: false
            })), false)
        ].includes(formattedNumber);
    }
    format(value, options = {
        minimumFractionDigits: this.minimumFractionDigits,
        maximumFractionDigits: this.maximumFractionDigits
    }) {
        return value != null ? value.toLocaleString(this.locale, { ...this.options, ...options }) : '';
    }
    toFraction(str) {
        return `${this.digits[0]}${this.decimalSymbol}${this.onlyLocaleDigits(str.substr(1)).substr(0, this.maximumFractionDigits)}`;
    }
    isFractionIncomplete(str) {
        return !!this.normalizeDigits(this.stripGroupingSeparator(str)).match(new RegExp(`^${INTEGER_PATTERN}${escapeRegExp(this.decimalSymbol)}$`));
    }
    isNegative(str) {
        return (str.startsWith(this.negativePrefix) ||
            (this.minusSign === undefined && (str.startsWith('(') || str.startsWith('-'))) ||
            (this.minusSign !== undefined && str.replace('-', this.minusSign).startsWith(this.minusSign)));
    }
    insertCurrency(str, negative) {
        return `${negative ? this.negativePrefix : this.prefix}${str}${negative ? this.negativeSuffix : this.suffix}`;
    }
    stripGroupingSeparator(str) {
        return this.groupingSymbol !== undefined ? str.replace(new RegExp(escapeRegExp(this.groupingSymbol), 'g'), '') : str;
    }
    stripSignLiterals(str) {
        if (this.minusSign !== undefined) {
            return str.replace('-', this.minusSign).replace(this.minusSign, '');
        }
        else {
            return str.replace(/[-()]/g, '');
        }
    }
    stripCurrency(str, negative) {
        return str.replace(negative ? this.negativePrefix : this.prefix, '').replace(negative ? this.negativeSuffix : this.suffix, '');
    }
    normalizeDecimalSeparator(str, from) {
        DECIMAL_SEPARATORS.forEach((s) => {
            str = str.substr(0, from) + str.substr(from).replace(s, this.decimalSymbol);
        });
        return str;
    }
    normalizeDigits(str) {
        if (this.digits[0] !== '0') {
            this.digits.forEach((digit, index) => {
                str = str.replace(new RegExp(digit, 'g'), String(index));
            });
        }
        return str;
    }
    onlyDigits(str) {
        return this.normalizeDigits(str).replace(/\D+/g, '');
    }
    onlyLocaleDigits(str) {
        return str.replace(new RegExp(`[^${this.digits.join('')}]*`, 'g'), '');
    }
}

class AbstractInputMask {
    constructor(currencyFormat) {
        this.currencyFormat = currencyFormat;
    }
}
class DefaultInputMask extends AbstractInputMask {
    conformToMask(str, previousConformedValue = '') {
        const negative = this.currencyFormat.isNegative(str);
        const isEmptyNegativeValue = (str) => str === '' &&
            negative &&
            !(this.currencyFormat.minusSign === undefined
                ? previousConformedValue === this.currencyFormat.negativePrefix + this.currencyFormat.negativeSuffix
                : previousConformedValue === this.currencyFormat.negativePrefix);
        const checkIncompleteValue = (str) => {
            if (isEmptyNegativeValue(str)) {
                return '';
            }
            else if (this.currencyFormat.maximumFractionDigits > 0) {
                if (this.currencyFormat.isFractionIncomplete(str)) {
                    return str;
                }
                else if (str.startsWith(this.currencyFormat.decimalSymbol)) {
                    return this.currencyFormat.toFraction(str);
                }
            }
            return null;
        };
        let value = str;
        value = this.currencyFormat.stripCurrency(value, negative);
        value = this.currencyFormat.stripSignLiterals(value);
        const incompleteValue = checkIncompleteValue(value);
        if (incompleteValue != null) {
            return this.currencyFormat.insertCurrency(incompleteValue, negative);
        }
        const [integer, ...fraction] = value.split(this.currencyFormat.decimalSymbol);
        const integerDigits = removeLeadingZeros(this.currencyFormat.onlyDigits(integer));
        const fractionDigits = this.currencyFormat.onlyDigits(fraction.join('')).substr(0, this.currencyFormat.maximumFractionDigits);
        const invalidFraction = fraction.length > 0 && fractionDigits.length === 0;
        const invalidNegativeValue = integerDigits === '' &&
            negative &&
            (this.currencyFormat.minusSign === undefined
                ? previousConformedValue === str.slice(0, -2) + this.currencyFormat.negativeSuffix
                : previousConformedValue === str.slice(0, -1));
        if (invalidFraction || invalidNegativeValue || isEmptyNegativeValue(integerDigits)) {
            return previousConformedValue;
        }
        else if (integerDigits.match(/\d+/)) {
            return {
                numberValue: Number(`${negative ? '-' : ''}${integerDigits}.${fractionDigits}`),
                fractionDigits
            };
        }
        else {
            return '';
        }
    }
}
class AutoDecimalDigitsInputMask extends AbstractInputMask {
    conformToMask(str, previousConformedValue = '') {
        if (str === '' ||
            (this.currencyFormat.parse(previousConformedValue) === 0 &&
                this.currencyFormat.stripCurrency(previousConformedValue, true).slice(0, -1) === this.currencyFormat.stripCurrency(str, true))) {
            return '';
        }
        const negative = this.currencyFormat.isNegative(str);
        const numberValue = this.currencyFormat.stripSignLiterals(str) === ''
            ? -0
            : Number(`${negative ? '-' : ''}${removeLeadingZeros(this.currencyFormat.onlyDigits(str))}`) / Math.pow(10, this.currencyFormat.maximumFractionDigits);
        return {
            numberValue,
            fractionDigits: numberValue.toFixed(this.currencyFormat.maximumFractionDigits).slice(-this.currencyFormat.maximumFractionDigits)
        };
    }
}

const DEFAULT_OPTIONS = {
    locale: undefined,
    currency: undefined,
    currencyDisplay: undefined,
    exportValueAsInteger: false,
    hideGroupingSeparatorOnFocus: true,
    hideCurrencySymbolOnFocus: true,
    hideNegligibleDecimalDigitsOnFocus: true,
    precision: undefined,
    autoDecimalDigits: false,
    valueRange: undefined,
    autoSign: true,
    useGrouping: true,
    valueScaling: undefined
};
class CurrencyInput {
    constructor(el, options) {
        this.el = el;
        this.numberValue = null;
        this.addEventListener();
        this.init(options);
        this.setValue(this.currencyFormat.parse(this.el.value));
    }
    setOptions(options) {
        this.init(options);
        this.applyFixedFractionFormat(this.numberValue, true);
    }
    getValue() {
        const numberValue = this.valueScaling && this.numberValue != null ? this.toInteger(this.numberValue, this.valueScaling) : this.numberValue;
        return { number: numberValue, formatted: this.formattedValue };
    }
    setValue(value) {
        const newValue = this.valueScaling !== undefined && value != null ? this.toFloat(value, this.valueScaling) : value;
        if (newValue !== this.numberValue) {
            this.applyFixedFractionFormat(newValue);
        }
    }
    dispatchEvent(eventName) {
        this.el.dispatchEvent(new CustomEvent(eventName, { detail: this.getValue() }));
    }
    init(options) {
        this.options = {
            ...DEFAULT_OPTIONS,
            ...options
        };
        if (this.options.autoDecimalDigits) {
            this.options.hideNegligibleDecimalDigitsOnFocus = false;
            this.el.setAttribute('inputmode', 'numeric');
        }
        else {
            this.el.setAttribute('inputmode', 'decimal');
        }
        this.currencyFormat = new CurrencyFormat(this.options);
        this.numberMask = this.options.autoDecimalDigits ? new AutoDecimalDigitsInputMask(this.currencyFormat) : new DefaultInputMask(this.currencyFormat);
        const valueScalingOptions = {
            [ValueScaling.precision]: this.currencyFormat.maximumFractionDigits,
            [ValueScaling.thousands]: 3,
            [ValueScaling.millions]: 6,
            [ValueScaling.billions]: 9
        };
        if (this.options.exportValueAsInteger) {
            this.valueScaling = valueScalingOptions[ValueScaling.precision];
        }
        else {
            this.valueScaling = this.options.valueScaling ? valueScalingOptions[this.options.valueScaling] : undefined;
        }
        this.valueScalingFractionDigits =
            this.valueScaling !== undefined && this.options.valueScaling !== ValueScaling.precision
                ? this.valueScaling + this.currencyFormat.maximumFractionDigits
                : this.currencyFormat.maximumFractionDigits;
        this.minValue = this.getMinValue();
        this.maxValue = this.getMaxValue();
    }
    getMinValue() {
        var _a, _b;
        let min = this.toFloat(-Number.MAX_SAFE_INTEGER);
        if (((_a = this.options.valueRange) === null || _a === void 0 ? void 0 : _a.min) !== undefined) {
            min = Math.max((_b = this.options.valueRange) === null || _b === void 0 ? void 0 : _b.min, this.toFloat(-Number.MAX_SAFE_INTEGER));
        }
        if (!this.options.autoSign && min < 0) {
            min = 0;
        }
        return min;
    }
    getMaxValue() {
        var _a, _b;
        let max = this.toFloat(Number.MAX_SAFE_INTEGER);
        if (((_a = this.options.valueRange) === null || _a === void 0 ? void 0 : _a.max) !== undefined) {
            max = Math.min((_b = this.options.valueRange) === null || _b === void 0 ? void 0 : _b.max, this.toFloat(Number.MAX_SAFE_INTEGER));
        }
        if (!this.options.autoSign && max < 0) {
            max = this.toFloat(Number.MAX_SAFE_INTEGER);
        }
        return max;
    }
    toFloat(value, maxFractionDigits) {
        return value / Math.pow(10, maxFractionDigits !== null && maxFractionDigits !== void 0 ? maxFractionDigits : this.valueScalingFractionDigits);
    }
    toInteger(value, maxFractionDigits) {
        return Number(value
            .toFixed(maxFractionDigits !== null && maxFractionDigits !== void 0 ? maxFractionDigits : this.valueScalingFractionDigits)
            .split('.')
            .join(''));
    }
    validateValueRange(value) {
        return value != null ? Math.min(Math.max(value, this.minValue), this.maxValue) : value;
    }
    applyFixedFractionFormat(number, forcedChange = false) {
        this.format(this.currencyFormat.format(this.validateValueRange(number)));
        if (number !== this.numberValue || forcedChange) {
            this.dispatchEvent('change');
        }
    }
    format(value, hideNegligibleDecimalDigits = false) {
        if (value != null) {
            if (this.decimalSymbolInsertedAt !== undefined) {
                value = this.currencyFormat.normalizeDecimalSeparator(value, this.decimalSymbolInsertedAt);
                this.decimalSymbolInsertedAt = undefined;
            }
            const conformedValue = this.numberMask.conformToMask(value, this.formattedValue);
            let formattedValue;
            if (typeof conformedValue === 'object') {
                const { numberValue, fractionDigits } = conformedValue;
                let { maximumFractionDigits, minimumFractionDigits } = this.currencyFormat;
                if (this.focus) {
                    minimumFractionDigits = hideNegligibleDecimalDigits
                        ? fractionDigits.replace(/0+$/, '').length
                        : Math.min(maximumFractionDigits, fractionDigits.length);
                }
                else if (Number.isInteger(numberValue) && !this.options.autoDecimalDigits && (this.options.precision === undefined || minimumFractionDigits === 0)) {
                    minimumFractionDigits = maximumFractionDigits = 0;
                }
                formattedValue =
                    this.toInteger(Math.abs(numberValue)) > Number.MAX_SAFE_INTEGER
                        ? this.formattedValue
                        : this.currencyFormat.format(numberValue, {
                            useGrouping: this.options.useGrouping && !(this.focus && this.options.hideGroupingSeparatorOnFocus),
                            minimumFractionDigits,
                            maximumFractionDigits
                        });
            }
            else {
                formattedValue = conformedValue;
            }
            if (this.options.autoSign) {
                if (this.maxValue <= 0 && !this.currencyFormat.isNegative(formattedValue) && this.currencyFormat.parse(formattedValue) !== 0) {
                    formattedValue = formattedValue.replace(this.currencyFormat.prefix, this.currencyFormat.negativePrefix);
                }
                if (this.minValue >= 0) {
                    formattedValue = formattedValue.replace(this.currencyFormat.negativePrefix, this.currencyFormat.prefix);
                }
            }
            if (this.options.currencyDisplay === CurrencyDisplay.hidden || (this.focus && this.options.hideCurrencySymbolOnFocus)) {
                formattedValue = formattedValue
                    .replace(this.currencyFormat.negativePrefix, this.currencyFormat.minusSign !== undefined ? this.currencyFormat.minusSign : '(')
                    .replace(this.currencyFormat.negativeSuffix, this.currencyFormat.minusSign !== undefined ? '' : ')')
                    .replace(this.currencyFormat.prefix, '')
                    .replace(this.currencyFormat.suffix, '');
            }
            this.el.value = formattedValue;
            this.numberValue = this.currencyFormat.parse(formattedValue);
        }
        else {
            this.el.value = '';
            this.numberValue = null;
        }
        this.formattedValue = this.el.value;
        this.dispatchEvent('input');
    }
    addEventListener() {
        this.el.addEventListener('input', (e) => {
            if (!e.detail) {
                const { value, selectionStart } = this.el;
                const inputEvent = e;
                if (selectionStart && inputEvent.data && DECIMAL_SEPARATORS.includes(inputEvent.data)) {
                    this.decimalSymbolInsertedAt = selectionStart - 1;
                }
                this.format(value);
                if (this.focus && selectionStart != null) {
                    const getCaretPositionAfterFormat = () => {
                        const { prefix, suffix, decimalSymbol, maximumFractionDigits, groupingSymbol } = this.currencyFormat;
                        let caretPositionFromLeft = value.length - selectionStart;
                        const newValueLength = this.formattedValue.length;
                        if (this.currencyFormat.minusSign === undefined && (value.startsWith('(') || value.startsWith('-')) && !value.endsWith(')')) {
                            return newValueLength - this.currencyFormat.negativeSuffix.length > 1 ? this.formattedValue.substring(selectionStart).length : 1;
                        }
                        if (this.formattedValue.substr(selectionStart, 1) === groupingSymbol &&
                            count(this.formattedValue, groupingSymbol) === count(value, groupingSymbol) + 1) {
                            return newValueLength - caretPositionFromLeft - 1;
                        }
                        if (newValueLength < caretPositionFromLeft) {
                            return selectionStart;
                        }
                        if (decimalSymbol !== undefined && value.indexOf(decimalSymbol) !== -1) {
                            const decimalSymbolPosition = value.indexOf(decimalSymbol) + 1;
                            if (Math.abs(newValueLength - value.length) > 1 && selectionStart <= decimalSymbolPosition) {
                                return this.formattedValue.indexOf(decimalSymbol) + 1;
                            }
                            else {
                                if (!this.options.autoDecimalDigits && selectionStart > decimalSymbolPosition) {
                                    if (this.currencyFormat.onlyDigits(value.substr(decimalSymbolPosition)).length - 1 === maximumFractionDigits) {
                                        caretPositionFromLeft -= 1;
                                    }
                                }
                            }
                        }
                        return this.options.hideCurrencySymbolOnFocus || this.options.currencyDisplay === CurrencyDisplay.hidden
                            ? newValueLength - caretPositionFromLeft
                            : Math.max(newValueLength - Math.max(caretPositionFromLeft, suffix.length), prefix.length);
                    };
                    this.setCaretPosition(getCaretPositionAfterFormat());
                }
            }
        }, { capture: true });
        this.el.addEventListener('focus', () => {
            this.focus = true;
            setTimeout(() => {
                const { value, selectionStart, selectionEnd } = this.el;
                this.format(value, this.options.hideNegligibleDecimalDigitsOnFocus);
                if (selectionStart != null && selectionEnd != null && Math.abs(selectionStart - selectionEnd) > 0) {
                    this.setCaretPosition(0, this.el.value.length);
                }
                else if (selectionStart != null) {
                    const caretPositionOnFocus = this.getCaretPositionOnFocus(value, selectionStart);
                    this.setCaretPosition(caretPositionOnFocus);
                }
            });
        });
        this.el.addEventListener('blur', () => {
            this.focus = false;
            this.applyFixedFractionFormat(this.numberValue);
        });
        this.el.addEventListener('change', (e) => {
            if (!e.detail) {
                this.dispatchEvent('change');
            }
        }, { capture: true });
    }
    getCaretPositionOnFocus(value, selectionStart) {
        if (this.numberValue == null) {
            return selectionStart;
        }
        const { prefix, negativePrefix, suffix, negativeSuffix, groupingSymbol, currency } = this.currencyFormat;
        const isNegative = this.numberValue < 0;
        const currentPrefix = isNegative ? negativePrefix : prefix;
        const prefixLength = currentPrefix.length;
        if (this.options.hideCurrencySymbolOnFocus || this.options.currencyDisplay === CurrencyDisplay.hidden) {
            if (isNegative) {
                if (selectionStart <= 1) {
                    return 1;
                }
                else if (value.endsWith(')') && selectionStart > value.indexOf(')')) {
                    return this.formattedValue.length - 1;
                }
            }
        }
        else {
            const suffixLength = isNegative ? negativeSuffix.length : suffix.length;
            if (selectionStart >= value.length - suffixLength) {
                return this.formattedValue.length - suffixLength;
            }
            else if (selectionStart < prefixLength) {
                return prefixLength;
            }
        }
        let result = selectionStart;
        if (this.options.hideCurrencySymbolOnFocus &&
            this.options.currencyDisplay !== CurrencyDisplay.hidden &&
            selectionStart >= prefixLength &&
            currency !== undefined &&
            currentPrefix.includes(currency)) {
            result -= prefixLength;
            if (isNegative) {
                result += 1;
            }
        }
        if (this.options.hideGroupingSeparatorOnFocus && groupingSymbol !== undefined) {
            result -= count(value.substring(0, selectionStart), groupingSymbol);
        }
        return result;
    }
    setCaretPosition(start, end = start) {
        this.el.setSelectionRange(start, end);
    }
}

const findInput = (el) => ((el === null || el === void 0 ? void 0 : el.matches('input')) ? el : el === null || el === void 0 ? void 0 : el.querySelector('input'));
var useCurrencyInput = (options) => {
    var _a;
    let numberInput;
    let input;
    const inputRef = vue.ref(null);
    const formattedValue = vue.ref(null);
    const instance = vue.getCurrentInstance();
    const emit = (event, value) => instance === null || instance === void 0 ? void 0 : instance.emit(event, value);
    const lazyModel = ((_a = instance === null || instance === void 0 ? void 0 : instance.attrs.modelModifiers) === null || _a === void 0 ? void 0 : _a.lazy);
    const numberValue = vue.computed(() => instance === null || instance === void 0 ? void 0 : instance.props['modelValue' ]);
    const inputEvent = 'update:modelValue' ;
    const changeEvent = lazyModel ? 'update:modelValue' : 'change';
    const hasInputEventListener = !lazyModel;
    const hasChangeEventListener = lazyModel || !(instance === null || instance === void 0 ? void 0 : instance.attrs.onChange);
    const onInput = (e) => {
        if (e.detail) {
            if (numberValue.value !== e.detail.number) {
                emit(inputEvent, e.detail.number);
            }
            formattedValue.value = e.detail.formatted;
        }
    };
    const onChange = (e) => {
        if (e.detail) {
            emit(changeEvent, e.detail.number);
            formattedValue.value = e.detail.formatted;
        }
    };
    vue.watch(inputRef, (value) => {
        var _a, _b;
        if (value) {
            input = findInput((_b = (_a = value) === null || _a === void 0 ? void 0 : _a.$el) !== null && _b !== void 0 ? _b : value);
            if (input) {
                numberInput = new CurrencyInput(input, options);
                if (hasInputEventListener) {
                    input.addEventListener('input', onInput);
                }
                if (hasChangeEventListener) {
                    input.addEventListener('change', onChange);
                }
                numberInput.setValue(numberValue.value);
            }
            else {
                console.error('No input element found. Please make sure that the "inputRef" template ref is properly assigned.');
            }
        }
        else {
            numberInput = null;
        }
    });
    vue.onUnmounted(() => {
        if (hasInputEventListener) {
            input === null || input === void 0 ? void 0 : input.removeEventListener('input', onInput);
        }
        if (hasChangeEventListener) {
            input === null || input === void 0 ? void 0 : input.removeEventListener('change', onChange);
        }
    });
    return {
        inputRef,
        formattedValue,
        setValue: (value) => numberInput === null || numberInput === void 0 ? void 0 : numberInput.setValue(value),
        setOptions: (options) => numberInput === null || numberInput === void 0 ? void 0 : numberInput.setOptions(options)
    };
};

var script$j = {
        props: {
            readonly: {
                type: Boolean,
                default: () => { return false }
            },
            disabled: {
                type: Boolean,
                default: () => { return false }
            },
            modelValue: {},
            options: Object
        },

        setup (props) {
            const { formattedValue, inputRef } = useCurrencyInput(Object.assign({
                autoDecimalDigits: true,
                exportValueAsInteger: true,
                locale: 'pt-BR',
                currency: 'BRL'
            }, props.options));

            return { inputRef, formattedValue }
        },

        methods: {
            focus() {
                this.$refs.inputRef.focus();
            }
        }
    };

const _hoisted_1$i = ["value", "readonly", "disabled"];

function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", {
    class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",
    type: "text",
    value: $props.modelValue,
    readonly: $props.readonly,
    disabled: $props.disabled,
    ref: "inputRef"
  }, null, 8 /* PROPS */, _hoisted_1$i))
}

script$j.render = render$j;
script$j.__file = "src/js/Jetstream/CurrencyInput.vue";

var script$i = {
        props: {
            type: {
                type: String,
                default: 'button',
            },
        }
    };

const _hoisted_1$h = ["type"];

function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("button", {
    type: $props.type,
    class: "inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25 transition"
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 8 /* PROPS */, _hoisted_1$h))
}

script$i.render = render$i;
script$i.__file = "src/js/Jetstream/DangerButton.vue";

var script$h = {
        emits: ['submitted'],

        components: {
            JetSectionTitle: script$u,
        },

        props: ['responsive'],

        computed: {
            hasActions() {
                return !! this.$slots.actions
            }
        }
    };

const _hoisted_1$g = { class: "mt-5 md:mt-0 md:col-span-2" };
const _hoisted_2$c = { class: "grid grid-cols-6 gap-6" };
const _hoisted_3$a = {
  key: 0,
  class: "flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md dark:bg-black dark:text-white"
};

function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_jet_section_title = vue.resolveComponent("jet-section-title");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["md:grid md:grid-cols-3 md:gap-6", {'lg:grid-cols-1 lg:gap-3': $props.responsive}])
  }, [
    vue.createVNode(_component_jet_section_title, null, {
      title: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "title")
      ]),
      description: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "description")
      ]),
      _: 3 /* FORWARDED */
    }),
    vue.createElementVNode("div", _hoisted_1$g, [
      vue.createElementVNode("form", {
        onSubmit: _cache[0] || (_cache[0] = vue.withModifiers($event => (_ctx.$emit('submitted')), ["prevent"]))
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["px-4 py-5 bg-white sm:p-6 dark:bg-gray-900 shadow", $options.hasActions ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md'])
        }, [
          vue.createElementVNode("div", _hoisted_2$c, [
            vue.renderSlot(_ctx.$slots, "form")
          ])
        ], 2 /* CLASS */),
        ($options.hasActions)
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$a, [
              vue.renderSlot(_ctx.$slots, "actions")
            ]))
          : vue.createCommentVNode("v-if", true)
      ], 32 /* HYDRATE_EVENTS */)
    ])
  ], 2 /* CLASS */))
}

script$h.render = render$h;
script$h.__file = "src/js/Jetstream/FormSection.vue";

var script$g = {

        props: {
            heading: String,
            response: Object,
            show: {
                default: false
            },
            closeText: {
                type: String,
                default: 'Ok'
            }
        },
        emits: ['close'],

        components: {
            JetDialogModal: script$E,
            JetSecondaryButton: script$C
        },

        
    };

const _hoisted_1$f = /*#__PURE__*/vue.createTextVNode(" Oops... ");
const _hoisted_2$b = { class: "text-lg font-semibold mb-3" };
const _hoisted_3$9 = { class: "text-red-600 mb-2" };
const _hoisted_4$5 = {
  key: 0,
  class: "list-disc"
};

function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_jet_secondary_button = vue.resolveComponent("jet-secondary-button");
  const _component_jet_dialog_modal = vue.resolveComponent("jet-dialog-modal");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createCommentVNode(" Payment Error Modal "),
    vue.createVNode(_component_jet_dialog_modal, {
      show: $props.show,
      onClose: _cache[1] || (_cache[1] = $event => (_ctx.$emit('close'))),
      closeable: true
    }, {
      title: vue.withCtx(() => [
        _hoisted_1$f
      ]),
      content: vue.withCtx(() => [
        vue.createElementVNode("h3", _hoisted_2$b, vue.toDisplayString($props.heading), 1 /* TEXT */),
        vue.createElementVNode("p", _hoisted_3$9, vue.toDisplayString($props.response.message), 1 /* TEXT */),
        ($props.response.errors)
          ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_4$5, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.response.errors, (error, idx) => {
                return (vue.openBlock(), vue.createElementBlock("li", {
                  key: idx,
                  class: "text-red-600 flex flex-col py-1 break-words"
                }, [
                  vue.createCommentVNode(" <strong class=\"text-bold\">{{ __(idx) }}:</strong> "),
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(error, (message) => {
                    return (vue.openBlock(), vue.createElementBlock("span", { key: message }, vue.toDisplayString(message), 1 /* TEXT */))
                  }), 128 /* KEYED_FRAGMENT */))
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ]))
          : vue.createCommentVNode("v-if", true)
      ]),
      footer: vue.withCtx(() => [
        vue.createVNode(_component_jet_secondary_button, {
          onClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('close')))
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString($props.closeText), 1 /* TEXT */)
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["show"])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$g.render = render$g;
script$g.__file = "src/js/Jetstream/HttpErrorDialogModal.vue";

var script$f = {
        props: {
            readonly: {
                type: Boolean,
                default: () => { return false }
            },
            disabled: {
                type: Boolean,
                default: () => { return false }
            },
            rows: {
                type: Number,
                default: () => { return 3 }
            },
            cols: {
                type: Number
            },
            placeholder: {
                type: String
            },
            modelValue: {}
        },

        emits: ['update:modelValue'],

        methods: {
            focus() {
                this.$refs.textarea.focus();
            }
        }
    };

const _hoisted_1$e = ["rows", "cols", "readonly", "placeholder", "disabled"];

function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("textarea", {
    class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-indigo-400",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($props.modelValue) = $event)),
    onInput: _cache[1] || (_cache[1] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
    rows: $props.rows,
    cols: $props.cols,
    readonly: $props.readonly,
    placeholder: $props.placeholder,
    disabled: $props.disabled,
    ref: "textarea"
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$e)), [
    [vue.vModelText, $props.modelValue]
  ])
}

script$f.render = render$f;
script$f.__file = "src/js/Jetstream/Textarea.vue";

var script$e = {
        components: {
            JetInput: script$l,
            EyeOffIcon: render$U,
            EyeIcon: render$T
        },
        props: {
            inputClass: '',
        },

        emits: ['update:modelValue'],

        computed: {
            attrType() {
                return this.visibility ? 'text' : 'password';
            }
        },

        data() {
            return {
                visibility: false,
                modelValue: ''
            }
        },

        methods: {
            togglePasswordVisibility() {
                this.visibility = !this.visibility;
            },

            onInput(ev) {
                this.modelValue = String(ev.target.value).substring(0, 6);
                this.$emit('update:modelValue', this.modelValue);
            }
        }
    };

const _hoisted_1$d = { class: "relative w-full" };
const _hoisted_2$a = ["type"];

function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_EyeOffIcon = vue.resolveComponent("EyeOffIcon");
  const _component_EyeIcon = vue.resolveComponent("EyeIcon");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$d, [
    vue.withDirectives(vue.createElementVNode("input", {
      type: $options.attrType,
      class: vue.normalizeClass([$props.inputClass, "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm py-6 pr-10 w-full"]),
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.modelValue) = $event)),
      onInput: _cache[1] || (_cache[1] = $event => ($options.onInput($event))),
      onBlur: _cache[2] || (_cache[2] = $event => ($data.visibility = false)),
      disabled: false,
      required: true,
      autocomplete: false,
      ref: "input",
      inputmode: "tel",
      max: 6,
      min: 6
    }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_2$a), [
      [vue.vModelDynamic, $data.modelValue]
    ]),
    vue.createElementVNode("div", {
      class: "absolute top-0.5 right-2 p-2 cursor-pointer",
      onClick: _cache[3] || (_cache[3] = (...args) => ($options.togglePasswordVisibility && $options.togglePasswordVisibility(...args)))
    }, [
      (!$data.visibility)
        ? (vue.openBlock(), vue.createBlock(_component_EyeOffIcon, {
            key: 0,
            class: "w-5 h-5"
          }))
        : (vue.openBlock(), vue.createBlock(_component_EyeIcon, {
            key: 1,
            class: "w-5 h-5"
          }))
    ])
  ]))
}

script$e.render = render$e;
script$e.__file = "src/js/Jetstream/InputPin.vue";

var script$d = {

        props: {
            heading: String,
            response: Object,
            show: {
                default: false
            },
            closeText: {
                type: String,
                default: 'Cancelar'
            },
            authorizeText: {
                type: String,
                default: 'Autorizar'
            }
        },
        emits: ['close', 'authorized', 'rejected', 'input', 'clear'],

        components: {
            JetDialogModal: script$E,
            JetSecondaryButton: script$C,
            JetButton: script$D,
            JetInputPin: script$e
        },

        data() {
            return {
                loading: false,
                length: 6,
                value: '',
                validation: /\d/g,
                invalid: false
            }
        },

        watch: {
            show(flag) {
                if(flag) {
                    this.$nextTick(() => {
                        this.$refs['pin-0'].focus();
                    });
                }
            }
        },

        computed: {
            valueIsValid() {
                return this.valueLength === this.length;
            },

            valueLength() {
                return _.size(_.trim(String(this.value)));
            }
        },

        methods: {
            cancel() {
                this.clear();
                this.$emit('close');
            },

            authorize() {

                let self = this;
                self.loading = true;
                self.invalid = false;
                axios.post(route('api.account.check-pin'), {
                    pin: self.value
                }).then((response) => {
                    self.loading = false;
                    self.$emit('authorized', self.value);
                    self.cancel();
                }).catch((error) => {
                    self.loading = false;
                    console.error('error', error);
                    if(error.response.status === 403) {
                        self.invalid = true;
                        self.$emit('rejected', self.value);
                        self.clear();
                    }
                });
            },

            clear() {
                Array.from({ length: this.length }, (empty, index) => {
                    this.$refs['pin-'+index].value = '';
                });
                this.updateValue();
                this.$emit('clear');
            },

            updateValue() {
                this.value = Array.from({ length: this.length }, (empty, index) => {
                    return this.$refs['pin-'+index].value || ' '
                }).join('');
            },
            handleInput(pin) {
                const value = pin.value.match(this.validation);
                // if the input doesn't match our needs, don't do anything
                if (!value || !value.length) {
                    pin.value = '';
                    this.focusPreviousRef(pin.getAttribute('pin-position'));
                    return
                }
                
                // TODO: We could check here if the value.length = length then check against a database

                pin.value = this.$filters.onlyNumbers(value);
                this.updateValue();
                this.focusNextRef(pin.getAttribute('pin-position'));

                if(this.invalid) {
                    this.invalid = false;
                }
            },
            handlePaste(event) {
                // TODO: this validation might not be what your app requires (this one is numbers only)
                const text = event.clipboardData.getData('Text').match(this.validation);
                if (!text || !text.length) return
                // Get the starting input
                const pastedFrom = parseInt(event.target.getAttribute('pin-position'), 10);
                // This filters only numbers, then slices based on how many inputs remain
                const remainingInputs = this.length - pastedFrom;
                const value = text.slice(0, remainingInputs).join('');
                // Figure out what inputs we need to update
                const inputsToUpdate = Array.from(Array(remainingInputs), (empty, index) => {
                    return index + pastedFrom
                }).splice(0, value.length);
                // Update the values
                inputsToUpdate.forEach((ref, i) => {
                    this.$refs['pin-'+ref].value = value[i];
                });
                // Focus the last input we updated
                this.focusNextRef(inputsToUpdate.pop());
                this.updateValue();
            },
            focusNextRef(current) {
                const next = parseInt(current, 10) + 1;
                if (!this.$refs['pin-'+next]) {
                    // If next doesn't exist, focus the last. A real app might auto check the database or focus a button
                    this.$refs['pin-'+ (parseInt(this.length, 10) - 1)].focus();
                    this.$refs['pin-'+ (parseInt(this.length, 10) - 1)].select();
                    return
                }
                this.$refs['pin-'+next].focus();
                this.$refs['pin-'+next].select();
            },
            focusPreviousRef(current) {
                const previous = parseInt(current, 10) - 1;
                this.$refs['pin-'+previous] && this.$refs['pin-'+previous].focus();
                this.$refs['pin-'+previous] && this.$refs['pin-'+previous].select();
            },

        }

        
    };

const _hoisted_1$c = /*#__PURE__*/vue.createTextVNode(" Código PIN ");
const _hoisted_2$9 = /*#__PURE__*/vue.createElementVNode("h3", { class: "text-lg font-semibold mb-3" }, "Autorize esta ação com o código PIN", -1 /* HOISTED */);
const _hoisted_3$8 = ["onKeydown", "aria-label", "pin-position"];
const _hoisted_4$4 = { class: "text-red-500 font-semibold m-3" };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_jet_secondary_button = vue.resolveComponent("jet-secondary-button");
  const _component_jet_button = vue.resolveComponent("jet-button");
  const _component_jet_dialog_modal = vue.resolveComponent("jet-dialog-modal");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createCommentVNode(" Payment Error Modal "),
    vue.createVNode(_component_jet_dialog_modal, {
      show: $props.show,
      onClose: $options.cancel,
      closeable: true
    }, {
      title: vue.withCtx(() => [
        _hoisted_1$c
      ]),
      content: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          _hoisted_2$9
        ]),
        vue.createCommentVNode(" <jet-input-pin v-model=\"pin_number\" @input=\"$emit('input', pin_number)\" /> "),
        vue.createElementVNode("form", {
          id: "enter-pin",
          class: "flex flex-row flex-wrap justify-center space-x-2",
          onSubmit: _cache[1] || (_cache[1] = vue.withModifiers($event => (_ctx.handleSubmit()), ["prevent"])),
          onPaste: _cache[2] || (_cache[2] = vue.withModifiers($event => ($options.handlePaste($event)), ["prevent"])),
          ref: "pinFormRef",
          autocomplete: "off"
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(Array.from({ length: $data.length }), (input, index) => {
            return (vue.openBlock(), vue.createElementBlock("input", {
              key: index,
              onInput: _cache[0] || (_cache[0] = vue.withModifiers($event => ($options.handleInput($event.target)), ["prevent"])),
              onKeydown: [
                vue.withKeys($event => ($event.target.value || $options.focusPreviousRef(index)), ["backspace"]),
                vue.withKeys($event => ($event.target.value || $options.focusPreviousRef(index)), ["delete"])
              ],
              "aria-label": `PIN ${index + 1}`,
              ref_for: true,
              ref: 'pin-'+index,
              "pin-position": index,
              class: "w-10 font-lg font-bold mb-4 rounded border border-gray-200 p-2 text-center appearance-none dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600",
              type: "password",
              inputmode: "tel",
              maxlength: "1",
              autocomplete: "off",
              autocorrect: "off",
              spellcheck: "false",
              required: ""
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3$8))
          }), 128 /* KEYED_FRAGMENT */))
        ], 544 /* HYDRATE_EVENTS, NEED_PATCH */),
        vue.withDirectives(vue.createElementVNode("p", _hoisted_4$4, " O PIN informado é inválido. ", 512 /* NEED_PATCH */), [
          [vue.vShow, $data.invalid]
        ])
      ]),
      footer: vue.withCtx(() => [
        vue.createVNode(_component_jet_secondary_button, {
          class: "mr-2",
          onClick: $options.cancel,
          disabled: $data.loading
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString($props.closeText), 1 /* TEXT */)
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick", "disabled"]),
        vue.createVNode(_component_jet_button, {
          onClick: $options.authorize,
          disabled: $data.loading || !$options.valueIsValid
        }, {
          default: vue.withCtx(() => [
            (!$data.loading)
              ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5, vue.toDisplayString($props.authorizeText), 1 /* TEXT */))
              : (vue.openBlock(), vue.createElementBlock("span", _hoisted_6, "Aguarde..."))
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick", "disabled"])
      ]),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["show", "onClose"])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$d.render = render$d;
script$d.__file = "src/js/Jetstream/PinRequestDialogModal.vue";

var script$c = {

        props: {
            wallet: {},
            show: {
                default: false
            },
            closeText: {
                type: String,
                default: 'Cancelar'
            },
            importText: {
                type: String,
                default: 'Importar'
            }
        },
        emits: ['wallet', 'close', 'imported'],

        components: {
            JetDialogModal: script$E,
            JetSecondaryButton: script$C,
            JetButton: script$D,
            JetLabel: script$x,
            JetTextarea: script$f,
            JetInputError: script$y,
            JetHttpErrorDialogModal: script$g,
            JetPinRequestDialogModal: script$d
        },

        computed: {
            wordsInSentence() {
                return _.isEmpty(this.importWalletForm.seed) ? 0 : String(this.importWalletForm.seed).split(" ").length;
            },
            seedWords() {
                return _.isEmpty(this.importWalletForm.seed) ? [] : String(this.importWalletForm.seed).split(" ");
            },
            walletSecretKey() {
                let key = String(this.wallet.address).substr(this.wallet.address.length-5);
                let secret = window.localStorage.getItem(key);
                return secret;
            },
        },

        data() {
            return {
                loading: false,
                importWalletForm: this.$inertia.form({
                    seed: '',
                }),
                errorResponse: {},
                hasError: false,
                recentlySuccessful: false,
                showingPinDialog: false
            }
        },
        

        methods: {
            cancel() {
                this.importWalletForm.reset();
                this.$emit('close');
            },

            wordLimiter(ev) {
                if(this.wordsInSentence > 25) {
                    this.importWalletForm.seed = String(this.importWalletForm.seed).split(" ").slice(0, 25).join(" ");
                }
            },

            handleErrorResponse(error) {
                let self = this;
                if (error.response) {
                    self.errorResponse = error.response.data;
                    _.each(self.errorResponse.errors, (error, idx) => {
                        _.each(error, (message) => {
                            self.importWalletForm.errors[idx] = message;
                        });
                    });  
                }

                self.hasError = true;
            },

            doImport(pinCode) {

                let self = this;
                self.loading = true;
                axios.post(route('api.wallets.store', self.wallet.address), {
                    name: self.wallet.name,
                    seed: self.importWalletForm.seed,
                    pin: pinCode,
                }).then((response) => {
                    self.loading = false;
                    self.recentlySuccessful = true;
                    response.data.data;
                    //window.localStorage.setItem(String(wallet.address).substr(_.size(wallet.address)-5), wallet.secret);
                    this.$emit('imported');
                    self.$bus.emit('updateWallet');
                    self.cancel();
                    console.log('create response', response);

                    
                }).catch((error) => {
                    self.loading = false;
                    console.error('error', error);
                    self.recentlySuccessful = false;
                    self.handleErrorResponse(error);
                });
            },

        }

        
    };

const _hoisted_1$b = /*#__PURE__*/vue.createTextVNode(" Importar Carteira ");
const _hoisted_2$8 = { class: "col-span-6 sm:col-span-4" };
const _hoisted_3$7 = { class: "font-bold" };
const _hoisted_4$3 = /*#__PURE__*/vue.createTextVNode(" de 25 palavras.");

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_jet_label = vue.resolveComponent("jet-label");
  const _component_jet_textarea = vue.resolveComponent("jet-textarea");
  const _component_jet_input_error = vue.resolveComponent("jet-input-error");
  const _component_jet_secondary_button = vue.resolveComponent("jet-secondary-button");
  const _component_jet_button = vue.resolveComponent("jet-button");
  const _component_jet_dialog_modal = vue.resolveComponent("jet-dialog-modal");
  const _component_jet_pin_request_dialog_modal = vue.resolveComponent("jet-pin-request-dialog-modal");
  const _component_jet_http_error_dialog_modal = vue.resolveComponent("jet-http-error-dialog-modal");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createCommentVNode(" Payment Error Modal "),
    vue.createVNode(_component_jet_dialog_modal, {
      show: $props.show,
      onClose: $options.cancel,
      closeable: true
    }, {
      title: vue.withCtx(() => [
        _hoisted_1$b
      ]),
      content: vue.withCtx(() => [
        vue.createCommentVNode(" Wallet Mnemonic "),
        vue.createElementVNode("div", _hoisted_2$8, [
          vue.createVNode(_component_jet_label, {
            for: "seed",
            value: "25 palavras de recuperação"
          }),
          vue.createVNode(_component_jet_textarea, {
            id: "seed",
            class: "mt-1 block w-full",
            placeholder: "Separadas por um espaço em branco",
            modelValue: $data.importWalletForm.seed,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.importWalletForm.seed) = $event)),
            onKeyup: $options.wordLimiter
          }, null, 8 /* PROPS */, ["modelValue", "onKeyup"]),
          vue.createVNode(_component_jet_input_error, {
            message: $data.importWalletForm.errors.seed,
            class: "mt-2"
          }, null, 8 /* PROPS */, ["message"]),
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["text-gray-700 text-xs mt-1", {'text-green-600': $options.wordsInSentence === 25, 'text-red-600': $options.wordsInSentence !== 25}])
          }, [
            vue.createElementVNode("span", _hoisted_3$7, vue.toDisplayString($options.wordsInSentence), 1 /* TEXT */),
            _hoisted_4$3
          ], 2 /* CLASS */)
        ])
      ]),
      footer: vue.withCtx(() => [
        vue.createVNode(_component_jet_secondary_button, {
          class: "mr-2",
          onClick: $options.cancel
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString($props.closeText), 1 /* TEXT */)
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"]),
        vue.createVNode(_component_jet_button, {
          onClick: _cache[1] || (_cache[1] = $event => ($data.showingPinDialog = true))
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString($props.importText), 1 /* TEXT */)
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["show", "onClose"]),
    vue.createVNode(_component_jet_pin_request_dialog_modal, {
      show: $data.showingPinDialog,
      onAuthorized: $options.doImport,
      onClose: _cache[2] || (_cache[2] = $event => ($data.showingPinDialog=false))
    }, null, 8 /* PROPS */, ["show", "onAuthorized"]),
    vue.createVNode(_component_jet_http_error_dialog_modal, {
      show: $data.hasError,
      response: $data.errorResponse,
      onClose: _cache[3] || (_cache[3] = $event => ($data.hasError = false)),
      heading: "Houve um problema ao importar a carteira"
    }, null, 8 /* PROPS */, ["show", "response"])
  ], 64 /* STABLE_FRAGMENT */))
}

script$c.render = render$c;
script$c.__file = "src/js/Jetstream/ImportWalletDialogModal.vue";

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var vMoney = createCommonjsModule(function (module, exports) {
(function(e,t){module.exports=t();})(commonjsGlobal,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r});},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=9)}([function(e,t,n){t.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2};},function(e,t,n){var r=n(2),i=n(5),u=n(0);t.a=function(e,t){if(t.value){var o=n.i(i.a)(u.a,t.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var a=e.getElementsByTagName("input");1!==a.length||(e=a[0]);}e.oninput=function(){var t=e.value.length-e.selectionEnd;e.value=n.i(r.a)(e.value,o),t=Math.max(t,o.suffix.length),t=e.value.length-t,t=Math.max(t,o.prefix.length+1),n.i(r.b)(e,t),e.dispatchEvent(n.i(r.c)("change"));},e.onfocus=function(){n.i(r.b)(e,e.value.length-o.suffix.length);},e.oninput(),e.dispatchEvent(n.i(r.c)("input"));}};},function(e,t,n){function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.a;"number"==typeof e&&(e=e.toFixed(o(t.precision)));var n=e.indexOf("-")>=0?"-":"",r=u(e),i=c(r,t.precision),a=d(i).split("."),p=a[0],l=a[1];return p=f(p,t.thousands),t.prefix+n+s(p,l,t.decimal)+t.suffix}function i(e,t){var n=e.indexOf("-")>=0?-1:1,r=u(e),i=c(r,t);return parseFloat(i)*n}function u(e){return d(e).replace(/\D+/g,"")||"0"}function o(e){return a(0,e,20)}function a(e,t,n){return Math.max(e,Math.min(t,n))}function c(e,t){var n=Math.pow(10,t);return (parseFloat(e)/n).toFixed(o(t))}function f(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+t)}function s(e,t,n){return t?e+n+t:e}function d(e){return e?e.toString():""}function p(e,t){var n=function(){e.setSelectionRange(t,t);};e===document.activeElement&&(n(),setTimeout(n,1));}function l(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var m=n(0);n.d(t,"a",function(){return r}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return p}),n.d(t,"c",function(){return l});},function(e,t,n){function r(e,t){t&&Object.keys(t).map(function(e){a.a[e]=t[e];}),e.directive("money",o.a),e.component("money",u.a);}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),u=n.n(i),o=n(1),a=n(0);n.d(t,"Money",function(){return u.a}),n.d(t,"VMoney",function(){return o.a}),n.d(t,"options",function(){return a.a}),n.d(t,"VERSION",function(){return c});var c="0.8.1";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r);},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),u=n(2);t.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return i.a.precision}},decimal:{type:String,default:function(){return i.a.decimal}},thousands:{type:String,default:function(){return i.a.thousands}},prefix:{type:String,default:function(){return i.a.prefix}},suffix:{type:String,default:function(){return i.a.suffix}}},directives:{money:r.a},data:function(){return {formattedValue:""}},watch:{value:{immediate:!0,handler:function(e,t){var r=n.i(u.a)(e,this.$props);r!==this.formattedValue&&(this.formattedValue=r);}}},methods:{change:function(e){this.$emit("input",this.masked?e.target.value:n.i(u.d)(e.target.value,this.precision));}}};},function(e,t,n){t.a=function(e,t){return e=e||{},t=t||{},Object.keys(e).concat(Object.keys(t)).reduce(function(n,r){return n[r]=void 0===t[r]?e[r]:t[r],n},{})};},function(e,t,n){var r=n(7)(n(4),n(8),null,null);e.exports=r.exports;},function(e,t){e.exports=function(e,t,n,r){var i,u=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(i=e,u=e.default);var a="function"==typeof u?u.options:u;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t};});}return {esModule:i,exports:u,options:a}};},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return (e._self._c||t)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{change:e.change}})},staticRenderFns:[]};},function(e,t,n){e.exports=n(3);}])});
});

unwrapExports(vMoney);
var vMoney_1 = vMoney.VMoney;

var script$b = {
        directives: {money: vMoney_1},
        props: {
            readonly: {
                type: Boolean,
                default: () => { return false }
            },
            disabled: {
                type: Boolean,
                default: () => { return false }
            },
            min: {
                type: Number,
                default: () => { return null }
            },
            max: {
                type: Number,
                default: () => { return null }
            },
            step: {
                type: Number,
                default: () => { return 1 }
            },
            decimals: {
                type: Number,
                default: () => { return 0 }
            },
            currency: {
                type: String,
                default: () => { return null }
            },
            cents: {
                type: Boolean,
                default: () => { return true }
            },
            modelValue: {},

            options: {
                type: Object,
                default: () => { 
                    return {
                        currency: 'BRL'
                    }
                }
            }
        },

        emits: ['update:modelValue'],

        data() {
            return {
                amount: this.formatAmount(this.modelValue)
            }
        },

        mounted() {
            this.$emit('update:modelValue', this.cents ? this.clearedInputValueCents : this.clearedInputValue);
        },

        watch: {
            min(val) {
                console.log('minValueUpdated', val);
                if(val > this.modelValue) {
                    this.$emit('update:modelValue', val);
                }
            }
        },

        computed: {
            money() {
                return {
                    decimal: ',',
                    thousands: '.',
                    prefix: this.currency ? this.currency + ' ' : '',
                    suffix: '',
                    precision: this.decimals,
                    masked: true /* doesn't work with directive */
                }
            },
            clearedInputValue() {
                return String(this.modelValue).trim().replace(/[^0-9,.]/g, "").replace('.', '').replace(',', '.');
            },
            clearedInputValueCents() {
                return parseInt(String(this.modelValue).replace(/[^0-9]/g, ""));
            },
            inputValue() {
                return this.currency + ' ' + this.clearedInputValue;
            }
        },

        methods: {

            debounceCall: _.debounce((callback, event) => {
                callback(event);
            }, 100),

            focus() {
                this.$refs.inputRef.focus();
            },

            formatAmount(amt) {

                let strValue = String(amt).replace('.', '').replace(/[^0-9,]/g, "");

                return this.$filters.currency(strValue, '', this.decimals, ',', '.', false);

            },

            onInput(ev) {
                let input = parseInt(String(ev.target.value).replace(/\D+/g, ''));

                if(this.min && input < this.min) {
                    console.log('min', this.min);
                    this.$emit('update:modelValue', this.min);
                }else {
                    this.$emit('update:modelValue', input);
                }
                
            }
        }
    };

const _hoisted_1$a = ["min", "max", "step", "readonly", "disabled", "data-value", "data-value-cents"];

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_money = vue.resolveDirective("money");

  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
    class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-indigo-400",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($props.modelValue) = $event)),
    min: $props.min,
    max: $props.max,
    step: $props.step,
    readonly: $props.readonly,
    disabled: $props.disabled,
    "data-value": $options.clearedInputValue,
    "data-value-cents": $options.clearedInputValueCents,
    ref: "inputRef",
    type: "text",
    inputmode: "numeric",
    onInput: _cache[1] || (_cache[1] = $event => ($options.debounceCall($options.onInput, $event)))
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$a)), [
    [
      vue.vModelText,
      $props.modelValue,
      void 0,
      { lazy: true }
    ],
    [_directive_money, $options.money]
  ])
}

script$b.render = render$b;
script$b.__file = "src/js/Jetstream/InputNumber.vue";

var script$a = {
        components: {
            JetInput: script$l,
            EyeOffIcon: render$U,
            EyeIcon: render$T
        },
        props: {
            disabled: false,
            modelValue: {},
            autocomplete: '',
            inputClass: '',
            required: false
        },

        emits: ['update:modelValue'],

        computed: {
            attrType() {
                return this.visibility ? 'text' : 'password';
            }
        },

        data() {
            return {
                visibility: false
            }
        },

        methods: {
            togglePasswordVisibility() {
                this.visibility = !this.visibility;
            }
        }
    };

const _hoisted_1$9 = { class: "relative w-full" };
const _hoisted_2$7 = ["type", "value", "disabled", "required", "autocomplete"];

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_EyeOffIcon = vue.resolveComponent("EyeOffIcon");
  const _component_EyeIcon = vue.resolveComponent("EyeIcon");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$9, [
    vue.createElementVNode("input", {
      type: $options.attrType,
      class: vue.normalizeClass([$props.inputClass, "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm pr-10 w-full dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-indigo-400"]),
      value: $props.modelValue,
      onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
      onBlur: _cache[1] || (_cache[1] = $event => ($data.visibility = false)),
      disabled: $props.disabled,
      required: $props.required,
      autocomplete: $props.autocomplete,
      ref: "input"
    }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_2$7),
    vue.createElementVNode("div", {
      class: "absolute top-0.5 right-2 p-2 cursor-pointer",
      onClick: _cache[2] || (_cache[2] = (...args) => ($options.togglePasswordVisibility && $options.togglePasswordVisibility(...args)))
    }, [
      (!$data.visibility)
        ? (vue.openBlock(), vue.createBlock(_component_EyeOffIcon, {
            key: 0,
            class: "w-5 h-5"
          }))
        : (vue.openBlock(), vue.createBlock(_component_EyeIcon, {
            key: 1,
            class: "w-5 h-5"
          }))
    ])
  ]))
}

script$a.render = render$a;
script$a.__file = "src/js/Jetstream/InputPassword.vue";

var script$9 = {
        props: {
            show: {
                type: Boolean,
                default: () => false
            },
        }
    };

const _hoisted_1$8 = {
  class: "animate-spin inline-block",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
};
const _hoisted_2$6 = /*#__PURE__*/vue.createElementVNode("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1 /* HOISTED */);
const _hoisted_3$6 = /*#__PURE__*/vue.createElementVNode("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1 /* HOISTED */);
const _hoisted_4$2 = [
  _hoisted_2$6,
  _hoisted_3$6
];

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$8, _hoisted_4$2, 512 /* NEED_PATCH */)), [
    [vue.vShow, $props.show]
  ])
}

script$9.render = render$9;
script$9.__file = "src/js/Jetstream/Loading.vue";

var script$8 = {
        props: ['href', 'active'],

        computed: {
            classes() {
                return this.active
                            ? 'inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 dark:text-gray-50 dark:border-indigo-400 transition'
                            : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 dark:text-gray-300 dark:focus:text-gray-400 transition'
            }
        }
    };

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_inertia_link = vue.resolveComponent("inertia-link");

  return (vue.openBlock(), vue.createBlock(_component_inertia_link, {
    href: $props.href,
    class: vue.normalizeClass($options.classes)
  }, {
    default: vue.withCtx(() => [
      vue.renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["href", "class"]))
}

script$8.render = render$8;
script$8.__file = "src/js/Jetstream/NavLink.vue";

var script$7 = {

        props: {
            show: {
                default: false
            },
        },
        emits: ['close'],

        components: {
            JetDialogModal: script$E,
            JetButton: script$D
        },

        
    };

const _hoisted_1$7 = /*#__PURE__*/vue.createTextVNode(" Definir código PIN ");
const _hoisted_2$5 = /*#__PURE__*/vue.createElementVNode("p", { class: "text-red-600 mb-2" }, "É necessário definir um código PIN para realizar essa ação.", -1 /* HOISTED */);
const _hoisted_3$5 = /*#__PURE__*/vue.createElementVNode("p", null, "Essa é uma medida de segurança para previnir ações não autorizadas a partir da sua conta.", -1 /* HOISTED */);
const _hoisted_4$1 = /*#__PURE__*/vue.createTextVNode(" Definir PIN ");

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_jet_button = vue.resolveComponent("jet-button");
  const _component_jet_dialog_modal = vue.resolveComponent("jet-dialog-modal");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createCommentVNode(" Payment Error Modal "),
    vue.createVNode(_component_jet_dialog_modal, {
      show: $props.show,
      onClose: _cache[0] || (_cache[0] = $event => (_ctx.$emit('close'))),
      closeable: true
    }, {
      title: vue.withCtx(() => [
        _hoisted_1$7
      ]),
      content: vue.withCtx(() => [
        _hoisted_2$5,
        _hoisted_3$5
      ]),
      footer: vue.withCtx(() => [
        vue.createVNode(_component_jet_button, {
          href: _ctx.route('profile.show') + '#pin-setup'
        }, {
          default: vue.withCtx(() => [
            _hoisted_4$1
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["href"])
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["show"])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$7.render = render$7;
script$7.__file = "src/js/Jetstream/PinRequiredDialogModal.vue";

var script$6 = {
    emits: ['update:modelValue'],

    props: {
        checked: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            default: null,
        },
        value: {
            default: null,
        },
        name: {
            default: null,
        },
        id: {
            default: null,
        },
        modelValue: {}
    },

    computed: {
        proxyChecked: {
            get() {
                return this.modelValue;
            },

            set(val) {
                this.$emit("update:modelValue", val);
            },
        },
    },
};

const _hoisted_1$6 = ["for"];
const _hoisted_2$4 = ["value", "id", "name", "disabled"];
const _hoisted_3$4 = { key: 0 };

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("label", {
    for: $props.id,
    class: vue.normalizeClass(["text-sm text-gray-700 flex content-center", {'text-gray-400 mouse-disabled': $props.disabled}])
  }, [
    vue.withDirectives(vue.createElementVNode("input", {
      type: "radio",
      value: $props.value,
      id: $props.id,
      name: $props.name,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($options.proxyChecked) = $event)),
      disabled: $props.disabled,
      class: vue.normalizeClass(["rounded-full border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mr-1", {'opacity-50': $props.disabled}])
    }, null, 10 /* CLASS, PROPS */, _hoisted_2$4), [
      [vue.vModelRadio, $options.proxyChecked]
    ]),
    ($props.placeholder)
      ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$4, vue.toDisplayString($props.placeholder), 1 /* TEXT */))
      : vue.createCommentVNode("v-if", true)
  ], 10 /* CLASS, PROPS */, _hoisted_1$6))
}

script$6.render = render$6;
script$6.__file = "src/js/Jetstream/Radio.vue";

var script$5 = {
        props: ['active', 'href', 'as'],

        computed: {
            hasIcon() {
                return !! this.$slots.icon
            },
            classes() {
                return this.active
                            ? 'block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 dark:border-indigo-500 dark:bg-black dark:text-indigo-500 dark:focus:text-indigo-500 transition'
                            : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-black dark:hover:border-gray-600 dark:focus:bg-black dark:focus:border-gray-600 transition'
            }
        }
    };

const _hoisted_1$5 = { class: "w-full flex items-center" };
const _hoisted_2$3 = {
  key: 0,
  class: "mr-2"
};
const _hoisted_3$3 = { class: "w-full flex items-center" };
const _hoisted_4 = {
  key: 0,
  class: "mr-2"
};

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_inertia_link = vue.resolveComponent("inertia-link");

  return (vue.openBlock(), vue.createElementBlock("div", null, [
    ($props.as == 'button')
      ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 0,
          class: vue.normalizeClass([$options.classes, "w-full text-left"])
        }, [
          vue.createElementVNode("div", _hoisted_1$5, [
            ($options.hasIcon)
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$3, [
                  vue.renderSlot(_ctx.$slots, "icon")
                ]))
              : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "default")
          ])
        ], 2 /* CLASS */))
      : (vue.openBlock(), vue.createBlock(_component_inertia_link, {
          key: 1,
          href: $props.href,
          class: vue.normalizeClass($options.classes)
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_3$3, [
              ($options.hasIcon)
                ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
                    vue.renderSlot(_ctx.$slots, "icon")
                  ]))
                : vue.createCommentVNode("v-if", true),
              vue.renderSlot(_ctx.$slots, "default")
            ])
          ]),
          _: 3 /* FORWARDED */
        }, 8 /* PROPS */, ["href", "class"]))
  ]))
}

script$5.render = render$5;
script$5.__file = "src/js/Jetstream/ResponsiveNavLink.vue";

const _hoisted_1$4 = { class: "hidden sm:block" };
const _hoisted_2$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "py-8" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "border-t border-gray-200" })
], -1 /* HOISTED */);
const _hoisted_3$2 = [
  _hoisted_2$2
];

function render$4(_ctx, _cache) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, _hoisted_3$2))
}

const script$4 = {};


script$4.render = render$4;
script$4.__file = "src/js/Jetstream/SectionBorder.vue";

var script$3 = {
        props: {
            readonly: {
                type: Boolean,
                default: () => { return false }
            },
            disabled: {
                type: Boolean,
                default: () => { return false }
            },
            modelValue: {},
            options: {
                type: Array,
                default: () => { return [] }
            },
        },

        emits: ['update:modelValue'],

        methods: {
            focus() {
                this.$refs.select.focus();
            }
        }
    };

const _hoisted_1$3 = ["value", "readonly", "disabled"];
const _hoisted_2$1 = ["value", "disabled"];

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("select", {
    class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-indigo-400",
    value: $props.modelValue,
    onChange: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
    readonly: $props.readonly,
    disabled: $props.disabled,
    ref: "select"
  }, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (option) => {
      return (vue.openBlock(), vue.createElementBlock("option", {
        value: option.value,
        key: option.value,
        disabled: option.disabled
      }, vue.toDisplayString(option.text), 9 /* TEXT, PROPS */, _hoisted_2$1))
    }), 128 /* KEYED_FRAGMENT */))
  ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$3))
}

script$3.render = render$3;
script$3.__file = "src/js/Jetstream/Select.vue";

var script$2 = {
        props: {
            readonly: {
                type: Boolean,
                default: () => { return false }
            },
            disabled: {
                type: Boolean,
                default: () => { return false }
            },
            rows: {
                type: Number,
                default: () => { return 3 }
            },
            cols: {
                type: Number
            },
            placeholder: {
                type: String
            },
            modelValue: {}
        },

        emits: ['update:modelValue'],

        methods: {
            focus() {
                this.$refs.textarea.focus();
            }
        }
    };

const _hoisted_1$2 = ["rows", "cols", "readonly", "placeholder", "disabled"];

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("textarea", {
    class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-indigo-400",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($props.modelValue) = $event)),
    onInput: _cache[1] || (_cache[1] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
    rows: $props.rows,
    cols: $props.cols,
    readonly: $props.readonly,
    placeholder: $props.placeholder,
    disabled: $props.disabled,
    ref: "textarea"
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$2)), [
    [vue.vModelText, $props.modelValue]
  ])
}

script$2.render = render$2;
script$2.__file = "src/js/Jetstream/TextArea.vue";

var script$1 = {
        computed: {
            errors() {
                return this.$page.props.errors
            },

            hasErrors() {
                return Object.keys(this.errors).length > 0;
            },
        }
    };

const _hoisted_1$1 = { key: 0 };
const _hoisted_2 = { class: "font-medium text-red-600" };
const _hoisted_3$1 = { class: "mt-3 list-disc list-inside text-sm text-red-600" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return ($options.hasErrors)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
        vue.createElementVNode("div", _hoisted_2, vue.toDisplayString(_ctx.__('Whoops! Something went wrong.')), 1 /* TEXT */),
        vue.createElementVNode("ul", _hoisted_3$1, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.errors, (error, key) => {
            return (vue.openBlock(), vue.createElementBlock("li", { key: key }, vue.toDisplayString(error), 1 /* TEXT */))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ]))
    : vue.createCommentVNode("v-if", true)
}

script$1.render = render$1;
script$1.__file = "src/js/Jetstream/ValidationErrors.vue";

var script = {
        components: {
            JetApplicationLogo: script$s,
        },
    };

const _hoisted_1 = /*#__PURE__*/vue.createStaticVNode("<div class=\"p-6 sm:px-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600\"><div class=\"mt-8 text-2xl\"> Exemplo de página de um produto Autum! </div><div class=\"mt-6 text-gray-500\"> Autum Wallet provides a beautiful, robust starting point for your next Laravel application. Laravel is designed to help you build your application using a development environment that is simple, powerful, and enjoyable. We believe you should love expressing your creativity through programming, so we have spent time carefully crafting the Laravel ecosystem to be a breath of fresh air. We hope you love it. </div></div><div class=\"bg-gray-200 dark:bg-gray-800 bg-opacity-25 grid grid-cols-1 md:grid-cols-2\"><div class=\"p-6\"><div class=\"flex items-center\"><svg fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" class=\"w-8 h-8 text-gray-400\"><path d=\"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253\"></path></svg><div class=\"ml-4 text-lg text-gray-600 dark:text-gray-200 leading-7 font-semibold\"><a href=\"https://laravel.com/docs\">Payment</a></div></div><div class=\"ml-12\"><div class=\"mt-2 text-sm text-gray-500\"> Send payment for anyone in flash instants </div><a href=\"https://laravel.com/docs\"><div class=\"mt-3 flex items-center text-sm font-semibold text-indigo-700 dark:text-indigo-500\"><div>Send Payment</div><div class=\"ml-1 text-indigo-500\"><svg viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"w-4 h-4\"><path fill-rule=\"evenodd\" d=\"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z\" clip-rule=\"evenodd\"></path></svg></div></div></a></div></div><div class=\"p-6 border-t border-gray-200 dark:border-gray-600 md:border-t-0 md:border-l\"><div class=\"flex items-center\"><svg fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" class=\"w-8 h-8 text-gray-400\"><path d=\"M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z\"></path><path d=\"M15 13a3 3 0 11-6 0 3 3 0 016 0z\"></path></svg><div class=\"ml-4 text-lg text-gray-600 dark:text-gray-200 leading-7 font-semibold\"><a href=\"https://laracasts.com\">Get Paid</a></div></div><div class=\"ml-12\"><div class=\"mt-2 text-sm text-gray-500\"> Request payment for your wallets </div><a href=\"https://laracasts.com\"><div class=\"mt-3 flex items-center text-sm font-semibold text-indigo-700 dark:text-indigo-500\"><div>Generate QRCode</div><div class=\"ml-1 text-indigo-500\"><svg viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"w-4 h-4\"><path fill-rule=\"evenodd\" d=\"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z\" clip-rule=\"evenodd\"></path></svg></div></div></a></div></div><div class=\"p-6 border-t border-gray-200 dark:border-gray-600\"><div class=\"flex items-center\"><svg fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" class=\"w-8 h-8 text-gray-400\"><path d=\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\"></path></svg><div class=\"ml-4 text-lg text-gray-600 dark:text-gray-200 leading-7 font-semibold\"><a href=\"https://tailwindcss.com/\">Assets</a></div></div><div class=\"ml-12\"><div class=\"mt-2 text-sm text-gray-500\"> Laravel Jetstream is built with Tailwind, an amazing utility first CSS framework that doesn&#39;t get in your way. You&#39;ll be amazed how easily you can build and maintain fresh, modern designs with this wonderful framework at your fingertips. </div></div></div><div class=\"p-6 border-t border-gray-200 dark:border-gray-600 md:border-l\"><div class=\"flex items-center\"><svg fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" class=\"w-8 h-8 text-gray-400\"><path d=\"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z\"></path></svg><div class=\"ml-4 text-lg text-gray-600 dark:text-gray-200 leading-7 font-semibold\">NFT</div></div><div class=\"ml-12\"><div class=\"mt-2 text-sm text-gray-500\"> Authentication and registration views are included with Laravel Jetstream, as well as support for user email verification and resetting forgotten passwords. So, you&#39;re free to get started what matters most: building your application. </div></div></div></div>", 2);
const _hoisted_3 = [
  _hoisted_1
];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", null, _hoisted_3))
}

script.render = render;
script.__file = "src/js/Jetstream/Welcome.vue";

var components = {
    //Components
    AppHead: script$z,
    NotificationIcon: script$G, 
    NotificationCentral: script$B,
    NavbarSettingsDropdown: script$H,
    ToggleDarkMode: script$A,
    MediaImageUploader: script$w,
    //Jetstream
    JetActionMessage: script$v,
    JetActionSection: script$t,
    JetApplicationLogo: script$s,
    JetApplicationMark: script$r,
    JetAuthenticationCard: script$q,
    JetAuthenticationCardLogo: script$p,
    JetBanner: script$o,
    JetButton: script$D,
    JetCheckbox: script$n,
    JetConfirmationModal: script$m,
    JetConfirmsPassword: script$k,
    JetCurrencyInput: script$j,
    JetDangerButton: script$i,
    JetDialogModal: script$E,
    JetDropdown: script$J,
    JetDropdownLink: script$I,
    JetFormSection: script$h,
    JetHttpErrorDialogModal: script$g,
    JetImportWalletDialogModal: script$c,
    JetInput: script$l,
    JetInputError: script$y,
    JetInputNumber: script$b,
    JetInputPassword: script$a,
    JetInputPin: script$e,
    JetLabel: script$x,
    JetLoading: script$9,
    JetModal: script$F,
    JetNavLink: script$8,
    JetPinRequestDialogModal: script$d,
    JetPinRequiredDialogModal: script$7,
    JetRadio: script$6,
    JetResponsiveNavLink: script$5,
    JetSecondaryButton: script$C,
    JetSectionBorder: script$4,
    JetSectionTitle: script$u,
    JetSelect: script$3,
    JetTextArea: script$2,
    JetValidationErrors: script$1,
    JetWelcome: script
};

const AutumUI = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

module.exports = AutumUI;
