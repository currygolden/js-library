// 交换数组元素位置
// 数组元素上移，下移
const changePos(i) {
	let arr = [1,2,2,3,4]
	// 用当前元素去替换前一个
	arr.splice(i-1, 0, arr.splice(i,1)[0])
}