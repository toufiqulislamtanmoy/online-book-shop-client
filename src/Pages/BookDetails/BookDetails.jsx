import { useParams } from "react-router-dom";
import useSingleItemDetails from "../../Hooks/useSingleItemDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader, faCartPlus, faCircleCheck, faHandHoldingHeart, faTags } from "@fortawesome/free-solid-svg-icons";
import './BookDetails.css';
import WantToRead from "./WantToRead/WantToRead";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";

const BookDetails = () => {
    const { id } = useParams();
    const { singleItem, refetch } = useSingleItemDetails(id);
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const handelBorrowBookRequest = (data) => {
        const { _id, authorName, bookCoverImage, bookName, category, copiesAvailable } = data;
        const currentDate = new Date();
        currentDate.toLocaleDateString();
        const borrowRequestData = {
            bookId: _id,
            authorName,
            bookCoverImage,
            bookName,
            category,
            copiesAvailable,
            requesteredName: user.displayName,
            requesteredEmail: user.email,
            requestedDate: currentDate.toLocaleDateString(),
            status:"pending"
            
        }

        axiosSecure.post('/borrowRequest', borrowRequestData).then(data => {
            refetch();
            if (data.data.message === "success") {
                Swal.fire({
                    icon: 'success',
                    title: 'Item added Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    return (
        <div>
            <div className="lg:flex justify-center gap-9 my-10 mx-5 lg:mx-0 ">
                <div className="border-2 border-black p-5">
                    <figure className="cursor-pointer" onClick={() => window.my_modal_4.showModal()}>
                        <img className="w-full h-[430px] transition-transform transform-gpu hover:-translate-x-2 bookOpen" src={singleItem.bookCoverImage} alt="" />
                    </figure>
                </div>
                <div className="font-Poppins">
                    <h3 className="text-3xl font-bold">{singleItem.bookName}</h3>

                    <h3 className="text-xl my-5">This is a {singleItem.category} written by  <span className="text-orange-400">{singleItem.authorName}</span></h3>

                    <h3>Category: <span className="text-sky-300 font-semibold text-xl my-5">{singleItem.category}</span></h3>

                    <h3 className="font-semibold font-Russo text-2xl">TK. {singleItem.price}</h3>

                    <h3 className="text-xl my-5"><FontAwesomeIcon className="mr-2 text-green-400" icon={faCircleCheck} />In Stock <span className="text-green-500">(<span className="font-Russo text-2xl">{singleItem.copiesAvailable}</span> copies available)</span></h3>

                    <h3 className="text-xl my-5"><FontAwesomeIcon className="text-green-400 mr-1" icon={faTags} /> Buy <span className="text-2xl font-Russo text-green-500">999+ TK. </span> Books and got upto <span className="text-2xl font-Russo text-green-500">15% </span> discount</h3>

                    <h3 className="text-xl my-5"><FontAwesomeIcon className="text-green-400 mr-1" icon={faHandHoldingHeart} /> You can borrow books from here also maximum for <span className="text-2xl font-Russo text-green-500">10 Days</span></h3>

                    <div className="my-10 lg:flex text-center gap-3">
                        <div className="my-2">
                            <button className="btn btn-wide rounded-none bg-transparent border-warning hover:bg-warning  hover:transition-colors hover:duration-1000 capitalize hover:text-white"><FontAwesomeIcon icon={faCartPlus} /> Add To Cart</button>
                        </div>
                        <div className="my-2">
                            <button type="button" onClick={() => handelBorrowBookRequest(singleItem)}
                                className="btn btn-wide rounded-none bg-transparent border-success hover:bg-success hover:transition-colors hover:duration-1000 capitalize hover:text-white"
                                disabled={singleItem.copiesAvailable < 1}
                            >
                                <FontAwesomeIcon icon={faHandHoldingHeart} /> Borrow Request
                            </button>

                        </div>
                        <div className="my-2">
                            <button className="btn btn-wide rounded-none bg-transparent border-secondary hover:bg-secondary  hover:transition-colors hover:duration-1000 capitalize hover:text-white" onClick={() => window.my_modal_4.showModal()}><FontAwesomeIcon icon={faBookOpenReader} /> Read Book</button>
                        </div>


                        {/* You can open the modal using ID.showModal() method */}
                        <dialog id="my_modal_4" className="modal">
                            <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                                <img className="my-10 border-black border-2 w-full p-5" src={singleItem.bookCoverImage} alt="" />
                                <WantToRead preview={singleItem.preview} />
                                <div className="modal-action">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn rounded-none bg-transparent border-info hover:bg-info  hover:transition-colors hover:duration-1000 capitalize hover:text-white">Close</button>
                                </div>
                            </form>
                        </dialog>


                    </div>
                </div>
            </div>
            <div className="h-[40px]">

            </div>
        </div>
    );
};

export default BookDetails;