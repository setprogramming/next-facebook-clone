import StoryCard from "./StoryCard"

const stories = [
    {
        name: "James Hetfield",
        src: "/images/james-hetfield-640x480.jpg",
        profile: "/images/james-hetfield-300x300.jpg"
    },
    {
        name: "Dave Mustaine",
        src: "/images/dave-mustaine-640x480.jpg",
        profile: "/images/dave-mustaine-300x300.jpg"
    },
    {
        name: "Joe Duplantier",
        src: "/images/joe-duplantier-640x480.jpg",
        profile: "/images/joe-duplantier-300x300.jpg"
    },
    {
        name: "Jim Root",
        src: "/images/jim-root-640x480.jpg",
        profile: "/images/jim-root-300x300.jpg"
    },
    {
        name: "Scott Ian",
        src: "/images/scott-ian-640x480.jpg",
        profile: "/images/scott-ian-300x300.jpg"
    },
]

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
        {stories.map(story => (
            <StoryCard 
                key={story.src} 
                name={story.name} 
                src={story.src} 
                profile={story.profile} 
            />
        ))}
    </div>
  )
}

export default Stories