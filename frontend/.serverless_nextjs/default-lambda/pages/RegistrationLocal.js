"use strict";
(() => {
var exports = {};
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 16621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env","contents":"# Next env variables\nNEXTAUTH_URL='http://localhost:3000'\nNEXTAUTH_SECRET=\"XSjmx6Ocv1jtBKKyE6hRwUX1hgkdT7QFDn59btAwnPU\"\nNODE_ENV='production'\nNEXT_PUBLIC_API_URL=http://localhost:1337\nNEXT_PUBLIC_DATABASE_URL=postgres://postgres:samuele2512@localhost:5432/enig\n\n# Next-Auth providers env variables\nGOOGLE_CLIENT_ID=\"204760712065-mdkeklf43ahgdd5c2bb2uu1gg7hdheou.apps.googleusercontent.com\"\nGOOGLE_CLIENT_SECRET=\"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\"\nFACEBOOK_CLIENT_ID=\"474456661003067\"\nFACEBOOK_CLIENT_SECRET=\"c31c1f79c1182f575eaa250d41a052dc\"\n\n# Strapi cms env variables\nSTRAPI_TOKEN='c119689dbc3e7b5f5f339ab741e9f1d0f3a557001cfef7cd3f70fc593bd48d62a16cf95f08779339eaf565fdc2f9a9232c04e75b534bb0e4401ea3e151a4fb69d280298598d87573ed516e1ef8ade4012123a7bcc498e6f2e2e232a97245dcb79a851dd4cd55b297e4a33146277de11ff7ce65406b41758e42303477491ed737'\n\n# AWS keys\nAWS_ACCESS_KEY_ID=AKIAT7FAXPVE3ZGHWJO7 \nAWS_SECRET_ACCESS_KEY=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\n"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(34208)

      const appMod = __webpack_require__(35656)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(31269)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(89185),
        notFoundModule: __webpack_require__(5838),
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,
        reactRoot: false,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/RegistrationLocal",
        buildId: "M0BCk0-bYBPlJ6lHtkeZx",
        escapedBuildId: "M0BCk0\-bYBPlJ6lHtkeZx",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"1900c9ad4a2d51ce9425f283725adf7d",previewModeSigningKey:"0bc5bb5980ae6f3d3a8c1940b63e11da3d96e527989c94c8534eed097433ab20",previewModeEncryptionKey:"6e306a8c0793302a93c6759693c97e192a0e3f638d02b122ecdf7a2cdfd6fb0c"}
      })
      
    

/***/ }),

/***/ 31269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RegistrationLocal),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./components/Footer.tsx
var Footer = __webpack_require__(32980);
// EXTERNAL MODULE: ./components/Header.tsx
var Header = __webpack_require__(18969);
// EXTERNAL MODULE: ./node_modules/next-auth/dist/client/index.js
var client = __webpack_require__(11675);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var index_esm = __webpack_require__(60155);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/CheckCircleIcon.js
var CheckCircleIcon = __webpack_require__(75426);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/XCircleIcon.js
var XCircleIcon = __webpack_require__(33740);
// EXTERNAL MODULE: ./node_modules/react-icons/fc/index.esm.js
var fc_index_esm = __webpack_require__(81872);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
;// CONCATENATED MODULE: ./components/RegistrationForm.tsx

/* eslint-disable no-unused-vars */ /* eslint-disable @next/next/no-html-link-for-pages */ /* eslint-disable no-control-regex */ //import axios from 'axios'







const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
function RegistrationForm({ providers  }) {
    const userRef = (0,react.useRef)(null);
    const errRef = (0,react.useRef)();
    const { 0: user , 1: setUser  } = (0,react.useState)('');
    const { 0: validName , 1: setValidName  } = (0,react.useState)(false);
    const { 0: userFocus , 1: setUserFocus  } = (0,react.useState)(false);
    const { 0: pwd , 1: setPwd  } = (0,react.useState)('');
    const { 0: validPwd , 1: setValidPwd  } = (0,react.useState)(false);
    const { 0: pwdFocus , 1: setPwdFocus  } = (0,react.useState)(false);
    const { 0: matchPwd , 1: setMatchPwd  } = (0,react.useState)('');
    const { 0: validMatch , 1: setValidMatch  } = (0,react.useState)(false);
    const { 0: matchFocus , 1: setMatchFocus  } = (0,react.useState)(false);
    const { 0: email , 1: setEmail  } = (0,react.useState)('');
    const { 0: validEmail , 1: setValidEmail  } = (0,react.useState)(false);
    const { 0: emailFocus , 1: setEmailFocus  } = (0,react.useState)(false);
    const { 0: errMsg , 1: setErrMsg  } = (0,react.useState)('');
    const { 0: success , 1: setSuccess  } = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        userRef.current.focus();
    }, []);
    (0,react.useEffect)(()=>{
        setValidName(USER_REGEX.test(user));
    }, [
        user
    ]);
    (0,react.useEffect)(()=>{
        setValidEmail(EMAIL_REGEX.test(email));
    }, [
        email
    ]);
    (0,react.useEffect)(()=>{
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [
        pwd,
        matchPwd
    ]);
    (0,react.useEffect)(()=>{
        setErrMsg('');
    }, [
        user,
        pwd,
        email,
        matchPwd
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = EMAIL_REGEX.test(email);
        if (!v1 || !v2 || !v3) {
            setErrMsg('Dati Invalidi');
            return;
        }
        const RegistrationInfo = {
            username: user,
            email: email,
            password: pwd
        };
        console.log('🚀 - file: RegistrationForm.tsx - line 69 - handleSubmit - RegistrationInfo', RegistrationInfo);
        const response = await fetch(`${"http://localhost:1337"}/api/auth/local/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'User-Agent': '*'
            },
            body: JSON.stringify(RegistrationInfo)
        });
        const loginResponse = await response.json();
        if (loginResponse.jwt) {
            console.log('🚀 ~ file: RegistrationForm.tsx ~ line 81 ~ handleSubmit ~ loginResponse', loginResponse);
            console.log(loginResponse);
            setSuccess(true);
            setUser('');
            setPwd('');
            setMatchPwd('');
        } else {
            setErrMsg('No Server Response');
            if ((loginResponse === null || loginResponse === void 0 ? void 0 : loginResponse.error.status) === 400) {
                setErrMsg(loginResponse === null || loginResponse === void 0 ? void 0 : loginResponse.error.message);
            } else {
                setErrMsg('Registrazione fallita');
            }
            errRef.current.focus();
        }
    };
    return(/*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "flex min-h-screen flex-col justify-center bg-beige-400 px-6 py-4 ",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mt-8 mb-8 sm:mx-auto sm:w-full sm:max-w-md",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "rounded-2xl bg-beige-100 py-8 px-[1.9rem] shadow-lg sm:py-10",
                    children: success ? /*#__PURE__*/ jsx_runtime.jsx("section", {
                        className: "mx-2 transition duration-200 ease-in-out",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "rounded-xl bg-green-50 p-4 shadow-lg",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative inline-block",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(CheckCircleIcon/* default */.Z, {
                                        className: "absolute -top-7 -left-7 block h-7 w-7 text-green-400",
                                        "aria-hidden": "true"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "my-3 ml-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-base font-medium text-green-800",
                                                children: "Registrazione effettuata con successo!"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mt-4 flex justify-between text-sm text-green-700",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Accedi al tuo account 👉 "
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "-mx-2 -my-1.5 flex",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            type: "button",
                                                            href: "/Login",
                                                            className: "rounded-lg bg-green-500 px-2 py-1.5 text-sm font-medium text-white shadow-md outline-none ring-2 ring-green-600 transition ease-in-out hover:bg-green-600",
                                                            children: "Accedi"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                ref: errRef,
                                className: errMsg ? 'errmsg' : 'offscreen easy-in-out transition duration-300',
                                "aria-live": "assertive",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex-shrink-0",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(XCircleIcon/* default */.Z, {
                                                className: "h-5 w-5 text-red-500",
                                                "aria-hidden": "true"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "ml-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "text-sm font-medium text-red-800",
                                                    children: "Registrazione fallita"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mt-2 text-sm text-red-700",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                        role: "list",
                                                        className: "list-disc space-y-1 pl-5",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: errMsg
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "mb-1 text-center text-4xl font-normal text-beige-900",
                                children: "Registrati"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                onSubmit: handleSubmit,
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                        htmlFor: "email",
                                        className: "mb-2 flex flex-auto justify-between",
                                        children: [
                                            "Email",
                                            /*#__PURE__*/ jsx_runtime.jsx(fc_index_esm/* FcCheckmark */.sez, {
                                                className: validEmail ? 'valid' : 'hidden'
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(index_esm/* IoCloseOutline */.IOM, {
                                                className: validEmail || !email ? 'hidden' : 'invalid'
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        type: "email",
                                        id: "email",
                                        onChange: (e)=>setEmail(e.target.value)
                                        ,
                                        value: email,
                                        placeholder: "Inserisci una email valida 🔎",
                                        required: true,
                                        "aria-invalid": validEmail ? 'false' : 'true',
                                        "aria-describedby": "emailnote",
                                        onFocus: ()=>setEmailFocus(true)
                                        ,
                                        onBlur: ()=>setEmailFocus(false)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        id: "emailnote",
                                        className: emailFocus ? 'instructions' : 'offscreen',
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(index_esm/* IoInformationSharp */.q4Y, {
                                                className: "h-5 w-5"
                                            }),
                                            "Questa sar\xe0 la stessa email con cui ti contatteremo dopo i tuoi acquisti per tenerti aggiornato!"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                        htmlFor: "Nome",
                                        className: "mb-2 flex flex-auto justify-between",
                                        children: [
                                            "Nome",
                                            /*#__PURE__*/ jsx_runtime.jsx(fc_index_esm/* FcCheckmark */.sez, {
                                                className: validName ? 'valid' : 'hidden'
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(index_esm/* IoCloseOutline */.IOM, {
                                                className: validName || !user ? 'hidden' : 'invalid'
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        type: "text",
                                        id: "Nome",
                                        ref: userRef,
                                        autoComplete: "off",
                                        placeholder: "Da 4 a 24, [a-z, A-Z, 0-9] 📝",
                                        onChange: (e)=>setUser(e.target.value)
                                        ,
                                        value: user,
                                        required: true,
                                        "aria-invalid": validName ? 'false' : 'true',
                                        "aria-describedby": "uidnote",
                                        onFocus: ()=>setUserFocus(true)
                                        ,
                                        onBlur: ()=>setUserFocus(false)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                        htmlFor: "password",
                                        className: "mb-2 flex flex-auto justify-between",
                                        children: [
                                            "Password",
                                            /*#__PURE__*/ jsx_runtime.jsx(fc_index_esm/* FcCheckmark */.sez, {
                                                className: validPwd ? 'valid' : 'hidden'
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(index_esm/* IoCloseOutline */.IOM, {
                                                className: validPwd || !pwd ? 'hidden' : 'invalid'
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        type: "password",
                                        id: "password",
                                        onChange: (e)=>setPwd(e.target.value)
                                        ,
                                        value: pwd,
                                        placeholder: "Da 8 a 24, [a-z, A-Z, 0-9, !@%$] 🔐",
                                        required: true,
                                        "aria-invalid": validPwd ? 'false' : 'true',
                                        "aria-describedby": "pwdnote",
                                        onFocus: ()=>setPwdFocus(true)
                                        ,
                                        onBlur: ()=>setPwdFocus(false)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                        htmlFor: "confirm_pwd",
                                        className: "mb-2 flex flex-auto justify-between",
                                        children: [
                                            "Password di conferma",
                                            /*#__PURE__*/ jsx_runtime.jsx(fc_index_esm/* FcCheckmark */.sez, {
                                                className: validMatch && matchPwd ? 'valid' : 'hidden'
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(index_esm/* IoCloseOutline */.IOM, {
                                                className: validMatch || !matchPwd ? 'hidden' : 'invalid'
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        type: "password",
                                        id: "confirm_pwd",
                                        onChange: (e)=>setMatchPwd(e.target.value)
                                        ,
                                        value: matchPwd,
                                        placeholder: "Uguale alla password inserita ☝️",
                                        required: true,
                                        "aria-invalid": validMatch ? 'false' : 'true',
                                        "aria-describedby": "confirmnote",
                                        onFocus: ()=>setMatchFocus(true)
                                        ,
                                        onBlur: ()=>setMatchFocus(false)
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: " text-medium easy-in-out mt-12 inline-flex w-full justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg transition duration-200 hover:bg-beige-600",
                                        disabled: !validName || !validPwd || !validEmail || !validMatch ? true : false,
                                        children: "Registrati"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: "mx-1 mt-4 flex flex-row justify-between",
                                children: [
                                    "Ti sei gi\xe0 registrato?",
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "line ",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(next_link["default"], {
                                            href: "/Login",
                                            children: "Accedi"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative mx-2 py-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute inset-0 flex items-center border-beige-700",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "w-full border-t border-beige-700"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-medium relative flex justify-center",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "bg-beige-100 px-2 text-beige-900",
                                                    children: "Oppure continua con"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mt-5 grid grid-cols-2 gap-2",
                                        children: providers && Object.values(providers).map((provider)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                children: (()=>{
                                                    if (provider.name == 'Google') {
                                                        return(/*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            className: "text-medium easy-in-out inline-flex w-full justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg transition duration-200 hover:bg-beige-600",
                                                            onClick: ()=>{
                                                                (0,client/* signIn */.zB)(provider.id);
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "h-5 w-5",
                                                                "aria-hidden": "true",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    viewBox: "0 0 488 512",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        d: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                                                    })
                                                                })
                                                            })
                                                        }));
                                                    } else if (provider.name == 'Facebook') {
                                                        return(/*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            className: "text-medium easy-in-out inline-flex w-full justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg transition duration-200 hover:bg-beige-600",
                                                            onClick: ()=>{
                                                                (0,client/* signIn */.zB)(provider.id);
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "h-5 w-5",
                                                                "aria-hidden": "true",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    viewBox: "0 0 320 512",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                                    })
                                                                })
                                                            })
                                                        }));
                                                    }
                                                })()
                                            }, provider.name)
                                        )
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    }));
};

// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
;// CONCATENATED MODULE: ./pages/RegistrationLocal.tsx






function RegistrationLocal({ providers  }) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(head["default"], {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Registration"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/question-solid.svg"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(RegistrationForm, {
                providers: providers
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
        ]
    }));
};
const getServerSideProps = async ()=>{
    const session = await (0,client/* getSession */.Gg)();
    if (session) {
        return {
            redirect: {
                destination: '/'
            }
        };
    }
    //const logininfo = parseCookies(ctx).loginInfo
    return {
        props: {
            providers: await (0,client/* getProviders */.J9)()
        }
    };
};


/***/ }),

/***/ 1014:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 85477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [880,366,664,835,335], () => (__webpack_exec__(16621)));
module.exports = __webpack_exports__;

})();