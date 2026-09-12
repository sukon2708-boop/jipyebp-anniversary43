const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
Happy 6-month anniversary
ไม่รู้ว่าพี่ดีใจไหมที่ปีนี้มีหนูอยู่ข้างๆแต่อยากให้พี่รู้ไว้ว่าพี่คือความรักทั้งหมดที่หนูตามหามาตลอด ขอบคุณพี่ที่มอบความรักให้หนูอย่างดี และหนูตั้งใจรักพี่มาตลอดเพื่อให้พี่ได้รับความรักดีๆเหมือนที่หนูได้รับจากพี่🩷
จะอยู่เคียงข้างพี่ตลอดไป บางวันอาจดีกันบ้างทะเลาะกันบ้างแต่ทุกวันเราก็รักกัน พี่เป็นแรงบันดาลใจและกำลังใจที่สำคัญมากๆสำหรับหนู🥹 ขอบคุณนะแฟนดีใจที่ได้เจอพี่
`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
