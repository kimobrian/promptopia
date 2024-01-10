'use client'

import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { Profile } from '@components/profile'

const MyProfile = () => {
  const { data: session } = useSession()

  const [myPosts, setMyPosts] = useState([])
  const router = useRouter()

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`)
      const data = await response.json()
      setMyPosts(data)
    }

    if (session?.user.id) fetchPosts()
  }, [session?.user.id])

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post?._id}`)
  }

  const handleDelete = () => {}

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile