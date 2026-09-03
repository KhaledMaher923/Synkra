import Analytics from '../assets/images/green-world-map.png'
import INTELLIGENCE from '../assets/images/desktop-screen-green-background.png'
import starIcon from '../assets/icons/star.svg'
import analyticsIcon from '../assets/icons/analytics.svg'
import recoveryIcon from '../assets/icons/recovery.svg'
import opsIntelligenceIcon from '../assets/icons/ops-intelligence.svg'
import visualBuilderIcon from '../assets/icons/visual-builder.svg'
import integrationsIcon from '../assets/icons/integrations.svg'
import accessControlIcon from '../assets/icons/access-control.svg'


const [FGSTitle, FGSBadge, FGSSubtitle,StarIcon] = [
  "An Ops Brain that Actually Shows its Work",
  "What makes Synkra different %",
  "Most tools fire automations and hope for the best. Synkra treats every workflow as a first class system, it listens, decides, acts, and records exactly what happened. So your team can trust the result",
  starIcon
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
     imgTop:false,
     icon:analyticsIcon
  },
  {
    id: "recovery",
    badge: "RECOVERY",
    badgeColor:'#EDFAF3',
    badgeTxtColor:'#1B6F4A',
    title: "Built-In Recovery & Replays",
    content: `When something fails, Synkra doesn't go silent. It retries with backoff, logs the error with full context, and alerts the right person. Once fixed, replay the run with one click.`,
    icon:recoveryIcon
  },
  {
    id: "integrations",
    badge: "INTEGRATIONS",
    badgeColor:'#EDFAF3',
    badgeTxtColor:'#1B6F4A',
    title: "50+ Deep SaaS Integrations",
    content: `Native connectors for Slack, Notion, Linear, GitHub, Stripe, HubSpot, Jira, Salesforce, and more. Two-way sync, typed payloads, and opinionated defaults so you don't live in API docs.`,
icon:integrationsIcon
  },
  {
     id: "ops-intelligence",
    badge: "OPS INTELLIGENCE",
    badgeColor:'#0F766E',
    badgeTxtColor:'#CCFBF1',
    title: "Your tools generate signals."+
    "\n"+ "Synkra turns them into decisions.",
    content: `Synkra takes the logic that currently lives in spreadsheets, Slack threads, and someone's head, and turns it into explicit playbooks. When the right signal fires, Synkra runs the play the same way, every time.`,
    footer: [`No-Code Logic`, `Version Control`],
    img: INTELLIGENCE,
    imgTop:true,
    icon:opsIntelligenceIcon
  },
  {
    id: "visual-builder",
    badge: "VISUAL BUILDER",
    badgeColor:'#FEF6E7',
    badgeTxtColor:'#92510A',
    title: "Visual Workflow Playbooks",
    content: `Design end-to-end playbooks on a canvas your PMs can own. Define conditions, branches, and fallbacks without code. Engineers stay in the loop, not stuck wiring everything together.`,
icon:visualBuilderIcon 
  },
  {
    id: "access-control",
    badge: "ACCESS CONTROL",
    badgeColor:'#FEF0F0',
    badgeTxtColor:'#BE1C1C',
    title: "Granular Access & Guardrails",
    content: `Control who can design playbooks, who can publish them, and who can only see outcomes. Ships with sensible defaults for growing teams and scales to stricter enterprise policies.`,
    icon:accessControlIcon
  },
];
export { FGSTitle, FGSBadge, FGSSubtitle, FGSCardList,StarIcon};
