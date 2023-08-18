/* eslint-disable react/prop-types */

import DisplayArray from '../components/DisplayArray';
import bubbleSortImg from '../assets/bubbleSort.jpg';

function BubbleSortArray({ arrayOfStrings }) {
	function bubbleSort(arr) {
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr.length - i - 1; j++) {
				if (arr[j].localeCompare(arr[j + 1]) === 1) {
					var temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
	}
	let bubbleSortArray = JSON.parse(
		JSON.stringify(arrayOfStrings)
	);
	bubbleSort(bubbleSortArray);
	console.log('Bubble Sort', bubbleSortArray);

	return (
		<div className="flex flex-col">
			<p className="text-white text-xl">
				Thuật toán Bubble Sort
			</p>
			<p className="text-white text-lg">
				Tư tưởng của thuật toán chạy vòng lặp từ đầu đến hết
				mảng, so sánh phần tử i với phần tử i+1 <br />
				<p className="ml-3">
					• Nếu phần tử i lớn hơn phần tử i+1 thì đổi chỗ 2 phần
					tử.
					<br />• Nếu phần tử i nhỏ hơn phần tử i+1 thì chuyển
					sang so sánh phần tử i+1 và phần tử i+2.
				</p>
				Khi thực hiện xong 1 vòng lặp, tiếp tục vòng lặp tiếp
				theo từ phần tử đầu tiên đến phần tử n-k (n: số phần tử
				của mảng, k:số lần đã thực hiện vòng lặp)
				<br />
				<br />
				<p className="ml-3">Hình ảnh minh họa thuật toán:</p>
			</p>
			<img
				src={bubbleSortImg}
				alt="selectionSort"
				width="500px"
				className="self-center"
			/>
			<p className="text-white text-lg ml-3">
				Mảng sau khi đã sắp xếp:
			</p>
			<DisplayArray arrayOfStrings={bubbleSortArray} />;
		</div>
	);
}

export default BubbleSortArray;
