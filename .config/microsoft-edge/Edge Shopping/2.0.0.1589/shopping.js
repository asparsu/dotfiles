!function(){var t={391:function(t){var e=function(t){"use strict";var e,i=Object.prototype,n=i.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",r=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,i){return t[e]=i}}function c(t,e,i,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),r=new w(n||[]);return a._invoke=function(t,e,i){var n=d;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw a;return R()}for(i.method=o,i.arg=a;;){var r=i.delegate;if(r){var s=T(r,i);if(s){if(s===g)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===d)throw n=f,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=p;var l=u(t,e,i);if("normal"===l.type){if(n=i.done?f:h,l.arg===g)continue;return{value:l.arg,done:i.done}}"throw"===l.type&&(n=f,i.method="throw",i.arg=l.arg)}}}(t,i,r),a}function u(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var d="suspendedStart",h="suspendedYield",p="executing",f="completed",g={};function m(){}function v(){}function y(){}var C={};l(C,a,(function(){return this}));var b=Object.getPrototypeOf,S=b&&b(b(k([])));S&&S!==i&&n.call(S,a)&&(C=S);var x=y.prototype=m.prototype=Object.create(C);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function i(o,a,r,s){var l=u(t[o],t,a);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,r,s)}),(function(t){i("throw",t,r,s)})):e.resolve(d).then((function(t){c.value=t,r(c)}),(function(t){return i("throw",t,r,s)}))}s(l.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){i(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function T(t,i){var n=t.iterator[i.method];if(n===e){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=e,T(t,i),"throw"===i.method))return g;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=u(n,t.iterator,i.arg);if("throw"===o.type)return i.method="throw",i.arg=o.arg,i.delegate=null,g;var a=o.arg;return a?a.done?(i[t.resultName]=a.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,g):a:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,g)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function k(t){if(t){var i=t[a];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,r=function i(){for(;++o<t.length;)if(n.call(t,o))return i.value=t[o],i.done=!1,i;return i.value=e,i.done=!0,i};return r.next=r}}return{next:R}}function R(){return{value:e,done:!0}}return v.prototype=y,l(x,"constructor",y),l(y,"constructor",v),v.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(A.prototype),l(A.prototype,r,(function(){return this})),t.AsyncIterator=A,t.async=function(e,i,n,o,a){void 0===a&&(a=Promise);var r=new A(c(e,i,n,o),a);return t.isGeneratorFunction(i)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},E(x),l(x,s,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){for(;e.length;){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},t.values=k,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(D),!t)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function o(n,o){return s.type="throw",s.arg=t,i.next=n,o&&(i.method="next",i.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a],s=r.completion;if("root"===r.tryLoc)return o("end");if(r.tryLoc<=this.prev){var l=n.call(r,"catchLoc"),c=n.call(r,"finallyLoc");if(l&&c){if(this.prev<r.catchLoc)return o(r.catchLoc,!0);if(this.prev<r.finallyLoc)return o(r.finallyLoc)}else if(l){if(this.prev<r.catchLoc)return o(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return o(r.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var r=a?a.completion:{};return r.type=t,r.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(r)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),D(i),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var o=n.arg;D(i)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,n){return this.delegate={iterator:k(t),resultName:i,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},39:function(t,e,i){t.exports=i(391)}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,i),a.exports}i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e,i,n,o,a,r){try{var s=t[a](r),l=s.value}catch(t){return void i(t)}s.done?e(l):Promise.resolve(l).then(n,o)}function e(e){return function(){var i=this,n=arguments;return new Promise((function(o,a){var r=e.apply(i,n);function s(e){t(r,o,a,s,l,"next",e)}function l(e){t(r,o,a,s,l,"throw",e)}s(void 0)}))}}var n=i(39),o=i.n(n);function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return l(t)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var g=function(){function t(){s(this,t)}return r(t,[{key:"ToString",value:function(){return JSON.stringify(this)}}]),t}();function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=p(t);if(e){var o=p(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return h(this,i)}}var v,y,C,b,S,x,E,A,T,I,D,w,k,R,O,P,M,N,L=function(t){u(i,t);var e=m(i);function i(t,n,o,a,r){var c;return s(this,i),f(l(c=e.call(this)),"EdgeFlyoutStatus",void 0),f(l(c),"ComparableOffersCount",void 0),f(l(c),"SavingsAmount",void 0),f(l(c),"Domain",void 0),f(l(c),"Metadata",void 0),c.EdgeFlyoutStatus=t,c.ComparableOffersCount=n,c.SavingsAmount=o,c.Domain=a,c.Metadata=r,c}return r(i)}(g);!function(t){t[t.Domains=0]="Domains",t[t.Deals=1]="Deals",t[t.Popup=2]="Popup",t[t.Overlay=3]="Overlay",t[t.BaseUXUrl=4]="BaseUXUrl",t[t.EventLogUrl=5]="EventLogUrl",t[t.PriceComparison=6]="PriceComparison",t[t.PriceNotification=7]="PriceNotification",t[t.ImageResize=8]="ImageResize",t[t.EdgeMobileOverlay=9]="EdgeMobileOverlay",t[t.ECOverlay=10]="ECOverlay"}(v||(v={})),function(t){t.Get="GET",t.Post="POST"}(y||(y={})),function(t){t.Json="application/json",t.Text="text/plain"}(C||(C={})),function(t){t.Trace="Trace",t.Debug="Debug",t.Information="Information",t.Warning="Warning",t.Error="Error",t.Critical="Critical",t.None="None"}(b||(b={})),function(t){t.AutoApply="AutoApply",t.ButtonClick="ButtonClick",t.ClientError="ClientError",t.DebugMessage="DebugMessage",t.EdgeFlyoutStatus="EdgeFlyoutStatus",t.CheckoutPageValidation="CheckoutPageValidation",t.CashbackInfo="CashbackInfo",t.OtherSellers="OtherSellers",t.RewardsActivity="RewardsActivity",t.ExpressCheckout="ExpressCheckout",t.EdgeFlyoutStatusDiagnostic="EdgeFlyoutStatusDiagnostic",t.RenderTime="RenderTime",t.PrintableGroceryCouponsOverlay="PrintableGroceryCouponsOverlay",t.CartExtraction="CartExtraction",t.CartExtractionError="CartExtractionError",t.FeedbackClicked="FeedbackClicked",t.ActiveExperiments="ActiveExperiments"}(S||(S={})),function(t){t.PriceHistoryGraph="PriceHistoryGraph"}(x||(x={})),function(t){t.AutoApply="AutoApply",t.PopupClose="PopupClose",t.CouponCopied="CouponCopied",t.SeeMoreCoupons="SeeMoreCoupons",t.SeeMoreRetailers="SeeMoreRetailers",t.SeeMoreSellers="SeeMoreSellers",t.SeeMoreTopRetailers="SeeMoreTopRetailers",t.SeeMorePaymentOptions="SeeMorePaymentOptions",t.SeeMoreGroceryCoupons="SeeMoreGroceryCoupons",t.SeeMoreExclusiveCoupons="SeeMoreExclusiveCoupons",t.SeeAllPrintableCoupons="SeeAllPrintableCoupons",t.PrintableCouponSelected="PrintableCouponSelected",t.PrintGroceryCoupons="PrintGroceryCoupons",t.FREManage="FREManage",t.FlyoutManage="FlyoutManage",t.FREDismiss="FREDismiss",t.FlyoutDismiss="FlyoutDismiss",t.FlyoutSnooze="FlyoutSnooze",t.FlyoutSnoozeUndo="FlyoutSnoozeUndo",t.RemindLater="RemineLater",t.BannerDismiss="BannerDismiss",t.AutoShowTurnedOff="AutoShowTurnedOff",t.AutoShowTurnedOn="AutoShowTurnedOn",t.FREGotIt="FREGotIt",t.FRENoThanks="FRENoThanks",t.NavigatedToAnotherRetailer="NavigatedToAnotherRetailer",t.ProceedToCheckoutWithImport="ProceedToCheckoutWithImport",t.ProceedToCheckoutWithOutImport="ProceedToCheckoutWithOutImport",t.ProceedToCheckout="ProceedToCheckout",t.UseCoupon="UseCoupon",t.UseRebates="UseRebates",t.ActivateCashBack="ActivateCashBack",t.PreviousCashBack="PreviousCashBack",t.ExpandedPreviousCashBack="ExpandedPreviousCashBack",t.NotificationDismiss="NotificationDismiss",t.OrganicFlowTurnedOff="OrganicFlowTurnedOff",t.OrganicFlowTurnedOn="OrganicFlowTurnedOn",t.RebatesLearnMore="RebatesLearnMore",t.RebatesAccount="RebatesAccount",t.CouponCopiedStackableWithCashBack="CouponCopiedStackableWithCashBack",t.CouponCopiedNonStackableWithCashBack="CouponCopiedNonStackableWithCashBack",t.ShareFB="ShareFB",t.ShareTwitter="ShareTwitter",t.ScrollVideoReviews="ScrollVideoReviews",t.ClickInlineRating="ClickInlineRating",t.ClickExpertReview="ClickExpertReview",t.ClickVideoReview="ClickVideoReview",t.NavigateToRetailerOffer="NavigateToRetailerOffer",t.NavigateToRecommendedDeal="NavigateToRecommendedDeal",t.NavigateToOtherSeller="NavigateToOtherSeller",t.AddToCart="AddToCart",t.TipsGotIt="TipsGotIt",t.TipsDwellTime="TipsDwellTime",t.MicroNotificationClick="MicroNotificationClick",t.AAWithoutEC="AAWithoutEC",t.AAWithEC="AAWithEC",t.ExpressCheckout="EC",t.RewardSignIn="RewardSignIn",t.RewardRedeem="RewardRedeem",t.RewardAdditionalLink="RewardAdditionalLink",t.RewardInfo="RewardInfo",t.ActivateCashbackToEarnReward="ActivateCashbackToEarnReward",t.ActivateCashbackToEarnRewardFail="ActivateCashbackToEarnRewardFail",t.HomePageNotificationHover="HomePageNotificationHover",t.DeletePackageTrackerByGuid="DeletePackageTrackerByGuid",t.PackageTrackingOptIn="PackageTrackingOptIn",t.PackageTrackingOptOut="PackageTrackingOptOut",t.PackageTrackingOrderClick="PackageTrackingOrderClick",t.PriceHistoryGotItBtn="PriceHistoryGotItBtn",t.DigitalGroceryCouponClick="DigitalGroceryCouponClick",t.DigitalGroceryCouponSeeAll="DigitalGroceryCouponSeeAll",t.RewardsClick="RewardsClick",t.ViewAccountActivity="ViewAccountActivity",t.CashbackRetailer="CashbackRetailer",t.SustainabilityShop="SustainabilityShop",t.ECWithoutPayment="ECWithoutPayment",t.ECWithBNPL="ECWithBNPL",t.FeedbackLike="FeedbackLike",t.FeedbackDislike="FeedbackDislike",t.FeedbackDislikeMenu0="FeedbackDislikeMenu0",t.FeedbackDislikeMenu1="FeedbackDislikeMenu1",t.FeedbackDislikeMenu2="FeedbackDislikeMenu2",t.FeedbackDislikeMenu3="FeedbackDislikeMenu3",t.FeedbackDislikeMenu4="FeedbackDislikeMenu4",t.FeedbackClose="FeedbackClose",t.FeedbackSubmit="FeedbackSubmit",t.FeedbackDismiss="FeedbackDismiss",t.SustainabilityLearnMore="SustainabilityLearnMore",t.PinterestNavigateToAnotherRetailer="PinterestNavigateToAnotherRetailer",t.YoutubeNavigateToAnohterRetailer="YoutubeNavigateToAnohterRetailer",t.SaveExclusiveCoupons="SaveExclusiveCoupons",t.DontSaveExclusiveCoupons="DontSaveExclusiveCoupons",t.PriceDropProductPage="PriceDropProductPage",t.PriceDropProductPageHover="PriceDropProductPageHover",t.SustainabilityConfirmationHover="SustainabilityConfirmationHover",t.AttainableInfoIcon="AttainableInfoIcon",t.AttainableInfoIconNotif="AttainableInfoIconNotif",t.AttainableContinueShopping="AttainableContinueShopping",t.DismissGiftCard="DismissGiftCard",t.NavigatedToAutosMarketplace="NavigatedToAutosMarketplace",t.NavigatedToAutosMarketplaceRecommendation="NavigatedToAutosMarketplaceRecommendation"}(E||(E={})),function(t){t.OpenedInCheckout="OpenedInCheckout",t.EmptyCoupons="EmptyCoupons",t.AutoTrigger="AutoTrigger",t.WrongAutoTrigger="WrongAutoTrigger",t.UserTrigger="UserTrigger",t.BannerRendered="BannerRendered",t.OnErrorInvoked="OnErrorInvoked",t.BestPrice="BestPrice",t.YouCanSave="YouCanSave",t.RebatesConfirmationNotification="RebatesConfirmationNotification",t.RebatesTurnedOffNotification="RebatesTurnedOffNotification",t.StackableCouponWithCashback="StackableCouponWithCashback",t.NonStackableCouponWithCashback="NonStackableCouponWithCashback",t.CashBackNotActiveAutoApply="CashBackNotActiveAutoApply",t.PriceHistoryTriggerTrue="PriceHistoryTriggerTrue",t.PriceHistoryPriceDrop="PriceHistoryPriceDrop",t.PriceHistoryPriceIncrease="PriceHistoryPriceIncrease",t.PriceHistoryPriceStable="PriceHistoryPriceStable",t.PriceHistoryDwellTimeHover="PriceHistoryDwellTimeHover",t.PriceHistoryInfoButtonDwellTimeHover="PriceHistoryInfoButtonDwellTimeHover",t.PriceHistoryNoImage="PriceHistoryNoImage",t.PriceHistoryShowMoreInfoTooltip="PriceHistoryShowMoreInfoTooltip",t.PriceHistoryHideMoreInfoTooltip="PriceHistoryHideMoreInfoTooltip",t.ActivateCashBackButton="ActivateCashBackButton",t.CashBackWillNotRender="CashBackWillNotRender",t.CashBackButtonShown="CashBackButtonShown",t.CashBackSignInButtonShown="CashBackSignInButtonShown",t.MicroNotifications="MicroNotifications",t.PageHandlerFunctionError="PageHandlerFunctionError",t.FlyoutAutoPriceHistoryTrigger="FlyoutAutoPriceHistoryTrigger",t.FlyoutDismissedPriceHistoryTrigger="FlyoutDismissedPriceHistoryTrigger",t.InlineRatingRendered="InlineRatingRendered",t.RatingsAndReviewsRendered="RatingsAndReviewsRendered",t.AutoOpenUsingUrlParam="AutoOpenUsingUrlParam",t.ContextMenuInfo="ContextMenuInfo",t.AddedToCartNotification="AddedToCartNotification",t.CashBackActivated="CashBackActivated",t.CashBackActivationError="CashBackActivationError",t.CheckoutUserDataInvalid="CUDInvalid",t.AAWithEC="AAWithEC",t.ExpressCheckout="ECOnly",t.OtherSeller="OtherSeller",t.ModuleViewed="ModuleViewed",t.RewardWillNotBeRendered="RewardWillNotBeRendered",t.RewardWillBeRendered="RewardWillBeRendered",t.RewardSignInSuccess="RewardSignInSuccess",t.RewardSignInFail="RewardSignInFail",t.RewardNotification="RewardNotification",t.HomePageNotification="HomePageNotification",t.PackageTrackingCardViewed="PackageTrackingCardViewed",t.ShownOnPinterest="ShownOnPinterest",t.ViewedProductPriceDrop="ViewedProductPriceDrop",t.SustainabilityConfirmation="SustainabilityConfirmation",t.SustainabilityPDP="SustainabilityPDP",t.AutosMarketplaceRenderNotification="AutosMarketplaceNotification",t.AutosMarketplaceRenderViewModule="AutosMarketplaceRenderViewModule",t.AutosMarketplaceShowMoreInfoTooltip="AutosMarketplaceShowMoreInfoTooltip",t.AutosMarketplaceDwellTimeHover="AutosMarketplaceDwellTimeHover",t.FailedToRecordEngagement="FailedToRecordEngagement"}(A||(A={})),function(t){t.Error="Error",t.Negative="Negative",t.Positive="Positive",t.Cancelled="Cancelled"}(T||(T={})),function(t){t.Error="Error",t.Negative="Negative",t.Positive="Positive"}(I||(I={})),function(t){t.Valid="Valid",t.NotApplicable="NotApplicable",t.LowSuccess="LowSuccess",t.MinPurchaseNotMet="MinPurchaseNotMet"}(D||(D={})),function(t){t[t.ApplyCouponsMessage=1]="ApplyCouponsMessage",t[t.AutoApplyCompletedMessage=2]="AutoApplyCompletedMessage",t[t.CheckoutPageMessage=3]="CheckoutPageMessage",t[t.CloseOverlayMessage=4]="CloseOverlayMessage",t[t.ClosedPopupMessage=5]="ClosedPopupMessage",t[t.CountElementsResponse=6]="CountElementsResponse",t[t.CreateOverlayMessage=7]="CreateOverlayMessage",t[t.CreatePopupMessage=8]="CreatePopupMessage",t[t.CreatePriceComparisonMessage=9]="CreatePriceComparisonMessage",t[t.EdgeApplyCouponsMessage=10]="EdgeApplyCouponsMessage",t[t.EmptyResponse=11]="EmptyResponse",t[t.ErrorResponse=12]="ErrorResponse",t[t.GetCompetingPricesMessage=13]="GetCompetingPricesMessage",t[t.GetCompetingPricesResponse=14]="GetCompetingPricesResponse",t[t.GetTextValueResponse=15]="GetTextValueResponse",t[t.GetUIStateMessage=16]="GetUIStateMessage",t[t.GetUIStateResponse=17]="GetUIStateResponse",t[t.MoveProgressBarMessage=18]="MoveProgressBarMessage",t[t.ShowResultMessage=19]="ShowResultMessage",t[t.TelemetryMessage=20]="TelemetryMessage",t[t.UpdateCurrentCouponMessage=21]="UpdateCurrentCouponMessage",t[t.OpalMessage=22]="OpalMessage",t[t.ProductPageMessage=23]="ProductPageMessage",t[t.ProductPageResponse=24]="ProductPageResponse",t[t.EdgeCreateOverlayMessage=25]="EdgeCreateOverlayMessage",t[t.EdgeShowResultMessage=26]="EdgeShowResultMessage",t[t.VerifySelectorsMessage=27]="VerifySelectorsMessage",t[t.VerifySelectorsResponse=28]="VerifySelectorsResponse",t[t.AutoApplyCancelledMessage=29]="AutoApplyCancelledMessage",t[t.ContentInitMessage=30]="ContentInitMessage",t[t.ClearDataMessage=31]="ClearDataMessage",t[t.DOMMutationMessage=32]="DOMMutationMessage",t[t.UpdateCurrencyMessage=33]="UpdateCurrencyMessage",t[t.CheckoutProgressMessage=34]="CheckoutProgressMessage",t[t.ECCreateOverlayMessage=35]="ECCreateOverlayMessage",t[t.ECShowResultMessage=36]="ECShowResultMessage",t[t.ECFieldErrorMessage=37]="ECFieldErrorMessage",t[t.ECCreateUpdatePaymentOverlayMessage=38]="ECCreateUpdatePaymentOverlayMessage",t[t.PrintableGroceryCouponsMessage=39]="PrintableGroceryCouponsMessage",t[t.WalletDrawerCreateOverlayMessage=40]="WalletDrawerCreateOverlayMessage",t[t.WalletDrawerCloseMessage=41]="WalletDrawerCloseMessage",t[t.BackgroundAutoApplyCancelledMessage=42]="BackgroundAutoApplyCancelledMessage"}(w||(w={})),function(t){t[t.IOS=0]="IOS",t[t.Android=1]="Android"}(k||(k={})),function(t){t[t.PlainString=0]="PlainString",t[t.JsonString=1]="JsonString"}(R||(R={})),function(t){t[t.FromBackground=1]="FromBackground",t[t.FromContent=2]="FromContent"}(O||(O={})),function(t){t.HandleBackgroundMessage="HandleBackgroundMessage",t.HandleContentMessage="HandleContentMessage"}(P||(P={})),function(t){t.Opal="Opal",t.Extension="Extension",t.Edge="Edge",t.EdgeMobile="EdgeMobile",t.Sapphire="Sapphire",t.RBC="RBC"}(M||(M={})),function(t){t.AutoApplyCoupons="AutoApplyCoupons",t.CouponClipping="CouponClipping",t.BackgroundAutoApply="BackgroundAutoApply",t.FallBackAutoApply="FallBackAutoApply"}(N||(N={}));var _,F,H;!function(t){t.VALIDATION_ERROR="VALIDATION_ERROR",t.SERVER_ERROR="SERVER_ERROR"}(_||(_={})),function(t){t.AMEX="A",t.DISCOVER="D",t.MASTERCARD="M",t.VISA="V",t.ZIP="Z"}(F||(F={})),function(t){t.ExpressCheckout="ExpressCheckout",t.ECWithBNPL="ECWithBNPL",t.ECWithoutPayment="ECWithoutPayment"}(H||(H={}));var B="1.82";document.body=document.createElement("body");var U=function(){function t(){s(this,t)}return r(t,[{key:"HandleAdditionalBody",value:function(){var t=document.querySelectorAll("body");t&&t.length>1&&t[0].attributes[0].textContent&&(t[1].setAttribute("style",t[0].attributes[0].textContent),t[0].remove())}}]),t}();function V(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var $=function(t){return!!(t instanceof Array&&Object.isFrozen(t))},G=function(t,e){return function(t){if($(t)&&t.raw&&$(t.raw)&&t.length===t.raw.length&&1===t.length)return t.join("");throw new TypeError("Static Types only allows static Template literals")}(e)},z={createHTML:G,createScript:G,createScriptURL:G},W=function(){function t(){s(this,t)}return r(t,null,[{key:"getTrustedHTML",value:function(t){return this.staticPolicy.createHTML("",t)}},{key:"getTrustedScript",value:function(t){return this.staticPolicy.createHTML("",t)}},{key:"getTrustedScriptURL",value:function(t){return this.staticPolicy.createHTML("",t)}}]),t}();f(W,"staticPolicy",window.trustedTypes?window.trustedTypes.createPolicy("shopping-static",z):z);var K,j,Y,q,X,Z,J,Q,tt,et,it,nt,ot,at,rt,st,lt,ct,ut,dt,ht,pt,ft,gt,mt,vt,yt,Ct,bt,St,xt,Et,At,Tt,It,Dt,wt,kt,Rt=W,Ot=function(){function t(){s(this,t)}return r(t,[{key:"getStyles",value:function(){return"\n        html {\n            overflow: hidden;\n        }\n        msft-shopping-coupon,\n        msft-shopping-link {\n            margin-top: 5px;\n        }\n        msft-edge-shopping-section {\n            margin-top: 10px;\n        }\n        msft-shopping-link:first-of-type,\n        msft-shopping-coupon:first-of-type {\n            margin-top: 0;\n        }\n        fluent-menu-item::part(content) {\n            width: 100%;\n            overflow: hidden;\n            overflow-wrap: break-word;\n            -webkit-line-clamp: 1;\n            -webkit-box-orient: vertical;\n        }\n        fluent-anchor,\n        fluent-button,\n        fluent-card {\n            font-size: 12px;\n        }\n        ::part(sections) {\n            position: relative;\n            margin-top: 10px;\n        }\n        ::part(start-content) {\n            padding: 0px;\n        }\n        ::part(header) {\n            margin: 10px;\n        }\n        ::part(actions) {\n            width: 100%;\n            border-bottom: unset;\n            padding-bottom: 0px;\n            padding-top: 0px;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n        ::part(actions):first-of-type {\n            margin-top: 10px;\n        }\n        .actionsButton {\n            min-width: 250px;\n            max-width: 100%;\n            height: 48px;\n        }\n        .actionsButton:first-of-type {\n            margin-top: 10px;\n        }\n        msft-shopping-link:last-of-type {\n            margin-bottom: 5px;\n        }\n        msft-shopping-coupon:last-of-type {\n            margin-bottom: 5px;\n        }\n        ::part(start-content) {\n            padding-top: 0px;\n            padding-bottom: 0px;\n        }\n        #divContentWrapper {\n            width: 360px;\n            height: auto;\n        }\n        body {\n            margin: 0px;\n        }\n        .hide {\n            display: none;\n        }\n        msft-edge-shopping {\n            font-family: 'Segoe UI','Roboto', Helvetica, Verdana, sans-serif;\n            height: auto;\n            max-height: 580px;\n        }\n        #divContentWrapper.ms-edge-shopping-650 msft-edge-shopping {\n            max-height: 650px;\n        }\n        fluent-design-system-provider {\n            width: 360px;\n            margin: 0px;\n        }\n        .txtLarge {\n            font-family: 'Segoe UI','Roboto', Helvetica, Verdana, sans-serif;\n            font-size: 24px;\n            line-height: 28px;\n            margin: 0px;\n            color: var(--neutral-foreground-rest);\n        }\n        .txtMedium {\n            font-family: 'Segoe UI','Roboto', Helvetica, Verdana, sans-serif;\n            font-size: 16px;\n            line-height: 20px;\n            margin: 0px;\n            color: var(--neutral-foreground-rest);\n        }\n        .txtSmall {\n            font-family: 'Segoe UI','Roboto', Helvetica, Verdana, sans-serif;\n            font-size: 14px;\n            line-height: 16px;\n            margin: 0px;\n            color: var(--neutral-foreground-rest);\n        }\n        .txtEmptyCoupons {\n            all: initial;\n            font-family: 'Segoe UI','Roboto', Helvetica, Verdana, sans-serif;\n            font-size: 18px;\n            line-height: 25px;\n            margin: 0px;\n            color: rgba(0, 0, 0, 0.83);\n        }\n        .defaultFontFamily {\n            font-family: 'Segoe UI','Roboto', Helvetica, Verdana, sans-serif;\n        }\n        msft-shopping-link::part(attribution) {\n            margin-top: 6px;\n        }\n        .sectionSeparator {\n            position: absolute;\n            border: 1px solid #F1F1F1;\n            margin-bottom: 0px;\n            margin-top: 0px;\n            border-bottom: unset;\n            width: 360px;\n            left: 0px;\n            right: 0px;\n        }\n        ::part(control) {\n            margin-bottom: 0px;\n        }\n        .triviaTitle {\n            display: inline;\n            margin: 0px;\n            font-weight: 400;\n            font-size: 14px;\n            line-height: 36px;\n            vertical-align: middle;\n            text-align: center;\n        }\n        .infoicon {\n            align-self: center;\n            display: inline;\n            position: relative;\n            top: -10px;\n        }\n        ::part(tooltip) {\n            white-space: unset;\n            font-size: 10px;\n            hyphens: auto;\n            padding: 4px 6px;\n            line-height: 12px;\n            padding-bottom: 8px;\n        }\n        .btnTooltip {\n            border: none;\n            outline: none;\n            border-radius: 4px;\n            background: transparent;\n        }\n        .btnTooltip:focus-visible {\n            box-shadow: 0 0 0 2px inset #fbfdfe, 0 0 0 1px #878787;\n            border: 1px solid #878787;\n        }\n        .infoiconsvg {\n            fill: #000000;\n        }\n        @media (prefers-color-scheme: dark) {\n            .txtEmptyCoupons {\n                color: #FFFFFF;\n            }\n            .tirivaSavings {\n                color: #FFFFFF!important;\n            }\n            .sectionSeparator {\n                opacity: 0.08;\n            }\n            .infoiconsvg {\n                fill: #FFFFFF;\n            }\n        }\n        @media (forced-colors: active) {\n            msft-edge-shopping {\n                background-image: unset!important;\n            }\n            .btnTooltip:focus-visible {\n                border: 1px solid buttontext;\n                box-shadow: highlighttext 0px 0px 0px 2px inset;\n            }\n            #flyoutCloseWhite>path .viewMorePricesButton>svg>path {\n                fill: buttonText!important;\n            }\n        }\n        @media (-ms-high-contrast: active) {\n            .infoiconsvg {\n                fill:Text;\n            }\n        }"}},{key:"getStylesRefresh",value:function(){return"\n            ::part(sections) {\n                padding: 0px;!important\n            }\n            ::part(header-fixed-title) {\n                font-weight: 400;\n            }\n            .actionsButtonRefresh {\n                min-width: 320px;\n                max-width: 100%;\n                height: 48px;\n                margin-top: 12px;\n                font-weight: 600;\n                background: linear-gradient(90.05deg, #8300D4 0.59%, #0048D4 67.54%, #00D4A1 104.11%);\n            }\n            .actionsButtonRefresh:hover {\n                background: linear-gradient(90.05deg, #9E00FF 0.59%, #0048D4 67.54%, #00FFC2 104.11%);\n            }\n            .txtGradient {\n                font-weight: 500;\n                background: linear-gradient(93.45deg, #E4008A -4.64%, #FF4B14 75.79%, #ED7100 106.45%);\n                -webkit-background-clip: text;\n                -webkit-text-fill-color: transparent;\n            }\n            @media (prefers-color-scheme: dark) {\n                .divSeeMore {\n                    border-top: 1px solid rgba(236, 236, 236, 0.08)!important;\n                }\n                .txtGradient {\n                    background: linear-gradient(92.79deg, #FF51BA -23.53%, #FF6435 29.15%, #FFA724 79.58%);\n                    -webkit-background-clip: text;\n                    -webkit-text-fill-color: transparent;\n                }\n            }\n        "}},{key:"getColoredHeaderCssExp1",value:function(){return"\n        #btnFlyoutClose, #btnMainMenu {\n            background: none;\n        }\n        ::part(header-fixed) {\n            background: linear-gradient(90.79deg, #E4FCFF 3.55%, #D2F7FF 23.38%, #81D1FF 49.35%, #558EFF 70.12%, #1F65F1 90.42%);\n        }\n        ::part(header-fixed-title) {\n            color: #001C56;\n            font-weight: 400;\n        }\n        #flyoutMenu, #flyoutClose {\n            fill: #FFFFFF;\n        }\n        "}},{key:"getColoredHeaderCssExp2",value:function(){return"\n        #btnFlyoutClose, #btnMainMenu {\n            background: none;\n        }\n        ::part(header-fixed) {\n            background: linear-gradient(270deg, #1F65F1 0%, #1F65F1 35.42%, #1F65F1 68.23%, #6BC1FF 88.54%, #B6FBFF 100%);\n        }\n        ::part(header-fixed-title) {\n            color: #FFFFFF;\n            font-weight: 400;\n        }\n        #flyoutClose, #flyoutMenu {\n            fill: #FFFFFF;\n        }\n        "}},{key:"getColoredHeaderCssExp3",value:function(){return"\n        #btnFlyoutClose, #btnMainMenu {\n            background: none;\n        }\n        ::part(header-fixed) {\n            background: linear-gradient(270deg, #1F65F1 0%, #1F65F1 35.42%, #1F65F1 68.23%, #6BC1FF 88.54%, #B6FBFF 100%);\n        }\n        ::part(header-fixed-title) {\n            color: #FFFFFF;\n            font-weight: 400;\n        }\n        #flyoutClose, #flyoutMenu {\n            fill: #FFFFFF;\n        }\n        "}},{key:"getColoredHeaderCssExp4",value:function(){return"\n        #btnFlyoutClose, #btnMainMenu {\n            background: none;\n        }\n        ::part(header-fixed) {\n            background: linear-gradient(268.01deg, #CFE1FF -2.15%, #D8F6FF 50.34%, #EEFEFA 88.77%);\n        }\n        ::part(header-fixed-title) {\n            font-weight: 400;\n        }\n        "}},{key:"getGreenCheck",value:function(){return Rt.getTrustedHTML(K||(K=V(['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.2197 6.96967L8.75 11.4393L6.78033 9.46967C6.48744 9.17678 6.01256 9.17678 5.71967 9.46967C5.42678 9.76256 5.42678 10.2374 5.71967 10.5303L8.21967 13.0303C8.51256 13.3232 8.98744 13.3232 9.28033 13.0303L14.2803 8.03033C14.5732 7.73744 14.5732 7.26256 14.2803 6.96967C13.9874 6.67678 13.5126 6.67678 13.2197 6.96967Z" fill="#107C10"/></svg>'])))}},{key:"getInfoIcon",value:function(){return Rt.getTrustedHTML(j||(j=V(['\n        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path class="infoiconsvg" d="M4.5 5.5C4.5 5.22386 4.72386 5 5 5C5.27614 5 5.5 5.22386 5.5 5.5V7C5.5 7.27614 5.27614 7.5 5 7.5C4.72386 7.5 4.5 7.27614 4.5 7V5.5ZM5 2.75C4.58579 2.75 4.25 3.08579 4.25 3.5C4.25 3.91421 4.58579 4.25 5 4.25C5.41421 4.25 5.75 3.91421 5.75 3.5C5.75 3.08579 5.41421 2.75 5 2.75ZM0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5ZM5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1Z" fill="black" fill-opacity="0.55"/>\n        </svg>\n        '])))}},{key:"getCloseButton",value:function(){return Rt.getTrustedHTML(Y||(Y=V(['<svg id="flyoutClose" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n        <path d="M8.5332 8L12.5762 12.0488L12.0488 12.5762L8 8.5332L3.95117 12.5762L3.42383 12.0488L7.4668 8L3.42383 3.95117L3.95117 3.42383L8 7.4668L12.0488 3.42383L12.5762 3.95117L8.5332 8Z"/>\n        </svg>'])))}},{key:"getSnoozeLineButton",value:function(){return Rt.getTrustedHTML(q||(q=V(['<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M7.96379 3C5.89462 3 3.96372 4.62135 3.96372 7.16667V9.9352L3.08616 12H12.8659L11.9637 9.93793V8.5C11.9637 8.22387 12.1876 8 12.4637 8C12.7399 8 12.9637 8.22387 12.9637 8.5V9.72873L13.8842 11.8327C14.1251 12.3832 13.7217 13 13.1207 13H9.96499C9.96446 14.1047 9.06873 15 7.96393 15C6.85913 15 5.96346 14.1047 5.96289 13H2.83422C2.23704 13 1.8337 12.3903 2.06728 11.8407L2.96372 9.73147V7.16667C2.96372 4.04532 5.36638 2 7.96379 2C8.53679 2 9.10039 2.09938 9.63079 2.28798C9.89099 2.38049 10.0269 2.66641 9.93439 2.92659C9.84186 3.18678 9.55593 3.3227 9.29573 3.23019C8.87146 3.07932 8.42113 3 7.96379 3ZM7.96393 14C8.51646 14 8.96446 13.5524 8.96499 13H6.96286C6.96346 13.5524 7.41146 14 7.96393 14ZM10.1311 5.33333H8.4644L8.39659 5.3379C8.15253 5.37101 7.9644 5.5802 7.9644 5.83333C7.9644 6.10947 8.18826 6.33333 8.4644 6.33333H9.15953L8.05753 7.87607L8.02066 7.93567C7.84959 8.25947 8.08166 8.66667 8.4644 8.66667H10.1311L10.1989 8.66213C10.443 8.629 10.6311 8.4198 10.6311 8.16667C10.6311 7.89053 10.4073 7.66667 10.1311 7.66667H9.43599L10.5379 6.12395L10.5748 6.06433C10.7459 5.74053 10.5139 5.33333 10.1311 5.33333ZM14.1311 2H11.7977L11.7299 2.00457C11.4859 2.03767 11.2977 2.24687 11.2977 2.5C11.2977 2.77614 11.5216 3 11.7977 3H13.2203L11.3759 5.89823L11.3432 5.95793C11.1928 6.28083 11.4264 6.66667 11.7977 6.66667H14.1311L14.1989 6.6621C14.443 6.62899 14.6311 6.4198 14.6311 6.16667C14.6311 5.89053 14.4073 5.66667 14.1311 5.66667H12.7086L14.5529 2.76844L14.5857 2.70874C14.7361 2.38584 14.5025 2 14.1311 2Z" fill="#1A1A1A"/>\n        </svg>\n        '])))}},{key:"getSnoozeFilledButton",value:function(){return Rt.getTrustedHTML(X||(X=V(['<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M10.1656 4.33333H8.4989L8.4311 4.3379C8.18703 4.37101 7.9989 4.5802 7.9989 4.83333C7.9989 5.10947 8.22276 5.33333 8.4989 5.33333H9.19403L8.09203 6.87607L8.05516 6.93567C7.8841 7.25947 8.11616 7.66667 8.4989 7.66667H10.1656L10.2334 7.66213C10.4775 7.629 10.6656 7.4198 10.6656 7.16667C10.6656 6.89053 10.4418 6.66667 10.1656 6.66667H9.4705L10.5724 5.12395L10.6093 5.06433C10.7804 4.74053 10.5484 4.33333 10.1656 4.33333ZM14.1656 1H11.8322L11.7644 1.00457C11.5204 1.03767 11.3322 1.24687 11.3322 1.5C11.3322 1.77614 11.5561 2 11.8322 2H13.2548L11.4104 4.89823L11.3777 4.95793C11.2273 5.28083 11.4609 5.66667 11.8322 5.66667H14.1656L14.2334 5.6621C14.4775 5.62899 14.6656 5.4198 14.6656 5.16667C14.6656 4.89053 14.4418 4.66667 14.1656 4.66667H12.7431L14.5874 1.76844L14.6202 1.70874C14.7706 1.38584 14.537 1 14.1656 1ZM8.46483 3.33333H10.1651C10.5038 3.33333 10.8026 3.43895 11.0426 3.61283L11.4619 2.95404C10.8373 2.79563 10.369 2.24539 10.3339 1.58029C9.6369 1.21147 8.84216 1.00261 7.9987 1.00261C5.30262 1.00261 3.09443 3.14023 3.00172 5.82738L2.99877 5.99399L2.9987 8.66853L2.05544 10.7755C1.91252 11.0948 2.05546 11.4695 2.37471 11.6124C2.45612 11.6489 2.5443 11.6677 2.63349 11.6677H13.3664C13.7162 11.6677 13.9998 11.3841 13.9998 11.0343C13.9998 10.9449 13.9808 10.8565 13.9442 10.775L12.9987 8.66827V6.66667H11.8318C11.7424 6.66667 11.6556 6.65927 11.572 6.64513C11.6322 6.80753 11.6651 6.98327 11.6651 7.16667C11.6651 7.92687 11.1006 8.5536 10.3674 8.653L10.3339 8.6576L10.1987 8.66667H8.49843C7.34563 8.66667 6.65549 7.44327 7.17056 6.46847L7.18636 6.43853L7.25856 6.32184L7.51363 5.96476C7.19796 5.68977 6.99843 5.28485 6.99843 4.83333C6.99843 4.07313 7.56303 3.44643 8.29616 3.34697L8.3297 3.34243L8.46483 3.33333ZM9.9709 12.3353C9.81176 13.2807 8.98936 14.001 7.9987 14.001C7.00803 14.001 6.18561 13.2807 6.02652 12.3353H9.9709Z" fill="#1A1A1A"/>\n        </svg>\n        '])))}},{key:"getDisableAutoOpen",value:function(){return Rt.getTrustedHTML(Z||(Z=V(['<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">\n        <path d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8 1.2C4.24446 1.2 1.2 4.24446 1.2 8C1.2 11.7555 4.24446 14.8 8 14.8C11.7555 14.8 14.8 11.7555 14.8 8C14.8 4.24446 11.7555 1.2 8 1.2ZM4.59944 7.39944H11.3994C11.7308 7.39944 11.9994 7.66807 11.9994 7.99944C11.9994 8.30319 11.7737 8.55423 11.4809 8.59396L11.3994 8.59944H4.59944C4.26807 8.59944 3.99944 8.33081 3.99944 7.99944C3.99944 7.69568 4.22516 7.44464 4.51802 7.40491L4.59944 7.39944H11.3994H4.59944Z"/>\n        </svg>'])))}},{key:"getEnableAutoOpen",value:function(){return Rt.getTrustedHTML(J||(J=V(['<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">\n        <path d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8 1.2C4.24446 1.2 1.2 4.24446 1.2 8C1.2 11.7555 4.24446 14.8 8 14.8C11.7555 14.8 14.8 11.7555 14.8 8C14.8 4.24446 11.7555 1.2 8 1.2ZM7 9.15147L10.5757 5.57574C10.8101 5.34142 11.1899 5.34142 11.4243 5.57574C11.6373 5.78875 11.6566 6.12208 11.4824 6.35697L11.4243 6.42426L7.42426 10.4243C7.21125 10.6373 6.87792 10.6566 6.64303 10.4824L6.57574 10.4243L4.57574 8.42426C4.34142 8.18995 4.34142 7.81005 4.57574 7.57574C4.78875 7.36272 5.12208 7.34336 5.35697 7.51764L5.42426 7.57574L7 9.15147L10.5757 5.57574L7 9.15147Z"/>\n        </svg>'])))}},{key:"getHeaderIcon",value:function(){return Rt.getTrustedHTML(Q||(Q=V(['<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n        <path d="M14.4407 11.9085C14.2304 12.0187 14.0107 12.1173 13.7824 12.2031C13.0961 12.4609 12.3381 12.6071 11.5386 12.6071C8.58104 12.6071 6.00467 10.5726 6.00467 7.96186C6.00467 7.22779 6.4294 6.59148 7.03128 6.25635C4.35654 6.36847 3.66895 9.15637 3.66895 10.7895C3.66895 15.4066 7.92454 15.8752 8.84155 15.8752C9.33568 15.8752 10.0816 15.7312 10.5309 15.5903C10.5584 15.5812 10.5856 15.572 10.6129 15.5626C12.3478 14.9642 13.8122 13.7871 14.7747 12.2613C14.9127 12.0425 14.67 11.7883 14.4407 11.9085Z" fill="url(#paint0_linear_header)"/>\n        <path opacity="0.35" d="M14.4407 11.9085C14.2304 12.0187 14.0107 12.1173 13.7824 12.2031C13.0961 12.4609 12.3381 12.6071 11.5386 12.6071C8.58104 12.6071 6.00467 10.5726 6.00467 7.96186C6.00467 7.22779 6.4294 6.59148 7.03128 6.25635C4.35654 6.36847 3.66895 9.15637 3.66895 10.7895C3.66895 15.4066 7.92454 15.8752 8.84155 15.8752C9.33568 15.8752 10.0816 15.7312 10.5309 15.5903C10.5584 15.5812 10.5856 15.572 10.6129 15.5626C12.3478 14.9642 13.8122 13.7871 14.7747 12.2613C14.9127 12.0425 14.67 11.7883 14.4407 11.9085Z" fill="url(#paint1_radial_header)"/>\n        <path d="M6.60699 15.0887C6.0511 14.7441 5.56853 14.2897 5.18603 13.7527C4.59415 12.9217 4.2403 11.8995 4.2403 10.7897C4.2403 9.15655 5.00079 7.70997 6.17302 6.79347C6.43924 6.58534 6.78012 6.3754 7.03131 6.25652C7.22631 6.16418 7.55988 5.99792 8.00288 6.0042C8.73739 6.01462 9.29233 6.38909 9.60821 6.81434C9.85096 7.14109 10.0006 7.54366 10.0056 7.98066C10.0058 7.96754 11.5347 3.00537 5.00249 3.00537C2.25916 3.00537 0 5.60973 0 7.89385C0 9.34274 0.336211 10.4995 0.757169 11.3959C1.69471 13.3928 3.43331 14.9383 5.56007 15.6193C6.33024 15.8659 7.15075 16.0003 8.00288 16.0003C8.8867 16.0003 9.73608 15.8549 10.531 15.5905C10.0816 15.7314 9.60514 15.8086 9.11102 15.8086C8.19407 15.8086 7.33938 15.5427 6.60699 15.0887Z" fill="url(#paint2_linear_header)"/>\n        <path opacity="0.41" d="M6.60699 15.0887C6.0511 14.7441 5.56853 14.2897 5.18603 13.7527C4.59415 12.9217 4.2403 11.8995 4.2403 10.7897C4.2403 9.15655 5.00079 7.70997 6.17302 6.79347C6.43924 6.58534 6.78012 6.3754 7.03131 6.25652C7.22631 6.16418 7.55988 5.99792 8.00288 6.0042C8.73739 6.01462 9.29233 6.38909 9.60821 6.81434C9.85096 7.14109 10.0006 7.54366 10.0056 7.98066C10.0058 7.96754 11.5347 3.00537 5.00249 3.00537C2.25916 3.00537 0 5.60973 0 7.89385C0 9.34274 0.336211 10.4995 0.757169 11.3959C1.69471 13.3928 3.43331 14.9383 5.56007 15.6193C6.33024 15.8659 7.15075 16.0003 8.00288 16.0003C8.8867 16.0003 9.73608 15.8549 10.531 15.5905C10.0816 15.7314 9.60514 15.8086 9.11102 15.8086C8.19407 15.8086 7.33938 15.5427 6.60699 15.0887Z" fill="url(#paint3_radial_header)"/>\n        <path d="M9.52007 9.30364C9.46944 9.36927 9.31363 9.45977 9.31363 9.65765C9.31363 9.82046 9.41988 9.97746 9.6087 10.1093C10.5075 10.7365 12.2016 10.652 12.2062 10.652C12.9055 10.6496 13.5347 10.4573 14.0982 10.1278C14.3546 9.9779 14.5919 9.79983 14.8059 9.59652C15.5401 8.89883 15.9877 7.91563 16.0001 6.82318C16.0161 5.42222 15.5026 4.49083 15.2916 4.07842C13.967 1.48976 11.1078 0 7.99906 0C3.61686 0 0.0595379 3.52166 0.000732422 7.88757C0.0304402 5.60364 2.30036 3.75932 4.99864 3.75932C5.21742 3.75932 6.46504 3.78066 7.62399 4.38892C8.64487 4.92472 9.18013 5.57215 9.55213 6.21442C9.93845 6.88131 10.0071 7.72357 10.0071 8.05938C10.0071 8.3952 9.83782 8.89239 9.52007 9.30364Z" fill="url(#paint4_radial_header)"/>\n        <path d="M9.52007 9.30364C9.46944 9.36927 9.31363 9.45977 9.31363 9.65765C9.31363 9.82046 9.41988 9.97746 9.6087 10.1093C10.5075 10.7365 12.2016 10.652 12.2062 10.652C12.9055 10.6496 13.5347 10.4573 14.0982 10.1278C14.3546 9.9779 14.5919 9.79983 14.8059 9.59652C15.5401 8.89883 15.9877 7.91563 16.0001 6.82318C16.0161 5.42222 15.5026 4.49083 15.2916 4.07842C13.967 1.48976 11.1078 0 7.99906 0C3.61686 0 0.0595379 3.52166 0.000732422 7.88757C0.0304402 5.60364 2.30036 3.75932 4.99864 3.75932C5.21742 3.75932 6.46504 3.78066 7.62399 4.38892C8.64487 4.92472 9.18013 5.57215 9.55213 6.21442C9.93845 6.88131 10.0071 7.72357 10.0071 8.05938C10.0071 8.3952 9.83782 8.89239 9.52007 9.30364Z" fill="url(#paint5_radial_header)"/>\n        <defs>\n        <linearGradient id="paint0_linear_header" x1="3.66895" y1="11.0658" x2="14.815" y2="11.0658" gradientUnits="userSpaceOnUse">\n        <stop stop-color="#0C59A4"/>\n        <stop offset="1" stop-color="#114A8B"/>\n        </linearGradient>\n        <radialGradient id="paint1_radial_header" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.8253 11.149) scale(5.96154 5.66985)">\n        <stop offset="0.71659" stop-opacity="0"/>\n        <stop offset="0.9459" stop-opacity="0.53"/>\n        <stop offset="1"/>\n        </radialGradient>\n        <linearGradient id="paint2_linear_header" x1="9.54527" y1="6.23047" x2="2.58302" y2="13.814" gradientUnits="userSpaceOnUse">\n        <stop stop-color="#1B9DE2"/>\n        <stop offset="0.16164" stop-color="#1595DF"/>\n        <stop offset="0.66749" stop-color="#0680D7"/>\n        <stop offset="1" stop-color="#0078D4"/>\n        </linearGradient>\n        <radialGradient id="paint3_radial_header" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.45659 12.4168) rotate(-81.464) scale(8.95226 7.21381)">\n        <stop offset="0.76293" stop-opacity="0"/>\n        <stop offset="0.9459" stop-opacity="0.5"/>\n        <stop offset="1"/>\n        </radialGradient>\n        <radialGradient id="paint4_radial_header" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.57751 2.92536) rotate(92.129) scale(12.652 26.9468)">\n        <stop stop-color="#35C1F1"/>\n        <stop offset="0.11079" stop-color="#34C1ED"/>\n        <stop offset="0.23164" stop-color="#2FC2DF"/>\n        <stop offset="0.31446" stop-color="#2BC3D2"/>\n        <stop offset="0.67338" stop-color="#36C752"/>\n        </radialGradient>\n        <radialGradient id="paint5_radial_header" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.1549 4.84846) rotate(73.6747) scale(6.08366 4.96699)">\n        <stop stop-color="#66EB6E"/>\n        <stop offset="1" stop-color="#66EB6E" stop-opacity="0"/>\n        </radialGradient>\n        </defs>\n        </svg>'])))}},{key:"getMenuIcon",value:function(){return Rt.getTrustedHTML(tt||(tt=V(['<svg id="flyoutMenu" xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12">\n        <path d="M1 5C1.14062 5 1.27083 5.02604 1.39062 5.07812C1.51042 5.13021 1.61458 5.20312 1.70312 5.29688C1.79688 5.38542 1.86979 5.48958 1.92188 5.60938C1.97396 5.72917 2 5.85938 2 6C2 6.14062 1.97396 6.27083 1.92188 6.39062C1.86979 6.51042 1.79688 6.61719 1.70312 6.71094C1.61458 6.79948 1.51042 6.86979 1.39062 6.92188C1.27083 6.97396 1.14062 7 1 7C0.859375 7 0.729167 6.97396 0.609375 6.92188C0.489583 6.86979 0.382812 6.79948 0.289062 6.71094C0.200521 6.61719 0.130208 6.51042 0.078125 6.39062C0.0260417 6.27083 0 6.14062 0 6C0 5.85938 0.0260417 5.72917 0.078125 5.60938C0.130208 5.48958 0.200521 5.38542 0.289062 5.29688C0.382812 5.20312 0.489583 5.13021 0.609375 5.07812C0.729167 5.02604 0.859375 5 1 5ZM7 5C7.14062 5 7.27083 5.02604 7.39062 5.07812C7.51042 5.13021 7.61458 5.20312 7.70312 5.29688C7.79688 5.38542 7.86979 5.48958 7.92188 5.60938C7.97396 5.72917 8 5.85938 8 6C8 6.14062 7.97396 6.27083 7.92188 6.39062C7.86979 6.51042 7.79688 6.61719 7.70312 6.71094C7.61458 6.79948 7.51042 6.86979 7.39062 6.92188C7.27083 6.97396 7.14062 7 7 7C6.85938 7 6.72917 6.97396 6.60938 6.92188C6.48958 6.86979 6.38281 6.79948 6.28906 6.71094C6.20052 6.61719 6.13021 6.51042 6.07812 6.39062C6.02604 6.27083 6 6.14062 6 6C6 5.85938 6.02604 5.72917 6.07812 5.60938C6.13021 5.48958 6.20052 5.38542 6.28906 5.29688C6.38281 5.20312 6.48958 5.13021 6.60938 5.07812C6.72917 5.02604 6.85938 5 7 5ZM13 5C13.1406 5 13.2708 5.02604 13.3906 5.07812C13.5104 5.13021 13.6146 5.20312 13.7031 5.29688C13.7969 5.38542 13.8698 5.48958 13.9219 5.60938C13.974 5.72917 14 5.85938 14 6C14 6.14062 13.974 6.27083 13.9219 6.39062C13.8698 6.51042 13.7969 6.61719 13.7031 6.71094C13.6146 6.79948 13.5104 6.86979 13.3906 6.92188C13.2708 6.97396 13.1406 7 13 7C12.8594 7 12.7292 6.97396 12.6094 6.92188C12.4896 6.86979 12.3828 6.79948 12.2891 6.71094C12.2005 6.61719 12.1302 6.51042 12.0781 6.39062C12.026 6.27083 12 6.14062 12 6C12 5.85938 12.026 5.72917 12.0781 5.60938C12.1302 5.48958 12.2005 5.38542 12.2891 5.29688C12.3828 5.20312 12.4896 5.13021 12.6094 5.07812C12.7292 5.02604 12.8594 5 13 5Z"/>\n        </svg>'])))}},{key:"getSettingsIcon",value:function(){return Rt.getTrustedHTML(et||(et=V(['<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17">\n        <path d="M7.81044 0C8.42209 0.00704958 9.03134 0.0777185 9.62836 0.210865C9.88898 0.268988 10.0839 0.486259 10.1135 0.751636L10.2553 2.02401C10.3195 2.60822 10.8128 3.0507 11.4008 3.05132C11.5589 3.05156 11.7152 3.01865 11.8613 2.95403L13.0285 2.4413C13.2712 2.33466 13.5548 2.3928 13.7361 2.58635C14.5796 3.4872 15.2077 4.56762 15.5734 5.74632C15.6522 6.00048 15.5615 6.27669 15.3473 6.43459L14.3127 7.19716C14.0176 7.41399 13.8433 7.75834 13.8433 8.12455C13.8433 8.49076 14.0176 8.8351 14.3133 9.05241L15.3488 9.81525C15.5631 9.97311 15.6539 10.2494 15.575 10.5036C15.2096 11.6821 14.5817 12.7624 13.7387 13.6634C13.5577 13.8569 13.2743 13.9152 13.0315 13.8089L11.8596 13.2954C11.5243 13.1487 11.1393 13.1702 10.8224 13.3533C10.5056 13.5364 10.2947 13.8593 10.2544 14.2231L10.1135 15.4953C10.0845 15.7577 9.89375 15.9735 9.63698 16.0346C8.42994 16.3218 7.17236 16.3218 5.96532 16.0346C5.70855 15.9735 5.51783 15.7577 5.48878 15.4953L5.34809 14.225C5.30677 13.8619 5.09558 13.54 4.77898 13.3575C4.46238 13.175 4.07796 13.1536 3.74379 13.2995L2.57161 13.813C2.32881 13.9194 2.04532 13.8611 1.86428 13.6674C1.02081 12.7654 0.392955 11.6838 0.0279603 10.504C-0.0506552 10.2499 0.0401776 9.97385 0.254331 9.81608L1.29044 9.05277C1.58556 8.83594 1.75986 8.49159 1.75986 8.12538C1.75986 7.75917 1.58556 7.41483 1.29006 7.19771L0.254594 6.43571C0.0401229 6.27787 -0.0507935 6.00149 0.0280992 5.74715C0.393725 4.56846 1.02191 3.48804 1.8654 2.58718C2.04662 2.39363 2.33024 2.33549 2.573 2.44213L3.73998 2.95477C4.07576 3.10213 4.46179 3.07987 4.7801 2.89391C5.09704 2.71007 5.30803 2.38685 5.34877 2.02304L5.4905 0.751636C5.52009 0.486125 5.71518 0.268784 5.97596 0.210785C6.57369 0.0778498 7.18359 0.00721143 7.81044 0ZM7.81059 1.24992C7.43223 1.25437 7.05492 1.28702 6.68181 1.34751L6.59104 2.16182C6.50618 2.91973 6.06699 3.59252 5.40898 3.97419C4.74694 4.36098 3.93976 4.40752 3.23745 4.09931L2.48887 3.77047C2.01226 4.34894 1.63291 5.00113 1.36573 5.7014L2.03056 6.19066C2.64623 6.64301 3.00986 7.36139 3.00986 8.12538C3.00986 8.88937 2.64623 9.60775 2.03121 10.0596L1.36533 10.5502C1.63228 11.2517 2.01169 11.9051 2.48863 12.4847L3.2429 12.1542C3.94131 11.8493 4.743 11.8939 5.40323 12.2745C6.06347 12.6551 6.5039 13.3265 6.59029 14.0855L6.68109 14.9054C7.42246 15.0315 8.17984 15.0315 8.92121 14.9054L9.01201 14.0856C9.096 13.3267 9.53592 12.6531 10.1969 12.271C10.858 11.889 11.6613 11.8442 12.361 12.1504L13.1146 12.4806C13.5911 11.9019 13.9704 11.2495 14.2375 10.5491L13.5726 10.0593C12.9569 9.60692 12.5933 8.88854 12.5933 8.12455C12.5933 7.36056 12.9569 6.64218 13.5718 6.19039L14.2359 5.70091C13.9687 5.00051 13.5893 4.3482 13.1126 3.76963L12.3655 4.09781C12.0611 4.23251 11.7318 4.30184 11.3992 4.30132C10.1744 4.30003 9.14657 3.37796 9.0129 2.16152L8.92213 1.34725C8.55085 1.28683 8.17749 1.25427 7.81059 1.24992ZM7.80004 4.99996C9.52593 4.99996 10.925 6.39907 10.925 8.12496C10.925 9.85085 9.52593 11.25 7.80004 11.25C6.07415 11.25 4.67504 9.85085 4.67504 8.12496C4.67504 6.39907 6.07415 4.99996 7.80004 4.99996ZM7.80004 6.24996C6.76451 6.24996 5.92504 7.08943 5.92504 8.12496C5.92504 9.16049 6.76451 9.99996 7.80004 9.99996C8.83557 9.99996 9.67504 9.16049 9.67504 8.12496C9.67504 7.08943 8.83557 6.24996 7.80004 6.24996Z"/>\n        </svg>'])))}},{key:"getErrorImage",value:function(){return Rt.getTrustedHTML(it||(it=V(['<svg xmlns="http://www.w3.org/2000/svg" width="314" height="72" viewBox="0 0 314 72" fill="none">\n       <path d="M22.2505 70.9081C20.4564 68.0473 43.6258 53.3722 71.7396 56.2548C148.839 64.1601 174.218 0 228.893 0C283.567 0 284.573 70.9081 282.057 70.9081C279.541 70.9081 22.2505 70.9081 22.2505 70.9081Z" fill="#EBECEF"/>\n       <path d="M247.052 70.0138C246.724 70.5816 247.336 71.193 247.905 70.931C250.421 69.7299 253.55 69.3805 255.497 68.7253C260.113 67.1748 260.704 65.2094 264.227 62.1739C261.382 61.89 258.844 61.5843 256.394 62.5233C252.412 64.052 248.912 66.8254 247.052 70.0138Z" fill="#BFBFBF"/>\n       <path d="M243.377 54.9664C243.617 58.4387 245.893 66.6279 247.052 70.5806C247.205 71.1266 248.015 71.0829 248.102 70.5151C248.803 66.4532 250.159 58.0019 249.984 54.5297C249.7 48.4369 246.155 45.4014 246.155 45.4014C246.155 45.4014 242.961 48.8955 243.377 54.9664Z" fill="#BFBFBF"/>\n       <path d="M246.746 70.0787C246.549 70.7339 247.403 71.1925 247.84 70.6684C251.472 66.4536 259.239 57.1943 261.274 53.0887C264.752 46.0132 262.63 40.3572 262.63 40.3572C262.63 40.3572 256.81 42.3444 253.507 49.4855C251.581 53.6129 248.256 64.8376 246.746 70.0787Z" fill="#BFBFBF"/>\n       <path fill-rule="evenodd" clip-rule="evenodd" d="M180.169 42.7802L169.252 52.8038C168.902 53.1096 168.377 53.0877 168.092 52.7165C167.786 52.3671 167.83 51.8211 168.158 51.4936L179.075 41.4699C179.425 41.1642 179.95 41.186 180.257 41.5573C180.541 41.9067 180.497 42.4526 180.169 42.7802Z" fill="#EBECEF"/>\n       <path fill-rule="evenodd" clip-rule="evenodd" d="M243.135 21.947H203.535C203.535 24.9607 201.063 27.3847 198.022 27.3847C194.981 27.3847 192.53 24.9607 192.53 21.947H153.477C150.983 21.947 148.97 23.9561 148.97 26.4457V66.4311C148.97 68.8988 150.983 70.9079 153.477 70.9079H192.53C192.53 67.8942 195.003 65.4702 198.022 65.4702C198.241 65.4702 198.459 65.4921 198.656 65.5139C201.391 65.8196 203.535 68.1345 203.535 70.9079H243.135C245.629 70.9079 247.642 68.8988 247.642 66.4311V26.4457C247.642 23.9561 245.629 21.947 243.135 21.947ZM182.466 56.2109L183.079 59.6176L179.928 57.9579C178.244 57.0844 176.165 57.7396 175.312 59.4648L173.759 62.6313L172.205 59.4648C171.374 57.7396 169.273 57.0844 167.589 57.9579L164.46 59.6176L165.073 56.2109C165.423 54.3328 164.11 52.5203 162.207 52.2801L158.728 51.7996L161.244 49.4193C162.644 48.0871 162.644 45.8597 161.244 44.5275L158.728 42.1472L162.207 41.6668C164.11 41.4047 165.423 39.614 165.073 37.7359L164.46 34.3292L167.589 35.9889C169.273 36.8624 171.374 36.2073 172.205 34.5039L173.759 31.3374L175.312 34.5039C176.143 36.2073 178.244 36.8842 179.928 35.9889L183.079 34.3292L182.466 37.7359C182.138 39.614 183.429 41.4047 185.332 41.6668L188.811 42.1472L186.317 44.5275C184.917 45.8597 184.917 48.0871 186.317 49.4193L188.811 51.7996L185.332 52.2801C183.429 52.5203 182.138 54.311 182.466 56.2109Z" fill="white"/>\n       <path d="M198.678 29.2622V65.6007" stroke="#BFBFBF" stroke-linecap="round" stroke-dasharray="2 2"/>\n       <path fill-rule="evenodd" clip-rule="evenodd" d="M187.476 48.174C186.776 47.497 186.776 46.4051 187.476 45.7281L189.992 43.3478C191.021 42.3651 190.452 40.6398 189.052 40.4651L185.573 39.9847C184.61 39.8537 183.976 38.9583 184.151 38.0193L184.763 34.6126C185.026 33.2368 183.56 32.1449 182.313 32.8L179.163 34.4597C178.331 34.8964 177.281 34.5689 176.843 33.6954L175.29 30.5725C174.677 29.3059 172.883 29.3059 172.249 30.5725L170.696 33.739C170.28 34.6125 169.23 34.9401 168.398 34.5034L165.248 32.8437C164.001 32.1885 162.535 33.2586 162.797 34.6562L163.41 38.063C163.585 39.0238 162.929 39.8974 161.966 40.0284L158.487 40.5088C157.087 40.7054 156.518 42.4306 157.547 43.3914L160.063 45.7718C160.763 46.4488 160.763 47.5407 160.063 48.2176L157.547 50.598C156.518 51.5807 157.087 53.3059 158.487 53.4806L161.966 53.9611C162.929 54.0921 163.585 54.9874 163.41 55.9265L162.797 59.3332C162.535 60.709 164.001 61.7791 165.248 61.1239L168.398 59.4642C169.23 59.0275 170.28 59.3769 170.696 60.2286L172.249 63.3951C172.883 64.6617 174.677 64.6617 175.29 63.3951L176.843 60.2286C177.259 59.3769 178.309 59.0275 179.163 59.4642L182.313 61.1239C183.56 61.7791 185.026 60.709 184.763 59.3332L184.151 55.9265C183.976 54.9874 184.632 54.0921 185.573 53.9611L189.052 53.4806C190.452 53.2841 191.021 51.5589 189.992 50.598L187.476 48.174ZM185.332 52.2577C183.429 52.5197 182.116 54.3105 182.466 56.1885L183.079 59.5953L179.928 57.9356C178.244 57.0621 176.165 57.7172 175.312 59.4424L173.759 62.6089L172.205 59.4424C171.374 57.7172 169.273 57.0621 167.589 57.9356L164.46 59.5953L165.073 56.1885C165.423 54.3105 164.11 52.4979 162.207 52.2577L158.728 51.7772L161.244 49.3969C162.644 48.0648 162.644 45.8373 161.244 44.5052L158.728 42.1248L162.207 41.6444C164.11 41.3823 165.423 39.5916 165.073 37.7136L164.46 34.3068L167.589 35.9665C169.273 36.84 171.374 36.1849 172.205 34.4815L173.759 31.315L175.312 34.4815C176.143 36.1849 178.244 36.8619 179.928 35.9665L183.079 34.3068L182.466 37.7136C182.138 39.5916 183.429 41.3823 185.332 41.6444L188.811 42.1248L186.317 44.5052C184.917 45.8373 184.917 48.0648 186.317 49.3969L188.811 51.7772L185.332 52.2577Z" fill="#BFBFBF"/>\n       <path fill-rule="evenodd" clip-rule="evenodd" d="M186.317 44.5273L188.811 42.147L185.332 41.6665C183.429 41.4045 182.116 39.6138 182.466 37.7357L183.079 34.329L179.928 35.9887C178.244 36.8622 176.165 36.207 175.312 34.5037L173.759 31.3372L172.205 34.5037C171.374 36.207 169.273 36.884 167.589 35.9887L164.46 34.329L165.073 37.7357C165.423 39.6138 164.11 41.4045 162.207 41.6665L158.728 42.147L161.244 44.5273C162.644 45.8594 162.644 48.0869 161.244 49.419L158.728 51.7994L162.207 52.2798C164.11 52.5419 165.423 54.3326 165.073 56.2107L164.46 59.6174L167.589 57.9577C169.273 57.0842 171.374 57.7393 172.205 59.4645L173.759 62.6311L175.312 59.4645C176.143 57.7393 178.244 57.0842 179.928 57.9577L183.079 59.6174L182.466 56.2107C182.138 54.3326 183.429 52.5201 185.332 52.2798L188.811 51.7994L186.317 49.419C184.917 48.0651 184.917 45.8594 186.317 44.5273ZM169.252 52.8039C168.902 53.1097 168.376 53.0878 168.092 52.7166C167.786 52.3672 167.829 51.8212 168.158 51.4937L179.075 41.47C179.425 41.1643 179.95 41.1861 180.256 41.5574C180.541 41.9068 180.519 42.4527 180.169 42.7803L169.252 52.8039Z" fill="white"/>\n       <path fill-rule="evenodd" clip-rule="evenodd" d="M170.433 40.6836C168.639 40.2032 166.78 41.2514 166.298 43.0421C165.817 44.8547 166.911 46.6673 168.683 47.1259C170.477 47.6063 172.337 46.5581 172.818 44.7674C173.299 42.9766 172.227 41.1641 170.433 40.6836ZM171.177 44.3306C170.937 45.2041 170.018 45.7501 169.121 45.5098C168.202 45.2696 167.677 44.3524 167.917 43.4789C168.158 42.6054 169.077 42.0594 169.996 42.2997C170.893 42.5617 171.418 43.4571 171.177 44.3306Z" fill="#BFBFBF"/>\n       <path fill-rule="evenodd" clip-rule="evenodd" d="M179.447 46.7981C177.653 46.3177 175.793 47.3659 175.312 49.1566C174.831 50.9474 175.903 52.7818 177.697 53.2404C179.491 53.7208 181.35 52.6726 181.832 50.8818C182.313 49.113 181.241 47.2786 179.447 46.7981ZM180.191 50.4669C179.95 51.3404 179.031 51.8864 178.112 51.6462C177.193 51.3841 176.69 50.4888 176.931 49.6152C177.172 48.7417 178.091 48.1958 178.988 48.436C179.906 48.6544 180.432 49.5716 180.191 50.4669Z" fill="#BFBFBF"/>\n       <path fill-rule="evenodd" clip-rule="evenodd" d="M180.169 42.7802L169.252 52.8038C168.902 53.1096 168.377 53.0877 168.092 52.7165C167.786 52.3671 167.83 51.8211 168.158 51.4936L179.075 41.4699C179.425 41.1642 179.95 41.186 180.257 41.5573C180.541 41.9067 180.497 42.4526 180.169 42.7802Z" fill="#BFBFBF"/>\n       <path fill-rule="evenodd" clip-rule="evenodd" d="M223.729 30.5725C223.116 29.3059 221.322 29.3059 220.688 30.5725L219.135 33.739C218.719 34.5907 217.669 34.9401 216.837 34.4815L213.687 32.8218C212.44 32.1667 210.996 33.2368 211.236 34.6126L211.849 38.0193C212.024 38.9583 211.368 39.8537 210.405 39.9847L206.926 40.4651C205.526 40.6617 204.957 42.3869 205.986 43.3478L208.48 45.7281C209.18 46.3833 209.18 47.497 208.48 48.174L205.986 50.5543C204.957 51.537 205.526 53.2622 206.926 53.4369L210.405 53.9174C211.368 54.0484 212.002 54.9438 211.849 55.8828L211.236 59.2895C210.996 60.6653 212.44 61.7354 213.687 61.0803L216.837 59.4206C217.691 58.9838 218.719 59.3114 219.135 60.1631L220.688 63.3296C221.301 64.5962 223.095 64.5962 223.729 63.3296L225.282 60.1631C225.698 59.3114 226.748 58.962 227.58 59.4206L230.73 61.0803C231.977 61.7354 233.421 60.6653 233.181 59.2895L232.568 55.8828C232.393 54.9438 233.049 54.0484 234.012 53.9174L237.491 53.4369C238.891 53.2404 239.46 51.5152 238.431 50.5543L235.937 48.174C235.237 47.5188 235.237 46.4051 235.937 45.7281L238.431 43.3478C239.46 42.3651 238.891 40.6398 237.491 40.4651L234.012 39.9847C233.049 39.8537 232.415 38.9583 232.568 38.0193L233.181 34.6126C233.421 33.2368 231.977 32.1667 230.73 32.8218L227.58 34.4815C226.726 34.9183 225.698 34.5907 225.282 33.739L223.729 30.5725ZM216.356 43.4788C216.597 42.6053 217.516 42.0593 218.413 42.2995C219.331 42.5398 219.857 43.457 219.616 44.3305C219.375 45.204 218.456 45.75 217.559 45.5097C216.662 45.2695 216.137 44.3523 216.356 43.4788ZM218.872 40.6835C217.078 40.2031 215.218 41.2513 214.737 43.042C214.256 44.8328 215.328 46.6671 217.122 47.1476C218.916 47.628 220.775 46.5798 221.257 44.7891C221.76 42.9765 220.666 41.164 218.872 40.6835ZM227.448 48.4142C226.529 48.174 225.611 48.6981 225.392 49.5934C225.151 50.467 225.676 51.3842 226.595 51.6244C227.514 51.8646 228.433 51.3405 228.652 50.4451C228.87 49.5716 228.345 48.6544 227.448 48.4142ZM223.751 49.1567C224.232 47.366 226.092 46.3177 227.886 46.7982C229.68 47.2786 230.752 49.0912 230.271 50.9037C229.789 52.6944 227.93 53.7427 226.136 53.2622C224.342 52.7818 223.27 50.9474 223.751 49.1567ZM228.608 42.78C228.958 42.4742 228.98 41.9283 228.695 41.557C228.389 41.2076 227.864 41.164 227.536 41.4915L216.619 51.5152C216.268 51.8209 216.247 52.3669 216.531 52.7381C216.837 53.0875 217.362 53.1312 217.691 52.8036L228.608 42.78Z" fill="#BFBFBF"/>\n       <path d="M86.0258 60.5349L137.725 61.1682C139.694 61.19 141.269 62.806 141.225 64.7715L141.203 67.6978C141.181 69.6632 139.562 71.2355 137.593 71.1919L85.8945 70.5586C83.9254 70.5367 82.3502 68.9207 82.394 66.9553L82.4377 64.029C82.4596 62.0854 84.0567 60.5131 86.0258 60.5349Z" fill="#BFBFBF"/>\n       <path d="M89.3953 10.0013L141.029 10.6346C147.986 10.7219 153.543 16.4216 153.455 23.3661L153.105 51.0349C153.018 57.9794 147.308 63.5263 140.35 63.4389L88.7171 62.8056C81.7597 62.7183 76.2026 57.0185 76.2901 50.0741L76.6401 22.4053C76.7277 15.4608 82.4379 9.91391 89.3953 10.0013Z" fill="#BFBFBF"/>\n       <path d="M83.2693 9.91386L131.599 10.5253C138.556 10.6127 144.113 16.3124 144.026 23.2569L143.676 50.9257C143.588 57.8702 137.878 63.417 130.921 63.3297L82.5911 62.7182C75.6337 62.6309 70.0766 56.9311 70.1641 49.9866L70.5142 22.3179C70.6017 15.3952 76.312 9.8265 83.2693 9.91386Z" fill="#EBECEF"/>\n       <path d="M102.216 55.0098C112.39 58.8096 123.723 53.6558 127.529 43.5011C131.336 33.3464 126.173 22.0343 115.999 18.2345C105.826 14.4347 94.4929 19.5885 90.6861 29.7432C86.8792 39.8979 92.0425 51.21 102.216 55.0098Z" fill="white" stroke="#BFBFBF" stroke-miterlimit="10"/>\n       <path d="M109.283 22.2092L109.108 36.6223L101.713 41.3612" fill="white"/>\n       <path d="M109.283 22.2092L109.108 36.6223L101.713 41.3612" fill="white"/>\n       <path d="M109.283 22.2092L109.108 36.6223L101.713 41.3612" stroke="#BFBFBF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n       <path d="M1.09375 70.9077H312.906" stroke="#EBECEF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n       </svg>'])))}},{key:"getTriviaMoneyIcon",value:function(){return Rt.getTrustedHTML(nt||(nt=V(['<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0 3.40002C0 2.62681 0.626809 2 1.40002 2H12.2002C12.9734 2 13.6002 2.62681 13.6002 3.40002V10.2001C13.6002 10.9733 12.9734 11.6001 12.2002 11.6001H1.40002C0.626809 11.6001 0 10.9733 0 10.2001V3.40002ZM2.40004 3.00001V3.80003C2.40004 4.1314 2.1314 4.40004 1.80003 4.40004H1.00001V5.60005H1.80003C2.79415 5.60005 3.60005 4.79415 3.60005 3.80003V3.00001H2.40004ZM6.8001 8.8001C7.7942 8.8001 8.60013 7.99417 8.60013 7.00007C8.60013 6.00598 7.7942 5.20005 6.8001 5.20005C5.80597 5.20005 5.00007 6.00598 5.00007 7.00007C5.00007 7.99417 5.80597 8.8001 6.8001 8.8001ZM1.00001 9.20011H1.80003C2.1314 9.20011 2.40004 9.46875 2.40004 9.80012V10.6001H3.60005V9.80012C3.60005 8.80602 2.79415 8.00009 1.80003 8.00009H1.00001V9.20011ZM11.2002 9.80012C11.2002 9.46875 11.4688 9.20011 11.8002 9.20011H12.6002V8.00009H11.8002C10.8061 8.00009 10.0001 8.80602 10.0001 9.80012V10.6001H11.2002V9.80012ZM11.2002 3.80003V3.00001H10.0001V3.80003C10.0001 4.79415 10.8061 5.60005 11.8002 5.60005H12.6002V4.40004H11.8002C11.4688 4.40004 11.2002 4.1314 11.2002 3.80003Z" fill="#0F7B0F"/>\n        <path d="M1.9209 12.8C2.33587 13.5173 3.1115 14 3.99985 14H12.2C14.2987 14 16 12.2987 16 10.1999V5.99985C16 5.1115 15.5174 4.33587 14.8 3.9209V10.1999C14.8 11.6359 13.6359 12.8 12.2 12.8H1.9209Z" fill="#0F7B0F"/>\n        </svg>'])))}}]),t}();!function(t){t.PageStatus="pageStatus",t.EnabledFeatures="enabled_features",t.CouponsApiResponse="couponsApiResponse",t.PackageTrackingFreShown="packageTrackingFreShown",t.PackageTrackingUserConsented="packageTrackingUserConsented",t.PackageTrackerResponse="packageTrackingData",t.ShouldShowPackageTrackingNotification="shouldShowPackageTrackingNotification",t.EdgeDriverDataForFlyout="edgeDriverDataForFlyout",t.GuestCouponsApiResponse="guestCouponsApiResponse",t.AutofillProfileEnabled="autofillProfileEnabled",t.AutofillCreditCardEnabled="autofillCreditCardEnabled"}(ot||(ot={})),function(t){t.Large="txtLarge",t.Medium="txtMedium",t.Small="txtSmall",t.EmptyCoupon="txtEmptyCoupons"}(at||(at={})),function(t){t[t.COUPON=2]="COUPON",t[t.DEAL=2]="DEAL",t[t.PRICECOMPARISON=3]="PRICECOMPARISON",t[t.RECOMMENDATIONS=4]="RECOMMENDATIONS",t[t.SIMILARSELLERS=1]="SIMILARSELLERS",t[t.PRODUCTHISTORY=3]="PRODUCTHISTORY",t[t.TIPS=4]="TIPS",t[t.PAYMENT_OPTIONS=3]="PAYMENT_OPTIONS",t[t.ORDERTRACKING=1]="ORDERTRACKING",t[t.TOP_RETAILERS=4]="TOP_RETAILERS",t[t.GROCERY_COUPON=4]="GROCERY_COUPON",t[t.PRINTABLE_COUPON=4]="PRINTABLE_COUPON",t[t.PRINTABLE_COUPON_AUTO=2]="PRINTABLE_COUPON_AUTO",t[t.PREVIOUS_CASHBACK=3]="PREVIOUS_CASHBACK",t[t.AUTOSMARKETPLACE=3]="AUTOSMARKETPLACE"}(rt||(rt={})),function(t){t[t.Desktop=1]="Desktop",t[t.Mobile=2]="Mobile"}(st||(st={})),function(t){t[t.Dark=1]="Dark",t[t.Light=2]="Light"}(lt||(lt={})),function(t){t.Paid="cpc"}(ct||(ct={})),function(t){t[t.LTR=1]="LTR",t[t.RTL=2]="RTL"}(ut||(ut={})),function(t){t.Mouse="mouse",t.Keyboard="keyboard",t.Auto="auto",t.Banner="banner"}(dt||(dt={})),function(t){t.currency="placeholderCurrency"}(ht||(ht={})),function(t){t.Shipping="shipping",t.Used="Used",t.New="New",t.Refurbished="Refurbished",t.PriceDrop="price drop"}(pt||(pt={})),function(t){t.clippedSpan="clippedSpan"}(ft||(ft={})),function(t){t[t.PRINTABLE_COUPON=2]="PRINTABLE_COUPON",t[t.GROCERY_COUPON=3]="GROCERY_COUPON",t[t.COUPON=4]="COUPON",t[t.ATTAINABLECOUPON=5]="ATTAINABLECOUPON",t[t.GIFT_CARD=6]="GIFT_CARD",t[t.PRICEHISTORY=7]="PRICEHISTORY",t[t.PRICECOMPARISON=8]="PRICECOMPARISON",t[t.CASHBACK=9]="CASHBACK",t[t.COUPONCLIPPING=10]="COUPONCLIPPING",t[t.DEALS=11]="DEALS",t[t.RATINGSANDREVIEWS=12]="RATINGSANDREVIEWS",t[t.CHECKOUTAUTOFILL=13]="CHECKOUTAUTOFILL",t[t.RECOMMENDATIONS=14]="RECOMMENDATIONS",t[t.SIMILARSELLERS=15]="SIMILARSELLERS",t[t.ORDERSTATUSTRACKING=16]="ORDERSTATUSTRACKING",t[t.TOP_RETAILERS=17]="TOP_RETAILERS",t[t.TIPS=18]="TIPS",t[t.REWARD=19]="REWARD",t[t.PAYMENT_OPTIONS=20]="PAYMENT_OPTIONS",t[t.VIRTUAL_CARD=21]="VIRTUAL_CARD",t[t.EXCLUSIVECOUPONS=22]="EXCLUSIVECOUPONS",t[t.SUSTAINABILITY=23]="SUSTAINABILITY",t[t.PINTEREST=24]="PINTEREST",t[t.AUTOSMARKETPLACE=25]="AUTOSMARKETPLACE",t[t.PRODUCTHISTORY=98]="PRODUCTHISTORY",t[t.EMPTYCOUPON=99]="EMPTYCOUPON",t[t.MAX=100]="MAX"}(gt||(gt={})),function(t){t.CANARY="canary",t.STABLE="stable"}(mt||(mt={})),function(t){t.PRICECOMPARISON="3",t.PRICEHISTORY="4"}(vt||(vt={})),function(t){t.CHECKOUTAUTOFILL="CHECKOUTAUTOFILL",t.COUPON="COUPON",t.PRICECOMPARISON="PRICECOMPARISON",t.CASHBACK="CASHBACK",t.EMPTYCOUPON="EMPTYCOUPON",t.PRICEHISTORY="PRICEHISTORY",t.COUPONCLIPPING="COUPONCLIPPING",t.DEALS="DEALS",t.NUDGETIPSDATA="NUDGETIPSDATA",t.RATINGSANDREVIEWS="RATINGSANDREVIEWS",t.RECOMMENDATIONS="RECOMMENDATIONS",t.SIMILARSELLERS="SIMILARSELLERS",t.PRODUCTHISTORY="PRODUCTHISTORY",t.REWARD="REWARD",t.TIPS="TIPS",t.PAYMENT_OPTIONS="PAYMENT_OPTIONS",t.EXCLUSIVECOUPONS="EXCLUSIVECOUPONS",t.ORDERSTATUSTRACKING="ORDERSTATUSTRACKING",t.VIRTUAL_CARD="VIRTUAL_CARD",t.SUSTAINABILITY="SUSTAINABILITY",t.TOP_RETAILERS="TOP_RETAILERS",t.GROCERY_COUPON="GROCERY_COUPON",t.PRINTABLE_COUPON="PRINTABLE_COUPON",t.TRACKING_CONFIRMATION="TRACKING_CONFIRMATION",t.FEEDBACK="FEEDBACK",t.ViewedProductPriceDrop="ViewedProductPriceDrop",t.PINTEREST="PINTEREST",t.ATTAINABLECOUPONS="ATTAINABLECOUPONS",t.GIFT_CARD="GIFT_CARD",t.AUTOSMARKETPLACE="AUTOSMARKETPLACE"}(yt||(yt={})),function(t){t.CASHBACK="CASHBACK",t.CASHBACKCONFIRMATION="CASHBACKCONFIRMATION",t.CASHBACKTURNEDOFF="CASHBACKTURNEDOFF",t.HOMEPAGE="HOMEPAGE",t.REWARD="REWARD",t.SIMILARSELLERS="SIMILARSELLERS",t.PRICECOMPARISON="PRICECOMPARISON",t.EXCLUSIVECOUPONS="EXCLUSIVECOUPONS",t.MICRONOTIFICATION="MICRONOTIFICATION",t.TRACKING_CONFIRMATION="TRACKING_CONFIRMATION",t.VIRTUAL_CARD="VIRTUAL_CARD",t.ViewedProductPriceDrop="ViewedProductPriceDrop",t.SUSTAINABILITY="SUSTAINABILITY",t.ATTAINABLECOUPONS="ATTAINABLECOUPONS",t.GIFT_CARD="GIFT_CARD",t.AUTOSMARKETPLACE="AUTOSMARKETPLACE"}(Ct||(Ct={})),function(t){t[t.NOT_ACTIVATING=0]="NOT_ACTIVATING",t[t.STARTED=1]="STARTED",t[t.FAILED=2]="FAILED",t[t.FAILED_SWITCH_TO_MSA_PROFILE=3]="FAILED_SWITCH_TO_MSA_PROFILE",t[t.FAILED_SWITCH_TO_MSA_DECLINED=4]="FAILED_SWITCH_TO_MSA_DECLINED",t[t.FAILED_SIGN_INTO_PROFILE=5]="FAILED_SIGN_INTO_PROFILE",t[t.PENDING_ENROLL_REBATES_USER=6]="PENDING_ENROLL_REBATES_USER",t[t.PENDING_SWITCH_TO_MSA_PROFILE=7]="PENDING_SWITCH_TO_MSA_PROFILE",t[t.PENDING_SIGN_INTO_PROFILE=8]="PENDING_SIGN_INTO_PROFILE",t[t.PENDING_ACTIVATION_IN_PROFILE=9]="PENDING_ACTIVATION_IN_PROFILE",t[t.FAILED_ACTIVATION_NO_RETAILER_DATA=10]="FAILED_ACTIVATION_NO_RETAILER_DATA",t[t.FAILED_ACTIVATION_URL_FETCH=11]="FAILED_ACTIVATION_URL_FETCH",t[t.FAILED_ACTIVATION_INVALID_JSON=12]="FAILED_ACTIVATION_INVALID_JSON",t[t.FAILED_ACTIVATION_URL_PARSING=13]="FAILED_ACTIVATION_URL_PARSING",t[t.FAILED_ACTIVATION_URL_INVALID=14]="FAILED_ACTIVATION_URL_INVALID",t[t.FAILED_ACTIVATION_ENROLL_NAVIGATION_LOAD=15]="FAILED_ACTIVATION_ENROLL_NAVIGATION_LOAD",t[t.FAILED_ACTIVATION_ENROLL_NAVIGATION_TIMED_OUT=16]="FAILED_ACTIVATION_ENROLL_NAVIGATION_TIMED_OUT",t[t.FAILED_ACTIVATION_ATTRIBUTION_NAVIGATION_LOAD=17]="FAILED_ACTIVATION_ATTRIBUTION_NAVIGATION_LOAD",t[t.FAILED_ACTIVATION_ATTRIBUTION_NAVIGATION_TIMED_OUT=18]="FAILED_ACTIVATION_ATTRIBUTION_NAVIGATION_TIMED_OUT",t[t.ACTIVATED=19]="ACTIVATED",t[t.FAILED_ACTIVATION_UNIFIED_API_BACKED_OFF=20]="FAILED_ACTIVATION_UNIFIED_API_BACKED_OFF",t[t.FAILED_ACTIVATION_ENROLL_VERIFY_COOKIE=21]="FAILED_ACTIVATION_ENROLL_VERIFY_COOKIE",t[t.FAILED_ACTIVATION_ENROLL_COOKIE_TIMED_OUT=22]="FAILED_ACTIVATION_ENROLL_COOKIE_TIMED_OUT",t[t.PENDING_BING_SSO=23]="PENDING_BING_SSO",t[t.PENDING_BING_IDENTITY_CHECK=24]="PENDING_BING_IDENTITY_CHECK"}(bt||(bt={})),function(t){t[t.NOT_ACTIVATING=0]="NOT_ACTIVATING",t[t.STARTED=1]="STARTED",t[t.FAILED=2]="FAILED",t[t.FAILED_SWITCH_TO_MSA_PROFILE=3]="FAILED_SWITCH_TO_MSA_PROFILE",t[t.FAILED_SWITCH_TO_MSA_DECLINED=4]="FAILED_SWITCH_TO_MSA_DECLINED",t[t.FAILED_SIGN_INTO_PROFILE=5]="FAILED_SIGN_INTO_PROFILE",t[t.PENDING_ENROLL_REWARDS_USER=6]="PENDING_ENROLL_REWARDS_USER",t[t.PENDING_SWITCH_TO_MSA_PROFILE=7]="PENDING_SWITCH_TO_MSA_PROFILE",t[t.PENDING_SIGN_INTO_PROFILE=8]="PENDING_SIGN_INTO_PROFILE",t[t.PENDING_ACTIVATION_IN_PROFILE=9]="PENDING_ACTIVATION_IN_PROFILE",t[t.FAILED_ACTIVATION_ENROLL_NAVIGATION_LOAD=10]="FAILED_ACTIVATION_ENROLL_NAVIGATION_LOAD",t[t.FAILED_ACTIVATION_ENROLL_NAVIGATION_TIMED_OUT=11]="FAILED_ACTIVATION_ENROLL_NAVIGATION_TIMED_OUT",t[t.FAILED_ACTIVATION_ATTRIBUTION_NAVIGATION_LOAD=12]="FAILED_ACTIVATION_ATTRIBUTION_NAVIGATION_LOAD",t[t.FAILED_ACTIVATION_ATTRIBUTION_NAVIGATION_TIMED_OUT=13]="FAILED_ACTIVATION_ATTRIBUTION_NAVIGATION_TIMED_OUT",t[t.ACTIVATED=14]="ACTIVATED"}(St||(St={})),function(t){t.CONTEXTUAL="CONTEXTUAL",t.HOME="HOME"}(xt||(xt={})),function(t){t.VIEWALL="viewAll",t.VIEWALLPC="viewAllPC",t.VIEWPRICEHISTORY="viewPriceHistory"}(Et||(Et={})),function(t){t.APPLY_COUPON_AND_AUTO_FILL="APPLY_COUPON_AND_AUTO_FILL",t.APPLY_COUPON="APPLY_COUPON",t.AUTO_FILL="AUTO_FILL",t.APPLY_COUPON_AND_AUTO_FILL_FOR_ZIP="APPLY_COUPON_AND_AUTO_FILL_FOR_ZIP",t.AUTO_FILLL_FOR_ZIP="AUTO_FILLL_FOR_ZIP"}(At||(At={})),function(t){t.CARD="card",t.ZIP="zipPay"}(Tt||(Tt={})),function(t){t.VIRTUAL_CARD_HEADER_TITLE="VirtualCardHeaderTitle",t.VIRTUAL_CARD_HEADER_DESCRIPTION="VirtualCardHeaderDescription",t.VIRTUAL_CARD_HEADER_AUTOFILL_FAILED_DESCRIPTION="VirtualCardHeaderAutofillFailedDescription",t.PAYMENT="Payment",t.VISUALIZED_CARD_DETAILS="VisualizedCardDetails",t.VIRTUAL_CARD_URL="VirtualCardURL"}(It||(It={})),function(t){t.PRICEDROP="PRICEDROP",t.PRICEINCREASE="PRICEINCREASE"}(Dt||(Dt={})),function(t){t.AUTOS="Autos"}(wt||(wt={})),function(t){t.CLOSE="btnFlyoutClose",t.MENU="btnMainMenu",t.MENUCONTENT="divMenuContent",t.SNOOZE="btnFlyoutSnoozeOn",t.SNOOZE_CONTENT="divSnoozeContent"}(kt||(kt={}));var Pt=r((function t(){s(this,t),f(this,"AutoApplyStatus",void 0),f(this,"ExpressCheckoutStatus",void 0)})),Mt=function(){function t(){s(this,t),f(this,"shopping",void 0),f(this,"shoppingPersistent",void 0),f(this,"openedWith",void 0),f(this,"autoShowAllowed",void 0),f(this,"isOrganicFlowEnabled",void 0),f(this,"isShoppingPersonalizationEnabled",void 0),f(this,"shouldShowCookieConsent",void 0),f(this,"shouldShowBanner",void 0),f(this,"bannerContext",void 0),f(this,"domain",void 0),f(this,"foundLowerPrice",void 0),f(this,"showPCBannerUX",void 0),f(this,"currentUrl",void 0),f(this,"currentTheme",void 0),f(this,"isCheckoutPage",void 0),f(this,"currentDirection",void 0),f(this,"lastCommittedURL",void 0),f(this,"resourcesEndpoint",void 0),f(this,"urlPrefix",void 0),f(this,"popupOrigination",void 0),f(this,"autoshowFeaturePref",void 0),f(this,"currentDevice",void 0),f(this,"seeInfoFromPCNotification",void 0),f(this,"pageStatus",void 0),f(this,"microNotificationTitle",void 0),f(this,"isPane",void 0),f(this,"isHub",void 0),f(this,"isRebatesEnabled",void 0),f(this,"edgeDriverDataForFlyout",void 0),f(this,"pageLocale",void 0),f(this,"channel",void 0)}return r(t,[{key:"Create",value:function(t,e){var i=document.createElement("msft-edge-shopping"),n=document.createElement("msft-edge-shopping");this.currentDevice=t;var o=e.GetLoadTimeDataValue("dark_theme",!1);this.currentTheme=lt.Light,o&&(this.currentTheme=lt.Dark);var a=e.GetLoadTimeDataValue("is_rtl",!1);this.currentDirection=ut.LTR,a&&(this.currentDirection=ut.RTL),this.autoShowAllowed=e.GetLoadTimeDataValue("isAutoShowAllowed",!1),this.openedWith=e.GetLoadTimeDataValue("open_action",void 0),this.currentUrl=e.GetLoadTimeDataValue("url",void 0),this.shouldShowBanner=e.GetLoadTimeDataValue("shouldShowBanner",!1),this.bannerContext=e.GetLoadTimeDataValue("bannerContext",""),this.shouldShowCookieConsent=e.GetLoadTimeDataValue("shouldShowCookieConsent",!1),this.foundLowerPrice=e.GetLoadTimeDataValue("foundLowerPrice",void 0),this.showPCBannerUX=e.GetLoadTimeDataValue("showPCBannerUX",!1),this.isOrganicFlowEnabled=e.GetLoadTimeDataValue("allowOrganicRebates",!1),this.isShoppingPersonalizationEnabled=e.GetLoadTimeDataValue("is_personalized_shopping_enabled",!1),this.isCheckoutPage=e.GetLoadTimeDataValue("isCheckoutPage",!1),this.lastCommittedURL=e.GetLoadTimeDataValue("lastCommittedURL",void 0),this.popupOrigination=e.GetLoadTimeDataValue("popupOrigination",void 0),this.autoshowFeaturePref=e.GetLoadTimeDataValue("autoShowFeatureDisabledPref",void 0),this.microNotificationTitle=e.GetLoadTimeDataValue("last_label_text",void 0),this.isPane=e.GetLoadTimeDataValue("is_hub_pinned",!1),this.isHub=e.GetLoadTimeDataValue("is_hub",!1),this.isRebatesEnabled=e.GetLoadTimeDataValue("is_rebates_enabled",!0),this.pageLocale=e.GetLoadTimeDataValue("page_locale",void 0),this.channel=e.GetLoadTimeDataValue("channel",""),this.UpdatePageStatus(e),this.UpdateEdgeDriverDataForFlyout(e),this.domain="",this.shopping=i,this.shoppingPersistent=n,this.seeInfoFromPCNotification=!1,e.IsServerData()||t===st.Mobile?this.urlPrefix="":this.urlPrefix="edge://image?",this.resourcesEndpoint=this.urlPrefix+"https://www.bing.com/api/shopping/v1/ux/images/"}},{key:"UpdatePageStatus",value:function(t){var e=new Pt,i=t.GetLoadTimeDataValue(ot.PageStatus,void 0);if(i)try{var n=JSON.parse(i);e.AutoApplyStatus=n.auto_apply_status,e.ExpressCheckoutStatus=n.express_checkout_status}catch(t){}this.pageStatus=e}},{key:"UpdateEdgeDriverDataForFlyout",value:function(t){this.edgeDriverDataForFlyout=void 0;var e=t.GetLoadTimeDataValue(ot.EdgeDriverDataForFlyout,void 0);if(e)try{this.edgeDriverDataForFlyout=JSON.parse(e)}catch(t){}}}]),t}(),Nt=function(){function t(){s(this,t),f(this,"commissionType",void 0),f(this,"commissionValue",void 0),f(this,"isRebatesSupportedDomain",void 0),f(this,"isRebatesUser",void 0),f(this,"merchantName",void 0)}return r(t,null,[{key:"Create",value:function(e){var i,n,o,a,r,s=new t;return s.commissionType=null===(i=e.highestCashbackCategory)||void 0===i?void 0:i.commissionType,s.commissionValue=null===(n=e.highestCashbackCategory)||void 0===n?void 0:n.commissionValue,s.isRebatesSupportedDomain=null!==(o=e.IsRebatesSupportedDomain)&&void 0!==o?o:null,s.isRebatesUser=null!==(a=null===(r=e.userRebateResponse)||void 0===r?void 0:r.isRebatesUser)&&void 0!==a&&a,s.merchantName=e.merchantName,s}}]),t}(),Lt=function(){function t(){s(this,t),f(this,"title",void 0),f(this,"offerUrl",void 0)}return r(t,null,[{key:"Create",value:function(e){var i=new t;return i.title=e.title,i.offerUrl=e.offerUrl,i}}]),t}(),_t=function(){function t(e,i){s(this,t),f(this,"Lifetime",void 0),f(this,"Timestamp",void 0),this.Lifetime=e,this.Timestamp=i||t.Now()}return r(t,[{key:"Expired",value:function(){return t.Now()-this.Timestamp>=this.Lifetime}}],[{key:"Now",value:function(){return Math.round((new Date).getTime()/1e3)}}]),t}(),Ft=function(){function t(e){s(this,t),f(this,"Type",void 0),f(this,"ID",void 0),this.Type=e,this.ID=""}return r(t,[{key:"toString",value:function(){return JSON.stringify(this)}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))}}]),t}();function Ht(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=p(t);if(e){var o=p(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return h(this,i)}}var Bt=function(t){u(i,t);var e=Ht(i);function i(t,n){var o;return s(this,i),f(l(o=e.call(this,w.ErrorResponse)),"ErrorMsg",void 0),f(l(o),"ErrorName",void 0),o.ErrorMsg=t,o.ErrorName=n,o}return r(i)}(Ft),Ut=function(){function t(){s(this,t)}return r(t,null,[{key:"GenerateErrorMessage",value:function(t,e,i){var n=null!=t?t:"";return i&&(n+="\r\nDOM element path: '"+i+"'"),n+="\r\nFriendly name: '"+e+"'"}},{key:"GetDomainName",value:function(t){if(!t)return"";var e=t.toLowerCase().match(/(w){3}.?\./);return e&&null!=e.index&&e[0]?t.substring(e.index+e[0].length):t}},{key:"GetProcessedString",value:function(e,i,n){if(n&&(n===M.Opal||n===M.EdgeMobile||n===M.Sapphire||n===M.RBC)){if(i===R.PlainString)return t.escapePlainString(e);if(i===R.JsonString)return t.escapeJsonString(e)}return e}},{key:"escapeJsonString",value:function(t){return t?t.replace(/\"|'/g,'\\"'):t}},{key:"escapePlainString",value:function(t){return t?t.replace(/"|'/g,'\\"'):t}},{key:"ModifyObjectProperty",value:function(t,e,i){Object.defineProperty(t,e,{value:i,writable:!0})}},{key:"GenerateErrorResponse",value:function(e,i){return new Bt(t.GetProcessedString(e,R.JsonString,i))}},{key:"GetPriceStringAsNumber",value:function(e,i){return i&&(e=e.replace(/[^0-9\.,]+/g,""),!1===t.IsUsCurrencyFormat(e)&&(e=this.SwapCommaAndPeriod(e))),parseFloat(e.replace(/[^0-9\.]+/g,""))}},{key:"IsUsCurrencyFormat",value:function(t){var e=t.lastIndexOf(","),i=t.lastIndexOf(".");return!(i>-1&&e>-1&&e>i)&&(!(i>-1&&t.length-i-1>2)&&!(e>-1&&t.length-e-1<=2))}},{key:"SwapCommaAndPeriod",value:function(t){return t.replace(/[,.]/g,(function(t){return","===t?".":","}))}},{key:"ThrowError",value:function(t,e){var i=new Error(e);throw i.name=t,i}}]),t}(),Vt=Ut;function $t(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return Gt(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Gt(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function Gt(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var zt=function(){function t(){s(this,t)}var i,n;return r(t,null,[{key:"Sleep",value:function(t){return new Promise((function(e){return setTimeout(e,t)}))}},{key:"WaitForCondition",value:(n=e(o().mark((function e(i,n){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=(new Date).getTime();case 2:return e.next=4,i();case 4:if(e.t0=!e.sent,!e.t0){e.next=7;break}e.t0=a+n>(new Date).getTime();case 7:if(!e.t0){e.next=12;break}return e.next=10,t.Sleep(100);case 10:e.next=2;break;case 12:return e.next=15,i();case 15:return e.abrupt("return",e.sent);case 16:case"end":return e.stop()}}),e)}))),function(t,e){return n.apply(this,arguments)})},{key:"WaitForSyncCondition",value:(i=e(o().mark((function e(i,n){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=(new Date).getTime();case 2:if(!(a+n>(new Date).getTime())){e.next=9;break}if(!i()){e.next=5;break}return e.abrupt("return",!0);case 5:return e.next=7,t.Sleep(100);case 7:e.next=2;break;case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)}))),function(t,e){return i.apply(this,arguments)})},{key:"IsValidDataField",value:function(t){return null!=t&&t.length>0&&"null"!==t}},{key:"IsOnPage",value:function(e,i){if(t.IsValidDataField(e)){var n,o=e.toLowerCase().replace(/\s+/g,"").split(","),a=i.toLowerCase(),r=!1,s=$t(o);try{for(s.s();!(n=s.n()).done;){var l=n.value;if(a.indexOf(l)>=0){r=!0;break}}}catch(t){s.e(t)}finally{s.f()}return r}return!1}}]),t}(),Wt=zt,Kt=function(){function t(){s(this,t),f(this,"clipCouponSelector",void 0),f(this,"signedInSelector",void 0),f(this,"discountSelector",void 0),f(this,"orderTotalDataElementSelector",void 0),f(this,"clippedDiscountSelector",void 0)}return r(t,null,[{key:"Create",value:function(e){var i=new t;return i.clipCouponSelector=e.clipCouponSelector,i.signedInSelector=e.signedInSelector,i.discountSelector=e.discountSelector,i.orderTotalDataElementSelector=e.orderTotalDataElementSelector,i.clippedDiscountSelector=e.clippedDiscountSelector,i}}]),t}(),jt=function(){function t(){s(this,t),f(this,"otherSellersOverlayLinkSelector",void 0),f(this,"otherSellerOfferElementSelector",void 0),f(this,"otherSellerHeadingSelector",void 0),f(this,"otherSellerPriceSelector",void 0),f(this,"otherSellerNameSelector",void 0),f(this,"productImageSelector",void 0),f(this,"otherSellerRatingSelector",void 0),f(this,"otherSellerDeliverySelector",void 0),f(this,"otherSellerAddButtonSelector",void 0),f(this,"otherSellerAddedConfirmationSelector",void 0)}return r(t,null,[{key:"Create",value:function(e){var i=new t;return i.otherSellersOverlayLinkSelector=e.otherSellersOverlayLinkSelector,i.otherSellerOfferElementSelector=e.otherSellerOfferElementSelector,i.otherSellerHeadingSelector=e.otherSellerHeadingSelector,i.otherSellerPriceSelector=e.otherSellerPriceSelector,i.otherSellerNameSelector=e.otherSellerNameSelector,i.productImageSelector=e.productImageSelector,i.otherSellerRatingSelector=e.otherSellerRatingSelector,i.otherSellerDeliverySelector=e.otherSellerDeliverySelector,i.otherSellerAddButtonSelector=e.otherSellerAddButtonSelector,i.otherSellerAddedConfirmationSelector=e.otherSellerAddedConfirmationSelector,i}}]),t}(),Yt=function(){function t(){s(this,t),f(this,"domainSelector",void 0),f(this,"productTitleSelector",void 0),f(this,"productImageSelector",void 0),f(this,"productLinkSelector",void 0)}return r(t,null,[{key:"Create",value:function(e){var i=new t;return i.domainSelector=e.domainSelector,i.productTitleSelector=e.productTitleSelector,i.productImageSelector=e.productImageSelector,i.productLinkSelector=e.productLinkSelector,i}}]),t}(),qt=function(){function t(){s(this,t),f(this,"descriptionSelector",void 0),f(this,"profileImageSelector",void 0),f(this,"influencerInfoSelector",void 0),f(this,"influencerIdSelector",void 0),f(this,"influencerFollowers",void 0)}return r(t,null,[{key:"Create",value:function(e){var i=new t;return i.descriptionSelector=e.descriptionSelector,i.profileImageSelector=e.profileImageSelector,i.influencerInfoSelector=e.influencerInfoSelector,i.influencerIdSelector=e.influencerIdSelector,i.influencerFollowers=e.influencerFollowers,i}}]),t}(),Xt=function(){function t(){s(this,t),f(this,"inputBoxSelector",void 0),f(this,"applyButtonSelector",void 0),f(this,"removeCouponButtonSelector",void 0),f(this,"orderTotalDataElementSelector",void 0),f(this,"orderSubTotalElementSelector",void 0),f(this,"enabledTips",void 0),f(this,"couponAcceptedMessageElementSelector",void 0),f(this,"errorMessageCloseButtonSelector",void 0),f(this,"waitBeforeReApplyingNextCoupon",void 0),f(this,"waitAfterApplyingCurrentCoupon",void 0),f(this,"checkoutPageUrl",void 0),f(this,"refreshAfterApplying",void 0),f(this,"refreshAfterRemoving",void 0),f(this,"closeModal",void 0),f(this,"layoutClickSelector",void 0),f(this,"clickBeforeStartSelector",void 0),f(this,"errorMessageSelector",void 0),f(this,"domMutationEnabled",void 0),f(this,"couponRemovalNotNeeded",void 0),f(this,"appliedCouponSelector",void 0),f(this,"finalCheckoutButtonSelector",void 0),f(this,"otherSellerSelectors",void 0),f(this,"clippingSelectors",void 0),f(this,"backgroundAAEnabled",void 0),f(this,"socialSelectors",void 0),f(this,"pinterestSelectors",void 0)}return r(t,null,[{key:"Create",value:function(e){var i=new t;return i.inputBoxSelector=e.inputBoxSelector,i.applyButtonSelector=e.applyButtonSelector,i.removeCouponButtonSelector=e.removeCouponButtonSelector,i.orderTotalDataElementSelector=e.orderTotalDataElementSelector,i.orderSubTotalElementSelector=e.orderSubTotalElementSelector,i.enabledTips=e.enabledTips,i.couponAcceptedMessageElementSelector=e.couponAcceptedMessageElementSelector,i.errorMessageCloseButtonSelector=e.errorMessageCloseButtonSelector,i.waitBeforeReApplyingNextCoupon=e.waitBeforeReApplyingNextCoupon,i.waitAfterApplyingCurrentCoupon=e.waitAfterApplyingCurrentCoupon,i.checkoutPageUrl=e.checkoutPageUrl,i.refreshAfterApplying=e.refreshAfterApplying,i.refreshAfterRemoving=e.refreshAfterRemoving,i.closeModal=e.closeModal,i.clickBeforeStartSelector=e.clickBeforeStartSelector,i.errorMessageSelector=e.errorMessageSelector,i.domMutationEnabled=e.domMutationEnabled,i.couponRemovalNotNeeded=e.couponRemovalNotNeeded,i.appliedCouponSelector=e.appliedCouponSelector,i.finalCheckoutButtonSelector=e.finalCheckoutButtonSelector,i.layoutClickSelector=e.layoutClickSelector,i.backgroundAAEnabled=e.backgroundAAEnabled,e.otherSellerSelectors&&(i.otherSellerSelectors=jt.Create(e.otherSellerSelectors)),e.clippingSelectors&&(i.clippingSelectors=Kt.Create(e.clippingSelectors)),e.socialSelectors&&(i.socialSelectors=qt.Create(e.socialSelectors)),e.pinterestSelectors&&(i.pinterestSelectors=Yt.Create(e.pinterestSelectors)),i}},{key:"Process",value:function(t,e){return!e||e!==M.Opal&&e!==M.EdgeMobile&&e!==M.Sapphire||(t.inputBoxSelector=Vt.escapeJsonString(t.inputBoxSelector),t.applyButtonSelector=Vt.escapeJsonString(t.applyButtonSelector),t.removeCouponButtonSelector=Vt.escapeJsonString(t.removeCouponButtonSelector),t.orderTotalDataElementSelector=Vt.escapeJsonString(t.orderTotalDataElementSelector),t.orderSubTotalElementSelector=Vt.escapeJsonString(t.orderSubTotalElementSelector),t.enabledTips=Vt.escapeJsonString(t.enabledTips),t.couponAcceptedMessageElementSelector=Vt.escapeJsonString(t.couponAcceptedMessageElementSelector),t.errorMessageCloseButtonSelector=Vt.escapeJsonString(t.errorMessageCloseButtonSelector),t.closeModal=Vt.escapeJsonString(t.closeModal),t.clickBeforeStartSelector=Vt.escapeJsonString(t.clickBeforeStartSelector),t.layoutClickSelector=Vt.escapeJsonString(t.layoutClickSelector),t.errorMessageSelector=Vt.escapeJsonString(t.errorMessageSelector)),t}}]),t}();function Zt(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return Jt(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Jt(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function Jt(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var Qt=function(){function t(){s(this,t)}return r(t,null,[{key:"IsOnCheckoutPage",value:function(t,e){return!(!e||!e.retailerData)&&e.retailerData.UpdateCurrentCheckoutPage(t)}},{key:"GetHtmlElement",value:function(t){var e,i=Zt(t.split(";"));try{for(i.s();!(e=i.n()).done;){var n=e.value;try{var o=document.querySelector(n);if(o)return o}catch(t){}}}catch(t){i.e(t)}finally{i.f()}return null}},{key:"GetHtmlElements",value:function(t){var e,i=[],n=Zt(t.split(";"));try{for(n.s();!(e=n.n()).done;){var o=e.value;try{var a=document.querySelector(o);a&&i.push(a)}catch(t){}}}catch(t){n.e(t)}finally{n.f()}return i}}]),t}(),te=Qt,ee=function(){function t(e,i,n,o,a){s(this,t),f(this,"Text",void 0),f(this,"IconType",void 0),f(this,"MinimumPurchase",void 0),f(this,"RetailerData",void 0),f(this,"CheckoutPageUrl",void 0),this.Text=e,this.IconType=i,this.MinimumPurchase=n,this.RetailerData=o,this.CheckoutPageUrl=a}return r(t,[{key:"GetAmountForFreeShipping",value:function(){var t=this.RetailerData.GetCurrentCheckoutPageByPathName(location.pathname);if(t){var e=t.orderSubTotalElementSelector,i=t.orderTotalDataElementSelector;if(e){var n,o=null===(n=te.GetHtmlElement(e))||void 0===n?void 0:n.innerText;if(o&&this.MinimumPurchase)return this.MinimumPurchase-Vt.GetPriceStringAsNumber(o)}else if(i){var a,r=null===(a=te.GetHtmlElement(i))||void 0===a?void 0:a.innerText;if(r&&this.MinimumPurchase)return this.MinimumPurchase-Vt.GetPriceStringAsNumber(r)}}return 0}}]),t}();function ie(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return ne(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return ne(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function ne(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var oe=function(){function t(){s(this,t),f(this,"domainName",void 0),f(this,"productPageUrl",void 0),f(this,"productImageSelector",void 0),f(this,"productNameSelector",void 0),f(this,"productPriceSelector",void 0),f(this,"allCheckoutPages",void 0),f(this,"checkoutPageKey",void 0),f(this,"orderConfirmationPageUrl",void 0),f(this,"orderConfirmationRegex",void 0),f(this,"exclusiveMarket",void 0),f(this,"tips",void 0)}return r(t,[{key:"UpdateCurrentCheckoutPage",value:function(t){for(var e=0;e<this.allCheckoutPages.length;e++){if(Wt.IsOnPage(this.allCheckoutPages[e].checkoutPageUrl,t))return this.checkoutPageKey=e,!0}return this.checkoutPageKey=null,!1}},{key:"GetCurrentCheckoutPage",value:function(){if(null!=this.checkoutPageKey)return this.allCheckoutPages[this.checkoutPageKey]}},{key:"GetCurrentCheckoutPageByPathName",value:function(t){var e,i=ie(this.allCheckoutPages);try{for(i.s();!(e=i.n()).done;){var n=e.value;if("none"===n.enabledTips)return;if(Wt.IsOnPage(n.checkoutPageUrl,t))return n}}catch(t){i.e(t)}finally{i.f()}}},{key:"CreateCheckoutPageList",value:function(t){if(this.allCheckoutPages=[],t.allCheckoutPages&&t.allCheckoutPages.length>0){var e,i=ie(t.allCheckoutPages);try{for(i.s();!(e=i.n()).done;){var n=e.value;this.allCheckoutPages.push(Xt.Create(n))}}catch(t){i.e(t)}finally{i.f()}}}},{key:"CreateTipsList",value:function(t){if(t.tips){this.tips=[];var e,i=ie(t.tips);try{for(i.s();!(e=i.n()).done;){var n=e.value;this.tips.push(new ee(n.text,n.iconType,n.minimumPurchase,this,t.checkoutPageUrl))}}catch(t){i.e(t)}finally{i.f()}}}}],[{key:"Create",value:function(e){var i=new t;return i.domainName=e.domainName,i.productPageUrl=e.productPageUrl,i.productImageSelector=e.productImageSelector,i.productNameSelector=e.productNameSelector,i.productPriceSelector=e.productPriceSelector,i.exclusiveMarket=e.exclusiveMarket,i.CreateCheckoutPageList(e),i.CreateTipsList(e),i}},{key:"Process",value:function(t,e){if(e&&(e===M.Opal||e===M.EdgeMobile||e===M.Sapphire)){t.productImageSelector=Vt.escapeJsonString(t.productImageSelector),t.productNameSelector=Vt.escapeJsonString(t.productNameSelector),t.productPriceSelector=Vt.escapeJsonString(t.productPriceSelector);for(var i=0;i<t.allCheckoutPages.length;i++)t.allCheckoutPages[i]=Xt.Process(t.allCheckoutPages[i],e)}return t}}]),t}();function ae(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return re(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return re(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function re(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function se(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=p(t);if(e){var o=p(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return h(this,i)}}var le=function(t){u(i,t);var e=se(i);function i(t){var n;return s(this,i),f(l(n=e.call(this,i.thirtyMinutesExpiryInSeconds,t)),"coupons",[]),f(l(n),"deals",[]),f(l(n),"retailerData",void 0),f(l(n),"cashback",void 0),f(l(n),"errorCode",void 0),f(l(n),"impressionId",void 0),n}return r(i,[{key:"HasCoupons",value:function(){return this.coupons&&this.coupons.length>0}},{key:"HasDeals",value:function(){return this.deals&&this.deals.length>0}},{key:"GetOfferCount",value:function(){return this.HasCoupons()?this.coupons.length:this.HasDeals()?this.deals.length:0}}],[{key:"Create",value:function(t){if(t){var e=new i(t.Timestamp);if(t.errorCode&&(e.errorCode=t.errorCode),t.retailerData&&(e.retailerData=oe.Create(t.retailerData)),e.coupons=[],t.coupons){var n,o=ae(t.coupons);try{for(o.s();!(n=o.n()).done;){var a=n.value;e.coupons.push(a)}}catch(t){o.e(t)}finally{o.f()}}if(e.deals=[],t.deals){var r,s=ae(t.deals);try{for(s.s();!(r=s.n()).done;){var l=r.value;e.deals.push(Lt.Create(l))}}catch(t){s.e(t)}finally{s.f()}}return t.cashback&&(e.cashback=Nt.Create(t.cashback)),t.impressionId&&(e.impressionId=t.impressionId),e}return new i}},{key:"Process",value:function(t,e){return t.retailerData&&(t.retailerData=oe.Process(t.retailerData,e)),t}}]),i}(_t);f(le,"thirtyMinutesExpiryInSeconds",1800);var ce=le;function ue(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return de(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return de(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function de(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var he,pe,fe,ge=function(t){var e=function(){var t=new Map;return t.set("ALABAMA","AL"),t.set("ALASKA","AK"),t.set("ARIZONA","AZ"),t.set("ARKANSAS","AR"),t.set("CALIFORNIA","CA"),t.set("COLORADO","CO"),t.set("CONNECTICUT","CT"),t.set("DELAWARE","DE"),t.set("DISTRICT OF COLUMBIA","DC"),t.set("WASHINGTON DC","DC"),t.set("FLORIDA","FL"),t.set("GEORGIA","GA"),t.set("HAWAII","HI"),t.set("IDAHO","ID"),t.set("ILLINOIS","IL"),t.set("INDIANA","IN"),t.set("IOWA","IA"),t.set("KANSAS","KS"),t.set("KENTUCKY","KY"),t.set("LOUISIANA","LA"),t.set("MAINE","ME"),t.set("MARYLAND","MD"),t.set("MASSACHUSETTS","MA"),t.set("MICHIGAN","MI"),t.set("MINNESOTA","MN"),t.set("MISSISSIPPI","MS"),t.set("MISSOURI","MO"),t.set("MONTANA","MT"),t.set("NEBRASKA","NE"),t.set("NEVADA","NV"),t.set("NEW HAMPSHIRE","NH"),t.set("NEW JERSEY","NJ"),t.set("NEW MEXICO","NM"),t.set("NEW YORK","NY"),t.set("NORTH CAROLINA","NC"),t.set("NORTH DAKOTA","ND"),t.set("OHIO","OH"),t.set("OKLAHOMA","OK"),t.set("OREGON","OR"),t.set("PENNSYLVANIA","PA"),t.set("RHODE ISLAND","RI"),t.set("SOUTH CAROLINA","SC"),t.set("SOUTH DAKOTA","SD"),t.set("TENNESSEE","TN"),t.set("TEXAS","TX"),t.set("UTAH","UT"),t.set("VERMONT","VT"),t.set("VIRGINIA","VA"),t.set("WASHINGTON","WA"),t.set("WEST VIRGINIA","WV"),t.set("WISCONSIN","WI"),t.set("WYOMING","WY"),t.set("VIRGIN ISLANDS","VI"),t.set("U.S. VIRGIN ISLANDS","VI"),t.set("PALAU","PW"),t.set("N. MARIANA ISLANDS","MP"),t.set("NORTHERN MARIANA ISLANDS","MP"),t.set("GUAM","GU"),t.set("AMERICAN SAMOA","AS"),t.set("MICRONESIA","FM"),t.set("MARSHALL ISLANDS","MH"),t}(),i=new Set(e.values()),n=t.toUpperCase();if(i.has(n))return[n,!0];var o=e.get(n);return void 0!==o?[o,!0]:[n,!1]},me=function(t,e){var i=parseInt(t.substr(0,3),10),n=function(){var t=new Map;return t.set("NY",[[5,5],[100,149]]),t.set("PR",[[6,7],[9,9]]),t.set("VI",[[8,8]]),t.set("MA",[[10,27],[55,55]]),t.set("RI",[[28,29]]),t.set("NH",[[30,38]]),t.set("ME",[[39,49]]),t.set("VT",[[50,54],[56,59]]),t.set("CT",[[60,69]]),t.set("NJ",[[70,89]]),t.set("AE",[[90,99]]),t.set("PA",[[150,196]]),t.set("DE",[[197,199]]),t.set("DC",[[200,200],[202,205]]),t.set("VA",[[201,201],[220,246]]),t.set("MD",[[206,212],[214,219]]),t.set("WV",[[247,268]]),t.set("NC",[[270,289]]),t.set("SC",[[290,299]]),t.set("GA",[[300,319],[398,399]]),t.set("FL",[[320,339],[341,342],[344,344],[346,347],[349,349]]),t.set("AA",[[340,340]]),t.set("AL",[[350,352],[354,369]]),t.set("TN",[[370,385]]),t.set("MS",[[386,397]]),t.set("KY",[[400,427],[471,471]]),t.set("OH",[[430,459]]),t.set("IN",[[460,470],[472,479]]),t.set("MI",[[480,499]]),t.set("IA",[[500,528]]),t.set("WI",[[530,532],[534,535],[537,549]]),t.set("MN",[[550,551],[553,566]]),t.set("ND",[[567,567],[580,588]]),t.set("SD",[[570,577]]),t.set("MT",[[590,599]]),t.set("IL",[[600,620],[622,629]]),t.set("MO",[[630,631],[633,641],[644,658]]),t.set("KS",[[660,662],[664,679]]),t.set("NE",[[680,681],[683,693]]),t.set("LA",[[700,701],[703,708],[710,714]]),t.set("AR",[[716,729]]),t.set("OK",[[730,731],[734,741],[743,749]]),t.set("TX",[[733,733],[750,799],[885,885]]),t.set("CO",[[800,816]]),t.set("WY",[[820,831]]),t.set("ID",[[832,838]]),t.set("UT",[[840,847]]),t.set("AZ",[[850,850],[852,853],[855,857],[859,860],[863,865]]),t.set("NM",[[870,875],[877,884]]),t.set("NV",[[889,891],[893,895],[897,898]]),t.set("CA",[[900,908],[910,928],[930,961]]),t.set("AP",[[962,966]]),t.set("HI",[[967,968]]),t.set("GU",[[969,969]]),t.set("OR",[[970,979]]),t.set("WA",[[980,986],[988,994]]),t.set("AK",[[995,999]]),t}().get(e);if(void 0!==n){var o,a=ue(n);try{for(a.s();!(o=a.n()).done;){var r=o.value;if(i>=r[0]&&i<=r[1])return!0}}catch(t){a.e(t)}finally{a.f()}}return!1},ve=null,ye="test-shopping-localstorage";function Ce(t){var e,i=be(t);if(i)try{return e=JSON.parse(i)}catch(t){}return e}function be(t){var e=null;return Ee()&&(e=window.localStorage.getItem(t)),e}function Se(t,e){Ee()&&window.localStorage.setItem(t,e)}function xe(t){Ee()&&localStorage.removeItem(t)}function Ee(){try{var t;if(null!==ve)return ve;"undefined"!=typeof window&&null!==(t=window)&&void 0!==t&&t.localStorage&&(window.localStorage.setItem(ye,ye),window.localStorage.getItem(ye),window.localStorage.removeItem(ye),ve=!0)}catch(t){ve=!1}return ve}!function(t){t[t.AUTO_SHOW_FRE=0]="AUTO_SHOW_FRE",t[t.AUTO_SHOW_COUPONS_CHECKOUT=1]="AUTO_SHOW_COUPONS_CHECKOUT",t[t.GOT_IT=2]="GOT_IT",t[t.BUTTON_FRE=3]="BUTTON_FRE",t[t.BUTTON=4]="BUTTON",t[t.AUTO_SHOW_LOWER_PRICE_FOUND=5]="AUTO_SHOW_LOWER_PRICE_FOUND",t[t.AUTO_SHOW_BING_SEARCH=6]="AUTO_SHOW_BING_SEARCH",t[t.AUTO_SHOW_REBATES=7]="AUTO_SHOW_REBATES",t[t.AUTO_SHOW_REBATES_CONFIRMATION=8]="AUTO_SHOW_REBATES_CONFIRMATION",t[t.AUTO_SHOW_REBATES_DEACTIVATED=9]="AUTO_SHOW_REBATES_DEACTIVATED",t[t.AUTO_SHOW_REBATES_BING=10]="AUTO_SHOW_REBATES_BING",t[t.AUTO_SHOW_REBATES_ORGANIC=11]="AUTO_SHOW_REBATES_ORGANIC",t[t.BANNER=12]="BANNER",t[t.AUTO_SHOW_PRICE_HISTORY=13]="AUTO_SHOW_PRICE_HISTORY",t[t.AUTO_SHOW_REBATES_ORGANIC_NEW=14]="AUTO_SHOW_REBATES_ORGANIC_NEW",t[t.AUTO_SHOW_REBATES_CHECKOUT=15]="AUTO_SHOW_REBATES_CHECKOUT",t[t.AUTO_SHOW_SERVER_DRIVEN_CHECKOUT=16]="AUTO_SHOW_SERVER_DRIVEN_CHECKOUT",t[t.AUTO_SHOW_PERSONALIZED_CASHBACK=17]="AUTO_SHOW_PERSONALIZED_CASHBACK",t[t.AUTO_SHOW_PERSONALIZED_CASHBACK_CONFIRMATION=18]="AUTO_SHOW_PERSONALIZED_CASHBACK_CONFIRMATION",t[t.AUTO_SHOW_URL_PARAM_REBATES=19]="AUTO_SHOW_URL_PARAM_REBATES",t[t.AUTO_SHOW_URL_PARAM_PRICE_COMPARISON=20]="AUTO_SHOW_URL_PARAM_PRICE_COMPARISON",t[t.AUTO_SHOW_URL_PARAM_PRICE_HISTORY=21]="AUTO_SHOW_URL_PARAM_PRICE_HISTORY",t[t.AUTO_SHOW_EXPRESS_CHECKOUT=22]="AUTO_SHOW_EXPRESS_CHECKOUT",t[t.AUTO_SHOW_SERVER_DRIVEN_ALL_PAGES=23]="AUTO_SHOW_SERVER_DRIVEN_ALL_PAGES",t[t.AUTO_SHOW_SERVER_DRIVEN_CONFIRMATION_PAGE=24]="AUTO_SHOW_SERVER_DRIVEN_CONFIRMATION_PAGE",t[t.AUTO_SHOW_SERVER_DRIVEN_HOME_PAGE=25]="AUTO_SHOW_SERVER_DRIVEN_HOME_PAGE",t[t.AUTO_SHOW_SERVER_DRIVEN_REWARDS=26]="AUTO_SHOW_SERVER_DRIVEN_REWARDS",t[t.AUTO_SHOW_COUPONS_CLIPPING=27]="AUTO_SHOW_COUPONS_CLIPPING",t[t.AUTO_SHOW_REBATES_ACTIVATION_FAILED=28]="AUTO_SHOW_REBATES_ACTIVATION_FAILED",t[t.AUTO_SHOW_REBATES_SWITCHED_TO_MSA=29]="AUTO_SHOW_REBATES_SWITCHED_TO_MSA",t[t.AUTO_SHOW_NOTIFICATION=30]="AUTO_SHOW_NOTIFICATION",t[t.AUTO_SHOW_OTHER_SELLERS=31]="AUTO_SHOW_OTHER_SELLERS",t[t.AUTO_SHOW_ITEM_ADDED_TO_CART_FROM_OTHER_SELLER=32]="AUTO_SHOW_ITEM_ADDED_TO_CART_FROM_OTHER_SELLER",t[t.AUTO_SHOW_PROFESSIONAL_REVIEWS=33]="AUTO_SHOW_PROFESSIONAL_REVIEWS",t[t.PIN_HUB=34]="PIN_HUB",t[t.AUTO_SHOW_VIRTUAL_CARD=35]="AUTO_SHOW_VIRTUAL_CARD",t[t.AUTO_SHOW_BING_CAMPAIGN=36]="AUTO_SHOW_BING_CAMPAIGN",t[t.OPEN_HUB_ICON=37]="OPEN_HUB_ICON",t[t.OPEN_FLYOUT_MICRO_NOTIFICATION=38]="OPEN_FLYOUT_MICRO_NOTIFICATION",t[t.OPEN_FLYOUT_MORE_MENU=39]="OPEN_FLYOUT_MORE_MENU",t[t.AUTO_SHOW_PACKAGE_TRACKING=40]="AUTO_SHOW_PACKAGE_TRACKING",t[t.AUTO_SHOW_SERVER_DRIVEN_NOTIFICATION=41]="AUTO_SHOW_SERVER_DRIVEN_NOTIFICATION",t[t.OPEN_FLYOUT_FROM_EDGE_DRIVER=42]="OPEN_FLYOUT_FROM_EDGE_DRIVER",t[t.AUTO_SHOW_GUEST_DOMAIN_COUPONS=43]="AUTO_SHOW_GUEST_DOMAIN_COUPONS",t[t.AUTO_SHOW_EXCLUSIVE_COUPONS=44]="AUTO_SHOW_EXCLUSIVE_COUPONS",t[t.AUTO_SHOW_SUSTAINABILITY_LANDING=45]="AUTO_SHOW_SUSTAINABILITY_LANDING",t[t.AUTO_SHOW_SUSTAINABILITY_PURCHASE=46]="AUTO_SHOW_SUSTAINABILITY_PURCHASE",t[t.AUTO_SHOW_REWARDS_ACTIVATION_FAILED=47]="AUTO_SHOW_REWARDS_ACTIVATION_FAILED",t[t.AUTO_SHOW_REWARDS_SWITCHED_TO_MSA=48]="AUTO_SHOW_REWARDS_SWITCHED_TO_MSA",t[t.AUTO_SHOW_ATTAINABLE_COUPONS=49]="AUTO_SHOW_ATTAINABLE_COUPONS",t[t.AUTO_SHOW_GIFT_CARD=50]="AUTO_SHOW_GIFT_CARD",t[t.AUTO_SHOW_PRINT_GROCERY=51]="AUTO_SHOW_PRINT_GROCERY"}(he||(he={})),function(t){t[t.NONE=0]="NONE",t[t.COUPONS_CHECKOUT=1]="COUPONS_CHECKOUT",t[t.COUPONS_CLIPPING=2]="COUPONS_CLIPPING",t[t.PRICE_COMPARE=4]="PRICE_COMPARE",t[t.PRICE_HISTORY=8]="PRICE_HISTORY",t[t.REBATES_CONFIRMATION=16]="REBATES_CONFIRMATION",t[t.REBATES_BING=32]="REBATES_BING",t[t.REBATES_ORGANIC=64]="REBATES_ORGANIC",t[t.REBATES_CHECKOUT=128]="REBATES_CHECKOUT",t[t.PERSONALIZED_CASHBACK=256]="PERSONALIZED_CASHBACK",t[t.PERSONALIZED_CASHBACK_CONFIRMATION=512]="PERSONALIZED_CASHBACK_CONFIRMATION",t[t.EXPRESS_CHECKOUT=1024]="EXPRESS_CHECKOUT",t[t.REWARDS=2048]="REWARDS",t[t.OTHER_SELLER=4096]="OTHER_SELLER",t[t.REVIEWS=8192]="REVIEWS",t[t.VIRTUAL_CARD=16384]="VIRTUAL_CARD",t[t.PACKAGE_TRACKING=32768]="PACKAGE_TRACKING",t[t.ATTAINABLE_COUPONS=1048576]="ATTAINABLE_COUPONS",t[t.REWARDS_GIFT_CARD=2097152]="REWARDS_GIFT_CARD",t[t.PRINT_GROCERY=4194304]="PRINT_GROCERY"}(pe||(pe={})),function(t){t.shouldShowHomepageNotification="msShoppingExp0",t.priceComparisonUXExps="msShoppingExp2",t.sustainability="msShoppingExp4",t.cashbackDismissFlyout="msShoppingExp5",t.cashbackNotification="msShoppingExp11",t.rebatesAutoDismiss="msShoppingExp13",t.promotionsCashback="msShoppingExp15",t.rewardNotification="msShoppingExp16",t.remindlater="msShoppingExp17",t.snooze="msShoppingExp18",t.socialSharing="msShoppingExp20",t.phCompress="msShoppingExp21",t.cbCompress="msShoppingExp22",t.orderStatusTrackingExp="msShoppingExp23",t.phAutoGotItExp="msShoppingExp28",t.navigateLatency="msShoppingExp29",t.cashbackRefreshExp="msShoppingExp30",t.crossSessionCb="msShoppingExp32",t.attainableCoupons="msShoppingExp33",t.compressNotifications="msShoppingExp34",t.hideCoupons="msShoppingExp19",t.savingsFoundExp="msShoppingExp36",t.priceComparisonDisclaimer="msShoppingExp37",t.priceComparisonOfferLevel="msShoppingExp38",t.amazongiftCardExp="msShoppingExp39",t.autoShowControlForFeature="msEdgeShoppingAutoShowControlForFeature",t.bannerShowCashback="msEdgeShoppingBannerRebates",t.bannerShowCoupons="msEdgeShoppingBannerCoupons",t.bannerShowPriceComparison="msEdgeShoppingBannerPriceCompare",t.bannerShowPriceHistory="msEdgeShoppingBannerPriceHistory",t.clarity="msEdgeShoppingClarityEnabled",t.clarityWithCookies="msEdgeShoppingClarityEnabledWithCookies",t.coloredHeader="msShoppingColoredHeader",t.couponsUX="msEdgeShoppingCouponsUXExperimentation",t.expressCheckout="msEdgeShoppingExpressCheckout",t.expressCheckoutFillDetails="msEdgeShoppingExpressCheckoutFillDetails",t.microNotification="msEdgeShoppingNotifications",t.pcBannerUXExperimentation1="msEdgeShoppingPCBannerUXExperimentation1",t.pcBannerUXExperimentation2="msEdgeShoppingPCBannerUXExperimentation2",t.pcBannerUXExperimentation3="msEdgeShoppingPCBannerUXExperimentation3",t.pcBannerUXExperimentation4="msEdgeShoppingPCBannerUXExperimentation4",t.pcBannerUXExperimentation5="msEdgeShoppingPCBannerUXExperimentation5",t.pcBannerUXExperimentation6="msEdgeShoppingPCBannerUXExperimentation6",t.priceDropNotification="msEdgeShoppingServerNotifications",t.backgroundAutoApply="msEdgeShoppingBackgroundAutoApply",t.rewardFlyout="msEdgeShoppingRewards",t.serverSideRenderingEnabled="msEdgeServerSideShopping",t.showAmazonOtherSellers="msEdgeShoppingOtherSeller",t.showNudgeTipsOverlay="msShoppingExpNudge",t.showPaymentOptions="msZipPayVirtualCard",t.showPaymentOptionsOnProductPage="msEdgeShoppingProductFlyoutWallet",t.showProductHistory="msWebAssistQuery",t.showWalletFooter="msEnableWallet",t.signinRebates="msEdgeShoppingRebatesSignUp",t.signinRewards="msEdgeShoppingRewardsSignUp",t.youtubeCoupons="msEdgeShoppingExclusiveCoupons",t.youtubeCouponsAutoShow="msEdgeShoppingExclusiveCouponsAutoShow"}(fe||(fe={}));function Ae(t,e,i,n){var o,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r}class Te{createCSS(){return""}createBehavior(){}}const Ie=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==i.g)return i.g;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(t){return{}}}();void 0===Ie.trustedTypes&&(Ie.trustedTypes={createPolicy:(t,e)=>e});const De=Object.freeze([]),we=[],ke=Ie.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let Re=ke;const Oe=[];function Pe(){if(Oe.length)throw Oe.shift()}function Me(t){try{t.call()}catch(t){Oe.push(t),setTimeout(Pe,0)}}const Ne=`fast-${Math.random().toString(36).substring(2,8)}`,Le=`${Ne}{`,_e=`}${Ne}`,Fe=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(Re!==ke)throw new Error("The HTML policy can only be set once.");Re=t},createHTML:t=>Re.createHTML(t),isMarker:t=>t&&8===t.nodeType&&t.data.startsWith(Ne),extractDirectiveIndexFromMarker:t=>parseInt(t.data.replace(`${Ne}:`,"")),createInterpolationPlaceholder:t=>`${Le}${t}${_e}`,createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder:t=>`\x3c!--${Ne}:${t}--\x3e`,queueUpdate(t){we.length<1&&window.requestAnimationFrame(Fe.processUpdates),we.push(t)},processUpdates(){let t=0;for(;t<we.length;)if(Me(we[t]),t++,t>1024){for(let e=0,i=we.length-t;e<i;e++)we[e]=we[e+t];we.length-=t,t=0}we.length=0},nextUpdate:()=>new Promise((t=>{Fe.queueUpdate(t)})),setAttribute(t,e,i){null==i?t.removeAttribute(e):t.setAttribute(e,i)},setBooleanAttribute(t,e,i){i?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;null!==e;e=t.firstChild)t.removeChild(e)},createTemplateWalker:t=>document.createTreeWalker(t,133,null,!1)});function He(t){const e=this.spillover;-1===e.indexOf(t)&&e.push(t)}function Be(t){const e=this.spillover,i=e.indexOf(t);-1!==i&&e.splice(i,1)}function Ue(t){const e=this.spillover,i=this.source;for(let n=0,o=e.length;n<o;++n)e[n].handleChange(i,t)}function Ve(t){return-1!==this.spillover.indexOf(t)}class $e{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return this.sub1===t||this.sub2===t}subscribe(t){this.has(t)||(void 0!==this.sub1?void 0!==this.sub2?(this.spillover=[this.sub1,this.sub2,t],this.subscribe=He,this.unsubscribe=Be,this.notify=Ue,this.has=Ve,this.sub1=void 0,this.sub2=void 0):this.sub2=t:this.sub1=t)}unsubscribe(t){this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0)}notify(t){const e=this.sub1,i=this.sub2,n=this.source;void 0!==e&&e.handleChange(n,t),void 0!==i&&i.handleChange(n,t)}}class Ge{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const i=this.subscribers[t];void 0!==i&&i.notify(t),null===(e=this.sourceSubscribers)||void 0===e||e.notify(t)}subscribe(t,e){var i;if(e){let i=this.subscribers[e];void 0===i&&(this.subscribers[e]=i=new $e(this.source)),i.subscribe(t)}else this.sourceSubscribers=null!==(i=this.sourceSubscribers)&&void 0!==i?i:new $e(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var i;if(e){const i=this.subscribers[e];void 0!==i&&i.unsubscribe(t)}else null===(i=this.sourceSubscribers)||void 0===i||i.unsubscribe(t)}}const ze=/(:|&&|\|\||if)/,We=new WeakMap,Ke=new WeakMap;let je,Ye=t=>{throw new Error("Must call enableArrayObservation before observing arrays.")};class qe{constructor(t){this.name=t,this.field=`_${t}`,this.callback=`${t}Changed`}getValue(t){return void 0!==je&&je.watch(t,this.name),t[this.field]}setValue(t,e){const i=this.field,n=t[i];if(n!==e){t[i]=e;const o=t[this.callback];"function"==typeof o&&o.call(t,n,e),Ze(t).notify(this.name)}}}const Xe=Object.freeze({setArrayObserverFactory(t){Ye=t},getNotifier(t){let e=t.$fastController||We.get(t);return void 0===e&&(Array.isArray(t)?e=Ye(t):We.set(t,e=new Ge(t))),e},track(t,e){void 0!==je&&je.watch(t,e)},trackVolatile(){void 0!==je&&(je.needsRefresh=!0)},notify(t,e){Ze(t).notify(e)},defineProperty(t,e){"string"==typeof e&&(e=new qe(e)),this.getAccessors(t).push(e),Reflect.defineProperty(t,e.name,{enumerable:!0,get:function(){return e.getValue(this)},set:function(t){e.setValue(this,t)}})},getAccessors(t){let e=Ke.get(t);if(void 0===e){let i=Reflect.getPrototypeOf(t);for(;void 0===e&&null!==i;)e=Ke.get(i),i=Reflect.getPrototypeOf(i);e=void 0===e?[]:e.slice(0),Ke.set(t,e)}return e},binding(t,e,i=this.isVolatileBinding(t)){return new oi(t,e,i)},isVolatileBinding:t=>ze.test(t.toString())}),Ze=Xe.getNotifier,Je=(Xe.trackVolatile,Fe.queueUpdate);function Qe(t,e){Xe.defineProperty(t,e)}let ti=null;function ei(t){ti=t}class ii{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return ti}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}}Xe.defineProperty(ii.prototype,"index"),Xe.defineProperty(ii.prototype,"length");const ni=Object.seal(new ii);class oi extends $e{constructor(t,e,i=!1){super(t,e),this.binding=t,this.isVolatileBinding=i,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(t,e){this.needsRefresh&&null!==this.last&&this.disconnect();const i=je;je=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const n=this.binding(t,e);return je=i,n}disconnect(){if(null!==this.last){let t=this.first;for(;void 0!==t;)t.notifier.unsubscribe(this,t.propertyName),t=t.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(t,e){const i=this.last,n=Ze(t),o=null===i?this.first:{};if(o.propertySource=t,o.propertyName=e,o.notifier=n,n.subscribe(this,e),null!==i){if(!this.needsRefresh){let e;je=void 0,e=i.propertySource[i.propertyName],je=this,t===e&&(this.needsRefresh=!0)}i.next=o}this.last=o}handleChange(){this.needsQueue&&(this.needsQueue=!1,Je(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let t=this.first;return{next:()=>{const e=t;return void 0===e?{value:void 0,done:!0}:(t=t.next,{value:e,done:!1})},[Symbol.iterator]:function(){return this}}}}class ai{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=null===this.behaviors?t:this.behaviors.concat(t),this}}function ri(t){return t.map((t=>t instanceof ai?ri(t.styles):[t])).reduce(((t,e)=>t.concat(e)),[])}function si(t){return t.map((t=>t instanceof ai?t.behaviors:null)).reduce(((t,e)=>null===e?t:(null===t&&(t=[]),t.concat(e))),null)}ai.create=(()=>{if(Fe.supportsAdoptedStyleSheets){const t=new Map;return e=>new li(e,t)}return t=>new ui(t)})();class li extends ai{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=si(t)}get styleSheets(){if(void 0===this._styleSheets){const t=this.styles,e=this.styleSheetCache;this._styleSheets=ri(t).map((t=>{if(t instanceof CSSStyleSheet)return t;let i=e.get(t);return void 0===i&&(i=new CSSStyleSheet,i.replaceSync(t),e.set(t,i)),i}))}return this._styleSheets}addStylesTo(t){t.adoptedStyleSheets=[...t.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(t)}removeStylesFrom(t){const e=this.styleSheets;t.adoptedStyleSheets=t.adoptedStyleSheets.filter((t=>-1===e.indexOf(t))),super.removeStylesFrom(t)}}let ci=0;class ui extends ai{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=si(t),this.styleSheets=ri(t),this.styleClass="fast-style-class-"+ ++ci}addStylesTo(t){const e=this.styleSheets,i=this.styleClass;t=this.normalizeTarget(t);for(let n=0;n<e.length;n++){const o=document.createElement("style");o.innerHTML=e[n],o.className=i,t.append(o)}super.addStylesTo(t)}removeStylesFrom(t){const e=(t=this.normalizeTarget(t)).querySelectorAll(`.${this.styleClass}`);for(let i=0,n=e.length;i<n;++i)t.removeChild(e[i]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const di={toView:t=>t?"true":"false",fromView:t=>null!=t&&"false"!==t&&!1!==t&&0!==t},hi={toView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e.toString()},fromView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e}};class pi{constructor(t,e,i=e.toLowerCase(),n="reflect",o){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=i,this.mode=n,this.converter=o,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,"boolean"===n&&void 0===o&&(this.converter=di)}setValue(t,e){const i=t[this.fieldName],n=this.converter;void 0!==n&&(e=n.fromView(e)),i!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](i,e),t.$fastController.notify(this.name))}getValue(t){return Xe.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,i=this.guards;i.has(t)||"fromView"===e||Fe.queueUpdate((()=>{i.add(t);const n=t[this.fieldName];switch(e){case"reflect":const e=this.converter;Fe.setAttribute(t,this.attribute,void 0!==e?e.toView(n):n);break;case"boolean":Fe.setBooleanAttribute(t,this.attribute,n)}i.delete(t)}))}static collect(t,...e){const i=[];e.push(t.attributes);for(let n=0,o=e.length;n<o;++n){const o=e[n];if(void 0!==o)for(let e=0,n=o.length;e<n;++e){const n=o[e];"string"==typeof n?i.push(new pi(t,n)):i.push(new pi(t,n.property,n.attribute,n.mode,n.converter))}}return i}}function fi(t,e){let i;function n(t,e){arguments.length>1&&(i.property=e);const n=t.constructor.attributes||(t.constructor.attributes=[]);n.push(i)}return arguments.length>1?(i={},void n(t,e)):(i=void 0===t?{}:t,n)}const gi={mode:"open"},mi={},vi=new Map;class yi{constructor(t,e=t.definition){"string"==typeof e&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const i=pi.collect(t,e.attributes),n=new Array(i.length),o={},a={};for(let t=0,e=i.length;t<e;++t){const e=i[t];n[t]=e.attribute,o[e.name]=e,a[e.attribute]=e}this.attributes=i,this.observedAttributes=n,this.propertyLookup=o,this.attributeLookup=a,this.shadowOptions=void 0===e.shadowOptions?gi:null===e.shadowOptions?void 0:Object.assign(Object.assign({},gi),e.shadowOptions),this.elementOptions=void 0===e.elementOptions?mi:Object.assign(Object.assign({},mi),e.elementOptions),this.styles=void 0===e.styles?void 0:Array.isArray(e.styles)?ai.create(e.styles):e.styles instanceof ai?e.styles:ai.create([e.styles])}define(t=customElements){const e=this.type;if(!this.isDefined){const t=this.attributes,i=e.prototype;for(let e=0,n=t.length;e<n;++e)Xe.defineProperty(i,t[e]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0}),vi.set(e,this),this.isDefined=!0}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}static forType(t){return vi.get(t)}}const Ci=new WeakMap,bi={bubbles:!0,composed:!0,cancelable:!0};function Si(t){return t.shadowRoot||Ci.get(t)||null}class xi extends Ge{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const i=e.shadowOptions;if(void 0!==i){const e=t.attachShadow(i);"closed"===i.mode&&Ci.set(t,e)}const n=Xe.getAccessors(t);if(n.length>0){const e=this.boundObservables=Object.create(null);for(let i=0,o=n.length;i<o;++i){const o=n[i].name,a=t[o];void 0!==a&&(delete t[o],e[o]=a)}}}get isConnected(){return Xe.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,Xe.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=t,this.needsInitialization||null===t||this.addStyles(t))}addStyles(t){const e=Si(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const i=t.behaviors;t.addStylesTo(e),null!==i&&this.addBehaviors(i)}}removeStyles(t){const e=Si(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const i=t.behaviors;t.removeStylesFrom(e),null!==i&&this.removeBehaviors(i)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),i=t.length,n=[];for(let o=0;o<i;++o){const i=t[o];e.has(i)?e.set(i,e.get(i)+1):(e.set(i,1),n.push(i))}if(this._isConnected){const t=this.element;for(let e=0;e<n.length;++e)n[e].bind(t,ni)}}removeBehaviors(t,e=!1){const i=this.behaviors;if(null===i)return;const n=t.length,o=[];for(let a=0;a<n;++a){const n=t[a];if(i.has(n)){const t=i.get(n)-1;0===t||e?i.delete(n)&&o.push(n):i.set(n,t)}}if(this._isConnected){const t=this.element;for(let e=0;e<o.length;++e)o[e].unbind(t)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(t,ni);const e=this.behaviors;if(null!==e)for(const[i]of e)i.bind(t,ni);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;null!==t&&t.unbind();const e=this.behaviors;if(null!==e){const t=this.element;for(const[i]of e)i.unbind(t)}}onAttributeChangedCallback(t,e,i){const n=this.definition.attributeLookup[t];void 0!==n&&n.onAttributeChangedCallback(this.element,i)}emit(t,e,i){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},bi),i)))}finishInitialization(){const t=this.element,e=this.boundObservables;if(null!==e){const i=Object.keys(e);for(let n=0,o=i.length;n<o;++n){const o=i[n];t[o]=e[o]}this.boundObservables=null}const i=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,i=Si(e)||e;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||Fe.removeChildNodes(i),t&&(this.view=t.render(e,i,e))}static forCustomElement(t){const e=t.$fastController;if(void 0!==e)return e;const i=yi.forType(t.constructor);if(void 0===i)throw new Error("Missing FASTElement definition.");return t.$fastController=new xi(t,i)}}function Ei(t){return class extends t{constructor(){super(),xi.forCustomElement(this)}$emit(t,e,i){return this.$fastController.emit(t,e,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,i){this.$fastController.onAttributeChangedCallback(t,e,i)}}}const Ai=Object.assign(Ei(HTMLElement),{from:t=>Ei(t),define:(t,e)=>new yi(t,e).define().type});function Ti(t){const e=t.parentElement;if(e)return e;{const e=t.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}const Ii=document.createElement("div");class Di{setProperty(t,e){Fe.queueUpdate((()=>this.target.setProperty(t,e)))}removeProperty(t){Fe.queueUpdate((()=>this.target.removeProperty(t)))}}class wi extends Di{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class ki extends Di{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class Ri{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),Xe.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(null!==this.target)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),Fe.queueUpdate((()=>{null!==this.target&&this.target.setProperty(t,e)}))}removeProperty(t){this.store.delete(t),Fe.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(t)}))}handleChange(t,e){const{sheet:i}=this.style;if(i){const t=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[t].style}else this.target=null}}Ae([Qe],Ri.prototype,"target",void 0);class Oi{constructor(t){this.target=t.style}setProperty(t,e){Fe.queueUpdate((()=>this.target.setProperty(t,e)))}removeProperty(t){Fe.queueUpdate((()=>this.target.removeProperty(t)))}}class Pi{setProperty(t,e){Pi.properties[t]=e;for(const i of Pi.roots.values())Li.getOrCreate(Pi.normalizeRoot(i)).setProperty(t,e)}removeProperty(t){delete Pi.properties[t];for(const e of Pi.roots.values())Li.getOrCreate(Pi.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=Pi;if(!e.has(t)){e.add(t);const i=Li.getOrCreate(this.normalizeRoot(t));for(const t in Pi.properties)i.setProperty(t,Pi.properties[t])}}static unregisterRoot(t){const{roots:e}=Pi;if(e.has(t)){e.delete(t);const i=Li.getOrCreate(Pi.normalizeRoot(t));for(const t in Pi.properties)i.removeProperty(t)}}static normalizeRoot(t){return t===Ii?document:t}}Pi.roots=new Set,Pi.properties={};const Mi=new WeakMap,Ni=Fe.supportsAdoptedStyleSheets?class extends Di{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(ai.create([e]))}}:Ri,Li=Object.freeze({getOrCreate(t){if(Mi.has(t))return Mi.get(t);let e;return t===Ii?e=new Pi:t instanceof Document?e=Fe.supportsAdoptedStyleSheets?new wi:new ki:e=t instanceof Ai?new Ni(t):new Oi(t),Mi.set(t,e),e}});class _i extends Te{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,null!==t.cssCustomPropertyName&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=_i.uniqueId(),_i.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new _i({name:"string"==typeof t?t:t.name,cssCustomPropertyName:"string"==typeof t?t:void 0===t.cssCustomPropertyName?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return"string"==typeof t.cssCustomProperty}static isDerivedDesignTokenValue(t){return"function"==typeof t}static getTokenById(t){return _i.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=Vi.getOrCreate(t).get(this);if(void 0!==e)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof _i&&(e=this.alias(e)),Vi.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),Vi.existsFor(t)&&Vi.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(Ii,t),this}subscribe(t,e){const i=this.getOrCreateSubscriberSet(e);e&&!Vi.existsFor(e)&&Vi.getOrCreate(e),i.has(t)||i.add(t)}unsubscribe(t,e){const i=this.subscribers.get(e||this);i&&i.has(t)&&i.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach((t=>t.handleChange(e))),this.subscribers.has(t)&&this.subscribers.get(t).forEach((t=>t.handleChange(e)))}alias(t){return e=>t.getValueFor(e)}}_i.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})(),_i.tokensById=new Map;class Fi{constructor(t,e,i){this.source=t,this.token=e,this.node=i,this.dependencies=new Set,this.observer=Xe.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,ni))}}class Hi{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),Xe.getNotifier(this).notify(t.id))}get(t){return Xe.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const Bi=new WeakMap,Ui=new WeakMap;class Vi{constructor(t){this.target=t,this.store=new Hi,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,e)=>{const i=_i.getTokenById(e);if(i&&(i.notify(this.target),_i.isCSSDesignToken(i))){const e=this.parent,n=this.isReflecting(i);if(e){const o=e.get(i),a=t.get(i);o===a||n?o===a&&n&&this.stopReflectToCSS(i):this.reflectToCSS(i)}else n||this.reflectToCSS(i)}}},Bi.set(t,this),Xe.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof Ai?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return Bi.get(t)||new Vi(t)}static existsFor(t){return Bi.has(t)}static findParent(t){if(Ii!==t.target){let e=Ti(t.target);for(;null!==e;){if(Bi.has(e))return Bi.get(e);e=Ti(e)}return Vi.getOrCreate(Ii)}return null}static findClosestAssignedNode(t,e){let i=e;do{if(i.has(t))return i;i=i.parent?i.parent:i.target!==Ii?Vi.getOrCreate(Ii):null}while(null!==i);return null}get parent(){return Ui.get(this)||null}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(void 0!==e)return e;const i=this.getRaw(t);return void 0!==i?(this.hydrate(t,i),this.get(t)):void 0}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):null===(e=Vi.findClosestAssignedNode(t,this))||void 0===e?void 0:e.getRaw(t)}set(t,e){_i.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),_i.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=Vi.findParent(this);t&&t.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){if(this.parent){Ui.get(this).removeChild(this)}}appendChild(t){t.parent&&Ui.get(t).removeChild(t);const e=this.children.filter((e=>t.contains(e)));Ui.set(t,this),this.children.push(t),e.forEach((e=>t.appendChild(e))),Xe.getNotifier(this.store).subscribe(t);for(const[e,i]of this.store.all())t.hydrate(e,this.bindingObservers.has(e)?this.getRaw(e):i)}removeChild(t){const e=this.children.indexOf(t);return-1!==e&&this.children.splice(e,1),Xe.getNotifier(this.store).unsubscribe(t),t.parent===this&&Ui.delete(t)}contains(t){return function(t,e){let i=e;for(;null!==i;){if(i===t)return!0;i=Ti(i)}return!1}(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),Vi.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),Vi.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const i=_i.getTokenById(e);i&&this.hydrate(i,this.getRaw(i))}hydrate(t,e){if(!this.has(t)){const i=this.bindingObservers.get(t);_i.isDerivedDesignTokenValue(e)?i?i.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(i&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const i=new Fi(e,t,this);return this.bindingObservers.set(t,i),i}tearDownBindingObserver(t){return!!this.bindingObservers.has(t)&&(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0)}}Vi.cssCustomPropertyReflector=new class{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:i}=t;this.add(e,i)}add(t,e){Li.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(Vi.getOrCreate(e).get(t)))}remove(t,e){Li.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&"function"==typeof t.createCSS?t.createCSS():t}},Ae([Qe],Vi.prototype,"children",void 0);const $i=Object.freeze({create:function(t){return _i.from(t)},notifyConnection:t=>!(!t.isConnected||!Vi.existsFor(t))&&(Vi.getOrCreate(t).bind(),!0),notifyDisconnection:t=>!(t.isConnected||!Vi.existsFor(t))&&(Vi.getOrCreate(t).unbind(),!0),registerRoot(t=Ii){Pi.registerRoot(t)},unregisterRoot(t=Ii){Pi.unregisterRoot(t)}});var Gi;function zi(t,e,i){return isNaN(t)||t<=e?e:t>=i?i:t}function Wi(t,e,i){return isNaN(t)||t<=e?0:t>=i?1:t/(i-e)}function Ki(t,e,i){return isNaN(t)?e:e+t*(i-e)}function ji(t){return t*(Math.PI/180)}function Yi(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:e+t*(i-e)}function qi(t,e,i){if(t<=0)return e%360;if(t>=1)return i%360;const n=(e-i+360)%360;return n<=(i-e+360)%360?(e-n*t+360)%360:(e+n*t+360)%360}!function(t){t.ltr="ltr",t.rtl="rtl"}(Gi||(Gi={}));Math.PI;function Xi(t,e){const i=Math.pow(10,e);return Math.round(t*i)/i}class Zi{constructor(t,e,i,n){this.r=t,this.g=e,this.b=i,this.a="number"!=typeof n||isNaN(n)?1:n}static fromObject(t){return!t||isNaN(t.r)||isNaN(t.g)||isNaN(t.b)?null:new Zi(t.r,t.g,t.b,t.a)}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Ki(this.r,0,255))},${Math.round(Ki(this.g,0,255))},${Math.round(Ki(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Ki(this.r,0,255))},${Math.round(Ki(this.g,0,255))},${Math.round(Ki(this.b,0,255))},${zi(this.a,0,1)})`}roundToPrecision(t){return new Zi(Xi(this.r,t),Xi(this.g,t),Xi(this.b,t),Xi(this.a,t))}clamp(){return new Zi(zi(this.r,0,1),zi(this.g,0,1),zi(this.b,0,1),zi(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return function(t){const e=Math.round(zi(t,0,255)).toString(16);return 1===e.length?"0"+e:e}(Ki(t,0,255))}}class Ji{constructor(t,e,i){this.h=t,this.s=e,this.l=i}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.l)?null:new Ji(t.h,t.s,t.l)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new Ji(Xi(this.h,t),Xi(this.s,t),Xi(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Qi{constructor(t,e,i){this.h=t,this.s=e,this.v=i}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.v)?null:new Qi(t.h,t.s,t.v)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.v===t.v}roundToPrecision(t){return new Qi(Xi(this.h,t),Xi(this.s,t),Xi(this.v,t))}toObject(){return{h:this.h,s:this.s,v:this.v}}}class tn{constructor(t,e,i){this.l=t,this.a=e,this.b=i}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.a)||isNaN(t.b)?null:new tn(t.l,t.a,t.b)}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new tn(Xi(this.l,t),Xi(this.a,t),Xi(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}tn.epsilon=216/24389,tn.kappa=24389/27;class en{constructor(t,e,i){this.l=t,this.c=e,this.h=i}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.c)||isNaN(t.h)?null:new en(t.l,t.c,t.h)}equalValue(t){return this.l===t.l&&this.c===t.c&&this.h===t.h}roundToPrecision(t){return new en(Xi(this.l,t),Xi(this.c,t),Xi(this.h,t))}toObject(){return{l:this.l,c:this.c,h:this.h}}}class nn{constructor(t,e,i){this.x=t,this.y=e,this.z=i}static fromObject(t){return!t||isNaN(t.x)||isNaN(t.y)||isNaN(t.z)?null:new nn(t.x,t.y,t.z)}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new nn(Xi(this.x,t),Xi(this.y,t),Xi(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function on(t){return.2126*t.r+.7152*t.g+.0722*t.b}function an(t){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return on(new Zi(e(t.r),e(t.g),e(t.b),1))}nn.whitePoint=new nn(.95047,1,1.08883);const rn=(t,e)=>(t+.05)/(e+.05);function sn(t,e){const i=an(t),n=an(e);return i>n?rn(i,n):rn(n,i)}function ln(t){const e=Math.max(t.r,t.g,t.b),i=Math.min(t.r,t.g,t.b),n=e-i;let o=0;0!==n&&(o=e===t.r?(t.g-t.b)/n%6*60:e===t.g?60*((t.b-t.r)/n+2):60*((t.r-t.g)/n+4)),o<0&&(o+=360);const a=(e+i)/2;let r=0;return 0!==n&&(r=n/(1-Math.abs(2*a-1))),new Ji(o,r,a)}function cn(t,e=1){const i=(1-Math.abs(2*t.l-1))*t.s,n=i*(1-Math.abs(t.h/60%2-1)),o=t.l-i/2;let a=0,r=0,s=0;return t.h<60?(a=i,r=n,s=0):t.h<120?(a=n,r=i,s=0):t.h<180?(a=0,r=i,s=n):t.h<240?(a=0,r=n,s=i):t.h<300?(a=n,r=0,s=i):t.h<360&&(a=i,r=0,s=n),new Zi(a+o,r+o,s+o,e)}function un(t){const e=Math.max(t.r,t.g,t.b),i=e-Math.min(t.r,t.g,t.b);let n=0;0!==i&&(n=e===t.r?(t.g-t.b)/i%6*60:e===t.g?60*((t.b-t.r)/i+2):60*((t.r-t.g)/i+4)),n<0&&(n+=360);let o=0;return 0!==e&&(o=i/e),new Qi(n,o,e)}function dn(t){let e=0;(Math.abs(t.b)>.001||Math.abs(t.a)>.001)&&(e=Math.atan2(t.b,t.a)*(180/Math.PI)),e<0&&(e+=360);const i=Math.sqrt(t.a*t.a+t.b*t.b);return new en(t.l,i,e)}function hn(t){function e(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}const i=e(t.r),n=e(t.g),o=e(t.b);return new nn(.4124564*i+.3575761*n+.1804375*o,.2126729*i+.7151522*n+.072175*o,.0193339*i+.119192*n+.9503041*o)}function pn(t,e=1){function i(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055}const n=i(3.2404542*t.x-1.5371385*t.y-.4985314*t.z),o=i(-.969266*t.x+1.8760108*t.y+.041556*t.z),a=i(.0556434*t.x-.2040259*t.y+1.0572252*t.z);return new Zi(n,o,a,e)}function fn(t){return function(t){function e(t){return t>tn.epsilon?Math.pow(t,1/3):(tn.kappa*t+16)/116}const i=e(t.x/nn.whitePoint.x),n=e(t.y/nn.whitePoint.y),o=e(t.z/nn.whitePoint.z);return new tn(116*n-16,500*(i-n),200*(n-o))}(hn(t))}function gn(t,e=1){return pn(function(t){const e=(t.l+16)/116,i=e+t.a/500,n=e-t.b/200,o=Math.pow(i,3),a=Math.pow(e,3),r=Math.pow(n,3);let s=0;s=o>tn.epsilon?o:(116*i-16)/tn.kappa;let l=0;l=t.l>tn.epsilon*tn.kappa?a:t.l/tn.kappa;let c=0;return c=r>tn.epsilon?r:(116*n-16)/tn.kappa,s=nn.whitePoint.x*s,l=nn.whitePoint.y*l,c=nn.whitePoint.z*c,new nn(s,l,c)}(t),e)}function mn(t){return dn(fn(t))}function vn(t,e=1){return gn(function(t){let e=0,i=0;return 0!==t.h&&(e=Math.cos(ji(t.h))*t.c,i=Math.sin(ji(t.h))*t.c),new tn(t.l,e,i)}(t),e)}function yn(t,e,i=18){const n=mn(t);let o=n.c+e*i;return o<0&&(o=0),vn(new en(n.l,o,n.h))}function Cn(t,e){return t*e}function bn(t,e){return new Zi(Cn(t.r,e.r),Cn(t.g,e.g),Cn(t.b,e.b),1)}function Sn(t,e){return zi(t<.5?2*e*t:1-2*(1-e)*(1-t),0,1)}function xn(t,e){return new Zi(Sn(t.r,e.r),Sn(t.g,e.g),Sn(t.b,e.b),1)}var En,An;function Tn(t,e,i,n){if(isNaN(t)||t<=0)return i;if(t>=1)return n;switch(e){case An.HSL:return cn(function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new Ji(qi(t,e.h,i.h),Yi(t,e.s,i.s),Yi(t,e.l,i.l))}(t,ln(i),ln(n)));case An.HSV:return function(t,e=1){const i=t.s*t.v,n=i*(1-Math.abs(t.h/60%2-1)),o=t.v-i;let a=0,r=0,s=0;return t.h<60?(a=i,r=n,s=0):t.h<120?(a=n,r=i,s=0):t.h<180?(a=0,r=i,s=n):t.h<240?(a=0,r=n,s=i):t.h<300?(a=n,r=0,s=i):t.h<360&&(a=i,r=0,s=n),new Zi(a+o,r+o,s+o,e)}(function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new Qi(qi(t,e.h,i.h),Yi(t,e.s,i.s),Yi(t,e.v,i.v))}(t,un(i),un(n)));case An.XYZ:return pn(function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new nn(Yi(t,e.x,i.x),Yi(t,e.y,i.y),Yi(t,e.z,i.z))}(t,hn(i),hn(n)));case An.LAB:return gn(function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new tn(Yi(t,e.l,i.l),Yi(t,e.a,i.a),Yi(t,e.b,i.b))}(t,fn(i),fn(n)));case An.LCH:return vn(function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new en(Yi(t,e.l,i.l),Yi(t,e.c,i.c),qi(t,e.h,i.h))}(t,mn(i),mn(n)));default:return function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new Zi(Yi(t,e.r,i.r),Yi(t,e.g,i.g),Yi(t,e.b,i.b),Yi(t,e.a,i.a))}(t,i,n)}}!function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"}(En||(En={})),function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"}(An||(An={}));class In{constructor(t){if(null==t||0===t.length)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(t)}static createBalancedColorScale(t){if(null==t||0===t.length)throw new Error("The colors argument must be non-empty");const e=new Array(t.length);for(let i=0;i<t.length;i++)0===i?e[i]={color:t[i],position:0}:i===t.length-1?e[i]={color:t[i],position:1}:e[i]={color:t[i],position:i*(1/(t.length-1))};return new In(e)}getColor(t,e=An.RGB){if(1===this.stops.length)return this.stops[0].color;if(t<=0)return this.stops[0].color;if(t>=1)return this.stops[this.stops.length-1].color;let i=0;for(let e=0;e<this.stops.length;e++)this.stops[e].position<=t&&(i=e);let n=i+1;n>=this.stops.length&&(n=this.stops.length-1);return Tn((t-this.stops[i].position)*(1/(this.stops[n].position-this.stops[i].position)),e,this.stops[i].color,this.stops[n].color)}trim(t,e,i=An.RGB){if(t<0||e>1||e<t)throw new Error("Invalid bounds");if(t===e)return new In([{color:this.getColor(t,i),position:0}]);const n=[];for(let i=0;i<this.stops.length;i++)this.stops[i].position>=t&&this.stops[i].position<=e&&n.push(this.stops[i]);if(0===n.length)return new In([{color:this.getColor(t),position:t},{color:this.getColor(e),position:e}]);n[0].position!==t&&n.unshift({color:this.getColor(t),position:t}),n[n.length-1].position!==e&&n.push({color:this.getColor(e),position:e});const o=e-t,a=new Array(n.length);for(let e=0;e<n.length;e++)a[e]={color:n[e].color,position:(n[e].position-t)/o};return new In(a)}findNextColor(t,e,i=!1,n=An.RGB,o=.005,a=32){isNaN(t)||t<=0?t=0:t>=1&&(t=1);const r=this.getColor(t,n),s=i?0:1;if(sn(r,this.getColor(s,n))<=e)return s;let l=i?0:t,c=i?t:0,u=s,d=0;for(;d<=a;){u=Math.abs(c-l)/2+l;const t=sn(r,this.getColor(u,n));if(Math.abs(t-e)<=o)return u;t>e?i?l=u:c=u:i?c=u:l=u,d++}return u}clone(){const t=new Array(this.stops.length);for(let e=0;e<t.length;e++)t[e]={color:this.stops[e].color,position:this.stops[e].position};return new In(t)}sortColorScaleStops(t){return t.sort(((t,e)=>{const i=t.position,n=e.position;return i<n?-1:i>n?1:0}))}}const Dn={aliceblue:{r:.941176,g:.972549,b:1},antiquewhite:{r:.980392,g:.921569,b:.843137},aqua:{r:0,g:1,b:1},aquamarine:{r:.498039,g:1,b:.831373},azure:{r:.941176,g:1,b:1},beige:{r:.960784,g:.960784,b:.862745},bisque:{r:1,g:.894118,b:.768627},black:{r:0,g:0,b:0},blanchedalmond:{r:1,g:.921569,b:.803922},blue:{r:0,g:0,b:1},blueviolet:{r:.541176,g:.168627,b:.886275},brown:{r:.647059,g:.164706,b:.164706},burlywood:{r:.870588,g:.721569,b:.529412},cadetblue:{r:.372549,g:.619608,b:.627451},chartreuse:{r:.498039,g:1,b:0},chocolate:{r:.823529,g:.411765,b:.117647},coral:{r:1,g:.498039,b:.313725},cornflowerblue:{r:.392157,g:.584314,b:.929412},cornsilk:{r:1,g:.972549,b:.862745},crimson:{r:.862745,g:.078431,b:.235294},cyan:{r:0,g:1,b:1},darkblue:{r:0,g:0,b:.545098},darkcyan:{r:0,g:.545098,b:.545098},darkgoldenrod:{r:.721569,g:.52549,b:.043137},darkgray:{r:.662745,g:.662745,b:.662745},darkgreen:{r:0,g:.392157,b:0},darkgrey:{r:.662745,g:.662745,b:.662745},darkkhaki:{r:.741176,g:.717647,b:.419608},darkmagenta:{r:.545098,g:0,b:.545098},darkolivegreen:{r:.333333,g:.419608,b:.184314},darkorange:{r:1,g:.54902,b:0},darkorchid:{r:.6,g:.196078,b:.8},darkred:{r:.545098,g:0,b:0},darksalmon:{r:.913725,g:.588235,b:.478431},darkseagreen:{r:.560784,g:.737255,b:.560784},darkslateblue:{r:.282353,g:.239216,b:.545098},darkslategray:{r:.184314,g:.309804,b:.309804},darkslategrey:{r:.184314,g:.309804,b:.309804},darkturquoise:{r:0,g:.807843,b:.819608},darkviolet:{r:.580392,g:0,b:.827451},deeppink:{r:1,g:.078431,b:.576471},deepskyblue:{r:0,g:.74902,b:1},dimgray:{r:.411765,g:.411765,b:.411765},dimgrey:{r:.411765,g:.411765,b:.411765},dodgerblue:{r:.117647,g:.564706,b:1},firebrick:{r:.698039,g:.133333,b:.133333},floralwhite:{r:1,g:.980392,b:.941176},forestgreen:{r:.133333,g:.545098,b:.133333},fuchsia:{r:1,g:0,b:1},gainsboro:{r:.862745,g:.862745,b:.862745},ghostwhite:{r:.972549,g:.972549,b:1},gold:{r:1,g:.843137,b:0},goldenrod:{r:.854902,g:.647059,b:.12549},gray:{r:.501961,g:.501961,b:.501961},green:{r:0,g:.501961,b:0},greenyellow:{r:.678431,g:1,b:.184314},grey:{r:.501961,g:.501961,b:.501961},honeydew:{r:.941176,g:1,b:.941176},hotpink:{r:1,g:.411765,b:.705882},indianred:{r:.803922,g:.360784,b:.360784},indigo:{r:.294118,g:0,b:.509804},ivory:{r:1,g:1,b:.941176},khaki:{r:.941176,g:.901961,b:.54902},lavender:{r:.901961,g:.901961,b:.980392},lavenderblush:{r:1,g:.941176,b:.960784},lawngreen:{r:.486275,g:.988235,b:0},lemonchiffon:{r:1,g:.980392,b:.803922},lightblue:{r:.678431,g:.847059,b:.901961},lightcoral:{r:.941176,g:.501961,b:.501961},lightcyan:{r:.878431,g:1,b:1},lightgoldenrodyellow:{r:.980392,g:.980392,b:.823529},lightgray:{r:.827451,g:.827451,b:.827451},lightgreen:{r:.564706,g:.933333,b:.564706},lightgrey:{r:.827451,g:.827451,b:.827451},lightpink:{r:1,g:.713725,b:.756863},lightsalmon:{r:1,g:.627451,b:.478431},lightseagreen:{r:.12549,g:.698039,b:.666667},lightskyblue:{r:.529412,g:.807843,b:.980392},lightslategray:{r:.466667,g:.533333,b:.6},lightslategrey:{r:.466667,g:.533333,b:.6},lightsteelblue:{r:.690196,g:.768627,b:.870588},lightyellow:{r:1,g:1,b:.878431},lime:{r:0,g:1,b:0},limegreen:{r:.196078,g:.803922,b:.196078},linen:{r:.980392,g:.941176,b:.901961},magenta:{r:1,g:0,b:1},maroon:{r:.501961,g:0,b:0},mediumaquamarine:{r:.4,g:.803922,b:.666667},mediumblue:{r:0,g:0,b:.803922},mediumorchid:{r:.729412,g:.333333,b:.827451},mediumpurple:{r:.576471,g:.439216,b:.858824},mediumseagreen:{r:.235294,g:.701961,b:.443137},mediumslateblue:{r:.482353,g:.407843,b:.933333},mediumspringgreen:{r:0,g:.980392,b:.603922},mediumturquoise:{r:.282353,g:.819608,b:.8},mediumvioletred:{r:.780392,g:.082353,b:.521569},midnightblue:{r:.098039,g:.098039,b:.439216},mintcream:{r:.960784,g:1,b:.980392},mistyrose:{r:1,g:.894118,b:.882353},moccasin:{r:1,g:.894118,b:.709804},navajowhite:{r:1,g:.870588,b:.678431},navy:{r:0,g:0,b:.501961},oldlace:{r:.992157,g:.960784,b:.901961},olive:{r:.501961,g:.501961,b:0},olivedrab:{r:.419608,g:.556863,b:.137255},orange:{r:1,g:.647059,b:0},orangered:{r:1,g:.270588,b:0},orchid:{r:.854902,g:.439216,b:.839216},palegoldenrod:{r:.933333,g:.909804,b:.666667},palegreen:{r:.596078,g:.984314,b:.596078},paleturquoise:{r:.686275,g:.933333,b:.933333},palevioletred:{r:.858824,g:.439216,b:.576471},papayawhip:{r:1,g:.937255,b:.835294},peachpuff:{r:1,g:.854902,b:.72549},peru:{r:.803922,g:.521569,b:.247059},pink:{r:1,g:.752941,b:.796078},plum:{r:.866667,g:.627451,b:.866667},powderblue:{r:.690196,g:.878431,b:.901961},purple:{r:.501961,g:0,b:.501961},red:{r:1,g:0,b:0},rosybrown:{r:.737255,g:.560784,b:.560784},royalblue:{r:.254902,g:.411765,b:.882353},saddlebrown:{r:.545098,g:.270588,b:.07451},salmon:{r:.980392,g:.501961,b:.447059},sandybrown:{r:.956863,g:.643137,b:.376471},seagreen:{r:.180392,g:.545098,b:.341176},seashell:{r:1,g:.960784,b:.933333},sienna:{r:.627451,g:.321569,b:.176471},silver:{r:.752941,g:.752941,b:.752941},skyblue:{r:.529412,g:.807843,b:.921569},slateblue:{r:.415686,g:.352941,b:.803922},slategray:{r:.439216,g:.501961,b:.564706},slategrey:{r:.439216,g:.501961,b:.564706},snow:{r:1,g:.980392,b:.980392},springgreen:{r:0,g:1,b:.498039},steelblue:{r:.27451,g:.509804,b:.705882},tan:{r:.823529,g:.705882,b:.54902},teal:{r:0,g:.501961,b:.501961},thistle:{r:.847059,g:.74902,b:.847059},tomato:{r:1,g:.388235,b:.278431},transparent:{r:0,g:0,b:0,a:0},turquoise:{r:.25098,g:.878431,b:.815686},violet:{r:.933333,g:.509804,b:.933333},wheat:{r:.960784,g:.870588,b:.701961},white:{r:1,g:1,b:1},whitesmoke:{r:.960784,g:.960784,b:.960784},yellow:{r:1,g:1,b:0},yellowgreen:{r:.603922,g:.803922,b:.196078}},wn=/^rgb\(\s*((?:(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*){2}(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*)\)$/i,kn=/^rgba\(\s*((?:(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*){3}(?:0|1|0?\.\d*)\s*)\)$/i,Rn=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i,On=/^#((?:[0-9a-f]{8}|[0-9a-f]{4}))$/i;function Pn(t){return function(t){return On.test(t)}(t)}function Mn(t){const e=Rn.exec(t);if(null===e)return null;let i=e[1];if(3===i.length){const t=i.charAt(0),e=i.charAt(1),n=i.charAt(2);i=t.concat(t,e,e,n,n)}const n=parseInt(i,16);return isNaN(n)?null:new Zi(Wi((16711680&n)>>>16,0,255),Wi((65280&n)>>>8,0,255),Wi(255&n,0,255),1)}function Nn(t){const e=wn.exec(t);if(null===e)return null;const i=e[1].split(",");return new Zi(Wi(Number(i[0]),0,255),Wi(Number(i[1]),0,255),Wi(Number(i[2]),0,255),1)}function Ln(t){const e=t.toLowerCase();return function(t){return Rn.test(t)}(e)?Mn(e):Pn(e)?function(t){const e=On.exec(t);if(null===e)return null;let i=e[1];if(4===i.length){const t=i.charAt(0),e=i.charAt(1),n=i.charAt(2),o=i.charAt(3);i=t.concat(t,e,e,n,n,o,o)}const n=parseInt(i,16);return isNaN(n)?null:new Zi(Wi((16711680&n)>>>16,0,255),Wi((65280&n)>>>8,0,255),Wi(255&n,0,255),Wi((4278190080&n)>>>24,0,255))}(e):function(t){return wn.test(t)}(e)?Nn(e):function(t){return kn.test(t)}(e)?function(t){const e=kn.exec(t);if(null===e)return null;const i=e[1].split(",");return 4===i.length?new Zi(Wi(Number(i[0]),0,255),Wi(Number(i[1]),0,255),Wi(Number(i[2]),0,255),Number(i[3])):null}(e):function(t){return Dn.hasOwnProperty(t)}(e)?function(t){const e=Dn[t.toLowerCase()];return e?new Zi(e.r,e.g,e.b,e.hasOwnProperty("a")?e.a:void 0):null}(e):null}class _n{constructor(t){this.config=Object.assign({},_n.defaultPaletteConfig,t),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(t){let e=!1;for(const i in t)this.config[i]&&(this.config[i].equalValue?this.config[i].equalValue(t[i])||(this.config[i]=t[i],e=!0):t[i]!==this.config[i]&&(this.config[i]=t[i],e=!0));return e&&this.updatePaletteColors(),e}updatePaletteColors(){const t=this.generatePaletteColorScale();for(let e=0;e<this.config.steps;e++)this.palette[e]=t.getColor(e/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const t=ln(this.config.baseColor),e=new In([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark);let i=e.getColor(0),n=e.getColor(1);if(t.s>=this.config.saturationAdjustmentCutoff&&(i=yn(i,this.config.saturationLight),n=yn(n,this.config.saturationDark)),0!==this.config.multiplyLight){const t=bn(this.config.baseColor,i);i=Tn(this.config.multiplyLight,this.config.interpolationMode,i,t)}if(0!==this.config.multiplyDark){const t=bn(this.config.baseColor,n);n=Tn(this.config.multiplyDark,this.config.interpolationMode,n,t)}if(0!==this.config.overlayLight){const t=xn(this.config.baseColor,i);i=Tn(this.config.overlayLight,this.config.interpolationMode,i,t)}if(0!==this.config.overlayDark){const t=xn(this.config.baseColor,n);n=Tn(this.config.overlayDark,this.config.interpolationMode,n,t)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new In([{position:0,color:this.config.baseColor},{position:1,color:n.clamp()}]):this.config.baseScalePosition>=1?new In([{position:0,color:i.clamp()},{position:1,color:this.config.baseColor}]):new In([{position:0,color:i.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:n.clamp()}]):new In([{position:0,color:i.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:n.clamp()}])}}_n.defaultPaletteConfig={baseColor:Mn("#808080"),steps:11,interpolationMode:An.RGB,scaleColorLight:new Zi(1,1,1,1),scaleColorDark:new Zi(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},_n.greyscalePaletteConfig={baseColor:Mn("#808080"),steps:11,interpolationMode:An.RGB,scaleColorLight:new Zi(1,1,1,1),scaleColorDark:new Zi(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};_n.defaultPaletteConfig.scaleColorLight,_n.defaultPaletteConfig.scaleColorDark;class Fn{constructor(t){this.palette=[],this.config=Object.assign({},Fn.defaultPaletteConfig,t),this.regenPalettes()}regenPalettes(){let t=this.config.steps;(isNaN(t)||t<3)&&(t=3);const e=.14,i=new Zi(e,e,e,1),n=new _n(Object.assign(Object.assign({},_n.greyscalePaletteConfig),{baseColor:i,baseScalePosition:86/94,steps:t})).palette,o=(on(this.config.baseColor)+ln(this.config.baseColor).l)/2,a=this.matchRelativeLuminanceIndex(o,n)/(t-1),r=this.matchRelativeLuminanceIndex(e,n)/(t-1),s=ln(this.config.baseColor),l=cn(Ji.fromObject({h:s.h,s:s.s,l:e})),c=cn(Ji.fromObject({h:s.h,s:s.s,l:.06})),u=new Array(5);u[0]={position:0,color:new Zi(1,1,1,1)},u[1]={position:a,color:this.config.baseColor},u[2]={position:r,color:l},u[3]={position:.99,color:c},u[4]={position:1,color:new Zi(0,0,0,1)};const d=new In(u);this.palette=new Array(t);for(let e=0;e<t;e++){const i=d.getColor(e/(t-1),An.RGB);this.palette[e]=i}}matchRelativeLuminanceIndex(t,e){let i=Number.MAX_VALUE,n=0,o=0;const a=e.length;for(;o<a;o++){const a=Math.abs(on(e[o])-t);a<i&&(i=a,n=o)}return n}}function Hn(t,e){const i=t.relativeLuminance>e.relativeLuminance?t:e,n=t.relativeLuminance>e.relativeLuminance?e:t;return(i.relativeLuminance+.05)/(n.relativeLuminance+.05)}Fn.defaultPaletteConfig={baseColor:Mn("#808080"),steps:94};const Bn=Object.freeze({create:(t,e,i)=>new Un(t,e,i),from:t=>new Un(t.r,t.g,t.b)});class Un extends Zi{constructor(t,e,i){super(t,e,i,1),this.toColorString=this.toStringHexRGB,this.contrast=Hn.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=an(this)}static fromObject(t){return new Un(t.r,t.g,t.b)}}function Vn(t,e,i=0,n=t.length-1){if(n===i)return t[i];const o=Math.floor((n-i)/2)+i;return e(t[o])?Vn(t,e,i,o):Vn(t,e,o+1,n)}const $n=(-.1+Math.sqrt(.21))/2;function Gn(t){return function(t){return t.relativeLuminance<=$n}(t)?-1:1}const zn=Object.freeze({create:t=>Wn.from(t)});class Wn{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,i,n){void 0===i&&(i=this.closestIndexOf(t));let o=this.swatches;const a=this.lastIndex;let r=i;void 0===n&&(n=Gn(t));return-1===n&&(o=this.reversedSwatches,r=a-r),Vn(o,(i=>Hn(t,i)>=e),r,a)}get(t){return this.swatches[t]||this.swatches[zi(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(-1!==e)return this.closestIndexCache.set(t.relativeLuminance,e),e;const i=this.swatches.reduce(((e,i)=>Math.abs(i.relativeLuminance-t.relativeLuminance)<Math.abs(e.relativeLuminance-t.relativeLuminance)?i:e));return e=this.swatches.indexOf(i),this.closestIndexCache.set(t.relativeLuminance,e),e}static from(t){return new Wn(t,Object.freeze(new Fn({baseColor:Zi.fromObject(t)}).palette.map((t=>{const e=Mn(t.toStringHexRGB());return Bn.create(e.r,e.g,e.b)}))))}}const Kn=Bn.create(1,1,1),jn=Bn.create(0,0,0),Yn=Bn.create(.5,.5,.5),qn=Mn("#0078D4"),Xn=Bn.create(qn.r,qn.g,qn.b);function Zn(t){return Bn.create(t,t,t)}var Jn;function Qn(t,e,i,n,o,a){return Math.max(t.closestIndexOf(Zn(e))+i,n,o,a)}!function(t){t[t.LightMode=1]="LightMode",t[t.DarkMode=.23]="DarkMode"}(Jn||(Jn={}));const{create:to}=$i,eo=to("direction").withDefault(Gi.ltr),io=to("disabled-opacity").withDefault(.3),no=to("base-height-multiplier").withDefault(8),oo=to("base-horizontal-spacing-multiplier").withDefault(3),ao=to("density").withDefault(0),ro=to("design-unit").withDefault(4),so=to("control-corner-radius").withDefault(4),lo=to("layer-corner-radius").withDefault(4),co=to("stroke-width").withDefault(1),uo=to("focus-stroke-width").withDefault(2),ho=to("body-font").withDefault("Segoe UI, sans-serif"),po=to("type-ramp-base-font-size").withDefault("14px"),fo=to("type-ramp-base-line-height").withDefault("20px"),go=to("type-ramp-minus-1-font-size").withDefault("12px"),mo=to("type-ramp-minus-1-line-height").withDefault("16px"),vo=to("type-ramp-minus-2-font-size").withDefault("10px"),yo=to("type-ramp-minus-2-line-height").withDefault("14px"),Co=to("type-ramp-plus-1-font-size").withDefault("16px"),bo=to("type-ramp-plus-1-line-height").withDefault("22px"),So=to("type-ramp-plus-2-font-size").withDefault("20px"),xo=to("type-ramp-plus-2-line-height").withDefault("28px"),Eo=to("type-ramp-plus-3-font-size").withDefault("24px"),Ao=to("type-ramp-plus-3-line-height").withDefault("32px"),To=to("type-ramp-plus-4-font-size").withDefault("28px"),Io=to("type-ramp-plus-4-line-height").withDefault("36px"),Do=to("type-ramp-plus-5-font-size").withDefault("32px"),wo=to("type-ramp-plus-5-line-height").withDefault("40px"),ko=to("type-ramp-plus-6-font-size").withDefault("40px"),Ro=to("type-ramp-plus-6-line-height").withDefault("52px"),Oo=to("base-layer-luminance").withDefault(Jn.LightMode),Po=to("accent-fill-rest-delta").withDefault(0),Mo=to("accent-fill-hover-delta").withDefault(4),No=to("accent-fill-active-delta").withDefault(-5),Lo=to("accent-fill-focus-delta").withDefault(0),_o=to("accent-foreground-rest-delta").withDefault(0),Fo=to("accent-foreground-hover-delta").withDefault(6),Ho=to("accent-foreground-active-delta").withDefault(-4),Bo=to("accent-foreground-focus-delta").withDefault(0),Uo=to("neutral-fill-rest-delta").withDefault(7),Vo=to("neutral-fill-hover-delta").withDefault(10),$o=to("neutral-fill-active-delta").withDefault(5),Go=to("neutral-fill-focus-delta").withDefault(0),zo=to("neutral-fill-input-rest-delta").withDefault(0),Wo=to("neutral-fill-input-hover-delta").withDefault(0),Ko=to("neutral-fill-input-active-delta").withDefault(0),jo=to("neutral-fill-input-focus-delta").withDefault(0),Yo=to("neutral-fill-inverse-rest-delta").withDefault(0),qo=to("neutral-fill-inverse-hover-delta").withDefault(-3),Xo=to("neutral-fill-inverse-active-delta").withDefault(7),Zo=to("neutral-fill-inverse-focus-delta").withDefault(0),Jo=to("neutral-fill-layer-rest-delta").withDefault(3),Qo=to("neutral-fill-stealth-rest-delta").withDefault(0),ta=to("neutral-fill-stealth-hover-delta").withDefault(5),ea=to("neutral-fill-stealth-active-delta").withDefault(3),ia=to("neutral-fill-stealth-focus-delta").withDefault(0),na=to("neutral-fill-strong-rest-delta").withDefault(0),oa=to("neutral-fill-strong-hover-delta").withDefault(8),aa=to("neutral-fill-strong-active-delta").withDefault(-5),ra=to("neutral-fill-strong-focus-delta").withDefault(0),sa=to("neutral-stroke-rest-delta").withDefault(25),la=to("neutral-stroke-hover-delta").withDefault(40),ca=to("neutral-stroke-active-delta").withDefault(16),ua=to("neutral-stroke-focus-delta").withDefault(25),da=to("neutral-stroke-divider-rest-delta").withDefault(8),ha=to("neutral-stroke-strong-hover-delta").withDefault(40),pa=to("neutral-stroke-strong-active-delta").withDefault(16),fa=to("neutral-stroke-strong-focus-delta").withDefault(25),ga=to({name:"neutral-palette",cssCustomPropertyName:null}).withDefault(zn.create(Yn)),ma=to({name:"accent-palette",cssCustomPropertyName:null}).withDefault(zn.create(Xn)),va=to({name:"neutral-layer-card-container-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,i){const n=zi(t.closestIndexOf(Zn(e))-i,0,t.swatches.length-1);return t.get(n+i)}(ga.getValueFor(t),Oo.getValueFor(t),Jo.getValueFor(t))}),ya=(to("neutral-layer-card-container").withDefault((t=>va.getValueFor(t).evaluate(t))),to({name:"neutral-layer-floating-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,i){const n=t.closestIndexOf(Zn(e))-i;return t.get(n-i)}(ga.getValueFor(t),Oo.getValueFor(t),Jo.getValueFor(t))})),Ca=to("neutral-layer-floating").withDefault((t=>ya.getValueFor(t).evaluate(t))),ba=to({name:"neutral-layer-1-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e){return t.get(t.closestIndexOf(Zn(e)))}(ga.getValueFor(t),Oo.getValueFor(t))}),Sa=to("neutral-layer-1").withDefault((t=>ba.getValueFor(t).evaluate(t))),xa=to({name:"neutral-layer-2-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,i,n,o,a){return t.get(Qn(t,e,i,n,o,a))}(ga.getValueFor(t),Oo.getValueFor(t),Jo.getValueFor(t),Uo.getValueFor(t),Vo.getValueFor(t),$o.getValueFor(t))}),Ea=(to("neutral-layer-2").withDefault((t=>xa.getValueFor(t).evaluate(t))),to({name:"neutral-layer-3-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,i,n,o,a){return t.get(Qn(t,e,i,n,o,a)+i)}(ga.getValueFor(t),Oo.getValueFor(t),Jo.getValueFor(t),Uo.getValueFor(t),Vo.getValueFor(t),$o.getValueFor(t))})),Aa=(to("neutral-layer-3").withDefault((t=>Ea.getValueFor(t).evaluate(t))),to({name:"neutral-layer-4-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,i,n,o,a){return t.get(Qn(t,e,i,n,o,a)+2*i)}(ga.getValueFor(t),Oo.getValueFor(t),Jo.getValueFor(t),Uo.getValueFor(t),Vo.getValueFor(t),$o.getValueFor(t))})),Ta=(to("neutral-layer-4").withDefault((t=>Aa.getValueFor(t).evaluate(t))),to("fill-color").withDefault((t=>Sa.getValueFor(t))));var Ia;!function(t){t[t.normal=4.5]="normal",t[t.large=7]="large"}(Ia||(Ia={}));const Da=to({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>(Ia.normal,(t,e)=>function(t,e,i,n,o,a,r,s,l){const c=t.source,u=t.closestIndexOf(c),d=u+1*n,h=u+1*o,p=u+1*a;return{rest:t.get(u),hover:t.get(d),active:t.get(h),focus:t.get(p)}}(ma.getValueFor(t),ga.getValueFor(t),e||Ta.getValueFor(t),Mo.getValueFor(t),No.getValueFor(t),Lo.getValueFor(t),Uo.getValueFor(t),Vo.getValueFor(t),$o.getValueFor(t)))(t,e)}),wa=to("accent-fill-rest").withDefault((t=>Da.getValueFor(t).evaluate(t).rest)),ka=to("accent-fill-hover").withDefault((t=>Da.getValueFor(t).evaluate(t).hover)),Ra=to("accent-fill-active").withDefault((t=>Da.getValueFor(t).evaluate(t).active)),Oa=to("accent-fill-focus").withDefault((t=>Da.getValueFor(t).evaluate(t).focus)),Pa=t=>(e,i)=>function(t,e){return t.contrast(Kn)>=e?Kn:jn}(i||wa.getValueFor(e),t),Ma=to({name:"foreground-on-accent-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>Pa(Ia.normal)(t,e)}),Na=to("foreground-on-accent-rest").withDefault((t=>Ma.getValueFor(t).evaluate(t,wa.getValueFor(t)))),La=to("foreground-on-accent-hover").withDefault((t=>Ma.getValueFor(t).evaluate(t,ka.getValueFor(t)))),_a=to("foreground-on-accent-active").withDefault((t=>Ma.getValueFor(t).evaluate(t,Ra.getValueFor(t)))),Fa=to("foreground-on-accent-focus").withDefault((t=>Ma.getValueFor(t).evaluate(t,Oa.getValueFor(t)))),Ha=to({name:"foreground-on-accent-large-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>Pa(Ia.large)(t,e)}),Ba=(to("foreground-on-accent-rest-large").withDefault((t=>Ha.getValueFor(t).evaluate(t))),to("foreground-on-accent-hover-large").withDefault((t=>Ha.getValueFor(t).evaluate(t,ka.getValueFor(t)))),to("foreground-on-accent-active-large").withDefault((t=>Ha.getValueFor(t).evaluate(t,Ra.getValueFor(t)))),to("foreground-on-accent-focus-large").withDefault((t=>Ha.getValueFor(t).evaluate(t,Oa.getValueFor(t)))),t=>(e,i)=>function(t,e,i,n,o,a,r){const s=t.source,l=t.closestIndexOf(s),c=Gn(e),u=l+(1===c?Math.min(n,o):Math.max(c*n,c*o)),d=t.colorContrast(e,i,u,c),h=t.closestIndexOf(d),p=h+c*Math.abs(n-o);let f,g;return(1===c?n<o:c*n>c*o)?(f=h,g=p):(f=p,g=h),{rest:t.get(f),hover:t.get(g),active:t.get(f+c*a),focus:t.get(f+c*r)}}(ma.getValueFor(e),i||Ta.getValueFor(e),t,_o.getValueFor(e),Fo.getValueFor(e),Ho.getValueFor(e),Bo.getValueFor(e))),Ua=to({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>Ba(Ia.normal)(t,e)}),Va=to("accent-foreground-rest").withDefault((t=>Ua.getValueFor(t).evaluate(t).rest)),$a=to("accent-foreground-hover").withDefault((t=>Ua.getValueFor(t).evaluate(t).hover)),Ga=to("accent-foreground-active").withDefault((t=>Ua.getValueFor(t).evaluate(t).active)),za=(to("accent-foreground-focus").withDefault((t=>Ua.getValueFor(t).evaluate(t).focus)),to({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,i,n,o,a){const r=t.closestIndexOf(e),s=r>=Math.max(i,n,o,a)?-1:1;return{rest:t.get(r+s*i),hover:t.get(r+s*n),active:t.get(r+s*o),focus:t.get(r+s*a)}}(ga.getValueFor(t),e||Ta.getValueFor(t),Uo.getValueFor(t),Vo.getValueFor(t),$o.getValueFor(t),Go.getValueFor(t))})),Wa=to("neutral-fill-rest").withDefault((t=>za.getValueFor(t).evaluate(t).rest)),Ka=to("neutral-fill-hover").withDefault((t=>za.getValueFor(t).evaluate(t).hover)),ja=to("neutral-fill-active").withDefault((t=>za.getValueFor(t).evaluate(t).active)),Ya=(to("neutral-fill-focus").withDefault((t=>za.getValueFor(t).evaluate(t).focus)),to({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,i,n,o,a){const r=Gn(e),s=t.closestIndexOf(e);return{rest:t.get(s-r*i),hover:t.get(s-r*n),active:t.get(s-r*o),focus:t.get(s-r*a)}}(ga.getValueFor(t),e||Ta.getValueFor(t),zo.getValueFor(t),Wo.getValueFor(t),Ko.getValueFor(t),jo.getValueFor(t))})),qa=to("neutral-fill-input-rest").withDefault((t=>Ya.getValueFor(t).evaluate(t).rest)),Xa=to("neutral-fill-input-hover").withDefault((t=>Ya.getValueFor(t).evaluate(t).hover)),Za=(to("neutral-fill-input-focus").withDefault((t=>Ya.getValueFor(t).evaluate(t).focus)),to("neutral-fill-input-active").withDefault((t=>Ya.getValueFor(t).evaluate(t).active))),Ja=to({name:"neutral-fill-inverse-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,i,n,o,a){const r=Gn(e),s=t.closestIndexOf(t.colorContrast(e,14)),l=s+r*Math.abs(i-n);let c,u;return(1===r?i<n:r*i>r*n)?(c=s,u=l):(c=l,u=s),{rest:t.get(c),hover:t.get(u),active:t.get(c+r*o),focus:t.get(c+r*a)}}(ga.getValueFor(t),e||Ta.getValueFor(t),Yo.getValueFor(t),qo.getValueFor(t),Xo.getValueFor(t),Zo.getValueFor(t))}),Qa=(to("neutral-fill-inverse-rest").withDefault((t=>Ja.getValueFor(t).evaluate(t).rest)),to("neutral-fill-inverse-hover").withDefault((t=>Ja.getValueFor(t).evaluate(t).hover)),to("neutral-fill-inverse-active").withDefault((t=>Ja.getValueFor(t).evaluate(t).active)),to("neutral-fill-inverse-focus").withDefault((t=>Ja.getValueFor(t).evaluate(t).focus)),to({name:"neutral-fill-layer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,i){const n=t.closestIndexOf(e);return t.get(n-i)}(ga.getValueFor(t),e||Ta.getValueFor(t),Jo.getValueFor(t))})),tr=to("neutral-fill-layer-rest").withDefault((t=>Qa.getValueFor(t).evaluate(t))),er=to({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,i,n,o,a,r,s,l,c){const u=Math.max(i,n,o,a,r,s,l,c),d=t.closestIndexOf(e),h=d>=u?-1:1;return{rest:t.get(d+h*i),hover:t.get(d+h*n),active:t.get(d+h*o),focus:t.get(d+h*a)}}(ga.getValueFor(t),e||Ta.getValueFor(t),Qo.getValueFor(t),ta.getValueFor(t),ea.getValueFor(t),ia.getValueFor(t),Uo.getValueFor(t),Vo.getValueFor(t),$o.getValueFor(t),Go.getValueFor(t))}),ir=to("neutral-fill-stealth-rest").withDefault((t=>er.getValueFor(t).evaluate(t).rest)),nr=to("neutral-fill-stealth-hover").withDefault((t=>er.getValueFor(t).evaluate(t).hover)),or=to("neutral-fill-stealth-active").withDefault((t=>er.getValueFor(t).evaluate(t).active)),ar=(to("neutral-fill-stealth-focus").withDefault((t=>er.getValueFor(t).evaluate(t).focus)),to({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,i,n,o,a){const r=Gn(e),s=t.closestIndexOf(t.colorContrast(e,4.5)),l=s+r*Math.abs(i-n);let c,u;return(1===r?i<n:r*i>r*n)?(c=s,u=l):(c=l,u=s),{rest:t.get(c),hover:t.get(u),active:t.get(c+r*o),focus:t.get(c+r*a)}}(ga.getValueFor(t),e||Ta.getValueFor(t),na.getValueFor(t),oa.getValueFor(t),aa.getValueFor(t),ra.getValueFor(t))})),rr=(to("neutral-fill-strong-rest").withDefault((t=>ar.getValueFor(t).evaluate(t).rest)),to("neutral-fill-strong-hover").withDefault((t=>ar.getValueFor(t).evaluate(t).hover)),to("neutral-fill-strong-active").withDefault((t=>ar.getValueFor(t).evaluate(t).active)),to("neutral-fill-strong-focus").withDefault((t=>ar.getValueFor(t).evaluate(t).focus)),to({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,i,n,o,a){const r=t.closestIndexOf(e),s=Gn(e),l=r+s*i,c=l+s*(n-i),u=l+s*(o-i),d=l+s*(a-i);return{rest:t.get(l),hover:t.get(c),active:t.get(u),focus:t.get(d)}}(ga.getValueFor(t),Ta.getValueFor(t),sa.getValueFor(t),la.getValueFor(t),ca.getValueFor(t),ua.getValueFor(t))})),sr=to("neutral-stroke-rest").withDefault((t=>rr.getValueFor(t).evaluate(t).rest)),lr=to("neutral-stroke-hover").withDefault((t=>rr.getValueFor(t).evaluate(t).hover)),cr=to("neutral-stroke-active").withDefault((t=>rr.getValueFor(t).evaluate(t).active)),ur=(to("neutral-stroke-focus").withDefault((t=>rr.getValueFor(t).evaluate(t).focus)),to({name:"neutral-stroke-divider-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,i){return t.get(t.closestIndexOf(e)+Gn(e)*i)}(ga.getValueFor(t),e||Ta.getValueFor(t),da.getValueFor(t))})),dr=to("neutral-stroke-divider-rest").withDefault((t=>ur.getValueFor(t).evaluate(t))),hr=to({name:"neutral-stroke-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,i,n,o,a){const r=Gn(e),s=t.colorContrast(e,i),l=t.closestIndexOf(s);return{rest:s,hover:t.get(l+r*n),active:t.get(l+r*o),focus:t.get(l+r*a)}}(ga.getValueFor(t),Ta.getValueFor(t),3,ha.getValueFor(t),pa.getValueFor(t),fa.getValueFor(t))}),pr=to("neutral-stroke-strong-rest").withDefault((t=>hr.getValueFor(t).evaluate(t).rest)),fr=to("neutral-stroke-strong-hover").withDefault((t=>hr.getValueFor(t).evaluate(t).hover)),gr=to("neutral-stroke-strong-active").withDefault((t=>hr.getValueFor(t).evaluate(t).active)),mr=(to("neutral-stroke-strong-focus").withDefault((t=>hr.getValueFor(t).evaluate(t).focus)),to({name:"focus-stroke-outer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>{return e=ga.getValueFor(t),i=Ta.getValueFor(t),e.colorContrast(i,3.5);var e,i}})),vr=to("focus-stroke-outer").withDefault((t=>mr.getValueFor(t).evaluate(t))),yr=to({name:"focus-stroke-inner-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>{return e=ma.getValueFor(t),i=Ta.getValueFor(t),n=vr.getValueFor(t),e.colorContrast(n,3.5,e.closestIndexOf(e.source),-1*Gn(i));var e,i,n}}),Cr=to("focus-stroke-inner").withDefault((t=>yr.getValueFor(t).evaluate(t))),br=to({name:"neutral-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>{return e=ga.getValueFor(t),i=Ta.getValueFor(t),e.colorContrast(i,14);var e,i}}),Sr=to("neutral-foreground-rest").withDefault((t=>br.getValueFor(t).evaluate(t))),xr=to({name:"neutral-foreground-hint-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>{return e=ga.getValueFor(t),i=Ta.getValueFor(t),e.colorContrast(i,4.5);var e,i}}),Er=to("neutral-foreground-hint").withDefault((t=>xr.getValueFor(t).evaluate(t)));function Ar(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=p(t);if(e){var o=p(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return h(this,i)}}var Tr=function(t){u(i,t);var e=Ar(i);function i(t,n,o){var a;return s(this,i),f(l(a=e.call(this)),"ButtonClicked",void 0),f(l(a),"Domain",void 0),f(l(a),"Metadata",void 0),a.ButtonClicked=t,a.Domain=n,a.Metadata=o,a}return r(i)}(g),Ir=function(){function t(){s(this,t),f(this,"stringValue",void 0)}return r(t,null,[{key:"Create",value:function(e){var i=new t;return i.stringValue=e.stringValue,i}}]),t}();function Dr(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function wr(t,e){if(t){if("string"==typeof t)return Dr(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Dr(t,e):void 0}}function kr(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var n,o,a=[],r=!0,s=!1;try{for(i=i.call(t);!(r=(n=i.next()).done)&&(a.push(n.value),!e||a.length!==e);r=!0);}catch(t){s=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(s)throw o}}return a}}(t,e)||wr(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Rr,Or,Pr=r((function t(e,i){s(this,t),f(this,"dtg",void 0),f(this,"minPrice",void 0),this.dtg=e,i&&(this.minPrice=i.minPrice)})),Mr=Pr,Nr=r((function t(e,i,n){s(this,t),f(this,"title",void 0),f(this,"imageUrl",void 0),f(this,"currency",void 0),f(this,"base64ProductImage",void 0),this.title=e,this.imageUrl=i,this.currency=n}));function Lr(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return _r(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return _r(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function _r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}!function(t){t[t.PRICEDROP=0]="PRICEDROP",t[t.PRICEINCREASE=1]="PRICEINCREASE",t[t.FAIRPRICE=2]="FAIRPRICE"}(Rr||(Rr={})),function(t){t.NoInsight="NoInsight",t.ShowInsight="ShowInsight"}(Or||(Or={}));var Fr,Hr,Br,Ur,Vr,$r,Gr,zr=function(){function t(e,i,n,o,a){s(this,t),f(this,"TriggerPriceHistoryAlert",void 0),f(this,"DailyPrices",[]),f(this,"ProductDetails",void 0),f(this,"CurrentPrice",void 0),f(this,"DailyPriceDropPercentage",void 0),f(this,"SourceType",void 0),f(this,"MedianPrice",void 0),f(this,"ShowPriceHistoryInsight",!0),f(this,"PriceHistoryInsightType",void 0),this.TriggerPriceHistoryAlert=e.triggerPriceHistoryAlert,this.DailyPriceDropPercentage=e.priceHistoryData.dailyPriceDropPercentage,this.SourceType=e.priceHistoryData.sourceType,this.MedianPrice=e.priceHistoryData.medianPrice,this.DailyPrices=this.getDailyPrices(e,o);var r,l=e.productDetails;(this.ProductDetails=new Nr(l.title,l.imageUrl,l.currency),this.DailyPrices.length>0)?(this.PriceHistoryInsightType=e.triggerInsight,this.PriceHistoryInsightType&&this.PriceHistoryInsightType===Or.NoInsight||null==(null===(r=e.priceHistoryData)||void 0===r?void 0:r.dailyPriceDropPercentage)?(this.CurrentPrice=i,this.ShowPriceHistoryInsight=!1):this.CurrentPrice=this.DailyPrices[this.DailyPrices.length-1].minPrice):this.CurrentPrice=i;n&&(this.ProductDetails.base64ProductImage=n)}return r(t,[{key:"addBase64ProductImage",value:function(t){this.ProductDetails&&(this.ProductDetails.base64ProductImage=t)}},{key:"getDaysDifference",value:function(t,e){return t=new Date(t.getFullYear(),t.getMonth(),t.getDate()),e=new Date(e.getFullYear(),e.getMonth(),e.getDate()),Math.abs(Math.floor((t.getTime()-e.getTime())/864e5))}},{key:"getHoursDifference",value:function(t,e){return t=new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours()),e=new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours()),Math.abs((t.getTime()-e.getTime())/36e5)}},{key:"getPriceHistoryType",value:function(){return this.DailyPriceDropPercentage>2?Rr.PRICEDROP:this.DailyPriceDropPercentage<-2?Rr.PRICEINCREASE:Rr.FAIRPRICE}},{key:"checkLastDate",value:function(t){var e=new Date;return Math.floor(e.getTime()-t.getTime())<0?e:t}},{key:"getDailyPrices",value:function(t,e){var i,n,o=[],a=null===(i=t.priceHistoryData)||void 0===i?void 0:i.sourceType,r=Lr(t.priceHistoryData.dailyPrice.entries());try{for(r.s();!(n=r.n()).done;){var s=kr(n.value,2),l=s[0],c=s[1],u=new Date(c.date),d=new Date(u.getTime()+Math.abs(60*u.getTimezoneOffset()*1e3));l===t.priceHistoryData.dailyPrice.length-1&&(d=this.checkLastDate(d));var h=new Mr(d,c.priceData);(0===a&&this.isDailyPriceValid(h,e)||0!==a)&&o.push(h)}}catch(t){r.e(t)}finally{r.f()}return o}},{key:"isDailyPriceValid",value:function(t,e){var i=new Date(2021,4,1),n=new Date(2021,8,24),o={"asos.com":n,"bestbuy.ca":n,"canadiantire.ca":n,"gapcanada.ca":n,"globalindustrial.ca":n,"homedepot.ca":n,"ikea.com":n,"sportchek.ca":n,"target.com":i,"walmart.com":i,"wayfair.ca":n};return!Object.keys(o).find((function(t){return t===e}))||t.dtg>=o[e]}}]),t}(),Wr=zr;function Kr(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return jr(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return jr(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function jr(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}!function(t){t.EdgeImpressionId="EdgeImpressionId",t.CouponImpressionId="CouponImpressionId",t.DomainName="DomainName",t.Client="Client"}(Fr||(Fr={})),function(t){t.COUPONS_COPIED="COUPONS_COPIED",t.DISMISSED="DISMISSED",t.FLYOUT_SNOOZED="SNOOZED",t.FLYOUT_SNOOZE_UNDO="FLYOUT_SNOOZE_UNDO",t.FRE_DISMISSED="FRE_DISMISSED",t.FRE_GOT_IT="FRE_GOT_IT",t.FRE_MANAGE="FRE_MANAGE",t.FRE_NO_THANKS="FRE_NO_THANKS",t.FRE_SETTINGS="FRE_SETTINGS",t.MANAGE="MANAGE",t.NAVIGATE_TO_RETAILER="NAVIGATE_TO_RETAILER",t.TRY_ALL_COUPONS="TRY_ALL_COUPONS",t.TURN_OFF_AUTO_SHOW="TURN_OFF_AUTO_SHOW",t.TURN_ON_AUTO_SHOW="TURN_ON_AUTO_SHOW",t.VIEW_MORE_COUPONS="VIEW_MORE_COUPONS",t.VIEW_MORE_RETAILERS="VIEW_MORE_RETAILERS",t.VIEW_MORE_TOP_RETAILERS="VIEW_MORE_TOP_RETAILERS",t.VIEW_MORE_GROCERY_COUPONS="VIEW_MORE_GROCERY_COUPONS",t.LIGHT_DISMISSED="LIGHT_DISMISSED",t.SHOW_MORE_SELLERS="SHOW_MORE_SELLERS",t.REBATES_LEARN_MORE="REBATES_LEARN_MORE",t.REBATES_ACCOUNT="REBATES_ACCOUNT",t.REBATES_HISTORY="REBATES_HISTORY",t.ACTIVATE_CASHBACK="ACTIVATE_CASHBACK",t.EXPAND_PRICE_HISTORY_GRAPH="EXPAND_PRICE_HISTORY_GRAPH",t.HIDE_PRICE_HISTORY_GRAPH="HIDE_PRICE_HISTORY_GRAPH",t.FIRST_HOVER_PRICE_HISTORY_GRAPH="FIRST_HOVER_PRICE_HISTORY_GRAPH",t.VIEW_PRICE_HISTORY="VIEW_PRICE_HISTORY",t.HIDE_PRICE_HISTORY="HIDE_PRICE_HISTORY",t.NAVIGATE_TO_DEAL_OFFER="NAVIGATE_TO_DEAL_OFFER",t.NAVIGATE_TO_PROFESSIONAL_REVIEW="NAVIGATE_TO_PROFESSIONAL_REVIEW",t.NAVIGATE_TO_VIDEO_REVIEW="NAVIGATE_TO_VIDEO_REVIEW",t.TRY_ALL_COUPON_WITH_EXPRESS_CHECKOUT="TRY_ALL_COUPON_WITH_EXPRESS_CHECKOUT",t.TRY_ALL_COUPON_WITH_EXPRESS_CHECKOUT_FORZIP="TRY_ALL_COUPON_WITH_EXPRESS_CHECKOUT_FORZIP",t.EXPRESS_CHECKOUT="EXPRESS_CHECKOUT",t.EXPRESS_CHECKOUT_FORZIP="EXPRESS_CHECKOUT_FORZIP",t.EXPRESS_CHECKOUT_WITHOUT_PAYMENT="EXPRESS_CHECKOUT_WITHOUT_PAYMENT",t.NAVIGATE_TO_RECOMMENDATION_OFFER="NAVIGATE_TO_RECOMMENDATION_OFFER",t.CLIP_COUPON="CLIP_COUPON",t.ACTIVATE_CASHBACK_NEW="ACTIVATE_CASHBACK_NEW",t.NAVIGATE_TO_OTHER_SELLER="NAVIGATE_TO_OTHER_SELLER",t.ADD_TO_CART_FROM_OTHER_SELLER="ADD_TO_CART_FROM_OTHER_SELLER",t.PRODUCT_HISTORY_NAVIGATION="PRODUCT_HISTORY_NAVIGATION",t.PRODUCT_HISTORY_EXPAND_SECTION="PRODUCT_HISTORY_EXPAND_SECTION",t.PRODUCT_HISTORY_COLLAPSE_SECTION="PRODUCT_HISTORY_COLLAPSE_SECTION",t.TIPS_CLICK="TIPS_CLICK",t.OPEN_FLYOUT_MICRO_NOTIFICATION="OPEN_FLYOUT_MICRO_NOTIFICATION",t.WALLET_HUB_NAVIGATION="WALLET_HUB_NAVIGATION",t.PAYMENT_OPTIONS_EXPAND_SECTION="PAYMENT_OPTIONS_EXPAND_SECTION",t.PAYMENT_OPTIONS_COLLAPSE_SECTION="PAYMENT_OPTIONS_COLLAPSE_SECTION",t.EXPRESS_CHECKOUT_ZIP_OPTION_SELECTED="EXPRESS_CHECKOUT_ZIP_OPTION_SELECTED",t.EXPRESS_CHECKOUT_SHOWN_IN_ZIP_FEATURE="EXPRESS_CHECKOUT_SHOWN_IN_ZIP_FEATURE",t.EXPRESS_CHECKOUT_ZIP_OPTION_SHOWN="EXPRESS_CHECKOUT_ZIP_OPTION_SHOWN",t.CONTINUE_TO_ZIP_CLICKED="CONTINUE_TO_ZIP_CLICKED",t.DELETE_TRACKER="DELETE_TRACKER",t.CASHBACK_RETAILER_CLICK="CASHBACK_RETAILER_CLICK",t.ACTIVATE_CASHBACK_RETURNED="ACTIVATE_CASHBACK_RETURNED",t.PRINT_COUPONS_CLICK="PRINT_COUPONS_CLICK",t.SELECT_PRINTABLE_COUPON="SELECT_PRINTABLE_COUPON",t.CLICK_SEEALL_PRINTABLE_COUPON="CLICK_SEEALL_PRINTABLE_COUPON",t.DIGITAL_GROCERY_COUPONS_CLICK="DIGITAL_GROCERY_COUPONS_CLICK",t.DIGITAL_GROCERY_COUPONS_SEEALL="DIGITAL_GROCERY_COUPONS_SEEALL",t.PACKAGE_TRACKING_OPT_IN="PACKAGE_TRACKING_TRACK_ORDER_OPT_IN",t.PACKAGE_TRACKING_OPT_OUT="PACKAGE_TRACKING_TRACK_ORDER_DO_NOT_TRACK",t.PACKAGE_TRACKING_EXPAND_SECTION="PACKAGE_TRACKING_EXPAND_SECTION",t.PACKAGE_TRACKING_SEE_MORE="PACKAGE_TRACKING_SEE_MORE",t.PACKAGE_TRACKING_COLLAPSE_SECTION="PACKAGE_TRACKING_COLLAPSE_SECTION",t.PACKAGE_TRACKING_TRACK_ORDER_DO_NOT_TRACK="PACKAGE_TRACKING_TRACK_ORDER_DO_NOT_TRACK",t.PACKAGE_TRACKING_CARD_CLICKED="PACKAGE_TRACKING_CARD_CLICKED",t.ACTIVATE_REWARDS_NEW="ACTIVATE_REWARDS_NEW",t.REWARDS_SIGNIN_CLICK="REWARDS_SIGNIN_CLICK",t.REWARDS_REDEEM_CLICK="REWARDS_REDEEM_CLICK",t.SUSTAINABILITYSHOP_CLICK="SUSTAINABILITYSHOP_CLICK",t.PWILO_NOTIFICATION_PRICE_DROP="PWILO_NOTIFICATION_PRICE_DROP",t.PWILO_NOTIFICATION_PRICE_DROP_DELETE="PWILO_NOTIFICATION_PRICE_DROP_DELETE",t.PWILO_NOTIFICATION_PRICE_DROP_DISABLE_REMINDERS="PWILO_NOTIFICATION_PRICE_DROP_DISABLE_REMINDERS",t.EXPRESS_CHECKOUT_ZIP_LEARN_MORE_LINK_CLICKED="EXPRESS_CHECKOUT_ZIP_LEARN_MORE_LINK_CLICKED",t.EXPRESS_CHECKOUT_ZIP_PREFERENCE_LINK_CLICKED="EXPRESS_CHECKOUT_ZIP_PREFERENCE_LINK_CLICKED",t.SUSTAINABILITY_LANDING_FULL_LEARN_MORE="SUSTAINABILITY_LANDING_FULL_LEARN_MORE",t.SUSTAINABILITY_LANDING_FOOTER_LEARN_MORE="SUSTAINABILITY_LANDING_FOOTER_LEARN_MORE",t.SUSTAINABILITY_PURCHASE_CONFIRMATION_LEARN_MORE="SUSTAINABILITY_PURCHASE_CONFIRMATION_LEARN_MORE",t.CLICK_PCB_CROSS_SESSION="CLICK_PCB_CROSS_SESSION",t.REWARD_JOIN_NOW="REWARD_JOIN_NOW",t.REWARD_MAYBE_LATER="REWARD_MAYBE_LATER",t.REWARD_DISMISS="REWARD_DISMISS",t.REWARD_LINK_CLICK="REWARD_LINK_CLICK",t.ATTAINABLE_COUPON_CONTINUE="ATTAINABLE_COUPON_CONTINUE",t.ATTAINABLE_COUPON_CLICK="ATTAINABLE_COUPON_CLICK",t.ATTAINABLE_COUPON_VIEWED="ATTAINABLE_COUPON_VIEWED"}(Hr||(Hr={})),function(t){t.CARD_VIEWED="CARD_VIEWED",t.CARD_CLICKED="CARD_CLICKED",t.CARD_DELETED="CARD_DELETED"}(Br||(Br={})),function(t){t[t.COUPONS_COPIED=0]="COUPONS_COPIED",t[t.DISMISSED=1]="DISMISSED",t[t.FRE_DISMISSED=2]="FRE_DISMISSED",t[t.FRE_GOT_IT=3]="FRE_GOT_IT",t[t.FRE_MANAGE=4]="FRE_MANAGE",t[t.FRE_NO_THANKS=5]="FRE_NO_THANKS",t[t.FRE_SETTINGS=6]="FRE_SETTINGS",t[t.MANAGE=7]="MANAGE",t[t.NAVIGATE_TO_RETAILER=8]="NAVIGATE_TO_RETAILER",t[t.TRY_ALL_COUPONS=9]="TRY_ALL_COUPONS",t[t.TURN_OFF_AUTO_SHOW=10]="TURN_OFF_AUTO_SHOW",t[t.TURN_ON_AUTO_SHOW=11]="TURN_ON_AUTO_SHOW",t[t.VIEW_MORE_COUPONS=12]="VIEW_MORE_COUPONS",t[t.VIEW_MORE_RETAILERS=13]="VIEW_MORE_RETAILERS",t[t.LIGHT_DISMISSED=14]="LIGHT_DISMISSED",t[t.SHOW_MORE_SELLERS=15]="SHOW_MORE_SELLERS",t[t.REBATES_LEARN_MORE=16]="REBATES_LEARN_MORE",t[t.REBATES_ACCOUNT=17]="REBATES_ACCOUNT",t[t.REBATES_HISTORY=18]="REBATES_HISTORY",t[t.ACTIVATE_CASHBACK=19]="ACTIVATE_CASHBACK",t[t.EXPAND_PRICE_HISTORY_GRAPH=20]="EXPAND_PRICE_HISTORY_GRAPH",t[t.HIDE_PRICE_HISTORY_GRAPH=21]="HIDE_PRICE_HISTORY_GRAPH",t[t.FIRST_HOVER_PRICE_HISTORY_GRAPH=22]="FIRST_HOVER_PRICE_HISTORY_GRAPH",t[t.VIEW_PRICE_HISTORY=23]="VIEW_PRICE_HISTORY",t[t.HIDE_PRICE_HISTORY=24]="HIDE_PRICE_HISTORY",t[t.NAVIGATE_TO_DEAL_OFFER=25]="NAVIGATE_TO_DEAL_OFFER",t[t.NAVIGATE_TO_PROFESSIONAL_REVIEW=26]="NAVIGATE_TO_PROFESSIONAL_REVIEW",t[t.NAVIGATE_TO_VIDEO_REVIEW=27]="NAVIGATE_TO_VIDEO_REVIEW",t[t.TRY_ALL_COUPON_WITH_EXPRESS_CHECKOUT=28]="TRY_ALL_COUPON_WITH_EXPRESS_CHECKOUT",t[t.EXPRESS_CHECKOUT=29]="EXPRESS_CHECKOUT",t[t.NAVIGATE_TO_RECOMMENDATION_OFFER=30]="NAVIGATE_TO_RECOMMENDATION_OFFER",t[t.CLIP_COUPON=31]="CLIP_COUPON",t[t.ACTIVATE_CASHBACK_NEW=32]="ACTIVATE_CASHBACK_NEW",t[t.ACTIVATE_REWARDS_NEW=33]="ACTIVATE_REWARDS_NEW",t[t.ADD_TO_CART_FROM_OTHER_SELLER=34]="ADD_TO_CART_FROM_OTHER_SELLER",t[t.PRODUCT_HISTORY_NAVIGATION=35]="PRODUCT_HISTORY_NAVIGATION",t[t.PRODUCT_HISTORY_EXPAND_SECTION=36]="PRODUCT_HISTORY_EXPAND_SECTION",t[t.PRODUCT_HISTORY_COLLAPSE_SECTION=37]="PRODUCT_HISTORY_COLLAPSE_SECTION",t[t.NAVIGATE_TO_OTHER_SELLER=38]="NAVIGATE_TO_OTHER_SELLER",t[t.TIPS_CLICK=39]="TIPS_CLICK",t[t.REWARDS_SIGNIN_CLICK=40]="REWARDS_SIGNIN_CLICK",t[t.REWARDS_REDEEM_CLICK=41]="REWARDS_REDEEM_CLICK",t[t.CASHBACK_OTHERSITES_CLICK=42]="CASHBACK_OTHERSITES_CLICK",t[t.WALLET_HUB_NAVIGATION=43]="WALLET_HUB_NAVIGATION",t[t.PAYMENT_OPTIONS_EXPAND_SECTION=44]="PAYMENT_OPTIONS_EXPAND_SECTION",t[t.PAYMENT_OPTIONS_COLLAPSE_SECTION=45]="PAYMENT_OPTIONS_COLLAPSE_SECTION",t[t.CASHBACK_RETAILER_CLICK=59]="CASHBACK_RETAILER_CLICK",t[t.ACTIVATE_CASHBACK_RETURNED=60]="ACTIVATE_CASHBACK_RETURNED",t[t.PRINT_COUPONS_CLICK=61]="PRINT_COUPONS_CLICK",t[t.SELECT_PRINTABLE_COUPON=62]="SELECT_PRINTABLE_COUPON",t[t.CLICK_SEEALL_PRINTABLE_COUPON=63]="CLICK_SEEALL_PRINTABLE_COUPON",t[t.DIGITAL_GROCERY_COUPONS_CLICK=64]="DIGITAL_GROCERY_COUPONS_CLICK",t[t.DIGITAL_GROCERY_COUPONS_SEEALL=65]="DIGITAL_GROCERY_COUPONS_SEEALL",t[t.PINTEREST_COUPON_COPIED=66]="PINTEREST_COUPON_COPIED",t[t.PINTEREST_CASHBACK_ACTIVATED=67]="PINTEREST_CASHBACK_ACTIVATED",t[t.PINTEREST_VIEW_PRICE_HISTORY=68]="PINTEREST_VIEW_PRICE_HISTORY",t[t.PACKAGE_TRACKING_EXPAND_SECTION=69]="PACKAGE_TRACKING_EXPAND_SECTION",t[t.PACKAGE_TRACKING_COLLAPSE_SECTION=70]="PACKAGE_TRACKING_COLLAPSE_SECTION",t[t.PACKAGE_TRACKING_TRACK_ORDER_OPT_IN=71]="PACKAGE_TRACKING_TRACK_ORDER_OPT_IN",t[t.PACKAGE_TRACKING_TRACK_ORDER_DO_NOT_TRACK=72]="PACKAGE_TRACKING_TRACK_ORDER_DO_NOT_TRACK",t[t.PACKAGE_TRACKING_CARD_CLICKED=73]="PACKAGE_TRACKING_CARD_CLICKED",t[t.PACKAGE_TRACKING_SEE_MORE=74]="PACKAGE_TRACKING_SEE_MORE",t[t.CLICK_PCB_CROSS_SESSION=75]="CLICK_PCB_CROSS_SESSION",t[t.REWARD_JOIN_NOW=76]="REWARD_JOIN_NOW",t[t.REWARD_MAYBE_LATER=77]="REWARD_MAYBE_LATER",t[t.REWARD_DISMISS=78]="REWARD_DISMISS",t[t.REWARD_LINK_CLICK=79]="REWARD_LINK_CLICK",t[t.ATTAINABLE_COUPON_CONTINUE=80]="ATTAINABLE_COUPON_CONTINUE",t[t.ATTAINABLE_COUPON_CLICK=81]="ATTAINABLE_COUPON_CLICK",t[t.ATTAINABLE_COUPON_VIEWED=82]="ATTAINABLE_COUPON_VIEWED"}(Ur||(Ur={})),function(t){t[t.CARD_VIEWED=0]="CARD_VIEWED",t[t.CARD_CLICKED=1]="CARD_CLICKED",t[t.CARD_DELETED=2]="CARD_DELETED"}(Vr||(Vr={})),function(t){t.COUPONS_AVAILABLE="COUPONS_AVAILABLE",t.COUPONS_AUTO_APPLY="COUPONS_AUTO_APPLY",t.COUPONS_CLIPPING="COUPONS_CLIPPING",t.PRICE_COMPARE_LOWER_PRICES="PRICE_COMPARE_LOWER_PRICES",t.PRICE_COMPARE_BEST_PRICE="PRICE_COMPARE_BEST_PRICE",t.REBATES_ACTIVATE_CASHBACK="REBATES_ACTIVATE_CASHBACK",t.REBATES_BING_CONFIRMATION="REBATES_BING_CONFIRMATION",t.PRICE_HISTORY_DROP="PRICE_HISTORY_DROP",t.PRICE_HISTORY_STABLE="PRICE_HISTORY_STABLE",t.PRICE_HISTORY_INCREASE="PRICE_HISTORY_INCREASE",t.DEALS="DEALS",t.PROFESSIONAL_REVIEWS="PROFESSIONAL_REVIEWS",t.VIDEO_REVIEWS="VIDEO_REVIEWS",t.RECOMMENDATIONS="RECOMMENDATIONS",t.ACTIVATE_CASHBACK_NEW="ACTIVATE_CASHBACK_NEW",t.EXPRESS_CHECKOUT="EXPRESS_CHECKOUT",t.ACTIVATE_REWARDS_NEW="ACTIVATE_REWARDS_NEW",t.OTHER_SELLER="OTHER_SELLER",t.PRODUCT_HISTORY="PRODUCT_HISTORY",t.PAYMENT_OPTIONS="PAYMENT_OPTIONS",t.TIPS="TIPS",t.PACKAGE_TRACKING_OPT_IN="PACKAGE_TRACKING_OPT_IN",t.PACKAGE_TRACKING_STATUS_VIEW="PACKAGE_TRACKING_STATUS_VIEW",t.CASHBACK_RETAILER="CASHBACK_RETAILER",t.GROCERY_PRINT_COUPONS="GROCERY_PRINT_COUPONS",t.GROCERY_DIGITAL_COUPONS="GROCERY_DIGITAL_COUPONS",t.PWILO_NOTIFICATION_PRICE_DROP="PWILO_NOTIFICATION_PRICE_DROP",t.SUSTAINABILITY_LANDING_FULL="SUSTAINABILITY_LANDING_FULL",t.SUSTAINABILITY_LANDING_FOOTER="SUSTAINABILITY_LANDING_FOOTER",t.SUSTAINABILITY_PURCHASE_CONFIRMATION="SUSTAINABILITY_PURCHASE_CONFIRMATION",t.ATTAINABLE_COUPONS="ATTAINABLE_COUPONS"}($r||($r={})),function(t){t[t.COUPONS_AVAILABLE=0]="COUPONS_AVAILABLE",t[t.COUPONS_AUTO_APPLY=1]="COUPONS_AUTO_APPLY",t[t.COUPONS_CLIPPING=2]="COUPONS_CLIPPING",t[t.PRICE_COMPARE_LOWER_PRICES=3]="PRICE_COMPARE_LOWER_PRICES",t[t.PRICE_COMPARE_BEST_PRICE=4]="PRICE_COMPARE_BEST_PRICE",t[t.PRICE_COMPARE_SHOW_MORE_SELLERS=5]="PRICE_COMPARE_SHOW_MORE_SELLERS",t[t.REBATES_ACTIVATE_CASHBACK=6]="REBATES_ACTIVATE_CASHBACK",t[t.REBATES_BING_CONFIRMATION=7]="REBATES_BING_CONFIRMATION",t[t.PRICE_HISTORY_DROP=8]="PRICE_HISTORY_DROP",t[t.PRICE_HISTORY_STABLE=9]="PRICE_HISTORY_STABLE",t[t.PRICE_HISTORY_INCREASE=10]="PRICE_HISTORY_INCREASE",t[t.DEALS=11]="DEALS",t[t.PROFESSIONAL_REVIEWS=12]="PROFESSIONAL_REVIEWS",t[t.VIDEO_REVIEWS=13]="VIDEO_REVIEWS",t[t.RECOMMENDATIONS=14]="RECOMMENDATIONS",t[t.ACTIVATE_CASHBACK_NEW=15]="ACTIVATE_CASHBACK_NEW",t[t.EXPRESS_CHECKOUT=16]="EXPRESS_CHECKOUT",t[t.ACTIVATE_REWARDS_NEW=17]="ACTIVATE_REWARDS_NEW",t[t.OTHER_SELLER=18]="OTHER_SELLER",t[t.PRODUCT_HISTORY=19]="PRODUCT_HISTORY",t[t.TIPS=20]="TIPS",t[t.PAYMENT_OPTIONS=21]="PAYMENT_OPTIONS",t[t.PWILO_NOTIFICATION_PRICE_DROP=22]="PWILO_NOTIFICATION_PRICE_DROP",t[t.YOUTUBE_COUPONS_HOME=23]="YOUTUBE_COUPONS_HOME",t[t.YOUTUBE_COUPONS_VIDEO=24]="YOUTUBE_COUPONS_VIDEO",t[t.YOUTUBE_COUPONS_RETAILER=25]="YOUTUBE_COUPONS_RETAILER",t[t.YOUTUBE_COUPONS_RETAILER_CHECKOUT=26]="YOUTUBE_COUPONS_RETAILER_CHECKOUT",t[t.YOUTUBE_COUPONS_AUTO_APPLY=27]="YOUTUBE_COUPONS_AUTO_APPLY",t[t.CASHBACK_RETAILER=28]="CASHBACK_RETAILER",t[t.GROCERY_PRINT_COUPONS=29]="GROCERY_PRINT_COUPONS",t[t.GROCERY_DIGITAL_COUPONS=30]="GROCERY_DIGITAL_COUPONS",t[t.PINTEREST_COUPONS_AVAILABLE=31]="PINTEREST_COUPONS_AVAILABLE",t[t.PINTEREST_REBATES_ACTIVATE_CASHBACK=32]="PINTEREST_REBATES_ACTIVATE_CASHBACK",t[t.PINTEREST_PRICE_HISTORY_DROP=33]="PINTEREST_PRICE_HISTORY_DROP",t[t.PINTEREST_PRICE_HISTORY_STABLE=34]="PINTEREST_PRICE_HISTORY_STABLE",t[t.PINTEREST_PRICE_HISTORY_INCREASE=35]="PINTEREST_PRICE_HISTORY_INCREASE",t[t.PACKAGE_TRACKING_OPT_IN=36]="PACKAGE_TRACKING_OPT_IN",t[t.PACKAGE_TRACKING_STATUS_VIEW=37]="PACKAGE_TRACKING_STATUS_VIEW",t[t.ATTAINABLE_COUPONS=38]="ATTAINABLE_COUPONS"}(Gr||(Gr={}));var Yr='button:enabled:not([slot="header-actions"]), textarea, input[type="text"], input[type="password"], div[role="slider"],\n      input[type="radio"]:checked, input[type="checkbox"]:enabled, a[href]:not([slot="header-actions"]):not(#infoIcon),\n      select:not([style*="display: none"]), details, msft-shopping-coupon, msft-shopping-link, msft-product-card,\n      fluent-button:not([slot="header-actions"]), fluent-anchor:not([class="aHeaderContent"]), msft-shopping-recommendation,\n      fluent-accordion, fluent-option, fluent-listbox, div.tipsDiv, msft-shopping-cashback-card, msft-shopping-coupon-new,\n      div#divHomeNotification, msft-shopping-coupon-printable, div#divExclusiveCouponsNotification, msft-micro-feedback-item',qr=function(){function t(){var e=this;s(this,t),f(this,"container",void 0),f(this,"currentFocusElement",void 0),f(this,"isEdgeDriver",!1),f(this,"initialize",(function(t,i){e.container=t,e.isEdgeDriver=i,e.container.addEventListener("keydown",e.trapFocus)})),f(this,"removeListeners",(function(){e.container.removeEventListener("keydown",e.trapFocus)})),f(this,"trapFocus",(function(t){if("Tab"===t.key&&!t.ctrlKey&&e.container){var i=Array.prototype.slice.call(e.container.querySelectorAll('fluent-button[slot="header-actions"], a[slot="header-actions"], a#infoIcon, button[slot="header-actions"], #divPinterestSubTitle[slot="header-content"] fluent-anchor, div#divExclusiveCouponsNotification')),n=Array.prototype.slice.call(e.container.querySelectorAll(Yr));if(i.push.apply(i,n),e.isEdgeDriver&&(i=i.filter((function(t){return"fluent-accordion"!==t.nodeName&&t.offsetHeight>0}))),i&&i.length>0){var o,a=i[0],r=i[i.length-1],s=Kr(i);try{for(s.s();!(o=s.n()).done;){var l=o.value;l.classList.contains("checkoutButton")&&(r=l)}}catch(t){s.e(t)}finally{s.f()}var c=document.activeElement;if(c){if("divOverlayWrapper"===c.id){var u=c.shadowRoot;u&&(c=u.activeElement)}if(c===a&&t.shiftKey){var d,h,p,f,g=null===(d=r)||void 0===d||null===(h=d.parentElement)||void 0===h?void 0:h.shadowRoot;if("previousCashBackSection"===(null===(p=r.parentElement)||void 0===p?void 0:p.id)){var m,v,y=null===(m=r.parentElement)||void 0===m||null===(v=m.parentElement)||void 0===v?void 0:v.shadowRoot;if(y){var C=y.querySelector("fluent-accordion-item");if(C&&!C.classList.contains("expanded")){var b,S=null===(b=C.shadowRoot)||void 0===b?void 0:b.querySelector("button");S&&(S.focus(),g=null)}}}if(g){var x=g.querySelector("fluent-accordion-item");if(x&&!x.classList.contains("expanded")){var E,A=null===(E=x.shadowRoot)||void 0===E?void 0:E.querySelector("button");A&&A.focus()}else r.focus()}else"previousCashBackSection"!==(null===(f=r.parentElement)||void 0===f?void 0:f.id)&&r.focus();t.preventDefault()}else c!==r||t.shiftKey||(a.focus(),t.preventDefault())}}}}))}return r(t,[{key:"makeFocusOnActiveElement",value:function(t){var e=this;if(this.currentFocusElement!==document.activeElement){var i=t.querySelectorAll(Yr);0!==i.length&&(i.forEach((function(t){document.activeElement!==t||(e.currentFocusElement=t)})),this.currentFocusElement&&this.currentFocusElement.focus())}}}],[{key:"getInstance",value:function(){return null===t.currentInstance&&(t.currentInstance=new t),t.currentInstance}}]),t}();f(qr,"currentInstance",null);var Xr,Zr,Jr=qr;!function(t){t.onCashbackActivationError="onCashbackActivationError",t.onCashBackActivated="onCashBackActivated",t.onCashBackActivatedForRewards="onCashBackActivatedForRewards",t.telemetryCashBackActivationError="telemetryCashBackActivationError",t.telemetryCashBackActivated="telemetryCashBackActivated",t.StyleActivatedState="StyleActivatedState",t.StyleProcessingState="StyleProcessingState",t.CreateCommissionArrow="CreateCommissionArrow",t.CreateModules="CreateModules",t.CreateInlineRating="CreateInlineRating",t.ModulesRendered="ModulesRendered",t.PWILOPriceHistory="PWILOPriceHistory",t.onRebatesTelemetrySuccess="onRebatesTelemetrySuccess",t.onRebatesTelemetryFail="onRebatesTelemetryFail",t.onRewardsTelemetrySuccess="onRewardsTelemetrySuccess",t.onRewardsTelemetryFail="onRewardsTelemetryFail",t.onMicroNotificationClick="onMicroNotificationClick",t.onNotificationClick="onNotificationClick",t.onFlyoutResize="onFlyoutResize",t.CreateAutoApplyButton="CreateAutoApplyButton",t.pcCreateHeader="pcCreateHeader",t.rebatesSignInPendingSuccess="rebatesSignInPendingSuccess",t.rebatesSignInFail="rebatesSignInFail",t.CreateCouponHeader="CreateCouponHeader",t.PDPUpdate="PDPUpdate",t.CreatePHHeader="CreatePHHEader",t.onDataUpdate="onDataUpdate",t.domainEligibility="domainEligibility",t.pdpEligibility="pdpEligibility",t.flyoutRefresh="flyoutRefresh",t.CreateTrivia="CreateTrivia"}(Xr||(Xr={})),function(t){t.isAutoApplyVisible="isAutoApplyVisible",t.canRenderCashback="canRenderCashback",t.topModuleName="topModuleName",t.topModulePriority="topModulePriority",t.renderedViewModuleCount="renderedViewModuleCount",t.microNotificationClicked="microNotificationClicked",t.modulesRendered="modulesRendered",t.isProductDetailPage="isProductDetailPage",t.pcLowestPriceImpression="pcLowestPriceImpression",t.canRenderAutoApply="canRenderAutoApply"}(Zr||(Zr={}));var Qr=function(){function t(e,i){s(this,t),f(this,"logModule",void 0),f(this,"shopping",void 0),this.logModule=e,this.shopping=i,this.cleanStateMapping()}return r(t,[{key:"getState",value:function(e){return t.stateMapping.get(e)}},{key:"setState",value:function(e,i){t.stateMapping.set(e,i)}},{key:"addEventListener",value:function(t,e){try{this.shopping.addEventListener(t,e)}catch(e){var i=Fr.EdgeImpressionId,n=new L(A.OnErrorInvoked);this.logModule.LogErrorEvent(S.EdgeFlyoutStatus,"addEventListener exception: ".concat(t," ").concat(e),n,i)}}},{key:"dispatchEvent",value:function(t){try{this.shopping.dispatchEvent(t)}catch(n){var e=Fr.EdgeImpressionId,i=new L(A.OnErrorInvoked);this.logModule.LogErrorEvent(S.EdgeFlyoutStatus,"dispatchEvent exception: ".concat(null==t?void 0:t.type," ").concat(n),i,e)}}},{key:"cleanStateMapping",value:function(){t.stateMapping=new Map}}]),t}();f(Qr,"stateMapping",new Map);var ts=Qr;function es(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return is(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return is(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function is(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var ns=new Map;ns.set("en-us","$"),ns.set("en-gb","£"),ns.set("en-in","₹"),ns.set("en-ca","CA$"),ns.set("en-au","AU$"),ns.set("fr-fr","€"),ns.set("it-it","€"),ns.set("es-es","€"),ns.set("de-de","€"),ns.set("ja-jp","¥");var os=function(){function t(e,i,n,o){s(this,t),f(this,"commonAssets",void 0),f(this,"flyoutData",void 0),f(this,"pageHandlerModule",void 0),f(this,"logModule",void 0),this.flyoutData=e,this.pageHandlerModule=i,this.logModule=n,this.commonAssets=o}var i;return r(t,[{key:"isAndroidBridgeAvailable",value:function(){return!!window.couponsUIWebViewBridge}},{key:"isIOSBridgeAvailable",value:function(){var t=window;return!!t.webkit&&!!t.webkit.messageHandlers}},{key:"createBaseActionButton",value:function(){var t=this.createElement("fluent-button");return t.appearance="accent",t.style.fontSize="16px",t.style.borderRadius="8px",t.className+=" actionsButtonRefresh",t}},{key:"isPinterest",value:function(){var t,e;return null!==(t=void 0!==(null===(e=this.flyoutData.dataStoreModule.PinterestData)||void 0===e?void 0:e.productLink)&&void 0!==this.flyoutData.common.lastCommittedURL&&null!==this.flyoutData.common.lastCommittedURL&&this.flyoutData.common.lastCommittedURL.includes("pinterest.com/pin"))&&void 0!==t&&t}},{key:"styleModulesHeader",value:function(t,e,i,n,o){var a=this,r=null;if(t&&(r=t.querySelector("fluent-accordion-item")),r&&t){if(0===e&&i.expanded){var s=!1,l=this.flyoutData.dataStoreModule.CashBackData;Fe.queueUpdate((function(){var e=t.querySelector("[slot=heading]");if(e&&n!==yt.PRODUCTHISTORY&&(n!==yt.COUPON||!o||null!=l&&l.isCashBackActivated)){var c;e.id="hiddenHeader";var u=null===(c=r)||void 0===c?void 0:c.shadowRoot;if(u){var d=u.querySelector(".heading");d&&(d.style.display="none")}s=!0;var h=e.parentElement;h&&h.setAttribute("aria-labelledby","hiddenHeader"),r&&(r.style.marginTop="10px")}s||(i.accordion=!1,Fe.queueUpdate((function(){var t,e=null===(t=i.shadowRoot)||void 0===t?void 0:t.querySelector(".heading");e&&(e.setAttribute("aria-level","3"),e.style.paddingLeft="12px",e.style.marginLeft="0px",a.flyoutData.common.isPane&&(e.style.fontSize="16px",e.style.lineHeight="24px",e.style.fontWeight="500"))})))}))}if(r.setAttribute("heading-level","3"),this.flyoutData.common.isPane){var c;r.style.fontSize="16px",r.style.lineHeight="24px",r.style.fontWeight="500";var u=null===(c=r)||void 0===c?void 0:c.shadowRoot;if(u){var d=u.querySelector(".heading");d&&(d.style.height="56px",d.style.alignContent="center")}}}}},{key:"hasSocialSelectors",value:function(){var t,e=null===(t=this.flyoutData.dataStoreModule.ApiData)||void 0===t?void 0:t.retailerData;return!!(e&&e.allCheckoutPages&&e.allCheckoutPages.length>0&&e.allCheckoutPages[0].socialSelectors)}},{key:"styleAnchorsRefresh",value:function(){var t=this,e=this.flyoutData.common.shopping.querySelectorAll("fluent-anchor");e&&e.length>0&&e.forEach((function(e){var i,n=null===(i=e.shadowRoot)||void 0===i?void 0:i.querySelector(".content");if(n){var o=t.flyoutData.common.currentTheme===lt.Dark?"linear-gradient(92.78deg, #71FFDD -58.01%, #71FFDD -58.01%, #9CBEFF 44.73%, #D3A6FF 141.23%)":"linear-gradient(92.78deg, #00D4A1 -58.01%, #0048D4 44.73%, #6A00D4 141.23%)";n.setAttribute("style","\n                    background: ".concat(o,";\n                    -webkit-background-clip: text;\n                    -webkit-text-fill-color: transparent;\n                    font-weight: 700;"))}}))}},{key:"createPDPLoadingStateUX",value:function(t,e,i){t.id=i,t.accordion=!0,t.expanded=!0;var n=this.createElement("DIV",{style:'\n                display: grid;\n                grid-template-areas:\n                    "img img title title title title"\n                    "img img subTitle subTitle subTitle subTitle"\n                    "content1 content1 content1 content1 content1 content1"\n                    "content2 content2 content2 content2 content2 content2"\n                    "content3 content3 content3 content3 content3 content3";\n                grid-gap: 20px;\n                padding: 0px 2px;\n            '});n.id=e;var o=this.createElement("DIV",{style:"\n                grid-area: img;\n                border-radius: 4px;\n                background-color: #F1F1F1;\n                height: 100px;\n            "}),a=this.createElement("DIV",{style:"\n                grid-area: title;\n                border-radius: 4px;\n                background-color: #F1F1F1;\n                height: 20px;\n                margin-top: 20px;\n                margin-right: 50px;\n            "}),r=this.createElement("DIV",{style:"\n                grid-area: subTitle;\n                border-radius: 4px;\n                background-color: #F1F1F1;\n                height: 20px;\n                margin-bottom: 20px;\n                margin-right: 50px;\n            "}),s=this.createElement("DIV",{style:"\n                grid-area: content1;\n                border-radius: 4px;\n                background-color: #F1F1F1;\n                height: 30px;\n            "}),l=this.createElement("DIV",{style:"\n                grid-area: content2;\n                border-radius: 4px;\n                background-color: #F1F1F1;\n                height: 30px;\n            "}),c=this.createElement("DIV",{style:"\n                grid-area: content3;\n                border-radius: 4px;\n                background-color: #F1F1F1;\n                height: 30px;\n            "});n.appendChild(o),n.appendChild(a),n.appendChild(r),n.appendChild(s),n.appendChild(l),n.appendChild(c),t.appendChild(n)}},{key:"styleElementsUXRefresh",value:function(t){var e,i=null===(e=t.element.shadowRoot)||void 0===e?void 0:e.querySelector("fluent-accordion-item");if(i){var n,o,a=null===(n=i.shadowRoot)||void 0===n?void 0:n.querySelector(".button");a&&(a.style.paddingLeft="12px");var r=null===(o=i.shadowRoot)||void 0===o?void 0:o.querySelector(".icon");r&&(r.style.paddingRight="12px")}this.styleAnchorsRefresh()}},{key:"sendCTRLog",value:function(t,e,i,n,o){if("MSFT-EDGE-SHOPPING-SECTION"===t.element.nodeName)if(!t.element.hasAttribute("accordion")||t.element.hasAttribute("expanded")||0===e)this.recordContentViewed(t.name,i,o,0===e,!1);else{t.element.addEventListener("click",(function e(){if(t.element&&!t.element.hasAttribute("expanded")){var n=s(t.name,i,o,!0),c=l(t.name);if(n){a.RecordAsContentViewed(n);var u=new L(A.ModuleViewed,void 0,void 0,void 0,c);r.LogInfoEvent(S.EdgeFlyoutStatus,"".concat(n," expanded"),u,o)}t.element&&t.element.removeEventListener("click",e)}}));var a=this.pageHandlerModule,r=this.logModule,s=this.setContentViewed.bind(this),l=this.getViewedContent.bind(this)}else this.recordContentViewed(t.name,i,o,0===e,!1);if(this.isPinterest()){var c=new L(A.ShownOnPinterest);this.logModule.LogInfoEvent(S.EdgeFlyoutStatus,"Module on top ".concat(n),c)}}},{key:"handleFlyoutFocus",value:function(t,e){if(this.flyoutData.common.currentDevice===st.Desktop&&(this.flyoutData.common.openedWith===dt.Keyboard||this.flyoutData.common.openedWith===dt.Auto||this.flyoutData.common.isPane)){var i=e.querySelectorAll("[slot=actions]");if(i&&i.length>0)if("DIV"===i[0].nodeName){var n=i[0].querySelectorAll(Yr);n&&n.length>0&&n[0].focus()}else i[0].focus();else if(t&&t.length>0){var o,a=es(t);try{for(a.s();!(o=a.n()).done;){var r=o.value.element.querySelectorAll(Yr);if(r&&r.length>0){r[0].focus();break}}}catch(t){a.e(t)}finally{a.f()}}}}},{key:"addCommonStyles",value:function(t){var e,i=document.querySelector("fluent-design-system-provider");i&&(this.flyoutData.common.currentTheme===lt.Dark?(Ta.setValueFor(document.body,Bn.create(.29,.29,.29)),Oo.setValueFor(i,Jn.DarkMode),Oo.setValueFor(document.body,Jn.DarkMode)):(Ta.setValueFor(document.body,Bn.create(1,1,1)),Oo.setValueFor(i,Jn.LightMode),Oo.setValueFor(document.body,Jn.LightMode)),i.setAttribute("fill-color","var(--fill-color)"),this.flyoutData.common.currentDirection===ut.RTL?i.style.direction="rtl":i.style.direction="ltr",null!==(e=this.flyoutData.strings)&&void 0!==e&&e.commonFixedTitle?i.setAttribute("aria-label",this.flyoutData.strings.commonFixedTitle):i.setAttribute("aria-label","Shopping in Microsoft Edge"));var n=document.querySelector("#divContentWrapper");n&&(this.applyStyles(n,t.getStyles()),this.flyoutData.experimentData.isExperimentActive(fe.showPaymentOptions)&&n.classList.add("ms-edge-shopping-650"),this.applyStyles(n,t.getStylesRefresh()))}},{key:"createElement",value:function(t,e,i){var n=document.createElement(t);if(e)for(var o in e)e.hasOwnProperty(o)&&n.setAttribute(o,e[o]);return i&&(n.innerText=i),n}},{key:"createCommonListStructure",value:function(t,e,i,n,o,a,r){var s=this;this.flyoutData.common.currentDevice===st.Desktop?t.accordion=!0:t.accordion=!1,t.title=e,t.expanded=!1;var l=o(i);if(i&&i.length>l){var c,u=document.createElement("fluent-button");if(u.slot="action",u.className+="action btnSeeMore",u.appearance="lightweight",i.length-l>20?u.textContent=this.replaceValueInKey("sectionSeeMore",this.flyoutData.strings.sectionSeeMore,"".concat(20,"+")):u.textContent=this.replaceValueInKey("sectionSeeMore",this.flyoutData.strings.sectionSeeMore,(i.length-l).toString()),this.flyoutData.common.currentTheme===lt.Dark?u.style.color="#FFFFFF":u.style.color="#666666",n===yt.COUPON||n===yt.RECOMMENDATIONS||n===yt.GROCERY_COUPON||n===yt.PRINTABLE_COUPON||n===yt.EXCLUSIVECOUPONS||n===yt.CASHBACK||this.flyoutData.common.isPane)t.appendChild(u);else{var d=this.flyoutData.common.currentTheme===lt.Dark?"linear-gradient(265.08deg, rgba(36, 255, 0, 0.06) -6.71%, rgba(0, 210, 255, 0.06) 38.87%, rgba(255, 188, 125, 0.06) 93.88%)":"linear-gradient(90deg, #FFFBF2 0%, #EEFCFF 53.12%, #F5F9FF 100%)";(c=this.createElement("DIV",{style:"\n                    background: ".concat(d,";\n                    height: 40px;\n                    padding-left: 12px;\n                    cursor: pointer;\n                    display: flex;\n                    align-items: center;\n                    border-top: 1px solid rgb(236, 236, 236);\n                ")})).className="divSeeMore",c.appendChild(u),t.appendChild(c),c&&c.addEventListener("click",(function(e){s.seeMoreClickHandler(e,t,a,c,i,r)}))}u&&u.addEventListener("click",(function(e){c||s.seeMoreClickHandler(e,t,a,u,i,r)}))}else t.style.marginBottom="10px"}},{key:"populateSingleChildHtml",value:function(t,e,i){t.innerHTML=window.trustedTypes.emptyHTML;var n=e.split(/\$\d/);if(n.length>0&&(n[0]=this.replaceStringsPlaceholders(n[0]),t.textContent=n[0],t.appendChild(i)),n.length>1&&n[1]){n[1]=this.replaceStringsPlaceholders(n[1]);var o=document.createTextNode(n[1]);t.appendChild(o)}}},{key:"populateMultipleChildrenHTML",value:function(t,e){t.innerHTML=window.trustedTypes.emptyHTML;for(var i=e.split(/\$\d/),n=i.length,o=arguments.length,a=new Array(o>2?o-2:0),r=2;r<o;r++)a[r-2]=arguments[r];for(var s=0;s<n;s++){if(i[s]=this.replaceStringsPlaceholders(i[s]),0===s)t.textContent=i[s];else{var l=document.createTextNode(i[s]);t.appendChild(l)}s!==n-1&&t.appendChild(a[s])}}},{key:"replaceElementInKey",value:function(t,e,i){var n=e.split("*br*");if(n&&n.length>1){if(n[0].includes("$"))this.populateSingleChildHtml(t,n[0],i);else{var o=this.createElement("P",{style:"margin: 0px; display: inline-block"},n[0]);t.appendChild(o)}var a=this.createElement("BR");if(t.appendChild(a),n[1].includes("$")){var r=this.createElement("DIV");this.populateSingleChildHtml(r,n[1],i),t.appendChild(r)}else{var s=this.createElement("P",{style:"margin: 0px; display: inline-block"},n[1]);t.appendChild(s)}}else this.populateSingleChildHtml(t,e,i)}},{key:"replaceValueInKey",value:function(t,e){for(var i=arguments.length,n=new Array(i>2?i-2:0),o=2;o<i;o++)n[o-2]=arguments[o];var a="",r=Array.prototype.slice.call(arguments);return r=r.slice(1),e?a=e=e.replace(/\$(.|$|\n)/g,(function(t){return void 0!==r[t[1]]?"$$"===t?"$":r[t[1]]:"$2"})):a}},{key:"addFavIconSrc",value:function(t,e,i){var n=this.getFavIconSrc(i),o=!0;t.style.maxWidth="16px",t.slot="icon",t.addEventListener("error",(function(){o=!1,t.remove()})),n?t.src=n:o=!1,o&&e.appendChild(t)}},{key:"replaceStringsPlaceholders",value:function(t,e){e||(e="en-us");var i=ns.get(e);return i||(i="$"),t.replace(ht.currency,i)}},{key:"getCurrency",value:function(t){var e=ns.get(t);return e||""}},{key:"trapFlyoutFocusMac",value:function(){this.flyoutData.common.isPane||Jr.getInstance().initialize(this.flyoutData.common.shopping,!1)}},{key:"applyStyles",value:function(t,e){if(t){var i=this.createElement("STYLE");i.textContent=e,i.type="text/css",i.rel="stylesheet",t.appendChild(i)}}},{key:"addSectionSeparator",value:function(t){var e=this.createElement("HR",{class:"sectionSeparator"});e.setAttribute("aria-hidden","true"),t.appendChild(e)}},{key:"createCookieConsent",value:function(){var t=this,e=this.createElement("DIV",{class:"divCookies",style:"margin: 10px 10px 12px; text-align: left;line-height: 16px; font-size: 12px;"}),i=this.createElement("P",{class:"txtSmall"});if(i.style.display="inline",i.style.fontSize="12px",i.textContent=this.replaceValueInKey("privacyConsent",this.flyoutData.strings.privacyConsent,""),this.flyoutData.dataLoader.IsServerData()){i.textContent=this.replaceValueInKey("privacyConsent",this.flyoutData.strings.privacyConsent,"");var n=document.createElement("fluent-anchor");n.id="thirdPartyConsent",n.setAttribute("href","#"),n.className+=" txtSmall",n.style.fontSize="12px",n.textContent=this.flyoutData.strings.thirdPartCookiesText,n.setAttribute("appearance","hypertext"),n.style.display="inline",this.populateSingleChildHtml(i,this.flyoutData.strings.privacyConsentNew,n),this.flyoutData.dataLoader.IsServerData()&&n&&n.addEventListener("click",(function(){t.pageHandlerModule.NavigateToPrivacyStatement()}))}var o=document.createElement("fluent-anchor");o.id="aPrivacy",o.setAttribute("href","#"),o.className+=" txtSmall",o.style.fontSize="12px",o.textContent=this.flyoutData.strings.commonMicrosoftPolicy,o.setAttribute("appearance","hypertext"),o.style.display="inline";var a=this.createElement("P");return a.style.display="inline",a.style.fontSize="12px",a.textContent=".",i.appendChild(o),i.appendChild(a),e.appendChild(i),o&&o.addEventListener("click",(function(){t.pageHandlerModule.NavigateToPrivacyStatement()})),e}},{key:"styleModules",value:function(t,e,i){var n=t.element.shadowRoot,o=t.name;if(n){this.styleModulesHeader(n,e,t.element,o,i);var a=n.querySelector(".action");a&&(a.style.marginInlineStart="0px",a.style.height="auto")}}},{key:"AutoDismissCashback",value:(i=e(o().mark((function t(e){var i,n,a,r,s,l,c,u,d,h,p;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.flyoutData.common.popupOrigination!==he.AUTO_SHOW_REBATES_ORGANIC&&this.flyoutData.common.popupOrigination!==he.AUTO_SHOW_REBATES_CHECKOUT){t.next=31;break}if(t.prev=1,!(a=this.flyoutData.dataLoader.GetLoadTimeDataValue("storage",void 0))){t.next=8;break}s={value:{stringValue:a.CashbackLastEngagement}},r=s,t.next=11;break;case 8:return t.next=10,this.pageHandlerModule.GetStorageValue("CashbackLastEngagement");case 10:r=t.sent;case 11:l=r,c=Date.parse((new Date).toString()),u={count:0,time:0},d={},d=JSON.parse(null!==(i=null==l||null===(n=l.value)||void 0===n?void 0:n.stringValue)&&void 0!==i?i:"{}"),(u=d[this.flyoutData.common.domain])||(u={count:0,time:0}),u.count++,c-u.time<18e5?u.count>2&&this.flyoutData.common.openedWith===dt.Auto&&this.pageHandlerModule.DismissPopup():(u.time=c,u.count=1),d[this.flyoutData.common.domain]=u,(h=new Ir).stringValue=JSON.stringify(d),this.pageHandlerModule.SetStorageValue("CashbackLastEngagement",h),t.next=31;break;case 26:t.prev=26,t.t0=t.catch(1),p=new L(A.OnErrorInvoked),e.setData(Fr.Client,M.Edge),e.LogErrorEvent(S.EdgeFlyoutStatus,"Cashback autodismiss "+(null===t.t0||void 0===t.t0?void 0:t.t0.message),p);case 31:case"end":return t.stop()}}),t,this,[[1,26]])}))),function(t){return i.apply(this,arguments)})},{key:"toFixedSafe",value:function(t,e){return t&&t.toFixed?t.toFixed(e):""}},{key:"formatPrice",value:function(t){try{return(t%1!=0?new Intl.NumberFormat(this.flyoutData.common.pageLocale,{minimumFractionDigits:2}).format(t):new Intl.NumberFormat(this.flyoutData.common.pageLocale).format(t))||t.toFixed(2)}catch(e){return t.toFixed(2)}}},{key:"appendNewModuleToFlyout",value:function(t){var e=this.flyoutData.common.shopping.querySelectorAll("msft-edge-shopping-section"),i=!1;if(e&&e.length>0)try{if(1===e.length){var n=this.createElement("HR",{class:"sectionSeparator"});n.setAttribute("aria-hidden","true"),e[0].nextSibling?(this.flyoutData.common.shopping.insertBefore(n,e[0].nextSibling),this.flyoutData.common.shopping.insertBefore(t.element,n.nextSibling),i=!0):(this.addSectionSeparator(this.flyoutData.common.shopping),this.flyoutData.common.shopping.appendChild(t.element),i=!0)}else for(var o=1;o<e.length;o++){var a=e[o];if(null!==a.getAttribute("accordion")){var r,s=this.createElement("HR",{class:"sectionSeparator"});s.setAttribute("aria-hidden","true"),"HR"===(null===(r=a.previousSibling)||void 0===r?void 0:r.nodeName)?(this.flyoutData.common.shopping.insertBefore(s,a.previousSibling),this.flyoutData.common.shopping.insertBefore(t.element,a.previousSibling)):(this.flyoutData.common.shopping.insertBefore(s,a),this.flyoutData.common.shopping.insertBefore(t.element,a)),i=!0}}}catch(e){this.addSectionSeparator(this.flyoutData.common.shopping),this.flyoutData.common.shopping.appendChild(t.element),i=!0}else{var l=this.flyoutData.common.shopping.querySelector("#feedbackDiv");if(l){var c=this.createElement("HR",{class:"sectionSeparator"});c.setAttribute("aria-hidden","true"),this.flyoutData.common.shopping.insertBefore(c,l),this.flyoutData.common.shopping.insertBefore(t.element,l)}else this.addSectionSeparator(this.flyoutData.common.shopping),this.flyoutData.common.shopping.appendChild(t.element),i=!0}if(!i){var u=this.flyoutData.common.shopping.querySelector("#feedbackDiv");if(u){var d=this.createElement("HR",{class:"sectionSeparator"});d.setAttribute("aria-hidden","true"),this.flyoutData.common.shopping.insertBefore(d,u),this.flyoutData.common.shopping.insertBefore(t.element,u)}else this.addSectionSeparator(this.flyoutData.common.shopping),this.flyoutData.common.shopping.appendChild(t.element)}}},{key:"setContentViewed",value:function(t,e,i,n,o){var a,r,s,l,c,u,d;if(!t)return null;switch(t){case yt.COUPON:return e?$r.COUPONS_AUTO_APPLY:$r.COUPONS_AVAILABLE;case yt.CASHBACK:return null!==(a=this.flyoutData.dataStoreModule.CashBackData)&&void 0!==a&&null!==(r=a.userRebatesResponse)&&void 0!==r&&r.isRebatesUser||!this.flyoutData.common.isRebatesEnabled||!this.flyoutData.experimentData.isExperimentActive(fe.signinRebates)?null===(s=this.flyoutData.dataStoreModule.CashBackData)||void 0===s||null===(l=s.userRebatesResponse)||void 0===l||!l.isRebatesUser||null!==(c=this.flyoutData.dataStoreModule.CashBackData)&&void 0!==c&&c.isCashBackActivated?$r.REBATES_BING_CONFIRMATION:$r.REBATES_ACTIVATE_CASHBACK:$r.ACTIVATE_CASHBACK_NEW;case yt.COUPONCLIPPING:return $r.COUPONS_CLIPPING;case yt.DEALS:return $r.DEALS;case yt.RECOMMENDATIONS:return $r.RECOMMENDATIONS;case yt.SIMILARSELLERS:return $r.OTHER_SELLER;case yt.PRODUCTHISTORY:return $r.PRODUCT_HISTORY;case yt.TIPS:return $r.TIPS;case yt.TRACKING_CONFIRMATION:return $r.PACKAGE_TRACKING_OPT_IN;case yt.ORDERSTATUSTRACKING:return $r.PACKAGE_TRACKING_STATUS_VIEW;case yt.PRICECOMPARISON:return null!==(u=this.flyoutData.dataStoreModule.PriceComparisonData)&&void 0!==u&&u.shouldBeInPolePosition?$r.PRICE_COMPARE_LOWER_PRICES:$r.PRICE_COMPARE_BEST_PRICE;case yt.PRICEHISTORY:var h=null===(d=this.flyoutData.dataStoreModule.PriceHistoryData)||void 0===d?void 0:d.getPriceHistoryType();return h===Rr.PRICEDROP?$r.PRICE_HISTORY_DROP:h===Rr.FAIRPRICE?$r.PRICE_HISTORY_STABLE:$r.PRICE_HISTORY_INCREASE;case yt.RATINGSANDREVIEWS:var p=this.flyoutData.dataStoreModule.RatingsAndReviewsData;if(null!=p&&p.videos&&p.videos.length>0){if(p.expertReviews&&p.expertReviews.length>0){this.pageHandlerModule.RecordAsContentViewed($r.PROFESSIONAL_REVIEWS);var f=new L(A.ModuleViewed),g="".concat($r.PROFESSIONAL_REVIEWS);n?g+=" expanded":o&&(g+=" pole position"),this.logModule.LogInfoEvent(S.EdgeFlyoutStatus,g,f,i)}return $r.VIDEO_REVIEWS}if(p&&p.expertReviews&&p.expertReviews.length>0){if(null!=p&&p.videos&&p.videos.length>0){this.pageHandlerModule.RecordAsContentViewed($r.VIDEO_REVIEWS);var m=new L(A.ModuleViewed),v="".concat($r.VIDEO_REVIEWS);n?v+=" expanded":o&&(v+=" pole position"),this.logModule.LogInfoEvent(S.EdgeFlyoutStatus,v,m,i)}return $r.PROFESSIONAL_REVIEWS}case yt.CHECKOUTAUTOFILL:return $r.EXPRESS_CHECKOUT;case yt.SIMILARSELLERS:return $r.OTHER_SELLER;case yt.REWARD:return $r.ACTIVATE_REWARDS_NEW;case yt.ATTAINABLECOUPONS:return $r.ATTAINABLE_COUPONS;default:return null}}},{key:"recordContentViewed",value:function(t,e,i,n,o){var a=this.setContentViewed(t,e,i,!1,n),r=this.getViewedContent(t),s="".concat(t),l=new L(A.ModuleViewed,void 0,void 0,void 0,r);a&&(this.pageHandlerModule.RecordAsContentViewed(a),s="".concat(a),o?s+=" notification":n&&(s+=" pole position")),this.logModule.LogInfoEvent(S.EdgeFlyoutStatus,s,l,i)}},{key:"getViewedContent",value:function(t){if(t)try{return t===yt.SIMILARSELLERS&&this.flyoutData.dataStoreModule.SimilarSellerData?JSON.stringify(this.flyoutData.dataStoreModule.SimilarSellerData):void 0}catch(t){return}}},{key:"seeMoreClickHandler",value:function(t,e,i,n,o,a){var r=!1;0===t.offsetX&&0===t.offsetY&&(r=!0),i(e,!0,r,o,a),n.remove(),Fe.queueUpdate((function(){var t=e.shadowRoot;if(t){var i=t.querySelector(".action");i&&(i.style.display="none")}}))}},{key:"createRemindLaterButton",value:function(){var t=this,e=this.createElement("fluent-anchor");return e.className+="action aOfferDetails",e.appearance="lightweight",e.href="#",e.style.fontSize="14px",e.style.lineHeight="16px",e.textContent=this.flyoutData.strings.remindLater,e.style.display="flex",e.style.alignSelf="center",e.addEventListener("click",(function(){var e=new Tr(E.RemindLater);t.pageHandlerModule.RecordAsUserAction(Hr.FLYOUT_SNOOZED),t.logModule.LogInfoEvent(S.ButtonClick,"Flyout Snoozed (Remind Later)",e,Fr.CouponImpressionId),t.pageHandlerModule.AutoShowForAllFeatures(!1),t.pageHandlerModule.DismissPopup()})),e}},{key:"CapitalizeString",value:function(t){if(t){var e="";return t.length>0&&(e+=t[0].toUpperCase()+t.substring(1)),e}return t}},{key:"CapitalizeWordsInString",value:function(t){if(t){var e="",i=t.split(" "),n=["or","of","and","a","an"];return i.forEach((function(t){t.length>0&&(n.includes(t)?e+=t+" ":e+=t[0].toUpperCase()+t.substring(1).toLowerCase()+" ")})),e.substring(0,e.length-1)}return t}},{key:"cleanInput",value:function(t){try{return t.replace(/[^\w\.@\-\%, !]/,"")}catch(t){return""}}},{key:"handleToolTipInteraction",value:function(t,e){t.addEventListener("mouseenter",(function(){e&&(e.visible=!0)})),t.addEventListener("mouseleave",(function(){e&&(e.visible=!1)})),t.addEventListener("focus",(function(){e&&(e.visible=!0)})),t.addEventListener("blur",(function(){e&&(e.visible=!1)}))}},{key:"sendFlyoutUpdateEvent",value:function(t,e){Fe.queueUpdate((function(){var i=new CustomEvent(Xr.onDataUpdate,{detail:{moduleType:e}});t.dispatchEvent(i)}))}},{key:"getFavIconSrc",value:function(t){return t?(t=(t=t.replace("http://","")).replace("https://",""),this.flyoutData.dataLoader.IsServerData()?"https://edge.microsoft.com/favicon/v1/?client=chrome_desktop&nfrp=2&check_seen=true&size=16&fallback_opts=TYPE,SIZE,URL&url=http://".concat(t,"&origin=shoppingv2"):this.flyoutData.common.currentDevice===st.Mobile?"https://".concat(t,"/favicon.ico"):"edge://favicon2/?size=16&scale_factor=1x&page_url=http://".concat(t,"&allow_google_server_fallback=1")):""}}]),t}(),as=os,rs=function(){function t(e,i,n,o){s(this,t),f(this,"pageHandlerModule",void 0),f(this,"logModule",void 0),f(this,"viewModulesUtilities",void 0),f(this,"commonAssets",void 0),this.pageHandlerModule=e,this.logModule=i,this.viewModulesUtilities=new as(n,e,i,o)}return r(t,null,[{key:"getErrorString",value:function(t){var e,i,n,o=null!==(e=null==t?void 0:t.name)&&void 0!==e?e:"",a=null!==(i=null==t?void 0:t.message)&&void 0!==i?i:"",r=null!==(n=null==t?void 0:t.stack)&&void 0!==n?n:"";return"".concat(o," ").concat(a," ").concat(r)}}]),t}(),ss=rs,ls=function(){function t(){s(this,t),f(this,"nullValue",void 0)}return r(t,null,[{key:"Create",value:function(e){var i=new t;return i.nullValue=e.nullValue,i}}]),t}(),cs=function(){function t(e,i,n,o,a,r,l,c,u,d){var h,p,g,m,v,y,C,b,S,x,E,A,T,I,D,w,k,R,O,P,M,N,L,_,F,H,B,U,V,$,G;(s(this,t),f(this,"highestCashBackCategory",void 0),f(this,"userRebatesResponse",void 0),f(this,"merchantName",void 0),f(this,"image",void 0),f(this,"merchantId",void 0),f(this,"merchantFullName",void 0),f(this,"merchantUri",void 0),f(this,"affiliateNetwork",void 0),f(this,"IsRebatesSupportedDomain",void 0),f(this,"isSignInSupportedDomain",void 0),f(this,"isCashBackActivated",void 0),f(this,"isConfirmationPage",void 0),f(this,"isTurnedOff",void 0),f(this,"personalizedCashback",void 0),f(this,"shouldRenderCashBackNotification",void 0),f(this,"isPersonalizedCashback",void 0),f(this,"isSignInSupportedDomainCashBack",void 0),f(this,"isPromotionsCashback",void 0),f(this,"popupOrigination",void 0),f(this,"activateRebatesStatus",void 0),f(this,"adsCashback",void 0),f(this,"isEdgeSignedInMsa",void 0),f(this,"experiments",void 0),e)&&(this.highestCashBackCategory={category:null===(h=e.highestCashbackCategory)||void 0===h?void 0:h.category,commissionType:null===(p=e.highestCashbackCategory)||void 0===p?void 0:p.commissionType,commissionValue:null===(g=e.highestCashbackCategory)||void 0===g?void 0:g.commissionValue,priority:null===(m=e.highestCashbackCategory)||void 0===m?void 0:m.priority},this.userRebatesResponse={cashbackAvailable:null===(v=e.userRebateResponse)||void 0===v?void 0:v.cashbackAvailable,isRebatesUser:null!==(y=null===(C=e.userRebateResponse)||void 0===C?void 0:C.isRebatesUser)&&void 0!==y&&y,latestCashbackApproved:null===(b=e.userRebateResponse)||void 0===b?void 0:b.latestCashbackApproved,latestCashbackApprovedCurrency:null===(S=e.userRebateResponse)||void 0===S?void 0:S.latestCashbackApprovedCurrency,latestOrderDate:null===(x=e.userRebateResponse)||void 0===x?void 0:x.latestOrderDate,latestOrderMerchantName:null===(E=e.userRebateResponse)||void 0===E?void 0:E.latestOrderMerchantName,latestOrderMerchantUrl:null===(A=e.userRebateResponse)||void 0===A?void 0:A.latestOrderMerchantUrl,lifetimeBalance:null===(T=e.userRebateResponse)||void 0===T?void 0:T.lifetimeBalance},this.personalizedCashback={commissionType:null===(I=e.personalizedCashback)||void 0===I?void 0:I.commissionType,commissionValue:null===(D=e.personalizedCashback)||void 0===D?void 0:D.commissionValue,imageUrl:null===(w=e.personalizedCashback)||void 0===w?void 0:w.imageUrl,isAdClick:null===(k=e.personalizedCashback)||void 0===k?void 0:k.isAdClick,offerId:null===(R=e.personalizedCashback)||void 0===R?void 0:R.offerId,productUrl:null===(O=e.personalizedCashback)||void 0===O?void 0:O.productUrl,rGuid:null===(P=e.personalizedCashback)||void 0===P?void 0:P.rGuid,scope:null===(M=e.personalizedCashback)||void 0===M?void 0:M.scope},this.isSignInSupportedDomain=e.isSignInSupportedDomain,this.merchantName=e.merchantName,this.image=e.image,this.merchantId=e.merchantId,this.merchantFullName=e.merchantFullName,this.merchantUri=e.merchantUri,this.affiliateNetwork=e.affiliateNetwork,this.IsRebatesSupportedDomain=null!==(N=e.IsRebatesSupportedDomain)&&void 0!==N?N:null);i&&(this.personalizedCashback={commissionType:null===(L=i.personalizedCashback)||void 0===L?void 0:L.commissionType,commissionValue:null===(_=i.personalizedCashback)||void 0===_?void 0:_.commissionValue,imageUrl:null===(F=i.personalizedCashback)||void 0===F?void 0:F.imageUrl,isAdClick:null===(H=i.personalizedCashback)||void 0===H?void 0:H.isAdClick,offerId:null===(B=i.personalizedCashback)||void 0===B?void 0:B.offerId,productUrl:null===(U=i.personalizedCashback)||void 0===U?void 0:U.productUrl,rGuid:null===(V=i.personalizedCashback)||void 0===V?void 0:V.rGuid,scope:null===($=i.personalizedCashback)||void 0===$?void 0:$.scope},this.adsCashback=null===(G=i.personalizedCashback)||void 0===G?void 0:G.adsCashback);this.isCashBackActivated=null!=n&&n,this.isConfirmationPage=null!=o&&o,this.isTurnedOff=null!=a&&a,this.experiments=r,this.popupOrigination=u,this.activateRebatesStatus=d,this.shouldRenderCashBackNotification=this.ShouldRenderCashBackNotification(this,l),this.isPersonalizedCashback=this.IsPersonalizedCashback(this),this.isSignInSupportedDomainCashBack=this.IsSignInSupportedDomainCashBack(this,l),this.isPromotionsCashback=this.IsPromotionsCashback(this)}return r(t,[{key:"IsSignInSupportedDomainCashBack",value:function(t,e){var i,n,o,a,r,s;return!(!(t&&t.isSignInSupportedDomain&&(null===(i=t.userRebatesResponse)||void 0===i||!i.isRebatesUser)&&this.experiments.isExperimentActive(fe.signinRebates)&&null!==(n=t.personalizedCashback)&&void 0!==n&&n.commissionType&&null!==(o=t.personalizedCashback)&&void 0!==o&&o.commissionValue&&null!==(a=t.personalizedCashback)&&void 0!==a&&a.scope&&null!==(r=t.personalizedCashback)&&void 0!==r&&r.offerId)||this.popupOrigination!==he.AUTO_SHOW_REBATES_SWITCHED_TO_MSA&&this.popupOrigination!==he.AUTO_SHOW_PERSONALIZED_CASHBACK&&e===dt.Auto)||t&&t.isSignInSupportedDomain&&!(null!==(s=t.userRebatesResponse)&&void 0!==s&&s.isRebatesUser)&&this.experiments.isExperimentActive(fe.signinRebates)&&t.highestCashBackCategory&&t.highestCashBackCategory.commissionValue&&t.highestCashBackCategory.commissionType&&t.highestCashBackCategory.category&&t.merchantFullName&&(!t.isCashBackActivated||this.popupOrigination===he.AUTO_SHOW_REBATES_SWITCHED_TO_MSA)}},{key:"IsPersonalizedCashback",value:function(t){var e;return null!==(e=t&&t.personalizedCashback&&t.personalizedCashback.commissionValue)&&void 0!==e&&e}},{key:"ShouldRenderCashBackNotification",value:function(t,e){if(t.isConfirmationPage||t.isTurnedOff)return!0;var i=!1;return this.experiments.isExperimentActive(fe.cbCompress)&&(i=this.popupOrigination===he.AUTO_SHOW_REBATES),!(!t||e!==dt.Auto||this.popupOrigination!==he.AUTO_SHOW_REBATES_ORGANIC&&!i)}},{key:"IsPromotionsCashback",value:function(t){var e;return!(!this.experiments.isExperimentActive(fe.promotionsCashback)||0!==(null==t||null===(e=t.userRebatesResponse)||void 0===e?void 0:e.lifetimeBalance))}}]),t}(),us=r((function t(e,i,n,o,a){s(this,t),f(this,"Profiles",void 0),f(this,"Payments",void 0),f(this,"shouldRenderCheckoutAutofill",void 0),f(this,"AllProfiles",void 0),f(this,"AllPayments",void 0),this.AllProfiles=[],this.AllPayments=[],this.Profiles=[],this.Payments=[],e&&(this.AllProfiles=e),i&&(this.AllPayments=i),n&&(this.Profiles=n),o&&(this.Payments=o),this.shouldRenderCheckoutAutofill=a})),ds=r((function t(e,i){s(this,t),f(this,"couponCode",void 0),f(this,"title",void 0),f(this,"attribution",void 0),f(this,"isStackable",void 0),f(this,"successRate",void 0),f(this,"minimumPurchase",void 0),f(this,"shortHeader",void 0),f(this,"calculatedCutoffPrice",void 0),this.couponCode=null==e?void 0:e.couponCode,this.title=null==e?void 0:e.title,this.attribution=null==e?void 0:e.attribution,i===st.Mobile?this.isStackable=!0:this.isStackable=null==e?void 0:e.isStackable,this.successRate=null==e?void 0:e.successRate,this.minimumPurchase=null==e?void 0:e.minimumPurchase,this.shortHeader=null==e?void 0:e.shortHeader,this.calculatedCutoffPrice=null==e?void 0:e.calculatedCutoffPrice})),hs=function(){function t(){s(this,t),f(this,"offerUrl",void 0),f(this,"headerText",void 0),f(this,"id",void 0)}return r(t,null,[{key:"Create",value:function(e){var i=new t;return i.offerUrl=e.offerUrl,i.headerText=e.headerText,i.id=e.id,i}}]),t}(),ps=function(){function t(){s(this,t),f(this,"title",void 0),f(this,"offerUrl",void 0),f(this,"imageUrl",void 0),f(this,"originalPrice",void 0),f(this,"newPrice",void 0),f(this,"discountPercentage",void 0),f(this,"shippingText",void 0),f(this,"sellerName",void 0),f(this,"id",void 0),f(this,"priceDropPercentage",void 0)}return r(t,null,[{key:"Create",value:function(e){var i=new t;return i.title=e.title,i.offerUrl=e.offerUrl,i.imageUrl=e.imageUrl,i.originalPrice=e.originalPrice,i.newPrice=e.newPrice,i.discountPercentage=e.discountPercentage,i.shippingText=e.shippingText,i.id=e.id,i.priceDropPercentage=e.priceDropPercentage,i}}]),t}(),fs=r((function t(e,i){s(this,t),f(this,"AverageSavings",void 0),f(this,"AverageUsers",void 0),f(this,"SellerName",void 0),f(this,"Domain",void 0),this.AverageSavings=e.averageSavings,this.AverageUsers=e.averageUsers,this.Domain=i,this.SellerName=e.websiteName})),gs=r((function t(e){s(this,t),f(this,"EventInfoTime",void 0),f(this,"EventInfoName",void 0),f(this,"Domain",void 0),f(this,"BestCoupon",void 0),f(this,"CashbackCategory",void 0),f(this,"StartingPrice",void 0),f(this,"CashbackSavings",void 0),f(this,"Discount",void 0),f(this,"AutoApplyScenario",void 0),f(this,"AutoApplyProcessTime",void 0),f(this,"ImpressionId",void 0),f(this,"JSVersion",void 0),f(this,"BuildVersion",void 0),f(this,"Currency",void 0),this.EventInfoTime=null==e?void 0:e.eventInfo_Time,this.EventInfoName=null==e?void 0:e.eventInfo_Name,this.Domain=null==e?void 0:e.domain,this.BestCoupon=null==e?void 0:e.bestCoupon,this.CashbackCategory=null==e?void 0:e.cashbackCategory,this.StartingPrice=null==e?void 0:e.startingPrice,this.CashbackSavings=null==e?void 0:e.cashbackSavings,this.Discount=null==e?void 0:e.discount,this.AutoApplyScenario=null==e?void 0:e.autoApplyScenario,this.AutoApplyProcessTime=null==e?void 0:e.autoApplyProcessTime,this.ImpressionId=null==e?void 0:e.impressionId,this.JSVersion=null==e?void 0:e.jSVersion,this.BuildVersion=null==e?void 0:e.buildVersion,this.Currency=null==e?void 0:e.currency}));function ms(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return vs(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return vs(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function vs(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var ys=r((function t(e){s(this,t),f(this,"TotalAutoApplySavingsAmount",void 0),f(this,"LastUpdatedAutoApplySavingsTimestamp",void 0),f(this,"ListOfAutoApplyTransactions",new Array),f(this,"TotalCouponClippingSavingsAmount",void 0),f(this,"LastUpdatedCouponClippingSavingsTimestamp",void 0),f(this,"ListOfCouponClippingTransactions",new Array),f(this,"TotalCashbackSavingsAmount",void 0),f(this,"LastUpdatedCashbackSavingsTimestamp",void 0),f(this,"ListOfCashbackTransactions",new Array),this.TotalAutoApplySavingsAmount=null==e?void 0:e.totalAutoApplySavingsAmount,this.LastUpdatedAutoApplySavingsTimestamp=null==e?void 0:e.lastUpdatedAutoApplySavingsTimestamp;var i=null==e?void 0:e.listOfAutoApplyTransactions;if((null==i?void 0:i.length)>0){var n,o=ms(i);try{for(o.s();!(n=o.n()).done;){var a=n.value;this.ListOfAutoApplyTransactions.push(new gs(a))}}catch(t){o.e(t)}finally{o.f()}}this.TotalCouponClippingSavingsAmount=null==e?void 0:e.totalCouponClippingSavingsAmount,this.LastUpdatedCouponClippingSavingsTimestamp=null==e?void 0:e.lastUpdatedCouponClippingSavingsTimestamp;var r=null==e?void 0:e.listOfCouponClippingTransactions;if((null==r?void 0:r.length)>0){var l,c=ms(r);try{for(c.s();!(l=c.n()).done;){var u=l.value;this.ListOfCouponClippingTransactions.push(new gs(u))}}catch(t){c.e(t)}finally{c.f()}}this.TotalCashbackSavingsAmount=null==e?void 0:e.totalCashbackSavingsAmount,this.LastUpdatedCashbackSavingsTimestamp=null==e?void 0:e.lastUpdatedCashbackSavingsTimestamp;var d=null==e?void 0:e.listOfCashbackTransactions;if((null==d?void 0:d.length)>0){var h,p=ms(d);try{for(p.s();!(h=p.n()).done;){var g=h.value;this.ListOfCashbackTransactions.push(new gs(g))}}catch(t){p.e(t)}finally{p.f()}}}));function Cs(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return bs(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return bs(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function bs(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var Ss=r((function t(e,i,n){s(this,t),f(this,"IsAutoApplyAvailable",void 0),f(this,"Coupons",void 0),f(this,"Trivia",void 0),f(this,"FriendlyDomainName",void 0),f(this,"DomainName",void 0),f(this,"isCheckoutPageWithAutoApply",void 0),f(this,"IsPackageTrackingEnabled",void 0),f(this,"Deals",void 0),f(this,"Recommendations",void 0),f(this,"SavingsFound",void 0);var o=n.common.isCheckoutPage,a=n.common.currentDevice;if(this.IsAutoApplyAvailable=i,e){var r;if(this.Coupons=[],e.coupons){var l,c=Cs(e.coupons);try{for(c.s();!(l=c.n()).done;){var u=l.value;this.Coupons.push(new ds(u,a))}}catch(t){c.e(t)}finally{c.f()}}if(this.Deals=[],e.deals){var d,h=Cs(e.deals);try{for(h.s();!(d=h.n()).done;){var p=d.value;this.Deals.push(hs.Create(p))}}catch(t){h.e(t)}finally{h.f()}}if(this.Recommendations=[],e.recommendations){var g,m=Cs(e.recommendations);try{for(m.s();!(g=m.n()).done;){var v=g.value;this.Recommendations.push(ps.Create(v))}}catch(t){m.e(t)}finally{m.f()}}e.retailerData&&(this.DomainName=e.retailerData.domainName,e.retailerData.retailerTrivia&&(this.Trivia=new fs(e.retailerData.retailerTrivia,e.retailerData.domainName))),this.FriendlyDomainName=e.friendlyDomainName,this.IsPackageTrackingEnabled=e.IsPackageTrackingEnabled,this.isCheckoutPageWithAutoApply=null!==(r=this.Coupons&&this.Coupons.length>0&&this.IsAutoApplyAvailable&&o)&&void 0!==r&&r,n.experimentData.isExperimentActive(fe.savingsFoundExp)&&null!=e&&e.savingsFound&&(this.SavingsFound=new ys(null==e?void 0:e.savingsFound))}})),xs=r((function t(){s(this,t),f(this,"influencerName",void 0),f(this,"imgSrc",void 0),f(this,"followers",void 0),f(this,"channelId",void 0),f(this,"coupons",void 0)})),Es=r((function t(e,i,n){var o=this;s(this,t),f(this,"exclusiveCouponsForDomain",[]),f(this,"youtubeCouponsData",void 0),f(this,"hasExclusiveCoupons",!1),f(this,"permission",null),e&&e.length>0&&(this.youtubeCouponsData=e,this.youtubeCouponsData.forEach((function(t){var e,a=new xs;a.followers=t.followers,a.imgSrc=t.imgSrc,a.influencerName=t.influencerName,a.channelId=t.channelId,a.coupons=[];var r=/(http|https):\/\/(www\.)?([A-Za-z0-9]*\.(com|net|org|info|coop|int|co\.uk|org\.uk|ac\.uk|uk))/;null===(e=t.coupons)||void 0===e||e.forEach((function(t){var e,n,s=r.exec(t.retailerLink);t.retailerDomain&&(e=null===(n=t.retailerDomain)||void 0===n?void 0:n.replace(" ",""));(s&&5===s.length&&s[3]===i||e&&e.includes(i)||i.includes(e))&&(a.coupons.push(t),o.hasExclusiveCoupons=!0)})),o.hasExclusiveCoupons&&a.coupons.length>0&&o.exclusiveCouponsForDomain.push(a),o.permission=n})))})),As=Es,Ts=r((function t(e){s(this,t),f(this,"offerValue",void 0),f(this,"offerImage",void 0),f(this,"offerDescription",void 0),f(this,"brandName",void 0),f(this,"offerSummary",void 0),f(this,"offerExpiryDate",void 0),f(this,"retailerClickThroughUrl",void 0),e&&(this.offerValue=e.offerValue,this.offerImage=e.offerImage,this.offerDescription=e.offerDescription,this.brandName=e.brandName,this.offerSummary=e.offerSummary,this.offerExpiryDate=e.offerExpiryDate,this.retailerClickThroughUrl=e.retailerClickThroughUrl)})),Is=r((function t(e){s(this,t),f(this,"couponId",void 0),f(this,"value",void 0),f(this,"categoryDescription",void 0),f(this,"offerSummary",void 0),f(this,"brand",void 0),f(this,"description",void 0),f(this,"imageUrlSuffix",void 0),f(this,"expirationDate",void 0),f(this,"redemptionLimit",void 0),e&&(this.couponId=e.coupon_id,this.value=e.value,this.categoryDescription=e.category_description,this.offerSummary=e.offer_summary_top,this.brand=e.brand,this.description=e.offer_print_detail,this.imageUrlSuffix=e.image_url_suffix,this.expirationDate=e.expiration_date,this.redemptionLimit=e.redemption_limit)}));function Ds(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return ws(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return ws(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function ws(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var ks=r((function t(e){var i,n;if(s(this,t),f(this,"NationalOffers",void 0),f(this,"Restrictions",void 0),f(this,"NationalOffersImageUrlPrefix",void 0),f(this,"HashCode",void 0),this.NationalOffers=[],(null==e||null===(i=e.nationalOffers)||void 0===i?void 0:i.length)>0){var o,a=Ds(e.nationalOffers);try{for(a.s();!(o=a.n()).done;){var r=o.value;this.NationalOffers.push(new Is(r))}}catch(t){a.e(t)}finally{a.f()}}if(this.Restrictions=[],(null==e||null===(n=e.restrictions)||void 0===n?void 0:n.length)>0){var l,c=Ds(e.restrictions);try{for(c.s();!(l=c.n()).done;){var u=l.value;this.Restrictions.push(new Is(u))}}catch(t){c.e(t)}finally{c.f()}}this.NationalOffersImageUrlPrefix=null==e?void 0:e.nationalOffersImageUrlPrefix,this.HashCode=null==e?void 0:e.hashCode}));function Rs(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return Os(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Os(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function Os(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var Ps=r((function t(e){var i,n,o;if(s(this,t),f(this,"DigitalCoupons",void 0),f(this,"PrintableCoupons",void 0),f(this,"DomainName",void 0),this.DigitalCoupons=[],null!=e&&null!==(i=e.groceryOffers)&&void 0!==i&&i.digitalCoupons&&(null===(n=e.groceryOffers.digitalCoupons)||void 0===n?void 0:n.length)>0){var a,r=Rs(e.groceryOffers.digitalCoupons);try{for(r.s();!(a=r.n()).done;){var l=a.value;this.DigitalCoupons.push(new Ts(l))}}catch(t){r.e(t)}finally{r.f()}}null!=e&&null!==(o=e.groceryOffers)&&void 0!==o&&o.printableCoupons&&(this.PrintableCoupons=new ks(e.groceryOffers.printableCoupons)),this.DomainName=null==e?void 0:e.friendlyDomainName})),Ms=r((function t(e){s(this,t),f(this,"Tips",void 0),this.Tips=e})),Ns=r((function t(e,i){s(this,t),f(this,"trackerKey",void 0),f(this,"actionURL",void 0),f(this,"orderSummary",void 0),f(this,"domain",void 0),f(this,"orderStatus",void 0),f(this,"productsInOrder",void 0),e&&i&&(this.trackerKey=e.trackerKey,this.actionURL=e.actionURL,this.orderStatus=e.orderStatus,this.domain=e.domain,this.orderSummary=e.orderSummary,this.productsInOrder=i)})),Ls=r((function t(e,i,n,o){s(this,t),f(this,"packageTrackingFreShown",void 0),f(this,"packageTrackingUserConsented",void 0),f(this,"orders",void 0),f(this,"shouldShowPackageTrackingNotification",void 0),this.packageTrackingFreShown=null!=e&&e,this.packageTrackingUserConsented=null!=i&&i,this.orders=n,this.shouldShowPackageTrackingNotification=null!=o&&o})),_s=function(){function t(e){s(this,t),f(this,"Guid",void 0),f(this,"ExpMonth",void 0),f(this,"ExpYear",void 0),f(this,"FullName",void 0),f(this,"MaskedCardNumber",void 0),f(this,"CardNumber",void 0),f(this,"CardType",void 0);var i=e.metadata.summaryLabel.substr(0,e.metadata.summaryLabel.indexOf(" ")),n=e.metadata.summaryLabel.substr(e.metadata.summaryLabel.length-5,e.metadata.summaryLabel.length);this.UpdateFileds(e.guid,e.expirationMonth,e.expirationYear,e.name,e.cardNumber,F[i.toUpperCase().trim()],n)}return r(t,[{key:"UpdateFileds",value:function(t,e,i,n,o,a,r){this.Guid=t,this.ExpMonth=e,this.ExpYear=i,this.FullName=n,this.CardNumber=o,this.CardType=a,this.MaskedCardNumber=r}}]),t}(),Fs=r((function t(e){s(this,t),f(this,"providerName",void 0),f(this,"projectedMonthlyPaymentDetails",void 0),f(this,"paymentSuggestion",void 0),f(this,"period",void 0),f(this,"lowerThreshold",void 0),f(this,"upperThreshold",void 0),f(this,"amount",void 0),f(this,"helpInformation",void 0),f(this,"managePaymentLabel",void 0),f(this,"managePaymentLinkText",void 0),e&&(this.providerName=e.providerName,this.projectedMonthlyPaymentDetails=e.projectedMonthlyPaymentDetails,this.paymentSuggestion=e.paymentSuggestion,this.period=e.period,this.lowerThreshold=e.lowerThreshold,this.upperThreshold=e.upperThreshold,this.amount=e.amount,this.helpInformation=e.helpInformation,this.managePaymentLabel=e.managePaymentLabel,this.managePaymentLinkText=e.managePaymentLinkText)})),Hs=r((function t(e){s(this,t),f(this,"productLink",void 0),this.productLink=e})),Bs=Hs,Us=r((function t(e){var i=this;if(s(this,t),f(this,"Url",void 0),f(this,"Description",void 0),f(this,"SellerName",void 0),f(this,"Domain",void 0),f(this,"InstallmentAmount",void 0),f(this,"InstallmentDescription",void 0),f(this,"LowPrice",void 0),f(this,"Price",void 0),f(this,"FavIcon",void 0),f(this,"CurrencySymbol",void 0),f(this,"ImpressionToken",void 0),f(this,"ProductImageUrl",void 0),f(this,"ProductImageOriginalUrl",void 0),f(this,"PriceId",void 0),f(this,"IntendedPrice",void 0),f(this,"Extensions",void 0),f(this,"BillingType",void 0),f(this,"ShouldOnTop",void 0),f(this,"geoDistance",void 0),f(this,"mileageUnit",void 0),f(this,"mileageValue",void 0),f(this,"isPopular",void 0),f(this,"dealRating",void 0),e){var n,o,a,r,l=e.installmentInfo;l&&(this.InstallmentAmount=l.amount,this.InstallmentDescription=l.description);var c,u,d,h,p,g,m,v,y,C,b,S=e.offer,x=e.offerLevelSignals;if(S)this.LowPrice=S.lowPrice,this.Price=S.price,this.Description=null===(c=S.itemOffered)||void 0===c?void 0:c.name,this.SellerName=null===(u=S.seller)||void 0===u?void 0:u.name,this.Domain=null===(d=S.seller)||void 0===d?void 0:d.domain,this.FavIcon=null===(h=S.seller)||void 0===h?void 0:h.favicon,this.Url=S.url,this.CurrencySymbol=S.priceCurrencySymbol,this.ProductImageUrl=null===(p=S.itemOffered)||void 0===p||null===(g=p.image)||void 0===g?void 0:g.contentUrl,this.ProductImageOriginalUrl=S.itemOffered.image.originalUrl,this.geoDistance=null===(m=S.metadata)||void 0===m?void 0:m.geoDistance,this.mileageUnit=null===(v=S.metadata)||void 0===v?void 0:v.mileageUnit,this.mileageValue=null===(y=S.metadata)||void 0===y?void 0:y.mileageValue,this.isPopular=null===(C=S.metadata)||void 0===C?void 0:C.isPopular,this.dealRating=null===(b=S.metadata)||void 0===b?void 0:b.dealRating;x&&(this.ShouldOnTop=x.autoshow),this.BillingType=null!==(n=null===(o=e.billingType)||void 0===o?void 0:o.toLowerCase())&&void 0!==n?n:"",this.ImpressionToken=null!==(a=e.impressionToken)&&void 0!==a?a:"",this.PriceId=null!==(r=e.price_comparison_id)&&void 0!==r?r:"";var E=e.extensions;E&&E.length>0&&(this.Extensions=new Array,E.forEach((function(t){var e=t.text,n=t._type;i.Extensions.push({ExtensionText:e,ExtensionType:n})})))}}));function Vs(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return $s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return $s(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function $s(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var Gs=function(){function t(e,i,n,o,a){var r=this;if(s(this,t),f(this,"Price",void 0),f(this,"CompetingPrices",void 0),f(this,"currentImageUrl",void 0),f(this,"currentProductTitle",void 0),f(this,"entityName",void 0),f(this,"shouldBeInPolePosition",void 0),f(this,"lowestPrice",void 0),f(this,"shoudlRenderPriceComparisonNotification",void 0),f(this,"segment",void 0),e){var l="",c="";if(e&&e.value&&i&&(n&&n.image_url&&(l=n.image_url,c=n.title),n&&n.entity&&n.entity.name&&(this.entityName=n.entity.name)),this.Price=i,this.currentImageUrl=l,this.currentProductTitle=c,this.CompetingPrices=[],e.value&&e.value.length>0){var u,d=Vs(e.value);try{for(d.s();!(u=d.n()).done;){var h=u.value;this.CompetingPrices.push(new Us(h))}}catch(t){d.e(t)}finally{d.f()}}this.CompetingPrices&&this.CompetingPrices.length>0&&this.CompetingPrices.forEach((function(t){t.IntendedPrice=r.getIntendedPrice(t)})),e&&e.segment&&(this.segment=e.segment),this.lowestPrice=this.getLowestPrice(),this.shouldBeInPolePosition=this.ShouldBeInPolePosition(this),this.shoudlRenderPriceComparisonNotification=this.ShouldRenderNotification(this,o,a)}}return r(t,[{key:"getIntendedPrice",value:function(t){if(t.InstallmentAmount){var e=parseFloat(t.InstallmentAmount.replace(/[^0-9.]/g,""));if(t.InstallmentDescription){var i=parseInt(t.InstallmentDescription.replace(/[^0-9]/g,""),10);i&&(e*=i)}return e}return t.LowPrice?t.LowPrice:t.Price}},{key:"ShouldBeInPolePosition",value:function(t){if(t&&t.CompetingPrices&&t.CompetingPrices.length>0){var e=this.getLowestPrice(),i=t.Price-e;if(e>0&&i>0&&i>Math.ceil(.05*t.Price))return!0}return!1}},{key:"ShouldRenderNotification",value:function(t,e,i){var n;return null!==(n=t&&t.CompetingPrices&&t.CompetingPrices.length>0&&e===dt.Auto&&i===he.AUTO_SHOW_LOWER_PRICE_FOUND)&&void 0!==n&&n}},{key:"getLowestPrice",value:function(){if(this.Price&&-1!==this.Price){var t=this.Price;return this.CompetingPrices.forEach((function(e){var i=e.IntendedPrice;i&&i<t&&(t=i)})),t===this.Price?-1:t}return-1}}]),t}(),zs=r((function t(e){s(this,t),f(this,"canonicalUrl",void 0),f(this,"image",void 0),f(this,"name",void 0),f(this,"price",void 0),f(this,"pageLocale",void 0),f(this,"priceCurrency",void 0),f(this,"priceValue",void 0),f(this,"type",void 0),f(this,"latestPrice",void 0),e&&(this.canonicalUrl=e.canonical_url,this.image=e.image,this.name=e.name,this.price=e["offers/price"],this.pageLocale=e.page_locale,this.priceCurrency=e.price_currency,this.priceValue=e.price_value,this.type=e.type,this.latestPrice=e.latestPrice)})),Ws=r((function t(e){if(s(this,t),f(this,"category",void 0),f(this,"entity",void 0),f(this,"title",void 0),f(this,"url",void 0),f(this,"domain",void 0),f(this,"newTimestamp",void 0),e&&(this.category=e.category,this.entity=new zs(e.entity),this.title=e.title,this.url=e.url,this.newTimestamp=e.newTimestamp,this.url)){var i=this.url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);i&&i.length>2&&"string"==typeof i[2]&&(this.domain=i[2])}})),Ks=r((function t(e,i){s(this,t),f(this,"productImageUrl",void 0),f(this,"productName",void 0),this.productImageUrl=e,this.productName=i})),js=function(){function t(e){var i,n,o,a,r,l;s(this,t),f(this,"Guid",void 0),f(this,"Emails",void 0),f(this,"FirstName",void 0),f(this,"MiddleName",void 0),f(this,"LastName",void 0),f(this,"FullName",void 0),f(this,"AddressLines",void 0),f(this,"City",void 0),f(this,"State",void 0),f(this,"Country",void 0),f(this,"Zip",void 0),f(this,"PhoneNumbers",void 0),f(this,"Honorific",void 0),this.UpdateFields(e.guid,e.emailAddresses,null!==(i=null===(n=e.fullNameSplit)||void 0===n?void 0:n.firstName)&&void 0!==i?i:"",null!==(o=null===(a=e.fullNameSplit)||void 0===a?void 0:a.middleName)&&void 0!==o?o:"",null!==(r=null===(l=e.fullNameSplit)||void 0===l?void 0:l.lastName)&&void 0!==r?r:"",e.fullNames,e.honorific,e.addressLines,e.addressLevel2,e.addressLevel1,e.countryCode,e.postalCode,e.phoneNumbers)}return r(t,[{key:"UpdateFields",value:function(t,e,i,n,o,a,r,s,l,c,u,d,h){this.Guid=t,this.Emails=e,this.FirstName=i,this.MiddleName=n,this.LastName=o,this.FullName=a[0],this.AddressLines=s,this.City=l,this.State=c,this.Country=u,this.Zip=d,this.PhoneNumbers=h,this.Honorific=r}}]),t}(),Ys=function(){function t(){s(this,t),f(this,"rawValue",void 0),f(this,"maxValue",void 0)}return r(t,[{key:"normalizedValue",get:function(){return t.NormalizedMaxRating*(this.rawValue/this.maxValue)}}],[{key:"createRating",value:function(e,i){if(i<1||e<0||e>i)return null;var n=new t;return n.rawValue=e,n.maxValue=i,n}}]),t}();f(Ys,"NormalizedMaxRating",5);var qs=Ys;function Xs(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=p(t);if(e){var o=p(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return h(this,i)}}var Zs=function(t){u(i,t);var e=Xs(i);function i(){var t;s(this,i);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return f(l(t=e.call.apply(e,[this].concat(o))),"totalReviews",void 0),f(l(t),"displayText",void 0),t}return r(i,null,[{key:"createAggregateRating",value:function(t,e,i,n){if(i<1)return null;var o=qs.createRating(t,e);return o.totalReviews=i,o&&(o.displayText=n),o}}]),i}(qs),Js=Zs,Qs=function(){function t(){s(this,t),f(this,"cardOrder",void 0)}return r(t,null,[{key:"Compare",value:function(t,e){return t.cardOrder-e.cardOrder}}]),t}();function tl(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=p(t);if(e){var o=p(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return h(this,i)}}var el,il=function(t){u(i,t);var e=tl(i);function i(){var t;s(this,i);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return f(l(t=e.call.apply(e,[this].concat(o))),"id",void 0),f(l(t),"url",void 0),f(l(t),"favIconDomain",void 0),f(l(t),"provider",void 0),f(l(t),"title",void 0),f(l(t),"rating",void 0),f(l(t),"caption",void 0),f(l(t),"attribution",void 0),t}return r(i,null,[{key:"create",value:function(t,e,n,o,a,r,s,l,c,u){if(t&&n&&c&&!u?!a:!r)return null;var d,h=new i;(h.id=t,h.cardOrder=e,h.url=n,h.favIconDomain=o,h.provider=a,h.title=r,h.caption=c,h.attribution=u,s&&l)&&(h.rating=null!==(d=qs.createRating(s,l))&&void 0!==d?d:void 0);return h}}]),i}(Qs),nl=il;function ol(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=p(t);if(e){var o=p(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return h(this,i)}}!function(t){t[t.H=0]="H",t[t.V=1]="V"}(el||(el={}));var al=function(t){u(i,t);var e=ol(i);function i(){var t;s(this,i);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return f(l(t=e.call.apply(e,[this].concat(o))),"id",void 0),f(l(t),"cardOrientation",void 0),f(l(t),"title",void 0),f(l(t),"thumbnailId",void 0),f(l(t),"thumbnailUrl",void 0),f(l(t),"clickthroughUrl",void 0),f(l(t),"publisher",void 0),f(l(t),"creator",void 0),f(l(t),"durationText",void 0),f(l(t),"durationLabel",void 0),t}return r(i,null,[{key:"create",value:function(t,e,n,o,a,r,s,l,c,u){if(!t||!o||!s||!a&&!r)return null;var d=new i;if(d.id=t,d.cardOrder=e,d.cardOrientation=(null==n?void 0:n.toUpperCase())===el[el.H]?el.H:el.V,d.title=o,d.thumbnailId=a,d.thumbnailUrl=r,d.clickthroughUrl=s,d.publisher=l,d.creator=c,u>0){var h=Math.floor(u/60),p=Math.round(u)%60,f=p<10?"0"+p:p;d.durationText=h+":"+f,d.durationLabel=h>0?"".concat(h," minutes ").concat(f," seconds"):"".concat(f," seconds")}return d}},{key:"Narrow",value:function(t){return"clickthroughUrl"in t?t:void 0}}]),i}(Qs),rl=al;function sl(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return ll(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return ll(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function ll(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var cl=function(){function t(){s(this,t),f(this,"aggregateRating",void 0),f(this,"sectionTitle",void 0),f(this,"entityName",void 0),f(this,"expertReviews",void 0),f(this,"videos",void 0)}return r(t,[{key:"canCreateInlineRating",get:function(){return!!this.aggregateRating}},{key:"totalCards",get:function(){var t,e,i,n;return(null!==(t=null===(e=this.expertReviews)||void 0===e?void 0:e.length)&&void 0!==t?t:0)+(null!==(i=null===(n=this.videos)||void 0===n?void 0:n.length)&&void 0!==i?i:0)}},{key:"hasExpertReviews",get:function(){return!!this.expertReviews&&this.expertReviews.length>0}},{key:"hasVideos",get:function(){return!!this.videos&&this.videos.length>0}},{key:"CanRankInPole",value:function(t,e){var i,n,o,a,r;if(this.totalCards<3)return!1;if((null===(i=t.PriceHistoryData)||void 0===i?void 0:i.getPriceHistoryType())===Rr.PRICEDROP)return!1;if((null!==(n=null===(o=t.PriceComparisonData)||void 0===o||null===(a=o.CompetingPrices)||void 0===a?void 0:a.length)&&void 0!==n?n:0)>0&&(null!==(r=t.PriceComparisonData)&&void 0!==r&&r.shouldBeInPolePosition))return!1;return!0}}],[{key:"create",value:function(e,i){if(e){var n,o,a,r,s,l=new t;if(l.sectionTitle=e.sectionTitle,l.entityName=null!==(n=null==i||null===(o=i.entity)||void 0===o?void 0:o.name)&&void 0!==n?n:null==i?void 0:i.title,l.aggregateRating=null!==(a=t.createAggregateRating(e.aggregatedRatingReview))&&void 0!==a?a:void 0,Array.isArray(null===(r=e.professionalReviews)||void 0===r?void 0:r.reviews)){var c,u=[],d=sl(e.professionalReviews.reviews);try{for(d.s();!(c=d.n()).done;){var h=c.value,p=t.createExpertReview(h);p&&u.push(p)}}catch(t){d.e(t)}finally{d.f()}u.length>0&&(l.expertReviews=u)}if(Array.isArray(null===(s=e.videoReviews)||void 0===s?void 0:s.reviews)){var f,g=[],m=sl(e.videoReviews.reviews);try{for(m.s();!(f=m.n()).done;){var v=f.value,y=t.createVideo(v);y&&g.push(y)}}catch(t){m.e(t)}finally{m.f()}g.length>0&&(l.videos=g)}return l.aggregateRating||l.expertReviews||l.videos?l:void 0}}},{key:"createAggregateRating",value:function(t){return t&&t.rating?Js.createAggregateRating(t.rating.value,t.rating.maxValue,t.totalReviewCount):null}},{key:"createExpertReview",value:function(t){if(t&&t.publisher){var e,i,n;try{var o;n=new URL(null!==(o=t.iconUri)&&void 0!==o?o:t.url).hostname}catch(t){}return nl.create(t.id,t.cardOrder,t.url,n,t.publisher,t.title,null===(e=t.rating)||void 0===e?void 0:e.value,null===(i=t.rating)||void 0===i?void 0:i.maxValue,t.caption,t.attribution)}return null}},{key:"createVideo",value:function(t){if(null!=t&&t.publisher||null!=t&&t.creator){var e,i=null!==(e=t.clickthroughUrl)&&void 0!==e?e:t.contentUrl;return rl.create(t.id,t.cardOrder,t.cardOrientation,t.title,t.thumbnailId,t.thumbnailUrl,i,t.publisher,t.creator,t.lengthSeconds)}return null}}]),t}(),ul=function(){function t(e,i,n,o){s(this,t),f(this,"Points",void 0),f(this,"IsRewardsActive",void 0),f(this,"IsSignedInUser",void 0),f(this,"IsAssociatedUser",void 0),f(this,"IsTrialUser",void 0),f(this,"TrialUserExpiryInDays",void 0),f(this,"ActivateRewardsStatus",void 0),f(this,"shouldRenderRewardNotification",void 0),f(this,"IsControlUser",void 0),f(this,"experiments",void 0),this.Points=e.points,this.IsRewardsActive=e.isRewardsActive,this.IsAssociatedUser=e.isAssociatedUser,this.IsSignedInUser=e.isSignedInUser,this.IsTrialUser=e.isTrialUser,this.TrialUserExpiryInDays=e.trialUserExpiryInDays,this.IsControlUser=e.isControlUser,this.ActivateRewardsStatus=i,this.experiments=o,this.shouldRenderRewardNotification=this.ShouldRenderRewardNotification(this,n)}return r(t,[{key:"isUserDefined",value:function(){return this.IsSignedInUser||this.IsAssociatedUser||this.IsTrialUser}},{key:"ShouldRenderRewardNotification",value:function(t,e){return t&&t.IsRewardsActive&&this.experiments.isExperimentActive(fe.rewardNotification)&&e===dt.Auto}}]),t}(),dl=function(){function t(e,i){s(this,t),f(this,"shouldRenderSustainability",void 0),f(this,"isDomainSustainabilitySupported",void 0),f(this,"experiments",void 0),this.experiments=i,this.isDomainSustainabilitySupported=e,this.shouldRenderSustainability=this.ShouldRenderSustainability()}return r(t,[{key:"ShouldRenderSustainability",value:function(){return this.isDomainSustainabilitySupported&&this.experiments.isExperimentActive(fe.sustainability)}}]),t}(),hl=r((function t(e,i,n,o,a){s(this,t),f(this,"Text",void 0),f(this,"IconType",void 0),f(this,"MinimumPurchase",void 0),f(this,"RetailerData",void 0),f(this,"CheckoutPageUrl",void 0),this.Text=e,this.IconType=i,this.MinimumPurchase=n,this.RetailerData=oe.Create(o),this.CheckoutPageUrl=a})),pl=hl,fl=r((function t(e){s(this,t),f(this,"merchantName",void 0),f(this,"merchantFullName",void 0),f(this,"merchantId",void 0),f(this,"merchantUri",void 0),f(this,"originalUrl",void 0),f(this,"description",void 0),f(this,"image",void 0),f(this,"priority",void 0),f(this,"affiliateNetwork",void 0),f(this,"commissionType",void 0),f(this,"commissionValue",void 0),f(this,"exclusions",void 0),this.merchantName=e.merchantName,this.merchantFullName=e.merchantFullName,this.merchantId=e.merchantId,this.merchantUri=e.merchantUri,this.originalUrl=e.originalUrl,this.description=e.description,this.image=e.image,this.priority=e.priority,this.affiliateNetwork=e.affiliateNetwork,this.commissionType=e.commissionType,this.commissionValue=e.commissionValue,this.exclusions=e.exclusions})),gl=fl;function ml(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return vl(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return vl(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function vl(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var yl=r((function t(e){if(s(this,t),f(this,"Retailers",void 0),this.Retailers=[],null!=e&&e.topRetailers){var i,n=ml(e.topRetailers);try{for(n.s();!(i=n.n()).done;){var o=i.value;this.Retailers.push(new gl(o))}}catch(t){n.e(t)}finally{n.f()}}})),Cl=r((function t(e){s(this,t),f(this,"domain",void 0),f(this,"title",void 0),f(this,"currencySymbol",void 0),f(this,"productUrl",void 0),f(this,"imageUrl",void 0),f(this,"currentPrice",void 0),f(this,"olderPrice",void 0),f(this,"priceDropPercent",void 0),e&&e.product&&(this.domain=e.product.domain,this.title=e.product.title,this.currencySymbol=e.product.currencySymbol,this.productUrl=e.product.productUrl,this.imageUrl=e.product.imageUrl,this.currentPrice=e.product.currentPrice,this.olderPrice=e.product.olderPrice,this.priceDropPercent=e.product.priceDropPercent)}));function bl(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return Sl(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Sl(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function Sl(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var xl=r((function t(e){if(s(this,t),f(this,"productShowItem",void 0),f(this,"highestDropPercentageApiResponse",void 0),f(this,"maxDropPercent",void 0),e&&e.userDataResponseList){var i,n=bl(e.userDataResponseList);try{for(n.s();!(i=n.n()).done;){var o=i.value;o.priceHistory&&o.priceHistory.product&&o.priceHistory.product.priceDropPercent&&(void 0===this.maxDropPercent||o.priceHistory.product.priceDropPercent>this.maxDropPercent)&&(this.maxDropPercent=o.priceHistory.product.priceDropPercent,this.highestDropPercentageApiResponse=o)}}catch(t){n.e(t)}finally{n.f()}this.highestDropPercentageApiResponse&&this.highestDropPercentageApiResponse.priceHistory&&(this.productShowItem=new Cl(this.highestDropPercentageApiResponse.priceHistory))}})),El=function(){function t(e){s(this,t),f(this,"cardNumber",void 0),f(this,"cardHolderName",void 0),f(this,"cardCVC",void 0),f(this,"expires",void 0),f(this,"billingInfo",void 0),f(this,"isLinking",void 0),f(this,"isLinkingSuccess",void 0),f(this,"isAutofillSuccess",void 0),f(this,"hasError",void 0),f(this,"cardProvider",void 0),this.cardNumber=null==e?void 0:e.cardNumber,this.cardHolderName=null==e?void 0:e.cardHolderName,this.cardCVC=null==e?void 0:e.cardCVC,this.expires=null==e?void 0:e.expires,this.billingInfo=null==e?void 0:e.billingInfo,this.isLinking=null==e?void 0:e.isLinking,this.isLinkingSuccess=null==e?void 0:e.isLinkingSuccess,this.isAutofillSuccess=this.parseIsAutofillSuccessMessage(null==e?void 0:e.isAutofillSuccess),this.hasError=null==e?void 0:e.hasError,this.cardProvider=null==e?void 0:e.cardProvider}return r(t,[{key:"parseIsAutofillSuccessMessage",value:function(t){return"null"===t?null:"true"===t}}]),t}();function Al(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return Tl(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Tl(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function Tl(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var Il=function(){function t(e,i){s(this,t),f(this,"logModule",void 0),f(this,"pageHandlerModule",void 0),f(this,"flyoutData",void 0),f(this,"apiResponseStr",void 0),f(this,"apiResponse",void 0),this.logModule=e,this.pageHandlerModule=i}var i,n,a,l,c,u,d,h;return r(t,[{key:"InitializeData",value:(h=e(o().mark((function t(e){var i,n,a,r,s,l,c,u;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{this.flyoutData=e,(a=this.flyoutData.dataLoader.GetLoadTimeDataValue(ot.GuestCouponsApiResponse,void 0))&&this.flyoutData.common.lastCommittedURL&&this.flyoutData.common.lastCommittedURL.includes("pinterest.com/pin")?this.apiResponseStr=a:this.apiResponseStr=this.flyoutData.dataLoader.GetLoadTimeDataValue(ot.CouponsApiResponse,void 0),this.apiResponseStr&&(this.apiResponse=JSON.parse(this.apiResponseStr),(r=ce.Create(this.apiResponse))&&(this.flyoutData.dataStoreModule.ApiData=r))}catch(t){s=new L(A.OnErrorInvoked),this.logModule.LogErrorEvent(S.EdgeFlyoutStatus,"InitializeData error ".concat(t),s)}return null!==(i=this.flyoutData.dataStoreModule.ApiData)&&void 0!==i&&null!==(n=i.retailerData)&&void 0!==n&&n.domainName?e.common.domain=null===(l=this.flyoutData.dataStoreModule.ApiData)||void 0===l||null===(c=l.retailerData)||void 0===c?void 0:c.domainName:e.common.currentUrl&&(u=this.getDomainNameFromUrl(e.common.currentUrl))&&(e.common.domain=u),t.next=4,this.createDataWithErrorHandling(yt.COUPON);case 4:return this.createDataWithErrorHandling(yt.CASHBACK),this.createDataWithErrorHandling(yt.PRICECOMPARISON),this.flyoutData.experimentData.setShowPCBannerUX(this.flyoutData.common.showPCBannerUX,Ce("banneropen")||this.flyoutData.common.shouldShowBanner,this.flyoutData.dataStoreModule.PriceComparisonData,this.flyoutData.common.foundLowerPrice),this.createDataWithErrorHandling(yt.PRICEHISTORY),t.next=10,this.createDataWithErrorHandling(yt.CHECKOUTAUTOFILL);case 10:return this.createDataWithErrorHandling(yt.NUDGETIPSDATA),this.createDataWithErrorHandling(yt.RATINGSANDREVIEWS),this.createDataWithErrorHandling(yt.COUPONCLIPPING),this.createDataWithErrorHandling(yt.PRODUCTHISTORY),this.createDataWithErrorHandling(yt.REWARD),this.createDataWithErrorHandling(yt.PAYMENT_OPTIONS),t.next=18,this.createDataWithErrorHandling(yt.EXCLUSIVECOUPONS);case 18:return this.createDataWithErrorHandling(yt.VIRTUAL_CARD),this.createDataWithErrorHandling(yt.TOP_RETAILERS),this.createDataWithErrorHandling(yt.GROCERY_COUPON),this.createDataWithErrorHandling(yt.ORDERSTATUSTRACKING),this.createDataWithErrorHandling(yt.ViewedProductPriceDrop),this.createDataWithErrorHandling(yt.SUSTAINABILITY),t.next=26,this.createDataWithErrorHandling(yt.PINTEREST);case 26:case"end":return t.stop()}}),t,this)}))),function(t){return h.apply(this,arguments)})},{key:"GetCashBackData",value:function(){var t,e;this.apiResponse&&(t=this.apiResponse.cashback,e=this.apiResponse.personalizedAdsResponse);var i=this.flyoutData.dataLoader.GetLoadTimeDataValue("rebatesActive",!1),n=this.flyoutData.dataLoader.GetLoadTimeDataValue("isConfirmationPage",!1),o=this.flyoutData.dataLoader.GetLoadTimeDataValue("rebatesDeactivating",!1),a=this.flyoutData.dataLoader.GetLoadTimeDataValue("activateRebatesStatus",null);return new cs(t,e,i,n,o,this.flyoutData.experimentData,this.flyoutData.common.openedWith,this.flyoutData.common.domain,this.flyoutData.common.popupOrigination,a)}},{key:"GetCouponData",value:(d=e(o().mark((function t(){var e,i,n,a,r,s,l;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.apiResponse){t.next=16;break}if(e=this.flyoutData.dataLoader.GetLoadTimeDataValue("isAutoApplyAvailable",!1),i=this.apiResponse,this.flyoutData.common.isCheckoutPage||this.flyoutData.common.openedWith!==dt.Auto||this.flyoutData.common.popupOrigination!==he.AUTO_SHOW_REBATES_CHECKOUT||!e){t.next=15;break}if(!(n=this.flyoutData.dataLoader.GetLoadTimeDataValue("storage",void 0))){t.next=10;break}r={value:{stringValue:n.isCheckoutPage}},a=r,t.next=13;break;case 10:return t.next=12,this.pageHandlerModule.GetStorageValue("isCheckoutPage");case 12:a=t.sent;case 13:a&&""!==a&&(s=a.value)&&"true"===(null!==(l=s.stringValue)&&void 0!==l?l:null)&&(this.flyoutData.common.isCheckoutPage=!0);case 15:return t.abrupt("return",new Ss(i,e,this.flyoutData));case 16:return t.abrupt("return",void 0);case 17:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)})},{key:"GetExclusiveCouponData",value:(u=e(o().mark((function t(){var e,i,n,a,r,s,l,c,u,d;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.flyoutData.experimentData.isExperimentActive(fe.youtubeCoupons)){t.next=21;break}return t.next=3,this.pageHandlerModule.GetStorageValue("CanSaveExclusiveCoupons");case 3:if(e=t.sent,i=null,e&&""!==e&&(n=e.value)&&(i=null!==(a=n.boolValue)&&void 0!==a?a:null),null!==i&&!0!==i){t.next=21;break}return r="exclusiveCoupons",null===i&&(this.pageHandlerModule.SetStorageValue(r,new ls),r="".concat(r,"Temp")),t.next=11,this.pageHandlerModule.GetStorageValue(r);case 11:if(!(s=t.sent)||""===s){t.next=21;break}if(!(l=s)){t.next=21;break}if(!((c=this.deserializeStorageData(null==l?void 0:l.value))&&c.length>0)){t.next=21;break}return(u=this.flyoutData.common.domain)||(u=this.flyoutData.common.lastCommittedURL)&&-1!==(u=(u=u.replace("http://www.","")).replace("https://www.","")).indexOf("/")&&(u=u.substring(0,u.indexOf("/"))),d=new As(c,u,i),t.abrupt("return",Promise.resolve(d));case 21:return t.abrupt("return",Promise.resolve(void 0));case 22:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)})},{key:"GetPinterestData",value:(c=e(o().mark((function t(){var e,i,n,a,r,s,l;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.flyoutData.dataLoader.GetLoadTimeDataValue("storage",void 0))){t.next=6;break}n={value:{stringValue:e.pinterestProductLink}},i=n,t.next=9;break;case 6:return t.next=8,this.pageHandlerModule.GetStorageValue("pinterestProductLink");case 8:i=t.sent;case 9:if(!i||""===i){t.next=15;break}if(!(a=i)){t.next=15;break}return s=null===(r=Ir.Create(null==a?void 0:a.value))||void 0===r?void 0:r.stringValue,l=new Bs(s),t.abrupt("return",Promise.resolve(l));case 15:return t.abrupt("return",Promise.resolve(void 0));case 16:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})},{key:"deserializeStorageData",value:function(t){var e,i=null===(e=Ir.Create(t))||void 0===e?void 0:e.stringValue;if(i)return JSON.parse(i)}},{key:"GetPriceComparisonData",value:function(){var t=this.flyoutData.dataLoader.GetLoadTimeDataValue("comparableOffers",void 0),e=this.flyoutData.dataLoader.GetLoadTimeDataValue("price",void 0),i=this.flyoutData.dataLoader.GetLoadTimeDataValue("extracted_entity",void 0);return new Gs(t,e,i,this.flyoutData.common.openedWith,this.flyoutData.common.popupOrigination)}},{key:"GetPriceHistoryData",value:function(){var t,e=this.flyoutData.dataLoader.GetLoadTimeDataValue("priceHistory",void 0);if(e&&e.priceHistoryData&&e.productDetails){var i=this.flyoutData.dataLoader.GetLoadTimeDataValue("price",void 0),n=this.flyoutData.dataLoader.GetLoadTimeDataValue("base64ProductImage",void 0);t=new Wr(e,i,n,this.flyoutData.common.domain,this.flyoutData.experimentData)}if(!(t&&t.DailyPrices.length<=1))return t}},{key:"GetCheckoutUserData",value:(l=e(o().mark((function t(){var e,i,n,a,r,s,l,c,u,d,h;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.flyoutData.common.currentDevice!==st.Desktop||!this.flyoutData.experimentData.isExperimentActive(fe.expressCheckout)){t.next=27;break}if(t.prev=1,!this.IsExpressCheckout(this.apiResponse)){t.next=22;break}if(e=[],i=[],!this.flyoutData.dataLoader.GetLoadTimeDataValue(ot.AutofillProfileEnabled,!0)){t.next=12;break}return t.next=10,this.GetProfilesData().catch((function(t){}));case 10:if(i=t.sent){n=Al(i);try{for(n.s();!(a=n.n()).done;)r=a.value,this.IsValidProfile(r)&&e.push(r)}catch(t){n.e(t)}finally{n.f()}}case 12:if(s=[],l=[],!this.flyoutData.dataLoader.GetLoadTimeDataValue(ot.AutofillCreditCardEnabled,!0)){t.next=20;break}return t.next=18,this.GetPaymentsData().catch((function(t){}));case 18:if(l=t.sent){c=Al(l);try{for(c.s();!(u=c.n()).done;)(d=u.value).Guid&&d.MaskedCardNumber&&d.ExpMonth&&d.ExpYear&&d.FullName&&s.push(d)}catch(t){c.e(t)}finally{c.f()}}case 20:return h=e.length>0&&s.length>0&&this.flyoutData.experimentData.isExperimentActive(fe.expressCheckoutFillDetails),t.abrupt("return",new us(i,l,e,s,h));case 22:t.next=27;break;case 24:t.prev=24,t.t0=t.catch(1);case 27:return t.abrupt("return",void 0);case 28:case"end":return t.stop()}}),t,this,[[1,24]])}))),function(){return l.apply(this,arguments)})},{key:"IsValidProfile",value:function(t){if(t.City&&t.FullName&&t.FirstName&&t.LastName&&t.Country&&t.State&&t.Zip&&t.Guid&&t.AddressLines&&"US"===t.Country.toUpperCase()&&t.Emails&&t.Emails.length>0&&t.PhoneNumbers&&t.PhoneNumbers.length>0){var e=!1,i=t.AddressLines.split("\n");if(i.length>=1&&i[0].trim().length>0&&(e=!0),!e)return!1;var n=t.PhoneNumbers[0],o=!1;if(n){var a=n.replace(/\D/g,"");a&&a.length>=10&&(o=!0)}if(!o)return!1;var r=t.Emails[0],s=!1;if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)&&(s=!0),!s)return!1;var l=!1,c=ge(t.State);return t.Zip.length>=5&&/^\d+$/.test(t.Zip.substr(0,5))&&c[1]&&me(t.Zip,c[0])&&(l=!0),!!l}return!1}},{key:"GetRatingsAndReviewsData",value:function(){var t=this.flyoutData.dataLoader.GetLoadTimeDataValue("ratingReview",void 0),e=this.flyoutData.dataLoader.GetLoadTimeDataValue("extracted_entity",void 0);return cl.create(t,e)}},{key:"GetNudgeTipsData",value:function(){try{if(this.apiResponse){var t=this.apiResponse.retailerData;if(t){var e=t.tips,i=[];if(e){var n,o=Al(e);try{for(o.s();!(n=o.n()).done;){var a=n.value;a&&i.push(new pl(a.text,a.iconType,a.minimumPurchase,t,t.checkoutPageUrl))}}catch(t){o.e(t)}finally{o.f()}}return new Ms(i)}}}catch(t){}}},{key:"GetProfilesData",value:(a=e(o().mark((function t(){var e,i,n,a,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.pageHandlerModule.GetProfilesData().catch((function(t){return Promise.reject("unable to find profiles.")}));case 2:if(e=t.sent,i=[],!(e&&e.length>0)){t.next=11;break}n=Al(e);try{for(n.s();!(a=n.n()).done;)(r=a.value)&&i.push(new js(r))}catch(t){n.e(t)}finally{n.f()}return t.abrupt("return",Promise.resolve(i));case 11:return t.abrupt("return",Promise.reject("can not find profiles"));case 12:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"GetPaymentsData",value:(n=e(o().mark((function t(){var e,i,n,a,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.pageHandlerModule.GetPaymentsData().catch((function(t){return Promise.reject("unable to find payments.")}));case 2:if(e=t.sent,i=[],!e){t.next=11;break}n=Al(e);try{for(n.s();!(a=n.n()).done;)(r=a.value)&&i.push(new _s(r))}catch(t){n.e(t)}finally{n.f()}return t.abrupt("return",Promise.resolve(i));case 11:return t.abrupt("return",Promise.reject("can not find payments"));case 12:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"GetProductHistoryData",value:function(){var t=this.flyoutData.dataLoader.GetLoadTimeDataValue("webAssistEntities",void 0),e=[];return t&&t.length>0&&t.forEach((function(t){var i=new Ws(t);i.domain&&i.entity.price&&i.title&&e.push(i)})),e}},{key:"GetRewardData",value:function(){try{if(this.apiResponse){var t=this.apiResponse.rewards,e=this.flyoutData.dataLoader.GetLoadTimeDataValue("activateRewardsStatus",null);if(t)return new ul(t,e,this.flyoutData.common.openedWith,this.flyoutData.experimentData)}}catch(t){}}},{key:"GetTopRetailerData",value:function(){try{if(this.apiResponse){var t=this.apiResponse.cashback;if(t)return new yl(t)}}catch(t){}}},{key:"GetGroceryCouponsData",value:function(){try{if(this.apiResponse)if(this.apiResponse.groceryOffers)return new Ps(this.apiResponse)}catch(t){}}},{key:"createDataWithErrorHandling",value:(i=e(o().mark((function t(e){var i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,t.t0=e,t.next=t.t0===yt.CASHBACK?4:t.t0===yt.COUPON?6:t.t0===yt.PRICECOMPARISON?10:t.t0===yt.PRICEHISTORY?12:t.t0===yt.NUDGETIPSDATA?14:t.t0===yt.CHECKOUTAUTOFILL?16:t.t0===yt.RATINGSANDREVIEWS?20:t.t0===yt.PRODUCTHISTORY?22:t.t0===yt.REWARD?24:t.t0===yt.PAYMENT_OPTIONS?26:t.t0===yt.EXCLUSIVECOUPONS?28:t.t0===yt.VIRTUAL_CARD?31:t.t0===yt.TOP_RETAILERS?33:t.t0===yt.GROCERY_COUPON?35:t.t0===yt.ORDERSTATUSTRACKING?37:t.t0===yt.ViewedProductPriceDrop?39:t.t0===yt.SUSTAINABILITY?40:t.t0===yt.PINTEREST?42:46;break;case 4:return this.flyoutData.dataStoreModule.CashBackData=this.GetCashBackData(),t.abrupt("break",46);case 6:return t.next=8,this.GetCouponData();case 8:return this.flyoutData.dataStoreModule.CouponData=t.sent,t.abrupt("break",46);case 10:return this.flyoutData.dataStoreModule.PriceComparisonData=this.GetPriceComparisonData(),t.abrupt("break",46);case 12:return this.flyoutData.dataStoreModule.PriceHistoryData=this.GetPriceHistoryData(),t.abrupt("break",46);case 14:return this.flyoutData.dataStoreModule.NudgeTipsData=this.GetNudgeTipsData(),t.abrupt("break",46);case 16:return t.next=18,this.GetCheckoutUserData();case 18:return this.flyoutData.dataStoreModule.CheckoutUserData=t.sent,t.abrupt("break",46);case 20:return this.flyoutData.dataStoreModule.RatingsAndReviewsData=this.GetRatingsAndReviewsData(),t.abrupt("break",46);case 22:return this.flyoutData.dataStoreModule.ProductHistoryData=this.GetProductHistoryData(),t.abrupt("break",46);case 24:return this.flyoutData.dataStoreModule.RewardData=this.GetRewardData(),t.abrupt("break",46);case 26:return this.flyoutData.dataStoreModule.PaymentOptionsData=this.GetPaymentOptionsData(),t.abrupt("break",46);case 28:return t.next=30,this.GetExclusiveCouponData();case 30:this.flyoutData.dataStoreModule.ExclusiveCouponsData=t.sent;case 31:return this.flyoutData.dataStoreModule.VirtualCardData=this.GetVirtualCardData(),t.abrupt("break",46);case 33:return this.flyoutData.dataStoreModule.TopRetailerData=this.GetTopRetailerData(),t.abrupt("break",46);case 35:return this.flyoutData.dataStoreModule.GroceryCouponData=this.GetGroceryCouponsData(),t.abrupt("break",46);case 37:return this.flyoutData.dataStoreModule.OrderTrackingData=this.GetOrderTrackingData(),t.abrupt("break",46);case 39:this.flyoutData.dataStoreModule.ViewedProductListData=this.GetViewedProductPriceDropData();case 40:return this.flyoutData.dataStoreModule.SustainabilityData=this.GetSustainabilityData(),t.abrupt("break",46);case 42:return t.next=44,this.GetPinterestData();case 44:return this.flyoutData.dataStoreModule.PinterestData=t.sent,t.abrupt("break",46);case 46:t.next=52;break;case 48:t.prev=48,t.t1=t.catch(0),i=new L(A.OnErrorInvoked),this.logModule.LogErrorEvent(S.EdgeFlyoutStatus,"Data creation Exception: ".concat(e," ").concat(ss.getErrorString(t.t1)),i);case 52:case"end":return t.stop()}}),t,this,[[0,48]])}))),function(t){return i.apply(this,arguments)})},{key:"GetViewedProductPriceDropData",value:function(){try{var t=this.flyoutData.dataLoader.GetLoadTimeDataValue("notification_data",void 0);if(t)return new xl(t)}catch(t){}}},{key:"GetSustainabilityData",value:function(){if(this.apiResponse){var t=this.apiResponse.shouldRenderSustainability;if(t)return new dl(t,this.flyoutData.experimentData)}}},{key:"GetOrderTrackingData",value:function(){try{var t=[],e=this.flyoutData.dataLoader.GetLoadTimeDataValue(ot.PackageTrackingFreShown,void 0),i=this.flyoutData.dataLoader.GetLoadTimeDataValue(ot.PackageTrackingUserConsented,void 0),n=this.flyoutData.dataLoader.GetLoadTimeDataValue(ot.PackageTrackerResponse,void 0),o=this.flyoutData.dataLoader.GetLoadTimeDataValue(ot.ShouldShowPackageTrackingNotification,void 0);if(n&&n.length>0){var a,r=Al(n);try{for(r.s();!(a=r.n()).done;){var s=a.value,l=null==s?void 0:s.listOfProducts,c=[];if(l){var u,d=Al(l);try{for(d.s();!(u=d.n()).done;){var h=u.value;h&&c.push(new Ks(h.productImageUrl,h.productName))}}catch(t){d.e(t)}finally{d.f()}}s&&t.push(new Ns(s,c))}}catch(t){r.e(t)}finally{r.f()}}return new Ls(e,i,t,o)}catch(t){}}},{key:"IsExpressCheckout",value:function(t){if(t&&t.checkoutData&&t.checkoutData.isExpressCheckoutEnabled){var e,i=null===(e=this.flyoutData.dataStoreModule.CouponData)||void 0===e?void 0:e.Coupons,n=this.flyoutData.common.pageStatus.ExpressCheckoutStatus&&(!this.flyoutData.common.pageStatus.AutoApplyStatus||!(i&&i.length>0))&&void 0===this.flyoutData.common.edgeDriverDataForFlyout,o=this.flyoutData.common.edgeDriverDataForFlyout&&this.flyoutData.common.edgeDriverDataForFlyout.is_auto_apply_completed&&this.flyoutData.common.edgeDriverDataForFlyout.express_checkout_status;return n||o}return!1}},{key:"getDomainNameFromUrl",value:function(t){try{var e,i=new URL(t);return i&&i.hostname&&(e=this.getDomainNameFromHostname(i.hostname)),e}catch(t){}return null}},{key:"getDomainNameFromHostname",value:function(t){if(!t)return"";var e=t.toLowerCase().match(/(w){3}.?\./);return e&&null!=e.index&&e[0]?t.substring(e.index+e[0].length):t}},{key:"GetPaymentOptionsData",value:function(){var t=this.flyoutData.dataLoader.GetLoadTimeDataValue("paymentOptions",void 0),e=[];return t&&t.length>0&&t.forEach((function(t){e.push(new Fs(t))})),e}},{key:"GetVirtualCardData",value:function(){var t=this.flyoutData.dataLoader.GetLoadTimeDataValue("virtualCard",void 0);return new El(t)}}]),t}(),Dl=Il,wl=r((function t(){s(this,t),f(this,"CouponData",void 0),f(this,"PriceComparisonData",void 0),f(this,"PriceHistoryData",void 0),f(this,"CashBackData",void 0),f(this,"ApiData",void 0),f(this,"CheckoutUserData",void 0),f(this,"NudgeTipsData",void 0),f(this,"RatingsAndReviewsData",void 0),f(this,"ProductHistoryData",void 0),f(this,"RewardData",void 0),f(this,"PaymentOptionsData",void 0),f(this,"ExclusiveCouponsData",void 0),f(this,"OrderTrackingData",void 0),f(this,"VirtualCardData",void 0),f(this,"SustainabilityData",void 0),f(this,"TopRetailerData",void 0),f(this,"GroceryCouponData",void 0),f(this,"ViewedProductListData",void 0),f(this,"PinterestData",void 0),f(this,"SimilarSellerData",void 0)})),kl=r((function t(){s(this,t),f(this,"name",void 0),f(this,"supported",void 0),f(this,"variant",void 0)})),Rl=function(){function t(){s(this,t),f(this,"experiments",void 0),f(this,"experimentsSet",void 0),f(this,"enablePCBannerUX",!1),this.experiments=new Map,this.experimentsSet=new Set}return r(t,[{key:"Create",value:function(t){var e=this,i=new Map;if(t&&t.length>0){var n=Object.values(fe);t.forEach((function(t){var o,a=new kl;a.name=t.name,a.supported=!1,(null===(o=t.params)||void 0===o?void 0:o.length)>0&&(a.variant=t.params[0].value),n.includes(t.name)&&(a.supported=!0,e.experimentsSet.add(t.name)),i.set(a.name,a)}))}this.experiments=i}},{key:"CreateFromJsonStr",value:function(t){try{if(t){var e=JSON.parse(t);this.Create(e)}}catch(t){}}},{key:"isExperimentActive",value:function(t){return this.experimentsSet.has(t)}},{key:"setShowPCBannerUX",value:function(t,e,i,n){this.enablePCBannerUX=void 0!==t&&t||void 0!==e&&e&&void 0!==i&&i.CompetingPrices&&i.CompetingPrices.length>0&&void 0!==n&&n}},{key:"isPCBannerUXExperimentActive",value:function(){return(this.experimentsSet.has(fe.pcBannerUXExperimentation1)||this.experimentsSet.has(fe.pcBannerUXExperimentation2)||this.experimentsSet.has(fe.pcBannerUXExperimentation3)||this.experimentsSet.has(fe.pcBannerUXExperimentation4)||this.experimentsSet.has(fe.pcBannerUXExperimentation5)||this.experimentsSet.has(fe.pcBannerUXExperimentation6))&&this.enablePCBannerUX}},{key:"isVariantActive",value:function(t,e){var i;return!!this.isExperimentActive(t)&&(null===(i=this.experiments.get(t))||void 0===i?void 0:i.variant)===e}}]),t}(),Ol=function(){function t(e){s(this,t),f(this,"couponEmptyCouponSubTitle","We couldn't find any coupons at this time."),f(this,"couponEmptyCouponTitle","Check back for coupons!"),f(this,"couponAutoApplyButton","Try all Coupons"),f(this,"couponAutoApplyButtonAlt","Apply Coupons"),f(this,"mergedAutoApplyButton","Try all coupons and activate cash back"),f(this,"pcBestPriceHeader","You have the best price!"),f(this,"pcBestPriceRefreshHeader","You have the $1"),f(this,"pcBestPriceTitle","Best Price"),f(this,"pcLowest","Lowest"),f(this,"pcLowestUpdated","Lowest Price"),f(this,"pcNotificationSeeMoreInfo","See more info"),f(this,"pcNotificationVisitItem","Visit item"),f(this,"commonCMAutoShowDisable","Don't show this automatically"),f(this,"commonCMAutoShowEnable","Show this flyout automatically"),f(this,"commonSnoozeShopping","Snooze shopping notifications"),f(this,"turnOffSnooze","Turn off snooze"),f(this,"snoozeTooltip","Snooze"),f(this,"remindLater","Remind me later"),f(this,"commonCMManage","Manage Settings"),f(this,"commonAltSettings","Settings and more"),f(this,"commonMoreOptionsLabel","More options"),f(this,"commonContextualTab","Shopping assistant"),f(this,"commonHomeTab","Discover"),f(this,"commonErrorTitle","It's not you, it's us"),f(this,"commonErrorSubTitle","We will be back soon"),f(this,"commonLearnMore","Learn more"),f(this,"commonSave","Save $1"),f(this,"commonMicrosoftRewards","Microsoft Rewards"),f(this,"commonAriaLogo","$1 logo"),f(this,"commonGotIt","Got it"),f(this,"couponCopied","Copied"),f(this,"couponCopyLabel","Copy code"),f(this,"couponCopyLabelRefresh","Copy"),f(this,"couponSectionTitle","1 coupon"),f(this,"couponTitle","Coupons found!"),f(this,"couponTitleWithNum","$1 Coupons found!"),f(this,"couponTitleWithNumSingular","1 Coupon found!"),f(this,"couponExpandableTitleWithNum","$1 coupons found"),f(this,"couponExpandableTitleWithNumSingular","1 coupon found"),f(this,"couponExpandableTitleViewCoupons","View coupons"),f(this,"couponAutoApplyWithoutCB","Try all coupons without cash back"),f(this,"commonFixedTitle","Shopping in Microsoft Edge"),f(this,"commonMicrosoftPolicy","Microsoft Privacy Statement"),f(this,"thirdPartCookiesText","third-party cookies"),f(this,"commonClose","Close"),f(this,"snoozeButton","Snooze"),f(this,"ariaSnoozeOn","Snooze On"),f(this,"ariaSnoozeoff","Snooze Off"),f(this,"pcPriceSectionTitle","Compare with other retailers"),f(this,"pcProductImage","Product Image"),f(this,"cbActivateButtonRefresh","Activate now"),f(this,"cbBingActivateButton","Join now and activate cash back"),f(this,"cbActivatedButton","Cash back is activated!"),f(this,"cbLearnMore","See offer details on Bing Rebates"),f(this,"cbConfirmationTitle","Thanks for shopping with Bing Rebates!"),f(this,"cbTopRetailerTitle","Popular cash back partners"),f(this,"pcbConfirmationTitle","You can earn up to $1 cash back with $2"),f(this,"pcbBingRebates","Bing Rebates!"),f(this,"cbAutoShowTitle","Get cash back"),f(this,"cbAutoShowButtonMessage","Activate up to $1 cashback"),f(this,"cbConfirmationMessage","You'll get cash back for any eligible purchases. We'll let you know in the next few days."),f(this,"pcbConfirmationMessage","The funds can be redeemed within 90 days, when the sale is confirmed. We’ll email you to let you know if it’s available"),f(this,"cbTurnedOffTitle","Bing Rebates was turned off for this purchase"),f(this,"cbTurnedOffMessage","Sometimes this happens when you use another coupon or rebates service. But you can easily turn it back on to earn cash back."),f(this,"cbEnableRebatesButton","Activate Bing Rebates"),f(this,"cbDontFindAutomatically","Don't find rebates automatically"),f(this,"cbFindAutomatically","Show rebates when available"),f(this,"notificationPrivacyTitle","Microsoft Edge may remind you of products you’ve visited to help you save time and money."),f(this,"notificationPrivacyDesc","If you are shopping in InPrivate mode, you will never be reminded about products you visit. If you wish to turn off reminders for a product, you can click ‘Don’t remind me again for this product’ (below). Additional controls can be found under the ‘…’ menu at the top right of this popup. If you wish to disable Shopping in Microsoft Edge entirely, you can visit ‘Manage Edge Shopping’."),f(this,"reminderDisabled","Disable shopping reminders"),f(this,"reminderEnabled","Enable shopping reminders"),f(this,"reminderInfoButtonName","Learn more about product reminders"),f(this,"cbPreviousTransactions","Previous transactions"),f(this,"cbRebatesOff","off"),f(this,"cbRebatesOn","on"),f(this,"cbNonStackableCoupon","This coupon can't be used with Bing Rebates"),f(this,"cbRetailerTitle","Up to $1 cash back"),f(this,"cbSnapshotTitle","Your Bing Rebates snapshot"),f(this,"cbViewAccount","View account activity"),f(this,"cbCurrBalance","current balance"),f(this,"cbErrorMessage","Cash back activation failed"),f(this,"cbProcessing","Processing"),f(this,"cbPrivacyMessage","You will join and receive emails about $1, which include offers about partner products."),f(this,"cbPrivacyMessageTerm","Terms | Privacy & Cookies"),f(this,"cbMergedSingularTitle","We found 1 coupon and up to $2 cash back!"),f(this,"cbPromotionsOnSubHeader","on first eligible purchase!"),f(this,"trSectionTitle","Popular cashback partners"),f(this,"bannerFoundBestPrice","We've found |a better| price!"),f(this,"bannerFoundBestPriceAlt","We found you a better price!"),f(this,"bannerYouHaveBestPrice","You have |the best price!|"),f(this,"bannerSubTitleFlyout","Click below to copy a coupon code, or we can help auto apply at check out!"),f(this,"bannerShowPriceHistory","Show price history"),f(this,"bannerSeeDetails","See details"),f(this,"bannerViewAll","View all"),f(this,"bannerVisitItem","Visit item in new tab"),f(this,"bannerViewAllCouponsSingular","View coupon"),f(this,"getDeal","Get Deal"),f(this,"dealsTitle","Trending deals on $1"),f(this,"dealsSubTitle","Best deals for you on $1"),f(this,"phTitlePriceDropped","The price on this product has dropped!"),f(this,"phTitlePriceIncrease","The price on this product has increased"),f(this,"phTitleStable","The price on this product is stable"),f(this,"phToday","today"),f(this,"phLow","low"),f(this,"phHigh","high"),f(this,"phMedian","median"),f(this,"phStableLabel","stable"),f(this,"phPriceDrop","Price drop"),f(this,"phPriceIncrease","Price increase"),f(this,"phPriceStable","Price stable"),f(this,"phOldPrice","Old price"),f(this,"phNewPrice","New price"),f(this,"phGraphLabel","The price has not fluctuated much. Today price is $1"),f(this,"phTooltipText","Price drop/increase is determined by >= 2% change from the historical median price ($1) seen by users for this product."),f(this,"rrExpertAndVideoReviews","Expert reviews and related videos"),f(this,"rrExpertReviews","Expert reviews"),f(this,"rrVideoReviews","Related videos"),f(this,"checkoutCreditOrDebitCardDropDown","Choose a different Credit or Debit card:"),f(this,"checkoutShippingAddress","Shipping address:"),f(this,"checkoutPaymentInfo","Payment info:"),f(this,"checkoutSameBilling","Billing address is same as shipping address"),f(this,"checkoutFillOnly","Quick and easy checkout"),f(this,"checkoutButtonWithoutAA","Fill details"),f(this,"checkoutButtonWithoutAAForOtherPayment","Fill details and checkout with $1"),f(this,"checkoutSectionTitle","Autofill checkout details"),f(this,"checkoutAddressSectionTitle","Autofill address details"),f(this,"checkoutPaymentSectionTitle","Autofill payment details"),f(this,"checkoutValidTill","valid till"),f(this,"checkoutZip","ZIP"),f(this,"ytSectionTitleOnRetailer","Saved from YouTube"),f(this,"ytHeader","We saved $1 exclusive coupons from $2"),f(this,"ytHeaderSingular","We saved 1 exclusive coupon from $2"),f(this,"ytHeaderPermission","We found $1 exclusive coupons from $2"),f(this,"ytHeaderPermissionSingular","We found 1 exclusive coupon from $2"),f(this,"ytPhotoLabel","Profile picture for $1"),f(this,"ytMoreCoupons","More coupons from Youtube"),f(this,"ytSectionTitleOnYoutube","Your coupons from Youtube"),f(this,"ytShopOn","Shop on $1"),f(this,"ytSaveCouponsPermission","Save coupons for me"),f(this,"ytDontSaveCouponsPermission","Never save coupons from Youtube"),f(this,"prodHSectionTitle","Your recently viewed items"),f(this,"prodHPriceDropRefresh","$1 price drop"),f(this,"prodHPriceIncreaseRefresh","$1 price increase"),f(this,"prodHPriceDropTitle","Price drop on recently viewed item"),f(this,"prodHPriceDropSave","Save "),f(this,"prodHPriceDropDonotRemindMe","Don’t remind me again for this product"),f(this,"prodHPriceDropViewAt","View at $1"),f(this,"prodHAnnotation","was $1"),f(this,"prodHDeleteItem","delete item"),f(this,"similarSellerNotificationError","Failed to add product!"),f(this,"similarSellerStringCollapsedAmazon","Other Amazon sellers found!"),f(this,"similarSellerStringCollapsed","Other sellers found!"),f(this,"similarSellerAddToCartTitle","Add to cart"),f(this,"similarSellerAddedToCartTitle","Added to cart"),f(this,"similarSellerShipFromString","Ship from:"),f(this,"similarSellerRatingLabel","Rating:"),f(this,"similarSellerFreeDelivery","FREE Delivery"),f(this,"tipsTiltleSingle","1 tip found!"),f(this,"tipsSubTitleSingle","1 tip found"),f(this,"paymentOptionLabel","More payment options at checkout"),f(this,"microsoftWalletLinkText","Microsoft Wallet"),f(this,"virtualCardBillingInfoHeader","Your name & billing address"),f(this,"virtualCardNumberHeader","Virtual card number"),f(this,"virtualCardExpirationHeader","Expiration"),f(this,"virtualCardCVCHeader","CVC"),f(this,"visualizedCardHolderHeader","Card Holder"),f(this,"visualizedCardExpiresHeader","Expires"),f(this,"showContentToggleTooltip","Show content"),f(this,"hideContentToggleTooltip","Hide content"),f(this,"copyButtonTooltip","Copy"),f(this,"virtualCardSystemFailureHeader","Uh oh"),f(this,"zipPayPayment","Zip"),f(this,"buyNowPayLater","Buy now, pay later"),f(this,"masterCardPayment","Master"),f(this,"visaPayment","Visa"),f(this,"amexPayment","American Express"),f(this,"discoverPayment","Discover"),f(this,"disablePackageTrackingFromMenuText","Disable order tracking"),f(this,"enablePackageTrackingFromMenuText","Enable order tracking"),f(this,"packageTrackingOptInButtonText","Track my Orders"),f(this,"packageTrackingOptOutButtonText","Stop tracking my orders"),f(this,"packageTrackingTitle","Order tracking is Off"),f(this,"packageTrackingNotificationTitle","Track your orders now!"),f(this,"packageTrackingNotificationDescription","With order tracking we will automatically keep your order status from top sites up to date."),f(this,"checkBackForOrders","Check back for orders!"),f(this,"deteTrackerText","Delete order tracker"),f(this,"rewardGiftConsentSubtext","Offer valid for 1 per person/account within first 14 days of joining Microsoft Rewards."),f(this,"rewardsPrivacyText","Privacy"),f(this,"rewardsTermsText","Terms"),f(this,"giftCardDismiss","Don't show this again"),f(this,"productDetailsOrderTracking","$1 Order containing Products $2!"),f(this,"feedbackPrompt","Do you find this content useful?"),f(this,"feedbackThanks","Thanks for your feedback!"),f(this,"feedbackAriaLike","Thumbs up"),f(this,"feedbackAriaDislike","Thumbs down"),f(this,"feedbackAriaClose","Close feedback"),f(this,"attCouponHeaderLocked","Unlock a better deal!"),f(this,"attCouponHeaderUnlocked","Unlocked better deal!"),f(this,"autosMarketplaceSectionTitle","Auto Marketplace listings"),f(this,"autosMarketplaceHeader","Other cars you might like!"),f(this,"autosMarketplaceDisclaimer","Microsoft Edge can help you find your next car! The recommendations we offer are based on the model of car you're looking for, year, mileage, and price. Our suggestions only include cars that have no reported accidents."),f(this,"autosMarketplaceSeeMoreLink","See more on MSN Autos"),f(this,"autosMarketplaceNotificationHeader","A car you might like!"),f(this,"autosMarketplaceSeeMoreButton","See more"),f(this,"autosMarketplaceSeeThisCar","See this car"),f(this,"cbMainTitleOff","Get up to $1 cash back"),f(this,"pcbMainTitleOff","Get $1 cash back with Bing Rebates!"),f(this,"cbMainTitleOn","You're earning up to $1 cash back!"),f(this,"cbMainTitleOnStoreWide","You're earning up to $1 cash back storewide!"),f(this,"cbPersonalized","You're earning $1 cash back with Bing Rebates!"),f(this,"cbTitleSignInOn","You're earning up to $1 cash back with Bing Rebates!"),f(this,"cbPromotionsSubTitle","And up to $1 cash back"),f(this,"cbPromotionsSubTitleStoreWide","And up to $1 cash back storewide"),f(this,"cbCashBackOnOff","Cash back is $1"),f(this,"cbLifetimeEarned","Lifetime earned $1"),f(this,"cbToolTips","Edge Shopping is powered by Bing Rebates, part of Microsoft Rewards."),f(this,"bannerFoundCoupons","We've found |$1 coupons| for this site!"),f(this,"bannerFoundCouponsSingular","We've found |1 coupon| for this site!"),f(this,"bannerPriceDropTitle","There was a |$1 price drop| for this product"),f(this,"bannerPriceIncreaseTitle","There was a |$1 price increase| for this product"),f(this,"bannerPriceStableTitle","There have been |no drastic price changes| for this product"),f(this,"bannerCouponSingularTitle","Shoppers save money |$1%| of the time with this coupon"),f(this,"bannerCouponPluralTitle","Shoppers save money |$1%| of the time with these coupons"),f(this,"bannerCashBackOffTitle","You could be earning |$1 cash back!|"),f(this,"bannerCashBackOnTitle","|Cash back is on!| You're earning up to $1 cash back!"),f(this,"bannerRecentPurchase","You earned $1$2 from a recent purchase!"),f(this,"bannerLifetime","Lifetime earned: $1$2"),f(this,"microsoftWalletManage","Manage payment info in $1"),f(this,"phPriceStableRefresh","Price is*br*$1"),f(this,"ptCouponsTitle","$1 coupons found on $2"),f(this,"ptCouponsTitleSingular","1 coupon found on $1"),f(this,"privacyConsent","I consent to the placement of cookies on my browser to facilitate billing with the coupon provider as per $1"),f(this,"privacyConsentNew","I allow placing of $1 on my device to help billing with the coupon provider as per $2"),f(this,"rewardGiftCardConsent","You will receive emails about Microsoft Rewards, which include offers about Microsoft and partner products. $1 | $2"),f(this,"rewardsjoinAckText","Keep shopping on Microsoft Edge for more savings and deals $1"),f(this,"sectionSeeMore","See more ($1)"),f(this,"couponSectionPluralTitle","$1 coupons"),f(this,"couponSuccessful","$1% successful"),f(this,"triviaTitleNew","On average our users save $2 on $1"),f(this,"orderTrackingTitle","My Orders"),f(this,"clippingMainTitle","Save $1 with this coupon"),f(this,"clippingSubTitle","Click below to save |$1%| on this item at checkout"),f(this,"defaultClippingTitle","Save money with this coupon"),f(this,"defaultClippingSubTitle","Click below to save on this item at checkout"),f(this,"clippingButtonTitle","Clip coupon"),f(this,"clippedTitle","You will save $1 on this item at checkout"),f(this,"clippedSubTitle","Coupon successfully clipped"),f(this,"clippingMainTitleEnGb","Save $1 with this voucher"),f(this,"defaultClippingTitleEnGb","Save money with this voucher"),f(this,"clippingButtonTitleEnGb","Collect voucher"),f(this,"clippedSubTitleEnGb","Voucher successfully collected"),f(this,"bannerSave","Save $1 at $2"),f(this,"bannerViewAllCoupons","View all $1 coupons"),f(this,"phFinalDrop","$1% drop"),f(this,"phFinalIncrease","$1% increase"),f(this,"pcNotificationTitle","You can save $1"),f(this,"commonYouCanSave","You can save"),f(this,"pcNotificationTitleRefresh","You could save *br*$1!"),f(this,"pcNotificationNarratorIntro","New toolbar on screen. "),f(this,"viewMorePricesButtonText","View more prices"),f(this,"savingsHeader","You can save $1"),f(this,"pcLowestPriceAria","$1, current price on $2"),f(this,"pcCurrentPriceAria","$1, higher price on this page"),f(this,"trAriaLabel","$1 cash back at $2, shop now!"),f(this,"cbPromotionsTitle","Earn $1 bonus from Microsoft"),f(this,"cbExpiryDateTime","ends in $1"),f(this,"cbCommissionStr","$1 Cash back"),f(this,"cbPreviousCashbackDomain","Cash back earned on $1 from $2"),f(this,"cbMergedTitle","We found $1 coupons and up to $2 cash back!"),f(this,"rewardFailedSignin","Sign in Unsuccessful"),f(this,"rewardTitleDefault","Get Microsoft Rewards"),f(this,"rewardTitleEarnedMaximum","You've earned 5000 points!"),f(this,"rewardTitleRewardsAdded","You've Earned $1 points!"),f(this,"rewardTitleRewardTwo","Save $$ and earn rewards!"),f(this,"rewardPointMax","5000"),f(this,"rewardPerMaxPoint","/5000"),f(this,"rewardDetail","Activate cash back and get |$1 points!|"),f(this,"rewardDetailFirstLine","Activate cash back and get "),f(this,"rewardDetailFirstLineBold","$1 points!"),f(this,"rewardKeepExploringText","Keep shopping with Edge to earn more points!"),f(this,"rewardDetailTwo","Click Microsoft Edge’s little blue tag to find"),f(this,"rewardSignIn","Sign in to earn points"),f(this,"rewardRedeem","Redeem"),f(this,"rewardCoupons","Coupons"),f(this,"rewardCashback","Cashback"),f(this,"rewardRewards","Rewards"),f(this,"rewardAssociateSignIn","Sign in"),f(this,"similarSellerStringAmazon","Save $1 if you buy from a different Amazon seller!"),f(this,"similarSellerString","Save $1 if you buy from a different seller!"),f(this,"similarSellerStringSubtitleAmazon","Other Amazon sellers found"),f(this,"similarSellerStringSubtitle","Other sellers found"),f(this,"similarSellerNotificationTitle","You saved $1"),f(this,"sustainabilityDescriptionLight","When you make purchases on Microsoft Edge, Microsoft donates money to reforestation |at no cost to you.|"),f(this,"sustainabilityDescription","Microsoft makes donation to plant trees for purchases made on Edge. You’re making a difference by shopping with us!"),f(this,"sustainabilityString","Microsoft plants trees when you shop!"),f(this,"sustainabilityConfirmationTitle","You’re making a difference by shopping in Edge!"),f(this,"similarSellerAddToCartAriaLable","Add to cart from other seller, Product price: $1, Product condition: $2"),f(this,"tipsMainTitle","$1 tips found!"),f(this,"tipsSubTitle","$1 tips found"),f(this,"tipsFreeShipping","Get free shipping with a minimum purchase of $1"),f(this,"tipsMinimumPurchase","Make a minimum purchase of $1"),f(this,"virtualCardSystemFailureDescription","We are unable to retrieve your virtual card details. Please visit $1 for your virtual card details."),f(this,"virtualCardSystemFailureLink","Visit $1"),f(this,"virtualCardLinkSuccess","We successfully linked your Microsoft account to $1."),f(this,"virtualCardLinkFail","We are unable to link your Microsoft account to $1. Please try again later."),f(this,"cardPaymentOptionBanner","Credit or Debit card"),f(this,"otherPaymentMethodBanner","Other ways to pay"),f(this,"learnMoreLinkAriaLabel","Learn more about $1"),f(this,"dismissMessageAriaLabel","Dismiss this message"),f(this,"virtualCardDetailsActions","Actions"),f(this,"msZipDescription","Microsoft does not charge you or get paid by this provider for the transaction."),f(this,"gcSectionTitle","Grocery coupons"),f(this,"giftCardTitle","Gift Card"),f(this,"giftCardSubtitle","Join Microsoft Rewards and search in Bing for 5 days to get $1.25 Amazon gift card"),f(this,"giftCardSubtitleFiveDollar","Join Microsoft Rewards and search in Bing for 5 days to get $5 Amazon gift card"),f(this,"joinNowButtonText","Join now"),f(this,"maybeLaterButtontext","Maybe later"),f(this,"rewardJoinSuccess","You joined"),f(this,"rewardOfferSuccess","See progress on"),f(this,"attFlyoutLocked","Add $1 to your cart to unlock $2"),f(this,"attFlyoutUnlocked","Congrats! You unlocked the $1 coupon"),f(this,"attTooltipHeader","Get a better deal by adding $1 worth of items you like to your cart."),f(this,"attTooltipText","Once your cart value exceeds $1 we'll show you the next best coupon. At checkout, this coupon will be applied and you'll end up saving more money. *Restrictions may apply.*"),f(this,"pcNotificationdisclaimerText","Compensation was not a factor in the selection of this offer. To view all offers, 'See more info'."),f(this,"pcdisclaimerText","Compensation and relevance influence offer ranking."),f(this,"paneForYou","For You"),f(this,"paneHome","Home"),f(this,"paneNullStateMessage","Visit a shopping site to find savings​ with Microsoft Edge"),f(this,"dataLoader",void 0),this.dataLoader=e}return r(t,[{key:"Create",value:function(t){var e=this.dataLoader;this.commonCMAutoShowDisable=e.GetString("contextMenuAutoShowDisable",this.commonCMAutoShowDisable),this.commonCMAutoShowEnable=e.GetString("contextMenuAutoShowEnable",this.commonCMAutoShowEnable),this.commonSnoozeShopping=e.GetString("commonSnoozeShopping",this.commonSnoozeShopping),this.commonCMManage=e.GetString("contextMenuManage",this.commonCMManage),this.commonMoreOptionsLabel=e.GetString("moreOptionsLabel",this.commonMoreOptionsLabel),this.commonFixedTitle=e.GetString("fixedTitle",this.commonFixedTitle),this.commonMicrosoftPolicy=e.GetString("microsoftPolicy",this.commonMicrosoftPolicy),this.commonLearnMore=e.GetString("learnMore",this.commonLearnMore),this.commonYouCanSave=e.GetString("youCanSave",this.commonYouCanSave),this.commonSave=e.GetString("saveX",this.commonSave),this.commonAltSettings=e.GetString("commonAltSettings",this.commonAltSettings),this.thirdPartCookiesText=e.GetString("thirdPartCookiesText",this.thirdPartCookiesText),this.commonClose=e.GetString("closeLabel",this.commonClose),this.snoozeButton=e.GetString("snoozeEnable",this.snoozeButton),this.turnOffSnooze=e.GetString("snoozeDisable",this.turnOffSnooze),this.remindLater=e.GetString("remindLater",this.remindLater),this.snoozeTooltip=e.GetString("snoozeTooltip",this.snoozeTooltip),this.ariaSnoozeOn=e.GetString("ariaSnoozeOn",this.ariaSnoozeOn),this.ariaSnoozeoff=e.GetString("ariaSnoozeoff",this.ariaSnoozeoff),this.commonContextualTab=e.GetString("tabContextualTitle",this.commonContextualTab),this.commonHomeTab=e.GetString("tabHomeTitle",this.commonHomeTab),this.commonErrorTitle=e.GetString("errorTitle",this.commonErrorTitle),this.commonErrorSubTitle=e.GetString("errorSubTitle",this.commonErrorSubTitle),this.privacyConsentNew=e.GetString("privacyConsentNew",this.privacyConsentNew),this.rewardGiftCardConsent=e.GetString("rewardGiftCardConsent",this.rewardGiftCardConsent),this.rewardsjoinAckText=e.GetString("rewardsjoinAckText",this.rewardsjoinAckText),this.couponEmptyCouponSubTitle=e.GetString("EmptyCouponSubTitle",this.couponEmptyCouponSubTitle),this.couponEmptyCouponTitle=e.GetString("EmptyCouponTitle",this.couponEmptyCouponTitle),this.couponAutoApplyButton=e.GetString("autoApplyButton",this.couponAutoApplyButton),this.couponAutoApplyButtonAlt=e.GetString("autoApplyButtonAlt",this.couponAutoApplyButtonAlt),this.mergedAutoApplyButton=e.GetString("mergedAutoApplyButton",this.mergedAutoApplyButton),this.couponCopied=e.GetString("copyCoupon",this.couponCopied),this.couponCopyLabel=e.GetString("copyCodeLabel",this.couponCopyLabel),this.couponCopyLabelRefresh=e.GetString("copyButtonTooltip",this.couponCopyLabelRefresh),this.couponSectionTitle=e.GetString("couponSectionSingularTitle",this.couponSectionTitle),this.couponTitle=e.GetString("couponTitleNew",this.couponTitle),this.couponTitleWithNum=e.GetString("couponTitleWithNum",this.couponTitleWithNum),this.couponTitleWithNumSingular=e.GetString("couponTitleWithNumSingular",this.couponTitleWithNumSingular),this.pcBestPriceHeader=e.GetString("bestPriceHeader",this.pcBestPriceHeader),this.pcBestPriceRefreshHeader=e.GetString("bestPriceRefreshHeader",this.pcBestPriceRefreshHeader),this.pcNotificationSeeMoreInfo=e.GetString("pcNotificationSeeMoreInfo",this.pcNotificationSeeMoreInfo),this.pcLowest=e.GetString("pcLowest",this.pcLowest),this.pcLowestUpdated=e.GetString("pcLowestUpdated",this.pcLowestUpdated),this.pcNotificationVisitItem=e.GetString("pcNotificationVisitItem",this.pcNotificationVisitItem),this.pcPriceSectionTitle=e.GetString("priceSectionTitle",this.pcPriceSectionTitle),this.pcBestPriceTitle=e.GetString("pcBestPriceTitle",this.pcBestPriceTitle),this.pcProductImage=e.GetString("pcProductImage",this.pcProductImage),this.cbActivateButtonRefresh=e.GetString("activateCashBackButtonRefresh",this.cbActivateButtonRefresh),this.cbActivatedButton=e.GetString("cashBackActivatedButton",this.cbActivatedButton),this.cbLearnMore=e.GetString("learnMoreLabel",this.cbLearnMore),this.cbConfirmationTitle=e.GetString("rebatesThanksMessage",this.cbConfirmationTitle),this.cbTopRetailerTitle=e.GetString("topRetailerTitle",this.cbTopRetailerTitle),this.pcbConfirmationMessage=e.GetString("pcbConfirmationMessage",this.pcbConfirmationMessage),this.pcbConfirmationTitle=e.GetString("pcbConfirmationTitle",this.pcbConfirmationTitle),this.pcbBingRebates=e.GetString("pcbBingRebates",this.pcbBingRebates),this.cbAutoShowTitle=e.GetString("cbAutoShowTitle",this.cbAutoShowTitle),this.cbConfirmationMessage=e.GetString("rebatesProcessingMessage",this.cbConfirmationMessage),this.cbTurnedOffTitle=e.GetString("rebatesTurnedOffMessage",this.cbTurnedOffTitle),this.cbTurnedOffMessage=e.GetString("rebatesTurnedOffNextSteps",this.cbTurnedOffMessage),this.cbEnableRebatesButton=e.GetString("activateRebatesButton",this.cbEnableRebatesButton),this.cbDontFindAutomatically=e.GetString("rebatesDontFindAutomatically",this.cbDontFindAutomatically),this.cbFindAutomatically=e.GetString("rebatesFindAutomatically",this.cbFindAutomatically),this.cbPreviousTransactions=e.GetString("rebatesSeeMore",this.cbPreviousTransactions),this.reminderInfoButtonName=e.GetString("reminderInfoButtonName",this.reminderInfoButtonName),this.notificationPrivacyTitle=e.GetString("notificationPrivacyTitle",this.notificationPrivacyTitle),this.notificationPrivacyDesc=e.GetString("notificationPrivacyDesc",this.notificationPrivacyDesc),this.reminderDisabled=e.GetString("reminderDisabled",this.reminderDisabled),this.reminderEnabled=e.GetString("reminderEnabled",this.reminderEnabled),this.cbRebatesOn=e.GetString("rebatesOnAndPercent",this.cbRebatesOn),this.cbRebatesOff=e.GetString("rebatesOffAndPercent",this.cbRebatesOff),this.cbNonStackableCoupon=e.GetString("rebatesNonStackable",this.cbNonStackableCoupon),this.cbProcessing=e.GetString("rebatesProcessing",this.cbProcessing),this.commonMicrosoftRewards=e.GetString("cbPrivacyMessageLearn",this.commonMicrosoftRewards),this.cbPrivacyMessage=e.GetString("rebatesPrivacyMessage",this.cbPrivacyMessage),this.cbPrivacyMessageTerm=e.GetString("cbPrivacyMessageTerm",this.cbPrivacyMessageTerm),this.commonGotIt=e.GetString("rebatesGotIt",this.commonGotIt),this.cbErrorMessage=e.GetString("rebatesErrorMessage",this.cbErrorMessage),this.cbPromotionsOnSubHeader=e.GetString("cbPromotionsOnSubHeader",this.cbPromotionsOnSubHeader),this.cbBingActivateButton=e.GetString("cbBingActivateButton",this.cbBingActivateButton),this.cbRetailerTitle=e.GetString("cbRetailerTitle",this.cbRetailerTitle),this.cbSnapshotTitle=e.GetString("snapshotTitle",this.cbSnapshotTitle),this.cbViewAccount=e.GetString("viewAccount",this.cbViewAccount),this.cbCurrBalance=e.GetString("currBalance",this.cbCurrBalance),this.couponAutoApplyWithoutCB=e.GetString("rebatesApplyCoupons",this.couponAutoApplyWithoutCB),this.bannerFoundBestPrice=e.GetString("bannerPriceComparisonHeading",this.bannerFoundBestPrice),this.bannerFoundBestPriceAlt=e.GetString("bannerFoundBestPriceAlt",this.bannerFoundBestPriceAlt),this.bannerYouHaveBestPrice=e.GetString("bannerYouHaveBestPrice",this.bannerYouHaveBestPrice),this.bannerSubTitleFlyout=e.GetString("rebatesCouponsDescriptions",this.bannerSubTitleFlyout),this.bannerSeeDetails=e.GetString("bannerSeeDetails",this.bannerSeeDetails),this.bannerShowPriceHistory=e.GetString("bannerShowPriceHistory",this.bannerShowPriceHistory),this.bannerViewAll=e.GetString("bannerOpenFlyoutLabel",this.bannerViewAll),this.bannerVisitItem=e.GetString("bannerPriceComparisonHover",this.bannerVisitItem),this.bannerPriceStableTitle=e.GetString("bannerPriceStableTitle",this.bannerPriceStableTitle),this.bannerViewAllCouponsSingular=e.GetString("bannerViewAllCouponsSingular",this.bannerViewAllCouponsSingular),this.defaultClippingTitle=e.GetString("defaultClippingTitle",this.defaultClippingTitle),this.defaultClippingSubTitle=e.GetString("defaultClippingSubTitle",this.defaultClippingSubTitle),this.clippingMainTitle=e.GetString("clippingMainTitle",this.clippingMainTitle),this.clippingSubTitle=e.GetString("clippingSubTitle",this.clippingSubTitle),this.clippingButtonTitle=e.GetString("clippingButtonTitle",this.clippingButtonTitle),this.clippedTitle=e.GetString("clippedTitle",this.clippedTitle),this.clippedSubTitle=e.GetString("clippedSubTitle",this.clippedSubTitle),this.clippingMainTitleEnGb=e.GetString("clippingMainTitleEnGb",this.clippingMainTitleEnGb),this.defaultClippingTitleEnGb=e.GetString("defaultClippingTitleEnGb",this.defaultClippingTitleEnGb),this.clippingButtonTitleEnGb=e.GetString("clippingButtonTitleEnGb",this.clippingButtonTitleEnGb),this.clippedSubTitleEnGb=e.GetString("clippedSubTitleEnGb",this.clippedSubTitleEnGb),this.getDeal=e.GetString("getDeal",this.getDeal),this.dealsTitle=e.GetString("dealsTitle",this.dealsTitle),this.dealsSubTitle=e.GetString("dealsSubTitle",this.dealsSubTitle),this.phTitlePriceDropped=e.GetString("phTitlePriceDropped",this.phTitlePriceDropped),this.phTitlePriceIncrease=e.GetString("phTitlePriceIncrease",this.phTitlePriceIncrease),this.phTitleStable=e.GetString("phTitleStable",this.phTitleStable),this.phToday=e.GetString("phToday",this.phToday),this.phLow=e.GetString("phLow",this.phLow),this.phHigh=e.GetString("phHigh",this.phHigh),this.phMedian=e.GetString("phMedian",this.phMedian),this.phPriceStable=e.GetString("phPriceStable",this.phPriceStable),this.phPriceDrop=e.GetString("phPriceDrop",this.phPriceDrop),this.prodHPriceDropTitle=e.GetString("prodHPriceDropTitle",this.prodHPriceDropTitle),this.prodHPriceDropSave=e.GetString("prodHPriceDropSave",this.prodHPriceDropSave),this.prodHPriceDropDonotRemindMe=e.GetString("prodHPriceDropDonotRemindMe",this.prodHPriceDropDonotRemindMe),this.prodHPriceDropViewAt=e.GetString("prodHPriceDropViewAt",this.prodHPriceDropViewAt),this.prodHAnnotation=e.GetString("prodHAnnotation",this.prodHAnnotation),this.prodHDeleteItem=e.GetString("prodHDeleteItem",this.prodHDeleteItem),this.phPriceIncrease=e.GetString("phPriceIncrease",this.phPriceIncrease),this.phFinalDrop=e.GetString("phFinalDrop",this.phFinalDrop),this.phFinalIncrease=e.GetString("phFinalIncrease",this.phFinalIncrease),this.phPriceStableRefresh=e.GetString("phPriceStableRefresh",this.phPriceStableRefresh),this.phGraphLabel=e.GetString("phGraphLabel",this.phGraphLabel),this.phStableLabel=e.GetString("phStableLabel",this.phStableLabel),this.phOldPrice=e.GetString("phOldPrice",this.phOldPrice),this.phNewPrice=e.GetString("phNewPrice",this.phNewPrice),this.phTooltipText=e.GetString("phTooltipText",this.phTooltipText),this.prodHPriceDropRefresh=e.GetString("prodHPriceDropRefresh",this.prodHPriceDropRefresh),this.prodHPriceIncreaseRefresh=e.GetString("prodHPriceIncreaseRefresh",this.prodHPriceIncreaseRefresh),this.prodHSectionTitle=e.GetString("prodHSectionTitle",this.prodHSectionTitle),this.rrExpertAndVideoReviews=e.GetString("rrExpertAndVideoReviews",this.rrExpertAndVideoReviews),this.rrExpertReviews=e.GetString("rrExpertReviews",this.rrExpertReviews),this.rrVideoReviews=e.GetString("rrVideoReviews",this.rrVideoReviews),this.checkoutCreditOrDebitCardDropDown=e.GetString("checkoutCreditOrDebitCardDropDown",this.checkoutCreditOrDebitCardDropDown),this.checkoutShippingAddress=e.GetString("checkoutShippingAddress",this.checkoutShippingAddress),this.checkoutPaymentInfo=e.GetString("checkoutPaymentInfo",this.checkoutPaymentInfo),this.checkoutSameBilling=e.GetString("checkoutSameBilling",this.checkoutSameBilling),this.checkoutFillOnly=e.GetString("checkoutFillOnly",this.checkoutFillOnly),this.checkoutButtonWithoutAA=e.GetString("checkoutButtonWithoutAA",this.checkoutButtonWithoutAA),this.checkoutButtonWithoutAAForOtherPayment=e.GetString("checkoutButtonWithoutAAForOtherPayment",this.checkoutButtonWithoutAAForOtherPayment),this.checkoutSectionTitle=e.GetString("checkoutSectionTitle",this.checkoutSectionTitle),this.checkoutAddressSectionTitle=e.GetString("checkoutAddressSectionTitle",this.checkoutAddressSectionTitle),this.checkoutPaymentSectionTitle=e.GetString("checkoutPaymentSectionTitle",this.checkoutPaymentSectionTitle),this.checkoutValidTill=e.GetString("checkoutValidTill",this.checkoutValidTill),this.checkoutZip=e.GetString("checkoutZip",this.checkoutZip),this.paymentOptionLabel=e.GetString("paymentOptionLabel",this.paymentOptionLabel),this.microsoftWalletLinkText=e.GetString("microsoftWalletLinkText",this.microsoftWalletLinkText),this.virtualCardBillingInfoHeader=e.GetString("virtualCardBillingInfoHeader",this.virtualCardBillingInfoHeader),this.virtualCardNumberHeader=e.GetString("virtualCardNumberHeader",this.virtualCardNumberHeader),this.virtualCardExpirationHeader=e.GetString("virtualCardExpirationHeader",this.virtualCardExpirationHeader),this.virtualCardCVCHeader=e.GetString("virtualCardCVCHeader",this.virtualCardCVCHeader),this.visualizedCardHolderHeader=e.GetString("visualizedCardHolderHeader",this.visualizedCardHolderHeader),this.visualizedCardExpiresHeader=e.GetString("visualizedCardExpiresHeader",this.visualizedCardExpiresHeader),this.showContentToggleTooltip=e.GetString("showContentToggleTooltip",this.showContentToggleTooltip),this.hideContentToggleTooltip=e.GetString("hideContentToggleTooltip",this.hideContentToggleTooltip),this.copyButtonTooltip=e.GetString("copyButtonTooltip",this.copyButtonTooltip),this.virtualCardSystemFailureHeader=e.GetString("virtualCardSystemFailureHeader",this.virtualCardSystemFailureHeader),this.virtualCardLinkSuccess=e.GetString("virtualCardLinkSuccess",this.virtualCardLinkSuccess),this.zipPayPayment=e.GetString("zipPayment",this.zipPayPayment),this.buyNowPayLater=e.GetString("billNowPayLater",this.buyNowPayLater),this.masterCardPayment=e.GetString("masterCardPayment",this.masterCardPayment),this.visaPayment=e.GetString("visaPayment",this.visaPayment),this.amexPayment=e.GetString("amexPayment",this.amexPayment),this.discoverPayment=e.GetString("discoverPayment",this.discoverPayment),this.couponExpandableTitleWithNum=e.GetString("couponExpandableTitleWithNum",this.couponExpandableTitleWithNum),this.couponExpandableTitleWithNumSingular=e.GetString("couponExpandableTitleWithNumSingular",this.couponExpandableTitleWithNumSingular),this.couponExpandableTitleViewCoupons=e.GetString("couponExpandableTitleViewCoupons",this.couponExpandableTitleViewCoupons),this.disablePackageTrackingFromMenuText=e.GetString("disablePackageTrackingFromMenuText",this.disablePackageTrackingFromMenuText),this.enablePackageTrackingFromMenuText=e.GetString("enablePackageTrackingFromMenuText",this.enablePackageTrackingFromMenuText),this.packageTrackingOptInButtonText=e.GetString("packageTrackingOptInButtonText",this.packageTrackingOptInButtonText),this.packageTrackingNotificationTitle=e.GetString("packageTrackingNotificationTitle",this.packageTrackingNotificationTitle),this.packageTrackingNotificationDescription=e.GetString("packageTrackingNotificationDescription",this.packageTrackingNotificationDescription),this.checkBackForOrders=e.GetString("checkBackForOrders",this.checkBackForOrders),this.deteTrackerText=e.GetString("deteTrackerText",this.deteTrackerText),this.packageTrackingOptOutButtonText=e.GetString("packageTrackingOptOutButtonText",this.packageTrackingOptOutButtonText),this.productDetailsOrderTracking=e.GetString("productDetailsOrderTracking",this.productDetailsOrderTracking),this.packageTrackingTitle=e.GetString("packageTrackingTitle",this.packageTrackingTitle),this.rewardGiftConsentSubtext=e.GetString("rewardGiftConsentSubtext",this.rewardGiftConsentSubtext),this.rewardsPrivacyText=e.GetString("rewardsPrivacyText",this.rewardsPrivacyText),this.rewardsTermsText=e.GetString("rewardsTermsText",this.rewardsTermsText),this.giftCardDismiss=e.GetString("giftCardDismiss",this.giftCardDismiss),this.feedbackPrompt=e.GetString("feedbackPrompt",this.feedbackPrompt),this.feedbackThanks=e.GetString("feedbackThanks",this.feedbackThanks),this.feedbackAriaLike=e.GetString("feedbackAriaLike",this.feedbackAriaLike),this.feedbackAriaDislike=e.GetString("feedbackAriaDislike",this.feedbackAriaDislike),this.feedbackAriaClose=e.GetString("feedbackAriaClose",this.feedbackAriaClose),this.sustainabilityDescriptionLight=e.GetString("sustainabilityDescriptionLight",this.sustainabilityDescriptionLight),this.sustainabilityDescription=e.GetString("sustainabilityDescription",this.sustainabilityDescription),this.sustainabilityString=e.GetString("sustainabilityString",this.sustainabilityString),this.sustainabilityConfirmationTitle=e.GetString("sustainabilityConfirmationTitle",this.sustainabilityConfirmationTitle),this.attCouponHeaderLocked=e.GetString("attCouponHeaderLocked",this.attCouponHeaderLocked),this.attCouponHeaderUnlocked=e.GetString("attCouponHeaderUnlocked",this.attCouponHeaderUnlocked),this.pcdisclaimerText=e.GetString("pcdisclaimerText",this.pcdisclaimerText),this.pcNotificationdisclaimerText=e.GetString("pcNotificationdisclaimerText",this.pcNotificationdisclaimerText),this.cbMainTitleOff=e.GetString("rebatesPercentage",this.cbMainTitleOff),this.pcbMainTitleOff=e.GetString("pcbMainTitleOff",this.pcbMainTitleOff),this.cbMainTitleOn=e.GetString("rebatesPercentageEarn",this.cbMainTitleOn),this.cbAutoShowButtonMessage=e.GetString("cbAutoShowButtonMessage",this.cbAutoShowButtonMessage),this.cbMainTitleOnStoreWide=e.GetString("rebatesStorewidePercentageEarn",this.cbMainTitleOnStoreWide),this.cbPromotionsSubTitle=e.GetString("subRebatesPercentageEarn",this.cbPromotionsSubTitle),this.cbPromotionsSubTitleStoreWide=e.GetString("subRebatesPercentageEarnStorewide",this.cbPromotionsSubTitleStoreWide),this.cbTitleSignInOn=e.GetString("cbMergedTitleSignInOn",this.cbTitleSignInOn),this.cbPersonalized=e.GetString("rebatesPersonalizedTitle",this.cbPersonalized),this.cbCashBackOnOff=e.GetString("rebatesOnAndOffPrefix",this.cbCashBackOnOff),this.cbLifetimeEarned=e.GetString("cbLifetimeEarned",this.cbLifetimeEarned),this.cbToolTips=e.GetString("cbToolTips",this.cbToolTips),this.bannerPriceDropTitle=e.GetString("bannerPriceDropTitle",this.bannerPriceDropTitle),this.bannerPriceIncreaseTitle=e.GetString("bannerPriceIncreaseTitle",this.bannerPriceIncreaseTitle),this.bannerCouponSingularTitle=e.GetString("bannerCouponSingularTitle",this.bannerCouponSingularTitle),this.bannerFoundCoupons=e.GetString("bannerCouponHeadingLabelPlural",this.bannerFoundCoupons),this.bannerFoundCouponsSingular=e.GetString("bannerCouponHeadingLabelSingular",this.bannerFoundCouponsSingular),this.bannerCouponPluralTitle=e.GetString("bannerCouponPluralTitle",this.bannerCouponPluralTitle),this.bannerCashBackOffTitle=e.GetString("bannerCashBackOffTitle",this.bannerCashBackOffTitle),this.bannerCashBackOnTitle=e.GetString("bannerCashBackOnTitle",this.bannerCashBackOnTitle),this.bannerRecentPurchase=e.GetString("bannerRecentPurchase",this.bannerRecentPurchase),this.bannerLifetime=e.GetString("bannerLifetime",this.bannerLifetime),this.microsoftWalletManage=e.GetString("microsoftWalletManage",this.microsoftWalletManage),this.trAriaLabel=e.GetString("trAriaLabel",this.trAriaLabel),this.couponSectionPluralTitle=e.GetString("couponSectionPluralTitle",this.couponSectionPluralTitle),this.privacyConsent=e.GetString("privacyConsent",this.privacyConsent),this.savingsHeader=e.GetString("savingsHeader",this.savingsHeader),this.sectionSeeMore=e.GetString("sectionSeeMore",this.sectionSeeMore),this.bannerSave=e.GetString("bannerSave",this.bannerSave),this.bannerViewAllCoupons=e.GetString("bannerViewAllCoupons",this.bannerViewAllCoupons),this.pcNotificationTitle=e.GetString("pcNotificationTitle",this.pcNotificationTitle),this.pcNotificationTitleRefresh=e.GetString("pcNotificationTitleRefresh",this.pcNotificationTitleRefresh),this.pcNotificationNarratorIntro=e.GetString("pcNotificationNarratorIntro",this.pcNotificationNarratorIntro),this.viewMorePricesButtonText=e.GetString("viewMorePricesButtonText",this.viewMorePricesButtonText),this.pcLowestPriceAria=e.GetString("pcLowestPriceAria",this.pcLowestPriceAria),this.pcCurrentPriceAria=e.GetString("pcCurrentPriceAria",this.pcCurrentPriceAria),this.cbPromotionsTitle=e.GetString("cbPromotionsTitle",this.cbPromotionsTitle),this.cbExpiryDateTime=e.GetString("cbExpiryDateTime",this.cbExpiryDateTime),this.cbCommissionStr=e.GetString("cbCommissionStr",this.cbCommissionStr),this.couponSuccessful=e.GetString("couponSuccessful",this.couponSuccessful),this.cbMergedTitle=e.GetString("rebatesFoundCouponsAndCashback",this.cbMergedTitle),this.cbPreviousCashbackDomain=e.GetString("cbPreviousCashbackDomain",this.cbPreviousCashbackDomain),this.cbMergedSingularTitle=e.GetString("rebatesFoundCouponsAndCashbackSingular",this.cbMergedSingularTitle),this.commonAriaLogo=e.GetString("rebatesNotificationLogo",this.commonAriaLogo),this.tipsFreeShipping=e.GetString("tipsFreeShipping",this.tipsFreeShipping),this.tipsMinimumPurchase=e.GetString("tipsMinimumPurchase",this.tipsMinimumPurchase),this.triviaTitleNew=e.GetString("triviaTitleNew",this.triviaTitleNew),this.virtualCardSystemFailureDescription=e.GetString("virtualCardSystemFailureDescription",this.virtualCardSystemFailureDescription),this.virtualCardSystemFailureLink=e.GetString("virtualCardSystemFailureLink",this.virtualCardSystemFailureLink),this.virtualCardLinkFail=e.GetString("virtualCardLinkFail",this.virtualCardLinkFail),this.cardPaymentOptionBanner=e.GetString("cardPaymentOptionBanner",this.cardPaymentOptionBanner),this.otherPaymentMethodBanner=e.GetString("otherPaymentMethodBanner",this.otherPaymentMethodBanner),this.learnMoreLinkAriaLabel=e.GetString("learnMoreLinkAriaLabel",this.learnMoreLinkAriaLabel),this.msZipDescription=e.GetString("msZipDescription",this.msZipDescription),this.similarSellerNotificationError=e.GetString("similarSellerNotificationError",this.similarSellerNotificationError),this.similarSellerStringCollapsedAmazon=e.GetString("similarSellerStringCollapsedAmazon",this.similarSellerStringCollapsedAmazon),this.similarSellerStringCollapsed=e.GetString("similarSellerStringCollapsed",this.similarSellerStringCollapsed),this.similarSellerAddToCartTitle=e.GetString("similarSellerAddToCartTitle",this.similarSellerAddToCartTitle),this.similarSellerAddedToCartTitle=e.GetString("similarSellerAddedToCartTitle",this.similarSellerAddedToCartTitle),this.similarSellerShipFromString=e.GetString("similarSellerShipFromString",this.similarSellerShipFromString),this.similarSellerRatingLabel=e.GetString("similarSellerRatingLabel",this.similarSellerRatingLabel),this.similarSellerFreeDelivery=e.GetString("similarSellerFreeDelivery",this.similarSellerFreeDelivery),this.similarSellerStringAmazon=e.GetString("similarSellerStringAmazon",this.similarSellerStringAmazon),this.similarSellerString=e.GetString("similarSellerString",this.similarSellerString),this.similarSellerStringSubtitleAmazon=e.GetString("similarSellerStringSubtitleAmazon",this.similarSellerStringSubtitleAmazon),this.similarSellerStringSubtitle=e.GetString("similarSellerStringSubtitle",this.similarSellerStringSubtitle),this.similarSellerNotificationTitle=e.GetString("similarSellerNotificationTitle",this.similarSellerNotificationTitle),this.similarSellerAddToCartAriaLable=e.GetString("similarSellerAddToCartAriaLable",this.similarSellerAddToCartAriaLable),this.tipsTiltleSingle=e.GetString("tipsTiltleSingle",this.tipsTiltleSingle),this.tipsSubTitleSingle=e.GetString("tipsSubTitleSingle",this.tipsSubTitleSingle),this.tipsMainTitle=e.GetString("tipsMainTitle",this.tipsMainTitle),this.tipsSubTitle=e.GetString("tipsSubTitle",this.tipsSubTitle),this.orderTrackingTitle=e.GetString("orderTrackingTitle",this.orderTrackingTitle),this.rewardFailedSignin=e.GetString("rewardFailedSignin",this.rewardFailedSignin),this.rewardTitleDefault=e.GetString("rewardTitleDefault",this.rewardTitleDefault),this.rewardTitleEarnedMaximum=e.GetString("rewardTitleEarnedMaximum",this.rewardTitleEarnedMaximum),this.rewardTitleRewardTwo=e.GetString("rewardTitleRewardTwo",this.rewardTitleRewardTwo),this.rewardPointMax=e.GetString("rewardPointMax",this.rewardPointMax),this.rewardPerMaxPoint=e.GetString("rewardPerMaxPoint",this.rewardPerMaxPoint),this.rewardDetailFirstLine=e.GetString("rewardDetailFirstLine",this.rewardDetailFirstLine),this.rewardTitleRewardsAdded=e.GetString("rewardTitleRewardsAdded",this.rewardTitleRewardsAdded),this.rewardDetailFirstLineBold=e.GetString("rewardDetailFirstLineBold",this.rewardDetailFirstLineBold),this.rewardKeepExploringText=e.GetString("rewardKeepExploringText",this.rewardKeepExploringText),this.rewardDetailTwo=e.GetString("rewardDetailTwo",this.rewardDetailTwo),this.rewardDetail=e.GetString("rewardDetail",this.rewardDetail),this.rewardSignIn=e.GetString("rewardSignIn",this.rewardSignIn),this.rewardRedeem=e.GetString("rewardRedeem",this.rewardRedeem),this.rewardCoupons=e.GetString("rewardCoupons",this.rewardCoupons),this.rewardCashback=e.GetString("rewardCashback",this.rewardCashback),this.rewardRewards=e.GetString("rewardRewards",this.rewardRewards),this.rewardAssociateSignIn=e.GetString("rewardAssociateSignIn",this.rewardAssociateSignIn),this.dismissMessageAriaLabel=e.GetString("dismissMessageAriaLabel",this.dismissMessageAriaLabel),this.virtualCardDetailsActions=e.GetString("virtualCardDetailsActions",this.virtualCardDetailsActions),this.gcSectionTitle=e.GetString("gcSectionTitle",this.gcSectionTitle),this.giftCardTitle=e.GetString("giftCardTitle",this.giftCardTitle),this.giftCardSubtitle=e.GetString("giftCardSubtitle",this.giftCardSubtitle),this.giftCardSubtitleFiveDollar=e.GetString("giftCardSubtitleFiveDollar",this.giftCardSubtitleFiveDollar),this.maybeLaterButtontext=e.GetString("maybeLaterButtontext",this.maybeLaterButtontext),this.rewardJoinSuccess=e.GetString("rewardJoinSuccess",this.rewardJoinSuccess),this.rewardOfferSuccess=e.GetString("rewardOfferSuccess",this.rewardOfferSuccess),this.joinNowButtonText=e.GetString("joinNowButtonText",this.joinNowButtonText),this.ytSectionTitleOnRetailer=e.GetString("ytSectionTitleOnRetailer",this.ytSectionTitleOnRetailer),this.ytHeader=e.GetString("ytHeader",this.ytHeader),this.ytPhotoLabel=e.GetString("ytPhotoLabel",this.ytPhotoLabel),this.ytMoreCoupons=e.GetString("ytMoreCoupons",this.ytMoreCoupons),this.ytSectionTitleOnYoutube=e.GetString("ytSectionTitleOnYoutube",this.ytSectionTitleOnYoutube),this.ytShopOn=e.GetString("ytShopOn",this.ytShopOn),this.ytHeaderPermission=e.GetString("ytHeaderPermission",this.ytHeaderPermission),this.ytSaveCouponsPermission=e.GetString("ytSaveCouponsPermission",this.ytSaveCouponsPermission),this.ytDontSaveCouponsPermission=e.GetString("ytDontSaveCouponsPermission",this.ytDontSaveCouponsPermission),this.ytHeaderSingular=e.GetString("ytHeaderSingular",this.ytHeaderSingular),this.ytHeaderPermissionSingular=e.GetString("ytHeaderPermissionSingular",this.ytHeaderPermissionSingular),this.ptCouponsTitle=e.GetString("ptCouponsTitle",this.ptCouponsTitle),this.ptCouponsTitleSingular=e.GetString("ptCouponsTitleSingular",this.ptCouponsTitleSingular),this.attFlyoutLocked=e.GetString("attFlyoutLocked",this.attFlyoutLocked),this.attFlyoutUnlocked=e.GetString("attFlyoutUnlocked",this.attFlyoutUnlocked),this.attTooltipHeader=e.GetString("attTooltipHeader",this.attTooltipHeader),this.attTooltipText=e.GetString("attTooltipText",this.attTooltipText),this.paneForYou=e.GetString("paneForYou",this.paneForYou),this.paneHome=e.GetString("paneHome",this.paneHome),this.paneNullStateMessage=e.GetString("paneNullStateMessage",this.paneNullStateMessage),this.trSectionTitle=e.GetString("trSectionTitle",this.trSectionTitle),this.autosMarketplaceSectionTitle=e.GetString("autosMarketplaceSectionTitle",this.autosMarketplaceSectionTitle),this.autosMarketplaceHeader=e.GetString("autosMarketplaceHeader",this.autosMarketplaceHeader),this.autosMarketplaceDisclaimer=e.GetString("autosMarketplaceDisclaimer",this.autosMarketplaceDisclaimer),this.autosMarketplaceSeeMoreLink=e.GetString("autosMarketplaceSeeMoreLink",this.autosMarketplaceSeeMoreLink),this.autosMarketplaceNotificationHeader=e.GetString("autosMarketplaceNotificationHeader",this.autosMarketplaceNotificationHeader),this.autosMarketplaceSeeMoreButton=e.GetString("autosMarketplaceSeeMoreButton",this.autosMarketplaceSeeMoreButton),this.autosMarketplaceSeeThisCar=e.GetString("autosMarketplaceSeeThisCar",this.autosMarketplaceSeeThisCar)}}]),t}(),Pl=function(){function t(e,i){s(this,t),f(this,"dataLoader",void 0),f(this,"common",new Mt),f(this,"strings",void 0),f(this,"dataStoreModule",new wl),f(this,"experimentData",new Rl),this.dataLoader=i,this.strings=new Ol(i),this.strings.Create(e);var n=i.GetLoadTimeDataValue(ot.EnabledFeatures,void 0);this.experimentData.Create(n),this.common.Create(e,i)}var i;return r(t,[{key:"initializeModuleData",value:(i=e(o().mark((function t(e,i,n){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Dl(e,i).InitializeData(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t,e,n){return i.apply(this,arguments)})}]),t}(),Ml=Pl;function Nl(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=p(t);if(e){var o=p(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return h(this,i)}}var Ll=function(t){u(i,t);var e=Nl(i);function i(){var t;return s(this,i),(t=e.call(this)).IsV2Data=!1,t}return r(i,[{key:"GetLoadTimeDataValue",value:function(t,e){try{return loadTimeData.valueExists(t)?loadTimeData.getValue(t):e}catch(t){}return e}},{key:"GetString",value:function(t,e){try{return loadTimeData.valueExists(t)?loadTimeData.getValue(t)!==e&&this.isEnglish()?e:loadTimeData.getValue(t):e}catch(t){}return e}},{key:"SetLoadTimeDataValue",value:function(t,e){}},{key:"isEnglish",value:function(){return!(!loadTimeData.valueExists("fixedTitle")||"Shopping in Microsoft Edge"!==loadTimeData.getValue("fixedTitle"))}}]),i}(function(){function t(){s(this,t),f(this,"IsV2Data",void 0)}return r(t,[{key:"IsServerData",value:function(){return this.IsV2Data}}]),t}());function _l(t,e,i,n){var o,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r}const Fl=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(i){Reflect.defineMetadata(t,e,i)}},Reflect.defineMetadata=function(t,e,i){let n=Fl.get(i);void 0===n&&Fl.set(i,n=new Map),n.set(t,e)},Reflect.getOwnMetadata=function(t,e){const i=Fl.get(e);if(void 0!==i)return i.get(t)});class Hl{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,uc(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:i,key:n}=this;return this.container=this.key=void 0,i.registerResolver(n,new Jl(n,t,e))}}function Bl(t){const e=t.slice(),i=Object.keys(t),n=i.length;let o;for(let a=0;a<n;++a)o=i[a],yc(o)||(e[o]=t[o]);return e}const Ul=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton:t=>new Jl(t,1,t),transient:t=>new Jl(t,2,t)}),Vl=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Ul.singleton})}),$l=new Map;function Gl(t){return e=>Reflect.getOwnMetadata(t,e)}let zl=null;const Wl=Object.freeze({createContainer:t=>new lc(null,Object.assign({},Vl.default,t)),findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:Wl.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(rc,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||Wl.getOrCreateDOMContainer()},getOrCreateDOMContainer:(t,e)=>t?t.$$container$$||new lc(t,Object.assign({},Vl.default,e,{parentLocator:Wl.findParentContainer})):zl||(zl=new lc(null,Object.assign({},Vl.default,e,{parentLocator:()=>null}))),getDesignParamtypes:Gl("design:paramtypes"),getAnnotationParamtypes:Gl("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return void 0===e&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=$l.get(t);if(void 0===e){const i=t.inject;if(void 0===i){const i=Wl.getDesignParamtypes(t),n=Wl.getAnnotationParamtypes(t);if(void 0===i)if(void 0===n){const i=Object.getPrototypeOf(t);e="function"==typeof i&&i!==Function.prototype?Bl(Wl.getDependencies(i)):[]}else e=Bl(n);else if(void 0===n)e=Bl(i);else{e=Bl(i);let t,o=n.length;for(let i=0;i<o;++i)t=n[i],void 0!==t&&(e[i]=t);const a=Object.keys(n);let r;o=a.length;for(let t=0;t<o;++t)r=a[t],yc(r)||(e[r]=n[r])}}else e=Bl(i);$l.set(t,e)}return e},defineProperty(t,e,i,n=!1){const o=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let t=this[o];if(void 0===t){const a=this instanceof HTMLElement?Wl.findResponsibleContainer(this):Wl.getOrCreateDOMContainer();if(t=a.get(i),this[o]=t,n&&this instanceof Ai){const n=this.$fastController,a=()=>{Wl.findResponsibleContainer(this).get(i)!==this[o]&&(this[o]=t,n.notify(e))};n.subscribe({handleChange:a},"isConnected")}}return t}})},createInterface(t,e){const i="function"==typeof t?t:e,n="string"==typeof t?t:t&&"friendlyName"in t&&t.friendlyName||fc,o="string"!=typeof t&&(t&&"respectConnection"in t&&t.respectConnection||!1),a=function(t,e,i){if(null==t||void 0!==new.target)throw new Error(`No registration for interface: '${a.friendlyName}'`);if(e)Wl.defineProperty(t,e,a,o);else{Wl.getOrCreateAnnotationParamTypes(t)[i]=a}};return a.$isInterface=!0,a.friendlyName=null==n?"(anonymous)":n,null!=i&&(a.register=function(t,e){return i(new Hl(t,null!=e?e:a))}),a.toString=function(){return`InterfaceSymbol<${a.friendlyName}>`},a},inject:(...t)=>function(e,i,n){if("number"==typeof n){const i=Wl.getOrCreateAnnotationParamTypes(e),o=t[0];void 0!==o&&(i[n]=o)}else if(i)Wl.defineProperty(e,i,t[0]);else{const i=n?Wl.getOrCreateAnnotationParamTypes(n.value):Wl.getOrCreateAnnotationParamTypes(e);let o;for(let e=0;e<t.length;++e)o=t[e],void 0!==o&&(i[e]=o)}},transient:t=>(t.register=function(e){return dc.transient(t,t).register(e)},t.registerInRequestor=!1,t),singleton:(t,e=Yl)=>(t.register=function(e){return dc.singleton(t,t).register(e)},t.registerInRequestor=e.scoped,t)}),Kl=Wl.createInterface("Container");function jl(t){return function(e){const i=function(t,e,n){Wl.inject(i)(t,e,n)};return i.$isResolver=!0,i.resolve=function(i,n){return t(e,i,n)},i}}Wl.inject;const Yl={scoped:!1};ql=(t,e,i,n)=>i.getAll(t,n);var ql;jl(((t,e,i)=>()=>i.get(t))),jl(((t,e,i)=>i.has(t,!0)?i.get(t):void 0));function Xl(t,e,i){Wl.inject(Xl)(t,e,i)}Xl.$isResolver=!0,Xl.resolve=()=>{};jl(((t,e,i)=>{const n=Zl(t,e),o=new Jl(t,0,n);return i.registerResolver(t,o),n})),jl(((t,e,i)=>Zl(t,e)));function Zl(t,e){return e.getFactory(t).construct(e)}class Jl{constructor(t,e,i){this.key=t,this.strategy=e,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state;case 2:{const i=t.getFactory(this.state);if(null===i)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,i,n;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return null!==(n=null===(i=null===(e=t.getResolver(this.state))||void 0===e?void 0:e.getFactory)||void 0===i?void 0:i.call(e,t))&&void 0!==n?n:null;default:return null}}}function Ql(t){return this.get(t)}function tc(t,e){return e(t)}class ec{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let i;return i=void 0===e?new this.Type(...this.dependencies.map(Ql,t)):new this.Type(...this.dependencies.map(Ql,t),...e),null==this.transformers?i:this.transformers.reduce(tc,i)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const ic={$isResolver:!0,resolve:(t,e)=>e};function nc(t){return"function"==typeof t.register}function oc(t){return function(t){return nc(t)&&"boolean"==typeof t.registerInRequestor}(t)&&t.registerInRequestor}const ac=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),rc="__DI_LOCATE_PARENT__",sc=new Map;class lc{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,null!==t&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Kl,ic),t instanceof Node&&t.addEventListener(rc,(t=>{t.composedPath()[0]!==this.owner&&(t.detail.container=this,t.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let e,i,n,o,a;const r=this.context;for(let s=0,l=t.length;s<l;++s)if(e=t[s],gc(e))if(nc(e))e.register(this,r);else if(void 0!==e.prototype)dc.singleton(e,e).register(this);else for(i=Object.keys(e),o=0,a=i.length;o<a;++o)n=e[i[o]],gc(n)&&(nc(n)?n.register(this,r):this.register(n));return--this.registerDepth,this}registerResolver(t,e){hc(t);const i=this.resolvers,n=i.get(t);return null==n?i.set(t,e):n instanceof Jl&&4===n.strategy?n.state.push(e):i.set(t,new Jl(t,4,[n,e])),e}registerTransformer(t,e){const i=this.getResolver(t);if(null==i)return!1;if(i.getFactory){const t=i.getFactory(this);return null!=t&&(t.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(hc(t),void 0!==t.resolve)return t;let i,n=this;for(;null!=n;){if(i=n.resolvers.get(t),null!=i)return i;if(null==n.parent){const i=oc(t)?this:n;return e?this.jitRegister(t,i):null}n=n.parent}return null}has(t,e=!1){return!!this.resolvers.has(t)||!(!e||null==this.parent)&&this.parent.has(t,!0)}get(t){if(hc(t),t.$isResolver)return t.resolve(this,this);let e,i=this;for(;null!=i;){if(e=i.resolvers.get(t),null!=e)return e.resolve(i,this);if(null==i.parent){const n=oc(t)?this:i;return e=this.jitRegister(t,n),e.resolve(i,this)}i=i.parent}throw new Error(`Unable to resolve key: ${t}`)}getAll(t,e=!1){hc(t);const i=this;let n,o=i;if(e){let e=De;for(;null!=o;)n=o.resolvers.get(t),null!=n&&(e=e.concat(pc(n,o,i))),o=o.parent;return e}for(;null!=o;){if(n=o.resolvers.get(t),null!=n)return pc(n,o,i);if(o=o.parent,null==o)return De}return De}getFactory(t){let e=sc.get(t);if(void 0===e){if(mc(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);sc.set(t,e=new ec(t,Wl.getDependencies(t)))}return e}registerFactory(t,e){sc.set(t,e)}createChild(t){return new lc(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if("function"!=typeof t)throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(ac.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(nc(t)){const i=t.register(e);if(!(i instanceof Object)||null==i.resolve){const i=e.resolvers.get(t);if(null!=i)return i;throw new Error("A valid resolver was not returned from the static register method")}return i}if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const i=this.config.defaultResolver(t,e);return e.resolvers.set(t,i),i}}}const cc=new WeakMap;function uc(t){return function(e,i,n){if(cc.has(n))return cc.get(n);const o=t(e,i,n);return cc.set(n,o),o}}const dc=Object.freeze({instance:(t,e)=>new Jl(t,0,e),singleton:(t,e)=>new Jl(t,1,e),transient:(t,e)=>new Jl(t,2,e),callback:(t,e)=>new Jl(t,3,e),cachedCallback:(t,e)=>new Jl(t,3,uc(e)),aliasTo:(t,e)=>new Jl(e,5,t)});function hc(t){if(null==t)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function pc(t,e,i){if(t instanceof Jl&&4===t.strategy){const n=t.state;let o=n.length;const a=new Array(o);for(;o--;)a[o]=n[o].resolve(e,i);return a}return[t.resolve(e,i)]}const fc="(anonymous)";function gc(t){return"object"==typeof t&&null!==t||"function"==typeof t}const mc=function(){const t=new WeakMap;let e=!1,i="",n=0;return function(o){return e=t.get(o),void 0===e&&(i=o.toString(),n=i.length,e=n>=29&&n<=100&&125===i.charCodeAt(n-1)&&i.charCodeAt(n-2)<=32&&93===i.charCodeAt(n-3)&&101===i.charCodeAt(n-4)&&100===i.charCodeAt(n-5)&&111===i.charCodeAt(n-6)&&99===i.charCodeAt(n-7)&&32===i.charCodeAt(n-8)&&101===i.charCodeAt(n-9)&&118===i.charCodeAt(n-10)&&105===i.charCodeAt(n-11)&&116===i.charCodeAt(n-12)&&97===i.charCodeAt(n-13)&&110===i.charCodeAt(n-14)&&88===i.charCodeAt(n-15),t.set(o,e)),e}}(),vc={};function yc(t){switch(typeof t){case"number":return t>=0&&(0|t)===t;case"string":{const e=vc[t];if(void 0!==e)return e;const i=t.length;if(0===i)return vc[t]=!1;let n=0;for(let e=0;e<i;++e)if(n=t.charCodeAt(e),0===e&&48===n&&i>1||n<48||n>57)return vc[t]=!1;return vc[t]=!0}default:return!1}}function Cc(t){return`${t.toLowerCase()}:presentation`}const bc=new Map,Sc=Object.freeze({define(t,e,i){const n=Cc(t);void 0===bc.get(n)?bc.set(n,e):bc.set(n,!1),i.register(dc.instance(n,e))},forTag(t,e){const i=Cc(t),n=bc.get(i);if(!1===n){return Wl.findResponsibleContainer(e).get(i)}return n||null}});class xc{constructor(t,e){this.template=t||null,this.styles=void 0===e?null:Array.isArray(e)?ai.create(e):e instanceof ai?e:ai.create([e])}applyTo(t){const e=t.$fastController;null===e.template&&(e.template=this.template),null===e.styles&&(e.styles=this.styles)}}class Ec extends Ai{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Sc.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new Tc(this===Ec?class extends Ec{}:this,t,e)}}function Ac(t,e,i){return"function"==typeof t?t(e,i):t}Ae([Qe],Ec.prototype,"template",void 0),Ae([Qe],Ec.prototype,"styles",void 0);class Tc{constructor(t,e,i){this.type=t,this.elementDefinition=e,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const i=this.definition,n=this.overrideDefinition,o=`${i.prefix||e.elementPrefix}-${i.baseName}`;e.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:t=>{const e=new xc(Ac(i.template,t,i),Ac(i.styles,t,i));t.definePresentation(e);let o=Ac(i.shadowOptions,t,i);t.shadowRootMode&&(o?n.shadowOptions||(o.mode=t.shadowRootMode):null!==o&&(o={mode:t.shadowRootMode})),t.defineElement({elementOptions:Ac(i.elementOptions,t,i),shadowOptions:o,attributes:Ac(i.attributes,t,i)})}})}}class Ic extends Ec{constructor(){super(...arguments),this.setItems=()=>{for(let t=0;t<this.slottedFeedbackItems.length;t++)this.slottedFeedbackItems[t].addEventListener("selected-change",this.handleItemSelected),this.slottedFeedbackItems[t].addEventListener("menu-changed",this.handleMenuChanged);this.currentSelected=this.slottedFeedbackItems[0]},this.resetItems=()=>{for(let t=0;t<this.slottedFeedbackItems.length;t++)this.slottedFeedbackItems[t].removeEventListener("selected-change",this.handleItemSelected),this.slottedFeedbackItems[t].removeEventListener("menu-changed",this.handleMenuChanged)},this.handleItemSelected=t=>{const e=t.target;e!==this.currentSelected&&(this.currentSelected.selected=!1,this.currentSelected.menuVisible=!1),this.handleSelected(e)},this.handleMenuChanged=t=>{const e=t.target;this.hideMessage(e)}}slottedFeedbackItemsChanged(){this.$fastController.isConnected&&this.setItems()}handleMenuTimer(t){this.menuTimer&&(t.toggleMenu(!1),clearTimeout(this.menuTimer))}handleSelected(t){this.currentSelected=t,t.selected=!t.selected,t.selected?t.toggleMenu(!0):(t.toggleMenu(!1),this.menuTimer&&clearTimeout(this.menuTimer)),this.hideMessage(t)}hideMessage(t){this.calloutDuration&&t.menuVisible&&t.showMessage&&(this.menuTimer=setTimeout((()=>{this.handleMenuTimer(t)}),this.calloutDuration))}disconnectedCallback(){super.disconnectedCallback(),this.menuTimer&&clearTimeout(this.menuTimer),this.resetItems()}}_l([Qe],Ic.prototype,"slottedFeedbackItems",void 0),_l([fi({attribute:"callout-duration"})],Ic.prototype,"calloutDuration",void 0);class Dc{constructor(){this.targetIndex=0}}class wc extends Dc{constructor(){super(...arguments),this.createPlaceholder=Fe.createInterpolationPlaceholder}}class kc extends Dc{constructor(t,e,i){super(),this.name=t,this.behavior=e,this.options=i}createPlaceholder(t){return Fe.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function Rc(t,e){this.source=t,this.context=e,null===this.bindingObserver&&(this.bindingObserver=Xe.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function Oc(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function Pc(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Mc(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function Nc(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Lc(t){Fe.setAttribute(this.target,this.targetName,t)}function _c(t){Fe.setBooleanAttribute(this.target,this.targetName,t)}function Fc(t){if(null==t&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;void 0===e?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function Hc(t){this.target[this.targetName]=t}function Bc(t){const e=this.classVersions||Object.create(null),i=this.target;let n=this.version||0;if(null!=t&&t.length){const o=t.split(/\s+/);for(let t=0,a=o.length;t<a;++t){const a=o[t];""!==a&&(e[a]=n,i.classList.add(a))}}if(this.classVersions=e,this.version=n+1,0!==n){n-=1;for(const t in e)e[t]===n&&i.classList.remove(t)}}class Uc extends wc{constructor(t){super(),this.binding=t,this.bind=Rc,this.unbind=Pc,this.updateTarget=Lc,this.isBindingVolatile=Xe.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,void 0!==t)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=Hc,"innerHTML"===this.cleanedTargetName){const t=this.binding;this.binding=(e,i)=>Fe.createHTML(t(e,i))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=_c;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=Oc,this.unbind=Nc;break;default:this.cleanedTargetName=t,"class"===t&&(this.updateTarget=Bc)}}targetAtContent(){this.updateTarget=Fc,this.unbind=Mc}createBehavior(t){return new Vc(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Vc{constructor(t,e,i,n,o,a,r){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=i,this.bind=n,this.unbind=o,this.updateTarget=a,this.targetName=r}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){ei(t);const e=this.binding(this.source,this.context);ei(null),!0!==e&&t.preventDefault()}}let $c=null;class Gc{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){$c=this}static borrow(t){const e=$c||new Gc;return e.directives=t,e.reset(),$c=null,e}}function zc(t){if(1===t.length)return t[0];let e;const i=t.length,n=t.map((t=>"string"==typeof t?()=>t:(e=t.targetName||e,t.binding))),o=new Uc(((t,e)=>{let o="";for(let a=0;a<i;++a)o+=n[a](t,e);return o}));return o.targetName=e,o}const Wc=_e.length;function Kc(t,e){const i=e.split(Le);if(1===i.length)return null;const n=[];for(let e=0,o=i.length;e<o;++e){const o=i[e],a=o.indexOf(_e);let r;if(-1===a)r=o;else{const e=parseInt(o.substring(0,a));n.push(t.directives[e]),r=o.substring(a+Wc)}""!==r&&n.push(r)}return n}function jc(t,e,i=!1){const n=e.attributes;for(let o=0,a=n.length;o<a;++o){const r=n[o],s=r.value,l=Kc(t,s);let c=null;null===l?i&&(c=new Uc((()=>s)),c.targetName=r.name):c=zc(l),null!==c&&(e.removeAttributeNode(r),o--,a--,t.addFactory(c))}}function Yc(t,e,i){const n=Kc(t,e.textContent);if(null!==n){let o=e;for(let a=0,r=n.length;a<r;++a){const r=n[a],s=0===a?e:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);"string"==typeof r?s.textContent=r:(s.textContent=" ",t.captureContentBinding(r)),o=s,t.targetIndex++,s!==e&&i.nextNode()}t.targetIndex--}}const qc=document.createRange();class Xc{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=t.parentNode,i=this.lastChild;let n,o=this.firstChild;for(;o!==i;)n=o.nextSibling,e.insertBefore(o,t),o=n;e.insertBefore(i,t)}}remove(){const t=this.fragment,e=this.lastChild;let i,n=this.firstChild;for(;n!==e;)i=n.nextSibling,t.appendChild(n),n=i;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let i,n=this.firstChild;for(;n!==e;)i=n.nextSibling,t.removeChild(n),n=i;t.removeChild(e);const o=this.behaviors,a=this.source;for(let t=0,e=o.length;t<e;++t)o[t].unbind(a)}bind(t,e){const i=this.behaviors;if(this.source!==t)if(null!==this.source){const n=this.source;this.source=t,this.context=e;for(let o=0,a=i.length;o<a;++o){const a=i[o];a.unbind(n),a.bind(t,e)}}else{this.source=t,this.context=e;for(let n=0,o=i.length;n<o;++n)i[n].bind(t,e)}}unbind(){if(null===this.source)return;const t=this.behaviors,e=this.source;for(let i=0,n=t.length;i<n;++i)t[i].unbind(e);this.source=null}static disposeContiguousBatch(t){if(0!==t.length){qc.setStartBefore(t[0].firstChild),qc.setEndAfter(t[t.length-1].lastChild),qc.deleteContents();for(let e=0,i=t.length;e<i;++e){const i=t[e],n=i.behaviors,o=i.source;for(let t=0,e=n.length;t<e;++t)n[t].unbind(o)}}}}class Zc{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(null===this.fragment){let t;const e=this.html;if("string"==typeof e){t=document.createElement("template"),t.innerHTML=Fe.createHTML(e);const i=t.content.firstElementChild;null!==i&&"TEMPLATE"===i.tagName&&(t=i)}else t=e;const i=function(t,e){const i=t.content;document.adoptNode(i);const n=Gc.borrow(e);jc(n,t,!0);const o=n.behaviorFactories;n.reset();const a=Fe.createTemplateWalker(i);let r;for(;r=a.nextNode();)switch(n.targetIndex++,r.nodeType){case 1:jc(n,r);break;case 3:Yc(n,r,a);break;case 8:Fe.isMarker(r)&&n.addFactory(e[Fe.extractDirectiveIndexFromMarker(r)])}let s=0;(Fe.isMarker(i.firstChild)||1===i.childNodes.length&&e.length)&&(i.insertBefore(document.createComment(""),i.firstChild),s=-1);const l=n.behaviorFactories;return n.release(),{fragment:i,viewBehaviorFactories:l,hostBehaviorFactories:o,targetOffset:s}}(t,this.directives);this.fragment=i.fragment,this.viewBehaviorFactories=i.viewBehaviorFactories,this.hostBehaviorFactories=i.hostBehaviorFactories,this.targetOffset=i.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,n=new Array(this.behaviorCount),o=Fe.createTemplateWalker(e);let a=0,r=this.targetOffset,s=o.nextNode();for(let t=i.length;a<t;++a){const t=i[a],e=t.targetIndex;for(;null!==s;){if(r===e){n[a]=t.createBehavior(s);break}s=o.nextNode(),r++}}if(this.hasHostBehaviors){const e=this.hostBehaviorFactories;for(let i=0,o=e.length;i<o;++i,++a)n[a]=e[i].createBehavior(t)}return new Xc(e,n)}render(t,e,i){"string"==typeof e&&(e=document.getElementById(e)),void 0===i&&(i=e);const n=this.create(i);return n.bind(t,ni),n.appendTo(e),n}}const Jc=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Qc(t,...e){const i=[];let n="";for(let o=0,a=t.length-1;o<a;++o){const a=t[o];let r=e[o];if(n+=a,r instanceof Zc){const t=r;r=()=>t}if("function"==typeof r&&(r=new Uc(r)),r instanceof wc){const t=Jc.exec(a);null!==t&&(r.targetName=t[2])}r instanceof Dc?(n+=r.createPlaceholder(i.length),i.push(r)):n+=r}return n+=t[t.length-1],new Zc(n,i)}function tu(t){return t?function(e,i,n){return 1===e.nodeType&&e.matches(t)}:function(t,e,i){return 1===t.nodeType}}class eu{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=Xe.getAccessors(t).some((t=>t.name===e)),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(De),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return void 0!==this.options.filter&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}class iu extends eu{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function nu(t){return"string"==typeof t&&(t={property:t}),new kc("fast-slotted",iu,t)}function ou(t,e){const i=[];let n="";const o=[];for(let a=0,r=t.length-1;a<r;++a){n+=t[a];let r=e[a];if(r instanceof Te){const t=r.createBehavior();r=r.createCSS(),t&&o.push(t)}r instanceof ai||r instanceof CSSStyleSheet?(""!==n.trim()&&(i.push(n),n=""),i.push(r)):n+=r}return n+=t[t.length-1],""!==n.trim()&&i.push(n),{styles:i,behaviors:o}}function au(t,...e){const{styles:i,behaviors:n}=ou(t,e),o=ai.create(i);return n.length&&o.withBehaviors(...n),o}class ru extends Te{constructor(t,e){super(),this.behaviors=e,this.css="";const i=t.reduce(((t,e)=>("string"==typeof e?this.css+=e:t.push(e),t)),[]);i.length&&(this.styles=ai.create(i))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function su(t){return`:host([hidden]){display:none}:host{display:${t}}`}const lu="resize",cu="scroll",uu=t=>{const e=t.closest("[dir]");return null!==e&&"rtl"===e.dir?Gi.rtl:Gi.ltr};class du extends Ec{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=Gi.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),null!==this.anchorElement&&(this.requestPositionUpdates(),null!==this.resizeDetector&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{null===this.anchorElement||this.pendingPositioningUpdate||(du.intersectionService.requestPosition(this,this.handleIntersection),du.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&du.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,du.intersectionService.cancelRequestPosition(this,this.handleIntersection),null!==this.anchorElement&&du.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&du.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),null!==this.resizeDetector&&this.resizeDetector.disconnect()},this.getViewport=()=>"string"!=typeof this.viewport||""===this.viewport?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const e=t.find((t=>t.target===this)),i=t.find((t=>t.target===this.anchorElement)),n=t.find((t=>t.target===this.viewportElement));return void 0!==e&&void 0!==n&&void 0!==i&&(!!(!this.regionVisible||this.forceUpdate||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect||this.isRectDifferent(this.anchorRect,i.boundingClientRect)||this.isRectDifferent(this.viewportRect,n.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect))&&(this.regionRect=e.boundingClientRect,this.anchorRect=i.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(n.boundingClientRect.x+document.documentElement.scrollLeft,n.boundingClientRect.y+document.documentElement.scrollTop,n.boundingClientRect.width,n.boundingClientRect.height):this.viewportRect=n.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0))},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,e)=>Math.abs(t.top-e.top)>this.updateThreshold||Math.abs(t.right-e.right)>this.updateThreshold||Math.abs(t.bottom-e.bottom)>this.updateThreshold||Math.abs(t.left-e.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,null===this.anchorElement&&(this.anchorElement=this.getAnchor()),null===this.viewportElement&&(this.viewportElement=this.getViewport()),this.currentDirection=uu(this),this.startObservers())},this.updateLayout=()=>{let t,e;if("uncontrolled"!==this.horizontalPositioningMode){const t=this.getPositioningOptions(this.horizontalInset);if("center"===this.horizontalDefaultPosition)e="center";else if("unset"!==this.horizontalDefaultPosition){let t=this.horizontalDefaultPosition;if("start"===t||"end"===t){const e=uu(this);if(e!==this.currentDirection)return this.currentDirection=e,void this.initialize();t=this.currentDirection===Gi.ltr?"start"===t?"left":"right":"start"===t?"right":"left"}switch(t){case"left":e=this.horizontalInset?"insetStart":"start";break;case"right":e=this.horizontalInset?"insetEnd":"end"}}const i=void 0!==this.horizontalThreshold?this.horizontalThreshold:void 0!==this.regionRect?this.regionRect.width:0,n=void 0!==this.anchorRect?this.anchorRect.left:0,o=void 0!==this.anchorRect?this.anchorRect.right:0,a=void 0!==this.anchorRect?this.anchorRect.width:0,r=void 0!==this.viewportRect?this.viewportRect.left:0,s=void 0!==this.viewportRect?this.viewportRect.right:0;(void 0===e||"locktodefault"!==this.horizontalPositioningMode&&this.getAvailableSpace(e,n,o,a,r,s)<i)&&(e=this.getAvailableSpace(t[0],n,o,a,r,s)>this.getAvailableSpace(t[1],n,o,a,r,s)?t[0]:t[1])}if("uncontrolled"!==this.verticalPositioningMode){const e=this.getPositioningOptions(this.verticalInset);if("center"===this.verticalDefaultPosition)t="center";else if("unset"!==this.verticalDefaultPosition)switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end"}const i=void 0!==this.verticalThreshold?this.verticalThreshold:void 0!==this.regionRect?this.regionRect.height:0,n=void 0!==this.anchorRect?this.anchorRect.top:0,o=void 0!==this.anchorRect?this.anchorRect.bottom:0,a=void 0!==this.anchorRect?this.anchorRect.height:0,r=void 0!==this.viewportRect?this.viewportRect.top:0,s=void 0!==this.viewportRect?this.viewportRect.bottom:0;(void 0===t||"locktodefault"!==this.verticalPositioningMode&&this.getAvailableSpace(t,n,o,a,r,s)<i)&&(t=this.getAvailableSpace(e[0],n,o,a,r,s)>this.getAvailableSpace(e[1],n,o,a,r,s)?e[0]:e[1])}const i=this.getNextRegionDimension(e,t),n=this.horizontalPosition!==e||this.verticalPosition!==t;if(this.setHorizontalPosition(e,i),this.setVerticalPosition(t,i),this.updateRegionStyle(),!this.initialLayoutComplete)return this.initialLayoutComplete=!0,void this.requestPositionUpdates();this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),n&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top","start"===this.verticalPosition),this.classList.toggle("bottom","end"===this.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.verticalPosition),this.classList.toggle("vertical-center","center"===this.verticalPosition),this.classList.toggle("left","start"===this.horizontalPosition),this.classList.toggle("right","end"===this.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.horizontalPosition),this.classList.toggle("horizontal-center","center"===this.horizontalPosition)},this.setHorizontalPosition=(t,e)=>{if(void 0===t||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let i=0;switch(this.horizontalScaling){case"anchor":case"fill":i=e.width,this.regionWidth=`${i}px`;break;case"content":i=this.regionRect.width,this.regionWidth="unset"}let n=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-i,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-i+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(n=(this.anchorRect.width-i)/2,this.translateX=this.baseHorizontalOffset+n,this.horizontalViewportLock){const t=this.anchorRect.left+n,e=this.anchorRect.right-n;t<this.viewportRect.left&&!(e>this.viewportRect.right)?this.translateX=this.translateX-(t-this.viewportRect.left):e>this.viewportRect.right&&!(t<this.viewportRect.left)&&(this.translateX=this.translateX-(e-this.viewportRect.right))}}this.horizontalPosition=t},this.setVerticalPosition=(t,e)=>{if(void 0===t||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let i=0;switch(this.verticalScaling){case"anchor":case"fill":i=e.height,this.regionHeight=`${i}px`;break;case"content":i=this.regionRect.height,this.regionHeight="unset"}let n=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-i,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-i+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(n=(this.anchorRect.height-i)/2,this.translateY=this.baseVerticalOffset+n,this.verticalViewportLock){const t=this.anchorRect.top+n,e=this.anchorRect.bottom-n;t<this.viewportRect.top&&!(e>this.viewportRect.bottom)?this.translateY=this.translateY-(t-this.viewportRect.top):e>this.viewportRect.bottom&&!(t<this.viewportRect.top)&&(this.translateY=this.translateY-(e-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,e,i,n,o,a)=>{const r=e-o,s=a-(e+n);switch(t){case"start":return r;case"insetStart":return r+n;case"insetEnd":return s+n;case"end":return s;case"center":return 2*Math.min(r,s)+n}},this.getNextRegionDimension=(t,e)=>{const i={height:void 0!==this.regionRect?this.regionRect.height:0,width:void 0!==this.regionRect?this.regionRect.width:0};return void 0!==t&&"fill"===this.horizontalScaling?i.width=this.getAvailableSpace(t,void 0!==this.anchorRect?this.anchorRect.left:0,void 0!==this.anchorRect?this.anchorRect.right:0,void 0!==this.anchorRect?this.anchorRect.width:0,void 0!==this.viewportRect?this.viewportRect.left:0,void 0!==this.viewportRect?this.viewportRect.right:0):"anchor"===this.horizontalScaling&&(i.width=void 0!==this.anchorRect?this.anchorRect.width:0),void 0!==e&&"fill"===this.verticalScaling?i.height=this.getAvailableSpace(e,void 0!==this.anchorRect?this.anchorRect.top:0,void 0!==this.anchorRect?this.anchorRect.bottom:0,void 0!==this.anchorRect?this.anchorRect.height:0,void 0!==this.viewportRect?this.viewportRect.top:0,void 0!==this.viewportRect?this.viewportRect.bottom:0):"anchor"===this.verticalScaling&&(i.height=void 0!==this.anchorRect?this.anchorRect.height:0),i},this.startAutoUpdateEventListeners=()=>{window.addEventListener(lu,this.update,{passive:!0}),window.addEventListener(cu,this.update,{passive:!0,capture:!0}),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(lu,this.update),window.removeEventListener(cu,this.update),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,e){this.$fastController.isConnected&&this.initialLayoutComplete&&("auto"===t&&this.stopAutoUpdateEventListeners(),"auto"===e&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),"auto"===this.autoUpdateMode&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),"auto"===this.autoUpdateMode&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){null!==this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),null===this.anchorElement&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&!1===this.pendingReset&&(this.setInitialState(),Fe.queueUpdate((()=>this.reset())),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}du.intersectionService=new class{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,e)=>{var i;null!==this.intersectionDetector&&(this.observedElements.has(t)?null===(i=this.observedElements.get(t))||void 0===i||i.push(e):(this.observedElements.set(t,[e]),this.intersectionDetector.observe(t)))},this.cancelRequestPosition=(t,e)=>{const i=this.observedElements.get(t);if(void 0!==i){const t=i.indexOf(e);-1!==t&&i.splice(t,1)}},this.initializeIntersectionDetector=()=>{Ie.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(null===this.intersectionDetector)return;const e=[],i=[];t.forEach((t=>{var n;null===(n=this.intersectionDetector)||void 0===n||n.unobserve(t.target);const o=this.observedElements.get(t.target);void 0!==o&&(o.forEach((n=>{let o=e.indexOf(n);-1===o&&(o=e.length,e.push(n),i.push([])),i[o].push(t)})),this.observedElements.delete(t.target))})),e.forEach(((t,e)=>{t(i[e])}))},this.initializeIntersectionDetector()}},Ae([fi],du.prototype,"anchor",void 0),Ae([fi],du.prototype,"viewport",void 0),Ae([fi({attribute:"horizontal-positioning-mode"})],du.prototype,"horizontalPositioningMode",void 0),Ae([fi({attribute:"horizontal-default-position"})],du.prototype,"horizontalDefaultPosition",void 0),Ae([fi({attribute:"horizontal-viewport-lock",mode:"boolean"})],du.prototype,"horizontalViewportLock",void 0),Ae([fi({attribute:"horizontal-inset",mode:"boolean"})],du.prototype,"horizontalInset",void 0),Ae([fi({attribute:"horizontal-threshold"})],du.prototype,"horizontalThreshold",void 0),Ae([fi({attribute:"horizontal-scaling"})],du.prototype,"horizontalScaling",void 0),Ae([fi({attribute:"vertical-positioning-mode"})],du.prototype,"verticalPositioningMode",void 0),Ae([fi({attribute:"vertical-default-position"})],du.prototype,"verticalDefaultPosition",void 0),Ae([fi({attribute:"vertical-viewport-lock",mode:"boolean"})],du.prototype,"verticalViewportLock",void 0),Ae([fi({attribute:"vertical-inset",mode:"boolean"})],du.prototype,"verticalInset",void 0),Ae([fi({attribute:"vertical-threshold"})],du.prototype,"verticalThreshold",void 0),Ae([fi({attribute:"vertical-scaling"})],du.prototype,"verticalScaling",void 0),Ae([fi({attribute:"fixed-placement",mode:"boolean"})],du.prototype,"fixedPlacement",void 0),Ae([fi({attribute:"auto-update-mode"})],du.prototype,"autoUpdateMode",void 0),Ae([Qe],du.prototype,"anchorElement",void 0),Ae([Qe],du.prototype,"viewportElement",void 0),Ae([Qe],du.prototype,"initialLayoutComplete",void 0);class hu{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function pu(t){return new kc("fast-ref",hu,t)}function fu(t,e){const i="function"==typeof e?e:()=>e;return(e,n)=>t(e,n)?i(e,n):null}class gu{}Ae([fi({attribute:"aria-atomic",mode:"fromView"})],gu.prototype,"ariaAtomic",void 0),Ae([fi({attribute:"aria-busy",mode:"fromView"})],gu.prototype,"ariaBusy",void 0),Ae([fi({attribute:"aria-controls",mode:"fromView"})],gu.prototype,"ariaControls",void 0),Ae([fi({attribute:"aria-current",mode:"fromView"})],gu.prototype,"ariaCurrent",void 0),Ae([fi({attribute:"aria-describedby",mode:"fromView"})],gu.prototype,"ariaDescribedby",void 0),Ae([fi({attribute:"aria-details",mode:"fromView"})],gu.prototype,"ariaDetails",void 0),Ae([fi({attribute:"aria-disabled",mode:"fromView"})],gu.prototype,"ariaDisabled",void 0),Ae([fi({attribute:"aria-errormessage",mode:"fromView"})],gu.prototype,"ariaErrormessage",void 0),Ae([fi({attribute:"aria-flowto",mode:"fromView"})],gu.prototype,"ariaFlowto",void 0),Ae([fi({attribute:"aria-haspopup",mode:"fromView"})],gu.prototype,"ariaHaspopup",void 0),Ae([fi({attribute:"aria-hidden",mode:"fromView"})],gu.prototype,"ariaHidden",void 0),Ae([fi({attribute:"aria-invalid",mode:"fromView"})],gu.prototype,"ariaInvalid",void 0),Ae([fi({attribute:"aria-keyshortcuts",mode:"fromView"})],gu.prototype,"ariaKeyshortcuts",void 0),Ae([fi({attribute:"aria-label",mode:"fromView"})],gu.prototype,"ariaLabel",void 0),Ae([fi({attribute:"aria-labelledby",mode:"fromView"})],gu.prototype,"ariaLabelledby",void 0),Ae([fi({attribute:"aria-live",mode:"fromView"})],gu.prototype,"ariaLive",void 0),Ae([fi({attribute:"aria-owns",mode:"fromView"})],gu.prototype,"ariaOwns",void 0),Ae([fi({attribute:"aria-relevant",mode:"fromView"})],gu.prototype,"ariaRelevant",void 0),Ae([fi({attribute:"aria-roledescription",mode:"fromView"})],gu.prototype,"ariaRoledescription",void 0);class mu{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const vu=(t,e)=>Qc`
    <span
        part="end"
        ${pu("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${pu("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,yu=(t,e)=>Qc`
    <span
        part="start"
        ${pu("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${pu("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,Cu=Qc`
    <span part="end" ${pu("endContainer")}>
        <slot
            name="end"
            ${pu("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`,bu=Qc`
    <span part="start" ${pu("startContainer")}>
        <slot
            name="start"
            ${pu("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`;function Su(t,...e){e.forEach((e=>{if(Object.getOwnPropertyNames(e.prototype).forEach((i=>{"constructor"!==i&&Object.defineProperty(t.prototype,i,Object.getOwnPropertyDescriptor(e.prototype,i))})),e.attributes){const i=t.attributes||[];t.attributes=i.concat(e.attributes)}}))}var xu;!function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"}(xu||(xu={}));const Eu="ArrowDown",Au="ArrowLeft",Tu="ArrowRight",Iu="ArrowUp",Du="Enter",wu="Escape",ku="Home",Ru="End",Ou=" ",Pu={ArrowDown:Eu,ArrowLeft:Au,ArrowRight:Tu,ArrowUp:Iu},Mu="form-associated-proxy",Nu="ElementInternals",Lu=Nu in window&&"setFormValue"in window.ElementInternals.prototype,_u=new Map;function Fu(t){const e=class extends t{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Lu}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,e=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=t?e.concat(Array.from(t)):e;return Object.freeze(i)}return De}valueChanged(t,e){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),Fe.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),Fe.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!Lu)return null;let t=_u.get(this);return t||(t=this.attachInternals(),_u.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((t=>this.proxy.removeEventListener(t,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,e,i){this.elementInternals?this.elementInternals.setValidity(t,e,i):"string"==typeof e&&this.proxy.setCustomValidity(e)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((t=>this.proxy.addEventListener(t,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Mu),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Mu)),null===(t=this.shadowRoot)||void 0===t||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),null===(t=this.shadowRoot)||void 0===t||t.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(t,e){this.elementInternals&&this.elementInternals.setFormValue(t,e||t)}_keypressHandler(t){if(t.key===Du)if(this.form instanceof HTMLFormElement){const t=this.form.querySelector("[type=submit]");null==t||t.click()}}stopPropagation(t){t.stopPropagation()}};return fi({mode:"boolean"})(e.prototype,"disabled"),fi({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),fi({attribute:"current-value"})(e.prototype,"currentValue"),fi(e.prototype,"name"),fi({mode:"boolean"})(e.prototype,"required"),Qe(e.prototype,"value"),e}function Hu(t){class e extends(Fu(t)){}class i extends e{constructor(...t){super(t),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(t,e){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==t&&this.$emit("change"),this.validate()}currentCheckedChanged(t,e){this.checked=this.currentChecked}updateForm(){const t=this.checked?this.value:null;this.setFormValue(t,t)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return fi({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),fi({attribute:"current-checked",converter:di})(i.prototype,"currentChecked"),Qe(i.prototype,"defaultChecked"),Qe(i.prototype,"checked"),i}class Bu extends Ec{}class Uu extends(Fu(Bu)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Vu extends Uu{constructor(){super(...arguments),this.handleClick=t=>{var e;this.disabled&&(null===(e=this.defaultSlottedContent)||void 0===e?void 0:e.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;null===(t=this.form)||void 0===t||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(t=this.$fastController.definition.shadowOptions)||void 0===t?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===e&&this.addEventListener("click",this.handleSubmission),"submit"===t&&this.removeEventListener("click",this.handleSubmission),"reset"===e&&this.addEventListener("click",this.handleFormReset),"reset"===t&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const e=Array.from(null===(t=this.control)||void 0===t?void 0:t.children);e&&e.forEach((t=>{t.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var t;super.disconnectedCallback();const e=Array.from(null===(t=this.control)||void 0===t?void 0:t.children);e&&e.forEach((t=>{t.removeEventListener("click",this.handleClick)}))}}Ae([fi({mode:"boolean"})],Vu.prototype,"autofocus",void 0),Ae([fi({attribute:"form"})],Vu.prototype,"formId",void 0),Ae([fi],Vu.prototype,"formaction",void 0),Ae([fi],Vu.prototype,"formenctype",void 0),Ae([fi],Vu.prototype,"formmethod",void 0),Ae([fi({mode:"boolean"})],Vu.prototype,"formnovalidate",void 0),Ae([fi],Vu.prototype,"formtarget",void 0),Ae([fi],Vu.prototype,"type",void 0),Ae([Qe],Vu.prototype,"defaultSlottedContent",void 0);class $u{}Ae([fi({attribute:"aria-expanded",mode:"fromView"})],$u.prototype,"ariaExpanded",void 0),Ae([fi({attribute:"aria-pressed",mode:"fromView"})],$u.prototype,"ariaPressed",void 0),Su($u,gu),Su(Vu,mu,$u);function Gu(...t){return t.every((t=>t instanceof HTMLElement))}let zu;var Wu;!function(t){t.menuitem="menuitem",t.menuitemcheckbox="menuitemcheckbox",t.menuitemradio="menuitemradio"}(Wu||(Wu={}));const Ku={[Wu.menuitem]:"menuitem",[Wu.menuitemcheckbox]:"menuitemcheckbox",[Wu.menuitemradio]:"menuitemradio"};class ju extends Ec{constructor(){super(...arguments),this.role=Wu.menuitem,this.hasSubmenu=!1,this.currentDirection=Gi.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case Du:case Ou:return this.invoke(),!1;case Tu:return this.expandAndFocus(),!1;case Au:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case Wu.menuitemcheckbox:this.checked=!this.checked;break;case Wu.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case Wu.menuitemradio:this.checked||(this.checked=!0)}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find((t=>"menu"===t.getAttribute("role"))),this.hasSubmenu=void 0!==this.submenu}}expandedChanged(t){if(this.$fastController.isConnected){if(void 0===this.submenu)return;!1===this.expanded?this.submenu.collapseExpandedItem():this.currentDirection=uu(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,e){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),Fe.queueUpdate((()=>{this.updateSubmenu()})),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,void 0!==this.observer&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children)}}Ae([fi({mode:"boolean"})],ju.prototype,"disabled",void 0),Ae([fi({mode:"boolean"})],ju.prototype,"expanded",void 0),Ae([Qe],ju.prototype,"startColumnCount",void 0),Ae([fi],ju.prototype,"role",void 0),Ae([fi({mode:"boolean"})],ju.prototype,"checked",void 0),Ae([Qe],ju.prototype,"submenuRegion",void 0),Ae([Qe],ju.prototype,"hasSubmenu",void 0),Ae([Qe],ju.prototype,"currentDirection",void 0),Ae([Qe],ju.prototype,"submenu",void 0),Su(ju,mu);class Yu extends Ec{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&Gu(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&void 0!==this.menuItems){this.collapseExpandedItem();const t=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[t].setAttribute("tabindex","0"),this.focusIndex=t}},this.handleItemFocus=t=>{const e=t.target;void 0!==this.menuItems&&e!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||null===t.target||void 0===this.menuItems||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const e=t.target;null===this.expandedItem||e!==this.expandedItem||!1!==e.expanded?e.expanded&&(null!==this.expandedItem&&this.expandedItem!==e&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=e,this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0")):this.expandedItem=null},this.removeItemListeners=()=>{void 0!==this.menuItems&&this.menuItems.forEach((t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)}))},this.setItems=()=>{const t=this.domChildren();this.removeItemListeners(),this.menuItems=t;const e=this.menuItems.filter(this.isMenuItemElement);e.length&&(this.focusIndex=0);const i=e.reduce(((t,e)=>{const i=(n=e)instanceof ju?n.role!==Wu.menuitem&&null===n.querySelector("[slot=start]")||n.role===Wu.menuitem&&null!==n.querySelector("[slot=start]")?1:n.role!==Wu.menuitem&&null!==n.querySelector("[slot=start]")?2:0:1;var n;return t>i?t:i}),0);e.forEach(((t,e)=>{t.setAttribute("tabindex",0===e?"0":"-1"),t.addEventListener("expanded-change",this.handleExpandedChanged),t.addEventListener("focus",this.handleItemFocus),t instanceof ju&&(t.startColumnCount=i)}))},this.changeHandler=t=>{if(void 0===this.menuItems)return;const e=t.target,i=this.menuItems.indexOf(e);if(-1!==i&&"menuitemradio"===e.role&&!0===e.checked){for(let t=i-1;t>=0;--t){const e=this.menuItems[t],i=e.getAttribute("role");if(i===Wu.menuitemradio&&(e.checked=!1),"separator"===i)break}const t=this.menuItems.length-1;for(let e=i+1;e<=t;++e){const t=this.menuItems[e],i=t.getAttribute("role");if(i===Wu.menuitemradio&&(t.checked=!1),"separator"===i)break}}},this.isMenuItemElement=t=>Gu(t)&&Yu.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,e){this.$fastController.isConnected&&void 0!==this.menuItems&&this.setItems()}connectedCallback(){super.connectedCallback(),Fe.queueUpdate((()=>{this.setItems()})),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!t.defaultPrevented&&void 0!==this.menuItems)switch(t.key){case Eu:return void this.setFocus(this.focusIndex+1,1);case Iu:return void this.setFocus(this.focusIndex-1,-1);case Ru:return void this.setFocus(this.menuItems.length-1,-1);case ku:return void this.setFocus(0,1);default:return!0}}domChildren(){return Array.from(this.children)}setFocus(t,e){if(void 0!==this.menuItems)for(;t>=0&&t<this.menuItems.length;){const i=this.menuItems[t];if(this.isFocusableElement(i)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,i.setAttribute("tabindex","0"),i.focus();break}t+=e}}}var qu;Yu.focusableElementRoles=Ku,Ae([Qe],Yu.prototype,"items",void 0),function(t){t.top="top",t.bottom="bottom"}(qu||(qu={}));class Xu extends Ec{constructor(){super(...arguments),this.selected=!1,this.flyoutVerticalPosition=qu.bottom,this.menuVisible=!1,this.slottedMenu=[],this.showMessage=!1,this.handleClick=t=>{this.handleSelected(t)},this.menuItemChange=()=>{this.showMessage=!0,this.$emit("menu-changed"),document.activeElement!==this&&this.anchorElement.focus()},this.handleMenuKeydown=t=>{if(27===t.keyCode)this.toggleMenu(!1),document.activeElement!==this&&this.anchorElement.focus()},this.toggleMenu=t=>{this.menuVisible=t,this.showMessage=null===this.querySelector('[role="menu"]'),this.$emit("menu-toggled"),Fe.queueUpdate(this.setRegionProps)},this.setRegionProps=()=>{this.menuVisible&&(this.regionElement.anchorElement=this.anchorElement)}}handleSelected(t){this.$emit("selected-change",t)}slottedMenuChanged(){this.$fastController.isConnected&&Fe.queueUpdate((()=>{this.menuVisible||(this.showMessage=null===this.querySelector('[role="menu"]'));const t=this.slottedMenu[0];t&&(t.childNodes.forEach((t=>{t.addEventListener("change",this.menuItemChange)})),t.addEventListener("keydown",this.handleMenuKeydown))}))}handleFocusOut(t){return this.parentElement instanceof Ic&&!this.showMessage&&this.slottedMenu[0]&&(this.slottedMenu[0].contains(t.relatedTarget)||this.toggleMenu(!1)),!1}handleRegionLoaded(t){Fe.queueUpdate((()=>{if(this.menuVisible&&this.slottedMenu.length>0&&this.slottedMenu[0]instanceof Yu){const t=this.slottedMenu[0];Fe.queueUpdate((()=>t.focus()))}}))}connectedCallback(){super.connectedCallback(),Fe.queueUpdate(this.setRegionProps),Fe.queueUpdate((()=>{this.showMessage=null===this.querySelector('[role="menu"]')}))}disconnectedCallback(){super.disconnectedCallback();const t=this.slottedMenu[0];t&&(t.childNodes.forEach((t=>{t.addEventListener("change",this.menuItemChange)})),t.removeEventListener("keydown",this.handleMenuKeydown))}}_l([fi({mode:"boolean"})],Xu.prototype,"selected",void 0),_l([fi({attribute:"flyout-vertical-position",mode:"fromView"})],Xu.prototype,"flyoutVerticalPosition",void 0),_l([fi({attribute:"aria-label",mode:"fromView"})],Xu.prototype,"ariaLabel",void 0),_l([Qe],Xu.prototype,"menuVisible",void 0),_l([Qe],Xu.prototype,"slottedMenu",void 0),_l([Qe],Xu.prototype,"showMessage",void 0);const Zu=Ic.compose({baseName:"micro-feedback",template:(t,e)=>Qc`
        <slot
            ${nu({property:"slottedFeedbackItems",filter:tu()})}
        ></slot>
    `,styles:(t,e)=>au`
        ${su("inline-grid")} :host {
            grid-auto-flow: column;
            grid-column-gap: 4px;
        }
    `}),Ju=Xu.compose({baseName:"micro-feedback-item",template:(t,e)=>Qc`
        <template
            @focusout="${(t,e)=>t.handleFocusOut(e.event)}"
        >
            <${t.tagFor(Vu)}
                ${pu("anchorElement")}
                appearance="stealth"
                class="button"
                part="button"
                aria-label="${t=>t.ariaLabel}"
                aria-pressed="${t=>t.selected}"
                @click="${(t,e)=>t.handleClick(e.event)}"
            >
                <span name="unselected-glyph" class="unselected-glyph ${t=>t.selected?"hidden":"visible"}">
                    <slot name="unselected-glyph">${e.unselectedGlyph||""}</slot>
                </span>
                <span name="selected-glyph" class="selected-glyph ${t=>t.selected?"visible":"hidden"}">
                    <slot name="selected-glyph">${e.selectedGlyph||""}</slot>
                </span>
                <slot></slot>
            </${t.tagFor(Vu)}>
            ${fu((t=>t.menuVisible),Qc`
                <${t.tagFor(du)}
                    ${pu("regionElement")}
                    class="flyout"
                    part="flyout"
                    vertical-positioning-mode="locktodefault"
                    vertical-default-position="${t=>t.flyoutVerticalPosition}"
                    vertical-scaling="content"
                    horizontal-positioning-mode="locktodefault"
                    horizontal-scaling="content"
                    horizontal-inset="true"
                    auto-update-mode="auto"
                    @loaded="${(t,e)=>t.handleRegionLoaded(e.event)}"
                >
                    ${fu((t=>!t.showMessage),Qc`<slot
                            name="menu"
                            ${nu({property:"slottedMenu",filter:tu('[role="menu"]')})}
                        ></slot>`)}
                    ${fu((t=>t.showMessage),Qc`<slot name="feedback-message"></slot>`)}
                </${t.tagFor(du)}>`)}
        </template>
    `,styles:(t,e)=>au`
        ${su("grid")} :host {
        }

        fluent-button::part(content) {
            display: flex;
        }

        .hidden {
            display: none;
        }

        .visible {
            display: flex;
        }
    `});function Qu(t,e,i,n){var o,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r}class td extends Ec{handleFooterContentChange(){this.footerContainer.classList.toggle("footer",this.footer.assignedNodes().length>0)}handleActionsContentChange(){this.actionsContainer.classList.toggle("actions",this.actions.assignedNodes().length>0)}handleHeaderIconContentChange(){this.headerIconContainer.classList.toggle("header-icon",this.headerIcon.assignedNodes().length>0)}handleStartContentChange(){this.startContentContainer.classList.toggle("start-content",this.startContent.assignedNodes().length>0)}}Qu([fi({attribute:"fixed-title",mode:"fromView"})],td.prototype,"fixedTitle",void 0),Qu([fi({mode:"fromView"})],td.prototype,"title",void 0),Qu([fi({attribute:"sub-title",mode:"fromView"})],td.prototype,"subTitle",void 0),Qu([Qe],td.prototype,"footerSlottedNodes",void 0),Qu([Qe],td.prototype,"actionsSlottedNodes",void 0),Qu([Qe],td.prototype,"startContentSlottedNodes",void 0);const ed=td.compose({baseName:"edge-shopping",template:(t,e)=>Qc`
    <template>
        <header class="header-fixed" part="header-fixed">
            <div class="header-title-wrapper">
                <span part="header-icon" aria-hidden="true" ${pu("headerIconContainer")}>
                    <slot
                        name="header-icon"
                        ${pu("headerIcon")}
                        @slotchange=${t=>t.handleHeaderIconContentChange()}
                    ></slot>
                </span>
                <h1 class="header-fixed-title" part="header-fixed-title">
                    ${t=>t.fixedTitle}
                </h1>
            </div>
            <div class="header-actions" part="header-actions">
                <slot name="header-actions"></slot>
            </div>
        </header>
        <div class="content" part="content">
            <div
                class="${t=>t.startContentSlottedNodes&&t.startContentSlottedNodes.length?"start-content":"start-content__hidden"}"
                part="start-content"
                ${pu("startContentContainer")}
            >
                <slot
                    name="start-content"
                    ${pu("startContent")}
                    ${nu("startContentSlottedNodes")}
                    @slotchange="${t=>t.handleStartContentChange()}"
                ></slot>
            </div>
            <div class="header" part="header">
                <slot name="header-content">
                    ${fu((t=>t.title),Qc`
                            <h2 class="header-title" part="header-title">
                                ${t=>t.title}
                            </h2>
                        `)}
                    ${fu((t=>t.subTitle),Qc`
                            <p class="header-sub-title" part="header-sub-title">
                                ${t=>t.subTitle}
                            </p>
                        `)}
                </slot>
                <div
                    class="${t=>t.actionsSlottedNodes&&t.actionsSlottedNodes.length?"actions":"actions__hidden"}"
                    part="actions"
                    ${pu("actionsContainer")}
                >
                    <slot
                        name="actions"
                        ${pu("actions")}
                        ${nu("actionsSlottedNodes")}
                        @slotchange="${t=>t.handleActionsContentChange()}"
                    ></slot>
                </div>
            </div>
            <div class="sections" part="sections">
                <slot></slot>
            </div>
            <footer
                class="${t=>t.footerSlottedNodes&&t.footerSlottedNodes.length?"footer":"footer__hidden"}"
                part="footer"
                ${pu("footerContainer")}
            >
                <slot
                    name="footer"
                    ${pu("footer")}
                    ${nu("footerSlottedNodes")}
                    @slotchange="${t=>t.handleFooterContentChange()}"
                ></slot>
            </footer>
            <slot name="feedback"></slot>
        </div>
    </template>
`,styles:(t,e)=>au`
        ${su("flex")} :host {
            --side-padding: 12px;
            flex-direction: column;
            height: 100%;
            font-size: ${po};
            line-height: ${fo};
        }

        .content {
            overflow: hidden;
            overflow-y: auto;
        }

        .header-fixed {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 40px;
        }

        .header-title-wrapper {
            display: flex;
            align-items: center;
            margin-inline-start: 8px;
        }

        .header-icon {
            display: flex;
            margin-inline-start: 4px;
        }

        .header-fixed-title {
            display: inline-block;
            font-weight: 600;
            margin-inline-start: 8px;
            margin-top: 9px;
            margin-bottom: 11px;
            font-size: ${po};
            line-height: ${fo};
        }

        .header-actions {
            margin: 4px;
        }

        .illustration-container {
            display: flex;
            justify-content: center;
        }

        .header {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .header-title,
        .header-sub-title {
            display: inline;
        }

        .header-title {
            margin: 16px 16px 8px;
            font-size: ${bo};
            line-height: ${xo};
        }

        .header-sub-title {
            margin: 0 32px 8px 32px;
            font-weight: 600;
            font-size: ${po};
            line-height: ${fo};
        }

        .sections {
            padding: 0 var(--side-padding);
        }

        .footer,
        .actions {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .footer {
            padding: 10px 12px;
            border-top: calc(${co} * 1px) solid ${dr};
        }

        ::slotted([slot="feedback"]) {
            display: flex;
            align-items: center;
            padding: 10px 12px;
            border-top: calc(${co} * 1px) solid ${dr};
        }

        .actions {
            display: flex;
            flex-direction: column;
            width: calc(100% - 24px);
            padding: 10px 12px 13px;
            border-bottom: calc(${co} * 1px) solid ${dr};
        }

        .footer__hidden,
        .actions__hidden {
            display: none;
        }

        .start-content {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 12px;
        }

        .start-content__hidden {
            display: none;
        }
    `});class id extends Ec{constructor(){super(...arguments),this.accordion=!1,this.titleLevel=2}connectedCallback(){super.connectedCallback(),null!==this.expanded&&void 0!==this.expanded||(this.expanded=!0)}}Qu([fi({mode:"boolean"})],id.prototype,"accordion",void 0),Qu([fi({mode:"boolean"})],id.prototype,"expanded",void 0),Qu([fi({mode:"fromView"})],id.prototype,"title",void 0),Qu([fi({attribute:"title-level",mode:"fromView",converter:hi})],id.prototype,"titleLevel",void 0),Qu([Qe],id.prototype,"childElements",void 0);class nd extends eu{constructor(t,e){super(t,e),this.observer=null,e.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function od(t){return"string"==typeof t&&(t={property:t}),new kc("fast-children",nd,t)}function ad(t,e){return e&&e.some((e=>e.slot===t))}class rd extends class{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,i=this.constructListener(t);i.bind(e)(),e.addListener(i),this.listenerCache.set(t,i)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new rd(t,e)}constructListener(t){let e=!1;const i=this.styles;return function(){const{matches:n}=this;n&&!e?(t.$fastController.addStyles(i),e=n):!n&&e&&(t.$fastController.removeStyles(i),e=n)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const sd=rd.with(window.matchMedia("(forced-colors)")),ld=rd.with(window.matchMedia("(prefers-color-scheme: dark)"));rd.with(window.matchMedia("(prefers-color-scheme: light)"));var cd;!function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"}(cd||(cd={}));const ud=id.compose({baseName:"edge-shopping-section",template:(t,e)=>Qc`
    <template ${od({property:"childElements",filter:tu()})}>
        ${fu((t=>t.accordion),Qc`
                <fluent-accordion part="control">
                    <fluent-accordion-item
                        part="item"
                        class="item"
                        expanded="${t=>t.expanded?"true":"false"}"
                        heading-level="${t=>t.titleLevel}"
                    >
                        <svg
                            class="icon"
                            part="expanded-icon"
                            slot="expanded-icon"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentcolor"
                                d="M11.4551 8.98242L6 3.5332L0.544922 8.98242L0.0175781 8.45508L6 2.4668L11.9824 8.45508L11.4551 8.98242Z"
                            />
                        </svg>
                        <svg
                            class="icon"
                            part="collapsed-icon"
                            slot="collapsed-icon"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentcolor"
                                d="M11.3613 2.73633L11.8887 3.26367L6 9.15234L0.111328 3.26367L0.638672 2.73633L6 8.09766L11.3613 2.73633Z"
                                fill="black"
                            />
                        </svg>

                        <span part="title" slot="heading">${t=>t.title}</span>
                        <slot></slot>
                        ${fu((t=>ad("action",t.childElements)),Qc`
                                <div class="action" part="action">
                                    <slot name="action"></slot>
                                </div>
                            `)}
                    </fluent-accordion-item>
                </fluent-accordion>
            `)}
        ${fu((t=>!t.accordion),Qc`
                <div class="control" part="control">
                    <span
                        class="heading"
                        part="title"
                        slot="heading"
                        role="heading"
                        aria-level="${t=>t.titleLevel}"
                        >${t=>t.title}</span
                    >
                    <slot></slot>
                    ${fu((t=>ad("action",t.childElements)),Qc`
                            <div class="action" part="action">
                                <slot name="action"></slot>
                            </div>
                        `)}
                </div>
            `)}
    </template>
`,styles:(t,e)=>au`
        :host {
            overflow: hidden;
        }

        fluent-accordion {
            border: none;
            margin-bottom: 10px;
        }

        fluent-accordion-item {
            border: none;
        }

        fluent-accordion-item::part(heading),
        .heading {
            margin-bottom: 6px;
            font-size: ${go};
        }

        .heading {
            margin-inline-start: 5px;
            display: inline-block;
            line-height: ${bo};
            margin-bottom: 6px;
        }

        fluent-accordion-item::part(region) {
            padding: 0;
            flex-direction: column;
        }

        .action {
            color: ${wa};
            font-size: ${go};
            height: 38px;
            display: flex;
            margin-inline-start: 16px;
            align-items: center;
        }
    `.withBehaviors(sd(au`
                fluent-accordion-item {
                    color: ${cd.ButtonText};
                }
            `))});var dd=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},hd="object"==typeof global&&global&&global.Object===Object&&global,pd="object"==typeof self&&self&&self.Object===Object&&self,fd=hd||pd||Function("return this")(),gd=function(){return fd.Date.now()},md=/\s/;var vd=function(t){for(var e=t.length;e--&&md.test(t.charAt(e)););return e},yd=/^\s+/;var Cd=function(t){return t?t.slice(0,vd(t)+1).replace(yd,""):t},bd=fd.Symbol,Sd=Object.prototype,xd=Sd.hasOwnProperty,Ed=Sd.toString,Ad=bd?bd.toStringTag:void 0;var Td=function(t){var e=xd.call(t,Ad),i=t[Ad];try{t[Ad]=void 0;var n=!0}catch(t){}var o=Ed.call(t);return n&&(e?t[Ad]=i:delete t[Ad]),o},Id=Object.prototype.toString;var Dd=function(t){return Id.call(t)},wd=bd?bd.toStringTag:void 0;var kd=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":wd&&wd in Object(t)?Td(t):Dd(t)};var Rd=function(t){return null!=t&&"object"==typeof t};var Od=function(t){return"symbol"==typeof t||Rd(t)&&"[object Symbol]"==kd(t)},Pd=/^[-+]0x[0-9a-f]+$/i,Md=/^0b[01]+$/i,Nd=/^0o[0-7]+$/i,Ld=parseInt;var _d=function(t){if("number"==typeof t)return t;if(Od(t))return NaN;if(dd(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=dd(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Cd(t);var i=Md.test(t);return i||Nd.test(t)?Ld(t.slice(2),i?2:8):Pd.test(t)?NaN:+t},Fd=Math.max,Hd=Math.min;var Bd=function(t,e,i){var n,o,a,r,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var i=n,a=o;return n=o=void 0,c=e,r=t.apply(a,i)}function f(t){return c=t,s=setTimeout(m,e),u?p(t):r}function g(t){var i=t-l;return void 0===l||i>=e||i<0||d&&t-c>=a}function m(){var t=gd();if(g(t))return v(t);s=setTimeout(m,function(t){var i=e-(t-l);return d?Hd(i,a-(t-c)):i}(t))}function v(t){return s=void 0,h&&n?p(t):(n=o=void 0,r)}function y(){var t=gd(),i=g(t);if(n=arguments,o=this,l=t,i){if(void 0===s)return f(l);if(d)return clearTimeout(s),s=setTimeout(m,e),p(l)}return void 0===s&&(s=setTimeout(m,e)),r}return e=_d(e)||0,dd(i)&&(u=!!i.leading,a=(d="maxWait"in i)?Fd(_d(i.maxWait)||0,e):a,h="trailing"in i?!!i.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},y.flush=function(){return void 0===s?r:v(gd())},y};var Ud=function(t,e,i){var n=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return dd(i)&&(n="leading"in i?!!i.leading:n,o="trailing"in i?!!i.trailing:o),Bd(t,e,{leading:n,maxWait:e,trailing:o})};class Vd extends Ec{constructor(){super(),this.direction=Gi.ltr,this.currentSlotElementWidth=0,this.currentContentGapSize=0,this.setFlippersVisabilityFromPageState=()=>{const t=this.viewport.clientWidth,e=this.container.clientWidth;if(!t||!e||t>=e)return void this.setFlippersHiddenVisibility(!0,!0);const i=this.viewport.scrollLeft;0!==i?t+Math.abs(i)>=e?this.setFlippersHiddenVisibility(!1,!0):this.setFlippersHiddenVisibility(!1,!1):this.setFlippersHiddenVisibility(!0,!1)},this.handleResize=()=>{this.setFlippersVisabilityFromPageState()},this.handleResize=Ud(this.handleResize,200)}connectedCallback(){super.connectedCallback(),this.direction=eo.getValueFor(this),this.setFlippersVisabilityFromPageState(),window.addEventListener("resize",this.handleResize)}disconnectedCallback(){window.removeEventListener("resize",this.handleResize)}handleChange(){this.direction=eo.getValueFor(this),this.flipperNext.children[0].hidden=!1,this.flipperPrevious.children[0].hidden=!0}handleSlotContentChange(){const t=this.viewportSlot.assignedElements();t.length>0&&(this.currentSlotElementWidth=t[0].clientWidth);const e=window.getComputedStyle(this.container).rowGap;this.currentContentGapSize=e?Number(e.replace(/px/,"")):0,this.setFlippersVisabilityFromPageState()}slideKeyPressHandler(t){const e="rtl"!==this.direction;e||(t*=-1);const i=this.viewport.scrollLeft;if(e&&t<0&&0===i||!e&&t>0&&0===i)return;const n=this.viewport.clientWidth,o=this.container.clientWidth;if(n<=0||o<=0)return;if(n>=o)return void this.setFlippersHiddenVisibility(!0,!0);const a=t*this.getScrollDistance();(e&&t>0||!e&&t<0)&&((Math.abs(a)+Math.abs(i)>=o||o-(Math.abs(a)+Math.abs(i))<=n)&&this.hideFlipperNext(!0),this.hideFlipperPrevious(!1)),e&&t<0&&(a+i<=0&&this.hideFlipperPrevious(!0),this.hideFlipperNext(!1)),!e&&t>0&&(a+i>=0&&this.hideFlipperPrevious(!0),this.hideFlipperNext(!1)),requestAnimationFrame((()=>{this.viewport.scrollTo(this.viewport.scrollLeft+a,0)}))}hideFlipperNext(t){this.flipperNext.children[0].hidden=t}hideFlipperPrevious(t){this.flipperPrevious.children[0].hidden=t}setFlippersHiddenVisibility(t,e){this.hideFlipperPrevious(t),this.hideFlipperNext(e)}getOneElementUnit(){return this.currentSlotElementWidth+this.currentContentGapSize}getScrollDistance(){const t=this.viewport.clientWidth;if(t<=0)return 0;const e=this.getOneElementUnit();if(!e||e<=0)return 0;const i=Math.floor(t/e)*e;return i<=0?e:i}}Qu([Qe],Vd.prototype,"direction",void 0),Qu([Qe],Vd.prototype,"flipperNextTelemetryTag",void 0),Qu([Qe],Vd.prototype,"flipperPreviousTelemetryTag",void 0);const $d=Object.freeze({bind(){},unbind(){}}),Gd=Object.freeze({targetIndex:0,createBehavior:()=>$d});class zd extends Dc{constructor(t,e){super(),this.metadataOrBinding=t,this.options=e,this._factory=null}get factory(){let t=this._factory;return null===t&&(this._factory=t=this.selectFactory()),t}createBehavior(t){return this.factory.createBehavior(t)}createPlaceholder(t){return Fe.createCustomAttributePlaceholder("fast-telemetry",t)}static installFactorySelector(t){zd.prototype.selectFactory=t}selectFactory(){return Gd}}function Wd(t,e){return new zd(t,e)}const Kd=Vd.compose({baseName:"horizontal-card-slider",template:(t,e)=>Qc`
    <div
        ${pu("viewport")}
        class="viewport"
        part="viewport"
        direction="${t=>t.direction?t.direction:"ltr"}"
    >
        <div class="container" part="container" ${pu("container")}>
            <slot
                ${pu("viewportSlot")}
                @slotchange=${t=>t.handleSlotContentChange()}
            ></slot>
        </div>
    </div>
    <div class="flipper-container" part="flipper-container">
        <slot ${pu("flipperPrevious")} name="flipper-previous">
            <fluent-flipper
                direction="${t=>"rtl"===t.direction?"next":"previous"}"
                class="flipper-previous"
                part="flipper-previous"
                @click="${t=>t.slideKeyPressHandler(-1)}"
                ${Wd((t=>t.flipperPreviousTelemetryTag))}
                hidden
            ></fluent-flipper>
        </slot>
        <slot ${pu("flipperNext")} name="flipper-next">
            <fluent-flipper
                direction="${t=>"rtl"===t.direction?"previous":"next"}"
                class="flipper-next"
                part="flipper-next"
                @click="${t=>t.slideKeyPressHandler(1)}"
                ${Wd((t=>t.flipperNextTelemetryTag))}
                hidden
            ></fluent-flipper>
        </slot>
    </div>
`,styles:(t,e)=>au`
    :host {
        --viewport-width: auto;
        --viewport-height: auto;
        --element-gap: 12px;
        height: var(--viewport-height);
        overflow: hidden;
        width: var(--viewport-width);
        position: relative;
        display: flex;
    }

    .flipper-container {
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        padding: 20px;
        display: flex;
        align-items: center;
        pointer-events: none;
        z-index: 0;
    }

    .viewport {
        height: var(--viewport-height);
        overflow-x: hidden;
        scroll-behavior: smooth;
        width: var(--viewport-width);
        white-space: nowrap;
    }

    .container {
        display: flex;
        flex-direction: row;
        gap: var(--element-gap);
        width: max-content;
    }

    .flipper-next {
        margin-inline-start: auto;
    }

    .flipper-next,
    .flipper-previous {
        pointer-events: all;
        z-index: 2;
    }
`});var jd=function(t,e){for(var i=-1,n=null==t?0:t.length,o=Array(n);++i<n;)o[i]=e(t[i],i,t);return o},Yd=Array.isArray,qd=bd?bd.prototype:void 0,Xd=qd?qd.toString:void 0;var Zd=function t(e){if("string"==typeof e)return e;if(Yd(e))return jd(e,t)+"";if(Od(e))return Xd?Xd.call(e):"";var i=e+"";return"0"==i&&1/e==-Infinity?"-0":i};var Jd=function(t){return null==t?"":Zd(t)},Qd=0;var th=function(t){var e=++Qd;return Jd(t)+e};class eh extends Ec{constructor(){super(...arguments),this.subTitleId=th("subTitleId"),this.descriptionId=th("descriptionId"),this.cashbackNonstackableMessageId=th("cashbackMessageId"),this.successRateId=th("successRateId"),this.isSelected=!1,this.handleSelected=t=>{this.isSelected&&this.controlCopy.addEventListener("transitionend",this.handleTransitionEnd)},this.handleTransitionEnd=t=>{this.isSelected=!1,this.controlCopy.removeEventListener("transitionend",this.handleTransitionEnd)},this.onKeyPressHandler=t=>{switch(t.keyCode){case 32:case 13:t.preventDefault(),this.onSelectedHandler()}},this.onSelectedHandler=()=>{document.activeElement!==this&&this.focus(),this.isSelected=!0,this.$emit("selected")}}connectedCallback(){super.connectedCallback(),this.addEventListener("selected",this.handleSelected)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("selected",this.handleSelected)}onClickHandler(){this.onSelectedHandler()}onBlurHandler(){this.isSelected=!1,this.controlCopy.removeEventListener("transitionend",this.handleTransitionEnd)}}Qu([fi],eh.prototype,"name",void 0),Qu([fi({attribute:"sub-title"})],eh.prototype,"subTitle",void 0),Qu([fi],eh.prototype,"description",void 0),Qu([fi({attribute:"indicator-message"})],eh.prototype,"indicatorMessage",void 0),Qu([fi({attribute:"selected-indicator-message"})],eh.prototype,"selectedIndicatorMessage",void 0),Qu([fi({attribute:"cashback-nonstackable-message"})],eh.prototype,"cashbackNonstackableMessage",void 0),Qu([fi({attribute:"label"})],eh.prototype,"label",void 0),Qu([Qe],eh.prototype,"isSelected",void 0);const ih='<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">\n<path d="M42 12.5C42 8.91014 39.0898 6 35.5 6H12.5C8.91014 6 6 8.91014 6 12.5V21.5144C6.89262 20.7772 7.90354 20.178 9 19.7499V12.5C9 10.567 10.567 9 12.5 9H35.5C37.433 9 39 10.567 39 12.5V35.5C39 35.9176 38.9268 36.318 38.7928 36.6894L27.1484 25.2862L26.8916 25.0532C25.6182 23.9832 23.8928 23.7296 22.4052 24.2922C22.9232 25.144 23.3288 26.0718 23.6014 27.055C24.0996 26.9182 24.6546 27.043 25.0494 27.4296L36.661 38.8028C36.2978 38.9306 35.907 39 35.5 39H25.9496L26.9748 40.0252C27.5308 40.581 27.8606 41.2774 27.9642 42H35.5C39.0898 42 42 39.0898 42 35.5V12.5Z"/><path d="M35.0084 17.5042C35.0084 15.0166 32.9918 13 30.5042 13C28.0166 13 26 15.0166 26 17.5042C26 19.9918 28.0166 22.0084 30.5042 22.0084C32.9918 22.0084 35.0084 19.9918 35.0084 17.5042ZM29 17.5042C29 16.6735 29.6734 16 30.5042 16C31.335 16 32.0084 16.6735 32.0084 17.5042C32.0084 18.335 31.335 19.0085 30.5042 19.0085C29.6734 19.0085 29 18.335 29 17.5042Z"/><path d="M19.9 35.7788C21.2108 34.2152 22 32.1998 22 30C22 25.0294 17.9706 21 13 21C8.02944 21 4 25.0294 4 30C4 34.9706 8.02944 39 13 39C14.6849 39 16.2616 38.537 17.61 37.7312L23.4394 43.5606C24.0252 44.1464 24.9748 44.1464 25.5606 43.5606C26.1464 42.9748 26.1464 42.0252 25.5606 41.4394L19.9 35.7788ZM13 36C9.6863 36 7 33.3138 7 30C7 26.6862 9.6863 24 13 24C16.3137 24 19 26.6862 19 30C19 33.3138 16.3137 36 13 36Z"/></svg>',nh=function(){if("boolean"==typeof zu)return zu;if("undefined"==typeof window||!window.document||!window.document.createElement)return zu=!1,zu;const t=document.createElement("style"),e=function(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}();null!==e&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),zu=!0}catch(t){zu=!1}finally{document.head.removeChild(t)}return zu}()?"focus-visible":"focus",oh="box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));",{create:ah}=$i;function rh(t,e,i){i*=1;const n=Ln(t)||new Zi(1,0,1,1),o=Ln(e.toColorString())||new Zi(1,0,1,1),a=o.r*(1-i)+n.r*i,r=o.g*(1-i)+n.g*i,s=o.b*(1-i)+n.b*i;return Bn.create(a,r,s)}function sh(t,e,i){const n=rh("#FFF",e,t);return rh(i,n,t)}const lh=ah({name:"accent-fill-muted-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,i,n,o,a,r,s,l,c){e.closestIndexOf(i),Math.max(s,l,c);const u=t.source.toColorString(),d=11+1*o,h=11+1*a,p=11+1*r;return{rest:sh((11+1*n)/100,i,u),hover:sh(d/100,i,u),active:sh(h/100,i,u),focus:sh(p/100,i,u)}}(ma.getValueFor(t),ga.getValueFor(t),e||Ta.getValueFor(t),0,9,-2,0,Uo.getValueFor(t),Vo.getValueFor(t),$o.getValueFor(t))}),ch=ah("accent-fill-muted-rest").withDefault((t=>lh.getValueFor(t).evaluate(t).rest)),uh=(ah("accent-fill-muted-hover").withDefault((t=>lh.getValueFor(t).evaluate(t).hover)),ah("accent-fill-muted-active").withDefault((t=>lh.getValueFor(t).evaluate(t).active)),ah("accent-fill-muted-focus").withDefault((t=>lh.getValueFor(t).evaluate(t).focus)),eh.compose({baseName:"shopping-coupon",template:(t,e)=>Qc`
    <template>
        <button
            class="control"
            part="control"
            aria-label="${t=>t.label}"
            aria-describedby="${t=>t.subTitleId} ${t=>t.descriptionId} ${t=>t.cashbackNonstackableMessageId} ${t=>t.successRateId}"
            @click="${t=>t.onClickHandler()}"
            @keypress="${(t,e)=>t.onKeyPressHandler(e.event)}"
            @blur="${t=>t.onBlurHandler()}"
        >
            <div class="content">
                <div class="start-content" part="start-content">
                    <span class="title" part="title">${t=>t.name}</span>
                    <span id="${t=>t.subTitleId}" class="sub-title" part="sub-title">
                        ${t=>t.subTitle}
                    </span>
                </div>
                <div class="end-content" part="end-content">
                    <span
                        id="${t=>t.descriptionId}"
                        class="description"
                        part="description"
                    >
                        ${t=>t.description}
                    </span>
                    <span
                        id="${t=>t.successRateId}"
                        class="success-rate"
                        part="success-rate"
                    >
                        <slot name="success-rate"></slot>
                    </span>
                </div>
            </div>
        </button>
        <div
            class="${t=>t.isSelected?"indicator selected":"indicator"}"
            part="indicator"
            ${pu("controlCopy")}
        >
            ${fu((t=>!t.isSelected),Qc`<span
                    aria-hidden="true"
                    class="copy-icon"
                    part="copy-icon"
                    >${'<svg width="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg"><path d="M14 6.28906V16H4V13H0V0H6.71094L9.71094 3H10.7109L14 6.28906ZM11 6H12.2891L11 4.71094V6ZM4 3H8.28906L6.28906 1H1V12H4V3ZM13 7H10V4H5V15H13V7Z" /></svg>'}</span
                >`)}
            ${fu((t=>t.isSelected),Qc`
                    <span aria-hidden="true" class="check-icon" part="check-icon"
                        >${'<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C8.73438 0 9.44271 0.0963542 10.125 0.289062C10.8073 0.476562 11.4427 0.744792 12.0312 1.09375C12.625 1.44271 13.1641 1.86198 13.6484 2.35156C14.138 2.83594 14.5573 3.375 14.9062 3.96875C15.2552 4.55729 15.5234 5.19271 15.7109 5.875C15.9036 6.55729 16 7.26562 16 8C16 8.73438 15.9036 9.44271 15.7109 10.125C15.5234 10.8073 15.2552 11.4453 14.9062 12.0391C14.5573 12.6276 14.138 13.1667 13.6484 13.6562C13.1641 14.1406 12.625 14.5573 12.0312 14.9062C11.4427 15.2552 10.8073 15.526 10.125 15.7188C9.44271 15.9062 8.73438 16 8 16C7.26562 16 6.55729 15.9062 5.875 15.7188C5.19271 15.526 4.55469 15.2552 3.96094 14.9062C3.3724 14.5573 2.83333 14.1406 2.34375 13.6562C1.85938 13.1667 1.44271 12.6276 1.09375 12.0391C0.744792 11.4453 0.473958 10.8073 0.28125 10.125C0.09375 9.44271 0 8.73438 0 8C0 7.26562 0.09375 6.55729 0.28125 5.875C0.473958 5.19271 0.744792 4.55729 1.09375 3.96875C1.44271 3.375 1.85938 2.83594 2.34375 2.35156C2.83333 1.86198 3.3724 1.44271 3.96094 1.09375C4.55469 0.744792 5.19271 0.476562 5.875 0.289062C6.55729 0.0963542 7.26562 0 8 0ZM12.1797 5.88281C12.4731 5.58941 12.4731 5.11371 12.1797 4.82031C11.8863 4.52691 11.4106 4.52691 11.1172 4.82031L6.5 9.4375L4.88281 7.82031C4.58941 7.52691 4.11371 7.52691 3.82031 7.82031C3.52691 8.11371 3.52691 8.58941 3.82031 8.88281L6.5 11.5625L12.1797 5.88281Z" /></svg>'}</span
                    >
                `)}
            <div class="indicator-content" part="indicator-content">
                <span
                    aria-hidden="true"
                    class="${t=>t.isSelected?"indicator-message selected":"indicator-message"}"
                    part="indicator-message"
                >
                    ${t=>t.indicatorMessage}
                </span>
                <span
                    class="indicator-message"
                    part="indicator-message"
                    aria-live="polite"
                    aria-relevant="all"
                    aria-atomic="true"
                >
                    ${t=>t.isSelected?t.selectedIndicatorMessage:""}
                </span>
                <span
                    id="${t=>t.cashbackNonstackableMessageId}"
                    aria-hidden="${t=>t.isSelected?"false":"true"}"
                    class="cashback-nonstackable-message"
                    part="cashback-nonstackable-message"
                >
                    ${t=>t.cashbackNonstackableMessage}
                </span>
            </div>
        </div>
    </template>
`,styles:(t,e)=>au`
    ${su("flex")} :host {
        position: relative;
        box-sizing: border-box;
        border: calc(${co} * 1px) solid transparent;
        border-radius: calc(${lo} * 1px);
        font-family: ${ho};
        font-size: ${po};
        line-height: ${fo};
        color: ${Sr};
        outline: none;
    }

    .control {
        position: relative;
        font-family: ${ho};
        background: transparent;
        box-sizing: border-box;
        border: none;
        border-radius: calc(${lo} * 1px);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        padding: 12px 12px 10px;
        width: 100%;
        min-height: 68px;
        cursor: pointer;
        outline: none;
        --elevation: 5;
        ${oh};
    }

    .control:${nh} {
        border-color: ${vr};
        box-shadow: 0 0 0 calc(${uo} * 1px) ${vr};
    }

    .content {
        display: flex;
    }

    .start-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 110px;
        max-width: 110px;
        min-height: 64px;
        margin-inline-end: 12px;
        overflow: hidden;
        background: ${ch};
        border: 1px solid transparent;
        border-radius: calc(${so} * 2px);
    }

    .end-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .title {
        color: ${Va};
        font-weight: 600;
        width: 100px;
        overflow: hidden;
        overflow-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .sub-title {
        font-size: ${vo};
        line-height: ${yo};
        margin-top: 4px;
        color: ${Er};
        width: 100px;
        overflow: hidden;
        overflow-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .description {
        font-size: ${go};
        line-height: ${mo};
        color: ${Sr};
        text-align: start;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        overflow-wrap: break-word;
    }

    .success-rate {
        display: flex;
        align-self: flex-start;
    }

    .indicator {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: fit-content;
        height: auto;
        min-height: 36px;
        border-radius: 32px;
        padding: 0 16px;
        --elevation: 11;
        ${oh};
        background: ${Ta};
        border: calc(${co} * 1px) solid transparent;
        opacity: 0;
        pointer-events: none;
    }

    .control:hover + .indicator,
    .control:focus + .indicator {
        opacity: 1;
    }

    .control + .indicator.selected {
        opacity: 1;
        transition: opacity 450ms 3s linear;
    }

    .indicator-message.selected {
        display: none;
    }

    .indicator-content {
        display: flex;
        flex-direction: column;
        margin-inline-start: 8px;
        margin-top: 6px;
        margin-bottom: 8px;
        font-size: ${go};
        line-height: ${mo};
        font-weight: 600;
    }

    .cashback-nonstackable-message {
        font-size: ${go};
        line-height: ${mo};
        color: ${Er};
    }

    .copy-icon {
        display: flex;
        fill: currentcolor;
    }

    .check-icon {
        display: flex;
        fill: #8BB73A;
    }
`.withBehaviors(sd(au`
        .title-container {
            background: ${cd.ButtonFace};
            border-color: ${cd.ButtonText};
        }
            .control,
            .title,
            .sub-title,
            .description,
            .control:hover .title-container {
                color: ${cd.ButtonText};
                border-color: ${cd.ButtonText}
            }

            .control:hover,
            .control:${nh} {
                forced-color-adjust: none;
                background: ${cd.ButtonFace};
                color: ${cd.ButtonText};
                box-shadow: 0 0 0 calc((${uo} - ${co}) * 1px)
                    ${cd.Highlight};
            }

            .control + .indicator {
                forced-color-adjust: none;
                background: ${cd.Highlight};
                border-color: ${cd.Highlight};
                color: ${cd.HighlightText};
            }

            .cashback-nonstackable-message {
                color: ${cd.HighlightText};
            }

            .copy-icon,
            .check-icon {
                fill: ${cd.HighlightText};
            }
        `)),shadowOptions:{delegatesFocus:!0}}));function dh(t,e,i,n){var o,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r}class hh extends Ec{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(t=this.$fastController.definition.shadowOptions)||void 0===t?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}Ae([fi],hh.prototype,"download",void 0),Ae([fi],hh.prototype,"href",void 0),Ae([fi],hh.prototype,"hreflang",void 0),Ae([fi],hh.prototype,"ping",void 0),Ae([fi],hh.prototype,"referrerpolicy",void 0),Ae([fi],hh.prototype,"rel",void 0),Ae([fi],hh.prototype,"target",void 0),Ae([fi],hh.prototype,"type",void 0),Ae([Qe],hh.prototype,"defaultSlottedContent",void 0);class ph{}Ae([fi({attribute:"aria-expanded",mode:"fromView"})],ph.prototype,"ariaExpanded",void 0),Su(ph,gu),Su(hh,mu,ph);const fh=(function(t,...e){const{styles:i,behaviors:n}=ou(t,e);return new ru(i,n)})`(${no} + ${ao}) * ${ro}`,gh=(t,e)=>au`
    ${su("inline-flex")} :host {
      font-family: ${ho};
      outline: none;
      font-size: ${po};
      line-height: ${fo};
      height: calc(${fh} * 1px);
      min-width: calc(${fh} * 1px);
      background-color: ${Wa};
      color: ${Sr};
      border-radius: calc(${so} * 1px);
      fill: currentcolor;
      cursor: pointer;
    }

    .control {
      background: transparent;
      height: inherit;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${ro} * 2 * ${ao})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      border: calc(${co} * 1px) solid transparent;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      cursor: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    :host(:hover) {
      background-color: ${Ka};
    }

    :host(:active) {
      background-color: ${ja};
    }

    .control:${nh} {
      border: calc(${co} * 1px) solid ${vr};
      box-shadow: 0 0 0 calc((${uo} - ${co}) * 1px) ${vr};
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    ::slotted(svg) {
      ${""} width: 16px;
      height: 16px;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `.withBehaviors(sd(au`
        :host,
        :host([appearance="neutral"]) .control {
          background-color: ${cd.ButtonFace};
          border-color: ${cd.ButtonText};
          color: ${cd.ButtonText};
          fill: currentcolor;
        }

        :host(:not([disabled][href]):hover),
        :host([appearance="neutral"]:not([disabled]):hover) .control {
          forced-color-adjust: none;
          background-color: ${cd.Highlight};
          color: ${cd.HighlightText};
        }

        .control:${nh},
        :host([appearance="outline"]) .control:${nh},
        :host([appearance="neutral"]:${nh}) .control {
          forced-color-adjust: none;
          background-color: ${cd.Highlight};
          border-color: ${cd.ButtonText};
          box-shadow: 0 0 0 calc((${uo} - ${co}) * 1px) ${cd.ButtonText};
          color: ${cd.HighlightText};
        }

        .control:not([disabled]):hover,
        :host([appearance="outline"]) .control:hover {
          border-color: ${cd.ButtonText};
        }

        :host([href]) .control {
          border-color: ${cd.LinkText};
          color: ${cd.LinkText};
        }

        :host([href]) .control:hover,
        :host(.neutral[href]) .control:hover,
        :host(.outline[href]) .control:hover,
        :host([href]) .control:${nh}{
          forced-color-adjust: none;
          background: ${cd.ButtonFace};
          border-color: ${cd.LinkText};
          box-shadow: 0 0 0 1px ${cd.LinkText} inset;
          color: ${cd.LinkText};
          fill: currentcolor;
        }
    `)),mh=au`
  :host([appearance='accent']) {
    background: ${wa};
    color: ${Na};
  }

  :host([appearance='accent']:hover) {
    background: ${ka};
    color: ${La};
  }

  :host([appearance='accent']:active) .control:active {
    background: ${Ra};
    color: ${_a};
  }

  :host([appearance="accent"]) .control:${nh} {
    box-shadow: 0 0 0 calc(${uo} * 1px) inset ${Cr},
      0 0 0 calc((${uo} - ${co}) * 1px) ${vr};
  }
`.withBehaviors(sd(au`
      :host([appearance='accent']) .control {
        forced-color-adjust: none;
        background: ${cd.Highlight};
        color: ${cd.HighlightText};
      }

      :host([appearance='accent']) .control:hover,
      :host([appearance='accent']:active) .control:active {
        background: ${cd.HighlightText};
        border-color: ${cd.Highlight};
        color: ${cd.Highlight};
      }

      :host([appearance="accent"]) .control:${nh} {
        border-color: ${cd.ButtonText};
        box-shadow: 0 0 0 2px ${cd.HighlightText} inset;
      }

      :host([appearance='accent'][href]) .control {
        background: ${cd.LinkText};
        color: ${cd.HighlightText};
      }

      :host([appearance='accent'][href]) .control:hover {
        background: ${cd.ButtonFace};
        border-color: ${cd.LinkText};
        box-shadow: none;
        color: ${cd.LinkText};
        fill: currentcolor;
      }

      :host([appearance="accent"][href]) .control:${nh} {
        border-color: ${cd.LinkText};
        box-shadow: 0 0 0 2px ${cd.HighlightText} inset;
      }
    `)),vh=au`
  :host([appearance='hypertext']) {
    height: auto;
    font-size: inherit;
    line-height: inherit;
    background: transparent;
    min-width: 0;
  }

  :host([appearance='hypertext']) .control {
    display: inline;
    padding: 0;
    border: none;
    box-shadow: none;
    border-radius: 0;
    line-height: 1;
  }
  :host a.control:not(:link) {
    background-color: transparent;
    cursor: default;
  }
  :host([appearance='hypertext']) .control:link,
  :host([appearance='hypertext']) .control:visited {
    background: transparent;
    color: ${Va};
    border-bottom: calc(${co} * 1px) solid ${Va};
  }
  :host([appearance='hypertext']) .control:hover {
    border-bottom-color: ${$a};
  }
  :host([appearance='hypertext']) .control:active {
    border-bottom-color: ${Ga};
  }
  :host([appearance="hypertext"]) .control:${nh} {
    border-bottom: calc(${uo} * 1px) solid ${vr};
    margin-bottom: calc(calc(${co} - ${uo}) * 1px);
  }
`.withBehaviors(sd(au`
      :host([appearance="hypertext"]) .control:${nh} {
        color: ${cd.LinkText};
        border-bottom-color: ${cd.LinkText};
      }
    `)),yh=au`
  :host([appearance='lightweight']) {
    background: transparent;
    color: ${Va};
  }

  :host([appearance='lightweight']) .control {
    padding: 0;
    height: initial;
    border: none;
    box-shadow: none;
    border-radius: 0;
  }

  :host([appearance='lightweight']:hover) {
    color: ${$a};
  }

  :host([appearance='lightweight']:active) {
    color: ${Ga};
  }

  :host([appearance='lightweight']) .content {
    position: relative;
  }

  :host([appearance='lightweight']) .content::before {
    content: '';
    display: block;
    height: calc(${co} * 1px);
    position: absolute;
    top: calc(1em + 3px);
    width: 100%;
  }

  :host([appearance='lightweight']:hover) .content::before {
    background: ${$a};
  }

  :host([appearance='lightweight']:active) .content::before {
    background: ${Ga};
  }

  :host([appearance="lightweight"]) .control:${nh} .content::before {
    background: ${Sr};
    height: calc(${uo} * 1px);
  }
`.withBehaviors(sd(au`
      :host([appearance='lightweight']) {
        color: ${cd.ButtonText};
      }
      :host([appearance="lightweight"]) .control:hover,
        :host([appearance="lightweight"]) .control:${nh} {
        forced-color-adjust: none;
        background: ${cd.ButtonFace};
        color: ${cd.Highlight};
      }
      :host([appearance="lightweight"]) .control:hover .content::before,
        :host([appearance="lightweight"]) .control:${nh} .content::before {
        background: ${cd.Highlight};
      }

      :host([appearance="lightweight"][href]) .control:hover,
        :host([appearance="lightweight"][href]) .control:${nh} {
        background: ${cd.ButtonFace};
        box-shadow: none;
        color: ${cd.LinkText};
      }

      :host([appearance="lightweight"][href]) .control:hover .content::before,
        :host([appearance="lightweight"][href]) .control:${nh} .content::before {
        background: ${cd.LinkText};
      }
    `)),Ch=au`
  :host([appearance='outline']) {
    background: transparent;
    border-color: ${sr};
  }

  :host([appearance='outline']:hover) {
    border-color: ${lr};
  }

  :host([appearance='outline']:active) {
    border-color: ${cr};
  }

  :host([appearance='outline']) .control {
    border-color: inherit;
  }

  :host([appearance="outline"]) .control:${nh} {
    box-shadow: 0 0 0 calc((${uo} - ${co}) * 1px) ${vr};
    border-color: ${vr};
  }
`.withBehaviors(sd(au`
      :host([appearance='outline']) {
        border-color: ${cd.ButtonText};
      }
      :host([appearance='outline'][href]) {
        border-color: ${cd.LinkText};
      }
    `)),bh=au`
  :host([appearance='stealth']) {
    background: ${ir};
  }

  :host([appearance='stealth']:hover) {
    background: ${nr};
  }

  :host([appearance='stealth']:active) {
    background: ${or};
  }
`.withBehaviors(sd(au`
      :host([appearance='stealth']),
      :host([appearance='stealth']) .control {
        forced-color-adjust: none;
        background: ${cd.ButtonFace};
        border-color: transparent;
        color: ${cd.ButtonText};
        fill: currentcolor;
      }

      :host([appearance='stealth']:hover) .control {
        background: ${cd.Highlight};
        border-color: ${cd.Highlight};
        color: ${cd.HighlightText};
        fill: currentcolor;
      }

      :host([appearance="stealth"]:${nh}) .control {
        background: ${cd.Highlight};
        box-shadow: 0 0 0 1px ${cd.Highlight};
        color: ${cd.HighlightText};
        fill: currentcolor;
      }

      :host([appearance='stealth'][href]) .control {
        color: ${cd.LinkText};
      }

      :host([appearance="stealth"]:hover[href]) .control,
        :host([appearance="stealth"]:${nh}[href]) .control {
        background: ${cd.LinkText};
        border-color: ${cd.LinkText};
        color: ${cd.HighlightText};
        fill: currentcolor;
      }

      :host([appearance="stealth"]:${nh}[href]) .control {
        box-shadow: 0 0 0 1px ${cd.LinkText};
      }
    `));class Sh{constructor(t,e,i){this.propertyName=t,this.value=e,this.styles=i}bind(t){Xe.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){Xe.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}function xh(t,e){return new Sh("appearance",t,e)}class Eh extends hh{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter((t=>t.nodeType===Node.ELEMENT_NODE));1===t.length&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}dh([fi],Eh.prototype,"appearance",void 0);const Ah=Eh.compose({baseName:"anchor",baseClass:hh,template:(t,e)=>Qc`
    <a
        class="control"
        part="control"
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${pu("control")}
    >
        ${yu(0,e)}
        <span class="content" part="content">
            <slot ${nu("defaultSlottedContent")}></slot>
        </span>
        ${vu(0,e)}
    </a>
`,styles:(t,e)=>au`
    ${gh()}
  `.withBehaviors(xh("accent",mh),xh("hypertext",vh),xh("lightweight",yh),xh("outline",Ch),xh("stealth",bh)),shadowOptions:{delegatesFocus:!0}});class Th extends Eh{handleImageContentChange(){this.control.classList.toggle("has-image",this.image.assignedNodes().length>0)}}Qu([fi({attribute:"price"})],Th.prototype,"price",void 0),Qu([fi({attribute:"badge"})],Th.prototype,"badge",void 0),Qu([fi({attribute:"retailer"})],Th.prototype,"retailer",void 0);class Ih{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&eo.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new Dh(this.ltr,this.rtl,t),i=eo.getValueFor(t);eo.subscribe(e),e.attach(i),this.cache.set(t,e)}}class Dh{constructor(t,e,i){this.ltr=t,this.rtl=e,this.source=i,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(t))}attach(t){this.attached!==this[t]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const wh=au`
    .badge {
        right: 12px;
    }
`,kh=au`
    .badge {
        left: 12px;
    }
`,Rh=Th.compose({baseName:"shopping-link",template:(t,e)=>Qc`
    <a
        class="control"
        part="control"
        ${pu("control")}
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedBy="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
    >
        <slot
            part="image"
            name="image"
            ${pu("image")}
            @slotchange="${t=>t.handleImageContentChange()}"
        ></slot>
        <div class="content" part="content">
            ${bu}
            <span class="title" part="title">
                <slot></slot>
            </span>
            <msft-attribution class="attribution" part="attribution">
                <slot part="icon" name="icon" slot="image"></slot>
                ${t=>t.retailer}
            </msft-attribution>
            ${Cu}
        </div>
        ${fu((t=>t.price),Qc`
                <span class="price-container" part="price-container">
                    <span class="price" part="price">
                        ${t=>t.price}
                    </span>
                    <slot name="previous-price"></slot>
                    ${fu((t=>t.badge),Qc`
                            <div class="badge" part="badge" title="${t=>t.badge}">
                                ${t=>t.badge}
                            </div>
                        `)}
                </span>
            `)}
    </a>
`,styles:(t,e)=>au`
    ${su("flex")} :host {
        --content-max-lines: 2;
        outline: none;
        font-family: ${ho};
        font-size: ${go};
        font-weight: 600;
        line-height: ${mo};
        min-width: calc(${fh} * 1px);
        border-radius: calc(${lo} * 1px);
        box-sizing: border-box;
        color: ${Sr};    
        fill: currentcolor;
        cursor: pointer;
        min-height: 78px;
        position: relative;
        border: calc(${co} * 1px) solid transparent;
    }

    :host(:active) {
        background-color: ${ja};
    }

    .control:${nh} {
        box-shadow: 0 0 0 calc(${uo} * 1px) ${vr};
    }

    .control {
        display: grid;
        grid-template-columns: 1fr 90px;
        grid-column-gap: 8px;
        box-sizing: border-box;
        background: transparent;
        justify-content: center;
        align-items: center;
        padding: 5px 0;
        padding-inline-start: 8px;
        padding-inline-end: 15px;
        outline: none;
        text-decoration: none;
        border: none;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-family: inherit;
        width: 100%;
        --elevation: 4;
        ${oh};
    }

    .control.has-image {
        grid-template-columns: 66px 1fr 90px;
    }

    .control:hover {
        border-radius: calc(${lo} * 1px);
        --elevation: 8;
        ${oh};
        background-color: unset;
    }

    ::slotted([slot="image"]){
        align-self: center;
        justify-self: center;
        max-width: 100%;
        max-height: 100%;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding: calc(13px - 6px) 0;
    }

    .title {
        display: grid;
        grid-template-columns: minmax(0px, 1fr);
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        height: calc(
            var(--content-max-lines, 2) * ${yo}
        );
        line-height: ${yo};
        -webkit-line-clamp: var(--content-max-lines, 3);
    }

    .attribution {
        display: grid;
        grid-template-columns: auto minmax(0px, 1fr);
        margin-top: 4px;
    }

    .price-container {
        display: flex;
        flex-direction: column;
        justify-self: end;
        justify-content: center;
        align-items: center;
        font-size: ${Co};
        text-overflow: ellipsis;
        overflow: hidden;
        min-height: ${mo};
        max-width: 90px;
    }

    .price {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .badge {
        position: absolute;
        top: -4px;
        display: flex;
        align-items: center;
        max-width: 100%;
        height: 24px;
        padding: 6px 10px;
        box-sizing: border-box;
        background-color: ${wa};
        border-radius: calc(var(--control-corner-radius) * 1px);
        font-weight: 600;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: ${Na};
        font-size: ${go};
        border: calc(${co} * 1px) solid transparent;
    }

    ::slotted([slot="previous-price"]) {
        font-size: ${go};
        color: ${Er};
        font-weight: 400;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    
    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        line-height: ${fo};
        fill: currentcolor;
    }

    ::slotted([slot="end"]) {
        margin-top: 6px;
    }
`.withBehaviors(new Ih(wh,kh),sd(au`
            :host {
                forced-color-adjust: auto;
            }

            :host .control:hover,
            :host .control:${nh} {
                forced-color-adjust: none;
                box-shadow: inset 0 0 0 calc((${co} * 1px)) ${cd.ButtonText};
            }

            :host([href]),
            :host([href]) .control {
                color: ${cd.LinkText};
                border-color: ${cd.LinkText};
            }

            :host([href]) .control:hover,
            :host([href]) .control:${nh} {
                forced-color-adjust: none;
                box-shadow: inset 0 0 0 calc((${co} * 1px)) ${cd.LinkText};
            }

            ::slotted([slot="image"]),
            ::slotted([slot="start"]),
            ::slotted([slot="end"]) {
                color: ${cd.ButtonText};
                fill: currentcolor;
            }
        `)),shadowOptions:{delegatesFocus:!0}});const Oh=class extends Ec{handleImageContentChange(){this.imageContainer.classList.toggle("image",this.image.assignedNodes().length>0)}}.compose({baseName:"attribution",template:(t,e)=>Qc`
    <span part="image" ${pu("imageContainer")}>
        <slot
            name="image"
            ${pu("image")}
            @slotchange=${t=>t.handleImageContentChange()}
        ></slot>
    </span>
    <span part="content" class="content">
        <slot></slot>
    </span>
`,styles:(t,e)=>au`
        ${su("inline-flex")} :host {
            box-sizing: border-box;
            font-family: ${ho};
            font-size: ${go};
            font-weight: 400;
            line-height: ${mo};
            align-items: center;
            color: ${Er};
            min-height: 16px;
        }

        .content {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .image {
            display: flex;
            margin-inline-end: calc(${ro} * 2px);
        }
    `.withBehaviors(sd(au`
                :host,
                .content {
                    color: ${cd.ButtonText};
                    fill: currentcolor;
                }
            `))});class Ph extends Eh{}Qu([fi({attribute:"current-price"})],Ph.prototype,"currentPrice",void 0),Qu([fi({attribute:"previous-price"})],Ph.prototype,"previousPrice",void 0),Qu([fi({attribute:"badge"})],Ph.prototype,"badge",void 0),Qu([fi({attribute:"product-title"})],Ph.prototype,"productTitle",void 0);const Mh=Ph.compose({baseName:"shopping-recommendation",template:(t,e)=>Qc`
    <a
        class="control"
        part="control"
        ${pu("control")}
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedBy="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
    >
        <div class="content-container">
            <div class="image-container" part="image-container">
                ${fu((t=>t.badge),Qc`
                        <div class="badge" part="badge" title="${t=>t.badge}">
                            ${t=>t.badge}
                        </div>
                    `)}
                <div class="image" part="image">
                    <slot name="image"> ${ih} </slot>
                </div>
            </div>
            <div class="price-container" part="price-container">
                <div class="prices" part="prices">
                    ${fu((t=>t.currentPrice),Qc`<div
                            class="current-price"
                            part="current-price"
                        >
                            ${t=>t.currentPrice}
                        </div>`)}
                    ${fu((t=>t.previousPrice),Qc`<div
                                class="previous-price"
                                part="previous-price"
                            >
                                ${t=>t.previousPrice}
                            </div>
                            <br />`)}
                </div>
                <span class="product-title" part="product-title">
                    <slot></slot>
                </span>
            </div>
        </div>
    </a>
`,styles:(t,e)=>au`
    ${su("flex")} :host {
        border: calc(${co} * 1px) solid transparent;
        border-radius: calc(${lo} * 1px);
        box-sizing: border-box;
        color: ${Sr};
        cursor: pointer;
        fill: currentcolor;
        font-family: ${ho};
        font-size: ${go};
        line-height: ${mo};
        outline: none;
        position: relative;
    }

    .control {
        align-items: center;
        border: none;
        border-radius: inherit;
        box-sizing: border-box;
        color: inherit;
        cursor: inherit;
        --elevation: 4;
        ${oh};
        fill: inherit;
        font-family: inherit;
        height: fit-content;
        justify-content: center;
        outline: none;
        text-decoration: none;
        width: 100%;
    }

    .control:hover {
        border-radius: calc(${lo} * 1px);
        --elevation: 8;
        ${oh};
    }

    .control:${nh} {
        box-shadow: 0 0 0 calc(${uo} * 1px) ${vr};
    }

    .content-container {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
    }

    .image-container {
        display: flex;
        justify-content: flex-start;
        position: relative;
        width: 100%;
    }

    .image {
        align-items: center;
        display: flex;
        height: 154px;
        justify-content: center;
        width: 100%;
    }

    .image svg {
        fill: #BCBCBC;
    }

    ::slotted([slot="image"]) {
        max-height: 154px;
    }

    .badge {
        background-color: ${wa};
        border-top-right-radius: calc(${so} * 1px);
        bottom: 0px;
        box-sizing: border-box;
        color: ${Na};
        font-size: ${go};
        height: 22px;
        line-height: ${mo};
        overflow: hidden;
        padding: 3px 6px;
        position: absolute;
        max-width: calc(100% - 12px);
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .price-container {
        box-sizing: border-box;
        padding: 0 12px;
        margin-bottom: 8px;
        overflow: hidden;
        width: 100%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }

    .current-price {
        display: inline-block;
        font-size: ${Co};
        font-weight: 700;
        line-height: ${bo};
        width: max-content;
    }

    .previous-price {
        color: ${Er};
        display: inline-block;
        font-size: ${go};
        line-height: ${mo};
        text-decoration: line-through;
        width: max-content;
    }

    .product-title {
        color: ${Er};
        font-size: ${go};
        line-height: ${mo};
        overflow: hidden;
    }
`.withBehaviors(sd(au`
       :host,
       .previous-price,
       .product-title {
            forced-color-adjust: auto;
            color: ${cd.LinkText};
        }

        :host .control:hover,
        :host([href]) .control:hover,
        :host([href]) .control:${nh} {
            forced-color-adjust: none;
            box-shadow: inset 0 0 0 calc((${uo} * 1px)) ${cd.LinkText};
        }

        .badge {
            forced-color-adjust: none;
            color: ${cd.ButtonText};
            background: ${cd.ButtonFace};
            box-shadow: 0 0 0 calc((${co} * 1px)) ${cd.ButtonText};
        }

        .image svg {
            fill: ${cd.ButtonText};
        }
    `)),shadowOptions:{delegatesFocus:!0}});var Nh,Lh=function(t){if(!dd(t))return!1;var e=kd(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},_h=fd["__core-js_shared__"],Fh=(Nh=/[^.]+$/.exec(_h&&_h.keys&&_h.keys.IE_PROTO||""))?"Symbol(src)_1."+Nh:"";var Hh=function(t){return!!Fh&&Fh in t},Bh=Function.prototype.toString;var Uh=function(t){if(null!=t){try{return Bh.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Vh=/^\[object .+?Constructor\]$/,$h=Function.prototype,Gh=Object.prototype,zh=$h.toString,Wh=Gh.hasOwnProperty,Kh=RegExp("^"+zh.call(Wh).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var jh=function(t){return!(!dd(t)||Hh(t))&&(Lh(t)?Kh:Vh).test(Uh(t))};var Yh=function(t,e){return null==t?void 0:t[e]};var qh=function(t,e){var i=Yh(t,e);return jh(i)?i:void 0},Xh=qh(Object,"create");var Zh=function(){this.__data__=Xh?Xh(null):{},this.size=0};var Jh=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Qh=Object.prototype.hasOwnProperty;var tp=function(t){var e=this.__data__;if(Xh){var i=e[t];return"__lodash_hash_undefined__"===i?void 0:i}return Qh.call(e,t)?e[t]:void 0},ep=Object.prototype.hasOwnProperty;var ip=function(t){var e=this.__data__;return Xh?void 0!==e[t]:ep.call(e,t)};var np=function(t,e){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=Xh&&void 0===e?"__lodash_hash_undefined__":e,this};function op(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}op.prototype.clear=Zh,op.prototype.delete=Jh,op.prototype.get=tp,op.prototype.has=ip,op.prototype.set=np;var ap=op;var rp=function(){this.__data__=[],this.size=0};var sp=function(t,e){return t===e||t!=t&&e!=e};var lp=function(t,e){for(var i=t.length;i--;)if(sp(t[i][0],e))return i;return-1},cp=Array.prototype.splice;var up=function(t){var e=this.__data__,i=lp(e,t);return!(i<0)&&(i==e.length-1?e.pop():cp.call(e,i,1),--this.size,!0)};var dp=function(t){var e=this.__data__,i=lp(e,t);return i<0?void 0:e[i][1]};var hp=function(t){return lp(this.__data__,t)>-1};var pp=function(t,e){var i=this.__data__,n=lp(i,t);return n<0?(++this.size,i.push([t,e])):i[n][1]=e,this};function fp(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}fp.prototype.clear=rp,fp.prototype.delete=up,fp.prototype.get=dp,fp.prototype.has=hp,fp.prototype.set=pp;var gp=fp,mp=qh(fd,"Map");var vp=function(){this.size=0,this.__data__={hash:new ap,map:new(mp||gp),string:new ap}};var yp=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Cp=function(t,e){var i=t.__data__;return yp(e)?i["string"==typeof e?"string":"hash"]:i.map};var bp=function(t){var e=Cp(this,t).delete(t);return this.size-=e?1:0,e};var Sp=function(t){return Cp(this,t).get(t)};var xp=function(t){return Cp(this,t).has(t)};var Ep=function(t,e){var i=Cp(this,t),n=i.size;return i.set(t,e),this.size+=i.size==n?0:1,this};function Ap(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}Ap.prototype.clear=vp,Ap.prototype.delete=bp,Ap.prototype.get=Sp,Ap.prototype.has=xp,Ap.prototype.set=Ep;var Tp=Ap;function Ip(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var i=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=i.cache;if(a.has(o))return a.get(o);var r=t.apply(this,n);return i.cache=a.set(o,r)||a,r};return i.cache=new(Ip.Cache||Tp),i}Ip.Cache=Tp;const Dp=Ip((t=>{let e=Mn(t);if(null!==e)return e;if(e=Nn(t),null!==e)return e;throw new Error(`${t} cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"`)}));class wp{constructor(t,e,i){this.light=t,this.dark=e,this.source=i,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(t))}attach(t){const e=function(t){return an(Dp(t))}(t.toColorString())<=Jn.DarkMode?"dark":"light";this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const kp=au`
    .delivery-label.has-shipping-cost {
        color: var(--shipping-cost-color);
    }
`,Rp=au`
    .delivery-label.has-shipping-cost {
        color: var(--shipping-cost-color-dark-mode);
    }
`,Op=au`
    :host {
        --content-max-lines: 2;
        --shipping-cost-color: #9d6600;
        --shipping-cost-color-dark-mode: #bc9751;
        outline: none;
        font-family: ${ho};
        font-size: ${go};
        font-weight: 500;
        line-height: ${mo};
        min-width: calc(${fh} * 1px);
        border-radius: calc(${lo} * 1px);
        box-sizing: border-box;
        color: ${Sr};
        fill: currentcolor;
        min-height: 78px;
        display: block;
    }

    :host(:active) {
        background-color: ${ja};
    }

    .control {
        display: grid;
        grid-template-columns: 1fr 90px;
        grid-column-gap: 8px;
        box-sizing: border-box;
        background: transparent;
        justify-content: center;
        align-items: flex-start;
        padding: 5px 0;
        padding-inline: 12px;
        padding-block: 13px 12px;
        outline: none;
        text-decoration: none;
        border: calc(${co} * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-family: inherit;
        width: 100%;
        height: 100%;
        --elevation: 4;
        min-height: 78px;
        ${oh};
    }

    .price-container {
        grid-column: 2;
        grid-row: 1;
        display: flex;
        flex-direction: column;
        justify-self: end;
        align-items: flex-end;
        justify-content: center;
        font-size: ${Co};
        text-overflow: ellipsis;
        height: 100%;
        overflow: hidden;
        min-height: ${bo};
        max-width: 90px;
        min-height: 12px;
    }

    .action-button {
        height: 24px;
        margin: 0 1px;
    }

    .action-button::part(control) {
        max-height: 24px;
        padding: 0 8px;
        font-size: 12px;
    }

    .shipper-link::part(control) {
        text-decoration: none;
        border-bottom: none;
        margin: calc(${co} * 1px);
    }

    .shipper-link::part(control):focus {
        border: calc(${co} * 1px) solid ${vr};
        margin: 0;
    }

    .item-title {
        margin-bottom: 5px;
    }

    .delivery-label,
    .shipper-label,
    .rating-label {
        color: ${Er};
    }

    .shipper-link {
        font-weight: 400;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

    .item-price {
        overflow: hidden;
        text-overflow: ellipsis;
        padding-inline-end: 4px;
        font-weight: 600;
        margin-block-end: 7px;
    }

    @media (max-width: 655px) {
        :host {
            max-width: 602px;
        }
    }
`.withBehaviors(new class{constructor(t,e){this.cache=new WeakMap,this.light=t,this.dark=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&Ta.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new wp(this.light,this.dark,t),i=Ta.getValueFor(t);Ta.subscribe(e,t),e.attach(i),this.cache.set(t,e)}}(kp,Rp)),Pp=Qc`
    <fluent-button
        appearance="accent"
        class="action-button"
        aria-label="${t=>t.actionButtonAriaLabel}"
        aria-describedby="${t=>t.itemTitleId} ${t=>t.deliveryLabelId} ${t=>t.deliveryInfoId} ${t=>t.shipperLabelId} ${t=>t.shipperLinkId} ${t=>t.ratingLabelId} ${t=>t.ratingId}"
        @click="${t=>t.onClickHandler()}"
        @keyup="${(t,e)=>t.onKeyPressHandler(e.event)}"
    >
        ${t=>t.actionButtonText}
    </fluent-button>
`;class Mp extends Ec{constructor(){super(...arguments),this.hasShippingCost=!1,this.itemTitleId=th("itemTitleId"),this.deliveryLabelId=th("deliveryLabelId"),this.deliveryInfoId=th("deliveryInfoId"),this.shipperLabelId=th("shipperLabelId"),this.ratingLabelId=th("ratingLabelId"),this.ratingId=th("ratingId"),this.shipperLinkId=th("shipperLinkId"),this.onKeyPressHandler=t=>{if(32===t.keyCode)t.preventDefault(),this.onClickHandler()},this.linkKeyPressHandler=t=>{if(32===t.keyCode)t.preventDefault(),this.linkClickHandler()}}onClickHandler(){this.$emit("add-to-cart")}linkClickHandler(){this.$emit("link-invoked")}}Qu([fi({attribute:"item-title"})],Mp.prototype,"itemTitle",void 0),Qu([fi({attribute:"item-price"})],Mp.prototype,"itemPrice",void 0),Qu([fi({attribute:"delivery-label"})],Mp.prototype,"deliveryLabel",void 0),Qu([fi({attribute:"delivery-info"})],Mp.prototype,"deliveryInfo",void 0),Qu([fi({attribute:"shipper-label"})],Mp.prototype,"shipperLabel",void 0),Qu([fi({attribute:"shipper-name"})],Mp.prototype,"shipperName",void 0),Qu([fi({attribute:"rating-label"})],Mp.prototype,"ratingLabel",void 0),Qu([fi({attribute:"rating"})],Mp.prototype,"rating",void 0),Qu([fi({attribute:"shipper-url"})],Mp.prototype,"shipperUrl",void 0),Qu([fi({attribute:"has-shipping-cost",mode:"boolean"})],Mp.prototype,"hasShippingCost",void 0),Qu([fi({attribute:"action-button-text"})],Mp.prototype,"actionButtonText",void 0),Qu([fi({attribute:"action-button-aria-label"})],Mp.prototype,"actionButtonAriaLabel",void 0);const Np=Mp.compose({baseName:"shopping-similar-seller",styles:Op,template:(t,e)=>Qc`
    <div class="control" part="control">
        <div class="price-container" part="price-container">
            <span class="item-price" part="item-price">${t=>t.itemPrice}</span>
            ${fu((t=>t.actionButtonText),Qc`${Pp}`)}
        </div>
        <div class="content" part="content">
            <div class="item-title" id="${t=>t.itemTitleId}">
                ${t=>t.itemTitle}
            </div>
            <div>
                <div>
                    <span
                        id="${t=>t.deliveryLabelId}"
                        class="delivery-label ${t=>t.hasShippingCost?"has-shipping-cost":""}"
                        part="delivery-label"
                        >${t=>t.deliveryLabel}</span
                    >
                    <span
                        id="${t=>t.deliveryInfoId}"
                        class="delivery-info"
                        part="delivery-info"
                        >${t=>t.deliveryInfo}</span
                    >
                </div>
                <div>
                    <span
                        class="shipper-label"
                        part="shipper-label"
                        id="${t=>t.shipperLabelId}"
                        >${t=>t.shipperLabel}</span
                    >
                    <fluent-anchor
                        id="${t=>t.shipperLinkId}"
                        appearance="hypertext"
                        class="shipper-link"
                        part="shipper-link"
                        href="${t=>t.shipperUrl}"
                        @click="${t=>t.linkClickHandler()}"
                        @keyup="${(t,e)=>t.linkKeyPressHandler(e.event)}"
                        >${t=>t.shipperName}</fluent-anchor
                    >
                </div>
                ${fu((t=>t.rating),Qc`
                        <div>
                            <span
                                class="rating-label"
                                part="rating-label"
                                id="${t=>t.ratingLabelId}"
                                >${t=>t.ratingLabel}</span
                            >
                            <span id="${t=>t.ratingId}" class="rating" part="rating"
                                >${t=>t.rating}</span
                            >
                        </div>
                    `)}
            </div>
        </div>
    </div>
`,shadowOptions:{delegatesFocus:!0}});class Lp extends Ec{}const _p=(t,e)=>au`
      ${su("block")} :host {
        --elevation: 4;
        display: block;
        contain: content;
        height: var(--card-height, 100%);
        width: var(--card-width, 100%);
        box-sizing: border-box;
        background: ${Ta};
        color: ${Sr};
        border-radius: calc(${lo} * 1px);
        ${oh}
      }

      :host(:hover) {
        --elevation: 8;
      }

      :host(:focus-within) {
        --elevation: 8;
      }

      :host {
        content-visibility: auto;
      }
    `.withBehaviors(sd(au`
          :host {
            forced-color-adjust: none;
            background: ${cd.Canvas};
            box-shadow: 0 0 0 1px ${cd.CanvasText};
          }
        `));class Fp extends Lp{cardFillColorChanged(t,e){if(e){const t=Mn(e);null!==t&&(this.neutralPaletteSource=e,Ta.setValueFor(this,Bn.create(t.r,t.g,t.b)))}}neutralPaletteSourceChanged(t,e){if(e){const t=Mn(e),i=Bn.create(t.r,t.g,t.b);ga.setValueFor(this,zn.create(i))}}handleChange(t,e){this.cardFillColor||Ta.setValueFor(this,(e=>Qa.getValueFor(e).evaluate(e,Ta.getValueFor(t))))}connectedCallback(){super.connectedCallback();const t=Ti(this);if(t){const e=Xe.getNotifier(t);e.subscribe(this,"fillColor"),e.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}dh([fi({attribute:"card-fill-color",mode:"fromView"})],Fp.prototype,"cardFillColor",void 0),dh([fi({attribute:"neutral-palette-source",mode:"fromView"})],Fp.prototype,"neutralPaletteSource",void 0);const Hp=Fp.compose({baseName:"card",baseClass:Lp,template:(t,e)=>Qc`
    <slot></slot>
`,styles:_p}),Bp=_p;class Up extends Fp{constructor(){super(...arguments),this.contentId=th("contentId"),this.footerContentId=th("footerContentId")}gradientColorEndChanged(){this.generateGradientVariables()}noFooterChanged(){this.noFooter=!this.hasFooter()}dataChanged(){this.noFooter=!this.hasFooter()}generateGradientVariables(){if(this.hasColorGradient())this.style.setProperty("--gradient-color-end",this.gradientColorEnd);else{if(!this.cardFillColor)return null;{const{r:t,g:e,b:i}=Mn(this.cardFillColor),n=new Zi(t,e,i,ad("image",this.childElements)?.7:.5).toStringWebRGBA();this.style.setProperty("--gradient-color-end",this.cardFillColor),this.style.setProperty("--gradient-color-mid",n)}}}hasFooter(){var t;return!this.hasAttribute("no-footer")&&(ad("footer-end",this.childElements)||ad("footer-start",this.childElements)||!!(null===(t=this.data)||void 0===t?void 0:t.footerContent))}hasColorGradient(){return!(!this.gradientColorEnd||!this.cardFillColor)}connectedCallback(){super.connectedCallback(),this.size||(this.size="_1x_1y"),"_1x_1y"===this.size&&this.imageLayout&&(this.imageLayout="full"),this.hasColorGradient()?this.setAttribute("has-color-gradient",""):this.removeAttribute("has-color-gradient"),this.generateGradientVariables()}}Qu([fi],Up.prototype,"target",void 0),Qu([fi({attribute:"gradient-color-end"})],Up.prototype,"gradientColorEnd",void 0),Qu([fi],Up.prototype,"size",void 0),Qu([fi({attribute:"image-layout"})],Up.prototype,"imageLayout",void 0),Qu([fi({attribute:"label"})],Up.prototype,"label",void 0),Qu([fi({attribute:"describedby"})],Up.prototype,"describedby",void 0),Qu([fi({attribute:"labelledby"})],Up.prototype,"labelledby",void 0),Qu([fi({attribute:"no-footer",mode:"boolean"})],Up.prototype,"noFooter",void 0),Qu([Qe],Up.prototype,"data",void 0),Qu([Qe],Up.prototype,"childElements",void 0),Qu([Qe],Up.prototype,"footerStartNodes",void 0),Qu([Qe],Up.prototype,"footerEndNodes",void 0);const Vp=au`
    :host([image-layout="half"]) .image-container {
        left: 174px;
    }
`,$p=au`
    :host([image-layout="half"]) .image-container {
        right: 174px;
    }
`,Gp=Up.compose({baseName:"dash-base-card",template:(t,e)=>Qc`
    <template
        ${od({property:"childElements",filter:tu()})}
        ?no-footer="${t=>t.noFooter}"
    >
        <span class="heading" part="heading">
            <div class="heading-title-container" part="heading-title-container">
                <slot name="heading-icon"></slot>
                <a
                    class="heading-link"
                    part="heading-link"
                    aria-label="${t=>t.label}"
                    aria-labelledby="${t=>t.labelledby}"
                    aria-describedby="${t=>{var e;return null!==(e=t.describedby)&&void 0!==e?e:""}} ${t=>t.contentId} ${t=>t.footerContentId}"
                    href="${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.link}}"
                    target=${t=>t.target}
                    tabindex="1"
                >
                    ${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.heading}}
                </a>
            </div>
            <div class="more-actions-container" part="more-actions-container">
                <slot name="more-actions"></slot>
            </div>
        </span>
        <div id="${t=>t.contentId}" class="content" part="content">
            <slot></slot>
        </div>
        ${fu((t=>ad("image",t.childElements)),Qc`
                <div class="image-container" part="image-container">
                    <slot name="image"></slot>
                </div>
            `)}
        <div class="gradient" part="gradient"></div>
        <div class="footer" part="footer">
            <slot name="footer-start" ${nu("footerStartNodes")}></slot>
            ${fu((t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.footerContent}),Qc`
                    <span
                        id="${t=>t.footerContentId}"
                        class="footer-content"
                        part="footer-content"
                        aria-label="${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.footerContent}}"
                    >
                        ${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.footerContent}}
                    </span>
                `)}
            <slot name="footer-end" ${nu("footerEndNodes")}></slot>
        </div>
    </template>
`,styles:(t,e)=>au`
    ${Bp(t,e)}
    ${su("grid")}:host {
        position: relative;
        box-sizing: border-box;
        font-family: ${ho};
        font-size: ${go};
        line-height: ${mo};
        display: grid;
        grid-template-rows: auto 1fr auto;
        padding: var(--card-padding, 12px 0);
        outline: none;
    }

    :host([size="_1x_1y"]) {
        --card-height: 162px;
        --card-width: 162px;
    }

    :host([size="_2x_1y"]) {
        --card-height: 162px;
        --card-width: 336px;
    }

    :host([size="_2x_2y"]) {
        --card-height: 336px;
        --card-width: 336px;
    }

    :host([size="_2x_3y"]) {
        --card-height: 510px;
        --card-width: 336px;
    }

    .image-container {
        position: absolute;
        z-index: -1;
        height: 100%;
    }

    .heading {
        max-height: 18px;
        align-items: center;
        justify-content: space-between;
        display: flex;
        outline: none;
        cursor: pointer;
        text-decoration: none;
        letter-spacing: 0.7px;
        color: ${Sr};
        padding: var(--heading-padding, 0 12px);
    }

    .heading-title-container {
        display: flex;
        align-items: center;
    }

    .heading-link,
    .heading-link:hover,
    .heading-link:active,
    .heading-link:visited {
        color: ${Er};
        text-decoration: none;
        height: ${mo};
        -webkit-line-clamp: 1;
    }

    .heading-link:${nh} {
        text-decoration: underline;
        outline: none;
    }

    .heading-link::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    ::slotted([slot="heading-icon"]) {
        margin-inline-end: 5px;
    }

    .more-actions-container {
        justify-self: end;
        opacity: 0;
        z-index: 1;
        transition: opacity 0.1s linear;
    }
    
    :host(:focus-within) .more-actions-container,
    :host(:hover) .more-actions-container {
        opacity: 1;
    }

    .content {
        overflow: hidden;
        color: ${Sr};
    }

    :host([image-layout="full"]) .image-container {
        width: 100%;
    }

    :host([image-layout="half"]) .image-container {
        max-width: 100%;
        top: 0;
    }    

    :host([image-layout="contain"]) .image-container {
        max-width: 100%;
        top: 26px;
        right: 0;
    }

    :host([has-color-gradient]) .gradient {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(
            180deg,
            transparent 0%,
            var(--gradient-color-end) 100%
        );
        z-index: -1;
    }

    :host([image-layout="full"]) .gradient {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        background: linear-gradient(
            270deg,
            transparent 0%,
            var(--gradient-color-mid) 40%,
            var(--gradient-color-end) 100%
        );
    }

    .footer {
        display: flex;
        align-content: center;
        font-size: ${go};
        line-height: ${mo};
        padding: var(--footer-padding, 0 12px);
        color: ${Er};
    }
    
    :host([image-layout="full"]) .footer {
        color: ${Sr};
    }

    :host([no-footer]) .footer {
        display: none;
    }

    ::slotted([slot="more-actions"]) {
        min-width: 24px;
        width: 24px;
        height: 24px;
        --control-corner-radius: 16;
    }

    ::slotted([slot="image"]) {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.1s linear;
        opacity: 1;
    }

    :host(:not([image-layout="half"]):hover) ::slotted([slot="image"]),
    :host(:not([image-layout="half"]):focus-within) ::slotted([slot="image"]) {
        opacity: 0.5;
    }

    ::slotted([slot="footer-end"]) {
        margin-inline-start: auto;
    }
`.withBehaviors(new Ih(Vp,$p),sd(au`
                :host([has-color-gradient]) .gradient {
                    background: none;
                }

                a[href],
                .heading,
                .content,
                .footer {
                    forced-color-adjust: auto;
                    color: ${cd.LinkText};
                }
            `))});class zp extends Up{constructor(){super(...arguments),this.otherImagesMaxAllowed=4}dataChanged(){var t;this.hasOtherItems=(null===(t=this.otherImages)||void 0===t?void 0:t.length)>0}otherImagesChanged(){var t;this.hasOtherItems=(null===(t=this.otherImages)||void 0===t?void 0:t.length)>0,this.otherImages&&this.otherImages.length>4&&(this.otherImages.forEach(((t,e)=>{e>this.otherImagesMaxAllowed-1&&t.style.setProperty("display","none")})),this.additionalImagesCount=this.otherImages.length-this.otherImagesMaxAllowed)}hasOtherItemsTitle(){var t;return!!(null===(t=this.data)||void 0===t?void 0:t.otherItemsTitle)}connectedCallback(){var t;super.connectedCallback(),this.hasOtherItems=(null===(t=this.otherImages)||void 0===t?void 0:t.length)>0}}Qu([Qe],zp.prototype,"hasOtherItems",void 0),Qu([Qe],zp.prototype,"data",void 0),Qu([Qe],zp.prototype,"otherImages",void 0),Qu([Qe],zp.prototype,"additionalImagesCount",void 0);class Wp extends Ec{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t="number"==typeof this.min?this.min:0,e="number"==typeof this.max?this.max:100,i="number"==typeof this.value?this.value:0,n=e-t;this.percentComplete=0===n?0:Math.fround((i-t)/n*100)}}Ae([fi({converter:hi})],Wp.prototype,"value",void 0),Ae([fi({converter:hi})],Wp.prototype,"min",void 0),Ae([fi({converter:hi})],Wp.prototype,"max",void 0),Ae([fi({mode:"boolean"})],Wp.prototype,"paused",void 0),Ae([Qe],Wp.prototype,"percentComplete",void 0);class Kp extends Wp{}const jp=Kp.compose({baseName:"progress",template:(t,e)=>Qc`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${fu((t=>"number"==typeof t.value),Qc`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${t=>t.percentComplete}%"
                    ></div>
                </div>
            `)}
        ${fu((t=>"number"!=typeof t.value),Qc`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${e.indeterminateIndicator1||""}
                        ${e.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,styles:(t,e)=>au`
    ${su("flex")} :host {
      align-items: center;
      outline: none;
      height: calc(${ro} * 1px);
      margin: calc(${ro} * 1px) 0;
    }

    .progress {
      background-color: ${Wa};
      border-radius: calc(${ro} * 1px);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${wa};
      border-radius: calc(${ro} * 1px);
      height: 100%;
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: 100%;
      border-radius: calc(${ro} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${wa};
      border-radius: calc(${ro} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${wa};
      border-radius: calc(${ro} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation-play-state: paused;
      background-color: ${Wa};
    }

    :host(.paused) .determinate {
      background-color: ${Er};
    }

    @keyframes indeterminate-1 {
      0% {
        opacity: 1;
        transform: translateX(-100%);
      }
      70% {
        opacity: 1;
        transform: translateX(300%);
      }
      70.01% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateX(300%);
      }
    }

    @keyframes indeterminate-2 {
      0% {
        opacity: 0;
        transform: translateX(-150%);
      }
      29.99% {
        opacity: 0;
      }
      30% {
        opacity: 1;
        transform: translateX(-150%);
      }
      100% {
        transform: translateX(166.66%);
        opacity: 1;
      }
    }
  `.withBehaviors(sd(au`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate {
          forced-color-adjust: none;
          background-color: ${cd.FieldText};
        }
        .progress {
          background-color: ${cd.Field};
          border: calc(${co} * 1px) solid ${cd.FieldText};
        }
        :host(.paused) .indeterminate-indicator-1,
        .indeterminate-indicator-2 {
          background-color: ${cd.Field};
        }
        :host(.paused) .determinate {
          background-color: ${cd.GrayText};
        }
      `)),indeterminateIndicator1:'\n    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n  ',indeterminateIndicator2:'\n    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n  '});var Yp,qp;!function(t){t.horizontal="horizontal",t.vertical="vertical"}(Yp||(Yp={})),function(t){t.separator="separator",t.presentation="presentation"}(qp||(qp={}));class Xp extends Ec{constructor(){super(...arguments),this.role=qp.separator,this.orientation=Yp.horizontal}}Ae([fi],Xp.prototype,"role",void 0),Ae([fi],Xp.prototype,"orientation",void 0);const Zp=(t,e)=>i=>Qc`
    <slot name=${t}>
        <span class=${t} part=${t}>
            ${t=>t.data?t.data[e]:""}
        </span>
    </slot>
`,Jp=zp.compose({baseName:"package-tracker-card",template:(t,e)=>Qc`
    <${t.tagFor(Up)}
        image-layout=${t=>t.imageLayout}
        card-fill-color=${t=>t.cardFillColor}
        gradient-color-end=${t=>t.gradientColorEnd}
        target=${t=>t.target}
        label="${t=>t.label}"
        labelledby="${t=>t.labelledby}"
        describedby="${t=>t.describedby}"
        class="base-card"
        part="base-card"
        ?no-footer=${t=>!t.hasFooter()}
        :data=${t=>t.data}
        ${pu("baseCard")}
    >
        <slot name="heading-icon" slot="heading-icon"></slot>
        <slot name="more-actions" slot="more-actions"></slot>
        <div class="content-container" part="content-container" ${pu("contentContainer")}>
            <div class="main-container" part="main-container">
                <slot
                    name="main-image"
                    ${pu("mainImage")}
                ></slot>
                <div class="main-content" part="main-content">
                    ${Zp("main-title","mainTitle")}
                    <slot name="progress-bar">
                        <${t.tagFor(Kp)} class="progress-bar" part="progress-bar" min="0" max="100" value="${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.progressPercentage}}" aria-hidden="true">
                        </${t.tagFor(Kp)}>
                    </slot>
                    ${fu((t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.subTitle}),Qc`
                            ${Zp("sub-title","subTitle")}
                        `)}
                    </slot>
                </div>
            </div>
            ${fu((t=>t.hasOtherItems),Qc`
                    <slot name="divider">
                        <${t.tagFor(Xp)} class="divider" part="divider" aria-hidden="true">
                        </${t.tagFor(Xp)}>
                    </slot>
            `)}
            <div
                class="other-items-container ${t=>t.hasOtherItems?"":"other-items-container__hidden"}"
                part="other-items-container"
            >
                    ${fu((t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.otherItemsTitle}),Qc`
                            ${Zp("other-items-title","otherItemsTitle")}
                        `)}
                <div
                    class="other-items-image-container ${t=>{var e;return(null===(e=t.data)||void 0===e?void 0:e.otherItemsTitle)?"":"other-items-image-container__no-other-items"}}"
                    part="other-items-image-container"
                >
                    <slot name="other-image"
                    ${nu("otherImages")}
                    ></slot>
                    ${fu((t=>t.additionalImagesCount),Qc`
                            <span
                                class="additional-images-counter"
                                part="additional-images-counter"
                            >
                                +${t=>t.additionalImagesCount}
                            </span>
                        `)}
                </div>
            </div>
        </div>
    </${t.tagFor(Up)}>
`,styles:(t,e)=>au`
        ${su("inline-flex")} :host {
            --default-gutter: 12;
            --card-width-number: 336;
            border-radius: calc(${lo} * 1px);
        }

        .base-card {
            padding-top: 16px;
            --card-width: calc(var(--card-width-number) * 1px);
            height: auto;
            position: relative;
        }

        ::part(heading) {
            max-height: 24px;
            margin-bottom: 8px;
            color: ${Er};
            z-index: 1;
        }

        ::part(content) {
            padding: 0 calc(var(--default-gutter) * 1px);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            margin-top: 8px;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        ::part(heading-link) {
            font-weight: 600;
        }

        .content-container {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            background: transparent;
            outline: none;
            text-decoration: none;
            border: none;
            color: inherit;
            border-radius: inherit;
        }

        .main-container {
            display: flex;
            margin-bottom: 8px;
            box-sizing: border-box;
        }

        .main-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-inline-end: 20px;
        }

        ::slotted([slot="main-image"]) {
            margin-inline-end: calc(var(--default-gutter) * 1px);
            align-self: center;
            justify-self: center;
            --elevation: 4;
            ${oh};
            border-radius: calc(${lo} * 2px);
        }

        .main-title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 100%;
            margin-bottom: 3px;
            font-size: ${po};
            line-height: ${fo};
            font-weight: 600;
        }

        .sub-title {
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
            color: ${Er};
            max-height: calc(var(--sub-title-max-lines, 2) * ${mo});
            line-height: ${mo};
            -webkit-line-clamp: var(--sub-title-max-lines, 2);
        }

        .divider {
            margin: 0;
            margin-top: calc(var(--default-gutter) * 1px);
            border-top: calc(${co} * 1px * 2) solid ${dr};
            transform: scale(
                calc(
                    var(--card-width-number) /
                        (var(--card-width-number) - calc(var(--default-gutter) * 2))
                ),
                1
            );
        }

        .other-items-container {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            text-overflow: ellipsis;
            margin-top: calc(var(--default-gutter) * 1px);
            margin-bottom: 4px;
        }

        .other-items-container__hidden {
            display: none;
        }

        .other-items-image-container {
            position: relative;
            display: flex;
            grid-gap: 16px;
            margin-top: 8px;
        }

        .other-items-image-container__no-other-items {
            margin-top: 4px;
        }

        .other-items-title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 100%;
            color: ${Sr};
            height: calc(var(--other-title-max-lines, 1) * ${fo});
            font-size: ${po};
            line-height: ${fo};
            -webkit-line-clamp: var(--other-title-max-lines, 1);
        }

        .additional-images-counter {
            position: absolute;
            top: 50%;
            right: calc(66px / 2);
            transform: translate(+50%, -50%);
            height: 32px;
            width: 32px;
            border-radius: 16px;
            background-color: ${tr};
            display: flex;
            align-items: center;
            justify-content: center;
        }

        ::slotted([slot="other-image"]) {
            height: 66px;
            width: 66px;
            align-self: center;
            justify-self: center;
            --elevation: 4;
            ${oh};
            border-radius: calc(${lo} * 2px);
        }

        .progress-bar {
            width: 100%;
            height: 3px;
            margin-bottom: 10px;
        }

        .progress-bar::part(determinate) {
            background: var(--progress-determinate-background, ${Va});
        }
    `.withBehaviors(sd(au`
                .main-title,
                .sub-title,
                .other-items-title {
                    color: ${cd.LinkText}!important;
                }

                .progress-bar::part(determinate) {
                    background: ${cd.FieldText};
                }
            `))});zp.compose({baseName:"package-tracker-card-link-only",template:(t,e)=>Qc`
    <template
        card-fill-color=${t=>t.cardFillColor}
    >
        <div class="main-container" part="main-container">
            <slot
                name="main-image"
                ${pu("mainImage")}
            ></slot>
            <div class="main-content" part="main-content">
            <slot name="main-title">
        <a
            href="${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.link}}"
            class="main-title"
            part="main-title"
        >
            ${t=>{var e,i;return null!==(i=null===(e=null==t?void 0:t.data)||void 0===e?void 0:e.mainTitle)&&void 0!==i?i:""}}
        </a>
    </slot>
                <slot name="progress-bar">
                    <${t.tagFor(Kp)} class="progress-bar" part="progress-bar" min="0" max="100" value="${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.progressPercentage}}" aria-hidden="true">
                    </${t.tagFor(Kp)}>
                </slot>
                ${fu((t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.subTitle}),Qc`
                        ${Zp("sub-title","subTitle")}
                    `)}
                </slot>
            </div>
        </div>
    </template>
`,styles:(t,e)=>au`
        ${Bp(t,e)}
        ${su("inline-flex")} :host {
            --default-gutter: 12;
            --card-width-number: 336;
            border-radius: calc(${lo} * 1px);
            padding: 16px 0 12px;
            --card-width: calc(var(--card-width-number) * 1px);
            height: auto;
            position: relative;
        }

        .main-container {
            display: flex;
            box-sizing: border-box;
            padding: 0 calc(var(--default-gutter) * 1px);
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .main-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        ::slotted([slot="main-image"]) {
            margin-inline-end: calc(var(--default-gutter) * 1px);
            align-self: center;
            justify-self: center;
            --elevation: 4;
            ${oh};
            border-radius: calc(${lo} * 2px);
        }

        .main-title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 100%;
            margin-bottom: 3px;
            font-size: ${po};
            line-height: ${fo};
            font-weight: 600;
        }

        .main-title:${nh} {
            text-decoration: underline;
            outline: none;
        }

        .main-title,
        .main-title:hover,
        .main-title:active,
        .main-title:visited {
            color: ${Sr};
            text-decoration: none;
            -webkit-line-clamp: 1;
        }
    

        .main-title::after {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        .sub-title {
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
            color: ${Er};
            max-height: calc(var(--sub-title-max-lines, 2) * ${mo});
            font-size: ${go};
            line-height: ${mo};
            -webkit-line-clamp: var(--sub-title-max-lines, 2);
        }


        .progress-bar {
            width: 100%;
            height: 3px;
            margin-bottom: 10px;
        }

        .progress-bar::part(determinate) {
            background: var(--progress-determinate-background, ${Va});
        }
    `.withBehaviors(sd(au`
                .main-title,
                .sub-title {
                    color: ${cd.LinkText}!important;
                }

                .progress-bar::part(determinate) {
                    background: ${cd.FieldText};
                }
            `))});var Qp;!function(t){t.grid="grid",t.carousel="carousel"}(Qp||(Qp={}));class tf extends Eh{constructor(){super(...arguments),this.noHoverGradient=!1}handleImageContentChange(){this.control.classList.toggle("has-image",this.image.assignedNodes().length>0)}}Qu([fi],tf.prototype,"layout",void 0),Qu([fi({attribute:"no-hover-gradient",mode:"boolean"})],tf.prototype,"noHoverGradient",void 0);const ef=tf.compose({baseName:"shopping-cashback-card",template:(t,e)=>Qc`
    <a
        class="control"
        part="control"
        ${pu("control")}
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedBy="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
    >
        <slot
            name="image"
            ${pu("image")}
            @slotchange="${t=>t.handleImageContentChange()}"
        ></slot>
        <div class="content" part="content">
            <slot> </slot>
        </div>
    </a>
`,styles:(t,e)=>au`
        ${su("block")} :host {
            outline: none;
            font-family: ${ho};
            font-size: ${vo};
            font-weight: 400;
            line-height: ${yo};
            min-width: calc(${fh} * 1px);
            border-radius: calc((${lo} * 1px) * 2);
            box-sizing: border-box;
            color: ${Sr};
            cursor: pointer;
            background: ${Ta};
        }

        .control {
            display: grid;
            grid-template-rows: 42px minmax(16px, 1fr);
            grid-gap: 6px;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            border: calc(${co} * 1px) solid ${dr};
            border-radius: inherit;
            padding: 8px 23px 24px;
            width: 100%;
            outline: none;
            text-decoration: none;
            color: inherit;
            cursor: inherit;
            font-family: inherit;
            overflow: hidden;
        }

        .control:${nh} {
            box-shadow: 0 0 0 calc(${uo} * 1px) ${vr};
        }

        .control:active {
            background-color: ${ja};
        }

        .control:hover {
            background: linear-gradient(265.08deg, rgba(36, 255, 0, 0.06) -6.71%, rgba(0, 210, 255, 0.06) 38.87%, rgba(255, 188, 125, 0.06) 93.88%);
        }

        :host([no-hover-gradient]) .control {
            background: transparent;
        }

        .control:not(.has-image) {
            display: flex;
            min-height: 97px;
            padding: 18px 23px;

        }

        :host([layout="carousel"]) .control {
            grid-template-rows: 56px 50px;
            padding: 0 12px 12px;
        }

        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            max-height: 50px;
        }

        .action-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 12px;
            width: 102px;
            height: 26px;
            overflow: hidden;
            background: ${ch};
            border: 1px solid transparent;
            border-radius: calc(${so} * 1px);
            color: ${Va};
        }

        .action-message {
            font-weight: 600;
        }

        ::slotted(*) {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 16px;
            text-align: center;
        }

        ::slotted([slot="image"]) {
            align-self: center;
            justify-self: center;
            max-width: 100%;
            max-height: 100%;
        }
    `.withBehaviors(sd(au`
            :host {
                forced-color-adjust: auto;
            }

            :host .control:hover,
            :host .control:${nh} {
                forced-color-adjust: none;
                box-shadow: inset 0 0 0 calc((${co} * 1px)) ${cd.ButtonText};
            }

            :host([href]),
            :host([href]) .control {
                color: ${cd.LinkText};
                border-color: ${cd.LinkText};
            }

            :host([href]) .control:hover,
            :host([href]) .control:${nh} {
                forced-color-adjust: none;
                box-shadow: inset 0 0 0 calc((${co} * 1px)) ${cd.LinkText};
            }

            ::slotted([slot="image"]),
            ::slotted([slot="start"]),
            ::slotted([slot="end"]) {
                color: ${cd.ButtonText};
                fill: currentcolor;
            }
        `)),shadowOptions:{delegatesFocus:!0}});class nf extends hh{constructor(){super(...arguments),this.deselectable=!0,this.isSelected=!1,this.nameId=th("nameId"),this.descriptionId=th("descriptionId"),this.onSelectedHandler=()=>{document.activeElement!==this&&this.focus(),this.deselectable||this.isSelected||(this.isSelected=!0,this.$emit("selected-changed")),this.deselectable&&(this.isSelected=!this.isSelected,this.$emit("selected-changed"))}}handleImageContentChange(){this.control.classList.toggle("has-image",this.image.assignedNodes().length>0)}onClickHandler(){this.onSelectedHandler()}}Qu([fi],nf.prototype,"name",void 0),Qu([fi({attribute:"description"})],nf.prototype,"description",void 0),Qu([fi({attribute:"selected-aria-label"})],nf.prototype,"selectedAriaLabel",void 0),Qu([fi({attribute:"unselected-aria-label"})],nf.prototype,"unselectedAriaLabel",void 0),Qu([fi({mode:"boolean"})],nf.prototype,"deselectable",void 0),Qu([Qe],nf.prototype,"isSelected",void 0);const of=au`
    .indicator {
        right: calc(${ro} * 2px);
    }
`,af=au`
    .indicator {
        left: calc(${ro} * 2px);
    }
`,rf=nf.compose({baseName:"shopping-coupon-printable",template:(t,e)=>Qc`
    <button
        class="control"
        part="control"
        ${pu("control")}
        aria-live="polite"
        aria-label="${t=>t.isSelected?t.selectedAriaLabel:t.unselectedAriaLabel}"
        aria-describedby="${t=>t.nameId} ${t=>t.descriptionId}"
        @click="${t=>t.onClickHandler()}"
    >
        <div class="image-container" part="image-container">
            <slot
                name="image"
                ${pu("image")}
                @slotchange="${t=>t.handleImageContentChange()}"
            >
                ${ih}
            </slot>
        </div>
        <div class="content" part="content">
            <span id="${t=>t.nameId}" class="name" part="name">${t=>t.name} </span>
            <span id="${t=>t.descriptionId}" class="description" part="description"
                >${t=>t.description}
            </span>
        </div>
        <div
            class="${t=>t.isSelected?"indicator selected":"indicator"}"
            part="indicator"
        >
            <span class="checkbox">
                ${fu((t=>t.isSelected),Qc`<span aria-hidden="true">
                        <svg
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            part="checkbox-svg"
                        >
                            <path
                                d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"
                            />
                        </svg>
                    </span>`)}
            </span>
        </div>
    </button>
`,styles:(t,e)=>au`
    ${su("flex")} :host {
        box-sizing: border-box;
        border-radius: calc(${lo} * 1px);
        font-family: ${ho};
        font-size: ${go};
        line-height: ${mo};
        color: ${Sr};
        outline: none;
    }

    :host(:active) {
        background-color: ${ja};
    }

    .control {
        position: relative;
        color: ${Sr};
        font-family: ${ho};
        background: transparent;
        box-sizing: border-box;
        border: calc(${co} * 1px) solid ${dr};
        border-radius: inherit;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        padding: 0 0 8px;
        width: 100%;
        min-height: 68px;
        cursor: pointer;
        outline: none;
        text-decoration: none;
        overflow: hidden;
    }

    .control:${nh} {
        border-color: ${vr};
        box-shadow: 0 0 0 calc((${uo} - ${co}) * 1px) ${vr};
    }

    .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 138px;
        overflow: hidden;
    }

    .image-container svg {
        fill: ${Wa};
    }

    ::slotted([slot="image"]){
        width: 100%;
        object-fit:none;
    }

    .content {
        display: flex;
        flex-direction: column;
        padding: 0 12px;
        overflow: hidden;
    }

    .name {
        font-size: ${Co};
        line-height: ${bo};
        margin-top: 8px;
        font-weight: 600;
        display: -webkit-box;
        overflow: hidden;
        overflow-wrap: break-word;
        text-align: start;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .name-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .description {
        margin-top: 4px;
        color: ${Er};
        overflow: hidden;
        overflow-wrap: break-word;
        font-size: ${go};
        line-height: ${mo};
        text-align: start;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .indicator {
        display: inline-flex;
        position: absolute;
        top: calc(${ro} *2px);
        align-items: center;
        justify-content: center;
        font-size: ${go};
        line-height: ${xo};
        border-radius: 2px;
        pointer-events: none;
        border-radius: calc(${so} * 1px);
        background-color: ${wa};
    }

    .checkbox {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        border: calc(${co} * 1px) solid ${pr};
        border-radius: inherit;
        background: ${qa};  
        outline: none;
        cursor: pointer;
        width: 26px;
        height: 26px;
    }

    .indicator.selected .checkbox {
        background: var(--checkbox-selected-background, linear-gradient(92.91deg, #15835B 31.47%, #3E8624 99.7%));
        border: none;
    }

    .checkbox svg {
        height: 14px;
        width: 14px;
        fill: ${ir};
        display: block;
        pointer-events: none;  
    }

    .indicator-message {
        display: -webkit-box;
        overflow: hidden;
        overflow-wrap: break-word;
        text-align: start;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .indicator-message-selected, .selected-icon-container {
        display: flex;
        justify-content: center;
        align-content: center;
    }
`.withBehaviors(new Ih(of,af),sd(au`
            .control,
            .name,
            .description,
            .control:hover {
                color: ${cd.ButtonText};
                border-color: ${cd.ButtonText}
            }

            .control:hover,
            .control:${nh} {
                forced-color-adjust: none;
                background: ${cd.ButtonFace};
                color: ${cd.ButtonText};
                border-color: ${cd.Highlight};
                box-shadow: 0 0 0 2px ${cd.Field}, 0 0 0 4px ${cd.FieldText};
            }

            .indicator.selected .checkbox {
                forced-color-adjust: none;
                background: ${cd.Highlight};
                border-color: ${cd.Highlight};
                color: ${cd.HighlightText};
            }

            .checkbox svg {
                fill: ${cd.HighlightText};
            }
        `)),shadowOptions:{delegatesFocus:!0}}),sf=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),lf=new Map,cf=new Map;let uf=null;const df=Wl.createInterface((t=>t.cachedCallback((t=>(null===uf&&(uf=new pf(null,t)),uf))))),hf=Object.freeze({tagFor:t=>cf.get(t),responsibleFor(t){const e=t.$$designSystem$$;if(e)return e;return Wl.findResponsibleContainer(t).get(df)},getOrCreate(t){if(!t)return null===uf&&(uf=Wl.getOrCreateDOMContainer().get(df)),uf;const e=t.$$designSystem$$;if(e)return e;const i=Wl.getOrCreateDOMContainer(t);if(i.has(df,!1))return i.get(df);{const e=new pf(t,i);return i.register(dc.instance(df,e)),e}}});class pf{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>sf.definitionCallbackOnly,null!==t&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,i=[],n=this.disambiguate,o=this.shadowRootMode,a={elementPrefix:this.prefix,tryDefineElement(t,a,r){const s=function(t,e,i){return"string"==typeof t?{name:t,type:e,callback:i}:t}(t,a,r),{name:l,callback:c,baseClass:u}=s;let{type:d}=s,h=l,p=lf.get(h),f=!0;for(;p;){const t=n(h,d,p);switch(t){case sf.ignoreDuplicate:return;case sf.definitionCallbackOnly:f=!1,p=void 0;break;default:h=t,p=lf.get(h)}}f&&((cf.has(d)||d===Ec)&&(d=class extends d{}),lf.set(h,d),cf.set(d,h),u&&cf.set(u,h)),i.push(new ff(e,h,d,o,c,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&$i.registerRoot(this.designTokenRoot)),e.registerWithContext(a,...t);for(const t of i)t.callback(t),t.willDefine&&null!==t.definition&&t.definition.define();return this}}class ff{constructor(t,e,i,n,o,a){this.container=t,this.name=e,this.type=i,this.shadowRootMode=n,this.callback=o,this.willDefine=a,this.definition=null}definePresentation(t){Sc.define(this.name,t,this.container)}defineElement(t){this.definition=new yi(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return hf.tagFor(t)}}const gf={toView(t){var e;return null==t?null:null===(e=t)||void 0===e?void 0:e.toColorString()},fromView(t){if(null==t)return null;const e=Mn(t);return e?Bn.create(e.r,e.g,e.b):null}},mf=au`
  :host {
    background-color: ${Ta};
    color: ${Sr};
  }
`.withBehaviors(sd(au`
      :host {
        background-color: ${cd.Canvas};
        box-shadow: 0 0 0 1px ${cd.CanvasText};
        color: ${cd.CanvasText};
      }
    `));function vf(t){return(e,i)=>{e[i+"Changed"]=function(e,i){null!=i?t.setValueFor(this,i):t.deleteValueFor(this)}}}class yf extends Ec{constructor(){super(),this.noPaint=!1,Xe.getNotifier(this).subscribe({handleChange:this.noPaintChanged.bind(this)},"fillColor")}noPaintChanged(){this.noPaint||void 0===this.fillColor?this.$fastController.removeStyles(mf):this.$fastController.addStyles(mf)}accentBaseColorChanged(t,e){null!=e?ma.setValueFor(this,zn.create(e)):ma.deleteValueFor(this)}neutralBaseColorChanged(t,e){null!=e?ga.setValueFor(this,zn.create(e)):ga.deleteValueFor(this)}}dh([fi({attribute:"no-paint",mode:"boolean"})],yf.prototype,"noPaint",void 0),dh([fi({attribute:"fill-color",converter:gf}),vf(Ta)],yf.prototype,"fillColor",void 0),dh([fi({attribute:"accent-base-color",converter:gf,mode:"fromView"})],yf.prototype,"accentBaseColor",void 0),dh([fi({attribute:"neutral-base-color",converter:gf,mode:"fromView"})],yf.prototype,"neutralBaseColor",void 0),dh([Qe,vf(ga)],yf.prototype,"neutralPalette",void 0),dh([Qe,vf(ma)],yf.prototype,"accentPalette",void 0),dh([fi({converter:hi}),vf(ao)],yf.prototype,"density",void 0),dh([fi({attribute:"design-unit",converter:hi}),vf(ro)],yf.prototype,"designUnit",void 0),dh([fi({attribute:"direction"}),vf(eo)],yf.prototype,"direction",void 0),dh([fi({attribute:"base-height-multiplier",converter:hi}),vf(no)],yf.prototype,"baseHeightMultiplier",void 0),dh([fi({attribute:"base-horizontal-spacing-multiplier",converter:hi}),vf(oo)],yf.prototype,"baseHorizontalSpacingMultiplier",void 0),dh([fi({attribute:"control-corner-radius",converter:hi}),vf(so)],yf.prototype,"controlCornerRadius",void 0),dh([fi({attribute:"stroke-width",converter:hi}),vf(co)],yf.prototype,"strokeWidth",void 0),dh([fi({attribute:"focus-stroke-width",converter:hi}),vf(uo)],yf.prototype,"focusStrokeWidth",void 0),dh([fi({attribute:"disabled-opacity",converter:hi}),vf(io)],yf.prototype,"disabledOpacity",void 0),dh([fi({attribute:"type-ramp-minus-2-font-size"}),vf(vo)],yf.prototype,"typeRampMinus2FontSize",void 0),dh([fi({attribute:"type-ramp-minus-2-line-height"}),vf(yo)],yf.prototype,"typeRampMinus2LineHeight",void 0),dh([fi({attribute:"type-ramp-minus-1-font-size"}),vf(go)],yf.prototype,"typeRampMinus1FontSize",void 0),dh([fi({attribute:"type-ramp-minus-1-line-height"}),vf(mo)],yf.prototype,"typeRampMinus1LineHeight",void 0),dh([fi({attribute:"type-ramp-base-font-size"}),vf(po)],yf.prototype,"typeRampBaseFontSize",void 0),dh([fi({attribute:"type-ramp-base-line-height"}),vf(fo)],yf.prototype,"typeRampBaseLineHeight",void 0),dh([fi({attribute:"type-ramp-plus-1-font-size"}),vf(Co)],yf.prototype,"typeRampPlus1FontSize",void 0),dh([fi({attribute:"type-ramp-plus-1-line-height"}),vf(bo)],yf.prototype,"typeRampPlus1LineHeight",void 0),dh([fi({attribute:"type-ramp-plus-2-font-size"}),vf(So)],yf.prototype,"typeRampPlus2FontSize",void 0),dh([fi({attribute:"type-ramp-plus-2-line-height"}),vf(xo)],yf.prototype,"typeRampPlus2LineHeight",void 0),dh([fi({attribute:"type-ramp-plus-3-font-size"}),vf(Eo)],yf.prototype,"typeRampPlus3FontSize",void 0),dh([fi({attribute:"type-ramp-plus-3-line-height"}),vf(Ao)],yf.prototype,"typeRampPlus3LineHeight",void 0),dh([fi({attribute:"type-ramp-plus-4-font-size"}),vf(To)],yf.prototype,"typeRampPlus4FontSize",void 0),dh([fi({attribute:"type-ramp-plus-4-line-height"}),vf(Io)],yf.prototype,"typeRampPlus4LineHeight",void 0),dh([fi({attribute:"type-ramp-plus-5-font-size"}),vf(Do)],yf.prototype,"typeRampPlus5FontSize",void 0),dh([fi({attribute:"type-ramp-plus-5-line-height"}),vf(wo)],yf.prototype,"typeRampPlus5LineHeight",void 0),dh([fi({attribute:"type-ramp-plus-6-font-size"}),vf(ko)],yf.prototype,"typeRampPlus6FontSize",void 0),dh([fi({attribute:"type-ramp-plus-6-line-height"}),vf(Ro)],yf.prototype,"typeRampPlus6LineHeight",void 0),dh([fi({attribute:"accent-fill-rest-delta",converter:hi}),vf(Po)],yf.prototype,"accentFillRestDelta",void 0),dh([fi({attribute:"accent-fill-hover-delta",converter:hi}),vf(Mo)],yf.prototype,"accentFillHoverDelta",void 0),dh([fi({attribute:"accent-fill-active-delta",converter:hi}),vf(No)],yf.prototype,"accentFillActiveDelta",void 0),dh([fi({attribute:"accent-fill-focus-delta",converter:hi}),vf(Lo)],yf.prototype,"accentFillFocusDelta",void 0),dh([fi({attribute:"accent-foreground-rest-delta",converter:hi}),vf(_o)],yf.prototype,"accentForegroundRestDelta",void 0),dh([fi({attribute:"accent-foreground-hover-delta",converter:hi}),vf(Fo)],yf.prototype,"accentForegroundHoverDelta",void 0),dh([fi({attribute:"accent-foreground-active-delta",converter:hi}),vf(Ho)],yf.prototype,"accentForegroundActiveDelta",void 0),dh([fi({attribute:"accent-foreground-focus-delta",converter:hi}),vf(Bo)],yf.prototype,"accentForegroundFocusDelta",void 0),dh([fi({attribute:"neutral-fill-rest-delta",converter:hi}),vf(Uo)],yf.prototype,"neutralFillRestDelta",void 0),dh([fi({attribute:"neutral-fill-hover-delta",converter:hi}),vf(Vo)],yf.prototype,"neutralFillHoverDelta",void 0),dh([fi({attribute:"neutral-fill-active-delta",converter:hi}),vf($o)],yf.prototype,"neutralFillActiveDelta",void 0),dh([fi({attribute:"neutral-fill-focus-delta",converter:hi}),vf(Go)],yf.prototype,"neutralFillFocusDelta",void 0),dh([fi({attribute:"neutral-fill-input-rest-delta",converter:hi}),vf(zo)],yf.prototype,"neutralFillInputRestDelta",void 0),dh([fi({attribute:"neutral-fill-input-hover-delta",converter:hi}),vf(Wo)],yf.prototype,"neutralFillInputHoverDelta",void 0),dh([fi({attribute:"neutral-fill-input-active-delta",converter:hi}),vf(Ko)],yf.prototype,"neutralFillInputActiveDelta",void 0),dh([fi({attribute:"neutral-fill-input-focus-delta",converter:hi}),vf(jo)],yf.prototype,"neutralFillInputFocusDelta",void 0),dh([fi({attribute:"neutral-fill-layer-rest-delta",converter:hi}),vf(Jo)],yf.prototype,"neutralFillLayerRestDelta",void 0),dh([fi({attribute:"neutral-fill-stealth-rest-delta",converter:hi}),vf(Qo)],yf.prototype,"neutralFillStealthRestDelta",void 0),dh([fi({attribute:"neutral-fill-stealth-hover-delta",converter:hi}),vf(ta)],yf.prototype,"neutralFillStealthHoverDelta",void 0),dh([fi({attribute:"neutral-fill-stealth-active-delta",converter:hi}),vf(ea)],yf.prototype,"neutralFillStealthActiveDelta",void 0),dh([fi({attribute:"neutral-fill-stealth-focus-delta",converter:hi}),vf(ia)],yf.prototype,"neutralFillStealthFocusDelta",void 0),dh([fi({attribute:"neutral-fill-strong-hover-delta",converter:hi}),vf(oa)],yf.prototype,"neutralFillStrongHoverDelta",void 0),dh([fi({attribute:"neutral-fill-strong-active-delta",converter:hi}),vf(aa)],yf.prototype,"neutralFillStrongActiveDelta",void 0),dh([fi({attribute:"neutral-fill-strong-focus-delta",converter:hi}),vf(ra)],yf.prototype,"neutralFillStrongFocusDelta",void 0),dh([fi({attribute:"base-layer-luminance",converter:hi}),vf(Oo)],yf.prototype,"baseLayerLuminance",void 0),dh([fi({attribute:"neutral-stroke-divider-rest-delta",converter:hi}),vf(da)],yf.prototype,"neutralStrokeDividerRestDelta",void 0),dh([fi({attribute:"neutral-stroke-rest-delta",converter:hi}),vf(sa)],yf.prototype,"neutralStrokeRestDelta",void 0),dh([fi({attribute:"neutral-stroke-hover-delta",converter:hi}),vf(la)],yf.prototype,"neutralStrokeHoverDelta",void 0),dh([fi({attribute:"neutral-stroke-active-delta",converter:hi}),vf(ca)],yf.prototype,"neutralStrokeActiveDelta",void 0),dh([fi({attribute:"neutral-stroke-focus-delta",converter:hi}),vf(ua)],yf.prototype,"neutralStrokeFocusDelta",void 0);const Cf=yf.compose({baseName:"design-system-provider",template:Qc` <slot></slot> `,styles:au`
    ${su("block")}
  `});function bf(t,e,i){return i<t?e:i>e?t:i}function Sf(t,e,i=0){return[e,i]=[e,i].sort(((t,e)=>t-e)),e<=t&&t<i}class xf extends Ec{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}var Ef;Ae([fi({attribute:"heading-level",mode:"fromView",converter:hi})],xf.prototype,"headinglevel",void 0),Ae([fi({mode:"boolean"})],xf.prototype,"expanded",void 0),Ae([fi],xf.prototype,"id",void 0),Su(xf,mu),function(t){t.single="single",t.multi="multi"}(Ef||(Ef={}));class Af extends Ec{constructor(){super(...arguments),this.expandmode=Ef.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change")},this.setItems=()=>{var t;if(0!==this.accordionItems.length&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach(((t,e)=>{t instanceof xf&&(t.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==e?t.expanded=!1:t.expanded=!0));const i=this.accordionIds[e];t.setAttribute("id","string"!=typeof i?`accordion-${e+1}`:i),this.activeid=this.accordionIds[this.activeItemIndex],t.addEventListener("keydown",this.handleItemKeyDown),t.addEventListener("focus",this.handleItemFocus)})),this.isSingleExpandMode())){(null!==(t=this.findExpandedItem())&&void 0!==t?t:this.accordionItems[0]).setAttribute("aria-disabled","true")}},this.removeItemListeners=t=>{t.forEach(((t,e)=>{t.removeEventListener("change",this.activeItemChange),t.removeEventListener("keydown",this.handleItemKeyDown),t.removeEventListener("focus",this.handleItemFocus)}))},this.activeItemChange=t=>{const e=t.target;this.activeid=e.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),e.expanded=!0,e.setAttribute("aria-disabled","true"),this.accordionItems.forEach((t=>{t.hasAttribute("disabled")||t.id===this.activeid||t.removeAttribute("aria-disabled")}))),this.activeItemIndex=Array.from(this.accordionItems).indexOf(e),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case Iu:t.preventDefault(),this.adjust(-1);break;case Eu:t.preventDefault(),this.adjust(1);break;case ku:this.activeItemIndex=0,this.focusItem();break;case Ru:this.activeItemIndex=this.accordionItems.length-1,this.focusItem()}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){const e=t.target,i=this.activeItemIndex=Array.from(this.accordionItems).indexOf(e);this.activeItemIndex!==i&&-1!==i&&(this.activeItemIndex=i,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,e){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if("true"===this.accordionItems[t].getAttribute("expanded"))return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach(((t,e)=>{t.expanded=!1}))}getItemIds(){return this.accordionItems.map((t=>t.getAttribute("id")))}isSingleExpandMode(){return this.expandmode===Ef.single}adjust(t){this.activeItemIndex=bf(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){const t=this.accordionItems[this.activeItemIndex];t instanceof xf&&t.expandbutton.focus()}}Ae([fi({attribute:"expand-mode"})],Af.prototype,"expandmode",void 0),Ae([Qe],Af.prototype,"accordionItems",void 0);const Tf=Af.compose({baseName:"accordion",template:(t,e)=>Qc`
    <template>
        <slot ${nu({property:"accordionItems",filter:tu()})}></slot>
        <slot name="item" part="item" ${nu("accordionItems")}></slot>
    </template>
`,styles:(t,e)=>au`
    ${su("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      font-family: ${ho};
      font-size: ${go};
      line-height: ${mo};
      color: ${Sr};
      border-top: calc(${co} * 1px) solid ${dr};
    }
  `}),If=xf.compose({baseName:"accordion-item",template:(t,e)=>Qc`
    <template class="${t=>t.expanded?"expanded":""}">
        <div
            class="heading"
            part="heading"
            role="heading"
            aria-level="${t=>t.headinglevel}"
        >
            <button
                class="button"
                part="button"
                ${pu("expandbutton")}
                aria-expanded="${t=>t.expanded}"
                aria-controls="${t=>t.id}-panel"
                id="${t=>t.id}"
                @click="${(t,e)=>t.clickHandler(e.event)}"
            >
                <span class="heading">
                    <slot name="heading" part="heading"></slot>
                </span>
            </button>
            ${yu(0,e)}
            ${vu(0,e)}
            <span class="icon" part="icon" aria-hidden="true">
                <slot name="expanded-icon" part="expanded-icon">
                    ${e.expandedIcon||""}
                </slot>
                <slot name="collapsed-icon" part="collapsed-icon">
                    ${e.collapsedIcon||""}
                </slot>
            <span>
        </div>
        <div
            class="region"
            part="region"
            id="${t=>t.id}-panel"
            role="region"
            aria-labelledby="${t=>t.id}"
        >
            <slot></slot>
        </div>
    </template>
`,styles:(t,e)=>au`
    ${su("flex")} :host {
      box-sizing: border-box;
      font-family: ${ho};
      flex-direction: column;
      font-size: ${go};
      line-height: ${mo};
      border-bottom: calc(${co} * 1px) solid ${dr};
    }

    .region {
      display: none;
      padding: calc((6 + (${ro} * 2 * ${ao})) * 1px);
    }

    .heading {
      display: grid;
      position: relative;
      grid-template-columns: auto 1fr auto calc(${fh} * 1px);
      z-index: 2;
    }

    .button {
      appearance: none;
      border: none;
      background: none;
      grid-column: 2;
      grid-row: 1;
      outline: none;
      padding: 0 calc((6 + (${ro} * 2 * ${ao})) * 1px);
      text-align: left;
      height: calc(${fh} * 1px);
      color: ${Sr};
      cursor: pointer;
      font-family: inherit;
    }

    .button:hover,
    .button:active {
      color: ${Sr};
    }

    .button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      cursor: pointer;
    }

    .button:${nh}::before {
      outline: none;
      border: calc(${co} * 1px) solid ${vr};
      box-shadow: 0 0 0 calc((${uo} - ${co}) * 1px) ${vr};
    }

    :host(.expanded) .region {
      display: block;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      z-index: 2;
      pointer-events: none;
      fill: ${wa};
    }

    slot[name='collapsed-icon'] {
      display: flex;
    }

    :host(.expanded) slot[name='collapsed-icon'] {
      display: none;
    }

    slot[name='expanded-icon'] {
      display: none;
    }

    :host(.expanded) slot[name='expanded-icon'] {
      display: flex;
    }

    .start {
      display: flex;
      align-items: center;
      padding-inline-start: calc(${ro} * 1px);
      justify-content: center;
      grid-column: 1;
      z-index: 2;
    }

    .end {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 3;
      z-index: 2;
    }
  `.withBehaviors(sd(au`
        .button:${nh}::before {
          border-color: ${cd.Highlight};
          box-shadow: 0 0 0 calc((${uo} - ${co}) * 1px) ${cd.Highlight};
        }
        .icon {
          fill: ${cd.ButtonText};
        }
      `)),collapsedIcon:'\n    <svg\n        width="20"\n        height="20"\n        viewBox="0 0 20 20"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <path\n            fill-rule="evenodd"\n            clip-rule="evenodd"\n            d="M16.22 3H3.78a.78.78 0 00-.78.78v12.44c0 .43.35.78.78.78h12.44c.43 0 .78-.35.78-.78V3.78a.78.78 0 00-.78-.78zM3.78 2h12.44C17.2 2 18 2.8 18 3.78v12.44c0 .98-.8 1.78-1.78 1.78H3.78C2.8 18 2 17.2 2 16.22V3.78C2 2.8 2.8 2 3.78 2zM11 9h3v2h-3v3H9v-3H6V9h3V6h2v3z"\n        />\n    </svg>\n  ',expandedIcon:'\n    <svg\n        width="20"\n        height="20"\n        viewBox="0 0 20 20"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <path\n            fill-rule="evenodd"\n            clip-rule="evenodd"\n            d="M3.78 3h12.44c.43 0 .78.35.78.78v12.44c0 .43-.35.78-.78.78H3.78a.78.78 0 01-.78-.78V3.78c0-.43.35-.78.78-.78zm12.44-1H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.78-.8 1.78-1.78V3.78C18 2.8 17.2 2 16.22 2zM14 9H6v2h8V9z"\n        />\n    </svg>\n  '}),Df="not-allowed";class wf extends Vu{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter((t=>t.nodeType===Node.ELEMENT_NODE));1===t.length&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}dh([fi],wf.prototype,"appearance",void 0);const kf=wf.compose({baseName:"button",baseClass:Vu,template:(t,e)=>Qc`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${pu("control")}
    >
        ${yu(0,e)}
        <span class="content" part="content">
            <slot ${nu("defaultSlottedContent")}></slot>
        </span>
        ${vu(0,e)}
    </button>
`,styles:(t,e)=>au`
    :host([disabled]),
    :host([disabled]:hover),
    :host([disabled]:active) {
      opacity: ${io};
      background-color: ${Wa};
      cursor: ${Df};
    }

    ${gh()}
  `.withBehaviors(sd(au`
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:active),
        :host([disabled]) .control,
        :host([disabled]) .control:hover,
        :host([appearance='neutral'][disabled]:hover) .control {
          forced-color-adjust: none;
          background-color: ${cd.ButtonFace};
          border-color: ${cd.GrayText};
          color: ${cd.GrayText};
          opacity: 1;
        }
      `),xh("accent",au`
        :host([appearance='accent'][disabled]),
        :host([appearance='accent'][disabled]:hover),
        :host([appearance='accent'][disabled]:active) {
          background: ${wa};
        }

        ${mh}
      `.withBehaviors(sd(au`
            :host([appearance='accent'][disabled]) .control,
            :host([appearance='accent'][disabled]) .control:hover {
              background: ${cd.ButtonFace};
              border-color: ${cd.GrayText};
              color: ${cd.GrayText};
            }
          `))),xh("lightweight",au`
        :host([appearance='lightweight'][disabled]:hover),
        :host([appearance='lightweight'][disabled]:active) {
          background-color: transparent;
          color: ${Va};
        }

        :host([appearance='lightweight'][disabled]) .content::before,
        :host([appearance='lightweight'][disabled]:hover) .content::before,
        :host([appearance='lightweight'][disabled]:active) .content::before {
          background: transparent;
        }

        ${yh}
      `.withBehaviors(sd(au`
            :host([appearance='lightweight'][disabled]) .control {
              forced-color-adjust: none;
              color: ${cd.GrayText};
            }

            :host([appearance='lightweight'][disabled]) .control:hover .content::before {
              background: none;
            }
          `))),xh("outline",au`
        :host([appearance='outline'][disabled]:hover),
        :host([appearance='outline'][disabled]:active) {
          background: transparent;
          border-color: ${sr};
        }

        ${Ch}
      `.withBehaviors(sd(au`
            :host([appearance='outline'][disabled]) .control {
              border-color: ${cd.GrayText};
            }
          `))),xh("stealth",au`
        :host([appearance='stealth'][disabled]),
        :host([appearance='stealth'][disabled]:hover),
        :host([appearance='stealth'][disabled]:active) {
          background: ${ir};
        }

        ${bh}
      `.withBehaviors(sd(au`
            :host([appearance='stealth'][disabled]),
            :host([appearance='stealth'][disabled]:hover) {
              background: ${cd.ButtonFace};
            }

            :host([appearance='stealth'][disabled]) .control {
              background: ${cd.ButtonFace};
              border-color: transparent;
              color: ${cd.GrayText};
            }
          `)))),shadowOptions:{delegatesFocus:!0}}),Rf=Yu.compose({baseName:"menu",template:(t,e)=>Qc`
    <template
        slot="${t=>t.slot?t.slot:t.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(t,e)=>t.handleMenuKeyDown(e.event)}"
        @focusout="${(t,e)=>t.handleFocusOut(e.event)}"
    >
        <slot ${nu("items")}></slot>
    </template>
`,styles:(t,e)=>au`
      ${su("block")} :host {
        --elevation: 11;
        background: ${Ca};
        border: calc(${co} * 1px) solid transparent;
        border-radius: ${lo};
        ${oh}
        margin: 0;
        border-radius: calc(${so} * 1px);
        padding: calc(${ro} * 1px) 0;
        max-width: 368px;
        min-width: 64px;
      }

      :host([slot='submenu']) {
        width: max-content;
        margin: 0 calc(${ro} * 1px);
      }

      ::slotted(hr) {
        box-sizing: content-box;
        height: 0;
        margin: 0;
        border: none;
        border-top: calc(${co} * 1px) solid ${dr};
      }
    `}),Of=ju.compose({baseName:"menu-item",template:(t,e)=>Qc`
    <template
        role="${t=>t.role}"
        aria-haspopup="${t=>t.hasSubmenu?"menu":void 0}"
        aria-checked="${t=>t.role!==Wu.menuitem?t.checked:void 0}"
        aria-disabled="${t=>t.disabled}"
        aria-expanded="${t=>t.expanded}"
        @keydown="${(t,e)=>t.handleMenuItemKeyDown(e.event)}"
        @click="${(t,e)=>t.handleMenuItemClick(e.event)}"
        @mouseover="${(t,e)=>t.handleMouseOver(e.event)}"
        @mouseout="${(t,e)=>t.handleMouseOut(e.event)}"
        class="${t=>t.disabled?"disabled":""} ${t=>t.expanded?"expanded":""} ${t=>`indent-${t.startColumnCount}`}"
    >
            ${fu((t=>t.role===Wu.menuitemcheckbox),Qc`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${e.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${fu((t=>t.role===Wu.menuitemradio),Qc`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${e.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${yu(0,e)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${vu(0,e)}
        ${fu((t=>t.hasSubmenu),Qc`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${e.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${fu((t=>t.expanded),Qc`
                <${t.tagFor(du)}
                    :anchorElement="${t=>t}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${t=>t.currentDirection}"
                    @loaded="${t=>t.submenuLoaded()}"
                    ${pu("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${t.tagFor(du)}>
            `)}
    </template>
`,styles:(t,e)=>au`
    ${su("grid")} :host {
      contain: layout;
      overflow: visible;
      font-family: ${ho};
      outline: none;
      box-sizing: border-box;
      height: calc(${fh} * 1px);
      grid-template-columns: minmax(42px, auto) 1fr minmax(42px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      margin: 0 calc(${ro} * 1px);
      white-space: nowrap;
      color: ${Sr};
      fill: currentcolor;
      cursor: pointer;
      font-size: ${po};
      line-height: ${fo};
      border-radius: calc(${so} * 1px);
      border: calc(${co} * 1px) solid transparent;
    }

    :host(.indent-0) {
      grid-template-columns: auto 1fr minmax(42px, auto);
    }

    :host(.indent-0) .content {
      grid-column: 1;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-2) {
      grid-template-columns: minmax(42px, auto) minmax(42px, auto) 1fr minmax(42px, auto) minmax(42px, auto);
    }

    :host(.indent-2) .content {
      grid-column: 3;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-2) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) .start {
      grid-column: 2;
    }

    :host(.indent-2) .end {
      grid-column: 4;
    }

    :host(:${nh}) {
      border: calc(${co} * 1px) solid ${vr};
      box-shadow: 0 0 0 calc((${uo} - ${co}) * 1px) ${vr};
    }

    :host(:hover) {
      background: ${nr};
    }

    :host([aria-checked='true']),
    :host(:active),
    :host(.expanded) {
      background: ${or};
      color: ${Sr};
    }

    :host([disabled]) {
      cursor: ${Df};
      opacity: ${io};
    }

    :host([disabled]:hover) .start,
    :host([disabled]:hover) .end,
    :host([disabled]:hover)::slotted(svg) {
      fill: currentcolor;
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end {
      display: flex;
      justify-content: center;
    }

    ::slotted(svg) {
      ${""} width: 16px;
      height: 16px;
      display: flex;
    }

    :host(:hover) .start,
    :host(:hover) .end,
    :host(:hover)::slotted(svg),
    :host(:active) .start,
    :host(:active) .end,
    :host(:active)::slotted(svg) {
      fill: ${Sr};
    }

    :host(.indent-1[aria-haspopup='menu']),
    :host(.indent-1[role='menuitemcheckbox']),
    :host(.indent-1[role='menuitemradio']) {
      display: grid;
      grid-template-columns: minmax(42px, auto) auto 1fr minmax(42px, auto) minmax(42px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup='menu'])) .end {
      grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
      display: none;
    }

    :host([aria-haspopup='menu']) .expand-collapse-glyph-container,
    :host([role='menuitemcheckbox']) .input-container,
    :host([role='menuitemradio']) .input-container {
      display: grid;
      margin-inline-end: 10px;
    }

    :host([aria-haspopup='menu']) .content,
    :host([role='menuitemcheckbox']) .content,
    :host([role='menuitemradio']) .content {
      grid-column-start: 3;
    }

    :host([aria-haspopup='menu']) .end,
    :host([role='menuitemcheckbox']) .end,
    :host([role='menuitemradio']) .end {
      grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      outline: none;
      margin-inline-start: 10px;
    }

    :host .checkbox {
      border-radius: calc(${so} * 1px);
    }

    :host .radio {
      border-radius: 999px;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    ::slotted([slot='checkbox-indicator']),
    ::slotted([slot='radio-indicator']) {
      display: none;
    }

    ::slotted([slot='end']:not(svg)) {
      margin-inline-end: 10px;
      color: ${Er};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']) {
      width: 100%;
      height: 100%;
      display: block;
      fill: ${Sr};
      pointer-events: none;
    }

    :host([aria-checked='true']) .radio-indicator {
      display: block;
      pointer-events: none;
    }

    :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
      display: block;
      pointer-events: none;
    }
  `.withBehaviors(sd(au`
        :host {
          forced-color-adjust: none;
          border-color: transparent;
          color: ${cd.ButtonText};
          fill: ${cd.ButtonText};
        }
        :host(:hover) {
          background: ${cd.Highlight};
          color: ${cd.HighlightText};
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg) {
          fill: ${cd.HighlightText};
        }

        :host(.expanded) {
          background: ${cd.Highlight};
          border-color: ${cd.Highlight};
          color: ${cd.HighlightText};
        }

        :host(:${nh}) {
          background: ${cd.Highlight};
          border-color: ${cd.ButtonText};
          box-shadow: 0 0 0 calc(${co} * 1px) inset ${cd.HighlightText};
          color: ${cd.HighlightText};
          fill: currentcolor;
        }

        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg) {
          background: ${cd.Canvas};
          color: ${cd.GrayText};
          fill: currentcolor;
          opacity: 1;
        }

        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${cd.ButtonText};
          background: ${cd.HighlightText};
        }

        :host([checked='true']) .checkbox,
        :host([checked='true']) .radio {
          background: ${cd.HighlightText};
          border-color: ${cd.HighlightText};
        }

        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${nh}) .expanded-toggle,
            :host(:${nh}) .checkbox,
            :host(:${nh}) .radio,
            :host([checked="true"]:hover) .checkbox,
            :host([checked="true"]:hover) .radio,
            :host([checked="true"]:${nh}) .checkbox,
            :host([checked="true"]:${nh}) .radio {
          border-color: ${cd.HighlightText};
        }

        :host([aria-checked='true']) {
          background: ${cd.Highlight};
          color: ${cd.HighlightText};
        }

        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${cd.Highlight};
        }

        :host([aria-checked='true']) .radio-indicator {
          background: ${cd.Highlight};
        }
      `)),checkboxIndicator:'\n    <svg\n        aria-hidden="true"\n        part="checkbox-indicator"\n        class="checkbox-indicator"\n        viewBox="0 0 20 20"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <path\n            fill-rule="evenodd"\n            clip-rule="evenodd"\n            d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"\n        />\n    </svg>\n  ',expandCollapseGlyph:'\n    <svg\n        viewBox="0 0 16 16"\n        xmlns="http://www.w3.org/2000/svg"\n        class="expand-collapse-glyph"\n        part="expand-collapse-glyph"\n    >\n        <path\n            d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"\n        />\n    </svg>\n  ',radioIndicator:'\n    <svg\n      aria-hidden="true"\n      part="radio-indicator"\n      class="radio-indicator"\n      viewBox="0 0 20 20"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n          fill-rule="evenodd"\n          clip-rule="evenodd"\n          d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"\n      />\n    </svg>\n  '});class Pf extends Ec{}Ae([fi({mode:"boolean"})],Pf.prototype,"disabled",void 0);const Mf=Pf.compose({baseName:"tab",template:(t,e)=>Qc`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`,styles:(t,e)=>au`
      ${su("inline-flex")} :host {
        box-sizing: border-box;
        font-family: ${ho};
        font-size: ${po};
        font-weight: 400;
        line-height: ${fo};
        height: calc(${fh} * 1px);
        padding: 0 calc((6 + (${ro} * 2 * ${ao})) * 1px);
        color: ${Sr};
        border-radius: calc(${so} * 1px);
        border: calc(${co} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1;
        cursor: pointer;
      }

      :host([aria-selected='true']) {
        z-index: 2;
      }

      :host(:hover),
      :host(:active) {
        color: ${Sr};
      }

      :host(:${nh}) {
        outline: none;
        border: calc(${co} * 1px) solid ${vr};
        box-shadow: 0 0 0 calc((${uo} - ${co}) * 1px) ${vr};
      }

      :host(:focus) {
        outline: none;
      }

      :host(.vertical) {
        justify-content: end;
        grid-column: 2;
      }

      :host(.vertical[aria-selected='true']) {
        z-index: 2;
      }

      :host(.vertical:hover),
      :host(.vertical:active) {
        color: ${Sr};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(sd(au`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${cd.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: ${cd.Highlight};
            color: ${cd.HighlightText};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: ${cd.HighlightText};
            color: ${cd.Highlight};
            fill: currentcolor;
          }
          :host(:${nh}) {
            border-color: ${cd.ButtonText};
            box-shadow: none;
          }
        `))});const Nf=class extends Ec{}.compose({baseName:"tab-panel",template:(t,e)=>Qc`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(t,e)=>au`
  ${su("block")} :host {
    box-sizing: border-box;
    font-family: ${ho};
    font-size: ${go};
    font-weight: 400;
    line-height: ${mo};
    padding: 0 calc((6 + (${ro} * 2 * ${ao})) * 1px);
  }
`});var Lf;!function(t){t.vertical="vertical",t.horizontal="horizontal"}(Lf||(Lf={}));class _f extends Ec{constructor(){super(...arguments),this.orientation=Lf.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>"true"===t.getAttribute("aria-disabled"),this.isFocusableElement=t=>!this.isDisabledElement(t),this.setTabs=()=>{const t="gridColumn",e="gridRow",i=this.isHorizontal()?t:e;this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((t,e)=>{if("tab"===t.slot&&this.isFocusableElement(t)){this.activeindicator&&(this.showActiveIndicator=!0);const i=this.tabIds[e],n=this.tabpanelIds[e];t.setAttribute("id","string"!=typeof i?`tab-${e+1}`:i),t.setAttribute("aria-selected",this.activeTabIndex===e?"true":"false"),t.setAttribute("aria-controls","string"!=typeof n?`panel-${e+1}`:n),t.addEventListener("click",this.handleTabClick),t.addEventListener("keydown",this.handleTabKeyDown),t.setAttribute("tabindex",this.activeTabIndex===e?"0":"-1"),this.activeTabIndex===e&&(this.activetab=t)}t.style.gridColumn="",t.style.gridRow="",t.style[i]=`${e+1}`,this.isHorizontal()?t.classList.remove("vertical"):t.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.tabpanels.forEach(((t,e)=>{const i=this.tabIds[e],n=this.tabpanelIds[e];t.setAttribute("id","string"!=typeof n?`panel-${e+1}`:n),t.setAttribute("aria-labelledby","string"!=typeof i?`tab-${e+1}`:i),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")}))},this.handleTabClick=t=>{const e=t.currentTarget;1===e.nodeType&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case Au:t.preventDefault(),this.adjustBackward(t);break;case Tu:t.preventDefault(),this.adjustForward(t)}else switch(t.key){case Iu:t.preventDefault(),this.adjustBackward(t);break;case Eu:t.preventDefault(),this.adjustForward(t)}switch(t.key){case ku:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case Ru:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=t=>{const e=this.tabs;let i=0;for(i=this.activetab?e.indexOf(this.activetab)+1:1,i===e.length&&(i=0);i<e.length&&e.length>1;){if(this.isFocusableElement(e[i])){this.moveToTabByIndex(e,i);break}if(this.activetab&&i===e.indexOf(this.activetab))break;i+1>=e.length?i=0:i+=1}},this.adjustBackward=t=>{const e=this.tabs;let i=0;for(i=this.activetab?e.indexOf(this.activetab)-1:0,i=i<0?e.length-1:i;i>=0&&e.length>1;){if(this.isFocusableElement(e[i])){this.moveToTabByIndex(e,i);break}i-1<0?i=e.length-1:i-=1}},this.moveToTabByIndex=(t,e)=>{const i=t[e];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((e=>e.id===t)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((t=>t.getAttribute("id")))}getTabPanelIds(){return this.tabpanels.map((t=>t.getAttribute("id")))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Lf.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",n=this.activeIndicatorRef[i];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[i];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;const a=o-n;this.activeIndicatorRef.style.transform=`${e}(${a}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(t){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=bf(0,this.tabs.length-1,this.activeTabIndex+t),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}Ae([fi],_f.prototype,"orientation",void 0),Ae([fi],_f.prototype,"activeid",void 0),Ae([Qe],_f.prototype,"tabs",void 0),Ae([Qe],_f.prototype,"tabpanels",void 0),Ae([fi({mode:"boolean"})],_f.prototype,"activeindicator",void 0),Ae([Qe],_f.prototype,"activeIndicatorRef",void 0),Ae([Qe],_f.prototype,"showActiveIndicator",void 0),Su(_f,mu);const Ff=_f.compose({baseName:"tabs",template:(t,e)=>Qc`
    <template class="${t=>t.orientation}">
        ${yu(0,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${nu("tabs")}></slot>

            ${fu((t=>t.showActiveIndicator),Qc`
                    <div
                        ${pu("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${vu(0,e)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${nu("tabpanels")}></slot>
        </div>
    </template>
`,styles:(t,e)=>au`
      ${su("grid")} :host {
        box-sizing: border-box;
        font-family: ${ho};
        font-size: ${po};
        line-height: ${fo};
        color: ${Sr};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto;
        position: relative;
        width: max-content;
        align-self: end;
      }

      .start,
      .end {
        align-self: center;
      }

      .activeIndicator {
        grid-row: 2;
        grid-column: 1;
        width: 20px;
        height: 3px;
        border-radius: calc(${so} * 1px);
        justify-self: center;
        background: ${wa};
      }

      .activeIndicatorTransition {
        transition: transform 0.2s ease-in-out;
      }

      .tabpanel {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
      }

      :host(.vertical) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
      }

      :host(.vertical) .tablist {
        grid-row-start: 2;
        grid-row-end: 2;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
        position: relative;
        width: max-content;
        justify-self: end;
        width: 100%;
      }

      :host(.vertical) .tabpanel {
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      :host(.vertical) .end {
        grid-row: 3;
      }

      :host(.vertical) .activeIndicator {
        grid-column: 1;
        grid-row: 1;
        width: 3px;
        height: 20px;
        border-radius: calc(${so} * 1px);
        align-self: center;
        background: ${wa};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(sd(au`
          .activeIndicator,
          :host(.vertical) .activeIndicator {
            forced-color-adjust: none;
            background: ${cd.Highlight};
          }
        `))});class Hf extends Ec{}class Bf extends(Hu(Hf)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Uf extends Bf{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case Du:case Ou:this.checked=!this.checked}},this.clickHandler=t=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,e){super.checkedChanged(t,e),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}Ae([fi({attribute:"readonly",mode:"boolean"})],Uf.prototype,"readOnly",void 0),Ae([Qe],Uf.prototype,"defaultSlottedNodes",void 0);const Vf=Uf.compose({baseName:"switch",template:(t,e)=>Qc`
    <template
        role="switch"
        aria-checked="${t=>t.checked}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,e)=>t.keypressHandler(e.event)}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        class="${t=>t.checked?"checked":""}"
    >
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${nu("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${e.switch||""}</slot>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`,styles:(t,e)=>au`
    :host([hidden]) {
      display: none;
    }

    ${su("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${ho};
      margin: calc(${ro} * 1px) 0;
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${io};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .switch,
    :host(.disabled) .switch {
      cursor: ${Df};
    }

    .switch {
      position: relative;
      outline: none;
      box-sizing: border-box;
      width: calc(((${fh} / 2) + ${ro}) * 2px);
      height: calc(((${fh} / 2) + ${ro}) * 1px);
      background: ${qa};
      border-radius: calc(${fh} * 1px);
      border: calc(${co} * 1px) solid ${pr};
    }

    :host(:enabled) .switch:hover {
      background: ${Xa};
      border-color: ${fr};
      cursor: pointer;
    }

    :host(:enabled) .switch:active {
      background: ${Za};
      border-color: ${gr};
    }

    :host(:${nh}) .switch {
      box-shadow: 0 0 0 2px ${Ta}, 0 0 0 4px ${vr};
      border-color: ${vr};
    }

    .checked-indicator {
      position: absolute;
      height: calc((${fh} - (${ro} * 5.5)) * 1px);
      width: calc((${fh} - (${ro} * 5.5)) * 1px);
      top: calc(${ro} * 1px);
      background: ${Sr};
      border-radius: 50%;
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${Sr};
      cursor: pointer;
      font-size: ${po};
      line-height: ${fo};
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${Sr};
      font-size: ${po};
      line-height: ${fo};
      margin-inline-end: calc(${ro} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted(*) {
      ${""} margin-inline-start: calc(${ro} * 2px + 2px);
    }

    :host([aria-checked='true']) .checked-indicator {
      background: ${Na};
    }

    :host([aria-checked='true']) .switch {
      background: ${wa};
    }

    :host([aria-checked='true']:enabled) .switch:hover {
      background: ${ka};
    }

    :host([aria-checked='true']:enabled) .switch:hover .checked-indicator {
      background: ${La};
    }

    :host([aria-checked='true']:enabled) .switch:active {
      background: ${Ra};
    }

    :host([aria-checked='true']:enabled) .switch:active .checked-indicator {
      background: ${_a};
    }

    :host([aria-checked="true"]:${nh}:enabled) .switch {
      box-shadow: 0 0 0 2px ${Ta}, 0 0 0 4px ${vr};
      border-color: transparent;
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host([aria-checked='true']) .unchecked-message {
      display: none;
    }

    :host([aria-checked='true']) .checked-message {
      display: block;
    }
  `.withBehaviors(new Ih(au`
        .checked-indicator {
          left: calc(${ro} * 1px);
        }

        :host([aria-checked='true']) .checked-indicator {
          left: calc((((${fh} / 2) + ${ro}) + ${ro}) * 1px);
        }
      `,au`
        .checked-indicator {
          right: calc(${ro} * 1px);
        }

        :host([aria-checked='true']) .checked-indicator {
          right: calc((((${fh} / 2) + ${ro}) + ${ro}) * 1px);
        }
      `),sd(au`
        .checked-indicator,
        :host(:enabled) .switch:active .checked-indicator {
          forced-color-adjust: none;
          background: ${cd.FieldText};
        }
        .switch {
          forced-color-adjust: none;
          background: ${cd.Field};
          border-color: ${cd.FieldText};
        }
        :host(:enabled) .switch:hover {
          background: ${cd.HighlightText};
          border-color: ${cd.Highlight};
        }
        :host(.checked) .switch {
          background: ${cd.Highlight};
          border-color: ${cd.Highlight};
        }
        :host(.checked:enabled) .switch:hover,
        :host(:enabled) .switch:active {
          background: ${cd.HighlightText};
          border-color: ${cd.Highlight};
        }
        :host(.checked) .checked-indicator {
          background: ${cd.HighlightText};
        }
        :host(.checked:enabled) .switch:hover .checked-indicator {
          background: ${cd.Highlight};
        }
        :host(:${nh}) .switch {
          border-color: ${cd.Highlight};
          box-shadow: 0 0 0 2px ${cd.Field}, 0 0 0 4px ${cd.FieldText};
        }
        :host(.checked:${nh}:enabled) .switch {
          box-shadow: 0 0 0 2px ${cd.Field}, 0 0 0 4px ${cd.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .checked-indicator {
          background: ${cd.GrayText};
        }
        :host(.disabled) .switch {
          background: ${cd.Field};
          border-color: ${cd.GrayText};
        }
        .status-message,
        .label {
          color: ${cd.FieldText};
        }
      `)),switch:'\n    <span class="checked-indicator" part="checked-indicator"></span>\n  '});class $f extends Ec{}class Gf extends(Fu($f)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}var zf;!function(t){t.email="email",t.password="password",t.tel="tel",t.text="text",t.url="url"}(zf||(zf={}));class Wf extends Gf{constructor(){super(...arguments),this.type=zf.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&Fe.queueUpdate((()=>{this.focus()}))}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}}Ae([fi({attribute:"readonly",mode:"boolean"})],Wf.prototype,"readOnly",void 0),Ae([fi({mode:"boolean"})],Wf.prototype,"autofocus",void 0),Ae([fi],Wf.prototype,"placeholder",void 0),Ae([fi],Wf.prototype,"type",void 0),Ae([fi],Wf.prototype,"list",void 0),Ae([fi({converter:hi})],Wf.prototype,"maxlength",void 0),Ae([fi({converter:hi})],Wf.prototype,"minlength",void 0),Ae([fi],Wf.prototype,"pattern",void 0),Ae([fi({converter:hi})],Wf.prototype,"size",void 0),Ae([fi({mode:"boolean"})],Wf.prototype,"spellcheck",void 0),Ae([Qe],Wf.prototype,"defaultSlottedNodes",void 0);class Kf{}function jf(t,e,i){return t.nodeType!==Node.TEXT_NODE||"string"==typeof t.nodeValue&&!!t.nodeValue.trim().length}Su(Kf,gu),Su(Wf,mu,Kf);const Yf=(t,e)=>au`
    :host([appearance='filled']) .root {
      background: ${Wa};
      border-color: transparent;
    }

    :host([appearance='filled']:hover:not(.disabled)) .root {
      background: ${Ka};
      border-color: transparent;
    }

    :host([appearance='filled']:focus-within:not(.disabled)) .root {
      border-color: transparent;
      box-shadow: none;
    }
    ${au`
  :host([appearance='filled']:not(.disabled):active)::after,
  :host([appearance='filled']:not(.disabled):focus-within:not(:active))::after {
    content: '';
    position: absolute;
    bottom: 0;
    border-bottom: calc(${uo} * 1px) solid ${wa};
    border-bottom-left-radius: calc(${so} * 1px);
    border-bottom-right-radius: calc(${so} * 1px);
    z-index: 2;
    transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
  }

  :host([appearance='filled']:not(.disabled):active)::after {
    left: 50%;
    width: 40%;
    transform: translateX(-50%);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host([appearance='filled']:not(.disabled):focus-within:not(:active))::after {
    left: 0;
    width: 100%;
  }
`}
  `.withBehaviors(sd(au`
        :host([appearance='filled']) .root {
          background: ${cd.Field};
          border-color: ${cd.FieldText};
        }
        :host([appearance='filled']:hover:not([disabled])) .root,
        :host([appearance='filled']:focus-within:not([disabled])) .root {
          background: ${cd.Field};
          border-color: ${cd.FieldText};
        }
        :host([appearance='filled']:active:not([disabled])) .root {
          background: ${cd.Field};
          border-color: ${cd.FieldText};
        }
        :host([appearance='filled']:not([disabled]):active)::after,
        :host([appearance='filled']:not([disabled]):focus-within:not(:active))::after {
          border-bottom-color: ${cd.Highlight};
        }
        :host([appearance='filled'][disabled]) .root {
          border-color: ${cd.GrayText};
          background: ${cd.Field};
        }
      `));class qf extends Wf{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}dh([fi],qf.prototype,"appearance",void 0);const Xf=qf.compose({baseName:"text-field",baseClass:Wf,template:(t,e)=>Qc`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${nu({property:"defaultSlottedNodes",filter:jf})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${yu(0,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${pu("control")}
            />
            ${vu(0,e)}
        </div>
    </template>
`,styles:(t,e)=>au`
    ${su("inline-block")} :host {
      font-family: ${ho};
      outline: none;
      user-select: none;
      position: relative;
    }

    .root {
      box-sizing: border-box;
      position: relative;
      display: flex;
      flex-direction: row;
      color: ${Sr};
      background: ${qa};
      border-radius: calc(${so} * 1px);
      border: calc(${co} * 1px) solid ${sr};
      height: calc(${fh} * 1px);
    }

    .control {
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      width: 100%;
      margin-top: auto;
      margin-bottom: auto;
      border: none;
      padding: 0 calc(${ro} * 2px + 1px);
      color: ${Sr};
      font-family: inherit;
      font-size: ${po};
      line-height: ${fo};
    }

    .control:hover,
    .control:${nh},
    .control:disabled,
    .control:active {
      outline: none;
    }

    .label {
      display: block;
      color: ${Sr};
      cursor: pointer;
      font-size: ${po};
      line-height: ${fo};
      margin-bottom: 4px;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
      fill: currentcolor;
    }

    ::slotted(svg) {
      ${""} width: 16px;
      height: 16px;
    }

    .start {
      margin-inline-start: 11px;
    }

    .end {
      margin-inline-end: 11px;
    }

    :host(:hover:not(.disabled)) .root {
      background: ${Xa};
      border-color: ${lr};
    }

    :host(:focus-within:not(.disabled)) .root {
      border-color: ${vr};
      box-shadow: 0 0 0 1px ${vr} inset;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Df};
    }

    :host(.disabled) {
      opacity: ${io};
    }
  `.withBehaviors(xh("filled",Yf()),sd(au`
        .root {
          forced-color-adjust: none;
          background: ${cd.Field};
          border-color: ${cd.FieldText};
        }
        :host(:hover:not(.disabled)) .root {
          background: ${cd.Field};
          border-color: ${cd.Highlight};
        }
        .start,
        .end {
          fill: ${cd.ButtonText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .root {
          border-color: ${cd.GrayText};
          background: ${cd.Field};
        }
        :host(:focus-within:enabled) .root {
          border-color: ${cd.Highlight};
          box-shadow: 0 0 0 1px ${cd.Highlight} inset;
        }
        .control {
          color: ${cd.ButtonText};
        }
        ::placeholder,
        ::-webkit-input-placeholder {
          color: ${cd.FieldText};
        }
        :host(.disabled) ::placeholder,
        :host(.disabled) ::-webkit-input-placeholder,
        :host([disabled]) .label {
          color: ${cd.GrayText};
        }
      `)),shadowOptions:{delegatesFocus:!0}});class Zf extends Ec{}class Jf extends(Hu(Zf)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Qf extends Jf{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{if(t.key===Ou)this.checked=!this.checked},this.clickHandler=t=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}Ae([fi({attribute:"readonly",mode:"boolean"})],Qf.prototype,"readOnly",void 0),Ae([Qe],Qf.prototype,"defaultSlottedNodes",void 0),Ae([Qe],Qf.prototype,"indeterminate",void 0);const tg=Qf.compose({baseName:"checkbox",template:(t,e)=>Qc`
    <template
        role="checkbox"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,e)=>t.keypressHandler(e.event)}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        class="${t=>t.readOnly?"readonly":""} ${t=>t.checked?"checked":""} ${t=>t.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${nu("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(t,e)=>au`
    ${su("inline-flex")} :host {
      align-items: center;
      outline: none;
      margin: calc(${ro} * 1px) 0;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${fh} / 2 + ${ro}) * 1px);
      height: calc((${fh} / 2 + ${ro}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${so} * 1px);
      border: calc(${co} * 1px) solid ${pr};
      background: ${qa};
      outline: none;
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      font-family: ${ho};
      color: ${Sr};
      ${""} padding-inline-start: calc(${ro} * 2px + 2px);
      margin-inline-end: calc(${ro} * 2px + 2px);
      cursor: pointer;
      font-size: ${po};
      line-height: ${fo};
    }

    .checked-indicator {
      width: 100%;
      height: 100%;
      display: block;
      fill: ${Sr};
      opacity: 0;
      pointer-events: none;
    }

    .indeterminate-indicator {
      border-radius: calc((${so} / 2) * 1px);
      background: ${Sr};
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      height: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }

    :host(:enabled) .control:hover {
      background: ${Xa};
      border-color: ${fr};
    }

    :host(:enabled) .control:active {
      background: ${Za};
      border-color: ${gr};
    }

    :host(:${nh}) .control {
      box-shadow: 0 0 0 2px ${Ta}, 0 0 0 4px ${vr};
      border-color: ${vr};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Df};
    }

    :host(.checked:not(.indeterminate)) .checked-indicator,
    :host(.indeterminate) .indeterminate-indicator {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${io};
    }
  `.withBehaviors(sd(au`
        .control {
          forced-color-adjust: none;
          border-color: ${cd.FieldText};
          background: ${cd.Field};
        }
        :host(:enabled) .control:hover,
        .control:active {
          border-color: ${cd.Highlight};
          background: ${cd.Field};
        }
        .checked-indicator {
          fill: ${cd.FieldText};
        }
        .indeterminate-indicator {
          background: ${cd.FieldText};
        }
        :host(:${nh}) .control {
          border-color: ${cd.Highlight};
          box-shadow: 0 0 0 2px ${cd.Field}, 0 0 0 4px ${cd.FieldText};
        }
        :host(.checked:${nh}:enabled) .control {
          box-shadow: 0 0 0 2px ${cd.Field}, 0 0 0 4px ${cd.FieldText};
        }
        :host(.checked) .control {
          background: ${cd.Highlight};
          border-color: ${cd.Highlight};
        }
        :host(.checked) .control:hover,
        .control:active {
          background: ${cd.HighlightText};
        }
        :host(.checked) .checked-indicator {
          fill: ${cd.HighlightText};
        }
        :host(.checked) .control:hover .checked-indicator {
          fill: ${cd.Highlight};
        }
        :host(.checked) .indeterminate-indicator {
          background: ${cd.HighlightText};
        }
        :host(.checked) .control:hover .indeterminate-indicator {
          background: ${cd.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          forced-color-adjust: none;
          border-color: ${cd.GrayText};
          background: ${cd.Field};
        }
        :host(.disabled) .indeterminate-indicator,
        :host(.checked.disabled) .control:hover .indeterminate-indicator {
          forced-color-adjust: none;
          background: ${cd.GrayText};
        }
        :host(.disabled) .checked-indicator,
        :host(.checked.disabled) .control:hover .checked-indicator {
          forced-color-adjust: none;
          fill: ${cd.GrayText};
        }
      `)),checkedIndicator:'\n    <svg\n        aria-hidden="true"\n        part="checked-indicator"\n        class="checked-indicator"\n        viewBox="0 0 20 20"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <path\n            fill-rule="evenodd"\n            clip-rule="evenodd"\n            d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"\n        />\n    </svg>\n  ',indeterminateIndicator:'\n    <div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n  '});let eg=0;function ig(t){return!t||!t.trim()}function ng(t){return Gu(t)&&("option"===t.getAttribute("role")||t instanceof HTMLOptionElement)}class og extends Ec{constructor(t,e,i,n){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),e&&(this.initialValue=e),i&&(this.defaultSelected=i),n&&(this.selected=n),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,e){this.ariaChecked="boolean"!=typeof e?void 0:e?"true":"false"}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,e){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var t,e;return null!==(e=null!==(t=this.value)&&void 0!==t?t:this.textContent)&&void 0!==e?e:""}get text(){return this.textContent}set value(t){this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=t),Xe.notify(this,"value")}get value(){var t,e;return Xe.track(this,"value"),null!==(e=null!==(t=this._value)&&void 0!==t?t:this.textContent)&&void 0!==e?e:""}get form(){return this.proxy?this.proxy.form:null}}Ae([Qe],og.prototype,"checked",void 0),Ae([Qe],og.prototype,"defaultSelected",void 0),Ae([fi({mode:"boolean"})],og.prototype,"disabled",void 0),Ae([fi({attribute:"selected",mode:"boolean"})],og.prototype,"selectedAttribute",void 0),Ae([Qe],og.prototype,"selected",void 0),Ae([fi({attribute:"value",mode:"fromView"})],og.prototype,"initialValue",void 0);class ag{}Ae([Qe],ag.prototype,"ariaChecked",void 0),Ae([Qe],ag.prototype,"ariaPosInSet",void 0),Ae([Qe],ag.prototype,"ariaSelected",void 0),Ae([Qe],ag.prototype,"ariaSetSize",void 0),Su(ag,gu),Su(og,mu,ag);class rg extends Ec{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return null!==(t=this.selectedOptions[0])&&void 0!==t?t:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((t=>t.disabled))}get length(){var t,e;return null!==(e=null===(t=this.options)||void 0===t?void 0:t.length)&&void 0!==e?e:0}get options(){return Xe.track(this,"options"),this._options}set options(t){this._options=t,Xe.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const e=t.target.closest("option,[role=option]");if(e&&!e.disabled)return this.selectedIndex=this.options.indexOf(e),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&null!==t&&(t.focus(),requestAnimationFrame((()=>{t.scrollIntoView({block:"nearest"})})))}focusinHandler(t){this.shouldSkipFocus||t.target!==t.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),e=new RegExp(`^${t}`,"gi");return this.options.filter((t=>t.text.trim().match(e)))}getSelectableIndex(t=this.selectedIndex,e){const i=t>e?-1:t<e?1:0,n=t+i;let o=null;switch(i){case-1:o=this.options.reduceRight(((t,e,i)=>!t&&!e.disabled&&i<n?e:t),o);break;case 1:o=this.options.reduce(((t,e,i)=>!t&&!e.disabled&&i>n?e:t),o)}return this.options.indexOf(o)}handleChange(t,e){if("selected"===e)rg.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions()}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),rg.TYPE_AHEAD_TIMEOUT_MS),t.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const e=t.key;switch(e){case ku:t.shiftKey||(t.preventDefault(),this.selectFirstOption());break;case Eu:t.shiftKey||(t.preventDefault(),this.selectNextOption());break;case Iu:t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break;case Ru:t.preventDefault(),this.selectLastOption();break;case"Tab":return this.focusAndScrollOptionIntoView(),!0;case Du:case wu:return!0;case Ou:if(this.typeaheadExpired)return!0;default:return 1===e.length&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,e){this.ariaMultiSelectable=e?"true":void 0}selectedIndexChanged(t,e){var i;if(this.hasSelectableOptions){if((null===(i=this.options[this.selectedIndex])||void 0===i?void 0:i.disabled)&&"number"==typeof t){const i=this.getSelectableIndex(t,e),n=i>-1?i:t;return this.selectedIndex=n,void(e===n&&this.selectedIndexChanged(e,n))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(t,e){var i;const n=e.filter(rg.slottedOptionFilter);null===(i=this.options)||void 0===i||i.forEach((t=>{const e=Xe.getNotifier(t);e.unsubscribe(this,"selected"),t.selected=n.includes(t),e.subscribe(this,"selected")}))}selectFirstOption(){var t,e;this.disabled||(this.selectedIndex=null!==(e=null===(t=this.options)||void 0===t?void 0:t.findIndex((t=>!t.disabled)))&&void 0!==e?e:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(t,e){let i=t.length;for(;i--;)if(e(t[i],i,t))return i;return-1}(this.options,(t=>!t.disabled)))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var t;if(this.$fastController.isConnected){const e=null===(t=this.options)||void 0===t?void 0:t.findIndex((t=>null!==t.getAttribute("selected")));if(-1!==e)return void(this.selectedIndex=e);this.selectedIndex=0}}setSelectedOptions(){var t,e,i;(null===(t=this.options)||void 0===t?void 0:t.length)&&!this.disabled&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(i=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,e){this.options=e.reduce(((t,e)=>(ng(e)&&t.push(e),t)),[]);const i=`${this.options.length}`;this.options.forEach(((t,e)=>{t.id||(t.id=function(t=""){return`${t}${eg++}`}("option-")),t.ariaPosInSet=`${e+1}`,t.ariaSetSize=i})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,e){if(this.$fastController.isConnected){const t=this.getTypeaheadMatches();if(t.length){const e=this.options.indexOf(t[0]);e>-1&&(this.selectedIndex=e)}this.typeaheadExpired=!1}}}rg.slottedOptionFilter=t=>ng(t)&&!t.disabled&&!t.hidden,rg.TYPE_AHEAD_TIMEOUT_MS=1e3,Ae([fi({mode:"boolean"})],rg.prototype,"disabled",void 0),Ae([fi({mode:"boolean"})],rg.prototype,"multiple",void 0),Ae([Qe],rg.prototype,"selectedIndex",void 0),Ae([Qe],rg.prototype,"selectedOptions",void 0),Ae([Qe],rg.prototype,"slottedOptions",void 0),Ae([Qe],rg.prototype,"typeaheadBuffer",void 0);class sg{}Ae([Qe],sg.prototype,"ariaActiveDescendant",void 0),Ae([Qe],sg.prototype,"ariaDisabled",void 0),Ae([Qe],sg.prototype,"ariaExpanded",void 0),Ae([Qe],sg.prototype,"ariaMultiSelectable",void 0),Su(sg,gu),Su(rg,sg);class lg extends rg{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var t;return null===(t=this.options)||void 0===t?void 0:t.filter((t=>t.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,e){var i,n;this.ariaActiveDescendant=null!==(n=null===(i=this.options[e])||void 0===i?void 0:i.id)&&void 0!==n?n:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((t,e)=>{t.checked=Sf(e,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((t,e)=>{t.checked=Sf(e,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((t,e)=>{t.checked=Sf(e,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((t,e)=>{t.checked=Sf(e,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){var e;if(!this.multiple)return super.clickHandler(t);const i=null===(e=t.target)||void 0===e?void 0:e.closest("[role=option]");return i&&!i.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);this.shouldSkipFocus||t.target!==t.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;const{key:e,shiftKey:i}=t;switch(this.shouldSkipFocus=!1,e){case ku:return void this.checkFirstOption(i);case Eu:return void this.checkNextOption(i);case Iu:return void this.checkPreviousOption(i);case Ru:return void this.checkLastOption(i);case"Tab":return this.focusAndScrollOptionIntoView(),!0;case wu:return this.multiple&&(this.uncheckAllOptions(),this.checkActiveIndex()),!0;case Ou:return t.preventDefault(),void(this.typeAheadExpired&&this.toggleSelectedForAllCheckedOptions());default:return 1===e.length&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,e){var i;super.multipleChanged(t,e),null===(i=this.options)||void 0===i||i.forEach((t=>{t.checked=!e&&void 0})),this.setSelectedOptions(),e&&!this.size&&(this.size=0)}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((t=>t.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(t,e){const i=Math.max(0,parseInt(e.toFixed(),10));i!==e&&Fe.queueUpdate((()=>{this.size=i}))}toggleSelectedForAllCheckedOptions(){const t=this.checkedOptions.filter((t=>!t.disabled)),e=!t.every((t=>t.selected));t.forEach((t=>t.selected=e)),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,e){if(this.multiple){if(this.$fastController.isConnected){if(this.getTypeaheadMatches()){const t=this.options.indexOf(this.getTypeaheadMatches[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex())}this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(t,e)}uncheckAllOptions(t=!1){this.options.forEach((t=>t.checked=!this.multiple&&void 0)),t||(this.rangeStartIndex=-1)}}Ae([Qe],lg.prototype,"activeIndex",void 0),Ae([fi({converter:hi})],lg.prototype,"size",void 0);const cg=rg.compose({baseName:"listbox",template:(t,e)=>Qc`
    <template
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        class="listbox"
        role="listbox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        @focusin="${(t,e)=>t.focusinHandler(e.event)}"
        @keydown="${(t,e)=>t.keydownHandler(e.event)}"
        @mousedown="${(t,e)=>t.mousedownHandler(e.event)}"
    >
        <slot
            ${nu({filter:lg.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,styles:(t,e)=>au`
    ${su("inline-flex")} :host {
      background: ${Ca};
      border: calc(${co} * 1px) solid ${sr};
      border-radius: calc(${so} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${ro} * 1px) 0;
    }

    :host(:focus-within:not([disabled])) {
      border-color: ${vr};
      box-shadow: 0 0 0 1px ${vr} inset;
    }
  `.withBehaviors(sd(au`
        :host(:${nh}) ::slotted([aria-selected="true"][role="option"]) {
          background: ${cd.Highlight};
          border-color: ${cd.ButtonText};
          box-shadow: 0 0 0 calc(${uo} * 1px) inset ${cd.HighlightText};
          color: ${cd.HighlightText};
          fill: currentcolor;
        }

        :host(:${nh}) ::slotted([aria-selected="true"][role="option"]) {
          background: ${cd.Highlight};
          border-color: ${cd.ButtonText};
          box-shadow: 0 0 0 calc(${uo} * 1px) inset ${cd.HighlightText};
          color: ${cd.HighlightText};
          fill: currentcolor;
        }

        ::slotted([role='option']:not([aria-selected='true']):not([disabled]):hover) {
          forced-color-adjust: none;
          color: ${cd.ButtonText};
          background: ${cd.ButtonFace};
          border-color: ${cd.Highlight};
          box-shadow: none;
        }
      `))}),ug=og.compose({baseName:"option",template:(t,e)=>Qc`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${yu(0,e)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${vu(0,e)}
    </template>
`,styles:(t,e)=>au`
    ${su("inline-flex")} :host {
      font-family: ${ho};
      border-radius: calc(${so} * 1px);
      border: calc(${uo} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${Sr};
      cursor: pointer;
      fill: currentcolor;
      font-size: ${po};
      height: calc(${fh} * 1px);
      line-height: ${fo};
      margin: 0 calc(${ro} * 1px);
      outline: none;
      overflow: hidden;
      align-items: center;
      padding: 0 calc(${ro} * 2.25px);
      user-select: none;
      white-space: nowrap;
    }

    :host(:${nh}) {
      box-shadow: 0 0 0 calc(${uo} * 1px) inset ${Cr};
      border-color: ${vr};
      background: ${Oa};
      color: ${Fa};
    }

    :host([aria-selected='true']) {
      background: ${wa};
      color: ${Na};
    }

    :host(:hover) {
      background: ${ka};
      color: ${La};
    }

    :host(:active) {
      background: ${Ra};
      color: ${_a};
    }

    :host(:not([aria-selected='true']):hover) {
      background: ${Ka};
      color: ${Sr};
    }

    :host(:not([aria-selected='true']):active) {
      background: ${ja};
      color: ${Sr};
    }

    :host([disabled]) {
      cursor: ${Df};
      opacity: ${io};
    }

    :host([disabled]:hover) {
      background-color: inherit;
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted(svg) {
      ${""}
      height: calc(${ro} * 4px);
      width: calc(${ro} * 4px);
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(sd(au`
        :host {
          border-color: transparent;
          color: ${cd.ButtonText};
          forced-color-adjust: none;
        }

        :host(:not([aria-selected='true']):hover),
        :host([aria-selected='true']) {
          background: ${cd.Highlight};
          color: ${cd.HighlightText};
        }

        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${cd.Canvas};
          color: ${cd.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
      `))});class dg extends Ec{}class hg extends(Hu(dg)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class pg extends hg{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(t.key!==Ou)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}connectedCallback(){var t,e;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(t=this.parentElement)||void 0===t?void 0:t.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(t){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}Ae([fi({attribute:"readonly",mode:"boolean"})],pg.prototype,"readOnly",void 0),Ae([Qe],pg.prototype,"name",void 0),Ae([Qe],pg.prototype,"defaultSlottedNodes",void 0);const fg=pg.compose({baseName:"radio",template:(t,e)=>Qc`
    <template
        role="radio"
        class="${t=>t.checked?"checked":""} ${t=>t.readOnly?"readonly":""}"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @keypress="${(t,e)=>t.keypressHandler(e.event)}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${nu("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(t,e)=>au`
    ${su("inline-flex")} :host {
      --input-size: calc((${fh} / 2) + ${ro});
      align-items: center;
      outline: none;
      margin: calc(${ro} * 1px) 0;
      ${""} user-select: none;
      position: relative;
      flex-direction: row;
      transition: all 0.2s ease-in-out;
    }

    .control {
      position: relative;
      width: calc(var(--input-size) * 1px);
      height: calc(var(--input-size) * 1px);
      box-sizing: border-box;
      border-radius: 50%;
      border: calc(${co} * 1px) solid ${pr};
      background: ${qa};
      outline: none;
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      font-family: ${ho};
      color: ${Sr};
      ${""} padding-inline-start: calc(${ro} * 2px + 2px);
      margin-inline-end: calc(${ro} * 2px + 2px);
      cursor: pointer;
      font-size: ${po};
      line-height: ${fo};
    }

    .control,
    .checked-indicator {
      flex-shrink: 0;
    }

    .checked-indicator {
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-radius: 50%;
      display: inline-block;
      background: ${Sr};
      fill: ${Sr};
      opacity: 0;
      pointer-events: none;
    }

    :host(:enabled) .control:hover {
      background: ${Xa};
      border-color: ${fr};
    }

    :host(:enabled) .control:active {
      background: ${Za};
      border-color: ${gr};
    }

    :host(:${nh}) .control {
      box-shadow: 0 0 0 2px ${Ta}, 0 0 0 4px ${vr};
      border-color: ${vr};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Df};
    }

    :host(.checked) .checked-indicator {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${io};
    }
  `.withBehaviors(sd(au`
        .control {
          forced-color-adjust: none;
          border-color: ${cd.FieldText};
          background: ${cd.Field};
        }
        :host(:enabled) .control:hover,
        .control:active {
          border-color: ${cd.Highlight};
          background: ${cd.Field};
        }
        :host(:${nh}) .control {
          border-color: ${cd.Highlight};
          box-shadow: 0 0 0 2px ${cd.Field}, 0 0 0 4px ${cd.FieldText};
        }
        :host(.checked:${nh}:enabled) .control {
          border-color: ${cd.Highlight};
          box-shadow: 0 0 0 2px ${cd.Field}, 0 0 0 4px ${cd.FieldText};
        }
        :host(.checked:enabled) .control:hover,
        .control:active {
          border-color: ${cd.Highlight};
          background: ${cd.Highlight};
        }
        :host(.checked) .checked-indicator {
          background: ${cd.Highlight};
          fill: ${cd.Highlight};
        }
        :host(.checked) .control:hover .checked-indicator {
          background: ${cd.HighlightText};
          fill: ${cd.HighlightText};
        }
        :host(.disabled) {
          forced-color-adjust: none;
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${cd.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control:hover,
        .control:active {
          background: ${cd.Field};
          border-color: ${cd.GrayText};
        }
        :host(.disabled) .checked-indicator,
        :host(.checked.disabled) .control:hover .checked-indicator {
          fill: ${cd.GrayText};
          background: ${cd.GrayText};
        }
      `)),checkedIndicator:'\n    <div part="checked-indicator" class="checked-indicator"></div>\n  '});class gg extends Ec{constructor(){super(...arguments),this.orientation=Yp.horizontal,this.radioChangeHandler=t=>{const e=t.target;e.checked&&(this.slottedRadioButtons.forEach((t=>{t!==e&&(t.checked=!1,this.isInsideFoundationToolbar||t.setAttribute("tabindex","-1"))})),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{const i=t[e];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach((t=>{t!==i&&t.setAttribute("tabindex","-1")})):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var t;null===(t=this.nextElementSibling)||void 0===t||t.focus()},this.moveLeftOffGroup=()=>{var t;null===(t=this.previousElementSibling)||void 0===t||t.focus()},this.focusOutHandler=t=>{const e=this.slottedRadioButtons,i=t.target,n=null!==i?e.indexOf(i):0,o=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(0===o&&n===o||o===e.length-1&&o===n)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),e.forEach((t=>{t!==this.selectedRadio&&t.setAttribute("tabindex","-1")})))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach((t=>{t!==this.focusedRadio&&t.setAttribute("tabindex","-1")})))),!0},this.clickHandler=t=>{const e=t.target;if(e){const t=this.slottedRadioButtons;e.checked||0===t.indexOf(e)?(e.setAttribute("tabindex","0"),this.selectedRadio=e):(e.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=e}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,e,i)=>t===e.length&&this.isInsideToolbar&&i===Tu,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&e===Au,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const e=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,e,t.key))this.moveRightOffGroup();else for(i===e.length&&(i=0);i<e.length&&e.length>1;){if(!e[i].disabled){this.moveToRadioByIndex(e,i);break}if(this.focusedRadio&&i===e.indexOf(this.focusedRadio))break;if(i+1>=e.length){if(this.isInsideToolbar)break;i=0}else i+=1}},this.moveLeft=t=>{const e=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,i=i<0?e.length-1:i,this.shouldMoveOffGroupToTheLeft(e,t.key))this.moveLeftOffGroup();else for(;i>=0&&e.length>1;){if(!e[i].disabled){this.moveToRadioByIndex(e,i);break}if(this.focusedRadio&&i===e.indexOf(this.focusedRadio))break;i-1<0?i=e.length-1:i-=1}},this.keydownHandler=t=>{const e=t.key;if(e in Pu&&this.isInsideFoundationToolbar)return!0;switch(e){case Du:this.checkFocusedRadio();break;case Tu:case Eu:this.direction===Gi.ltr?this.moveRight(t):this.moveLeft(t);break;case Au:case Iu:this.direction===Gi.ltr?this.moveLeft(t):this.moveRight(t);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{this.disabled?t.disabled=!0:t.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{t.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{t.getAttribute("value")===this.value&&(t.checked=!0,this.selectedRadio=t)})),this.$emit("change")}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return null!==(t=this.parentToolbar)&&void 0!==t&&t}get isInsideFoundationToolbar(){var t;return!!(null===(t=this.parentToolbar)||void 0===t?void 0:t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=uu(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((t=>{t.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const t=this.slottedRadioButtons.filter((t=>t.hasAttribute("checked"))),e=t?t.length:0;if(e>1){t[e-1].checked=!0}let i=!1;if(this.slottedRadioButtons.forEach((t=>{void 0!==this.name&&t.setAttribute("name",this.name),this.disabled&&(t.disabled=!0),this.readOnly&&(t.readOnly=!0),this.value&&this.value===t.value?(this.selectedRadio=t,this.focusedRadio=t,t.checked=!0,t.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||t.setAttribute("tabindex","-1"),t.checked=!1),t.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const t=this.slottedRadioButtons.filter((t=>t.hasAttribute("checked"))),e=null!==t?t.length:0;if(e>0&&!i){const i=t[e-1];i.checked=!0,this.focusedRadio=i,i.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}Ae([fi({attribute:"readonly",mode:"boolean"})],gg.prototype,"readOnly",void 0),Ae([fi({attribute:"disabled",mode:"boolean"})],gg.prototype,"disabled",void 0),Ae([fi],gg.prototype,"name",void 0),Ae([fi],gg.prototype,"value",void 0),Ae([fi],gg.prototype,"orientation",void 0),Ae([Qe],gg.prototype,"childItems",void 0),Ae([Qe],gg.prototype,"slottedRadioButtons",void 0);const mg=gg.compose({baseName:"radio-group",template:(t,e)=>Qc`
    <template
        role="radiogroup"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        @keydown="${(t,e)=>t.keydownHandler(e.event)}"
        @focusout="${(t,e)=>t.focusOutHandler(e.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${t=>t.orientation===Yp.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${nu({property:"slottedRadioButtons",filter:tu("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(t,e)=>au`
  ${su("flex")} :host {
    align-items: flex-start;
    margin: calc(${ro} * 1px) 0;
    flex-direction: column;
  }

  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }

  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }

  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
`});const vg=class extends Wp{}.compose({baseName:"progress-ring",template:(t,e)=>Qc`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${fu((t=>"number"==typeof t.value),Qc`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${t=>44*t.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${fu((t=>"number"!=typeof t.value),Qc`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(t,e)=>au`
      ${su("flex")} :host {
        align-items: center;
        outline: none;
        height: calc(${fh} * 1px);
        width: calc(${fh} * 1px);
        margin: calc(${fh} * 1px) 0;
      }

      .progress {
        height: 100%;
        width: 100%;
      }

      .background {
        stroke: ${Wa};
        fill: none;
        stroke-width: 2px;
      }

      .determinate {
        stroke: ${wa};
        fill: none;
        stroke-width: 2px;
        stroke-linecap: round;
        transform-origin: 50% 50%;
        transform: rotate(-90deg);
        transition: all 0.2s ease-in-out;
      }

      .indeterminate-indicator-1 {
        stroke: ${wa};
        fill: none;
        stroke-width: 2px;
        stroke-linecap: round;
        transform-origin: 50% 50%;
        transform: rotate(-90deg);
        transition: all 0.2s ease-in-out;
        animation: spin-infinite 2s linear infinite;
      }

      :host(.paused) .indeterminate-indicator-1 {
        animation-play-state: paused;
        stroke: ${Wa};
      }

      :host(.paused) .determinate {
        stroke: ${Er};
      }

      @keyframes spin-infinite {
        0% {
          stroke-dasharray: 0.01px 43.97px;
          transform: rotate(0deg);
        }
        50% {
          stroke-dasharray: 21.99px 21.99px;
          transform: rotate(450deg);
        }
        100% {
          stroke-dasharray: 0.01px 43.97px;
          transform: rotate(1080deg);
        }
      }
    `.withBehaviors(sd(au`
          .indeterminate-indicator-1,
          .determinate {
            stroke: ${cd.FieldText};
          }
          .background {
            stroke: ${cd.Field};
          }
          :host(.paused) .indeterminate-indicator-1 {
            stroke: ${cd.Field};
          }
          :host(.paused) .determinate {
            stroke: ${cd.GrayText};
          }
        `)),indeterminateIndicator:'\n    <svg class="progress" part="progress" viewBox="0 0 16 16">\n        <circle\n            class="background"\n            part="background"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n        <circle\n            class="indeterminate-indicator-1"\n            part="indeterminate-indicator-1"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n    </svg>\n  '}),yg=Xp.compose({baseName:"divider",template:(t,e)=>Qc`
    <template role="${t=>t.role}" aria-orientation="${t=>t.orientation}"></template>
`,styles:(t,e)=>au`
    ${su("block")} :host {
      box-sizing: content-box;
      height: 0;
      margin: calc(${ro} * 1px) 0;
      border: none;
      border-top: calc(${co} * 1px) solid ${dr};
    }
  `}),Cg=du.compose({baseName:"anchored-region",template:(t,e)=>Qc`
    <template class="${t=>t.initialLayoutComplete?"loaded":""}">
        ${fu((t=>t.initialLayoutComplete),Qc`
                <slot></slot>
            `)}
    </template>
`,styles:(t,e)=>au`
  :host {
    contain: layout;
    display: block;
  }
`});var bg;!function(t){t.top="top",t.right="right",t.bottom="bottom",t.left="left",t.start="start",t.end="end"}(bg||(bg={}));class Sg extends Ec{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=Gi.ltr,this.delayTimer=null,this.isAnchorHoveredFocused=!1,this.handlePositionChange=t=>{this.classList.toggle("top","start"===this.region.verticalPosition),this.classList.toggle("bottom","end"===this.region.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.region.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.region.verticalPosition),this.classList.toggle("center-vertical","center"===this.region.verticalPosition),this.classList.toggle("left","start"===this.region.horizontalPosition),this.classList.toggle("right","end"===this.region.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.region.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.region.horizontalPosition),this.classList.toggle("center-horizontal","center"===this.region.horizontalPosition)},this.handleAnchorMouseOver=t=>{this.startHoverTimer()},this.handleAnchorMouseOut=t=>{this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.clearDelayTimer()},this.handleAnchorFocusIn=t=>{this.startHoverTimer()},this.handleAnchorFocusOut=t=>{this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.clearDelayTimer()},this.startHoverTimer=()=>{this.isAnchorHoveredFocused||(this.delay>1?null===this.delayTimer&&(this.delayTimer=window.setTimeout((()=>{this.startHover()}),this.delay)):this.startHover())},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearDelayTimer=()=>{null!==this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)},this.getAnchor=()=>{const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&this.tooltipVisible&&t.key===wu)this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss")},this.updateTooltipVisibility=()=>{if(!1===this.visible)this.hideTooltip();else{if(!0===this.visible)return void this.showTooltip();if(this.isAnchorHoveredFocused)return void this.showTooltip();this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=uu(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),Fe.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(null!==this.region&&void 0!==this.region&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(t){if(this.$fastController.isConnected){if(null!=t&&(t.removeEventListener("mouseover",this.handleAnchorMouseOver),t.removeEventListener("mouseout",this.handleAnchorMouseOut),t.removeEventListener("focusin",this.handleAnchorFocusIn),t.removeEventListener("focusout",this.handleAnchorFocusOut)),null!==this.anchorElement&&void 0!==this.anchorElement){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const t=this.anchorElement.id;null!==this.anchorElement.parentElement&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach((e=>{e.id===t&&this.startHoverTimer()}))}null!==this.region&&void 0!==this.region&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){null!==this.region&&void 0!==this.region&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.position){case bg.top:case bg.bottom:this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case bg.right:case bg.left:case bg.start:case bg.end:this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center"}}}Ae([fi({mode:"boolean"})],Sg.prototype,"visible",void 0),Ae([fi],Sg.prototype,"anchor",void 0),Ae([fi],Sg.prototype,"delay",void 0),Ae([fi],Sg.prototype,"position",void 0),Ae([fi({attribute:"auto-update-mode"})],Sg.prototype,"autoUpdateMode",void 0),Ae([fi({attribute:"horizontal-viewport-lock"})],Sg.prototype,"horizontalViewportLock",void 0),Ae([fi({attribute:"vertical-viewport-lock"})],Sg.prototype,"verticalViewportLock",void 0),Ae([Qe],Sg.prototype,"anchorElement",void 0),Ae([Qe],Sg.prototype,"viewportElement",void 0),Ae([Qe],Sg.prototype,"verticalPositioningMode",void 0),Ae([Qe],Sg.prototype,"horizontalPositioningMode",void 0),Ae([Qe],Sg.prototype,"horizontalInset",void 0),Ae([Qe],Sg.prototype,"verticalInset",void 0),Ae([Qe],Sg.prototype,"horizontalScaling",void 0),Ae([Qe],Sg.prototype,"verticalScaling",void 0),Ae([Qe],Sg.prototype,"verticalDefaultPosition",void 0),Ae([Qe],Sg.prototype,"horizontalDefaultPosition",void 0),Ae([Qe],Sg.prototype,"tooltipVisible",void 0),Ae([Qe],Sg.prototype,"currentDirection",void 0);const xg=class extends Sg{connectedCallback(){super.connectedCallback();const t=Ja.getValueFor(this),e=Ta.getValueFor(this.parentElement);Ta.setValueFor(this,(i=>t.evaluate(i,e).rest))}}.compose({baseName:"tooltip",baseClass:Sg,template:(t,e)=>Qc`
        ${fu((t=>t.tooltipVisible),Qc`
            <${t.tagFor(du)}
                fixed-placement="true"
                auto-update-mode="${t=>t.autoUpdateMode}"
                vertical-positioning-mode="${t=>t.verticalPositioningMode}"
                vertical-default-position="${t=>t.verticalDefaultPosition}"
                vertical-inset="${t=>t.verticalInset}"
                vertical-scaling="${t=>t.verticalScaling}"
                horizontal-positioning-mode="${t=>t.horizontalPositioningMode}"
                horizontal-default-position="${t=>t.horizontalDefaultPosition}"
                horizontal-scaling="${t=>t.horizontalScaling}"
                horizontal-inset="${t=>t.horizontalInset}"
                vertical-viewport-lock="${t=>t.horizontalViewportLock}"
                horizontal-viewport-lock="${t=>t.verticalViewportLock}"
                dir="${t=>t.currentDirection}"
                ${pu("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${t.tagFor(du)}>
        `)}
    `,styles:(t,e)=>au`
    :host {
      --elevation: 11;
      position: relative;
      contain: layout;
      overflow: visible;
      height: 0;
      width: 0;
      z-index: 10000;
    }

    .tooltip {
      box-sizing: border-box;
      border-radius: calc(${so} * 1px);
      border: calc(${co} * 1px) solid transparent;
      background: ${Ta};
      color: ${Sr};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      font-family: ${ho};
      font-size: ${po};
      line-height: ${fo};
      white-space: nowrap;
      ${oh}
    }

    fluent-anchored-region {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    fluent-anchored-region.right,
    fluent-anchored-region.left {
      flex-direction: column;
    }

    fluent-anchored-region.top .tooltip::after,
    fluent-anchored-region.bottom .tooltip::after,
    fluent-anchored-region.left .tooltip::after,
    fluent-anchored-region.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${Ta};
      border-radius: calc(${so} * 1px);
      position: absolute;
    }

    fluent-anchored-region.top .tooltip::after {
      transform: rotate(45deg) translateX(-50%);
      bottom: 4px;
      left: 50%;
    }

    fluent-anchored-region.top .tooltip {
      margin-bottom: 12px;
    }

    fluent-anchored-region.bottom .tooltip::after {
      transform: rotate(45deg) translateX(-50%);
      top: 12px;
      left: 50%;
    }

    fluent-anchored-region.bottom .tooltip {
      margin-top: 12px;
    }

    fluent-anchored-region.left .tooltip::after {
      transform: rotate(45deg) translateY(-50%);
      top: 50%;
      right: 12px;
    }

    fluent-anchored-region.left .tooltip {
      margin-right: 12px;
    }

    fluent-anchored-region.right .tooltip::after {
      transform: rotate(45deg) translateY(-50%);
      top: 50%;
      left: 4px;
    }

    fluent-anchored-region.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(sd(au`
        :host([disabled]) {
          opacity: 1;
        }
        fluent-anchored-region.top .tooltip::after,
        fluent-anchored-region.bottom .tooltip::after,
        fluent-anchored-region.left .tooltip::after,
        fluent-anchored-region.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }