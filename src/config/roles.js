const allRoles = {
  user: ['manageUsers'],
  admin: ['getUsers', 'manageUsers', 'managePerks', 'admin'],
  marketing: [],
  seo: [],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
