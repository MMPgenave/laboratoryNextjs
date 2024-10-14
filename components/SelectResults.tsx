import { ItemType } from "@/types";

import React from "react";
import SelectResultItem from "./SelectResultItem";

const SelectResults = ({ results }: { results: ItemType[] }) => {
  return (
    <div className="select-result-container">
      <div className="select-result">
        {results.map((item: ItemType) => {
          const { id, title, icon } = item;
          return <SelectResultItem key={id} title={title} icon={icon} />;
        })}
      </div>
    </div>
  );
};

export default SelectResults;
