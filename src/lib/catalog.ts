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
