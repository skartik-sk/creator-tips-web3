"use client"

import { useState } from "react"
import Image from "next/image"
import type { Creator } from "../types"
import TipModal from "./TipModal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CreatorCard({ creator }: { creator: Creator }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10">
      <CardHeader className="p-0">
        <Image
          src={creator.imageUrl || "/placeholder.svg"}
          alt={creator.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-semibold mb-2">{creator.name}</CardTitle>
        <p className="text-muted-foreground mb-4">{creator.description}</p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white"
        >
          Tip Creator
        </Button>
      </CardFooter>
      <TipModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} creator={creator} />
    </Card>
  )
}

