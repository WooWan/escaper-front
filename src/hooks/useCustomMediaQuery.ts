import { useMediaQuery } from 'react-responsive'
import { useEffect, useState } from 'react'

export const useCustomMediaQuery = () => {
  const [responsive, setResponsive] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false,
  })

  const sm: boolean = useMediaQuery({
    query: '(min-width:640px)',
  })
  //
  const md: boolean = useMediaQuery({
    query: '(min-width:768px)',
  })

  const lg: boolean = useMediaQuery({
    query: '(min-width:1024px)',
  })

  const xl: boolean = useMediaQuery({
    query: '(min-width:1280px)',
  })

  //
  useEffect(() => {
    setResponsive({ sm, md, lg, xl })
  }, [sm, md, lg, xl])

  return responsive
}
