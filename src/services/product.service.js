import axios from 'axios';

export class ProductService {
  async getProductsByCategory(categoryId) {
    const response = await axios.get('/products', { params: { categoryId } });
    return response.data;
  }

  async getProductById(productId) {
    const response = await axios.get(`/products/${productId}`);
    return response.data;
  }
}