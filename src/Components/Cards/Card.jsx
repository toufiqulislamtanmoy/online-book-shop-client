import { Link } from "react-router-dom";


const Card = ({book}) => {
    console.log("From Recent Card",book);
    const {_id,bookCoverImage,category,authorName,bookName,price} = book;
    return (
        <Link className="tooltip" data-tip={bookName} to={`/bookdetails/${_id}`}>
            <div className="card card-compact bg-base-100 shadow-xl" >
                <div className="relative">
                    <figure>
                        <img className="w-full h-[280px] rounded-t-xl" src={bookCoverImage} alt="Shoes" />
                    </figure>
                    <div className="absolute top-0 left-0 badge badge-secondary">{category}</div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName.length > 15 ? bookName.slice(0, 15)+'...' : bookName}
                    </h2>
                    <h3 className="text-left"><span className="font-semibold">Price:</span> {price} BDT</h3>
                    <h3 className="text-left"><span className="font-semibold">Author:</span> {authorName}</h3>
                    
                </div>
            </div>
        </Link>
    );
};

export default Card;