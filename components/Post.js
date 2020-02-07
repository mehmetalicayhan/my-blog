import Link from "next/link";
import { FaBook } from "react-icons/fa";
import {
  DateSpan,
  Sample,
  ReadLink,
  ReadTime,
  Title,
  Summary
} from "./styledComponents/styles";

const Post = ({ data }) => {
  return (
    <div>
      <div className="p-3 ml-3">
        <DateSpan>{data.date}</DateSpan>
        <Sample
          style={{
            color: `${data.category.color}`
          }}
        >
          {data.category.name}
        </Sample>
        <h2>
          <Link href={data.slug}>
            <Title href="#">{data.title}</Title>
          </Link>
        </h2>
        <Summary>{data.summary}</Summary>
        <div>
          <Link href={data.slug}>
            <ReadLink href="#">Read</ReadLink>
          </Link>
          <ReadTime>
            <span className="small">
              {data.readTime} min
              <FaBook className="ml-1" />
            </span>
          </ReadTime>
        </div>
      </div>
    </div>
  );
};

export default Post;
