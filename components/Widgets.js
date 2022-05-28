import {SearchIcon} from "@heroicons/react/outline"
import {DotsHorizontalIcon, VideoCameraIcon} from "@heroicons/react/solid"
import Contact from "./Contact"

const contacts = [
    {src: "/images/james-hetfield-300x300.jpg", name: "James Hetfield"},
    {src: "/images/dave-mustaine-300x300.jpg", name: "Dave Mustaine"},
    {src: "/images/scott-ian-300x300.jpg", name: "Scott Ian"},
    {src: "/images/jim-root-300x300.jpg", name: "Jim Root"},
    {src: "/images/dimebag-darrell-300x300.jpg", name: "Dimebag Darrell"},
    {src: "/images/fredrik-thordendal-300x300.jpg", name: "Fredrik Thordendal"},
    {src: "/images/joe-duplantier-300x300.jpg", name: "Joe Duplantier"},
]

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
        <div className="flex justify-between items-center text-gray-500 mb-5">
          <h2 className="text-xl">Contacts</h2>
          <div className="flex space-x-2">
            <VideoCameraIcon className="h-6" />
            <SearchIcon className="h-6" />
            <DotsHorizontalIcon className="h-6" />
          </div>
        </div>

        {contacts.map(contact => (
          <Contact key={contact.src} src={contact.src} name={contact.name} />
        ))}
    </div>
  )
}

export default Widgets
