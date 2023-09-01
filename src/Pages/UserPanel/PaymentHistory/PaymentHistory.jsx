import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProviders";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { BallTriangle } from "react-loader-spinner";

const PaymentHistory = () => {
    const [purcheseItemInfo, setPurcheseItemInfo] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        axiosSecure.get(`/paymentHistory/${user.email}`).then(res => {
            console.log(res.data);
            setPurcheseItemInfo(res.data)
        })
    },[user?.email, axiosSecure])
    return (
        <div className={`mb-10 ${purcheseItemInfo.length < 7 ? 'h-[100vh]' : ''}`}>
            <SectionTitle title={"Purchase Items"} />
            <div className="overflow-x-auto w-full">
                {purcheseItemInfo.length > 0 ?
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="font-Russo">Book Details</th>
                                <th className="font-Russo">Transaction Date</th>
                                <th className="font-Russo">Transaction ID</th>
                                <th className="font-Russo">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                purcheseItemInfo.map(singleItem =>
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
                                                    <div className="text-sm opacity-50">{singleItem.bookCategory}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className=""> {singleItem.date}({singleItem.time})</span>
                                        </td>
                                        <td>
                                            <span className=""> {singleItem.transactionId}</span>
                                        </td>
                                        <td>
                                            
                                        <span className=" text-success"> {singleItem.paymentStatus}</span>
                                        </td>

                                    </tr>

                                )
                            }

                        </tbody>
                    </table> :
                    <div>
                        <p className="text-center">No Purchase History Found</p>
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

export default PaymentHistory;