import React, { useState } from "react";

import Image from "next/image";
import { MapPin } from 'lucide-react';

interface RestaurantCardProps {
  name: string;
  location: string;
  imageUrl?: string;
  rating: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ name, location, imageUrl, rating }) => {
  const [saved, setSaved] = useState(false);

  return (
    <div className="card relative flex items-center gap-4">
      {/* Hình bên trái */}
      <div className="w-28 h-28 bg-gray-200 flex-shrink-0 overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Img
          </div>
        )}
      </div>

      {/* Nội dung chữ */}
      <div className="flex flex-col flex-1 pr-14">
        <h2 className="text-2xl font-bold text-[#21120D]">{name}</h2>

        {/* Rating stars */}
        <div className="flex items-center gap-1 my-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Image
                key={star}
                src={star <= rating ? "/assets/icon/Star.png" : "/assets/icon/Star_Default.png"}
                alt="star"
                width={24}
                height={24}
            />
          ))}
        </div>

        {/* Subtitle with location */}
        <p className="text-lg text-[#21120D]/80 flex items-center gap-1">
          <MapPin size={18} />
          {location}
        </p>
      </div>

      {/* Nút cố định ở góc phải trên */}
      <div className="absolute top-[20px] right-[18px] flex flex-col gap-2 items-end">
        <button>
          <Image src="/assets/icon/Feedback.png" alt="Feedback" width={24} height={24} />
        </button>
        <button onClick={() => setSaved(!saved)}>
          <Image
            src={saved ? "/assets/icon/Bookmark.png" : "/assets/icon/Bookmark_Default.png"}
            alt="bookmark"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
