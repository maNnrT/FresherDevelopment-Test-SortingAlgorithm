/* eslint-disable react/prop-types */

import DisplayArray from '../components/DisplayArray';
import selectionSortImg from '../assets/selectionSort.jpg';
function SelectionSortArray({ arrayOfStrings }) {
	function selectionSort(arr) {
		for (let i = 0; i < arr.length - 1; i++) {
			let min_index = i;
			let minStr = arr[i];
			for (let j = i + 1; j < arr.length; j++) {
				if (arr[j].localeCompare(minStr) === -1) {
					minStr = arr[j];
					min_index = j;
				}
			}
			if (min_index != i) {
				let temp = arr[min_index];
				arr[min_index] = arr[i];
				arr[i] = temp;
			}
		}
	}
	let selectionSortArray = JSON.parse(
		JSON.stringify(arrayOfStrings)
	);
	selectionSort(selectionSortArray);
	return (
		<div className="flex flex-col">
			<p className="text-white text-xl">
				Thuật toán Selection Sort
			</p>
			<p className="text-white text-lg ml-3">
				Tư tưởng của thuật toán là liên tục lựa chọn phần tử nhỏ
				nhất hoặc lớn nhất từ phần chưa được sắp xếp và đưa vào
				làm phần tử cuối của phần đã được sắp xếp nói cách khác
				là đưa vào làm phần tử đầu tiên của phần chưa được sắp
				xếp.
        <br />
        <br />
				Hình ảnh minh họa thuật toán:
			</p>
			<img
				src={selectionSortImg}
				alt="selectionSort"
				width="500px"
				className="self-center"
			/>
			<p className="text-white text-lg ml-3">
				Mảng sau khi đã sắp xếp:
			</p>
			<DisplayArray arrayOfStrings={selectionSortArray} />
		</div>
	);
}

export default SelectionSortArray;
