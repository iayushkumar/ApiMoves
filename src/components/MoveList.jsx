// src/components/MoveList.js
import React, { useEffect, useState } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCubesStacked } from "react-icons/fa6";
import { format } from 'date-fns';
import Accordan from "./Accordan";
const MoveList = () => {
  const [moves, setMoves] = useState([]);
  const [selectedMove, setSelectedMove] = useState(null);

  useEffect(() => {
    fetch("http://test.api.boxigo.in/sample-data/")
      .then((response) => response.json())
      .then((data) => setMoves(data.Customer_Estimate_Flow));
  }, []);

  const handleViewDetails = (moveId) => {
    setSelectedMove(moveId === selectedMove ? null : moveId);
  };

 

    const formattedDate = (dateString) => {
      return format(new Date(dateString), 'MMM d, yyyy \'at\' h:mm a');
    };
    
    const convertToMeters = (feet) => {
      const feetValue = parseFloat(feet);
      if (!isNaN(feetValue)) {
        const metersValue = feetValue * 0.3048;
       return metersValue
      } else {
        return 0;
      }
    };

  return (
    <div className="container mx-auto p-4">
      <div className="text-xl font-bold"> My Moves</div>
      {moves.map((move) => (
        <div key={move.estimate_id} className=" p-4 mb-4 ">
          <div className="flex justify-between items-center">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <div className="font-bold text-sm">From</div>
                <div>{move.moving_from} </div>
              </div>
              <div>
                <div className="mt-4 ml-24">
                  <IoArrowForwardCircleOutline className="w-8 h-8 text-orange-500 border-white" />
                </div>
              </div>
              <div>
                <div className="font-bold text-sm">From</div>
                <div>{move.moving_to} </div>
              </div>

              <div >
              <div className="font-bold text-sm">Request#</div>
                <div className="text-orange-600">{move.estimate_id} </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-1 mt-8">
            <div className="flex">
              <MdHome className="text-orange-600 w-6 h-6 mt-1" />{" "}
              {move.property_size}
            </div>
            <div className="flex">
            <FaCubesStacked className="text-orange-600 w-6 h-6 mt-1" />{" "}
              {move.old_floor_no}
              </div>
            <div className="flex">
              {" "}
              <GiPathDistance className="text-orange-600 w-6 h-6 mt-1" />
              {move.distance}
            </div>
            <div className="flex w-full">
              <FaCalendarAlt className="text-orange-600 w-4 h-4 mt-1 mr-2" />
              {formattedDate(move.moving_on)}
            </div>
            <div className="col-span-1 flex items-center space-x-1">
              <FaCircleCheck className="text-orange-400" />
              <span className="text-sm">is flexible</span>
            </div>
            <div className="col-span-1 flex items-center space-x-1">
              <button
              onClick={()=>handleViewDetails(move.estimate_id)}
               className="px-2 py-1 text-sm border-2 border-orange-500 text-orange-500 rounded">
                View More Details
              </button>
              <button className="px-2 py-1 text-sm bg-orange-500 text-white rounded">
                Quotes Awating
              </button>
            </div>
            
          </div>
            <div className="flex mb-4">
              <div className="font-bold ">Disclamer:</div>{" "}
              Please update your move data before two days of shifting
              </div>

          {selectedMove === move.estimate_id && (
            <div className="mt-4">

             <div className="grid grid-cols-2">
             <h3 className="text-lg font-semibold">Additional Information</h3>
             <button className="bg-black text-white w-40 ml-72">Edit Additional info</button>
             </div>
              <div className="mt-8">Test data</div>

              <div className="grid grid-cols-2 mt-4 mb-4">
             <h3 className="text-lg font-semibold">House Detail</h3>
             <button className="bg-black text-white w-40 ml-72">Edit House Detail</button>
             </div>
             <div className="mt-8 text-orange-500 font-bold">Existing House Detail</div>
             
             <div className="grid grid-cols-3 mt-2 mb-2">
             <h3 className="text-lg font-semibold">Floor No.</h3>
             <h3 className="text-lg font-semibold">Elivator Available</h3>
             <h3 className="text-lg font-semibold">Distance from Elivator/Staircast to truck</h3>
           
             </div>

             <div className="grid grid-cols-3 mt-2 mb-2 ml-2">
             <h3 className="text-lg">{move.old_floor_no}</h3>
             <h3 className="text-lg ">{move.old_elevator_availability}</h3>
             <h3 className="text-lg ">{convertToMeters(move.old_parking_distance)}m</h3>
             </div>



             <div className="mt-8 text-orange-500 font-bold">New House Detail</div>
             
             <div className="grid grid-cols-3 mt-2 mb-2">
             <h3 className="text-lg font-semibold">Floor No.</h3>
             <h3 className="text-lg font-semibold">Elivator Available</h3>
             <h3 className="text-lg font-semibold">Distance from Elivator/Staircast to truck</h3>
           
             </div>

             <div className="grid grid-cols-3 mt-2 mb-2 ml-2">
             <h3 className="text-lg">{move.new_floor_no}</h3>
             <h3 className="text-lg ">{move.new_elevator_availability}</h3>
             <h3 className="text-lg ">{convertToMeters(move.new_parking_distance)}m</h3>
             </div>

             <div className="grid grid-cols-2 mt-4 mb-6">
             <h3 className="text-lg font-semibold">Inventory Detail</h3>
             <button className="bg-black text-white w-40 ml-72">Edit Inventory Detail</button>
             </div>





             <Accordan move={move}/>



              
              {/* <div className="mt-2">
                {move.items.inventory.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.quantity}</span>
                  </div>
                ))}
              </div> */}
            </div>
          )}

          <hr />
        </div>
      ))}
    </div>
  );
};

export default MoveList;
