import React from "react";
import Header from "./components/header";
import Card from "./components/card";

export default function Home() {
  return (
    <main className="md:grid md:grid-cols-12">
      <div className="container md:col-span-7 h-full flex flex-col justify-center items-center">
          <Header />
          <Card />
      </div>
      <div className="hidden md:flex md:col-span-5 md:h-screen md:bg-cover bg-no-repeat" style={{ backgroundImage: `url("/bg-image.jpg")` }}>
      </div>
      
    </main>
  );
}
