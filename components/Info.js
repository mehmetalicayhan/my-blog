import { FaGithub, FaTelegram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Typist from "react-typist";
import { ResponsiveImg, SocialLink, Bio } from "./styledComponents/styles";
const Info = () => {
  return (
    <div>
      <ResponsiveImg src="profile.jpeg" />

      <Bio>
        <h4 className="text-center mt-4">Mehmet Ali Çayhan</h4>
        <div className="mt-3">
          Merhaba, Sakarya Üniversitesi Bilgisayar Mühendisliği 3.Sınıf
          öğrencisiyim. Öğrenmek ve öğrendikçe paylaşmak için burada olacağım :
          {")"}
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

      <h6 className="small text-center mt-5">
        <SocialLink href="https://github.com/mehmetalicayhan/my-blog">
          blog-github
        </SocialLink>{" "}
        | {new Date().getFullYear()}
      </h6>

      <style jsx>{`
        .icons {
          margin-top: 40px;
        }
        .icons span {
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
};

export default Info;
