const router = require('express').Router();
const { User, Service, Task } = require('../../models');

router.get('/',async (req, res) => {

    try{
      const taskData = await Task.findAll({
        include: [{ model: User }, { model: Service}],
      });
      res.status(200).json(taskData);
    } catch(err) {
      res.status(500).json(err);
    }
});
  
router.get('/:id',async (req, res) => {
    try{
      const taskData = await Task.findByPk(req.params.id);
      if (!taskData) {
        res.status(404).json({message: 'No task found with that id!'});
        return
      }
      res.status(200).json(profileData);
    } catch(err){
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
      const newTask = await Task.create(req.body)
              
      req.session.save(() => {
        req.session.taskId = newTask.id
        });
  
        res.status(200).json(newTask, { message: 'task posted!'});

    } catch (err) {
      res.status(400).json(err);
    }
  });

router.put('/:id', async(req,res)=>{
  try{
    const taskData = await Task.update(
      {isActive:req.body.isActive}
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