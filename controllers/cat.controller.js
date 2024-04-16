let cats = [];

// Create a new cat
function createCat(req, res) {
  const { id, name } = req.params;
  const newCat = { id: parseInt(id), name };
  cats.push(newCat);
  res.status(201).json(newCat);
}

// Read all cats
function readCats(req, res) {
    res.json(cats);
  }

