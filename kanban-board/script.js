const drag_item=document.querySelectorAll('.drag-item');
const drag_list=document.querySelectorAll('.drag-item-list');

let selectItem;
// รายการ
drag_item.forEach((item)=>{
    item.addEventListener('dragstart',onDragStart);
});

// หมวดหมู่
drag_list.forEach((list)=>{
    list.addEventListener('dragover',onDragOver);
    list.addEventListener('dragenter',onDragEnter);
    list.addEventListener('drop',onDrop);
});
function onDrop(){
    this.append(selectItem); // เรียก this เพื่อมาใช้ต่อด้วยรายการที่จะนำมาต่อก็คือ selectItem
    selectItem=null;
}

function onDragStart(){
    selectItem=this;
}

function onDragEnter(e){
    e.preventDefault(); // ไม่ให้มีการ รีเฟท และไม่ให้มีการเคลียค่าการ drop
}
function onDragOver(e){
    e.preventDefault(); // ไม่ให้มีการ รีเฟท และไม่ให้มีการเคลียค่าการ drop
}