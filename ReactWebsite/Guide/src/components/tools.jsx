import React, {useState} from 'react'

const OmniTools = () => {
    return (
        <body className='font-size:11px'>
            <div className='box-1 rounded'>
            <h1 className='text-center p-8 py-4'>Inventory Adjustment Tools</h1>
            <h1 className='p-8 py-4'>Counts & Inventory Adjustments</h1>
            <p>When an item is unable to be found, it must be adjusted out of the store inventory. Adjustments are performed on the TC with either the <strong>Counts</strong> or <strong>Inventory Adjustments</strong> apps.</p>
            <p>Counts allows users to perform inventory adhocs. Adhocs adjustments allow for complete adjustments of our on-hand stock levels.</p>
            <ol>
                    <li>Type the SKU you want to adjust out from our inventory.</li>
                    <li>Type the on-hand number you want to adjust the inventory to. Most of the time it will be 0 to reflect none on hand.</li>
                    <li>Review the adjustment. If you have anymore to make, you can add more before submitting it.</li>
                    <li>Then click submit.</li>
                </ol> 
            <p>After submitting the adhoc, notify a manager or a lead so they can accept the adjustment.</p>

            <p>Inventory Adjustment is similar to Counts but it is for more specific adjustments to our inventory.</p>
                <ol>
                    <li>Type the SKU you want to adjust out from our inventory.</li>
                    <li>Type how many of the item you want to adjust out. You will usually be adjusting the on-hand to zero so adjust however many we have on-hand.</li>
                    <li>Select the reason why you are adjusting this item out. Most of our no picks will fall under <strong>A-Theft Out</strong>, but there is also <strong>A-Ship Error Out</strong> (if it is a truck error) and <strong>A-DSL Out</strong> (destroy at store level).</li>
                    <li>Then click submit.</li>
                </ol> 
                <p>After submitting the adjustment, notify a manager or a lead so they can accept the adjustment.</p>

            <h1 className='text-center p-8 py-4'>Inventory Shortage Tools & Processes</h1>
            <h1 className='p-8 py-4'>10/10/10</h1>
                <p>Our no pick rule is called the 10/10/10, meaning the omnichannel associate look for 10 minutes, another associate looks for 10 minutes, and then a manager or lead for 10 minutes. After all steps and confirmation from a manager, the item can be shorted from the order. It is important to utilize peer knowledge, especially other omnichannel associates' knowledge. Be persistent when asking for help, call for peers by name, and be sure to always verify for yourself. Don’t just take people for their word alone.</p>
                <p>On top of the 10/10/10 process, utilize other tools before and after before finally shorting.</p>

            <h1 className='p-8 py-4'>RFID</h1>
                <p>RFID is a program that uses radio frequency tags to track certain items. At this time, only Nike and Adidas apparel and footwear carry these tags. This program is extremely useful in finding no picks when the department is not organized. To begin RFID search, use a TC72 and RFID gun to do the following:</p>
                <ol>
                    <li>Open the Clarity app and log in. Clarity uses your A-Number login.</li>
                    <li>Pair the RFID gun and TC together. Go to the Peripherals tab in Clarity. The RFID gun may have previously been paired. If it has, you can select the gun from the previously paired accessories.</li>
                    <li>Press and hold the bluetooth button on the RFID gun until it is blinking blue. Then click pair on the TC. One the TC has found the gun, click the gun's trigger. The gun should connect from there.</li>
                    <li>Once the gun is paired, you can begin searching for an item. Go to the Item Search tab on Clarity.</li>
                    <li>Type the SKu of the item into the search bar to find the product in RFID's inventory director.</li>
                    <li>Select the size and color needed. The RFID gun will activate and begin searching for the frequency. There will be a green flashing light if working properly.</li>
                    <li>The gun will make a 'geiger' beeping noise once it has latched on to the frequency. The sound will increase in frequency and the percentage meter on the TC will go up the closer you are to the tag.</li>
                    <li>Click the trigger again to stop the search.</li>
                </ol>
                <p><strong>NOTE: Try to avoid switching tabs on the TC while working on finding an object in Clarity. The software can become glitchy and crash if switching around too much.</strong></p>

            <h1 className='p-8 py-4'>Item Adjacent</h1>
                <p>Item Adjacent rules is a process that omnichannel associates can use while searching for merchandise.</p>
                <ol>
                    <li><strong>Look in the item home location.</strong> This is where the item should be.</li>
                    <li><strong>Look in the item backstock location.</strong> This is where excess of the items would end up</li>
                        <ul>
                            <li><i>Apparel locations:</i> Fitting room, Main receiving</li>
                            <li><i>Footwear locations:</i> Little receiving</li>
                            <li><i>Outdoors locations:</i> Main receiving, steel</li>
                            <li><i>Team Sports locations:</i> Bike assembly, Exercise stock, Little receiving, Main receiving, Corner steel in Baseball</li>
                        </ul>
                    <li><strong>Look in item flex locations.</strong> This is where promotional items or ‘impact areas’ are set depending on season and promotion.</li>
                    <ul>
                        <li><i>Locations:</i> Front end display, end caps</li>
                    </ul>
                    <li><strong>Look in item go backs.</strong> The item may have been returned or unwanted by customers.</li>
                    <ul>
                        <li><i>Locations:</i> Front end bins, fitting room, registers</li>
                    </ul>
                    <li>For clearance items, check both the clearance areas and home locations. Some may have been missed.</li>
                </ol>

            <h1 className='p-8 py-4'>Item Lookup</h1>
            <p>Item Lookup provides a lot of relevant information about trouble items that you can use to aid your search:</p>
                  <ul>
                    <li><strong>Last received dates:</strong> You can tell how recent an item is in the store, maybe it just came off the last truck and hasn’t been worked out yet, or if its too old it may be an unlikely pick.</li>
                    <li><strong>Location of Item:</strong> If applicable, it will show the department and Pog ID for the item. Softlines (clothes/footwear) do not have an item location, but most hardgoods do. Department “Impact Areas” are anything facing the race track, the changing front door flat, and check-out lines.</li>
                    <li><strong>Sales Information:</strong> This gives how many of the items were sold within 90 days. This can be used to give an idea on how many were in the store and moved out of the store.</li>
                    <li><strong>Merchandise Hierarchy:</strong> This can clarify what an item is if you are unsure by the name alone.</li>
                  </ul>
                  <p>It is recommended to use Item Lookup to learn the different Pog ID departments around the store so you are familiar with each aisle's planogram.</p>

            </div>
        </body>
    )
}

export default OmniTools