import express from "express";

import { deleteProduct, createProduct, getProducts, requestProduct } from "../controllers/products.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", requestProduct);
router.delete("/:id", deleteProduct);

export default router;