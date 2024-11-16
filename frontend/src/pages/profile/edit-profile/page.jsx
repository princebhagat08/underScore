import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, Plus } from 'lucide-react'

export default function UserProfile() {
  const [workExperiences, setWorkExperiences] = useState([
    { id: 1, title: 'sadf asdf', date: 'Feb, 2011 - Till Present (in Accounting)' }
  ])



  const addNewWork = () => {
    const newWork = { id: Date.now(), title: '', date: '' }
    setWorkExperiences([...workExperiences, newWork])
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 shadow-md">
        <nav>
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Button
                  variant={item === "Other work experience" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Card>
          <CardHeader className="bg-navy-blue text-white">
            <CardTitle>Other work experience</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={addNewWork} className="mb-4">
              <Plus className="mr-2 h-4 w-4" /> Add new work
            </Button>
            {workExperiences.map((work) => (
              <div key={work.id} className="mb-4 p-4 bg-gray-50 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <Label htmlFor={`work-title-${work.id}`} className="sr-only">Work Title</Label>
                    <Input
                      id={`work-title-${work.id}`}
                      value={work.title}
                      onChange={(e) => {
                        const updatedExperiences = workExperiences.map(w =>
                          w.id === work.id ? { ...w, title: e.target.value } : w
                        )
                        setWorkExperiences(updatedExperiences)
                      }}
                      className="mb-2"
                      placeholder="Enter work title"
                    />
                    <Label htmlFor={`work-date-${work.id}`} className="sr-only">Work Date Range</Label>
                    <Input
                      id={`work-date-${work.id}`}
                      value={work.date}
                      onChange={(e) => {
                        const updatedExperiences = workExperiences.map(w =>
                          w.id === work.id ? { ...w, date: e.target.value } : w
                        )
                        setWorkExperiences(updatedExperiences)
                      }}
                      placeholder="Enter date range"
                    />
                  </div>
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Edit work experience</span>
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}