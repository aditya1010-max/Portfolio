import "./ProjectCard.css";

type Props = {
  title: string;
  desc: string;
  link: string;
};

export default function ProjectCard({ title, desc, link }: Props) {
  return (
    <div className="project-card" onClick={() => window.open(link, "_blank")}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <button>View Project</button>
    </div>
  );
}
