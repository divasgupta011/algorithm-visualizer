// src/algorithms/mergeSort.js

const mergeSort = async (array, setArray, setColorArray) => {
  const auxiliaryArray = array.slice();

  const merge = async (mainArray, startIdx, middleIdx, endIdx) => {
    const tempArray = [];
    let i = startIdx;
    let j = middleIdx + 1;

    while (i <= middleIdx && j <= endIdx) {
      // Highlight elements being compared
      setColorArray(colors => {
        const newColors = [...colors];
        newColors[i] = 'red';
        newColors[j] = 'red';
        return newColors;
      });
      await new Promise(resolve => setTimeout(resolve, 100));

      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        tempArray.push(auxiliaryArray[i]);
        i++;
      } else {
        tempArray.push(auxiliaryArray[j]);
        j++;
      }

      setColorArray(colors => {
        const newColors = [...colors];
        newColors[i - 1] = 'blue';
        newColors[j - 1] = 'blue';
        return newColors;
      });
    }

    while (i <= middleIdx) {
      tempArray.push(auxiliaryArray[i]);
      i++;
    }

    while (j <= endIdx) {
      tempArray.push(auxiliaryArray[j]);
      j++;
    }

    // Copy sorted temp array back to main array
    for (let k = 0; k < tempArray.length; k++) {
      mainArray[startIdx + k] = tempArray[k];
      auxiliaryArray[startIdx + k] = tempArray[k];
      setArray([...mainArray]);
      setColorArray(colors => {
        const newColors = [...colors];
        newColors[startIdx + k] = 'green';
        return newColors;
      });
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    // Reset colors
    setColorArray(colors => colors.map(() => 'blue'));
  };

  const mergeSortHelper = async (mainArray, startIdx, endIdx) => {
    if (startIdx >= endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    await mergeSortHelper(auxiliaryArray, startIdx, middleIdx);
    await mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx);
    await merge(mainArray, startIdx, middleIdx, endIdx);
  };

  await mergeSortHelper(array, 0, array.length - 1);
};

export default mergeSort;