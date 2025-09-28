import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projects = [
  { title: "To-Do App", desc: "A simple task manager", link: "https://github.com/aditya/todo" },
  { title: "PayTM Clone", desc: "Payments web app", link: "https://github.com/aditya/paytm" },
  { title: "Recipe Predictor", desc: "AI-based cuisine predictor", link: "https://github.com/aditya/recipe" },
  { title: "Chat App", desc: "Real-time messaging app", link: "mmm"},
  { title: "Blog Platform", desc: "A platform to share blogs", link: "" },
  { title: "Weather App", desc: "Real-time weather updates", link: "" },
  { title: "E-commerce Site", desc: "Online shopping platform", link: "" },
  { title: "Portfolio Website", desc: "Showcase of my work", link: "" },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <br />
      <div className="project-grid">
        {projects.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}
