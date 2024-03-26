
const ErrorPage = () => {
    return (
        <div className="border-2 flex flex-col justify-center items-center min-h-screen">
            <img className="w-[50%] h-[50%]" src="https://i.ibb.co/Kx8WFMf/peakpx.jpg" alt="" />
            <h1 className="mt-[30px] text-[25px] font-bold">Failed to load the location</h1>
        </div>
    );
};

export default ErrorPage;