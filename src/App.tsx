import { useState, useEffect } from "react";
const App = () => {
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setIntro(false), 3000);
    return () => clearTimeout(t);
  }, []);
  return intro ? <div>App</div> : <></>;
};
export default App;
