import { PiBuildingOfficeDuotone } from "react-icons/pi";
import Headquarters from "../assets/images/Headquarters.png"
const badge = {
  icon: <PiBuildingOfficeDuotone />,
  text: "ABOUT SYNKRA",
  bgColorDark: "#081D5B",
  bgColor: "#EBF2FD",
  textColor: "#1A56DB",
  textColorDark: "#75A2F0",
};

const content = {
  headline: {
    normal: "Crafting Structural",
    highlight: "Elegance",
  },
  subheadline: `We built Synkra because we couldn't find the tool we actually needed. We believe ops shouldn't be a bottleneck—it should be a brain.`,
};

const visual = {
  title: "Headquarters",
  subtitle: "San Francisco, CA",
  img:Headquarters
};

export { badge, content, visual };
