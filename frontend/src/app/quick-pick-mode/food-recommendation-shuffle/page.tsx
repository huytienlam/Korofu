"use client";

import Link from "next/link";
import UserNavbar from '../../../components/UserNavbar';
import Sidebar from '../../../components/Sidebar';
import DishCard from '../../../components/Foodcards/Dish';

const dishes = [
    {
      title: "Thai Red Curry",
      subtitle: "Curry paste, coconut milk, meat, Thai basil.",
      imageUrl: "https://takestwoeggs.com/wp-content/uploads/2025/03/Thai-Red-Curry-2.jpg",
    },
    {
      title: "Ramen",
      subtitle: "Broth, noodles, tare, egg, scallions.",
      imageUrl: "https://soomfoods.com/cdn/shop/articles/45_d115125d-8365-4865-af0e-5a8f42b577af_1600x.png?v=1750100505",
    },
    {
      title: "Tacos",
      subtitle: "Tortillas, meat, onion, cilantro, salsa.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDlBVCkK2SizG-nsiurP2phVkoYWRLxpsxw&s",
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

            <div className="flex flex-row justify-between gap-12 mr-10">
              <div className="flex flex-col gap-4">
                {dishes.map((dish, index) => (
                    <DishCard
                    key={index}
                    title={dish.title}
                    subtitle={dish.subtitle}
                    imageUrl={dish.imageUrl}
                    />
                ))}
              </div>
              <div className="flex flex-col justify-center align-center">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row gap-6">
                    <Link href="/quick-pick-mode/loading">
                      <button
                        data-color="Light Red"
                        data-size="Medium"
                        className="medium-button bg-korofu-light-red"
                      >
                        <span className="medium-button-text text-korofu-light-yellow">
                          View Recipes
                        </span>
                      </button>
                    </Link>
                    <Link href="/quick-pick-mode/loading">
                      <button
                        data-color="Light Yellow"
                        data-size="Medium"
                        className="medium-button bg-korofu-light-yellow"
                      >
                        <span className="medium-button-text text-korofu-light-red">
                          View Restaurants
                        </span>
                      </button>
                    </Link>
                  </div>
                  <p className="text-xl text-center">
                    Hmm... not the one?&nbsp;
                    <Link href="/quick-pick-mode/loading">
                      <strong className="underline">Shuffle again!</strong>
                    </Link>
                  </p>
                </div>
              </div>
            </div>

        </main>
      </div>
    </div>
  );
}