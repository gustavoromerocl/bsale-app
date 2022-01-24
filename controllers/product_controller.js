/* https://sequelize.org/v5/manual/models-usage.html */

var Product = require('../models').product;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  //A traves de la funcion findAll del modelo se traen todos los productos y envia una respuesta de los mismos en formato json
  index: function(req, res){
    res.header("Access-Control-Allow-Origin","*");
    /**
     * En las siguientes líneas de codigo se valida que la infromación recibida desde los query params sea un valor number, ya que 
     * si es otro tipo de dato genera inconsistencias en la query que realiza sequelize
     */
    const pageAsNumber = Number.parseInt(req.query.page);
    const sizeAsNumber = Number.parseInt(req.query.size);

    //valores por defecto
    let page = 0;
    let size = 8;

    if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0) page = pageAsNumber;
    

    if(!Number.isNaN(sizeAsNumber)&& sizeAsNumber > 0 && sizeAsNumber < 10) size = sizeAsNumber
    
    Product.findAndCountAll({
      limit: size,
      offset: page * size,
      //Validamos que  las imagenes no sean nulas y que no contengan strings vacíos
      where: {
        [Op.and]: [
          {url_image: { [Op.ne]: null } },
          {url_image: { [Op.ne]: "" } }
        ]
        
      }
    })
    .then(products => res.json({
      content: products.rows,
      totalPages: Math.ceil(products.count / size)
    }));
    
  },
  //Filtro de busqueda de productos por el parametro ingresado en la barra de busqueda
  filter: function(req, res){
    res.header("Access-Control-Allow-Origin","*");
    Product.findAll({
      where: {
        name: {
          [Op.like]: `%${req.params.wildcard}%`
        }
      }
    }).then(result => res.json(result));
  }
}