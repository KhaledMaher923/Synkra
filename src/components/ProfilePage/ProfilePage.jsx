import { useTheme } from "../../context/ThemeContext";
import { ProfilePageForm } from "./ProfilePageForm";
import { ProfilePageHeader } from "./ProfilePageHeader";
import { ProfilePageImage } from "./ProfilePageImage";
import { SubscriptionDetailsCard } from "./SubscriptionDetailsCard";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
export function ProfilePage() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [cookies] = useCookies(["email", "access", "refresh"]);

  useEffect(() => {
    if (!(cookies.email && cookies.access && cookies.refresh)) {
      navigate("/", { replace: true });
    }
  }, []);
  if (!(cookies.email && cookies.access && cookies.refresh)) return null;
  return (
    <section
      className={`flex flex-col items-center gap-[16px] w-[100%] p-[16px] relative lg:pt-[40px] lg:pb-[40px] lg:pr-[150px] lg:pl-[150px] 2xl:px-50
    ${theme === "dark" ? "bg-dark-theme text-semi-white" : "bg-[#F5F7F9] text-dark-theme"} 
    `}
    >
      <ProfilePageHeader />
      <div className={`lg:shadow-lg w-[100%] ${theme=="dark"?" bg-[transparent] ring-2 ring-blue-900/50  " :" lg:bg-[#FFFFFF] "} flex flex-col items-center gap-[16px] p-[24px] rounded-[12px] `}>
        <ProfilePageImage />
        <ProfilePageForm />
        <SubscriptionDetailsCard />
      </div>
    </section>
  );
}
