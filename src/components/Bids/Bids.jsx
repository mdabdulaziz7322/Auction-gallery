import React, { useEffect, useState } from 'react';
import Bid from '../Bid/Bid';
import { MdFavoriteBorder } from "react-icons/md";
import './Bids.css';


const Bids = ({ handleFavorite, notify, handleTotalBids, favorite }) => {
    const [bids, setBids] = useState([]);


    useEffect(() => {
        fetch("Bids.json")
            .then((res) => res.json())
            .then((data) => setBids(data))
    }, []);

    function isInFavorites(id) {
        for (let i = 0; i < favorite.length; i++) {
            if (favorite[i].id === id) {
                return true;
            }
        }
        return false;
    }

    return (
        <div>
            <div className='bids'>
                <div className="overflow-x-auto">
                    <table className="table bg-white rounded-2xl shadow-lg mt-10">
                        <thead>
                            <tr>

                                <th className='p-5'>Items</th>
                                <th>Current Bid</th>
                                <th>Time Left</th>
                                <th>Bid Now</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bids.map((bid


                                ) =>
                                    <tr>

                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask h-12 w-12">
                                                        <img
                                                            src={bid.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold w-50">{bid.title}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            ${bid.currentBidPrice}
                                        </td>
                                        <td>{bid.timeLeft}</td>
                                        <th>
                                            <button onClick={() => { handleFavorite(bid); notify(); handleTotalBids(bid.currentBidPrice) }}
                                                style={{
                                                    color: isInFavorites(bid.id) ? 'red' : 'gray',
                                                    
                                                    cursor: isInFavorites(bid.id) ? 'not-allowed' : 'pointer',
                                                    padding: '6px 12px',
                                                    border: 'none',
                                                    borderRadius: '4px'
                                                  }}
                                                  disabled={isInFavorites(bid.id)}

                                            >

                                                <MdFavoriteBorder size={25} />
                                            </button>
                                        </th>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
                {
                    bids.map((bid) => <Bid bid={bid}></Bid>)
                }
            </div>
        </div>
    );
};


export default Bids;