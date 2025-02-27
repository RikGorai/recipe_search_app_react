import {  Search } from "lucide-react";
import { ResipeCard } from "../components/ResipeCard";

export default function HomePage() {
    return <div className="bg-[#faf9fb] p-10 flex-1 ">
        <div className="max-w-screen-lg mx-auto">
            <form >
                <label className="input shadow-md flex items-center gap-2 w-full ">
                    <Search size={"24"} />
                    <input type="text" name="" className="text-sm md:text-md grow " placeholder="what do you want to cook today?" />
                </label>
            </form>


            <h1 className="font-bold text-2xl md:text-4xl my-4">
                Recommended Recipes
            </h1>

            <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
                Popular choices
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <ResipeCard />
                <ResipeCard />
                <ResipeCard />
                <ResipeCard />

                

            </div>
        </div>

    </div>
}