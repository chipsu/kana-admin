const routes = require('next-routes')()

// Index
routes.add('index', '/', 'index')

// Domain
// TODO: Move all below to "modules" or something?
routes
  .add('domain_list', '/domain', 'domain/index')
  .add('domain_view', '/domain/:id', 'domain/_id')

// App manager
routes
  .add('domain_app_list', '/domain/:id/app', 'app/index')
  .add('domain_app_view', '/domain/:id/app/:id', 'app/_id')

// CMS App
routes
  .add('domain_cms_list', '/domain/:id/cms', 'cms/index')
  .add('domain_cms_view', '/domain/:id/cms/:id', 'cms/_id')

module.exports = routes
