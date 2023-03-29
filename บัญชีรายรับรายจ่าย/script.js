//อ้างอิง element ใน index.html
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');



let transactions=[];

function init(){
    list.innerHTML='';
    transactions.forEach(addDataToList); // วน Loop ของ Data
    calculateMoney();
        
}

function addDataToList(transactions){
   const symbol = transactions.amount < 0 ?'-':'+'; // ถ้าน้อยกว่า 0 จะแสดงผลออกมาเป็น - แต่ถ้า else หรือมากกว่าจะแสดงผลออกมาเป็น +
   const status = transactions.amount < 0 ?'minus':'plus'; // ถ้าน้อยกว่า 0 จะแสดงเป็น minus แต่ถ้ามากกว่าจะแสดง เป็น +   สัญลักษณ์ ?' ' : ' ' คือคำสั่ง if else แบบย่อ
    const item=document.createElement('li');
    result = formatNumber(Math.abs(transactions.amount));
    item.classList.add(status);
    item.innerHTML=`${transactions.text}<span>${symbol}${result}</spam><button class="delete-btn" onclick="removeData(${transactions.id})">x</button>`; //แสดงผลของค่าออกมา ส่วน Math.abs คือการทำค่าติดลบหรือบวกออกมา
    list.appendChild(item) //ยัดส่วนของ li เข้า list เพื่อให้เข้าไปใน ul
    
    
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

function autoID(){
    return Math.floor(Math.random()*1000000);
}

function calculateMoney(){
    const amounts = transactions.map(transactions=>transactions.amount); // ต้องทำ transactions => เพราะว่าต้องเอามาทีละตัว
    // คำนวณยอดคงเหลือ    
    const total=amounts.reduce((result,item)=>(result += item),0).toFixed(2);  //  คำสั่ง reduce การคำนวณกันภายใน || result ผลจากการคำนวณ || item คือตำแหน่ง idex ของ amounts || =>(result += item),0 การคำนวณ ,0 คือโดยมีค่าเริ่มต้นจาก 0
    // คำนวณรายรับ
    const income=amounts.filter(item=>item>0).reduce((result,item)=>(result += item),0).toFixed(2);
    // คำนวณรายจ่าย
    const expenses=(amounts.filter(item=>item<0).reduce((result,item)=>(result += item),0)*-1).toFixed(2);
    // แสดงผลทางจอภาพ
    balance.innerText=`$`+formatNumber(total);
    money_plus.innerText=`$`+formatNumber(income);
    money_minus.innerText=`$`+formatNumber(expenses);

}

function removeData(id){
    transactions=transactions.filter(transactions=>transactions.id !==id)
    init();
}

function addTransaction(e){
    e.preventDefault(); // ใช้เพื่อไม่ให้มี effect กระพริบ
    if(text.value.trim() === '' || amount.value.trim() === ''){
        alert("กรุณาป้อนข้อมูลให้ครบ")
    }else{
        
        const data={
            id:autoID,
            text:text.value,
            amount:+amount.value
        }
        transactions.push(data);
        addDataToList(data);
        calculateMoney();
        text.value=''; // เคลียข้อมูลของ text
        amount.value='';// เคลียข้อมูลของ amount
    }
}

form.addEventListener('submit',addTransaction);
init();