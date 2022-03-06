import { useState } from 'react'

export const useModal = (stateDefault = false) => {
  const [isShowing, setIsShowing] = useState(stateDefault)

  const onOpenModal = () => setIsShowing(true)
  const onCloseModal = () => setIsShowing(false)

  return {
    isShowing,
    onCloseModal,
    onOpenModal
  }
}
