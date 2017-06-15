import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {List, ListItem} from 'material-ui/List'
import ActionHome from 'material-ui/svg-icons/action/home'
import ActionDashboard from 'material-ui/svg-icons/action/dashboard'
import SocialPerson from 'material-ui/svg-icons/social/person'
import SocialPersonOutline from 'material-ui/svg-icons/social/person-outline'
import ActionSettings from 'material-ui/svg-icons/action/settings'

const LeftMenuComponent = withRouter(({history}) => {
	return (
    <List>
      <ListItem primaryText="Home" leftIcon={<ActionHome />} onClick={() => history.push('/home')}/>
      <ListItem primaryText="Bob" leftIcon={<SocialPerson />} onClick={() => history.push('/bob')}/>
      <ListItem primaryText="Alice" leftIcon={<SocialPersonOutline />} onClick={() => history.push('/alice')}/>
      <ListItem primaryText="Settings" leftIcon={<ActionSettings />} onClick={() => history.push('/settings')}/>
    </List>
	)
})

export default LeftMenuComponent
