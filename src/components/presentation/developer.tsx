import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function DevPresentation() {
 
  return (
    <ThemeProvider>
      <div className="flex place-items-center bg-white py-20">
        <div className="container mx-auto items-center flex">
          <div className="text-left mb-8 md:w-1/2">
            <Typography
              color="blue"
              className="flex items-center font-bold text-lg mb-5"
            >
              Advanced AI Technology
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 leading-tight"
            >
              Built with cutting-edge artificial intelligence
            </Typography>
            <Typography color="blue-gray" className="lg:pr-64">
              Domus leverages advanced machine learning algorithms to understand your family's patterns, preferences, and routines, delivering personalized home management solutions.
            </Typography>
            
          </div>
          <img src="consistenly.png" alt="components" className="mx-auto hidden md:flex md:w-1/2" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DevPresentation;
