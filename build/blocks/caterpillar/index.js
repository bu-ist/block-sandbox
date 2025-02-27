!function(){"use strict";var e,t={994:function(){var e=window.wp.blocks,t=window.React,l=window.wp.i18n,a=window.wp.blockEditor;function r(e,t){return"I have "+(e+1)*t+" toes..."}function n(e){return(e=(e=e.replaceAll("a","ä")).replaceAll("o","ö")).replaceAll("u","ü")}var o=window.wp.components;const c=({attributes:e,setAttributes:c})=>{const{caterpillarName:i,caterpillarColor:s,caterpillarHat:p,caterpillarMood:u,caterpillarSegments:m,caterpillarLife:b}=e;return(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:(0,l.__)("Caterpillar Configuration"),className:"labs-theme-blocks-caterpillar--panel"},(0,t.createElement)(o.TextControl,{label:"Name",help:"Who are you?",className:"labs-theme-blocks-caterpillar--name",value:i,onChange:function(e){c({caterpillarName:n(e)})}}),(0,t.createElement)(o.SelectControl,{label:"Color",value:s,options:[{label:"Red",value:"red"},{label:"Green",value:"green"},{label:"Blue",value:"blue"}],onChange:function(e){c({caterpillarColor:e})}}),(0,t.createElement)(o.RadioControl,{label:"The type of the current hat is...",selected:p,options:[{label:"Top Hat",value:"tophat"},{label:"None",value:"none"}],onChange:function(e){c({caterpillarHat:e})}}),(0,t.createElement)(o.CheckboxControl,{label:"Is angry?",help:"What mood are we in today, Mister Rumples?",checked:u,onChange:function(e){c({caterpillarMood:e})}}),(0,t.createElement)(o.RangeControl,{label:"Segments",value:m,onChange:function(e){c({caterpillarSegments:e})},initialPosition:1,min:1,max:10,help:e=>r(e,2)}),(0,t.createElement)(o.ToggleControl,{label:"Is dead?",help:"Oh boy!",checked:b,onChange:function(e){c({caterpillarLife:e})}})))};var i=JSON.parse('{"UU":"labs-theme-blocks/caterpillar","Kk":"ellipsis"}');(0,e.registerBlockType)(i.UU,{attributes:{title:{type:"string"},excerpt:{type:"string"},caterpillarName:{type:"string"},caterpillarColor:{type:"string"},caterpillarHat:{type:"string"},caterpillarMood:{type:"boolean"},caterpillarSegments:{type:"number"},caterpillarLife:{type:"boolean"}},edit:function(e){const{attributes:o,setAttributes:i}=e,{title:s,excerpt:p,caterpillarName:u,caterpillarColor:m,caterpillarHat:b,caterpillarMood:h,caterpillarSegments:f,caterpillarLife:d}=o;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(c,{...e}),(0,t.createElement)("div",{...(0,a.useBlockProps)()},(0,t.createElement)("div",{className:"wp-block--labs-theme-blocks-caterpillar--container"},(0,t.createElement)(a.RichText,{className:"wp-block--labs-theme-blocks-caterpillar--title",placeholder:(0,l.__)("Callout Title","labs-theme-blocks"),tagName:"h2",onChange:e=>{i({title:n(e)})},value:s,allowedFormats:[]}),(0,t.createElement)("strong",null,function(e,t,l){let a="not feelin' much";return a=t?"so mad":"calm af","Hello world, my name is "+e+", and I'm "+a+"! Also, please note that "+r(l,2)}(u,h,f)),(0,t.createElement)("div",{className:"wp-block--labs-theme-blocks-caterpillar--color-"+o.caterpillarColor},function(e,t,l){const a=function(e){return e?["X","X","~"]:["O","O","="]}(l),r=function(e){return"tophat"==e?["_","|","|"]:[" "," "," "]}(e);return"\n   "+"   ".repeat(t)+" •  "+r[0]+"  •\n   "+".__".repeat(t)+".| "+r[1]+" "+r[2]+" |\n   "+"(  ".repeat(t)+")[ "+a[0]+" "+a[1]+" ]\n < "+"(  ".repeat(t)+") [ "+a[2]+" ]\n   "+"(__".repeat(t)+")\n   "+"^  ".repeat(t)+"^\n"}(b,f,d)),(0,t.createElement)(a.RichText,{placeholder:(0,l.__)("Excerpt","labs-theme-blocks"),tagName:"p",classname:"wp-block--labs-theme-blocks-caterpillar--excerpt",onChange:e=>{i({excerpt:n(e)})},value:p,allowedFormats:["core/italic","core/bold","core/link"]}))))},save:({attributes:e})=>null,icon:{src:i.Kk,foreground:"#cc0000"}})}},l={};function a(e){var r=l[e];if(void 0!==r)return r.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=function(t,l,r,n){if(!l){var o=1/0;for(p=0;p<e.length;p++){l=e[p][0],r=e[p][1],n=e[p][2];for(var c=!0,i=0;i<l.length;i++)(!1&n||o>=n)&&Object.keys(a.O).every((function(e){return a.O[e](l[i])}))?l.splice(i--,1):(c=!1,n<o&&(o=n));if(c){e.splice(p--,1);var s=r();void 0!==s&&(t=s)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[l,r,n]},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={188:0,236:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var r,n,o=l[0],c=l[1],i=l[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(i)var p=i(a)}for(t&&t(l);s<o.length;s++)n=o[s],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(p)},l=self.webpackChunklabs_theme_blocks=self.webpackChunklabs_theme_blocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var r=a.O(void 0,[236],(function(){return a(994)}));r=a.O(r)}();