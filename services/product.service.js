const Faker = require("@faker-js/faker");

const boom = require("@hapi/boom");

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: Faker.datatype.uuid(),
        name: Faker.commerce.productName(),
        price: parseInt(Faker.commerce.price(), 10),
        image: Faker.image.imageUrl(),
        position: index,
        isBlock: Faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: Faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 2000);
    });
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new boom.notFound("Product Not Found");
    }
    if (product.isBlock) {
      throw new boom.conflict("Product is block");
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new boom.notFound("Product Not Found");
    } else {
      this.products[index] = {
        ...this.products[index],
        ...changes,
      };
    }
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new boom.notFound("Product Not Found");
    } else {
      this.products.splice(index, 1);
    }
    return { message: "producto eliminado", id };
  }
}

module.exports = ProductService;
