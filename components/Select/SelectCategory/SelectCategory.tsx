import React from "react";
import Button, { BUTTON_TYPE } from "../../Button/Button";
import {
  GradientOverlay,
  SelectCategoryContainer,
} from "./SelectCategory.styled";

export type Category = {
  icon?: string | React.ReactNode;
  label: string;
  isActive: boolean;
};

export type SelectCategoryProps = {
  categoryList: Category[];
  onClick: () => void;
};

const SelectCategory = ({ categoryList, onClick }: SelectCategoryProps) => {
  return (
    <SelectCategoryContainer className="mb-4">
      <GradientOverlay />
      {categoryList.map((category: Category, index) => (
        <span key={`${category.label}-${index}`} className="mr-2">
          <Button
            id={`${category.label}-${index}`}
            type={
              category.isActive
                ? BUTTON_TYPE.SECONDARY_OUTLINE
                : BUTTON_TYPE.SECONDARY
            }
            label={category.label}
            icon={category.icon}
            onClick={onClick}
          />
        </span>
      ))}
    </SelectCategoryContainer>
  );
};

export default SelectCategory;
