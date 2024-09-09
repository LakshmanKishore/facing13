(()=>{"use strict";class t{constructor(t){this.t=t}getSettings(){switch(this.t){case"easy":default:return{rows:5,columns:5,interval:13e3};case"medium":return{rows:5,columns:5,interval:1e4};case"hard":return{rows:5,columns:5,interval:7e3}}}}class e{constructor(t,e,i){this.type=t,this.x=e,this.y=i}isEqual(t){return this.type.color===t.type.color}}class i{static get i(){return 30}static get o(){return{h:{color:"#007bff",name:"Breathing Bubble",l:"Calm and Tranquility",level:1,u:16,icon:"🫧",m:"click",v:"calm-bubble.wav"},p:{color:"#28a745",name:"Safe Space Shield",l:"Safety and Protection",level:2,u:16,icon:"🛡️",m:"hold",v:"shield-activate.wav"},S:{color:"#ffcc00",name:"Affirmation Star",l:"Positivity and Achievement",level:3,u:16,icon:"🌟",m:"tap",v:"star-twinkle.wav"},A:{color:"#795548",name:"Grounding Gem",l:"Stability and Focus",level:4,u:16,icon:"💎",m:"drag",v:"gem-shine.wav"},R:{color:"#9c27b0",name:"Restructure Puzzle Piece",l:"Change and Transformation",level:5,u:16,icon:"🧩",m:"assemble",v:"puzzle-snap.wav"},k:{color:"#adb5bd",name:"Exposure Key",l:"Unlocking Progress",level:6,u:16,icon:"🔑",m:"slide",v:"key-turn.wav"},T:{color:"#e91e63",name:"Relaxation Orb",l:"Calmness and Relaxation",level:7,u:16,icon:"🔮",m:"rotate",v:"orb-whirl.wav"},_:{color:"#00bcd4",name:"Stress Ball",l:"Stress Relief",level:8,u:16,icon:"🙂",m:"squeeze",v:"ball-squeeze.wav"},M:{color:"#ff9800",name:"Self-Care Potion",l:"Healing and Self-Care",level:9,u:16,icon:"🧪",m:"shake",v:"potion-bubble.wav"},O:{color:"#ffa500",name:"Goal Achievement Medal",l:"Motivation and Accomplishment",level:10,u:16,icon:"🥇",m:"collect",v:"medal-ding.wav"},P:{color:"#6c757d",name:"Journaling Book",l:"Reflection and Writing",level:11,u:16,icon:"📕",m:"flip",v:"page-turn.wav"},B:{color:"#6a1b9a",name:"Support Network Link",l:"Connections and Support",level:12,u:16,icon:"🔗",m:"connect",v:"link-click.wav"},C:{color:"#8bc34a",name:"Mindfulness Compass",l:"Focus and Guidance",level:13,u:16,icon:"🧭",m:"swipe",v:"compass-spin.wav"}}}static get I(){return{N:13e3,L:13}}}class n{constructor(t,e,n,s){this.rows=t,this.columns=e,this.container=n,this.G=[],this.U=s,this.F=[],this.K=Object.keys(i.o),this.D=[],this.q(),this.H()}q(){for(let t=0;t<25;t++)t<13?this.D.push(this.K[t]):this.D.push(this.K[Math.floor(13*Math.random())]);for(let t=this.D.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[this.D[t],this.D[e]]=[this.D[e],this.D[t]]}}H(){const t=document.createElement("table");t.classList.add("board-table"),this.container.appendChild(t);for(let t=0;t<this.rows;t++){this.G[t]=[];for(let n=0;n<this.columns;n++){const s=i.o[this.D[t*this.columns+n]],o=new e(s,t,n);this.G[t][n]=o}}this.W(),t.addEventListener("touchstart",(t=>this.Z(t,"touch"))),t.addEventListener("touchmove",(t=>this.J(t,"touch"))),t.addEventListener("touchend",(t=>this.V(t,"touch"))),t.addEventListener("mousedown",(t=>this.Z(t,"mouse"))),t.addEventListener("mousemove",(t=>this.J(t,"mouse"))),t.addEventListener("mouseup",(t=>this.V(t,"mouse")))}Z(t,e){"touch"==e&&(this.X=null);let i="touch"==e?t.touches[0]:t;this.Y={x:i.clientX,y:i.clientY},this.j=t.target}J(t,e){let i="touch"==e?t.touches[0]:t;this.X={x:i.clientX,y:i.clientY}}V(t,e){window.getSelection().removeAllRanges();const i=this.X&&this.$();i&&(this.tt(this.j.x,this.j.y,i),this.et())}$(){const t=this.X.x-this.Y.x,e=this.X.y-this.Y.y,i=Math.abs(t),n=Math.abs(e);return i<3&&n<3||0===t&&0===e?null:i>n?t>0?"right":t<0?"left":null:e>0?"down":e<0?"up":null}tt(t,e,i){let n=e,s=t;if("down"===i)s=t+1;else if("up"===i)s=t-1;else if("right"===i)n=e+1;else{if("left"!==i)return;n=e-1}if(!(s>=this.rows||s<0||n>=this.columns||n<0)&&n>=0&&n<this.columns){const i=this.G[t][e];this.G[t][e]=this.G[s][n],this.G[s][n]=i,this.W()}}W(){const t=this.container.querySelector(".board-table");t.innerHTML="";for(let e=0;e<this.rows;e++){const i=document.createElement("tr");t.appendChild(i);for(let t=0;t<this.columns;t++){const n=this.G[e][t],s=document.createElement("td");s.classList.add("td-block"),s.style.backgroundColor=n.type.color,s.innerHTML=n.type.icon,s.style.fontSize="3.5rem",s.x=e,s.y=t,i.appendChild(s)}}}et(){const t=this.U.it[0].split(",");for(let e=0;e<this.rows;e++)for(let n=0;n<this.columns;n++){const s=[];for(let i=-1;i<=1;i++)for(let o=-1;o<=1;o++){const a=e+i,c=n+o,h=t[3*(i+1)+(o+1)];s.push(a>=0&&a<this.rows&&c>=0&&c<this.columns&&h?this.G[a][c].type.color:null)}if(s.join(",")===t.join(","))return this.U.nt(),void(this.U.st<=i.I.L?this.U.ot():this.U.ct())}}}class s{constructor(e,i){this.level=new t(e),this.container=i,this.ht=this.level.getSettings(),this.it=[],this.lt=new n(this.ht.rows,this.ht.columns,this.container,this),this.rt=document.querySelector(".thirteen-blocks-and-patterns-container"),this.ut=document.querySelector(".fear-meter"),this.dt=["000111000","010010010","100010001","001010100","100111000","001111000","010011000","011010000","001011000","010010111","011010010","110010010","010010110"]}start(){this.st=0,this.ot(),this.ft()}ft(){this.vt=setInterval((()=>{this.ot()}),i.I.N)}ot(){if(this.st>=i.I.L)return this.Et(),void(0===this.it.length&&this.ct());const t=document.createElement("div");t.classList.add("thirteen-block-and-pattern");const e=document.createElement("div");e.classList.add("thirteen-block"),e.textContent="13";const n=document.createElement("table"),s=Math.floor(Math.random()*this.dt.length),o=[],a=[];for(let t=0;t<this.lt.D.length;t++)a.push(this.lt.D[t]);for(let t=0;t<3;t++){const e=n.insertRow();for(let n=0;n<3;n++){const c=e.insertCell();if(c.classList.add("td-pattern-block"),"1"===this.dt[s][3*t+n]){const t=Math.floor(Math.random()*a.length);let e=i.o[a[t]];a.splice(t,1),c.style.backgroundColor=e.color,c.innerHTML=e.icon,o.push(e.color)}else o.push(null)}}n.classList.add("pattern"),t.appendChild(e),t.appendChild(n),this.rt.appendChild(t),this.it.push(o.join(",")),this.st++,this.St(10),parseInt(this.ut.value)>=1e3&&this.gt()}Et(){clearInterval(this.vt)}nt(){this.rt.removeChild(this.rt.firstChild),this.it=this.it.slice(1),this.wt(10)}St(t){this.ut.value=parseInt(this.ut.value)+t}wt(t){this.ut.value=parseInt(this.ut.value)-t}gt(){alert("Game Over!")}ct(){const t=document.getElementById("game-over-modal");t.style.display="block",this.container.hidden=!0,this.Et();const e=t.querySelector(".close"),i=t.querySelector("#restart-game");e.onclick=()=>{t.style.display="none",this.container.hidden=!1},i.onclick=()=>{t.style.display="none",this.container.hidden=!1,this.start()},window.onclick=e=>{e.target==t&&(t.style.display="none",this.container.hidden=!1)}}}const o=document.getElementById("start-game"),a=document.getElementById("game-container"),c=document.getElementById("menu");function h(){const t=document.querySelector('input[name="level"]:checked').value;c.hidden=!0,a.hidden=!1;new s(t,a).start()}o.addEventListener("click",h),h()})();