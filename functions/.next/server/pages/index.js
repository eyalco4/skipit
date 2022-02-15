"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./sections/PageWrapper.jsx






const PageWrapper = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "4100737888",
      children: [".container.jsx-4100737888{text-align:center;font-family:Helvetica,Arial;}", ".main.jsx-4100737888{margin:100px 0;width:100%;}", ".footer.jsx-4100737888{position:absolute;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #eaeaea;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}", ".footer.jsx-4100737888 img.jsx-4100737888{width:28px;}"]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-4100737888" + " " + "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
          className: "jsx-4100737888",
          children: "SkipIT"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "icon",
          href: "/favicon.ico",
          className: "jsx-4100737888"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("main", {
        className: "jsx-4100737888" + " " + "main",
        children: children
      }), /*#__PURE__*/jsx_runtime_.jsx("footer", {
        className: "jsx-4100737888" + " " + "footer",
        children: "Powered by SkipIT"
      })]
    })]
  });
};

/* harmony default export */ const sections_PageWrapper = (PageWrapper);
;// CONCATENATED MODULE: ./styles/index.js
const colors = {
  black: '#000000',
  white: '#FFFFFF',
  white1: '#F3F3F3',
  gray: '#4A4A4A4A',
  blue: '#3498DB'
};
;// CONCATENATED MODULE: ./components/Card.jsx






const Card = ({
  margin = "auto",
  borderRadius = "4px",
  main,
  children,
  onClick = () => {}
}) => {
  const boxShadow = main ? "0 40px 40px -40px rgba(192, 192, 192, 0.5)" : "0 0px 0px 0 rgba(188, 187, 187, 0.5)";
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "90853669",
      dynamic: [colors.black, colors.white, borderRadius, colors.gray, boxShadow],
      children: [`.card-wrapper.__jsx-style-dynamic-selector{background-color:${colors.black};color:${colors.white};border-radius:${borderRadius};border:1px solid ${colors.gray};box-shadow:${boxShadow};margin:auto;width:320px;height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}`]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      onClick: onClick,
      className: style_default().dynamic([["90853669", [colors.black, colors.white, borderRadius, colors.gray, boxShadow]]]) + " " + "card-wrapper",
      children: children
    })]
  });
};

/* harmony default export */ const components_Card = (Card);
;// CONCATENATED MODULE: ./components/Wait.jsx







const Wait = ({
  lineNumber
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3980736682",
      children: ["h1.jsx-3980736682{margin:40px auto;}", ".with-spacing.jsx-3980736682{-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;}", ".line-no.jsx-3980736682{font-size:120px;}"]
    }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "jsx-3980736682" + " " + "with-spacing",
      children: "YOU ARE"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Card, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-3980736682" + " " + "line-no",
        children: lineNumber
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "jsx-3980736682",
      children: "In line"
    })]
  });
};

/* harmony default export */ const components_Wait = (Wait);
;// CONCATENATED MODULE: ./components/Register.jsx







const Register = ({
  handler
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3724110890",
      children: [".join.jsx-3724110890{width:100%;font-size:60px;margin:auto;}", ".join.jsx-3724110890:hover,.join.jsx-3724110890:focus,.join.jsx-3724110890:active{cursor:pointer;font-weight:bold;}"]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Card, {
      onClick: handler,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-3724110890" + " " + "join",
        children: "JOIN THE LINE"
      })
    })]
  });
};

/* harmony default export */ const components_Register = (Register);
;// CONCATENATED MODULE: ./components/Loader.jsx







const Loader_Register = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2678024612",
      dynamic: [colors.white1, colors.blue],
      children: [".loader-contaier.__jsx-style-dynamic-selector{width:100%;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", `.loader.__jsx-style-dynamic-selector{border:16px solid ${colors.white1};border-top:16px solid ${colors.blue};border-radius:50%;width:120px;height:120px;-webkit-animation:spin-__jsx-style-dynamic-selector 2s linear infinite;animation:spin-__jsx-style-dynamic-selector 2s linear infinite;}`, "@-webkit-keyframes spin-__jsx-style-dynamic-selector{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes spin-__jsx-style-dynamic-selector{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: style_default().dynamic([["2678024612", [colors.white1, colors.blue]]]) + " " + "loader-container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: style_default().dynamic([["2678024612", [colors.white1, colors.blue]]]) + " " + "loader"
      })
    })]
  });
};

/* harmony default export */ const Loader = (Loader_Register);
;// CONCATENATED MODULE: ./pages/index.jsx









const isServer = true;

class Index extends external_react_.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      lineNumber: null,
      isLoading: false
    };
  }

  componentDidMount() {
    if (!isServer && localStorage.getItem('SkipIT')) {
      const {
        id,
        lineNumber
      } = JSON.parse(localStorage.getItem('SkipIT'));
      this.setState({
        id,
        lineNumber
      });
    }
  }

  static async getInitialProps() {
    return {
      pageProps: {}
    };
  }

  render() {
    const register = async () => {
      try {
        this.setState({
          isLoading: true
        });
        const res = await external_axios_default().get(`${window.location.href}/register`);
        const {
          data: {
            id,
            place
          }
        } = res;
        this.setState({
          id,
          lineNumber: place,
          isLoading: false
        });
        localStorage.setItem('SkipIT', JSON.stringify(this.state));
      } catch (e) {
        this.setState({
          isLoading: false
        });
      }
    };

    const {
      id,
      lineNumber,
      isLoading
    } = this.state;

    if (isLoading) {
      return /*#__PURE__*/jsx_runtime_.jsx(components_Card, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Loader, {})
      });
    }

    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx(sections_PageWrapper, {
        children: id ? /*#__PURE__*/jsx_runtime_.jsx(components_Wait, {
          lineNumber: lineNumber
        }) : /*#__PURE__*/jsx_runtime_.jsx(components_Register, {
          handler: register
        })
      })
    });
  }

}

/* harmony default export */ const pages = (Index);

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(288));
module.exports = __webpack_exports__;

})();