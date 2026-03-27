export const menuItems = {
  "Limited Espresso": {
    subHeader: "Hot / Iced · Prepared in limited daily quantities",
    items: [
      { name: "Classic Latte", price: "8oz / $4.00" },
      { name: "Americano", price: "8oz / $3.00" },
      { name: "Cappuccino", price: "8oz / $3.50" },
      { name: "Iced Latte", price: "12oz / $4.50" },
      { name: "Iced Americano", price: "12oz / $3.50" },
      { name: "Iced Chai", price: "12oz / $4.50" },
    ],
    addons: {
      "Oat or Almond Milk": "+$0.75",
      "Extra Espresso Shot": "+$1.00",
      "Vanilla / Sugar Cane Syrup": "+$0.75",
    },
  },
  Teas: {
    subHeader: "Hot · 8oz",
    items: [
      { name: "Black Tea", price: "8oz / $2.00" },
      { name: "Green Tea", price: "8oz / $2.00" },
      { name: "Hot Chocolate", price: "8oz / $4.00" },
      { name: "Chai Latte", price: "8oz / $4.00" },
    ],
  },
  Smoothies: {
    subHeader: "Cold · 12oz",
    items: [{ name: "Berry Blast", price: "12oz / $6.00" }],
  },
} as const;

export interface MenuItem {
  name: string;
  price: string;
}
