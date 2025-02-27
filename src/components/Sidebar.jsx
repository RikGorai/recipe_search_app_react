import {Heart, Home} from "lucide-react"
import { Link } from "react-router-dom"
export default function Sidebar() {
    return <>
        <DesktopSidebar />
        <MobileSidebar />
    </>
}


const DesktopSidebar = () => {
    return <div className="w-24 md:w-64 min-h-screen border-r p-3 md:p-10 hidden sm:block">
        <div className="flex flex-col gap-20 top-10 left-0 sticky">
            <div className="w-full">
                <img src="./logo.svg" alt="logo"  className="hidden md:block"/>
                <img src="./mobile-logo.svg" alt="logo" className="block md:hidden"/>
            </div>
            <ul className="flex flex-col gap-8 items-center md:items-start">
                <Link to={"/"} className="flex gap-2">
                    <Home size={"24"} className="cursor-pointer" />
                    <span className="font-bold hidden md:block">Home</span>
                </Link>
                <Link to={"/favorites"} className="flex gap-2">
                    <Heart size={"24"} className="cursor-pointer" />
                    <span className=" font-bold hidden md:block">Favorites</span>
                </Link>
                

            </ul>

        </div>


    </div>
}

const MobileSidebar = () => {
    return <div className="flex justify-center gap-10 w-full fixed bottom-0 left-0 border-t bg-white z-10 p-2 sm:hidden">
        <Link to={"/"}>
            <Home size={"24"} className="cursor-pointer" />
        </Link>
        <Link to={"/favorites"}>
            <Heart size={"24"} className="cursor-pointer" />
        </Link>
    </div>
}
