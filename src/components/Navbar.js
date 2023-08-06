import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" herf="/">{props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" herf="/">{props.home}</a>
        </li>
      </ul>
    </div>
  </div>
    </nav> 
  )
}

Navbar.propTypes = {
    title : PropTypes.string,
    home : PropTypes.string

}
Navbar.defaultProps = {
    title : 'TextUtils',
    home : 'Home'
}
