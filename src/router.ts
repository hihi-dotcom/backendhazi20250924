import {Router} from "express"
import { valasz, valasz2, valasz3 } from  "./controller"

const router: Router = Router()
router.get("/apik", valasz);
router.get("/apik", valasz2);
router.get("/kutyak", valasz3);
export default router;