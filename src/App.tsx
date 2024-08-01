
import './App.css'
import { useContext } from 'react'
import { CountContext } from './CountContext'
import { Route, Routes } from 'react-router-dom'
import Profile from './views/Profile'
import Users from './views/Users'
import UserDetail from './views/UserDetail'
import Login from './views/Login'
import Register from './views/Register'

function App() {
  const { count, setCount } = useContext(CountContext)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount(count+1)}>
          Add one!
        </button>
      </div>
      <Routes>
        <Route path='*' element={<h1>Not Found</h1>} />
        <Route path="/" element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>

    </>
  )
}

export default App
