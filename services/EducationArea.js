const EducationAreaModel = require('./../models/EducationArea');

const EducationAreaService = {};

EducationAreaService.verifyFields = ({ name }) => {
  let serviceResponse = {
    success: true,
    content: {}
  };

  if (!name) {
    serviceResponse = {
      success: false,
      content: {
        error: 'Missing name for the education area.'
      }
    }
  }

  return serviceResponse;
}

EducationAreaService.create = async ({ name }) => {
  let serviceResponse = {
    success: true,
    content: {}
  };

  const educationArea = new EducationAreaModel({ name });
  try {
    const educationAreaCreated = await educationArea.save();
    if (!educationAreaCreated) {
      serviceResponse = {
        success: false,
        content: {
          error: 'Education area could not be saved.'
        }
      };
    } else {
      serviceResponse.content = educationAreaCreated;
    }

    return serviceResponse;
  } catch(error) {
    throw new Error(error);
  }
}

EducationAreaService.findOneByName = async ({ name }) => {
  let serviceResponse = {
    success: true,
    content: {}
  }

  try{
    const educationArea = await EducationAreaModel.findOne({ name: name }).exec();
    if (!educationArea) {
      serviceResponse = {
        success: false,
        content: {
          error: 'Education Area not found.'
        }
      }
    } else {
      serviceResponse.content = educationArea;
    }

    return serviceResponse;
  } catch(error) {
    throw new Error('Internal Server Error.')
  }
}

EducationAreaService.findAll = async () => {
  let serviceResponse = {
    success: true,
    content: {}
  }
  try {
    const educationAreas = await EducationAreaModel.find();
    if (!educationAreas) {
      serviceResponse = {
        success: false,
        content: {
          error: 'No education area found.'
        }
      };
    } else {
      serviceResponse.content = educationAreas;
    }

    return serviceResponse;
  } catch(error) {
    throw new Error(error);
  }
}

EducationAreaService.findOneById = async (_id) => {
  let serviceResponse = {
    success: true,
    content: {}
  }

  try {
    const educationAreaFound = await EducationAreaModel.findById(_id);
    if (!educationAreaFound) {
      serviceResponse = {
        success: false,
        content: {
          error: 'Education area not found.'
        }
      };
    }
    return serviceResponse;
  } catch(error) {
    throw new Error('Internal Server Error');
  }
} 

EducationAreaService.remove = async (_id) => {
  let serviceResponse = {
    success: true,
    content: {}
  }

  try {
    const educationAreaDeleted = await EducationAreaModel.findByIdAndDelete(_id).exec();
    if (!educationAreaDeleted) {
      serviceResponse = {
        success: false,
        content: {
          error: 'Something went wrong.'
        }
      }
    }

    return serviceResponse;
  } catch(error) {
    throw new Error('Internal Server Error.')
  }
}

module.exports = EducationAreaService;