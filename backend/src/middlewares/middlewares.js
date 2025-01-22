const { getFirestoreDb, getAuth } = require('../database/firebase');
const db = getFirestoreDb();
const auth = getAuth();

const authenticate = async (req, res, next) => {
  
  const token = req.headers.authorization?.split(' ')[1]; // Extrage token-ul din header
  if (!token) {
    return res.status(401).json({ message: 'Token lipsa.' });
  }

  try {
    const decodedToken = await auth.verifyIdToken(token);
    req.user = { uid: decodedToken.uid };
    next();
  } catch (error) {
    console.error('Eroare la verificarea token-ului:', error);
    return res.status(401).json({ message: 'Token invalid.' });
  }
};

const authorizeAdmin = async (req, res, next) => {
  try {
    const { uid } = req.user;
    const userDoc = await db.collection('users').doc(uid).get();

    if (!userDoc.exists) {
      return res.status(403).json({ message: 'Utilizatorul nu a fost gasit.' });
    }

    const userData = userDoc.data();
    if (userData.role !== 'admin') {
      return res.status(403).json({ message: 'Acces restrictionat pentru admini.' });
    }

    next();
  } catch (error) {
    console.error('Eroare la verificarea rolului:', error);
    return res.status(500).json({ message: 'Eroare la server.' });
  }
};

const getUserRoleFromDb = async (uid) => {
  try {
    const querySnapshot = await db.collection('users').where('id', '==', uid).get();
    
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      return userDoc.data().role;
    }
    return null;
  } catch (error) {
    console.error('Eroare la obtinerea rolului:', error);
    return null;
  }
};

module.exports = { authenticate, authorizeAdmin, getUserRoleFromDb };