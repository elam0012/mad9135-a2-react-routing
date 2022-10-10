import { useEffect, useState } from "react"

export default function useLocalStorage(key, initial) {
  
  const [list, setList] = useState(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initial
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(list))
  },[list, key])

  return [list, setList]
}