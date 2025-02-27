import { ResipeCard } from "../components/ResipeCard";


export const FavoritePage = () => {
  const fav=true;

  return (
    <div className='bg-[#faf9fb] flex-1 p-10 min-h-screen'>
      <div className='max-w-screen-lg mx-auto'>
        <h1 className='font-bold text-2xl md:text-4xl my-6 mb-6'>My Favorites</h1>
        
        {!fav && (
          <div className='h-[80vh] flex justify-center'>
            <img src="./404.svg" alt="no favorites" className='h-3/4' />
          </div>
        )}

        {fav && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <ResipeCard />
            <ResipeCard />
            <ResipeCard />
            <ResipeCard />
          </div>
        )}
      </div>
    </div>
  )
}
