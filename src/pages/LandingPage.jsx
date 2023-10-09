// native react imports
import React from "react";

// component imports
import Feature from "../components/Feature";
import CompanyCard from "../components/CompanyCard";
import TestimonialCard from "../components/TestimonialCard";
import ZPatternCard from "../components/ZPatternCard";

// react-icon imports
import { ImLocation2 } from "react-icons/im";
import { MdPhoneAndroid } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

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
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
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

      <div
        className="mt-16 max-w-[900px] mx-auto relative"
        style={{ paddingTop: "50%" }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/TvKI6zaATBM"
          allowFullScreen
          className="absolute inset-0 p-2 rounded-3xl"
        ></iframe>
      </div>

      <div className="mt-24 flex flex-col gap-12">
        <ZPatternCard
          title="Fastest way to connect"
          tagline="Most calendars are designed for teams. Slate is designed for freelancers"
          imgURL="./img-macbook-pro.png"
        />
        <ZPatternCard
          title="At fingertips"
          tagline="Lightning fast prototyping. Most calendars are designed for teams. Slate is designed for freelancers."
          imgURL="./img-person-letters.png"
          invert
        />
      </div>

      <section className="mt-32 p-3 text-center">
        <h2 className="text-5xl">GITAM Communities/Clubs</h2>
        <p className="mt-6 inline-block text-xl w-[380px]">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
        <div className="p-2 mt-16 mx-auto max-w-[800px] grid grid-cols-2 sm:grid-cols-4">
          <CompanyCard imgURL="./img-google-logo.png" companyName="google" />
          <CompanyCard imgURL="./img-amazon-logo.png" companyName="amazon" />
          <CompanyCard
            imgURL="./img-microsoft-logo.png"
            companyName="microsoft"
          />
          <CompanyCard imgURL="./img-uber-logo.png" companyName="uber" />
          <CompanyCard imgURL="./img-dropbox-logo.png" companyName="dropbox" />
          <CompanyCard imgURL="./img-google-logo.png" companyName="google" />
          <CompanyCard imgURL="./img-uber-logo.png" companyName="uber" />
          <CompanyCard imgURL="./img-amazon-logo.png" companyName="amazon" />
        </div>
        <a
          href="#"
          className="inline-block mt-12 bg-primary text-white font-light px-16 py-2 rounded-full self-center"
        >
          Try for free
        </a>
      </section>

      <section className="mt-32 p-3">
        <h2 className="text-5xl text-center">Testimonials</h2>
        <div className="mt-16 mx-auto max-w-[900px] grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TestimonialCard
            imgURL="./img-testimonial-1.png"
            name="Claire Bell"
            designation="Designer"
            testimonialText="Slate helps you see how many more days you need to work to reach financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year."
          />
          <TestimonialCard
            imgURL="./img-testimonial-2.png"
            name="Francisco Lane"
            designation="Designer"
            testimonialText="Slate helps you see how many more days you need to work to reach financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year."
          />
          <TestimonialCard
            imgURL="./img-testimonial-3.png"
            name="Ralph Fisher"
            designation="Designer"
            testimonialText="Slate helps you see how many more days you need to work to reach financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year."
          />
          <TestimonialCard
            imgURL="./img-testimonial-4.png"
            name="Jorge Murphy"
            designation="Designer"
            testimonialText="Slate helps you see how many more days you need to work to reach financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year."
          />
        </div>
      </section>

      <footer className="mt-16 p-12 xl:p-32 bg-[#252B42] text-white grid gap-16 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="flex flex-col gap-4 justify-self-center">
          <h2 className="text-xl font-semibold">Pages</h2>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 justify-self-center">
          <h2 className="text-xl font-semibold">Tomothy</h2>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="#">Eleonor Edwards</a>
            </li>
            <li>
              <a href="#">Ted Robertson</a>
            </li>
            <li>
              <a href="#">Annette Russell</a>
            </li>
            <li>
              <a href="#">Jennie McKinney</a>
            </li>
            <li>
              <a href="#">Gloria Richards</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 justify-self-center">
          <h2 className="text-xl font-semibold">Jane Black</h2>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="#">Philip Jones</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Colleen Russell</a>
            </li>
            <li>
              <a href="#">Marvin Hawkins</a>
            </li>
            <li>
              <a href="#">Bruce Simmmons</a>
            </li>
          </ul>
        </div>
        <address className="flex flex-col gap-6 justify-self-center self-end lg:row-start-2 lg:col-start-2 xl:row-start-1 xl:col-start-4 xl:self-start">
          <div className="flex gap-2">
            <ImLocation2 className="text-2xl" />
            <span>7480 Mockingbird Hill</span>
          </div>
          <div className="flex gap-2">
            <MdPhoneAndroid className="text-2xl" />
            <a href="tel:2395550108">(239) 555-0108</a>
          </div>
          <div className="flex gap-4">
            <a href="#">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#">
              <AiFillFacebook className="text-2xl" />
            </a>
            <a href="#">
              <BsLinkedin className="text-2xl" />
            </a>
          </div>
        </address>
      </footer>
    </>
  );
};

export default LandingPage;
