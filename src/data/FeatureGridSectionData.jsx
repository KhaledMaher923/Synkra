import Analytics from "../assets/images/green-world-map.png";
import intelligence from "../assets/images/desktop-screen-green-background.png";

import {
  PiShootingStarDuotone,
  PiEngineDuotone,
  PiRecycleDuotone,
  PiBrainDuotone,
  PiPaletteDuotone,
  PiLockKeyDuotone,
} from "react-icons/pi";

import { TbSwitchHorizontal } from "react-icons/tb";

const [FGSTitle, FGSBadge, FGSSubtitle, StarIcon] = [
  "An Ops Brain that Actually Shows its Work",
  "What makes Synkra different %",
  "Most tools fire automations and hope for the best. Synkra treats every workflow as a first class system, it listens, decides, acts, and records exactly what happened. So your team can trust the result",
  <PiShootingStarDuotone />,
];
const FGSCardList = [
  {
    id: "analytics",
    badge: {
      text: "ANALYTICS",
      bgColorDark: "#081D5B",
      textColorDark: "#75A2F0",
      bgColor: "#EBF2FD",
      textColor: "#1A56DB",
      icon: <PiEngineDuotone className="text-[14px]" />,
    },
    title: "Live Workflow Analytics",
    content:
      "See where work is queuing, which playbooks save the most time, and how many incidents were prevented. Track runs, latency, and failure patterns over time",
    img: Analytics,
    imgTop: false,
  },
  {
    id: "recovery",
    badge: {
      text: "RECOVERY",
      bgColorDark: "#052E1F",
      textColorDark: "#EDFAF3",
      bgColor: "#EDFAF3",
      textColor: "#1B6F4A",
      icon: <PiRecycleDuotone className="text-[14px]" />,
    },
    title: "Built-In Recovery & Replays",
    content: `When something fails, Synkra doesn't go silent. It retries with backoff, logs the error with full context, and alerts the right person. Once fixed, replay the run with one click.`,
  },
  {
    id: "integrations",
    badge: {
      text: "INTEGRATIONS",
      bgColorDark: "#052E1F",
      textColorDark: "#EDFAF3",
      bgColor: "#EDFAF3",
      textColor: "#1B6F4A",
      icon: <TbSwitchHorizontal className="text-[14px]" />,
    },
    title: "50+ Deep SaaS Integrations",
    content: `Native connectors for Slack, Notion, Linear, GitHub, Stripe, HubSpot, Jira, Salesforce, and more. Two-way sync, typed payloads, and opinionated defaults so you don't live in API docs.`,
  },
  {
    id: "ops-intelligence",
    badge: {
      text: "OPS INTELLIGENCE",
      bgColorDark: "#134E4A",
      textColorDark: "#5EEAD4",
      bgColor: "#0F766E",
      textColor: "#CCFBF1",
      icon: <PiBrainDuotone className="text-[14px]" />,
    },
    title:
      "Your tools generate signals." +
      "\n" +
      "Synkra turns them into decisions.",
    content: `Synkra takes the logic that currently lives in spreadsheets, Slack threads, and someone's head, and turns it into explicit playbooks. When the right signal fires, Synkra runs the play the same way, every time.`,
    footer: [`No-Code Logic`, `Version Control`],
    img: intelligence,
    imgTop: true,
  },
  {
    id: "visual-builder",
    badge: {
      text: "VISUAL BUILDER",
      bgColorDark: "#4D3308",
      textColorDark: "#FEF6E7",
      bgColor: "#FEF6E7",
      textColor: "#92510A",
      icon: <PiPaletteDuotone className="text-[14px]" />,
    },
    title: "Visual Workflow Playbooks",
    content: `Design end-to-end playbooks on a canvas your PMs can own. Define conditions, branches, and fallbacks without code. Engineers stay in the loop, not stuck wiring everything together.`,
  },
  {
    id: "access-control",
    badge: {
      text: "ACCESS CONTROL",
      bgColorDark: "#4D1212",
      textColorDark: "#FEF0F0",
      bgColor: "#FEF0F0",
      textColor: "#BE1C1C",
      icon: <PiLockKeyDuotone className="text-[14px]" />,
    },
    title: "Granular Access & Guardrails",
    content: `Control who can design playbooks, who can publish them, and who can only see outcomes. Ships with sensible defaults for growing teams and scales to stricter enterprise policies.`,
  },
];
export { FGSTitle, FGSBadge, FGSSubtitle, FGSCardList, StarIcon };
