import React from "react";

const List = ({ people }) => {
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
              {/* <a href="#">
                <img src="trash-fill.svg" alt="" />
              </a> */}
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
