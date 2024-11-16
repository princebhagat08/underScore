import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CommunityDirectory() {
  const filters = [
    "Search by Role",
    "Year of Joining",
    "Year of Graduation",
    "Course/Degree",
    "Department",
    "Current Location",
    "Hometown",
    "Chapters",
    "Company",
    "Designation",
    "Work Industry",
    "Skills",
  ]

  const members = [
    {
      name: "Neel Kanth Kundu",
      class: "Class of 2018",
      degree: "B. Tech., Electrical Engineering",
      location: "Melbourne, Victoria",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "A Abhishek Arunachalam",
      class: "Class of 2018",
      degree: "B. Tech., Civil Engineering",
      location: "New Delhi, Delhi",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "A Nagarajan",
      class: "Class of 2017",
      degree: "M. Tech., Structural Engineering",
      location: "Chennai, Tamil Nadu",
      image: null,
    },
    {
      name: "A Arunnishanth",
      class: "Class of 2021",
      degree: "B. Tech., Biochemical Engineering and Biotechnology",
      location: "Tamil Nadu",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "A Lakshmi Paladugula",
      class: "Class of 2007",
      degree: "M. Tech., Civil Engineering",
      location: "Hyderabad, Telangana",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "A P Sushmitha",
      class: "Class of 2015",
      degree: "B. Tech., Physics",
      location: "New Delhi, Delhi",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "A R Shubham",
      class: "Class of 2020",
      degree: "Dual Degree, Biochemical Engineering",
      location: "Delhi, Delhi",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "A Raghuram",
      class: "Class of 2012",
      degree: "M. Tech., Electrical Engineering",
      location: "Jodhpur",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 p-4 bg-white">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <Input type="search" placeholder="Enter Keyword" className="mb-4" />
        {filters.map((filter, index) => (
          <Button key={index} variant="outline" className="w-full justify-start mb-2">
            {filter}
          </Button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="bg-rose-700 text-white p-4 mb-4 rounded-md">
          <h1 className="text-xl font-semibold">58922 Members in community</h1>
        </div>
        <h2 className="text-2xl font-bold mb-4">All Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {members.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.class}</p>
                    <p className="text-sm text-gray-500">{member.degree}</p>
                    <p className="text-sm text-gray-500">{member.location}</p>
                    <Button variant="link" className="p-0 h-auto text-rose-700">
                      View more
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}