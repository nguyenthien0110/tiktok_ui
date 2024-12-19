import clsx from "clsx";

// eslint-disable-next-line react/prop-types
function Popup({ children, className }) {
  return (
    <>
      <div
        className={clsx(
          className,
          "w-full max-h-[min((100vh-96px)-60px,734px)] min-h-[100px] rounded-[8px] bg-[#fff] shadow-lg"
        )}
      >
        {children}
      </div>
    </>
  );
}

export default Popup;
