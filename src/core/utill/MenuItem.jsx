import IconBxHelpCircle from "../icon/IconBxHelpCircle";
import IconFormatLetterMatches from "../icon/IconFormatLetterMatches";
import IconKeyboard from "../icon/IconKeyboard";
import IconUser from "../icon/IconUser";
import IconHome from "../icon/IconHome";
import IconLiveLine from "../icon/IconLiveLine";
import IconIconGroup from "../icon/IconIconGroup";

export const language = [
  { content: "China", code: "CN" },
  { content: "English", code: "EN" },
  { content: "Japan", code: "JP" },
  { content: "South Korea", code: "KR" },
  { content: "Viet Nam", code: "VN" },
];

export const MenuItemValue = [
  {
    content: "English",
    icon: <IconFormatLetterMatches />,
    children: language,
  },
  {
    content: "Feedback and help",
    icon: <IconBxHelpCircle />,
    toLink: "/feedback",
  },
  {
    content: "Keyboard shortcuts",
    icon: <IconKeyboard />,
  },
];

export const MenuItemUserValue = [
  {
    content: "Profile",
    icon: <IconUser />,
    toLink: "/profile",
  },
  {
    content: "English",
    icon: <IconFormatLetterMatches />,
    children: language,
  },
  {
    content: "Feedback and help",
    icon: <IconBxHelpCircle />,
    toLink: "/feedback",
  },
  {
    content: "Keyboard shortcuts",
    icon: <IconKeyboard />,
  },
];

export const MenuItemSibarValue = [
  {
    content: "For You",
    icon: <IconHome />,
    toLink: "/",
  },
  {
    content: "Following",
    icon: <IconIconGroup />,
    toLink: "/following",
  },
  {
    content: "LIVE",
    icon: <IconLiveLine />,
    toLink: "*",
  },
];
