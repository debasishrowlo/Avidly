export const calendlyLink = "https://calendly.com/alisonvidler/15-min-chat"

export const pages = [
  { name: "About", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Resources", link: "/resources" },
  { name: "Contact", link: "/contact" },
] as const

export type PageName = typeof pages[number]["name"]