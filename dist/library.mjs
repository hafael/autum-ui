import { ref, onMounted, onUnmounted, openBlock, createElementBlock, createElementVNode, renderSlot, createCommentVNode, withDirectives, vShow, createVNode, Transition, withCtx, normalizeClass, resolveComponent, createBlock, createTextVNode, toDisplayString, withModifiers, Teleport, Fragment, renderList, normalizeStyle } from 'vue';

var script$d = {
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
        let open = ref(false);

        const closeOnEscape = (e) => {
            if (open.value && e.keyCode === 27) {
                open.value = false;
            }
        };

        onMounted(() => document.addEventListener('keydown', closeOnEscape));
        onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));

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

const _hoisted_1$c = { class: "relative" };

function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$c, [
    createElementVNode("div", {
      onClick: _cache[0] || (_cache[0] = $event => ($setup.open = ! $setup.open))
    }, [
      renderSlot(_ctx.$slots, "trigger")
    ]),
    createCommentVNode(" Full Screen Dropdown Overlay "),
    withDirectives(createElementVNode("div", {
      class: "fixed inset-0 z-40",
      onClick: _cache[1] || (_cache[1] = $event => ($setup.open = false))
    }, null, 512 /* NEED_PATCH */), [
      [vShow, $setup.open]
    ]),
    createVNode(Transition, {
      "enter-active-class": "transition ease-out duration-200",
      "enter-from-class": "transform opacity-0 scale-95",
      "enter-to-class": "transform opacity-100 scale-100",
      "leave-active-class": "transition ease-in duration-75",
      "leave-from-class": "transform opacity-100 scale-100",
      "leave-to-class": "transform opacity-0 scale-95"
    }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("div", {
          class: normalizeClass(["absolute z-50 mt-2 rounded-md shadow-lg", [$options.widthClass, $options.alignmentClasses]]),
          style: {"display":"none"},
          onClick: _cache[2] || (_cache[2] = $event => ($setup.open = false))
        }, [
          createElementVNode("div", {
            class: normalizeClass(["rounded-md ring-1 ring-black ring-opacity-5", $props.contentClasses])
          }, [
            renderSlot(_ctx.$slots, "content")
          ], 2 /* CLASS */)
        ], 2 /* CLASS */), [
          [vShow, $setup.open]
        ])
      ]),
      _: 3 /* FORWARDED */
    })
  ]))
}

script$d.render = render$r;
script$d.__file = "src/js/Jetstream/Dropdown.vue";

var script$c = {
        props: ['href', 'as'],
        computed: {
            hasIcon() {
                return !! this.$slots.icon
            }
        }
    };

const _hoisted_1$b = {
  key: 0,
  type: "submit",
  class: "block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
};
const _hoisted_2$a = { class: "w-full flex items-center" };
const _hoisted_3$8 = {
  key: 0,
  class: "mr-2"
};
const _hoisted_4$6 = ["href"];
const _hoisted_5$4 = { class: "w-full flex items-center" };
const _hoisted_6$4 = {
  key: 0,
  class: "mr-2"
};
const _hoisted_7$4 = { class: "w-full flex items-center" };
const _hoisted_8$4 = {
  key: 0,
  class: "mr-2"
};

function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_inertia_link = resolveComponent("inertia-link");

  return (openBlock(), createElementBlock("div", null, [
    ($props.as == 'button')
      ? (openBlock(), createElementBlock("button", _hoisted_1$b, [
          createElementVNode("div", _hoisted_2$a, [
            ($options.hasIcon)
              ? (openBlock(), createElementBlock("div", _hoisted_3$8, [
                  renderSlot(_ctx.$slots, "icon")
                ]))
              : createCommentVNode("v-if", true),
            renderSlot(_ctx.$slots, "default")
          ])
        ]))
      : ($props.as =='a')
        ? (openBlock(), createElementBlock("a", {
            key: 1,
            href: $props.href,
            class: "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
          }, [
            createElementVNode("div", _hoisted_5$4, [
              ($options.hasIcon)
                ? (openBlock(), createElementBlock("div", _hoisted_6$4, [
                    renderSlot(_ctx.$slots, "icon")
                  ]))
                : createCommentVNode("v-if", true),
              renderSlot(_ctx.$slots, "default")
            ])
          ], 8 /* PROPS */, _hoisted_4$6))
        : (openBlock(), createBlock(_component_inertia_link, {
            key: 2,
            href: $props.href,
            class: "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
          }, {
            default: withCtx(() => [
              createElementVNode("div", _hoisted_7$4, [
                ($options.hasIcon)
                  ? (openBlock(), createElementBlock("div", _hoisted_8$4, [
                      renderSlot(_ctx.$slots, "icon")
                    ]))
                  : createCommentVNode("v-if", true),
                renderSlot(_ctx.$slots, "default")
              ])
            ]),
            _: 3 /* FORWARDED */
          }, 8 /* PROPS */, ["href"]))
  ]))
}

script$c.render = render$q;
script$c.__file = "src/js/Jetstream/DropdownLink.vue";

function render$p(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    })
  ]))
}

function render$o(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    })
  ]))
}

function render$n(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    }),
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    })
  ]))
}

function render$m(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    })
  ]))
}

function render$l(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    })
  ]))
}

function render$k(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    })
  ]))
}

function render$j(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
    })
  ]))
}

function render$i(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    })
  ]))
}

function render$h(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ]))
}

function render$g(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
    })
  ]))
}

function render$f(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]))
}

function render$e(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    })
  ]))
}

function render$d(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M6 18L18 6M6 6l12 12"
    })
  ]))
}

function render$c(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
    })
  ]))
}

var script$b = {
        name: 'NavbarSettingsDropdown',

        components: {
            JetDropdown: script$d,
            JetDropdownLink: script$c,
            BriefcaseIcon: render$o,
            CogIcon: render$n,
            UserCircleIcon: render$f,
            PuzzleIcon: render$j,
            UserAddIcon: render$g, 
            UserGroupIcon: render$e, 
            LogoutIcon: render$m
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

const _hoisted_1$a = {
  key: 0,
  class: "flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
};
const _hoisted_2$9 = ["src", "alt"];
const _hoisted_3$7 = {
  key: 1,
  class: "inline-flex rounded-md"
};
const _hoisted_4$5 = {
  type: "button",
  class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"
};
const _hoisted_5$3 = /*#__PURE__*/createElementVNode("svg", {
  class: "ml-2 -mr-0.5 h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /*#__PURE__*/createElementVNode("path", {
    "fill-rule": "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })
], -1 /* HOISTED */);
const _hoisted_6$3 = { class: "block px-4 py-2 text-xs text-gray-400 border-b border-gray-200" };
const _hoisted_7$3 = { class: "block w-full truncated" };
const _hoisted_8$3 = { class: "block w-full truncated" };
const _hoisted_9$3 = /*#__PURE__*/createTextVNode(" Área do Gerente ");
const _hoisted_10$3 = /*#__PURE__*/createTextVNode(" Área Administrativa ");
const _hoisted_11$2 = /*#__PURE__*/createTextVNode(" Meu Perfil ");
const _hoisted_12$2 = /*#__PURE__*/createTextVNode(" Meus Contatos ");
const _hoisted_13$2 = /*#__PURE__*/createTextVNode(" API ");
const _hoisted_14$2 = /*#__PURE__*/createElementVNode("div", { class: "border-t border-gray-100" }, null, -1 /* HOISTED */);
const _hoisted_15$2 = /*#__PURE__*/createTextVNode(" Sair ");

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BriefcaseIcon = resolveComponent("BriefcaseIcon");
  const _component_jet_dropdown_link = resolveComponent("jet-dropdown-link");
  const _component_CogIcon = resolveComponent("CogIcon");
  const _component_UserCircleIcon = resolveComponent("UserCircleIcon");
  const _component_UserGroupIcon = resolveComponent("UserGroupIcon");
  const _component_LogoutIcon = resolveComponent("LogoutIcon");
  const _component_jet_dropdown = resolveComponent("jet-dropdown");

  return (openBlock(), createBlock(_component_jet_dropdown, {
    align: "right",
    width: "48"
  }, {
    trigger: withCtx(() => [
      (_ctx.$page.props.jetstream.managesProfilePhotos)
        ? (openBlock(), createElementBlock("button", _hoisted_1$a, [
            createElementVNode("img", {
              class: "h-8 w-8 rounded-full object-cover",
              src: _ctx.$page.props.user.profile_photo_url,
              alt: _ctx.$page.props.user.name
            }, null, 8 /* PROPS */, _hoisted_2$9)
          ]))
        : (openBlock(), createElementBlock("span", _hoisted_3$7, [
            createElementVNode("button", _hoisted_4$5, [
              createTextVNode(toDisplayString(_ctx.$page.props.user.name) + " ", 1 /* TEXT */),
              _hoisted_5$3
            ])
          ]))
    ]),
    content: withCtx(() => [
      createCommentVNode(" Account Management "),
      createElementVNode("div", _hoisted_6$3, [
        createElementVNode("span", _hoisted_7$3, toDisplayString(_ctx.$page.props.user.name) + " " + toDisplayString(_ctx.$page.props.user.lastname), 1 /* TEXT */),
        createElementVNode("strong", _hoisted_8$3, "@" + toDisplayString(_ctx.$page.props.user.username), 1 /* TEXT */)
      ]),
      ($options.profileIs('manager'))
        ? (openBlock(), createBlock(_component_jet_dropdown_link, {
            key: 0,
            href: _ctx.route('manager.dashboard')
          }, {
            icon: withCtx(() => [
              createVNode(_component_BriefcaseIcon, { class: "w-4 h-4" })
            ]),
            default: withCtx(() => [
              _hoisted_9$3
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["href"]))
        : createCommentVNode("v-if", true),
      ($options.profileIs('admin') || _ctx.$page.props.user.is_admin)
        ? (openBlock(), createBlock(_component_jet_dropdown_link, {
            key: 1,
            href: _ctx.route('admin.dashboard')
          }, {
            icon: withCtx(() => [
              createVNode(_component_CogIcon, { class: "w-4 h-4" })
            ]),
            default: withCtx(() => [
              _hoisted_10$3
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["href"]))
        : createCommentVNode("v-if", true),
      createVNode(_component_jet_dropdown_link, {
        href: _ctx.route('profile.show')
      }, {
        icon: withCtx(() => [
          createVNode(_component_UserCircleIcon, { class: "w-4 h-4" })
        ]),
        default: withCtx(() => [
          _hoisted_11$2
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["href"]),
      createVNode(_component_jet_dropdown_link, {
        href: _ctx.route('contacts.index')
      }, {
        icon: withCtx(() => [
          createVNode(_component_UserGroupIcon, { class: "w-4 h-4" })
        ]),
        default: withCtx(() => [
          _hoisted_12$2
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["href"]),
      (_ctx.$page.props.jetstream.hasApiFeatures)
        ? (openBlock(), createBlock(_component_jet_dropdown_link, {
            key: 2,
            href: _ctx.route('api-tokens.index')
          }, {
            default: withCtx(() => [
              _hoisted_13$2
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["href"]))
        : createCommentVNode("v-if", true),
      _hoisted_14$2,
      createCommentVNode(" Authentication "),
      createElementVNode("form", {
        onSubmit: _cache[0] || (_cache[0] = withModifiers((...args) => ($options.logout && $options.logout(...args)), ["prevent"]))
      }, [
        createVNode(_component_jet_dropdown_link, { as: "button" }, {
          icon: withCtx(() => [
            createVNode(_component_LogoutIcon, { class: "w-4 h-4" })
          ]),
          default: withCtx(() => [
            _hoisted_15$2
          ]),
          _: 1 /* STABLE */
        })
      ], 32 /* HYDRATE_EVENTS */)
    ]),
    _: 1 /* STABLE */
  }))
}

script$b.render = render$b;
script$b.__file = "src/js/Components/NavbarSettingsDropdown.vue";

var script$a = {

        name: 'NotificationIcon',

        components: {
            BellIcon: render$p,
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

const _hoisted_1$9 = { class: "w-3 h-3 top-1 right-0 absolute" };
const _hoisted_2$8 = /*#__PURE__*/createElementVNode("span", { class: "w-full h-full rounded-full bg-blue-200 dark:bg-blue-400 animate-ping absolute top-0 left-0" }, null, -1 /* HOISTED */);
const _hoisted_3$6 = /*#__PURE__*/createElementVNode("span", { class: "w-3 h-3 rounded-full bg-blue-400 dark:bg-blue-600 absolute top-0 left-0" }, null, -1 /* HOISTED */);
const _hoisted_4$4 = [
  _hoisted_2$8,
  _hoisted_3$6
];

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BellIcon = resolveComponent("BellIcon");

  return (openBlock(), createElementBlock("button", {
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.toggleNotifications && $options.toggleNotifications(...args))),
    class: "cursor-pointer relative inline-flex items-center justify-center p-2 text-gray-600 focus:text-gray-800 hover:text-gray-800 active:text-gray-800 dark:hover:text-gray-300 dark:active:text-gray-300"
  }, [
    createVNode(_component_BellIcon, { class: "w-6 h-6" }),
    withDirectives(createElementVNode("span", _hoisted_1$9, _hoisted_4$4, 512 /* NEED_PATCH */), [
      [vShow, $props.unreadNotifications]
    ])
  ]))
}

script$a.render = render$a;
script$a.__file = "src/js/Components/NotificationIcon.vue";

var script$9 = {
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

            onMounted(() => document.addEventListener('keydown', closeOnEscape));
            onUnmounted(() => {
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

const _hoisted_1$8 = {
  class: "fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50",
  "scroll-region": ""
};
const _hoisted_2$7 = /*#__PURE__*/createElementVNode("div", { class: "absolute inset-0 bg-gray-500 opacity-75" }, null, -1 /* HOISTED */);
const _hoisted_3$5 = [
  _hoisted_2$7
];

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Teleport, { to: "body" }, [
    createVNode(Transition, { "leave-active-class": "duration-200" }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("div", _hoisted_1$8, [
          createVNode(Transition, {
            "enter-active-class": "ease-out duration-300",
            "enter-from-class": "opacity-0",
            "enter-to-class": "opacity-100",
            "leave-active-class": "ease-in duration-200",
            "leave-from-class": "opacity-100",
            "leave-to-class": "opacity-0"
          }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("div", {
                class: "fixed inset-0 transform transition-all",
                onClick: _cache[0] || (_cache[0] = (...args) => ($setup.close && $setup.close(...args)))
              }, _hoisted_3$5, 512 /* NEED_PATCH */), [
                [vShow, $props.show]
              ])
            ]),
            _: 1 /* STABLE */
          }),
          createVNode(Transition, {
            "enter-active-class": "ease-out duration-300",
            "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
            "leave-active-class": "ease-in duration-200",
            "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
            "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("div", {
                class: normalizeClass(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto dark:bg-gray-800 dark:text-white", $options.maxWidthClass])
              }, [
                ($props.show)
                  ? renderSlot(_ctx.$slots, "default", { key: 0 })
                  : createCommentVNode("v-if", true)
              ], 2 /* CLASS */), [
                [vShow, $props.show]
              ])
            ]),
            _: 3 /* FORWARDED */
          })
        ], 512 /* NEED_PATCH */), [
          [vShow, $props.show]
        ])
      ]),
      _: 3 /* FORWARDED */
    })
  ]))
}

script$9.render = render$9;
script$9.__file = "src/js/Jetstream/Modal.vue";

var script$8 = {
        name: 'JetDialogModal',
        
        emits: ['close'],

        components: {
            Modal: script$9,
            XIcon: render$d
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

const _hoisted_1$7 = { class: "px-6 pt-4 pb-3 flex justify-between items-center border-b border-gray-200 dark:border-gray-700" };
const _hoisted_2$6 = { class: "text-lg" };
const _hoisted_3$4 = { class: "p-6" };
const _hoisted_4$3 = { class: "px-6 py-4 bg-gray-100 text-right dark:bg-black" };

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_XIcon = resolveComponent("XIcon");
  const _component_modal = resolveComponent("modal");

  return (openBlock(), createBlock(_component_modal, {
    show: $props.show,
    "max-width": $props.maxWidth,
    closeable: $props.closeable,
    onClose: $options.close
  }, {
    default: withCtx(() => [
      createElementVNode("div", _hoisted_1$7, [
        createElementVNode("div", _hoisted_2$6, [
          renderSlot(_ctx.$slots, "title")
        ]),
        ($props.closeable)
          ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "close p-2 cursor-pointer",
              onClick: _cache[0] || (_cache[0] = (...args) => ($options.close && $options.close(...args)))
            }, [
              createVNode(_component_XIcon, { class: "w-5 h-5 text-gray-600" })
            ]))
          : createCommentVNode("v-if", true)
      ]),
      createElementVNode("div", _hoisted_3$4, [
        renderSlot(_ctx.$slots, "content")
      ]),
      createElementVNode("div", _hoisted_4$3, [
        renderSlot(_ctx.$slots, "footer")
      ])
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["show", "max-width", "closeable", "onClose"]))
}

script$8.render = render$8;
script$8.__file = "src/js/Jetstream/DialogModal.vue";

var script$7 = {
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

const _hoisted_1$6 = ["type"];
const _hoisted_2$5 = ["href", "title", "alt"];

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (!$props.href)
    ? (openBlock(), createElementBlock("button", {
        key: 0,
        type: $props.type,
        class: "inline-flex items-center justify-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 dark:bg-gray-500 dark:hover:bg-gray-700 transition"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8 /* PROPS */, _hoisted_1$6))
    : (openBlock(), createElementBlock("a", {
        key: 1,
        class: "inline-flex items-center justify-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 dark:bg-gray-500 dark:hover:bg-gray-700 transition",
        href: $props.href,
        title: $props.title,
        alt: $props.title
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8 /* PROPS */, _hoisted_2$5))
}

script$7.render = render$7;
script$7.__file = "src/js/Jetstream/Button.vue";

var script$6 = {
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

const _hoisted_1$5 = ["type"];
const _hoisted_2$4 = ["href", "title", "alt"];

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (!$props.href)
    ? (openBlock(), createElementBlock("button", {
        key: 0,
        type: $props.type,
        class: "inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 dark:bg-gray-800 dark:text-gray-300 transition"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8 /* PROPS */, _hoisted_1$5))
    : (openBlock(), createElementBlock("a", {
        key: 1,
        class: "inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition",
        href: $props.href,
        title: $props.title,
        alt: $props.title
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8 /* PROPS */, _hoisted_2$4))
}

script$6.render = render$6;
script$6.__file = "src/js/Jetstream/SecondaryButton.vue";

var script$5 = {

        name: 'NotificationCentral',

        components: {
            JetDialogModal: script$8,
            JetButton: script$7,
            JetSecondaryButton: script$6
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

const _hoisted_1$4 = { class: "bg-gray-50 dark:bg-black" };
const _hoisted_2$3 = { class: "px-4 flex justify-between items-center" };
const _hoisted_3$3 = /*#__PURE__*/createElementVNode("h3", { class: "text-md uppercase text-gray-400" }, "Notificações", -1 /* HOISTED */);
const _hoisted_4$2 = { class: "text-gray-700 dark:text-gray-400 px-4" };
const _hoisted_5$2 = { class: "mt-3 space-y-1 divide-y divide-gray-200" };
const _hoisted_6$2 = ["onClick"];
const _hoisted_7$2 = { class: "relative w-3 mr-3" };
const _hoisted_8$2 = { class: "w-3 h-3 top-2 absolute" };
const _hoisted_9$2 = {
  key: 0,
  class: "w-full h-full rounded-full bg-red-100 dark:bg-red-200 animate-ping absolute top-0 left-0"
};
const _hoisted_10$2 = { class: "flex justify-between w-full" };
const _hoisted_11$1 = { class: "text-md font-semibold" };
const _hoisted_12$1 = { class: "text-sm text-gray-600 dark:text-gray-400" };
const _hoisted_13$1 = { class: "text-right w-20" };
const _hoisted_14$1 = { class: "text-xs text-gray-400" };
const _hoisted_15$1 = { class: "text-xs text-gray-400" };
const _hoisted_16 = {
  key: 0,
  class: "flex justify-between mx-4 mb-2 mt-3"
};
const _hoisted_17 = /*#__PURE__*/createTextVNode(" Notificação ");
const _hoisted_18 = { class: "text-2xl font-bold mb-3" };
const _hoisted_19 = { class: "text-xl font-semibold text-gray-500 dark:text-gray-200 mb-3" };
const _hoisted_20 = ["innerHTML"];
const _hoisted_21 = { class: "text-gray-500 text-sm" };
const _hoisted_22 = /*#__PURE__*/createTextVNode(" Fechar ");

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_jet_dialog_modal = resolveComponent("jet-dialog-modal");

  return (openBlock(), createElementBlock("div", _hoisted_1$4, [
    createElementVNode("div", _hoisted_2$3, [
      _hoisted_3$3,
      createElementVNode("a", {
        href: "#",
        onClick: _cache[0] || (_cache[0] = (...args) => ($options.closeNotificationCentral && $options.closeNotificationCentral(...args))),
        class: "text-sm font-bold uppercase text-indigo-500 hover:underline"
      }, "Fechar")
    ]),
    withDirectives(createElementVNode("p", _hoisted_4$2, "Nenhuma notificação nova.", 512 /* NEED_PATCH */), [
      [vShow, !$options.hasUnreadNotications]
    ]),
    createElementVNode("div", _hoisted_5$2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.filteredNotifications, (notification) => {
        return (openBlock(), createElementBlock("div", {
          class: "flex px-4 py-2 cursor-pointer bg-white dark:bg-gray-900",
          key: notification.id,
          onClick: $event => ($options.openNotification(notification))
        }, [
          createElementVNode("span", _hoisted_7$2, [
            createElementVNode("span", _hoisted_8$2, [
              (!notification.read_at)
                ? (openBlock(), createElementBlock("span", _hoisted_9$2))
                : createCommentVNode("v-if", true),
              createElementVNode("span", {
                class: normalizeClass(["w-3 h-3 rounded-full absolute top-0 left-0", {
                                'bg-red-200 dark:bg-red-300': !notification.read_at,
                                'bg-blue-200 dark:bg-blue-300': notification.read_at
                             }])
              }, null, 2 /* CLASS */)
            ])
          ]),
          createElementVNode("div", _hoisted_10$2, [
            createElementVNode("div", null, [
              createElementVNode("h3", _hoisted_11$1, toDisplayString(notification.data.subject), 1 /* TEXT */),
              createElementVNode("p", _hoisted_12$1, toDisplayString(notification.data.greeting), 1 /* TEXT */)
            ]),
            createElementVNode("div", _hoisted_13$1, [
              createElementVNode("p", _hoisted_14$1, toDisplayString(_ctx.$filters.fromDateTime(notification.created_at, 'd/m/Y')), 1 /* TEXT */),
              createElementVNode("p", _hoisted_15$1, toDisplayString(_ctx.$filters.fromDateTime(notification.created_at, 'HH:mm')), 1 /* TEXT */)
            ])
          ])
        ], 8 /* PROPS */, _hoisted_6$2))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    ($options.hasNotifications)
      ? (openBlock(), createElementBlock("div", _hoisted_16, [
          withDirectives(createElementVNode("a", {
            href: "#",
            onClick: _cache[1] || (_cache[1] = $event => ($data.viewAll = true)),
            class: "text-sm font-bold text-indigo-500 hover:underline"
          }, "Ver mais", 512 /* NEED_PATCH */), [
            [vShow, $options.showViewAllButton]
          ]),
          createElementVNode("a", {
            href: "#",
            onClick: _cache[2] || (_cache[2] = (...args) => ($options.clearAllNotifications && $options.clearAllNotifications(...args))),
            class: "text-sm font-bold text-red-500 hover:underline"
          }, "Limpar")
        ]))
      : createCommentVNode("v-if", true),
    createCommentVNode(" Show Notification Modal "),
    createVNode(_component_jet_dialog_modal, {
      show: $data.showingNotificationModal,
      onClose: $options.closeNotification
    }, {
      title: withCtx(() => [
        _hoisted_17
      ]),
      content: withCtx(() => [
        createElementVNode("h3", _hoisted_18, toDisplayString($data.reading.data.subject), 1 /* TEXT */),
        createElementVNode("h4", _hoisted_19, toDisplayString($data.reading.data.greeting), 1 /* TEXT */),
        createElementVNode("div", {
          class: "block relative my-2 text-gray-800 dark:text-gray-300",
          innerHTML: $data.reading.data.body
        }, null, 8 /* PROPS */, _hoisted_20),
        createElementVNode("p", _hoisted_21, toDisplayString(_ctx.$filters.fromDateTime($data.reading.created_at)), 1 /* TEXT */)
      ]),
      footer: withCtx(() => [
        createVNode(_component_jet_secondary_button, {
          onClick: $options.closeNotification,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_22
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"]),
        createVNode(_component_jet_button, {
          onClick: _cache[3] || (_cache[3] = $event => ($options.callToAction($data.reading.data.action_url)))
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($data.reading.data.action_text), 1 /* TEXT */)
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["show", "onClose"])
  ]))
}

script$5.render = render$5;
script$5.__file = "src/js/Components/NotificationCentral.vue";

var script$4 = {
        name: 'ToggleDarkMode',
        components: {
            MoonIcon: render$l,
            SunIcon: render$i,
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

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SunIcon = resolveComponent("SunIcon");
  const _component_MoonIcon = resolveComponent("MoonIcon");

  return (openBlock(), createElementBlock("button", {
    class: "cursor-pointer rounded-md p-2 text-gray-600 focus:text-gray-800 hover:text-gray-800 active:text-gray-800 dark:hover:text-gray-300 dark:active:text-gray-300",
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.toggleDarkMode && $options.toggleDarkMode(...args)))
  }, [
    ($options.isDarkMode)
      ? (openBlock(), createBlock(_component_SunIcon, {
          key: 0,
          class: "w-6 h-6"
        }))
      : (openBlock(), createBlock(_component_MoonIcon, {
          key: 1,
          class: "w-6 h-6"
        }))
  ]))
}

script$4.render = render$4;
script$4.__file = "src/js/Components/ToggleDarkMode.vue";

var script$3 = {
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

const _hoisted_1$3 = /*#__PURE__*/createElementVNode("meta", {
  "head-key": "description",
  name: "description",
  content: "Autum é uma empresa de serviços financeiros disruptivos em blockchain com sede na cidade do Rio de Janeiro."
}, null, -1 /* HOISTED */);
const _hoisted_2$2 = /*#__PURE__*/createElementVNode("meta", {
  name: "author",
  content: "Autum"
}, null, -1 /* HOISTED */);
const _hoisted_3$2 = /*#__PURE__*/createElementVNode("meta", {
  name: "copyright",
  content: "Autum"
}, null, -1 /* HOISTED */);
const _hoisted_4$1 = /*#__PURE__*/createElementVNode("meta", {
  name: "application-name",
  content: "Wallet"
}, null, -1 /* HOISTED */);
const _hoisted_5$1 = ["content"];
const _hoisted_6$1 = /*#__PURE__*/createElementVNode("meta", {
  property: "og:site_name",
  content: "Autum Wallet"
}, null, -1 /* HOISTED */);
const _hoisted_7$1 = /*#__PURE__*/createElementVNode("meta", {
  property: "og:type",
  content: "website"
}, null, -1 /* HOISTED */);
const _hoisted_8$1 = /*#__PURE__*/createElementVNode("meta", {
  property: "og:locale",
  content: "pt_BR"
}, null, -1 /* HOISTED */);
const _hoisted_9$1 = /*#__PURE__*/createElementVNode("meta", {
  property: "og:image",
  content: "/images/autum-og-image-default.jpg"
}, null, -1 /* HOISTED */);
const _hoisted_10$1 = ["content"];
const _hoisted_11 = ["content"];
const _hoisted_12 = /*#__PURE__*/createElementVNode("meta", {
  name: "twitter:card",
  content: "summary"
}, null, -1 /* HOISTED */);
const _hoisted_13 = ["content"];
const _hoisted_14 = ["content"];
const _hoisted_15 = /*#__PURE__*/createElementVNode("meta", {
  name: "twitter:image",
  content: "/images/autum-og-image-default.jpg"
}, null, -1 /* HOISTED */);

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_inertia_head = resolveComponent("inertia-head");

  return (openBlock(), createBlock(_component_inertia_head, { title: $options.metaTitle }, {
    default: withCtx(() => [
      _hoisted_1$3,
      _hoisted_2$2,
      _hoisted_3$2,
      _hoisted_4$1,
      createElementVNode("meta", {
        property: "og:title",
        content: $options.metaTitle
      }, null, 8 /* PROPS */, _hoisted_5$1),
      _hoisted_6$1,
      _hoisted_7$1,
      _hoisted_8$1,
      _hoisted_9$1,
      createElementVNode("meta", {
        property: "og:url",
        content: $options.metaUrl
      }, null, 8 /* PROPS */, _hoisted_10$1),
      createElementVNode("meta", {
        property: "og:description",
        content: $options.metaDescription
      }, null, 8 /* PROPS */, _hoisted_11),
      _hoisted_12,
      createElementVNode("meta", {
        name: "twitter:title",
        content: $options.metaTitle
      }, null, 8 /* PROPS */, _hoisted_13),
      createElementVNode("meta", {
        name: "twitter:description",
        content: $options.metaDescription
      }, null, 8 /* PROPS */, _hoisted_14),
      _hoisted_15,
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["title"]))
}

script$3.render = render$3;
script$3.__file = "src/js/Components/AppHead.vue";

var script$2 = {
        props: ['message']
    };

const _hoisted_1$2 = { class: "text-sm text-red-600 dark:text-red-500" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", null, [
    createElementVNode("p", _hoisted_1$2, toDisplayString($props.message), 1 /* TEXT */)
  ], 512 /* NEED_PATCH */)), [
    [vShow, $props.message]
  ])
}

script$2.render = render$2;
script$2.__file = "src/js/Jetstream/InputError.vue";

var script$1 = {
        props: ['value']
    };

const _hoisted_1$1 = { class: "block font-medium text-sm text-gray-700 dark:text-gray-300" };
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = { key: 1 };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("label", _hoisted_1$1, [
    ($props.value)
      ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString($props.value), 1 /* TEXT */))
      : (openBlock(), createElementBlock("span", _hoisted_3$1, [
          renderSlot(_ctx.$slots, "default")
        ]))
  ]))
}

script$1.render = render$1;
script$1.__file = "src/js/Jetstream/Label.vue";

var script = {
        name: 'MediaImageUploader',
        components: {
            JetButton: script$7,
            JetSecondaryButton: script$6,
            JetInputError: script$2,
            JetLabel: script$1,
            JetDialogModal: script$8,
            PhotographIcon: render$k,
            ZoomInIcon: render$c,
            TrashIcon: render$h
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

const _hoisted_1 = { class: "block" };
const _hoisted_2 = { class: "flex items-center" };
const _hoisted_3 = ["accept", "multiple"];
const _hoisted_4 = { class: "mr-3" };
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "ml-3 space-x-2" };
const _hoisted_7 = /*#__PURE__*/createTextVNode(" Prever ");
const _hoisted_8 = ["src"];
const _hoisted_9 = ["src"];
const _hoisted_10 = /*#__PURE__*/createTextVNode(" Fechar ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PhotographIcon = resolveComponent("PhotographIcon");
  const _component_ZoomInIcon = resolveComponent("ZoomInIcon");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  const _component_TrashIcon = resolveComponent("TrashIcon");
  const _component_jet_dialog_modal = resolveComponent("jet-dialog-modal");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      createCommentVNode(" Media File Input "),
      createElementVNode("input", {
        type: "file",
        class: "hidden",
        ref: "media",
        accept: $props.accept,
        multiple: $props.multiple,
        onChange: _cache[0] || (_cache[0] = (...args) => ($options.updateMediaPreview && $options.updateMediaPreview(...args)))
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3),
      createElementVNode("div", _hoisted_4, [
        createCommentVNode(" Current Media File "),
        withDirectives(createElementVNode("div", null, [
          createElementVNode("img", {
            src: $props.currentSrc,
            class: normalizeClass([{'rounded-full': $props.imageCircle, 'rounded': !$props.imageCircle }, "h-20 w-20 object-cover"])
          }, null, 10 /* CLASS, PROPS */, _hoisted_5)
        ], 512 /* NEED_PATCH */), [
          [vShow, !$data.mediaPreview && $props.currentSrc]
        ]),
        withDirectives(createElementVNode("div", null, [
          createElementVNode("span", {
            class: normalizeClass(["block w-20 h-20 bg-gray-300 dark:bg-gray-600 flex items-center justify-center", {'rounded-full': $props.imageCircle, 'rounded': !$props.imageCircle }]),
            style: 'background-size: cover; background-repeat: no-repeat; background-position: center center;'
          }, [
            createVNode(_component_PhotographIcon, { class: "w-6 h-6 text-gray-600 dark:text-gray-300" })
          ], 2 /* CLASS */)
        ], 512 /* NEED_PATCH */), [
          [vShow, !$data.mediaPreview && !$props.currentSrc]
        ]),
        createCommentVNode(" New Media File Preview "),
        withDirectives(createElementVNode("div", {
          onClick: _cache[1] || (_cache[1] = (...args) => ($options.showPreviewModal && $options.showPreviewModal(...args)))
        }, [
          createElementVNode("span", {
            class: normalizeClass(["block w-20 h-20 cursor-pointer bg-gray-300 dark:bg-gray-600 flex items-end justify-end relative", {'rounded-full': $props.imageCircle, 'rounded': !$props.imageCircle }]),
            style: normalizeStyle('background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + $data.mediaPreview + '\');')
          }, [
            createElementVNode("span", {
              class: normalizeClass(["block w-20 h-20 opacity-60 bg-gradient-to-t from-black via-transparent absolute top-0 left-0", {'rounded-full': $props.imageCircle, 'rounded': !$props.imageCircle }])
            }, null, 2 /* CLASS */),
            createVNode(_component_ZoomInIcon, { class: "w-4 h-4 m-2 text-white" })
          ], 6 /* CLASS, STYLE */)
        ], 512 /* NEED_PATCH */), [
          [vShow, $data.mediaPreview]
        ])
      ]),
      createElementVNode("div", _hoisted_6, [
        withDirectives(createVNode(_component_jet_secondary_button, {
          type: "button",
          onClick: withModifiers($options.selectNewFile, ["prevent"])
        }, {
          default: withCtx(() => [
            createVNode(_component_PhotographIcon, { class: "w-5 h-5" })
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"]), [
          [vShow, !$data.mediaPreview]
        ]),
        ($props.currentSrc && !$data.mediaPreview)
          ? (openBlock(), createBlock(_component_jet_secondary_button, {
              key: 0,
              type: "button",
              onClick: withModifiers($options.deleteMedia, ["prevent"])
            }, {
              default: withCtx(() => [
                createVNode(_component_TrashIcon, { class: "w-5 h-5 text-red-500" })
              ]),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["onClick"]))
          : createCommentVNode("v-if", true),
        withDirectives(createVNode(_component_jet_secondary_button, {
          type: "button",
          onClick: withModifiers($options.cancel, ["prevent"])
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($props.btnCancelText), 1 /* TEXT */)
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"]), [
          [vShow, $data.mediaPreview]
        ])
      ])
    ]),
    createCommentVNode(" Preview Modal "),
    createVNode(_component_jet_dialog_modal, { show: $data.modalPreview }, {
      title: withCtx(() => [
        _hoisted_7
      ]),
      content: withCtx(() => [
        ($props.currentSrc && !$data.mediaPreview)
          ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: $props.currentSrc,
              class: "mx-auto"
            }, null, 8 /* PROPS */, _hoisted_8))
          : ($data.mediaPreview)
            ? (openBlock(), createElementBlock("img", {
                key: 1,
                src: $data.mediaPreview,
                class: "mx-auto"
              }, null, 8 /* PROPS */, _hoisted_9))
            : createCommentVNode("v-if", true)
      ]),
      footer: withCtx(() => [
        createVNode(_component_jet_secondary_button, {
          onClick: _cache[2] || (_cache[2] = $event => ($data.modalPreview = false))
        }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["show"])
  ]))
}

script.render = render;
script.__file = "src/js/Components/MediaImageUploader.vue";

const GlobalFilters = {
    
    /**
     * Format the given date.
     */
    date(value) {
        return moment(value).local().format('L');
    },

    datetime(value) {
        return moment.unix(value).local().format('LLL');
    },

    fromDateTime(value, format = 'lll') {
        return moment(value).local().format(format);
    },

    round2date(value, format = 'lll') {

        return moment().unix(value).local().format(format);
    },

    fancyDate(value) {
        return moment(value).local().format('dddd,  D \\d\\e MMMM \\d\\e YYYY, h:mm:ss a');
    },

    dateRelativeFromTimestamp(value) {
        return moment.unix(value).local().locale('pt-br').fromNow();
    },

    dateRelativeShort(value) {
        return moment(value).local().locale('pt-br-short').fromNow();
    },

    dateRelative(value) {
        return moment(value, 'YYYY-MM-DD HH:mm').local().locale('pt-br').fromNow();
    },

    monthDay(value) {
        return moment(value).local().format('MMM DD');
    },

    birthDay(value) {
        return moment(value).local().format('DD \\d\\e MMMM');
    },

    microToAlgo(value) {
        return Number(value) / 1000000;
    },

    algoToMicro(value) {
        return Number(value) * 1000000;
    },
    
    slug(value) {
        return String(value).toLowerCase()
                            .replace(/[àÀáÁâÂãäÄÅåª]+/g, 'a')       // Special Characters #1
                            .replace(/[èÈéÉêÊëË]+/g, 'e')       	// Special Characters #2
                            .replace(/[ìÌíÍîÎïÏ]+/g, 'i')       	// Special Characters #3
                            .replace(/[òÒóÓôÔõÕöÖº]+/g, 'o')       	// Special Characters #4
                            .replace(/[ùÙúÚûÛüÜ]+/g, 'u')       	// Special Characters #5
                            .replace(/[ýÝÿŸ]+/g, 'y')       		// Special Characters #6
                            .replace(/[ñÑ]+/g, 'n')       			// Special Characters #7
                            .replace(/[çÇ]+/g, 'c')       			// Special Characters #8
                            .replace(/[ß]+/g, 'ss')       			// Special Characters #9
                            .replace(/[Ææ]+/g, 'ae')       			// Special Characters #10
                            .replace(/[Øøœ]+/g, 'oe')       		// Special Characters #11
                            .replace(/[%]+/g, 'pct')       			// Special Characters #12
                            .replace(/\s+/g, '-')           		// Replace spaces with -
                            .replace(/[^\w\-]+/g, '')       		// Remove all non-word chars
                            .replace(/\-\-+/g, '-')         		// Replace multiple - with single -
                            .replace(/^-+/, '')             		// Trim - from start of text
    },

    cep(value) {
        return String(value).padEnd(5, 0).substr(0, 5) + '-' + String(value).padStart(3, 0).substr(5, 3);
    },

    capitalize(value) {
        if (! value && value !== 0) {
            return '';
        }
        return value.toString().charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    },

    trans(value, def) {
        return value ? window.I18n.trans(value, def) : value;
    },

    limitTo(text, length, clamp) {
        clamp = clamp || '...';
        if(typeof text === 'string'){
            text = text.toString();
            return text.length > length ? text.slice(0, length) + clamp : text;
        }
        return text;
    },

    onlyNumbers(value) {
        return parseInt(String(value).replace(/[^0-9]/g, ""));
    },
    
    int2dec(value, decimals) {
        let div =  String('1').padEnd(decimals + 1, '0');
        return Number(value / Number(div)).toFixed(decimals);
    },

    amt2cts(value, currency, locale) {
        return (value * 100).toLocaleString(locale, {style:"currency", currency: currency});
    },

    cts2amt(value, currency, locale) {

        let currencyFractionDigits = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
        }).resolvedOptions().maximumFractionDigits;

        return (value / 100).toLocaleString(locale, {style:"currency", maximumFractionDigits: currencyFractionDigits});
    },

    cts2amt(value, currency, locale) {

        if(!locale) {
            locale = 'en-US';
        }

        let currencyFractionDigits = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
        }).resolvedOptions().maximumFractionDigits;

        return (value / 100).toLocaleString(locale, {maximumFractionDigits: currencyFractionDigits});
    },

    cts2amts(value, currency, locale) {

        return (value / 100).toLocaleString(locale, {style:"currency", currency: currency});
    },

    _currency(value) {
        value = parseFloat(value);

        if (! isFinite(value) || (! value && value !== 0)){
            return '';
        }

        var stringified = Math.abs(value).toFixed(2);

        var _int = stringified.slice(0, -1 - 2);

        var i = _int.length % 3;

        var head = i > 0
            ? (_int.slice(0, i) + (_int.length > 3 ? window.I18n.currencyThousandsSeparator : ''))
            : '';

        var _float = stringified.slice(-1 - 2).replace('.', window.I18n.currencyFractionSeparator);

        var sign = value < 0 ? '-' : '';

        var symbol = window.I18n.currencySymbol || 'R$';

        return sign + symbol + ' ' + head +
            _int.slice(i).replace(/(\d{3})(?=\d)/g, '$1,') +
            _float;
    },

    dinero(value) {
        return Dinero({amount: value, currency: String(window.Spark.currency)
            .toUpperCase()})
            .setLocale(window.Spark.currencyLocale)
            .toFormat();
    },

    currency(value, symbol = '', precision = 2, decimal = '.', separator = ',', fromCents = true) {
        return window.currency(value, {
            symbol: symbol + ' ',
            precision: precision,
            decimal: decimal,
            separator: separator,
            fromCents: fromCents
        }).format();
    },

    assetAmount(amount, unitName = '', decimals = 0, thousand = '.', fraction = ',') {
        let multiplier = 0;
        if(decimals) {
            multiplier = parseInt(String('1').padEnd(decimals + 1, '0'));
        }
        return window.currency(multiplier ? amount / multiplier  : amount, {
            symbol: unitName + ' ',
            precision: decimals,
            decimal: thousand,
            separator: fraction,
        }).format();
    },

    dec2int(amount, decimals = 0) {
        if(decimals) {
            return Math.abs(amount * parseInt(String('1').padEnd(decimals + 1, '0')));
        }
        return parseInt(String(amount).replace(/[^0-9]/g, ""));
    },
    int2dec(amount, decimals = 0) {
        if(decimals) {
            return Number(Math.abs(amount / parseInt(String('1').padEnd(decimals + 1, '0'))).toFixed(decimals));
        }
        return Number(parseFloat(amount));
    },

    reaisFromCents(value, symbol = 'R$ ') {
        return window.currency(value, {
            symbol: symbol,
            precision: 2,
            decimal: ',',
            separator: '.',
            fromCents: true
        }).format();
    },

    reais(value, symbol = 'R$ ') {
        return window.currency(value, {
            symbol: symbol,
            precision: 2,
            decimal: ',',
            separator: '.',
            fromCents: false
        }).format();
    },

};

var components = {
    //Components
    AppHead: script$3,
    NotificationIcon: script$a, 
    NotificationCentral: script$5,
    NavbarSettingsDropdown: script$b,
    ToggleDarkMode: script$4,
    MediaImageUploader: script,
    GlobalFilters
    //Jetstream
};

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
