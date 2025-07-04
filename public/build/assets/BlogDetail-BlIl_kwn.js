import { j as e, Y as l } from "./app-CAiObEnb.js";
import { N as a } from "./NavBar-CQKMJdzE.js";
import { h as i } from "./moment-C5S46NFB.js";
import { B as r } from "./Blogs-BaVMRonA.js";
import { F as x } from "./Footer-B-TMThkd.js";
function h({ blog: s, rands: t }) {
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(l, { title: "Welcome" }),
            e.jsxs("div", {
                className: "",
                children: [
                    e.jsx("div", {
                        className: "",
                        id: "home",
                        children: e.jsxs("div", {
                            className:
                                "relative  h-96 w-full bg-center bg-[url(https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/home-hero-bg.jpg)] bg-cover ",
                            children: [
                                e.jsx("div", {
                                    className:
                                        "overlay bg-indigo-900 h-96 absolute inset-0 opacity-85",
                                }),
                                e.jsx(a, {}),
                                e.jsx("div", {
                                    className:
                                        "flex items-center justify-center ",
                                    children: e.jsxs("div", {
                                        className:
                                            "flex basis-3/4 flex-col gap-5 relative text-white px-5 lg:px-20 text-center",
                                        children: [
                                            e.jsx("div", {
                                                className:
                                                    "text-3xl lg:text-6xl md:text-5xl font-extrabold uppercase",
                                                children: s.title,
                                            }),
                                            e.jsx("div", {
                                                children: s.overview,
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    e.jsx("div", {
                        className:
                            "flex flex-col  items-center justify-center my-20 ",
                        children: e.jsxs("div", {
                            className:
                                "image md:w-3/4 flex flex-col gap-10 shadow-lg md:p-20 p-5 mx-5",
                            children: [
                                e.jsx("img", {
                                    src: `https://www.hopehmc.com/storage/${s.image}`,
                                    alt: "",
                                    className: "h-96 w-full object-cover",
                                }),
                                e.jsxs("div", {
                                    className:
                                        "self-start text-3xl lg:text-5xl md:text-5xl font-extrabold uppercase",
                                    children: [
                                        s.title,
                                        e.jsx("div", {
                                            className: "text-xs lowercase",
                                            children: i(s.created_at).fromNow(),
                                        }),
                                    ],
                                }),
                                e.jsx("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: s.content,
                                    },
                                }),
                            ],
                        }),
                    }),
                    e.jsx(r, { rands: t }),
                    e.jsx(x, {}),
                ],
            }),
        ],
    });
}
export { h as default };
