import React from 'react'
import PropTypes from 'prop-types'
import InputText from './InputText'
import './FormApplication.scss'

const propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
}

const FormApplication = ({ onSubmit, onChange, state, onCancel }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="columns">
        <InputText
          label="Razón Social"
          name="name"
          value={state.name}
          onChange={onChange}
          className="column"
          placeholder="ej: Nexus S.A."
        />
      </div>
      <div className="columns ">
        <InputText
          label="Número de CUIT"
          name="cuit"
          value={state.cuit}
          onChange={onChange}
          className="column is-6"
          placeholder="00-000000-0"
        />
        <InputText
          label="Número de establecimiento"
          name="number"
          value={state.number}
          onChange={onChange}
          className="column is-6"
          placeholder="0000000-0"
        />
      </div>
      <div className="columns divider padding-button" />
      <div className="columns container-button">
        <button type="button" className="button-custom" onClick={onCancel}>Cancelar</button>
        <button type="submit" className="button-custom-primary">Crear</button>
      </div>
    </form>
  )
}

FormApplication.propTypes = propTypes

export default FormApplication
