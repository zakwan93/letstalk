(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"./webpack/assets/javascripts/platform/scenes/project/index.js":function(t,e,r){"use strict";r.r(e);var o=r("./node_modules/prop-types/index.js"),n=r.n(o),s=r("./node_modules/react/index.js"),a=r.n(s),i=r("./node_modules/react-redux/es/index.js"),c=r("./webpack/assets/javascripts/libs/userAttributes.js"),p=r("./webpack/assets/javascripts/platform/state/entities/contentItemProgresses/selectors.js"),u=r("./webpack/assets/javascripts/platform/components/projects.js");function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){function ProjectPage(){var t,e;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ProjectPage);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=_possibleConstructorReturn(this,(t=_getPrototypeOf(ProjectPage)).call.apply(t,[this].concat(o)))).completeProject=function(){var t=e.props,r=t.showNextContentInterstitial,o=t.next;r?r():o()},e}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}(ProjectPage,s["Component"]),function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(ProjectPage,[{key:"track",value:function track(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.props,r=e.currentContentItem,o=e.trackVisit,n=e.currentCourse;t.currentContentItem!==r&&o({legacyData:{skill:n?n.slug:"",curriculum:n?n.slug:"",project:r.slug}})}},{key:"componentDidMount",value:function componentDidMount(){this.track()}},{key:"componentDidUpdate",value:function componentDidUpdate(t){this.track(t)}},{key:"render",value:function render(){var t=this.props.locationParams,e=!!t.course&&"react".match(t.course);return this.props.currentContentItemProgress?a.a.createElement("div",null,a.a.createElement(u.a,{currentProject:this.props.currentContentItem,currentProjectProgress:this.props.currentContentItemProgress,courseInMaintenanace:this.props.platformPage.courseInMaintenanace,profileImage:this.props.platformPage.profileImage,exitPaths:this.props.exitPaths,prerender:this.props.prerender,revision:this.props.platformPage.revision,hasButterbar:this.props.platformPage.hasButterbar,interstitialItems:this.props.platformPage.interstitialItems,locationParams:this.props.locationParams,locationQuery:this.props.locationQuery,proData:this.props.proData,redirectToContainerCourse:this.props.redirectToContainerCourse,isLintingDisabled:e,course:this.props.currentCourse,programSlug:this.props.program?this.props.program.slug:null,completeProject:this.completeProject})):null}}]),ProjectPage}();l.propTypes={platformPage:n.a.object.isRequired,currentContentItem:n.a.object,currentContentItemProgress:n.a.object,prerender:n.a.object,currentCourse:n.a.object,program:n.a.object,locationParams:n.a.object,locationQuery:n.a.object,proData:n.a.object,exitPaths:n.a.object,hasNextContent:n.a.bool,showNextContentInterstitial:n.a.func,redirectToContainerCourse:n.a.func,isPro:n.a.bool,next:n.a.func,trackVisit:n.a.func},e.default=Object(i.b)(function mapStateToProps(t,e){var r=e.currentContentItem;return{currentContentItemProgress:Object(p.a)(t,r),isPro:c.a.isPro()}})(l)}}]);
//# sourceMappingURL=f7d4bcde3d770033bfde-84275d2b47e78cbd829a.js.map