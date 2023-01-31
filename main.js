(()=>{"use strict";function e(e=null,t="div",a=null,s=null,i=null){const l=document.createElement(t);return s&&(l.innerHTML=s),a&&l.classList.add(...a),i&&Object.keys(i).forEach((e=>{l.setAttribute(e,i[e])})),e&&e.append(l),l}function t(e,t,a){const s=document.querySelectorAll(e),{length:i}=s;for(let e=0;e<i;e+=1)switch(t){case"toggle":s[e].classList.toggle(a);break;case"add":s[e].classList.add(a);break;case"remove":s[e].classList.remove(a)}}const a=[["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete"],["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],["ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ShiftRight","ArrowUp","Escape"],["ControlLeft","MetaLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight"]],s={Backspace:["w-25","right"],Tab:["w-15","left"],CapsLock:["w-20","left"],Enter:["w-25","right"],ShiftLeft:["w-25","left"],ControlLeft:["w-15","left"],Space:["w-100"]},i={Backquote:{type:"double",values:["`","~"]},Digit1:{type:"double",values:["1","!"]},Digit2:{type:"double",values:["2","@"]},Digit3:{type:"double",values:["3","#"]},Digit4:{type:"double",values:["4","$"]},Digit5:{type:"double",values:["5","%"]},Digit6:{type:"double",values:["6","^"]},Digit7:{type:"double",values:["7","&"]},Digit8:{type:"double",values:["8","*"]},Digit9:{type:"double",values:["9","("]},Digit0:{type:"double",values:["0",")"]},Minus:{type:"double",values:["-","_"]},Equal:{type:"double",values:["=","+"]},Backspace:{type:"operation",values:["Backspace"]},Tab:{type:"operation",values:["Tab"]},KeyQ:{type:"char",values:["q","Q"]},KeyW:{type:"char",values:["w","W"]},KeyE:{type:"char",values:["e","E"]},KeyR:{type:"char",values:["r","R"]},KeyT:{type:"char",values:["t","T"]},KeyY:{type:"char",values:["y","Y"]},KeyU:{type:"char",values:["u","U"]},KeyI:{type:"char",values:["i","I"]},KeyO:{type:"char",values:["o","O"]},KeyP:{type:"char",values:["p","P"]},BracketLeft:{type:"double",values:["[","{"]},BracketRight:{type:"double",values:["]","}"]},Backslash:{type:"double",values:["\\","|"]},Delete:{type:"operation",values:["Del"]},CapsLock:{type:"toggle",values:["CapsLock"]},KeyA:{type:"char",values:["a","A"]},KeyS:{type:"char",values:["s","S"]},KeyD:{type:"char",values:["d","D"]},KeyF:{type:"char",values:["f","F"]},KeyG:{type:"char",values:["g","G"]},KeyH:{type:"char",values:["h","H"]},KeyJ:{type:"char",values:["j","J"]},KeyK:{type:"char",values:["k","K"]},KeyL:{type:"char",values:["l","L"]},Semicolon:{type:"double",values:[";",":"]},Quote:{type:"double",values:["'",'"']},Enter:{type:"operation",values:["Enter"]},ShiftLeft:{type:"modifier",values:["Shift"]},KeyZ:{type:"char",values:["z","Z"]},KeyX:{type:"char",values:["x","X"]},KeyC:{type:"char",values:["c","C"]},KeyV:{type:"char",values:["v","V"]},KeyB:{type:"char",values:["b","B"]},KeyN:{type:"char",values:["n","N"]},KeyM:{type:"char",values:["m","M"]},Comma:{type:"double",values:[",","<"]},Period:{type:"double",values:[".",">"]},Slash:{type:"double",values:["/","?"]},ShiftRight:{type:"modifier",values:["Shift"]},ArrowUp:{type:"operation",values:["↑"]},Escape:{type:"other",values:["Esc"]},ControlLeft:{type:"modifier",values:["Ctrl"]},MetaLeft:{type:"modifier",values:["Win"]},AltLeft:{type:"modifier",values:["Alt"]},Space:{type:"char",values:[" "," "]},AltRight:{type:"modifier",values:["Alt"]},ControlRight:{type:"modifier",values:["Ctrl"]},ArrowLeft:{type:"operation",values:["←"]},ArrowDown:{type:"operation",values:["↓"]},ArrowRight:{type:"operation",values:["→"]}},l={Backquote:{type:"double",values:["`","~"]},Digit1:{type:"char",values:["ą","Ą"]},Digit2:{type:"char",values:["č","Č"]},Digit3:{type:"char",values:["ę","Ę"]},Digit4:{type:"char",values:["ė","Ė"]},Digit5:{type:"char",values:["į","Į"]},Digit6:{type:"char",values:["š","Š"]},Digit7:{type:"char",values:["ų","Ų"]},Digit8:{type:"char",values:["ū","Ū"]},Digit9:{type:"double",values:["„","("]},Digit0:{type:"double",values:["“",")"]},Minus:{type:"double",values:["-","_"]},Equal:{type:"char",values:["ž","Ž"]},Backspace:{type:"operation",values:["Backspace"]},Tab:{type:"operation",values:["Tab"]},KeyQ:{type:"char",values:["q","Q"]},KeyW:{type:"char",values:["w","W"]},KeyE:{type:"char",values:["e","E"]},KeyR:{type:"char",values:["r","R"]},KeyT:{type:"char",values:["t","T"]},KeyY:{type:"char",values:["y","Y"]},KeyU:{type:"char",values:["u","U"]},KeyI:{type:"char",values:["i","I"]},KeyO:{type:"char",values:["o","O"]},KeyP:{type:"char",values:["p","P"]},BracketLeft:{type:"double",values:["[","{"]},BracketRight:{type:"double",values:["]","}"]},Backslash:{type:"double",values:["\\","|"]},Delete:{type:"operation",values:["Del"]},CapsLock:{type:"toggle",values:["CapsLock"]},KeyA:{type:"char",values:["a","A"]},KeyS:{type:"char",values:["s","S"]},KeyD:{type:"char",values:["d","D"]},KeyF:{type:"char",values:["f","F"]},KeyG:{type:"char",values:["g","G"]},KeyH:{type:"char",values:["h","H"]},KeyJ:{type:"char",values:["j","J"]},KeyK:{type:"char",values:["k","K"]},KeyL:{type:"char",values:["l","L"]},Semicolon:{type:"double",values:[";",":"]},Quote:{type:"double",values:["'",'"']},Enter:{type:"operation",values:["Enter"]},ShiftLeft:{type:"modifier",values:["Shift"]},KeyZ:{type:"char",values:["z","Z"]},KeyX:{type:"char",values:["x","X"]},KeyC:{type:"char",values:["c","C"]},KeyV:{type:"char",values:["v","V"]},KeyB:{type:"char",values:["b","B"]},KeyN:{type:"char",values:["n","N"]},KeyM:{type:"char",values:["m","M"]},Comma:{type:"double",values:[",","<"]},Period:{type:"double",values:[".",">"]},Slash:{type:"double",values:["/","?"]},ShiftRight:{type:"modifier",values:["Shift"]},ArrowUp:{type:"operation",values:["↑"]},Escape:{type:"other",values:["Esc"]},ControlLeft:{type:"modifier",values:["Ctrl"]},MetaLeft:{type:"modifier",values:["Win"]},AltLeft:{type:"modifier",values:["Alt"]},Space:{type:"char",values:[" "," "]},AltRight:{type:"modifier",values:["Alt"]},ControlRight:{type:"modifier",values:["Ctrl"]},ArrowLeft:{type:"operation",values:["←"]},ArrowDown:{type:"operation",values:["↓"]},ArrowRight:{type:"operation",values:["→"]}};class r{constructor(e){this.textarea=document.querySelector(e)}updateText(e,t,a,s){a.preventDefault();const i=document.querySelector(".textarea");if(i.focus(),a.ctrlKey&&["C","c","X","x","V","v","Z","z"].includes(e))return;const l=this.getCurrLineNum(),r=(this.textarea.value.match(/\n/g)||[]).length+1;if(console.log(`selStart:${this.textarea.selectionStart}, selEnd:${this.textarea.selectionEnd}`),console.log(`currLineNum:${l}, totalRows:${r}`),console.log(`newtextareaStart:${i.selectionStart}, newtextareaEnd:${i.selectionEnd}`),"char"===t||"Tab"===e||"Enter"===e){let t=e;"Tab"===e&&(t="\t"),"Enter"===e&&(t="\n"),this.textarea.setRangeText(t,this.textarea.selectionStart,this.textarea.selectionEnd,"end")}else if(!s){let t=0;const a=this.textarea.selectionStart===this.textarea.selectionEnd;switch(e){case"Delete":if(this.textarea.selectionEnd===this.textarea.value.length&&a)break;a&&(t=1),this.textarea.setRangeText("",this.textarea.selectionStart,this.textarea.selectionEnd+t,"end");break;case"Backspace":if(!this.textarea.selectionStart&&a)break;a&&(t=-1),this.textarea.setRangeText("",this.textarea.selectionStart+t,this.textarea.selectionEnd,"end");break;case"ArrowLeft":if(!this.textarea.selectionStart&&a)break;a&&(t=-1),this.textarea.selectionStart+=t,this.textarea.selectionEnd=this.textarea.selectionStart;break;case"ArrowRight":if(this.textarea.selectionEnd===this.textarea.value.length&&a)break;a&&(t=1),this.textarea.selectionEnd+=t,this.textarea.selectionStart=this.textarea.selectionEnd;break;case"ArrowUp":if(!this.textarea.selectionStart&&a)break;if(l<2)this.textarea.selectionStart=0,this.textarea.selectionEnd=0;else{const e=this.getCurrLineStartPos(),t=this.textarea.selectionStart-e,a=this.getLineLength(l-1),s=e-a;this.textarea.selectionStart=a>t?s+t:e,this.textarea.selectionEnd=this.textarea.selectionStart}break;case"ArrowDown":if(this.textarea.selectionEnd===this.textarea.value.length&&a)break;if(l===r)this.textarea.selectionStart=this.textarea.value.length,this.textarea.selectionEnd=this.textarea.selectionStart;else{const e=this.getCurrLineStartPos(),t=this.textarea.selectionStart-e,a=this.getLineLength(l),s=this.getLineLength(l+1),i=e+a;this.textarea.selectionStart=s>t?i+t:i+s,this.textarea.selectionEnd=this.textarea.selectionStart}}}l===r&&(this.textarea.scrollTop=this.textarea.scrollHeight)}getCurrLineNum(){return(this.textarea.value.slice(0,this.textarea.selectionStart).match(/\n/g)||[]).length+1}getCurrLineStartPos(){return this.textarea.value.substring(0,this.textarea.selectionStart).lastIndexOf("\n")}getLineLength(e){return this.textarea.value.split("\n")[e-1].length+1}}(new class{constructor(){this.lang=localStorage.getItem("lang")||"en",this.keyValues="en"===(localStorage.getItem("lang")||"en")?i:l,this.caps=!1,this.shift=!1,this.alt=!1,this.ctrl=!1,this.textfield=null,this.theme=localStorage.getItem("theme")||"dark"}create(){this.createInitialHtml(),this.createKeyboardLayout(),this.assignEventListeners(),this.textfield=new r(".textarea")}createInitialHtml(){document.body.innerHTML='\n      <div class="container">\n        <section class="text-content">\n          <section>\n            <div class="textarea-wrapper">\n              <textarea class="textarea" placeholder="Type something or press [Esc] to see help..." spellcheck="false" autofocus></textarea>\n            </div>\n            <button class="toogle-help open-help"><span>?</span></button>\n            <div class="theme-switch">\n                <span>Theme</span>\n                <span class="switch-btn"><div></div></span>\n            </div>\n          </section>\n          <aside>\n            <h2>Usage:</h2>\n            <ul>\n              <li>To change input <strong>language</strong> use <strong>[Ctrl]+[Shift]</strong> key kombination or switch toggle on virtual keyboard top right corner. Supported languages: <strong>English</strong> and <strong>Lithuanian</strong></li>\n              <li>To change <strong>theme</strong> use <strong>[Ctrl]+[Alt]</strong> key kombination or switch toggle on textboard bottom right corner</li>\n              <li>To close this help content press [Esc] or any key or use close button on top right corner</li>\n            </ul>\n            <br />\n            <h2>About:</h2>\n            <ul>\n              <li>Project created as <a href="https://rs.school/" target="_blank">RS School</a> Javascript / Front-end Mentoring Program in Lithuania & Latvia 2022Q3 Course <a href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/virtual-keyboard/virtual-keyboard-lt.md" target="_blank">Virtual Keyboard Task</a> solution</li>\n              <li>Created on Linux (Ubuntu 20.04). Tested on Linux: Chrome v109.0, Firefox v109.0. Use this on screens with at least 680px width for best experience</li>\n              <li>Creator: <a href="https://github.com/nerijus-bauza" target="_blank">nerijus-bauza</a></li>\n            </ul>\n            <button class="toogle-help close-help">✕</button>\n          </aside>\n        </section>\n        <section class="keyboard">\n          <header>\n            <section>\n              <h1 title="VIRTUAL KEYBOARD">VIRTUAL KEYBOARD</h1>\n              <a href="https://github.com/nerijus-bauza" target="_blank">by nerijus-bauza</a>\n            </section>\n            <aside>\n              <div class="lang-switch">\n                <span>EN</span>\n                <span class="switch-btn"><div></div></span>\n                <span>LT</span>\n              </div>\n            </aside>\n          </header>\n          <main class="keyboard-layout"></main>\n        </section>\n      </div>',t(".keyboard","add",this.lang),t(".container","add",this.theme)}createKeyboardLayout(){const t=document.querySelector(".keyboard-layout");for(let i=0;i<a.length;i+=1){const l=e(t,"section",["keys-row"]);for(let t=0;t<a[i].length;t+=1){const r=a[i][t];let o="";["double","char"].includes(this.keyValues[r].type)?o=`<div>${this.keyValues[r].values[0]}</div><div>${this.keyValues[r].values[1]}</div>`:["toggle"].includes(this.keyValues[r].type)?o=`<div>${this.keyValues[r].values[0]}</div><span><span>`:[o]=this.keyValues[r].values,e(l,"div",Object.prototype.hasOwnProperty.call(s,r)?["key",...s[r]]:["key"],o,{"data-key-type":this.keyValues[r].type,"data-key":r})}}}assignEventListeners(){document.body.addEventListener("click",(e=>{if(e.target.closest(".key")){const t=e.target.closest(".key");this.handleKeyPress(t.dataset.key,this.keyValues[t.dataset.key],e)}}));const e=Object.keys(this.keyValues);document.addEventListener("keydown",(t=>{e.includes(t.code)&&this.handleKeyPress(t.code,this.keyValues[t.code],t)})),document.addEventListener("keyup",(t=>{e.includes(t.code)&&this.handleKeyPress(t.code,this.keyValues[t.code],t)})),document.querySelector(".lang-switch").addEventListener("click",(()=>{this.swichLang()})),document.querySelectorAll(".toogle-help").forEach((e=>{e.addEventListener("click",(()=>{t(".text-content","toggle","help")}))})),document.querySelector(".theme-switch").addEventListener("click",(()=>{this.swichTheme()}))}updateKeyboardLayout(){document.querySelector(".keyboard").classList.toggle("lt"),document.querySelector(".keyboard").classList.toggle("en"),Object.keys(this.keyValues).forEach((e=>{const t=document.querySelector(`[data-key="${e}"]`);t.setAttribute("data-key-type",this.keyValues[e].type);let a="";["double","char"].includes(this.keyValues[e].type)?a=`<div>${this.keyValues[e].values[0]}</div><div>${this.keyValues[e].values[1]}</div>`:["toggle"].includes(this.keyValues[e].type)?a=`<div>${this.keyValues[e].values[0]}</div><span><span>`:[a]=this.keyValues[e].values,t.innerHTML=a}))}handleKeyPress(e,a,s){const i=["keydown","keyup"].includes(s.type),l=["click","keyup"].includes(s.type);if(i&&t(`[data-key="${e}"]`,l?"remove":"add","active"),"Escape"===e&&l)return void t(".text-content","toggle","help");"Escape"!==e&&t(".text-content","remove","help");let r=0;switch(a.type){case"toggle":"CapsLock"===e&&l&&(this.caps=!this.caps,t(".keyboard","toggle","caps")),this.resetMousePressedModifiers(s);break;case"modifier":["ShiftLeft","ShiftRight"].includes(e)&&(this.shift=i?!l:!this.shift,t(".keyboard",this.shift?"add":"remove","shift"),t('[data-key^="Shift"]',"remove","active"),t(`[data-key="${e}"]`,this.shift?"add":"remove","active")),["ControlLeft","ControlRight"].includes(e)&&(this.ctrl=i?!l:!this.ctrl,t('[data-key^="Control"]',"remove","active"),t(`[data-key="${e}"]`,this.ctrl?"add":"remove","active")),["AltLeft","AltRight"].includes(e)&&(this.alt=i?!l:!this.alt,t('[data-key^="Alt"]',"remove","active"),t(`[data-key="${e}"]`,this.alt?"add":"remove","active")),this.ctrl&&this.shift&&this.swichLang(),this.ctrl&&this.alt&&this.swichTheme(),this.shift+this.ctrl+this.alt>1&&this.resetMousePressedModifiers(s);break;case"char":case"double":if(i&&l)return;("double"===a.type&&this.shift||"char"===a.type&&this.shift!==this.caps)&&(r=1),this.textfield.updateText(a.values[r],"char",s,i),this.resetMousePressedModifiers(s);break;case"operation":if(i&&l)return;this.textfield.updateText(e,"operation",s,i),this.resetMousePressedModifiers(s)}}resetMousePressedModifiers(e){const a=[];!e.shiftKey&&this.shift&&(a.push("Shift"),this.shift=!1,t(".keyboard","remove","shift")),!e.ctrlKey&&this.ctrl&&(a.push("Control"),this.ctrl=!1),!e.altKey&&this.alt&&(a.push("Alt"),this.alt=!1);for(let e=0;e<a.length;e+=1)t(`.key.active[data-key^="${a[e]}"]`,"remove","active")}swichLang(){this.lang="en"===this.lang?"lt":"en",localStorage.setItem("lang",this.lang),this.keyValues="en"===this.lang?i:l,this.updateKeyboardLayout()}swichTheme(){this.theme="light"===this.theme?"dark":"light",localStorage.setItem("theme",this.theme),t(".container","toggle","light"),t(".container","toggle","dark")}}).create()})();