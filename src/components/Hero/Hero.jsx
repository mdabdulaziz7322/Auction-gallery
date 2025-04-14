import React from 'react';

const Hero = () => {
    return (
        <div>
            <div
  className="hero w-full h-[500px] bg-base-200"
  style={{
    backgroundImage: "url(https://i.ibb.co/h1CxPBKg/Banner-min.jpg)",
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content ">
    <div className=" ">
      <h1 className="mb-5 text-5xl font-bold w-150">HBid on Unique Items from Around the World</h1>
      <p className="mb-5 font-thin w-300 mr-20">
      Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions.
      </p>
      <button className="btn btn-primary bg-white rounded-full text-gray-500 px-7">Explore Auctions</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;