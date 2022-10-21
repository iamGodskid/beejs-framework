var __widget=(function(param){
  //let _$this=param;
  
  if(!(this instanceof __widget))
  return new __widget();
  //console.log(param)

  let widgets = {
    "btn": "button",
    "view": "div",
    "headLine": "label",
    "img": "img",
    "newLine": "br",
    "line": "hr",
    "middle":"center",
    "head":"header",
    "foot":"footer",
    "main": "main",
    "url":"a",
    "nav":"nav",
    "p":"p",
    "bold":"b",
    "h1":"h1",
    "h2":"h2",
    "h3":"h3",
    "h4":"h4",
    "h5":"h5",
    "h6":"h6",
    "prog":"progress",
    "inp":"input",
    "text":"span",
    "textarea":"textarea",
    "js":"script",
    "form":"form",
  }
  let regs = [/<(\w+)>(.*)<\/(\w+)>$/,
  /<(\w+)\s(.*)>(.*)<\/(\w+)>$/,
  //same
  /<(\w+)\s(.*)>$/, 
  /<(\w+)>$/, 
  //end
  /<\/(\w+)>$/,
  /<(\w+)?\/>$/,
  /<(\w+)\s(.*)\/>$/,
  
  ];
  

  this.parser=function(string){
    let $$ = string.trim();
  // console.log($$)
    let elmnts=``;
    let getline=/<|>/gim;
    let arr = []
    
    
    $$.split(/\r?\n/).forEach(l=>{
     let line = l.trim();
     let mkuse = line.replace(getline, "");
    // console.log(getline.test(line))
     arr.push(mkuse)
     //console.log(line)
      let match;
      if(match = line.match(regs[3])){
       // console.log(match[3])
        if(match[1] in widgets){
          let $this = line.replace(match[1], widgets[match[1]]);
        /*  let $this = filter.replace(match[3], widgets[match[1]]);*/
        //  console.log($this+match[2])
          //render
          elmnts+=$this;
        }
else{
      let _pa = line.replace(getline, "");
        //console.log(arr)
        throw Error(line+" "+" is not available in beejs dictionary in line"+" "+arr.indexOf(_pa))
      }
      }
     
      else if(match = line.match(regs[0])){
       // console.log(match[3])
        if(match[1] in widgets){
          let filter = line.replace(match[1], widgets[match[1]]);
          let $this = filter.replace(match[3], widgets[match[1]]);
         // console.log($this+"ffgg")
          //render
          elmnts += $this;
        }
else{
       let _pa = line.replace(getline, "");
        console.log(arr)
        throw Error(line+" "+" is not available in beejs dictionary in line"+" "+arr.indexOf(_pa))
      }
        
      }
      
      else if(match = line.match(regs[1])){
      //  console.log(match[3])
        if(match[1] in widgets){
          let filter = line.replace(match[1], widgets[match[1]]);
          let $this = filter.replace(match[4], widgets[match[1]]);
        //  console.log(match[4])
          //render
          elmnts += $this;
        }
else{
       let _pa = line.replace(getline, "");
        console.log(arr)
        throw Error(line+" "+" is not available in beejs dictionary in line"+" "+arr.indexOf(_pa))
      }
        
      }
      
else if(match = line.match(regs[2])){
       // console.log(match[3])
        if(match[1] in widgets){
          let $this = line.replace(match[1], widgets[match[1]]);
        /*  let $this = filter.replace(match[3], widgets[match[1]]);*/
       //   console.log($this+match[2])
          //render
          elmnts+=$this;
        }
else{
       let _pa = line.replace(getline, "");
        console.log(arr)
        throw Error(line+" "+" is not available in beejs dictionary in line"+" "+arr.indexOf(_pa))
      }
        
      }
      
 else if(match = line.match(regs[4]) || line.match(regs[5]) || line.match(regs[6])){
      //  console.log(match[3])
        if(match[1] in widgets){
          let $this = line.replace(match[1], widgets[match[1]]);
        /*  let $this = filter.replace(match[3], widgets[match[1]]);*/
        //  console.log($this)
          //render
          elmnts += $this;
        }else{
        let _pa = line.replace(getline, "");
        console.log(arr)
        throw Error(line+" "+" is not available in beejs dictionary in line"+" "+arr.indexOf(_pa))
      }
      
      
      }
      
      
      
      
    })
    console.log(elmnts)
    return elmnts;
  }
  
  
  function trans(ll){
    return this.parser(ll)
    
  }
  
  
  
  
  this.render=function(str, opt){
    let _$this = str;
    //let _$data=opt.state;
    
    let $$$$$ = opt();
    console.log($$$$$)
    if(!$$$$$) throw Error("no template given for rendering");
  console.log($$$$$)
  let res;
  let check = /^(.*)\.bee$/gi
  
 if(check.test($$$$$) == true){
    console.log($$$$$)
var xml;

if(window.XMLHttpRequest){
  xml=new XMLHttpRequest()
}else{
  xml=new ActiveXObject("Microsoft.XMLHTTP")
}

xml.open("GET", $$$$$, true);
xml.onreadystatechange=function(){
  
  if(this.readyState==4 && this.status == 200){

  var response=this.responseText
console.log(`${response}`)
res = trans(`${response}`);
}
}
xml.send()
    
  
  }
else if(check.test($$$$$) != true){
    res = this.parser($$$$$);
  }
  else{
    
  }
  console.log(_$this)
    //console.log(elmnts)
    document.querySelector(_$this).insertAdjacentHTML('beforeend', res)
  }
  
  
  
})