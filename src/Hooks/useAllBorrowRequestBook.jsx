import { useQuery } from "@tanstack/react-query";

const useAllBorrowRequestBook = () => {
    const {data: borrowBooks = [], isLoading:loading, refetch} = useQuery({
        queryKey:['allborrowRequest'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/allborrowRequest');
            return res.json();
        }
    })
    
    return {borrowBooks,loading,refetch};
};

export default useAllBorrowRequestBook;