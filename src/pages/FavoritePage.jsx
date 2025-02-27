import { ResipeCard } from "../components/ResipeCard";


export const FavoritePage = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className='bg-[#faf9fb] flex-1 p-10 min-h-screen'>
      <div className='max-w-screen-lg mx-auto'>
        <h1 className='font-bold text-2xl md:text-4xl my-6 mb-6'>My Favorites</h1>

        {favorites.length === 0 && (
          <div className='h-[80vh] flex justify-center'>
            <img src="./404.svg" alt="no favorites" className='h-3/4' />
          </div>
        )}


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            favorites.map((recipe,index) => (
              <ResipeCard key={index} recipe={recipe} />
            ))
          }
        </div>

      </div>
    </div>
  )
}
