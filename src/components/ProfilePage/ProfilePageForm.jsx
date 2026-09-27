import { useEffect, useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import { FaRegSave } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { useAuthApi } from "../../context/AuthApiContext";
import { toast } from 'sonner';

export function ProfilePageForm() {
  const { profile, editProfileInfo } = useAuthApi();
  const { theme } = useTheme();

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (profile && !isEditing) {
      setEmail(profile.username || "");
      setName(profile.name || "");
      setPhone(profile.role || "");
      setBio(profile.bio || "");
    }
  }, [profile, isEditing]);

  const handleCancel = () => {
    if (profile) {
      setName(profile.name || "");
      setPhone(profile.role || "");
      setBio(profile.bio || "");
    }
    setIsEditing(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await editProfileInfo({ bio, name, phone });
      setIsEditing(false);
    } catch (err) {
      console.error("Update process failed:", err.message);
    } finally {
      setLoading(false);
      toast.success('Profile Updated successfully!')
    }
  };

  const getBorderClass = (editing) =>
    editing ? ("border-[#1A56DB]") : (theme=="dark"?"border-[transparent]":"border-[#C3C5D7]");

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-[24px] gap-[16px] w-full  rounded-[12px]"
    >
      <div className="flex justify-between relative lg:hidden">
        <h1 className="text-[18px] font-semibold">Basic Info</h1>
      </div>

      <div className="flex flex-col gap-[6px]">
        <label className={`${theme=='dark'?'text-[white]':'text-[#434654]'} font-medium`}>Email</label>
        <input
          className={`${theme=='dark'?"bg-[#333230] border-[transparent]":"bg-white border-[#C3C5D7]"} border  h-[44px] px-[14px] py-[10px] rounded-[8px]`}
          type="email"
          value={email}
          disabled
        />
      </div>

      <div className="flex flex-col gap-[6px]">
        <label className={`${theme=='dark'?'text-[white]':'text-[#434654]'} font-medium`}>Full Name</label>
        <input
          className={`${theme=='dark'?"bg-[#333230]":"bg-white"} border h-[44px] px-[14px] py-[10px] rounded-[8px] ${getBorderClass(
            isEditing
          )}`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={!isEditing}
        />
      </div>

      <div className="flex flex-col gap-[6px]">
        <label className={`${theme=='dark'?'text-[white]':'text-[#434654]'} font-medium`}>Phone</label>
        <input
          className={`${theme=='dark'?"bg-[#333230]":"bg-white"} border h-[44px] px-[14px] py-[10px] rounded-[8px] ${getBorderClass(
            isEditing
          )}`}
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={!isEditing}
        />
      </div>

      <div className="flex flex-col gap-[6px]">
        <label className={`${theme=='dark'?'text-[white]':'text-[#434654]'} font-medium`}>Bio</label>
        <textarea
          className={`${theme=='dark'?"bg-[#333230]":"bg-white"} border h-[88px] px-[14px] py-[10px] rounded-[8px] ${getBorderClass(
            isEditing
          )}`}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          disabled={!isEditing}
        />
      </div>

      <div className="flex gap-[8px] items-center">
        {isEditing ? (
          <>
            <button
              type="button"
              onClick={handleCancel}
              className={`text-[16px] p-[8px] rounded-lg font-medium  transition lg:px-[20px] lg:text-[16px] ${
                theme === "dark"
                  ? "border text-white hover:bg-gray-800"
                  : "border-[#E4E3DF] text-black hover:bg-gray-50"
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`flex items-center gap-[5px] text-[16px] text-white p-[8px] rounded-lg font-normal hover:bg-blue-700 transition lg:px-[20px] lg:text-[16px] ${
                theme === "dark" ? "bg-[#0C2B7B]" : "bg-[#1A56DB]"
              }`}
            >
              <FaRegSave />
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className={`flex items-center gap-[5px] text-[16px] text-white p-[8px] rounded-lg font-normal hover:bg-blue-700 transition lg:px-[20px] grow justify-center lg:grow-0 ${
              theme === "dark" ? "bg-[#0C2B7B] " : "bg-[#1A56DB]"
            }`}
          >
            <RiPencilLine />
            Edit
          </button>
        )}
      </div>
    </form>
  );
}