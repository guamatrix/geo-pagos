import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import 'reactbulma'
import { browserHistory, Link } from 'react-router'
import reactJsLogo from '../../../resources/assets/images/react.svg'
import './Home.scss'

const propTypes = {
  applications: PropTypes.array.isRequired,
}

class Home extends Component {

  componentWillMount() {
    // const hasApplications = this.props.applications.length > 0
    // if (hasApplications) {
    browserHistory.push('/solicitudes')
    // }
  }

  render() {
    return (
      <div>
        Home cargar forumlario
        <Link to="/solicitudes">
          Ir a solicitudes
        </Link>
      </div>
    )
  }
}

Home.propTypes = propTypes

function mapStateToProps(state) {
  return {
    applications: state.common.applications,
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
