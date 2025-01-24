import React from 'react'
import { ABOUT, LIST} from "../constants/index";

const About = () => {
  return (
    <section
      id="about"
      className="bg-secondary-light dark:bg-secondary-dark py-9 "
    >
      <div className="p-9 md:m-10">
        <h1 className="font-Geist font-bold mb-8 tracking-wider text-center text-3xl lg:text-4xl text-primaryText-light dark:text-primaryText-dark">
          {LIST.list3}
        </h1>
        {/*  */}

        <div className="flex flex-wrap justify-center items-center ">
          <div className="w-full p-4 lg:w-1/2 ">
            <video
              src={ABOUT.video}
              autoPlay
              loop
              muted
              type="vido/mov"
              className="rounded-3xl lg:rotate-3 duration-75 "
            ></video>
          </div>
          {/*  */}
          <div>
            <div className="w-full p-2 lg:w-1/2">
              <h2 className="text-4xl  font-Geist tracking-tighter lg:text-6xl dark:text-primary-dark">
                {ABOUT.header}
              </h2>
              <div className="bg-yellow-300 w-36 h-2 lg:rotate-3"></div>
              <p className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl  dark:text-secondaryText-dark">
                {ABOUT.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
