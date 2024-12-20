/* eslint-disable react/prop-types */
import clsx from "clsx";
import { Link } from "react-router-dom";

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  disable = false,
  rounded = false,
  size = "m",
  children,
  className,
  onClick,
  ...Props
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...Props,
  };

  const sizeClasses = {
    s: "py-1 px-8 min-w-[88px]",
    m: "py-2 px-4 min-w-[88px]",
    l: "py-5 px-4 min-w-[136px]",
  };

  if (disable) {
    Object.keys(props).forEach((key) => {
      if (typeof props[key] === "function" && key.startsWith("on")) {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <>
      <Comp
        {...props}
        className={clsx(
          className,
          {
            "border-solid !border-color/[0.1] border-[2px] rounded-full hover:bg-color/[0.06]":
              rounded,
          },
          {
            "border-solid !border-primary bg-white text-primary hover:bg-color/[0.06]":
              outline,
          },
          { "bg-primary text-[#fff] hover:bg-primary": primary },
          { "hover:underline": text },
          { "pointer-events-none opacity-50 select-none": disable },
          sizeClasses[size],
          "text-[1.6rem] font-bold min-w-24 py-[9px] px-[16px] rounded-[4px] border-[1px] border-transparent"
        )}
      >
        <span>{children}</span>
      </Comp>
    </>
  );
}

export default Button;
