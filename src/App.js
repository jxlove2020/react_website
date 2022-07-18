import "./App.css";
import { useEffect, useState } from "react";
import LeftMenu from "./components/LeftMenu";
import MainContent from "./components/MainContent";
import Header from "./components/Header";

function App() {
  const [fontName, setFontName] = useState("JalnanOTF00");

  useEffect(() => {
    const text = document.getElementById("text");
    console.log(fontName);
  }, []);

  const onChange = (e) => {
    const prevFont = fontName;
    console.log("pre", prevFont);
    setFontName(e.target.value);

    console.log("font", e.target.value);
    const text = document.getElementById("text");

    text.classList.remove(prevFont);

    text.classList.add(e.target.value);

    console.log(text);
  };

  return (
    <div className="App" id="text">
      <Header onChange={onChange} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <LeftMenu />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
