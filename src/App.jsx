  import {useState} from "react";

  import Notes from "./components/Notes";

  function App() {
    const [notes, setNotes] = useState([
      {
        id: 1,
        text: "Welcome ",
      },
      {
        id: 2,
        text: "Thank You",
      },
    ]);

    const [note, setNote] = useState("");

    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            marginTop: "30px",
            flexDirection:"column",
            alignItems:"center"  
          }}
        >
        <h1>Drag & Drop Notes</h1>
  <div className="Message">
    <input
      tabIndex="1"
      placeholder="Write Notes.."
      className="MsgInput"
      type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="30.000000pt"
      height="30.000000pt"
      viewBox="0 0 30.000000 30.000000"
      preserveAspectRatio="xMidYMid meet"
      className="SendSVG"
      onClick={() => {
        setNotes([...notes, {id: notes.length + 1, text: note}]);
        setNote("");
      }}
    >
      <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)" fill="#ffffff70" stroke="none">
        <path d="M44 256 c-3 -8 -4 -29 -2 -48 3 -31 5 -33 56 -42 28 -5 52 -13 52 -16 0 -3 -24 -11 -52 -16 -52 -9 -53 -9 -56 -48 -2 -21 1 -43 6 -48 10 -10 232 97 232 112 0 7 -211 120 -224 120 -4 0 -9 -6 -12 -14z"></path>
      </g>
    </svg >
    <span className="l"></span>
  </div>
  </div>
        <Notes notes={notes} setNotes={setNotes} />
      </div>
    );
  }

  export default App;