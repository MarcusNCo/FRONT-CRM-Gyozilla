import React, { useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import "./Menu.css";

const Menu = () => {
  const [value, setValue] = useState(null);
  const justifyOptions = [
    { label: "Menu Enfant", value: "left" },
    { label: "Menu Petits Prix", value: "Right" },
    { label: "Menu Decouverte", value: "Center" },
    { label: "Menu Gourmand", value: "Justify" },
  ];

  const justifyTemplate = (option) => {
    return <p>{option.label}</p>;
  };

  return (
    <>
      <div className="flex justify-content-center mt-5 divSelectMenu">
        <SelectButton
          value={value}
          onChange={(e) => setValue(e.value)}
          itemTemplate={justifyTemplate}
          optionLabel="value"
          options={justifyOptions}
          className="selectMenu"
        />
      </div>
    </>
  );
};
export default Menu;
