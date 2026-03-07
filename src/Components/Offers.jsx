import React from 'react';
import o1 from '../assets/offers/1.webp';
import o2 from '../assets/offers/2.webp';
import o3 from '../assets/offers/3.webp';
import o4 from '../assets/offers/4.webp';
import o5 from '../assets/offers/5.webp';
import o6 from '../assets/offers/6.webp';

const Offers = () => {
    let offerArr = [o1, o2, o3, o4, o5, o6]
    return (
        <div className='w-full p-[10px] bg-[#f1f2f4]'>
            <div className="w-full h-auto flex flex-wrap gap-2 justify-center">
                {
                    offerArr.map((obj) => {
                        return (
                            <div className="w-[30%]" >
                                <img src={obj} alt="" />
                            </div>
                        )                    
                    })
                }
            </div>
            
        </div>
    );
}

export default Offers;
