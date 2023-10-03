const events = {
  layers : [
    document.querySelector('#videoLayer'),
    document.querySelector('#layer1'),
    document.querySelector('#layer2')
  ],
  script : [
    "START",
    "秦弟兄: 嘿，你好啊! 我是秦弟兄。",
    "还有这些是 MTC 讲中文的传教士们!",
    "大家：你好！",
    "BLANK",
    "高长老：透过祈祷我们跟神沟通。",
    "王长老：透过祈祷我们可以感谢天父，我们可以祈求问祝福，我们可以祈求问帮助。",
    "高长老: 神可以帮助他们跟考研当我们问为了帮助。",
    "BLANK",
    "吕长老：准备以后我们首先称呼天父。",
    "徐长老：称呼神以后我们感谢神为我们的祝福。",
    "吕长老：感谢神以后我们祈求祂给祝福。",
    "徐长老：祈求神以后我结束说奉耶稣基督的名，阿门。",
    "吕长老：阿门",
    "BLANK",
    "熊长老：祈祷不需要很复杂",
    "施长老：你可以为简单的事情祈求",   
    "熊长老：这是一个榜样：",
    "施长老：你可以说:",
    "1. 亲爱的天父,",
    "2. 我感谢您的爱。",
    "3. 请祝福我有一个很好的天。",
    "4. 奉耶稣基督的名阿门",
     
    "施长老：哇塞！很简单！",
    "BLANK",
     
    "王长老：我们祈祷所以我们可以受帮助。",
    "高长老长老：天父过祝福为了我们，都我们需要做问。",
     
    "吕长老：祈祷是一个方法我们可以跟天父可以说话。",
    "我知道祈祷可以帮助我们感觉平安",
    "和祈祷可以帮助我们感觉神的爱。",
    "徐长老：我知道透过祈祷神可以给我们答案和引导。",
    "透过圣灵我们可以感觉平安和接受答案。",
    "BLANK",
    "秦弟兄: 好! Bye-bye!",
    "大家：再见！",
  ],
  script_counter : 0,
  runVideo : function(
    section = document.querySelector('#videoLayer')
  ){
    console.log(section);
    addEventListener('keypress', ()=>{
      console.log(this.script[this.script_counter]);
      switch(this.script[this.script_counter]){
        case "START":
          this.layers[0].children[0].play();
          this.script_counter++;
          this.layers[1].children[0].innerHTML = this.script[this.script_counter];
          this.layers[1].children[0].style.opacity = "1";
          break;
        case "BLANK":
          this.layers[1].children[0].innerHTML = "";
          this.layers[1].children[0].style.opacity = "0";
          break;
        case undefined:
          this.layers[1].children[0].style.opacity = "0";
          break;
        default:
          this.layers[1].children[0].innerHTML = this.script[this.script_counter];
          this.layers[1].children[0].style.opacity = "1";
          break;
      }

      this.script_counter++;
      console.log(this.layers[1])
    })
  }
}

console.log("HELLOW")
events.runVideo();
