import React from 'react'
import PropTypes from 'prop-types'
import logoVisa from '../../../resources/assets/images/Visa.png'
import add from '../../../resources/assets/images/add.png'
import './Header.scss'

const propTypes = {
  onCreate: PropTypes.func.isRequired,
}

const Header = ({ onCreate }) => (
  <nav className="level">
    <div className="level-left level-item has-text-centered">
      <img src={logoVisa} role="presentation" />
      <div className="line">
        <p />
      </div>
      <p>Solicitudes</p>
    </div>
    <div className="level-right level-item has-text-centered" onClick={onCreate}>
      <img className="add" src={add} role="presentation" />
      <a className="link is-info">Crear solicitud</a>
    </div>
  </nav>
)

Header.propTypes = propTypes

export default Header
