import { Link } from "react-router-dom";
function Footer() {
    return (
        <>
            <footer class="p-4 mt-10 bg-white rounded-lg shadow 
                           md:flex md:items-center md:justify-between 
                           md:p-6 dark:bg-gray-800">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023
                    <span class="hover:underline">ads</span>
                    .All Rights Reserved.
                </span>

                <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="/about">
                            <div class="mr-4 hover:underline md:mr-6 ">About</div>
                        </Link>
                    </li>
                    <li>
                        <div class="mr-4 hover:underline md:mr-6">Privacy Policy</div>
                    </li>
                    <li>
                        <div class="mr-4 hover:underline md:mr-6">Licensing</div>
                    </li>
                    <li>
                        <Link to="/contact">
                            <div class="hover:underline">Contact</div>
                        </Link>
                    </li>
                </ul>
            </footer>
        </>
    )
}
export default Footer