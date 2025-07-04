import { j as e, Y as l, a as i } from "./app-CAiObEnb.js";
import { N as a } from "./NavBar-CQKMJdzE.js";
import { h as r } from "./moment-C5S46NFB.js";
import { F as c } from "./Footer-B-TMThkd.js";
function o({ blogs: s }) {
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
                                                children: "Blogs",
                                            }),
                                            e.jsx("div", {
                                                children:
                                                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique ducimus modi eveniet cumque incidunt sit voluptatibus dolores consectetur animi.",
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    e.jsx("div", {
                        className: "flex justify-center gap-20 my-20",
                        children: e.jsxs("div", {
                            className:
                                "w-1/2 flex flex-col gap-5 mt-10 justify-center ",
                            children: [
                                s.data.map((t) =>
                                    e.jsx(i, {
                                        href: `https://www.hopehmc.com/blog/${t.slug}`,
                                        children: e.jsxs("div", {
                                            className:
                                                "flex flex-col gap-5 bg-white lg:basis-1/4 md:basis-1/3 sm:basis-2/5 xs:basis-1/2 lg:p-10 p-5 border shadow-sm rounded-lg",
                                            children: [
                                                e.jsx("div", {
                                                    children: e.jsx("img", {
                                                        src: `https://www.hopehmc.com/storage/${t.image}`,
                                                        alt: "",
                                                        className:
                                                            "object-cover w-full h-72",
                                                    }),
                                                }),
                                                e.jsxs("div", {
                                                    className:
                                                        "flex justify-between items-center",
                                                    children: [
                                                        e.jsx("div", {
                                                            className:
                                                                "text-2xl font-extrabold",
                                                            children: t.title,
                                                        }),
                                                        e.jsx("div", {
                                                            className:
                                                                "text-sm",
                                                            children: r(
                                                                t.created_at
                                                            ).fromNow(),
                                                        }),
                                                    ],
                                                }),
                                                e.jsx("div", {
                                                    className:
                                                        "text-md font-light text-gray-800",
                                                    children: t.overview,
                                                }),
                                            ],
                                        }),
                                    })
                                ),
                                e.jsx("div", {
                                    className: "flex justify-end gap-5",
                                    children: e.jsxs("div", {
                                        children: [
                                            s.prev_page_url != null &&
                                                e.jsxs(i, {
                                                    href: s.prev_page_url,
                                                    className:
                                                        "shadow-md px-5 py-2 rounded-sm",
                                                    children: ["<<", " Prev"],
                                                }),
                                            s.next_page_url != null &&
                                                e.jsxs(i, {
                                                    href: s.next_page_url,
                                                    className:
                                                        "shadow-md px-5 py-2 rounded-sm",
                                                    children: ["Next ", ">>"],
                                                }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    e.jsx(c, {}),
                ],
            }),
        ],
    });
}
export { o as default };
