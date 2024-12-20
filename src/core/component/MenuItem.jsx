function MenuItem(children) {
  return (
    <>
      <div className="flex p-5 gap-5 font-bold text-color/[1] hover:bg-color/[0.05] cursor-pointer">
        <span className="text-4xl">{children.icon}</span>
        <h3 className="flex items-center">{children.content}</h3>
      </div>
    </>
  );
}

export default MenuItem;
