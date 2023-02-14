import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Signup } from "./pages";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;