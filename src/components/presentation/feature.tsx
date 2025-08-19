import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

function FeatureCard({ icon, title, children }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        {icon}
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          color="blue-gray"
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon1.png" />
    ),
    title: "AI-Powered Scheduling",
    description:
      "Intelligent calendar management that learns your routines and optimizes your daily schedule automatically.",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon2.png" />
    ),
    title: "Smart Meal Planning",
    description:
      "Personalized recipe suggestions and meal planning based on your preferences, dietary needs, and available ingredients.",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon3.png" />
    ),
    title: "Family Chore Management",
    description:
      "Effortlessly organize household tasks with AI-generated chore lists that adapt to your family's needs and schedules.",
  }
];

export function FeatureLanding() {
  return (
    <section className="px-4 mt-12">
      <div className="container mx-auto mb-20 text-center">
        <div className="flex justify-center align-center relative z-5">
          <Typography color="dark" className="text-xl mr-2 font-normal">
            Powered by Domus AI
          </Typography>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureLanding;
