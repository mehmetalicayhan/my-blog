import Link from "next/link";
import { FaBook, FaLinux, FaPython, FaCode } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import {
  DateSpan,
  Sample,
  HorizontalLine,
  ReadTime,
  Title,
  Summary
} from "./styledComponents/styles";
function Icon({ name, space }) {
  let element;
  switch (name) {
    case "Linux":
      element = <FaLinux className={space} size={20} />;
      break;

    case "Python":
      element = <FaPython className={space} size={20} />;
      break;

    case "VsCode":
      element = <DiVisualstudio className={space} size={20} />;
      break;

    case "Javascript":
      element = <DiJavascript className={space} size={20} />;
      break;

    case "Algorithm":
      element = <FaCode className={space} size={20} />;
      break;
  }

  return element;
}
const Post = ({ data }) => {
  return (
    <div>
      <div className="p-3 ml-3">
        <div>
          <DateSpan className="float-right">{data.date}</DateSpan>
          <h2>
            <Link href={data.slug}>
              <Title href="#">{data.title}</Title>
            </Link>
          </h2>
        </div>
        <Summary>{data.summary}</Summary>
        <div className="mt-4">
          <ReadTime>
            <span className="small">
              {data.readTime} min
              <FaBook className="ml-1" />
            </span>
          </ReadTime>
          <Sample
            style={{
              color: `${data.category.color}`
            }}
          >
            <small>
              {data.category.name}
              <span className="ml-1 mb-1">
                <Icon space={"mb-1"} name={data.category.name} />
              </span>
            </small>
          </Sample>
        </div>
        {/* <div className="mb-4">
          <Link href={data.slug}>
            <ReadLink href="#">Read</ReadLink>
          </Link>
        </div> */}
      </div>
      <HorizontalLine />
    </div>
  );
};

export default Post;
