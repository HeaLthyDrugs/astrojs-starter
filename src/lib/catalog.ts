import AppWindowIcon from "@hugeicons/core-free-icons/AppWindowIcon"
import Briefcase01Icon from "@hugeicons/core-free-icons/Briefcase01Icon"
import DashboardSquare01Icon from "@hugeicons/core-free-icons/DashboardSquare01Icon"
import MobileNavigator01Icon from "@hugeicons/core-free-icons/MobileNavigator01Icon"
import Rocket01Icon from "@hugeicons/core-free-icons/Rocket01Icon"
import ShoppingCart01Icon from "@hugeicons/core-free-icons/ShoppingCart01Icon"
import WebProgrammingIcon from "@hugeicons/core-free-icons/WebProgrammingIcon"

export const CATEGORY_META = {
  Websites: {
    icon: WebProgrammingIcon,
    label: "Websites",
    description: "Clear business websites built for trust, speed, and visibility.",
  },
  "Web Apps": {
    icon: AppWindowIcon,
    label: "Web Apps",
    description: "Practical product interfaces shaped around real workflows.",
  },
  Dashboards: {
    icon: DashboardSquare01Icon,
    label: "Dashboards",
    description: "Internal tools and reporting views designed for daily use.",
  },
  "Mobile Apps": {
    icon: MobileNavigator01Icon,
    label: "Mobile Apps",
    description: "Mobile-first product concepts for testing ideas with users.",
  },
  "E-commerce": {
    icon: ShoppingCart01Icon,
    label: "E-commerce",
    description: "Stores and product flows built for usability and conversion.",
  },
} as const

export const DEFAULT_CATEGORY_META = {
  icon: Briefcase01Icon,
  label: "Catalog",
  description: "Well-scoped product options for different business needs.",
}

export const COMPLEXITY_META = {
  Basic: {
    icon: Rocket01Icon,
    description:
      "A focused build with clear requirements, fast delivery, and a practical launch scope.",
  },
  Moderate: {
    icon: AppWindowIcon,
    description:
      "A more tailored product with custom flows, added integrations, and deeper planning.",
  },
  Complex: {
    icon: DashboardSquare01Icon,
    description:
      "A larger platform effort with advanced functionality, multiple workflows, and product-level depth.",
  },
} as const

export const CATALOG_CARD_IMAGES = {
  "admin-dashboard": {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "Analytics dashboard interface on a desktop screen.",
    objectPosition: "center",
  },
  "booking-system": {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Appointment and booking workflow displayed on a laptop.",
    objectPosition: "center",
  },
  "business-website": {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern business website layouts shown on a desktop monitor.",
    objectPosition: "center",
  },
  "crm-dashboard": {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    alt: "Team reviewing CRM-style reports and customer data on a screen.",
    objectPosition: "center",
  },
  "ecommerce-website": {
    src: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    alt: "E-commerce product browsing experience on a tablet device.",
    objectPosition: "center",
  },
  "landing-page": {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    alt: "Marketing landing page design process on a laptop display.",
    objectPosition: "center",
  },
  "mobile-app-mvp": {
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    alt: "Mobile app interface shown on a smartphone screen.",
    objectPosition: "center",
  },
  "portfolio-website": {
    src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    alt: "Creative portfolio website presented on a laptop.",
    objectPosition: "center",
  },
  "restaurant-website": {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Restaurant website and menu browsing experience.",
    objectPosition: "center",
  },
  "saas-mvp": {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    alt: "SaaS product workspace viewed on a desktop screen.",
    objectPosition: "center",
  },
} as const
