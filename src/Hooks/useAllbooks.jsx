import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllbooks = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: books = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            // const res = await fetch('http://localhost:5000/allBooks');
            // return res.json();
            const response = await axiosSecure(`/allBooks`)
            return response.data;
        }
    })

    return [books, loading, refetch];
};

export default useAllbooks;