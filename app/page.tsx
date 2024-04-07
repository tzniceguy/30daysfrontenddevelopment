import React from "react";
import Projects from "./components/projects";

export default function Home() {
  const goals = [
    {goal:'Mastering React JS', description: 'By building consistently for 30 days, I aimed to deepen my knowledge and explore the full potential of React.js.',},
    {goal:'Pushing Design Boundaries', description: 'Each interface represents a unique design concept, showcasing the versatility of the framework and Tailwind CSS.',},
    {goal:'Learning from the Community', description: 'I invite you to explore these interfaces and provide constructive feedback that will help me grow as a frontend developer.',},
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div className="space-y-6">
        <h4 className="text-2xl font-bold md:text-5xl">#30daysofFrondEndDevelopment using NEXTJS and tailwindCSS</h4>
        <p>Welcome to the #30daysofFrondEndDevelopment project! This website showcases a collection of 30 unique user interfaces built using React.js and the Next.js framework. I embarked on this as learning challenge, design exploration and are excited to share my creations with you.</p>
        <h2>My Goals for this challenge</h2>
        <ul>
          {goals.map((goal) => (
            <li key={goal.goal}><span className="text-lg md:text-2xl font-semibold">{goal.goal}:</span> <p>{goal.description}</p></li>
          ))}
        </ul>
      </div>
      <Projects />
    </main>
  );
}
