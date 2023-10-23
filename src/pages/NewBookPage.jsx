import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const NewBookPage = () => {
  const { fetchWithToken } = useContext(AuthContext)

  useEffect(() => {
    fetchWithToken('/books', parsed => {
      console.log(parsed)
    })
  }, [])

  return (
    <>
      <h1>New Book</h1>
    </>
  )
}

export default NewBookPage
