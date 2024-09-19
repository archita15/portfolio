import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Archita_ProfilePic.jpeg";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:justify-start py-10 lg:py-20 lg:mb-35">
      {/* Left section - Text */}
      <div className="lg:w-1/2 w-full text-center lg:text-left lg:px-10">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-white">Archita Palkar</span>
        </h1>
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-500 mb-6">
          <p>
            I&apos;m a{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-4xl tracking-tight text-transparent animate-gradient bg-size-200">
              Full Stack Developer
            </span>
          </p>
        </h2>
        <p className="my-10 max-w-xl text-xl py-10">
          {HERO_CONTENT}
        </p>
        {/* Buttons */}
        <div className="flex justify-center lg:justify-start gap-4">
          <a
            href="/contact"
            className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700"
          >
            Contact Me
          </a>
          <a
            href="/resume"
            className="border border-indigo-600 text-indigo-600 py-2 px-6 rounded-md hover:bg-indigo-600 hover:text-white"
          >
            My Resume
          </a>
        </div>
      </div>
      {/* Right section - Profile Image */}
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mb-8 lg:mb-0">
        <img
          src={profilePic}
          alt="Archita Palkar"
          className="rounded-full shadow-lg w-64 lg:w-80"
        />
      </div>
    </div>
  );
};

export default Hero;
