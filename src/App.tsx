import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from './components/pages/LandingPage.jsx'
import FeedbackForm from './components/feedback/FeedbackForm.jsx'
import Login from './components/pages/Login.jsx'
import Scheduling from './components/pages/Scheduling.jsx'
import Clients from './components/pages/Clients.jsx'
import RegisterClients from './components/form/RegisterClients.jsx'
// import ServiceCard from '././components/form/ServiceCard.jsx'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/clientes" element={<Clients />} />
        <Route path="/registroclientes" element={<RegisterClients />} />
      </Routes>
    </Router>

    </>
  )
}

export default App;