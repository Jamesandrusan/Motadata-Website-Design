export interface OdTheme {
  mode: "dark" | "light";

  // Inline style values
  rootBg: string;
  cardShadow: string;
  patternFill: string;

  // Text hierarchy
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textMuted: string;
  textFaint: string;

  // Card / surface
  cardBg: string;
  cardBorder: string;

  // Input fields
  inputBg: string;
  inputBorder: string;
  inputText: string;
  placeholder: string;

  // Logo
  logoClass: string;

  // Chips / badges
  chipBg: string;
  chipBorder: string;
  iconContainerBg: string;

  // Dividers
  divider: string;

  // Tooltips
  tooltipBg: string;
  tooltipText: string;

  // Module icon states
  moduleIconDefault: string;
  moduleIconHover: string;

  // Switcher bar
  switcherBg: string;
  switcherBorder: string;
  switcherText: string;
}

export const OD_DARK: OdTheme = {
  mode: "dark",
  rootBg: "#050506",
  cardShadow: "0 20px 40px rgba(0,0,0,0.3)",
  patternFill: "#fff",
  textPrimary: "text-white",
  textSecondary: "text-neutral-300",
  textTertiary: "text-neutral-400",
  textMuted: "text-neutral-500",
  textFaint: "text-neutral-600",
  cardBg: "bg-white/[0.03]",
  cardBorder: "border-white/[0.08]",
  inputBg: "bg-white/[0.03]",
  inputBorder: "border-white/[0.08]",
  inputText: "text-white",
  placeholder: "placeholder-neutral-500",
  logoClass: "text-white",
  chipBg: "bg-white/[0.03]",
  chipBorder: "border-white/[0.08]",
  iconContainerBg: "bg-white/[0.06]",
  divider: "bg-neutral-800",
  tooltipBg: "bg-neutral-800",
  tooltipText: "text-neutral-300",
  moduleIconDefault: "text-neutral-500",
  moduleIconHover: "group-hover:text-neutral-300",
  switcherBg: "bg-neutral-900/90",
  switcherBorder: "border-neutral-700",
  switcherText: "text-neutral-400 hover:text-neutral-200",
};

export const OD_LIGHT: OdTheme = {
  mode: "light",
  rootBg: "#F8F9FA",
  cardShadow: "0 20px 40px rgba(0,0,0,0.06)",
  patternFill: "#000",
  textPrimary: "text-gray-900",
  textSecondary: "text-gray-600",
  textTertiary: "text-gray-500",
  textMuted: "text-gray-400",
  textFaint: "text-gray-300",
  cardBg: "bg-white",
  cardBorder: "border-gray-200",
  inputBg: "bg-gray-50",
  inputBorder: "border-gray-200",
  inputText: "text-gray-900",
  placeholder: "placeholder-gray-400",
  logoClass: "text-gray-900",
  chipBg: "bg-gray-50",
  chipBorder: "border-gray-200",
  iconContainerBg: "bg-gray-100",
  divider: "bg-gray-200",
  tooltipBg: "bg-gray-800",
  tooltipText: "text-gray-200",
  moduleIconDefault: "text-gray-400",
  moduleIconHover: "group-hover:text-gray-600",
  switcherBg: "bg-white/90",
  switcherBorder: "border-gray-300",
  switcherText: "text-gray-400 hover:text-gray-700",
};
