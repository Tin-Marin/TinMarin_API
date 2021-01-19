const ExhibitionModel = require('./../models/Exhibition');

const ExhibitionService = {};

ExhibitionService.verifyFields = ({ name, description, images, educationArea, minimunAge, maximumAge, duration, capacity }) => {
  let serviceResponse = {
    success: true,
    content: {
      message: ""
    }
  }

  if (!name || !description || !images || !educationArea || !minimunAge || !maximumAge || !duration || !capacity) {
    serviceResponse = {
      success: false,
      content: {
        error: "Missing required fields."
      }
    }
  }

  return serviceResponse;
}

ExhibitionService.create = async ({ name, description, images, sponsorName, sponsorLogo, educationArea, minimunAge, maximumAge, duration, capacity, curiousInfo }) => {
  let serviceResponse = {
    success: true,
    content: {}
  }

  try {
    const newExhibition = new ExhibitionModel({
      name,
      description,
      images,
      sponsorName,
      sponsorLogo,
      educationArea,
      minimunAge,
      maximumAge,
      duration,
      capacity,
      curiousInfo
    });

    const newExhibitionWasCreated = await newExhibition.save();
    if (!newExhibitionWasCreated) {
      serviceResponse = {
        success: false,
          content: {
            error: "Exhibition could not be created."
          }
        }
    } else {
      serviceResponse.content = newExhibitionWasCreated;
    }

    return serviceResponse;
  } catch(error) {
    throw new Error("Internal Server Error.")
  }
}

ExhibitionService.findOneByName = async ({ name }) => {
  let serviceResponse = {
    success: true,
    content: {}
  }

  try{
    const exhibition = await ExhibitionModel.findOne({ name: name }).exec();
    if (!exhibition) {
      serviceResponse = {
        success: false,
        content: {
          error: 'Exhibition not found.'
        }
      }
    } else {
      serviceResponse.content = exhibition;
    }

    return serviceResponse;
  } catch(error) {
    throw new Error('Internal Server Error.')
  }
}

ExhibitionService.getAll = async() => {
  let serviceResponse = {
    success: true,
    content: {}
  }

  try {
    const exhibitions = await ExhibitionModel.find();
    if (!exhibitions) {
      serviceResponse = {
        success: false,
        content: {
          error: 'No exhibition found.'
        }
      }
    } else {
      serviceResponse.content = exhibitions;
    }

    return serviceResponse;
  } catch(error) {
    throw new Error('Internal Server Error')
  }
}

ExhibitionService.findByName = async (name) => {
  let serviceResponse = {
    success: true,
    content: {}
  }

  try {
    const exhibition = await ExhibitionModel.find({ name: { $regex: name } });
    if (!exhibition) {
      serviceResponse = {
        success: false,
        content: {
          error: 'No exhibition found with the specified name.'
        }
      }
    } else {
      serviceResponse.content = exhibition;
    }

    return serviceResponse;
  } catch(error) {
    throw new Error('Internal Server Error.');
  }
}

ExhibitionService.findOneById = async (_id) => {
  let serviceResponse = {
    success: true,
    content: {}
  }

  try {
    const exhibition = await ExhibitionModel.findOne({ _id: _id }).exec();
    if (!exhibition) {
      serviceResponse = {
        success: false,
        content: {
          error: 'Exhibition not found.'
        }
      }
    } else {
      serviceResponse.content = exhibition;
    }

    return serviceResponse;
  } catch(error) {
    throw new Error('Internal Server Error');
  }
}

ExhibitionService.remove = async (_id) => {
  let serviceResponse = {
    success: true,
    content: {}
  }

  try {
    const exhibitionDeleted = await ExhibitionModel.findByIdAndDelete(_id).exec();
    if (!exhibitionDeleted) {
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

module.exports = ExhibitionService;