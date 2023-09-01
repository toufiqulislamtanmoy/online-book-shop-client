import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import useAllBorrowRequestBook from "../../../Hooks/useAllBorrowRequestBook";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const BrowBookRequestList = () => {
    const {borrowBooks, refetch} = useAllBorrowRequestBook();
   

    const [axiosSecure] = useAxiosSecure();
    const handaleStatusRequest = (id, requestStatus,copiesAvailable,bookId) => {
        console.log(requestStatus);
        axiosSecure.put(`/updateBorrowRequestStatus/${id}`, { status: requestStatus,copiesAvailable,bookId }).then(data => {
            console.log(data);
            if (data.data.matchedCount > 0) {
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: 'Accept Borrow Request Successfully',
                    showConfirmButton: false,
                })
            }
        })
    }

    console.log(borrowBooks);
    return (
        <div className={`mb-10 ${borrowBooks.length < 6 ? 'h-[100vh]' : ''}`}>
            <SectionTitle title={'All Borrow Book Request'} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {borrowBooks &&
                    borrowBooks.map(borrowBook =>
                        <div key={borrowBook._id} className="card card-compact border-2 border-black">
                            <figure><img className="w-full lg:h-[280px] rounded-t-xl" src={borrowBook.bookCoverImage} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{borrowBook.requesteredName}</h2>
                                <p><span className="font-bold">Date of Request: </span>{borrowBook.requestedDate}</p>
                                <div className="card-actions justify-center">

                                    {borrowBook.status === "pending" ? (
                                        <>
                                            <button onClick={() => handaleStatusRequest(borrowBook._id, 'accept',borrowBook.copiesAvailable,borrowBook.bookId)} className="btn rounded-full bg-transparent border-success hover:bg-success hover:transition-colors hover:duration-1000 capitalize hover:text-white">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </button>
                                            <button onClick={() => handaleStatusRequest(borrowBook._id, 'reject',borrowBook.copiesAvailable,borrowBook.bookId)} className="btn rounded-full bg-transparent border-primary hover:bg-primary hover:transition-colors hover:duration-1000 capitalize hover:text-white">
                                                <FontAwesomeIcon icon={faXmark} />
                                            </button>
                                        </>
                                    ) : borrowBook.status === "accept" ? (
                                        <button onClick={() => handaleStatusRequest(borrowBook._id, 'collected',borrowBook.copiesAvailable, borrowBook.bookId)} className="btn rounded-full bg-transparent border-success hover:bg-success hover:transition-colors hover:duration-1000 capitalize hover:text-white">
                                            Collected
                                        </button>
                                    ) : borrowBook.status === "reject" ? (
                                        <p className="text-red-500">Request has been rejected</p>
                                    ) : (
                                        <p>Book Returned</p>

                                    )}



                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default BrowBookRequestList;