/**
 * Items page component that displays a data table of posts.
 * Features:
 * - Fetches posts from JSONPlaceholder API
 * - Implements client-side state management with useState
 * - Provides refresh functionality to update data
 * - Uses DataTable component for displaying and managing posts
 * - Implements initial data loading with useEffect
 */
"use client"

import { Post, columns } from "@/components/items/columns"
import { DataTable } from "@/components/items/data-table"
import { useState, useEffect } from "react"

/**
 * Fetches posts from the JSONPlaceholder API
 * @returns Promise<Post[]> Array of post objects
 * @throws Error if the fetch request fails
 */
async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }
  return response.json()
}

export default function ItemsPage() {
  const [posts, setPosts] = useState<Post[]>([])

  const handleRefresh = async () => {
    const newPosts = await getPosts()
    setPosts(newPosts)
  }

  // Initial data fetch
  useEffect(() => {
    handleRefresh()
  }, [])

  return (
    <div className="flex-1">
      <main className="container mx-auto py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Items</h1>
          <p className="text-sm text-muted-foreground mt-2">
            View and manage your Items
          </p>
        </div>
        <DataTable 
          columns={columns} 
          data={posts} 
          onRefresh={handleRefresh}
        />
      </main>
    </div>
  )
} 