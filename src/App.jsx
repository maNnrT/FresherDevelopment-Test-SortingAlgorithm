import { useState } from 'react';
import './App.css';
import UnsortedArray from './pages/UnsortedArray';
import { Routes, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import SelectionSortArray from './pages/SelectionSortArray';
import InsertionSortArray from './pages/InsertionSortArray';
import BubbleSortArray from './pages/BubbleSortArray';
import QuickSortArray from './pages/QuickSortArray';
import HeapSortArray from './pages/HeapSortArray';
import CompareAlgorithm from './pages/CompareAlgorithm';
function App() {
	const [arrayOfStrings, setArrayOfStrings] = useState([]);
	function makeRandomString(l) {
		var text = '';
		var char_list =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		for (var i = 0; i < l; i++) {
			text += char_list.charAt(
				Math.floor(Math.random() * char_list.length)
			);
		}
		return text;
	}
	const handleCreateArray = () => {
		let array = [];
		for (var i = 0; i < 1000; i++) {
			array.push(
				makeRandomString(Math.floor(Math.random() * 5) + 1)
			);
		}
		setArrayOfStrings(() => [...array]);
	};
	console.log('Before:', arrayOfStrings);
	return (
		<div className="grid grid-cols-12 gap-10 bg-slate-600 h-full min-h-[100vh] ">
			<div className="col-span-2 bg-gray-700 relative shadow-2xl">
				<div className="flex flex-col fixed items-left pt-16 pl-5 ">
					<button
						onClick={handleCreateArray}
						className="text-white hover:scale-110 hover:duration-150 text-left mb-5"
					>
						Tạo mảng ngẫu nhiên
					</button>
					<NavLink
						to="/"
						className="text-left w-48 text-gray-500 hover:text-white hover:scale-110 hover:duration-150 mb-5"
					>
						Mảng chưa sắp xếp
					</NavLink>
					<NavLink
						to="/selectionSortArray"
						className="text-left w-48 text-gray-500 hover:text-white hover:scale-110 hover:duration-150 mb-5"
					>
						Selection Sort
					</NavLink>
					<NavLink
						to="/insertionSortArray"
						className="text-left w-48 text-gray-500 hover:text-white hover:scale-110 hover:duration-150 mb-5"
					>
						Insertion Sort
					</NavLink>
					<NavLink
						to="/bubbleSortArray"
						className="text-left w-48 text-gray-500 hover:text-white hover:scale-110 hover:duration-150 mb-5"
					>
						Bubble Sort
					</NavLink>
					<NavLink
						to="/quickSortArray"
						className="text-left w-48 text-gray-500 hover:text-white hover:scale-110 hover:duration-150 mb-5"
					>
						Quick Sort
					</NavLink>
					<NavLink
						to="/heapSortArray"
						className="text-left w-48 text-gray-500 hover:text-white hover:scale-110 hover:duration-150 mb-5"
					>
						Heap Sort
					</NavLink>
					<NavLink
						to="/compareAlgorithm"
						className="text-left w-48 text-gray-500 hover:text-white hover:scale-110 hover:duration-150 mb-5"
					>
						Thời gian chạy của các thuật toán
					</NavLink>
				</div>
			</div>
			<div className="col-span-10">
				<h1 className="text-center text-4xl pt-5 text-white">
					Thuật toán sắp xếp - Sorting Algorithm
				</h1>
				<p className="text-white text-xl mb-5">
					Yêu cầu: <br />
					<p className="ml-3">
						• Tạo 1 mảng chứa 1000 phần tử random các ký tự a đến
						z (cả viết thường lẫn viết hoa), độ dài mỗi phần tử
						ngẫu nhiên từ 1 đến 5 ký tự, liệt kê các phần tử đã
						tạo.
					</p>
					<p className="ml-3">
						• Sắp xếp mảng trên theo 5 cách khác nhau (theo quy
						tắc từ điển), trình bày các giải thuật sắp xếp sử
						dụng.
					</p>
					<p className="ml-3">
						• Đánh giá thời gian chạy của 5 giải thuật ở trên.
					</p>
					Bấm vào <strong>Tạo mảng ngẫu nhiên</strong> để thực hiện bài toán
				</p>
				<Routes>
					<Route
						path="/"
						element={
							<UnsortedArray arrayOfStrings={arrayOfStrings} />
						}
					/>
					<Route
						path="/selectionSortArray"
						element={
							<SelectionSortArray
								arrayOfStrings={arrayOfStrings}
							/>
						}
					/>
					<Route
						path="/insertionSortArray"
						element={
							<InsertionSortArray
								arrayOfStrings={arrayOfStrings}
							/>
						}
					/>
					<Route
						path="/bubbleSortArray"
						element={
							<BubbleSortArray arrayOfStrings={arrayOfStrings} />
						}
					/>
					<Route
						path="/quickSortArray"
						element={
							<QuickSortArray arrayOfStrings={arrayOfStrings} />
						}
					/>
					<Route
						path="/heapSortArray"
						element={
							<HeapSortArray arrayOfStrings={arrayOfStrings} />
						}
					/>
					<Route
						path="/compareAlgorithm"
						element={<CompareAlgorithm />}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
