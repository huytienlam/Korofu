import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

interface RecipeCardProps {
  id: string;
  title: string;
  contributor: string;
  imageUrl?: string;
  rating: number;
  onRemove?: (id: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ 
  id,
  title, 
  contributor, 
  imageUrl, 
  rating,
  onRemove
}) => {
  const [saved, setSaved] = useState(false);
  const pathname = usePathname();
  const isSavedPage = pathname === "/saved";

  const handleBookmarkClick = () => {
    if (isSavedPage) {
      // Nếu đang ở trang Saved, click vào bookmark sẽ xóa item
      onRemove?.(id);
    } else {
      // Ở các trang khác thì toggle save bình thường
      setSaved(!saved);
    }
  };
  const [showPopup, setShowPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [images, setImages] = useState<string[]>([]);

  // Xử lý chọn ảnh
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };

  // Submit feedback
  const handleSubmit = () => {
    setShowPopup(false);
    setSuccessPopup(true);
    // Reset nếu cần
    setSelectedRating(0);
    setFeedback("");
    setImages([]);
  };

  return (
    <div className="card relative flex items-center gap-4">
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
      <div className="flex flex-col flex-1 pr-14">
        <h2 className="text-2xl font-bold text-[#21120D]">{title}</h2>

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
          {contributor}
        </p>
      </div>

      {/* Nút cố định ở góc phải trên */}
      <div className="absolute top-[20px] right-[18px] flex flex-col gap-2 items-end">
        <button onClick={() => setShowPopup(true)}>
          <Image src="/assets/icon/Feedback.png" alt="Feedback" width={24} height={24} />
        </button>
        <button onClick={handleBookmarkClick}>
          <Image
            src={isSavedPage || saved ? "/assets/icon/Bookmark.png" : "/assets/icon/Bookmark_Default.png"}
            alt="bookmark"
            width={24}
            height={24}
          />
        </button>
      </div>
      {/* Popup Feedback */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[400px] p-6 border-black border-2 rounded-[10px] shadow-[5px_5px_0px_rgba(0,0,0,1)] space-y-4 relative">
            {/* Nút X */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 p-1 rounded-full"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <h2 className="text-2xl font-semibold">Feedback</h2>

            {/* Rating */}
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} onClick={() => setSelectedRating(star)}>
                  <Image
                    src={
                      star <= selectedRating
                        ? "/assets/icon/Star.png"
                        : "/assets/icon/Star_Default.png"
                    }
                    alt="star"
                    width={28}
                    height={28}
                  />
                </button>
              ))}
            </div>

            {/* Feedback text */}
            <textarea
              rows={3}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback..."
              className="w-full border-black border-2 rounded-[10px] shadow-[3px_3px_0px_rgba(0,0,0,1)] p-2"
            ></textarea>

            {/* Add images */}
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-md p-4 cursor-pointer hover:bg-gray-50">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <span className="text-gray-500">+ Add Images</span>
            </label>

            {images.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt="preview"
                    className="w-full h-20 object-cover rounded-md"
                  />
                ))}
              </div>
            )}

            {/* Submit */}
            <div className="flex justify-center ">
              <button
                onClick={handleSubmit}
                className="w-full px-4 py-2 bg-[#FF6D4D] text-[#FFF5CC] border-black border-2 rounded-[10px] shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black font-bold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup Success */}
      {successPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[500px] h-[200px] p-6 text-center space-y-4 relative border-black border-2 rounded-[10px] shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            {/* Nút X */}
            <button
              onClick={() => setSuccessPopup(false)}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-semibold text-center mt-15">
              Your feedback has been successfully submitted!
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;