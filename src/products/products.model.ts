export interface ProductDbItem extends Product {
  id: string,
  createdAt: Date,
}

export interface Product {
  name: string,
  categoryId: number,
  expDate?: Date
}