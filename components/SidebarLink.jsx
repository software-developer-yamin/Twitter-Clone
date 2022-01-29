import React from "react";

function SidebarLink({ text, Icon, active }) {
  return (
    <div
      className={`text-[#d9d9d9] flex space-x-3 items-center justify-center xl:justify-start text-xl hoverAnimation ${
        active && "font-bold"
      }`}
    >
      <Icon className="h-5" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
}

export default SidebarLink;
