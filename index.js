let numbers = [];

const numberForm = document.getElementById("numberForm");
numberForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn nạp lại trang
  addNumber();
});

function addNumber() {
  const numberInput = document.getElementById("numberInput");
  const number = parseInt(numberInput.value);
  numbers.push(number);
  numberInput.value = "";
  displayNumbers();
}

function resetArray() {
  numbers = [];
  displayNumbers();
}

function displayNumbers() {
  const numberTableBody = document.getElementById("numberTableBody");
  numberTableBody.innerHTML = "";

  numbers.forEach((number, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${index}</td><td>${number}</td>`;
    numberTableBody.appendChild(row);
  });
}
function showHideInputFields() {
  const functionSelect = document.getElementById("functionSelect");
  const selectedFunction = parseInt(functionSelect.value);
  const swapInputFields = document.getElementsByClassName("swap-input-fields");
  const realNumberInputFields = document.getElementById(
    "realNumberInputFields"
  );

  if (selectedFunction === 6) {
    for (let i = 0; i < swapInputFields.length; i++) {
      swapInputFields[i].style.display = "block";
    }
    realNumberInputFields.style.display = "none"; // Ẩn phần nhập mảng số thực
  } else if (selectedFunction === 9) {
    for (let i = 0; i < swapInputFields.length; i++) {
      swapInputFields[i].style.display = "none";
    }
    realNumberInputFields.style.display = "block"; // Hiển thị phần nhập mảng số thực
  } else {
    for (let i = 0; i < swapInputFields.length; i++) {
      swapInputFields[i].style.display = "none";
    }
    realNumberInputFields.style.display = "none"; // Ẩn phần nhập mảng số thực cho các case khác
  }
}

function findFirstPrime(numbers) {
  for (const number of numbers) {
    if (is_prime(number)) {
      return number;
    }
  }
  return -1;
}
function swapArrayElements(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function performSwap() {
  const position1Input = document.getElementById("position1");
  const position2Input = document.getElementById("position2");

  const position1 = parseInt(position1Input.value);
  const position2 = parseInt(position2Input.value);

  if (
    isNaN(position1) ||
    isNaN(position2) ||
    position1 < 0 ||
    position2 < 0 ||
    position1 >= numbers.length ||
    position2 >= numbers.length
  ) {
    document.getElementById(
      "result"
    ).innerText = `Vị trí không hợp lệ. Vui lòng kiểm tra lại.`;
    return;
  }

  swapArrayElements(numbers, position1, position2);
  displayNumbers();
  document.getElementById(
    "result"
  ).innerText = `Đã đổi chỗ giá trị tại vị trí ${position1} và ${position2}.`;
}
// Khởi tạo mảng số thực

let realNumbers = [];

function addRealNumber() {
  const realNumberInput = document.getElementById("realNumberInput");
  const realNumber = parseFloat(realNumberInput.value);

  if (!isNaN(realNumber)) {
    realNumbers.push(realNumber);
    displayRealNumbers();
    realNumberInput.value = ""; // Xóa giá trị nhập
  }
}

function resetRealNumberArray() {
  realNumbers = [];
  displayRealNumbers();
}

function displayRealNumbers() {
  const realNumberTableBody = document.getElementById("realNumberTableBody");
  realNumberTableBody.innerHTML = "";

  for (let i = 0; i < realNumbers.length; i++) {
    const row = realNumberTableBody.insertRow();
    const indexCell = row.insertCell(0);
    const valueCell = row.insertCell(1);

    indexCell.innerHTML = i;
    valueCell.innerHTML = realNumbers[i];
  }

  const realNumberTable = document.getElementById("realNumberTable");
  if (realNumbers.length > 0) {
    realNumberTable.style.display = "table";
  } else {
    realNumberTable.style.display = "none";
  }
}
function getRealNumbers() {
  const realNumberInput = document.getElementById("realNumberInput");
  const realNumberValue = parseFloat(realNumberInput.value);

  if (!isNaN(realNumberValue)) {
    realNumbers.push(realNumberValue);
    realNumberInput.value = "";
    return realNumbers;
  }
  return realNumbers;
}

function countIntegers(realNumbers) {
  let integerCount = 0;

  for (const number of realNumbers) {
    if (Number.isInteger(number)) {
      integerCount++;
    }
  }

  return integerCount;
}
function performFunction() {
  const functionSelect = document.getElementById("functionSelect");
  const selectedFunction = parseInt(functionSelect.value);

  switch (selectedFunction) {
    case 1:
      const sum = numbers.reduce(
        (acc, curr) => (curr > 0 ? acc + curr : acc),
        0
      );
      document.getElementById("result").innerText = `Tổng các số dương: ${sum}`;
      break;
    case 2:
      const positiveCount = numbers.filter((number) => number > 0).length;
      document.getElementById(
        "result"
      ).innerText = `Số dương: ${positiveCount}`;
      break;
    case 3:
      const minNumber = Math.min(...numbers);
      document.getElementById("result").innerText = `Số nhỏ nhất: ${minNumber}`;
      break;
    case 4:
      const minPositive = Math.min(...numbers.filter((number) => number > 0));
      document.getElementById("result").innerText = `Số dương nhỏ nhất: ${
        minPositive || "Không có số dương"
      }`;
      break;
    case 5:
      const lastEven = numbers.filter((number) => number % 2 === 0).pop();
      document.getElementById("result").innerText = `Số chẵn cuối cùng: ${
        lastEven || -1
      }`;
      break;
    case 6:
      performSwap();
      break;
    case 7:
      numbers.sort((a, b) => a - b);
      displayNumbers();
      document.getElementById(
        "result"
      ).innerText = `Mảng đã được sắp xếp tăng dần.`;
      break;
    case 8:
      const firstPrime = findFirstPrime(numbers);
      document.getElementById("result").innerText = `Số nguyên tố đầu tiên: ${
        firstPrime || -1
      }`;

      break;
    case 9:
      const realNumberInputFields = document.getElementById(
        "realNumberInputFields"
      );
      realNumberInputFields.style.display = "block";

      const realNumberTable = document.getElementById("realNumberTable");
      if (realNumbers.length > 0) {
        realNumberTable.style.display = "table";
      } else {
        realNumberTable.style.display = "none";
      }

      // Kiểm tra độ dài của mảng số thực trước khi đếm số lượng số nguyên
      if (realNumbers.length > 0) {
        const integerCount = countIntegers(realNumbers); // Đếm số lượng số nguyên
        const result = document.getElementById("result");
        result.innerText = `Số lượng số nguyên trong mảng số thực: ${integerCount}`;
      } else {
        const result = document.getElementById("result");
        result.innerText = `Mảng số thực đang trống.`;
      }
      break;
    case 10:
      const positiveNumbers = numbers.filter((number) => number > 0);
      const negativeNumbers = numbers.filter((number) => number < 0);
      if (positiveNumbers.length > negativeNumbers.length) {
        document.getElementById(
          "result"
        ).innerText = `Số dương nhiều hơn số âm.`;
      } else if (positiveNumbers.length < negativeNumbers.length) {
        document.getElementById(
          "result"
        ).innerText = `Số âm nhiều hơn số dương.`;
      } else {
        document.getElementById(
          "result"
        ).innerText = `Số dương và số âm bằng nhau.`;
      }
      break;
    default:
      break;
  }
}
