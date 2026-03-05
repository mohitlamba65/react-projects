import { useState } from 'react'

// import './App.css'
const users = [
  { id: 1, name: "Amit Sharma", email: "amit@gmail.com" },
  { id: 2, name: "Neha Verma", email: "neha@gmail.com" },
  { id: 3, name: "Rahul Singh", email: "rahul@gmail.com" },
  { id: 4, name: "Priya Patel", email: "priya@gmail.com" }
];
function App() {
  const [query, setQuery] = useState("");
  const filterdUsers = users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase()) ||
    user.email.toLowerCase().includes(query.toLowerCase())
  )


  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filterdUsers.length > 0 ?
        (<ul>
          
          {filterdUsers.map((user) =>
            <li key={user.id}>
              {user.name}--- {user.email}
            </li>
          )}
        
        </ul>) : (
          <p>No Such User</p>
        )
      }
    </div>

  )
}

export default App



Problem Statement

You are given a list of users.
Build a React component that:

Displays a list of users (name + email)

Has a search input

Filters users by name or email as the user types

Matching should be case-insensitive

Show “No users found” if nothing matches

Input Data
const users = [
  { id: 1, name: "Amit Sharma", email: "amit@gmail.com" },
  { id: 2, name: "Neha Verma", email: "neha@gmail.com" },
  { id: 3, name: "Rahul Singh", email: "rahul@gmail.com" },
  { id: 4, name: "Priya Patel", email: "priya@gmail.com" }
];
