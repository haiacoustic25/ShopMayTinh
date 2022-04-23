import React from "react";
import CreateLaptop from "./CreateLaptop";

const Create = (props) => {
  const { selectProp } = props;
  return (
    <div>
      {selectProp && (
        <div>{selectProp.product === "laptop" && <CreateLaptop />}</div>
      )}
    </div>
  );
};

export default Create;
