export const navigationLinks = [
  { id: "solutions", label: "SOLUTIONS", path: "/" },
  { id: "platform", label: "PLATFORM", path: "/platform" },
  {
    id: "resources",
    label: "RESOURCES",
    hasDropdown: true,
    dropdownItems: [
      { id: "blog", label: "Blog", path: "/blog" },
      { id: "blog-detail", label: "Blog Details", path: "/blog-detail" },
      { id: "about", label: "About Synkra", path: "/about" },
    ],
  },
  { id: "changelog", label: "CHANGELOG", path: "/changelog" },
  { id: "pricing", label: "PRICING", path: "/pricing" },
];
