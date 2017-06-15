import React from 'react'
import Paper from 'material-ui/Paper'

const TitleComponent = ({openMenu}) => {
  const styles = {
    div:{
      display: 'flex',
      flexDirection: 'row wrap',
      padding: 10,
      width: '100%'
    },
    header:{
      height: 64,
      flex: 6,
      margin: 5,
      marginRight: 20,
      paddingLeft: 20,
      textAlign: 'left'
    }

  }

  return (
		<div style={styles.div}>
      <Paper zDepth={1} style={styles.header}>
        <h2>Quorum Demo</h2>
      </Paper>
    </div>
  )
}

export default TitleComponent
