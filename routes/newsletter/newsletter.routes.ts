import { Router } from "express";
import { createNewsletterController } from "../../Modules/Newsletter/useCases/createNewsletter";



const newsletterRoutes = Router();

newsletterRoutes.post("/", (req, res) => {
  return createNewsletterController.handle(req, res);
});

export { newsletterRoutes };
