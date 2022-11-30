import Image from 'next/image'

import ticon from "../public/assets/ticon.png";

const TitlePrice = () => {
    return(
        <>
         <div className='flex flex-row justify-between border-b border-black items-baseline '>
            <p className='text-sm font-kern opacity-50'>Edition 1 of 14</p>
            <p className='uppercase text-4xl font-haffer'>VITAMIN D</p>
          </div>
          <div className='text-right'>
              <h1 className='text-6xl font-haffer text-cyan'>1.576 ETH</h1>
              <p className='text-xs font-kern opacity-50'>450 USD</p>
              <Image src={ticon} alt="icon" className='float-right mt-4'/>
              <div className='clear-right'></div>
          </div>
             
        </>
    )
}

export default TitlePrice;