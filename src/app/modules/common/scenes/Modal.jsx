import React from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

const propTypes = {
  content: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

const Modal = ({ content, toggleModal, title }) => (
<div className="modal-custom">
  <div className="modal-content-custom">
    <div className="modal-header-custom">
      <span className="modal-title-custom">{title}</span>
    </div>
    <div className="modal-body-custom">
      {content}
    </div>
  </div>
</div>
)

Modal.propTypes = propTypes

export default Modal
