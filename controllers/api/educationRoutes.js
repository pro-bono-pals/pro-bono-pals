const router = require('express').Router();
const {Education} = require('../../models');

router.get('/',async (req, res) => {

    try{
      const educationData = await Education.findAll();
      res.status(200).json(educationData);
    } catch(err) {
      res.status(500).json(err);
    }
});
  
router.get('/:id',async (req, res) => {
    try{
      const educationData = await Education.findByPk(req.params.id);
      if (!educationData) {
        res.status(404).json({message: 'No education found with that id!'});
        return
      }
      res.status(200).json(educationData);
    } catch(err){
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
      const educationData = await Education.create(req.body);
  
      req.session.save(() => {
        req.session.educationId = educationData.id;  
        res.status(200).json(educationData, { message: 'New education name added!'});
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;