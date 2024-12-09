import React, {useState} from 'react'

const SFS = () => {
    return (
        <body className='font-size:11px'>
            <div className='box-1 rounded'>
                <h1 className='p-8 py-4'>Anatomy of SFS Orders</h1>
                <img src='images/omniphotos/SFS pick screen.png' className='h-85 w-80 ml-3' />

                <h1 className='p-8 py-4'>Assigning a Batch</h1>
                <div class="grid grid-cols-2 gap-2 grid-center m-3 p-3">
                <img src='images/omniphotos/SFS Screen 1.png' />
                <img src='images/omniphotos/SFS Screen 2.png' />
                </div>
                <p>Ship from Store orders (SFS) appears in the <strong>SFS Orders (Pick In Batches)</strong> tab. These batches are multiple SFS orders grouped together for picking and show all items in said orders when viewing. A typical batch size is a batch of 10, but can be adjusted to be smaller or bigger (up to 50) by using the three bars with dots in the top right corner.</p>
                    <p>There are three options for each batch of SFS:</p>
                    <ul>
                        <li>Clicking <strong>Pick</strong> will begin picking the batch.</li>
                        <li>Clicking <strong>Reset</strong> will reset all progress and remove the assigned team member.</li>
                        <li>Clicking <strong>Print</strong> will print paper tickets from the receiving printer for this patch.</li>
                    </ul>

                <h1 className='p-8 py-4'>Picking a Batch</h1>
                    <p>Once opening the batch, you will see all total products for that batch. You can see how many products there are in the left corner under the barcode scanner box.</p>
                    <p><strong>NOTE: these are total SKUs not total product. If there are 5 of the same SKU, it will still show as 1 product. Be sure to count all items in the batch since you need to log them.</strong></p>
                    <p>From here you can see multiple important information: item SKU, size / style / color, available stock and last received date, how many you need, and price.</p>
                    <p>When every item is picked, the TC will give a message saying: Success! All items have been picked. Click OK and it will take you back to the batch screen to pick another batch.</p>
                    <img src='images/omniphotos/sfs batch complete.png' className='h-85 w-80 ml-3'/>
            
                <h1 className='p-8 py-4'>Packing a Batch</h1>
                    <p>Orders must be packed on one of the store computers with access Sterling webstore, a scale, and a scanner.</p>
                    <ol>
                        <li>First navigate to the <strong>Orders Ready to Pack</strong> tab on the Sterling webstore desktop homepage. The orders will appear in this tab with the oldest in the queue at the top. Click on an order's pick button to begin packing.</li>
                        <li>Navigate to the <strong>products tab</strong> on the order page to see what items need to be packed. Navigate back to the <strong>scan</strong> tab after gathering the items.</li>
                        <li>Scan all items in to the container.</li>
                        <ul>
                            <li>If you need more than one container, scan only the items going into the first container. Then navigate to the <strong>container tab</strong> and click <strong>add container</strong> button. Scan the rest in.</li>
                        </ul>
                        <li>Sterling should bring you to the <strong>container tab</strong> after all items have been scanned in. From here you need to pack the item(s) in one of the approved containers (polybags, boxes, etc).</li>
                        <li>Type the chosen container into the <strong>container</strong> text box and click enter.</li>
                        <li>Weigh the item on the scale. If you working on the main computer, the weight automatically inputs. Otherwise, type the <i>exact</i> weight into the <strong>weight text box</strong>.</li>
                        <li>Click finish print and affix carrier label to the package.</li>   
                    </ol>
                    

                <h1 className='p-8 py-4'>Carrier Types</h1>
                <div class="grid grid-cols-2 gap-2 grid-center m-3 p-3">
                <img src='images/omniphotos/Carrier Labels.png' />
                <img src='images/omniphotos/carrier locations.png' />
                </div>
                <p>After the order is packed, it will either be USPS or FedEx. Place in the appropriate holding area next to the receiving desk for carrier pick up.</p>
                <p>FedEx Express orders are staged separately at the front end. These do not get picked up with other FedEx types.</p>

            </div>
        </body>
    )
}

export default SFS