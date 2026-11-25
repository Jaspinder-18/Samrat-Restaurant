// Samrat Restaurant Core Data
// Verified information & configurable properties for Jaipur, Rajasthan

export const RESTAURANT_INFO = {
  name: "Samrat Restaurant",
  shortName: "SAMRAT",
  tagline: "Authentic Flavours. Memorable Moments.",
  subheading: "Discover delicious food and enjoy a wonderful dining experience at Samrat Restaurant, Jaipur.",
  locationBadge: "Choura Rasta, Jaipur",

  address: {
    shop: "Shop No. 273",
    street: "Choura Rasta, Pink City, Bapu Bazar, Biseswarji",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302003",
    country: "India",
    full: "Shop No. 273, Choura Rasta, Pink City, Bapu Bazar, Biseswarji, Jaipur, Rajasthan 302003, India",
  },

  contact: {
    phone: "+91 98286 01904",
    phoneTel: "tel:+919828601904",
    // Note: Email is not independently confirmed as official contact; marked unverified
    email: "samratphotocopiers@gmail.com",
    isEmailVerified: false,
  },

  timing: {
    display: "Contact Restaurant for Current Timings",
    isVerified: false,
    note: "Official opening hours are currently being verified with the restaurant.",
  },

  cuisines: [
    "Rajasthani Food",
    "Traditional Breakfast",
    "Local Snacks",
    "Beverages",
  ],

  maps: {
    searchUrl: "https://www.google.com/maps/search/?api=1&query=Samrat+Restaurant+Shop+273+Choura+Rasta+Jaipur",
    embedUrl: "https://maps.google.com/maps?q=Shop+273+Choura+Rasta+Jaipur+Rajasthan+302003&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },

  about: {
    heading: "Welcome to Samrat Restaurant",
    description: "Located in the heart of Jaipur, Samrat Restaurant offers visitors a place to enjoy food in the vibrant surroundings of the Pink City. Explore the restaurant's food offerings and discover a convenient dining stop in Jaipur.",
    highlights: [
      {
        id: "pink-city",
        title: "Heart of Pink City",
        description: "Ideally situated at vibrant Choura Rasta, surrounded by Jaipur's historic heritage and markets.",
      },
      {
        id: "traditional-taste",
        title: "Traditional Heritage",
        description: "Known for wholesome morning breakfast, authentic Rajasthani taste, and freshly made snacks.",
      },
      {
        id: "easy-access",
        title: "Convenient Dining Stop",
        description: "A welcoming, easily accessible stop for locals, shoppers, and travelers visiting Jaipur.",
      },
    ],
  },

  whyVisitUs: [
    {
      id: "convenient-location",
      title: "Convenient Jaipur Location",
      description: "Centrally positioned on Choura Rasta near Bapu Bazar in the Pink City, ideal for a refreshing break.",
      icon: "MapPin",
    },
    {
      id: "breakfast-options",
      title: "Breakfast & Food Options",
      description: "Serving piping-hot morning favourites, traditional kachoris, chai, and wholesome Rajasthani bites.",
      icon: "Sunrise",
    },
    {
      id: "explore-local",
      title: "Explore Local Food",
      description: "An authentic glimpse into the street food, snack culture, and traditional flavours cherished in Jaipur.",
      icon: "Utensils",
    },
    {
      id: "easy-contact",
      title: "Easy Restaurant Contact",
      description: "Direct telephonic assistance for takeaway inquiries, direction guidance, and dining information.",
      icon: "PhoneCall",
    },
  ],

  disclaimers: {
    menu: "Our menu is being updated. Please contact the restaurant for current food options.",
    demoNotice: "Sample placeholder items displayed for demonstration purposes only.",
  },

  // High-resolution royalty-free imagery curated for Pink City & Rajasthani heritage
  images: {
    heroBg: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=1920&q=85&auto=format&fit=crop",
    aboutDining: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&q=85&auto=format&fit=crop",
  }
};
