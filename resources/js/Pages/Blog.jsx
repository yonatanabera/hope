import React from "react";
import { Link, Head } from "@inertiajs/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./NavBar";
import moment from "moment";
import Footer from "@/Components/Footer";

function Blog({ blogs }) {
    return (
        <>
            <Head title="Welcome" />

            <div className="">
                <div className="" id="home">
                    {/* Hero Image */}
                    <div className="relative  h-96 w-full bg-center bg-[url(https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/home-hero-bg.jpg)] bg-cover ">
                        <div className="overlay bg-indigo-900 h-96 absolute inset-0 opacity-85"></div>

                        <NavBar />

                        {/* Hero Content */}

                        <div className="flex items-center justify-center ">
                            <div className="flex basis-3/4 flex-col gap-5 relative text-white px-5 lg:px-20 text-center">
                                <div className="text-3xl lg:text-6xl md:text-5xl font-extrabold uppercase">
                                    Blogs
                                </div>
                                <div>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Dignissimos similique
                                    ducimus modi eveniet cumque incidunt sit
                                    voluptatibus dolores consectetur animi.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog */}
                <div className="flex justify-center gap-20 my-20">
                    <div className="w-1/2 flex flex-col gap-5 mt-10 justify-center ">
                        {blogs.data.map((blog) => (
                            <Link
                                href={`https://www.hopehmc.com/blog/${blog.slug}`}
                            >
                                <div className="flex flex-col gap-5 bg-white lg:basis-1/4 md:basis-1/3 sm:basis-2/5 xs:basis-1/2 lg:p-10 p-5 border shadow-sm rounded-lg">
                                    <div>
                                        <img
                                            src={`https://www.hopehmc.com/storage/${blog.image}`}
                                            alt=""
                                            className="object-cover w-full h-72"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-2xl font-extrabold">
                                            {blog.title}
                                        </div>
                                        <div className="text-sm">
                                            {moment(blog.created_at).fromNow()}
                                        </div>
                                    </div>
                                    <div className="text-md font-light text-gray-800">
                                        {blog.overview}
                                    </div>
                                </div>
                            </Link>
                        ))}

                        <div className="flex justify-end gap-5">
                            <div>
                                {blogs.prev_page_url != null && (
                                    <Link
                                        href={blogs.prev_page_url}
                                        className="shadow-md px-5 py-2 rounded-sm"
                                    >
                                        {"<<"} Prev
                                    </Link>
                                )}
                                {blogs.next_page_url != null && (
                                    <Link
                                        href={blogs.next_page_url}
                                        className="shadow-md px-5 py-2 rounded-sm"
                                    >
                                        Next {">>"}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact / Footer */}
                <Footer />
            </div>
        </>
    );
}

export default Blog;
