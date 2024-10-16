import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { Link, Head } from "@inertiajs/react";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, sit. Iusto laudantium maxime, voluptatem quibusdam
                        repellat praesentium nostrum expedita sequi.
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
                        Alemnesh Plaza, Bole Medhanialem, Addis Ababa, Ethiopia
                    </div>
                    <div>beamlak@gmail.com</div>
                    <div>+251912345678</div>
                </div>
                <div className="flex flex-col text-md ">
                    <div className="text-xl font-extrabold mb-5">Company</div>
                    <div className="flex flex-col gap-3">
                        <div>
                            {" "}
                            <Link href="/#home">Home</Link>
                        </div>
                        <div>
                            {" "}
                            <Link href="/blog">Blogs</Link>
                        </div>
                        <div>
                            {" "}
                            <Link href="/#services">Services</Link>
                        </div>
                        <div>
                            {" "}
                            <Link href="/#testimony">Testimony</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm border-t border-t-slate-400 mt-10 px-10 py-10">
                Copyright &copy; {year} Hope Travel Agency | Powered by Medanit
                IT Solutions
            </div>
        </footer>
    );
}

export default Footer;
