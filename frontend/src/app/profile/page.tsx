"use client";
import React from "react";
import Image from "next/image";
import UserNavbar from "../../components/UserNavbar";
import Sidebar from "../../components/Sidebar";
import { useState, useEffect } from "react";
import SavePopup from "../../components/Popups/Save";

interface ProfileData {
  name: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  address: string;
  gender: string;
  id: string;
}

const ProfilePage = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    id: "",
  });

  const [showSavePopup, setShowSavePopup] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      try {
        setProfileData(JSON.parse(savedProfile));
      } catch (error) {
        console.error("Error parsing saved profile:", error);
      }
    }
  }, []);

  // Input changes
  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Cancel → reset from storage
  const handleCancel = () => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      setProfileData(JSON.parse(savedProfile));
    } else {
      setProfileData({
        name: "",
        dateOfBirth: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        id: "",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <UserNavbar />

      <div className="flex flex-1 max-h-screen">
        <Sidebar />

        <main className="flex-1 mr-10 overflow-y-auto">
          {/* Title */}

          {/* Card Container */}
          <div className="p-2 w-full max-w-5xl mx-auto">
            {/* Avatar Section */}
            <div className="flex items-center justify-between mb-5">
              {/* Left: Avatar + Name */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Image
                    src="/assets/elements/Avatar.png"
                    alt="User Avatar"
                    width={100}
                    height={100}
                    className="rounded-full border-4 border-black shadow-[4px_4px_0_#000]"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold">
                    {profileData.name || "Username"}
                  </h2>
                  <p className="text-lg font-bold">Foodie</p>
                </div>
              </div>

              {/* Right: Buttons */}
              <div className="flex gap-6">
                <button
                  onClick={() => setShowSavePopup(true)} // ✅ open popup
                  className="small-button bg-korofu-yellow"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="small-button bg-korofu-gray"
                >
                  Cancel
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-lg font-bold text-[#21120D] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Username"
                  className="bg-white  border-2 border-black rounded-lg p-3 text-[#21120D] font-medium shadow-[2px_2px_0_#000] focus:outline-none focus:shadow-[4px_4px_0_#000] transition-all"
                />
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col">
                <label className="text-lg font-bold text-[#21120D] mb-2">
                  Date Of Birth
                </label>
                <input
                  type="text"
                  value={profileData.dateOfBirth}
                  onChange={(e) =>
                    handleInputChange("dateOfBirth", e.target.value)
                  }
                  placeholder="20/02/2002"
                  className="bg-white border-2 border-black rounded-lg p-3 text-[#21120D] font-medium shadow-[2px_2px_0_#000] focus:outline-none focus:shadow-[4px_4px_0_#000] transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-lg font-bold text-[#21120D] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="username@example.com"
                  className="bg-white  border-2 border-black rounded-lg p-3 text-[#21120D] font-medium shadow-[2px_2px_0_#000] focus:outline-none focus:shadow-[4px_4px_0_#000] transition-all"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label className="text-lg font-bold text-[#21120D] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="0703648472"
                  className="bg-white border-2 border-black rounded-lg p-3 text-[#21120D] font-medium shadow-[2px_2px_0_#000] focus:outline-none focus:shadow-[4px_4px_0_#000] transition-all"
                />
              </div>

              {/* Address */}
              <div className="flex flex-col md:col-span-2">
                <label className="text-lg font-bold text-[#21120D] mb-2">
                  Address
                </label>
                <input
                  type="text"
                  value={profileData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="227 Nguyen Van Cu, Cho Quan Ward, Ho Chi Minh City"
                  className="bg-white border-2 border-black rounded-lg p-3 text-[#21120D] font-medium shadow-[2px_2px_0_#000] focus:outline-none focus:shadow-[4px_4px_0_#000] transition-all"
                />
              </div>

              {/* Gender */}
              <div className="flex flex-col">
                <label className="text-lg font-bold text-[#21120D] mb-2">
                  Gender
                </label>
                <input
                  type="text"
                  value={profileData.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  placeholder="Male/Female"
                  className="bg-white border-2 border-black rounded-lg p-3 text-[#21120D] font-medium shadow-[2px_2px_0_#000] focus:outline-none focus:shadow-[4px_4px_0_#000] transition-all"
                />
              </div>

              {/* ID */}
              <div className="flex flex-col">
                <label className="text-lg font-bold text-[#21120D] mb-2">
                  ID
                </label>
                <input
                  type="text"
                  value={profileData.id}
                  onChange={(e) => handleInputChange("id", e.target.value)}
                  placeholder="029472947294"
                  className="bg-white border-2 border-black rounded-lg p-3 text-[#21120D] font-medium shadow-[2px_2px_0_#000] focus:outline-none focus:shadow-[4px_4px_0_#000] transition-all"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* ✅ Render SavePopup if active */}
      {showSavePopup && (
        <SavePopup
          onClose={() => setShowSavePopup(false)}
          profileData={profileData} // pass data
        />
      )}
    </div>
  );
};

export default ProfilePage;
