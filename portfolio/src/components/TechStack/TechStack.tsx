import "./TechStack.css";

type Props = {
  arr: string[];
};

export default function TechStack({ arr }: Props) {
    return ( 
        <div className="techstack">
            <h1>#Tech Stack <img src="icons8-tech-stack-94.png" alt="techstack" style={{height:"45px", width:"45px", transform:"translate(4px, 10px)"}}/> <div className="horizontal-line"></div></h1>
            <br />
            {arr.map((tech, idx) => (
                <img 
                    key={idx} 
                    src={`${tech}.png`}
                    alt={tech}
                    title={tech}
                    style={{ height: "50px", width: "50px", margin: "10px", borderRadius: "8px", border: "2px solid var(--accent-color)", boxShadow: `0 0 10px var(--shadow-color)` }}
                />
            ))}
        </div>
    )
}