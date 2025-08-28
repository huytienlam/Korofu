"use client";

import Image from "next/image";
import UserNavbar from "../../components/UserNavbar";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import { colors as tagColors } from "../../data/mockData";
import SavePopup from "../../components/Popups/Save";
import CancelPopup from "../../components/Popups/Cancel";

interface FoodItem {
  name: string;
  color: string;
}

type SetItemsFunction = React.Dispatch<React.SetStateAction<FoodItem[]>>;

export default function FoodPreferences() {
  const [showSavePopup, setShowSavePopup] = useState(false);
  const [showCancelPopup, setShowCancelPopup] = useState(false);

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
    const colorIndex = totalCount % tagColors.length;
    return tagColors[colorIndex];
  };

  const openModal = (setItems: SetItemsFunction) => {
    setActiveSetItems(() => setItems);
    setModalValue("");
    setModalOpen(true);
  };

  const addFood = () => {
    if (modalValue.trim() && activeSetItems) {
      // Trim and limit the text length
      const trimmedName = modalValue.trim().slice(0, 30); // Limit to 30 characters
      const newColor = getNextColor();
      activeSetItems((prev) => [
        ...prev,
        { name: trimmedName, color: newColor },
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
        className="relative w-80 h-[62.5vh]
                  border-2 border-black rounded-2xl
                  shadow-[4px_4px_0_#000] p-4 flex flex-col"
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
        <div className="tags-scroll flex flex-wrap gap-2 content-start overflow-y-auto pr-4 -mr-3 pb-2">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex items-center px-3 py-1 rounded-full border border-black
                          shadow-[2px_2px_0_#000] text-sm group relative
                          ${item.color} break-all max-w-full whitespace-normal`}
              style={{ backgroundColor: item.color }}
              title={item.name}
            >
              <span className="mr-2 font-bold text-black">{item.name}</span>
              <Image
                src="/assets/preferences/X.svg"
                alt="Delete"
                width={14}
                height={14}
                className="cursor-pointer flex-shrink-0"
                onClick={() => handleDelete(setItems, index)}
              />

              {/* Tooltip for long text */}
              {item.name.length > 15 && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                  {item.name}
                </div>
              )}
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
    <div className="min-h-screen">
      <UserNavbar />

      <div className="flex flex-1 max-h-screen">
        <Sidebar />

        <main className="flex-1 flex flex-col mr-10 p-2">
          {/* Title */}
          {/* <h1 className="text-3xl font-extrabold text-[#FFA764] mb-8 text-outline">
            Manage Food Preferences
          </h1> */}

          <div className="flex items-center justify-between mb-6">
            <h1 className="drop-shadow-title-top text-korofu-orange mb-0">
              Manage Food Preferences
            </h1>
            {/* Save and Cancel buttons */}
            <div className="flex align-center justify-center gap-6">
              <button
                className="small-button bg-korofu-yellow"
                onClick={() => setShowSavePopup(true)}
              >
                Save
              </button>
              <button
                className="small-button bg-korofu-gray"
                onClick={() => setShowCancelPopup(true)}
              >
                Cancel
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-row justify-center gap-12 relative">
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

          {/* Modal */}
          {modalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <div className="popup">
                <h2 className="text-2xl mb-10 mt-3 font-semibold text-center">
                  What should we keep off your plate?
                </h2>
                <div className="relative mb-10">
                  <input
                    type="text"
                    value={modalValue}
                    onChange={(e) => setModalValue(e.target.value)}
                    className="border-2 border-black p-2 text-black rounded-lg w-full
                              font-semibold bg-korofu-light-red text-korofu-light-yellow"
                    placeholder="Food"
                    onKeyPress={(e) => e.key === "Enter" && addFood()}
                    maxLength={30}
                  />
                  <div className="text-xs text-gray-500 mt-1 text-right">
                    {modalValue.length}/30
                  </div>
                </div>
                <div className="flex gap-4 justify-end">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="small-button bg-korofu-light-yellow text-korofu-light-red"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addFood}
                    className="small-button bg-korofu-light-red text-korofu-light-yellow"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      {showSavePopup && (
        <SavePopup
          onClose={() => setShowSavePopup(false)}
          profileData={{ dislikes, allergies, restricted }}
        />
      )}
      {showCancelPopup && (
        <CancelPopup onClose={() => setShowCancelPopup(false)} />
      )}
    </div>
  );
}
