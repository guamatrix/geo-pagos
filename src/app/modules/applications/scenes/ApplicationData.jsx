import React from 'react'
import PropTypes from 'prop-types'
import './ApplicationData.scss'
import acceptInactive from '../../../resources/assets/images/accept_inactive.png'
import acceptActive from '../../../resources/assets/images/accept_active.png'
import deleteInactive from '../../../resources/assets/images/reject_inactive.png'
import FormTerminal from '../../../components/forms/FromTerminal'

const propTypes = {
  data: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
}

const ApplicationData = ({ data, onDelete, onApply, state, onChangeInput, onKeyPress }) => {
  return (
    <div className="columns">
      <div className="column is-1 has-text-centered" onClick={onDelete}>
        <img src={deleteInactive} role="presentation" />
      </div>
      <div className="column is-5">
        <p className="title-name">{data.name}</p>
        <span className="title-cuit">CUIT: </span>
        <span>{data.cuit}</span>
      </div>
      <div className="column is-3">
        <p className="title-local">N de establecimiento</p>
        <p className="num-local">{data.number}</p>
        <div className="box-date">
          <p className="date">{data.date}</p>
        </div>
      </div>
      {/* <FormTerminal
        state={state}
        onChange={onChangeInput}
        onSubmit={onApply}
      /> */}
      <div className="column is-2">
        <input
          required
          type="text"
          onChange={onChangeInput}
          value={state.terminal}
          className="inputData"
          placeholder="N de Terminal"
          onKeyPress={onKeyPress}
        />
      </div>
      <div className="column is-1" onClick={onApply}>
        <img src={state.isApply ? acceptActive : acceptInactive} role="presentation" />
      </div>
    </div>
  )
}

ApplicationData.propTypes = propTypes

export default ApplicationData
