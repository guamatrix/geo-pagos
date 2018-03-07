import React from 'react'
import PropTypes from 'prop-types'
import InputText from './InputText'

const propTypes = {
  state: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const FormTerminal = ({ state, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="column is-2">
        <InputText
          required
          type="text"
          onChange={onChange}
          value={state}
          className="inputData"
          placeholder="N de Terminal"
        />
        <button type="submit">
          <img src={acceptInactive} role="presentation" />
        </button>
      </div>
    </form>
  )
}

FormTerminal.propTypes = propTypes

export default FormTerminal
