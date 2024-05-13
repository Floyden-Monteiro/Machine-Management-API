import { ApiResponse, ApiError } from '../utils/index.js';

const machine = (req, res) => {
  return res.status(200).json(new ApiResponse(200, 'Test Data'));
};

export default machine;
