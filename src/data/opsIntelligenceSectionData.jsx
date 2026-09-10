import { PiFlowerLotusDuotone, PiArrowUpRight } from "react-icons/pi";


const OISBadge = {
    text: "OPS INTELLIGENCE",
    icon: <PiFlowerLotusDuotone />
};

const OISHeading = "Your tools generate signals.\nSynkra turns them into decisions.";

const OISDescription = {
    bold: "Synkra",
    text: " takes the logic that currently lives in spreadsheets, Slack threads, and someone's head, and turns it into explicit playbooks. When the right signal fires, Synkra runs the play the same way, every time.",
};

const OISFeatureList = [
    {
        id: "feature-assign",
        text: "Automatically assign new sign-ups to sales reps based on custom criteria.",
    },
    {
        id: "feature-alert",
        text: "Alert your team when key accounts show signs of reduced engagement.",
    },
    {
        id: "feature-offboard",
        text: "Automatically resolve Jira tickets and update user access after offboarding.",
    },
];

const OISCta = {
    label: "Browse all playbook templates",
    url: "/templates",
    icon: <PiArrowUpRight />,
};

const OISQuote = {
    tag: "// LOGIC_CORE_V2.1",
    text: "Every playbook in Synkra is a compiled graph, ensuring zero-overhead execution even at scale.",
};

export { OISBadge, OISHeading, OISDescription, OISFeatureList, OISCta, OISQuote };
