import React, { useEffect, useState } from 'react'
import { getAllUsers, IUser } from '../IUser'

export const Users = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    const getData = async () => {
      let userFromApi = await getAllUsers()
      setUsers(userFromApi)
    }
    if (users.length > 0) return
    getData()
  })

  let html = users.map((user) => {
    return (
      <div key={user.id}>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.age}</p>
      </div>
    )
  })

  return <div>{html}</div>
}
