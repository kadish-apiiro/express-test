app.get(
  '/readiness-probe1',
  (req, res) => res.status(200).send('Ready')
);

app.get(
  'readiness-probe2',
  '/readiness-probe2',
  (req, res) => res.status(200).send('Ready')
);

function Routes(app) {
  app.get(
    '/readiness-probe3',
    (req, res) => res.status(200).send('Ready')
  );

  app.get(
    'readiness-probe4',
    '/readiness-probe4',
    (req, res) => res.status(200).send('Ready')
  );
}

exports = module.exports = Routes;
