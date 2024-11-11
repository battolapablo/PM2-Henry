const catchAsyncService = (service) => {
  return async (...args) => {
    try {
      return await service(...args);
    } catch (error) {
      console.log("Service Error:", error.message);
      throw error;
    }
  };
};

module.exports = catchAsyncService;
