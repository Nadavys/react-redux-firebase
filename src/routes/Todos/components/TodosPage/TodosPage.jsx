import React from 'react'
import { Link } from 'react-router-dom'
import { useFirebase } from 'react-redux-firebase'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import { useNotifications } from 'modules/notification'

import styles from './TodosPage.styles'
import TodosList from '../TodosList'

const useStyles = makeStyles(styles)

function TodosPage() {
  const classes = useStyles()
  const firebase = useFirebase()
  const { showError } = useNotifications()

  return (
    <div className={classes.root} >
      <h1>My TODOs</h1>
      <TodosList/>

    </div>
  )
}

export default TodosPage
