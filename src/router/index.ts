import { Router } from "express";

const router = Router();

router.use("/test", () => {
  console.log("test");
});

export default router;
