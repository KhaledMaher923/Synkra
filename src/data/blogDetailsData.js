import authorImg from "../assets/images/Marcus Chen.jpg";
import heroImg from "../assets/images/glassy-towers.png";

export const blogDetailsMeta = {
    tag: "SCALABILITY",
    title: "The Architecture of Information: Shaping Digital Experiences.",
    author: "Marcus Chen",
    authorImage: authorImg,
    readTime: "12 min read",
    date: "March 28, 2026",
    heroImage: heroImg,
}

// Each block renders in order inside the article body. `id` on heading
// blocks doubles as the anchor target + scroll-spy target for the "In this article" sidebar nav.
export const blogDetailsBody = [
    {
        type: "paragraph",
        text: "Most teams treat information architecture as a post-launch cleanup task. In reality, the way you structure your data defines the ceiling of your product's operational efficiency.",
    },
    {
        type: "heading",
        id: "the-cost-of-silent-entropy",
        text: "The Cost of Silent Entropy",
    },
    {
        type: "paragraph",
        text: 'When we talk about "ops brain," we aren\'t just talking about automation triggers. We are talking about the semantic layer of your company. Every SaaS team starts with a clean Slack and a clean Stripe. Within six months, the debt begins. "Pro" in Stripe means something different than "Verified" in HubSpot. The signals don\'t match, and the automation breaks.',
    },
    {
        type: "pullquote",
        text: "A workflow that fails silently is worse than no workflow at all. Reliability starts with the names you give your data.",
    },
    {
        type: "heading",
        id: "mapping-the-decision-chain",
        text: "Mapping the Decision Chain",
    },
    {
        type: "paragraph",
        text: "At Synkra, we've analyzed over 14 million runs across 2,400 teams. The most successful teams don't have more complex automations; they have more explicit playbooks. They've mapped their information architecture so that an event in GitHub translates perfectly to a notification in Slack without translation layers.",
    },
    {
        type: "callout",
        text: "Data architecture is not about databases, it's about decision architecture. It's about making sure the right data flows to the right place at the right time.",
        attribution: "The Algorithmic Enterprise, 2025",
    },
    {
        type: "heading",
        id: "structuring-for-scale",
        text: "Structuring for Scale",
    },
    {
        type: "paragraph",
        text: "The transition from a 3-person team to a 50-person product org is where most information architectures collapse. Tribal knowledge is the enemy of automation. When your PM can't look at a playbook and understand exactly why a deal was routed to a specific owner, you haven't built a system—you've built a riddle.",
    },
    {
        type: "orderedList",
        items: [
            {
                title: "Intuitive Layout",
                text: "Clear visual cues guide users, ensuring a seamless and intuitive experience.",
            },
            {
                title: "Streamlined Navigation",
                text: "Easy-to-use navigation ensures users can quickly find the features they need.",
            },
        ],
    },
];

export const blogDetailsTags = ["Workflow Automation", "SaaS Ops", "Product Strategy"];

// Drives the "In this article" sidebar nav — kept separate from the body
// blocks above since it only needs the headings, in reading order.
export const blogDetailsTOC = blogDetailsBody
    .filter((block) => block.type === "heading")
    .map((block) => ({ id: block.id, label: block.text }));

export const blogDetailsCTA = {
    title: "Try Synkra free for 14 days",
    subtitle: "No setup call. No credit card. First playbook in 18 minutes.",
    buttons: {
        primary: "Create an Account",
        secondary: "Talk to our team instead",
    },
    disclaimer: {
        symbol: "*",
        text: "Ship your first live playbook in 10 minutes.",
    },
    };

