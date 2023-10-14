import React from "react";

const SubHero = ({ title, subtitle, children }) => {
  return (
    <div className="mx-auto relative gap-y-2 flex max-w-xl flex-col justify-center items-center">
      <span className="gradient"></span>
      <h1 className="text-clamp capitalize text-center font-black bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">
        {title}
      </h1>
      <h2 className="md:text-2xl text-xl text-foreground sm:text-balance text-center font-bold">
        &quot;{subtitle}&quot;
      </h2>

      <p className="mx-8 mb-8 backdrop:text-foreground-muted text-sm md:text-base text-center text-balance font-medium leading-5 md:leading-6">
        {children}
      </p>
    </div>
  );
};

export default SubHero;
