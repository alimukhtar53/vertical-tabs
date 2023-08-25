"use client";
import NavMenu from "@/components/NavMenu";
import PageContent from "@/components/PageContent";
import {
  StarIcon,
  BarChartIcon,
  FileTextIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import React, { RefObject, useRef } from "react";
import { useState } from "react";

export default function Home() {
  const [activeItemId, setActiveItemId] = useState<null | number>(0);
  const analyticsRef = useRef<HTMLDivElement>(null);
  const fundsRef = useRef<HTMLDivElement>(null);
  const reportsRef = useRef<HTMLDivElement>(null);
  const performanceRef = useRef<HTMLDivElement>(null);

  const refMap: { [key: number]: RefObject<HTMLDivElement> } = {
    0: analyticsRef,
    1: reportsRef,
    2: performanceRef,
    3: fundsRef,
  };

  const handleButtonClick = (itemId: number) => {
    setActiveItemId(itemId);

    const refToScroll = refMap[itemId];

    if (refToScroll && refToScroll.current) {
      refToScroll.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const updatedList = list.map((item) => ({
    ...item,
    ref: refMap[item.id] || null,
  }));

  return (
    <div className="h-screen w-full m-auto flex justify-center items-center bg-gray-200">
      <div className="h-[450px] text-white w-[700px] rounded-2xl bg-white shadow-xl">
        <div className="grid grid-cols-12 gap-4 w-full p-6 h-full">
          <div className="col-span-4 flex flex-col border-r-[1px]">
            <div className="flex gap-2 flex-col">
              <NavMenu
                list={list}
                activeItemId={activeItemId}
                handleButtonClick={handleButtonClick}
              />
            </div>
          </div>
          <div className="col-span-8 text-slate-700 max-h-[450px] overflow-hidden">
            <PageContent updatedList={updatedList} />
          </div>
        </div>
      </div>
    </div>
  );
}

const list = [
  {
    id: 0,
    name: "Analytics",
    icon: <BarChartIcon className="mr-2 h-4 w-4" />,
    ref: "analyticsRef",
    content: `Investment analytics involves the use
    of data, statistical techniques, and financial models to evaluate and optimize investment decisions. It's a discipline that aids investors in understanding potential risks and returns associated with various investment choices. Investment analytics can range from basic data analysis to complex quantitative models and can be applied to various asset classes.`,
  },
  {
    id: 1,
    name: "Reports",
    icon: <FileTextIcon className="mr-2 h-4 w-4" />,
    ref: "reportsRef",
    content: `Investment reports provide detailed
    information about the status,
    performance, and other relevant aspects of an investment or portfolio. They can be generated for individual investors or institutional investors and are typically used to assess the health, progress, and potential future trajectory of investments.`,
  },
  {
    id: 2,
    name: "Performance",
    icon: <RocketIcon className="mr-2 h-4 w-4" />,
    ref: "performanceRef",
    content: `Investment performance refers to the returns generated on an investment relative to the amount of money invested. It's a way to measure and evaluate the growth or decline of an investment over a specific period, often compared to benchmarks or other
    standards to determine its relative
    success.`,
  },
  {
    id: 3,
    name: "Funds",
    ref: "fundsRef",
    icon: <StarIcon className="mr-2 h-4 w-4" />,
    content: `Investment funds are pooled collections of money from multiple investors that are managed collectively by professionals or on behalf of the investors. The main objective of these funds is to provide both individual and institutional investors access to a wider range of securities than they might be able to access individually. By doing so, they can achieve diversification,
    professional management, and economies of scale in investment.`,
  },
];
