import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import AVPlay from 'material-ui/svg-icons/av/play-arrow'
import AVLoop from 'material-ui/svg-icons/av/loop'
import AVRepeat from 'material-ui/svg-icons/av/repeat'

const QuorumSubMenuComponent = withRouter(({history, showMenu, updateShowQuorumSubMenu}) => {

  const showQuorumMenu = (route) => {
    history.push(route)
    updateShowQuorumSubMenu(false)
  }

  const styles = {
    quorumSubmenu:{
      top: 156,
      left: 200,
      width: 300,
      zIndex: 10,
      position: 'absolute'  
    }
  }

	return (
		<div style={styles.quorumSubmenu}>
      {showMenu && <Paper>
        <List>
          <ListItem primaryText="Start" leftIcon={<AVPlay />} onClick={() => showQuorumMenu('/quorumstart')}/>
          <ListItem primaryText="Join" leftIcon={<AVLoop />} onClick={() => showQuorumMenu('/quorumjoin')}/>
          <ListItem primaryText="Reconnect" leftIcon={<AVRepeat />} onClick={() => showQuorumMenu('/quorumreconnect')}/>
        </List>
      </Paper>
      }
		</div>
	)
})

export default QuorumSubMenuComponent
