import express , {Request,Response} from "express";

const router = express.Router();

/* GET home page. */
router.get('/', (req: Request, res: Response) =>{
  res.render('index', { title: 'Reza' });
});

module.exports = router;
