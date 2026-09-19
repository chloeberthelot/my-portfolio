import { FaBirthdayCake, FaCss3Alt } from "react-icons/fa";
import { GiBookshelf, GiHamburger } from "react-icons/gi";
import { GrDocumentText } from "react-icons/gr";
import "../../css/ProjectCard.css";
import { BsBook } from "react-icons/bs";
import { useState } from "react";
import {
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

function ProjectCard() {
  const [card, setCard] = useState(null);

  const projects = [
    {
      title: "<CV & À propos />",
      description:
        "Mon parcours, mes compétences et mon CV téléchargeable, pour en savoir plus sur qui je suis.",
      icon: GrDocumentText,
      bgColor: "#EFE9B7",
      accentColor: "#ded28c",
      textColor: "#574a0c",
      techIcons: [FaCss3Alt],
    },
    {
      title: "<Bday Radar />",
      description:
        "Un rappel d'anniversaires avec compte à rebours, pour ne plus jamais oublier une date importante.",
      icon: FaBirthdayCake,
      liveUrl: "https://bday-radar-eosin.vercel.app/",
      githubUrl: "https://github.com/chloeberthelot/bday-radar",
      bgColor: "#F79BC5",
      accentColor: "#f271ac",
      textColor: "#8a1250",
      techIcons: [SiReact, SiJavascript, FaCss3Alt],
    },
    {
      title: "<The Midnight Library />",
      description:
        "Une bibliothèque personnelle interactive de gestion de lectures, avec recherche en direct via l'API Open Library et filtrage par genre.",
      icon: GiBookshelf,
      liveUrl: "https://the-midnight-library-rho.vercel.app/",
      githubUrl: "https://github.com/chloeberthelot/The-Midnight-Library",
      bgColor: "#DBF9E7",
      accentColor: "#b3ecc9",
      textColor: "#1e4630",
      techIcons: [SiReact, SiJavascript, FaCss3Alt],
    },

    {
      title: "<Crazee-Burger />",
      description:
        "Crazee Burger est un site de commande de burgers en cours de développement.",
      icon: GiHamburger,
      liveUrl: "",
      githubUrl: "https://github.com/chloeberthelot/crazee-burger",
      bgColor: "#E8C9FA",
      accentColor: "#d5a3f2",
      textColor: "#4a2260",
      techIcons: [SiReact, SiJavascript, FaCss3Alt],
    },
    {
      title: "<The Reading Shelf />",
      description:
        "Un tracker de lecture avec objectifs et barre de progression, recherche en direct via l'API Hardcover",
      icon: BsBook,
      liveUrl: "",
      githubUrl: "https://github.com/chloeberthelot/reading-tracker",
      bgColor: "#B0E1FA",
      accentColor: "#7fc7ec",
      textColor: "#1a5a7a",
      techIcons: [SiNextdotjs, SiTypescript, FaCss3Alt],
    },
  ];

  return (
    <div className="content">
      <p className="bienvenue">Bienvenue ! Je suis, </p>
      <h1>Chloé - Développeuse front-end </h1>

      <div className="projects">
        {projects.map((project) => (
          <div key={project.title} className="project-tab-wrapper">
            <div
              className="project-tab-notch"
              style={{ backgroundColor: project.accentColor }}
            ></div>
            <div
              className={
                card === project.title
                  ? "project-card expanded"
                  : "project-card"
              }
              style={{
                backgroundColor: project.bgColor,
                "--card-accent": project.accentColor,
                "--card-text": project.textColor,
              }}
              onClick={() => setCard(project.title)}
            >
              <div
                className="project-icon-box"
                style={{ backgroundColor: project.accentColor }}
              >
                <project.icon className="project-icon" />
              </div>

              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tech-icons">
                {project.techIcons.map((TechIcon, index) => (
                  <TechIcon key={index} className="tech-icon" />
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le site
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le code
                </a>
              </div>
            </div>
          </div>
        ))}
        {card && (
          <div className="dark-overlay" onClick={() => setCard(null)}></div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
