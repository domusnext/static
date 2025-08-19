import { Typography, Button } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function ContentSectionOne() {
  return (
    <ThemeProvider>
      <section className="py-16 px-8 lg:py-28">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="row-start-2 mt-12 lg:row-auto lg:mt-0 lg:pr-12">
            <Typography variant="h2" color="blue-gray" className="mb-6">
              The Future of Home Management
            </Typography>
            <Typography variant="lead" color="gray" className="mb-12">
              Domus revolutionizes how families manage their daily lives. Our{" "}
              <a
                href="#"
                className="underline underline-offset-4 transition-colors hover:text-blue-500"
              >
                AI-powered smart screen
              </a>
              {" "}seamlessly integrates into your home, learning your routines and preferences to provide personalized assistance.
              <br />
              <br />
              From intelligent scheduling that prevents conflicts to meal planning that considers your dietary preferences and available ingredients, Domus transforms{" "}
              <a
                href="#"
                className="underline underline-offset-4 transition-colors hover:text-blue-500"
              >
                chaos into harmony
              </a>
              . Experience the peace of mind that comes with having an AI assistant dedicated to your family&apos;s success.
              <br />
              <br />
              Whether you&apos;re managing work schedules, coordinating family activities, or organizing household chores, Domus adapts to your unique lifestyle and helps you stay ahead of life&apos;s demands.
            </Typography>
            <div className="inline-flex flex-wrap gap-3">
              <Button variant="outlined" color="dark" size="lg">
                Contact Us
              </Button>
              <Button color="dark" size="lg">See Features</Button>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1680285251132-e1c238bf5e75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="team work"
            className="max-h-[50vh] w-full rounded-xl object-cover object-center md:max-h-[75vh]"
          />
        </div>
      </section>
    </ThemeProvider>
  );
}

export default ContentSectionOne;
