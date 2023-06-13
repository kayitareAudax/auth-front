
import './App.css'
import { BrowserRouter as Router,Routes,Link,Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import DashboardScreen from './screens/DashboardScreen'
import axios from 'axios'
import PrivateRoute from './components/PrivateRoute'
import { useEffect, useState } from 'react'
import { AuthProvider } from './contexts/authContext'

function App() {
axios.defaults.baseURL='http://localhost:5000/'
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path='/' element={<LoginScreen/>}/>
        <Route path='/signup' element={<SignupScreen/>}/>
        <Route path='/dash' element={<DashboardScreen/>}/>
      </Routes>
    </Router>
     </AuthProvider>
  )
}

export default App
