// product_id = 37313
const exampleOutOfStock = {
  "product_id": "37312",
  "results": [
      {
          "style_id": 221004,
          "name": "Black Lenses & Black Frame",
          "original_price": "69.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": null,
                  "url": null
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      },
    ]
  }

const exampleInStock = {
	"product_id": "37311",
	"results": [
		{
			"style_id": 220998,
			"name": "Forest Green & Black",
			"original_price": "140.00",
			"sale_price": null,
			"default?": true,
			"photos": [],
			"skus": {
				"1281032": {
					"quantity": 8,
					"size": "XS",
				},
				"1281033": {
					"quantity": 16,
					"size": "S",
				},
				"1281034": {
					"quantity": 17,
					"size": "M",
				},
				"1281035": {
					"quantity": 10,
					"size": "L",
				},
				"1281036": {
					"quantity": 15,
					"size": "XL",
				},
				"1281037": {
					"quantity": 4,
					"size": "XL",
				},
			},
		},
	],
};

module.exports = {
	exampleOutOfStock,
	exampleSkus,
};
