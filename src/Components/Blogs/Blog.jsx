

const Blog = ({ blog }) => {
    const {blogImage,content,title} = blog;
    console.log(blog);
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={blogImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                   {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{content.length > 10 ? content.slice(0, 18) : content}..</p>
            </div>
        </div>
    );
};

export default Blog;