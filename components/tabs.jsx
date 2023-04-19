import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Image from "next/image";
import Box from "@mui/material/Box";
import { TabPanel } from "@mui/lab";
import { TabContext } from "@mui/lab";
import { TabList } from "@mui/lab";
import WorkCard from "./Cards";

const cards = [
  {
    id: 1,
    img: "/images/card.jpg",
  },
  {
    id: 2,
    img: "/images/card2.jpg",
  },
  {
    id: 3,
    img: "/images/card3.jpg",
  },
  {
    id: 4,
    img: "/images/card4.jpg",
  },
  {
    id: 5,
    img: "/images/card5.jpg",
  },
  {
    id: 6,
    img: "/images/card6.jpg",
  },
];
const cardsData = [
  {
    id: 1,
    img: "/images/card2.jpg",
  },
  {
    id: 2,
    img: "/images/card.jpg",
  },
  {
    id: 3,
    img: "/images/card5.jpg",
  },
  {
    id: 4,
    img: "/images/card3.jpg",
  },
  {
    id: 5,
    img: "/images/card5.jpg",
  },
  {
    id: 6,
    img: "/images/card5.jpg",
  },
];

export default function ProjectTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col">
      <TabContext value={value}>
        <Box
          sx={{
            maxWidth: "90%",
          }}
        >
          <TabList
            onChange={handleChange}
            variant="scrollable"
            //  make responsive tablist
            scrollButtons="auto"
            orientation="horizontal"
            aria-label="scrollable force TabList example"
          >
            <Tab
              label="Alles"
              value="1"
              className="font-semibold xs:text-sm text-xs text-grey font-sans"
              active
            />
            <Tab
              label="Iets anders"
              value="2"
              className="font-semibold xs:text-sm text-xs text-grey font-sans"
            />
            <Tab
              label="Iets anders"
              value="3"
              className="font-semibold xs:text-sm text-xs text-grey font-sans"
            />
            <Tab
              label="Iets anders"
              value="4"
              className="font-semibold xs:text-sm text-xs text-grey font-sans"
            />
            <Tab
              label="IIets anders"
              value="5"
              className="font-semibold xs:text-sm text-xs text-grey font-sans"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="w-[100%] grid lg:grid-cols-3 xxs:grid-cols-2 gap-x-[2rem] gap-y-[6rem] align-center justify-center">
            {cards.map((card) => (
              <WorkCard key={card.id} image={card.img} />
            ))}{" "}
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="w-[100%] grid lg:grid-cols-3 xxs:grid-cols-2 gap-x-[2rem] gap-y-[6rem] align-center justify-center">
            {cardsData.map((card) => (
              <WorkCard key={card.id} image={card.img} />
            ))}{" "}
          </div>
        </TabPanel>
        <TabPanel value="3">
          {" "}
          <div className="w-[100%] grid lg:grid-cols-3 xxs:grid-cols-2 gap-x-[2rem] gap-y-[6rem] align-center justify-center">
            {cards.map((card) => (
              <WorkCard key={card.id} image={card.img} />
            ))}{" "}
          </div>
        </TabPanel>
        <TabPanel value="4">
          {" "}
          <div className="w-[100%] grid lg:grid-cols-3 xxs:grid-cols-2 gap-x-[2rem] gap-y-[6rem] align-center justify-center">
            {cardsData.map((card) => (
              <WorkCard key={card.id} image={card.img} />
            ))}{" "}
          </div>
        </TabPanel>
        <TabPanel value="5">
          <div className="w-[100%] grid lg:grid-cols-3 xxs:grid-cols-2 gap-x-[2rem] gap-y-[6rem] align-center justify-center">
            {cards.map((card) => (
              <WorkCard key={card.id} image={card.img} />
            ))}{" "}
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
}
