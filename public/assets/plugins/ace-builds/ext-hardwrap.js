define("ace/ext/hardwrap",["require","exports","module","ace/range"],(function(e,t,n){"use strict";var r=e("../range").Range;t.hardWrap=function(e,t){function n(e,t,n){if(!(e.length<t)){var r=e.slice(0,t),a=e.slice(t),i=/^(?:(\s+)|(\S+)(\s+))/.exec(a),o=/(?:(\s+)|(\s+)(\S+))$/.exec(r),s=0,l=0;return o&&!o[2]&&(s=t-o[1].length,l=t),i&&!i[2]&&(s||(s=t),l=t+i[1].length),s?{start:s,end:l}:o&&o[2]&&o.index>n?{start:o.index,end:o.index+o[3].length}:void 0}}for(var a=t.column||e.getOption("printMarginColumn"),i=Math.min(t.startRow,t.endRow),o=Math.max(t.startRow,t.endRow),s=e.session;i<=o;){var l=s.getLine(i);if(l.length>a)(d=n(l,a,5))&&s.replace(new r(i,d.start,i,d.end),"\n"),o++;else if(/\S/.test(l)&&i!=o){var c=s.getLine(i+1);if(c&&/\S/.test(c)){var d,g=l.replace(/\s+$/,""),h=c.replace(/^\s+/,""),p=g+" "+h;if((d=n(p,a,5))&&d.start>g.length||p.length<a){var u=new r(i,g.length,i+1,c.length-h.length);s.replace(u," "),i--,o--}}}i++}}})),window.require(["ace/ext/hardwrap"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));
