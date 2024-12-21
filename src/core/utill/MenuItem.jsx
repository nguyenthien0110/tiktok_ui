import IconBxHelpCircle from "../icon/IconBxHelpCircle";
import IconFormatLetterMatches from "../icon/IconFormatLetterMatches";
import IconKeyboard from "../icon/IconKeyboard";

export const language = [
  { content: "China", code: "CN" },
  { content: "English", code: "EN" },
  { content: "France", code: "FR" },
  { content: "Germany", code: "DE" },
  { content: "Italy", code: "IT" },
  { content: "Japan", code: "JP" },
  { content: "South Korea", code: "KR" },
  { content: "Spain", code: "ES" },
  { content: "United States", code: "US" },
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
