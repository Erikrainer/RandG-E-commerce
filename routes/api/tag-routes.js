const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    const TagData = await Tag.findAll({
      include: [{ model: ProductTag}],
    });
    res.status(200).json(TagData);
  }catch(error){
    res.status(500).json(error);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try{
    const TagData = await Tag.findByPk(req.params.id, {
      include: [{ model: ProductTag}],
    });
    if(!TagData){
      res.status(404).json({
        message: "No Tag matches the id!!"
      });
      return;
    }
    res.status(200).json(TagData);
  }catch(error){
    res.status(500).json(error);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try{
    const TagData = await Tag.create({
      tag_name: req.params.tag_name,
    });
    res.status(200).json(TagData);
  }catch(error){
    res.status(500).json(error);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try{
    const TagData = await Tag.update(req.body, {
      where:{
        id:req.params.id,
      },
    });
    if(!TagData){
      res.status(400).json({
        message:"No Tag matches the id!!"
      });
      return;
    }
    res.status(200).json(TagData);
  }catch(error){
    res.status(500).json(error);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try{
    const TagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if(!TagData){
      res.status(400).json({
        message:"No Tag matches the id!!"
      });
      return;
    }
    res.status(200).json(TagData);
  }catch(error){
    res.status(500).json(error);
  }
  // delete on tag by its `id` value
});

module.exports = router;
