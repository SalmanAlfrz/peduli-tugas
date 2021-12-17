document.createElement("canvas").getContext||function(){var t=Math,e=t.round,i=t.sin,r=t.cos,n=t.abs,a=t.sqrt,s=10;navigator.userAgent.match(/MSIE ([\d.]+)?/)[1];function o(){return this.context_||(this.context_=new I(this))}var l=Array.prototype.slice;function h(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function c(t,e,i){t.namespaces[e]||t.namespaces.add(e,i,"#default#VML")}function u(t){if(c(t,"g_vml_","urn:schemas-microsoft-com:vml"),c(t,"g_o_","urn:schemas-microsoft-com:office:office"),!t.styleSheets.ex_canvas_){var e=t.createStyleSheet();e.owningElement.id="ex_canvas_",e.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"}}u(document);var d={init:function(t){var e=t||document;e.createElement("canvas"),e.attachEvent("onreadystatechange",function(t,e,i){var r=l.call(arguments,2);return function(){return t.apply(e,r.concat(l.call(arguments)))}}(this.init_,this,e))},init_:function(t){for(var e=t.getElementsByTagName("canvas"),i=0;i<e.length;i++)this.initElement(e[i])},initElement:function(t){if(!t.getContext){t.getContext=o,u(t.ownerDocument),t.innerHTML="",t.attachEvent("onpropertychange",_),t.attachEvent("onresize",f);var e=t.attributes;e.width&&e.width.specified?t.style.width=e.width.nodeValue+"px":t.width=t.clientWidth,e.height&&e.height.specified?t.style.height=e.height.nodeValue+"px":t.height=t.clientHeight}return t}};function _(t){var e=t.srcElement;switch(t.propertyName){case"width":e.getContext().clearRect(),e.style.width=e.attributes.width.nodeValue+"px",e.firstChild.style.width=e.clientWidth+"px";break;case"height":e.getContext().clearRect(),e.style.height=e.attributes.height.nodeValue+"px",e.firstChild.style.height=e.clientHeight+"px"}}function f(t){var e=t.srcElement;e.firstChild&&(e.firstChild.style.width=e.clientWidth+"px",e.firstChild.style.height=e.clientHeight+"px")}d.init();for(var p=[],y=0;y<16;y++)for(var g=0;g<16;g++)p[16*y+g]=y.toString(16)+g.toString(16);function m(t,e){for(var i=[[1,0,0],[0,1,0],[0,0,1]],r=0;r<3;r++)for(var n=0;n<3;n++){for(var a=0,s=0;s<3;s++)a+=t[r][s]*e[s][n];i[r][n]=a}return i}function F(t,e){e.fillStyle=t.fillStyle,e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.lineWidth=t.lineWidth,e.miterLimit=t.miterLimit,e.shadowBlur=t.shadowBlur,e.shadowColor=t.shadowColor,e.shadowOffsetX=t.shadowOffsetX,e.shadowOffsetY=t.shadowOffsetY,e.strokeStyle=t.strokeStyle,e.globalAlpha=t.globalAlpha,e.font=t.font,e.textAlign=t.textAlign,e.textBaseline=t.textBaseline,e.arcScaleX_=t.arcScaleX_,e.arcScaleY_=t.arcScaleY_,e.lineScale_=t.lineScale_}var x={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"};function v(t){var e=t.indexOf("(",3),i=t.indexOf(")",e+1),r=t.substring(e+1,i).split(",");return 4==r.length&&"a"==t.charAt(3)||(r[3]=1),r}function E(t){return parseFloat(t)/100}function A(t,e,i){return Math.min(i,Math.max(e,t))}function w(t,e,i){return i<0&&i++,i>1&&i--,6*i<1?t+6*(e-t)*i:2*i<1?e:3*i<2?t+(e-t)*(2/3-i)*6:t}var C={};function b(t){if(t in C)return C[t];var e=1;if("#"==(t=String(t)).charAt(0))n=t;else if(/^rgb/.test(t)){for(var i,r=v(t),n="#",a=0;a<3;a++)i=-1!=r[a].indexOf("%")?Math.floor(255*E(r[a])):+r[a],n+=p[A(i,0,255)];e=+r[3]}else if(/^hsl/.test(t)){n=function(t){var e,i,r,n,a,s;if((n=parseFloat(t[0])/360%360)<0&&n++,a=A(E(t[1]),0,1),s=A(E(t[2]),0,1),0==a)e=i=r=s;else{var o=s<.5?s*(1+a):s+a-s*a,l=2*s-o;e=w(l,o,n+1/3),i=w(l,o,n),r=w(l,o,n-1/3)}return"#"+p[Math.floor(255*e)]+p[Math.floor(255*i)]+p[Math.floor(255*r)]}(r=v(t)),e=r[3]}else n=x[t]||t;return C[t]={color:n,alpha:e}}var D="normal",S="normal",k="normal",T=10,R="sans-serif",B={};var M={butt:"flat",round:"round"};function I(t){this.m_=[[1,0,0],[0,1,0],[0,0,1]],this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.strokeStyle="#000",this.fillStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=10,this.globalAlpha=1,this.font="10px sans-serif",this.textAlign="left",this.textBaseline="alphabetic",this.canvas=t;var e="width:"+t.clientWidth+"px;height:"+t.clientHeight+"px;overflow:hidden;position:absolute",i=t.ownerDocument.createElement("div");i.style.cssText=e,t.appendChild(i);var r=i.cloneNode(!1);r.style.backgroundColor="red",r.style.filter="alpha(opacity=0)",t.appendChild(r),this.element_=i,this.arcScaleX_=1,this.arcScaleY_=1,this.lineScale_=1}var P=I.prototype;function z(t,e,i,r){t.currentPath_.push({type:"bezierCurveTo",cp1x:e.x,cp1y:e.y,cp2x:i.x,cp2y:i.y,x:r.x,y:r.y}),t.currentX_=r.x,t.currentY_=r.y}function O(t,e){var i,r=b(t.strokeStyle),n=r.color,a=r.alpha*t.globalAlpha,s=t.lineScale_*t.lineWidth;s<1&&(a*=s),e.push("<g_vml_:stroke",' opacity="',a,'"',' joinstyle="',t.lineJoin,'"',' miterlimit="',t.miterLimit,'"',' endcap="',(i=t.lineCap,M[i]||"square"),'"',' weight="',s,'px"',' color="',n,'" />')}function N(e,i,r,n){var a=e.fillStyle,o=e.arcScaleX_,l=e.arcScaleY_,h=n.x-r.x,c=n.y-r.y;if(a instanceof X){var u=0,d={x:0,y:0},_=0,f=1;if("gradient"==a.type_){var p=a.x0_/o,y=a.y0_/l,g=a.x1_/o,m=a.y1_/l,F=L(e,p,y),x=L(e,g,m),v=x.x-F.x,E=x.y-F.y;(u=180*Math.atan2(v,E)/Math.PI)<0&&(u+=360),u<1e-6&&(u=0)}else{d={x:((F=L(e,a.x0_,a.y0_)).x-r.x)/h,y:(F.y-r.y)/c},h/=o*s,c/=l*s;var A=t.max(h,c);_=2*a.r0_/A,f=2*a.r1_/A-_}var w=a.colors_;w.sort((function(t,e){return t.offset-e.offset}));for(var C=w.length,D=w[0].color,S=w[C-1].color,k=w[0].alpha*e.globalAlpha,T=w[C-1].alpha*e.globalAlpha,R=[],B=0;B<C;B++){var M=w[B];R.push(M.offset*f+_+" "+M.color)}i.push('<g_vml_:fill type="',a.type_,'"',' method="none" focus="100%"',' color="',D,'"',' color2="',S,'"',' colors="',R.join(","),'"',' opacity="',T,'"',' g_o_:opacity2="',k,'"',' angle="',u,'"',' focusposition="',d.x,",",d.y,'" />')}else if(a instanceof H){if(h&&c){var I=-r.x,P=-r.y;i.push("<g_vml_:fill",' position="',I/h*o*o,",",P/c*l*l,'"',' type="tile"',' src="',a.src_,'" />')}}else{var z=b(e.fillStyle),O=z.color,N=z.alpha*e.globalAlpha;i.push('<g_vml_:fill color="',O,'" opacity="',N,'" />')}}function L(t,e,i){var r=t.m_;return{x:s*(e*r[0][0]+i*r[1][0]+r[2][0])-5,y:s*(e*r[0][1]+i*r[1][1]+r[2][1])-5}}function Y(t,e,i){if(function(t){return isFinite(t[0][0])&&isFinite(t[0][1])&&isFinite(t[1][0])&&isFinite(t[1][1])&&isFinite(t[2][0])&&isFinite(t[2][1])}(e)&&(t.m_=e,i)){var r=e[0][0]*e[1][1]-e[0][1]*e[1][0];t.lineScale_=a(n(r))}}function X(t){this.type_=t,this.x0_=0,this.y0_=0,this.r0_=0,this.x1_=0,this.y1_=0,this.r1_=0,this.colors_=[]}function H(t,e){switch(function(t){t&&1==t.nodeType&&"IMG"==t.tagName||W("TYPE_MISMATCH_ERR");"complete"!=t.readyState&&W("INVALID_STATE_ERR")}(t),e){case"repeat":case null:case"":this.repetition_="repeat";break;case"repeat-x":case"repeat-y":case"no-repeat":this.repetition_=e;break;default:W("SYNTAX_ERR")}this.src_=t.src,this.width_=t.width,this.height_=t.height}function W(t){throw new q(t)}function q(t){this.code=this[t],this.message=t+": DOM Exception "+this.code}P.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null),this.element_.innerHTML=""},P.beginPath=function(){this.currentPath_=[]},P.moveTo=function(t,e){var i=L(this,t,e);this.currentPath_.push({type:"moveTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},P.lineTo=function(t,e){var i=L(this,t,e);this.currentPath_.push({type:"lineTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},P.bezierCurveTo=function(t,e,i,r,n,a){var s=L(this,n,a);z(this,L(this,t,e),L(this,i,r),s)},P.quadraticCurveTo=function(t,e,i,r){var n=L(this,t,e),a=L(this,i,r),s={x:this.currentX_+2/3*(n.x-this.currentX_),y:this.currentY_+2/3*(n.y-this.currentY_)};z(this,s,{x:s.x+(a.x-this.currentX_)/3,y:s.y+(a.y-this.currentY_)/3},a)},P.arc=function(t,e,n,a,o,l){n*=s;var h=l?"at":"wa",c=t+r(a)*n-5,u=e+i(a)*n-5,d=t+r(o)*n-5,_=e+i(o)*n-5;c!=d||l||(c+=.125);var f=L(this,t,e),p=L(this,c,u),y=L(this,d,_);this.currentPath_.push({type:h,x:f.x,y:f.y,radius:n,xStart:p.x,yStart:p.y,xEnd:y.x,yEnd:y.y})},P.rect=function(t,e,i,r){this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath()},P.strokeRect=function(t,e,i,r){var n=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath(),this.stroke(),this.currentPath_=n},P.fillRect=function(t,e,i,r){var n=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath(),this.fill(),this.currentPath_=n},P.createLinearGradient=function(t,e,i,r){var n=new X("gradient");return n.x0_=t,n.y0_=e,n.x1_=i,n.y1_=r,n},P.createRadialGradient=function(t,e,i,r,n,a){var s=new X("gradientradial");return s.x0_=t,s.y0_=e,s.r0_=i,s.x1_=r,s.y1_=n,s.r1_=a,s},P.drawImage=function(i,r){var n,a,o,l,h,c,u,d,_=i.runtimeStyle.width,f=i.runtimeStyle.height;i.runtimeStyle.width="auto",i.runtimeStyle.height="auto";var p=i.width,y=i.height;if(i.runtimeStyle.width=_,i.runtimeStyle.height=f,3==arguments.length)n=arguments[1],a=arguments[2],h=c=0,u=o=p,d=l=y;else if(5==arguments.length)n=arguments[1],a=arguments[2],o=arguments[3],l=arguments[4],h=c=0,u=p,d=y;else{if(9!=arguments.length)throw Error("Invalid number of arguments");h=arguments[1],c=arguments[2],u=arguments[3],d=arguments[4],n=arguments[5],a=arguments[6],o=arguments[7],l=arguments[8]}var g=L(this,n,a),m=[],F=10,x=10;if(m.push(" <g_vml_:group",' coordsize="',s*F,",",s*x,'"',' coordorigin="0,0"',' style="width:',F,"px;height:",x,"px;position:absolute;"),1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var v=[];v.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",e(g.x/s),",","Dy=",e(g.y/s),"");var E=g,A=L(this,n+o,a),w=L(this,n,a+l),C=L(this,n+o,a+l);E.x=t.max(E.x,A.x,w.x,C.x),E.y=t.max(E.y,A.y,w.y,C.y),m.push("padding:0 ",e(E.x/s),"px ",e(E.y/s),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",v.join(""),", sizingmethod='clip');")}else m.push("top:",e(g.y/s),"px;left:",e(g.x/s),"px;");m.push(' ">','<g_vml_:image src="',i.src,'"',' style="width:',s*o,"px;"," height:",s*l,'px"',' cropleft="',h/p,'"',' croptop="',c/y,'"',' cropright="',(p-h-u)/p,'"',' cropbottom="',(y-c-d)/y,'"'," />","</g_vml_:group>"),this.element_.insertAdjacentHTML("BeforeEnd",m.join(""))},P.stroke=function(t){for(var i=5e3,r={x:null,y:null},n={x:null,y:null},a=0;a<this.currentPath_.length;a+=i){var s=[];s.push("<g_vml_:shape",' filled="',!!t,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0,0"',' coordsize="',100,",",100,'"',' stroked="',!t,'"',' path="');for(var o=a;o<Math.min(a+i,this.currentPath_.length);o++){o%i==0&&o>0&&s.push(" m ",e(this.currentPath_[o-1].x),",",e(this.currentPath_[o-1].y));var l=this.currentPath_[o];switch(l.type){case"moveTo":l,s.push(" m ",e(l.x),",",e(l.y));break;case"lineTo":s.push(" l ",e(l.x),",",e(l.y));break;case"close":s.push(" x "),l=null;break;case"bezierCurveTo":s.push(" c ",e(l.cp1x),",",e(l.cp1y),",",e(l.cp2x),",",e(l.cp2y),",",e(l.x),",",e(l.y));break;case"at":case"wa":s.push(" ",l.type," ",e(l.x-this.arcScaleX_*l.radius),",",e(l.y-this.arcScaleY_*l.radius)," ",e(l.x+this.arcScaleX_*l.radius),",",e(l.y+this.arcScaleY_*l.radius)," ",e(l.xStart),",",e(l.yStart)," ",e(l.xEnd),",",e(l.yEnd))}l&&((null==r.x||l.x<r.x)&&(r.x=l.x),(null==n.x||l.x>n.x)&&(n.x=l.x),(null==r.y||l.y<r.y)&&(r.y=l.y),(null==n.y||l.y>n.y)&&(n.y=l.y))}s.push(' ">'),t?N(this,s,r,n):O(this,s),s.push("</g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",s.join(""))}},P.fill=function(){this.stroke(!0)},P.closePath=function(){this.currentPath_.push({type:"close"})},P.save=function(){var t={};F(this,t),this.aStack_.push(t),this.mStack_.push(this.m_),this.m_=m([[1,0,0],[0,1,0],[0,0,1]],this.m_)},P.restore=function(){this.aStack_.length&&(F(this.aStack_.pop(),this),this.m_=this.mStack_.pop())},P.translate=function(t,e){Y(this,m([[1,0,0],[0,1,0],[t,e,1]],this.m_),!1)},P.rotate=function(t){var e=r(t),n=i(t);Y(this,m([[e,n,0],[-n,e,0],[0,0,1]],this.m_),!1)},P.scale=function(t,e){this.arcScaleX_*=t,this.arcScaleY_*=e,Y(this,m([[t,0,0],[0,e,0],[0,0,1]],this.m_),!0)},P.transform=function(t,e,i,r,n,a){Y(this,m([[t,e,0],[i,r,0],[n,a,1]],this.m_),!0)},P.setTransform=function(t,e,i,r,n,a){Y(this,[[t,e,0],[i,r,0],[n,a,1]],!0)},P.drawText_=function(t,i,r,n,a){var o,l=this.m_,c=1e3,u=0,d=c,_={x:0,y:0},f=[],p=function(t,e){var i={};for(var r in t)i[r]=t[r];var n=parseFloat(e.currentStyle.fontSize),a=parseFloat(t.size);return"number"==typeof t.size?i.size=t.size:-1!=t.size.indexOf("px")?i.size=a:-1!=t.size.indexOf("em")?i.size=n*a:-1!=t.size.indexOf("%")?i.size=n/100*a:-1!=t.size.indexOf("pt")?i.size=a/.75:i.size=n,i.size*=.981,i}(function(t){if(B[t])return B[t];var e=document.createElement("div").style;try{e.font=t}catch(t){}return B[t]={style:e.fontStyle||D,variant:e.fontVariant||S,weight:e.fontWeight||k,size:e.fontSize||T,family:e.fontFamily||R}}(this.font),this.element_),y=(o=p).style+" "+o.variant+" "+o.weight+" "+o.size+"px "+o.family,g=this.element_.currentStyle,m=this.textAlign.toLowerCase();switch(m){case"left":case"center":case"right":break;case"end":m="ltr"==g.direction?"right":"left";break;case"start":m="rtl"==g.direction?"right":"left";break;default:m="left"}switch(this.textBaseline){case"hanging":case"top":_.y=p.size/1.75;break;case"middle":break;default:_.y=-p.size/2.25}switch(m){case"right":u=c,d=.05;break;case"center":u=d=500}var F=L(this,i+_.x,r+_.y);f.push('<g_vml_:line from="',-u,' 0" to="',d,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!a,'" stroked="',!!a,'" style="position:absolute;width:1px;height:1px;">'),a?O(this,f):N(this,f,{x:-u,y:0},{x:d,y:p.size});var x=l[0][0].toFixed(3)+","+l[1][0].toFixed(3)+","+l[0][1].toFixed(3)+","+l[1][1].toFixed(3)+",0,0",v=e(F.x/s)+","+e(F.y/s);f.push('<g_vml_:skew on="t" matrix="',x,'" ',' offset="',v,'" origin="',u,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',h(t),'" style="v-text-align:',m,";font:",h(y),'" /></g_vml_:line>'),this.element_.insertAdjacentHTML("beforeEnd",f.join(""))},P.fillText=function(t,e,i,r){this.drawText_(t,e,i,r,!1)},P.strokeText=function(t,e,i,r){this.drawText_(t,e,i,r,!0)},P.measureText=function(t){if(!this.textMeasureEl_){this.element_.insertAdjacentHTML("beforeEnd",'<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'),this.textMeasureEl_=this.element_.lastChild}var e=this.element_.ownerDocument;return this.textMeasureEl_.innerHTML="",this.textMeasureEl_.style.font=this.font,this.textMeasureEl_.appendChild(e.createTextNode(t)),{width:this.textMeasureEl_.offsetWidth}},P.clip=function(){},P.arcTo=function(){},P.createPattern=function(t,e){return new H(t,e)},X.prototype.addColorStop=function(t,e){e=b(e),this.colors_.push({offset:t,color:e.color,alpha:e.alpha})};var V=q.prototype=new Error;V.INDEX_SIZE_ERR=1,V.DOMSTRING_SIZE_ERR=2,V.HIERARCHY_REQUEST_ERR=3,V.WRONG_DOCUMENT_ERR=4,V.INVALID_CHARACTER_ERR=5,V.NO_DATA_ALLOWED_ERR=6,V.NO_MODIFICATION_ALLOWED_ERR=7,V.NOT_FOUND_ERR=8,V.NOT_SUPPORTED_ERR=9,V.INUSE_ATTRIBUTE_ERR=10,V.INVALID_STATE_ERR=11,V.SYNTAX_ERR=12,V.INVALID_MODIFICATION_ERR=13,V.NAMESPACE_ERR=14,V.INVALID_ACCESS_ERR=15,V.VALIDATION_ERR=16,V.TYPE_MISMATCH_ERR=17,G_vmlCanvasManager=d,CanvasRenderingContext2D=I,CanvasGradient=X,CanvasPattern=H,DOMException=q}();
