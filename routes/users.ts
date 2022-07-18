import express , {Request,Response} from "express";
const router = express.Router();

/* GET users listing. */
router.get('/', (req:Request, res:Response)=> {
  res.send('Get Users Mthod Called');
});

module.exports = router;
