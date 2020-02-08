import { FaGithub, FaTelegram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Typist from "react-typist";
import { ResponsiveImg, SocialLink, Bio } from "./styledComponents/styles";
const Info = () => {
  let aboutLine = "Bloguma Hoşgeldiniz...";
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
            Merhaba,
            <Typist.Backspace count={8} delay={500} />
            {aboutLine}
            <Typist.Backspace count={aboutLine.length + 1} delay={500} />
            Sakarya Üniversitesi Bilgisayar Mühendisliği 3.Sınıf öğrencisiyim.
            <br />
            <Typist.Delay ms={500} />
            Öğrenmek ve öğrendikçe paylaşmak için burada olacağım :{")"}
            <br />
          </Typist>
        </div>
      </Bio>

      <div className="icons d-flex justify-content-center">
        <span>
          <SocialLink href="https://github.com/mehmetalicayhan">
            <FaGithub size={30} />
          </SocialLink>
        </span>

        <span>
          <SocialLink href="https://t.me/mehmetalicyhn">
            <FaTelegram size={30} />
          </SocialLink>
        </span>

        <span>
          <SocialLink href="https://linkedin.com/in/mehmet-ali-çayhan-673545169">
            <FaLinkedin size={30} />
          </SocialLink>
        </span>
        <span>
          <SocialLink href="mailto:mehmetalicyhn@gmail.com">
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
