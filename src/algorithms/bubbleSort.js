const bubbleSort = async (array, setArray) => {
  let arr = [...array];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        
        // Update state to re-render
        setArray([...arr]);
        
        // Delay for visualization
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    }
  }
};

export default bubbleSort;