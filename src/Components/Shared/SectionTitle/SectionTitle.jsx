const SectionTitle = ({title}) => {
    return (
        <div className="text-center my-5 py-3">
            <div className="divider"></div>
            <h2 className="text-4xl font-Russo font-bold text-gray-400">{title}</h2>
            <div className="divider"></div>
        </div>
    );
};

export default SectionTitle;