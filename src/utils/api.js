import _products from './products.json'
import _categories from './categories.json'
import _productsOffers from "./_products_offers.json"


export default {
    getCategories: () => _categories.categories,
    getProducts: () => _products.products,
    getProductsOffers: () => _productsOffers.products,
}