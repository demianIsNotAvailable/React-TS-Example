import { useNavigate } from "react-router-dom"
import './styles.css'
import { useEffect, useState } from "react"

export default function Users() {
  const [filterValue, setFilterValue] = useState("")
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])

interface User {
  id: number,
  name: string
}

  const users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }, 
  ]

  const navigate = useNavigate()

  const userDetailHandler = (id: number, name: string) => {
    navigate(`/users/${id}?name=${name}`, { state: { message: `buenosd dias ${name}` } })
    return "UserDetail retrieved"
  }

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value)
  }

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await fetch("http://localhost:4010/api/users")
      const data = await response.json()
      console.log(data)
    }
    getAllUsers()
  })

  useEffect(() => {
    // Debounce
    const filteredUsers = users.filter(user => user.name.includes(filterValue))
    const timer = setTimeout (() => {
      setFilteredUsers(filteredUsers)
    }, 1000)

    return () => clearTimeout(timer)
  }, [filterValue])

  return (
    <div>
      <h1>Users</h1>
      <input type="text" placeholder="Search users" name="filter" value={filterValue} onChange={(e) => filterHandler(e)}/>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div> user_id: {`${user.id}`} user_name: <span className="cursor-pointer" onClick={() => userDetailHandler(user.id, user.name)}>{user.name}</span></div>
          </li>
        ))} 
        </ul>
      <ol>
        {filteredUsers.map(user => (
          <li key={user.id}>
            <div> user_id: {`${user.id}`} user_name: <span className="cursor-pointer" onClick={() => userDetailHandler(user.id, user.name)}>{user.name}</span></div>
          </li>
        ))} 
        </ol>
    </div>
  )
}