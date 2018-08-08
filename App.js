// @flow

import * as React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { createApp, renderApp } from '@phenomic/preset-react-app/lib/client'
import { withPhenomicApi } from '@phenomic/preset-react-app/lib/es6/src/phenomicPresetReactApp.js'

import * as Home from './lib/es6/src/components/Home'
import ErrorPage from './lib/es6/src/components/ErrorPage'

const routes = () => (
  <Router history={browserHistory}>
    <Route
      path="/"
      component={withPhenomicApi(Home.jsComponent, Home.queries)}
    />
    <Route path="*" component={ErrorPage} />
    <Route path="404.html" component={ErrorPage} />
  </Router>
)

const render = (rootComponent, rootTag) => {
  AppRegistry.registerComponent("App", () => () => rootComponent);
  AppRegistry.runApplication("App", { rootTag });
};

export default createApp(routes, render);

if (module.hot) {
  module.hot.accept(() => renderApp(routes, render));
}

// kill previous website ServiceWorker
if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (const registration of registrations) registration.unregister();
  });
}