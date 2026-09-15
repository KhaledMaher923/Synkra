export const passwordRequirements = [
  { id: 'length', label: '8+ characters' },
  { id: 'uppercase', label: 'Uppercase letter' },
  { id: 'number', label: 'Number (0-9)' },
  { id: 'special', label: 'Special symbol' },
];

export const OAUTH_PROVIDERS = [
  {
    id: 'google',
    label: 'Google',
    icon: 'google',
  },
];

export const authMetaData = {
  signIn: {
    badge: 'ZERO-TRUST NODE 01',
    version: 'V3.4.12 SECURED',
    title: 'Welcome back to',
    brandName: 'Synkra',
    subtitle: 'Sign in to orchestrate your distributed workflows and sovereign infrastructure.',
    dividerText: 'OR CONTINUE WITH EMAIL',
  },
  signUp: {
    badge: 'WORKSPACE SETUP',
    title: 'Register Account',
    dividerText: 'OR REGISTER WITH WORK EMAIL',
  },
};

export const buttons = {
  signIn: {
    primary: 'Sign In to workspace',
    secondary: 'Email me a one-time link',
    subtitle: 'Don’t have an account?',
    colored: 'Create an account',
    },
    signUp: {
    primary: 'Create Free Workspace',
    secondary: 'Already have an account?',
    colored: 'Sign in to Synkra',
    },
};