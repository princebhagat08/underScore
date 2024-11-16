import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPinIcon, UsersIcon } from 'lucide-react'

export default function Component() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 p-4 bg-white">
        <div className="mb-4">
          <Input type="search" placeholder="Search by title" className="w-full" />
        </div>
        <h2 className="text-lg font-semibold mb-2">EVENT CATEGORIES</h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center bg-gray-100 p-2">
            <span>All Events</span>
            <span className="text-gray-500">(470)</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Past Events</span>
            <span className="text-gray-500">(458)</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Upcoming Events</span>
            <span className="text-gray-500">(12)</span>
          </li>
          <li className="font-semibold mt-4">Categories</li>
          <li className="flex justify-between items-center">
            <span>NEEV</span>
            <span className="text-gray-500">(1)</span>
          </li>
          <li className="flex justify-between items-center">
            <span>VAPUSI</span>
            <span className="text-gray-500">(10)</span>
          </li>
          <li className="flex justify-between items-center">
            <span>SARTHI</span>
            <span className="text-gray-500">(5)</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Card className="mb-4">
          <CardContent className="p-4 flex">
            <img
              alt="Crystal Reunion 2014"
              className="w-40 h-40 object-cover rounded-md mr-4"
              src="/placeholder.svg?height=160&width=160"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Crystal Reunion Batch of 2014</h3>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <CalendarIcon className="w-4 h-4 mr-2" />
                Starts: Nov 23, 2024
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <CalendarIcon className="w-4 h-4 mr-2" />
                Ends: Nov 24, 2024
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPinIcon className="w-4 h-4 mr-2" />
                IIT Delhi
              </div>
              <Badge className="bg-pink-500 text-white">Upcoming Event</Badge>
            </div>
            <Button className="self-start bg-rose-700 hover:bg-rose-800">VIEW</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex">
            <img
              alt="IITDAA Founder's Club Launch"
              className="w-40 h-40 object-cover rounded-md mr-4"
              src="/placeholder.svg?height=160&width=160"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">IITDAA Founder's Club Launch Event...</h3>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <CalendarIcon className="w-4 h-4 mr-2" />
                Starts: Nov 30, 2024 - 6:00 PM
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <CalendarIcon className="w-4 h-4 mr-2" />
                Ends: Nov 30, 2024 - 9:00 PM
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPinIcon className="w-4 h-4 mr-2" />
                Seminar Hall, IIT Delhi, New Delhi
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <UsersIcon className="w-4 h-4 mr-2" />
                66 attendees
              </div>
              <div className="flex items-center">
                <Badge className="bg-pink-500 text-white mr-2">Online Registration Open</Badge>
                <span className="text-sm text-gray-600">INR 200 onwards</span>
              </div>
            </div>
            <Button className="self-start bg-rose-700 hover:bg-rose-800">VIEW</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}