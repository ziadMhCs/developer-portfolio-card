import "./App.css";
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
            <Skill
              title="HTML+CSS
"
              bg={{ backgroundColor: "rgb(38, 98, 234)" }}
              emoji="💪"
            />
            <Skill
              title="JavaScript"
              bg={{ backgroundColor: "rgb(239, 216, 29)" }}
              emoji="💪"
            />
            <Skill
              title="Web Design
"
              bg={{ backgroundColor: "rgb(195, 220, 175)" }}
              emoji="💪"
            />
            <Skill
              title="Git and GitHub"
              bg={{ backgroundColor: "rgb(232, 79, 51)" }}
              emoji="👍"
            />
            <Skill
              title="React"
              bg={{ backgroundColor: "rgb(96, 218, 251)" }}
              emoji="💪"
            />

            <Skill
              title="Svelte"
              bg={{ backgroundColor: "rgb(255, 59, 0)" }}
              emoji="👶"
            />
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
