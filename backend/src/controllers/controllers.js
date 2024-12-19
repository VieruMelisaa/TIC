const { getFirestoreDb } = require('../database/firebase');

exports.getAllSortimente = async (req, res) => {
  try {
    const db = getFirestoreDb();
    const sortimentRef = db.collection('sortimente');
    const docs = await sortimentRef.get();

    if (docs.empty) {
      return res.status(200).json({ message: 'Nu au fost găsite sortimente', sortimente: [] });
    }

    const sortimente = docs.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return res.status(200).json({ message: 'Sortimentele au fost preluate cu succes!', sortimente });
  } catch (error) {
    return res.status(500).json({ message: 'Eroare', error: error.message });
  }
};

exports.addSortiment = async (req, res) => {
  try {
    const { image, description } = req.body;
    if (!image || !description) {
      return res.status(400).json({ message: 'Toate câmpurile sunt obligatorii!' });
    }

    const db = getFirestoreDb();
    const sortimentRef = db.collection('sortimente');
    const sortimentNou = { image, description: description.trim() };
    const sortimentAdaugat = await sortimentRef.add(sortimentNou);

    return res.status(201).json({ message: 'Sortiment creat cu succes!', sortiment: { id: sortimentAdaugat.id, ...sortimentNou } });
  } catch (error) {
    return res.status(500).json({ message: 'Eroare', error: error.message });
  }
};