"use client";
import React from "react";
import SelectResults from "./SelectResults";
import { useSelectorContext } from "@/context/SelectorProvider";
import OutsideClickHandler from "react-outside-click-handler";
import { ItemType } from "@/types";

const Select = () => {
  const { isOpen, setIsOpen, selectedItem, setItems, Items } = useSelectorContext();
  function onKeydownHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      const inputElement = e.target as HTMLInputElement;
      const inputValue = inputElement.value.trim();
      if (inputValue !== "") {
        const id: string = new Date().getTime().toString();
        const temp: ItemType[] = [...Items];
        temp.push({ id, title: inputValue, icon: "bi bi-moon" });
        setItems(temp);
        inputElement.value = "";
      }
    }
  }
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        console.log("outside clicked");
        setIsOpen(false);
      }}
    >
      <div className="main">
        <div
          onClick={() => {
            if (!isOpen) {
              setIsOpen(true);
            }
          }}
          className="selector"
        >
          {!isOpen && <div>{selectedItem.title}</div>}
          {isOpen && <input onKeyDown={(e) => onKeydownHandler(e)} placeholder="Type Something..." autoFocus />}
          <i className={`bi bi-chevron-${!isOpen ? "down" : "up"} arrow`}></i>
        </div>
        {isOpen && <SelectResults results={Items} />}
      </div>
    </OutsideClickHandler>
  );
};

export default Select;
