import Card from "./Card";

import React from "react";

const CardArrary = ({robots}) => {
  const cardList = robots.map((index, user) => {
    return (
      <Card
        key={index}
        id={robots[user].id}
        name={robots[user].name}
        email={robots[user].email}
      />
    );
  });

  return (
    <div>
    
      {cardList}
    </div>
  );
};

export default CardArrary;
