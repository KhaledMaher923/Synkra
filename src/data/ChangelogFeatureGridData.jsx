import { GoHistory } from "react-icons/go";
import { PiCraneDuotone } from "react-icons/pi";
import { PiPaletteDuotone } from "react-icons/pi";
import { PiDatabaseDuotone } from "react-icons/pi";

const badge = {
  icon: <GoHistory />,
  text: "CHANGELOG",
  bgColorDark: "#081D5B",
  bgColor: "#EBF2FD",
  textColor: "#1A56DB",
  textColorDark: "#75A2F0",
};

const content = {
  headline: {
    normal: "What's new in Synkra",
  },
  subheadline: `Refining modern workflows with precision and intelligence. Explore the evolution of Synkra as we build the future of collaborative roductivity.`,
};
const timelineDataList = [
  {
    id: "the-intelligence-update",
    badge: {
      icon: null,
      text: "v6.0 - Current System",
      bgColorDark: "#134E4A",
      bgColor: "#0F766E",
      textColor: "#CCFBF1",
      textColorDark: "#5EEAD4",
    },
    title: "The Intelligence Update",
    released: "Released: May 24, 2024",
    content: [
      {
        category: "NEW FEATURES",
        points: [
          `Enhanced Automation Engine: Native support for multi-step conditional workflows and cross-platform hooks.`,
          `Synkra AI v2: Context-aware assistant capable of drafting entire project briefs based on raw notes.`,
        ],
      },
      {
        category: "IMPROVEMENTS",
        points: [
          "Integrated Design System documentation directly within the editor for real-time brand alignment.",
        ],
      },
    ],
  },
  {
    id: "digital-architect",
    badge: {
      icon: <PiCraneDuotone />,
      text: "v5.0",
      bgColorDark: "#333230",
      bgColor: "#E4E3DF",
      textColor: "#131210",
      textColorDark: "#FCFCFD",
    },
    title: "Digital Architect",
    released: "Released: February 12, 2024",
    content: [
      {
        category: "NEW FEATURES",
        points: [
          "Visual Overhaul: Complete redesign of the interface focusing on focus-modes and structural logic layers.",
          "Real-time Observation: Live tracking of infrastructure health and workflow throughput.",
        ],
      },
    ],
  },
  {
    id: "editorial-studio",
    badge: {
      icon: <PiPaletteDuotone />,
      text: "v4.0",
      bgColorDark: "#333230",
      bgColor: "#E4E3DF",
      textColor: "#131210",
      textColorDark: "#FCFCFD",
    },
    title: "Editorial Studio",
    released: "Released: October 05, 2023",
    content: [
      {
        category: "NEW FEATURES",
        points: [
          "Editorial Studio: A dedicated space for long-form documentation and collaborative writing.",
        ],
      },
      {
        category: "BUG FIXES",
        points: [
          "Resolved precision UI component rendering issues on high-DPI displays.",
        ],
      },
    ],
  },
  {
    id: "foundation-era",
    badge: {
      icon: <PiDatabaseDuotone />,
      text: "v1.0 - v3.0",
      bgColorDark: "#333230",
      bgColor: "#E4E3DF",
      textColor: "#131210",
      textColorDark: "#FCFCFD",
    },
    title: "Foundation Era",
    released: "2022 - Early 2023",
    content: [
      {
        category: "CORE INFRASTRUCTURE",
        points: [
          `The building blocks that made Synkra possible. Initial focus was on stability, core workflow triggers, and secure data handling.`,
          `Initial platform launch with workspace management.`,
          `Basic workflow triggers and integration layer.`,
        ],
        
      },
    ],
  },
];
export { badge, content, timelineDataList };
