/* eslint-disable react/prop-types */

import DisplayArray from '../components/DisplayArray';
import insertionSortImg from '../assets/insertionSort.jpg';
function InsertionSortArray({ arrayOfStrings }) {
	function insertionSort(arr) {
		let i, key, j;
		for (i = 1; i < arr.length; i++) {
			key = arr[i];
			j = i - 1;
			while (j >= 0 && arr[j].localeCompare(key) === 1) {
				arr[j + 1] = arr[j];
				j = j - 1;
			}
			arr[j + 1] = key;
		}
	}
	let insertionSortArray = JSON.parse(
		JSON.stringify(arrayOfStrings)
	);
	insertionSort(insertionSortArray);
	console.log('Insertion Sort', insertionSortArray);
	return (
		<div className="flex flex-col">
			<p className="text-white text-xl">
				Thuật toán Insertion Sort
			</p>
			<p className="text-white text-lg">
				Tư tưởng của thuật toán chạy vòng lặp từ đầu đến hết
				mảng, so sánh phần tử i với phần tử i+1
				<p className="ml-3">
					• Nếu phần tử i lớn hơn phần tử i+1 thì đổi chỗ 2 phần
					tử. Nếu phần tử i sau khi đổi chỗ lớn hơn phần tử i-1
					thì không làm gì, nếu ngược lại thì đổi chỗ phần tử i
					và phần tử i-1 và tiếp tục so sánh phần tử i-1 sau khi
					đổi chỗ với phần tử i-2 và làm tương tự cho đến khi các
					phần tử sắp xếp đúng vị trí.
				</p>
				<p className="ml-3">
					• Nếu phần tử i nhỏ hơn phần tử i+1 thì chuyển sang so
					sánh phần tử i+1 và phần tử i+2.
					<br />
					<br />
					Hình ảnh minh họa thuật toán:
				</p>
			</p>
			<img
				src={insertionSortImg}
				alt="selectionSort"
				width="500px"
				className="self-center"
			/>
			<p className="text-white text-lg ml-3">
				Mảng sau khi đã sắp xếp:
			</p>
			<DisplayArray arrayOfStrings={insertionSortArray} />
		</div>
	);
}

export default InsertionSortArray;
