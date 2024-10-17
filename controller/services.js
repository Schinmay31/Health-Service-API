import Service from "../model/serviceModel.js";

// function to retrive all services
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// function to add services
export const addService = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    if (!name || !description || price == null) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      const newService = new Service({ name, description, price });
      const savedService = await newService.save();
      res.status(201).json(savedService);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};

// function to update services
export const updateService = async(req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    try {
        const updatedService = await Service.findByIdAndUpdate(id, { name, description, price }, { new: true });
        if (!updatedService) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json(updatedService);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};

// function to delete services
export const deleteService = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const deletedService = await Service.findByIdAndDelete(id);
    console.log(deleteService);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
