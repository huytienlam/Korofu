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
    const baseStyle = "px-6 py-3 border-2 border-black rounded-2xl font-semibold transition-all duration-200";
    
    if (currentCategory === category) {
      return `${baseStyle} bg-korofu-purple text-black shadow-[3px_3px_0_#000]`;
    }
    
    return `${baseStyle} bg-korofu-yellow text-black shadow-[3px_3px_0_#000] hover:shadow-[0px_0px_0_#000] hover:translate-x-1 hover:translate-y-1`;
  };

  return (
    
    <div className="flex items-center gap-4 mb-6">
        <button
            onClick={() => onCategoryChange("recipes")}
            className={getButtonStyle("recipes")}
        >
            View Recipes
        </button>
      <button
        onClick={() => onCategoryChange("dishes")}
        className={getButtonStyle("dishes")}
      >
        View Dishes
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
          className="px-6 py-3 bg-korofu-orange border-2 border-black rounded-2xl font-semibold text-[#FFF5CC] 
                   shadow-[3px_3px_0_#000] hover:shadow-[0px_0px_0_#000] 
                   hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default CategoryNavigation;
