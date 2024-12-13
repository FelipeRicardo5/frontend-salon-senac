import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from './components/pages/LandingPage.jsx'
import FeedbackForm from './components/feedback/FeedbackForm.jsx'
import Login from './components/pages/Login.jsx'
// import ServiceCard from '././components/form/ServiceCard.jsx'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

    </>
  )
}

export default App;