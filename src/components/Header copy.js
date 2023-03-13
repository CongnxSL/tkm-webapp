import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png"
function Header() {
    return (
        <>
            <div className="flex justify-center border-b-red-700 border-b-2">
                <div className="sm:ml-10 ">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="max-h-24 w-80" />
                    </Link>
                </div>
                <div className="text-red-700 text-[17px] font-sans font-bold 
                                my-auto px-4 max-md:hidden">
                    TRUNG TÂM ĐÀO TẠO PHẦN MỀM & THIẾT KẾ MÁY SOLIDWORKS TUTORIAL VIỆT NAM
                </div>
            </div>
            <div className="">
                <nav className="py-2 w-full text-sm font-medium bg-gray-100 text-gray-500">
                    <ul className="flex justify-center">

                        <li className="md:ml-6 ml-2 hover:text-black">
                            <Link to="/">Trang chủ</Link>
                        </li>

                        <li className="md:ml-6 ml-2 hover:text-black">
                            <Link to="/about">Giới thiệu</Link>
                        </li>

                        <li className="md:ml-6 ml-2 hover:text-black">
                            <Link to="/about">Liên hệ</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Header