import { Router } from "express"
import { getAllData, run, valasz3, AddData } from  "./controller"

const router = Router()
router.get("/getAllData", getAllData);
router.get("/", run);
router.get("/kutyak/mind", valasz3);
router.get("/kutyak/mind1", AddData);
export default router;