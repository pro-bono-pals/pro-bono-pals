const router = require('express').Router();
const { Service } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const serviceData = await Service.create(req.body);
        
        req.session.save(() => {
        req.session.serviceId = serviceData.id
        });
        
        res.status(200).json(serviceData);
    } catch (err) {
        res.status(400).json(err);
    };
});

router.get('/',async (req, res) => {

    try{
      const serviceData = await Service.findAll();
      res.status(200).json(serviceData);
    } catch(err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/:id',async (req, res) => {
    try{
      const serviceData = await Service.findByPk(req.params.id);
      if (!serviceData) {
        res.status(404).json({message: 'No service with that id!'});
        return
      }
      res.status(200).json(serviceData);
    } catch(err){
      res.status(500).json(err);
    }
  });

// router.delete('/:id', async (req, res) => {
//     try {
//         const ServiceData = await Service.destroy({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id,
//             },
//         });

//         if (!serviceData) {
//             res.status(404).json({ message: 'No service found with this id!' });
//             return;
//         };

//         res.status(200).json(serviceData);
//     } catch (err) {
//         res.status(500).json(err);
//     };
// });

// router.put('/:id', async (req, res) => {
//     try {
//         const serviceData = await Service.update(
//             {
//                 title: req.body.title,
//                 text: req.body.text,
//             },
//             {
//                 where: {
//                     id: req.params.id,
//                 },
//             },
//         );

//         if (!postData) {
//             res.status(404).json({ message: 'No service found with this id' });
//         };

//         res.status(200).json(serviceData);
//     } catch {
//         res.status(500).json(err);
//     };
// });

module.exports = router;