(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-common"], {
		0: function (t, e, i) {
			t.exports = i("6c90")
		},
		"0024": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-help-mobile-usage",
				viewBox: "0 0 39 39",
				url: i.p + "images/svg-sprite-icons.svg#icon-help-mobile-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"0032": function (t, e, i) {
			"use strict";
			var s = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("svg", {
						class: t.svgClass,
						attrs: {
							"aria-hidden": "true",
							width: t.width,
							height: t.height
						}
					}, [i("use", {
						attrs: {
							"xlink:href": t.name
						}
					})])
				},
				a = [],
				n = (i("99af"), i("d81d"), i("d3b7"), i("ddb0"), i("bc3a")),
				o = function (t) {
					return t.keys().map(t)
				},
				c = i("69d9");
			o(c);
			var r = !!window.MSInputMethodContext && !!document.documentMode,
				l = "".concat("images/svg-sprite-icons.svg");
			r && n["get"](l).then((function (t) {
				console.log("IE11: ", t);
				var e = document.createElement("div");
				e.innerHTML = t.data, e.style.display = "none", document.body.insertBefore(e, document.body.childNodes[0]), document.body.classList.add("ie")
			}));
			// var u = {
			// 		name: "SvgIcon",
			// 		data: function () {
			// 			return {
			// 				baseURL: "/"
			// 			}
			// 		},
			// 		props: {
			// 			iconName: {
			// 				type: String,
			// 				required: !0
			// 			},
			// 			className: {
			// 				type: String,
			// 				default: ""
			// 			},
			// 			width: {
			// 				default: "40px"
			// 			},
			// 			height: {
			// 				default: "40px"
			// 			}
			// 		},
			// 		computed: {
			// 			name: function () {
			// 				var t = this.iconName;
			// 				return t && !r ? "".concat(this.baseURL, "images/svg-sprite-icons.svg#icon-").concat(t, "-usage") : "#icon-" + t
			// 			},
			// 			svgClass: function () {
			// 				var t = this.className;
			// 				return t ? "svg-icon ".concat(t) : "svg-icon"
			// 			}
			// 		}
			// 	},
			// 	d = u,
				// g = (i("a4aa"), i("2877")),
				// p = Object(s, a, !1, null, null, null);
			e["a"] = ''
		},
		"01f7": function (t, e, i) {},
		"0287": function (t, e, i) {
			"use strict";
			i.r(e);
			i("e260"), i("e6cf"), i("cca6"), i("a79d");
			var s = i("2b0e"),
				a = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "body"
					}, [i("BannerSearch"), i("VideosAll"), i("Footer")], 1)
				},
				n = [],
				o = i("e7d5"),
				c = function () {
					var t = this,
						e = t.$createElement,
						s = t._self._c || e;
					return t.howToVideos.title ? s("section", {
						staticClass: "videos"
					}, [s("div", {
						staticClass: "videos-inner"
					}, [s("div", {
						staticClass: "grid-container narrow"
					}, [s("div", {
						staticClass: "breadcrumb"
					}, [s("ul", {
						staticClass: "breadcrumb-list"
					}, [s("li", {
						staticClass: "breadcrumb-item"
					}, [s("a", {
						staticClass: "link du-magenta",
						attrs: {
							href: t.helpURL
						}
					}, [t._v(t._s(this.helpText))])]), s("li", {
						staticClass: "breadcrumb-item"
					}, [s("a", [t._v(t._s(t.howToVideos.title))])])])]), s("h2", {
						staticClass: "headline2"
					}, [t._v(t._s(t.howToVideos.title))]), s("div", {
						staticClass: "row20 show-for-medium"
					}), s("div", {
						staticClass: "grid-x"
					}, [s("div", {
						staticClass: "cell"
					}, [s("div", {
						staticClass: "cardsList-all"
					}, t._l(t.howToVideos.videos, (function (e, a) {
						return s("div", {
							key: a + "video",
							staticClass: "cardsList-card"
						}, [s("div", {
							staticClass: "videos-box",
							on: {
								click: function (i) {
									return t.openVideo(e)
								}
							}
						}, [s("div", {
							directives: [{
								name: "lazy",
								rawName: "v-lazy:background-image",
								value: e.img,
								expression: "video.img",
								arg: "background-image"
							}],
							staticClass: "videos-box-image"
						}, [s("img", {
							staticClass: "videos-box-play",
							attrs: {
								alt: "video-du",
								src: i("df84")
							}
						})]), s("div", {
							staticClass: "videos-box-text"
						}, [s("p", {
							staticClass: "description3"
						}, [t._v(t._s(e.title))])])])])
					})), 0)])])])]), s("transition", {
						attrs: {
							name: "modal"
						}
					}, [t.showModal ? s("div", {
						staticClass: "modal-mask"
					}, [s("div", {
						staticClass: "modal-wrapper",
						on: {
							click: function (e) {
								return t.closeVideo()
							}
						}
					}, [s("div", {
						staticClass: "modal-header"
					}, [s("button", {
						staticClass: "modal-default-button"
					}, [t._v("X")])]), s("div", {
						staticClass: "modal-container"
					}, [s("div", {
						staticClass: "modal-body"
					}, [s("iframe", {
						attrs: {
							width: "800px",
							height: "400px",
							src: "https://www.youtube.com/embed/" + t.videoFrame + "?modestbranding=1&autoplay=1&controls=1&fs=0&loop=1&rel=0&showinfo=0&disablekb=1",
							frameborder: "0",
							allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
							allowfullscreen: ""
						}
					}), t._v('" ')])])])]) : t._e()])], 1) : t._e()
				},
				r = [],
				l = i("6590"),
				u = i("da7c"),
				d = {
					name: "VideosAll",
					data: function () {
						return {
							howToVideos: [],
							helpURL: "support",
							showModal: !1,
							helpText: "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir") ? "Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©" : "Help",
							videoFrame: ""
						}
					},
					mounted: function () {
						var t = this;
						l["a"].howToVideos().then((function (e) {
							t.howToVideos = e
						}))
					},
					methods: {
						sendGA: function (t, e, i, s) {
							Object(u["a"])(t, e, i, s)
						},
						openVideo: function (t) {
							this.videoFrame = t.videoId, this.showModal = !0, document.getElementsByTagName("body")[0].classList.add("modal-open"), this.sendGA("Help & Support", "How to Videos", t.title, 0)
						},
						closeVideo: function () {
							this.showModal = !1, document.getElementsByTagName("body")[0].classList.remove("modal-open")
						}
					}
				},
				g = d,
				p = (i("576a"), i("2877")),
				v = Object(p["a"])(g, c, r, !1, null, null, null),
				f = v.exports,
				m = i("fd2d"),
				h = {
					name: "SupportVideos",
					data: function () {
						return {}
					},
					components: {
						BannerSearch: o["a"],
						VideosAll: f,
						Footer: m["a"]
					}
				},
				b = h,
				C = Object(p["a"])(b, a, n, !1, null, null, null),
				k = C.exports,
				y = i("bc3a"),
				w = i.n(y),
				_ = i("a7fe"),
				x = i.n(_),
				S = i("caf9"),
				L = i("9d75"),
				T = i.n(L);
			i("1354"), i("6395");
			s["a"].use(T.a, x.a, w.a), s["a"].use(S["a"], {
				lazyComponent: !0
			}), s["a"].config.productionTip = !1, new s["a"]({
				render: function (t) {
					return t(k)
				}
			}).$mount("#appHelp")
		},
		"0604": function (t, e, i) {
			"use strict";
			var s = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return t.getHelp.title ? i("section", {
						staticClass: "cardsList getHelp"
					}, [i("div", {
						staticClass: "grid-container"
					}, [i("div", {
						staticClass: "grid-x grid-margin-x"
					}, [i("div", {
						staticClass: "cell"
					}, [i("h2", {
						staticClass: "headline3"
					}, [t._v(t._s(t.getHelp.title))]), i("div", {
						staticClass: "row20 show-for-medium"
					})])])]), i("div", {
						staticClass: "grid-container full-mobile"
					}, [i("div", {
						staticClass: "grid-x"
					}, [i("div", {
						staticClass: "cell"
					}, [t.getHelp.cards ? i("slick", {
						attrs: {
							id: "slick-addlife",
							options: t.slickHelp
						}
					}, t._l(t.getHelp.cards, (function (e, s) {
						return i("div", {
							key: s + "card223",
							staticClass: "cardsList-card"
						}, [i("div", {
							directives: [{
								name: "lazy",
								rawName: "v-lazy:background-image",
								value: e.image,
								expression: "card.image",
								arg: "background-image"
							}],
							staticClass: "cardsList-card-image",
							attrs: {
								title: e.title,
								height: "100%"
							}
						}), i("div", {
							staticClass: "cardsList-card-content"
						}, [i("div", [i("h4", {
							staticClass: "subtitle2"
						}, [t._v(t._s(e.title))]), i("p", {
							staticClass: "link"
						}, [t._v(t._s(e.description))])]), i("a", {
							staticClass: "card-link",
							attrs: {
								href: e.url
							},
							on: {
								click: function (i) {
									return t.sendGA("Help & Support", "Need more help", e.title, 0)
								}
							}
						}, [t._v(" " + t._s(e.link) + " "), i("svg-icon", {
							attrs: {
								"icon-name": "arrow",
								width: "16",
								height: "12"
							}
						})], 1)])])
					})), 0) : t._e()], 1)])])]) : t._e()
				},
				a = [],
				n = i("7ecd"),
				o = i("6590"),
				c = i("da7c"),
				r = i("0032"),
				l = {
					name: "GetHelp",
					components: {
						Slick: n["a"],
						SvgIcon: r["a"]
					},
					data: function () {
						return {
							getHelp: [],
							slickHelp: {
								slidesToShow: 3,
								slidesToScroll: 1,
								dots: !0,
								arrows: !1,
								autoplay: !1,
								speed: 500,
								infinite: !0,
								cssEase: "linear",
								autoplaySpeed: 4e3,
								pauseOnHover: !0,
								centerMode: !0,
								focusOnSelect: !0,
								swipeToSlide: "rtl" !== document.getElementsByTagName("html")[0].getAttribute("dir"),
								rtl: "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir"),
								responsive: [{
									breakpoint: 1024,
									settings: {
										slidesToShow: 2,
										centerMode: !0
									}
								}, {
									breakpoint: 767,
									settings: {
										slidesToShow: 1,
										centerMode: !0,
										centerPadding: "20px"
									}
								}]
							}
						}
					},
					mounted: function () {
						var t = this;
						o["a"].getHelp().then((function (e) {
							t.getHelp = e
						}))
					},
					methods: {
						sendGA: function (t, e, i, s) {
							Object(c["a"])(t, e, i, s)
						}
					}
				},
				u = l,
				d = (i("15aa"), i("2877")),
				g = Object(d["a"])(u, s, a, !1, null, null, null);
			e["a"] = g.exports
		},
		"08d3": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-appointment-usage",
				viewBox: "0 0 40 34",
				url: i.p + "images/svg-sprite-icons.svg#icon-appointment-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"0a17": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-search-usage",
				viewBox: "0 0 150 150",
				url: i.p + "images/svg-sprite-icons.svg#icon-search-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"0ab7": function (t, e, i) {
			t.exports = i.p + "img/border.svg"
		},
		"0db1": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-cart2-usage",
				viewBox: "0 0 33 31",
				url: i.p + "images/svg-sprite-icons.svg#icon-cart2-usage",
				toString: function () {
					return this.url
				}
			}
		},
		1: function (t, e, i) {
			t.exports = i("18e3")
		},
		"12d3": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-wegotyou-ar-usage",
				viewBox: "0 0 120 24",
				url: i.p + "images/svg-sprite-icons.svg#icon-wegotyou-ar-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"12f3": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-no-contract-usage",
				viewBox: "0 0 30 30",
				url: i.p + "images/svg-sprite-icons.svg#icon-no-contract-usage",
				toString: function () {
					return this.url
				}
			}
		},
		1354: function (t, e, i) {
			"use strict";
			i("7db0"), i("a15b"), i("498a");
			var s = i("1157"),
				a = i.n(s);

			function n() {
				var t = a()(".du-main-sec-menu > li");
				t.find("> #sampleID").on("click", (function (t) {
					t.stopPropagation();
					var e = a()(this),
						i = e.parent(),
						s = a()(window).width(),
						n = i.index();
					i.hasClass("hover") ? (i.removeClass("hover"), a()("body").removeClass("nav-active")) : s <= 1024 ? (i.siblings().removeClass("hover"), i.toggleClass("hover"), a()(".du-main-sec-menu").animate({
						scrollTop: 57 * n
					}, 50)) : (i.siblings().removeClass("hover"), i.addClass("hover"), a()("body").addClass("nav-active"))
				})), a()(document).mouseup((function (t) {
					var e = a()(".du-main-nav");
					a()(".du-main-sec-menu > li").hasClass("hover") && !e.is(t.target) && 0 === e.has(t.target).length && (e.find(".du-main-sec-menu > li").removeClass("hover"), a()("body").removeClass("nav-active"))
				}))
			}

			function o() {
				var t = a()(".du-main-nav");
				t.find(".du-main-sec-menu > li").removeClass("hover"), a()("body").removeClass("nav-active")
			}

			function c() {
				a()(".du-burger-menu").click((function () {
					a()(".du-main-nav").addClass("opened"), a()("body").addClass("ov-none")
				})), a()(".du-burger-close").click((function () {
					a()(".du-main-nav").removeClass("opened"), a()("body").removeClass("ov-none")
				}))
			}

			function r() {
				a()(".sicon").on("click", (function (t) {
					t.stopPropagation();
					var e = a()(this);
					e.hasClass("active") ? (a()("body").removeClass("search-active"), l()) : (e.addClass("active"), a()(".du-search").addClass("opened"), a()("body").addClass("search-active"), p(), m())
				})), u()
			}

			function l() {
				a()(".sicon").removeClass("active"), a()(".du-search").removeClass("opened"), a()("body").removeClass("search-active")
			}

			function u() {
				a()(document).on("mouseup", (function (t) {
					var e = a()(".du-search, .sicon");
					e.is(t.target) || 0 !== e.has(t.target).length || l()
				}))
			}

			function d() {
				a()(".du-wcag").on("click", (function (t) {
					t.stopPropagation();
					var e = a()(this);
					e.hasClass("active") ? p() : (e.addClass("active"), a()(".du-access").addClass("opened"), a()("body").addClass("accessibility-active"), l(), m())
				})), g()
			}

			function g() {
				a()(document).on("mouseup", (function (t) {
					var e = a()(".du-access, .du-wcag");
					e.is(t.target) || 0 !== e.has(t.target).length || p()
				}))
			}

			function p() {
				a()(".du-wcag").removeClass("active"), a()(".du-access").removeClass("opened"), a()("body").removeClass("accessibility-active")
			}

			function v() {
				a()(".account-trigger").on("click", (function (t) {
					t.stopPropagation();
					var e = a()(this);
					e.hasClass("active") ? m() : (e.addClass("active"), a()(".du-my-account-profile").addClass("opened"), a()("body").addClass("nav-active"), p(), l())
				})), f()
			}

			function f() {
				a()(document).on("mouseup", (function (t) {
					var e = a()(".du-my-account-profile.opened, .account-trigger.active, .submenu-big");
					e.is(t.target) || 0 !== e.has(t.target).length || m()
				}))
			}

			function m() {
				a()(".du-my-account-profile").removeClass("opened"), a()(".account-trigger").removeClass("active"), a()("body").removeClass("nav-active")
			}

			function h() {
				a()(".du-btn-switch-opt").on("click", (function (t) {
					t.stopPropagation();
					var e = a()(this);
					e.hasClass("active") ? C() : (e.addClass("active"), a()(".m-switchbtn").addClass("opened"), p(), l())
				})), b()
			}

			function b() {
				a()(document).on("mouseup", (function (t) {
					var e = a()(".m-switchbtn, .du-btn-switch-opt");
					e.is(t.target) || 0 !== e.has(t.target).length || C()
				}))
			}

			function C() {
				a()(".m-switchbtn").removeClass("opened"), a()(".du-btn-switch-opt").removeClass("active")
			}

			function k() {
				var t = a()(".sinput"),
					e = a()(".scloseicon"),
					i = a()(".sbtn");
				t.on("keyup", (function () {
					0 != t.val().length ? (i.removeClass("disabled"), i.prop("disabled", !1), e.show()) : (i.addClass("disabled"), i.prop("disabled", !0), e.hide())
				})), e.on("click", (function () {
					a()(this).hide(), t.val(""), t.focus(), i.addClass("disabled"), i.prop("disabled", !0)
				}))
			}

			function y() {
				o(), p(), m()
			}

			function w() {
				var t = a()(".du-resize-text");
				t.click((function () {
					a()(this).addClass("active"), a()(this).siblings().removeClass("active")
				}))
			}(function (t) {
				function e(t) {
					var e = t.attr("href");
					setTimeout((function () {
						window.location = e
					}), 400)
				}
				n(), c(), r(), d(), v(), h(), k(), w(), t(".header-wrap").each((function () {
					var e, i = t(this),
						s = t(window).scrollTop();
					t(window).scroll((function () {
						var a = t(window).scrollTop();
						clearTimeout(e), window.innerHeight + window.scrollY >= document.body.offsetHeight || (e = setTimeout((function () {
							a > s ? a > 100 && i.addClass("minimal") : i.removeClass("minimal"), s = a, clearTimeout(e)
						}), 30))
					}))
				}));
				var i = t(".submenu-big a, .du-main-sec-menu > li > a");
				i.click((function (i) {
					var s = t(this),
						a = [],
						n = t(".du-segment-links:eq(0) a.active").text();
					a.push(s.closest(".mlist").find(" > a").text()), s.closest(".menuList").length || s.is(".linkLast") ? a.push(s.closest(".menubox").find(".title:first").text().trim()) : s.closest(".promoBox").length && s.closest(".menubox").find(".title").each((function () {
						a.push(t(this).text().trim())
					})), a.push(s.text()), s.is(".menulink") && (a = [], a.push(s.text()));
					var o = {
						event: "eventTracker",
						eventCategory: "Top Navigation Menu",
						eventAction: n + " Menu",
						eventLabel: a.join("|")
					};
					return "undefined" != typeof window.dataLayer && window.dataLayer.push(o), "" != s.attr("href") && ("_blank" == s.attr("target") || (e(s), i.preventDefault(), !1))
				}));
				var s = t(".submenu-big").find(".du-banner-title a.du-btn");
				s.click((function (i) {
					var s = t(this),
						a = [],
						n = s.parent().find(".banner-title");
					a.push(s.closest(".mlist").find(" > a").text()), a.push(n.text());
					var o = {
						event: "eventTracker",
						eventCategory: "Call to Action",
						eventAction: "Click",
						eventLabel: a.join("|")
					};
					return "undefined" != typeof window.dataLayer && window.dataLayer.push(o), "" == s.attr("href") || (e(s), i.preventDefault()), !1
				}));
				var a = t(".du-new-quick-links a, .shop a, .login a, .du-profile-box-mobile a, .sicon, .du-lang-switch a");
				a.click((function (i) {
					var s = t(this),
						a = "",
						n = "English to Arabic";
					t("html").is("[dir=rtl]") && (n = "Arabic to English"), a = s.clone().children().remove().end().text(), s.find(".cart-stat").length && (a = "Cart"), s.is(".my-account") && (a = "My account"), s.is(".sicon") && (a = "Search"), s.is(".du-wcag") && (a = "Text Size"), s.is(".du-lang") && (a = n);
					var o = {
						event: "eventTracker",
						eventCategory: "Top Navigation Menu",
						eventAction: "Click",
						eventLabel: a
					};
					return "undefined" != typeof window.dataLayer && window.dataLayer.push(o), "" == s.attr("href") || (e(s), i.preventDefault()), !1
				}));
				var o = t(".du-segment-links a, .msli a");
				o.click((function (i) {
					var s = t(this),
						a = "";
					a = s.text();
					var n = {
						event: "eventTracker",
						eventCategory: "Top Navigation Menu",
						eventAction: "Click",
						eventLabel: a
					};
					return "undefined" != typeof window.dataLayer && window.dataLayer.push(n), "" == s.attr("href") || (e(s), i.preventDefault()), !1
				}));
				var l = t(".popular-search a, .suggbox a");
				l.click((function (i) {
					var s = t(this),
						a = [],
						n = t(".du-segment-links:eq(0) a.active").text();
					s.is(".thumb") ? (a.push(s.closest(".suggbox").find(".title").text()), a.push(s.find(".titlename").text())) : (a.push(s.closest(".promo-menu").find(".title").text()), a.push(s.text()));
					var o = {
						event: "eventTracker",
						eventCategory: "Top Search Menu",
						eventAction: n + " Menu",
						eventLabel: a.join("|")
					};
					return "undefined" != typeof window.dataLayer && window.dataLayer.push(o), "" == s.attr("href") || (e(s), i.preventDefault()), !1
				}));
				var u = t(".du-s-box form");
				u.submit((function () {
					var e = t(".du-segment-links:eq(0) a.active").text(),
						i = {
							event: "eventTracker",
							eventCategory: "Top Search Menu",
							eventAction: e + " Menu",
							eventLabel: "Search Button"
						};
					"undefined" != typeof window.dataLayer && window.dataLayer.push(i)
				}));
				var g = t(".du-my-account-profile a").not(".du-profile-closebtn");
				g.click((function (i) {
					var s = t(this),
						a = [],
						n = t(".du-segment-links:eq(0) a.active").text();
					a.push("My Account"), s.is(".wholeLink") ? a.push("dashboard") : a.push(s.text());
					var o = {
						event: "eventTracker",
						eventCategory: "Top Navigation Menu",
						eventAction: n + " Menu",
						eventLabel: a.join("|")
					};
					return "undefined" != typeof window.dataLayer && window.dataLayer.push(o), "" != s.attr("href") && ("_blank" == s.attr("target") || (e(s), i.preventDefault(), !1))
				}));
				var p = t(".acc-tool a").not(".accessibility-close");
				p.click((function (e) {
					var i = t(this),
						s = [],
						a = t(".du-segment-links:eq(0) a.active").text();
					s.push("Accessibility"), i.is(".accessibility-zoom-decrease") && s.push("zoom decrease"), i.is(".accessibility-zoom-increase") && s.push("zoom increase"), i.is(".contrast-switch-toggle") && s.push("contrast");
					var n = {
						event: "eventTracker",
						eventCategory: "Top Navigation Menu",
						eventAction: a + " Menu",
						eventLabel: s.join("|")
					};
					return "undefined" != typeof window.dataLayer && window.dataLayer.push(n), e.preventDefault(), !1
				}))
			})(a.a), a()(".du-search-close").click((function () {
				l()
			})), a()(".accessibility-close").click((function () {
				p()
			})), a()(".du-profile-closebtn").click((function () {
				m()
			})), a()(".m-switchbtn-close").click((function () {
				C()
			})), a()(window).on("keyup", (function (t) {
				27 == t.keyCode && (y(), l())
			})), a()(window).resize((function () {
				y()
			}))
		},
		"136b": function (t, e, i) {
			"use strict";
			var s = i("504c"),
				a = i.n(s);
			a.a
		},
		"14d6": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-help-billing2-usage",
				viewBox: "0 0 30 40",
				url: i.p + "images/svg-sprite-icons.svg#icon-help-billing2-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"15aa": function (t, e, i) {
			"use strict";
			var s = i("22db"),
				a = i.n(s);
			a.a
		},
		"17d7": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-secure-checkout-usage",
				viewBox: "0 0 16 18",
				url: i.p + "images/svg-sprite-icons.svg#icon-secure-checkout-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"18e3": function (t, e, i) {
			"use strict";
			i.r(e);
			i("e260"), i("e6cf"), i("cca6"), i("a79d");
			var s = i("2b0e"),
				a = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "body"
					}, [i("BannerSearch"), i("HelpTopicList", {
						attrs: {
							content: t.contentMisc.helpTopics
						}
					}), i("Videos"), i("BluChat"), i("GetHelp"), i("Footer"), i("Gradients")], 1)
				},
				n = [],
				o = i("e7d5"),
				c = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("section", {
						staticClass: "helpTopics"
					}, [i("div", {
						staticClass: "helpTopics-inner"
					}, [i("div", {
						staticClass: "grid-container"
					}, [t.content ? i("h2", {
						staticClass: "headline3"
					}, [t._v(t._s(t.content.title))]) : t._e(), i("div", {
						staticClass: "row30 show-for-medium"
					})]), i("div", {
						staticClass: "grid-container full-mobile"
					}, [i("div", {
						staticClass: "grid-x grid-margin-x"
					}, [i("div", {
						staticClass: "cell small-12 large-8"
					}, [t.helpTopics.topicTree && t.content ? [i("transition-group", {
						staticClass: "flex",
						attrs: {
							name: "fadeHelp",
							tag: "div"
						}
					}, t._l(t.helpTopics.topicTree, (function (e, s) {
						return i("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: s < 6 || t.showAll,
								expression: "index < 6 || showAll"
							}],
							key: s,
							staticClass: "helpTopics-box img"
						}, [e.topic.description ? [i("a", {
							attrs: {
								href: e.topic.description
							},
							on: {
								click: function (i) {
									return t.sendGA("Help & Support", "Popular Topics", e.topic.name, 0)
								}
							}
						}, [i("svg-icon", {
							attrs: {
								"icon-name": t.getIcon(e.topic.imageUrl),
								width: "40",
								height: "40"
							}
						}), i("p", {
							staticClass: "description3"
						}, [t._v(t._s(e.topic.name))])], 1)] : [i("a", {
							attrs: {
								href: t.content.topicsURL + e.topic.id + "&lang=" + t.content.language
							},
							on: {
								click: function (i) {
									return t.sendGA("Help & Support", "Popular Topics", e.topic.name, 0)
								}
							}
						}, [i("svg-icon", {
							attrs: {
								"icon-name": t.getIcon(e.topic.imageUrl),
								width: "40",
								height: "40"
							}
						}), i("p", {
							staticClass: "description3"
						}, [t._v(t._s(e.topic.name))])], 1)]], 2)
					})), 0), i("div", {
						staticClass: "row20"
					}), i("div", {
						staticClass: "flex-right"
					}, [t.showAll ? t._e() : i("a", {
						staticClass: "card-link arrow-down",
						on: {
							click: function (e) {
								t.showAll = !0, t.sendGA("Help & Support", "Popular Topics", "View All Topics", 0)
							}
						}
					}, [t._v(t._s(t.content.viewAll) + " ")])]), i("div", {
						staticClass: "row20 hide-for-medium"
					})] : [t._m(0)]], 2), i("div", {
						staticClass: "cell small-12 large-4"
					}, [t.trendArticles && t.content ? [i("div", {
						staticClass: "helpTopics-box"
					}, [i("p", {
						staticClass: "helpTopics-box-title"
					}, [t._v(t._s(t.content.trendTitle))]), i("ul", {
						staticClass: "helpTopics-box-list"
					}, t._l(t.trendArticles, (function (e, s) {
						return i("li", {
							key: s
						}, [i("a", {
							staticClass: "link black underline",
							attrs: {
								href: e.url
							},
							on: {
								click: function (i) {
									t.showAll = !0, t.sendGA("Help & Support", "Popular Articles", e.url, 0)
								}
							}
						}, [t._v(t._s(e.title))])])
					})), 0)])] : [i("div", {
						staticClass: "helpTopics-box rd-loader"
					})]], 2)])])])])
				},
				r = [function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "flex"
					}, [i("div", {
						staticClass: "helpTopics-box img rd-loader"
					}), i("div", {
						staticClass: "helpTopics-box img rd-loader"
					}), i("div", {
						staticClass: "helpTopics-box img rd-loader"
					}), i("div", {
						staticClass: "helpTopics-box img rd-loader"
					}), i("div", {
						staticClass: "helpTopics-box img rd-loader"
					}), i("div", {
						staticClass: "helpTopics-box img rd-loader"
					})])
				}],
				l = (i("c975"), i("ac1f"), i("5319"), i("1276"), i("6590")),
				u = i("da7c"),
				d = i("0032"),
				g = {
					name: "HelpTopicList",
					props: ["content"],
					components: {
						SvgIcon: d["a"]
					},
					data: function () {
						return {
							helpTopics: [],
							trendArticles: [],
							showAll: !1
						}
					},
					mounted: function () {
						var t = this;
						l["a"].getHelpTopics().then((function (e) {
							t.helpTopics = e
						})), l["a"].getTrendArticles().then((function (e) {
							t.trendArticles = e.data
						}))
					},
					methods: {
						sendGA: function (t, e, i, s) {
							Object(u["a"])(t, e, i, s)
						},
						getIcon: function (t) {
							var e = t;
							return e = e.indexOf("ico-") > -1 ? e.split("ico-")[1].replace(".svg", "") : e.split("/ico/")[1].replace(".svg", ""), e
						}
					}
				},
				p = g,
				v = (i("764a"), i("2877")),
				f = Object(v["a"])(p, c, r, !1, null, null, null),
				m = f.exports,
				h = function () {
					var t = this,
						e = t.$createElement,
						s = t._self._c || e;
					return s("section", {
						staticClass: "videos"
					}, [s("div", {
						staticClass: "videos-inner"
					}, [s("div", {
						staticClass: "grid-container narrow"
					}, [t.howToVideos.title ? [s("h2", {
						staticClass: "headline2"
					}, [t._v(t._s(t.howToVideos.title))])] : [s("h2", {
						staticClass: "headline2 rd-loader"
					}, [t._v("How to videos")])], s("div", {
						staticClass: "row20 show-for-medium"
					})], 2), s("div", {
						staticClass: "grid-container narrow full-mobile"
					}, [s("div", {
						staticClass: "grid-x"
					}, [s("div", {
						staticClass: "cell"
					}, [t.howToVideos.title ? [t.howToVideos.videos ? s("slick", {
						attrs: {
							id: "slick-addlife",
							options: t.slickVideos
						}
					}, [t._l(t.howToVideos.videos, (function (e, a) {
						return [a <= 2 ? s("div", {
							key: a + "video",
							staticClass: "cardsList-card"
						}, [s("div", {
							staticClass: "videos-box",
							on: {
								click: function (i) {
									return t.openVideo(e)
								}
							}
						}, [s("div", {
							directives: [{
								name: "lazy",
								rawName: "v-lazy:background-image",
								value: e.img,
								expression: "video.img",
								arg: "background-image"
							}],
							staticClass: "videos-box-image"
						}, [s("img", {
							staticClass: "videos-box-play",
							attrs: {
								alt: "video-du",
								src: i("df84")
							}
						})]), s("div", {
							staticClass: "videos-box-text"
						}, [s("p", {
							staticClass: "description3"
						}, [t._v(t._s(e.title))])])])]) : t._e()]
					}))], 2) : t._e()] : [t._m(0)]], 2), s("div", {
						staticClass: "row20"
					}), t.howToVideos.title ? s("div", {
						staticClass: "flex-right"
					}, [s("a", {
						staticClass: "card-link",
						attrs: {
							href: t.howToVideos.viewAllUrl
						},
						on: {
							click: function (e) {
								return t.sendGA("Help & Support", "How to Videos", "View all videos", 0)
							}
						}
					}, [t._v(t._s(t.howToVideos.viewAll) + " "), s("svg-icon", {
						attrs: {
							"icon-name": "arrow"
						}
					})], 1)]) : t._e()])])]), s("transition", {
						attrs: {
							name: "modal"
						}
					}, [t.showModal ? s("div", {
						staticClass: "modal-mask"
					}, [s("div", {
						staticClass: "modal-wrapper",
						on: {
							click: function (e) {
								return t.closeVideo()
							}
						}
					}, [s("div", {
						staticClass: "modal-header"
					}, [s("button", {
						staticClass: "modal-default-button"
					}, [t._v("X")])]), s("div", {
						staticClass: "modal-container"
					}, [s("div", {
						staticClass: "modal-body"
					}, [s("iframe", {
						attrs: {
							width: "800px",
							height: "400px",
							src: "https://www.youtube.com/embed/" + t.videoInfo.videoId + "?modestbranding=1&autoplay=1&controls=1&fs=0&loop=1&rel=0&showinfo=0&disablekb=1",
							frameborder: "0",
							allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
							allowfullscreen: ""
						}
					}), t._v('" ')])])])]) : t._e()])], 1)
				},
				b = [function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						attrs: {
							id: "slick-addlife"
						}
					}, [i("div", {
						staticClass: "cardsList-card rd-loader"
					}), i("div", {
						staticClass: "cardsList-card rd-loader"
					}), i("div", {
						staticClass: "cardsList-card rd-loader"
					})])
				}],
				C = i("7ecd"),
				k = {
					name: "Videos",
					components: {
						Slick: C["a"],
						SvgIcon: d["a"]
					},
					data: function () {
						return {
							howToVideos: [],
							helpURL: "help-landing.html",
							showModal: !1,
							videoInfo: "",
							slickVideos: {
								slidesToShow: 1,
								slidesToScroll: 1,
								dots: !0,
								arrows: !1,
								autoplay: !1,
								speed: 500,
								infinite: !0,
								cssEase: "linear",
								autoplaySpeed: 4e3,
								pauseOnHover: !0,
								centerMode: !0,
								focusOnSelect: !0,
								centerPadding: "20px",
								swipeToSlide: "rtl" !== document.getElementsByTagName("html")[0].getAttribute("dir"),
								rtl: "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir"),
								mobileFirst: !0,
								responsive: [{
									breakpoint: 1024,
									settings: "unslick"
								}]
							}
						}
					},
					mounted: function () {
						var t = this;
						l["a"].howToVideos().then((function (e) {
							t.howToVideos = e
						}))
					},
					methods: {
						sendGA: function (t, e, i, s) {
							Object(u["a"])(t, e, i, s)
						},
						openVideo: function (t) {
							this.videoInfo = t, this.showModal = !0, document.getElementsByTagName("body")[0].classList.add("modal-open"), this.sendGA("Help & Support", "How to Videos", this.videoInfo.title, 0)
						},
						closeVideo: function () {
							this.showModal = !1, document.getElementsByTagName("body")[0].classList.remove("modal-open")
						}
					}
				},
				y = k,
				w = (i("136b"), Object(v["a"])(y, h, b, !1, null, null, null)),
				_ = w.exports,
				x = i("6732"),
				S = i("0604"),
				L = i("fd2d"),
				T = i("cf38"),
				A = {
					name: "Support",
					data: function () {
						return {
							contentMisc: []
						}
					},
					mounted: function () {
						var t = this;
						l["a"].contentMisc().then((function (e) {
							t.contentMisc = e
						}))
					},
					components: {
						BannerSearch: o["a"],
						HelpTopicList: m,
						Videos: _,
						BluChat: x["a"],
						GetHelp: S["a"],
						Footer: L["a"],
						Gradients: T["a"]
					}
				},
				B = A,
				H = Object(v["a"])(B, a, n, !1, null, null, null),
				V = H.exports,
				O = i("bc3a"),
				E = i.n(O),
				D = i("a7fe"),
				M = i.n(D),
				j = i("caf9"),
				I = i("9d75"),
				G = i.n(I);
			i("1354"), i("6395");
			s["a"].use(G.a, M.a, E.a), s["a"].use(j["a"], {
				lazyComponent: !0
			}), s["a"].config.productionTip = !1, new s["a"]({
				render: function (t) {
					return t(V)
				}
			}).$mount("#appHelp")
		},
		"1a7b": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-links-usage",
				viewBox: "0 0 50 50",
				url: i.p + "images/svg-sprite-icons.svg#icon-links-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"1b5f": function (t, e, i) {},
		2: function (t, e, i) {
			t.exports = i("0287")
		},
		2109: function (t, e, i) {},
		"22db": function (t, e, i) {},
		2346: function (t, e, i) {
			"use strict";
			var s = i("bc55"),
				a = i.n(s);
			a.a
		},
		2559: function (t, e, i) {},
		3: function (t, e, i) {
			t.exports = i("afc7")
		},
		3140: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-roaming-usage",
				viewBox: "0 0 26 26",
				url: i.p + "images/svg-sprite-icons.svg#icon-roaming-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"31c3": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-prepaid-usage",
				viewBox: "0 0 44 58",
				url: i.p + "images/svg-sprite-icons.svg#icon-prepaid-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"33ff": function (t, e, i) {},
		"366c": function (t, e, i) {},
		"37b5": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-fixed-services-usage",
				viewBox: "0 0 40 40",
				url: i.p + "images/svg-sprite-icons.svg#icon-fixed-services-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"388f": function (t, e, i) {
			t.exports = i.p + "img/border-mobile.svg"
		},
		"3a7d": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-help-appointment-usage",
				viewBox: "0 0 40 34",
				url: i.p + "images/svg-sprite-icons.svg#icon-help-appointment-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"3d49": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-contract-usage",
				viewBox: "0 0 32 26",
				url: i.p + "images/svg-sprite-icons.svg#icon-contract-usage",
				toString: function () {
					return this.url
				}
			}
		},
		4: function (t, e, i) {
			t.exports = i("4ae8")
		},
		4036: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-help-home-usage",
				viewBox: "0 0 40 40",
				url: i.p + "images/svg-sprite-icons.svg#icon-help-home-usage",
				toString: function () {
					return this.url
				}
			}
		},
		4229: function (t, e, i) {
			"use strict";
			var s = i("c82a"),
				a = i.n(s);
			a.a
		},
		4305: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-connectivity-usage",
				viewBox: "0 0 50 50",
				url: i.p + "images/svg-sprite-icons.svg#icon-connectivity-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"48d6": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-instagram-usage",
				viewBox: "0 0 32 32",
				url: i.p + "images/svg-sprite-icons.svg#icon-instagram-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"4a24": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-check-usage",
				viewBox: "0 0 18 14",
				url: i.p + "images/svg-sprite-icons.svg#icon-check-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"4ae8": function (t, e, i) {
			"use strict";
			i.r(e);
			i("e260"), i("e6cf"), i("cca6"), i("a79d");
			var s = i("2b0e"),
				a = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "body"
					}, [i("BannerSearch"), i("HelpResultList", {
						attrs: {
							content: t.contentMisc.searchResult
						}
					}), i("Footer")], 1)
				},
				n = [],
				o = i("e7d5"),
				c = function () {
					var t = this,
						e = t.$createElement,
						s = t._self._c || e;
					return s("section", {
						staticClass: "topicView"
					}, [s("div", {
						staticClass: "topicView-inner"
					}, [s("div", {
						staticClass: "grid-container narrow"
					}, [s("div", {
						staticClass: "grid-x"
					}, [s("div", {
						staticClass: "cell small-12"
					}, [s("div", {
						staticClass: "breadcrumb"
					}, [t.content ? s("ul", {
						staticClass: "breadcrumb-list"
					}, [s("li", {
						staticClass: "breadcrumb-item"
					}, [s("a", {
						staticClass: "link du-magenta",
						attrs: {
							href: t.content.helpURL
						}
					}, [t._v(t._s(this.helpText))])]), s("li", {
						staticClass: "breadcrumb-item"
					}, [s("a", [t._v(t._s(this.searchText))])])]) : t._e()]), s("div", [s("div", {
						staticClass: "row20"
					}), t.getSearchResult.article && t.content ? [t.getSearchResult.article.length > 0 ? s("ul", t._l(t.getSearchResult.article, (function (e, i) {
						return s("li", {
							key: i + "art"
						}, [s("a", {
							staticClass: "link black underline",
							attrs: {
								href: t.content.articleURL + e.alternateId + t.content.language
							},
							on: {
								click: function (i) {
									return t.sendGA("Help & Support", "Article", e.name, 0)
								}
							}
						}, [t._v(" " + t._s(e.name) + " ")])])
					})), 0) : t.getSearchResult.correctedQuery ? s("div", {
						staticClass: "text-center"
					}, [s("img", {
						staticClass: "topicView-notFound",
						attrs: {
							src: i("72dd")
						}
					}), s("p", {
						staticClass: "subtitle2"
					}, [t._v(t._s(t.content.didyouMean) + " "), s("a", {
						staticClass: "link magenta",
						attrs: {
							href: t.content.searchResultURL + t.getSearchResult.correctedQuery
						}
					}, [t._v(" " + t._s(t.getSearchResult.correctedQuery) + " ")]), t._v(" " + t._s(t.content.didyouMean2) + " ")])]) : s("div", {
						staticClass: "text-center"
					}, [s("img", {
						staticClass: "topicView-notFound",
						attrs: {
							src: i("72dd")
						}
					}), s("p", {
						staticClass: "subtitle2",
						domProps: {
							innerHTML: t._s(t.content.notFound)
						}
					}), s("p", {
						domProps: {
							innerHTML: t._s(t.content.notFoundAlternative)
						}
					})])] : [t._m(0)]], 2)])])])])])
				},
				r = [function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "text-center lds-ring-container"
					}, [i("div", {
						staticClass: "lds-ring"
					}, [i("div"), i("div"), i("div"), i("div")])])
				}],
				l = (i("d3b7"), i("3ca3"), i("ddb0"), i("2b3d"), i("6590")),
				u = i("da7c"),
				d = {
					name: "HelpResultList",
					props: ["content"],
					data: function () {
						return {
							searchText: new URL(location.href).searchParams.get("q"),
							helpText: "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir") ? "Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©" : "Help",
							getSearchResult: []
						}
					},
					mounted: function () {
						var t = this;
						this.searchText && l["a"].getSearchResult(this.searchText).then((function (e) {
							t.getSearchResult = e
						}))
					},
					methods: {
						sendGA: function (t, e, i, s) {
							Object(u["a"])(t, e, i, s)
						}
					}
				},
				g = d,
				p = (i("b734"), i("2877")),
				v = Object(p["a"])(g, c, r, !1, null, null, null),
				f = v.exports,
				m = i("fd2d"),
				h = {
					name: "SupportResult",
					data: function () {
						return {
							contentMisc: []
						}
					},
					mounted: function () {
						var t = this;
						l["a"].contentMisc().then((function (e) {
							t.contentMisc = e
						}))
					},
					components: {
						BannerSearch: o["a"],
						HelpResultList: f,
						Footer: m["a"]
					}
				},
				b = h,
				C = Object(p["a"])(b, a, n, !1, null, null, null),
				k = C.exports,
				y = i("bc3a"),
				w = i.n(y),
				_ = i("a7fe"),
				x = i.n(_),
				S = i("caf9"),
				L = i("9d75"),
				T = i.n(L);
			i("1354"), i("6395");
			s["a"].use(T.a, x.a, w.a), s["a"].use(S["a"], {
				lazyComponent: !0
			}), s["a"].config.productionTip = !1, new s["a"]({
				render: function (t) {
					return t(k)
				}
			}).$mount("#appHelp")
		},
		"4bd6": function (t, e, i) {
			"use strict";
			var s = i("1b5f"),
				a = i.n(s);
			a.a
		},
		"4e7e": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-help-roaming-usage",
				viewBox: "0 0 32 40",
				url: i.p + "images/svg-sprite-icons.svg#icon-help-roaming-usage",
				toString: function () {
					return this.url
				}
			}
		},
		5: function (t, e, i) {
			t.exports = i("644c")
		},
		"504c": function (t, e, i) {},
		"53d7": function (t, e, i) {
			"use strict";
			var s = i("01f7"),
				a = i.n(s);
			a.a
		},
		"53ef": function (t, e, i) {
			"use strict";
			var s = i("a103"),
				a = i.n(s);
			a.a
		},
		"576a": function (t, e, i) {
			"use strict";
			var s = i("a9d6"),
				a = i.n(s);
			a.a
		},
		"5a0b": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-twitter-usage",
				viewBox: "0 0 32 32",
				url: i.p + "images/svg-sprite-icons.svg#icon-twitter-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"5ac2": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-VAT-usage",
				viewBox: "0 0 50 50",
				url: i.p + "images/svg-sprite-icons.svg#icon-VAT-usage",
				toString: function () {
					return this.url
				}
			}
		},
		6: function (t, e, i) {
			t.exports = i("c88c")
		},
		6180: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-managed-services-usage",
				viewBox: "0 0 40 39",
				url: i.p + "images/svg-sprite-icons.svg#icon-managed-services-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"62ea": function (t, e, i) {},
		6395: function (t, e, i) {
			"use strict";
			i("c975"), i("ac1f"), i("466d"), i("1276"), i("498a");
			var s = i("1157"),
				a = i.n(s),
				n = function () {
					var t = function () {
							e(), o(), l()
						},
						e = function () {
							a()(".accessibility-toggle").click((function () {
								a()(".accessibility-pane").toggleClass("open"), n(), a()(".accessibility-pane").hasClass("open") && (a()(".searchbox-arrow").removeClass("open"), a()(".top-search-area").removeClass("open"))
							})), a()(".accessibility-toggle-mobile").click((function () {
								a()(".accessibility-pane").toggleClass("open"), n(), a()(".accessibility-pane").hasClass("open") && (a()(".searchbox-arrow").removeClass("open"), a()(".top-search-area").removeClass("open")), a()("#toggleMenuPane").trigger("click")
							})), a()(".accessibility-pane").on("click", ".close-button", (function () {
								a()(this).closest(".accessibility-pane").removeClass("open"), n()
							})), a()(".accessibility-zoom-decrease").on("click", g), a()(".accessibility-zoom-increase").on("click", d), a()(".contrast-switch-toggle").on("click", (function () {
								r("ColorInversion"), o()
							}))
						};

					function i(t) {
						for (var e = t + "=", i = document.cookie.split(";"), s = 0; s < i.length; s++) {
							var a = i[s];
							while (" " == a.charAt(0)) a = a.substring(1);
							if (0 == a.indexOf(e)) return a.substring(e.length, a.length)
						}
						return ""
					}

					function s(t, e, i) {
						var s = new Date;
						s.setTime(s.getTime() + 24 * i * 60 * 60 * 1e3);
						var a = "expires=" + s.toUTCString();
						document.cookie = t + "=" + e + ";" + a + ";path=/"
					}
					var n = function () {
							a()(".accessibility-pane").hasClass("open") && !a()("a.top-pane-link.accessibility-toggle").hasClass("open") ? a()("a.top-pane-link.accessibility-toggle").addClass("open") : !a()(".accessibility-pane").hasClass("open") && a()("a.top-pane-link.accessibility-toggle").hasClass("open") && a()("a.top-pane-link.accessibility-toggle").removeClass("open")
						},
						o = function () {
							var t = i("Accessibility");
							switch (t) {
								case "ColorInversion":
									a()("body").addClass("colorInversion");
									break;
								default:
									a()("body").removeClass("colorInversion")
							}
						},
						c = function (t) {
							s("Accessibility", t, 7)
						},
						r = function (t) {
							var e = i("Accessibility");
							c(e != t ? t : "None")
						},
						l = function () {
							var t = i("AccessibilityZoom");
							t && p(t)
						},
						u = function () {
							var t = 100;
							if (a.a.trim(document.body.style.zoom).length > 0) {
								var e = document.body.style.zoom.match("[0-9]+");
								e.length > 0 && (t = parseInt(e[0]))
							}
							return t
						},
						d = function () {
							var t = u() + 15;
							p(t)
						},
						g = function () {
							var t = u() - 15;
							p(t)
						},
						p = function (t) {
							var e = Math.max(100, Math.min(130, t));
							a()(".accessibility-zoom-decrease").removeClass("disabled"), a()(".accessibility-zoom-increase").removeClass("disabled"), 100 === e ? a()(".accessibility-zoom-decrease").addClass("disabled") : 130 === e && a()(".accessibility-zoom-increase").addClass("disabled"), s("AccessibilityZoom", e, 7), document.body.style.zoom = e + "%"
						};
					return {
						init: t
					}
				}();
			a()((function () {
				n.init()
			}))
		},
		"644c": function (t, e, i) {
			"use strict";
			i.r(e);
			i("e260"), i("e6cf"), i("cca6"), i("a79d");
			var s = i("2b0e"),
				a = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "body"
					}, [i("BannerSearch"), i("ArticleDetails", {
						attrs: {
							content: t.contentMisc.helpTopics
						}
					}), i("Footer"), i("Gradients")], 1)
				},
				n = [],
				o = i("e7d5"),
				c = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("section", {
						staticClass: "topicView"
					}, [i("div", {
						staticClass: "topicView-inner"
					}, [i("div", {
						staticClass: "grid-container narrow"
					}, [i("div", {
						staticClass: "grid-x"
					}, [t.getArticle.name && t.content ? i("div", {
						staticClass: "cell small-12"
					}, [i("div", {
						staticClass: "breadcrumb"
					}, [i("ul", {
						staticClass: "breadcrumb-list"
					}, [i("li", {
						staticClass: "breadcrumb-item"
					}, [i("a", {
						staticClass: "link du-magenta",
						attrs: {
							href: t.content.helpURL
						}
					}, [t._v(t._s(this.helpText))])]), i("li", {
						staticClass: "breadcrumb-item"
					}, [i("a", {
						staticClass: "link du-magenta",
						attrs: {
							href: t.content.topicsURL + t.getArticle.topicBreadcrumb[0].topic[0].id + t.content.language
						}
					}, [t._v(t._s(t.getArticle.topicBreadcrumb[0].topic[0].name))])]), i("li", {
						staticClass: "breadcrumb-item"
					}, [i("a", [t._v(t._s(t.getArticle.name))])])])]), i("div", {
						staticClass: "align-center"
					}, [i("p", {
						staticClass: "headline2"
					}, [t._v(t._s(t.getArticle.name))]), i("div", {
						staticClass: "row20"
					}), i("div", {
						staticClass: "topicView-content",
						domProps: {
							innerHTML: t._s(t.getContent(t.getArticle.content))
						}
					})])]) : i("div", {
						staticClass: "cell small-12"
					}, [t._m(0)])])])])])
				},
				r = [function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "text-center lds-ring-container"
					}, [i("div", {
						staticClass: "lds-ring"
					}, [i("div"), i("div"), i("div"), i("div")])])
				}],
				l = (i("d3b7"), i("ac1f"), i("3ca3"), i("1276"), i("ddb0"), i("2b3d"), i("6590")),
				u = i("da7c"),
				d = {
					name: "ArticleDetails",
					props: ["content"],
					data: function () {
						return {
							id: new URL(location.href).searchParams.get("artid"),
							getArticle: [],
							subTopics: [],
							isActive: 0,
							helpText: "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir") ? "Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©" : "Help"
						}
					},
					mounted: function () {
						var t = this;
						this.id && l["a"].getArticle(this.id).then((function (e) {
							t.getArticle = e.article[0]
						}))
					},
					methods: {
						sendGA: function (t, e, i, s) {
							Object(u["a"])(t, e, i, s)
						},
						getContent: function (t) {
							return t.split("[profile:<Consumer>]").pop().split("</profile>")[0].split("[profile:<chatbot>]")[0].split("[profile:<Consumer>,<Enterprise>]").pop()
						}
					}
				},
				g = d,
				p = (i("4229"), i("2877")),
				v = Object(p["a"])(g, c, r, !1, null, null, null),
				f = v.exports,
				m = i("fd2d"),
				h = i("cf38"),
				b = {
					name: "SupportArticleDetail",
					data: function () {
						return {
							contentMisc: []
						}
					},
					mounted: function () {
						var t = this;
						l["a"].contentMisc().then((function (e) {
							t.contentMisc = e
						}))
					},
					components: {
						BannerSearch: o["a"],
						ArticleDetails: f,
						Footer: m["a"],
						Gradients: h["a"]
					}
				},
				C = b,
				k = Object(p["a"])(C, a, n, !1, null, null, null),
				y = k.exports,
				w = i("bc3a"),
				_ = i.n(w),
				x = i("a7fe"),
				S = i.n(x),
				L = i("caf9"),
				T = i("9d75"),
				A = i.n(T);
			i("1354"), i("6395");
			s["a"].use(A.a, S.a, _.a), s["a"].use(L["a"], {
				lazyComponent: !0
			}), s["a"].config.productionTip = !1, new s["a"]({
				render: function (t) {
					return t(y)
				}
			}).$mount("#appHelp")
		},
		6590: function (t, e, i) {
			"use strict";
			i("c975"), i("ac1f"), i("5319"), i("1276");
			var s = i("bc3a"),
				a = i.n(s),
				// n = "https://www.du.ae/servlet/duaediscovery/common/km/common/static/helpandsupport/",
				// o = "https://help.du.ae/system/ws/v11/ss/",
				c = "201600000001018",
				r = "201600000001020",
				l = "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir"),
				u = "en-US",
				d = "ar-SA";
			e["a"] = {
				getkmSession: function () {
					// var t = this,
					// 	e = l ? r : c;
					// a.a.post("https://help.du.ae/system/ws/v15/ss/portal/" + e + "/authentication/anonymous", "", {
					// 	headers: {
					// 		Accept: "application/json",
					// 		"Content-Type": "application/json",
					// 		"Accept-Language": l ? d : u
					// 	}
					// }).then((function (e) {
					// 	t.setCookie("egainsessionmain", e.headers["x-egain-session"])
					// })).catch((function (t) {
					// 	console.log("Error while retrieving session: " + t)
					// }))
				},
				kmSession: function () {
					"" === this.getCookie("egainsessionmain") ? (this.getkmSession(), console.log("Done")) : console.log(this.getCookie("egainsessionmain"))
				},
				getCookie: function (t) {
					for (var e = t + "=", i = decodeURIComponent(document.cookie), s = i.split(";"), a = 0; a < s.length; a++) {
						var n = s[a];
						while (" " == n.charAt(0)) n = n.substring(1);
						if (0 == n.indexOf(e)) return n.substring(e.length, n.length)
					}
					return ""
				},
				setCookie: function (t, e) {
					var i = new Date;
					i.setTime(i.getTime() + 3e5);
					var s = "expires=" + i.toGMTString();
					document.cookie = t + "=" + e + ";" + s + ";path=/"
				},
				contentMisc: function () {
					var t = l ? n + "ar/search.json" : n + "en/search.json";
					return a.a.get(t).then((function (t) {
						return t.data.data
					}))
				},
				bannerHelp: function () {
					var t = l ? n + "ar/banner.json" : n + "en/banner.json";
					return a.a.get(t).then((function (t) {
						return t.data.data
					}))
				},
				howToVideos: function () {
					var t = l ? n + "ar/videos.json" : n + "en/videos.json";
					return a.a.get(t).then((function (t) {
						return t.data.data
					}))
				},
				contactHelp: function () {
					var t = l ? n + "ar/chatbot.json" : n + "en/chatbot.json";
					return a.a.get(t).then((function (t) {
						return t.data.data
					}))
				},
				getHelp: function () {
					var t = l ? n + "ar/gethelp.json" : n + "en/gethelp.json";
					return a.a.get(t).then((function (t) {
						return t.data.data
					}))
				},
				getTrendArticles: function () {
					var t = l ? n + "ar/articles.json" : n + "en/articles.json";
					return a.a.get(t).then((function (t) {
						return t.data
					}))
				},
				getHelpTopics: function () {
					this.kmSession();
					var t = l ? o + "topic?$attribute=&$lang=ar-SA&$level=0&$pagenum=0&$pagesize=75&portalId=" + r + "&usertype=customer" : o + "topic?$attribute=&$lang=en-US&$level=0&$pagenum=0&$pagesize=75&portalId=" + c + "&usertype=customer";
					return a.a.get(t, {
						headers: {
							Accept: "application/json",
							"X-egain-session": this.getCookie("egainsessionmain")
						}
					}).then((function (t) {
						return t.data
					}))
				},
				getQuestions: function (t) {
					this.kmSession();
					var e = l ? o + "search/autocomplete?portalId=" + r + "&usertype=customer&maxCount=5&excludeType=topic&expanded=true&q=" + t : o + "search/autocomplete?portalId=" + c + "&usertype=customer&maxCount=5&excludeType=topic&expanded=true&q=" + t;
					return a.a.get(e, {
						headers: {
							Accept: "application/json",
							"X-egain-session": this.getCookie("egainsessionmain")
						}
					}).then((function (t) {
						var e = JSON.stringify(t.data).replace(/\\r/g, "").replace(/\\t/g, "").replace(/\\n/g, ""),
							i = new Object;
						return i = JSON.parse(e), i
					}))
				},
				topicDetails: function (t) {
					this.kmSession();
					var e = l ? o + "topic/" + t + "?portalId=" + c + "&usertype=customer&$level=1&$pagenum=0&$pagesize=50&$lang=ar-SA" : o + "topic/" + t + "?portalId=" + c + "&usertype=customer&$level=1&$pagenum=0&$pagesize=50&$lang=en-US";
					return a.a.get(e, {
						headers: {
							Accept: "application/json",
							"X-egain-session": this.getCookie("egainsessionmain")
						}
					}).then((function (t) {
						var e = JSON.stringify(t.data).replace(/\\r/g, "").replace(/\\t/g, "").replace(/\\n/g, ""),
							i = new Object;
						return i = JSON.parse(e), i
					}))
				},
				getSubTopics: function (t) {
					this.kmSession();
					var e = o + "article?$attribute=name,id,additionalInfo,articleKeywords,contentText,content,imageUrl,articleTypeAttributes&$lang=en-US&context=topic_tree_click_topic&portalId=" + c + "&topicId=" + t + "&usertype=customer";
					return a.a.get(e, {
						headers: {
							Accept: "application/json",
							"X-egain-session": this.getCookie("egainsessionmain")
						}
					}).then((function (t) {
						return t.data
					}))
				},
				getArticle: function (t) {
					this.kmSession();
					var e = l ? o + "article/" + t + "?portalId=" + c + "&usertype=customer&$lang=ar-SA" : o + "article/" + t + "?portalId=" + c + "&usertype=customer&$lang=en-US";
					return a.a.get(e, {
						headers: {
							Accept: "application/json",
							"X-egain-session": this.getCookie("egainsessionmain")
						}
					}).then((function (t) {
						return t.data
					}))
				},
				getSearchResult: function (t) {
					this.kmSession();
					var e = l ? o + "search/kb?portalId=" + r + "&usertype=customer&$pagesize=50&resourceType=article&lang=&lang=ar-SA&q=" + t : o + "search/kb?portalId=" + c + "&usertype=customer&$pagesize=50&resourceType=article&q=" + t;
					return a.a.get(e, {
						headers: {
							Accept: "application/json",
							"X-egain-session": this.getCookie("egainsessionmain")
						}
					}).then((function (t) {
						return t.data
					}))
				}
			}
		},
		6732: function (t, e, i) {
			"use strict";
			var s = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return t.contactHelp ? i("section", {
						staticClass: "bluchat"
					}, [i("div", {
						directives: [{
							name: "lazy",
							rawName: "v-lazy:background-image",
							value: t.contactHelp.backgroundImage,
							expression: "contactHelp.backgroundImage",
							arg: "background-image"
						}],
						staticClass: "show-for-medium bluchat-bg"
					}), i("div", {
						directives: [{
							name: "lazy",
							rawName: "v-lazy:background-image",
							value: t.contactHelp.backgroundImageMobile,
							expression: "contactHelp.backgroundImageMobile",
							arg: "background-image"
						}],
						staticClass: "hide-for-medium bluchat-bg"
					}), i("div", {
						staticClass: "bluchat-inner"
					}, [i("div", {
						staticClass: "grid-container narrow"
					}, [i("div", {
						staticClass: "grid-x"
					}, [i("div", {
						staticClass: "cell small-2 medium-2 medium-offset-1"
					}, [i("img", {
						staticClass: "bluchat-img",
						attrs: {
							src: t.contactHelp.image,
							alt: "blu-du"
						}
					})]), i("div", {
						staticClass: "cell small-10 medium-4"
					}, [i("div", {
						staticClass: "align-center"
					}, [i("p", {
						staticClass: "subtitle2"
					}, [t._v(t._s(t.contactHelp.title))]), i("p", {
						staticClass: "description2"
					}, [t._v(t._s(t.contactHelp.subtitle))]), i("div", {
						staticClass: "row10 hide-for-medium"
					})])]), i("div", {
						staticClass: "cell small-10 large-5 small-offset-2 large-offset-0"
					}, [i("div", {
						staticClass: "align-middle"
					}, [t._l(t.contactHelp.links, (function (e, s) {
						return [i("a", {
							key: s + "link",
							staticClass: "bluchat-link btn white",
							attrs: {
								target: "_blank",
								rel: "noreferrer",
								href: e.url
							},
							on: {
								click: function (i) {
									return t.sendGA("Help & Support", "Got Questions from Chatbot", e.title, 0)
								}
							}
						}, [i("span", {
							directives: [{
								name: "lazy",
								rawName: "v-lazy:background-image",
								value: t.spriteURL + e.icon + "-usage",
								expression: "spriteURL + link.icon + '-usage'",
								arg: "background-image"
							}],
							staticClass: "svg-bg-icon",
							attrs: {
								title: e.title
							}
						}), t._v(t._s(e.title) + " ")])]
					}))], 2)])])])])]) : t._e()
				},
				a = [],
				n = i("6590"),
				o = i("da7c"),
				c = {
					name: "TipOfTheDay",
					data: function () {
						return {
							contactHelp: [],
							spriteURL: "/images/svg-sprite-icons.svg#icon-"
						}
					},
					mounted: function () {
						var t = this;
						n["a"].contactHelp().then((function (e) {
							t.contactHelp = e
						}))
					},
					methods: {
						sendGA: function (t, e, i, s) {
							Object(o["a"])(t, e, i, s)
						}
					}
				},
				r = c,
				l = (i("b02d"), i("2877")),
				u = Object(l["a"])(r, s, a, !1, null, null, null);
			e["a"] = u.exports
		},
		6942: function (t, e, i) {
			"use strict";
			var s = i("ea77"),
				a = i.n(s);
			a.a
		},
		"69d9": function (t, e, i) {
			var s = {
				"./assets/border-mobile.svg": "388f",
				"./assets/border.svg": "0ab7",
				"./assets/gradient.svg": "b8c4",
				"./assets/svg/VAT.svg": "5ac2",
				"./assets/svg/appgallery.svg": "77b7",
				"./assets/svg/appointment.svg": "08d3",
				"./assets/svg/appstore.svg": "f188",
				"./assets/svg/arrow-w.svg": "fcfb",
				"./assets/svg/arrow.svg": "d4d9",
				"./assets/svg/billing-payment.svg": "edbd",
				"./assets/svg/bulb.svg": "f5b0",
				"./assets/svg/cart.svg": "c0c3",
				"./assets/svg/cart2.svg": "0db1",
				"./assets/svg/check.svg": "4a24",
				"./assets/svg/connectivity.svg": "4305",
				"./assets/svg/contract.svg": "3d49",
				"./assets/svg/devices.svg": "e0b7",
				"./assets/svg/facebook.svg": "7e4b",
				"./assets/svg/fixed-services.svg": "37b5",
				"./assets/svg/googleplay.svg": "f851",
				"./assets/svg/help-appointment.svg": "3a7d",
				"./assets/svg/help-billing.svg": "853a",
				"./assets/svg/help-billing2.svg": "14d6",
				"./assets/svg/help-cart.svg": "b026",
				"./assets/svg/help-home.svg": "4036",
				"./assets/svg/help-mobile.svg": "0024",
				"./assets/svg/help-online.svg": "bb1f",
				"./assets/svg/help-roaming.svg": "4e7e",
				"./assets/svg/instagram.svg": "48d6",
				"./assets/svg/links.svg": "1a7b",
				"./assets/svg/local.svg": "9015",
				"./assets/svg/logo.svg": "a5f7",
				"./assets/svg/managed-services.svg": "6180",
				"./assets/svg/messenger.svg": "8cdf",
				"./assets/svg/no-contract.svg": "12f3",
				"./assets/svg/notification.svg": "720f",
				"./assets/svg/postpaid.svg": "f3e4",
				"./assets/svg/prepaid.svg": "31c3",
				"./assets/svg/roaming.svg": "3140",
				"./assets/svg/search.svg": "0a17",
				"./assets/svg/secure-checkout.svg": "17d7",
				"./assets/svg/services.svg": "d3cd",
				"./assets/svg/star.svg": "ec6f",
				"./assets/svg/twitter.svg": "5a0b",
				"./assets/svg/wegotyou-ar.svg": "12d3",
				"./assets/svg/wegotyou.svg": "d342",
				"./assets/svg/whatsapp.svg": "7db4",
				"./assets/svg/youtube.svg": "adde"
			};

			function a(t) {
				var e = n(t);
				return i(e)
			}

			function n(t) {
				if (!i.o(s, t)) {
					var e = new Error("Cannot find module '" + t + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				}
				return s[t]
			}
			a.keys = function () {
				return Object.keys(s)
			}, a.resolve = n, t.exports = a, a.id = "69d9"
		},
		"6c90": function (t, e, i) {
			"use strict";
			i.r(e);
			i("e260"), i("e6cf"), i("cca6"), i("a79d");
			var s = i("2b0e"),
				a = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "body"
					}, '', 1)
				},
				n = [],
				o = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "spotlighta"
					}, [t.spotlightData.data ? [t.spotlightData.data ? i("slick", {
						attrs: {
							id: "slick-spotlight",
							options: t.slickOptions
						},
						on: {
							lazyLoaded: t.handleLazyLoaded,
							swipe: t.handleSwipe
						}
					}, t._l(t.spotlightData.data, (function (e, s) {
						return i("div", {
							key: s + "key",
							staticClass: "spotlight-itema",
							attrs: {
								"data-text-color": e.textDesktopColor,
								"data-text-color-m": e.textMobileColor,
								"data-position-small": e.textMobilePosition,
								"data-border": e.borderColor,
								"data-border-mobile": e.borderColorMobile,
								"data-box": e.gradient
							},
							on: {
								mouseover: function (e) {
									t.hover = !0
								},
								mouseleave: function (e) {
									t.hover = !1
								}
							}
						}, [i("img", {
							staticClass: "spotlight-imagea show-for-medium",
							attrs: {
								"data-lazy": t.windowWidth > 767 ? e.backgroundImage : "",
								alt: e.title
							}
						}), i("img", {
							staticClass: "spotlight-imagea hide-for-medium",
							attrs: {
								"data-lazy": t.windowWidth < 767 ? e.backgroundImageMobile : "",
								alt: e.title
							}
						}), i("div", {
							staticClass: "grid-container"
						}, [e.onlineExclusiveStamp ? i("div", {
							staticClass: "online-exclusive show-for-medium",
							style: {
								backgroundImage: "url(" + e.onlineExclusiveStamp.desktop + ")"
							}
						}) : t._e(), e.onlineExclusiveStamp ? i("div", {
							staticClass: "online-exclusive hide-for-medium",
							style: {
								backgroundImage: "url(" + e.onlineExclusiveStamp.mobile + ")"
							}
						}) : t._e(), i("div", {
							staticClass: "spotlight-item-contenta"
						}, [e.buttonLink.length > 0 && "#" != e.buttonLink ? i("a", {
							staticClass: "spotlight-linka",
							attrs: {
								href: e.buttonLink,
								"aria-label": e.buttonTitle
							},
							on: {
								click: function (i) {
									return t.sendGA(e.ga.banner.eventCategory, e.ga.banner.eventAction, e.ga.banner.eventLabel, e.ga.banner.eventValue)
								}
							}
						}) : t._e(), i("div", {
							staticClass: "spotlight-item-content-innera"
						}, [e.onlineExclusiveBadge ? i("div", {
							class: "online-exclusive-badge " + e.onlineExclusiveBadge.backgroundColor
						}, [i("span", {
							directives: [{
								name: "lazy",
								rawName: "v-lazy:background-image",
								value: t.spriteURL + e.onlineExclusiveBadge.icon + "-usage",
								expression: "spriteURL + spot.onlineExclusiveBadge.icon + '-usage'",
								arg: "background-image"
							}],
							staticClass: "svg-bg-icon"
						}), i("p", [t._v(t._s(e.onlineExclusiveBadge.title))])]) : t._e(), i("p", {
							staticClass: "shoulder"
						}, [t._v(t._s(e.topHeader))]), e.tag ? [i("div", {
							class: "ducares-tag " + e.tag.backgroundColor
						}, [i("span", {
							directives: [{
								name: "lazy",
								rawName: "v-lazy:background-image",
								value: t.spriteURL + e.tag.icon + "-usage",
								expression: "spriteURL  + spot.tag.icon + '-usage'",
								arg: "background-image"
							}],
							staticClass: "svg-bg-icon"
						})])] : t._e(), e.promoImage ? i("img", {
							staticClass: "spotlight-promoImg",
							style: "height:" + e.promoImage.height + "px;",
							attrs: {
								src: e.promoImage.img
							}
						}) : t._e(), i("p", {
							staticClass: "headline1",
							domProps: {
								innerHTML: t._s(e.title)
							}
						}), i("p", {
							staticClass: "subtitle1",
							domProps: {
								innerHTML: t._s(e.subtitle)
							}
						}), i("div", {
							staticClass: "action"
						}, [i("a", {
							class: {
								btn: !0, white: "white" === e.buttonColor
							},
							attrs: {
								href: e.buttonLink
							},
							on: {
								click: function (i) {
									return t.sendGA(e.ga.banner.eventCategory, e.ga.banner.eventAction, e.ga.banner.eventLabel, e.ga.banner.eventValue)
								}
							}
						}, [t._v(t._s(e.buttonTitle))]), e.promoCode ? i("div", {
							staticClass: "spotlight-promo"
						}, [i("fieldset", [i("legend", [t._v(t._s(e.promoCode.name))]), t._v(" " + t._s(e.promoCode.code) + " ")])]) : t._e()])], 2)])])])
					})), 0) : t._e(), i("div", {
						staticClass: "spotlight-thumb",
						attrs: {
							"data-timing": t.spotlightData.autoplaySpeed
						}
					}, [i("div", {
						staticClass: "spotlight-thumb-inner"
					}, [i("div", {
						staticClass: "container"
					}, [t.spotlightData.data.length ? i("slick", {
						attrs: {
							id: "slick-thumb",
							options: t.slickOptions2
						}
					}, t._l(t.spotlightData.data, (function (e, s) {
						return i("div", {
							key: s + "thumbS",
							class: {
								"spotlight-thumb-item": !0
							},
							on: {
								click: function (i) {
									return t.sendGA(e.ga.thumb.eventCategory, e.ga.thumb.eventAction, e.ga.thumb.eventLabel, e.ga.thumb.eventValue)
								}
							}
						}, [i("p", {
							staticClass: "carousel-thumb-title"
						}, [t._v(t._s(e.spotlightTitle))]), i("p", {
							staticClass: "carousel-thumb-subtitle"
						}, [t._v(t._s(e.spotlightDescription))]), i("div", {
							class: {
								"spotlight-timer": !0, hover: t.hover, animation: !t.hover
							}
						})])
					})), 0) : t._e()], 1)])])] : [i("div", {
						staticClass: "spotlight-item",
						attrs: {
							"data-text-color": "white"
						}
					}), t._m(0)]], 2)
				},
				c = [function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "spotlight-thumb"
					}, [i("div", {
						staticClass: "spotlight-thumb-inner"
					}, [i("div", {
						staticClass: "container"
					})])])
				}],
				r = (i("d81d"), i("d3b7"), i("ddb0"), i("7ecd")),
				l = i("d722"),
				u = (i("b725"), i("da7c")),
				d = function (t) {
					return t.keys().map(t)
				},
				g = i("93d1");
			d(g);
			var p = {
					components: {
						Slick: r["a"]
					},
					name: "Spotlight",
					data: function () {
						return {
							spotlightData: [],
							windowWidth: 0,
							hover: !1,
							spriteURL: "/images/svg-sprite-icons.svg#icon-"
						}
					},
					computed: {
						slickOptions: function () {
							return {
								slidesToShow: 1,
								slidesToScroll: 1,
								arrows: !1,
								fade: !0,
								asNavFor: "#slick-thumb",
								autoplay: !0,
								autoplaySpeed: this.spotlightData.autoplaySpeed,
								pauseOnHover: !0,
								lazyLoad: "ondemand",
								rtl: "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir")
							}
						},
						slickOptions2: function () {
							return {
								slidesToShow: 4,
								slidesToScroll: 1,
								dots: !1,
								arrows: !1,
								infinite: !0,
								speed: 500,
								cssEase: "linear",
								focusOnSelect: !0,
								asNavFor: "#slick-spotlight",
								pauseOnHover: !0,
								rtl: "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir"),
								responsive: [{
									breakpoint: 1025,
									settings: {
										slidesToShow: 3
									}
								}, {
									breakpoint: 767,
									settings: {
										slidesToShow: 2
									}
								}]
							}
						}
					},
					mounted: function () {
						var t = this;
						l["a"].spotlight().then((function (e) {
							t.spotlightData = e
						})), this.$nextTick((function () {
							window.addEventListener("resize", this.getWindowWidth, {
								passive: !0
							}), this.getWindowWidth()
						}))
					},
					methods: {
						sendGA: function (t, e, i, s) {
							Object(u["a"])(t, e, i, s)
						},
						handleLazyLoaded: function (t, e, i) {
							i[0].classList.add("loaded")
						},
						handleSwipe: function () {
							this.sendGA("Navigation swipe", "Banners", "Hero banner")
						},
						getWindowWidth: function () {
							var t = document.querySelectorAll(".slick-current.slick-active .spotlight-image.hide-for-medium"),
								e = document.querySelectorAll(".slick-current.slick-active .spotlight-image.show-for-medium");
							this.windowWidth = document.documentElement.clientWidth, this.windowWidth > 691 ? (e.length && !e[0].src || e.length && void 0 === e[0].src) && setTimeout((function () {
								e[0].src = e[0].dataset.lazy
							}), 500) : (t.length && !t[0].src || t.length && void 0 === t[0].src) && setTimeout((function () {
								t[0].src = t[0].dataset.lazy
							}), 500)
						}
					},
					beforeDestroy: function () {
						window.removeEventListener("resize", this.getWindowWidth)
					}
				},
				v = p,
				f = (i("e64f"), i("d9fe"), i("2877")),
				m = Object(f["a"])(v, o, c, !1, null, "fbd2156e", null),
				h = m.exports,
				b = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("section", {
						staticClass: "quickLinks text-center"
					}, [i("div", {
						staticClass: "grid-container"
					}, [t.quickLinksData.title ? i("div", {
						staticClass: "grid-x grid-margin-x",
						staticStyle: {
							position: "relative"
						}
					}, [i("div", {
						staticClass: "cell border-mobile"
					}, [i("h1", {
						staticClass: "headline3 show-for-medium"
					}, [t._v(t._s(t.quickLinksData.title))]), i("p", {
						staticClass: "text-center hide-for-medium"
					}, [i("span", {
						staticClass: "subtitle2"
					}, [t._v(t._s(t.quickLinksData.titleMobile) + " ")]), t._v(t._s(t.quickLinksData.titleMobile2))])]), t._l(t.quickLinksData.content, (function (e, s) {
						return i("div", {
							key: s + e.title,
							staticClass: "cell small-12 medium-6 large-3"
						}, [i("div", {
							staticClass: "quickLinks-item"
						}, [i("a", {
							attrs: {
								href: e.url,
								"aria-label": e.title
							},
							on: {
								click: function (i) {
									return t.sendGA(e.ga.eventCategory, e.ga.eventAction, e.ga.eventLabel, e.ga.eventValue)
								}
							}
						}), i("svg-icon", {
							attrs: {
								"icon-name": e.svg.name,
								width: e.svg.width,
								height: e.svg.height
							}
						}), e.offer ? i("span", {
							class: "offer-desktop " + e.offer.color
						}, [t._v(t._s(e.offer.title))]) : t._e(), i("div", {
							staticClass: "quickLinks-text"
						}, [i("h2", {
							staticClass: "subtitle2"
						}, [t._v(" " + t._s(e.title) + " "), e.offer ? i("span", {
							class: "offer-mobile " + e.offer.color
						}, [t._v(t._s(e.offer.title))]) : t._e()]), i("h3", {
							staticClass: "body-text-small"
						}, [t._v(t._s(e.description))])])], 1)])
					}))], 2) : t._e()])])
				},
				C = [],
				k = i("0032"),
				y = {
					name: "QuickLinks",
					components: {
						SvgIcon: k["a"]
					},
					data: function () {
						return {
							quickLinksData: []
						}
					},
					mounted: function () {
						var t = this;
						l["a"].quickLinks().then((function (e) {
							t.quickLinksData = e
						}))
					},
					created: function () {
						var t = this;
						setTimeout((function () {
							return t.elementVisible = !1
						}), 1e3)
					},
					methods: {
						sendGA: function (t, e, i, s) {
							Object(u["a"])(t, e, i, s)
						}
					}
				},
				w = y,
				_ = (i("4bd6"), i("6942"), Object(f["a"])(w, b, C, !1, null, "0c2698fb", null)),
				x = _.exports,
				S = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return t.cardsData.title ? i("section", {
						staticClass: "cardsList",
						attrs: {
							"data-color": "light"
						}
					}, [i("div", {
						staticClass: "grid-container"
					}, [i("div", {
						staticClass: "grid-x grid-margin-x"
					}, [i("div", {
						staticClass: "cell"
					}, [i("p", {
						staticClass: "headline3"
					}, [t._v(t._s(t.cardsData.title))]), i("p", {
						staticClass: "subtitle3"
					}, [t._v(t._s(t.cardsData.subtitle))])])])]), i("div", {
						staticClass: "grid-container full-mobile"
					}, [t.cardsData.cards ? i("slick", {
						ref: "slick-cards",
						staticClass: "cardsList-list",
						attrs: {
							options: t.slickOptionsCards
						}
					}, [t._l(t.cardsData.cards, (function (e, s) {
						return [!0 === e.isAvailable ? i("div", {
							key: s + "key",
							staticClass: "cardsList-item"
						}, [i("div", {
							staticClass: "cardsList-item-line"
						}), i("div", {
							staticClass: "cardsList-content"
						}, [i("div", {
							staticClass: "cardsList-item-inner"
						}, [i("div", {
							staticClass: "cardsList-item-image"
						}, [e.category && "-" != e.category ? i("div", {
							staticClass: "cardsList-item-flag"
						}, [t._v(t._s(e.category))]) : t._e(), i("img", {
							directives: [{
								name: "lazy",
								rawName: "v-lazy",
								value: e.image,
								expression: "card.image"
							}],
							attrs: {
								alt: e.title,
								width: "120",
								height: "120"
							}
						}), e.colors.length > 0 && "-" != e.colors[0] ? i("div", {
							staticClass: "cardsList-item-colorsList"
						}, t._l(e.colors, (function (t, e) {
							return i("span", {
								key: e,
								class: {
									"cardsList-item-color": !0, border: "#fff" === t
								},
								style: {
									"background-color": t
								}
							})
						})), 0) : t._e()]), i("div", {
							staticClass: "cardsList-item-content"
						}, [i("h2", {
							staticClass: "card-title"
						}, [t._v(t._s(e.title))]), i("p", {
							staticClass: "card-body"
						}, [t._v(t._s(e.description))]), i("span", {
							staticClass: "card-plus"
						}, [t._v("+")]), i("h3", {
							staticClass: "card-title"
						}, [t._v(t._s(e.data) + " "), e.moreData ? i("span", [t._v(t._s(e.moreData))]) : t._e()]), i("p", {
							staticClass: "card-body",
							staticStyle: {
								"margin-bottom": "0"
							}
						}, [t._v(t._s(e.dataDescription))])])]), i("div", {
							staticClass: "cardsList-price text-center"
						}, [e.promo ? i("div", {
							class: "card-promo " + e.promo.color
						}, [i("div", {
							staticClass: "card-promo-inner"
						}, [i("p", [t._v(t._s(e.promo.title))])])]) : t._e(), i("p", {
							staticClass: "card-body black"
						}, [t._v(t._s(e.additionalText) + " "), i("span", {
							staticClass: "card-title"
						}, [t._v(" " + t._s(t.cardsData.currency) + " " + t._s(e.price))]), t._v(" " + t._s(t.cardsData.priceDetails) + " ")]), i("p", {
							staticClass: "card-fees"
						}, [i("span", {
							class: e.promo ? e.promo.color : ""
						}, [t._v(t._s(e.priceDetails) + " ")]), t._v(t._s(e.priceDetailsMode) + " ")]), i("a", {
							staticClass: "btn secondary",
							attrs: {
								href: e.buttonLink
							},
							on: {
								click: function (i) {
									return t.sendGA(e.ga.eventCategory, e.ga.eventAction, e.ga.eventNonInteraction, t.cardsData.currency, e.title, e.id, e.price, e.brand, e.ga.category, e.ga.variant, e.ga.position, e.ga.list)
								}
							}
						}, [t._v(" " + t._s(e.buttonText) + " ")])])])]) : t._e()]
					}))], 2) : t._e(), i("div", {
						staticClass: "cardsList-info"
					}, [i("span", {
						directives: [{
							name: "lazy",
							rawName: "v-lazy:background-image",
							value: t.spriteURL + "secure-checkout-usage",
							expression: "spriteURL +'secure-checkout-usage'",
							arg: "background-image"
						}],
						staticClass: "svg-bg-icon"
					}), t._v(" " + t._s(t.cardsData.info) + " ")])], 1), i("script", {
						attrs: {
							type: "application/ld+json"
						},
						domProps: {
							innerHTML: t._s(t.jsonld)
						}
					})]) : t._e()
				},
				L = [],
				T = (i("a4d3"), i("e01a"), i("4160"), i("159b"), function (t, e, i, s, a, n, o, c, r, l, u, d) {
					window.dataLayer && window.dataLayer.push({
						event: "eventTracker",
						eventCategory: t,
						eventAction: e,
						eventNonInteraction: i,
						ecommerce: {
							currencyCode: s,
							click: {
								actionField: {
									list: d
								},
								products: [{
									name: a,
									id: n,
									price: o,
									brand: c,
									category: r,
									Variant: l,
									position: u
								}]
							}
						}
					})
				}),
				A = {
					name: "ShopCards",
					components: {
						Slick: r["a"]
					},
					data: function () {
						return {
							jsonld: {},
							cardsData: [],
							spriteURL: "/images/svg-sprite-icons.svg#icon-",
							slickOptionsCards: {
								slidesToShow: 3.1,
								arrows: !1,
								slidesToScroll: 1,
								dots: !0,
								infinite: !1,
								rtl: "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir"),
								responsive: [{
									breakpoint: 1057,
									settings: {
										slidesToShow: 2,
										slidesToScroll: 2
									}
								}, {
									breakpoint: 660,
									settings: {
										slidesToShow: 1.1,
										slidesToScroll: 1
									}
								}]
							}
						}
					},
					mounted: function () {
						var t = this;
						l["a"].shopCards().then((function (e) {
							t.cardsData = e, t.fireGAOnLoad(e), t.jsonLd(e)
						}))
					},
					methods: {
						sendGA: function (t, e, i, s, a, n, o, c, r, l, u, d, g) {
							T(t, e, i, s, a, n, o, c, r, l, u, d, g)
						},
						jsonLd: function (t) {
							var e = [],
								i = {
									"@context": "https://schema.org",
									"@type": "ItemList",
									numberOfItems: t.cards.length,
									itemListElement: e
								};
							t.cards.forEach((function (t, i) {
								e.push({
									"@type": "ListItem",
									position: i + 1,
									item: {
										"@type": "Product",
										category: t.ga.category,
										name: t.title,
										description: t.dataDescription + " " + t.description + " " + t.data,
										id: t.id,
										brand: t.brand,
										url: t.buttonLink,
										image: t.image,
										sku: i + 1,
										offers: {
											"@type": "Offer",
											price: t.price,
											availability: t.isAvailable ? "InStock" : "SoldOut",
											priceCurrency: "AED",
											image: t.image,
											priceValidUntil: "",
											seller: "du"
										}
									}
								})
							})), this.jsonld = i
						},
						fireGAOnLoad: function (t) {
							var e = [];
							window.dataLayer && (t.cards.forEach((function (t) {
								e.push({
									name: t.title,
									id: t.id,
									price: t.price,
									brand: t.brand,
									category: t.ga.category,
									list: t.ga.list,
									Variant: t.ga.variant,
									position: t.ga.position
								})
							})), window.dataLayer.push({
								event: "eventTracker",
								eventCategory: t.ga.eventCategory,
								eventAction: t.ga.eventAction,
								eventLabel: t.ga.eventLabel,
								eventNonInteraction: t.ga.eventNonInteraction,
								ecommerce: {
									currencyCode: t.currency,
									impressions: e
								}
							}))
						}
					}
				},
				B = A,
				H = (i("d234"), Object(f["a"])(B, S, L, !1, null, null, null)),
				V = H.exports,
				O = function () {
					var t = this,
						e = t.$createElement,
						s = t._self._c || e;
					return t.dataPlanSuggestion.title ? s("section", {
						staticClass: "planSelection",
						attrs: {
							"data-color": "light"
						}
					}, [s("div", {
						directives: [{
							name: "lazy",
							rawName: "v-lazy:background-image",
							value: i("744e"),
							expression: "require('@/assets/background-gradient-hp.jpg')",
							arg: "background-image"
						}],
						staticClass: "show-for-medium planSelection-bg"
					}), s("div", {
						directives: [{
							name: "lazy",
							rawName: "v-lazy:background-image",
							value: i("be3b"),
							expression: "require('@/assets/background-gradient-hp-mob.jpg')",
							arg: "background-image"
						}],
						staticClass: "hide-for-medium planSelection-bg"
					}), s("div", {
						staticClass: "grid-container"
					}, [s("div", {
						staticClass: "grid-x grid-margin-x"
					}, [s("div", {
						staticClass: "cell small-12 large-3"
					}, [s("div", {
						staticClass: "planSelection-title"
					}, [s("h2", {
						staticClass: "headline3"
					}, [t._v(t._s(t.dataPlanSuggestion.title))]), s("h3", {
						staticClass: "subtitle3",
						domProps: {
							innerHTML: t._s(t.dataPlanSuggestion.subtitle)
						}
					})])]), s("div", {
						staticClass: "cell small-12 large-9"
					}, [s("div", {
						staticClass: "planSelection-box"
					}, [s("transition", {
						attrs: {
							name: "fade",
							mode: "out-in"
						}
					}, ["step1" === t.activeStep ? s("div", {
						key: "1",
						staticClass: "planSelection-steps"
					}, [s("div", {
						staticClass: "content"
					}, [s("p", {
						staticClass: "subtitle1"
					}, [t._v(t._s(t.dataPlanSuggestion.step1.title))]), s("ul", {
						staticClass: "planSelection-box-data"
					}, t._l(t.dataPlanSuggestion.step1.options, (function (e, i) {
						return s("li", {
							key: i + e.title,
							class: {
								active: t.step1Active == e.url
							},
							on: {
								click: function (i) {
									return t.selectData(e.ga.eventCategory, e.ga.eventAction, e.ga.eventLabel, e.ga.eventValue, e.url)
								}
							}
						}, [t._v(" " + t._s(e.title) + " ")])
					})), 0), t._l(t.dataPlanSuggestion.step1.options, (function (e, i) {
						return [t.step1Active === e.url ? s("ul", {
							key: i,
							staticClass: "planSelection-box-description"
						}, t._l(e.content, (function (i, a) {
							return s("li", {
								key: a,
								domProps: {
									innerHTML: t._s(e.content[a])
								}
							})
						})), 0) : t._e()]
					}))], 2), s("div", {
						staticClass: "action"
					}, [s("span", {
						staticClass: "planSelection-box-indicator"
					}, [t._v(t._s(t.dataPlanSuggestion.step1.stepIndicator))]), s("a", {
						staticClass: "btn",
						attrs: {
							href: "#"
						},
						on: {
							click: function (e) {
								return e.preventDefault(), t.changeStep(t.dataPlanSuggestion.step1.ga.eventCategory, t.dataPlanSuggestion.step1.ga.eventAction, t.dataPlanSuggestion.step1.ga.eventLabel, t.dataPlanSuggestion.step1.ga.eventValue, "step2")
							}
						}
					}, [t._v(t._s(t.dataPlanSuggestion.step1.button))])])]) : s("div", {
						key: "2",
						staticClass: "planSelection-steps"
					}, [s("div", {
						staticClass: "content"
					}, [s("p", {
						staticClass: "subtitle1"
					}, [t._v(t._s(t.dataPlanSuggestion.step2.title))]), s("ul", {
						staticClass: "planSelection-box-type"
					}, t._l(t.dataPlanSuggestion.step2.options, (function (e, i) {
						return s("li", {
							key: i + e.url,
							class: {
								active: t.step2Active == e.url
							},
							on: {
								click: function (i) {
									return t.selectType(e.ga.eventCategory, e.ga.eventAction, e.ga.eventLabel, e.ga.eventValue, e.url)
								}
							}
						}, [s("svg-icon", {
							attrs: {
								"icon-name": e.svg,
								width: "16",
								height: "12"
							}
						}), t._v(" " + t._s(e.title) + " ")], 1)
					})), 0)]), s("div", {
						staticClass: "action"
					}, [s("span", {
						staticClass: "planSelection-box-indicator"
					}, [t._v(t._s(t.dataPlanSuggestion.step2.stepIndicator))]), s("div", {
						staticClass: "action-inner"
					}, [s("a", {
						staticClass: "planSelection-back",
						attrs: {
							href: "#"
						},
						on: {
							click: function (e) {
								return e.preventDefault(), t.changeStep(t.dataPlanSuggestion.step2.ga.back.eventCategory, t.dataPlanSuggestion.step2.ga.back.eventAction, t.dataPlanSuggestion.step2.ga.back.eventLabel, t.dataPlanSuggestion.step2.ga.back.eventValue, "step1")
							}
						}
					}, [s("span", {
						staticClass: "svg-bg-icon",
						style: {
							"background-image": "url(" + t.spriteURL + "arrow-w-usage)",
							"mask-image": "url(" + t.spriteURL + "arrow-usage)"
						}
					}), t._v(" " + t._s(t.dataPlanSuggestion.step2.back) + " ")]), s("a", {
						staticClass: "btn",
						attrs: {
							href: t.dataPlanSuggestion.step2.url + "?data=" + t.step1Active + "&minutes=" + t.step2Active + "&contract=" + t.step3Active
						},
						on: {
							click: function (e) {
								return t.sendGA(t.dataPlanSuggestion.step2.ga.action.eventCategory, t.dataPlanSuggestion.step2.ga.action.eventAction, t.dataPlanSuggestion.step2.ga.action.eventLabel, t.dataPlanSuggestion.step2.ga.action.eventValue)
							}
						}
					}, [t._v(t._s(t.dataPlanSuggestion.step2.button))])])])])])], 1)])])])]) : t._e()
				},
				E = [],
				D = {
					name: "PlansSuggestion",
					components: {
						SvgIcon: k["a"]
					},
					data: function () {
						return {
							dataPlanSuggestion: [],
							step1Active: "4GB",
							step2Active: "flexible",
							step3Active: "medium",
							activeStep: "step1",
							show: !0,
							spriteURL: "/images/svg-sprite-icons.svg#icon-"
						}
					},
					mounted: function () {
						var t = this;
						l["a"].planSuggestion().then((function (e) {
							t.dataPlanSuggestion = e
						}))
					},
					methods: {
						selectData: function (t, e, i, s, a) {
							this.step1Active = a, Object(u["a"])(t, e, i, s)
						},
						selectType: function (t, e, i, s, a) {
							this.step2Active = a, Object(u["a"])(t, e, i, s)
						},
						changeStep: function (t, e, i, s, a) {
							this.activeStep = a, Object(u["a"])(t, e, i, s)
						},
						sendGA: function (t, e, i, s) {
							Object(u["a"])(t, e, i, s)
						}
					}
				},
				M = D,
				j = (i("b939"), Object(f["a"])(M, O, E, !1, null, null, null)),
				I = j.exports,
				G = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return t.dataHelp.title ? i("section", {
						staticClass: "helpList"
					}, [i("div", {
						staticClass: "grid-container"
					}, [i("div", {
						staticClass: "grid-x grid-margin-x"
					}, [i("div", {
						staticClass: "cell",
						staticStyle: {
							position: "relative"
						}
					}, [i("h2", {
						staticClass: "headline3"
					}, [t._v(t._s(t.dataHelp.title))]), i("h3", {
						staticClass: "subtitle3"
					}, [t._v(t._s(t.dataHelp.subtitle))])])])]), i("div", {
						staticClass: "grid-container"
					}, [i("div", {
						staticClass: " helpList-list"
					}, [t.dataHelp.cards.length ? i("slick", {
						attrs: {
							id: "slick-help",
							options: t.slickHelp
						}
					}, t._l(t.dataHelp.cards, (function (e, s) {
						return i("div", {
							key: s + "card",
							staticClass: "helpList-item",
							on: {
								click: function (i) {
									return t.sendGA(e.ga.eventCategory, e.ga.eventAction, e.ga.eventLabel, e.ga.eventValue)
								}
							}
						}, [i("svg-icon", {
							attrs: {
								"icon-name": e.svg,
								width: "40",
								height: "40"
							}
						}), i("p", {
							staticClass: "helpList-item-title"
						}, [t._v(t._s(e.title))]), i("div", {
							staticClass: "helpList-item-inner"
						})], 1)
					})), 0) : t._e()], 1)]), i("div", {
						staticClass: "grid-container"
					}, [i("div", {
						staticClass: "grid-x grid-margin-x"
					}, [i("div", {
						staticClass: "cell",
						staticStyle: {
							position: "relative"
						}
					}, [t.dataHelp.cards.length ? i("slick", {
						attrs: {
							id: "slick-help-content",
							options: t.slickHelpContent
						}
					}, t._l(t.dataHelp.cards, (function (e, s) {
						return i("div", {
							key: s + "card1"
						}, [i("ul", {
							staticClass: "helpList-links"
						}, t._l(e.links, (function (e, s) {
							return i("li", {
								key: s + "card2"
							}, [i("a", {
								attrs: {
									href: e.url
								},
								on: {
									click: function (i) {
										return t.sendGA(e.ga.eventCategory, e.ga.eventAction, e.ga.eventLabel, e.ga.eventValue)
									}
								}
							}, [t._v(t._s(e.title))])])
						})), 0)])
					})), 0) : t._e()], 1)])]), i("div", {
						staticClass: "helpList-footer"
					}, [i("div", {
						staticClass: "grid-container"
					}, [i("div", {
						staticClass: "grid-x grid-margin-x"
					}, [i("div", {
						staticClass: "cell"
					}, [i("div", {
						staticClass: "helpList-footer-inner"
					}, [i("a", {
						staticClass: "btn border",
						attrs: {
							href: t.dataHelp.footer.buttonUrl
						},
						on: {
							click: function (e) {
								return t.sendGA(t.dataHelp.footer.ga.eventCategory, t.dataHelp.footer.ga.eventAction, t.dataHelp.footer.ga.eventLabel, t.dataHelp.footer.ga.eventValue)
							}
						}
					}, [t._v(t._s(t.dataHelp.footer.button))]), i("div", {
						staticClass: "helpList-footer-social"
					}, [i("p", [t._v(t._s(t.dataHelp.footer.description))]), t._l(t.dataHelp.footer.links, (function (e, s) {
						return [i("a", {
							key: s + "icon",
							staticClass: "helpList-footer-link",
							attrs: {
								target: "_blank",
								rel: "noreferrer",
								href: e.url
							},
							on: {
								click: function (i) {
									return t.sendGA(e.ga.eventCategory, e.ga.eventAction, e.ga.eventLabel, e.ga.eventValue)
								}
							}
						}, [i("svg-icon", {
							attrs: {
								"icon-name": e.icon.title,
								width: e.icon.width,
								height: e.icon.height
							}
						}), t._v(" " + t._s(e.title) + " ")], 1)]
					}))], 2)])])])])])]) : t._e()
				},
				z = [],
				N = {
					name: "HelpSection",
					components: {
						Slick: r["a"],
						SvgIcon: k["a"]
					},
					data: function () {
						return {
							dataHelp: [],
							slickHelp: {
								slidesToShow: 4.8,
								slidesToScroll: 1,
								dots: !1,
								arrows: !1,
								autoplay: !1,
								speed: 500,
								infinite: !0,
								cssEase: "linear",
								asNavFor: "#slick-help-content",
								focusOnSelect: !0,
								swipeToSlide: "rtl" !== document.getElementsByTagName("html")[0].getAttribute("dir"),
								rtl: "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir"),
								responsive: [{
									breakpoint: 1024,
									settings: {
										slidesToShow: 3.5
									}
								}, {
									breakpoint: 800,
									settings: {
										slidesToShow: 2
									}
								}, {
									breakpoint: 600,
									settings: {
										slidesToShow: 1,
										centerMode: !0
									}
								}]
							},
							slickHelpContent: {
								slidesToShow: 1,
								slidesToScroll: 1,
								dots: !1,
								arrows: !1,
								autoplay: !1,
								speed: 500,
								infinite: !0,
								focusOnSelect: !0,
								autoplaySpeed: 4e3,
								pauseOnHover: !0,
								fade: !0,
								asNavFor: "#slick-help",
								rtl: "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir")
							}
						}
					},
					mounted: function () {
						var t = this;
						l["a"].helpData().then((function (e) {
							t.dataHelp = e
						}))
					},
					methods: {
						sendGA: function (t, e, i, s) {
							Object(u["a"])(t, e, i, s)
						}
					}
				},
				$ = N,
				U = (i("a9c7"), Object(f["a"])($, G, z, !1, null, null, null)),
				P = U.exports,
				R = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return t.dataBanner.title ? i("section", {
						directives: [{
							name: "lazy-container",
							rawName: "v-lazy-container",
							value: {
								selector: "div"
							},
							expression: "{ selector: 'div' }"
						}],
						staticClass: "banner"
					}, [i("div", {
						staticClass: "banner-inner",
						attrs: {
							"data-text-color": t.dataBanner.textDesktopColor,
							"data-text-color-m": t.dataBanner.textMobileColor,
							"data-position-small": t.dataBanner.textMobilePosition,
							"data-border": t.dataBanner.borderColor,
							"data-border-mobile": t.dataBanner.borderColorMobile,
							"data-box": t.dataBanner.gradient
						}
					}, [i("div", {
						directives: [{
							name: "lazy",
							rawName: "v-lazy:background-image",
							value: t.dataBanner.backgroundImage,
							expression: "dataBanner.backgroundImage",
							arg: "background-image"
						}],
						staticClass: "banner-image show-for-medium",
						attrs: {
							height: "100%"
						}
					}), i("div", {
						directives: [{
							name: "lazy",
							rawName: "v-lazy:background-image",
							value: t.dataBanner.backgroundImageMobile,
							expression: "dataBanner.backgroundImageMobile",
							arg: "background-image"
						}],
						staticClass: "banner-image hide-for-medium",
						attrs: {
							height: "100%"
						}
					}), i("div", {
						staticClass: "grid-container"
					}, [t.dataBanner.onlineExclusive ? i("div", {
						staticClass: "online-exclusive show-for-medium",
						style: {
							backgroundImage: "url(" + t.dataBanner.onlineExclusive.desktop + ")"
						}
					}) : t._e(), t.dataBanner.onlineExclusive ? i("div", {
						staticClass: "online-exclusive hide-for-medium",
						style: {
							backgroundImage: "url(" + t.dataBanner.onlineExclusive.mobile + ")"
						}
					}) : t._e(), i("div", {
						staticClass: "banner-item"
					}, [i("a", {
						staticClass: "hidden-btn",
						attrs: {
							href: t.dataBanner.buttonLink,
							"aria-label": t.dataBanner.buttonTitle
						},
						on: {
							click: function (e) {
								return t.sendGA(t.dataBanner.ga.eventCategory, t.dataBanner.ga.eventAction, t.dataBanner.ga.eventLabel, t.dataBanner.ga.eventValue)
							}
						}
					}), i("div", {
						staticClass: "banner-item-content"
					}, [i("p", {
						staticClass: "shoulder"
					}, [t._v(t._s(t.dataBanner.topHeader))]), i("h2", {
						staticClass: "headline2"
					}, [t._v(t._s(t.dataBanner.title))]), i("h3", {
						staticClass: "description1"
					}, [t._v(t._s(t.dataBanner.subtitle))]), i("a", {
						staticClass: "btn",
						attrs: {
							href: t.dataBanner.buttonLink
						},
						on: {
							click: function (e) {
								return t.sendGA(t.dataBanner.ga.eventCategory, t.dataBanner.ga.eventAction, t.dataBanner.ga.eventLabel, t.dataBanner.ga.eventValue)
							}
						}
					}, [t._v(" " + t._s(t.dataBanner.buttonTitle) + " ")])])])])])]) : t._e()
				},
				F = [],
				q = {
					name: "Banner",
					data: function () {
						return {
							dataBanner: []
						}
					},
					mounted: function () {
						var t = this;
						l["a"].bannerData().then((function (e) {
							t.dataBanner = e
						}))
					},
					methods: {
						sendGA: function (t, e, i, s) {
							Object(u["a"])(t, e, i, s)
						}
					}
				},
				W = q,
				Q = (i("53ef"), Object(f["a"])(W, R, F, !1, null, null, null)),
				J = Q.exports,
				X = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return t.dataLinks.title ? i("section", {
						staticClass: "customerLinks"
					}, [i("div", {
						staticClass: "grid-container"
					}, [i("div", {
						staticClass: "grid-x",
						staticStyle: {
							position: "relative"
						}
					}, [i("div", {
						staticClass: "cell"
					}, [i("h2", {
						staticClass: "headline3"
					}, [t._v(t._s(t.dataLinks.title))]), i("h3", {
						staticClass: "subtitle3"
					}, [t._v(t._s(t.dataLinks.subtitle))])])])]), i("div", {
						staticClass: "grid-container full-mobile"
					}, [i("div", {
						staticClass: "grid-x"
					}, [t._l(t.dataLinks.cards, (function (e, s) {
						return [e.isActive ? i("div", {
							key: s + "card",
							staticClass: "cell medium-6"
						}, [i("div", {
							class: "customerLinks-card " + e.animation
						}, [i("a", {
							staticClass: "customerLinks-card-link",
							attrs: {
								href: e.url,
								"aria-label": e.link
							},
							on: {
								click: function (i) {
									return t.sendGA(e.ga.eventCategory, e.ga.eventAction, e.ga.eventLabel, e.ga.eventValue)
								}
							}
						}), i("div", {
							directives: [{
								name: "lazy",
								rawName: "v-lazy:background-image",
								value: e.image,
								expression: "card.image",
								arg: "background-image"
							}],
							staticClass: "customerLinks-card-image show-for-medium",
							attrs: {
								height: "100%"
							}
						}), i("div", {
							directives: [{
								name: "lazy",
								rawName: "v-lazy:background-image",
								value: e.imageMobile,
								expression: "card.imageMobile",
								arg: "background-image"
							}],
							staticClass: "customerLinks-card-image hide-for-medium",
							attrs: {
								height: "100%"
							}
						}), i("div", {
							staticClass: "customerLinks-card-content"
						}, [i("h4", {
							staticClass: "title"
						}, [t._v(t._s(e.title))]), i("a", {
							staticClass: "card-link",
							attrs: {
								href: e.url
							},
							on: {
								click: function (i) {
									return t.sendGA(e.ga.eventCategory, e.ga.eventAction, e.ga.eventLabel, e.ga.eventValue)
								}
							}
						}, [t._v(" " + t._s(e.link) + " "), i("svg-icon", {
							attrs: {
								"icon-name": "arrow",
								width: "16",
								height: "12"
							}
						})], 1)])])]) : t._e()]
					}))], 2)])]) : t._e()
				},
				Z = [],
				K = {
					name: "CustomerLinks",
					components: {
						SvgIcon: k["a"]
					},
					data: function () {
						return {
							dataLinks: [],
							spriteURL: "/images/svg-sprite-icons.svg#icon-"
						}
					},
					mounted: function () {
						var t = this;
						l["a"].customerLinksData().then((function (e) {
							t.dataLinks = e
						}))
					},
					methods: {
						sendGA: function (t, e, i, s) {
							Object(u["a"])(t, e, i, s)
						}
					}
				},
				Y = K,
				tt = (i("b466"), Object(f["a"])(Y, X, Z, !1, null, null, null)),
				et = tt.exports,
				it = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return t.dataAddLife.title ? i("section", {
						staticClass: "addLife"
					}, [i("div", {
						staticClass: "grid-container"
					}, [i("div", {
						staticClass: "grid-x grid-margin-x"
					}, [i("div", {
						staticClass: "cell",
						staticStyle: {
							position: "relative"
						}
					}, [i("h2", {
						staticClass: "headline3"
					}, [t._v(t._s(t.dataAddLife.title))]), i("h3", {
						staticClass: "subtitle3"
					}, [t._v(t._s(t.dataAddLife.subtitle))])])])]), i("div", {
						staticClass: "grid-container full-mobile"
					}, [t.dataAddLife.cards ? i("slick", {
						attrs: {
							id: "slick-addlife",
							options: t.slickAddlife
						}
					}, t._l(t.dataAddLife.cards, (function (e, s) {
						return i("div", {
							key: s + "card223",
							staticClass: "addLife-card"
						}, [i("div", {
							directives: [{
								name: "lazy",
								rawName: "v-lazy:background-image",
								value: e.image,
								expression: "card.image",
								arg: "background-image"
							}],
							staticClass: "addLife-card-image",
							attrs: {
								title: e.title,
								height: "100%"
							}
						}), i("div", {
							staticClass: "addLife-card-content"
						}, [i("div", [i("h4", {
							staticClass: "subtitle1"
						}, [t._v(t._s(e.title))]), i("p", {
							staticClass: "link"
						}, [t._v(t._s(e.description))])]), i("a", {
							staticClass: "card-link",
							attrs: {
								href: e.url
							},
							on: {
								click: function (i) {
									return t.sendGA(e.ga.eventCategory, e.ga.eventAction, e.ga.eventLabel, e.ga.eventValue)
								}
							}
						}, [t._v(" " + t._s(e.link) + " "), i("svg-icon", {
							attrs: {
								"icon-name": "arrow",
								width: "16",
								height: "12"
							}
						})], 1)])])
					})), 0) : t._e()], 1)]) : t._e()
				},
				st = [],
				at = {
					name: "AddLife",
					components: {
						Slick: r["a"],
						SvgIcon: k["a"]
					},
					data: function () {
						return {
							dataAddLife: [],
							spriteURL: "/images/svg-sprite-icons.svg#icon-",
							slickAddlife: {
								slidesToShow: 3,
								slidesToScroll: 1,
								dots: !0,
								arrows: !1,
								autoplay: !1,
								speed: 500,
								infinite: !0,
								cssEase: "linear",
								autoplaySpeed: 4e3,
								pauseOnHover: !0,
								centerMode: !0,
								focusOnSelect: !0,
								swipeToSlide: "rtl" !== document.getElementsByTagName("html")[0].getAttribute("dir"),
								rtl: "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir"),
								responsive: [{
									breakpoint: 1024,
									settings: {
										slidesToShow: 2,
										centerMode: !0
									}
								}, {
									breakpoint: 767,
									settings: {
										slidesToShow: 1,
										centerMode: !0,
										centerPadding: "20px"
									}
								}]
							}
						}
					},
					mounted: function () {
						var t = this;
						l["a"].addLifeData().then((function (e) {
							t.dataAddLife = e
						}))
					},
					methods: {
						sendGA: function (t, e, i, s) {
							Object(u["a"])(t, e, i, s)
						}
					}
				},
				nt = at,
				ot = (i("ceec"), Object(f["a"])(nt, it, st, !1, null, null, null)),
				ct = ot.exports,
				rt = i("fd2d"),
				lt = i("cf38"),
				ut = {
					name: "App",
					components: {
						// Spotlight: h,
						// QuickLinks: x,
						// ShopCards: V,
						// PlansSuggestion: I,
						// HelpSection: P,
						// Banner: J,
						// CustomerLinks: et,
						// AddLife: ct,
						// Footer: rt["a"],
						// Gradients: lt["a"]
					}
				},
				dt = ut,
				gt = (i("d1fb"), Object(f["a"])(dt, a, n, !1, null, null, null)),
				pt = gt.exports,
				vt = i("bc3a"),
				ft = i.n(vt),
				mt = i("a7fe"),
				ht = i.n(mt),
				bt = i("caf9"),
				Ct = i("9d75"),
				kt = i.n(Ct);
			i("1354"), i("6395"), i("fce9");
			s["a"].use(kt.a, ht.a, ft.a), s["a"].use(bt["a"], {
				lazyComponent: !0
			}), s["a"].config.productionTip = !1, new s["a"]({
				render: function (t) {
					return t(pt)
				}
			}).$mount("#app")
		},
		"6f25": function (t, e, i) {},
		7164: function (t, e, i) {
			"use strict";
			var s = i("e958"),
				a = i.n(s);
			a.a
		},
		"720f": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-notification-usage",
				viewBox: "0 0 28 30",
				url: i.p + "images/svg-sprite-icons.svg#icon-notification-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"72dd": function (t, e, i) {
			t.exports = i.p + "img/not-found.png"
		},
		"744e": function (t, e, i) {
			t.exports = i.p + "img/background-gradient-hp.jpg"
		},
		7503: function (t, e, i) {},
		"764a": function (t, e, i) {
			"use strict";
			var s = i("fb75"),
				a = i.n(s);
			a.a
		},
		"77b7": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-appgallery-usage",
				viewBox: "0 0 199 60",
				url: i.p + "images/svg-sprite-icons.svg#icon-appgallery-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"7db4": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-whatsapp-usage",
				viewBox: "0 0 22 22",
				url: i.p + "images/svg-sprite-icons.svg#icon-whatsapp-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"7e4b": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-facebook-usage",
				viewBox: "0 0 32 32",
				url: i.p + "images/svg-sprite-icons.svg#icon-facebook-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"853a": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-help-billing-usage",
				viewBox: "0 0 30 40",
				url: i.p + "images/svg-sprite-icons.svg#icon-help-billing-usage",
				toString: function () {
					return this.url
				}
			}
		},
		8956: function (t, e, i) {
			"use strict";
			var s = i("9b33"),
				a = i.n(s);
			a.a
		},
		"8cdf": function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-messenger-usage",
				viewBox: "0 0 22 23",
				url: i.p + "images/svg-sprite-icons.svg#icon-messenger-usage",
				toString: function () {
					return this.url
				}
			}
		},
		9015: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-local-usage",
				viewBox: "0 0 26 26",
				url: i.p + "images/svg-sprite-icons.svg#icon-local-usage",
				toString: function () {
					return this.url
				}
			}
		},
		"93d1": function (t, e) {
			function i(t) {
				var e = new Error("Cannot find module '" + t + "'");
				throw e.code = "MODULE_NOT_FOUND", e
			}
			i.keys = function () {
				return []
			}, i.resolve = i, t.exports = i, i.id = "93d1"
		},
		"9aad": function (t, e, i) {},
		"9b33": function (t, e, i) {},
		a103: function (t, e, i) {},
		a1b8: function (t, e, i) {},
		a231: function (t, e, i) {},
		a4aa: function (t, e, i) {
			"use strict";
			var s = i("33ff"),
				a = i.n(s);
			a.a
		},
		a5f7: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-logo-usage",
				viewBox: "0 0 50 50",
				url: i.p + "images/svg-sprite-icons.svg#icon-logo-usage",
				toString: function () {
					return this.url
				}
			}
		},
		a9c7: function (t, e, i) {
			"use strict";
			var s = i("6f25"),
				a = i.n(s);
			a.a
		},
		a9d6: function (t, e, i) {},
		adde: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-youtube-usage",
				viewBox: "0 0 32 32",
				url: i.p + "images/svg-sprite-icons.svg#icon-youtube-usage",
				toString: function () {
					return this.url
				}
			}
		},
		afc7: function (t, e, i) {
			"use strict";
			i.r(e);
			i("e260"), i("e6cf"), i("cca6"), i("a79d");
			var s = i("2b0e"),
				a = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "body"
					}, [i("BannerSearch"), i("TopicView", {
						attrs: {
							content: t.contentMisc.helpTopics
						}
					}), i("BluChat"), i("GetHelp"), i("Footer"), i("Gradients")], 1)
				},
				n = [],
				o = i("e7d5"),
				c = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("section", {
						staticClass: "topicView"
					}, [i("div", {
						staticClass: "topicView-inner"
					}, [i("div", {
						staticClass: "grid-container narrow"
					}, [i("div", {
						staticClass: "grid-x"
					}, [i("div", {
						staticClass: "cell small-12"
					}, [i("div", {
						staticClass: "breadcrumb"
					}, [t.topicDetails.topic && t.content ? i("ul", {
						staticClass: "breadcrumb-list"
					}, [i("li", {
						staticClass: "breadcrumb-item"
					}, [i("a", {
						staticClass: "link du-magenta",
						attrs: {
							href: t.content.helpURL
						}
					}, [t._v(t._s(this.helpText))])]), null != t.parentTopic && t.content ? i("li", {
						staticClass: "breadcrumb-item"
					}, [i("a", {
						staticClass: "link du-magenta",
						attrs: {
							href: t.content.topicsURL + t.parentTopicId + t.content.language
						}
					}, [t._v(t._s(t.parentTopic))])]) : t._e(), i("li", {
						staticClass: "breadcrumb-item"
					}, [i("a", [t._v(t._s(t.topicDetails.topic.name))])])]) : t._e()]), i("div", {
						staticClass: "align-center"
					}, [t.topicDetails.topic && t.content ? i("div", [i("p", {
						staticClass: "headline2"
					}, [t._v(t._s(t.topicDetails.topic.name))]), t.checkLength() ? i("ul", {
						staticClass: "topicView-list"
					}, [i("li", {
						staticClass: "topicView-item active"
					}, [i("span", {
						staticClass: "topicView-item-link subtitle2"
					}, [t._v(t._s(t.topicDetails.topic.name))]), i("div", {
						staticClass: "topicView-item-list active"
					}, [i("ol", t._l(t.subTopics, (function (e, s) {
						return i("li", {
							key: s + "subtopic1"
						}, [i("a", {
							staticClass: "link black underline",
							attrs: {
								href: t.content.articleURL + e.alternateId + t.content.language
							},
							on: {
								click: function (i) {
									return t.sendGA("Help & Support", "Article", e.name, 0)
								}
							}
						}, [t._v(" " + t._s(e.name) + " ")])])
					})), 0)]), i("span", {
						staticClass: "topicView-item-icon"
					})])]) : i("ul", {
						staticClass: "topicView-list"
					}, t._l(t.topicDetails.topicTree, (function (e, s) {
						return i("li", {
							key: s + "topic",
							class: {
								"topicView-item": !0, active: t.isActive === e.topic.id
							},
							attrs: {
								"data-id": e.topic.id
							}
						}, [i("span", {
							staticClass: "topicView-item-link subtitle2",
							on: {
								click: function (i) {
									return t.getSubtopic(e.topic.id, e.topic.name)
								}
							}
						}, [t._v(t._s(e.topic.name))]), i("div", {
							class: {
								"topicView-item-list": !0, active: t.isActive === e.topic.id
							}
						}, [i("ol", [t.subTopics.length > 0 ? [t._l(t.subTopics, (function (s) {
							return [s.id === e.topic.id ? t._l(s.elements, (function (e, s) {
								return i("li", {
									key: s + "subtopic2"
								}, [e.topic ? [i("a", {
									staticClass: "link black underline 2",
									attrs: {
										href: t.content.topicsURL + e.topic.id + t.content.language + "&ptn=" + t.topicDetails.topic.name + "&ptid=" + t.topicDetails.topic.id
									},
									on: {
										click: function (i) {
											return t.sendGA("Help & Support", "SubTopic", e.topic.name, 0)
										}
									}
								}, [t._v(" " + t._s(e.topic.name) + " ")])] : [i("a", {
									staticClass: "link black underline",
									attrs: {
										href: t.content.articleURL + e.alternateId + t.content.language
									},
									on: {
										click: function (i) {
											return t.sendGA("Help & Support", "Article", e.name, 0)
										}
									}
								}, [t._v(" " + t._s(e.name) + " ")])]], 2)
							})) : t._e()]
						}))] : [t._m(0, !0)]], 2)]), i("span", {
							staticClass: "topicView-item-icon"
						})])
					})), 0)]) : i("div", [i("p", {
						staticClass: "headline2 rd-loader half"
					}, [t._v("Topic Details")]), t._m(1)])])])])])])])
				},
				r = [function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "lds-ring"
					}, [i("div"), i("div"), i("div"), i("div")])
				}, function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("ul", {
						staticClass: "topicView-list"
					}, [i("li", {
						staticClass: "topicView-item"
					}, [i("span", {
						staticClass: "topicView-item-link subtitle2 rd-loader"
					}, [t._v("Loader")])]), i("li", {
						staticClass: "topicView-item"
					}, [i("span", {
						staticClass: "topicView-item-link subtitle2 rd-loader"
					}, [t._v("Loader")])]), i("li", {
						staticClass: "topicView-item"
					}, [i("span", {
						staticClass: "topicView-item-link subtitle2 rd-loader"
					}, [t._v("Loader")])])])
				}],
				l = (i("4160"), i("d3b7"), i("3ca3"), i("159b"), i("ddb0"), i("2b3d"), i("6590")),
				u = i("da7c"),
				d = {
					name: "TopicView",
					props: ["content"],
					data: function () {
						return {
							id: new URL(location.href).searchParams.get("topicid"),
							parentTopic: new URL(location.href).searchParams.get("ptn"),
							parentTopicId: new URL(location.href).searchParams.get("ptid"),
							topicDetails: [],
							subTopics: [],
							isActive: 0,
							helpText: "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir") ? "Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©" : "Help",
							isLoaded: !1
						}
					},
					mounted: function () {
						var t = this;
						this.id && l["a"].topicDetails(this.id).then((function (e) {
							t.topicDetails = e.topicTree[0]
						}))
					},
					methods: {
						sendGA: function (t, e, i, s) {
							Object(u["a"])(t, e, i, s)
						},
						getSubtopic: function (t, e) {
							if (this.isActive === t ? this.isActive = 0 : this.isActive = t, this.sendGA("Help & Support", "Topic", e, 0), !this.isLoaded) {
								var i = this;
								this.topicDetails.topicTree.forEach((function (t) {
									l["a"].getSubTopics(t.topic.id).then((function (e) {
										e.article.length > 0 ? i.subTopics.push({
											id: t.topic.id,
											elements: e.article
										}) : l["a"].topicDetails(t.topic.id).then((function (e) {
											i.subTopics.push({
												id: t.topic.id,
												elements: e.topicTree[0].topicTree
											})
										}))
									}))
								}))
							}
							this.isLoaded = !0
						},
						checkLength: function () {
							var t = this;
							return 0 === JSON.parse(JSON.stringify(this.topicDetails.topicTree)).length && (l["a"].getSubTopics(this.topicDetails.topic.id).then((function (e) {
								t.subTopics = e.article
							})), !0)
						}
					}
				},
				g = d,
				p = (i("7164"), i("2877")),
				v = Object(p["a"])(g, c, r, !1, null, null, null),
				f = v.exports,
				m = i("6732"),
				h = i("0604"),
				b = i("fd2d"),
				C = i("cf38"),
				k = {
					name: "SupportCategory",
					data: function () {
						return {
							contentMisc: []
						}
					},
					mounted: function () {
						var t = this;
						l["a"].contentMisc().then((function (e) {
							t.contentMisc = e
						}))
					},
					components: {
						BannerSearch: o["a"],
						TopicView: f,
						BluChat: m["a"],
						GetHelp: h["a"],
						Footer: b["a"],
						Gradients: C["a"]
					}
				},
				y = k,
				w = Object(p["a"])(y, a, n, !1, null, null, null),
				_ = w.exports,
				x = i("bc3a"),
				S = i.n(x),
				L = i("a7fe"),
				T = i.n(L),
				A = i("caf9"),
				B = i("9d75"),
				H = i.n(B);
			i("1354"), i("6395");
			s["a"].use(H.a, T.a, S.a), s["a"].use(A["a"], {
				lazyComponent: !0
			}), s["a"].config.productionTip = !1, new s["a"]({
				render: function (t) {
					return t(_)
				}
			}).$mount("#appHelp")
		},
		b026: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-help-cart-usage",
				viewBox: "0 0 40 40",
				url: i.p + "images/svg-sprite-icons.svg#icon-help-cart-usage",
				toString: function () {
					return this.url
				}
			}
		},
		b02d: function (t, e, i) {
			"use strict";
			var s = i("7503"),
				a = i.n(s);
			a.a
		},
		b466: function (t, e, i) {
			"use strict";
			var s = i("e0b4"),
				a = i.n(s);
			a.a
		},
		b734: function (t, e, i) {
			"use strict";
			var s = i("a1b8"),
				a = i.n(s);
			a.a
		},
		b8c4: function (t, e, i) {
			t.exports = i.p + "img/gradient.svg"
		},
		b939: function (t, e, i) {
			"use strict";
			var s = i("366c"),
				a = i.n(s);
			a.a
		},
		bb1f: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-help-online-usage",
				viewBox: "0 0 40 39",
				url: i.p + "images/svg-sprite-icons.svg#icon-help-online-usage",
				toString: function () {
					return this.url
				}
			}
		},
		bc55: function (t, e, i) {},
		be3b: function (t, e, i) {
			t.exports = i.p + "img/background-gradient-hp-mob.jpg"
		},
		c0c3: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-cart-usage",
				viewBox: "0 0 13 12",
				url: i.p + "images/svg-sprite-icons.svg#icon-cart-usage",
				toString: function () {
					return this.url
				}
			}
		},
		c82a: function (t, e, i) {},
		c88c: function (t, e, i) {
			"use strict";
			i.r(e);
			i("e260"), i("e6cf"), i("cca6"), i("a79d");
			var s = i("2b0e"),
				a = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "body"
					}, [i("BannerSearch"), i("Announcements"), i("Footer"), i("Gradients")], 1)
				},
				n = [],
				o = i("e7d5"),
				c = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("section", {
						staticClass: "notification"
					}, [i("div", {
						staticClass: "grid-container narrow"
					}, [i("div", {
						staticClass: "grid-x"
					}, [i("div", {
						staticClass: "cell small-12"
					}, [t.announcementsList.title ? i("div", {
						staticClass: "breadcrumb"
					}, [i("ul", {
						staticClass: "breadcrumb-list"
					}, [i("li", {
						staticClass: "breadcrumb-item"
					}, [i("a", {
						staticClass: "link du-magenta",
						attrs: {
							href: t.announcementsList.helpURL
						}
					}, [t._v(t._s(t.announcementsList.helpTitle))])]), i("li", {
						staticClass: "breadcrumb-item"
					}, [i("a", [t._v(t._s(t.announcementsList.title))])])]), i("p", {
						staticClass: "headline2"
					}, [t._v(t._s(t.announcementsList.title))]), i("div", {
						staticClass: "row30"
					}), t._l(t.announcementsList.messages, (function (e, s) {
						return i("div", {
							key: s + "notification",
							staticClass: "notification-box"
						}, [i("svg-icon", {
							class: "notification-box-icon " + e.iconFill,
							attrs: {
								"icon-name": e.icon
							}
						}), i("div", {
							staticClass: "notification-box-message"
						}, [i("p", {
							staticClass: "description1"
						}, [t._v(t._s(e.title))]), i("p", {
							staticClass: "description2"
						}, [t._v(t._s(e.time))])])], 1)
					}))], 2) : t._e()])])])])
				},
				r = [],
				l = i("6590"),
				u = i("0032"),
				d = {
					name: "Announcements",
					components: {
						SvgIcon: u["a"]
					},
					data: function () {
						return {
							announcementsList: []
						}
					},
					mounted: function () {
						var t = this;
						l["a"].announcementsList().then((function (e) {
							t.announcementsList = e
						}))
					}
				},
				g = d,
				p = (i("2346"), i("2877")),
				v = Object(p["a"])(g, c, r, !1, null, null, null),
				f = v.exports,
				m = i("fd2d"),
				h = i("cf38"),
				b = {
					name: "SupportAnnouncements",
					data: function () {
						return {}
					},
					components: {
						BannerSearch: o["a"],
						Announcements: f,
						Footer: m["a"],
						Gradients: h["a"]
					}
				},
				C = b,
				k = Object(p["a"])(C, a, n, !1, null, null, null),
				y = k.exports,
				w = i("bc3a"),
				_ = i.n(w),
				x = i("a7fe"),
				S = i.n(x),
				L = i("caf9"),
				T = i("9d75"),
				A = i.n(T);
			i("1354"), i("6395");
			s["a"].use(A.a, S.a, _.a), s["a"].use(L["a"], {
				lazyComponent: !0
			}), s["a"].config.productionTip = !1, new s["a"]({
				render: function (t) {
					return t(y)
				}
			}).$mount("#appHelp")
		},
		ceec: function (t, e, i) {
			"use strict";
			var s = i("2559"),
				a = i.n(s);
			a.a
		},
		cf05: function (t, e, i) {
			t.exports = i.p + "images/icon/Artboard – 2.png"
		},
		cf38: function (t, e, i) {
			"use strict";
			var s = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticStyle: {
							width: "0",
							height: "0",
							position: "absolute"
						}
					}, [i("svg", {
						staticStyle: {
							width: "0",
							height: "0",
							position: "absolute"
						},
						attrs: {
							viewBox: "0 0 36 36"
						}
					}, [i("linearGradient", {
						attrs: {
							x1: "0.00558093529%",
							y1: "100%",
							x2: "100%",
							y2: "0%",
							id: "du-icon-gradient"
						}
					}, [i("stop", {
						attrs: {
							"stop-color": "#00205B",
							offset: "0%"
						}
					}), i("stop", {
						attrs: {
							"stop-color": "#753BBD",
							offset: "33.8431693%"
						}
					}), i("stop", {
						attrs: {
							"stop-color": "#00A9CE",
							offset: "67.6863387%"
						}
					}), i("stop", {
						attrs: {
							"stop-color": "#00A9CE",
							offset: "100%"
						}
					})], 1)], 1), i("svg", {
						staticStyle: {
							width: "0",
							height: "0",
							position: "absolute"
						},
						attrs: {
							viewBox: "0 0 36 36"
						}
					}, [i("linearGradient", {
						attrs: {
							x1: "5.5336585%",
							y1: "107.871091%",
							x2: "26.2809667%",
							y2: "5.19657511%",
							id: "du-magenta-gradient"
						}
					}, [i("stop", {
						attrs: {
							"stop-color": "#753BBD",
							offset: "0%"
						}
					}), i("stop", {
						attrs: {
							"stop-color": "#C724B1",
							offset: "100%"
						}
					})], 1)], 1)])
				},
				a = [],
				n = {
					name: "Gradients"
				},
				o = n,
				c = i("2877"),
				r = Object(c["a"])(o, s, a, !1, null, null, null);
			e["a"] = r.exports
		},
		d1fb: function (t, e, i) {
			"use strict";
			var s = i("2109"),
				a = i.n(s);
			a.a
		},
		d234: function (t, e, i) {
			"use strict";
			var s = i("62ea"),
				a = i.n(s);
			a.a
		},
		d342: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-wegotyou-usage",
				viewBox: "0 0 118 24",
				url: i.p + "images/svg-sprite-icons.svg#icon-wegotyou-usage",
				toString: function () {
					return this.url
				}
			}
		},
		d3cd: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-services-usage",
				viewBox: "0 0 50 50",
				url: i.p + "images/svg-sprite-icons.svg#icon-services-usage",
				toString: function () {
					return this.url
				}
			}
		},
		d4d9: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-arrow-usage",
				viewBox: "0 0 14 12",
				url: i.p + "images/svg-sprite-icons.svg#icon-arrow-usage",
				toString: function () {
					return this.url
				}
			}
		},
		d722: function (t, e, i) {
			"use strict";
			var s = i("bc3a"),
				a = i.n(s),
				n = "",
				o = "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir");
			
		},
		d9fe: function (t, e, i) {
			"use strict";
			var s = i("a231"),
				a = i.n(s);
			a.a
		},
		da7c: function (t, e, i) {
			"use strict";
			i.d(e, "a", (function () {
				return s
			}));
			var s = function (t, e, i) {
				window.dataLayer && window.dataLayer.push({
					event: "eventTracker",
					eventCategory: t,
					eventAction: e,
					eventLabel: i
				})
			}
		},
		df84: function (t, e, i) {
			t.exports = i.p + "img/play.png"
		},
		e0b4: function (t, e, i) {},
		e0b7: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-devices-usage",
				viewBox: "0 0 54 58",
				url: i.p + "images/svg-sprite-icons.svg#icon-devices-usage",
				toString: function () {
					return this.url
				}
			}
		},
		e64f: function (t, e, i) {
			"use strict";
			var s = i("9aad"),
				a = i.n(s);
			a.a
		},
		e7d5: function (t, e, i) {
			"use strict";
			var s = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("section", {
						staticClass: "banner-search",
						on: {
							click: function (e) {
								return t.clearInput()
							}
						}
					}, [i("div", {
						staticClass: "banner-search-inner"
					}, [i("div", {
						staticClass: "grid-container narrow"
					}, [t.bannerHelp.title ? [i("form", {
						staticClass: "banner-search-form",
						attrs: {
							action: t.actionURL
						}
					}, [i("label", {
						staticClass: "hidden",
						attrs: {
							for: "searchHelp"
						}
					}, [t._v(t._s(t.bannerHelp.title))]), i("button", {
						class: {
							"banner-search-btn btn white": !0, disabled: t.searchText.length < 3
						},
						on: {
							click: function (e) {
								return t.sendGA("Help & Support", "Search Term", t.searchText, 0)
							}
						}
					}, [t._v(" " + t._s(t.bannerHelp.title) + " ")]), i("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.searchText,
							expression: "searchText"
						}],
						staticClass: "banner-search-input",
						attrs: {
							type: "search",
							id: "searchHelp",
							name: "q",
							placeholder: t.bannerHelp.subtitle
						},
						domProps: {
							value: t.searchText
						},
						on: {
							input: [function (e) {
								e.target.composing || (t.searchText = e.target.value)
							}, function (e) {
								return t.changeQuestions()
							}],
							focus: function (e) {
								t.suggestionsOpen = !0
							},
							keydown: [function (e) {
								return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.enter(e)
							}, function (e) {
								return !e.type.indexOf("key") && t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"]) ? null : t.down(e)
							}, function (e) {
								return !e.type.indexOf("key") && t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"]) ? null : t.up(e)
							}, function (e) {
								return !e.type.indexOf("key") && t._k(e.keyCode, "space", 32, e.key, [" ", "Spacebar"]) ? null : t.preventLeadingSpace(e)
							}]
						}
					}), i("ul", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.suggestionsOpen && t.questionsSuggestion.length > 1,
							expression: "suggestionsOpen && questionsSuggestion.length > 1"
						}],
						staticClass: "banner-search-suggestion"
					}, [t._l(t.questionsSuggestion, (function (e, s) {
						return [e.alternateId ? i("li", {
							key: s,
							class: {
								active: t.isActive(s + 1)
							}
						}, [i("a", {
							attrs: {
								href: t.bannerHelp.url + e.alternateId + t.bannerHelp.language
							},
							on: {
								click: function (i) {
									return t.sendGA("Help & Support", "Search Article", e.suggestion, 0)
								}
							}
						}, [t._v(t._s(e.suggestion))])]) : t._e()]
					}))], 2)])] : [t._m(0)]], 2)])])
				},
				a = [function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("form", {
						staticClass: "banner-search-form rd-loader"
					}, [i("input", {
						staticClass: "banner-search-input",
						attrs: {
							type: "",
							name: ""
						}
					})])
				}],
				n = (i("ac1f"), i("5319"), i("6590")),
				o = i("da7c"),
				c = {
					name: "BannerSearch",
					data: function () {
						return {
							bannerHelp: [],
							searchText: "",
							questionsSuggestion: [],
							suggestionsOpen: !1,
							current: 0,
							actionURL: "support-searchresult?q="
						}
					},
					mounted: function () {
						var t = this;
						n["a"].bannerHelp().then((function (e) {
							t.bannerHelp = e
						}))
					},
					methods: {
						preventLeadingSpace: function (t) {
							t.target.value ? " " == t.target.value[0] && (t.target.value = t.target.value.replace(/^\s*/, "")) : t.preventDefault()
						},
						sendGA: function (t, e, i, s) {
							Object(o["a"])(t, e, i, s)
						},
						clearInput: function () {
							this.searchText, this.questionsSuggestion = []
						},
						changeQuestions: function () {
							var t = this;
							this.searchText.length > 3 && n["a"].getQuestions(this.searchText).then((function (e) {
								var i = [];
								for (var s in e.suggestion) e.suggestion[s].alternateId && i.push(e.suggestion[s]);
								t.questionsSuggestion = i
							})), "" == this.searchText && (this.questionsSuggestion = [])
						},
						up: function () {
							this.current > 0 && this.current--
						},
						down: function () {
							this.current < this.questionsSuggestion.length && this.current++
						},
						enter: function (t) {
							if (this.searchText.length < 3 && t.preventDefault(), this.current > 0) {
								t.preventDefault(), this.selection = this.questionsSuggestion[this.current], this.suggestionsOpen = !1;
								var e = this.bannerHelp.url + this.questionsSuggestion[this.current].alternateId + this.bannerHelp.language;
								window.location.href = e
							}
						},
						isActive: function (t) {
							return t === this.current
						}
					}
				},
				r = c,
				l = (i("8956"), i("2877")),
				u = Object(l["a"])(r, s, a, !1, null, null, null);
			e["a"] = u.exports
		},
		e958: function (t, e, i) {},
		ea77: function (t, e, i) {},
		ec6f: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-star-usage",
				viewBox: "0 0 30 28",
				url: i.p + "images/svg-sprite-icons.svg#icon-star-usage",
				toString: function () {
					return this.url
				}
			}
		},
		edbd: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-billing-payment-usage",
				viewBox: "0 0 50 50",
				url: i.p + "images/svg-sprite-icons.svg#icon-billing-payment-usage",
				toString: function () {
					return this.url
				}
			}
		},
		f188: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-appstore-usage",
				viewBox: "0 0 110 32",
				url: i.p + "images/svg-sprite-icons.svg#icon-appstore-usage",
				toString: function () {
					return this.url
				}
			}
		},
		f3e4: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-postpaid-usage",
				viewBox: "0 0 44 58",
				url: i.p + "images/svg-sprite-icons.svg#icon-postpaid-usage",
				toString: function () {
					return this.url
				}
			}
		},
		f5b0: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-bulb-usage",
				viewBox: "0 0 60 60",
				url: i.p + "images/svg-sprite-icons.svg#icon-bulb-usage",
				toString: function () {
					return this.url
				}
			}
		},
		f851: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-googleplay-usage",
				viewBox: "0 0 111 34",
				url: i.p + "images/svg-sprite-icons.svg#icon-googleplay-usage",
				toString: function () {
					return this.url
				}
			}
		},
		fb75: function (t, e, i) {},
		fce9: function (t, e, i) {},
		fcfb: function (t, e, i) {
			"use strict";
			i.r(e), e["default"] = {
				id: "icon-arrow-w-usage",
				viewBox: "0 0 14 12",
				url: i.p + "images/svg-sprite-icons.svg#icon-arrow-w-usage",
				toString: function () {
					return this.url
				}
			}
		},
		fd2d: function (t, e, i) {
			"use strict";
			var s = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return t.dataFooter.footerTop ? i("footer", {
						staticClass: "footer"
					}, [i("div", {
						staticClass: "footer-top"
					}, [i("div", {
						staticClass: "grid-container"
					}, [i("div", {
						staticClass: "grid-x grid-margin-x"
					}, [i("div", {
						staticClass: "cell"
					}, [i("div", {
						staticClass: "footer-top-inner"
					}, [i("div", {
						staticClass: "footer-top-links"
					}, [i("ul", {
						staticClass: "links-list"
					}, t._l(t.dataFooter.footerTop.links, (function (e, s) {
						return i("li", {
							key: s + "link"
						}, [i("a", {
							attrs: {
								href: e.url
							},
							on: {
								click: function (i) {
									return t.sendGA(e.ga.eventCategory, e.ga.eventAction, e.ga.eventLabel, e.ga.eventValue)
								}
							}
						}, [t._v(" " + t._s(e.title) + " ")])])
					})), 0), i("ul", {
						staticClass: "links-type"
					}, t._l(t.dataFooter.footerTop.type, (function (e, s) {
						return i("li", {
							key: s + "type",
							class: {
								active: t.landingType === e.id
							},
							on: {
								click: function (i) {
									t.landingType = e.id
								}
							}
						}, [i("a", {
							attrs: {
								href: e.url
							},
							on: {
								click: function (i) {
									return t.sendGA(e.ga.eventCategory, e.ga.eventAction, e.ga.eventLabel, e.ga.eventValue)
								}
							}
						}, [t._v(" " + t._s(e.title) + " ")])])
					})), 0)]), i("div", {
						staticClass: "footer-top-store"
					}, [i("p", {
						staticClass: "store-title"
					}, [t._v(t._s(t.dataFooter.footerTop.download.title))]), i("ul", {
						staticClass: "store-list"
					}, t._l(t.dataFooter.footerTop.download.stores, (function (e, s) {
						return i("li", {
							key: s + "download"
						}, [i("a", {
							attrs: {
								href: e.url
							},
							on: {
								click: function (i) {
									return t.sendGA(e.ga.eventCategory, e.ga.eventAction, e.ga.eventLabel, e.ga.eventValue)
								}
							}
						}, [i("span", {
							staticClass: "svg-bg-icon",
							style: {
								backgroundImage: "url(" + t.spriteURL + e.image + "-usage)"
							},
							attrs: {
								title: e.title
							}
						})])])
					})), 0)])])])])])]), i("div", {
						staticClass: "footer-bottom"
					}, [i("div", {
						staticClass: "grid-container"
					}, [i("div", {
						staticClass: "grid-x grid-margin-x"
					}, [t._l(t.dataFooter.footerBottom, (function (e, s) {
						return [i("div", {
							key: s + "footer",
							staticClass: "cell large-2"
						}, [i("p", {
							class: {
								"footer-bottom-title": !0, active: t.openFooterMob === e.id
							},
							on: {
								click: function (i) {
									t.openFooterMob === e.id ? t.openFooterMob = "" : t.openFooterMob = e.id
								}
							}
						}, [t._v(" " + t._s(e.title) + " ")]), i("ul", {
							class: {
								"footer-bottom-list": !0, active: t.openFooterMob === e.id
							}
						}, t._l(e.links, (function (e, s) {
							return i("li", {
								key: s + "2"
							}, [i("a", {
								attrs: {
									href: e.url
								},
								on: {
									click: function (i) {
										return t.sendGA(e.ga.eventCategory, e.ga.eventAction, e.ga.eventLabel, e.ga.eventValue)
									}
								}
							}, [t._v(t._s(e.name))])])
						})), 0), e.sublinks ? [i("p", {
							class: {
								"footer-bottom-title": !0, active: t.openFooterMob === e.sublinks.id
							},
							on: {
								click: function (i) {
									t.openFooterMob === e.sublinks.id ? t.openFooterMob = "" : t.openFooterMob = e.sublinks.id
								}
							}
						}, [t._v(" " + t._s(e.sublinks.title) + " ")]), i("ul", {
							class: {
								"footer-bottom-list": !0, active: t.openFooterMob === e.sublinks.id
							}
						}, t._l(e.sublinks.links, (function (e, s) {
							return i("li", {
								key: s + "3"
							}, [i("a", {
								attrs: {
									href: e.url
								},
								on: {
									click: function (i) {
										return t.sendGA(e.ga.eventCategory, e.ga.eventAction, e.ga.eventLabel, e.ga.eventValue)
									}
								}
							}, [t._v(t._s(e.name))])])
						})), 0)] : t._e()], 2)]
					}))], 2)])]), i("div", {
						staticClass: "footer-final"
					}, [i("div", {
						staticClass: "grid-container"
					}, [i("div", {
						staticClass: "grid-x grid-margin-x"
					}, [i("div", {
						staticClass: "cell"
					}, [i("div", {
						staticClass: "separation"
					}), i("div", {
						staticClass: "footer-final-inner"
					}, [i("div", {
						staticClass: "footer-final-top"
					}, [t._m(0), i("div", {
						staticClass: "footer-final-social"
					}, [t._l(t.dataFooter.footerCopy.socialLinks, (function (e, s) {
						return [i("a", {
							key: s + "socialLink",
							attrs: {
								href: e.url,
								rel: "noreferrer",
								target: "_blank"
							},
							on: {
								click: function (i) {
									return t.sendGA(e.ga.eventCategory, e.ga.eventAction, e.ga.eventLabel, e.ga.eventValue)
								}
							}
						}, [i("span", {
							staticClass: "svg-bg-icon social",
							style: {
								backgroundImage: "url(" + t.spriteURL + e.icon + "-usage)"
							},
							attrs: {
								title: e.title,
								"data-fragment": "social"
							}
						})])]
					}))], 2)]), i("div", {
						staticClass: "footer-final-bottom"
					}, [i("div", {
						staticClass: "footer-final-map"
					}, [i("ul", [t._l(t.dataFooter.footerCopy.links, (function (e, s) {
						return [i("li", {
							key: s + "footerLink"
						}, [i("a", {
							attrs: {
								href: e.url
							},
							on: {
								click: function (i) {
									return t.sendGA(e.ga.eventCategory, e.ga.eventAction, e.ga.eventLabel, e.ga.eventValue)
								}
							}
						}, [t._v(t._s(e.title))])])]
					}))], 2)]), i("div", {
						staticClass: "footer-final-copyright"
					}, [i("p", [t._v(t._s(t.dataFooter.footerCopy.copyright))])])])])])])])])]) : t._e()
				},
				a = [function () {
					var t = this,
						e = t.$createElement,
						s = t._self._c || e;
					return s("div", {
						staticClass: "footer-final-logo"
					}, [s("img", {
						staticClass: "logo",
						attrs: {
							src: i("cf05"),
							alt: "du-logo",
							width: "50",
							height: "50"
						}
					})])
				}],
				n = i("d722"),
				o = i("da7c"),
				c = {
					name: "Footer",
					data: function () {
						return {
							dataFooter: [],
							openFooterMob: "",
							spriteURL: "/images/svg-sprite-icons.svg#icon-",
							landingType: "consumer"
						}
					},
					mounted: function () {
						var t = this;
						n["a"].footerData().then((function (e) {
							t.dataFooter = e
						}))
					},
					methods: {
						sendGA: function (t, e, i, s) {
							Object(o["a"])(t, e, i, s)
						}
					}
				},
				r = c,
				l = (i("53d7"), i("2877")),
				u = Object(l["a"])(r, s, a, !1, null, null, null);
			e["a"] = u.exports
		}
	}
]);