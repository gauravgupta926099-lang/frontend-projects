import React from "react"
import Logo from "../Logo"
import { Link } from "react-router-dom"
function Footer() {
    return (<section className="text-white relative overflow-hidden bg-gray-400 py-10 border-t-2 border-t-black font-semibold">
        <div className="relative z-10 mx-auto px-4 max-w-7xl">
            <div className="-m-6 flex flex-wrap">
                <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                    <div className="flex h-full flex-col justify-between">
                        <div className="mb-4 inline-flex items-center">
                            <Logo width="100px" />

                        </div>
                        <div>
                            <p className="text-sm text-gray-600">
                                &copy;copyright 2023.All Rights Reserved by DevUI
                            </p>
                        </div>

                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                    <div className="h-full">
                        <h3 className="tracking-wide mb-9 text-xs font-semibold uppercase text-gray-700">Company</h3>
                        <ul><li className="mb-4"><Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Features</Link>
                        </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Pricing</Link>
                            </li>

                            <li className="mb-4">
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Press Kit</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Affliate Program</Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                    <div className="h-full">
                        <h3 className="tracking-wide mb-9 text-xs font-semibold uppercase text-gray-700">Support</h3>
                        <ul>
                            <li className="mb-4"><Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Account</Link></li>
                            <li className="mb-4"><Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Help</Link></li>
                            <li className="mb-4"><Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Contact us</Link></li>
                             <li className="mb-4"><Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Customer Support</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full p-6  md:w-1/2 lg:w-3/12">
                <div className="h-full">
                    <h3 className="tracking-wide mb-9 text-xs font-semibold uppercase text-gray-700">Legals</h3>
                    <ul >
                        <li className="mb-4"><Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Terms &amp; Conditions</Link></li>
                        <li className="mb-4"><Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Privacy Policy</Link></li>
                        <li><Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700"> Licensing</Link></li>
                    </ul>
                </div>

                </div>


            </div></div></section>)
}
export default Footer;