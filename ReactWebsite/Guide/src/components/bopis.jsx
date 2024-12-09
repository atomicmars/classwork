import React, {useState} from 'react'

const BOPIS = () => {
    return (
        <body className='font-size:11px'>
            <div className='box-1 rounded'>
                <h1 className='p-8 py-4'>Assigning an Order</h1>
                <div class="grid grid-cols-2 gap-2 grid-center m-3 p-3">
                    <img src='images/omniphotos/BOPIS Screen 1.png' height="300" width="300"/>
                    <img src='images/omniphotos/BOPIS screen 2.png' height="300" width="300" />
                </div>
                <p> Bopis orders will appear in the <strong>New Pick-up Orders</strong> tab. They will appear from Oldest on top to Newest on the bottom. The time limit for the order is under the order number in green. All bopis orders start at <strong>45 minutes</strong>, and give warnings for the time limit at 30 minutes and 1 minute remaining. </p>
                <p> Clicking on the <strong>Pick</strong> button will assign the order to yourself and make it unavailable to others team members for picking. Be mindful of assigning orders to yourself if running out of time in your shift because it removes the order from the queue and is not visible to other team members.</p>
                <p>Clicking on the white part of the order where the order information text is will bring you to a preview page of the order without assigning it to you.</p>
                
                <h1 className='p-8 py-4'>Order Screen Anatomy</h1>
                    <img src='images/omniphotos/BOPIS pick screen.png' className='h-85 w-80 ml-3'/>  
                <p>When you open the order and assign it to you, you will see this screen and find the following information:</p>
                <ul>
                    <li>The SKU</li>
                    <li>The style number, color, and size (if applicable)</li>
                    <li>The amount on hand and last received date</li>
                    <li>The planogram location data if applicable</li>
                    <li>The amount you need for the order</li>
                    <li>The price of the item. Be aware this includes any ongoing promotion and clearance prices. Clearance prices always end in either .97 or .96</li>
                </ul>
                <p>If the Item location is applicable, it will show in the Pog ID segment. Softlines items do not have set locations, but most of hardgoods items do. Flex area items are the exception.</p>
                <p>Make sure to scan the barcode for every item in the order. It is important to verify that it is the correct item by scanning it at least once. If the item is accepted, there will be a green checkmark next to the item when picked (will be shown under Pog ID section). If it is not in the order, the TC will give an error message.</p>
                <p>If you can't find the item, this is the stage where you would mark it as a no pick using the <strong>Record Shortage</strong> button under the item quantity. After clicking this button, you will be asked for the reason why it is being shortpicked before submitting.</p> 
                <p><strong>NOTE: You are unable to add the item to the order after no picking the item. Be certain it is not here. See the No Pick Tools page for more resources on finding no picks.</strong></p>
                <p>After every item has a green picked checkmark, click <strong>Next</strong> at the top of the page to move to the staging screen.</p>

                <h1 className='p-8 py-4'>Picking an Order</h1>
                <p>Bopis orders will appear in the <strong>New Pick-up Orders</strong> tab. They will appear from Oldest on top to Newest on the bottom. The time limit for the order is under the order number in green. All bopis orders start at <strong>45 minutes</strong>, and give warnings for the time limit at 30 minutes and 1 minute remaining.</p>
                <p>Clicking on the <strong>Pick</strong> button will assign the order to yourself and make it unavailable to others team members for picking. Be mindful of assigning orders to yourself if running out of time in your shift because it removes the order from the queue and is not visible to other team members.</p>
                <p>Clicking on the white part of the order where the order information text is will bring you to a preview page of the order without assigning it to you.</p>


                <h1 className='p-8 py-4'>Finishing an Order</h1>
                    <img src='images/omniphotos/BOPIS staging screen.png' className='h-85 w-80 ml-3'/>
                <p>To finish the order, we move to the staging phase. We stage our orders by <strong>customer last name</strong> or by <strong>location</strong> depending on the order size and type.</p>
                <p>Based on this, we can choose a variety of stanging locations:</p>
                    <ul>
                        <li>If it is small enough to stage in the front cabinets, pick the same letter as the customer lastname from the dropdown menu.</li>
                        <li>For orders that do not fit in the front cabinets, such as bulk orders, choose one of our receiving areas from the dropdown (1R - 6R).</li>
                        <li>Firearm orders are always staged at the <strong>Gun Counter</strong>. Customers are required to submit paperwork upon arrival so it must be staged and kept there to comply with the law.</li>
                        <li>Orders that have unique circumstances and cannot be staged under any option above can be staged using <strong>Other</strong> from the dropdown. It will prompt a further specification on location. Be concise and accurate as the textbox does not allow spaces.</li>

                    </ul>
                <p>After location as been set, then assign the location to the order items. The yellow highlighted area in the photo is to assign all items the same location. The green highlighted area in the photo is to stage each item individually. It is recommened to assign all items the same location and not separate orders as it will cause confusion at pick-up. Firearms and ammunition are the exception as only firearms can be staged at the Gun Counter. Stage all accompanying items elsewhere.</p>
                <p>Click <strong>Finish Pick</strong> at the top and it will ask how many labels you want. Pick however many is appropriate (ex. 1 bag = 1 label, 2 bags = 2 labels). Attach a label to each bag or box and place it in the assigned staging area.</p>

            </div>
        </body>
    )
}

export default BOPIS
