(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"./webpack/assets/javascripts/libs/intercom/index.js":function(e,t,r){"use strict";r.d(t,"b",function(){return trackEvent});r("./node_modules/lodash/without.js"),r("./node_modules/lodash/isFunction.js"),r("./webpack/assets/javascripts/libs/logging/logger.js");function trackEvent(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.Intercom&&window.Intercom("trackEvent",e,t)}function getIntercom(){return window.Intercom}t.a=getIntercom()},"./webpack/assets/javascripts/platform/scenes/courseContentItem/index.js":function(e,t,r){"use strict";r.r(t);var o=r("./node_modules/lodash/get.js"),n=r.n(o),s=r("./node_modules/prop-types/index.js"),a=r.n(s),i=r("./node_modules/react/index.js"),c=r.n(i),u=r("./node_modules/redux-first-router/dist/index.js"),p=r("./node_modules/react-redux/es/index.js"),l=r("./webpack/assets/javascripts/state/modals/actions.js"),f=r("./webpack/assets/javascripts/libs/userAttributes.js"),d=r("./webpack/assets/javascripts/libs/intercom/index.js"),b=r("./webpack/assets/javascripts/libs/urlHelpers.js"),m=r("./webpack/assets/javascripts/platform/state/selectors.js"),j=r("./webpack/assets/javascripts/platform/state/course/selectors.js"),h=r("./webpack/assets/javascripts/portal/state/currentUser/selectors.js"),y=r("./webpack/assets/javascripts/portal/state/payment/selectors.js"),w=r("./webpack/assets/javascripts/platform/state/tracking/actions.js"),C=r("./webpack/assets/javascripts/platform/state/location/actions.js"),v=r("./node_modules/reselect/lib/index.js"),g=Object(v.createSelector)(function selectProExclusive(e){return e.proExclusive||{}},function(e){return e.courses||[]}),P=Object(v.createSelector)(g,function(e){return new Set(e)}),_=r("./webpack/assets/javascripts/platform/routes.js"),O=r("./webpack/assets/javascripts/platform/state/features/selectors.js"),I=r("./webpack/assets/javascripts/components/TrialBannerHome/LeTrialBanner/index.js"),x=r("./webpack/assets/javascripts/platform/layouts/PlatformLoading/index.js");function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){_defineProperty(e,t,r[t])})}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var k=function handleProgramRedirect(e){var t=e.programId,r=e.programContentId;window.location=Object(b.B)(t,r)},T=function getRedirectQueryParams(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{programId:e.program_id,programContentId:e.program_content_id}},E={showModal:l.c,nextContentItemRequested:l.b,trackVisit:w.a},S=function(e){function CourseContentItem(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CourseContentItem);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(CourseContentItem)).call.apply(e,[this].concat(o)))).navigateToExercise=function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=t.props,n=o.dispatch,s=o.locationParams,a=o.locationQuery,i=C.c(_objectSpread({},s,{exerciseSlug:e,query:a}));r&&(i=Object(u.redirect)(i)),n(i)},t.redirectToProgramDashboard=function(){var e=T(t.props.locationQuery),r=e.programId,o=e.programContentId;return!(!r||!o)&&(k({programId:r,programContentId:o}),!0)},t.redirectToContainerCourse=function(){var e=t.props.locationQuery.course_redirect;return!!e&&(window.location.assign(Object(b.j)(e)),!0)},t.showNextContentInterstitial=function(){var e=t.props,r=e.hasNextContent,o=e.showProCourseCompletionInterstitial;if(!t.redirectToProgramDashboard())if(r||o)t.props.nextContentItemRequested();else{if(t.redirectToContainerCourse())return;window.location.assign(t.returnPath())}},t.showProExclusiveInterstitial=function(){t.props.showModal({type:"ProExclusiveInterstitial",returnPath:t.returnPath()})},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(CourseContentItem,i["Component"]),function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(CourseContentItem,[{key:"componentDidMount",value:function componentDidMount(){(function hasNoCourseInteraction(){return!!f.a.isPro()&&!window.localStorage.getItem("intercom.hasCourseInteraction")})()&&(window.localStorage.setItem("intercom.hasCourseInteraction",!0),Object(d.b)("hascourseinteraction")),this.props.hasCourseAccess||this.showProExclusiveInterstitial()}},{key:"returnPath",value:function returnPath(){var e=this.props.platformPage;return n()(e.exitPaths,"back",Object(b.l)())}},{key:"render",value:function render(){var e=this.props,t=e.isProTrialActive,r=e.currentContentItem,o=e.platformPage,n=e.hasCourseAccess,s=_objectSpread({},this.props,{exitPaths:_objectSpread({},o.exitPaths,{back:this.returnPath()}),navigateToExercise:this.navigateToExercise,redirectToContainerCourse:this.redirectToContainerCourse,showNextContentInterstitial:this.showNextContentInterstitial}),a=_.b[r.type].component;return n?c.a.createElement(i.Fragment,null,c.a.createElement(a,s),t&&c.a.createElement(I.a,null)):c.a.createElement(x.a,null)}}]),CourseContentItem}();S.propTypes={nextContentItems:a.a.object,hasNextContent:a.a.bool,currentCourse:a.a.object.isRequired,currentContentItem:a.a.object.isRequired,dispatch:a.a.func,locationType:a.a.string,locationQuery:a.a.object,locationParams:a.a.object,platformPage:a.a.object,showModal:a.a.func,isProTrialActive:a.a.bool,isProExclusiveCourse:a.a.bool,hasCourseAccess:a.a.bool,nextContentItemRequested:a.a.func,trackVisit:a.a.func,showProCourseCompletionInterstitial:a.a.bool};t.default=Object(p.b)(function mapStateToProps(e){var t=Object(m.d)(e),r=P(e).has(t.slug),o=Object(h.g)(e),n=Object(y.e)(e),s=r&&o&&!n||!r;return{currentCourse:t,currentContentItem:Object(m.c)(e),nextContentItems:Object(m.h)(e),hasNextContent:Object(m.o)(e),proTrialFeatureActive:Object(O.a)(e).includes("pro_trial"),isProTrialExpired:Object(h.t)(e),isProTrialActive:Object(h.s)(e),showProCourseCompletionInterstitial:Object(j.d)(e),hasCourseAccess:s}},E)(S)}}]);
//# sourceMappingURL=9a661af2fe1787c398d8-4653597cdc5a5468002f.js.map