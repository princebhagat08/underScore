import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 p-4 bg-gray-100">
        <h2 className="text-lg font-semibold mb-4">CATEGORIES</h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span>All</span>
            <span className="text-gray-500">36</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Academic</span>
            <span className="text-gray-500">7</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Development</span>
            <span className="text-gray-500">4</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Social</span>
            <span className="text-gray-500">25</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Card>
          <CardHeader className="bg-rose-700 text-white">
            <CardTitle>CrowdFunding Initiatives</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-600 text-sm mb-4">
              (Please mention your Indian PAN No, if you have one, to get 80 G Tax Benefit!)
            </p>
            <div className="flex gap-4">
              <Image
                src="/placeholder.svg"
                alt="Campaign beneficiary"
                width={200}
                height={200}
                className="rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  Appeal for financial assistance for the family of Sunil Yadav, IITD Alum, Batch of 2018, B. Tech., CE
                </h3>
                <p className="text-sm text-gray-600 mb-2">INR 3,40,281 raised of INR 10,00,000 goal</p>
                <Progress value={34} className="mb-2" />
                <p className="text-sm text-gray-600 mb-4">88 people have donated so far.</p>
                <Button className="w-full bg-rose-700 hover:bg-rose-800">DONATE NOW</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}