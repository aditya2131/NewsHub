import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TrendingPage from './pages/TrendingPage';
import TopNewsPage from './pages/TopNewsPage';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/App.css'; // Import your main styles
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/trending" element={<TrendingPage />} />
                        <Route path="/top-news" element={<TopNewsPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
