const Faker = require("@faker-js/faker");

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
      });
    }
  }

  create() {}

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((item) => item.id === id);
  }

  update() {}

  delete() {}
}

module.exports = ProductService;
