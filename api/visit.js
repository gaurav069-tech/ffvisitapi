module.exports = (req, res) => {
  const { uid, region, key } = req.query;
  const API_KEY = process.env.API_KEY || 'mysecret123';

  if (!uid || !region || !key) {
    res.status(400).json({ error: 'Missing parameters: uid, region, key required' });
    return;
  }
  if (key !== API_KEY) {
    res.status(401).json({ error: 'Invalid key' });
    return;
  }

  // Dummy visit logic
  res.json({ success: true, message: `Visited UID ${uid} in ${region}`, uid, region });
};
