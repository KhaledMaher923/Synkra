import { IoClose } from "react-icons/io5";
import { HiOutlineSearch, HiOutlineHome, HiOutlineChartSquareBar, HiOutlineDocumentText, HiOutlineClipboardList, HiOutlineChatAlt2, HiOutlineTag, HiOutlineViewList, HiOutlineShieldCheck, HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaHeadset } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext.jsx";
import lightLogo from "../../assets/icons/synkra-logo-light.svg";
import darkLogo from "../../assets/icons/synkra-logo-dark.svg";

export default function SideDrawer({ isOpen, onClose }) {
  const { theme } = useTheme();

  return (
    <>
      {/* Background Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer Container (Width 336px, Radius 5px, 1px Dashed border #1A56DB) */}
      <div
        className={`fixed top-0 left-0 h-full w-[336px] max-w-[85vw] z-50 transform transition-transform duration-300 ease-in-out flex flex-col
          rounded-r-[5px] border-r border-dashed border-[#1A56DB]
          ${theme === "dark" ? "bg-[#131210] text-[#FCFCFD]" : "bg-[#FCFCFD] text-[#131210]"}
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Drawer Header with Close Button */}
        <div className="flex items-center justify-between p-6">
          <a href="/" aria-label="Synkra Home" className="flex items-center">
            <img
              src={theme === "dark" ? darkLogo : lightLogo}
              alt="Synkra"
              className="h-auto w-[115px] transition-opacity duration-200"
            />
          </a>
          <button onClick={onClose} className="rounded-md p-2 transition-colors hover:bg-gray-200 dark:hover:bg-[#1A3D91]">
            <IoClose className="w-6 h-6 text-[#78766F]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6 flex flex-col gap-6 no-scrollbar">
          
          {/* Search Bar */}
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${theme === "dark" ? "border-zinc-800 bg-zinc-900" : "border-gray-200 bg-white"}`}>
            <HiOutlineSearch className="w-5 h-5 text-[#78766F]" />
            <input 
              type="text" 
              placeholder="Search Menu" 
              className={`w-full bg-transparent border-none focus:outline-none text-[14px] font-sans ${theme === "dark" ? "text-white placeholder:text-zinc-600" : "text-black placeholder:text-gray-400"}`} 
            />
          </div>

          {/* MAIN MENU */}
          <div className="flex flex-col gap-2">
            <div className="text-[11px] font-bold text-[#131210] dark:text-[#FCFCFD] uppercase tracking-wider mb-1">Main Menu</div>
            <a href="#dashboard" className={`flex items-center gap-3 px-4 py-3 rounded-[8px] font-sans text-[14px] font-medium transition-colors ${theme === "dark" ? "bg-[#0C2B7B] text-[#75A2F0]" : "bg-[#EBF2FD] text-[#1A56DB]"}`}>
              <HiOutlineHome className="w-5 h-5" />
              Dashboard
            </a>
            <a href="#activity" className="flex items-center gap-3 px-4 py-2 rounded-[8px] font-sans text-[14px] font-normal text-[#78766F] transition-colors hover:bg-gray-100 dark:hover:bg-[#1A3D91] dark:hover:text-[#FCFCFD]">
              <HiOutlineChartSquareBar className="w-5 h-5" />
              Activity Log
            </a>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col gap-2">
            <div className="text-[11px] font-bold text-[#131210] dark:text-[#FCFCFD] uppercase tracking-wider mb-1">Content</div>
            <a href="#blog" className="flex items-center justify-between px-4 py-2 rounded-[8px] font-sans text-[14px] font-normal text-[#78766F] transition-colors hover:bg-gray-100 dark:hover:bg-[#1A3D91] dark:hover:text-[#FCFCFD]">
              <div className="flex items-center gap-3"><HiOutlineDocumentText className="w-5 h-5" /> Blog Posts</div>
              <span className="w-4 h-4 bg-gray-200 dark:gray-200-800 rounded-full flex items-center justify-center text-[10px]">8</span>
            </a>
            <a href="#changelog" className="flex items-center gap-3 px-4 py-2 rounded-[8px] font-sans text-[14px] font-normal text-[#78766F] transition-colors hover:bg-gray-100 dark:hover:bg-[#1A3D91] dark:hover:text-[#FCFCFD]">
              <HiOutlineClipboardList className="w-5 h-5" /> Changelog
            </a>
            <a href="#testimonials" className="flex items-center justify-between px-4 py-2 rounded-[8px] font-sans text-[14px] font-normal text-[#78766F] transition-colors hover:bg-gray-100 dark:hover:bg-[#1A3D91] dark:hover:text-[#FCFCFD]">
              <div className="flex items-center gap-3"><HiOutlineChatAlt2 className="w-5 h-5" /> Testimonials</div>
              <span className="w-4 h-4 bg-gray-200 dark:gray-200-800 rounded-full flex items-center justify-center text-[10px]">3</span>
            </a>
            <a href="#pricing" className="flex items-center gap-3 px-4 py-2 rounded-[8px] font-sans text-[14px] font-normal text-[#78766F] transition-colors hover:bg-gray-100 dark:hover:bg-[#1A3D91] dark:hover:text-[#FCFCFD]">
              <HiOutlineTag className="w-5 h-5" /> Pricing
            </a>
            <a href="#faq" className="flex items-center gap-3 px-4 py-2 rounded-[8px] font-sans text-[14px] font-normal text-[#78766F] transition-colors hover:bg-gray-100 dark:hover:bg-[#1A3D91] dark:hover:text-[#FCFCFD]">
              <HiOutlineViewList className="w-5 h-5" /> FAQ
            </a>
          </div>

          {/* WORKSPACE */}
          <div className="flex flex-col gap-2">
            <div className="text-[11px] font-bold text-[#131210] dark:text-[#FCFCFD] uppercase tracking-wider mb-1">Workspace</div>
            <a href="#roles" className="flex items-center gap-3 px-4 py-2 rounded-[8px] font-sans text-[14px] font-normal text-[#78766F] transition-colors hover:bg-gray-100 dark:hover:bg-[#1A3D91] dark:hover:text-[#FCFCFD]">
              <HiOutlineShieldCheck className="w-5 h-5" /> User Roles
            </a>
            <a href="#about" className="flex items-center gap-3 px-4 py-2 rounded-[8px] font-sans text-[14px] font-normal text-[#78766F] transition-colors hover:bg-gray-100 dark:hover:bg-[#1A3D91] dark:hover:text-[#FCFCFD]">
              <HiOutlineOfficeBuilding className="w-5 h-5" /> About Synkra
            </a>
          </div>

          {/* Need Help Widget */}
          <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-[#EBF2FD] to-white dark:from-[#081D5B] dark:to-[#131210] border border-gray-100 dark:border-zinc-800">
            <FaHeadset className="w-6 h-6 text-[#1A56DB] dark:text-[#75A2F0] mb-3" />
            <h4 className="font-sans font-bold text-[14px] text-[#1A56DB] dark:text-[#75A2F0] mb-1">Need Help?</h4>
            <p className="font-sans text-[12px] text-[#514F4A] dark:text-[#CBC9C2]">Contact Customer Service</p>
          </div>

        </div>
      </div>
    </>
  );
}