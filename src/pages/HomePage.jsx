import {  Search } from "lucide-react";
import { ResipeCard } from "../components/ResipeCard";
import { useEffect, useState } from "react";

export default function HomePage() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    const APP_NAME=import.meta.env.VITE_APP_NAME;
    const APP_KEY = import.meta.env.VITE_APP_KEY;

    const fetchRecipes = async (quary) => {
        setLoading(true);
        setRecipes([]);
        
        try {
            const res = await fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${quary}`,
                {
                    method: "GET",
                    headers: {
                        'x-rapidapi-host': "tasty.p.rapidapi.com",
                        'x-rapidapi-key': "7d87ca1dd3msh2370df29128fe86p152a2bjsn4a086507ae0d"
                    }
                }
            );
            const data = await res.json();
            setRecipes(data.results);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    const handleSearch= async (e) => {
        e.preventDefault();
        fetchRecipes(e.target[0].value);
    }

    useEffect(() => {
        fetchRecipes("pasta");
    }, []);
    return <div className="bg-[#faf9fb] p-10 flex-1 ">
        <div className="max-w-screen-lg mx-auto">
            <form onSubmit={handleSearch}>
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

                {!loading && recipes.map((recipe,index) => (
                    <ResipeCard key={index} recipe={recipe} />
                ))}

                {loading && [...Array(9)].map((_,i) => (
                        <div key={i} className="flex w-full flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-68"></div>
                            <div className="skeleton h-4 w-40"></div>
                            <div className="flex justify-between">
                                <div className="skeleton h-4 w-45"></div>
                                <div className="skeleton h-4 w-20"></div>
                            </div>
                        </div>
                ))
                }
                

            </div>
        </div>

    </div>
}