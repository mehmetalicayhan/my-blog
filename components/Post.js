import Link from "next/link";
import { FaBook } from "react-icons/fa";
import {
  DateSpan,
  Sample,
  ReadLink,
  ReadTime,
  Slug
} from "./styledComponents/styles";
// function findTextWordCount(text) {
//   let count = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === " ") {
//       count++;
//     }
//   }

//   const readTime = Math.ceil(count / 265);
//   return readTime;
// }

const Post = ({ data }) => {
  return (
    <div>
      <div className="p-3 ml-3">
        <DateSpan>{data.date}</DateSpan>
        <Sample>{data.category}</Sample>
        <h2>
          <Link href={data.slug}>
            <a className="text-dark">{data.title}</a>
          </Link>
        </h2>
        {/* Todo : add read time for every blog post */}
        <Slug>{data.slug}</Slug>
        <div>
          <Link href={data.slug}>
            <ReadLink href="#">Read</ReadLink>
          </Link>
          <ReadTime>
            <span className="small">
              10 min
              <FaBook className="ml-1" />
            </span>
          </ReadTime>
        </div>
      </div>
    </div>
  );
};

export default Post;
