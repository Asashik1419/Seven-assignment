import React, { use } from 'react';

const Componenet = ({tikitPromise}) => {
    const tikitData = use(tikitPromise);
    console.log(tikitData)
    return (
        <div className='max-w-[1200px] mx-auto '>
                <h1 className='text-2xl font-bold'>Customer Tickets</h1>
            <div className='grid grid-cols-2 gap-5'>
                { 

                tikitData.map(tikit=><div key={tikit.id}>

                    
                    <div className='grid grid-cols-2'>
                        <div className="card w-96 bg-base-100 card-xs shadow-sm">
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title">{tikit.title}</h2>
                    <button className='bg-[#B9F8CF] py-1 px-3 rounded-2xl'>{tikit.status}</button>
                </div>
                <p>{tikit.description}</p>
            <div className="flex justify-between">
                <div className='flex gap-5'>
                    <p>{tikit.id}</p>
                    <h3 className='text-red-500'>{tikit.priority}</h3>
                </div>
                <div className='flex gap-5'>
                    <h3>{tikit.customer}</h3>
                    <p>{tikit.createdAt}</p>
                </div>
            </div>
            </div>
             </div>
                    </div>
                </div>)
            }

            </div>

                
        </div>
        
    );
    
};

export default Componenet;