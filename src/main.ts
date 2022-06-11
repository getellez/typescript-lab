import { Product, ProductDbItem } from './products/products.model';
import { faker } from '@faker-js/faker'
import { addProduct } from './products/products.services';
import { getProductsFromFile } from './products/products.store';


(async () => {
  
  // const productsList: Product[] = [];
  const productsToAdd:number = 1;
  
  for (let i = 0; i < productsToAdd; i++) {
    const product: Product = {
      name: faker.commerce.productName(),
      categoryId: faker.datatype.number({min:1, max: 10}),
      expDate: faker.date.recent()
    }
    await addProduct(product)

    const existingProducts: ProductDbItem[] = await getProductsFromFile()
    console.log(existingProducts)
    console.log(typeof existingProducts)
  }

})()





