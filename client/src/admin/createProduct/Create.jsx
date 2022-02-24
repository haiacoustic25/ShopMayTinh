import React from "react";
import CreateLaptop from "./CreateLaptop";
import CreateMouse from "./CreateMouse";
import CreatePC from "./CreatePC";

const Create = (props) => {
  const { selectProp } = props;
  return (
    <div>
      {selectProp && (
        <div>{selectProp.product === "laptop" && <CreateLaptop />}</div>
      )}
      {selectProp && <div> {selectProp.product === "PC" && <CreatePC />}</div>}
      {selectProp && <div> {selectProp.product === "mouse" && <CreateMouse />}</div>}
    </div>
  );
};

export default Create;
