

const WantToRead = ({preview}) => {
    
    return (
        <div>
            {
                preview.map((url,index) => 
                <img className="my-10 border-black border-2 w-full p-5" key={index} src={url} alt="" />
                )
            }
        </div>
    );
};

export default WantToRead;