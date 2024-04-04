import { Group } from "@/columns";

async function getGroupsBySearchTerm(searchTerm: string): Promise<{message: string, data: Group[]} > {
    return (await fetch(`http://localhost:4000/api/v1/groups/search/${searchTerm}`, { method: 'PUT', mode: 'cors' })).json()
}

export {
    getGroupsBySearchTerm,
}