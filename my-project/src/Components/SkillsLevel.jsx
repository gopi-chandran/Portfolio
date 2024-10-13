import React from "react";

export default function SkillsLevel ({ skillsName, percentage }){
  return (
    <>
      <div className="mt-4 space-y-1">
        <div className="flex justify-between items-end">
          <p className="text-xl font-bold">{skillsName}</p>
          
        </div>
        <div className="w-full bg-gray-500 h-2 rounded-full">
          <div
            style={{ width: `${percentage}` }}
            className={`h-2 bg-scondary `}
          ></div>
        </div>
      </div>
    </>
  );
};

