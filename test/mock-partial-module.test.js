import {getAllProducts, getProductById} from "../src/database";
import {ProductService} from "../src/product-service";

jest.mock('../src/database.js', () => {
  const originalModule = jest.requireActual('../src/database.js');

  return {
    __esModule: true,
    ...originalModule,
    getProductById: jest.fn(),
    getAllProducts: jest.fn(),
  };
})

test('mock modules getProductById', () => {
  getProductById.mockImplementation((id) => {
    return {id, name: 'product mock'}
  })
  const product = ProductService.findById(1);
  expect(product).toEqual({id: 1, name: 'product mock'});
})

test('mock modules getAllProducts', () => {
  getAllProducts.mockImplementation(() => {
    return [{id: 1, name: 'product mock'}]
  })

  const products = ProductService.findAll();
  expect(products).toEqual([{id: 1, name: 'product mock'}]);
})
