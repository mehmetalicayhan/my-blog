import { FaGithub, FaTelegram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Typist from "react-typist";
import { ResponsiveImg, SocialLink, Bio } from "./styledComponents/styles";
const Info = () => {
  let aboutLine = "In laborum excepteur reprehenderit minim cillum nostrud.";
  return (
    <div>
      <ResponsiveImg src="profile.jpeg" />

      <Bio>
        <h4 className="text-center mt-4">Mehmet Ali Çayhan</h4>
        <div className="mt-3">
          <Typist
            startDelay={2000}
            cursor={{ hideWhenDone: true, element: "_ " }}
          >
            Hello,
            <Typist.Backspace count={6} delay={500} />
            {aboutLine}
            <Typist.Backspace count={aboutLine.length + 1} delay={500} />
            Dolor proident exercitation consectetur tempor adipisicing Lorem
            occaecat velit nisi culpa esse.
            <br />
            <Typist.Delay ms={500} />
            Magna ut quis incididunt consectetur reprehenderit excepteur nulla
            cupidatat nulla duis excepteur consectetur.
            <br />
            <Typist.Delay ms={500} />
            Voluptate exercitation veniam sint dolore anim anim est aliquip nisi
            commodo.
            <br />
            <Typist.Delay ms={200} />
            And...
          </Typist>
        </div>
      </Bio>

      <div className="icons d-flex justify-content-center">
        <span>
          <SocialLink href="https://github.com/zeit/next.js">
            <FaGithub size={30} />
          </SocialLink>
        </span>

        <span>
          <SocialLink href="https://github.com/zeit/next.js">
            <FaTelegram size={30} />
          </SocialLink>
        </span>

        <span>
          <SocialLink href="https://github.com/zeit/next.js">
            <FaLinkedin size={30} />
          </SocialLink>
        </span>
        <span>
          <SocialLink href="https://github.com/zeit/next.js">
            <FaEnvelope size={30} />
          </SocialLink>
        </span>
      </div>

      <h6 className="footer text-center mt-5">
        &copy; All rights reserved {new Date().getFullYear()}
      </h6>

      <style jsx>{`
        .icons {
          margin-top: 40px;
        }
        .icons span {
          margin-left: 10px;
        }

        .footer {
          color: gray;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default Info;
