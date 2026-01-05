import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AccessibilityStatement from './pages/AccessibilityStatement';
import JoinTheSwellKioskCrew from './pages/JoinTheSwellKioskCrew';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/accessibilitystatement" element={<AccessibilityStatement />} />
          <Route path="/jointheswellkioskcrew" element={<JoinTheSwellKioskCrew />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;