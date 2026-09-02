import Analytics from '../assets/images/green-world-map.png'
import INTELLIGENCE from '../assets/images/desktop-screen-green-background.png'
const [FGSTitle, FGSBadge, FGSSubtitle] = [
  "An Ops Brain that Actually Shows its Work",
  "What makes Synkra different",
  "Most tools fire automations and hope for the best. Synkra treats every workflow as a first class system, it listens, decides, acts, and records exactly what happened. So your team can trust the result",
];
const FGSCardList = [
  {
    id: "analytics",
    badge: "ANALYTICS",
    badgeColor:'#EBF2FD',
    badgeTxtColor:'#1A56DB',
    title: "Live Workflow Analytics",
    content:
      "See where work is queuing, which playbooks save the most time, and how many incidents were prevented. Track runs, latency, and failure patterns over time",
    img: Analytics,
     imgTop:false
  },
  {
    id: "recovery",
    badge: "RECOVERY",
    badgeColor:'#EDFAF3',
    badgeTxtColor:'#1B6F4A',
    title: "Built-In Recovery & Replays",
    content: `When something fails, Synkra doesn't go silent. It retries with backoff, logs the error with full context, and alerts the right person. Once fixed, replay the run with one click.`,
  },
  {
    id: "integrations",
    badge: "INTEGRATIONS",
    badgeColor:'#EDFAF3',
    badgeTxtColor:'#1B6F4A',
    title: "50+ Deep SaaS Integrations",
    content: `Native connectors for Slack, Notion, Linear, GitHub, Stripe, HubSpot, Jira, Salesforce, and more. Two-way sync, typed payloads, and opinionated defaults so you don't live in API docs.`,
  },
  {
    id: "ops-intelligence",
    badge: "OPS INTELLIGENCE",
    badgeColor:'#0F766E',
    badgeTxtColor:'#CCFBF1',
    title: `Your tools generate signals.Synkra turns them into decisions.`,
    content: `Synkra takes the logic that currently lives in spreadsheets, Slack threads, and someone's head, and turns it into explicit playbooks. When the right signal fires, Synkra runs the play the same way, every time.`,
    footer: [`No-Code Logic`, `Version Control`],
    img: INTELLIGENCE,
    imgTop:true
  },
  {
    id: "visual-builder",
    badge: "VISUAL BUILDER",
    badgeColor:'#FEF6E7',
    badgeTxtColor:'#92510A',
    title: "Visual Workflow Playbooks",
    content: `Design end-to-end playbooks on a canvas your PMs can own. Define conditions, branches, and fallbacks without code. Engineers stay in the loop, not stuck wiring everything together.`,
  },
  {
    id: "access-control",
    badge: "ACCESS CONTROL",
    badgeColor:'#FEF0F0',
    badgeTxtColor:'#BE1C1C',
    title: "Granular Access & Guardrails",
    content: `Control who can design playbooks, who can publish them, and who can only see outcomes. Ships with sensible defaults for growing teams and scales to stricter enterprise policies.`,
  },
];
export { FGSTitle, FGSBadge, FGSSubtitle, FGSCardList };
