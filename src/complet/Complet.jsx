import React from 'react';



const Complet = ({ selectedTicket, ticket }) => {
   console.log(selectedTicket)

    return (
        <div>
         <div>
           <h3 className='text-2xl font-bold'>Task Status</h3>

               {selectedTicket?.map(ticket =>(<div
               key={ticket.id}
               >
            <div className="card w-[360px] bg-base-100 card-xs shadow-sm">
               <div className="card-body">
                 <h2 className="card-title">{ticket.title}</h2>
                  <div className="card-actions ">
                    <button className="btn bg-[#02A53B] text-white rounded-md
                     px-32 py-3">Complete</button>
                  </div>
               </div>
            </div>
           </div>))}

           
        </div>

        <div className='mt-5'>
         <div>
           <h3 className='text-2xl font-bold'>Resolved Task</h3>
           <div>
            <div className="card w-[360px] bg-base-100 card-xs shadow-sm">
               <div className="card-body">
                 <h2 className="card-title">Xsmall Card</h2>
                  <div className="card-actions flex items-center justify-between">
                     <button className="btn text-[#02A53B] rounded-md
                     ">Complete</button>
                    <button className="btn text-[#02A53B] rounded-md">Click to remove</button>
                  </div>
               </div>
            </div>
           </div>
        </div>
        </div>
        </div>
    );
};

export default Complet;