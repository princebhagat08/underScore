import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil, Mail, AlertTriangle } from "lucide-react";

export default function AlumniProfile() {
  const [workExperiences, setWorkExperiences] = useState([
    { id: 1, title: "sadf", company: "", date: "" },
  ]);

  const addNewWork = () => {
    const newWork = { id: Date.now(), title: "", company: "", date: "" };
    setWorkExperiences([...workExperiences, newWork]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-[url('/placeholder.svg?height=200&width=1000')] bg-cover bg-center h-48"></div>
      <div className="-mt-24 px-4">
        <div className="md:flex gap-6">
          <div className="md:w-1/4">
            {/* Profile Card */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-x-4">
                  <Avatar className="w-24 h-24 border-4 border-white">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Anoop Singh" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="text-2xl font-bold">
                      Anoop Singh{" "}
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </h1>
                    <p className="text-gray-500">Class of 1977</p>
                    <p className="text-gray-500">interdisciplinary M. Tech., Physics</p>
                    <div className="flex items-center mt-2 text-yellow-600">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      <span className="text-sm">Unauthenticated User</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
  
            {/* Contact Information Card */}
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-red-800">
                  <Mail className="inline-block mr-2" />
                  Contact Information
                </CardTitle>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </CardHeader>
              <CardContent>
                <p>anoop102910@gmail.com</p>
              </CardContent>
            </Card>
          </div>
          <div className="md:w-3/4">
            {/* IIT Delhi related experience Card */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-red-800">IIT Delhi related experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">Alumni</p>
                  <p>23423423423</p>
                  <p>interdisciplinary M. Tech., Physics</p>
                  <p>1974 - 1977</p>
                </div>
              </CardContent>
            </Card>
  
            {/* Work Experience Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-red-800">Work experience</CardTitle>
                <Button onClick={addNewWork} variant="ghost" size="sm" className="text-red-600">
                  + Add Work
                </Button>
              </CardHeader>
              <CardContent>
                {workExperiences.map(work => (
                  <div key={work.id} className="mb-4 p-4 bg-gray-50 rounded-md">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2 w-full">
                        <Label htmlFor={`work-title-${work.id}`} className="sr-only">
                          Work Title
                        </Label>
                        <Input
                          id={`work-title-${work.id}`}
                          value={work.title}
                          onChange={e => {
                            const updatedExperiences = workExperiences.map(w =>
                              w.id === work.id ? { ...w, title: e.target.value } : w
                            );
                            setWorkExperiences(updatedExperiences);
                          }}
                          placeholder="Job Title"
                        />
                        <Label htmlFor={`work-company-${work.id}`} className="sr-only">
                          Company
                        </Label>
                        <Input
                          id={`work-company-${work.id}`}
                          value={work.company}
                          onChange={e => {
                            const updatedExperiences = workExperiences.map(w =>
                              w.id === work.id ? { ...w, company: e.target.value } : w
                            );
                            setWorkExperiences(updatedExperiences);
                          }}
                          placeholder="Company"
                        />
                        <Label htmlFor={`work-date-${work.id}`} className="sr-only">
                          Work Date Range
                        </Label>
                        <Input
                          id={`work-date-${work.id}`}
                          value={work.date}
                          onChange={e => {
                            const updatedExperiences = workExperiences.map(w =>
                              w.id === work.id ? { ...w, date: e.target.value } : w
                            );
                            setWorkExperiences(updatedExperiences);
                          }}
                          placeholder="Date Range"
                        />
                      </div>
                      <Button variant="ghost" size="icon" className="mt-2">
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
      </div>
    </div>
  );
}
