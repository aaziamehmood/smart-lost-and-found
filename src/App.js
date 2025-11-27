import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ReportLost from "./pages/ReportLost";
import ReportFound from "./pages/ReportFound";
import BrowseItems from "./pages/BrowseItems";
import ItemDetail from "./pages/ItemDetail";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report-lost" element={<ReportLost />} />
        <Route path="/report-found" element={<ReportFound />} />
        <Route path="/items" element={<BrowseItems />} />
        <Route path="/items/:id" element={<ItemDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
