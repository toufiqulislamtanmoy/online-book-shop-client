import { BallTriangle, Hourglass } from "react-loader-spinner";
import useBorrowRequetByEmail from "../../../Hooks/useBorrowRequetByEmail";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";


const MyBorrowBooks = () => {
    const { borrowBookForUser } = useBorrowRequetByEmail();
    console.log(borrowBookForUser);
    return (
        <div className={`mb-10 ${borrowBookForUser.length < 8 ? 'h-[100vh]' : ''}`}>
            <SectionTitle title={"Borrow Items"} />
            <div className="overflow-x-auto w-full">
                {borrowBookForUser.length > 0 ?
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Book Details</th>
                                <th>Date Of Request</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                borrowBookForUser.map(singleItem =>
                                    <tr key={singleItem._id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask  w-12 h-12">
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
                                            <span className="font-Russo"> {singleItem.requestedDate}</span>
                                        </td>
                                        <td>
                                            <span className="">
                                                {singleItem?.status === "pending" ? (
                                                    <p className="text-[#306cce] flex gap-2">Pending<Hourglass
                                                    visible={true}
                                                    height="20"
                                                    width="20"
                                                    ariaLabel="hourglass-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                    colors={['#306cce', '#72a1ed']}
                                                  /></p>
                                                ) : singleItem?.status === "accept" ? (
                                                    <p className="text-success">Accepted</p>
                                                ) : singleItem?.status === "reject" ? (
                                                    <p className="text-primary">Rejected</p>
                                                ) : singleItem?.status === "collected" ? (
                                                    <p>Book Returned</p>
                                                ) : null}
                                            </span>

                                        </td>

                                    </tr>

                                )
                            }

                        </tbody>
                    </table> :
                    <div>
                        <p>No Item added into your borrow request</p>
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

export default MyBorrowBooks;