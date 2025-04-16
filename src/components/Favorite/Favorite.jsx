import React from 'react';
import { MdCancel } from "react-icons/md";

const Favorite = ({favorite, handleRemoveFavorite}) => {
    return (
        <div>
           {favorite.length === 0 ? (
            <div className='border-b-1 border-gray-200 pb-5'>
          <h3 className='text-xl py-4 text-center'>No favorites yet</h3>
          <p className='text-center px-4'>Click the heart icon on any item to add it to your favorites</p>
            </div>
      ) : (

          favorite.map((fav) =>
            <div className='flex items-center justify-around gap-3 border-b-1 border-gray-200 py-5'>
              <div className="flex items-center gap-3 mt-5">
                <div className="avatar">
                  <div className="mask h-15 w-15">
                    <img
                      src={fav.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="text-xs w-50">{fav.title}</div>
                  <div className='flex items-center gap-4 mt-3'>
                    <p className='text-xs'>${fav.currentBidPrice}</p>
                    <p className='text-xs'>Bids: {fav.bidsCount}</p>
                  </div>
                </div>

              </div>
              <button onClick={() => handleRemoveFavorite(fav.id)} className='text-center mt-5'><MdCancel size={20} /></button>
            </div>

          )
      
      )}  
        </div>
    );
};

export default Favorite;