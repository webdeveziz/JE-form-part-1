import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import api from '../api'
import QualitiesList from './qualitiesList'

const UserPage = ({ id }) => {
  console.log('---', id)
  const [user, setUser] = useState()
  const history = useHistory()

  useEffect(() => {
    api.users.getById(id).then((data) => {
      return setUser(data)
    })
  })

  const handleAllUsers = () => {
    history.push('/users')
  }

  const userInfo = () => {
    if (user) {
      return (
        <div className="m-2">
          <h2>{user.name}</h2>
          <h3>Профессия {user.profession.name}</h3>
          <p>{<QualitiesList qualities={user.qualities} />}</p>
          <p>CompletedMeetings {user.completedMeetings}</p>
          <h3>Rate {user.rate}</h3>
          <button className="btn-secondary m-2" onClick={handleAllUsers}>
            Все ползователи
          </button>
        </div>
      )
    }
    return 'Загружаем...'
  }

  return <div>{userInfo()}</div>
}

UserPage.propTypes = {
  id: PropTypes.string.isRequired
}

export default UserPage
