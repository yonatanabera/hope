import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp, IoMedical, IoPencil } from "react-icons/io5";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function NavBar() {
    const [openMenu, setOpenMenu] = useState(false);

    const date = new Date();
    const year = date.getFullYear();

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            {/* Nav Bar */}

            {/* Navbar Large Screen */}
            <nav className="hidden relative z-10 lg:flex justify-between items-center text-white px-20 py-10">
                {/* Logo */}
                <div className="w-52">
                    <img
                        src="https://www.medanit.com/build/assets/Logo-06e10315.png"
                        alt=""
                    />
                </div>

                {/* Menu Items */}
                <div className="menu flex gap-1 font-semibold">
                    <div className="px-5 py-2">
                        <Link href="/">Home</Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/#services">Services</Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/blog">Blog</Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/#partners">Partners</Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/#testimony">Testimony</Link>
                    </div>
                    <div className="px-5 py-2 bg-indigo-500 rounded-full">
                        <Link href="#contact">Contact us</Link>
                    </div>
                </div>
            </nav>

            {/* Navbar Small Screen */}
            <nav className="lg:hidden relative z-10 flex  justify-between items-center text-white px-5 py-5">
                {/* Logo */}
                <div className="w-32">
                    <img
                        src="https://www.medanit.com/build/assets/Logo-06e10315.png"
                        alt=""
                    />
                </div>

                <div
                    className="p-3 bg-indigo-400 rounded-md"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    {openMenu ? (
                        <IoCloseSharp className="text-xl" />
                    ) : (
                        <HiOutlineMenuAlt3 className="text-xl" />
                    )}
                </div>

                {/* Menu Items */}
                {openMenu && (
                    <div className="lg:hidden menu absolute top-20 py-5 right-0 left-0 text-black flex flex-col gap-1 font-semibold bg-white w-full">
                        <Link href="/#home">
                            <div className="px-5 py-2 border-b">Home</div>
                        </Link>
                        <Link href="/#services">
                            <div className="px-5 py-2 border-b">Services</div>
                        </Link>
                        <Link href="/blog">
                            <div className="px-5 py-2 border-b">Blog</div>
                        </Link>
                        <Link href="/#partners">
                            <div className="px-5 py-2 border-b">Partners</div>
                        </Link>
                        <Link href="/#testimony">
                            <div className="px-5 py-2 border-b">Testimony</div>
                        </Link>
                        <Link href="#contact">
                            <div className="px-5 py-2 border-b">Contact us</div>
                        </Link>
                    </div>
                )}
            </nav>
        </>
    );
}

export default NavBar;
