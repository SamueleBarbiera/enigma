(() => {
var exports = {};
exports.id = 667;
exports.ids = [667];
exports.modules = {

/***/ 5455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

      const compMod = __webpack_require__(55895)

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
        page: "/Login",
        buildId: "M0BCk0-bYBPlJ6lHtkeZx",
        escapedBuildId: "M0BCk0\-bYBPlJ6lHtkeZx",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"1900c9ad4a2d51ce9425f283725adf7d",previewModeSigningKey:"0bc5bb5980ae6f3d3a8c1940b63e11da3d96e527989c94c8534eed097433ab20",previewModeEncryptionKey:"6e306a8c0793302a93c6759693c97e192a0e3f638d02b122ecdf7a2cdfd6fb0c"}
      })
      
    

/***/ }),

/***/ 55895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Login),
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
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./context/UserContext.tsx
var UserContext = __webpack_require__(92697);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var index_esm = __webpack_require__(60155);
// EXTERNAL MODULE: ./node_modules/react-icons/fc/index.esm.js
var fc_index_esm = __webpack_require__(81872);
;// CONCATENATED MODULE: ./components/LoginForm.tsx

/* eslint-disable no-control-regex */ /* eslint-disable no-unused-vars */ 
//import { setCookie } from 'nookies'


//import { XCircleIcon } from '@heroicons/react/solid'







//import Link from 'next/link'
//const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
function LoginForm({ providers: providers1  }) {
    const [session] = (0,client/* useSession */.kP)();
    const { 0: email1 , 1: setEmail  } = (0,react.useState)('');
    const { 0: password1 , 1: setPassword  } = (0,react.useState)('');
    const userRef = (0,react.useRef)(null);
    const errRef = (0,react.useRef)(null);
    const { 0: pwd , 1: setPwd  } = (0,react.useState)('');
    const { 0: validPwd , 1: setValidPwd  } = (0,react.useState)(false);
    const { 0: pwdFocus , 1: setPwdFocus  } = (0,react.useState)(false);
    const { 0: validEmail , 1: setValidEmail  } = (0,react.useState)(false);
    const { 0: emailFocus , 1: setEmailFocus  } = (0,react.useState)(false);
    const { 0: errMsg , 1: setErrMsg  } = (0,react.useState)('');
    const { 0: success , 1: setSuccess  } = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        setValidEmail(EMAIL_REGEX.test(email1));
    }, [
        email1
    ]);
    (0,react.useEffect)(()=>{
        setValidPwd(PWD_REGEX.test(pwd));
    }, [
        pwd
    ]);
    (0,react.useEffect)(()=>{
        setErrMsg('');
    }, [
        pwd,
        email1
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const v2 = PWD_REGEX.test(pwd);
        const v3 = EMAIL_REGEX.test(email1);
        if (!v2) {
            setErrMsg('Dato Invalido');
            return;
        }
        try {
            const response = await axios_default().post('http://localhost:1337/api/auth/local', JSON.stringify({
                email: email1,
                password: pwd
            }), {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            console.log(response === null || response === void 0 ? void 0 : response.data);
            console.log(response === null || response === void 0 ? void 0 : response.data.jwt);
            console.log(JSON.stringify(response));
            setSuccess(true);
            setPwd('');
        } catch (err) {
            var ref, ref1;
            if ((ref = !err) === null || ref === void 0 ? void 0 : ref.response) {
                setErrMsg('Server non raggiungibile');
            } else if (((ref1 = err.response) === null || ref1 === void 0 ? void 0 : ref1.status) === 400) {
                setErrMsg('Login fallito');
            }
            errRef.current.focus();
        }
    };
    const constxt = (0,react.useContext)(UserContext/* default */.Z);
    const fetchRequest = (0,react.useCallback)(async (email, password)=>{
        const loginInfo = {
            identifier: email,
            password: password
        };
        console.log(loginInfo);
        const res = await fetch(`${"http://localhost:1337"}/api/auth/local`, {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'User-Agent': '*'
            },
            body: JSON.stringify(loginInfo)
        });
        const loginResponse = await res.json();
        console.log(loginResponse);
        if (res.ok) {
            /*setCookie(null, 'jwt', loginResponse.jwt, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })*/ localStorage.setItem('email user local auth', loginResponse.user.email);
            router["default"].push('/');
            constxt.setValue({
                ...constxt.value,
                loginInfo
            });
        } else {
            const ErrorMessage = 'I dati inseriti non son validi';
            return {
                props: {
                    ErrorMessage: await ErrorMessage
                }
            };
        }
    }, [
        constxt
    ]);
    return(/*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "flex h-screen flex-col justify-center bg-beige-400 px-6 py-4",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: " sm:mx-auto sm:w-full sm:max-w-md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "rounded-2xl bg-beige-100 py-8 px-[1.9rem] shadow-lg sm:py-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "mb-4 -mt-2 text-center text-4xl font-normal text-beige-900",
                            children: "Accedi"
                        }),
                        success ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    children: "Registrazione effettuata con successo!"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#",
                                        children: "Accedi"
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    ref: errRef,
                                    className: errMsg ? 'errmsg' : 'offscreen easy-in-out transition duration-300',
                                    "aria-live": "assertive",
                                    children: errMsg
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
                                                    className: validEmail || !email1 ? 'hidden' : 'invalid'
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "email",
                                            id: "email",
                                            onChange: (e)=>setEmail(e.target.value)
                                            ,
                                            value: email1,
                                            placeholder: "Inserisci una email valida 🔎",
                                            required: true,
                                            "aria-invalid": validEmail ? 'false' : 'true',
                                            "aria-describedby": "emailnote",
                                            onFocus: ()=>setEmailFocus(true)
                                            ,
                                            onBlur: ()=>setEmailFocus(false)
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
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            className: " text-medium easy-in-out mt-12 inline-flex w-full justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg transition duration-200 hover:bg-beige-600",
                                            disabled: !validPwd || !validEmail ? true : false,
                                            children: "Registrati"
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
                                            children: providers1 && Object.values(providers1).map((providers)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    children: (()=>{
                                                        if (providers.name == 'Google') {
                                                            return(/*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                className: "text-medium easy-in-out inline-flex w-full justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg transition duration-200 hover:bg-beige-600",
                                                                onClick: ()=>{
                                                                    (0,client/* signIn */.zB)(providers.id);
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
                                                        } else if (providers.name == 'Facebook') {
                                                            return(/*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                className: "text-medium easy-in-out inline-flex w-full justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg transition duration-200 hover:bg-beige-600",
                                                                onClick: ()=>{
                                                                    (0,client/* signIn */.zB)(providers.id);
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
                                                }, providers.name)
                                            )
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
};

// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
;// CONCATENATED MODULE: ./pages/Login.tsx








function Login({ providers  }) {
    const loginInfoData = (0,react.useContext)(UserContext/* default */.Z);
    console.log('🚀 - file: Login.tsx - line 11 - Login - loginInfoData', loginInfoData);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(head["default"], {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Login"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/question-solid.svg"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(LoginForm, {
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

/***/ 11163:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(90387)


/***/ }),

/***/ 1014:
/***/ ((module) => {

"use strict";
module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 39491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 85477:
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ 63477:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 76224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [880,366,669,335], () => (__webpack_exec__(5455)));
module.exports = __webpack_exports__;

})();