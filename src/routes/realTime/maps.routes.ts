import { Router } from "express";





const mapsRoutes = Router();

mapsRoutes.get("", (req, res) => {
  console.log(res)
});


export { mapsRoutes };
