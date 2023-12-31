import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import('../../src/pages/Home/index'));
const Catalog = React.lazy(() => import('../pages/Catalog/index'));

export default function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<React.Suspense fallback={<div>Loading...</div>}><Home /></React.Suspense>} />
                <Route path="/produto" element={<React.Suspense fallback={<div>Loading...</div>}><Catalog /></React.Suspense>} />
            </Routes>
        </Router>
    );
}
