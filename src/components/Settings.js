import React from 'react'
import PropTypes from 'prop-types'

const SettingsComponent = ({currentUser}) => {

	return (
		<div>
      This is the Settings page
		</div>
	)
}

SettingsComponent.propTypes = {
  currentUser: PropTypes.object.isRequired
};

export default SettingsComponent
