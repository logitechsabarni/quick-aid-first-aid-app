import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data from backend:", data);
      });
  }, []);

  return <h1>QuickAid</h1>;
}

export default App;
