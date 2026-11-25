// Samrat Restaurant - Digital Menu Data Structure
// NOTE: Complete confirmed menu is under verification. Sample placeholder items 
// are clearly marked as DEMO CONTENT for development and demonstration purposes.

export const MENU_UPDATE_NOTE = "Our menu is being updated. Please contact the restaurant for current food options.";

export const MENU_CATEGORIES = [
  { id: "all", name: "All Categories", icon: "Utensils" },
  { id: "breakfast", name: "Breakfast Delights", icon: "Sunrise" },
  { id: "rajasthani", name: "Rajasthani Flavours", icon: "Sparkles" },
  { id: "snacks", name: "Traditional Snacks", icon: "Cookie" },
  { id: "beverages", name: "Beverages & Chai", icon: "Coffee" },
];

export const MENU_ITEMS = [
  // 1. Breakfast (Demo Placeholders)
  {
    id: "bf-1",
    name: "Crispy Poha",
    category: "breakfast",
    isVeg: true,
    isDemo: true,
    note: "Light flattened rice with spices and peanuts",
    status: "Sample Item"
  },
  {
    id: "bf-2",
    name: "Stuffed Aloo Paratha",
    category: "breakfast",
    isVeg: true,
    isDemo: true,
    note: "Served fresh with butter and curd",
    status: "Sample Item"
  },
  {
    id: "bf-3",
    name: "Methi Thepla",
    category: "breakfast",
    isVeg: true,
    isDemo: true,
    note: "Traditional spiced flatbread",
    status: "Sample Item"
  },
  {
    id: "bf-4",
    name: "Masala Puri Bhaji",
    category: "breakfast",
    isVeg: true,
    isDemo: true,
    note: "Puffed wheat puris with potato curry",
    status: "Sample Item"
  },

  // 2. Rajasthani Flavours (Demo Placeholders)
  {
    id: "raj-1",
    name: "Dal Baati Churma",
    category: "rajasthani",
    isVeg: true,
    isDemo: true,
    note: "Iconic Rajasthani baked wheat balls with lentils & sweet churma",
    status: "Sample Item"
  },
  {
    id: "raj-2",
    name: "Gatte Ki Sabzi",
    category: "rajasthani",
    isVeg: true,
    isDemo: true,
    note: "Gram flour dumplings simmered in yogurt gravy",
    status: "Sample Item"
  },
  {
    id: "raj-3",
    name: "Ker Sangri",
    category: "rajasthani",
    isVeg: true,
    isDemo: true,
    note: "Traditional desert berries and bean preparation",
    status: "Sample Item"
  },
  {
    id: "raj-4",
    name: "Rajasthani Kadhi",
    category: "rajasthani",
    isVeg: true,
    isDemo: true,
    note: "Slow-cooked spiced gram-flour and buttermilk curry",
    status: "Sample Item"
  },

  // 3. Traditional Snacks (Demo Placeholders)
  {
    id: "snk-1",
    name: "Pyaz Ki Kachori",
    category: "snacks",
    isVeg: true,
    isDemo: true,
    note: "Flaky pastry stuffed with seasoned onion filling",
    status: "Sample Item"
  },
  {
    id: "snk-2",
    name: "Dal Kachori",
    category: "snacks",
    isVeg: true,
    isDemo: true,
    note: "Golden crisp pastry filled with spiced lentil mixture",
    status: "Sample Item"
  },
  {
    id: "snk-3",
    name: "Mirchi Vada",
    category: "snacks",
    isVeg: true,
    isDemo: true,
    note: "Stuffed chili fritter with spiced potato mash",
    status: "Sample Item"
  },
  {
    id: "snk-4",
    name: "Samosa With Chutneys",
    category: "snacks",
    isVeg: true,
    isDemo: true,
    note: "Crispy triangular pastry with spiced potato filling",
    status: "Sample Item"
  },

  // 4. Beverages (Demo Placeholders)
  {
    id: "bev-1",
    name: "Masala Chai",
    category: "beverages",
    isVeg: true,
    isDemo: true,
    note: "Aromatic brewed tea with ginger, cardamom, and whole spices",
    status: "Sample Item"
  },
  {
    id: "bev-2",
    name: "Sweet Jaipur Lassi",
    category: "beverages",
    isVeg: true,
    isDemo: true,
    note: "Thick creamy yogurt drink served chilled in clay kulhad",
    status: "Sample Item"
  },
  {
    id: "bev-3",
    name: "Salted Buttermilk (Chaas)",
    category: "beverages",
    isVeg: true,
    isDemo: true,
    note: "Refreshing spiced buttermilk with roasted cumin",
    status: "Sample Item"
  },
  {
    id: "bev-4",
    name: "Cold Coffee",
    category: "beverages",
    isVeg: true,
    isDemo: true,
    note: "Chilled blended coffee with milk",
    status: "Sample Item"
  },
];
