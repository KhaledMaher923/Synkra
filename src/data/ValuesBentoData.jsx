
import { AiTwotoneEyeInvisible  } from "react-icons/ai";
import { PiShieldCheckeredDuotone } from "react-icons/pi";
import { GoGitBranch } from "react-icons/go";


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
   icon: <AiTwotoneEyeInvisible  className='text-[#131210] hidden-icon text-[22px]'/>,
      iconDark:<AiTwotoneEyeInvisible  className='text-[#FCFCFD] hidden-icon-dark text-[22px]'/>

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
      icon: <PiShieldCheckeredDuotone className='text-[#1A56DB] text-[22px]' />,
      iconDark: <PiShieldCheckeredDuotone className='text-[#75A2F0] text-[22px]' />,
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
      icon: <GoGitBranch className='text-[#1B6F4A] text-[22px]'/>,
      iconDark: <GoGitBranch className='text-[#EDFAF3] text-[22px]'/>,
    },
    title: `PMs should own the Ops`,
    content: `If your product manager can't maintain it, we
haven't done our job. Ops belongs to the product, not just infra.`,
  },
];
export { VBTitle, VBSubtitle, VBCardList };
