import './App.css'
import UserList from './components/UserList'
 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserProfile from './components/UserProfile'
 
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<UserList />} />
          <Route exact path="/user/:id" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  )
}
 
export default App
 