import { useQuery } from "@tanstack/react-query";


const useSingleItemDetails = (id) => {
    const {data: singleItem = [], isLoading:loading, refetch} = useQuery({
        queryKey:['singleItem'],
        queryFn: async () =>{
            const res = await fetch(`https://e-shopy-server.vercel.app/singlebook/${id}`);
            return res.json();
        }
    })
    
    return [singleItem,loading,refetch];
};

export default useSingleItemDetails;