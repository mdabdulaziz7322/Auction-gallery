
import { useState } from 'react';
import './App.css'
import Bids from './components/Bids/Bids';
import Hero from './components/Hero/hero';
import Navbar from './components/Navbar/Navbar'
import { MdFavoriteBorder } from "react-icons/md";

import { ToastContainer, toast } from 'react-toastify';
import Favorite from './components/Favorite/Favorite';
import Footer from './components/Footer/Footer';

function App() {
  const [favorite, setFavorite] = useState([]);
  const [total, setTotal] = useState(0);



  const handleFavorite = (bid) => {
    setFavorite([...favorite, bid])
  }

  const handleTotalBids = (amount) => {
    setTotal(total+ amount)
    
  }

  
  const handleRemoveFavorite = (id) =>{
const remainingFavorite = favorite.filter(fav => fav.id !== id);
const remainingTotal = total - favorite.find(fav => fav.id === id).currentBidPrice;
setTotal(remainingTotal)
setFavorite(remainingFavorite)
  }

const deleteAll = () => {
  setFavorite([])
  setTotal(0)
  toast("All favorites removed")
}
  

  const notify = () => toast("Added to Favorite");



  return (
    <>
      <Navbar></Navbar>
      <Hero ></Hero>


      <div className="body container w-11/12 mx-auto flex  gap-5 mt-10 ">
        <div className="auction section w-[70%]">
          <h3 className='text-2xl mb-3'>Active Auctions</h3>
          <p>Discover and bid on extraordinary items </p>
          <Bids handleFavorite={handleFavorite} notify={notify} handleTotalBids={handleTotalBids} favorite={favorite}></Bids>
        </div>
        <div className="favorite-section w-[30%] bg-white mt-27 rounded-2xl shadow-sm p-8 h-full ">
          <div className='flex items-center justify-center gap-3 border-b-1 border-gray-200 pb-5'>
            < MdFavoriteBorder size={25} />
            <h3 className='text-2xl py-4'>Favorite Items</h3>
          </div>
          <div>
            <Favorite favorite={favorite} handleRemoveFavorite= {handleRemoveFavorite}></Favorite>
          </div>
          <div className='flex items-center justify-around mt-3'>

            <h3 className='text-xl py-4'>Total bids Amount</h3>
            <p>${total}</p>
          </div>
          <div className='text-center mt-3'>
            <button onClick ={ () => {deleteAll()}} className="btn btn-active btn-secondary">Delete All</button>
            </div>
          
        </div>

        <ToastContainer />
      </div>
      
      <Footer> </Footer>
     
      

    </>
  )
}

export default App
