import React from "react";
import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp, IoMedical, IoPencil } from "react-icons/io5";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import NavBar from "./NavBar";
import moment from "moment";
import Blogs from "@/Components/Blogs";

function BlogDetail({ blog, rands }) {
    const date = new Date();
    const year = date.getFullYear();
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
                            src={`http://localhost:8000/storage/${blog.image}`}
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
                <footer
                    id="contact"
                    className="flex flex-col bg-indigo-950 text-white pt-20"
                >
                    <div className="flex flex-col lg:flex-row justify-around gap-5 w-full lg:px-10 px-5">
                        <div className="flex flex-col gap-10 lg:basis-1/4">
                            <div className="w-52">
                                <img
                                    src="https://www.medanit.com/build/assets/Logo-06e10315.png"
                                    alt=""
                                />
                            </div>
                            <div className="text-md">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ab, sit. Iusto laudantium
                                maxime, voluptatem quibusdam repellat
                                praesentium nostrum expedita sequi.
                            </div>

                            <div className="flex gap-3 text-xl">
                                <FaFacebook />
                                <FaTwitter />
                                <FaInstagram />
                                <FaLinkedin />
                                <FaYoutube />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 text-md lg:basis-1/4">
                            <div className="text-xl font-extrabold mb-5">
                                Get In touch
                            </div>
                            <div>
                                Alemnesh Plaza, Bole Medhanialem, Addis Ababa,
                                Ethiopia
                            </div>
                            <div>beamlak@gmail.com</div>
                            <div>+251912345678</div>
                        </div>
                        <div className="flex flex-col text-md ">
                            <div className="text-xl font-extrabold mb-5">
                                Company
                            </div>
                            <div className="flex flex-col gap-3">
                                <div>
                                    {" "}
                                    <Link href="#home">Home</Link>
                                </div>
                                <div>
                                    {" "}
                                    <Link href="#blogs">Blogs</Link>
                                </div>
                                <div>
                                    {" "}
                                    <Link href="#services">Services</Link>
                                </div>
                                <div>
                                    {" "}
                                    <Link href="#testimony">Testimony</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-sm border-t border-t-slate-400 mt-10 px-10 py-10">
                        Copyright &copy; {year} Hope Travel Agency | Powered by
                        Medanit IT Solutions
                    </div>
                </footer>
            </div>
        </>
    );
}

export default BlogDetail;
