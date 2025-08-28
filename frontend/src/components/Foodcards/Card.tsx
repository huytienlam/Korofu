import React from "react";

interface CardProps {
  title: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
  return (
    <div className="card h-60 w-45 flex flex-col items-center justify-center text-center gap-4 p-4">
      {/* Hình bên trên */}
      <div className="w-30 h-30 bg-gray-200 overflow-hidden flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-lg">
            Img
          </div>
        )}
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-black">{title}</h2>
    </div>
  );
};

export default Card;
