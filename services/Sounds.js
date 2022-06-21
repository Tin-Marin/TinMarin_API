const SoundsModel = require('./../models/Sounds')

const SoundsService = {}

/**
 * 
 * @function
 * @param {string} url
 * @param {string} name
 * @returns {Object} Si la verificación es correcta retorna verdadero en el elemento 'success' y falso en caso contrario.
 */
 SoundsService.verifyFields = ({ url, name }) => {
    let serviceResponse = {
      success: true,
      content: {}
    }
  
    if (!url || !name) {
      serviceResponse = {
        success: false,
        content: {
          error: 'Missing required fields.'
        }
      }
  
      return serviceResponse;
    }
  
    return serviceResponse;
  }
  
  /**
   * 
   * @function
   * @param {string} url
   * @param {string} name
   * @returns {Object} La sugerencia creada.
   */
  SoundsService.create = async ({ url, name }) => {
    let serviceResponse = {
      success: true,
      content: {}
    }
  
    const newSound = new SoundsModel({
      url,
      name
    });
    try {
      const soundSaved = await newSound.save();
      if (!soundSaved) {
        serviceResponse = {
          success: false,
          content: {
            error: 'Suggestion could not be saved.'
          }
        }
      } else {
        serviceResponse.content = soundSaved;
      }
  
      return serviceResponse;
    } catch(error) {
      throw new Error('Internal Server Error.')
    }
  }
  
  /**
   * 
   * @async
   * @function
   * @returns {Array} Lista con los sonidos existentes.
   */
  SoundsService.findAll = async () => {
    let serviceResponse = {
      success: true,
      content: {}
    }
    try {
      const suggestions = await SoundsModel.find();
      if (!suggestions) {
        serviceResponse = {
          success: false,
          content: {
            error: 'No suggestion found.'
          }
        };
      } else {
        serviceResponse.content = suggestions;
      }
  
      return serviceResponse;
    } catch(error) {
      throw new Error('Internal Server Error.');
    }
  }
  
  /**
   * 
   * @async
   * @function
   * @param {string} _id
   * @returns {Object} La sugerencia con el _id especificado.
   */
  SoundsService.findOneById = async (_id) => {
    let serviceResponse = {
      success: true,
      content: {}
    }
  
    try {
      const soundFound = await SoundsModel.findById(_id);
      if (!soundFound) {
        serviceResponse = {
          success: false,
          content: {
            error: 'Suggestion not found.'
          }
        }
      }
    
      return serviceResponse;
    } catch(error) {
      throw new Error('Internal Server Error.')
    }
  }
  
  /**
   * 
   * @async
   * @function
   * @param {string} _id 
   * @returns {Array} Lista vacía.
   */
  SoundsService.remove = async (_id) => {
    let serviceResponse = {
      success: true,
      content: {}
    }
  
    try {
      const soundssDeleted = await SoundsModel.findByIdAndDelete(_id).exec();
      if (!soundssDeleted) {
        serviceResponse = {
          success: false,
          content: {
            error: 'Something went wrong. Try again later.'
          }
        }
      }
  
      return serviceResponse;
    } catch(error) {
      throw new Error('Interal Server Error');
    }
  
  }
  
  module.exports = SoundsService