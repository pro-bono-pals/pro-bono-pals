const router = require('express').Router();
const isAuth = require('../../utils/auth')
const { User, Task } = require('../../models');

router.get('/',async (req, res) => {

    try{
      const taskData = await Task.findAll({
        include: [{ model: User }],
      });
      res.status(200).json(taskData);
    } catch(err) {
      res.status(500).json(err);
    }
});
  
router.get('/:id',async (req, res) => {
  try{
    const taskData = await Task.findByPk(req.params.id,{
      include: [{ model: User }],
    });
    if (!taskData){
      res.status(404).json({message: 'No task found with that id!'});
      return
    }
    res.status(200).json(taskData);
  } catch(err){
    res.status(500).json(err);
  }
});


router.post('/',isAuth, async (req, res) => {
    try {
      const taskData = await Task.create(req.body);
      req.session.save(()=>{
        req.session.user_id = taskData.id;
        req.session.logged_in = true;
      })
      
      res.status(200).json(taskData);
    }catch(err) {
      res.status(400).json(err);
    }
  });

router.put('/:id', async(req,res)=>{
  try{
    const taskData = await Task.update(
      {
        isActive:req.body.isActive,
        isCompleted: req.body.isCompleted,
        provider_id: req.body.provider_id,
      }

      ,
      {
        where:{
          id: req.params.id,
        }
      },
    );
    if(!taskData[0]) {
      res.status(404).json({messeage:"No post found with this id"});
      return;
    }
    res.status(200).json(taskData);
  }catch(err){
    res.status(500).json(err)
  }
});

// router.delete('/:id', async (req, res) => {
//     try {
//       const taskData = await Task.destroy({
//         where: {
//           id: req.params.id,
//           userId: req.session.userId
//         },
//       });
  
//       if (!taskData) {
//         res.status(404).json({ message: 'No task found with this id!' });
//         return;
//       }
  
//       res.status(200).json(taskData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


module.exports = router;