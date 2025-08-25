import React, { useState } from "react";
import './card.css';

import Image from "next/image";

interface DishCardProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
}

const DishCard: React.FC<DishCardProps> = ({ title, subtitle, imageUrl }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card relative flex items-center gap-4 w-full">
      {/* Hình bên trái */}
      <div className="w-28 h-28 bg-gray-200 flex-shrink-0 overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Img
          </div>
        )}
      </div>

      {/* Nội dung chữ */}
      <div className="flex flex-col flex-1 gap-1">
        <h2 className="text-2xl font-bold text-[#21120D]">{title}</h2>
        <p className="!font-[Quicksand] text-xl leading-tight">{subtitle}</p>
      </div>

      {/* Nút cố định ở góc phải trên */}
      <div className="flex flex-col gap-2 self-start">
        <button>
          <Image src="/assets/icon/close.png" alt="close" width={24} height={24} />
        </button>
        <button onClick={() => setLiked(!liked)}>
          <Image
            src={liked ? "/assets/icon/heart-filled.png" : "/assets/icon/heart-outline.png"}
            alt="heart"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default DishCard;
