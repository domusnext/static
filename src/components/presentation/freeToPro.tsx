import React from "react";
import {
  Button,
  Card,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

function StatsCard({ count, title, desc }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h1" className="mb-4 text-5xl text-dark">
        {count}
      </Typography>
      <Typography variant="h5" color="blue-gray">
        {title}
      </Typography>
      <Typography color="gray">
        {desc}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "100%",
    title: "AI Powered",
    desc: "Every feature is enhanced with artificial intelligence for smarter automation."
  },
  {
    count: "24/7",
    title: "Always Active",
    desc: "Continuous monitoring and management of your home's daily activities."
  },
  {
    count: "5+",
    title: "Core Features",
    desc: "Scheduling, meal planning, tasks, chores, and family coordination."
  },
  {
    count: "∞",
    title: "Customizable",
    desc: "Adapts to your family's unique patterns, preferences, and lifestyle."
  },
];

export function FigmaPresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto relative">
          <div className="text-left">
            <Typography
              color="blue"
              className="font-bold text-lg mb-5"
            >
              Complete Smart Home Platform
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Domus Smart Screen
            </Typography>
            <Typography color="blue-gray" className="mb-5 lg:w-[30rem]">
              The Domus platform delivers a comprehensive smart home experience that works seamlessly across all your devices, from the main screen to mobile apps and voice integration.
            </Typography>
          </div>
          <div className="lg:flex relative">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div className="grid gap-y-16 gap-x-8 grid-cols-2 md:grid-cols-2 mb-8">
                  {stats.map((props, key) => (
                    <StatsCard key={key} {...props} />
                  ))}
                </div>
                <a href="https://www.creative-tim.com/product/astro-launch-ui-pro" target="_blank">
                  <Button color="dark" className="flex items-center">
                     Astro Pro
                  </Button>
                </a>
              </div>
            </div>
            <img src="components.png" alt="iphone" className="lg:w-1/2 rounded-3xl hidden md:flex ml-auto lg:absolute -right-32 -top-24" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FigmaPresentation;
