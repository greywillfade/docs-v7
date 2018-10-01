(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{208:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Directus supports internationalization across the entire application. All collections, fields, and App text can be offered in any number of languages. On this page we will describe how the different areas of the platform handle multilingual support.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("The core codebase uses the "),a("a",{attrs:{href:"https://github.com/kazupon/vue-i18n",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-i18n"),a("OutboundLink")],1),t._v(" plugin to manage the translations across the platform. The language files and the init code are located in the "),a("code",[t._v("/src/lang/")]),t._v(" folder of the app repo. The plugin contains a "),a("a",{attrs:{href:"https://kazupon.github.io/vue-i18n/",target:"_blank",rel:"noopener noreferrer"}},[t._v("bunch of methods"),a("OutboundLink")],1),t._v(" to render these translations.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"translations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#translations","aria-hidden":"true"}},[this._v("#")]),this._v(" Translations")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"application-text"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-text","aria-hidden":"true"}},[this._v("#")]),this._v(" Application Text")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The one that's most often used is "),s("code",[this._v("$t")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ $t('collections') }}"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"translations-in-extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#translations-in-extensions","aria-hidden":"true"}},[this._v("#")]),this._v(" Translations in Extensions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Extensions can provide their own translations to extend those available within the core app. The "),s("code",[this._v("meta.json")]),this._v(" file of each extension has a "),s("code",[this._v("translation")]),this._v(" key that allows you to add new translations for use in the system.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v('"translation"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"en-US"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"color"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Color"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"input"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Input"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"input_comment"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"The unit in which the user will enter the data"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"output"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Output"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"output_comment"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"The unit in which the data gets saved to the DB"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"format"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Format"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"format_comment"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Show value as color swatch"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"palette"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Palette"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"palette_comment"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Add color options as hex values"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"palette_only"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Palette Only"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"palette_only_comment"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Only allow the user to pick from the palette"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"allow_alpha"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Allow alpha"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"allow_alpha_comment"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Allow values with an alpha channel"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The translations in extensions are namespaced to avoid conflicts between packages (/ the main app). The namespace is "),s("code",[this._v("<ext-type>-<name>-<string>")]),this._v(". The above example is of the color interface. To use those translations, you have to use "),s("code",[this._v("$t('interfaces-color-palette_only')")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can even use the translations in the "),s("code",[this._v("meta.json")]),this._v(" to translate values "),s("em",[this._v("in")]),this._v(" that same "),s("code",[this._v("meta.json")]),this._v(" key. So meta! This is especially useful to add translatable names for the extension and its options.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"content-translations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-translations","aria-hidden":"true"}},[this._v("#")]),this._v(" Content Translations")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In addition to translating the CMS itself, you may want to translate the actual managed content too. This is done through our core "),s("a",{attrs:{href:"#"}},[this._v("Translations Interface")]),this._v(".")])}],!1,null,null,null);e.options.__file="i18n.md";s.default=e.exports}}]);