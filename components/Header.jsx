import Image from "next/image";
import logo from "../public/images/airbnblogo.png";
import {SearchIcon} from "@heroicons/react/solid";
import {GlobeAltIcon, MenuIcon, UserCircleIcon} from "@heroicons/react/solid";

const Header = () => {
    return (
        <header className={"sticky top-0 z-50 bg-white shadow-md py-5 px-5 grid grid-cols-3 md:px-10"}>
            <div className={"relative h-10 flex items-center cursor-pointer my-auto "}>
                <Image src={logo} layout={"fill"} objectFit={"contain"} objectPosition={"left"} alt={""} />
            </div>

            <div className={"flex items-center md:border-2 rounded-full py-2 md:shadow-sm"}>
                <input className={"flex-grow pl-5 bg-transparent outline-none mr-2 placeholder-gray-400 text-sm text-gray-600"} type="search" placeholder="Start your search" />
                <SearchIcon className={"hidden mx-2 md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer "} />
            </div>

            <div className={"flex items-center space-x-4 justify-end text-gray-500 "}>
                <p className={"hidden md:inline cursor-pointer"}>Become a host</p>
                <GlobeAltIcon className={"h-6 cursor-pointer"} />

                <div className={"flex item-center border-2 p-2 rounded-full space-x-2"}>
                    <MenuIcon className={"h-6 cursor-pointer"} />
                    <UserCircleIcon className={"h-6 cursor-pointer"} />
                </div>
            </div>
        </header>
    );
};
export default Header;