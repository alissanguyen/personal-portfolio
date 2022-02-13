import * as React from "react";
import Avatar from "../../assets/personal/avatar.png";
import styles from "./AboutMe.css";
import SocialMedia from "~/components/SocialMedia/SocialMedia";
import { LinksFunction } from "remix";
import FunFacts from "./FunFacts";
import MyStory from "./MyStory";
import Titles from "./Titles";
import Hi from "./Hi";
import { SupportedTheme } from "~/types";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];
interface Props {
  theme: SupportedTheme;
}
const AboutMe: React.FC<Props> = (props) => {
  const [avatar, setAvatar] = React.useState("dark");

  const handleAvatarClassname = () => {
    props.theme === SupportedTheme.DARK
      ? setAvatar("dark")
      : setAvatar("light");
  };

  return (
    <article className="aboutme-section felx flex-col justify-center lg:py-20">
      <div className="md:p-20 lg:p-5 xl:p-0">
        <div className="md:flex md:flex-row lg:grid lg:grid-cols-5 lg:gap-5 lg:mb-5">
          <div className="flex flex-col lg:col-span-3">
            <div className="bio-description md:text-lg md:leading-10 lg:text-lg font-light tracking-wide ">
              <Hi />
              <div className="md: my-10 lg:my-10 lg:max-w-xl">
                <p className="text-aboutMe-aboutMeText">
                  I'm a software engineer living in Seattle, WA.
                </p>
                <p className="md:mb-10 lg:my-4 text-aboutMe-aboutMeText">
                  I started programming in late 2020. My focus is on building
                  and delivering software that is elegantly designed, efficient,
                  and user-friendly.
                </p>
                <Titles />
                <div className="mt-12"></div>
                <div className="text-textLgColor lg:flex lg:flex-col lg:items-baseline">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>

          <div className="avatar-image-wrapper lg:col-span-2 lg:justify-self-end lg:mb-0 md:mb-10">
            <img
              src={Avatar}
              alt=""
              className={`avatar-image ${avatar}  lg:h-[30rem]`}
            />
          </div>
        </div>
        <MyStory />
      </div>
      <div className="spacer-div lg:mt-24"></div>
      <FunFacts />
    </article>
  );
};

export default AboutMe;
