import React from "react";
import { Link } from "react-router-dom";
import {
  faBroadcastTower,
  faVial,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";
import Language from "../components/Language";

const cards = [
  {
    icon: faBroadcastTower,
    title: "Build",
    description: "Get work done quicker by building out entire projects.",
    margin: "0 0.5rem 0 0",
  },
  {
    icon: faVial,
    title: "Test",
    description: "Isolate code to test features and animations.",
    margin: "0 0.5rem",
  },
  {
    icon: faCode,
    title: "Iterate",
    description: "Iterate faster by getting feedback without any dependency.",
    margin: "0 0 0 0.5rem",
  },
];

const languages = [
  {
    name: "HTML",
    image: "/html-5.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    margin: "0 0.5rem 0 0",
  },
  {
    name: "CSS",
    image: "/css-3.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    margin: "0 0.5rem",
  },
  {
    name: "JavaScript",
    image: "/javascript.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    margin: "0 0 0 0.5rem",
  },
];

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="main-section">
        <div>
          <h1 className="main-text">
            The best place to build, test, and discover front-end code.
          </h1>
          <Link to="/editor">
            <button className="main-cta-btn">Take me already</button>
          </Link>
        </div>
        <img src="/codeitor.png" alt="homepageimage" className="main-image" />
      </div>
      <div className="card-section">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            margin={card.margin}
          />
        ))}
      </div>
      <div className="languages-section">
        <h1 className="languages-text">SUPPORTED LANGUAGES:</h1>
        <div className="languages-div">
          {languages.map((language, index) => (
            <Language
              key={index}
              name={language.name}
              image={language.image}
              link={language.link}
              margin={language.margin}
            />
          ))}
        </div>
      </div>
      <div className="contact-section">
        <img src="/contact.svg" alt="contact" className="contact-image" />
        <h1 className="contact-text">
          If you have any questions about this project, feel free to contact me on{" "}
          <a
            href="https://www.linkedin.com/in/kshitij-darekar/"
            className="contact-name"
          >
            LinkedIn.
          </a>
        </h1>
      </div>
    </div>
  );
}
