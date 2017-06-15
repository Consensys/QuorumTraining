import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin'
import {grey800, grey900} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import Paper from 'material-ui/Paper'

import Title from './components/Title'
import LeftMenu from './components/LeftMenu'
import Home from './containers/Home'

injectTapEventPlugin();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunkMiddleware
    )
  )
)

const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 10,
    width: '100%'
  },
  paperLeft:{
    flex: 1,
    maxWidth: 240,
    height: 600,
    margin: 5,
    textAlign: 'left',
  },
  paperRight:{
    height: 600,
    padding: 20,
    flex: 5,
    margin: 5,
    marginRight: 20,
    textAlign: 'left',
  },
  topLevel:{
    backgroundColor: '#505050',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
};

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Router>
        <div style={styles.topLevel}>
          <Title />
          <div style={styles.div}>
            <Paper zDepth={1} style={styles.paperLeft}>
              <LeftMenu />
            </Paper>
            <Paper zDepth={1} style={styles.paperRight}>
              <Route exact path="/" component={Home}/>
              <Route path="/home" component={Home}/>
            </Paper>
          </div>

        </div>
      </Router>

    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)

