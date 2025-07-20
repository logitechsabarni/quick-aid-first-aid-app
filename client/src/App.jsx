import { useEffect } from "react";
import Emergency from "./pages/Emergency";

function App() {
  useEffect(() => {
    const fetchHello = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/hello`);
        const data = await response.json();
        console.log("Backend says:", data.message);
      } catch (err) {
        console.error("Error connecting to backend:", err);
      }
    };

    fetchHello();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">QuickAid 🚑</h1>
      <Emergency />
    </div>
  );
}

export default App;
