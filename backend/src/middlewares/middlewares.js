const { getAuth } = require('../database/firebase');
const auth = getAuth();

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token lipsa.' });
  }

  try {
    const decodedToken = await auth.verifyIdToken(token);
    req.user = { uid: decodedToken.uid };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token invalid.' });
  }
};

module.exports = { authenticate };