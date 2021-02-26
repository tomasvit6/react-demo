import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { RoutesConfiguration } from '../../core/types/router.types';
import { applicantRoutePaths } from '../../routes/Applicant/ApplicantRoutes';
import { PageNotFoundView } from '../../routes/PageNotFound/PageNotFoundView/PageNotFoundView';

interface RouterOutlerProps {
  routes: RoutesConfiguration;
}

interface RouterOutlerPrivateProps extends RouterOutlerProps {}

export const RouterOutlet: React.FunctionComponent<RouterOutlerPrivateProps> = (props) => {
  const { routes } = props;

  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} exact={!!route.exact} path={route.path} render={(props) => <route.component {...props} />} />
      ))}
      <Redirect from="/" to={applicantRoutePaths.applicantView} exact />
      <Route component={PageNotFoundView} />
    </Switch>
  );
};
