import { FaAddressCard } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

function Footer1() {
    return (
        <div className="mb-0 w-full
                        sm:flex overflow-hidden
                      bg-blue-600 text-white">
            <div className="sm:w-1/3 m-10">
                <span className="flex items-center border-b-4">
                    <FaAddressCard style={{ color: 'white', fontSize: '20px' }} />
                    <span className="ml-5 text-xl">Liên hệ</span>
                </span>
                <div className="mt-1 leading-8 text-base">
                    TRUNG TÂM ĐÀO TẠO PHẦN MỀM VÀ THIẾT KẾ MÁY SOLIDWORKS TUTORIAL VIỆT NAM
                </div>
                <div className="flex items-center gap-3 mt-3">
                    <FaPhone className="mr-2" /> 0123456789
                </div>
                <div className="flex items-center gap-3 mt-3">
                    <FaEnvelope className="mr-2" /> abc@gmail.com
                </div>
            </div>
            <div className="sm:w-1/3 m-10">
                <span className="flex border-b-4">
                    <FaAddressCard style={{ color: 'white', fontSize: '20px' }} />
                    <span className="ml-5">Liên hệ</span>
                </span>
                <div className="mt-5 leading-8">
                    TRUNG TÂM ĐÀO TẠO PHẦN MỀM VÀ THIẾT KẾ MÁY SOLIDWORKS TUTORIAL VIỆT NAM
                </div>
            </div>
            <div className="sm:w-1/3 m-10">
                <span className="flex border-b-4">
                    <FaAddressCard style={{ color: 'white', fontSize: '20px' }} />
                    <span className="ml-5">Liên hệ</span>
                </span>
                <div className="mt-5 leading-8">
                    TRUNG TÂM ĐÀO TẠO PHẦN MỀM VÀ THIẾT KẾ MÁY SOLIDWORKS TUTORIAL VIỆT NAM
                </div>
            </div>
        </div>

    )
}
export default Footer1