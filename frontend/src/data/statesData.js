const statesData = {
  bihar: {
    title: "Bihar",
    description:
      "Land of ancient universities, spirituality and rich heritage.",
    image: "/nalanda.jpg",

    about: {
      famousFor: "Nalanda, Buddhism, Ancient Heritage",
      bestTime: "October - March",
    },

    places: [
      {
        name: "Nalanda",
        image: "/nalanda.jpg",
        location: "Nalanda",
        description: "Ancient university and UNESCO heritage site.",
        category: "Heritage",
        bestTime: "October - March",
        nearbyAttractions: "Rajgir, Pawapuri",
      },

      {
        name: "Bodh Gaya",
        image: "/gya.jpg",
        location: "Gaya",
        description: "Place where Buddha attained enlightenment.",
        category: "Religious",
        bestTime: "October - February",
        nearbyAttractions: "Mahabodhi Temple, Dungeshwari Cave",
      },

      {
        name: "Rajgir",
        image: "/rajgir.jpg",
        location: "Nalanda",
        description: "Famous for hills and ropeway.",
        category: "Nature",
        bestTime: "September - March",
        nearbyAttractions: "Vishwa Shanti Stupa, Griddhakuta Hill",
      },
    ],
  },

  goa: {
    title: "Goa",
    description: "Famous for beaches, nightlife and Portuguese heritage.",
    image: "/Goa.jpg",
    about: {
      famousFor: "Beaches, Nightlife, Portuguese Culture",
      bestTime: "November - February",
    },

    places: [
      {
        name: "Calangute Beach",
        image: "/calangute.jpg",
        location: "North Goa",
        description:
          "One of the most popular beaches in India known for water sports.",
        category: "Nature",
        bestTime: "November - February",
        nearbyAttractions: "Baga Beach, Candolim Beach",
      },

      {
        name: "Baga Beach",
        image: "/baga.jpg",
        location: "North Goa",
        description: "Famous for nightlife, cafes and adventure activities.",
        category: "Adventure",
        bestTime: "November - February",
        nearbyAttractions: "Calangute Beach, Tito's Lane",
      },

      {
        name: "Dudhsagar Falls",
        image: "/dudhsagar.jpg",
        location: "South Goa",
        description: "A majestic four-tiered waterfall surrounded by forests.",
        category: "Nature",
        bestTime: "July - December",
        nearbyAttractions: "Mollem National Park, Bhagwan Mahavir Sanctuary",
      },
    ],
  },

  rajasthan: {
    title: "Rajasthan",
    description: "Known for forts, palaces and desert culture.",
    image: "/rajsathan.jpg",
    about: {
      famousFor: "Forts, Palaces, Desert Safari",
      bestTime: "October - March",
    },
    places: [
      {
        name: "Jaipur",
        image: "/hawa.jpg",
        location: "Jaipur",
        description: "The Pink City known for forts, palaces and rich culture.",
        category: "Heritage",
        bestTime: "October - March",
        nearbyAttractions: "Hawa Mahal, Amber Fort",
      },

      {
        name: "Udaipur",
        image: "/udaipur.jpg",
        location: "Udaipur",
        description:
          "City of Lakes famous for royal palaces and scenic beauty.",
        category: "Heritage",
        bestTime: "September - March",
        nearbyAttractions: "City Palace, Lake Pichola",
      },

      {
        name: "Jaisalmer",
        image: "/jaisalmer.jpg",
        location: "Jaisalmer",
        description: "Golden City famous for desert safaris and sand dunes.",
        category: "Adventure",
        bestTime: "November - February",
        nearbyAttractions: "Jaisalmer Fort, Sam Sand Dunes",
      },
    ],
  },

  kerala: {
    title: "Kerala",
    description: "God's Own Country with backwaters and greenery.",
    image: "/kerala.jpg",
    about: {
      famousFor: "Backwaters, Tea Gardens, Nature",
      bestTime: "September - March",
    },
    places: [
      {
        name: "Munnar",
        image: "/munarK.jpg",
        location: "Idukki",
        description:
          "Beautiful hill station known for tea gardens and misty hills.",
        category: "Nature",
        bestTime: "September - March",
        nearbyAttractions: "Eravikulam National Park, Tea Museum",
      },

      {
        name: "Alleppey",
        image: "/alleppey.jpg",
        location: "Alappuzha",
        description: "Famous for backwaters, houseboats and serene landscapes.",
        category: "Nature",
        bestTime: "October - February",
        nearbyAttractions: "Vembanad Lake, Marari Beach",
      },

      {
        name: "Varkala Beach",
        image: "/varkala.jpg",
        location: "Varkala",
        description: "A stunning cliffside beach with breathtaking sea views.",
        category: "Nature",
        bestTime: "October - March",
        nearbyAttractions: "Varkala Cliff, Janardanaswamy Temple",
      },
    ],
  },
};

export default statesData;
