// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage'
import BuilderPage from './pages/BuilderPage'
import BuildsPage from './pages/BuildsPage'

import AnimatedBackground  from './components/AnimatedBackground'
import MyBuildPage from "./pages/MyBuildPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <AnimatedBackground />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/builder/:sharedUrl?"  element={<BuilderPage />} />
        <Route path="/builds/:key?" element={<BuildsPage />} />
        <Route path="/mybuild" element={<MyBuildPage />} />
      </Routes>
    </>
  )
}

export default App
