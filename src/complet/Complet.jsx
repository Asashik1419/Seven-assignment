import React from 'react';

const Complet = ({ selectedTicket, resolvedTicket, setResolvedTicket }) => {

  const handleClick = (ticket) => {
   console.log(ticket)
    setResolvedTicket(prev =>
      prev.find(t => t.id === ticket.id) ? prev : [...prev, ticket]
    );
  };

  return (
    <div>
      <h3 className="text-2xl font-bold">Task Status</h3>

      {selectedTicket?.map(ticket => (
        <div key={ticket.id} className="card w-[360px] bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{ticket.title}</h2>
            <button
              onClick={() => handleClick(ticket)}
              className="btn bg-[#02A53B] text-white rounded-md px-32 py-3"
            >
              Complete
            </button>
          </div>
        </div>
      ))}

      <div className="mt-5">
        <h3 className="text-2xl font-bold">Resolved Task</h3>

        {Array.isArray(resolvedTicket) &&
          resolvedTicket.map(ticket => (
            <div key={ticket.id} className="card w-[360px] bg-base-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">{ticket.title}</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Complet;