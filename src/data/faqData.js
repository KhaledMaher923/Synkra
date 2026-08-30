const [FAQTitle,FAQSubtitle]=['Questions Teams Ask Before Trusting Synkra.','Your technical architecture questions, answered.'];
const FAQList =  [
  {
    id: 'faq-zapier-difference',
    question: 'How is Synkra different from Zapier or Make?',
    answer:
      'Unlike traditional automation platforms, Synkra is built for deep integration and scalability. It offers visual workflow orchestration with lower execution latency, developer-friendly customization, and transparent pricing that doesn\'t scale exponentially as your automation volume grows.',
  },
  {
    id: 'faq-no-code',
    question: 'Do I need to write code to use Synkra?',
    answer:
      'Not at all. Synkra provides an intuitive drag-and-drop visual builder that allows non-technical users to build complex automations easily. However, if you are a developer, you can write custom JavaScript or Python scripts inside any node for maximum flexibility.',
  },
  {
    id: 'faq-setup-time',
    question: 'How long does setup actually take?',
    answer:
      'You can launch your first automation in under 5 minutes using our pre-built integration templates. For custom enterprise workflows connecting multiple APIs, setup typically takes less than an hour from connecting your apps to going live.',
  },
  {
    id: 'faq-workflow-failure',
    question: 'What happens if a workflow fails halfway?',
    answer:
      'Synkra features automated error recovery and retry logic. If a third-party API goes down, Synkra safely pauses the workflow, alerts you via notification, and lets you resume from the exact point of failure without losing data or creating duplicate records.',
  },
  {
    id: 'faq-data-security',
    question: 'Is my data secure?',
    answer:
      'Security is our highest priority. All data in transit and at rest is encrypted using AES-256 and TLS 1.3 standards. Synkra is SOC2 compliant, GDPR compliant, and never stores or sells your operational data beyond executing your active workflows.',
  },
  {
    id: 'faq-plan-cancellation',
    question: 'Can we cancel or change plans anytime?',
    answer:
      'Yes, absolutely. You can upgrade, downgrade, or cancel your subscription at any time directly from your account settings with zero hidden cancellation fees or long-term lock-in contracts.',
  },
];
export {FAQList, FAQTitle, FAQSubtitle};