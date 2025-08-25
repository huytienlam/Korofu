"use client";

import Link from "next/link";
import UserNavbar from '../../../components/UserNavbar';
import Sidebar from '../../../components/Sidebar';
import DishCard from '../../../components/Foodcards/Dish';

const dishes = [
    {
      title: "Pizza",
      subtitle: "Crust, mozzarella cheese, tomato sauce.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg",
    },
    {
      title: "Pasta",
      subtitle: "Pasta, sauce, meat, veggies, cheese.",
      imageUrl: "https://www.allrecipes.com/thmb/IrY572TXic4UXXVn8EetsarI3S0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-269500-creamy-garlic-pasta-Beauties-4x3-f404628aad2a435a9985b2cf764209b5.jpg",
    },
    {
      title: "Fried Chicken",
      subtitle: "Chicken, batter.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7uXAnhdOWJpu4Maf6a9yjc1RikPvL0nq_Q&s",
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

            <div className="flex flex-row justify-between gap-12 mr-10 bg-red-200">
              <div className="flex flex-col gap-4 bg-blue-100">
                {dishes.map((dish, index) => (
                    <DishCard
                    key={index}
                    title={dish.title}
                    subtitle={dish.subtitle}
                    imageUrl={dish.imageUrl}
                    />
                ))}
              </div>
              <div className="flex flex-col justify-center align-center bg-pink-300">
                <div className="flex flex-col gap-5 bg-orange-100">
                  <div className="flex flex-row gap-6 bg-green-200">
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
                    <Link href="/quick-pick-mode/loading-shuffle">
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