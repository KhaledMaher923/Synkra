import { useTheme } from "../../context/ThemeContext";



export function ProfilePageHeader() {
  const { theme } = useTheme();
  return (
    <div className=" border-b-2  border-b-[#E3E2E4] flex self-start pb-[24px] justify-between w-[100%] hidden lg:flex ">
      <div className="flex flex-col">
        <h1 className="text-[32px] font-bold font-header">Profile & Account</h1>
        <p className={`${theme=="dark"?"text-[#A09E97]":"text-[#434654]"}`}>
          Manage your public information, credentials, and profile presence.
        </p>
      </div>
    
    </div>
  );
}
