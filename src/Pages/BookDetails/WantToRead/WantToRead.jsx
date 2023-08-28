

const WantToRead = ({ preview }) => {
    return (
        <div>
            {
                preview ? (
                    preview.map((url, index) =>
                        <img className="my-10 border-black border-2 w-full p-5" key={index} src={url} alt="" />
                    )
                ) : (
                    <div className="flex flex-col space-y-6 items-center justify-center h-[70vh]">
                        <progress className="progress w-56"></progress>
                    </div>
                )
            }
        </div>
    );
};

export default WantToRead;