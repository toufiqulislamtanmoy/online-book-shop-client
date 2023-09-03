import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import useSingleItemDetails from "../../../Hooks/useSingleItemDetails";

const UpdateBooks = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {id} = useParams();
    const {singleItem} = useSingleItemDetails(id);
    
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
                const modifiedData = {
                    "authorName": data.authorName,
                    "bookName": data.bookName,
                    "category": data.category,
                    "price": data.price,
                    "downloadURL" : data.download,
                    "copiesAvailable": data.copiesAvailable,
                };
    

                console.log(modifiedData);
    
                const insertResponse = await axiosSecure.patch(`/updateBookDetails/${id}`, modifiedData);
                if (insertResponse.data.modifiedCount) {
                    reset();
                    Swal.fire(
                        'Book Details is Updated into the list!',
                        'See the list in the home page',
                        'success'
                    );
                    navigate('/', { replace: true });
                }
            
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="w-full min-h-screen">
        <SectionTitle title={"Update Book Details"}/>
        <div className="mx-10 ">
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input {...register("authorName", { required: true })} type="text" placeholder="Author Name" defaultValue={singleItem.authorName} className="input input-bordered" />
                        {errors.authorName && <span className="text-red-500">Author Name can not be empty</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Book Name</span>
                        </label>
                        <input {...register("bookName", { required: true })} type="text" placeholder="Book Name" defaultValue={singleItem.bookName}  className="input input-bordered" />
                        {errors.bookName && <span className="text-red-500">Book name is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select {...register("category")} defaultValue={singleItem.category} className="select select-bordered w-full">
                            <option>Comics</option>
                            <option>Education</option>
                            <option>Mystery & Thriller</option>
                            <option>Magazine</option>
                            <option>Newspaper</option>
                        </select>
                        {errors.category && <span className="text-red-500">Category is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input {...register("price", { required: true })} type="text" placeholder="Price" defaultValue={singleItem.price}  className="input input-bordered" />
                        {errors.price && <span className="text-red-500">Price is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Copies</span>
                        </label>
                        <input {...register("copiesAvailable", { required: true })} type="text" placeholder="Available Copies" defaultValue={singleItem.copiesAvailable}  className="input input-bordered" />
                        {errors.copiesAvailable && <span className="text-red-500">Available copies is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Download URL</span>
                        </label>
                        <input {...register("download", { required: true })} type="text" placeholder="Download URL" defaultValue={singleItem.downloadURL}  className="input input-bordered" />
                        {errors.download && <span className="text-red-500">Available copies is required</span>}
                    </div>

                    

                </div>
                <div className="form-control my-5">
                    <button className="btn bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all  duration-300 delay-100">Update Now</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default UpdateBooks;