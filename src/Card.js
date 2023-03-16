import React from "react";
// import "tachyons";


const Card = ({name, email, id}) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw shadow-5">
      
      <img alt="robots" src={`https://robohash.org/${id}?200*200?set=set4` }/>
      <div>
        <h2> {name} </h2>
        <p>{email}</p>
      </div>
    </div> 
  );
};

export default Card;

