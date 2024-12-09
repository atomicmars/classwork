import React, {useState} from 'react'

const STS = () => {
    return (
        <body className='font-size:11px'>
            <div className='box-1 rounded'>
                <h1 className='p-8 py-4'>STS Overview</h1>
                <img src='images/omniphotos/STS order.png' className='h-100 w-150' />
                <p>Ship from Store orders (STS) are orders that were selected from in-store pick up but came from another location. They are identified with an orange ECOM sticker. Most of the time there are no pick orders that generate after we have shorted them in our store. Customers should see a promised date on their order summary of an estimate to when it will arive</p>
                <p>They come from two sources:</p>
                <ul>
                    <li>FedEx drop off through receiving</li>
                    <li>Weekly morning Store-to-DC delivery trucks</li>
                </ul>
                <p>All dropped off orders will most likely be dropped off on the fulfillment desk. Truck team should spot these orders as they unload the truck and receive FedEx shipments.</p>
                <p>Before they can be moved, they must be marked as received.</p>

                <h1 className='p-8 py-4'>Receiving STS Orders</h1>
                <div class="grid grid-cols-2 gap-2 grid-center m-3 p-3">
                    <img src='images/omniphotos/STS ready to receive.png' />
                    <img src='images/omniphotos/STS receiving page.png' />
                </div>
                <p>Go to the tab STS Ready to Receive Containers and scan the STS barcode label (barcode in the middle of the label). You may also type the number sequence under the container barcode and press the barcode icon if it won’t scan.</p>
                <p>After scanning all STS packages, click Finished Receiving at the bottom of the screen.</p>
                <div class="grid grid-cols-2 gap-2 grid-center m-3 p-3">
                    <img src='images/omniphotos/STS ready to stage.png' />
                    <img src='images/omniphotos/sts stage screen.png' />
                </div>
                <p>Next move to the STS Ready to Stage Containers tab if you weren’t automatically moved to the page. Scan the STS barcode again and then assign a staging location in the box below.</p>
                <img src='images/omniphotos/sts with label.png' className='h-100 w-150' />  
                <p> After assigning, the bopis printer will print an orange label. Attach to the package. Try to cover any other barcodes as they can interfere with scanning for pick-up.</p>
                <p>Repeat with all packages until no more STS packages are unstaged and then move to their assigned locations.</p>

                <h1 className='p-8 py-4'>STS Tools</h1>
                <img src='images/omniphotos/STS order search.png'className='h-85 w-80 ml-3' />
                <p>If at any point during staging you lose the orange label or it doesn’t print, you can find the package and print again by clicking Ship to Store Order Search and scanning the STS barcode. Regular search does not work for STS barcodes and it must be searched for using this.</p>
                <img src='images/omniphotos/STS in transit.png' className='h-85 w-80 ml-3' />
                <p>The STS In Transit Containers tab is used to see what orders have left their origin stores. Using this you can see what orders are on their way for a customer and where they are coming from. If you don’t see a customer’s order, that doesn’t mean it isn’t coming. The container may have not been created and left the origin store yet.</p>
                <p>Anything from Store 1 is coming on our delivery trucks. Any other store is a FedEx drop off.</p>
            </div>
        </body>
    )
}

export default STS