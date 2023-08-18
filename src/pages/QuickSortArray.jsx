/* eslint-disable react/prop-types */

import DisplayArray from '../components/DisplayArray';
import quickSortImg from '../assets/quickSort.jpg';

function QuickSortArray({ arrayOfStrings }) {
	function quickSort(arr) {
		if (arr.length <= 1) {
			return arr;
		}

		let pivot = arr[0];
		let leftArr = [];
		let rightArr = [];

		for (let i = 1; i < arr.length; i++) {
			if (arr[i].localeCompare(pivot) === -1) {
				leftArr.push(arr[i]);
			} else {
				rightArr.push(arr[i]);
			}
		}

		return [
			...quickSort(leftArr),
			pivot,
			...quickSort(rightArr),
		];
	}
	let quickSortArray = JSON.parse(
		JSON.stringify(arrayOfStrings)
	);
	console.log('Quick Sort', quickSort(quickSortArray));
	return (
		<div className="flex flex-col">
			<p className="text-white text-xl">
				Thuật toán Quick Sort
			</p>
			<p className="text-white text-lg">
				Tư tưởng của thuật toán là chia để trị, cụ thể: chọn ra
				1 phần tử pivot, thường là phần tử đầu tiên của mảng{' '}
				<p className="ml-3">
					• Phần tử nào nhỏ hơn pivot thì đưa vào mảng bên trái.{' '}
					<br />• Phần tử nào lớn hơn pivot thì đưa vào mảng bên
					phải. thường là phần tử đầu tiên của mảng{' '}
				</p>{' '}
				Ta sẽ được 1 mảng mới là: [left, pivot, right]
				<br /> Tiếp tục với mảng left và right. Điều kiện kết
				thúc đệ quy là khi mảng chỉ còn 1 phần tử hoặc ít hơn.
				<br />
				<br />
				<p className="ml-3">Hình ảnh minh họa thuật toán:</p>
			</p>
			<img
				src={quickSortImg}
				alt="selectionSort"
				width="500px"
				className="self-center"
			/>
			<p className="text-white text-lg ml-3">
				Mảng sau khi đã sắp xếp:
			</p>
			<DisplayArray
				arrayOfStrings={quickSort(quickSortArray)}
			/>
		</div>
	);
}

export default QuickSortArray;
