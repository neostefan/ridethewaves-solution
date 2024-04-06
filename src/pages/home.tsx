import { columns } from "@/columns";
import { DataTable } from "@/components/data-table";
import SearchButton from "@/components/search-button";
import { Input } from "@/components/ui/input";
import { getGroupsBySearchTerm } from "@/services/groups.service";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";


const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const mutation = useMutation({ mutationFn: () => getGroupsBySearchTerm(searchTerm) });

  console.log(mutation.error);
  console.log(mutation.data);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <section className='container mx-auto py-10'>
      <div className='flex-col space-y-2'>
        <div className='flex w-full justify-center'>
          <form
            className='flex w-6/12 space-x-2'
            onSubmit={submitHandler}
          >
            <Input
              className='focus-visible:ring-[2px]'
              type='text'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.currentTarget.value)}
              placeholder='Search Term'
            />
            <SearchButton />
          </form>
        </div>
        {mutation.data && mutation.data.data.length > 0 && (
          <DataTable
            columns={columns}
            data={mutation.data.data}
          />
        )}
        {mutation.data && mutation.data.data.length === 0 && (
          <div className='text-center font-bold text-xl'>
            No results found that matches the defined query. Contact the developer!
          </div>
        )}
        {mutation.isPending && <div className=' text-center font-bold text-2xl'>Loading...</div>}
        {mutation.error && (
          <div className='text-center text-red-700 font-bold bg-red-300 p-2 border-red-500 border-solid border-2 rounded-md mx-auto text-wrap w-64'>
            {mutation.error.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;