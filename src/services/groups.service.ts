import { Group } from "@/columns";

const BASE_URL =
  import.meta.env.VITE_ENV_MODE === "development"
    ? "http://localhost:4000"
    : "https://apitest.myftp.biz";

async function getGroupsBySearchTerm(searchTerm: string): Promise<{message: string, data: Group[]} > {
    return (
      await fetch(`${BASE_URL}/api/v1/groups/search/${searchTerm}`, {
        method: "PUT",
        mode: "cors",
      })
    ).json();
}

export {
    getGroupsBySearchTerm,
}