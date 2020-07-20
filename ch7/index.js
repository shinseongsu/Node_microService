var plugin = function(options) {
    var seneca = this;

    /*
    *   모든 제품 목록을 가지고 온다.
    */
   seneca.add({area: "product", action: "fetch"}, function(args, done) {
        var products = this.make("products");
        products.list$({}, done);
    });

    /*
    *   카테고리에 의한 제품 목록을 가져온다.
    */

    seneca.add({area: "product", action: "fetch", criteria: "byCategory"}, function(args, done) {
        var products = this.make("products");
        products.list$({category: args.category}, done);
    });

    /*
    *   id 에 의해 제품을 가져온다.
    */

    seneca.add({area: "product", action: "fetch", criteria: "byId"}, function(args, done) {
        var product = this.make("products");
        product.load$(args.id, done);
    });

    /*
    *   제품을 추가한다.
    */
   seneca.add({area: "product", action: "add"}, function(args, done) {
        var products = this.make("products");
        products.category = args.category;
        products.name = args.name;
        products.description = args.description;
        products.category = args.category;
        products.price = args.price
        products.save$(function(err, product) {
            done(err, products.data$(false));
        });
    });

    /*
    *   id를 통해 제품을 제거한다.
    */
   seneca.add({area: "product", action: "remove"}, function(args, done) {
        var product = this.make("products");
        product.remove$(args.id, function(err) {
            done(err, null);
        });
    });


    /*
    *   id를 통해 제품을 가져오고, 제품을 편집한다.
    */
   seneca.add({area: "product", action: "edit"}, function(args, done) {
        seneca.act({area: "product", action: "fetch", criteria: "byId", id: args.id}, function(err, result) {
            result.data$(
                {
                    name: args.name, 
                    category: args.category, 
                    description: args.description,
                    price: args.price                        
                }
            );
            result.save$(function(err, product){
                done(err, product.data$(false));
            });
        });
    });
}
module.exports = plugin;


var seneca = require("seneca")();
seneca.use(plugin);
seneca.use("mongo-store", {
    name: "seneca",
    host: "127.0.0.1",
    port: "27017"
});

seneca.ready(function(err){
    
    seneca.act('role:web',{use:{
      prefix: '/products',
      pin: {area:'product',action:'*'},
      map:{
        fetch: {GET:true},          
        edit: {GET:false,POST:true},
        delete: {GET: false, DELETE: true}
      }
    }});

    var express = require('express');
    var app = express();

    app.use(require("body-parser").json());
    
    app.use( seneca.export('web') );

    app.listen(3000);

});
