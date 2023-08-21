import { useQuery } from "@tanstack/react-query";


const useAllbooks = () => {
    const {data: books = [], isLoading:loading, refetch} = useQuery({
        queryKey:['books'],
        queryFn: async () =>{
            const res = await fetch('https://e-shopy-server.vercel.app/allBooks');
            return res.json();
        }
    })
    
    return [books,loading,refetch];
};

export default useAllbooks;