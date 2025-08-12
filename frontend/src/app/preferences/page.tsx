"use client";

import Image from "next/image";
import UserNavbar from "../../components/UserNavbar";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

const tagColors = ["#E9B349", "#FF91E8", "#FFFFFF"];

interface FoodItem {
  name: string;
  color: string;
}

type SetItemsFunction = React.Dispatch<React.SetStateAction<FoodItem[]>>;

export default function FoodPreferences() {
  // Count state for total tags to determine color
  const [totalCount, setTotalCount] = useState(3); // Starting with 3 initial items

  // State for each card's tags
  const [dislikes, setDislikes] = useState<FoodItem[]>([
    // Index 0 % 3 = 0 → #E9B349
  ]);
  const [allergies, setAllergies] = useState<FoodItem[]>([
    { name: "Peanut", color: tagColors[0] },
    { name: "Shrimp", color: tagColors[1] },
  ]);
  const [restricted, setRestricted] = useState<FoodItem[]>([
    { name: "Milk", color: tagColors[2] },
  ]);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalValue, setModalValue] = useState("");
  const [activeSetItems, setActiveSetItems] = useState<SetItemsFunction | null>(
    null
  );

  const getNextColor = () => {
    const colorIndex = totalCount % 3;
    return tagColors[colorIndex];
  };

  const openModal = (setItems: SetItemsFunction) => {
    setActiveSetItems(() => setItems);
    setModalValue("");
    setModalOpen(true);
  };

  const addFood = () => {
    if (modalValue.trim() && activeSetItems) {
      const newColor = getNextColor();
      activeSetItems((prev) => [
        ...prev,
        { name: modalValue.trim(), color: newColor },
      ]);
      setTotalCount((prev) => prev + 1);
      setModalOpen(false);
      setModalValue("");
    }
  };

  const handleDelete = (setItems: SetItemsFunction, index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
    setTotalCount((prev) => prev - 1);
  };

  const renderCard = (
    bgColor: string,
    items: FoodItem[],
    setItems: SetItemsFunction,
    badgeSrc: string
  ) => (
    <div className="relative flex flex-col items-center">
      {/* Card */}
      <div
        className="relative w-[260px] h-[450px] border-2 border-black rounded-2xl shadow-[8px_8px_0_#000] p-4 flex flex-col"
        style={{ backgroundColor: bgColor }}
      >
        {/* Add button */}
        <div
          className="absolute top-3 right-3 cursor-pointer z-10"
          onClick={() => openModal(setItems)}
        >
          <Image
            src="/assets/preferences/plusSquare.svg"
            alt="Add"
            width={24}
            height={24}
            className="scale-110"
          />
        </div>

        {/* Tags Container */}
        <div className="pt-12 flex flex-wrap gap-2 content-start overflow-y-auto cursor-pointer">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-1 rounded-full border border-black shadow-[2px_2px_0_#000] text-sm"
              style={{ backgroundColor: item.color }}
            >
              <span className="mr-2 font-extrabold text-black">
                {item.name}
              </span>
              <Image
                src="/assets/preferences/X.svg"
                alt="Delete"
                width={14}
                height={14}
                className="cursor-pointer"
                onClick={() => handleDelete(setItems, index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Badge */}
      <div className="absolute -bottom-10 right-[-25px]">
        <Image
          src={badgeSrc}
          width={140}
          height={140}
          alt="badge"
          className="scale-130"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FFF5F1]">
      <UserNavbar username="Username" />

      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-6">
        <Sidebar />

        <main className="flex-1 p-6 rounded-3xl">
          {/* Title */}
          {/* <h1 className="text-3xl font-extrabold text-[#FFA764] mb-8 text-outline">
            Manage Food Preferences
          </h1> */}

          <h1 className="text-3xl font-extrabold text-[#21120D] mb-8 ">
            Manage Food Preferences
          </h1>

          {/* Cards */}
          <div className="flex flex-row justify-center gap-12 mb-8 relative">
            {renderCard(
              "#FF6D4D",
              dislikes,
              setDislikes,
              "/assets/preferences/dislikes.png"
            )}
            {renderCard(
              "#91A8EC",
              allergies,
              setAllergies,
              "/assets/preferences/allergies.png"
            )}
            {renderCard(
              "#4FD3C6",
              restricted,
              setRestricted,
              "/assets/preferences/restricted.png"
            )}
          </div>
          {/* Save and Cancel buttons */}
          <div className="flex justify-center mt-15 gap-25">
            <button className="bg-[#FF914D] w-32 border-2 border-black px-8 py-3 font-bold text-[#21120D] shadow-[2px_2px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              Save
            </button>
            <button className="bg-[#E8E8E8] w-32 border-2 border-black px-8 py-3 font-bold text-[#21120D] shadow-[2px_2px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              Cancel
            </button>
          </div>
          {/* Modal */}
          {modalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <div className="bg-white border-2 border-black p-6 rounded-xl shadow-[6px_6px_0_#000] w-[300px] flex flex-col gap-4">
                <h2 className="text-lg font-bold text-black">
                  Add Food Preference
                </h2>
                <input
                  type="text"
                  value={modalValue}
                  onChange={(e) => setModalValue(e.target.value)}
                  className="border-2 border-black p-2 text-black rounded-lg"
                  placeholder="Enter food name"
                  onKeyPress={(e) => e.key === "Enter" && addFood()}
                />
                <div className="flex gap-4 justify-end">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 bg-gray-300 border-2 border-black rounded-lg font-bold text-black shadow-[2px_2px_0_#000] hover:shadow-[1px_1px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addFood}
                    className="px-4 py-2 bg-[#FF914D] border-2 border-black rounded-lg font-bold text-black shadow-[2px_2px_0_#000] hover:shadow-[1px_1px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
