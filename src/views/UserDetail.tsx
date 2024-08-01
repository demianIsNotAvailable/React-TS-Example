import { useLocation } from "react-router-dom"

export default function UserDetail() {
  const location = useLocation()
  console.log(location)
  const userId = location.pathname.split("/")[2]

  return (
    <div>
      <h1>UserDetail</h1>
      <p>You have selected the user with id {userId}</p>
      <p>Your query string looks something like this: {location.search}</p>
      <h2>{location.state.message}</h2>
    </div>
  )
}


const bringUserById = async (id: number, query: string) => {
  const response = await fetch(`http://localhost:4000/api/users/${id}${query}`)
  const data = await response.json()
  return data
}