import { Product, ProductDbItem } from "./products.model";
import { saveProduct } from "./products.store";

export async function addProduct(product: Product): Promise<ProductDbItem> {
  return await saveProduct(product)
}