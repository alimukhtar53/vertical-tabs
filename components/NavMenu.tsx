import React from "react";
import { Button } from "@/components/ui/button";

type NavMenuItem = {
  id: number;
  name: string;
  icon: React.JSX.Element;
  ref: string;
  content: string;
};

type Props = {
  list: NavMenuItem[];
  activeItemId: number | null;
  handleButtonClick: (id: number, content: string) => void;
};

const NavMenu = ({ list, activeItemId, handleButtonClick }: Props) => {
  return (
    <>
      {list.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          className={`py-6 text-slate-500 justify-start text-md mr-4 ${
            activeItemId === item.id
              ? "bg-cyan-50 text-cyan-600 hover:bg-cyan-50 border-l-4 hover:text-cyan-600 border-cyan-500"
              : ""
          }`}
          onClick={() => handleButtonClick(item.id, item.content)}
        >
          {item.icon} {item.name}
        </Button>
      ))}
    </>
  );
};

export default NavMenu;
