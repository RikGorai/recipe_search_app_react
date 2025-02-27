import Sidebar from "./components/Sidebar.jsx"
import { FavoritePage } from "./pages/FavoritePage.jsx"
import HomePage from "./pages/HomePage.jsx"
import { Routes,Route } from "react-router-dom"


function App() {

  return (
    <div className = "flex">
      <Sidebar />
      <Routes>
        <Route path="/home" element={<HomePage />} />  
        <Route path="/favorites" element={<FavoritePage />} />  
      </Routes>
      
    </div>
  )
}

export default App
