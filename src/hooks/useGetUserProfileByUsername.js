import { useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import useUserProfileStore from "../store/userProfileStore"
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestore } from "../firebase/firebase"

const useGetUserProfileByUsername = (username) => {
  const showToast = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const { userProfile, setUserProfile } = useUserProfileStore()

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true)
      try {
        const q = query(collection(firestore, "users"), where("username", "==", username))
        const querySnapshot = await getDocs(q)

        if(querySnapshot.empty) return setUserProfile(null)

        let userDoc
        querySnapshot.forEach(doc => {
          userDoc = doc.data()
        })

        setUserProfile(userDoc)
        console.log(userDoc)

      } catch (error) {
        showToast("Error", error.message, "error")
      } finally {
        setIsLoading(false)
      }
    }
    getUserProfile()
  }, [setUserProfile, username, showToast])


  return (
    { isLoading, userProfile }
  )
}

export default useGetUserProfileByUsername
