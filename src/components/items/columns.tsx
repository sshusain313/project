/**
 * Defines the structure and configuration for the data table columns.
 * This file contains:
 * - Post type definition for the data structure
 * - Column configurations including:
 *   - Accessor keys for data mapping
 *   - Header labels
 *   - Custom cell renderers
 */
"use client"

import { ColumnDef } from "@tanstack/react-table"

/**
 * Type definition for a Post object
 * Matches the structure from JSONPlaceholder API
 */
export type Post = {
  id: number
  title: string
  body: string
  userId: number
}

// Column definitions for the data table
export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "userId",
    header: "User ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "body",
    header: "Content",
    cell: ({ row }) => {
      const body: string = row.getValue("body")
      // Truncate the content if it's too long
      return body.length > 100 ? body.substring(0, 100) + "..." : body
    },
  },
]
