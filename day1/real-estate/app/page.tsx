import React from "react";
import Header from "./components/header";
import Register from "./components/register";

export default function Home() {
  return (
    <main className="md:grid md:grid-cols-12">
      <div className="container md:col-span-7 h-full flex flex-col justify-center items-center">
          <Header />
          <Register />
      </div>
      <div className="hidden md:flex md:col-span-3 md:h-full md:bg-contain md:bg-image:url('/bg-image.jpg')">
        background image
      </div>
      
    </main>
  );
}
