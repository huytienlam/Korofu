import React from "react";

export type CategoryType = "recipes" | "restaurants" | "dishes";

interface CategoryNavigationProps {
  currentCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
  showRetry?: boolean;
  onRetry?: () => void;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  currentCategory,
  onCategoryChange,
  showRetry = true,
  onRetry
}) => {
  const getButtonStyle = (category: CategoryType) => {
    const baseStyle = "small-button w-45 font-semibold";
    
    if (currentCategory === category) {
      return `${baseStyle} bg-korofu-gold text-black hover:translate-y-0 cursor-default shadow-[3px_3px_0_#000]`;
    }
    
    return `${baseStyle} bg-korofu-purple`;
  };

  return (
    
    <div className="flex items-center gap-4">
      <button
          onClick={() => onCategoryChange("dishes")}
          className={getButtonStyle("dishes")}
      >
          View Dishes
      </button>
      <button
          onClick={() => onCategoryChange("recipes")}
          className={getButtonStyle("recipes")}
      >
          View Recipes
      </button>
      <button
        onClick={() => onCategoryChange("restaurants")}
        className={getButtonStyle("restaurants")}
      >
        View Restaurants
      </button>
      
      {showRetry && onRetry && (
        <button
          onClick={onRetry}
          className="small-button bg-korofu-pink font-bold"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default CategoryNavigation;
