const SoundsService = require('../../../services/Sounds');

/**
 * Controlador utilizado para crear sonidos en la base de datos.
 */
 const SoundsController = {}

 /**
 * Creación de sonidos
 * Esta función verifica que todos los campos requiriridos esten contenidos en el 
 * objeto recibido en la petición. Si la verificaión falla el servidor responde con
 * un código 400. Si la base de datos no puede ser accedida por algún motivo el servidor
 * responde con un código 503. Finalmente si todo es exitoso el servidor responde con un 
 * código 201 y el objeto de sonido creada.
 * 
 * @param {Object} petición realizada al servidor
 * @param {Object} respuesta a la petición realizada
 */
SoundsController.create = async (req, res) => {
    const soundValidated = SoundsService.verifyFields(req.body);
    if (!soundValidated.success) {
      return res.status(400).json(soundValidated.content);
    }
  
    try {
      const soundCreated = await SoundsService.create(req.body);
      if (!soundCreated.success) {
        return res.status(503).json(soundCreated.content);
      }
  
      return res.status(201).json(soundCreated.content);
    } catch(error) {
      return res.status(500).json({
        error: 'Internal Server Error'
      });
    }
  }
  
  module.exports = SoundsController;