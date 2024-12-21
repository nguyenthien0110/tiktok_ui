import Tippy from "@tippyjs/react/headless";
import Popup from "../../components/Layout/components/Popup";

function ButtonIcon(children) {
  return (
    <>
      <Tippy
        zIndex={-1}
        interactive
        placement="bottom-end"
        render={(attrs) => (
          <Popup className="!w-5 !h-4 !min-h-0">
            <div {...attrs}>{children.title}</div>
          </Popup>
        )}
      >
        <div className="h-12 w-12 flex justify-center items-center text-color text-[22px]">{children.icon}</div>
      </Tippy>
    </>
  );
}

export default ButtonIcon;
