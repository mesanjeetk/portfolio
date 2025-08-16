import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SplitText } from "../components/SplitText";
import { TextType } from "../components/TextType";

export const Hero = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    } else {
      setFontsLoaded(true);
    }
  }, []);
  
  return (
    <div id="home" className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20 mb-20">

      {/* Left Content */}
      <div className="flex-1 flex flex-col items-start justify-center space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold leading-normal text-orange-500 font-cursive2 flex items-center whitespace-nowrap">
          {fontsLoaded ? <SplitText text="Sanjeet&nbsp;Kumar" ease="elastic.out(1,0.3)" /> : <span>Sanjeet&nbsp;Kumar</span>}
          <span className="text-slate-200 ml-2 animate-wave" >👋</span>
        </h1>

        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          I’m a&nbsp;
          <TextType
            text={[
              "Problem Solver",
              "Creative Coder",
              "Tech Enthusiast",
            ]}
            typingSpeed={70}
            deletingSpeed={40}
            pauseDuration={1500}
            className="text-orange-500"
            textColors={["#f97316", "#ffb84d", "#ff7f50"]}
            loop
          />
        </h1>

        <p className="text-lg text-slate-300 max-w-lg">
          I design and build modern, high-performance websites that bring ideas to life.
          Let’s work together to create something remarkable.
        </p>
        <p className="text-lg text-slate-300 max-w-lg">
          I'm a Full Stack Developer
        </p>

        <div className="flex space-x-4">
          <Link to="/projects">
            <button className="flex items-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-full font-medium shadow-lg hover:bg-orange-600 transition-all duration-300">
              <span>View&nbsp;Projects</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </Link>

          <Link to="/contact">
            <button className="flex items-center space-x-2 px-6 py-3 border border-orange-500 text-orange-500 rounded-full font-medium hover:bg-orange-500 hover:text-white transition-all duration-300">
              <span>Say&nbsp;Hello</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="#f97316"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="#f97316"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Right Content - Background Image */}
      <div className="flex-1 flex justify-center">
        <div className="h-80 w-80 md:h-[15rem] md:w-[15rem] bg-cover bg-center rounded-xl shadow-lg hero__img"></div>
      </div>
    </div>
  );
};
