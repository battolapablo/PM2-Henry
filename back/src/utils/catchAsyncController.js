const catchAsyncController = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch((err) => next(err));
  };
};

module.exports = catchAsyncController;




