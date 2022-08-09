const orders = [
  {
    date: "15-09-2019",
    subtotal: 99.73,
    items: [
      {
        product: {
          id: "bluejeans",
          description: "old jeans",
          price: 44.86,
        },
        quantity: 1,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
