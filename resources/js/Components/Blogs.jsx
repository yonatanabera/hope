import React from "react";
import { Link, Head } from "@inertiajs/react";

function Blogs({ rands }) {
    return (
        <div
            id="blogs"
            className="flex flex-col gap-5 items-center lg:py-32 py-20 lg:px-10 px-5  "
        >
            <div className="lg:text-5xl text-3xl font-extrabold">Blogs</div>
            <div className="lg:w-1/2 text-center text-md text-gray-800 font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos similique ducimus modi eveniet cumque incidunt sit
                voluptatibus dolores consectetur animi.
            </div>
            <div className="flex flex-wrap gap-5 mt-10 justify-center ">
                {rands.data.map((rand) => (
                    <Link
                        className="flex flex-col gap-5 bg-white lg:basis-1/4 md:basis-1/3 sm:basis-2/5 xs:basis-1/2 lg:p-10 p-5 border shadow-sm rounded-lg"
                        href={`https://www.hopehmc.com/blog/${rand.slug}`}
                    >
                        <div>
                            <div>
                                <img
                                    src={`https://www.hopehmc.com/storage/${rand.image}`}
                                    alt=""
                                    className="object-cover w-full md:h-40 "
                                />
                            </div>
                            <div className="text-2xl font-extrabold">
                                {rand.title}
                            </div>
                            <div className="text-md font-light text-gray-800">
                                {rand.overview.length > 250
                                    ? rand.overview.slice(0, 250) + "..."
                                    : rand.overview}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Blogs;
