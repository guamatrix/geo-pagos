import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import Header from './Header'
import ApplicationRow from './ApplicationRow'
import Modal from '../../common/scenes/Modal'
import FormApplication from '../../../components/forms/FormApplication'
import { addApplication } from '../../common/actions/commonActions'

const propTypes = {
  applications: PropTypes.array.isRequired,
  saveApplication: PropTypes.func.isRequired,
}

const stateInitial = {
  isOpenModal: false,
  cuit: '',
  name: '',
  number: '',
}

class Applications extends Component {
  constructor(props) {
    super(props)
    this.state = stateInitial
    this.toggleModal = this.toggleModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(ev) {
    const { name, value } = ev.target
    this.setState({ [name]: value })
  }

  onSubmit(ev) {
    ev.preventDefault()
    const { cuit, name, number } = this.state
    const { applications } = this.props
    const size = applications.length - 1
    const data = {
      id: size === -1 ? 1 : applications[size].id + 1,
      cuit,
      name,
      number,
      date: moment().format('DD-MM-YYYY'),
    }
    this.props.saveApplication(data)
    this.setState(stateInitial)
    this.toggleModal()
  }

  toggleModal() {
    this.setState({ isOpenModal: !this.state.isOpenModal })
  }

  renderRows() {
    return this.props.applications.map((item, index) => (
      <ApplicationRow
        key={item.id}
        index={index}
        data={item}
      />)
    )
  }

  renderForm() {
    return (
      <FormApplication
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        state={this.state}
        onCancel={this.toggleModal}
      />
    )
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Header onCreate={this.toggleModal} />
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              {this.renderRows()}
            </div>
          </div>
        </div>
        {this.state.isOpenModal &&
          <Modal
            toggleModal={this.toggleModal}
            title="Crear Solicitud"
            content={
              this.renderForm()
            }
          />
        }
      </div>
    )
  }
}

Applications.propTypes = propTypes

function mapStateToProps(state) {
  return {
    applications: state.common.applications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveApplication: bindActionCreators(addApplication, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Applications)
