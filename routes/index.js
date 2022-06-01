
const faker = require('faker'); 

function routerApi(app) {
    app.get('/product', product);
    app.get('/product-list', productList);
   /*  app.post('/heladera', crearHeladera) */
}


/* function crearHeladera(req, res) {
    console.log(req);
} */


function product(req, res) {
    const products = [{
        name: 'auto',
        price: 15000,
    },
    {
        name: 'celular',
        price: 1400,
    }];
    
    res.json(products);
}


// se puede pasar el valor del tamaño del array por URL

function productList(req, res) {
    const products = [];
    const { size } = req.query;
    const limit = size || 10;
	for (let i = 0; i < limit; i++) {
		products.push({
			name: faker.commerce.productName(),
			price: parseInt(faker.commerce.price(), 10),
			image: faker.image.imageUrl(),
		})
	}
    res.json(products);
}


module.exports = routerApi;