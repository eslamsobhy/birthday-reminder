import React, { useState } from "react";

const List = ({ people }) => {
  // const [persons, setPersons] = useState(people);

  // const removeItem = (curId) => {
  //   people.filter((person) => {
  //     const { id } = person;
  //     let newpeople = [];
  //     if (id !== curId) {
  //       newpeople.push(person);
  //     }
  //     // setPersons(newpeople);
  //     console.log(newpeople);
  //   });
  // };

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
                <img src="trash-fill.png" alt="" />
              </a> */}
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
