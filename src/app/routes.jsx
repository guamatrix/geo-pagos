import React from 'react'
import { Route, IndexRoute } from 'react-router'
import translations from './translations'

import App from './modules/common/scenes/App'
import Home from './modules/home/scenes/Home'
import Applications from './modules/applications/scenes/Applications'

export default (lang = 'en') => {
  const trans = translations[lang].messages
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/solicitudes" component={Applications} />
      <Route title="404 Page Not Found" path="*" component={() => <div>404 Route</div>} />
    </Route>
  )
}
