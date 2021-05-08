const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll({
            include: [{ model: Product }],
        });
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: `No category found with id ${req.params.id}` });
      return;
    }
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {



        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {



        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {



        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
