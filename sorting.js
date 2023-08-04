let x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        let y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    window.onload();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  let x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
window.onload = () =>{
  // Load the scrollable images into the div
  const scrollableDiv = document.getElementsByClassName('image')[0];
  const sortOrder = document.getElementsByClassName('select-selected')[0].firstChild;
  if(sortOrder.nodeValue ==="Bubble Sort"){
    scrollableDiv.style.backgroundImage = "url('./assets/Bubble-Sort.png')";
    console.log("bubble sort");
    return;
  }else if(sortOrder.nodeValue ==="Insertion Sort"){
    scrollableDiv.style.backgroundImage = "url('./assets/Insertion-Sort.png')";
    console.log("Insertion sort");
    return;
  }else if(sortOrder.nodeValue ==="Selection Sort"){
    scrollableDiv.style.backgroundImage = "url('./assets/Selection-Sort.png')";
    console.log("Selection sort");
    return;
  }else if(sortOrder.nodeValue ==="Merge Sort"){
    scrollableDiv.style.backgroundImage = "url('./assets/Merge-Sort.png')";
    console.log("Merge sort");
    return;
  }else if(sortOrder.nodeValue ==="Quick Sort"){
    scrollableDiv.style.backgroundImage = "url('./assets/Quick-Sort.png')";
    console.log("Quick sort");
    return;
  }
};



/* Array input*/


let sortingColour = "rgb(252, 54, 4)";
let finalColour = "rgb(1, 1, 50)";
const contain = document.querySelector(".data-container");
let comp = 0;
document.getElementById("comp").innerHTML += comp;
let swap = 0;
document.getElementById("swap").innerHTML += swap;

function handleArraySize() {
  comp = 0;
  document.getElementById("comp").innerHTML = `Number Of Comparisons : ${comp}`;
  swap = 0;
  document.getElementById("swap").innerHTML = `Number Of Swaps : ${swap}`;
  const inputElement = document.getElementById('array-size');
  const arraySize = inputElement.value;

  if (arraySize === '' || arraySize === null) {
    alert('Please enter a value for array size.');
    return;
  }

  const parsedArraySize = parseInt(arraySize);

  if (isNaN(parsedArraySize)) {
    alert('Please enter a valid number for array size.');
    return;
  }

  if (parsedArraySize < 10 || parsedArraySize > 500) {
    alert('Array size must be between 10 and 500.');
    return;
  }
  console.log('Array size:', parsedArraySize);
  const inputOrder = document.getElementsByClassName('select-selected')[1].firstChild;
  if(inputOrder.nodeValue ==="Select Input Order"){
    alert('Please Choose an Input Order');
    return;
  }
  console.log(inputOrder.nodeValue);
  generate(parsedArraySize,inputOrder.nodeValue);
}
let compare1 = (a,b)=>{
  return a-b;
}
let compare2 = (a,b)=>{
  return b-a;
}
function generate(num,order)
{
  contain.innerHTML = null;
  let values = [];
  // console.log("hello");
  // const num = 500;
  for(let i = 0;i<num;i++){
    let val = Math.floor(Math.random()*100)%100+1;
    values.push(val);
  }
  if(order === "Increasing"){
    values.sort(compare1);
  }else if(order === "Decreasing"){
    values.sort(compare2);
  }
  for(let i=0; i<num; i++)
  {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${values[i]*3}px`;
    let c = contain.clientWidth - 4;
    let v = c/num;
    bar.style.width = `${contain.clientWidth/num}px`;
    if(i == 0){
      bar.style.transform = `translateX(${i*v + 2}px)`;
    }
    else{
      bar.style.transform = `translateX(${i*v}px)`;
    }
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar_id");
    barLabel.innerHTML = values[i];
    barLabel.style.display = "none";
    bar.appendChild(barLabel);
    contain.appendChild(bar);
  }
console.log("print");
}
function reset()
{
  window.location.reload();
}

function handleSort(){
  comp = 0;
  document.getElementById("comp").innerHTML = `Number Of Comparisons : ${comp}`;
  swap = 0;
  document.getElementById("swap").innerHTML = `Number Of Swaps : ${swap}`;
  const inputElement = document.getElementById('array-size');
  const arraySize = inputElement.value;

  if (arraySize === '' || arraySize === null) {
    alert('Please enter a value for array size.');
    return;
  }

  const parsedArraySize = parseInt(arraySize);

  if (isNaN(parsedArraySize)) {
    alert('Please enter a valid number for array size.');
    return;
  }

  if (parsedArraySize < 10 || parsedArraySize > 500) {
    alert('Array size must be between 10 and 500.');
    return;
  }
  console.log('Array size:', parsedArraySize);
  const inputOrder = document.getElementsByClassName('select-selected')[1].firstChild;
  if(inputOrder.nodeValue ==="Select Input Order"){
    alert('Please Choose an Input Order');
    return;
  }
  console.log(inputOrder.nodeValue);
  const sortOrder = document.getElementsByClassName('select-selected')[0].firstChild;
  if(sortOrder.nodeValue ==="Select Sorting Algorithm"){
    alert('Please Choose a Sorting Algorithm');
    return;
  }
  console.log(sortOrder.nodeValue);
  document.getElementById("gen-array").disabled = true;
  document.getElementById("sort").disabled = true;
  let bars = document.querySelectorAll(".bar");
  for(let i=0;i<bars.length;i++){
    bars[i].style.backgroundColor = "violet";
  }
  if(sortOrder.nodeValue ==="Bubble Sort"){
    bubbleSort();
    console.log(true);
  }else if(sortOrder.nodeValue ==="Insertion Sort"){
    insertionSort();
  }else if(sortOrder.nodeValue ==="Selection Sort"){
    selectionSort();
  }else if(sortOrder.nodeValue ==="Merge Sort"){
    mergeSort();
  }else if(sortOrder.nodeValue ==="Quick Sort"){
    quickSort();
  }
}
function swapping(val1, val2)
{
  return new Promise((resolve)=>
  {
    let temp = val1.style.transform;
    val1.style.transform = val2.style.transform;
    val2.style.transform = temp;
    swap++;
    document.getElementById("swap").innerHTML = `Number Of Swaps : ${swap}`;
    window.requestAnimationFrame(
      ()=>
      {
        setTimeout(()=>{
          contain.insertBefore(val2,val1);
           resolve();
        }, 150);
      });
  });
 
}
async function bubbleSort()
  {
    const delay = 200;
    let bars = document.querySelectorAll(".bar");
     const size= bars.length;
     for(let i=0; i<size; i++)
     {
       for(let j=0; j<size-i-1; j++)
       {
        bars[j].style.backgroundColor = sortingColour;
        bars[j+1].style.backgroundColor = sortingColour;
        await new Promise((resolve)=>{setTimeout(()=>{resolve()},delay)});
        let val1 = parseInt(bars[j].childNodes[0].innerHTML);
        let val2 = parseInt(bars[j+1].childNodes[0].innerHTML);
        comp++;
        document.getElementById("comp").innerHTML = `Number Of Comparisons : ${comp}`;
        if(val1>val2)
        {
          await swapping(bars[j],bars[j+1]);
          bars = document.querySelectorAll(".bar");

        }

        bars[j].style.backgroundColor = "violet";
       }
       bars[size-i-1].style.backgroundColor =   finalColour;
       await new Promise((resolve)=>{setTimeout(()=>{resolve()},150)});
     }
     document.getElementById("gen-array").disabled = false;
    document.getElementById("sort").disabled = false;
  }
  async function selectionSort()
  {
    const delay = 200;
    let bars = document.querySelectorAll(".bar");
    const size= bars.length;
    let min_ind = 0;
    for(let i = 0; i<size; i++)
    {
      min_ind = i;
      for(let j = i+1; j<size; j++)
      {
        bars[j].style.backgroundColor = sortingColour;
        bars[min_ind].style.backgroundColor = sortingColour;
        await new Promise((resolve)=>{setTimeout(()=>{resolve()},delay)});
  
        let val1 = parseInt(bars[j].childNodes[0].innerHTML);
        let val2 = parseInt(bars[min_ind].childNodes[0].innerHTML);
        comp++;
        document.getElementById("comp").innerHTML = `Number Of Comparisons : ${comp}`;
        if(val1<val2)
        {
          bars[min_ind].style.backgroundColor = "violet";
          min_ind = j;
                
        }  
        else  
        bars[j].style.backgroundColor = "violet";
      }
      if(min_ind != i)
      {
        swap++;
        document.getElementById("swap").innerHTML = `Number Of Swaps : ${swap}`;
      }
      let temp1 = bars[min_ind].style.height;
      let temp2 = bars[min_ind].childNodes[0].innerText;
      bars[min_ind].style.height = bars[i].style.height;
      bars[i].style.height = temp1;
      bars[min_ind].childNodes[0].innerText = bars[i].childNodes[0].innerText;
      bars[i].childNodes[0].innerText = temp2;
      bars[min_ind].style.backgroundColor = "violet";
      bars[i].style.backgroundColor = finalColour;
      await new Promise((resolve)=>{setTimeout(()=>{resolve()},delay)});
  
    }
    document.getElementById("gen-array").disabled = false;
    document.getElementById("sort").disabled = false;
  }
  
  async function insertionSort()
  {
    const delay = 200;
    let bars = document.querySelectorAll(".bar");
    const size= bars.length;
    bars[0].style.backgroundColor = finalColour;
    for(let i=1; i<size; i++)
    {
      let j =i-1;
      let key = parseInt(bars[i].childNodes[0].innerHTML);
      let barheight = bars[i].style.height;
      bars[i].style.backgroundColor = sortingColour;
      await new Promise((resolve)=>{
        setTimeout(()=>resolve(), 1000)
      });
      let k=true;
      while(j>=0 && parseInt(bars[j].childNodes[0].innerHTML) >key)
      {
        k=false;
        comp++;
        document.getElementById("comp").innerHTML = `Number Of Comparisons : ${comp}`;
        bars[j+1].style.backgroundColor = finalColour;
        bars[j+1].style.height =  bars[j].style.height;
         bars[j+1].childNodes[0].innerHTML =  bars[j].childNodes[0].innerHTML ;
         bars[j+1].style.backgroundColor = finalColour;
        bars[j].style.backgroundColor = sortingColour;
        j--;
        await new Promise((resolve)=>{
          setTimeout(()=>resolve(),delay)
        });
      }
      if(k == true){
        comp++;
        document.getElementById("comp").innerHTML = `Number Of Comparisons : ${comp}`;
      }
      bars[j + 1].style.height = barheight;
      bars[j + 1].childNodes[0].innerHTML = key;
      bars[j + 1].style.backgroundColor = finalColour;
      await new Promise((resolve)=>{
        setTimeout(()=>resolve(),delay)
      });
  
    }
    document.getElementById("gen-array").disabled = false;
    document.getElementById("sort").disabled = false;
  }
 async function merging(left, mid, right) {
  const delay = 500;
  let i = left;
  let j = mid + 1;
  let k = 0;
  let bars = document.querySelectorAll(".bar");
  let copy = [];
  let copy2 = [];
  while ((i <= mid) && (j <= right)) {
    flag = false;
    let val1 = Number.parseInt(bars[i].childNodes[0].innerHTML);
    let val2 = Number.parseInt(bars[j].childNodes[0].innerHTML);
    if ( val1 <val2) {
      copy[k] = bars[i].childNodes[0].innerHTML;
      copy2[k] = bars[i].style.height;
      k++;
      i++;
    }

    else {
      copy[k] = bars[j].childNodes[0].innerHTML;
      copy2[k] = bars[j].style.height;
      k++;
      j++;
    }
    comp++;
    document.getElementById("comp").innerHTML = `Number Of Comparisons : ${comp}`;
  }
  while (i <= mid) {
    copy[k] = bars[i].childNodes[0].innerHTML;
    copy2[k] = bars[i].style.height;
    k++;
    i++;
  }
  while (j <= right) {
    copy[k] = bars[j].childNodes[0].innerHTML;
    copy2[k] = bars[j].style.height;
    k++;
    j++;
  }
  for (let i = 0; i <= (right - left); i++) {
    bars[left + i].childNodes[0].innerHTML = copy[i];
    bars[left + i].style.height = copy2[i];
    bars[left+i].style.backgroundColor = finalColour;
  }
  await new Promise((resolve)=>{
    setTimeout(()=>resolve(),delay)
  });
}
  /* recursive merge sort function */
async function merge_sort(left,right)
{
    let mid;
    if ( left < right )
    {
        mid = Number.parseInt((left + right)/2);
        await merge_sort(left,mid);
        await merge_sort(mid+1,right);
        await merging(left,mid,right);
    }
}
async function mergeSort(){
  let bars = document.querySelectorAll(".bar");
  await merge_sort(0,bars.length-1);
    document.getElementById("gen-array").disabled = false;
    document.getElementById("sort").disabled = false;
}
async function partition(left,right)
{
  const delay = 200;
  let bars = document.querySelectorAll(".bar");
  let pivot = Number.parseInt(bars[left].childNodes[0].innerHTML);
  let i = left+1;
  let j = right;
  do{
    let flag = true;
    console.log(i);
     console.log(bars[i].childNodes[0]);
    while (i<=right && Number.parseInt(bars[i].childNodes[0].innerHTML) <= pivot) {
      flag = false;
          if (i >= left) bars[i].style.backgroundColor = sortingColour;
          // bars[i].style.backgroundColor = "green";
          i++;
          comp++;
          document.getElementById("comp").innerHTML = `Number Of Comparisons : ${comp}`;
          await new Promise((resolve) =>
              setTimeout(() => {
                  resolve();
              }, delay)
          );
      }
      // if(flag == true && i<=right){
      //   comp++;
      //   document.getElementById("comp").innerHTML = `Number Of Comparisons : ${comp}`;
      // }

       flag = true;
      while (j>=left && Number.parseInt(bars[j].childNodes[0].innerHTML) > pivot){
        flag = false;
          if (j <= right) bars[j].style.backgroundColor = "green";
          // bars[j].style.backgroundColor = "green";
          j--;
          comp++;
          document.getElementById("comp").innerHTML = `Number Of Comparisons : ${comp}`;
          await new Promise((resolve) =>
              setTimeout(() => {
                  resolve();
              }, delay)
          );
      }
      // if(flag == true && j>=left){
      //   comp++;
      //   document.getElementById("comp").innerHTML = `Number Of Comparisons : ${comp}`;
      // }


      //swapping ith and jth element
      if(i<j){
        let temp1 = bars[i].style.height;
        let temp2 = bars[i].childNodes[0].innerHTML;
        bars[i].style.height = bars[j].style.height;
        bars[j].style.height = temp1;
        bars[i].childNodes[0].innerHTML = bars[j].childNodes[0].innerHTML;
        bars[j].childNodes[0].innerHTML = temp2;
        swap++;
        document.getElementById("swap").innerHTML = `Number Of Swaps : ${swap}`;
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );
      }
  }while(i<j);

  if(j != left){
    let temp3 = bars[left].style.height;
    let temp4 = bars[left].childNodes[0].innerHTML;
    bars[left].style.height = bars[j].style.height;
    bars[j].style.height = temp3;
    bars[left].childNodes[0].innerHTML = bars[j].childNodes[0].innerHTML;
    bars[j].childNodes[0].innerHTML = temp4;
    swap++;
    document.getElementById("swap").innerHTML = `Number Of Swaps : ${swap}`;
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay)
    );
  }
  for (let k = left; k <=right; k++) bars[k].style.backgroundColor = "violet";
  bars[j].style.backgroundColor = finalColour;
  return j;
}
/* recursive quick sort function */
async function quick_sort(left,right)
{
    if ( left < right )
    {
        let part = await partition(left,right);
        await quick_sort(left,part-1);
        await quick_sort(part+1,right);
    }
    else if(left == right)
    {
      let bars = document.querySelectorAll(".bar");
      bars[left].style.backgroundColor = finalColour;
    }
}
async function quickSort(){
  let bars = document.querySelectorAll(".bar");
  await quick_sort(0,bars.length-1);
    document.getElementById("gen-array").disabled = false;
    document.getElementById("sort").disabled = false;
}

