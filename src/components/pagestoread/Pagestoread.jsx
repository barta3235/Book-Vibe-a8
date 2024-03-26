import { useLoaderData } from "react-router-dom";
import { getReadBooks } from "../../localstorageRead";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Label } from 'recharts';


const Pagestoread = () => {

    const allbook = useLoaderData();
    const readbooks = getReadBooks();

    const showBooks = allbook.filter((book) => readbooks.includes(book.bookId));
    console.log(showBooks);

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="bg-[#13131308] rounded-3xl flex justify-center items-center lg:p-[50px]">
            <BarChart
                width={1000}
                height={500}
                data={showBooks}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 30,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" >
                    <Label value="Book Names" dy={30} angle={0} style={{ fontWeight: 'bold' }}></Label>
                </XAxis>
                <YAxis>
                    <Label value="Total Pages" angle={-90} dx={-30} style={{ fontWeight: 'bold'}}></Label>
                </YAxis>
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {showBooks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>

            </BarChart>

        </div>
    );
};

export default Pagestoread;