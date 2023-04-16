import _products from './products.json'
import _categories from './categories.json'
import _productsOffers from "./_products_offers.json"

console.log(_productsOffers);

export default {
    getCategories: () => _categories.categories,
    getProducts: () => _products.products,
    getProductsOffers: () => _productsOffers.products,
}