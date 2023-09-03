import { useState } from 'react'

interface ArrayStateAction<T> {
  add: (item: T) => void
  remove: (item: T) => void
  clear: () => void
}

export const useArrayState = <T>(
  initialItems: T[]
  ): [T[], ArrayStateAction<T>] => {
  const [items, setItems] = useState(initialItems)

  const add = (item: T) => setItems([...items, item]) 

  const remove = (item: T) => setItems([...items.filter(i => i !== item)])

  const clear = () => setItems([])

  return [items, {add, remove, clear}]
}
