import { Link } from "react-router-dom";


const Card = ({book}) => {
    console.log("From Recent Card",book);
    const {id,coverImage,category,author,title,Price} = book;
    return (
        <Link className="tooltip" data-tip={title} to={`/bookdetail/${id}`}>
            <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-down">
                <div className="relative">
                    <figure>
                        <img className="rounded-xl h-[220px]" src={coverImage} alt="Shoes" />
                    </figure>
                    <div className="absolute top-0 left-0 badge badge-secondary">{category}</div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {title.length > 10 ? title.slice(0, 10) : title}..
                    </h2>
                    <h3 className="text-left"><span className="font-semibold">Price:</span> {Price} BDT</h3>
                    <h3 className="text-left"><span className="font-semibold">Author:</span> {author}</h3>
                    
                </div>
            </div>
        </Link>
    );
};

export default Card;