import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import {ResponsiveImg} from './styledComponents/styles';
const Info = () => {
  return (
    <div>
      <ResponsiveImg
        src="profile.jpeg"
      />
      
      <h4 className="text-center mt-4">Mehmet Ali Çayhan</h4>
      <p className="text-center" style={{ color: "#aeadad" }}>
        Magna duis ex elit ea voluptate Lorem in consequat est minim laboris.
        Commodo aliqua aute cupidatat cupidatat eiusmod laboris do velit
        adipisicing eiusmod commodo. Est veniam est laboris dolore voluptate sit
      </p>

      <div className="icons d-flex justify-content-center">
        <span>
          <FaGithub size={30} />
        </span>

        <span>
          <FaTelegram size={30} />
        </span>

        <span>
          <FaLinkedin size={30} />
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
