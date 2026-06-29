const mongoose = require("mongoose");
require("dotenv").config();

const Place = require("./models/Place");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    await Place.deleteMany({});

    await Place.insertMany([
      // ================= BIHAR =================
      {
        placeName: "Nalanda",
        state: "Bihar",
        city: "Nalanda",
        category: "Heritage",
        description: "Ancient university and UNESCO World Heritage Site.",
        bestTimeToVisit: "October - March",
        entryFee: "Free",
        timings: "9 AM - 5 PM",
        mapLink: "https://maps.google.com",
        image: "/nalanda.jpg",
      },
      {
        placeName: "Bodh Gaya",
        state: "Bihar",
        city: "Gaya",
        category: "Religious",
        description: "Place where Lord Buddha attained enlightenment.",
        bestTimeToVisit: "October - February",
        entryFee: "Free",
        timings: "6 AM - 9 PM",
        mapLink: "https://maps.google.com",
        image: "/gya.jpg",
      },
      {
        placeName: "Rajgir",
        state: "Bihar",
        city: "Nalanda",
        category: "Nature",
        description: "Famous for hills and ropeway.",
        bestTimeToVisit: "September - March",
        entryFee: "₹30",
        timings: "8 AM - 6 PM",
        mapLink: "https://maps.google.com",
        image: "/rajgir.jpg",
      },

      // ================= GOA =================
      {
        placeName: "Calangute Beach",
        state: "Goa",
        city: "North Goa",
        category: "Nature",
        description: "Popular beach famous for water sports.",
        bestTimeToVisit: "November - February",
        entryFee: "Free",
        timings: "Open 24 Hours",
        mapLink: "https://maps.google.com",
        image: "/calangute.jpg",
      },
      {
        placeName: "Baga Beach",
        state: "Goa",
        city: "North Goa",
        category: "Adventure",
        description: "Nightlife and beach activities.",
        bestTimeToVisit: "November - February",
        entryFee: "Free",
        timings: "Open 24 Hours",
        mapLink: "https://maps.google.com",
        image: "/baga.jpg",
      },
      {
        placeName: "Dudhsagar Falls",
        state: "Goa",
        city: "South Goa",
        category: "Nature",
        description: "Four-tier waterfall surrounded by forests.",
        bestTimeToVisit: "July - December",
        entryFee: "₹50",
        timings: "8 AM - 5 PM",
        mapLink: "https://maps.google.com",
        image: "/dudhsagar.jpg",
      },

      // ================= RAJASTHAN =================
      {
        placeName: "Jaipur",
        state: "Rajasthan",
        city: "Jaipur",
        category: "Heritage",
        description: "Pink City of India.",
        bestTimeToVisit: "October - March",
        entryFee: "Varies",
        timings: "9 AM - 6 PM",
        mapLink: "https://maps.google.com",
        image: "/hawa.jpg",
      },
      {
        placeName: "Udaipur",
        state: "Rajasthan",
        city: "Udaipur",
        category: "Heritage",
        description: "City of Lakes.",
        bestTimeToVisit: "September - March",
        entryFee: "Varies",
        timings: "9 AM - 6 PM",
        mapLink: "https://maps.google.com",
        image: "/udaipur.jpg",
      },
      {
        placeName: "Jaisalmer",
        state: "Rajasthan",
        city: "Jaisalmer",
        category: "Adventure",
        description: "Golden City with desert safari.",
        bestTimeToVisit: "November - February",
        entryFee: "Varies",
        timings: "9 AM - 6 PM",
        mapLink: "https://maps.google.com",
        image: "/jaisalmer.jpg",
      },

      // ================= KERALA =================
      {
        placeName: "Munnar",
        state: "Kerala",
        city: "Idukki",
        category: "Nature",
        description: "Tea gardens and hills.",
        bestTimeToVisit: "September - March",
        entryFee: "Free",
        timings: "Open",
        mapLink: "https://maps.google.com",
        image: "/munarK.jpg",
      },
      {
        placeName: "Alleppey",
        state: "Kerala",
        city: "Alappuzha",
        category: "Nature",
        description: "Backwaters and houseboats.",
        bestTimeToVisit: "October - February",
        entryFee: "Free",
        timings: "Open",
        mapLink: "https://maps.google.com",
        image: "/alleppey.jpg",
      },
      {
        placeName: "Varkala Beach",
        state: "Kerala",
        city: "Varkala",
        category: "Nature",
        description: "Beautiful cliff beach.",
        bestTimeToVisit: "October - March",
        entryFee: "Free",
        timings: "Open",
        mapLink: "https://maps.google.com",
        image: "/varkala.jpg",
      },
    ]);

    console.log("✅ Database Seeded Successfully");
    process.exit();
  })
  .catch((err) => console.log(err));