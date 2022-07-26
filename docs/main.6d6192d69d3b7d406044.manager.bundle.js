(self.webpackChunkgaia_react=self.webpackChunkgaia_react||[]).push([[179],{88937:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__(92222);var react=__webpack_require__(67294),esm=__webpack_require__(32605),types=__webpack_require__(96899),dist_esm=(__webpack_require__(68309),__webpack_require__(57327),__webpack_require__(47941),__webpack_require__(69600),__webpack_require__(86141)),lib=(__webpack_require__(79753),__webpack_require__(82526),__webpack_require__(41817),__webpack_require__(41539),__webpack_require__(32165),__webpack_require__(78783),__webpack_require__(66992),__webpack_require__(33948),__webpack_require__(47042),__webpack_require__(91038),__webpack_require__(74855)),lib_default=__webpack_require__.n(lib),react_jss_esm=(__webpack_require__(19601),__webpack_require__(26080)),theming_esm=__webpack_require__(71928);const styles=(0,react_jss_esm.QM)({"@global":{body:{}}});var GlobalStyles=function GlobalStyles(props){var children=props.children;return styles(),react.createElement(react.Fragment,null,children)},defaultTheme={background:{default:"#fff"},default:{dark:"#667085",main:"#C7CCD3",light:"#E4E7EC",extraLight:"#EFF1F3"},text:{primary:"#101828",secondary:"#344054",disabled:"#D2D2D2",hint:"#667085"},primary:{main:"#003CB8",light:"#E7EAF9",dark:"#001D9A",contrast:"#fff"},secondary:{main:"#58329A",light:"#EDE7F4",dark:"#3D2181",contrast:"#fff"},error:{main:"#EC726B",light:"#FBDCDA",dark:"#D92C20",contrast:"#000"},success:{main:"#6CA78B",light:"#6CA78B",dark:"#6CA78B",contrast:"#fff"},font:"Inter, sans-serif"};__webpack_require__(89554),__webpack_require__(54747);function isObject(item){return item&&"object"==typeof item&&!Array.isArray(item)}function merge(source,target){var output=Object.assign({},source);return isObject(source)&&isObject(target)&&Object.keys(target).forEach((function(key){var _Object$assign,_Object$assign2;isObject(target[key])?key in source?output[key]=merge(source[key],target[key]):Object.assign(output,((_Object$assign={})[key]=target[key],_Object$assign)):Object.assign(output,((_Object$assign2={})[key]=target[key],_Object$assign2))})),output}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ThemeContext=react.createContext({theme:defaultTheme,updateTheme:function updateTheme(){return console.log("ThemeProvider is not rendered yet")}});react.memo((function(_ref){var initial=_ref.theme,children=_ref.children,_useState2=_slicedToArray((0,react.useState)(merge(defaultTheme,initial)),2),theme=_useState2[0],setTheme=_useState2[1],updateTheme=(0,react.useCallback)((function(updatedTheme){setTheme((function(currentTheme){return merge(currentTheme,updatedTheme)}))}),[]),memoizedValue=(0,react.useMemo)((function(){return{theme,updateTheme}}),[theme,updateTheme]);return react.createElement(ThemeContext.Provider,{value:memoizedValue},react.createElement(theming_esm.f6,{theme:memoizedValue.theme},react.createElement(GlobalStyles,null,children)))})).displayName="ThemeProvider";const Tooltip_styles=function createStyles(styles,options){return(0,react_jss_esm.QM)((function(providedTheme){var theme=Object.assign({},defaultTheme,providedTheme);return styles(theme)}),options)}((function(theme){return{tooltipWrap:{position:"relative",width:"max-content",display:"flex",justifyContent:"center"},tooltipTarget:{cursor:"pointer"},tooltipContainer:{position:"absolute",zIndex:99},tooltipBox:{fontFamily:theme.font,fontSize:14,fontWeight:400,maxWidth:320,width:"max-content",padding:"8px 10px",borderRadius:8,boxSizing:"border-box",position:"relative",boxShadow:"0px 0px 16px -4px rgba(16, 24, 40, 0.2), 0px 0px 6px -2px rgba(16, 24, 40, 0.03)","&:after":{content:'""',position:"absolute",width:12,height:12,borderRadius:2,transform:"rotate(45deg)",backgroundColor:theme.background.default,bottom:-6,left:"calc(50% - 5px)"}},visible:{"& $title":{paddingRight:24}},closeBtn:{position:"absolute",top:8,right:8,height:20,width:20,borderRadius:4,backgroundColor:theme.default.light,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer","&:hover":{backgroundColor:theme.default.main}},title:{color:theme.text.secondary,fontWeight:500,lineHeight:"20px"},text:{marginTop:5},light:{"& $tooltipBox":{backgroundColor:theme.background.default,color:theme.text.hint}},dark:{"& $tooltipBox":{backgroundColor:theme.text.primary,color:theme.primary.contrast,"& $title":{color:theme.primary.contrast},"&:after":{backgroundColor:theme.text.primary}}},top:{display:"flex",justifyContent:"center","& $tooltipBox":{margin:"0 auto"},bottom:"calc(100% + 12px)","& $tooltipBox:after":{bottom:-5,left:"calc(50% - 6px)"}},topStart:{bottom:"calc(100% + 12px)",margin:"initial",right:"calc(100% - 32px)","& $tooltipBox:after":{bottom:-5,right:15,left:"initial"}},topEnd:{bottom:"calc(100% + 12px)",margin:"initial",left:"calc(100% - 32px)","& $tooltipBox:after":{bottom:-5,left:15}},bottom:{display:"flex",justifyContent:"center","& $tooltipBox":{margin:"0 auto"},top:"calc(100% + 12px)","& $tooltipBox:after":{top:-5,left:"calc(50% - 6px)"}},bottomStart:{top:"calc(100% + 12px)",margin:"initial",right:"calc(100% - 32px)","& $tooltipBox:after":{top:-5,right:15,left:"initial"}},bottomEnd:{top:"calc(100% + 12px)",margin:"initial",left:"calc(100% - 32px)","& $tooltipBox:after":{top:-5,left:15}},right:{height:"100%",left:"calc(100% + 12px)",top:0,display:"flex",alignItems:"center","& $tooltipBox:after":{top:"calc(50% - 6px)",left:-5}},rightStart:{height:"100%",left:"calc(100% + 12px)",bottom:"calc(100% - 32px)",display:"flex",alignItems:"flex-end","& $tooltipBox:after":{bottom:15,left:-5}},rightEnd:{height:"100%",left:"calc(100% + 12px)",top:"calc(100% - 32px)",display:"flex",alignItems:"flex-start","& $tooltipBox:after":{top:15,left:-5}},left:{height:"100%",right:"calc(100% + 12px)",top:0,display:"flex",alignItems:"center","& $tooltipBox:after":{top:"calc(50% - 6px)",right:-5,left:"initial"}},leftStart:{height:"100%",right:"calc(100% + 12px)",bottom:"calc(100% - 32px)",display:"flex",alignItems:"flex-end","& $tooltipBox:after":{bottom:15,left:"initial",right:-5}},leftEnd:{height:"100%",right:"calc(100% + 12px)",top:"calc(100% - 32px)",display:"flex",alignItems:"flex-start","& $tooltipBox:after":{top:15,right:-5,left:"initial"}}}}));var classnames=__webpack_require__(94184),classnames_default=__webpack_require__.n(classnames);function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var CloseIcon=function CloseIcon(props){return react.createElement("svg",_extends({width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),react.createElement("path",{d:"M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L4 3.29289L6.64645 0.646447C6.84171 0.451184 7.15829 0.451184 7.35355 0.646447C7.54882 0.841709 7.54882 1.15829 7.35355 1.35355L4.70711 4L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355C7.15829 7.54882 6.84171 7.54882 6.64645 7.35355L4 4.70711L1.35355 7.35355C1.15829 7.54882 0.841709 7.54882 0.646447 7.35355C0.451184 7.15829 0.451184 6.84171 0.646447 6.64645L3.29289 4L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z",fill:"#667085"}))};CloseIcon.defaultProps={fill:"none"};const Icons_CloseIcon=CloseIcon;function Tooltip_slicedToArray(arr,i){return function Tooltip_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Tooltip_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function Tooltip_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Tooltip_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tooltip_arrayLikeToArray(o,minLen)}(arr,i)||function Tooltip_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Tooltip_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Tooltip=function Tooltip(props){var _classNames,_props$version=props.version,version=void 0===_props$version?"light":_props$version,_props$position=props.position,position=void 0===_props$position?"top":_props$position,title=props.title,text=props.text,visible=props.visible,children=props.children,classes=Tooltip_styles(props),_useState2=Tooltip_slicedToArray((0,react.useState)(!1),2),isHovered=_useState2[0],setIsHovered=_useState2[1],_useState4=Tooltip_slicedToArray((0,react.useState)(!1),2),isFocused=_useState4[0],setIsFocused=_useState4[1],_useState6=Tooltip_slicedToArray((0,react.useState)(visible),2),isVisible=_useState6[0],setIsVisible=_useState6[1],showTooltip=isHovered||isFocused||isVisible;return react.createElement("div",{className:classes.tooltipWrap},react.createElement("div",{className:classes.tooltipTarget,onMouseEnter:function onMouseEnter(){return setIsHovered(!0)},onMouseLeave:function onMouseLeave(){return setIsHovered(!1)},onFocus:function onFocus(){return setIsFocused(!0)},onBlur:function onBlur(){return setIsFocused(!1)}},children),showTooltip&&react.createElement("div",{role:"tooltip",className:classnames_default()(classes.tooltipContainer,classes[position],classes[version],(_classNames={},_classNames[classes.visible]=visible,_classNames))},react.createElement("div",{className:classes.tooltipBox},visible&&react.createElement("div",{"data-testid":"testCloseBtn",className:classes.closeBtn,onClick:function onClick(){return setIsVisible(!1)}},react.createElement(Icons_CloseIcon,null)),react.createElement("div",{className:classes.title},title),text&&react.createElement("div",{className:classes.text},text))))};const components_Tooltip=Tooltip;function CopyIcon_extends(){return CopyIcon_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},CopyIcon_extends.apply(this,arguments)}Tooltip.defaultProps={version:"light",position:"top",visible:!1};const NpmInstall_CopyIcon=function CopyIcon(props){return react.createElement("svg",CopyIcon_extends({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),react.createElement("path",{d:"M14.5 0H4.5C3.67156 0 3 0.671562 3 1.5V3H1.5C0.671562 3 0 3.67156 0 4.5V14.5C0 15.3284 0.671562 16 1.5 16H11.5C12.3284 16 13 15.3284 13 14.5V13H14.5C15.3284 13 16 12.3284 16 11.5V1.5C16 0.671562 15.3284 0 14.5 0ZM12 14.5C12 14.7756 11.7756 15 11.5 15H1.5C1.22438 15 1 14.7756 1 14.5V4.5C1 4.22437 1.22438 4 1.5 4H3V11.5C3 12.3284 3.67156 13 4.5 13H12V14.5ZM15 11.5C15 11.7756 14.7756 12 14.5 12H4.5C4.22437 12 4 11.7756 4 11.5V1.5C4 1.22438 4.22437 1 4.5 1H14.5C14.7756 1 15 1.22438 15 1.5V11.5Z",fill:"#000"}))},CodeBox_styles=(0,react_jss_esm.QM)({codebox:{border:"1px #000 solid",borderRadius:4,backgroundColor:"#E4E7EC",display:"flex",justifyContent:"space-between",maxWidth:700},children:{marginTop:0,marginBottom:0},copyContainer:{padding:10,cursor:"pointer"}});function CodeBox_slicedToArray(arr,i){return function CodeBox_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function CodeBox_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function CodeBox_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return CodeBox_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return CodeBox_arrayLikeToArray(o,minLen)}(arr,i)||function CodeBox_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function CodeBox_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const NpmInstall_CodeBox=function CodeBox(_ref){var children=_ref.children,_React$useState2=CodeBox_slicedToArray(react.useState("Press to Copy"),2),copyString=_React$useState2[0],setCopyString=_React$useState2[1],classes=CodeBox_styles();return react.createElement("div",{className:classes.codebox},react.createElement("pre",{className:classes.children},children),react.createElement(components_Tooltip,{title:copyString},react.createElement(lib_default(),{text:children.join(""),onCopy:function onCopy(){return setCopyString("Copied!")}},react.createElement("div",{className:classes.copyContainer,onMouseLeave:function onMouseLeave(){return setCopyString("Press to Copy")}},react.createElement(NpmInstall_CopyIcon,{fill:"#000"})))))},NpmInstall_styles=(0,react_jss_esm.QM)({container:{padding:"1rem"},title:{marginTop:10,marginBottom:10}});const addons_NpmInstall=function NpmInstall(_ref){var active=_ref.active,pkg=(0,dist_esm.Ut)("pkg",null),classes=NpmInstall_styles();if(!pkg||!active)return null;var name=pkg.name,version=pkg.version,peerDependencies=pkg.peerDependencies,filteredPeerDependencies=peerDependencies?Object.keys(peerDependencies).filter((function(peerName){return"react"!==peerName&&"react-jss"!==peerName&&"classnames"!==peerName})):[];return react.createElement("div",{className:classes.container},react.createElement("h3",{className:classes.title},"To install package:"),react.createElement(NpmInstall_CodeBox,null,"npm install ",name,"@",version),!!filteredPeerDependencies.length&&react.createElement(react.Fragment,null,react.createElement("h3",{className:classes.title},"⚠️ Make sure that all needed peer dependencies are also installed ⚠️:"),react.createElement(NpmInstall_CodeBox,null,"npm install"," ",filteredPeerDependencies.join(" \\\n"))))};esm.KP.register("npm",(function(){esm.KP.add("npm",{type:types.V.TAB,title:"Npm install",route:function route(_ref){var storyId=_ref.storyId,refId=_ref.refId;return refId?"/npm/".concat(refId,"_").concat(storyId):"/npm/".concat(storyId)},match:function match(_ref2){return"npm"===_ref2.viewMode},render:function render(_ref3){var active=_ref3.active;return react.createElement(addons_NpmInstall,{active})}})}))},24654:()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[531],(()=>(__webpack_exec__(37707),__webpack_exec__(7967),__webpack_exec__(78295),__webpack_exec__(15887),__webpack_exec__(59288),__webpack_exec__(10566),__webpack_exec__(50213),__webpack_exec__(75259),__webpack_exec__(57464),__webpack_exec__(10165),__webpack_exec__(13457),__webpack_exec__(35637),__webpack_exec__(88937))));__webpack_require__.O()}]);