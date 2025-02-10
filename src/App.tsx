import { BrowserRouter , Route, Routes } from "react-router-dom";
import SearchSection from "./components/SearchSection/SearchSection";
import CaracterPage from "./components/CharacterPage/CharacterPage";

function App() {
  return (
    <>
     <BrowserRouter basename="/find-ricky">
      <Routes>
        <Route path="/" element={<SearchSection />} />
        <Route path="/:id" element={<CaracterPage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
