(self.webpackChunkdsr_index=self.webpackChunkdsr_index||[]).push([[626],{591:function(e,t,n){"use strict";n.r(t),n.d(t,{initRedirect:function(){return a}});var i=n(320),c=n(622),s=n(103);async function a(e){try{const t=(e.get("t")||"").trim(),n=e.get("d")||2e3;(0,c.P)("Redirecting request received");const a=document.createElement("div");a.classList.add("redirect","a-fadein"),a.innerHTML=`${s}`.trim();let r=document.createElement("span");r.textContent="redirecting to",a.appendChild(r);let o=document.createElement("pre");o.textContent=t,a.appendChild(o);const d=document.querySelector("main .card");await(0,i.T)(d,1e3,250),d.appendChild(a),await new Promise((e=>{setTimeout((()=>{const t=a.offsetTop+a.style.transition;e(t)}),10)})),await(0,i.T)(a,1e3,0),(0,c.P)("Redirect secion initialized"),/^.*:\/\//.exec(t)&&setTimeout((()=>{window.location.href=t}),n)}catch(e){(0,c.H)(e)}}},103:function(e){"use strict";e.exports='<svg class="icon spin"\n  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n  <path d="M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 0 1-6.94-19.2A184 184 0 1 1 256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0 1 15.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z" class="icon-opacity" />\n  <path d="M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83V24.73c0-9.11 7.67-16.78 16.77-16.17C401.92 17.18 504 124.67 504 256a246 246 0 0 1-25 108.24c-4 8.17-14.37 11-22.26 6.45l-27.84-15.9c-7.41-4.23-9.83-13.35-6.2-21.07A182.53 182.53 0 0 0 440 256c0-96.49-74.27-175.63-168.77-183.38z" />\n</svg>\n'}}]);