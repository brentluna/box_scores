export default async (req, res) => {
  const r = await fetch('http://ipinfo.io/json');
  const d = await r.json();
  res.statusCode = 200;
  res.json({ test: 'tested', ip: d });
};
