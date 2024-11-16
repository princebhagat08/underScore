import Banner from "../models/banner.model.js";
import Event from "../models/event.model.js";
import User from "../models/user.model.js";
import AwardedAlumni from "../models/awardedAlumni.js";
import NewsAndStories from "../models/newAndStories.js";
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
dotenv.config();

export const seed = async () => {
  await connectDB();

  await User.deleteMany();
  await Event.deleteMany();
  await AwardedAlumni.deleteMany();
  await NewsAndStories.deleteMany();

  console.log("Deleted all data");

  await Banner.insertMany([
    {
      title: "Vrindavan Hostel",
      desc: "Designed for first-year students, Vrindavan Hostel provides cozy 3-seater rooms, with a capacity to house up to 300 students, helping them transition smoothly into college life.",
      image: "https://res.cloudinary.com/dwtiaybud/image/upload/v1731670203/vrindavan_zxwuue.jpg",
    },
    {
      title: "Welcome to BIET",
      desc: "BIET's grand entrance welcomes students into a world of innovation and knowledge. Book appointments with trusted doctors for your health needs.",
      image: "https://res.cloudinary.com/dwtiaybud/image/upload/v1731670203/biet_gate_xcemon.jpg",
    },
  ]);

  console.log("Banners inserted");

  const users = await User.insertMany([
    {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "welcome",
      role: "alumni",
    },
  ]);

  console.log("Users inserted");

  console.log(users);
  const userId = users[0]._id;

  await Event.insertMany([
    {
      name: "Tech Conference 2024",
      title: "The Future of AI in Tech",
      address: "123 Tech Street, Silicon Valley, CA",
      type: "offline",
      desc: "Join industry leaders and innovators as we explore the impact of artificial intelligence in the technology sector. The event will feature keynote speeches, panel discussions, and hands-on workshops.",
      startDate: new Date("2024-05-15T09:00:00Z"),
      endDate: new Date("2024-05-15T17:00:00Z"),
      theme: "Artificial Intelligence",
      location: "Silicon Valley Convention Center",
      venue: "Main Hall, Silicon Valley Convention Center",
      attendees: ["603d9b9b8b349c5a61d6ad78", "603d9b9b8b349c5a61d6ad79"],
      eventPosts: [
        {
          user: userId,
          comment: "Great event! Looking forward to the keynote speeches.",
        },
      ],
      createdBy: userId,
      createdAt: new Date("2024-01-10T12:00:00Z"),
      updatedAt: new Date("2024-01-10T12:00:00Z"),
      isActive: true,
    },
    {
      name: "Virtual Hackathon 2024",
      title: "Building Tomorrow’s Web",
      address: null,
      type: "online",
      desc: "An online hackathon where developers from all over the world will come together to build innovative solutions for the web. This event will include coding challenges, mentoring, and networking opportunities.",
      startDate: new Date("2024-06-10T10:00:00Z"),
      endDate: new Date("2024-06-10T18:00:00Z"),
      theme: "Web Development",
      location: "Online",
      venue: null,
      attendees: ["603d9b9b8b349c5a61d6ad82", "603d9b9b8b349c5a61d6ad83"],
      eventPosts: [
        {
          user: userId,
          comment: "Excited to participate in this hackathon!",
        },
      ],
      createdBy: userId,
      createdAt: new Date("2024-02-15T15:30:00Z"),
      updatedAt: new Date("2024-02-15T15:30:00Z"),
      isActive: true,
    },
  ]);

  await AwardedAlumni.insertMany([
    {
      alumni: userId,
      desc: "John Doe is a great alumni",
      content: "John Doe is a great alumni",
      award: "Best Alumni",
      year: 2024,
    },
    {
      alumni: userId,
      desc: "John Doe is a great alumni",
      content: "John Doe is a great alumni",
      award: "Best Alumni",
      year: 2023,
    },
  ]);

  await NewsAndStories.insertMany([
    {
      title: `IIT Delhi Alumni Association | Newsletter | July - September 2024`,
      content: "News 1",
      author: userId,
    },
  ]);

  

  console.log("Seed completed");
  process.exit(0);
};

seed();
