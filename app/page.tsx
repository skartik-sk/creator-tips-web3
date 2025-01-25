import CreatorCard from "./components/CreatorCard"
import type { Creator } from "./types"

const creators: Creator[] = [
  {
    id: "1",
    name: "Alice",
    description: "Tech blogger and YouTuber",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    name: "Bob",
    description: "Fitness instructor and podcaster",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    name: "Charlie",
    description: "Digital artist and streamer",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    name: "Diana",
    description: "Fashion influencer and designer",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "5",
    name: "Ethan",
    description: "Culinary expert and food blogger",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "6",
    name: "Fiona",
    description: "Travel vlogger and photographer",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
]

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
        Support Your Favorite Creators
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {creators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  )
}

