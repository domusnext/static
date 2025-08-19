import React, { useEffect } from "react";
// import Script from "next/script";

import {
  Typography,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";

function PaddleLoader() {
  useEffect(() => {
    // Check if we are in the browser environment
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.paddle.com/paddle/paddle.js';
      script.onload = () => {
        // Access the Paddle global object from the script
        window.Paddle.Setup({
          vendor: Number(102023),
        });
      };
      document.body.appendChild(script);
    }
  }, []);

  return null;
}

export function PricingSectionOne() {
  return (
    <>
    <PaddleLoader />
      <section id="pricing" className="py-24 px-8">
        <div className="container mx-auto text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Choose Your Domus Plan
          </Typography>
          <Typography className="mb-8 font-normal !text-gray-500">
            Select the perfect package for your smart home management needs with AI assistance included.
          </Typography>
        </div>
        <div className="mt-12">
          <div className="container mx-auto md:flex justify-center gap-10">
            <Card
              color="transparent"
              className="border border-blue-gray-100 w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="!m-0 pt-6 text-center"
              >
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="capitalize mb-2 text-center"
                >
                  Domus Basic
                </Typography>

                <Typography
                  variant="h3"
                  color="blue-gray"
                  className="flex gap-1 justify-center"
                >
                  Free
                </Typography>
              </CardHeader>
              <CardBody className="text-center">
                <ul className="flex flex-col mb-8 px-5">
                  <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                    <Typography variant="small" className="font-normal text-inherit">
                      Basic AI Scheduling
                    </Typography>
                  </li>
                  <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                    <Typography variant="small" className="font-normal text-inherit">
                      Simple Meal Planning
                    </Typography>
                  </li>
                  <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                    <Typography variant="small" className="font-normal text-inherit">
                      Basic Todo Lists
                    </Typography>
                  </li>
                  <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                    <Typography variant="small" className="font-normal text-inherit">
                      Limited Device Support
                    </Typography>
                  </li>
                </ul>
                <a href="#contact" target="_self">
                  <Button
                    size="sm"
                    variant="gradient"
                    color="blue-gray"
                    className="from-blue-gray-900 to-blue-gray-800"
                  >
                    Get Started
                  </Button>
                </a>
              </CardBody>
            </Card>

            <Card
              color="blue-gray"
              className="bg-dark w-full md:w-1/2 lg:w-1/4"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="!m-0 pt-6 text-center"
              >
                <Typography
                  variant="h5"
                  color="white"
                  className="capitalize mb-2 text-center"
                >
                  Domus Pro
                </Typography>

                <Typography
                  variant="h3"
                  color="white"
                  className="flex gap-1 justify-center"
                >
                  $149
                </Typography>
              </CardHeader>
              <CardBody className="text-center">
                <ul className="flex flex-col mb-8 px-5">
                  <li
                    className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                    <Typography variant="small" className="font-normal text-inherit">
                      Advanced AI Features
                    </Typography>
                  </li>
                  <li
                    className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                    <Typography variant="small" className="font-normal text-inherit">
                      Smart Home Integration
                    </Typography>
                  </li>
                  <li
                    className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                    <Typography variant="small" className="font-normal text-inherit">
                      Family Management Tools
                    </Typography>
                  </li>
                  <li
                    className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                    <Typography variant="small" className="font-normal text-inherit">
                      Premium Support
                    </Typography>
                  </li>
                </ul>
                <a href="#contact">
                  <Button
                    size="sm"
                    variant="gradient"
                    color="white"
                  >
                    Contact Sales
                  </Button>
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingSectionOne;
