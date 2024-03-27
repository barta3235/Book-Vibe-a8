import { ScaleLoader } from "react-spinners";
const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <ScaleLoader
                color="green"
                height={60}
                radius={5}
                width={8}
            />
        </div>
    );
};

export default Loader;