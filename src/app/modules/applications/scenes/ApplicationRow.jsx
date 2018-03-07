import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionApplication from '../../common/actions/commonActions'
import ApplicationData from './ApplicationData'
import './ApplicationRow.scss'
import ApplicationDeleting from './ApplicationDeleting'

const propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  actionApplication: PropTypes.object.isRequired,
}

class ApplicationRow extends Component {
  constructor(props) {
    super(props)

    const stateInitial = {
      isDeleting: false,
      isApply: false,
      terminal: '',
      animation: 'tansform-start',
    }

    this.state = stateInitial
    this.onDelete = this.onDelete.bind(this)
    this.confimDelete = this.confimDelete.bind(this)
    this.onApply = this.onApply.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.set = this.set.bind(this)
    this.remove = this.remove.bind(this)
  }

  componentDidMount() {
    setTimeout(this.set, 500)
  }

  onChange(ev) {
    const { value } = ev.target
    this.setState({ terminal: value })
  }

  onKeyPress(ev) {
    if (ev.key === 'Enter') {
      this.onApply()
    }
  }

  onDelete() {
    this.setState({ isDeleting: !this.state.isDeleting })
  }

  onApply() {
    if (this.state.terminal) {
      this.setState({ isApply: true, animation: 'transform-apply' }, this.remove)
    }
  }


  remove() {
    const callback = () => (this.props.actionApplication.deleteApplication(this.props.index))
    setTimeout(callback, 600)
  }

  set() {
    this.setState({ animation: 'transform-enter' })
  }

  confimDelete() {
    this.setState({ animation: 'transform-delete' }, this.remove)
  }

  renderRow() {
    if (this.state.isDeleting) {
      return (
        <ApplicationDeleting
          toggleDeleting={this.onDelete}
          deleting={this.confimDelete}
        />
      )
    }
    return (
      <ApplicationData
        data={this.props.data}
        onDelete={this.onDelete}
        onApply={this.onApply}
        state={this.state}
        onChangeInput={this.onChange}
        onKeyPress={this.onKeyPress}
      />
    )
  }

  render() {
    const item = this.renderRow()
    return (
      <div className={`rectangle-2-copy ${this.state.animation}`}>
        {item}
      </div>
    )
  }
}

ApplicationRow.propTypes = propTypes

function mapDispatchToProps(dispatch) {
  return {
    actionApplication: bindActionCreators(ActionApplication, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(ApplicationRow)
