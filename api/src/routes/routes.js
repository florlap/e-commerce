const {Router}= require("express")
const router = Router();

router.get('/', (req, res)=> {
    const algo = algou
    res.status(200).json(algo)
})