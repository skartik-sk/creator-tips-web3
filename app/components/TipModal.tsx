"use client"

import { useState } from "react"
import type { Creator } from "../types"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { tipCreator } from "../utils/contractInteraction"

export default function TipModal({
  isOpen,
  onClose,
  creator,
}: { isOpen: boolean; onClose: () => void; creator: Creator }) {
  const [amount, setAmount] = useState("")
  const { toast } = useToast()

  const handleTip = async () => {
    try {
      await tipCreator(creator.id, amount)
      toast({
        title: "Tip sent successfully!",
        description: `You tipped ${amount} tokens to ${creator.name}.`,
      })
      onClose()
    } catch (error) {
      toast({
        title: "Error sending tip",
        description: "Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tip {creator.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="amount" className="text-right">
              Amount
            </label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="col-span-3"
              placeholder="Enter tip amount"
            />
          </div>
        </div>
        <Button
          onClick={handleTip}
          className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white"
        >
          Send Tip
        </Button>
      </DialogContent>
    </Dialog>
  )
}

