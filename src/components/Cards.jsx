import React from "react";

const Cards = (props) => {
  console.log(props.photo);

  return (
    <div className="mr-5 mb-5 bg-white text-black inline-block p-3 text-center rounded">
      <img className="h-32 w-32 rounded-full mb-3" src={props.photo} alt="" />
      <h1 className="text-2xl font-semibold mb-4">{props.username} Surname</h1>
      <h4 className="text-blue-700">{props.proff}</h4>
      <h2>
        {props.city}, {props.age}
      </h2>
      <button className="mt-5 py-3 px-5 bg-emerald-700 text-white rounded">
        Add friend
      </button>
    </div>
  );
};

export default Cards;
