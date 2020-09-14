import React from 'react'

const Form = () => {
  return(
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
      <div className="card-body">

        <h5 className="card-title">Login</h5>
        <p className="card-text">If you already have an account, login to gain access.</p>
        <form>
          <div className="row">
            <div className="form-group col-md-6">
              <label for="email">Email address:</label>
              <input type="email" className="form-control" id="" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group col-md-6">
              <label for="password">Password:</label>
              <input type="password" className="form-control" id="" />
              <small id="passwordHelp" className="form-text text-muted">Your password is secret safe with us.</small>

            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form