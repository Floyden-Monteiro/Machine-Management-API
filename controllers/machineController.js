import { ApiResponse, ApiError } from '../utils/index.js';
import Machine from '../models/machineModel.js';

const createMachine = async (req, res) => {
  const { name, brand, purchasedOn, status, capacity } = req.body;

  try {
    const existingMachine = await Machine.findOne({ name });
    if (existingMachine) {
      return res
        .status(400)
        .json(new ApiError(400, 'Machine with this name already exists'));
    }

    const newMachine = new Machine({
      name,
      brand,
      purchasedOn,
      status,
      capacity,
    });
    await newMachine.save();

    return res
      .status(200)
      .json(new ApiResponse(201, 'Machine created successfully', newMachine));
  } catch (error) {
    console.error('Machine creation failed: ', error);
    return res.status(500).json(new ApiError(401, 'Machine creation failed'));
  }
};

const updateMachine = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedMachine = await Machine.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedMachine) {
      return res.status(404).json(new ApiError(404, 'Machine not found'));
    }

    return res
      .status(200)
      .json(
        new ApiResponse(200, 'Machine updated successfully', updatedMachine)
      );
  } catch (error) {
    console.error('Machine update failed: ', error);
    return res.status(500).json(new ApiError(500, 'Machine update failed'));
  }
};

const deleteMachine = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMachine = await Machine.findByIdAndDelete(id);
    if (!deletedMachine) {
      return res.status(404).json(new ApiError(404, 'Machine not found'));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, 'Machine deleted successfully'));
  } catch (error) {
    console.error('Machine deletion failed: ', error);
    return res.status(500).json(new ApiError(500, 'Machine deletion failed'));
  }
};

const getMachines = async (req, res) => {
  const { page = 1, limit = 10, filter, sort, search, projection } = req.query;
  const projectionObj = projection
    ? JSON.parse(projection.replace(/'/g, '"'))
    : undefined;
  try {
    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      sort,
      select: projectionObj,
    };
    const query = filter ? JSON.parse(filter) : {};
    if (search) {
      query.name = { $regex: `^${search.replace(/"/g, '')}$`, $options: 'i' };
    }

    const machines = await Machine.paginate(query, options);
    return res
      .status(200)
      .json(new ApiResponse(200, 'Machines retrieved successfully', machines));
  } catch (error) {
    console.error('Error getting machines: ', error);
    return res.status(500).json(new ApiError(500, 'Error getting machines'));
  }
};

export { createMachine, updateMachine, deleteMachine, getMachines };
