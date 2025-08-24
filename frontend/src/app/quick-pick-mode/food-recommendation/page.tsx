"use client";

import Link from "next/link";
import UserNavbar from '../../../components/UserNavbar';
import Sidebar from '../../../components/Sidebar';
import DishCard from '../../../components/Foodcards/Dish';

const dishes = [
    {
      title: "Spaghetti Carbonara",
      subtitle: "Creamy Italian pasta with bacon",
      imageUrl: "/assets/images/spaghetti.jpg",
    },
    {
      title: "Sushi Set",
      subtitle: "Fresh salmon, tuna, and more",
      imageUrl: "/assets/images/sushi.jpg",
    },
    {
      title: "Pho Bo",
      subtitle: "Traditional Vietnamese beef noodle soup",
      imageUrl: "/assets/images/pho.jpg",
    },
];

export default function QuickPick() {
  return (
    <div className="min-h-screen">
      <UserNavbar username="Username" />
      
      <div className="flex flex-1 max-h-screen">
        <Sidebar />
        
        <main className="flex-1 flex flex-col">

            <div className="drop-shadow-title-top text-korofu-aqua">
              The taste universe conspired to bring you…
            </div>

            <div className="">
            
            {/* Map over the array */}
            {dishes.map((dish, index) => (
                <DishCard
                key={index}
                title={dish.title}
                subtitle={dish.subtitle}
                imageUrl={dish.imageUrl}
                />
            ))}
            </div>

        </main>
      </div>
    </div>
  );
}