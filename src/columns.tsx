import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Group = {
  name: string
  designation: string
  posts_per_period: string
  members: string
}

export const columns: ColumnDef<Group>[] = [
  {
    accessorKey: "name",
    header: () => <div className=" text-center">Name</div>,
  },
  {
    accessorKey: "designation",
    header: () => <div className=" text-center">Designation</div>,
  },
  {
    accessorKey: "posts_per_period",
    header: () => <div className=" text-center">PPP</div>,
  },
  {
    accessorKey: "members",
    header: () => <div className=" text-center">Members</div>,
  }
]
