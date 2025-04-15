import React from 'react';

const Footer = () => {
    return (
        <div className='mt-20'>
            
            <footer className="footer footer-horizontal footer-center bg-white text-base-content p-20">
            <div>
            <h3 className='text-2xl font-light text-blue-600 mb-3'>Auction<span className='font-bold text-yellow-500'>Gallery</span></h3>
            <nav className="grid grid-flow-col gap-4 ">
                    <a className="link link-hover">Bid.</a>
                    <a className="link link-hover">Win.</a>
                    <a className="link link-hover">Own.</a>
                </nav>
            </div>
                <nav className="grid grid-flow-col gap-4 ">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Auctions</a>
                    <a className="link link-hover">Categories</a>
                    <a className="link link-hover">How to works</a>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;