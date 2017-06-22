import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {List, ListItem} from 'material-ui/List'
import ActionHome from 'material-ui/svg-icons/action/home'
import ActionDashboard from 'material-ui/svg-icons/action/dashboard'
import SocialPerson from 'material-ui/svg-icons/social/person'
import SocialPersonOutline from 'material-ui/svg-icons/social/person-outline'
import ActionSettings from 'material-ui/svg-icons/action/settings'
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right'
import HardwareDeviceHub from 'material-ui/svg-icons/hardware/device-hub'
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart'
import DeviceDeveloperMode from 'material-ui/svg-icons/device/developer-mode'
import ActionAccountBalanceWallet from 'material-ui/svg-icons/action/account-balance-wallet'
import ActionCompareArrows from 'material-ui/svg-icons/action/compare-arrows'

const LeftMenuComponent = withRouter(({history}) => {
	return (
    <List>
      <ListItem primaryText="Home" leftIcon={<ActionHome />} onClick={() => history.push('/home')}/>
      <ListItem primaryText="Quorum" leftIcon={<HardwareDeviceHub />} rightIcon={<NavigationChevronRight />} onClick={() => history.push('/quorumstart')}/>
      <ListItem primaryText="Accounts" leftIcon={<ActionAccountBalanceWallet />} onClick={() => history.push('/home')}/>
      <ListItem primaryText="Contracts" leftIcon={<DeviceDeveloperMode />} onClick={() => history.push('/home')}/>
      <ListItem primaryText="Transactions" leftIcon={<ActionCompareArrows />} onClick={() => history.push('/home')}/>
      <ListItem primaryText="Network Status" leftIcon={<EditorInsertChart />} onClick={() => history.push('/home')}/>
      <ListItem primaryText="Settings" leftIcon={<ActionSettings />} onClick={() => history.push('/settings')}/>
    </List>
	)
})

export default LeftMenuComponent
