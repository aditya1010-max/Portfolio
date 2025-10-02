import { useState } from "react";

function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div>
      {showPopup && (
        <div style={{
          position: "fixed",
          top: "0", left: "0", right: "0", bottom: "0",
          background: "rgba(0,0,0,0.6)",
          display: "flex", justifyContent: "center", alignItems: "center"
        }}>
          <div style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            maxWidth: "300px"
          }}>
            <h2>🚧 Work in Progress</h2>
            <p>This app is not complete yet. Come back soon!</p>
            <button onClick={() => setShowPopup(false)}>Got it</button>
          </div>
        </div>
      )}

      <h1>Welcome to my App</h1>
    </div>
  );
}

export default App;
