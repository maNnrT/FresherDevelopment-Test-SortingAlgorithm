/* eslint-disable react/prop-types */

import DisplayArray from '../components/DisplayArray';
import heapSortImg1 from '../assets/heapSort1.jpg';
import heapSortImg2 from '../assets/heapSort2.jpg';
import heapSortImg3 from '../assets/heapSort3.jpg';
import heapSortImg4 from '../assets/heapSort4.jpg';
import heapSortImg5 from '../assets/heapSort5.jpg';
import heapSortImg6 from '../assets/heapSort6.jpg';

function HeapSortArray({ arrayOfStrings }) {
	function heapSort(arr) {
		for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--)
			heapify(arr, arr.length, i);

		for (let i = arr.length - 1; i > 0; i--) {
			var temp = arr[0];
			arr[0] = arr[i];
			arr[i] = temp;

			heapify(arr, i, 0);
		}
	}

	function heapify(arr, N, i) {
		var largest = i;
		var l = 2 * i + 1;
		var r = 2 * i + 2;

		if (l < N && arr[l].localeCompare(arr[largest]) === 1)
			largest = l;

		if (r < N && arr[r].localeCompare(arr[largest]) === 1)
			largest = r;

		if (largest != i) {
			var swap = arr[i];
			arr[i] = arr[largest];
			arr[largest] = swap;

			heapify(arr, N, largest);
		}
	}
	let heapSortArray = JSON.parse(
		JSON.stringify(arrayOfStrings)
	);
	heapSort(heapSortArray);
	console.log('Heap Sort', heapSortArray);

	return (
		<div className="flex flex-col">
			<p className="text-white text-xl">
				Thuật toán Heap Sort
			</p>
			<p className="text-white text-lg">
				Tư tưởng của thuật toán:
				<p className="ml-3">
					• Từ mảng dữ liệu xây dựng cây nhị phân.
					<br />
					• Biến đổi cây nhị phân thành max heap.
					<br />• Thực hiện heap sort bằng cách đưa giá trị root
					node vào cuối mảng, loại bỏ root node và thay thế nó
					bằng node cuối cùng.
					<br />
					• Lặp lại quá trình max heap cho đến hết node.
					<br />
					<br />
					Hình ảnh minh họa thuật toán:
				</p>
			</p>
			<img
				src={heapSortImg1}
				alt="selectionSort"
				width="500px"
				className="self-center"
			/>
			<img
				src={heapSortImg2}
				alt="selectionSort"
				width="500px"
				className="self-center"
			/>
			<img
				src={heapSortImg3}
				alt="selectionSort"
				width="500px"
				className="self-center"
			/>
			<img
				src={heapSortImg4}
				alt="selectionSort"
				width="500px"
				className="self-center"
			/>
			<img
				src={heapSortImg5}
				alt="selectionSort"
				width="500px"
				className="self-center"
			/>
			<img
				src={heapSortImg6}
				alt="selectionSort"
				width="500px"
				className="self-center"
			/>
			<p className="text-white text-lg ml-3">
				Mảng sau khi đã sắp xếp:
			</p>
			<DisplayArray arrayOfStrings={heapSortArray} />;
		</div>
	);
}

export default HeapSortArray;
