import { writeFile, readFile } from 'fs/promises'
import { faker } from "@faker-js/faker";
import { Product, ProductDbItem } from './products.model';

export const getProductsFromFile  = async (): Promise<(ProductDbItem[] | [])> => {
  let fileContentBuffer: Buffer = await readFile(__dirname+'/../database/products.json');
  const fileContentText: string = fileContentBuffer.toString() === '' ? '[]' : fileContentBuffer.toString();
  const productsList: (ProductDbItem[] | []) = JSON.parse(fileContentText);
  return productsList;
}

export async function saveProduct(product: Product): Promise<ProductDbItem> {
  const newProduct = {
    id: faker.datatype.uuid(),
    ...product,
    createdAt: new Date(),
  }
  
  const newProductsList: ProductDbItem[] = await getProductsFromFile();
  newProductsList.push(newProduct)

  await writeFile(__dirname+"/../database/products.json", JSON.stringify(newProductsList));
  return newProduct;
}