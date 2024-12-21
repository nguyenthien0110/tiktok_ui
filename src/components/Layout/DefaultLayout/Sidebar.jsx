import MenuItem from "../../../core/component/MenuItem";
import { MenuItemSibarValue } from "../../../core/utill/MenuItem";

function SideBar() {
  const menuItem = MenuItemSibarValue;
  return (
    <>
      <div className="w-[356px] h-screen">
        {Object.keys(menuItem).map((key, index) => {
          return (
            <MenuItem
              key={index}
              content={menuItem[key].content}
              icon={menuItem[key].icon}
              to={menuItem[key].toLink}
            />
          );
        })}
      </div>
    </>
  );
}

export default SideBar;
