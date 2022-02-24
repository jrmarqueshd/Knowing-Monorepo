import { useState } from "react";
import { Button } from "@jrmarqueshd/common";
import { entities } from "@jrmarqueshd/helpers";

function App() {
  const [personData, setPersonData] = useState<entities.interfaces.Person>();

  const { person } = entities;

  const handlePerson = () => {
    setPersonData({
      name: "Junior Marques", 
      age: 20, 
      gender: "Male"
    });
  }

  return (
    <div>
      {personData && (
        <>
          <div>Name: {person.getName(personData)}</div>
          <div>Age: {person.getAge(personData)}</div>
          <div>Gender, {person.getGender(personData)}</div>
        </>
      )}

      <Button onClick={handlePerson} label="Get Person" color="black" />
    </div>
  );
}

export default App;
