var startConfetti,stopConfetti,toggleConfetti,removeConfetti,maxParticleCount=150,particleSpeed=2;!function(){startConfetti=u,stopConfetti=w,toggleConfetti=function f(){o?w():u()},removeConfetti=function h(){stopConfetti(),r=[]};var m=["DodgerBlue","OliveDrab","Gold","Pink","SlateBlue","LightBlue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"],o=!1,a=null,r=[],l=0;function s(t,n,e){return t.color=m[Math.random()*m.length|0],t.x=Math.random()*n,t.y=Math.random()*e-e,t.diameter=10*Math.random()+5,t.tilt=10*Math.random()-10,t.tiltAngleIncrement=.07*Math.random()+.05,t.tiltAngle=0,t}function u(){var t=window.innerWidth,n=window.innerHeight;window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(d){return window.setTimeout(d,16.6666667)};var e=document.getElementById("confetti-canvas");null===e&&((e=document.createElement("canvas")).setAttribute("id","confetti-canvas"),e.setAttribute("style","display:block;z-index:999999;pointer-events:none"),document.body.appendChild(e),e.width=t,e.height=n,window.addEventListener("resize",function(){e.width=window.innerWidth,e.height=window.innerHeight},!0));for(var i=e.getContext("2d");r.length<maxParticleCount;)r.push(s({},t,n));o=!0,null===a&&function d(){i.clearRect(0,0,window.innerWidth,window.innerHeight),0===r.length?a=null:(function c(){var e,t=window.innerWidth,n=window.innerHeight;l+=.01;for(var i=0;i<r.length;i++)e=r[i],!o&&e.y<-15?e.y=n+100:(e.tiltAngle+=e.tiltAngleIncrement,e.x+=Math.sin(l),e.y+=.5*(Math.cos(l)+e.diameter+particleSpeed),e.tilt=15*Math.sin(e.tiltAngle)),(e.x>t+20||e.x<-20||e.y>n)&&(o&&r.length<=maxParticleCount?s(e,t,n):(r.splice(i,1),i--))}(),function v(t){for(var n,e,i=0;i<r.length;i++)n=r[i],t.beginPath(),t.lineWidth=n.diameter,t.strokeStyle=n.color,t.moveTo((e=n.x+n.tilt)+n.diameter/2,n.y),t.lineTo(e,n.y+n.tilt+n.diameter/2),t.stroke()}(i),a=requestAnimFrame(d))}()}function w(){o=!1}}();