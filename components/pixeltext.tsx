"use client"
import React, { useEffect, useState } from "react"
import { FONT_MAP } from "@/lib/fontmap"

const ROWS = 7
const COLS = 65

const WORDS = ["FULLSTACK", "FRONTEND-DEV", "SOFTWARE-ENG", "BACKEND-DEV", "CPE-KMUTT"]


export default function PixelText() {
  const [pixels, setPixels] = useState<number[][]>(
    Array(ROWS).fill(0).map(() => Array(COLS).fill(0))
  )
  const [wordIndex, setWordIndex] = useState(0)

  const renderWordToGrid = (word: string) => {
    const grid = Array(ROWS).fill(0).map(() => Array(COLS).fill(0))
    let x = 1
    for (const char of word) {
      const bitmap = FONT_MAP[char.toUpperCase()]
      if (!bitmap) continue

      for (let row = 0; row < bitmap.length; row++) {
        for (let col = 0; col < bitmap[row].length; col++) {
          if (row < ROWS && x + col < COLS) {
            grid[row + 1][x + col] = bitmap[row][col]
          }
        }
      }
      x += 5
    }
    return grid
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (wordIndex + 1) % WORDS.length
      setWordIndex(nextIndex)
      const newGrid = renderWordToGrid(WORDS[nextIndex])
      setPixels(newGrid)
    }, 2000)
    return () => clearInterval(interval)
  }, [wordIndex])

  return (
    <div className="grid grid-rows-7 grid-cols-65 gap-[2px] w-fit p-3 bg-black rounded-lg shadow-xl">
      {pixels.flatMap((row, y) =>
        row.map((value, x) => (
          <div
            key={`${y}-${x}`}
            className={`w-2 h-2 rounded-[1px] transition-all duration-300 ${
              value ? "bg-white" : "bg-gray-800"
            }`}
          />
        ))
      )}
    </div>
  )
}
