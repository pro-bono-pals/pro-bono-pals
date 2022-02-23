const router = require('express').Router();
const isAuth = require('../../utils/auth')

const { Profile, User, Education, Service } = require('../../models');

router.get('/',async (req, res) => {

    try{
      const profileData = await Profile.findAll({
        include: [{ model:User  }, { model: Education},{ model: Service},],
      });
      res.status(200).json(profileData);
    } catch(err) {
      res.status(500).json(err);
    }
});
  
router.get('/:id',async (req, res) => {
    try{
      const profileData = await Profile.findByPk(req.params.id);
      if (!profileData) {
        res.status(404).json({message: 'No profile found with that id!'});
        return
      }
      res.status(200).json(profileData);
    } catch(err){
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
      const profileData = await Profile.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = profileData.id;
        req.session.logged_in = true;
  
        res.status(200).json(profileData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;