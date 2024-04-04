import { columns } from "@/columns";
import { DataTable } from "@/components/data-table";
import SearchButton from "@/components/search-button";
import { Input } from "@/components/ui/input";
import { getGroupsBySearchTerm } from "@/services/groups.service";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";


// async function getData(): Promise<Group[]> {
//     return [
//       {
//         name: 'Ojota_Ogudu',
//         designation: 'Public',
//         members: '10k',
//         posts_per_period: '3 per month'
//       },
//       {
//         name: 'Ojota Ketu Ilaje',
//         designation: 'Private',
//         members: '11k',
//         posts_per_period: '100 per month'
//       },
//       {
//         name: 'Ojota_Ogudu',
//         designation: 'Public',
//         members: '9.5k',
//         posts_per_period: '10 per day'
//       }
//     ]
// }
  

const Home = () => {

  const [searchTerm, setSearchTerm] = useState<string>('');

  const mutation = useMutation({ mutationFn: () => getGroupsBySearchTerm(searchTerm)})
  

    console.log(mutation.error);
    console.log(mutation.data);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      mutation.mutate();
    }

    return (
        <section className="container mx-auto py-10">
            <div className="flex-col space-y-2">
                <div className="flex w-full justify-center">
                    <form className="flex w-6/12 space-x-2" onSubmit={submitHandler}>
                        <Input className="focus-visible:ring-[2px]" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.currentTarget.value)} placeholder="Search Term"/>
                        <SearchButton />
                    </form>
                </div>
                {mutation.data && mutation.data.data.length > 0 && <DataTable columns={columns} data={mutation.data.data} />}
                {mutation.isPending && <div className=" text-center font-bold text-2xl">Loading...</div>}    
        </div>
      </section>
    )
}

export default Home;