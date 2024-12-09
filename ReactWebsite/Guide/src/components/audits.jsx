import React, {useState} from 'react'

const Audit = () => {
    return (
        <body className='font-size:11px'>
            <div className='box-1 rounded'>
            <h1 className='p-8 py-4'>Morning Audit Process</h1>
            <p>In the morning, an audit must be done for orders ready for customer pick-up. This audit is done in the TC and must be completed prior to 7:15 CST. </p>
            <p>To begin the audit, go to the tab labeled <strong> Audit Staging Locations</strong>. This tab will prompt you to start the audit scan. Scan every order ready for pick-up in all locations by scanning the barcode on the orange label. </p>
            <p>While scanning, it will tell you if the order is still active or if it has been cancelled.</p>
            <p>When all the orders have been scanned, complete the scan. The TC will generate a summary of all orders scanned, canceled, and missing. Click complete. </p>
            <p>The TC will generate the missing orders under the tab labeled <strong>Missed Shipments – Audit Staging </strong>. Search again for the missing orders. If it has not been found under a second look, complete the order as normal. </p>
            <p>It is important to complete the order to prevent the order from being picked up, canceling, and causing a loss to the company.</p>
            </div>
        </body>
    )
}

export default Audit