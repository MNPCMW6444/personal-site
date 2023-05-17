import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import Cool from "./comps/Cool";

const SIZE = 1000;
const App = () => {
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > SIZE) {
        setIntro(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);
  return intro ? <Cool /> : <></>;
};

export default App;
