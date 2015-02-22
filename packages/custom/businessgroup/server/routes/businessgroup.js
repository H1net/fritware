'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Businessgroup, app, auth, database) {

  app.get('/businessgroup/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/businessgroup/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/businessgroup/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/businessgroup/example/render', function(req, res, next) {
    Businessgroup.render('index', {
      package: 'businessgroup'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
