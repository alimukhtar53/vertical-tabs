import React, { RefObject } from "react";
import Balancer from "react-wrap-balancer";

type UpdatedList = {
  id: number;
  name: string;
  icon: React.JSX.Element;
  ref: RefObject<HTMLDivElement>;
  content: string;
};

type Props = {
  updatedList: UpdatedList[];
};

const PageContent = ({ updatedList }: Props) => {
  return (
    <>
      {updatedList.map((item: any) => (
        <div key={item.id} className="overflow-hidden h-full" ref={item.ref}>
          <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
          <p className="font-medium leading-7 font text-lg">
            <Balancer>{item.content}</Balancer>
          </p>
        </div>
      ))}
    </>
  );
};

export default PageContent;
