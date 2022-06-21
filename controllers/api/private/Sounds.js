const SoundsService = require('./../../../services/Sounds');

/**
 * Controlador utilizado para la consulta y eliminación de sonidos
 */
const SoundsController = {}

/**
 * Consulta de sonidos
 * Esta función consulta los sonidos, si no hay ninguna el servidor responde con
 * un código 404. Si hay alguno el servidor responde con un código 200 y con una
 * cadena de objetos.
 * 
 * @param {Object} petición realizada al servidor
 * @param {Object} respuesta a la petición realizada
 */
 SoundsController.findAll = async (req, res) => {
    try{
      const sounds = await SoundsService.findAll();
      if (!sounds.success) {
        return res.status(404).json(sounds.content);
      }
  
      return res.status(200).json(sounds.content);
    } catch(error) {
      return res.status(500).json({
        error: 'Internal Server Error.'
      })
    }
  }
  
  /**
   * Eliminar sonido
   * Esta función verifica que haya en la base de datos un sonido con el _id indicado, 
   * si no existe el servidor responde con un código 404. Si el objeto existe en la base de 
   * datos se procede a eliminarlo, pero si la base de datos no está disponible el servidor 
   * responde con un código 503. En caso que la base de datos esté disponible y la acción se 
   * completa el servidor responde con un código 204 y un objeto vacío.
   * 
   * @param {Object} petición realizada al servidor
   * @param {Object} respuesta a la petición realizada
   */
  SoundsController.remove = async (req, res) => {
    try {
      const sound = await SoundsService.findOneById(req.params._id);
      if (!sound.success) {
        return res.status(404).json(sound.content);
      }
      const soundDeleted = await SoundsService.remove(req.params._id);
      if (!soundDeleted.success) {
        return res.status(503).json(soundDeleted.content);
      }
  
      return res.status(204).json(soundDeleted.content);
    } catch(error) {
      return res.status(500).json({
        error: 'Internal Server Error.'
      });
    }
  }
  
  module.exports = SoundsController;