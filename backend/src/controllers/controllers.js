const { faker } = require('@faker-js/faker');
const { getFirestoreDb } = require('../database/firebase');
const { generateObject } = require("../database/generate");

exports.getAllSortimente = async (req, res) => {
  try {
    const db = getFirestoreDb();
    const sortimentRef = db.collection('sortimente');
    const docs = await sortimentRef.get();

    if (docs.empty) {
      return res.status(200).json({ message: 'Nu au fost gasite sortimente', sortimente: [] });
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

exports.getSortimentById = async (req, res) => {
  try {
    const { sortimentId } = req.params;
    if (!sortimentId || typeof sortimentId !== 'string') {
      return res.status(400).json({ message: 'ID Invalid' });
    }

    const db = getFirestoreDb();
    const sortimentRef = db.collection('sortimente').doc(sortimentId); 
    const doc = await sortimentRef.get();

    if (!doc.exists) {
      return res.status(404).json({ message: 'Sortimentul nu a fost gasit' });
    }

    const sortiment = { id: doc.id, ...doc.data() };
    return res.status(200).json({ message: 'Sortiment extras cu succes!', sortiment });
  } catch (error) {
    return res.status(500).json({ message: 'Eroare', error: error.message });
  }
 };


exports.addSortiment = async (req, res) => {
  try {
    console.log('Request body:', req.body); 

    const { image: image, description: description } = req.body;


    if (!image || !description) {
      return res.status(400).json({ message: 'Toate câmpurile sunt obligatorii!' });
    }

    const db = getFirestoreDb();
    const sortimentRef = db.collection('sortimente');

    const sortimentNou = {
      image,
      description: description.trim()
    };

    console.log('New sortiment:', sortimentNou); 

    const sortimentAdaugat = await sortimentRef.add(sortimentNou);

    return res.status(201).json({
      message: 'Sortiment creat cu succes!',
      sortiment: { id: sortimentAdaugat.id, ...sortimentNou },
    });
  } catch (error) {
    console.error('Error in addSortiment:', error); 
    return res.status(500).json({ message: 'Eroare', error: error.message });
  }
};


exports.editSortiment = async (req, res) => {
  try {
    const { sortimentId } = req.params; 
    const modificare = req.body;

    if (!sortimentId || typeof sortimentId !== 'string') {
      return res.status(400).json({ message: 'ID Invalid' });
    }

    const db = getFirestoreDb();
    const sortimentRef = db.collection('sortimente').doc(sortimentId);

    const doc = await sortimentRef.get();
    if (!doc.exists) {
      return res.status(404).json({ message: 'Sortimentul nu a fost gasit!' });
    }

    await sortimentRef.update(modificare);
    const sortimentModificat = (await sortimentRef.get()).data();

    return res
      .status(200)
      .json({
        message: 'Sortiment actualizat!',
        sortiment: { id: sortimentId, ...sortimentModificat },
      });
  } catch (error) {
    return res.status(500).json({ message: 'Error', error: error.message });
  }
};


exports.deleteSortiment = async (req, res) => {
  try {
    const { sortimentId } = req.params; 

    if (!sortimentId || typeof sortimentId !== 'string') {
      return res.status(400).json({ message: 'ID Invalid' });
    }

    const db = getFirestoreDb();
    const sortimentRef = db.collection('sortimente').doc(sortimentId);

    const doc = await sortimentRef.get();
    if (!doc.exists) {
      return res.status(404).json({ message: 'Sortimentul nu a fost gasit!' });
    }

    await sortimentRef.delete();

    return res.status(200).json({ message: 'Sortiment sters!', id: sortimentId });
  } catch (error) {
    return res.status(500).json({ message: 'Error', error: error.message });
  }
};


exports.generateSortimente = async (req, res) => {
  try {
    const db = getFirestoreDb();
    const sortimentRef = db.collection('sortimente');

    const sortimentulGenerat = generateObject();
    
    console.log(sortimentulGenerat)

    const documentAdaugat = await sortimentRef.add(sortimentulGenerat);

    return res.status(201).json({ message: 'Sortiment generat', sortiment:{id:documentAdaugat.id, ...sortimentulGenerat }});
  } catch (error) {
    return res.status(500).json({ message: 'Error', error: error.message });
  }
};



