import React from 'react'
import PropTypes from 'prop-types'
import './InputText.scss'

const propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
}

const defaultProps = {
  className: '',
  type: 'text',
  isRequired: true,
}

const InputType = ({ label, name, onChange, className, type, placeholder, value, isRequired }) => {
  const required = isRequired ? { required: true } : {}
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        onChange={onChange}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        className="inputCustom"
        {...required}
      />
    </div>
  )
}

InputType.propTypes = propTypes
InputType.defaultProps = defaultProps

export default InputType
