import './App.css'
import { Quote } from './components/Quote';
import './index.css';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



export default function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/signup" element= {<Signup/>}></Route>
            <Route path="/signin" element= {<Signin/>}></Route>
          </Routes>
        </BrowserRouter>
  )
}