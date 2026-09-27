import { useState, useEffect } from "react";

import { useTheme } from "../../context/ThemeContext";
import { useAuthApi } from "../../context/AuthApiContext";

import { RiCameraSwitchLine } from "react-icons/ri";
import { toast } from "sonner";

import axios from "axios";

export function ProfilePageImage() {
  const { theme } = useTheme();
  const { profile, editProfileImage } = useAuthApi(); // Should contain updated user state

  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isImageChanging, setIsImageChanging] = useState(false);

  // Manage memory-safe local image previews
  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(objectUrl);

    // Free memory when component unmounts or selected file changes
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  const handleImageDelete = async (e) => {
    setLoading(true);
    try {
      await editProfileImage(null);
      setIsImageChanging(false);
      setSelectedFile(null);
    } catch (error) {
      console.error("Deleting process failed:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image", selectedFile);
    const apiKey = "5998cd58facb8614b5f94c85e09d6d7e";
    formData.append("key", apiKey);

    const url = `https://api.imgbb.com/1/upload`;
    try {
      // Step 1: Upload to ImgBB (Using environment variables instead of hardcoding)

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const uploadedUrl = response.data.data.url;
      console.log(uploadedUrl);
      await editProfileImage(uploadedUrl);
      setIsImageChanging(false);
      setSelectedFile(null);
    } catch (error) {
      console.error("Upload process failed:", error);
    } finally {
      setLoading(false);
      toast.success("Profile Image Updated successfully!");
    }
  };

  // Render logic...
  const currentDisplayAvatar = previewUrl || profile?.image;

  return (
    <div
      className={`shadow-lg lg:shadow-none w-full ${theme == "dark" ? "bg-[transparent] " : "lg:bg-[#FFFFFF]"} flex flex-col items-center gap-[16px] rounded-[12px]`}
    >
      <div
        className={`relative p-[24px] ${theme == "dark" ? "bg-[transparent] " : "bg-[#FFFFFF]"} w-full flex flex-col lg:flex-row items-center gap-[12px] rounded-[12px]`}
      >
        <div className="shadow-lg w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={currentDisplayAvatar}
            alt="Profile Avatar"
          />
        </div>

        <div className="flex justify-center lg:grow gap-[5px]">
          {!isImageChanging ? (
            <div className="flex items-center flex-col lg:flex-row lg:grow gap-[8px]">
              <button
                onClick={() => setIsImageChanging(true)}
                className={`flex  hover:bg-[#1A56DB] hover:text-[#FCFCFD] transition lg:flex items-center gap-[5px] text-[16px] p-[8px] px-[20px] rounded-lg ${theme === "dark" ? "bg-[#0C2B7B] " : " border border-1 border-[#C3C5D7]"}`}
              >
                <RiCameraSwitchLine />
                Change Photo
              </button>

              {profile?.image && (
                <button
                  onClick={handleImageDelete}
                  className={`flex items-center gap-[5px]  text-[16px]  p-[8px] rounded-lg font-normal hover:bg-rose-600 hover:text-[#FCFCFD] transition  lg:pr-[20px] lg:pl-[20px] lg:text-[16px] `}
                >
                  Remove
                </button>
              )}
            </div>
          ) : (
            <form
              onSubmit={handleUpload}
              className="flex flex-col lg:grow items-center lg:items-start gap-[8px]"
            >
              <div className="flex flex-col  lg:flex-row gap-[10px]">
                <input
                  type="file"
                  accept="image/*"
                  disabled={loading}
                  onChange={handleFileSelect}
                  className={`w-50 text-[14px] p-[8px] rounded-lg border text-slate-500
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        ${theme === "dark" ? "file:text-white" : "file:text-black"}

        
        hover:file:bg-blue-500
        hover:file:text-blue-50
        file:transition`}
                />
                <button
                  type="submit"
                  disabled={loading || !selectedFile}
                  className={` text-white p-[8px] px-[20px] rounded-lg disabled:opacity-50 transition hover:bg-blue-500
                    ${theme === "dark" ? "bg-[#0C2B7B]" : "bg-[#1A56DB]"}
                    `}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
              <div
                className={`${theme == "dark" ? "text-[#A09E97]" : "text-[#434654]"} text-center`}
              >
                Recommended size: JPG, PNG or WebP, minimum 400x400px.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
