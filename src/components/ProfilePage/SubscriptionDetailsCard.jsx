import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useAuthApi } from "../../context/AuthApiContext";

export function SubscriptionDetailsCard() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { userSubscription, upgradeSubscription, cancelSubscription } = useAuthApi();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  
  const isDark = theme === "dark";

  if (!userSubscription) {
    return (
      <div className={`w-full mt-4 p-8 rounded-xl border flex flex-col items-center justify-center min-h-[200px] shadow-sm
        ${isDark ? "bg-[transparent] ring-2 ring-blue-900/50 text-[#CBC9C2] border-gray-700" : "bg-white text-medium-gray border-gray-200"}`}
      >
        <p className="animate-pulse">Loading subscription details...</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className={`w-full mt-4 p-8 rounded-xl border flex flex-col gap-2 shadow-sm
      ${isDark ? "bg-[transparent] ring-2 ring-blue-900/50 text-[#CBC9C2] border-gray-700" : "bg-white text-medium-gray border-gray-200"}`}
    >
      <h3 className="uppercase text-[12px] font-bold tracking-wider mb-2">Subscription Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div>
          <p className="text-[12px] mb-1">Current Plan</p>
          <p className={`font-bold text-[24px] font-header capitalize ${isDark ? "text-white" : "text-dark-theme"}`}>
            {userSubscription.planType}
          </p>
        </div>
        
        <div>
          <p className="text-[12px] mb-1">Status</p>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium uppercase
            ${userSubscription.status.includes("Trial") 
              ? "bg-[#F4A016] text-dark-theme" 
              : "bg-green-200 text-straight-green"}`}>
            {userSubscription.status}
          </span>
        </div>
        
        <div>
          <p className="text-[12px] mb-1">Trial Ends</p>
          <p className={`text-[16px] font-medium ${isDark ? "text-white" : "text-dark-theme"}`}>
            {formatDate(userSubscription.trialEndsAt)}
          </p>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        {userSubscription.planType === 'Standard' ? (
          <button
            type="button"
            onClick={() => navigate('/pricing')}
            className={`flex items-center justify-center gap-2 text-[12px] font-medium px-6 h-10 capitalize border border-gray-200 rounded-lg transition-transform duration-100 ease-in-out hover:scale-105 active:scale-95
              ${isDark ? "hover:bg-gray-800 hover:text-white" : "hover:bg-gray-100"}`}
          >
            Upgrade to Pro
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShowCancelModal(true)}
            disabled={isProcessing}
            className={`flex items-center justify-center gap-2 text-[12px] font-medium px-6 h-10 capitalize border border-red-500 text-red-500 rounded-lg transition-transform duration-100 ease-in-out hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed hover:bg-red-50 dark:hover:bg-red-900/30`}
          >
            {isProcessing ? "Processing..." : "Cancel Subscription"}
          </button>
        )}
      </div>

      {showCancelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className={`w-full max-w-sm rounded-2xl shadow-2xl p-6 text-center transform transition-all ${isDark ? "bg-[#111827] ring-1 ring-gray-700" : "bg-white"}`}>
            <div className="text-5xl mb-4 animate-bounce">🥺</div>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>Cancel Subscription?</h3>
            <p className={`text-sm mb-6 ${isDark ? "text-gray-400" : "text-gray-500"}`}>Are you sure you want to cancel? You will lose access to your Pro workspace features.</p>
            <div className="flex w-full gap-3">
              <button
                type="button"
                onClick={() => setShowCancelModal(false)}
                className="flex-1 py-2.5 rounded-xl font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Keep Plan
              </button>
              <button
                type="button"
                onClick={async () => {
                  setIsProcessing(true);
                  await cancelSubscription(userSubscription.id);
                  setIsProcessing(false);
                  setShowCancelModal(false);
                }}
                className="flex-1 py-2.5 rounded-xl font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
