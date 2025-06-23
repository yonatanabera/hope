import { j as e, a as i } from "./app-CAiObEnb.js";
function a({ rands: t }) {
    return e.jsxs("div", {
        id: "blogs",
        className:
            "flex flex-col gap-5 items-center lg:py-32 py-20 lg:px-10 px-5  ",
        children: [
            e.jsx("div", {
                className: "lg:text-5xl text-3xl font-extrabold",
                children: "Blogs",
            }),
            e.jsx("div", {
                className:
                    "lg:w-1/2 text-center text-md text-gray-800 font-light",
                children:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique ducimus modi eveniet cumque incidunt sit voluptatibus dolores consectetur animi.",
            }),
            e.jsx("div", {
                className: "flex flex-wrap gap-5 mt-10 justify-center ",
                children: t.data.map((s) =>
                    e.jsx(i, {
                        className:
                            "flex flex-col gap-5 bg-white lg:basis-1/4 md:basis-1/3 sm:basis-2/5 xs:basis-1/2 lg:p-10 p-5 border shadow-sm rounded-lg",
                        href: `https://www.hopehmc.com/blog/${s.slug}`,
                        children: e.jsxs("div", {
                            children: [
                                e.jsx("div", {
                                    children: e.jsx("img", {
                                        src: `https://www.hopehmc.com/storage/${s.image}`,
                                        alt: "",
                                        className:
                                            "object-cover w-full md:h-40 ",
                                    }),
                                }),
                                e.jsx("div", {
                                    className: "text-2xl font-extrabold",
                                    children: s.title,
                                }),
                                e.jsx("div", {
                                    className:
                                        "text-md font-light text-gray-800",
                                    children:
                                        s.overview.length > 250
                                            ? s.overview.slice(0, 250) + "..."
                                            : s.overview,
                                }),
                            ],
                        }),
                    })
                ),
            }),
        ],
    });
}
export { a as B };
