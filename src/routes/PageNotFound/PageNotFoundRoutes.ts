import { RouteInfo } from '../../core/types/router.types';
import { withSuspense } from '../../core/utils/transform.utils';

export enum pageNotFoundRoutePaths {
  pageNotFoundView = '/page-not-found',
}

const PageNotFoundView = withSuspense(() =>
  import('./PageNotFoundView/PageNotFoundView').then((module) => ({ default: module.PageNotFoundView })),
);

export const pageNotFoundRoutesConfig: RouteInfo = {
  path: pageNotFoundRoutePaths.pageNotFoundView,
  component: PageNotFoundView,
  exact: true,
};
