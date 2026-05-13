import type { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Tan Le",
  alias: "Accelra",
  title: "Tan Le - Accelra Technical Portfolio",
  description:
    "Computer Science Student at UIT building AI, Data, MLOps, and Web Systems.",
  url: "https://accel.io.vn",
  email: "noobtan77@gmail.com",
  location: "Ho Chi Minh City, Vietnam",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Acceleratorer" },
  { label: "Kaggle", href: "https://www.kaggle.com/accelra" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tan-le-accel77/" },
];
