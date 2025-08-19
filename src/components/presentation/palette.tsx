import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function PalettePresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="hidden lg:flex">
            <img src="palette.png" alt="iphone" className="max-w-xl rounded-3xl mx-auto" />
          </div>
          
          <div className="text-center lg:text-left">
            <Typography
              color="blue"
              className="flex items-center justify-center lg:justify-start !font-bold text-lg mb-5"
            >
              Elegant User Interface
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Beautiful, intuitive design that fits your home.
            </Typography>
            <Typography color="gray" className="lg:pr-20">
              Domus features a sleek, modern interface that seamlessly integrates into any home environment. Customizable themes and layouts ensure the perfect match for your family's style and preferences.
            </Typography>
            
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default PalettePresentation;
