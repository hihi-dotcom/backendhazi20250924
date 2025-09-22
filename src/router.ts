import {Router} from "express"
import { valasz, valasz2 } from  "./controller"

const router: Router = Router()
router.get("/apik", valasz);
router.get("/apik", valasz2);

export default router;