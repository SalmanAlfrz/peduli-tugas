define("ace/mode/properties_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,o){"use strict";var i=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,s=function(){var e=/\\u[0-9a-fA-F]{4}|\\/;this.$rules={start:[{token:"comment",regex:/[!#].*$/},{token:"keyword",regex:/[=:]$/},{token:"keyword",regex:/[=:]/,next:"value"},{token:"constant.language.escape",regex:e},{defaultToken:"variable"}],value:[{regex:/\\$/,token:"string",next:"value"},{regex:/$/,token:"string",next:"start"},{token:"constant.language.escape",regex:e},{defaultToken:"string"}]}};i.inherits(s,r),t.PropertiesHighlightRules=s})),define("ace/mode/properties",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/properties_highlight_rules"],(function(e,t,o){"use strict";var i=e("../lib/oop"),r=e("./text").Mode,s=e("./properties_highlight_rules").PropertiesHighlightRules,l=function(){this.HighlightRules=s,this.$behaviour=this.$defaultBehaviour};i.inherits(l,r),function(){this.$id="ace/mode/properties"}.call(l.prototype),t.Mode=l})),window.require(["ace/mode/properties"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));