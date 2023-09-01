import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import useMyCartitem from "../../../Hooks/useMyCartitem";
import { faCreditCard, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { BallTriangle } from "react-loader-spinner";

const MyCart = () => {
    const { cartItem, cartRefetch } = useMyCartitem();
    const [axiosSecure] = useAxiosSecure();
    const handelDeleteCartItem = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteItem/${id}`).then(data => {
                    cartRefetch();
                    if (data.data.deletedCount > 0) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Item Deleted from your Cart Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            }
        })
    }
    return (
        <div className={`mb-10 ${cartItem.length < 8 ? 'h-[100vh]' : ''}`}>
            <SectionTitle title={"Cart Items"} />
            <div className="overflow-x-auto">
                {cartItem.length > 0 ?
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Book Details</th>
                                <th>Price</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cartItem.map(singleItem =>
                                    <tr key={singleItem._id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask w-12 h-12">
                                                        <img src={singleItem.bookCoverImage} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{singleItem.bookName}</div>
                                                    <div className="text-sm opacity-50">{singleItem.category}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="font-Russo"> {singleItem.price}</span>
                                            <span className="font-Russo"> TK.</span>
                                        </td>
                                        <th>
                                            <div className="lg:flex gap-4">
                                                <Link to={`/userdashboard/checkout/${singleItem._id}`} className="btn btn-xs rounded-md bg-secondary hover:bg-info  hover:transition-colors hover:duration-1000 capitalize text-white"><FontAwesomeIcon icon={faCreditCard} /></Link>



                                                <button onClick={() => handelDeleteCartItem(singleItem._id)} className="btn btn-xs rounded-md bg-warning hover:bg-primary  hover:transition-colors hover:duration-1000 capitalize text-white"><FontAwesomeIcon icon={faTrashCan} /></button>
                                            </div>
                                        </th>
                                    </tr>

                                )
                            }

                        </tbody>
                    </table> :
                    <div>
                        <p className="text-center">No Item added into your cart</p>
                        <p className="flex items-center justify-center">
                            <BallTriangle
                                height={100}
                                width={100}
                                radius={5}
                                color="#4fa94d"
                                ariaLabel="ball-triangle-loading"
                                wrapperClass={{}}
                                wrapperStyle=""
                                visible={true}
                            />
                        </p>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyCart;