import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  if (people.length === 0) {
    return (
      <main>
        <section className="container">
          <h3>No Birthdays</h3>
          <button onClick={() => setPeople(data)}>refresh</button>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} removePerson={removePerson} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
