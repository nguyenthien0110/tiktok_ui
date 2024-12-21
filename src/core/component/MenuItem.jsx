import clsx from "clsx";
import Button from "../../core/component/Button";

function MenuItem(children) {
  return (
    <>
      <div
        className={clsx(
          children.className,
          "flex p-2 pl-6 font-bold text-color/[1] hover:bg-color/[0.05] cursor-pointer"
        )}
      >
        <Button
          icon={children.icon}
          onClick={children.onClick}
          to={children.to && children.to}
        >
          {children.content}
        </Button>
      </div>
    </>
  );
}

export default MenuItem;
