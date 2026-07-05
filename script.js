const ans=7;let score=0;
const c=document.getElementById('choices');
[5,6,7,8,9].forEach(n=>{
 let d=document.createElement('div');
 d.className='choice';d.draggable=true;d.textContent=n;
 d.addEventListener('dragstart',e=>e.dataTransfer.setData('text',n));
 c.appendChild(d);
});
const drop=document.getElementById('drop');
drop.addEventListener('dragover',e=>e.preventDefault());
drop.addEventListener('drop',e=>{
 e.preventDefault();
 const n=+e.dataTransfer.getData('text');
 drop.textContent=n;
 if(n===ans){score++;document.getElementById('score').textContent='คะแนน: '+score;
 document.getElementById('msg').textContent='🎉 เยี่ยมมาก!';}
 else{document.getElementById('msg').textContent='❌ ลองอีกครั้ง';drop.textContent='?';}
});