import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_logo from "./profile.jpg";
import logo from "./logo.png";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import pks from "./pks.png";
import mtech from "./mtech-logo.png";
import ba from "./ba-degree.webp";
import btech from "./btech-logo.jpg";
import mba from "./mba-logo.jpg";
import bcom from "./bcom-logo.png";
import phd from "./phd-logo.jpg";

export const assets = {
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_logo,
  arrow_icon,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const degreeData = [
  {
    degree: "B.Tech",
    image: btech,
  },
  {
    degree: "MBA",
    image: mba,
  },
  {
    degree: "M.Tech",
    image: mtech,
  },
  {
    degree: "PhD",
    image: phd,
  },
  {
    degree: "B.Com",
    image: bcom,
  },
  {
    degree: "B.A.",
    image: ba,
  },
];

export const alumni = [
  {
    _id: "alumni1",
    name: "Rohit Sharma",
    image: pks,
    graduationYear: 2015,
    degree: "B.Tech",
    major: "Computer Science",
    jobTitle: "Software Engineer",
    company: "Infosys",
    email: "rohit.sharma@example.com",
    phone: "+91-9876543210",
    linkedin: "https://linkedin.com/in/rohitsharma",
    industry: "Technology",
    skills: ["Java", "Spring Boot", "React"],
    bio: "Tech enthusiast with a knack for problem-solving.",
    city: "Pune",
    state: "Maharashtra",
    interests: ["mentorship"],
    donor: true,
    experience: [
      {
        company: "Infosys",
        position: "Software Engineer",
        startDate: "2016-08-01",
        endDate: "Present",
        duration: "8 years",
      },
      {
        company: "Wipro",
        position: "Intern",
        startDate: "2015-06-01",
        endDate: "2016-06-01",
        duration: "1 year",
      },
    ],
  },
  {
    _id: "alumni2",
    name: "Priya Nair",
    image: pks,
    graduationYear: 2018,
    degree: "MBA",
    major: "Finance",
    jobTitle: "Financial Analyst",
    company: "HDFC Bank",
    email: "priya.nair@example.com",
    phone: "+91-9876543211",
    linkedin: "https://linkedin.com/in/priyanair",
    industry: "Finance",
    skills: ["Financial Modeling", "Risk Analysis"],
    bio: "Finance specialist with an eye for detail.",
    city: "Mumbai",
    state: "Maharashtra",
    interests: ["networking"],
    donor: false,
    experience: [
      {
        company: "HDFC Bank",
        position: "Financial Analyst",
        startDate: "2019-03-01",
        endDate: "Present",
        duration: "5 years",
      },
      {
        company: "Axis Bank",
        position: "Intern",
        startDate: "2018-01-01",
        endDate: "2018-07-01",
        duration: "6 months",
      },
    ],
  },
  {
    _id: "alumni3",
    name: "Rajesh Kumar",
    image: pks,
    graduationYear: 2014,
    degree: "M.Tech",
    major: "Mechanical Engineering",
    jobTitle: "Project Manager",
    company: "Tata Motors",
    email: "rajesh.kumar@example.com",
    phone: "+91-9876543212",
    linkedin: "https://linkedin.com/in/rajeshkumar",
    industry: "Manufacturing",
    skills: ["Project Management", "Team Leadership"],
    bio: "Mechanical engineer with extensive project management experience.",
    city: "Jamshedpur",
    state: "Jharkhand",
    interests: ["speaking"],
    donor: true,
    experience: [
      {
        company: "Tata Motors",
        position: "Project Manager",
        startDate: "2016-01-01",
        endDate: "Present",
        duration: "8 years",
      },
      {
        company: "BHEL",
        position: "Mechanical Engineer",
        startDate: "2014-05-01",
        endDate: "2015-12-31",
        duration: "1.5 years",
      },
      {
        company: "L&T",
        position: "Graduate Trainee",
        startDate: "2013-06-01",
        endDate: "2014-04-30",
        duration: "11 months",
      },
    ],
  },
  {
    _id: "alumni4",
    name: "Sneha Verma",
    image: pks,
    graduationYear: 2020,
    degree: "B.Tech",
    major: "Electronics",
    jobTitle: "Data Scientist",
    company: "Wipro",
    email: "sneha.verma@example.com",
    phone: "+91-9876543213",
    linkedin: "https://linkedin.com/in/snehaverma",
    industry: "IT Services",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    bio: "Data science enthusiast passionate about AI.",
    city: "Bengaluru",
    state: "Karnataka",
    interests: ["mentorship", "events"],
    donor: false,
    experience: [
      {
        company: "Wipro",
        position: "Data Scientist",
        startDate: "2021-02-01",
        endDate: "Present",
        duration: "3 years",
      },
      {
        company: "Infosys",
        position: "Junior Data Analyst",
        startDate: "2020-07-01",
        endDate: "2021-01-31",
        duration: "6 months",
      },
    ],
  },
  {
    _id: "alumni5",
    name: "Amitabh Deshmukh",
    image: pks,
    graduationYear: 2016,
    degree: "PhD",
    major: "Physics",
    jobTitle: "Research Scientist",
    company: "ISRO",
    email: "amitabh.deshmukh@example.com",
    phone: "+91-9876543214",
    linkedin: "https://linkedin.com/in/amitabhdeshmukh",
    industry: "Research",
    skills: ["Quantum Physics", "Data Analysis"],
    bio: "Physics researcher dedicated to space exploration.",
    city: "Ahmedabad",
    state: "Gujarat",
    interests: ["research", "mentorship"],
    donor: true,
    experience: [
      {
        company: "ISRO",
        position: "Research Scientist",
        startDate: "2017-04-01",
        endDate: "Present",
        duration: "7 years",
      },
      {
        company: "BARC",
        position: "Research Assistant",
        startDate: "2016-05-01",
        endDate: "2017-03-31",
        duration: "11 months",
      },
      {
        company: "IISc Bangalore",
        position: "Research Intern",
        startDate: "2015-06-01",
        endDate: "2016-04-30",
        duration: "11 months",
      },
    ],
  },
  {
    _id: "alumni6",
    name: "John Doe",
    image: pks,
    graduationYear: 2015,
    degree: "B.Tech",
    major: "Computer Science",
    jobTitle: "Software Engineer",
    company: "Tech Solutions",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    linkedin: "https://linkedin.com/in/johndoe",
    industry: "Technology",
    skills: ["JavaScript", "React", "Node.js"],
    bio: "Passionate about technology and mentoring.",
    city: "New York",
    interests: ["mentorship", "speaking"],
    donor: true,
    experience: [
      {
        company: "Tech Solutions",
        position: "Software Engineer",
        startDate: "2016-06-01",
        endDate: "Present",
        duration: "8 years",
      },
      {
        company: "ABC Corp",
        position: "Intern",
        startDate: "2015-07-01",
        endDate: "2016-05-31",
        duration: "10 months",
      },
      {
        company: "XYZ Inc",
        position: "Junior Developer",
        startDate: "2014-08-01",
        endDate: "2015-06-30",
        duration: "11 months",
      },
    ],
  },
  {
    _id: "alumni7",
    name: "Jane Smith",
    image: pks,
    graduationYear: 2018,
    degree: "B.Com",
    major: "Finance",
    jobTitle: "Financial Analyst",
    company: "BankCorp",
    email: "janesmith@example.com",
    phone: "234-567-8901",
    linkedin: "https://linkedin.com/in/janesmith",
    industry: "Finance",
    skills: ["Financial Modeling", "Risk Management"],
    bio: "Enthusiastic about financial planning and networking.",
    city: "San Francisco",
    interests: ["networking"],
    donor: false,
    experience: [
      {
        company: "BankCorp",
        position: "Financial Analyst",
        startDate: "2019-02-01",
        endDate: "Present",
        duration: "5 years",
      },
      {
        company: "FinSolutions",
        position: "Junior Analyst",
        startDate: "2018-01-01",
        endDate: "2018-12-31",
        duration: "1 year",
      },
      {
        company: "EconHub",
        position: "Intern",
        startDate: "2017-07-01",
        endDate: "2017-12-31",
        duration: "6 months",
      },
    ],
  },
  {
    _id: "alumni8",
    name: "Alice Johnson",
    image: pks,
    graduationYear: 2012,
    degree: "MBA",
    major: "Marketing",
    jobTitle: "Marketing Director",
    company: "MarketUp",
    email: "alicejohnson@example.com",
    phone: "345-678-9012",
    linkedin: "https://linkedin.com/in/alicejohnson",
    industry: "Marketing",
    skills: ["Digital Marketing", "Content Strategy", "Branding"],
    bio: "Experienced marketing leader with a passion for innovation.",
    city: "Chicago",
    interests: ["mentorship", "events"],
    donor: true,
    experience: [
      {
        company: "BankCorp",
        position: "Financial Analyst",
        startDate: "2019-02-01",
        endDate: "Present",
        duration: "5 years",
      },
      {
        company: "FinSolutions",
        position: "Junior Analyst",
        startDate: "2018-01-01",
        endDate: "2018-12-31",
        duration: "1 year",
      },
      {
        company: "EconHub",
        position: "Intern",
        startDate: "2017-07-01",
        endDate: "2017-12-31",
        duration: "6 months",
      },
    ],
  },
  {
    _id: "alumni9",
    name: "Robert Lee",
    image: pks,
    graduationYear: 2020,
    degree: "B.Sc",
    major: "Physics",
    jobTitle: "Research Scientist",
    company: "Innovate Labs",
    email: "robertlee@example.com",
    phone: "456-789-0123",
    linkedin: "https://linkedin.com/in/robertlee",
    industry: "Research",
    skills: ["Data Analysis", "Research", "Machine Learning"],
    bio: "Physics enthusiast and machine learning researcher.",
    city: "Austin",
    interests: ["speaking"],
    donor: false,
    experience: [
      {
        company: "BankCorp",
        position: "Financial Analyst",
        startDate: "2019-02-01",
        endDate: "Present",
        duration: "5 years",
      },
      {
        company: "FinSolutions",
        position: "Junior Analyst",
        startDate: "2018-01-01",
        endDate: "2018-12-31",
        duration: "1 year",
      },
      {
        company: "EconHub",
        position: "Intern",
        startDate: "2017-07-01",
        endDate: "2017-12-31",
        duration: "6 months",
      },
    ],
  },
  {
    _id: "alumni10",
    name: "Emily Brown",
    image: pks,
    graduationYear: 2017,
    degree: "B.A.",
    major: "Psychology",
    jobTitle: "Counselor",
    company: "MindCare",
    email: "emilybrown@example.com",
    phone: "567-890-1234",
    linkedin: "https://linkedin.com/in/emilybrown",
    industry: "Healthcare",
    skills: ["Counseling", "Public Speaking", "Mental Health"],
    bio: "Dedicated to mental wellness and public speaking.",
    city: "Los Angeles",
    interests: ["events", "donations"],
    donor: true,
    experience: [
      {
        company: "BankCorp",
        position: "Financial Analyst",
        startDate: "2019-02-01",
        endDate: "Present",
        duration: "5 years",
      },
      {
        company: "FinSolutions",
        position: "Junior Analyst",
        startDate: "2018-01-01",
        endDate: "2018-12-31",
        duration: "1 year",
      },
      {
        company: "EconHub",
        position: "Intern",
        startDate: "2017-07-01",
        endDate: "2017-12-31",
        duration: "6 months",
      },
    ],
  },
];

export const students = [
  {
    _id: "student1",
    name: "Anjali Singh",
    image: pks,
    enrollmentYear: 2021,
    degree: "B.Tech",
    major: "Civil Engineering",
    email: "anjali.singh@example.com",
    linkedin: "https://linkedin.com/in/anjalisingh",
    skills: ["AutoCAD", "Structural Design"],
    city: "Varanasi",
    state: "Uttar Pradesh",
    interests: ["infrastructure"],
  },
  {
    _id: "student2",
    name: "Kunal Kapoor",
    image: pks,
    enrollmentYear: 2020,
    degree: "MBA",
    major: "Marketing",
    email: "kunal.kapoor@example.com",
    linkedin: "https://linkedin.com/in/kunalkapoor",
    skills: ["Digital Marketing", "Brand Management"],
    city: "Delhi",
    state: "Delhi",
    interests: ["networking"],
  },
  {
    _id: "student3",
    name: "Megha Iyer",
    image: pks,
    enrollmentYear: 2022,
    degree: "B.Tech",
    major: "Electrical Engineering",
    email: "megha.iyer@example.com",
    linkedin: "https://linkedin.com/in/meghaiyer",
    skills: ["Embedded Systems", "Circuit Design"],
    city: "Chennai",
    state: "Tamil Nadu",
    interests: ["robotics"],
  },
  {
    _id: "student4",
    name: "Rishi Mehta",
    image: pks,
    enrollmentYear: 2023,
    degree: "M.Tech",
    major: "Aerospace Engineering",
    email: "rishi.mehta@example.com",
    linkedin: "https://linkedin.com/in/rishimehta",
    skills: ["Aerospace Design", "CAD"],
    city: "Hyderabad",
    state: "Telangana",
    interests: ["aviation"],
  },
  {
    _id: "student5",
    name: "Pooja Choudhary",
    image: pks,
    enrollmentYear: 2022,
    degree: "PhD",
    major: "Biotechnology",
    email: "pooja.choudhary@example.com",
    linkedin: "https://linkedin.com/in/poojachoudhary",
    skills: ["Genomics", "Bioinformatics"],
    city: "Jaipur",
    state: "Rajasthan",
    interests: ["research"],
  },
  {
    _id: "student6",
    name: "Mark Thompson",
    image: pks,
    enrollmentYear: 2022,
    degree: "B.Tech",
    major: "Computer Science",
    email: "markthompson@example.com",
    linkedin: "https://linkedin.com/in/markthompson",
    skills: ["JavaScript", "Python", "Machine Learning"],
    city: "San Diego",
    interests: ["AI research"],
  },
  {
    _id: "student7",
    name: "Lisa White",
    image: pks,
    enrollmentYear: 2021,
    degree: "B.Com",
    major: "Finance",
    email: "lisawhite@example.com",
    linkedin: "https://linkedin.com/in/lisawhite",
    skills: ["Accounting", "Data Analysis"],
    city: "San Jose",
    interests: ["mentorship"],
  },
  {
    _id: "student8",
    name: "David Harris",
    image: pks,
    enrollmentYear: 2020,
    degree: "MBA",
    major: "Marketing",
    email: "davidharris@example.com",
    linkedin: "https://linkedin.com/in/davidharris",
    skills: ["Digital Marketing", "SEO", "Content Writing"],
    city: "Boston",
    interests: ["marketing trends"],
  },
  {
    _id: "student9",
    name: "Sophia Green",
    image: pks,
    enrollmentYear: 2022,
    degree: "B.Sc",
    major: "Physics",
    email: "sophiagreen@example.com",
    linkedin: "https://linkedin.com/in/sophiagreen",
    skills: ["Quantum Mechanics", "Data Analysis"],
    city: "New York",
    interests: ["research"],
  },
  {
    _id: "student10",
    name: "Brian Martin",
    image: pks,
    enrollmentYear: 2023,
    degree: "B.A.",
    major: "Psychology",
    email: "brianmartin@example.com",
    linkedin: "https://linkedin.com/in/brianmartin",
    skills: ["Mental Health Studies", "Public Speaking"],
    city: "Miami",
    interests: ["psychology seminars"],
  },
];