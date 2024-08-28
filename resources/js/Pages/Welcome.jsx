import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

export default function Welcome() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <Head title="Welcome" />

            <div className="">
                <div className="">
                    {/* Hero Image */}
                    <div className="relative  h-screen w-full bg-center bg-[url(https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/home-hero-bg.jpg)] bg-cover ">
                        <div className="overlay bg-indigo-900 h-screen absolute inset-0 opacity-50"></div>

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
                                <div className="px-5 py-2">Home</div>
                                <div className="px-5 py-2">Services</div>
                                <div className="px-5 py-2">Blog</div>
                                <div className="px-5 py-2">Partners</div>
                                <div className="px-5 py-2">Testimony</div>
                                <div className="px-5 py-2 bg-indigo-500 rounded-full">
                                    Contact us
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
                                    <div className="px-5 py-2 border-b">
                                        Home
                                    </div>
                                    <div className="px-5 py-2 border-b">
                                        Services
                                    </div>
                                    <div className="px-5 py-2 border-b">
                                        Blog
                                    </div>
                                    <div className="px-5 py-2 border-b">
                                        Partners
                                    </div>
                                    <div className="px-5 py-2 border-b">
                                        Testimony
                                    </div>
                                    <div className="px-5 py-2 border-b">
                                        Contact us
                                    </div>
                                </div>
                            )}
                        </nav>

                        {/* Hero Content */}

                        <div className="flex items-center lg:items-center justify-center lg:justify-start h-screen ">
                            <div className="lg:basis-1/2 flex flex-col gap-5 relative text-white px-5 lg:px-20 lg:text-left text-center">
                                <div className="font-bold capitalize text-lg">
                                    Lorem ipsum dolor sit amet consectetur.
                                </div>
                                <div className="text-2xl lg:text-6xl font-extrabold capitalize">
                                    Get Treated with HOPE Travel Agency
                                </div>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Suspendisse et justo.
                                    Praesent mattis commodo augue. Morbi
                                    fringilla congue libero, ac malesuada
                                    vulputate pharetra.
                                </div>

                                <div className="mt-10">
                                    <span className="bg-indigo-500 font-semibold text-white px-7 py-3 rounded-lg shadow-md">
                                        Contact us
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services */}
                <div>Services</div>

                {/* Blog */}
                <div>Blog</div>

                {/* Partners */}
                <div>Partners</div>

                {/* Testimony */}
                <div>Testimony</div>

                {/* Contact / Footer */}
                <div>contact</div>
            </div>
        </>
    );
}
