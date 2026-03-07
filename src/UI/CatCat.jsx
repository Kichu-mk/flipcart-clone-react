import React from 'react';

const CatCat = ({name, img}) => {
    return (
            <div className="w-40 h-full flex flex-col items-center justify-center hover:bg-gray-200 hover:rounded">
                <img src={img} alt="" className="h-[90px]" />
                <h1 className="text-[1.1rem] font-semibold">{name}</h1>
            </div>
       
    );
}

export default CatCat;
