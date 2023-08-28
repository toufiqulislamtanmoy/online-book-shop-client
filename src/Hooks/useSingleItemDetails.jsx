import { useQuery } from "@tanstack/react-query";

const useSingleItemDetails = (id) => {
    const { data: singleItem = [], isLoading: loading, refetch } = useQuery(
        // Make sure to specify a unique query key that includes the item ID
        ['singleItem', id], 
        async () => {
            const res = await fetch(`http://localhost:5000/singlebook/${id}`);
            return res.json();
        }
    );

    return { singleItem, loading, refetch }; // Return as an object
};

export default useSingleItemDetails;
