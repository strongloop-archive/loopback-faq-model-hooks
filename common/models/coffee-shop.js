module.exports = function(CoffeeShop) {
  // initialize
  CoffeeShop.afterInitialize = function() {
    console.log('> afterInitialize triggered');
  };

  // validate
  CoffeeShop.beforeValidate = function(next, modelInstance) {
    console.log('> beforeValidate triggered', modelInstance);
    next();
  };

  CoffeeShop.afterValidate = function(next) {
    console.log('> afterValidate triggered');
    next();
  };

  // create
  CoffeeShop.beforeCreate = function(next, modelInstance) {
    console.log('> beforeCreate triggered', modelInstance);
    next();
  };

  CoffeeShop.afterCreate = function(next) {
    console.log('> afterCreate triggered');
    next();
  };

  // save
  CoffeeShop.beforeSave = function(next, modelInstance) {
    console.log('> beforeSave triggered', modelInstance);
    next();
  };

  CoffeeShop.afterSave = function(next) {
    console.log('> afterSave triggered');
    next();
  };

  // update
  CoffeeShop.beforeUpdate = function(next, changes) {
    console.log('> beforeUpdate triggered', changes);
    next();
  };

  CoffeeShop.afterUpdate = function(next) {
    console.log('> afterUpdate triggered');
    next();
  };

  // destroy
  CoffeeShop.beforeDestroy = function(next) {
    console.log('> beforeDestroy triggered');
    next();
  };

  CoffeeShop.afterDestroy = function(next) {
    console.log('> afterDestroy triggered');
    next();
  };
};
