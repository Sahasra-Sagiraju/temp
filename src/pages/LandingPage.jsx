import React from "react";
import Feature from "../components/Feature";

const LandingPage = () => {
  return (
    <>
      <section
        className="h-screen bg-cover bg-center p-4"
        style={{
          backgroundImage: 'url("./img-hero-section.png")',
        }}
      >
        {/* Header of the website */}
        <header>
          <nav>
            <menu className="text-white flex items-center gap-8">
              <li className="basis-[55%]">
                <a href="#">
                  <img src="./img-company-logo.png" alt="company logo" />
                </a>
              </li>
              <li className="hover:text-primary transition-all duration-400">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Product</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Pricing</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">About</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Contact</a>
              </li>
              <li className="inline-block bg-transparent border-[1px] border-white font-light px-10 py-2 self-center ml-auto">
                <a href="#">Login</a>
              </li>
            </menu>
          </nav>
        </header>

        <div className="mt-24 box-content max-w-[625px] mx-auto text-center p-3 flex flex-col gap-5">
          <h1 className="text-6xl text-white font-bold leading-[62.5px]">
            The one stop solution for GITAM
          </h1>
          <p className="text-xl font-light text-white">
            Make your calenders full with all the events that are happening in
            gitam with just one click
          </p>
          <a
            href="#"
            className="mt-12 bg-primary text-white font-light px-16 py-2 rounded-full self-center"
          >
            Try now
          </a>
        </div>
      </section>

      {/* Features section */}
      <section className="mt-20 p-3 text-center ">
        <h2 className="text-5xl">Features</h2>
        <p className="mt-5 inline-block text-xl w-[400px]">
          One place for all the happening in GITAM college life
        </p>

        <div className="max-w-[900px] mt-10 mx-auto p-3 grid grid-cols-1 md:grid-cols-3 gap-10">
          <Feature
            icon="./img-feature-1.png"
            title="OpenType features Variable fonts"
            description="Slate helps you see how many more days you need to work to reach your financial goal."
          />
          <Feature
            icon="./img-feature-2.png"
            title="Design with real data"
            description="Slate helps you see how many more days you need to work to reach your financial goal."
          />
          <Feature
            icon="./img-feature-3.png"
            title="Fastest way to take action"
            description="Slate helps you see how many more days you need to work to reach your financial goal."
          />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
