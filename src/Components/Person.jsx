import React from "react";

const Person = ({ Name, Surname, Age, Mobile, Email }) => {
  return (
    <div>
      <div>
        <h4>
          My Full name is {Name} {Surname}.
        </h4>
        <p>
          I am <b>{Age}</b> year old and.
        </p>
        <p>
          My Mobile numbe is <b>{Mobile}</b> and email id is <b>{Email}.</b>
        </p>
      </div>
    </div>
  );
};

export default Person;
