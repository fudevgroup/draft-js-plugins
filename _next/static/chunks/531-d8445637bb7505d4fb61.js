(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[531],{39531:function(e,t,o){"use strict";var n=o(2784),r=o(46670),i=o(96433),s=o(1503),c=o(52367),a=o(4466),l=o.n(a),u=o(13980),p=o.n(u),m=o(24665),d=o(18978),f=o(7913),v=o(52451),h=o.n(v),g=o(6277);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function j(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,E(e,t)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function w(e,t){var o="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(o)return(o=o.call(e)).next.bind(o);if(Array.isArray(e)||(o=function(e,t){if(e){if("string"===typeof e)return b(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?b(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){o&&(e=o);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function D(e){var t=e.theme,o=void 0===t?{}:t,r=e.className,i=e.decoratedText,s=e.emojiInlineText,c=e.children;return n.createElement(s,{className:r,decoratedText:i,theme:o},c)}var P=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).mouseDown=!1,t.onMouseUp=function(){t.mouseDown&&(t.mouseDown=!1,t.props.onEmojiSelect(t.props.emoji))},t.onMouseDown=function(e){e.preventDefault(),t.mouseDown=!0},t.onMouseEnter=function(){t.props.onEmojiFocus(t.props.index)},t}j(t,e);var o=t.prototype;return o.componentDidUpdate=function(){this.mouseDown=!1},o.render=function(){var e=this.props,t=e.emoji,o=e.theme,r=void 0===o?{}:o,i=e.isFocused,s=e.id,c=e.emojiImage,l=i?r.emojiSuggestionsEntryFocused:r.emojiSuggestionsEntry;return n.createElement("div",{className:l,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseEnter:this.onMouseEnter,role:"option",id:s,"aria-selected":i?"true":void 0},n.createElement(c,{emoji:t,theme:r,unicode:(0,a.shortnameToUnicode)(t)}),n.createElement("span",{className:r.emojiSuggestionsEntryText},this.props.emoji))},t}(n.Component);function T(e,t){var o=t.getAnchorKey(),n=t.getAnchorOffset()-1;return function(e,t){var o=String(e),n=Number(t)>>>0,r=o.slice(0,n+1).search(/\S+$/),i=o.slice(n).search(/\s/);return i<0?{word:o.slice(r),begin:r,end:o.length}:{word:o.slice(r,i+n),begin:r,end:i+n}}(e.getCurrentContent().getBlockForKey(o).getText(),n)}var O="INSERT",R="REPLACE";function C(e,t,o){void 0===o&&(o=O);var n,r=(0,a.shortnameToUnicode)(t),i=e.getCurrentContent(),c=i.createEntity("emoji","IMMUTABLE",{emojiUnicode:r}).getLastCreatedEntityKey(),l=e.getSelection(),u=0,p=0;switch(o){case O:var m=s.Modifier.removeRange(i,l,"backward"),d=m.getSelectionAfter();n=s.Modifier.insertText(m,d,r,void 0,c),u=d.getAnchorOffset();var f=d.getAnchorKey();p=i.getBlockForKey(f).getLength();break;case R:var v=T(e,l),h=v.begin,g=v.end,S=l.merge({anchorOffset:h,focusOffset:g});n=s.Modifier.replaceText(i,S,r,void 0,c),u=g;var j=S.getAnchorKey();p=i.getBlockForKey(j).getLength();break;default:throw new Error('Unidentified value of "mode"')}u===p&&(n=s.Modifier.insertText(n,n.getSelectionAfter()," "));var E=s.EditorState.push(e,n,"insert-fragment");return s.EditorState.forceSelection(E,n.getSelectionAfter())}var k=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={isActive:!1,focusedOptionIndex:0},t.popover=void 0,t.key=void 0,t.filteredEmojis=void 0,t.activeOffsetKey=void 0,t.lastSelectionIsInsideWord=void 0,t.lastSearchValue=void 0,t.onEditorStateChange=function(e){var o=t.props.store.getAllSearches();if(0===o.size)return e;var n=function(){return t.props.store.resetEscapedSearch(),t.closeDropdown(),e},r=e.getSelection(),i=r.getAnchorKey(),s=r.getAnchorOffset();if(!r.isCollapsed()||!r.getHasFocus())return n();var a=o.map((function(e){return c.ZP.decodeOffsetKey(e)})).filter((function(e){return e.blockKey===i})).map((function(t){return e.getBlockTree(t.blockKey).getIn([t.decoratorKey,"leaves",t.leafKey])}));if(a.every((function(e){return void 0===e})))return n();var l=e.getCurrentContent().getPlainText(),u=a.filter((function(e){return void 0!==e})).map((function(e){var t=e.start,o=e.end;return 0===t&&1===s&&":"!==l.charAt(s)&&/(\s|^):[\w]*/.test(l)&&s<=o||s>t+1&&s<=o}));return u.every((function(e){return!1===e}))?n():(t.activeOffsetKey=u.filter((function(e){return!0===e})).keySeq().first(),t.onSearchChange(e,r),t.props.store.isEscaped(t.activeOffsetKey)||t.props.store.resetEscapedSearch(),t.state.isActive||t.props.store.isEscaped(t.activeOffsetKey)||t.openDropdown(),void 0!==t.lastSelectionIsInsideWord&&u.equals(t.lastSelectionIsInsideWord)||t.setState({focusedOptionIndex:0}),t.lastSelectionIsInsideWord=u,e)},t.onSearchChange=function(e,o){var n=T(e,o).word,r=n.substring(1,n.length);t.lastSearchValue!==r&&"function"===typeof t.props.onSearchChange&&(t.lastSearchValue=r,t.props.onSearchChange({value:r}))},t.onDownArrow=function(e){e.preventDefault();var o=t.state.focusedOptionIndex+1;t.onEmojiFocus(o>=t.filteredEmojis.size?0:o)},t.onTab=function(e){e.preventDefault(),t.commitSelection()},t.onUpArrow=function(e){if(e.preventDefault(),t.filteredEmojis&&t.filteredEmojis.size>0){var o=t.state.focusedOptionIndex-1;t.onEmojiFocus(Math.max(o,0))}},t.onEscape=function(e){e.preventDefault();var o=t.lastSelectionIsInsideWord.filter((function(e){return!0===e})).keySeq().first();t.props.store.escapeSearch(o),t.closeDropdown(),t.props.store.setEditorState(t.props.store.getEditorState())},t.onEmojiSelect=function(e){t.closeDropdown();var o=C(t.props.store.getEditorState(),e,R);t.props.store.setEditorState(o)},t.onEmojiFocus=function(e){var o="emoji-option-"+t.key+"-"+e;t.props.ariaProps.ariaActiveDescendantID=o,t.setState({focusedOptionIndex:e}),t.props.store.setEditorState(t.props.store.getEditorState())},t.getEmojisForFilter=function(){var e=t.props.store.getEditorState().getSelection(),o=T(t.props.store.getEditorState(),e).word,n=o.substring(1,o.length).toLowerCase(),r=t.props.shortNames.filter((function(e){return!n||e.indexOf(n)>-1})),i=r.size<9?r.size:9;return r.setSize(i)},t.commitSelection=function(){return t.onEmojiSelect(t.filteredEmojis.get(t.state.focusedOptionIndex)),"handled"},t.openDropdown=function(){t.props.callbacks.handleReturn=t.commitSelection,t.props.callbacks.keyBindingFn=function(e){40===e.keyCode&&t.onDownArrow(e),38===e.keyCode&&t.onUpArrow(e),27===e.keyCode&&t.onEscape(e),9===e.keyCode&&t.onTab(e)};var e="emoji-option-"+t.key+"-"+t.state.focusedOptionIndex;t.props.ariaProps.ariaActiveDescendantID=e,t.props.ariaProps.ariaOwneeID="emojis-list-"+t.key,t.props.ariaProps.ariaHasPopup="true",t.props.ariaProps.ariaExpanded=!0,t.setState({isActive:!0}),t.props.onOpen&&t.props.onOpen()},t.closeDropdown=function(){t.props.callbacks.keyBindingFn=void 0,t.props.callbacks.handleReturn=void 0,t.props.ariaProps.ariaHasPopup="false",t.props.ariaProps.ariaExpanded=!1,t.props.ariaProps.ariaActiveDescendantID=void 0,t.props.ariaProps.ariaOwneeID=void 0,t.setState({isActive:!1}),t.props.onClose&&t.props.onClose()},t}j(t,e);var o=t.prototype;return o.UNSAFE_componentWillMount=function(){this.key=(0,s.genKey)(),this.props.callbacks.onChange=this.onEditorStateChange},o.componentDidUpdate=function(){if(this.popover&&this.filteredEmojis){var e=this.filteredEmojis.size;e>0&&this.state.focusedOptionIndex>=e&&this.setState({focusedOptionIndex:e-1}),e<=0&&this.closeDropdown();var t=this.props.store.getPortalClientRect(this.activeOffsetKey);if(t)for(var o=this.props.positionSuggestions({decoratorRect:t,props:this.props,state:this.state,filteredEmojis:this.filteredEmojis,popover:this.popover}),n=0,r=Object.entries(o);n<r.length;n++){var i=r[n],s=i[0],c=i[1];this.popover.style[s]=c}else this.closeDropdown()}},o.componentWillUnmount=function(){this.props.callbacks.onChange=void 0},o.render=function(){var e=this;if(!this.state.isActive)return null;this.filteredEmojis=this.getEmojisForFilter();var t=this.props,o=t.theme,r=void 0===o?{}:o;t.ariaProps,t.callbacks,t.onClose,t.onOpen,t.onSearchChange,t.positionSuggestions,t.shortNames,t.store;var i=t.emojiImage,s=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(t,["theme","ariaProps","callbacks","onClose","onOpen","onSearchChange","positionSuggestions","shortNames","store","emojiImage"]);return n.createElement("div",S({},s,{className:r.emojiSuggestions,role:"listbox",id:"emojis-list-"+this.key,ref:function(t){e.popover=t}}),this.filteredEmojis.map((function(t,o){return n.createElement(P,{key:t,onEmojiSelect:e.onEmojiSelect,onEmojiFocus:e.onEmojiFocus,isFocused:e.state.focusedOptionIndex===o,emoji:t,index:o,id:"emoji-option-"+e.key+"-"+o,theme:r,emojiImage:i})})).toJS())},t}(n.Component);function M(e){var t=e.children,o=e.store,r=e.offsetKey,i=(0,n.useRef)(null),s=(0,n.useCallback)((function(){o.updatePortalClientRect(r,(function(){var e;return null==(e=i.current)?void 0:e.getBoundingClientRect()}))}),[o,r]);return(0,n.useEffect)((function(){return o.register(r),s(),o.setEditorState(o.getEditorState()),function(){o.unregister(r)}}),[s,o]),n.createElement("span",{ref:i},t)}var I=[{title:"People",icon:n.createElement(d.vtP,{style:{verticalAlign:""}}),categories:["people"]},{title:"Nature",icon:n.createElement(d.IHQ,{style:{verticalAlign:""}}),categories:["nature"]},{title:"Food & Drink",icon:n.createElement(d.yQ2,{style:{verticalAlign:""}}),categories:["food"]},{title:"Activity",icon:n.createElement(d.QDI,{style:{verticalAlign:""}}),categories:["activity"]},{title:"Travel & Places",icon:n.createElement(d.NqP,{style:{verticalAlign:""}}),categories:["travel"]},{title:"Objects",icon:n.createElement(d.Z3q,{style:{verticalAlign:""}}),categories:["objects"]},{title:"Symbols",icon:n.createElement(d.$0H,{style:{verticalAlign:""}}),categories:["symbols"]},{title:"Flags",icon:n.createElement(d.wQ2,{style:{verticalAlign:""}}),categories:["flags"]}],A=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={isFocused:!1},t.button=void 0,t.onMouseUp=function(){t.mouseDown&&(t.mouseDown=!1,t.props.onEmojiSelect(t.props.emoji))},t.onMouseDown=function(){t.mouseDown=!0,t.props.onEmojiMouseDown&&t.props.onEmojiMouseDown(y(t),t.props.toneSet||null)},t.onMouseEnter=function(){t.props.checkMouseDown()||t.setState({isFocused:!0})},t.onMouseLeave=function(){t.props.checkMouseDown()||t.setState({isFocused:!1})},t.deselect=function(){t.setState({isFocused:!1})},t.mouseDown=t.props.mouseDown,t}return j(t,e),t.prototype.render=function(){var e=this,t=this.props,o=t.theme,r=void 0===o?{}:o,i=t.emoji,s=t.emojiImage,c=this.state.isFocused;return n.createElement("button",{type:"button",className:c?r.emojiSelectPopoverEntryFocused:r.emojiSelectPopoverEntry,onMouseDown:this.onMouseDown,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onMouseUp:this.onMouseUp,ref:function(t){e.button=t}},n.createElement(s,{emoji:i,theme:r,unicode:(0,a.shortnameToUnicode)(i)}))},t}(n.Component);A.propTypes={theme:p().object.isRequired,emoji:p().string.isRequired,mouseDown:p().bool,checkMouseDown:p().func.isRequired,onEmojiSelect:p().func.isRequired,onEmojiMouseDown:p().func},A.defaultProps={mouseDown:!1};var q=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={hasRenderedEmoji:!1},t.container=void 0,t.list=void 0,t.shouldComponentUpdate=function(e){return!t.state.hasRenderedEmoji&&e.isActive},t.renderCategory=function(e){var o=t.props,r=o.theme,i=void 0===r?{}:r,s=o.emojis,c=o.checkMouseDown,a=o.onEmojiSelect,l=o.onEmojiMouseDown,u=o.emojiImage,p=o.isActive,m=s[e];return Object.keys(m).map((function(e){return n.createElement("li",{key:m[e][0],className:i.emojiSelectPopoverGroupItem},p&&n.createElement(A,{emoji:m[e][0],theme:i,toneSet:m[e].length>1?m[e]:null,checkMouseDown:c,onEmojiSelect:a,onEmojiMouseDown:l,emojiImage:u}))}))},t}j(t,e);var o=t.prototype;return o.componentDidUpdate=function(){this.props.isActive&&this.setState({hasRenderedEmoji:!0})},o.render=function(){var e=this,t=this.props,o=t.theme,r=void 0===o?{}:o,i=t.group;return n.createElement("section",{className:r.emojiSelectPopoverGroup,ref:function(t){e.container=t}},n.createElement("h3",{className:r.emojiSelectPopoverGroupTitle},i.title),n.createElement("ul",{className:r.emojiSelectPopoverGroupList,ref:function(t){e.list=t}},i.categories.map((function(t){return e.renderCategory(t)}))))},t}(n.Component);q.propTypes={theme:p().object.isRequired,group:p().object.isRequired,emojis:p().object.isRequired,checkMouseDown:p().func.isRequired,onEmojiSelect:p().func.isRequired,onEmojiMouseDown:p().func.isRequired,isActive:p().bool};var x=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={activeGroup:0},t.scrollbars=void 0,t.container=void 0,t.onScroll=function(e){var o=t.props,n=o.groups,r=o.onGroupScroll,i=0;n.forEach((function(o,n){e.scrollTop>=o.top&&(i=n,t.setState({activeGroup:i}))})),r(i)},t.onWheel=function(e){var o=t.scrollbars.getValues(),n=o.clientHeight,r=o.scrollHeight,i=o.scrollTop;e.deltaY>0?i<r-n-e.deltaY?e.stopPropagation():t.scrollbars.scrollToBottom():i>-e.deltaY?e.stopPropagation():t.scrollbars.scrollTop(0)},t.scrollToGroup=function(e){var o=t.props.groups;t.scrollbars.scrollTop(o[e].topList)},t.calculateBounds=function(){var e=t.scrollbars.getValues(),o=e.scrollHeight,n=e.scrollTop;if(o){var r=t.props.groups,i=t.container.getBoundingClientRect().top-n;r.forEach((function(e){var t=e.instance.container.getBoundingClientRect().top,o=e.instance.list.getBoundingClientRect().top;e.top=t-i,e.topList=o-i}))}},t.isRenderedGroupActive=function(e){var o=t.state.activeGroup,n=t.props.isOpen;return o===e||n&&o+1===e},t}j(t,e);var o=t.prototype;return o.componentDidMount=function(){this.calculateBounds()},o.componentDidUpdate=function(){this.calculateBounds()},o.render=function(){var e=this,t=this.props,o=t.theme,r=void 0===o?{}:o,i=t.groups,s=void 0===i?[]:i,c=t.emojis,a=t.checkMouseDown,l=t.onEmojiSelect,u=t.onEmojiMouseDown,p=t.emojiImage;return n.createElement("div",{className:r.emojiSelectPopoverGroups,onWheel:this.onWheel,ref:function(t){e.container=t}},n.createElement(f.$B,{className:r.emojiSelectPopoverScrollbarOuter,onScrollFrame:this.onScroll,renderTrackVertical:function(){return n.createElement("div",{className:r.emojiSelectPopoverScrollbar})},renderThumbVertical:function(e){return n.createElement("div",S({},e,{className:r.emojiSelectPopoverScrollbarThumb}))},ref:function(t){e.scrollbars=t}},s.map((function(t,o){return n.createElement(q,{key:"group#"+o+"["+t.categories.join(",")+"]",theme:r,group:t,emojis:c,checkMouseDown:a,onEmojiSelect:l,onEmojiMouseDown:u,ref:function(e){t.instance=e},emojiImage:p,isActive:e.isRenderedGroupActive(o)})}))))},t}(n.Component);x.propTypes={theme:p().object.isRequired,groups:p().arrayOf(p().object).isRequired,emojis:p().object.isRequired,checkMouseDown:p().func.isRequired,onEmojiSelect:p().func.isRequired,onEmojiMouseDown:p().func.isRequired,onGroupScroll:p().func.isRequired,isOpen:p().bool};var N=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).mouseDown=!1,t.onMouseDown=function(){t.mouseDown=!0},t.onMouseUp=function(){t.mouseDown&&(t.mouseDown=!1,t.props.onGroupSelect(t.props.groupIndex))},t}return j(t,e),t.prototype.render=function(){var e=this.props,t=e.theme,o=void 0===t?{}:t,r=e.icon,i=e.isActive;return n.createElement("button",{className:i?o.emojiSelectPopoverNavEntryActive:o.emojiSelectPopoverNavEntry,onMouseDown:this.onMouseDown,type:"button",onMouseUp:this.onMouseUp},r)},t}(n.Component);N.propTypes={theme:p().object.isRequired,icon:p().oneOfType([p().element,p().string]).isRequired,groupIndex:p().number.isRequired,isActive:p().bool,onGroupSelect:p().func.isRequired},N.defaultProps={isActive:!1};var B=function(e){var t=e.theme,o=void 0===t?{}:t,r=e.groups,i=e.activeGroup,s=e.onGroupSelect;return n.createElement("ul",{className:o.emojiSelectPopoverNav},r.map((function(e,t){return n.createElement("li",{key:"nav-group#"+t+"["+e.categories.join(",")+"]",className:o.emojiSelectPopoverNavItem},n.createElement(N,{theme:o,groupIndex:t,isActive:t===i,icon:e.icon,onGroupSelect:s}))})))};B.propTypes={theme:p().object.isRequired,groups:p().arrayOf(p().object).isRequired,activeGroup:p().number.isRequired,onGroupSelect:p().func.isRequired};var G=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).tones=void 0,t.setCorrectPosition=function(e,o){var n=t.tones.offsetWidth,r=t.tones.offsetHeight,i={marginLeft:0,left:o.left+o.width/2-n/2,bottom:o.bottom+o.height};i.left<e.left?(delete i.marginLeft,i.left=e.left):i.left>e.left+e.width-n&&(delete i.marginLeft,delete i.left,i.right=e.right),i.bottom>e.bottom+e.height-r&&(delete i.bottom,i.top=o.top+o.height),i=h().object(i);for(var s=0,c=Object.entries(i);s<c.length;s++){var a=c[s],l=a[0],u=a[1];t.tones.style[l]=u}},t}j(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=this.props.bounds,t=e.areaBounds,o=e.entryBounds;this.setCorrectPosition(t,o)},o.render=function(){var e=this,t=this.props,o=t.theme,r=void 0===o?{}:o,i=t.toneSet,s=void 0===i?[]:i,c=t.onEmojiSelect,a=t.emojiImage;return n.createElement("div",{className:r.emojiSelectPopoverToneSelect},n.createElement("ul",{className:r.emojiSelectPopoverToneSelectList,ref:function(t){e.tones=t}},(s||[]).map((function(e){return n.createElement("li",{key:"tone-select("+e+")",className:r.emojiSelectPopoverToneSelectItem},n.createElement(A,{emoji:e,theme:r,checkMouseDown:function(){return!1},onEmojiSelect:c,mouseDown:!0,emojiImage:a}))}))))},t}(n.Component);G.propTypes={theme:p().object.isRequired,bounds:p().shape({areaBounds:p().shape({left:p().number.isRequired,right:p().number.isRequired,top:p().number.isRequired,bottom:p().number.isRequired,width:p().number.isRequired,height:p().number.isRequired}).isRequired,entryBounds:p().shape({left:p().number.isRequired,right:p().number.isRequired,top:p().number.isRequired,bottom:p().number.isRequired,width:p().number.isRequired,height:p().number.isRequired}).isRequired}).isRequired,onEmojiSelect:p().func.isRequired};var L=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).activeEmoji=null,t.toneSelectTimer=null,t.mouseDown=!1,t.toneSet=null,t.container=void 0,t.groupsElement=void 0,t.state={activeGroup:0,showToneSelect:!1},t.onMouseDown=function(){t.mouseDown=!0},t.onMouseUp=function(){t.mouseDown=!1,t.activeEmoji&&(t.activeEmoji.deselect(),t.activeEmoji=null,t.state.showToneSelect?t.closeToneSelect():t.toneSelectTimer&&(clearTimeout(t.toneSelectTimer),t.toneSelectTimer=null))},t.onEmojiSelect=function(e){var o=C(t.props.store.getEditorState(),e);t.props.store.setEditorState(o),t.props.onEmojiSelect()},t.onEmojiMouseDown=function(e,o){t.activeEmoji=e,o&&t.openToneSelectWithTimer(o)},t.onGroupSelect=function(e){t.groupsElement.scrollToGroup(e)},t.onGroupScroll=function(e){e!==t.state.activeGroup&&t.setState({activeGroup:e})},t.openToneSelectWithTimer=function(e){t.toneSelectTimer=setTimeout((function(){t.toneSelectTimer=null,t.openToneSelect(e)}),t.props.toneSelectOpenDelay)},t.openToneSelect=function(e){t.toneSet=e,t.setState({showToneSelect:!0})},t.closeToneSelect=function(){t.toneSet=[],t.setState({showToneSelect:!1})},t.checkMouseDown=function(){return t.mouseDown},t.renderToneSelect=function(){if(t.state.showToneSelect){var e=t.props,o=e.theme,r=void 0===o?{}:o,i=e.emojiImage,s=t.container.getBoundingClientRect(),c=t.groupsElement.container.getBoundingClientRect(),a=t.activeEmoji.button.getBoundingClientRect(),l={areaBounds:{left:c.left-s.left,right:s.right-c.right,top:c.top-s.top,bottom:s.bottom-c.bottom,width:c.width,height:c.width},entryBounds:{left:a.left-s.left,right:s.right-a.right,top:a.top-s.top,bottom:s.bottom-a.bottom,width:a.width,height:a.width}};return n.createElement(G,{theme:r,bounds:l,toneSet:t.toneSet,onEmojiSelect:t.onEmojiSelect,emojiImage:i})}return null},t}j(t,e);var o=t.prototype;return o.componentDidMount=function(){window.addEventListener("mouseup",this.onMouseUp)},o.componentWillUnmount=function(){window.removeEventListener("mouseup",this.onMouseUp)},o.render=function(){var e=this,t=this.props,o=t.theme,r=void 0===o?{}:o,i=t.groups,s=void 0===i?[]:i,c=t.emojis,a=t.isOpen,l=void 0!==a&&a,u=t.emojiImage,p=l?r.emojiSelectPopover:r.emojiSelectPopoverClosed,m=this.state.activeGroup;return n.createElement("div",{className:p,onMouseDown:this.onMouseDown,ref:function(t){e.container=t}},l&&n.createElement(n.Fragment,null,n.createElement("h3",{className:r.emojiSelectPopoverTitle},s[m].title),n.createElement(x,{theme:r,groups:s,emojis:c,checkMouseDown:this.checkMouseDown,onEmojiSelect:this.onEmojiSelect,onEmojiMouseDown:this.onEmojiMouseDown,onGroupScroll:this.onGroupScroll,ref:function(t){e.groupsElement=t},emojiImage:u,isOpen:l}),n.createElement(B,{theme:r,groups:s,activeGroup:m,onGroupSelect:this.onGroupSelect}),this.renderToneSelect()))},t}(n.Component);L.propTypes={theme:p().object.isRequired,store:p().object.isRequired,groups:p().arrayOf(p().object).isRequired,emojis:p().object.isRequired,toneSelectOpenDelay:p().number.isRequired,isOpen:p().bool},L.defaultProps={isOpen:!1};var F=function(){for(var e,t={},o=w(m);!(e=o()).done;){var n=e.value,r=(0,a.toShort)(n.unicode),i=a.emojiList[r];if(i&&(t[i.category]||(t[i.category]={}),t[i.category][r]=[r],n.skins))for(var s,c=w(n.skins);!(s=c()).done;){var l=s.value,u=(0,a.toShort)(l.unicode);a.emojiList[u]&&t[i.category][r].push(u)}}return t}(),U=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={isOpen:!1},t.onClick=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},t.onButtonMouseUp=function(){return t.state.isOpen?t.closePopover():t.openPopover()},t.openPopover=function(){t.state.isOpen||t.setState({isOpen:!0}),t.props.onOpen&&t.props.onOpen()},t.closePopover=function(){t.state.isOpen&&t.setState({isOpen:!1}),t.props.onClose&&t.props.onClose()},t}j(t,e);var o=t.prototype;return o.componentDidMount=function(){document.addEventListener("click",this.closePopover)},o.componentWillUnmount=function(){document.removeEventListener("click",this.closePopover)},o.render=function(){var e=this,t=this.props,o=t.theme,r=void 0===o?{}:o,i=t.store,s=t.selectGroups,c=t.selectButtonContent,a=t.toneSelectOpenDelay,l=t.emojiImage,u=t.closeOnEmojiSelect,p=this.state.isOpen?r.emojiSelectButtonPressed:r.emojiSelectButton;return n.createElement("div",{className:r.emojiSelect,onClick:this.onClick},n.createElement("button",{className:p,onMouseUp:this.onButtonMouseUp,type:"button"},c),n.createElement(L,{theme:r,store:i,groups:s,emojis:F,toneSelectOpenDelay:a,isOpen:this.state.isOpen,emojiImage:l,onEmojiSelect:function(){u&&e.closePopover()}}))},t}(n.Component);U.propTypes={theme:p().object.isRequired,store:p().object.isRequired,selectGroups:p().arrayOf(p().shape({title:p().string.isRequired,icon:p().oneOfType([p().element,p().string]).isRequired,categories:p().arrayOf(p().oneOf(Object.keys(F))).isRequired})),selectButtonContent:p().oneOfType([p().element,p().string]),toneSelectOpenDelay:p().number},U.defaultProps={selectButtonContent:"\u263a",selectGroups:I,toneSelectOpenDelay:500};var K=l().escapeRegExp(l().unicodeCharRegex()),W=new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|("+K+")","gi"),_=function(e,t){(0,c.$m)(W,e,t)},z=/(\s|^):[\w]*:?/g,H=function(e,t){(0,c.$m)(z,e,t)},V=new RegExp(l().regAscii,"g");function $(e){return e?"static"!==window.getComputedStyle(e).getPropertyValue("position")?e:$(e.parentElement):null}function Z(e){var t,o=e.decoratorRect,n=e.popover,r=e.state,i=e.filteredEmojis,s=$(n.parentElement);if(s){var c=s.getBoundingClientRect();t={scrollLeft:s.scrollLeft,scrollTop:s.scrollTop,left:o.left-c.left,top:o.top-c.top}}else t={scrollLeft:window.pageXOffset||document.documentElement.scrollLeft,scrollTop:window.pageYOffset||document.documentElement.scrollTop,left:o.left,top:o.top};var a,l,u=t.left+t.scrollLeft,p=t.top+t.scrollTop;return r.isActive&&(i.size>0?(a="scale(1)",l="all 0.25s cubic-bezier(.3,1.2,.2,1)"):(a="scale(0)",l="all 0.35s cubic-bezier(.3,1,.2,1)")),{left:u+"px",top:p+"px",transform:a,transformOrigin:"1em 0%",transition:l}}var Q={setPriorityList:function(e){this.list=function(e){var t={};for(var o in l().emojiList)e.hasOwnProperty(o)||(t[o]=[l().emojiList[o].uc_base]);return S({},e,t)}(e)},list:{}};Q.setPriorityList({":thumbsup:":["1f44d"],":smile:":["1f604"],":heart:":["2764-fe0f","2764"],":ok_hand:":["1f44c"],":joy:":["1f602"],":tada:":["1f389"],":see_no_evil:":["1f648"],":raised_hands:":["1f64c"],":100:":["1f4af"]});var Y={emoji:"e1g1wugw",emojiSuggestions:"esyutjr",emojiSuggestionsEntry:"e1eijkox",emojiSuggestionsEntryFocused:"e1adbvmt",emojiSuggestionsEntryText:"e13wg9oj",emojiSuggestionsEntryIcon:"e1w5jrn9",emojiSelect:"e183m4hm",emojiSelectButton:"e8k2yoa",emojiSelectButtonPressed:"e13wqaj6",emojiSelectPopoverScrollbarOuter:"ec6zxdw",emojiSelectPopover:"ejr02pv",emojiSelectPopoverClosed:"e6amujp",emojiSelectPopoverTitle:"e16zneum",emojiSelectPopoverGroups:"e1kg9q3n",emojiSelectPopoverGroup:"e1m341vm",emojiSelectPopoverGroupTitle:"e19xmvdb",emojiSelectPopoverGroupList:"e13arc1",emojiSelectPopoverGroupItem:"e6nwac2",emojiSelectPopoverToneSelect:"e3h4qvg",emojiSelectPopoverToneSelectList:"e1129lxj",emojiSelectPopoverToneSelectItem:"eug7aee",emojiSelectPopoverEntry:"eyoq5wq",emojiSelectPopoverEntryFocused:"e1eigyu0",emojiSelectPopoverEntryIcon:"e11mkpma",emojiSelectPopoverNav:"e1cibj9i",emojiSelectPopoverNavItem:"e2bpndj",emojiSelectPopoverNavEntry:"e1qma4nk",emojiSelectPopoverNavEntryActive:"e1q5rpho",emojiSelectPopoverScrollbar:"e17si09n",emojiSelectPopoverScrollbarThumb:"e1duapnp"};function J(e){var t,o=e.emoji,r=e.theme,i=(0,a.toImage)(o),s=null==(t=/src="(.*)"/.exec(i))?void 0:t[1];return n.createElement("img",{src:s,className:r.emojiSelectPopoverEntryIcon,title:o,draggable:!1,role:"presentation"})}function X(e){var t=e.unicode,o=e.emoji;return n.createElement("span",{title:o},t)}function ee(e){var t=e.decoratedText,o=e.children;return n.createElement("span",{title:(0,a.toShort)(t)},o)}function te(e){var t,o=e.decoratedText,r=e.theme,i=e.children,s=e.className,c=(0,a.toShort)(o),l=(0,a.shortnameToImage)(c),u=null==(t=/src="(.*)"/.exec(l))?void 0:t[1];if(!u)return n.createElement(ee,{decoratedText:o,theme:r},i);var p="url("+u+")",m=(0,g.Z)(r.emoji,s);return n.createElement("span",{className:m,title:c,style:{backgroundImage:p}},i)}t.Z=function(e){void 0===e&&(e={});var t,o={keyBindingFn:void 0,handleKeyCommand:void 0,handleReturn:void 0,onChange:void 0},a={ariaHasPopup:"false",ariaExpanded:!1,ariaOwneeID:void 0,ariaActiveDescendantID:void 0},l=(0,r.Map)(),u=(0,r.Map)(),p={getEditorState:void 0,setEditorState:void 0,getPortalClientRect:function(e){var t;return null==(t=u.get(e))?void 0:t()},getAllSearches:function(){return l},isEscaped:function(e){return t===e},escapeSearch:function(e){t=e},resetEscapedSearch:function(){t=void 0},register:function(e){l=l.set(e,e)},updatePortalClientRect:function(e,t){u=u.set(e,t)},unregister:function(e){l=l.delete(e),u=u.delete(e)}},m=e,d=m.theme,f=void 0===d?Y:d,v=m.positionSuggestions,h=void 0===v?Z:v,g=m.priorityList,j=m.selectGroups,E=m.selectButtonContent,y=m.toneSelectOpenDelay,b=m.useNativeArt,w=m.emojiImage,P=void 0===w?b?X:J:w,T=m.emojiInlineText,O=void 0===T?b?ee:te:T;g&&Q.setPriorityList(g);var R={ariaProps:a,callbacks:o,theme:f,store:p,positionSuggestions:h,shortNames:(0,r.List)((0,i.Z)(Q.list)),emojiImage:P},C={theme:f,store:p,selectGroups:j,selectButtonContent:E,toneSelectOpenDelay:y,emojiImage:P};return{EmojiSuggestions:function(e){return n.createElement(k,S({},e,R))},EmojiSelect:function(e){return n.createElement(U,S({},e,C))},decorators:[{strategy:_,component:function(e){return n.createElement(D,S({},e,{theme:f,emojiInlineText:O}))}},{strategy:H,component:function(e){return n.createElement(M,S({},e,{store:p}))}}],getAccessibilityProps:function(){return{role:"combobox",ariaAutoComplete:"list",ariaHasPopup:a.ariaHasPopup,ariaExpanded:a.ariaExpanded,ariaActiveDescendantID:a.ariaActiveDescendantID,ariaOwneeID:a.ariaOwneeID}},initialize:function(e){var t=e.getEditorState,o=e.setEditorState;p.getEditorState=t,p.setEditorState=o},keyBindingFn:function(e){return o.keyBindingFn&&o.keyBindingFn(e)},handleReturn:function(e){return o.handleReturn&&o.handleReturn(e)},onChange:function(e){var t=function(e){var t=e.getCurrentContent(),o=t.getBlockMap(),n=t;return o.forEach((function(e){if(e){var t=e.getText();(0,c.$m)(V,e,(function(o,r){var i=e.getEntityAt(o);if(i){var c=n.getEntity(i);if(c&&"emoji"===c.getType())return}var a=s.SelectionState.createEmpty(e.getKey()).set("anchorOffset",o).set("focusOffset",r),l=t.substring(o,r),u=n.createEntity("emoji","IMMUTABLE",{emojiUnicode:l}).getLastCreatedEntityKey();n=s.Modifier.replaceText(n,a,l,void 0,u)}))}})),n.equals(t)?e:s.EditorState.push(e,n,"change-block-data")}(e);if(!t.getCurrentContent().equals(e.getCurrentContent())){var n=e.getSelection();t=s.EditorState.forceSelection(t,n)}return o.onChange?o.onChange(t):t}}}}}]);