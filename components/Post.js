import styled from "styled-components";
import { Component } from "react";
import { FaBook } from "react-icons/fa";
const Sample = styled.span`
  color: #fddb3a;
  margin-left: 15px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
`;

const DateSpan = styled.span`
  color: #5b5656;
  font-family: "Montserrat", sans-serif;
`;

// Todo : Add font to title and slug
const Title = styled.h4`
  color: #5b5656;
  font-weight: bold;
  margin-top: 10px;
`;

const Slug = styled.p`
  color: #5b5656;
  font-weight: bold;
  margin-top: 10px;
`;

const ReadLink = styled.a`
  color: #5b5656;
  font-weight: bold;
  margin-top: 10px;
  text-decoration: none;

  &:hover {
    color: #3e206d;
    text-decoration: underline;
  }
`;

const ReadTime = styled.span`
  color: #5b5656;
  font-weight: bold;
  text-decoration: none;
  float: right;
`;

function findTextWordCount(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      count++;
    }
  }
  // console.log(count , count/265)

  const readTime = Math.ceil(count / 265);
  // console.log('Read Time' , readTime)
  return readTime;
}

class Post extends Component {
  state = {
    readTime: 0
  };

  componentDidMount() {
    const readTime = findTextWordCount("Sunt aute id est cupidatat amet sunt occaecat irure. Aute aliquip magna ad veniam laborum sint officia veniam. Adipisicing eu pariatur magna occaecat aute minim consectetur occaecat dolor sunt. Deserunt nulla non deserunt ad anim aliqua nulla duis magna commodo dolor. Et magna excepteur sit deserunt cupidatat aute ea in aute laboris. Anim veniam esse tempor non pariatur labore minim. Commodo enim do incididunt eiusmod consequat magna aliquip do eiusmod dolor in laboris minim est.Ex eu veniam labore proident mollit. Cillum ea ea occaecat adipisicing do do ad culpa do. Aliqua commodo sunt exercitation sint cillum nulla ipsum minim.Labore et quis enim ea ullamco laboris et. Et anim officia laborum aliqua cupidatat deserunt dolor non adipisicing consectetur. Labore anim veniam consectetur culpa veniam irure cupidatat pariatur anim aliquip quis ea quis. Duis et dolor incididunt quis elit. Officia voluptate anim fugiat dolor cupidatat labore et ut. Exercitation ea id est enim.In adipisicing enim esse aute eiusmod reprehenderit voluptate culpa. Aliquip reprehenderit eiusmod consequat elit deserunt duis commodo fugiat tempor sit do enim. Anim aliquip dolore occaecat officia adipisicing nostrud et laborum. Commodo commodo proident ex cupidatat consectetur deserunt adipisicing nulla. Consectetur consequat id cupidatat id ullamco dolore eiusmod enim. Elit proident culpa commodo culpa ad sit laboris.Labore nostrud voluptate minim mollit nostrud cillum. Id nulla sunt irure voluptate duis enim mollit. Duis elit ad incididunt incididunt sunt id et fugiat officia velit sint incididunt irure proident. Commodo cillum occaecat velit elit dolore ullamco aliquip dolor sit nulla enim consectetur amet nostrud. Aliquip eiusmod sint deserunt fugiat consequat sint qui id occaecat labore veniam. Nostrud sit elit aliqua nulla tempor et id est velit. Irure sunt Lorem mollit veniam culpa fugiat esse ipsum adipisicing amet.Deserunt enim consectetur cupidatat voluptate dolor amet. Dolore sit exercitation ad nostrud adipisicing proident irure Lorem Lorem nisi pariatur. Id laboris culpa qui eu sit elit laborum anim Lorem occaecat.In magna consequat voluptate non culpa qui cupidatat eu ut pariatur duis Lorem. Quis Lorem duis culpa officia. Eiusmod dolor nostrud quis dolor velit consectetur. Cupidatat duis incididunt et occaecat eiusmod sit labore adipisicing dolor elit minim. Excepteur excepteur quis minim sit irure ipsum enim occaecat proident. Cupidatat sunt ullamco reprehenderit non exercitation excepteur excepteur ullamco ipsum.Deserunt do exercitation minim in Lorem officia do quis. Minim officia tempor ut irure id qui nisi laboris nulla in nulla do. Aliquip in incididunt veniam aliquip voluptate culpa.");
    this.setState({ readTime });
  }

  render() {
    return (
      <div>
        <div className="p-3 ml-3">
          <DateSpan>{new Date().toDateString()}</DateSpan>
          <Sample>TYPOGRAPHY</Sample>
          <Title>Humane Typography in Digital Age</Title>
          {/* Todo : add read time for every blog post */}
          <Slug>
            Sint et ea laborum labore. Fugiat voluptate irure pariatur
            exercitation occaecat in nulla labore anim dolor pariatur amet. Quis
            pariatur cillum proident mollit. Et officia officia tempor ad
            eiusmod aliquip voluptate tempor officia laborum fugiat magna. Velit
            magna tempor aute nisi cupidatat cupidatat id. Dolore laborum
            consequat velit ullamco adipisicing sunt aute amet labore aliquip
            officia id culpa. Do occaecat proident tempor deserunt adipisicing
            sit. Est ullamco ...
          </Slug>
          <div>
            <ReadLink href="#"><small>Read</small></ReadLink>
            <ReadTime>
              <span className="small">
                {this.state.readTime} min read <FaBook className="ml-1" />{" "}
              </span>
            </ReadTime>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
