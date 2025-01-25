import { ethers } from "ethers"

const contractAddress = "0x1234567890123456789012345678901234567890" // Replace with your actual contract address
const contractABI = [
  // Replace with your actual contract ABI
  {
    inputs: [
      {
        internalType: "address",
        name: "_creator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "tipCreator",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
]

export async function tipCreator(creatorId: string, amount: string) {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" })
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, contractABI, signer)

    const transaction = await contract.tipCreator(creatorId, ethers.utils.parseEther(amount), {
      value: ethers.utils.parseEther(amount),
    })

    await transaction.wait()
  } else {
    throw new Error("Please install MetaMask!")
  }
}

