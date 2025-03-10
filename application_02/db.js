const customers = [
  {
    id: 1,
    name: "João",
    age: 17,
  },
];

function selectCustomers() {
  return customers;
}

function selectCustomer(id) {
  return customers.find((c) => c.id === id);
}

function insertCustomer(customer) {
  customers.push(customer);
}

module.exports = {
  selectCustomers,
  selectCustomer,
  insertCustomer,
};
