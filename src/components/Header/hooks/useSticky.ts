import React, { useEffect, useState } from 'react'

const useSticky = () => {
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const listener = () => {
      if (window.pageYOffset > 0 && !isSticky) setSticky(true)
      else if (window.pageYOffset <= 0) setSticky(false)
    }
    window.addEventListener('scroll', listener)

    return () => { window.removeEventListener('scroll', listener) }
  }, [])

  return isSticky

}

export default useSticky