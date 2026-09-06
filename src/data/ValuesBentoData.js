import Invisible from "../assets/icons/invisible.svg";
import Protect from "../assets/icons/protect.svg";
import Branch from "../assets/icons/branch.svg";

const [VBTitle, VBSubtitle] = [
  `What we believe about ops`,
  `Principles that guide every playbook we ship.`,
];
const VBCardList = [
  {
    id: `1`,
    badge: {
      bgColorDark: `#333230`,
      bgColor: `#E4E3DF`,
      icon: Invisible,
    },
    title: `Automation should be invisible`,
    content:
      `The best playbook is the one you forget is running. It handles the complexity so you can focus on creativity.`,
  },
  {
    id: `2`,
    badge: {
      bgColorDark: `#081D5B`,
      bgColor: `#EBF2FD`,
      icon: Protect,
    },
    title: `Reliability is a feature`,
    content: `A workflow that fails silently is worse than no
workflow at all. We build for 99.97% execution
uptime.`,
  },
  {
    id: `3`,
    badge: {
      bgColorDark: `#052E1F`,
      bgColor: `#EDFAF3`,
      icon: Branch,
    },
    title: `PMs should own the Ops`,
    content: `If your product manager can't maintain it, we
haven't done our job. Ops belongs to the product, not just infra.`,
  },
];
export { VBTitle, VBSubtitle, VBCardList };
