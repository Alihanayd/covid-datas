import { useState } from "react";
import Card from "./components/Card";
import CoronaForContinent from "./components/CoronaForContinent";
import CoronaForCountry from "./components/CoronaForCountry";
import Header from "./components/Header";
import RecordedCorona from "./components/RecordedCorona";

function App() {
  const [key, setKey] = useState(1);
  return (
    <>
      <Header
        onMenuChange={(_key) => {
          setKey(_key);
        }}
      />

      <div className="w-full p-8 md:p-6 page-content">
        {key === 1 && <CoronaForCountry />}
        {key === 2 && <RecordedCorona />}
        {key === 3 && <CoronaForContinent />}
      </div>
    </>
  );
}

export default App;
