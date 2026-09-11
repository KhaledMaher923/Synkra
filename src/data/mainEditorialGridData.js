import article1Img from '../assets/images/chip.png';
import article2Img from '../assets/images/code2.png';
import article3Img from '../assets/images/data-analysis.png';
import article4Img from '../assets/images/meeting.jpg';

export const mainEditorialGridData = [
  {
    id: 1,
    tag: "OPS STRATEGY",
    title: "The 5 workflows every SaaS team should automate first.",
    description: "The real gains aren't in the flashy overhauls, but in targeting those repetitive tasks that drain your team's time. We're talking about reclaiming those lost hours. Here's a proven automation sequence to get started.",
    author: "Elena Marsh",
    readTime: "12 min read",
    date: "March 28, 2026",
    image: article1Img,
    isFeatured: false
  },
  {
    id: 2,
    tag: "PRODUCT UPDATES",
    title: "Synkra AI v2: Event-based triggers & 3x faster runs.",
    description: "Synkra AI v2 is here, and it's a game-changer. We've completely overhauled our trigger engine based on your feedback. Discover how these changes make Synkra faster and more responsive.",
    author: "Dev Team",
    readTime: "12 min read",
    date: "March 28, 2026",
    image: article2Img,
    isFeatured: false
  },
  {
    id: 3,
    tag: "SCALABILITY",
    title: "Zapier vs Make vs Synkra: The honest breakdown.",
    description: "We surveyed 40 teams who migrated from other platforms to understand their reasons for switching to Synkra. Here's an unedited look at their responses, highlighting the key benefits and improvements they experienced.",
    author: "Sam Okafor",
    readTime: "10 min read",
    date: "April 5, 2026",
    image: article3Img,
    isFeatured: false
  },
  {
    id: 4,
    tag: "CULTURE",
    title: "Why PMs should own the ops, not just the roadmap.",
    description: "In the quest for peak efficiency, the chasm between product vision and engineering execution the infamous 'Ops Abyss' often spells the doom of velocity. We're diving deep into how a culture of shared ownership over internal tools and infrastructure acts as the bedrock for superior external product experiences.",
    author: "Sam Okafor",
    readTime: "10 min read",
    date: "April 5, 2026",
    image: article4Img,
    isFeatured: true
  }
];

export const newsletterData = {
  tag: "NEWSLETTER",
  title: "Ops thinking, once a week. No noise.",
  description: "Join 4,000+ engineers and product leaders receiving our weekly teardown of the best SaaS ops practices.",
  placeholder: "work@email.com",
  buttonText: "Subscribe"
};

export const paginationData = {
  currentStart: 1,
  currentEnd: 5,
  totalItems: 24,
  currentPage: 1,
  totalPages: 5
};