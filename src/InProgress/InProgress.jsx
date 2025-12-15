import React, { useEffect, useRef } from "react";

const InProgress = ({ inprogressIssues, ResolvedIssues }) => {

 const prevInProgressCount = useRef(inprogressIssues.length);

  useEffect(() => {
    if (inprogressIssues.length > prevInProgressCount.current) {
      alert("New issue moved to In Progress!");
    }
    prevInProgressCount.current = inprogressIssues.length;
  }, [inprogressIssues.length]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 rounded-xl py-20">
      
      {/* In Progress Box */}
      <div className="md:w-[626px] h-[250px] rounded-sm bg-gradient-to-r from-[#5F56FF] via-[#8E4DF5] to-[#7AB2FF]">
        <div className="mt-18">
          <h3 className="text-3xl text-white text-center mt-11">In Progress</h3>
          <h2 className="text-white text-6xl text-center mt-4">
            {inprogressIssues.length}
          </h2>
        </div>
      </div>

      {/* Resolved Box */}
      <div className="md:w-[626px] h-[250px] rounded-sm bg-gradient-to-r from-[#54CF68] to-[#01827B]">
        <div className="mt-18">
          <h3 className="text-3xl text-white text-center mt-11">Resolved</h3>
          <h2 className="text-white text-6xl text-center mt-4">
            {ResolvedIssues.length}
          </h2>
        </div>
      </div>

    </div>
  );
};

export default InProgress;
