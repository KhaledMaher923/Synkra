export const navigationLinks = [
  { id: "solutions", label: "SOLUTIONS", path: "/" },
  { id: "platform", label: "PLATFORM", path: "/platform" },
  {
    id: "resources",
    label: "RESOURCES",
    hasDropdown: true,
    dropdownItems: [
      { id: "testimonials", label: "Testimonials", path: "/#testimonials" },
      { id: "faq", label: "FAQ", path: "/#faq" },
      { id: "about", label: "About Synkra", path: "/about" },
    ],
  },
  { id: "changelog", label: "CHANGELOG", path: "/changelog" },
  { id: "pricing", label: "PRICING", path: "/pricing" },
];
