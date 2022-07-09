export default function buildMakeProduct() {
  return function makeProduct({id, title, price, currency}){
    if(!id){
      throw new Error("Product must have a ID.")
    }
    if(!title){
      throw new Error("Product must have a title.")
    }
    if(!price){
      throw new Error("Product must have a price.")
    }
    if(!currency){
      throw new Error("Product must have a currency.")
    }
    return Object.freeze({
      getId: () => id,
      getTitle: () => title,
      getPrice: () => price,
      getCurrency: () => currency
    })
  }
}