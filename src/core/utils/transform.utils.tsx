import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { PageFallback } from '../../components/ErrorBoundaries/PageFallback/PageFallback';
import { CenteredLoader } from '../../components/Loaders/CenteredLoader/CenteredLoader';

/**
 * Lazy load component with Suspense
 *
 * @param component
 * @param fallbackComponent
 */
export const withSuspense = (
  component: () => Promise<{ default: any }>,
  fallbackComponent: JSX.Element = <CenteredLoader />,
): (() => JSX.Element) => {
  const LazyComponent = lazy(component);

  return () => (
    <ErrorBoundary FallbackComponent={PageFallback}>
      <Suspense fallback={fallbackComponent}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
};
