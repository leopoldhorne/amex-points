import React from "react";

const Row = ({name, value}: {name: string, value: number}) => {
  return (
    <div className="flex justify-between border-t ease-in-out duration-500 hover:shadow-md hover:bg-amber-50 items-center">
      <p className="w-[50%] text-left border-r">{name}</p>
      <p className="w-[50%] text-center">{value.toLocaleString("en-US")}</p>
    </div>
  );
};

export default Row;
