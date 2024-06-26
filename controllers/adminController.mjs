// adminController.mjs
import adminService from "../services/adminService.mjs";

async function getAllUsers(req, res) {
  const users = await adminService.getAllUsers();
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(400);
    throw new error("error in fetching all users");
  }
}


async function createUser(req, res) {
  try {
    const userData = req.body;
    await adminService.createUser(userData);
    res.json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function assignRolesAndPermissions(req, res) {
  const { userId, roles, permissions } = req.body;
  if (!userId || !roles || !permissions) {
    res.status(400);
    throw new error("all fields are mandotory")
  }
  const user = await adminService.assignRolesAndPermissions(userId, roles, permissions);
  if (username) {
    res.status(200).json({ _id: user_.id, roles: user.roles });
  } else {

    res.status(400);
    throw new error("permissions is not assigned properly")
  }
}

async function addOrUpdateBook(req, res) {
  try {
    const bookData = req.body;
    await adminService.addOrUpdateBook(bookData);
    res.json({ message: 'Book added or updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function registerUser(req, res) {
  const { username, email, password, roles } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user = await adminService.registerUser(username, email, password, roles);
  if (user) {
    res.status(201).json({ _id: user._id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
}

async function trackBorrowingAndReturns(req, res) {
  try {
    const { userId, bookId, action } = req.body;
    await adminService.trackBorrowingAndReturns(userId, bookId, action);
    res.json({ message: 'Borrowing/Return tracked successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function manageOverdueFines(req, res) {
  try {
    const { userId, amount } = req.body;
    await adminService.manageOverdueFines(userId, amount);
    res.json({ message: 'Overdue fines managed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function generateLibraryReport(req, res) {
  try {
    await adminService.generateLibraryReport();
    res.json({ message: 'Library report generated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export {
  getAllUsers,
  generateLibraryReport,
  manageOverdueFines,
  trackBorrowingAndReturns,
  addOrUpdateBook,
  registerUser,
  assignRolesAndPermissions,
  createUser,
};