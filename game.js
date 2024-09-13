(()=>{"use strict";class t{constructor(t){this.t=t}getSettings(){switch(this.t){case"easy":default:return{rows:5,columns:5,interval:13e3};case"medium":return{rows:5,columns:5,interval:1e4};case"hard":return{rows:5,columns:5,interval:7e3}}}}class e{constructor(t,e,s,i){this.name=t,this.type=e,this.x=s,this.y=i}isEqual(t){return this.type.color===t.type.color}}class s{static get i(){return 30}static get o(){return{h:{color:"#6BCEFF",name:"Deep Breathing",l:"Helps slow down the mind and body, reducing anxiety.",q:'₹<path d="M460-160q-50 0-85-35t-35-85h80q0 17 11.5 28.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H80v-80h380q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-560v-80h540q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43h-80q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 59-40.5 99.5T620-560H80Zm660 320v-80q26 0 43-17t17-43q0-26-17-43t-43-17H80v-80h660q59 0 99.5 40.5T880-380q0 59-40.5 99.5T740-240Z"/>^',m:"Helps Tessa calm down and regain control when facing her fear.",u:"air"},T:{color:"#FF6B6B",name:"Cognitive Restructuring",l:"Challenging irrational thoughts related to fear.",q:'₹<path d="M440-360h80l6-50q8-3 14.5-7t11.5-9l46 20 40-68-40-30q2-8 2-16t-2-16l40-30-40-68-46 20q-5-5-11.5-9t-14.5-7l-6-50h-80l-6 50q-8 3-14.5 7t-11.5 9l-46-20-40 68 40 30q-2 8-2 16t2 16l-40 30 40 68 46-20q5 5 11.5 9t14.5 7l6 50Zm40-100q-25 0-42.5-17.5T420-520q0-25 17.5-42.5T480-580q25 0 42.5 17.5T540-520q0 25-17.5 42.5T480-460ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l64 255H760v200H600v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Z"/>^',m:"Helps Tessa challenge and reframe her fearful thoughts about the number 13.",u:"psychology"},v:{color:"#FFD93D",name:"Progressive Muscle Relaxation",l:"Reduces physical tension in the body.",q:'₹<path d="M272-160q-30 0-51-21t-21-51q0-21 12-39.5t32-26.5l156-62v-90q-54 63-125.5 96.5T120-320v-80q68 0 123.5-28T344-508l54-64q12-14 28-21t34-7h40q18 0 34 7t28 21l54 64q45 52 100.5 80T840-400v80q-83 0-154.5-33.5T560-450v90l156 62q20 8 32 26.5t12 39.5q0 30-21 51t-51 21H400v-20q0-26 17-43t43-17h120q9 0 14.5-5.5T600-260q0-9-5.5-14.5T580-280H460q-42 0-71 29t-29 71v20h-88Zm208-480q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/>^',m:"Helps Tessa relax her body, easing the tension caused by the fear of 13.",u:"self_improvement"},p:{color:"#A1FF6B",name:"Mindfulness",l:"Staying present in the moment to reduce anxious thoughts.",q:'₹<path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l65 255H760v200H600v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Zm-54 40h80v-280h-80v280Zm120-60h80v-180h-80v180Zm-240-20h80v-160h-80v160Z"/>^',m:"Helps Tessa focus on the present and stay grounded.",u:"spa"},Z:{color:"#FFAA6B",name:"Exposure Therapy",l:"Facing fears gradually to reduce avoidance behavior.",q:'₹<path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>^',m:"Tessa confronts the number 13 repeatedly, becoming less afraid of it over time.",u:"visibility"},F:{color:"#FF6BBF",name:"Positive Affirmations",l:"Replacing negative thoughts with positive statements.",q:'₹<path d="M280-120v-520l280-280 74 74-52 206h338v176L774-120H280Zm80-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406ZM80-120v-520h200v80H160v360h120v80H80Z"/>^',m:"Tessa repeats affirmations to build confidence in overcoming her fear.",u:"thumb_up"},M:{color:"#6BFF94",name:"Journaling",l:"Writing down thoughts to process emotions.",q:'₹<path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l263-262 123 122-263 263H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/>^',m:"Tessa writes down her fears and tracks her progress as she faces them.",u:"edit_note"},H:{color:"#FF6BDE",name:"Distraction",l:"Engaging in other activities to temporarily shift focus away from fear.",q:'₹<path d="M189-160q-60 0-102.5-43T42-307q0-9 1-18t3-18l84-336q14-54 57-87.5t98-33.5h390q55 0 98 33.5t57 87.5l84 336q2 9 3.5 18.5T919-306q0 61-43.5 103.5T771-160q-42 0-78-22t-54-60l-28-58q-5-10-15-15t-21-5H385q-11 0-21 5t-15 15l-28 58q-18 38-54 60t-78 22Zm3-80q19 0 34.5-10t23.5-27l28-57q15-31 44-48.5t63-17.5h190q34 0 63 18t45 48l28 57q8 17 23.5 27t34.5 10q28 0 48-18.5t21-46.5q0 1-2-19l-84-335q-7-27-28-44t-49-17H285q-28 0-49.5 17T208-659l-84 335q-2 6-2 18 0 28 20.5 47t49.5 19Zm348-280q17 0 28.5-11.5T580-560q0-17-11.5-28.5T540-600q-17 0-28.5 11.5T500-560q0 17 11.5 28.5T540-520Zm80-80q17 0 28.5-11.5T660-640q0-17-11.5-28.5T620-680q-17 0-28.5 11.5T580-640q0 17 11.5 28.5T620-600Zm0 160q17 0 28.5-11.5T660-480q0-17-11.5-28.5T620-520q-17 0-28.5 11.5T580-480q0 17 11.5 28.5T620-440Zm80-80q17 0 28.5-11.5T740-560q0-17-11.5-28.5T700-600q-17 0-28.5 11.5T660-560q0 17 11.5 28.5T700-520Zm-360 60q13 0 21.5-8.5T370-490v-40h40q13 0 21.5-8.5T440-560q0-13-8.5-21.5T410-590h-40v-40q0-13-8.5-21.5T340-660q-13 0-21.5 8.5T310-630v40h-40q-13 0-21.5 8.5T240-560q0 13 8.5 21.5T270-530h40v40q0 13 8.5 21.5T340-460Zm140-20Z"/>^',m:"Tessa uses distraction to take her mind off the number 13 during overwhelming moments.",u:"controller"},B:{color:"#6BFFC8",name:"Support Network",l:"Seeking support from friends or loved ones.",q:'₹<path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/>^',m:"Tessa relies on support to gain strength and confront her fear of 13.",u:"groups"},k:{color:"#6BB1FF",name:"Relaxation Response",l:"Triggering relaxation when stress occurs.",q:'₹<path d="M479-82 163-400h113l204 204 274-275q23-23 35-54.5t12-64.5q-2-69-46-118.5T645-758q-31 0-59.5 12T536-711l-56 61-57-61q-21-23-49-36t-60-13q-54 0-93.5 34.5T167-640H85q17-85 79.5-142.5T314-840q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L479-82Zm-4-398H80v-80h555q17 0 28.5-11.5T675-600q0-17-11.5-28.5T635-640q-14 0-25 7.5T596-611l-77-21q11-39 43-63.5t73-24.5q50 0 85 35t35 85q0 50-35 85t-85 35h-47q3 10 5 19.5t2 20.5q0 50-35 85t-85 35q-41 0-73-24.5T359-408l77-21q3 14 14 21.5t25 7.5q17 0 28.5-11.5T515-440q0-17-11.5-28.5T475-480Zm6 2Z"/>^',m:"Tessa learns to immediately calm herself in the presence of 13.",u:"bedtime"},I:{color:"#FF6B83",name:"Focused Attention",l:"Concentrating on a specific task to reduce anxious thoughts.",q:'₹<path d="M120-120v-240h80v160h160v80H120Zm480 0v-80h160v-160h80v240H600ZM120-600v-240h240v80H200v160h-80Zm640 0v-160H600v-80h240v240h-80ZM480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-120Z"/>^',m:"Tessa focuses her attention on neutral tasks to lessen anxiety.",u:"center_focus_strong"},_:{color:"#FF6BE2",name:"Emotional Support Animal",l:"Using a support animal to reduce anxiety.",q:'₹<path d="M180-475q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180-160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm240 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180 160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM266-75q-45 0-75.5-34.5T160-191q0-52 35.5-91t70.5-77q29-31 50-67.5t50-68.5q22-26 51-43t63-17q34 0 63 16t51 42q28 32 49.5 69t50.5 69q35 38 70.5 77t35.5 91q0 47-30.5 81.5T694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z"/>^',m:"Tessa finds comfort in the presence of an emotional support animal during moments of fear.",u:"pets"},A:{color:"#6BFFB1",name:"Habit Reversal",l:"Reversing negative habits that reinforce fear.",q:'₹<path d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z"/>^',m:"Tessa learns to break patterns that contribute to her fear of the number 13.",u:"sync"}}}static get R(){return{C:13e3,S:13}}static get P(){return{N:""}}static D(t){return this.o[t].q.replace("₹",`<svg viewBox="0 -960 960 960" fill="${this.o[t].color}">`).replace("^","</svg>")}}class i{constructor(t,e,i,n){this.rows=t,this.columns=e,this.container=i,this.O=[],this.L=n,this.G=[],this.K=Object.keys(s.o),this.V=[],this.W(),this.j()}W(){for(let t=0;t<25;t++)t<13?this.V.push(this.K[t]):this.V.push(this.K[Math.floor(13*Math.random())]);for(let t=this.V.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[this.V[t],this.V[e]]=[this.V[e],this.V[t]]}}j(){const t=document.createElement("table");t.classList.add("board-table"),this.container.appendChild(t);for(let t=0;t<this.rows;t++){this.O[t]=[];for(let i=0;i<this.columns;i++){const n=this.V[t*this.columns+i],o=s.o[n],h=new e(n,o,t,i);this.O[t][i]=h}}this.J(),t.addEventListener("touchstart",(t=>this.U(t,"touch"))),t.addEventListener("touchmove",(t=>this.$(t,"touch"))),t.addEventListener("touchend",(t=>this.Y(t,"touch"))),t.addEventListener("mousedown",(t=>this.U(t,"mouse"))),t.addEventListener("mousemove",(t=>this.$(t,"mouse"))),t.addEventListener("mouseup",(t=>this.Y(t,"mouse")))}U(t,e){"touch"==e&&(this.X=null);let s="touch"==e?t.touches[0]:t;this.tt={x:s.clientX,y:s.clientY},this.et=t.target.closest("td")}$(t,e){let s="touch"==e?t.touches[0]:t;this.X={x:s.clientX,y:s.clientY}}Y(t,e){window.getSelection().removeAllRanges();const s=this.X&&this.st();if(s){if(null===this.et||null===s)return;this.it(this.et.x,this.et.y,s),this.nt()}}st(){const t=this.X.x-this.tt.x,e=this.X.y-this.tt.y,s=Math.abs(t),i=Math.abs(e);return s<3&&i<3||0===t&&0===e?null:s>i?t>0?"right":t<0?"left":null:e>0?"down":e<0?"up":null}it(t,e,s){let i=e,n=t;if("down"===s)n=t+1;else if("up"===s)n=t-1;else if("right"===s)i=e+1;else{if("left"!==s)return;i=e-1}if(!(n>=this.rows||n<0||i>=this.columns||i<0)&&i>=0&&i<this.columns){const s=this.O[t][e];this.O[t][e]=this.O[n][i],this.O[n][i]=s,this.J()}}J(){const t=this.container.querySelector(".board-table");t.innerHTML="";for(let e=0;e<this.rows;e++){const i=document.createElement("tr");t.appendChild(i);for(let t=0;t<this.columns;t++){const n=this.O[e][t],o=document.createElement("td");o.classList.add("td-block"),o.innerHTML=s.D(n.name),o.x=e,o.y=t,i.appendChild(o)}}}nt(){const t=this.L.ot[0].split(",");for(let e=0;e<this.rows;e++)for(let s=0;s<this.columns;s++){const i=[];for(let n=-1;n<=1;n++)for(let o=-1;o<=1;o++){const h=e+n,a=s+o,r=t[3*(n+1)+(o+1)];i.push(h>=0&&h<this.rows&&a>=0&&a<this.columns&&r?this.O[h][a].type.color:null)}if(i.join(",")===t.join(","))return this.L.ht(),void(0===this.L.ot.length&&this.L.rt())}}}class n{constructor(e,s){this.level=new t(e),this.container=s,this.ct=this.level.getSettings(),this.ot=[],this.lt=new i(this.ct.rows,this.ct.columns,this.container,this),this.qt=document.querySelector(".modal"),this.ut=document.querySelector(".thirteen-blocks-and-patterns-container"),this.gt=document.querySelector(".fear-meter"),this.Tt=["000111000","010010010","100010001","001010100","100111000","001111000","010011000","011010000","001011000","010010111","011010010","110010010","010010110"],this.vt(),this.dt(),window.onresize=this.vt.bind(this)}start(){this.ft=0,this.rt(),this.Zt()}Zt(){this.Ft=setInterval((()=>{this.rt()}),s.R.C)}rt(){if(this.ft>=s.R.S)return this.bt(),void(0===this.ot.length&&this.wt());const t=document.createElement("div");t.classList.add("thirteen-block-and-pattern");const i=document.createElement("div");i.classList.add("thirteen-block"),i.textContent="13";const n=document.createElement("table"),o=Math.floor(Math.random()*this.Tt.length),h=[],a=[];for(let t=0;t<this.lt.V.length;t++)a.push(this.lt.V[t]);for(let t=0;t<3;t++){const i=n.insertRow();for(let n=0;n<3;n++){const r=i.insertCell();if(r.classList.add("td-pattern-block"),"1"===this.Tt[o][3*t+n]){const i=Math.floor(Math.random()*a.length),o=a[i];let c=s.o[o];a.splice(i,1);const l=new e(o,c,t,n);r.innerHTML=s.D(l.name),h.push(c.color)}else h.push(null)}}n.classList.add("pattern"),t.appendChild(i),t.appendChild(n),this.ut.appendChild(t),this.ot.push(h.join(",")),this.ft++,this.Mt(10),parseInt(this.gt.value)>=100&&this.Ht()}bt(){clearInterval(this.Ft)}ht(){this.ut.removeChild(this.ut.firstChild),this.ot=this.ot.slice(1),this.Bt(10)}Mt(t){this.gt.value=parseInt(this.gt.value)+t}Bt(t){this.gt.value=parseInt(this.gt.value)-t}Ht(){this.container.hidden=!0,this.bt(),this.kt(document.querySelector(".fail"))}wt(){this.container.hidden=!0,this.bt(),this.kt(document.querySelector(".finish"))}kt(t){this.qt.style.display="block";this.qt.querySelector(".modal-content-text").innerHTML=t.innerHTML;const e=this.qt.querySelector("#restart-game"),s=this.qt.querySelector(".close");if(null!==e)return s.hidden=!0,void(e.onclick=()=>{this.qt.style.display="none",this.container.hidden=!1,this.gt.value=0,this.start()});s.onclick=()=>{this.qt.style.display="none",this.container.hidden=!1},window.onclick=t=>{t.target==this.qt&&(this.qt.style.display="none",this.container.hidden=!1)}}vt(){const t=document.querySelector(".iicon"),e=window.matchMedia("(max-width: 768px)").matches,s=document.querySelector(".game-description");e?(t.hidden=!1,s.hidden=!0,t.addEventListener("click",(()=>{this.kt(s);const t=document.querySelector(".modal-content").querySelector("ul");this.yt(t)}))):(t.hidden=!0,s.hidden=!1)}dt(){const t=document.querySelector(".blocks-information"),e=Object.keys(s.o),i=document.createElement("ul");i.style.listStyleType="none";for(let t=0;t<e.length;t++){const n=e[t],o=s.o[n],h=document.createElement("li");h.setAttribute("blockName",n),h.innerHTML=s.D(n).replace("<svg","<svg height='2rem' width='2rem'");const a=document.createTextNode(" -- "+o.l);h.style.display="flex",h.style.alignItems="center",h.style.justifyContent="left",h.appendChild(a),i.appendChild(h)}t.appendChild(i),this.yt(i)}yt(t){const e=t.querySelectorAll("li");for(let t=0;t<e.length;t++){const i=e[t],n=s.o[i.getAttribute("blockName")];i.onclick=()=>{const t=document.createElement("div");t.className="snackbar",t.style.position="absolute",t.style.top=i.offsetTop-20+"px",t.style.left=`${i.offsetLeft}px`,t.style.borderRadius="5px",t.style.zIndex="9999",t.style.border="1px dotted black",t.style.backgroundColor="white",t.style.padding="2px 2px",t.innerHTML=n.name+"---"+n.m,document.body.appendChild(t),setTimeout((()=>{t.remove()}),3e3)}}}}const o=document.getElementById("start-game"),h=document.getElementById("game-container"),a=document.getElementById("menu");function r(){const t=document.querySelector('input[name="level"]:checked').value;a.hidden=!0,h.hidden=!1;new n(t,h).start()}o.addEventListener("click",r),r()})();