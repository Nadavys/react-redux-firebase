import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import ProjectRoute from 'routes/Projects/routes/Project'
import { renderChildren } from 'utils/router'
import ProjectsList from '../ProjectsList'

function ProjectsPage() {
  const match = useRouteMatch()
  console.log("x", match)
  return (
    <Switch>
      {/* Child routes */}
      {renderChildren([ProjectRoute])}
      {/* Main Route */}
      <ProjectsList />
      {/* <Route exact path={match.path} render={() => <ProjectsList />} /> */}
    </Switch>
  )
}

export default ProjectsPage
