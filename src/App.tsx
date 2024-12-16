import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from './components/pages/LandingPage.jsx'
import FeedbackForm from './components/feedback/FeedbackForm.jsx'
import Login from './components/pages/Login.jsx'
import Depi from './components/services/depi.jsx'
import Barba from './components/services/barba.jsx'
import Tratamento from './components/services/tratamento.jsx'

// import ServiceCard from '././components/form/ServiceCard.jsx'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/depi" element={<Depi />} />
        <Route path="/barba" element={<Barba />} />
        <Route path="/tratamento" element={<Tratamento />} />
      </Routes>
    </Router>

    </>
  )
}

export default App;