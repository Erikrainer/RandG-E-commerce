// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Category.hasMany(Product , {
  foreignKey: "category_id"
});

Product.belongsTo(Category, {
  foreignKey: "category_id"
});

Tag.hasMany(ProductTag, {
  foreignKey: "tag_id"
});

ProductTag.belongsTo(Tag, {
  foreignKey: "tag_id"
});

Product.hasMany(ProductTag, {
  foreignKey: "product_id"
});

ProductTag.belongsTo(Product, {
  foreignKey: "product_id"
});
// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
