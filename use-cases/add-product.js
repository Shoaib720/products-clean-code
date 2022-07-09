import makeProduct from "../products";
export default function makeAddProduct({productDB}) {
  return async function addProduct(productInfo) {
    const product = makeProduct(productInfo);
    
  }
}