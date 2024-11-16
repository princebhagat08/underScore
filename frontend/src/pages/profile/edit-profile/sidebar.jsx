import React from 'react'
const sidebarItems = [
  "Profile photo",
  "Basic details",
  "Contact details",
  "Other details",
  "IIT Delhi related experience",
  "Other work experience",
  "Other education experience",
  "Privacy settings",
  "Email preferences",
  "Account & Password"
]

function EditProfileSidebar() {
  
  return (
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
  )
}

export default EditProfileSidebar
