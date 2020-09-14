import React from 'react'

let person = {
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  address: '123 Main St'
}

const Card = () => {
  return(
    <div className="center">
      <h4>Example Login Card:</h4>
      <div className="card text-white bg-info mb-3 cardwit">

        <div className="card-header">{person.name}</div>
        <div className="card-body">
          <h5 className="card-title">{person.email}</h5>
          <h5 className="card-title">{person.address}</h5>
        </div>
      </div>
    </div>
  )
}

export default Card
