import React, {useState} from 'react'
import ReturnTop from '../return'


const Home = () => {
    return (
        <body className='font-size:11px'>
            <h3 className='bg-red-400 text-center py-3'>This guide is intended to act as a quickstart guide for questions about our Omnichannel processes at the store-level.</h3> 
            <div className='box-1 rounded'>
                <img src='/images/pexels-voitkevich.jpg' />
                <p className='text-center font-size:16'> Click a button below to begin.</p>
                <div class="grid grid-cols-3 gap-3 grid-center m-3 p-3">
                    <button className='bg-red-400 rounded p-3'><a href='/InStoreOrders'>BOPIS Process</a></button>
                    <button className='bg-red-400 rounded p-3'><a href='/SFSORders'>SFS Process</a></button>
                    <button className='bg-red-400 rounded p-3'><a href='/InStoreOrders'>Pick-up Process</a></button>
                </div>
                <div class="grid grid-cols-4 gap-3 grid-center m-3 p-3">
                    <button className='bg-red-400 rounded p-3'><a href='/Tools'>Inventory Tools</a></button>
                    <button className='bg-red-400 rounded p-3'><a href='/Processes'>STS Process</a></button>
                    <button className='bg-red-400 rounded p-3'><a href='/Processes'>Auditing</a></button>
                    <button className='bg-red-400 rounded p-3'><a href='/SFSOrders'>Carrier Information</a></button>
                </div>
            </div>
            <ReturnTop />
        </body>
    )
}

export default Home