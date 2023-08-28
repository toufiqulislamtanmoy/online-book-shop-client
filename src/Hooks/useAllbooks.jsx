import { useQuery } from "@tanstack/react-query";


const useAllbooks = () => {
    const {data: books = [], isLoading:loading, refetch} = useQuery({
        queryKey:['books'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/allBooks');
            return res.json();
        }
    })
    
    return [books,loading,refetch];
};

export default useAllbooks;