function Feature({ icon, desc }) {
    return (
        <div className="flex items-start">
            <div className="text-white bg-primary mr-4 p-2 rounded-full text-2xl flex justify-center items-center ">
                {icon}
            </div>
            <span>{desc}</span>
        </div>
    );
}

export default Feature;
