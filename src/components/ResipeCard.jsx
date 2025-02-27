import { Heart, HeartPulse, Soup } from "lucide-react";
import { useState } from "react";

export const ResipeCard = ({recipe}) => {
    const [isFav, setIsFav] = useState(localStorage.getItem("favorites")?.includes(recipe.name));
    const addFavorite = () =>{
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const alreadyFav = favorites.some((fav) => fav.name === recipe.name);
        if(alreadyFav){
            favorites = favorites.filter((fav) => fav.name !== recipe.name);
            setIsFav(false);
        }else {
            favorites.push(recipe);
            setIsFav(true);
        }

        localStorage.setItem("favorites",JSON.stringify(favorites));
    }
    
  return (
      <div className="flex flex-col rounded-md bg-[#ecf7d4] p-3 relative overflow-hidden">
          <a href={`https://www.youtube.com/results?search_query=${recipe.name}`} target="_blank" className="relative h-40">
              <div className="skeleton abolute inset-0 h-32 w-full"/>
              <img src={recipe.thumbnail_url} alt="recipe image" className="w-full h-full rounded-md object-cover cursor-pointer opecity-0 transition-opacity duration-500" 
              onLoad={(e) =>{
                e.currentTarget.style.opacity=1;
                e.currentTarget.previousElementSibling.style.display= "none";
              }} />
              <div className="absolute bottom-2 left-2 bg-white rounded-full flex items-center p-1 gap-1 text-sm cursor-pointer hover:text-blue-700 px-2">
                  <Soup size={16} /> {recipe.yields}
              </div>
              <div className="absolute bg-white top-1 right-2 rounded-full p-1 cursor-pointer" 
                  onClick={(e) => {
                      e.preventDefault();
                      addFavorite();
                  }}>
                  {!isFav && <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />}
                  {isFav && <Heart size={20} className="fill-red-500 text-red-500" />}
              </div>
          </a>

          <div className="flex mt-1">
              <p className="font-bold tracking-wide"> {recipe.name}</p>
          </div>
          <p className="my-2">{recipe.tags[0].display_name}</p>

          <div className="flex gap-2 mt-auto">
              <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
                  <HeartPulse size={16} />
                  <span className="text-sm tracking-tighter font-semibold">{recipe.topics[0].name}</span>
              </div>
              <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
                  <HeartPulse size={16} />
                  <span className="text-sm tracking-tighter font-semibold">{recipe.topics[1].name}</span>
              </div>
          </div>

      </div>
  )
}
