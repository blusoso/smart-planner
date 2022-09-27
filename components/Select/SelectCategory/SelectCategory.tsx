import React from "react";
import Button, { BUTTON_TYPE } from "../../Button/Button";
import { SelectCategoryContainer } from "./SelectCategory.styled";

export type Category = {
  icon: string | React.ReactNode;
  label: string;
  isActive: boolean;
};

export type SelectCategoryProps = {
  categoryList: Category[];
};

const SelectCategory = ({ categoryList }: SelectCategoryProps) => {
  return (
    <SelectCategoryContainer className="my-3">
      {categoryList.map((category: Category, index) => (
        <span key={`${category.label}-${index}`} className="mr-2">
          <Button
            id={`${category.label}-${index}`}
            type={BUTTON_TYPE.SECONDARY_OUTLINE}
            label={category.label}
            icon={category.icon}
            isActive={category.isActive}
          />
        </span>
      ))}
    </SelectCategoryContainer>
  );
};

export default SelectCategory;
