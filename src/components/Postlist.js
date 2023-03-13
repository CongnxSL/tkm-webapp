import { Link } from "react-router-dom";
import image from "../assets/image/1.png"
function Postlist(props) {
    return (
        <div className="group grid gap-10 md:grid-cols-2">
            <div className=" overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105">
                <Link to="/" className="relative block aspect-video">
                    <img src={image} alt="Thumbnail"
                        className="absolute w-full h-full ring-2" />
                </Link>
            </div>
            <div className="flex items-center">
                <div>
                    <h2 className="text-3xl font-semibold leading-snug tracking-tight mt-2    dark:text-white">
                        {props.title}
                    </h2>
                    <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
                        {props.detail}
                    </div>
                </div>
            </div>

            {/* <img src={image} alt="Logo" className="" />
            id: {props.id};
            {props.name}; */}
        </div>
    )
}
export default Postlist