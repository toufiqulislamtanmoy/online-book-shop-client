import { useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
const imageHostingToken = import.meta.env.VITE_IMGBB_KEY;


const AddBooks = () => {
    const [axiosSecure] = useAxiosSecure();
    const imagHostingUrl = `https://api.imgbb.com/1/upload?&key=${imageHostingToken}`
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [preview1] = useState(true);
    const [preview2, setPreview2] = useState(false);
    const [preview3, setPreview3] = useState(false);



    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
    
            if (data.bookCover && data.bookCover[0]) {
                formData.append('image', data.bookCover[0]);
            }
    
            const bookCoverResponse = await fetch(imagHostingUrl, {
                method: "POST",
                body: formData
            });
    
            const bookCoverResult = await bookCoverResponse.json();
            if (bookCoverResult.success) {
                const bookCoverImage = bookCoverResult.data.display_url;
    
                const modifiedData = {
                    "authorName": data.authorName,
                    "bookName": data.bookName,
                    "category": data.category,
                    "price": data.price,
                    "downloadURL" : data.download,
                    "copiesAvailable": data.copiesAvailable,
                    bookCoverImage,
                    preview: []
                };
    
                const previewImageUrls = [];
    
                for (let i = 1; i <= 3; i++) {
                    const previewKey = `preview${i}`;
                    if (data[previewKey] && data[previewKey][0]) {
                        formData.set('image', data[previewKey][0]);
                        const previewResponse = await fetch(imagHostingUrl, {
                            method: "POST",
                            body: formData
                        });
                        const previewResult = await previewResponse.json();
                        const previewImageUrl = previewResult.data.display_url;
                        previewImageUrls.push(previewImageUrl);
                    }
                }
    
                modifiedData.preview = previewImageUrls;
    
                console.log(modifiedData);
    
                const insertResponse = await axiosSecure.post('/addbook', modifiedData);
                if (insertResponse.data.insertedId) {
                    reset();
                    Swal.fire(
                        'Book is Added into the list!',
                        'See the list in the home page',
                        'success'
                    );
                    navigate('/', { replace: true });
                }
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <div className="w-full min-h-screen">
            <div className="text-center py-3">
                <div className="divider"></div>
                <h2 className="text-4xl font-Russo font-bold text-gray-400">Add Books</h2>
                <div className="divider"></div>
            </div>
            <div className="mx-10 ">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Author Name</span>
                            </label>
                            <input {...register("authorName", { required: true })} type="text" placeholder="Author Name" className="input input-bordered" />
                            {errors.authorName && <span className="text-red-500">Author Name can not be empty</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Book Name</span>
                            </label>
                            <input {...register("bookName", { required: true })} type="text" placeholder="Book Name" className="input input-bordered" />
                            {errors.bookName && <span className="text-red-500">Book name is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select {...register("category")} defaultValue="Pick One" className="select select-bordered w-full">
                                <option disabled>Pick One</option>
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
                            <input {...register("price", { required: true })} type="text" placeholder="Price" className="input input-bordered" />
                            {errors.price && <span className="text-red-500">Price is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Copies</span>
                            </label>
                            <input {...register("copiesAvailable", { required: true })} type="text" placeholder="Available Copies" className="input input-bordered" />
                            {errors.copiesAvailable && <span className="text-red-500">Available copies is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Download URL</span>
                            </label>
                            <input {...register("download", { required: true })} type="text" placeholder="Download URL" className="input input-bordered" />
                            {errors.download && <span className="text-red-500">Available copies is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Book Cover Image</span>
                            </label>
                            <input {...register("bookCover", { required: true })} type="file" className="file-input file-input-bordered file-input-xs w-full" />
                            {errors.bookCover && <span className="text-red-500">This field is required</span>}
                        </div>

                        {preview1 && <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Preview Page Image 1</span>
                            </label>
                            <input {...register("preview1", { required: true })} type="file" className="file-input file-input-bordered file-input-xs w-full" />
                            {errors.preview1 && <span className="text-red-500">This field is required</span>}
                        </div>}
                        {
                            preview2 ||

                            <div className="relative mb-5">
                                <button onClick={() => setPreview2(true)} type="button" className="absolute top-1/2">
                                    <BsFillPlusCircleFill className="text-3xl" />
                                </button>
                            </div>

                        }

                        {preview2 && <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Preview Page Image 2</span>
                            </label>
                            <input {...register("preview2", { required: true })} type="file" className="file-input file-input-bordered file-input-xs w-full" />
                            {errors.preview2 && <span className="text-red-500">This field is required</span>}
                        </div>
                        }

                        {
                            preview2 && !preview3 && (
                                <div className="relative mb-5">
                                    <button onClick={() => setPreview3(true)} type="button" className="absolute top-1/2">
                                        <BsFillPlusCircleFill className="text-3xl" />
                                    </button>
                                </div>
                            )
                        }


                        {preview3 && <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Preview Page Image 3</span>
                            </label>
                            <input {...register("preview3", { required: true })} type="file" className="file-input file-input-bordered file-input-xs w-full" />
                            {errors.preview3 && <span className="text-red-500">This field is required</span>}
                        </div>}

                    </div>
                    <div className="form-control my-5">
                        <button className="btn bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all  duration-300 delay-100">Add New Record</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AddBooks;