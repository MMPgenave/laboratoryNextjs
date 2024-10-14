"use client";
import React from "react";
import { useSelectorContext } from "@/context/SelectorProvider";

const SelectResultItem = ({ title, icon }: { title: string; icon: string }) => {
  const { selectedItem, setSelectedItem, setIsOpen } = useSelectorContext();

  return (
    <div
      className={`select-result-item  ${selectedItem.title === title && "active"}`}
      onClick={() => {
        setSelectedItem({ title });
        setIsOpen(false);
      }}
    >
      <div>
        <div>{title}</div>
        <i className={icon}></i>
      </div>
      {selectedItem.title === title && <i className={`bi bi-check2 check-mark`}></i>}
    </div>
  );
};

export default SelectResultItem;
