// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col 
        xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="w-full xl:w-fit">
          <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary my-6 ">
            About<span className="text-secondary p-3">me</span>
            <br />
          </h2>
          <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            aspernatur assumenda consequuntur. Consequuntur officiis provident
            obcaecati necessitatibus unde dolor modi veniam, nam rem quo
            repellat, neque eos. Distinctio, voluptatum asperiores.
          </p>
          <div className=" flex items-center justify-center xl:justify-start gap-6 my-6">
            <SocialMediaIcon imgSrc={facebookIcon} title="Facebook" />
            <SocialMediaIcon imgSrc={instagramIcon} title="Instagram" />
            <SocialMediaIcon imgSrc={twitterIcon} title="Twitter" />
            <SocialMediaIcon imgSrc={youtubeIcon} title="Youtube" />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center"></div>
        <img
          src={aboutIllustration}
          alt=""
          className="max-w-full sm:max-w-[900x]"
        />
        ;
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider"></div>
    </div>
  );
};

export default About;
