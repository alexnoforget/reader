import { useState } from "react"

export const useDropdown = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }
  const closeList = () => {
    setOpen(false)
  }

  return {
    toggle,
    closeList,
    open,
  }
}