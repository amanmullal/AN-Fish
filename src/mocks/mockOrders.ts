export const mockOrders = [
  {
    orderId: "ORD1001",
    customerName: "Aarav Sharma",
    orderDate: "2025-07-24",
    items: [
      { name: "Fresh Rohu", category: "Fresh Fish", quantity: 2, price: 320 },
      {
        name: "Fish Curry Masala",
        category: "Fish Spices",
        quantity: 1,
        price: 60,
      },
    ],
    totalAmount: 700,
    status: "Delivered",
  },
  {
    orderId: "ORD1002",
    customerName: "Priya Menon",
    orderDate: "2025-07-23",
    items: [
      {
        name: "Frozen Pomfret",
        category: "Frozen Fish",
        quantity: 1,
        price: 450,
      },
      { name: "Fresh Catla", category: "Fresh Fish", quantity: 1, price: 280 },
    ],
    totalAmount: 730,
    status: "Out for Delivery",
  },
  {
    orderId: "ORD1003",
    customerName: "Ramesh Kulkarni",
    orderDate: "2025-07-22",
    items: [
      {
        name: "Fish Fry Masala",
        category: "Fish Spices",
        quantity: 2,
        price: 50,
      },
      {
        name: "Frozen Mackerel",
        category: "Frozen Fish",
        quantity: 3,
        price: 210,
      },
    ],
    totalAmount: 570,
    status: "Delivered",
  },
  {
    orderId: "ORD1004",
    customerName: "Farhan Shaikh",
    orderDate: "2025-07-25",
    items: [
      { name: "Fresh Surmai", category: "Fresh Fish", quantity: 1, price: 600 },
    ],
    totalAmount: 600,
    status: "Processing",
  },
  {
    orderId: "ORD1005",
    customerName: "Neha Patil",
    orderDate: "2025-07-26",
    items: [
      {
        name: "Frozen Basa Fillet",
        category: "Frozen Fish",
        quantity: 2,
        price: 360,
      },
      {
        name: "Fish Tandoori Masala",
        category: "Fish Spices",
        quantity: 1,
        price: 70,
      },
    ],
    totalAmount: 790,
    status: "Pending",
  },
];
