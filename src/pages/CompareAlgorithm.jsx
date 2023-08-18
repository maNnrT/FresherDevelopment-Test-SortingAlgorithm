function CompareAlgorithm() {
	return (
		<div className="relative overflow-x-auto text-white">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Thuật toán
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tốt nhất
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Trung bình
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tệ nhất
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Selection Sort
                        </th>
                        <td className="px-6 py-4">
                            O(n&sup2;)
                        </td>
                        <td className="px-6 py-4">
                            O(n&sup2;)
                        </td>
                        <td className="px-6 py-4">
                            O(n&sup2;)
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Insertion Sort
                        </th>
                        <td className="px-6 py-4">
                            O(n)
                        </td>
                        <td className="px-6 py-4">
                            O(n&sup2;)
                        </td>
                        <td className="px-6 py-4">
                            O(n&sup2;)
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Bubble Sort
                        </th>
                        <td className="px-6 py-4">
                            O(n)
                        </td>
                        <td className="px-6 py-4">
                            O(n&sup2;)
                        </td>
                        <td className="px-6 py-4">
                            O(n&sup2;)
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Quick Sort
                        </th>
                        <td className="px-6 py-4">
                            O(nlogn)
                        </td>
                        <td className="px-6 py-4">
                            O(nlogn)
                        </td>
                        <td className="px-6 py-4">
                            O(n&sup2;)
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Heap Sort
                        </th>
                        <td className="px-6 py-4">
                            O(nlogn)
                        </td>
                        <td className="px-6 py-4">
                            O(nlogn)
                        </td>
                        <td className="px-6 py-4">
                            O(nlogn)
                        </td>
                    </tr>
                </tbody>
            </table>
            <p className="text-white text-lg mt-5">
                Dựa vào độ phức tạp của các thuật toán trong các trường hợp, ta có thể so sánh thời gian các thuật toán:
                <p className="ml-3">• Với 1 mảng có số lượng phần tử không quá lớn, thời gian chạy của các thuật toán là không có nhiều sự khác biệt</p>
                <p className="ml-3">• Với 1 mảng có số lượng phần tử lớn hoặc đã có sắp xếp, thời gian chạy của các thuật toán có sự chênh lệch:</p>
                <p className="ml-10">Selection Sort có tốc độ khá chậm khi mảng có số lượng phần tử lớn</p>
                <p className="ml-10">Insertion Sort và Bubble Sort có tốc độ khá nhanh khi mảng đã gần như được sắp xếp</p>
                <p className="ml-3">• Quick Sort và Heap Sort khá nhanh trong đa số các trường hợp</p>
                <p className=" my-5 text-xl ">Vậy ta có thể sắp xếp các thuật toán từ nhanh tới chậm nhất theo thứ tự: Heap Sort, Quick Sort, Bubble Sort, Insertion Sort, Selection Sort</p>
            </p>
            
        </div>

	);
}

export default CompareAlgorithm;
