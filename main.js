(()=>{"use strict";let e,t,n,a,c,o,s,d,i,r,l,m,u,p,h,y,g,x,w={x:"",y:""},f={x:"",y:""},v=0,V=0,H=0,C=10;const k=document.getElementById("video");console.log("handsmodule");let E,L;L=new p5((function(b){b.setup=function(){E=b.createCanvas(640,480),E.id("p5canvas"),console.log("canvascreate"),(()=>{const E=new Hands({locateFile:e=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${e}`});new Camera(k,{onFrame:async()=>{await E.send({image:k})},width:document.windowWidth,height:document.windowHeight}).start(),E.setOptions({maxNumHands:2,minDetectionConfidence:.8,minTrackingConfidence:.5,selfieMode:!0}),E.onResults((k=>(k=>{if(null==k.multiHandedness)return;if(1==k.multiHandedness.length&&"Left"==k.multiHandedness[0].label)return;x=1==k.multiHandedness.length?0:1;const E=k.multiHandLandmarks[x];w=E[0],e=E[1],t=E[4],n=E[5],a=E[8],f=E[9],c=E[10],o=E[12],s=E[17],d=L.createVector(w.x,w.y),m=L.createVector(t.x,t.y),l=L.createVector(e.x,e.y),u=L.createVector(n.x,n.y),p=L.createVector(a.x,a.y),y=L.createVector(f.x,f.y),h=L.createVector(c.x,c.y),g=L.createVector(o.x,o.y),i=L.createVector(n.x,n.y),r=L.createVector(s.x,s.y),v=L.lerp(v,L.map(m.dist(y),.005,.39,0,255),.2),V=L.lerp(V,L.map(p.dist(u),.002,.4,0,255),.2),H=L.lerp(H,L.map(g.dist(y),.006,.54,0,255),.2),C=L.lerp(C,L.map(i.dist(r),0,.5,0,1500),.2)})(k))),console.log("handsok")})(),(()=>{const e=document.createElement("canvas");e.id="hydracanvas",e.width=640,e.height=480,document.body.appendChild(e),new Hydra({detectAudio:!1,canvas:e,autoLoop:!0}),k.addEventListener("playing",(function(){s0.init({src:k})}));const t=document.getElementById("p5canvas");s1.init({src:t}),src(o0).modulate(osc(1,2,1),.003).colorama(.01).blend(src(s1),.1).out(o0)})()},b.draw=function(){b.clear(),b.push(),b.noStroke(),b.fill(v,V,H),b.ellipse(b.map(f.x,0,1,0,width),b.map(f.y,0,1,0,height),C),b.pop()}}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpYXBpcGUtcDVqcy1oeWRyYS8uL3NyYy9oYW5kcy1mdW5jdGlvbnMvaGFuZHNWYWx1ZXMuanMiLCJ3ZWJwYWNrOi8vbWVkaWFwaXBlLXA1anMtaHlkcmEvLi9zcmMvaGFuZHMuanMiLCJ3ZWJwYWNrOi8vbWVkaWFwaXBlLXA1anMtaHlkcmEvLi9zcmMvc2tldGNoLmpzIiwid2VicGFjazovL21lZGlhcGlwZS1wNWpzLWh5ZHJhLy4vc3JjL2h5ZHJhLmpzIl0sIm5hbWVzIjpbInRodW1iQ21jIiwidGh1bWJUaXAiLCJpbmRleE1jcCIsImluZGV4VGlwIiwibWlkZGxlUGlwIiwibWlkZGxlVGlwIiwicGlua3lNY3AiLCJ3cmlzdFBvaW50Iiwic2lkZUEiLCJzaWRlQiIsInRodW1iQmFzZSIsInZlY3RvclRodW1iVGlwIiwidmVjdG9ySW5kZXhNY3AiLCJ2ZWN0b3JJbmRleFRpcCIsInZlY3Rvck1pZGRsZVBpcCIsInZlY3Rvck1pZGRsZU1jcCIsInZlY3Rvck1pZGRsZVRpcCIsInJIYW5kSW5kZXgiLCJ3cmlzdCIsIngiLCJ5IiwibWlkZGxlTWNwIiwidGh1bWJEaXN0IiwiaW5kZXhEaXN0IiwibWlkZGxlRGlzdCIsInNpZGVzRGlzdCIsInZpZGVvRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwicDVjYW52YXMiLCJteXA1IiwicDUiLCJwIiwic2V0dXAiLCJjcmVhdGVDYW52YXMiLCJpZCIsImhhbmRzIiwiSGFuZHMiLCJsb2NhdGVGaWxlIiwiZmlsZSIsIkNhbWVyYSIsIm9uRnJhbWUiLCJhc3luYyIsInNlbmQiLCJpbWFnZSIsIndpZHRoIiwid2luZG93V2lkdGgiLCJoZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJzdGFydCIsInNldE9wdGlvbnMiLCJtYXhOdW1IYW5kcyIsIm1pbkRldGVjdGlvbkNvbmZpZGVuY2UiLCJtaW5UcmFja2luZ0NvbmZpZGVuY2UiLCJzZWxmaWVNb2RlIiwib25SZXN1bHRzIiwicmVzdWx0cyIsImRldGVjdGlvbnMiLCJ1bmRlZmluZWQiLCJtdWx0aUhhbmRlZG5lc3MiLCJsZW5ndGgiLCJsYWJlbCIsIlJoYW5kIiwibXVsdGlIYW5kTGFuZG1hcmtzIiwiY3JlYXRlVmVjdG9yIiwibGVycCIsIm1hcCIsImRpc3QiLCJnZW5lcmF0ZVZhbHVlcyIsImhhbmRzU2tldGNoIiwiYyIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJIeWRyYSIsImRldGVjdEF1ZGlvIiwiY2FudmFzIiwiYXV0b0xvb3AiLCJhZGRFdmVudExpc3RlbmVyIiwiczAiLCJpbml0Iiwic3JjIiwicDVkRGlzcGxheSIsInMxIiwibzAiLCJtb2R1bGF0ZSIsIm9zYyIsImNvbG9yYW1hIiwiYmxlbmQiLCJvdXQiLCJoeWRyYVNrZXRjaCIsImRyYXciLCJjbGVhciIsInB1c2giLCJub1N0cm9rZSIsImZpbGwiLCJlbGxpcHNlIiwicG9wIl0sIm1hcHBpbmdzIjoibUJBSUEsSUFDQ0EsRUFDQUMsRUFDQUMsRUFDQUMsRUFDQUMsRUFFQUMsRUFDQUMsRUFDQUMsRUFDQUMsRUFDQUMsRUFLQUMsRUFDQUMsRUFDQUMsRUFDQUMsRUFDQUMsRUFDQUMsRUFDQUMsRUFDQUMsRUF2QkdDLEVBQVEsQ0FBRUMsRUFBRyxHQUFJQyxFQUFHLElBTXZCQyxFQUFZLENBQUVGLEVBQUcsR0FBSUMsRUFBRyxJQU14QkUsRUFBWSxFQUNaQyxFQUFZLEVBQ1pDLEVBQWEsRUFDYkMsRUFBWSxHQVViLE1DM0JhQyxFQUFlQyxTQUFTQyxlQUFlLFNBQ3BEQyxRQUFRQyxJQUFJLGVDT0wsSUFBSUMsRUFDQUMsRUEyQlZBLEVBQU8sSUFBSUMsSUF4QkUsU0FBVUMsR0FDdEJBLEVBQUVDLE1BQVEsV0FDVEosRUFBV0csRUFBRUUsYUFBYSxJQUFLLEtBQy9CTCxFQUFTTSxHQUFHLFlBQ1pSLFFBQVFDLElBQUksZ0JEYlksTUFDMUIsTUFBTVEsRUFBUSxJQUFJQyxNQUFNLENBQ3ZCQyxXQUFhQyxHQUNMLGlE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LFNBQVMsS0FDVEMsTUFBTVAsSUFBSUUsSUFBSyxJQUNmTSxJQUFJTCxLRERKTSxJQUdEMUQsRUFBRTJELEtBQU8sV0FDUjNELEVBQUU0RCxRQUVGNUQsRUFBRTZELE9BQ0Y3RCxFQUFFOEQsV0FDRjlELEVBQUUrRCxLQUFLM0UsRUFBV0MsRUFBV0MsR0FDN0JVLEVBQUVnRSxRQUNEaEUsRUFBRWtDLElBQUkvQyxFQUFVRixFQUFHLEVBQUcsRUFBRyxFQUFHNEIsT0FDNUJiLEVBQUVrQyxJQUFJL0MsRUFBVUQsRUFBRyxFQUFHLEVBQUcsRUFBRzZCLFFBQzVCeEIsR0FFRFMsRUFBRWlFLFciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFVTRSBXSVRIIE1FRElBUElQRSBIQU5EUyBBTkQgWU9VUiBSSUdIVCBIQU5EIDopXG5cbmltcG9ydCB7IG15cDUgfSBmcm9tIFwiLi4vc2tldGNoLmpzXCI7XG5cbmxldCB3cmlzdCA9IHsgeDogXCJcIiwgeTogXCJcIiB9LFxuXHR0aHVtYkNtYyxcblx0dGh1bWJUaXAsXG5cdGluZGV4TWNwLFxuXHRpbmRleFRpcCxcblx0bWlkZGxlUGlwLFxuXHRtaWRkbGVNY3AgPSB7IHg6IFwiXCIsIHk6IFwiXCIgfSxcblx0bWlkZGxlVGlwLFxuXHRwaW5reU1jcCxcblx0d3Jpc3RQb2ludCxcblx0c2lkZUEsXG5cdHNpZGVCLFxuXHR0aHVtYkRpc3QgPSAwLFxuXHRpbmRleERpc3QgPSAwLFxuXHRtaWRkbGVEaXN0ID0gMCxcblx0c2lkZXNEaXN0ID0gMTAsXG5cdHRodW1iQmFzZSxcblx0dmVjdG9yVGh1bWJUaXAsXG5cdHZlY3RvckluZGV4TWNwLFxuXHR2ZWN0b3JJbmRleFRpcCxcblx0dmVjdG9yTWlkZGxlUGlwLFxuXHR2ZWN0b3JNaWRkbGVNY3AsXG5cdHZlY3Rvck1pZGRsZVRpcCxcblx0ckhhbmRJbmRleDtcblxuY29uc3QgZ2VuZXJhdGVWYWx1ZXMgPSAoZGV0ZWN0aW9ucykgPT4ge1xuXHQvL0NIRUNLSU5HIElGIFJJR0hUIEhBTkQgREVURUNURUQgIChmYWx0YSBjb25zaXN0ZW5jaWEsIGFsZ3Vub3MgY2FsY3Vsb3Mgc2UgaGFjZW4gYWNhIHkgb3Ryb3MgZW4gcDUpXG5cdGlmIChkZXRlY3Rpb25zLm11bHRpSGFuZGVkbmVzcyA9PSB1bmRlZmluZWQpIHJldHVybjtcblx0ZWxzZSBpZiAoXG5cdFx0ZGV0ZWN0aW9ucy5tdWx0aUhhbmRlZG5lc3MubGVuZ3RoID09IDEgJiZcblx0XHRkZXRlY3Rpb25zLm11bHRpSGFuZGVkbmVzc1swXS5sYWJlbCA9PSBcIkxlZnRcIlxuXHQpXG5cdFx0cmV0dXJuO1xuXHRkZXRlY3Rpb25zLm11bHRpSGFuZGVkbmVzcy5sZW5ndGggPT0gMVxuXHRcdD8gKHJIYW5kSW5kZXggPSAwKVxuXHRcdDogKHJIYW5kSW5kZXggPSAxKTtcblx0Ly9TRUxFQ1RJTkcgUklHSFQgSEFORFxuXHRjb25zdCBSaGFuZCA9IGRldGVjdGlvbnMubXVsdGlIYW5kTGFuZG1hcmtzW3JIYW5kSW5kZXhdO1xuXHQvL0FTU0lHTklORyBDRU5URVIgUEFMTSwgVEhVTUIgVElQLCBJTkRFWCBUSVAgQU5EIE1JRERMRSBUSVAgTEFORE1BUktTXG5cdHdyaXN0ID0gUmhhbmRbMF07XG5cdHRodW1iQ21jID0gUmhhbmRbMV07XG5cdHRodW1iVGlwID0gUmhhbmRbNF07XG5cdGluZGV4TWNwID0gUmhhbmRbNV07XG5cdGluZGV4VGlwID0gUmhhbmRbOF07XG5cdG1pZGRsZU1jcCA9IFJoYW5kWzldO1xuXHRtaWRkbGVQaXAgPSBSaGFuZFsxMF07XG5cdG1pZGRsZVRpcCA9IFJoYW5kWzEyXTtcblxuXHRwaW5reU1jcCA9IFJoYW5kWzE3XTtcblx0Ly9DUkVBVElORyBWRUNUT1JTIEZST00gVEhFIFNFTEVDVEVEIExBTkRNQVJLU1xuXHR3cmlzdFBvaW50ID0gbXlwNS5jcmVhdGVWZWN0b3Iod3Jpc3QueCwgd3Jpc3QueSk7XG5cdHZlY3RvclRodW1iVGlwID0gbXlwNS5jcmVhdGVWZWN0b3IodGh1bWJUaXAueCwgdGh1bWJUaXAueSk7XG5cdHRodW1iQmFzZSA9IG15cDUuY3JlYXRlVmVjdG9yKHRodW1iQ21jLngsIHRodW1iQ21jLnkpO1xuXHR2ZWN0b3JJbmRleE1jcCA9IG15cDUuY3JlYXRlVmVjdG9yKGluZGV4TWNwLngsIGluZGV4TWNwLnkpO1xuXHR2ZWN0b3JJbmRleFRpcCA9IG15cDUuY3JlYXRlVmVjdG9yKGluZGV4VGlwLngsIGluZGV4VGlwLnkpO1xuXHR2ZWN0b3JNaWRkbGVNY3AgPSBteXA1LmNyZWF0ZVZlY3RvcihtaWRkbGVNY3AueCwgbWlkZGxlTWNwLnkpO1xuXHR2ZWN0b3JNaWRkbGVQaXAgPSBteXA1LmNyZWF0ZVZlY3RvcihtaWRkbGVQaXAueCwgbWlkZGxlUGlwLnkpO1xuXHR2ZWN0b3JNaWRkbGVUaXAgPSBteXA1LmNyZWF0ZVZlY3RvcihtaWRkbGVUaXAueCwgbWlkZGxlVGlwLnkpO1xuXHRzaWRlQSA9IG15cDUuY3JlYXRlVmVjdG9yKGluZGV4TWNwLngsIGluZGV4TWNwLnkpO1xuXHRzaWRlQiA9IG15cDUuY3JlYXRlVmVjdG9yKHBpbmt5TWNwLngsIHBpbmt5TWNwLnkpO1xuXHQvL1VTSU5HIERJU1QgRlJPTSBGSU5HRVIgVElQUyBUTyBDRU5URVIgUEFMTSBUTyBHRU5FUkFURSBSR0IgQU5EIFNJWkUgVkFMVUVTLCBTTU9PVEhJTkcgVFJBTlNJVElPTiBXSVRIIExFUlBcblx0dGh1bWJEaXN0ID0gbXlwNS5sZXJwKFxuXHRcdHRodW1iRGlzdCxcblx0XHRteXA1Lm1hcCh2ZWN0b3JUaHVtYlRpcC5kaXN0KHZlY3Rvck1pZGRsZU1jcCksIDAuMDA1LCAwLjM5LCAwLCAyNTUpLFxuXHRcdDAuMlxuXHQpO1xuXHRpbmRleERpc3QgPSBteXA1LmxlcnAoXG5cdFx0aW5kZXhEaXN0LFxuXHRcdG15cDUubWFwKHZlY3RvckluZGV4VGlwLmRpc3QodmVjdG9ySW5kZXhNY3ApLCAwLjAwMiwgMC40LCAwLCAyNTUpLFxuXHRcdDAuMlxuXHQpO1xuXHRtaWRkbGVEaXN0ID0gbXlwNS5sZXJwKFxuXHRcdG1pZGRsZURpc3QsXG5cdFx0bXlwNS5tYXAodmVjdG9yTWlkZGxlVGlwLmRpc3QodmVjdG9yTWlkZGxlTWNwKSwgMC4wMDYsIDAuNTQsIDAsIDI1NSksXG5cdFx0MC4yXG5cdCk7XG5cdHNpZGVzRGlzdCA9IG15cDUubGVycChcblx0XHRzaWRlc0Rpc3QsXG5cdFx0bXlwNS5tYXAoc2lkZUEuZGlzdChzaWRlQiksIDAsIDAuNSwgMCwgMTUwMCksXG5cdFx0MC4yXG5cdCk7XG59O1xuXG5leHBvcnQge1xuXHR3cmlzdCxcblx0dGh1bWJEaXN0LFxuXHRpbmRleERpc3QsXG5cdG1pZGRsZURpc3QsXG5cdG1pZGRsZU1jcCxcblx0c2lkZXNEaXN0LFxuXHRnZW5lcmF0ZVZhbHVlcyxcbn07XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZVZhbHVlcyB9IGZyb20gXCIuL2hhbmRzLWZ1bmN0aW9ucy9oYW5kc1ZhbHVlcy5qc1wiO1xuXG5leHBvcnQgY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlb1wiKTtcbmNvbnNvbGUubG9nKFwiaGFuZHNtb2R1bGVcIik7XG5cbmV4cG9ydCBjb25zdCBoYW5kc1NrZXRjaCA9ICgpID0+IHtcblx0Y29uc3QgaGFuZHMgPSBuZXcgSGFuZHMoe1xuXHRcdGxvY2F0ZUZpbGU6IChmaWxlKSA9PiB7XG5cdFx0XHRyZXR1cm4gYGh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQG1lZGlhcGlwZS9oYW5kcy8ke2ZpbGV9YDtcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBjYW1lcmEgPSBuZXcgQ2FtZXJhKHZpZGVvRWxlbWVudCwge1xuXHRcdG9uRnJhbWU6IGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IGhhbmRzLnNlbmQoeyBpbWFnZTogdmlkZW9FbGVtZW50IH0pO1xuXHRcdH0sXG5cdFx0d2lkdGg6IGRvY3VtZW50LndpbmRvd1dpZHRoLFxuXHRcdGhlaWdodDogZG9jdW1lbnQud2luZG93SGVpZ2h0LFxuXHR9KTtcblx0Y2FtZXJhLnN0YXJ0KCk7XG5cblx0aGFuZHMuc2V0T3B0aW9ucyh7XG5cdFx0bWF4TnVtSGFuZHM6IDIsXG5cdFx0bWluRGV0ZWN0aW9uQ29uZmlkZW5jZTogMC44LFxuXHRcdG1pblRyYWNraW5nQ29uZmlkZW5jZTogMC41LFxuXHRcdHNlbGZpZU1vZGU6IHRydWUsXG5cdH0pO1xuXHRoYW5kcy5vblJlc3VsdHMoKHJlc3VsdHMpID0+IGdlbmVyYXRlVmFsdWVzKHJlc3VsdHMpKTtcblx0Y29uc29sZS5sb2coXCJoYW5kc29rXCIpO1xufTtcbiIsImltcG9ydCB7IGh5ZHJhU2tldGNoIH0gZnJvbSBcIi4vaHlkcmEuanNcIjtcbmltcG9ydCB7IGhhbmRzU2tldGNoIH0gZnJvbSBcIi4vaGFuZHMuanNcIjtcbmltcG9ydCB7XG5cdHRodW1iRGlzdCxcblx0aW5kZXhEaXN0LFxuXHRtaWRkbGVEaXN0LFxuXHRtaWRkbGVNY3AsXG5cdHNpZGVzRGlzdCxcbn0gZnJvbSBcIi4vaGFuZHMtZnVuY3Rpb25zL2hhbmRzVmFsdWVzLmpzXCI7XG5cbmV4cG9ydCBsZXQgcDVjYW52YXM7XG5leHBvcnQgbGV0IG15cDU7XG5cbmV4cG9ydCBjb25zdCBwNVNrZXRjaCA9ICgpID0+IHtcblx0bGV0IHNrZXRjaCA9IGZ1bmN0aW9uIChwKSB7XG5cdFx0cC5zZXR1cCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHA1Y2FudmFzID0gcC5jcmVhdGVDYW52YXMoNjQwLCA0ODApO1xuXHRcdFx0cDVjYW52YXMuaWQoXCJwNWNhbnZhc1wiKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiY2FudmFzY3JlYXRlXCIpO1xuXHRcdFx0aGFuZHNTa2V0Y2goKTtcblx0XHRcdGh5ZHJhU2tldGNoKCk7XG5cdFx0fTtcblxuXHRcdHAuZHJhdyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHAuY2xlYXIoKTtcblxuXHRcdFx0cC5wdXNoKCk7XG5cdFx0XHRwLm5vU3Ryb2tlKCk7XG5cdFx0XHRwLmZpbGwodGh1bWJEaXN0LCBpbmRleERpc3QsIG1pZGRsZURpc3QpO1xuXHRcdFx0cC5lbGxpcHNlKFxuXHRcdFx0XHRwLm1hcChtaWRkbGVNY3AueCwgMCwgMSwgMCwgd2lkdGgpLFxuXHRcdFx0XHRwLm1hcChtaWRkbGVNY3AueSwgMCwgMSwgMCwgaGVpZ2h0KSxcblx0XHRcdFx0c2lkZXNEaXN0XG5cdFx0XHQpO1xuXHRcdFx0cC5wb3AoKTtcblx0XHR9O1xuXHR9O1xuXG5cdG15cDUgPSBuZXcgcDUoc2tldGNoKTtcbn07XG4iLCJpbXBvcnQgeyB2aWRlb0VsZW1lbnQgfSBmcm9tIFwiLi9oYW5kcy5qc1wiO1xuXG5leHBvcnQgY29uc3QgaHlkcmFTa2V0Y2ggPSAoKSA9PiB7XG5cdGNvbnN0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXHRjLmlkID0gXCJoeWRyYWNhbnZhc1wiO1xuXHRjLndpZHRoID0gNjQwO1xuXHRjLmhlaWdodCA9IDQ4MDtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjKTsgLy9IWURSQSBvbiB0b3AgaWYgdW5jb21tZW50XG5cblx0Y29uc3QgaHlkcmEgPSBuZXcgSHlkcmEoeyBkZXRlY3RBdWRpbzogZmFsc2UsIGNhbnZhczogYywgYXV0b0xvb3A6IHRydWUgfSk7XG5cblx0dmlkZW9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwbGF5aW5nXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRzMC5pbml0KHsgc3JjOiB2aWRlb0VsZW1lbnQgfSk7XG5cdH0pO1xuXHRjb25zdCBwNWREaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwNWNhbnZhc1wiKTtcblx0czEuaW5pdCh7IHNyYzogcDVkRGlzcGxheSB9KTtcblxuXHRzcmMobzApXG5cdFx0Lm1vZHVsYXRlKG9zYygxLCAyLCAxKSwgMC4wMDMpXG5cdFx0LmNvbG9yYW1hKDAuMDEpXG5cdFx0LmJsZW5kKHNyYyhzMSksIDAuMSlcblx0XHQub3V0KG8wKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9