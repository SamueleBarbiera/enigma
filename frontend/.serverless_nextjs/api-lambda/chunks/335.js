"use strict";
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 32980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79352);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8193);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39327);




const footerNavigation = {
    bottomLinks: [
        {
            name: 'Facebook',
            href: '#',
            image: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_1__/* .TiSocialFacebook */ .E_e, {
                className: "-mt-[0.1rem] h-[1.9rem] w-8",
                "aria-hidden": "true"
            })
        },
        {
            name: 'Instagram',
            href: '#',
            image: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__/* .RiInstagramLine */ .Adh, {
                className: "mt-[0.04rem] h-[1.7rem] w-8",
                "aria-hidden": "true"
            })
        },
        {
            name: 'Whatsapp',
            href: '#',
            image: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__/* .AiOutlineWhatsApp */ .thF, {
                className: "ml-[0.2rem] h-[1.7rem] w-8",
                "aria-hidden": "true"
            })
        }, 
    ]
};
function Footer() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
            className: "z-100 h-fit w-screen bg-beige-200 px-8",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-4 items-center py-10 md:flex md:justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Socials, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden md:flex md:text-left",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-medium text-beige-900",
                            children: "Enigma Moda 2022 🤎"
                        })
                    })
                ]
            })
        })
    }));
};
function Socials() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "-mt-[0.6rem] flex items-center justify-center md:mt-1",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mb-1 flex space-x-1",
            children: footerNavigation.bottomLinks.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: item.href,
                    className: "text-beige-900 hover:text-beige-700",
                    children: item.image
                }, item.name)
            )
        })
    }));
}


/***/ }),

/***/ 18969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12400);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5506);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69065);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(89583);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5434);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35656);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65601);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74000);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77050);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41748);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71722);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11675);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92697);

/* eslint-disable @next/next/no-html-link-for-pages */ /* eslint-disable no-unused-vars */ 











//import { useCallback } from 'react'
const solutions = [
    {
        name: 'Analytics',
        description: 'Get a bett',
        href: '#',
        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
    },
    {
        name: 'Engagement',
        description: 'Speak dy.',
        href: '#',
        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
    },
    {
        name: 'Security',
        description: 'Your custore.',
        href: '#',
        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
    },
    {
        name: 'Integrations',
        description: 'Connect witht.',
        href: '#',
        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z
    },
    {
        name: 'Automations',
        description: 'Build strate',
        href: '#',
        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
    }, 
];
const callsToAction = [
    {
        name: 'Checkout',
        href: '/Checkout',
        costo_totale: 1
    }
];
const navigation = {
    pages: [
        {
            name: 'Prodotti',
            href: '/Prodotti',
            icon: 'd'
        },
        {
            name: 'Trends',
            href: '/Trends'
        },
        {
            name: 'Best sellers',
            href: '/Best sellers'
        }, 
    ]
};
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
function Header() {
    const { 0: mobileMenuOpen , 1: setMobileMenuOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__/* .useSession */ .kP)();
    const value = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    const { 0: logindata , 1: setLogindata  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const refreshPage = ()=>{
        localStorage.setItem('email user local auth', 'null');
        window.location.reload();
    };
    console.log(value);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const loginDataSetted = window.localStorage.getItem('email user local auth');
        setLogindata(loginDataSetted);
        console.log('set items --> ' + loginDataSetted);
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Transition.Root */ .uT.Root, {
                show: mobileMenuOpen,
                as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Dialog */ .Vq, {
                    as: "div",
                    className: "fixed inset-0 z-40 flex lg:hidden",
                    onClose: setMobileMenuOpen,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Transition.Child */ .uT.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                            enter: "transition-opacity ease-linear duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "transition-opacity ease-linear duration-300",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Dialog.Overlay */ .Vq.Overlay, {
                                className: "bg-beige fixed inset-0 bg-opacity-25"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Transition.Child */ .uT.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                            enter: "transition ease-in-out duration-300 transform",
                            enterFrom: "-translate-x-full",
                            enterTo: "translate-x-0",
                            leave: "transition ease-in-out duration-300 transform",
                            leaveFrom: "translate-x-0",
                            leaveTo: "-translate-x-full",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative flex w-2/3 flex-col overflow-y-auto bg-beige-50 pb-8 shadow-xl md:hidden",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex px-4 pt-5 ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: "-m-2 inline-flex items-center justify-center rounded-md p-2 text-beige-400",
                                            onClick: ()=>setMobileMenuOpen(false)
                                            ,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                className: "h-6 w-6",
                                                "aria-hidden": "true"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "space-y-6 py-6 px-4",
                                        children: navigation.pages.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flow-root",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: page.href,
                                                    className: "-m-2 mb-1 block rounded-lg bg-beige-300 p-2 font-medium text-beige-900",
                                                    children: page.name
                                                })
                                            }, page.name)
                                        )
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative bg-beige-50",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        "aria-hidden": "true",
                        className: "absolute inset-0 bg-beige-300 opacity-50 "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: "relative z-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            "aria-label": "Top",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-beige-50 bg-opacity-10 backdrop-blur-md backdrop-filter",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex h-16 items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "hidden md:flex md:flex-1 lg:items-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "/",
                                                        className: "flex-shrink-0",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                            width: 16,
                                                            height: 32,
                                                            loader: _pages_app__WEBPACK_IMPORTED_MODULE_3__.myLoader,
                                                            src: '/domanda.png',
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "hidden h-full md:flex",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Popover.Group */ .J2.Group, {
                                                        className: "inset-x-0 bottom-0 px-4",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex h-full justify-center space-x-8",
                                                            children: navigation.pages.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: page.href,
                                                                    className: "flex items-center text-sm font-medium text-beige-900",
                                                                    children: page.name
                                                                }, page.name)
                                                            )
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex flex-1 items-center md:hidden",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        className: "-ml-2 p-2 text-beige-900",
                                                        onClick: ()=>setMobileMenuOpen(true)
                                                        ,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                            className: "h-6 w-6",
                                                            "aria-hidden": "true"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    className: "hidden",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                        width: 2,
                                                        height: 36,
                                                        loader: _pages_app__WEBPACK_IMPORTED_MODULE_3__.myLoader,
                                                        src: '/domanda.png',
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex flex-1 items-center justify-end",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center lg:ml-8",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: "p-2 text-beige-900 ",
                                                                children: (()=>{
                                                                    if (session) {
                                                                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "ml-4 mt-[0.4rem] flow-root",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Popover */ .J2, {
                                                                                className: "relative",
                                                                                children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Popover.Button */ .J2.Button, {
                                                                                                className: classNames(open ? 'text-beige-900' : 'text-beige-800', 'group inline-flex items-center rounded-md text-base font-medium hover:text-beige-900 '),
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                    href: "#",
                                                                                                    className: "group -m-2 flex items-center p-2",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__/* .FaRegUser */ .BKo, {
                                                                                                        className: "h-5 w-5",
                                                                                                        "aria-hidden": "true"
                                                                                                    })
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Transition */ .uT, {
                                                                                                as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                                                                                                enter: "transition ease-out duration-200",
                                                                                                enterFrom: "opacity-0 translate-y-1",
                                                                                                enterTo: "opacity-100 translate-y-0",
                                                                                                leave: "transition ease-in duration-150",
                                                                                                leaveFrom: "opacity-100 translate-y-0",
                                                                                                leaveTo: "opacity-0 translate-y-1",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Popover.Panel */ .J2.Panel, {
                                                                                                    className: "z-100 absolute mt-8 w-min max-w-xs -translate-x-40 transform px-0",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                        className: "overflow-hidden rounded-lg shadow-lg",
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                            className: "relative bg-beige-100 px-6 py-6",
                                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                        className: "relative mb-12 flex h-16 w-16 items-center justify-center",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                                                                                            src: session.user.image,
                                                                                                                            alt: "User Img",
                                                                                                                            loader: _pages_app__WEBPACK_IMPORTED_MODULE_3__.myLoader,
                                                                                                                            layout: "fill",
                                                                                                                            objectFit: "contain",
                                                                                                                            className: "rounded-full shadow-md"
                                                                                                                        })
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                                        children: session.user.name
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                                        className: "text-medium easy-in-out mt-2 inline-flex w-full justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg transition duration-200 hover:bg-beige-600",
                                                                                                                        onClick: ()=>(0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__/* .signOut */ .w7)({
                                                                                                                                redirect: false
                                                                                                                            })
                                                                                                                        ,
                                                                                                                        children: "Sign Out"
                                                                                                                    })
                                                                                                                ]
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                            })
                                                                        }));
                                                                    } else if (setLogindata !== null) {
                                                                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "ml-4 mt-[0.4rem] flow-root",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Popover */ .J2, {
                                                                                className: "relative",
                                                                                children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Popover.Button */ .J2.Button, {
                                                                                                className: classNames(open ? 'text-beige-900' : 'text-beige-800', 'group inline-flex items-center rounded-md text-base font-medium hover:text-beige-900 '),
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                    href: "#",
                                                                                                    className: "group -m-2 flex items-center p-2",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__/* .FaRegUser */ .BKo, {
                                                                                                        className: "h-5 w-5",
                                                                                                        "aria-hidden": "true"
                                                                                                    })
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Transition */ .uT, {
                                                                                                as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                                                                                                enter: "transition ease-out duration-200",
                                                                                                enterFrom: "opacity-0 translate-y-1",
                                                                                                enterTo: "opacity-100 translate-y-0",
                                                                                                leave: "transition ease-in duration-150",
                                                                                                leaveFrom: "opacity-100 translate-y-0",
                                                                                                leaveTo: "opacity-0 translate-y-1",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Popover.Panel */ .J2.Panel, {
                                                                                                    className: "z-100 absolute mt-8 w-min max-w-xs -translate-x-40 transform px-0",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                        className: "overflow-hidden rounded-lg shadow-lg",
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                            className: "relative bg-beige-100 px-6 py-6",
                                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                        className: "relative mb-12 flex items-center justify-center",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                            className: "flex items-center",
                                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__/* .FaRegUser */ .BKo, {
                                                                                                                                className: "h-10 w-10",
                                                                                                                                "aria-hidden": "true"
                                                                                                                            })
                                                                                                                        })
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                                        children: value.value.loginInfo.identifier
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                                        className: "text-medium easy-in-out mt-2 inline-flex w-full justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg transition duration-200 hover:bg-beige-600",
                                                                                                                        onClick: ()=>{
                                                                                                                            refreshPage();
                                                                                                                        },
                                                                                                                        children: "Sign Out"
                                                                                                                    })
                                                                                                                ]
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                            })
                                                                        }));
                                                                    } else {
                                                                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            onClick: ()=>(0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__/* .signIn */ .zB)()
                                                                            ,
                                                                            children: "Accedi"
                                                                        }));
                                                                    }
                                                                })()
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "ml-4 mt-[0.4rem] flow-root",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Popover */ .J2, {
                                                                    className: "relative",
                                                                    children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Popover.Button */ .J2.Button, {
                                                                                    className: classNames(open ? 'text-beige-900' : 'text-beige-500', 'group inline-flex items-center rounded-md text-base font-medium hover:text-beige-900 '),
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                        href: "#",
                                                                                        className: "group -m-2 flex items-center p-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_15__/* .MdOutlineShoppingBag */ .t5$, {
                                                                                                className: "h-6 w-6 flex-shrink-0 text-beige-900",
                                                                                                "aria-hidden": "true"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                className: "ml-2 text-sm font-medium text-beige-900",
                                                                                                children: "0"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Transition */ .uT, {
                                                                                    as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                                                                                    enter: "transition ease-out duration-200",
                                                                                    enterFrom: "opacity-0 translate-y-1",
                                                                                    enterTo: "opacity-100 translate-y-0",
                                                                                    leave: "transition ease-in duration-150",
                                                                                    leaveFrom: "opacity-100 translate-y-0",
                                                                                    leaveTo: "opacity-0 translate-y-1",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__/* .Popover.Panel */ .J2.Panel, {
                                                                                        className: "z-100 absolute mt-8 w-64 -translate-x-52 transform px-0",
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "overflow-hidden rounded-lg shadow-lg ",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "relative flex-auto gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8",
                                                                                                    children: solutions.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                                            href: item.href,
                                                                                                            className: "-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-beige-50",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(item.icon, {
                                                                                                                    className: "h-6 w-6 flex-shrink-0 text-beige-600",
                                                                                                                    "aria-hidden": "true"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                                    className: "ml-4",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                                            className: "text-base font-medium text-beige-900",
                                                                                                                            children: item.name
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                                            className: "mt-1 text-sm text-beige-500",
                                                                                                                            children: item.description
                                                                                                                        })
                                                                                                                    ]
                                                                                                                })
                                                                                                            ]
                                                                                                        }, item.name)
                                                                                                    )
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "flex space-y-0 bg-beige-100 px-20 py-5",
                                                                                                    children: callsToAction.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                            className: "flex w-max flex-auto",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                    className: "flex w-full text-base font-medium text-beige-900 ",
                                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                                        className: "flex w-full flex-row justify-between",
                                                                                                                        children: [
                                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                                className: "flex flex-col items-start",
                                                                                                                                children: "Costo Totale"
                                                                                                                            }),
                                                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                                                className: "flex flex-col-reverse items-end",
                                                                                                                                children: [
                                                                                                                                    item.costo_totale,
                                                                                                                                    " €"
                                                                                                                                ]
                                                                                                                            })
                                                                                                                        ]
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                    className: "flec-auto flex w-max rounded-md p-3 transition duration-200 ease-in-out hover:bg-beige-200",
                                                                                                                    children: item.name
                                                                                                                })
                                                                                                            ]
                                                                                                        }, item.name)
                                                                                                    )
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 92697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* eslint-disable no-unused-vars */ 
const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserContext);


/***/ }),

/***/ 5838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FourOhFour)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18969);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32980);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9008);

/* eslint-disable @next/next/no-img-element */ /* eslint-disable @next/next/no-html-link-for-pages */ 


function FourOhFour() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_head__WEBPACK_IMPORTED_MODULE_3__["default"], {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "⛔️ 404 ⛔️"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/question-solid.svg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8",
                        className: "next-head"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "h-screen w-screen",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex min-h-full flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "z-10 flex flex-grow flex-col",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                                className: "m-12 flex flex-grow flex-col justify-between rounded-2xl bg-beige-100 p-4 shadow-2xl xmd:p-16",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mx-auto flex w-full max-w-7xl flex-grow flex-col justify-between px-4 sm:px-6 lg:px-8",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "my-8 flex-shrink-0 flex-col justify-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-5xl font-semibold uppercase tracking-wide text-beige-600",
                                                    children: "404 error"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "mt-2 text-3xl font-bold tracking-tight text-gray-900 xmd:text-5xl",
                                                    children: "Questa pagina non esiste"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mt-2 text-xl text-gray-500 xmd:text-2xl",
                                                    children: "La pagina che hai provsto a cercare non esiste..."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mt-6",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "#",
                                                        className: "text-base font-medium text-beige-600 hover:text-beige-500",
                                                        children: [
                                                            "Torna alla home",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                "aria-hidden": "true",
                                                                children: " →"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex-shrink flex-col pt-4",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: "/",
                                                className: "inline-flex",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "h-40 w-auto",
                                                        src: "./question-solid.svg",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: "\xa0\xa0\xa0"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "z-0 min-h-full bg-cover bg-top",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "absolute inset-0 h-full w-full",
                                src: "https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80",
                                alt: ""
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    }));
};


/***/ }),

/***/ 35656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myLoader": () => (/* binding */ myLoader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92697);

//import { GetServerSideProps } from 'next'

//import Head from 'next/head'
//import { parseCookies } from 'nookies'
//import { useEffect } from 'react'



const myLoader = ({ src , width , quality  })=>{
    return `${src}?w=${width}&q=${quality || 50}`;
};
function MyApp({ Component , pageProps  }) {
    const { 0: ctxValue , 1: setCtxValue  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        loginInfo: {}
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_client__WEBPACK_IMPORTED_MODULE_1__/* .Provider */ .zt, {
        session: pageProps.session,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_UserContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Provider */ .Z.Provider, {
            value: {
                value: ctxValue,
                setValue: setCtxValue
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 34208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56859);


function Document() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    charSet: "utf-8",
                    className: "next-head"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                className: "h-screen w-screen",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 97020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/M0BCk0-bYBPlJ6lHtkeZx/_buildManifest.js","static/M0BCk0-bYBPlJ6lHtkeZx/_ssgManifest.js","static/M0BCk0-bYBPlJ6lHtkeZx/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-dd0f5e14deaa6db0.js","static/chunks/framework-01395af778c6fb71.js","static/chunks/main-69a20bda83e26fbf.js","static/chunks/252f366e-6dfc6bcb30a364f5.js","static/chunks/1bfc9850-6469b7ed05efcf39.js","static/chunks/78e521c3-72bff51f0d5776ad.js","static/chunks/d7eeaac4-11583e877d3813f0.js","static/chunks/de71a805-94010c7def77ebd7.js","static/chunks/879-d77757378cd21537.js","static/chunks/980-18c7130cddc45058.js","static/chunks/pages/index-d8faaa19e423788e.js"],"/404":["static/chunks/webpack-dd0f5e14deaa6db0.js","static/chunks/framework-01395af778c6fb71.js","static/chunks/main-69a20bda83e26fbf.js","static/chunks/252f366e-6dfc6bcb30a364f5.js","static/chunks/1bfc9850-6469b7ed05efcf39.js","static/chunks/78e521c3-72bff51f0d5776ad.js","static/chunks/d7eeaac4-11583e877d3813f0.js","static/chunks/de71a805-94010c7def77ebd7.js","static/chunks/879-d77757378cd21537.js","static/chunks/980-18c7130cddc45058.js","static/chunks/pages/404-ce789d6675452271.js"],"/Login":["static/chunks/webpack-dd0f5e14deaa6db0.js","static/chunks/framework-01395af778c6fb71.js","static/chunks/main-69a20bda83e26fbf.js","static/chunks/252f366e-6dfc6bcb30a364f5.js","static/chunks/1bfc9850-6469b7ed05efcf39.js","static/chunks/78e521c3-72bff51f0d5776ad.js","static/chunks/d7eeaac4-11583e877d3813f0.js","static/chunks/de71a805-94010c7def77ebd7.js","static/chunks/ae51ba48-15d3beee44846f8d.js","static/chunks/b98bc7c3-ee5d8bdbc8362df3.js","static/chunks/879-d77757378cd21537.js","static/chunks/669-82af2f848f3729de.js","static/chunks/980-18c7130cddc45058.js","static/chunks/pages/Login-7f62b989195ee87e.js"],"/RegistrationLocal":["static/chunks/webpack-dd0f5e14deaa6db0.js","static/chunks/framework-01395af778c6fb71.js","static/chunks/main-69a20bda83e26fbf.js","static/chunks/252f366e-6dfc6bcb30a364f5.js","static/chunks/1bfc9850-6469b7ed05efcf39.js","static/chunks/78e521c3-72bff51f0d5776ad.js","static/chunks/d7eeaac4-11583e877d3813f0.js","static/chunks/de71a805-94010c7def77ebd7.js","static/chunks/ae51ba48-15d3beee44846f8d.js","static/chunks/b98bc7c3-ee5d8bdbc8362df3.js","static/chunks/879-d77757378cd21537.js","static/chunks/980-18c7130cddc45058.js","static/chunks/pages/RegistrationLocal-c83a69e6a192fcfd.js"],"/RegistrationProviders":["static/chunks/webpack-dd0f5e14deaa6db0.js","static/chunks/framework-01395af778c6fb71.js","static/chunks/main-69a20bda83e26fbf.js","static/chunks/252f366e-6dfc6bcb30a364f5.js","static/chunks/1bfc9850-6469b7ed05efcf39.js","static/chunks/78e521c3-72bff51f0d5776ad.js","static/chunks/d7eeaac4-11583e877d3813f0.js","static/chunks/de71a805-94010c7def77ebd7.js","static/chunks/ae51ba48-15d3beee44846f8d.js","static/chunks/b98bc7c3-ee5d8bdbc8362df3.js","static/chunks/879-d77757378cd21537.js","static/chunks/669-82af2f848f3729de.js","static/chunks/980-18c7130cddc45058.js","static/chunks/pages/RegistrationProviders-4937bfd599e23bfc.js"],"/_app":["static/chunks/webpack-dd0f5e14deaa6db0.js","static/chunks/framework-01395af778c6fb71.js","static/chunks/main-69a20bda83e26fbf.js","static/css/36cf439748070967.css","static/chunks/pages/_app-3d58abc786c6596d.js"],"/_error":["static/chunks/webpack-dd0f5e14deaa6db0.js","static/chunks/framework-01395af778c6fb71.js","static/chunks/main-69a20bda83e26fbf.js","static/chunks/pages/_error-d742f979193aeae4.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 59450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;