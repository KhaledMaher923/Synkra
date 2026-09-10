export const pageLabel = "synkra pricing";

export const title = "Simple pricing. Serious automation.";

export const subtitle = "Every plan starts with a 14-day Pro trial free, no card. Start running playbooks today and upgrade when Synkra becomes essential to how you ship."

export const paymentOptions = [
    {
        title: "starter",
        monthPayment: 0,
        annualDiscount: 0,
        targetedAudience: "For founders and small teams validating their first playbooks.",
        privileges: [
            "3 active playbooks",
            "1,000 runs/month",
            "2 integrations", 
            "7-day run history"
        ],
        nextAction: "try it free"
    },
    {
        badge:"popular",
        title: "pro",
        monthPayment: 49,
        annualDiscount: 0.3,
        targetedAudience: "For teams shipping reliably and scaling their automation stack.",
        privileges: [
            "Unlimited playbooks",
            "50,000 runs/month",
            "All 50+ integrations", 
            "90-day run history",
            "Visual canvas builder"
        ],
        nextAction: "try it free"
    },
    {
        title: "enterprise",
        monthPayment: "custom",
        annualDiscount: 0,
        targetedAudience: "For teams that need audit-grade reliability, SSO, and dedicated support.",
        privileges: [
            "Unlimited playbook & runs",
            "Custom integrations",
            "SOC 2 Type II reporting", 
            "Dedicated account manager"
        ],
        nextAction: "talk to us"
    }
];