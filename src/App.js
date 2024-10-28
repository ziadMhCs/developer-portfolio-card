import "./App.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="App">
      <div className="card">
        <img className="avatar" src="/jonas.jpg" alt="avatar_image" />
        <div className="data">
          <h1>Jonas Schmedtmann</h1>
          Full-stack web developer and teacher at Udemy. When not coding or
          preparing a course, I like to play board games, to cook (and eat), or
          to just enjoy the Portuguese sun at the beach.
          <br />
          <div />
          <div className="skill-list">
            {skills.map((skillObj) => {
              return (
                <Skill 
                  key={skillObj.skill}
                  title={skillObj.skill}
                  bg={{   backgroundColor: skillObj.color }}
                  emoji={
                    skillObj.level === "beginner"
                      ? "👶"
                      : skillObj.level === "intermediate"
                        ? "👍"
                        : "💪"
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={props.bg}>
      {props.title} {props.emoji} 
    </div>
  );
}

export default App;
