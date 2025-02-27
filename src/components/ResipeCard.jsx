import { Heart, HeartPulse, Soup } from "lucide-react";

export const ResipeCard = () => {
  return (
      <div className="flex flex-col rounded-md bg-[#ecf7d4] p-3 relative overflow-hidden">
          <a href="#" className="relative h-40">
              <img src="./1.jpg" alt="recipe image" className="w-full h-full rounded-md object-cover cursor-pointer" />
              <div className="absolute bottom-2 left-2 bg-white rounded-full flex items-center p-1 gap-1 text-sm cursor-pointer hover:text-blue-700 ">
                  <Soup size={16} /> 4 Servings
              </div>
              <div className="absolute bg-white top-1 right-2 rounded-full p-1 cursor-pointer">
                  <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
              </div>
          </a>

          <div className="flex mt-1">
              <p className="font-bold tracking-wide"> Roasted chicken</p>
          </div>
          <p className="my-2">Tarkish Kitchen</p>

          <div className="flex gap-2 mt-auto">
              <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
                  <HeartPulse size={16} />
                  <span className="text-sm tracking-tighter font-semibold">Gluton-free</span>
              </div>
              <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
                  <HeartPulse size={16} />
                  <span className="text-sm tracking-tighter font-semibold">Heart-Healthy</span>
              </div>
          </div>

      </div>
  )
}
