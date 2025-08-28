"use client";

import UserNavbar from '../../components/UserNavbar';
import Sidebar from '../../components/Sidebar';
import { Video, Image } from 'lucide-react';
import { useState } from 'react';

export default function OurCommunity() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "Username",
      content:
        "Some days just call for a warm bowl of pasta.\nNot fancy, not complicated — just comfort in every bite.\nToday, my mood chose creamy carbonara,\nAnd somehow, everything felt a little softer. 🍝✨",
      images: ["/assets/images/pasta-1.jpg", "/assets/images/pasta-2.jpg"],
    },
  ]);

  const [newPost, setNewPost] = useState({
    username: "Username",
    content: "",
    images: [] as string[],
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const urls = files.map((file) => URL.createObjectURL(file));
      setNewPost((prev) => ({
        ...prev,
        images: [...prev.images, ...urls],
      }));
    }
  };

  const handleSubmit = () => {
    if (!newPost.content.trim() && newPost.images.length === 0) return;
    setPosts([{ ...newPost, id: Date.now() }, ...posts]);
    setNewPost({ username: "Username", content: "", images: [] });
    setIsPopupOpen(false);
  };

  return (
    <div className="min-h-screen">
      <UserNavbar />

      <div className="flex flex-1 max-h-screen">
        <Sidebar />
        
        <main className="flex-1 flex flex-col mr-10 p-2">
          <p className="drop-shadow-title-top text-korofu-blue">Our Community</p>
          {/* Posting Box */}
          <div className="w-[100%] self-stretch px-6 py-6 bg-[#FFF5CC] rounded-2xl shadow-[3px_3px_0px_rgba(0,0,0,1)] outline outline-2 outline-offset-[-2px] outline-black flex flex-col items-center gap-5">
            {/* Post Input */}
            <div className="w-[95%] flex items-center gap-6">
              <div className="size-16 rounded-full overflow-hidden shadow-[5px_5px_0px_rgba(0,0,0,1)] outline outline-2 outline-black">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/elements/Avatar.png"
                  alt="avatar"
                />
              </div>
              <div onClick={() => setIsPopupOpen(true)} className="flex-1 px-4 py-1 bg-white rounded-lg shadow-[3px_3px_0px_rgba(0,0,0,1)] outline outline-2 outline-offset-[-2px] outline-black flex items-center">
                <span className="py-2 flex-1 text-black text-xl font-semibold font-['SFU_Futura'] leading-loose">
                  What are you thinking?
                </span>
              </div>
            </div>

            {/* Options */}
            <div className="w-[480px] flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Video size={36}/>
                <span className="text-black text-xl font-semibold font-['SFU_Futura']">Reel</span>
              </div>

              <div className="flex items-center gap-3">
                <Image size={36}/>
                <span className="text-black text-xl font-semibold font-['SFU_Futura']">Photo/Video</span>
              </div>
            </div>
          </div>

          {/* Post List */}
          {posts.map((post) => (
            <div
              key={post.id}
              className="w-[100%] mt-6 px-6 py-6 bg-white rounded-2xl shadow-[3px_3px_0px_rgba(0,0,0,1)] outline outline-2 outline-offset-[-2px] outline-black flex flex-col gap-6"
            >
              {/* User Info */}
              <div className="flex items-center gap-5 ml-6">
                <div className="size-16 rounded-full overflow-hidden shadow-[5px_5px_0px_rgba(0,0,0,1)] outline outline-2 outline-black">
                  <img
                    className="w-full h-full object-cover"
                    src="/assets/elements/Avatar.png"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-stone-900 text-xl font-bold font-['SFU_Futura']">
                    {post.username}
                  </span>
                  <span className="text-stone-900 text-base font-normal font-['SFU_Futura']">
                    Just now
                  </span>
                </div>
              </div>

              {/* Content */}
              <p className="whitespace-pre-line text-black text-lg font-normal !font-['Quicksand'] ml-6">
                {post.content}
              </p>

              {/* Images */}
              {post.images.length > 0 && (
                <div className="flex justify-center w-full">
                  {post.images.length === 1 ? (
                    <div className="w-[95%] overflow-hidden shadow-[3px_3px_0_#000] border-2 border-black">
                      <img
                        src={post.images[0]}
                        alt="post"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  ) : (
                    <div
                      className={`grid gap-4 w-full ${
                        post.images.length === 2
                          ? "grid-cols-2"
                          : post.images.length === 3
                          ? "grid-cols-3"
                          : "grid-cols-2"
                      }`}
                    >
                      {post.images.map((img, i) => (
                        <div
                          key={i}
                          className="w-[95%] mx-auto h-60 overflow-hidden shadow-[3px_3px_0_#000] border-2 border-black"
                        >
                          <img
                            src={img}
                            alt={`post img ${i}`}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Popup */}
          {isPopupOpen && (
            <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
              <div className="w-[500px] max-w-[90%] px-6 py-5 bg-white rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)] outline outline-2 outline-black flex flex-col gap-6 relative">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold font-['SFU_Futura']">
                    Share Your Stories
                  </h2>
                  <button
                    className="text-2xl font-bold"
                    onClick={() => setIsPopupOpen(false)}
                  >
                    ✕
                  </button>
                </div>

                {/* Input */}
                <textarea
                  value={newPost.content}
                  onChange={(e) =>
                    setNewPost({ ...newPost, content: e.target.value })
                  }
                  placeholder="What's the story behind your meal? Share it with us!"
                  className="w-full h-32 p-3 bg-[#FFF5CC] rounded-xl shadow-[3px_3px_0px_rgba(0,0,0,1)] outline outline-2 outline-black text-base hover:bg-white focus:bg-white"
                />

                {/* Upload Image */}
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-50">
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <span className="text-gray-600 text-lg">+ Add Images</span>
                </label>

                {/* Preview Images */}
                {newPost.images.length > 0 && (
                  <div className="grid grid-cols-3 gap-2">
                    {newPost.images.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`preview-${idx}`}
                        className="w-full h-24 object-cover rounded-lg border"
                      />
                    ))}
                  </div>
                )}

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full h-12 bg-[#FF6D4D] rounded-lg shadow-[3px_3px_0px_rgba(0,0,0,1)] outline outline-2 outline-black text-xl font-bold text-[#FFF5CC] hover:bg-white hover:text-black"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
