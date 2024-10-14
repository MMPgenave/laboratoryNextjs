"use client";
import React, { useState, createContext, useContext } from "react";
import { ItemType } from "@/types";
import { items } from "@/constants/SelectItem";
interface SelectorContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedItem: { title: string };
  setSelectedItem: (item: { title: string }) => void;
  Items: ItemType[];
  setItems: (newItem: ItemType[]) => void;
}
const SelectorContext = createContext<null | SelectorContextType>(null);
const SelectorProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ title: "Select" });
  const [Items, setItems] = useState(items);
  return (
    <SelectorContext.Provider value={{ isOpen, setIsOpen, selectedItem, setSelectedItem, Items, setItems }}>
      {children}
    </SelectorContext.Provider>
  );
};

export default SelectorProvider;
export function useSelectorContext() {
  return useContext(SelectorContext);
}
