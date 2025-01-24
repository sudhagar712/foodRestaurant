import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

const App = () => {
   
  const [theme, setTheme] = useState("light")

const handleSwitchTheme = () =>{
  const newTheme = theme==="light" ? "dark" : "light"
  setTheme(newTheme);
  document.documentElement.classList.toggle("dark", newTheme === "dark")
}



  return (
    <div className="w-full h-full bg-bgPrimary-light dark:bg-bgPrimary-dark overflow-y-hidden antialiased">
      <BrowserRouter>
        <Navbar onThemeSwitch = {handleSwitchTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
