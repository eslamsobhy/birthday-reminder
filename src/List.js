import React, { useState } from "react";

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        const { id, image, name, age } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
              <a href="#" onClick={() => removePerson(id)}>
                <img src="trash-fill.png" alt="" />
              </a>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
