import { useState, useEffect } from "react";

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
  return intro ? <div style={{ height: SIZE }}>App</div> : <></>;
};

export default App;
