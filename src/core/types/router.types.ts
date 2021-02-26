import React from 'react';
import { RouteComponentProps } from 'react-router';

export type RoutesConfiguration = RouteInfo[];

export interface RouteInfo {
  path: string;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  exact?: boolean;
  // permittedRoles?: PermittedRoles[];
  // guards?: Guard[];
}
