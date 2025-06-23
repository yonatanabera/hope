import React from "react";
import { Link, Head } from "@inertiajs/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./NavBar";
import moment from "moment";
import Blogs from "@/Components/Blogs";
import Footer from "@/Components/Footer";

function BlogDetail({ blog, rands }) {
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
                                    {blog.title}
                                </div>
                                <div>{blog.overview}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col  items-center justify-center my-20 ">
                    <div className="image md:w-3/4 flex flex-col gap-10 shadow-lg md:p-20 p-5 mx-5">
                        <img
                            src={`https://www.hopehmc.com/storage/${blog.image}`}
                            alt=""
                            className="h-96 w-full object-cover"
                        />
                        <div className="self-start text-3xl lg:text-5xl md:text-5xl font-extrabold uppercase">
                            {blog.title}
                            <div className="text-xs lowercase">
                                {moment(blog.created_at).fromNow()}
                            </div>
                        </div>
                        <div
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        ></div>
                    </div>
                </div>
                {/* Blog */}
                <Blogs rands={rands} />

                {/* Contact / Footer */}
                <Footer />
            </div>
        </>
    );
}

export default BlogDetail;
