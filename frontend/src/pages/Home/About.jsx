import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center">
        <div className="h-[70vh] w-1/2">
          <dotlottie-player
            src="https://lottie.host/9f5702bd-7f8e-4ac0-8869-a81f725585bd/nFNDf8gTve.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col w-1/2 gap-5">
          <p className="text-white">
            I'm Sebona Ifa, a passionate software engineering student and
            experienced full-stack developer. With a strong background in
            website development, I specialize in creating functional and
            visually appealing web solutions that cater to the unique needs of
            businesses and individuals. **Expertise and Skills** Over the past
            four years, I have honed my skills in various programming languages
            and frameworks, allowing me to excel in website development.
          </p>
          <p className="text-white">
          I am
            proficient in HTML, CSS, and JavaScript, utilizing modern frameworks
            such as React and Angular to build dynamic and responsive web
            interfaces. I pay meticulous attention to detail, ensuring that the
            user interface is intuitive, visually engaging, and optimized for
            different devices and screen sizes. When it comes to back-end
            development, I have a strong command of Python and its frameworks,
            including Django and Flask, as well as Node.js. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
