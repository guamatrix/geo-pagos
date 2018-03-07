import React from 'react'
import PropTypes from 'prop-types'
import iconDeleting from '../../../resources/assets/images/reject_active.png'
import './ApplicationDeleting.scss'

const propTypes = {
  toggleDeleting: PropTypes.func.isRequired,
  deleting: PropTypes.func.isRequired,
}

const ApplicationDeleting = ({ toggleDeleting, deleting }) => (
  <div className="columns">
    <div className="column is-1 has-text-centered">
      <img src={iconDeleting} role="presentation" />
    </div>
    <div className="column is-11">
      <div className="columns border-delete">
        <div className="column is-9">
          <p>
              &#191;Estas seguro de rechazar la solicitud de comercio&#63;
          </p>
        </div>
        <div className="column is-3">
          <span className="text-cancel" onClick={toggleDeleting}>Cancelar</span>
          <span className="text-delete" onClick={deleting}>Rechazar</span>
        </div>
      </div>
    </div>
  </div>
)

ApplicationDeleting.propTypes = propTypes

export default ApplicationDeleting
