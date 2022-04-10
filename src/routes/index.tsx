import { Routes, Route } from "react-router-dom"
import { About, Home, Messages, Photos, Settings } from "../pages"

export const MainRoutes = ()=> {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    )
}