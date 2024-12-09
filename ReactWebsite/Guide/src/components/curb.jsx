import React, {useState} from 'react'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const CURB = () => {
    return (
        <body className='font-size:11px'>
            <div className='box-1 rounded'>
                <h1 className='p-8 py-4'>Pick-up Overview</h1>
                    <p>After online orders pick has been completed, they enter the Ready for Customer Pick-up stage. From here they can be picked up by the customer by curbside or in-store. At store level, most curbsides are the omnichannel associate's responsibility and in-store pick-ups are handled by front end cashiers.</p>

                    
                <h1 className='p-8 py-4'>Curbside Orders</h1>
                <div class="grid grid-cols-2 gap-2 grid-center m-3 p-3">
                 <img src='images/omniphotos/curbside pick screen 1.png' height="300" width="300" />
                <img src='images/omniphotos/Curbside pick screen 2.png' height="300" width="300" />   
                </div>
                    <p>Curbside orders will appear in the <strong>Curbside Ready for Pick-up</strong> tab. The TC will honk to signal a curbside order. </p>
                    <p>Curbside orders have a <strong>6 minute</strong> time limit.</p>
                    <p>When you open the curbside order, at the top of the screen you will see the customer name, spot location, car type, and preferred drop off location.</p>
                    <p>This is also where to assign a curbside to yourself or add more time to the order if needed.</p>
                    <p>Scrolling down, you will see what products are in the pick up order and where the order was staged. Follow the staging location listed to find the order.</p>
                    <img src='images/omniphotos/curbside verifcation screen.png' className='h-85 w-80  ml-3' />
                    <p>To complete an order, ask the customer for some form of ID verification (Driver's License or other legal form). Select which form of ID was presented from the drop down menu. Then, ensure the name of the person picking up the order as the primary or alternate pick up.</p>
                    <p>After all the above has been selected from the drop downs, scroll to the end of the screen and click the button to <strong>Complete the BOPIS order</strong>.</p>
                
                <h1 className='p-8 py-4'>In-store Orders</h1>
                    <p>When a customer comes into the store for an order, they will have to provide their order number to find the order. First and lastname can be used to find the order, but order numbers are necessary to be accurate.</p>
                    <p>To find an order, go to the search icon at the top. This will open the search screen. On the search screen, narrow down the results by order class (Ready for Customer Pick Up) and then type the order number. The TC will bring up the associated order.</p>
                    <p>Verify the customer's license before finishing the order. Complete the order just like a curbside afterwards.</p>
            </div>
            
        </body>
    )
}

export default CURB