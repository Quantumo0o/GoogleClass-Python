const jo = {};
! function JetThemeScript() {
    var M = window,
        aQ = document,
        a = setTimeout,
        b9 = clearTimeout,
        cb = Date,
        b0 = Math,
        q = parseInt,
        t = btoa,
        K = escape,
        d = unescape,
        bP = encodeURIComponent,
        j = decodeURIComponent,
        ad = RegExp,
        bX = XMLHttpRequest,
        bm = alert,
        bC = localStorage,
        ax = JSON,
        a3 = Image,
        a5 = setInterval,
        cG = clearInterval,
        aE = "forEach",
        be = "innerHTML",
        bM = "tagName",
        w = "getElementById",
        o = "getElementsByClassName",
        bv = "querySelector",
        cw = "querySelectorAll",
        bt = "documentElement",
        ch = "childNodes",
        bJ = "createElement",
        B = "className",
        D = "replace",
        bW = "indexOf",
        m = "lastIndexOf",
        a4 = "EventListener",
        cc = "add",
        aM = "remove",
        ci = "id",
        bs = "key",
        aL = "type",
        af = "parse",
        cx = "length",
        W = "call",
        bF = "slice",
        C = "reset",
        az = "scroller",
        aq = "push",
        b4 = "Time",
        aa = "Date",
        a9 = "Month",
        a7 = "FullYear",
        ap = "clientX",
        ao = "clientY",
        h = "pageX",
        g = "pageY",
        aN = "scrollLeft",
        bN = "scrollTop",
        ac = "onreadystatechange",
        cf = "readyState",
        a2 = "Attribute",
        bk = "set",
        bB = "get",
        av = "post",
        a1 = "has",
        F = "checked",
        ar = "focus",
        b1 = "height",
        cd = "offsetWidth",
        ck = "offsetHeight",
        ay = "toFixed",
        aF = "pageYOffset",
        cy = "appendChild",
        bA = "firstChild",
        cj = "insert",
        bO = "Before",
        aC = "value",
        R = "safe",
        aI = "match",
        X = "href",
        bj = "src",
        U = "onload",
        al = "onerror",
        L = "target",
        bU = "closest",
        bf = "location",
        bb = "split",
        a8 = "trim",
        bY = "open",
        bh = "send",
        bl = "random",
        cF = "status",
        bp = "toString",
        aW = "parentElement",
        am = "activeElement",
        ca = "preventDefault",
        bc = "substr",
        cr = "setRequestHeader",
        aD = "responseText",
        cl = "response",
        ba = "body",
        aT = "title",
        ai = "test",
        aB = "container",
        aU = "ceil",
        aj = "floor",
        bu = "round",
        ag = "min",
        cu = "map",
        cm = "cookie",
        V = "contains",
        bg = "toUTCString",
        bR = "textContent",
        aw = "elementFromPoint",
        aS = "Item",
        bG = "nextSibling",
        cD = "load",
        bo = "true",
        x = "false",
        aY = "valid",
        bV = "scroll",
        G = "click",
        aX = "submit",
        bD = "blur",
        bL = "mousemove",
        p = "mouseup",
        Y = "touchstart",
        aV = "mousedown",
        a0 = "change",
        l = "complete",
        cE = "undefined",
        bq = "function",
        bx = "Content-Type",
        P = "text/html",
        b8 = "application/x-www-form-urlencoded",
        e = "pagination",
        ct = "loadCustomPosts",
        k = "custom_posts",
        O = "config",
        cC = "adsbygoogle",
        bE = "analytics",
        s = "jet",
        ce = "https://",
        Z = "www.blogger.com/",
        au = "-rw",
        bQ = "devicePixelRatio",
        b = "mount",
        cA = typeof isPreview !== cE ? isPreview : false,
        b2 = typeof siteUrl !== cE ? siteUrl[bc](0, siteUrl[cx] - 1)[D](/(^\w+:|^)\/\//, "") : "",
        aG = ce + b2,
        aO = typeof currentUrl !== cE ? currentUrl : "",
        r = typeof blogId !== cE ? blogId : "",
        cn = typeof blogTitle !== cE ? blogTitle : "",
        br = typeof titleSeparator !== cE ? titleSeparator : " - ",
        b6 = typeof pageTitle !== cE ? pageTitle : "Page",
        v = typeof analyticId !== cE ? analyticId : false,
        u = typeof caPubAdsense !== cE ? caPubAdsense[D](/^\D+/g, "") : false,
        aR = u ? "ca-pub-" + u : false,
        bK = typeof innerAdsDelimiter !== cE ? innerAdsDelimiter : "p,br,div",
        bI = typeof ignoreAdsDelimiter !== cE ? ignoreAdsDelimiter : "pre,ul,ol,table,blockquote",
        bn = typeof autoTOC !== cE ? autoTOC : false,
        ak = typeof toc_temp === bq ? toc_temp : false,
        n = typeof positionTOC !== cE ? positionTOC : false,
        bd = typeof jtCallback === bq ? jtCallback : false;

    function J(cH, i) {
        return -1 < (" " + cH[B] + " ")[bW](" " + i + " ")
    }

    function I(cI, cH) {
        var i;
        J(cI, cH) || ("" != (i = cI[B]) && (cH = " " + cH), cI[B] = i + cH)
    }

    function bz(cH, i) {
        cH[B] = cH[B][D](new ad("(?:^|\\s)" + i + "(?!\\S)"), "")[a8]()
    }

    function bw(cH, i) {
        (J(cH, i) ? bz : I)(cH, i)
    }

    function aK(cH, i) {
        I(cH, "d-block"), a(function() {
            I(cH, i)
        }, 100)
    }

    function b7(cI, cH, i) {
        bz(cI, cH), a(function() {
            bz(cI, "d-block")
        }, i || 300)
    }

    function A(cI, cH) {
        for (var i = 0; i < cI[cx]; i++) {
            if (cI[i] === cH) {
                return !0
            }
        }
        return !1
    }

    function aH() {
        return (b0[bl]() + 1)[bp](36)[bc](7)
    }

    function co(cH, i) {
        return !!(cH = new ad("[?&]" + cH + "=([^&#=]*)"))[ai](i) && i[aI](cH)[1]
    }

    function S(cK, cO, cM, cN) {
        cK = q(cK), cO = q(cO), cM = q(cM), cN = q(cN);
        var i, cI, cJ = b0[aU](cK / cM);
        cO < 1 ? cO = 1 : cJ < cO && (cO = cJ), cI = cJ <= cN ? (i = 1, cJ) : (cK = b0[aj](cN / 2), cM = b0[aU](cN / 2) - 1, cO <= cK ? (i = 1, cN) : cJ <= cO + cM ? (i = cJ - cN + 1, cJ) : (i = cO - cK, cO + cM));
        for (var cH = (cO - 1) * cM, cN = b0[ag](cH + cM - 1, cK - 1), cP = [], cL = 0; cL < cI + 1 - i; cL++) {
            cP[aq](cL)
        }
        return cP = cP[cu](function(cQ) {
            return i + cQ
        }), {
            totalItems: cK,
            currentPage: cO,
            pageSize: cM,
            totalPages: cJ,
            startPage: i,
            endPage: cI,
            startIndex: cH,
            endIndex: cN,
            pages: cP
        }
    }

    function cs(cK) {
        for (var cI = cK.slice(), i = cI[cx] - 1; 0 < i; i--) {
            var cH = b0[aj](b0[bl]() * (i + 1)),
                cJ = cI[i];
            cI[i] = cI[cH], cI[cH] = cJ
        }
        return cI
    }

    function an(i) {
        try {
            return ax[af](i)
        } catch (i) {
            return !1
        }
    }! function(cH) {
        var i = new a3;
        i[U] = i[al] = function() {
            cH(2 == i[b1])
        }, i[bj] = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }(function(i) {
        i || (au = "")
    });
    var cv = aQ[w]("header"),
        bT = aQ[w]("search-toggle"),
        T = aQ[w]("search-header"),
        f = aQ[w]("navbar-toggle"),
        a6 = aQ[w]("navbar"),
        at = aQ[w]("back-to-top"),
        cz = aQ[w]("dark-toggler"),
        aZ = aQ[bv]("html"),
        bS = aQ[w]("comment-button"),
        ab = aQ[w]("threaded-comment-form"),
        cq = aQ[w]("comment-editor"),
        cp = aQ[w]("comment-editor-src"),
        N = aQ[w]("comment-script"),
        by = aQ[cw](".comment-reply"),
        H = aQ[cw](".entry-text noscript"),
        bZ = aQ[cw](".contact-form-blogger"),
        aA = aQ[w]("ads-post"),
        cg = aQ[w]("post-body"),
        aJ = aQ[bv](".related-posts"),
        aP = aQ[bv](".related-inline"),
        ae = co("page", aO), // Original aO
        b5 = null !== bC && 1 == bC[bB + aS]("lazy");
    ! function(i) {
        M[cc + a4](bV, function() {
            var cI, cH = this[aF];
            cH < i && J(cv, "header-hidden") ? cI = a(function() {
                bz(cv, "header-hidden")
            }, 500) : i < cH && J(cv, "header-animate") && (b9(cI), I(cv, "header-hidden")), i = cH
        }, !1)
    }(0);
    var E = function(cK) {
        var cN, cL, cM, i, cI, cJ, cH, cO;
        "IMG" == cK[bM] && ((cO = cK[bB + a2]("data-src"))[aI](/(bp.blogspot|googleusercontent)/) ? (cH = b5 ? M[bQ] && 1 < M[bQ] ? M[bQ] : 1.5 : 1, cN = (cK[cd] * cH)[ay](0), cL = (cK[aW][cd] * cH)[ay](0), cM = (cK[aW][aW][cd] * cH)[ay](0), i = (cK[ck] * cH)[ay](0), cI = cO[bb]("/"), cJ = cO[m]("=") + 1, cH = "", cH = J(cK[aW], "ratio") ? "w" + cN + "-h" + i + "-c" + au : "s" + (cH = cN < 30 ? cL < 30 ? cM : cL : cN) + au, cO = cO[aI](/(img\/a|proxy\/)/) ? cJ ? cO[bF](0, cJ) + cH : cO + "=" + cH : cO[D](cI[cI[cx] - 2], cH), cK[bk + a2]("data-src", cO)) : cO[aI](/(img.youtube|i.ytimg)/) && (cO = cO[bc](0, cO[m]("/")) + "/mqdefault.jpg", cK[bk + a2]("data-src", cO)))
    };
    var cB = function(cK) { // cK is the pagination element
        var cH, cI, cQ, cN, cM, cP, cL, cO, decodedUrl; // cH = pageSize, cO = currentPage

        function cJ(cU, cS, i) { // cU = page number to create link for, cS = actual current page, i = icon/text
            var cR = aQ[bJ]("li"),
                cT = aQ[bJ]("span");
            return I(cT, "btn btn-sm rounded-pill jt-icon-center"), cT[be] = i || cU, cT[bk + a2]("data-page", cU), cU == cS ? I(cT, "jt-btn-primary") : (I(cT, "jt-btn-light hover-btn-primary"), cT[cc + a4](G, function(cW) {
                var cV; // cV becomes 0-based startIndex for the feed request
                cW[ca](), 
                cO_clicked = cT[bB + a2]("data-page"); // Get page number from clicked element
                if (1 == cO_clicked) {
                    cV = cI ? aG + "/search" + cN + "?max-results=" + cH + "&page=" + cO_clicked : aG;
                    M[bf][X] = cV;
                } else {
                    cV = (cO_clicked - 1) * cH; // Calculate 0-based start index
                    // MODIFIED: Use cV + 1 for 1-based start-index.
                    // Pass cO_clicked and cH to the callback or store globally if needed by jo.pagination_date
                    jo.pagination_target_page = cO_clicked; // Store for pagination_date
                    jo.pagination_page_size = cH; // Store for pagination_date

                    Defer.js(aG + "/feeds/posts/summary/" + cQ + "?start-index=" + (cV + 1) + "&alt=json&callback=jo." + e + "_date&max-results=1");
                }
            })), cR[cy](cT), cR
        }

        if (cK[bB + a2]("data-pagination") != x) {
            cH = cK[bB + a2]("data-posts"); // Page size
            cI = cK[bB + a2]("data-label"); // Optional label
            cQ = (cI = bP(cI)) ? "-/" + cI + "/" : ""; // Label path part for feed URL
            cN = cI ? "/label/" + cI : ""; // Label path part for search URL

            Defer.js(aG + "/feeds/posts/summary/" + cQ + "?alt=json&callback=jo." + e + "_" + bs + "&max-results=1");

            // MODIFIED: Decode aO (currentUrl) before extracting parameters
            decodedUrl = j(aO);
            cM = co("max-results", decodedUrl); // Max results from URL (if present)
            cP = co("page", decodedUrl);       // Page from URL (if present)

            cL = cM || cH; // Effective page size (prefer URL param, fallback to data-posts)
            cO = cP || 1;  // Current page number (prefer URL param, fallback to 1)
            cO = q(cO);    // Ensure it's a number

            jo[e + "_" + bs] = function(cU_feed) { // Callback for initial feed data (total results)
                var cS_data = cU_feed.feed,
                    totalItems = q(cS_data.openSearch$totalResults.$t);
                
                if (cH < totalItems) { // Only show pagination if more items than one page
                    var paginationData = S(totalItems, cO, cH, 5), // Use cH (data-posts) as pageSize for S
                        cR_ul = aQ[bJ]("ul"),
                        totalPages = paginationData.totalPages;

                    1 != paginationData.currentPage && (prevLink = cJ(paginationData.currentPage - 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>'), cR_ul[cy](prevLink));
                    A(paginationData.pages, 1) || (firstPageLink = cJ(1, paginationData.currentPage, "1 . ."), cR_ul[cy](firstPageLink));
                    
                    for (var cT_idx = 0; cT_idx < paginationData.pages[cx]; cT_idx++) {
                        var pageLink = cJ(paginationData.pages[cT_idx], paginationData.currentPage);
                        cR_ul[cy](pageLink);
                    }
                    A(paginationData.pages, totalPages) || (lastPageLink = cJ(totalPages, paginationData.currentPage, ". . " + totalPages), cR_ul[cy](lastPageLink));
                    paginationData.currentPage != totalPages && (nextLink = cJ(paginationData.currentPage + 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>'), cR_ul[cy](nextLink));
                    
                    cK[be] = ""; // Clear existing content of pagination element
                    I(cR_ul, "pagination mb-0");
                    cK[cy](cR_ul);
                    bz(cK, "visually-hidden");
                }
            };

            jo[e + "_date"] = function(feedEntryData) { // Callback after fetching first post of target page to get its date
                var feedEntry = feedEntryData.feed.entry[0],
                    timestamp = (feedEntry.published.$t[bc](0, 19) + feedEntry.published.$t[bc](23, 29))[D]("+", "%2B"),
                    targetPageNum = jo.pagination_target_page || cO, // Use stored target page
                    pageSizeNum = jo.pagination_page_size || cH; // Use stored page size

                // MODIFIED: Use pageSizeNum (which is cH from the outer scope, or re-read from data-attribute)
                var finalNavUrl = aG + "/search" + cN + "?updated-max=" + timestamp + "&max-results=" + pageSizeNum + "&page=" + targetPageNum;
                M[bf][X] = finalNavUrl;
            };

        } else {
            bz(cK, "visually-hidden");
        }
    };


    function b3(cI, cH) {
        var i = new bX;
        i[bY](bB, cI), i[cr](bx, P), i[bh](null), i[cc + a4](cD, function() {
            var cJ = i[aD][aI](/<title>(.*?)<\/title>/);
            cH[be] = cJ[1][D](br + cn, "")
        })
    }
    jo[ct] = function(cM) {
        var cH = aH(),
            cL = cM[bB + a2]("data-label"),
            cJ = cM[bB + a2]("data-title"),
            cQ = cM[bB + a2]("data-items"),
            cK = cM[bB + a2]("data-shuffle"),
            cI = cM[bB + a2]("data-no-item"),
            i = cM[bB + a2]("data-func"),
            cP = cM[bB + a2]("data-callback"),
            cR = cI ? q(cQ) + 1 : cQ,
            cN = cL || cM[be],
            cO = cN[bb](","),
            cL = "",
            cL = 1 < cO[cx] ? cN ? "-/" + bP(cO[b0[aj](b0[bl]() * cO[cx])]) + "/?" : "?" : cN && cN != x ? "-/" + bP(cN[a8]()) + "/?" : "?";
        Defer.js(aG + "/feeds/posts/summary/" + cL + "alt=json&callback=jo." + k + "_" + bs + "_" + cH + "&max-results=" + cR), jo[k + "_" + bs + "_" + cH] = function(cX) {
            var c1 = q(cX.feed.openSearch$totalResults.$t),
                cZ = cX.feed.category;
            if (0 < c1) {
                for (var c0 = {
                        title: cJ,
                        posts: [],
                        categories: cZ
                    }, cS = cX.feed.entry, cU = 0, cV = 0; cV < cS[cx]; ++cV) {
                    var cT, c2, cY = cS[cV],
                        cW = cY.link[cY.link[cx] - 1][X];
                    if (cU == cQ) {
                        break
                    }
                    cW != cI && (cU++, (cT = {}).grup_id = cH, cT.url = cW, cT.title = cY[aT].$t, cT.summary = cY.summary.$t[a8](), cT.img = cY.media$thumbnail && cY.media$thumbnail.url, cT.author = cY.author[0].name.$t, cT.comment = cY.thr$total && cY.thr$total.$t, cT.label = cY.category, c2 = cY.published.$t, cY = (cW = new cb(c2))[bB + aa](), c2 = cW[bB + a9]() + 1, cW = cW[bB + a7](), cT.date = cW + "/" + c2 + "/" + cY, c0.posts[aq](cT))
                }
                cX = M[i];
                typeof cX === bq && 0 < c0.posts[cx] && (cK && (c0.posts = cs(c0.posts)[bF](0, cK)), cM[be] = cX(c0)[a8](), bz(cM, "visually-hidden"), Defer.dom(".lazy-" + cH, 1, "loaded", E), !cP || typeof(cX = M[cP]) === bq && cX())
            }
        }
    };
    var y = function(cK) {
        for (var cI = cK[cw]("a"), i = 0; i < cI[cx]; ++i) {
            var cH = cI[i],
                cJ = cH[X],
                cL = aQ[bJ]("span");
            I(cL, "d-block fw-bold pt-2 jt-text-primary"), cH[cy](cL), b3(cJ, cL)
        }
    };

    function ah() {
        (bT && bT[F] || f && f[F] ? bz : I)(cv, "header-animate")
    }

    function z(cI, i) {
        function cJ(cK) {
            cI[V](cK[L]) || (i(), cH())
        }
        var cH = function() {
            aQ[aM + a4](G, cJ)
        };
        aQ[cc + a4](G, cJ)
    }

    function Q(i) {
        i != cp[X] && (I(ab, "loader"), cp[X] = i, cq[bj] = i), J(ab, "d-none") && (bz(ab, "d-none"), i = N[aC][aI](/<script.*?src='(.*?)'/)[1], Defer.js(i, "comment-js", 500, function() {
            BLOG_CMT_createIframe(ce + Z + "rpc_relay.html")
        }))
    }
    bT && bT[cc + a4](a0, function() {
        ah(), this[F] && a(function() {
            aQ[w]("search-input")[ar]()
        }, 100), z(T, function() {
            bT[F] = !1, ah()
        })
    }), f && f[cc + a4](a0, function() {
        ah(), this[F] ? (aK(a6, "show"), z(a6, function() {
            f[F] = !1, ah(), b7(a6, "show")
        })) : b7(a6, "show")
    }), cz && cz[cc + a4](G, function(i) {
        i[ca](), bw(aZ, "dark-mode"), null !== bC && bC[bk + aS]("theme", J(aZ, "dark-mode") ? "dark" : "light")
    }), M[cc + a4](bV, function() {
        (1 <= this[aF] && null !== cv ? I : bz)(cv, "shadow-sm"), (1E3 <= this[aF] && null !== at ? bz : I)(at, "d-none")
    }, !1), cq && cq[cc + a4](cD, function(i) {
        bz(ab, "loader")
    }), bS && bS[cc + a4](G, function(i) {
        i[ca](), Q(this[X]), "add-comment" != ab[aW][ci] && aQ[w]("add-comment")[cy](ab)
    });
    for (var bH = 0; bH < by[cx]; ++bH) {
        by[bH][cc + a4](G, function(i) {
            i[ca]();
            var commentId = this[bB + a2]("data-comment-id"); // Renamed 'i' for clarity here
            Q(this[X]), ab[aW][ci] != "c" + commentId && aQ[w]("c" + commentId)[cy](ab)
        })
    }
    for (bH = 0; bH < bZ[cx]; ++bH) {
        var bi = bZ[bH];
        bi[cc + a4](aX, function(cJ) {
            cJ[ca]();
            var cI = cJ[L];
            I(cI, "loading");
            var i = new FormData(cI),
                cH = "blogID=" + r;
            i[aE](function(cL, cK) {
                cH += "&" + bP(cK) + "=" + bP(cL)
            });
            var contactFormUrl = ce + Z + "contact-form.do"; // Renamed cJ for clarity
            i = new bX;
            i[bY](av, contactFormUrl), i[cr](bx, b8), i[bh](cH), i[ac] = function() {
                var cK;
                bz(cI, "loading"), 4 === this[cf] && 200 === this[cF] && "" != this[cl] && ((cK = an(this[aD][a8]())) && "true" == cK.details.emailSentStatus ? (cI[C](), bz(cI, "send-error"), I(cI, "send-success")) : (bz(cI, "send-success"), I(cI, "send-error")))
            }
        })
    }

    function c(cQ) {
        if (cQ && (aQ[aM + a4](bL, c), aQ[aM + a4](Y, c), aQ[aM + a4](bV, c)), Defer.dom(".custom-posts", 1, null, jo[ct], null, {
                rootMargin: "200%"
            }), 0 < H[cx]) {
            for (var cW = 0; cW < H[cx]; ++cW) {
                var cT = H[cW],
                    cU = cT[be],
                    cH_textarea = aQ[bJ]("textarea"); // Renamed cH for clarity
                cH_textarea[be] = cU[D](/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"');
                cU = aQ[bJ]("div");
                cU[be] = cH_textarea.value, 0 == cW && I(cU, "feature-image full-width"), cT[aW][cj + bO](cU, cT)
            }
            Defer.dom('[lazyload="true"]', 1, "loaded", E, null, {
                rootMargin: "200%"
            })
        }
        if (null !== cg) {
            if (null !== aJ && null !== aP && (aP[be] = aJ[be], aP[bk + a2]("data-no-item", aJ[bB + a2]("data-no-item"))), null !== aA) {
                for (var cJ_elements = cg[cw](bK + "," + bI), cL_adNodes = aA[ch], cI_adCount = cL_adNodes[cx], cX_validTargets = [], cW_idx = 0; cW_idx < cJ_elements[cx]; cW_idx++) { // Renamed variables for clarity
                    var cR_ignoredParent = cJ_elements[cW_idx][bU](bI);
                    cR_ignoredParent && cJ_elements[cW_idx] != cR_ignoredParent || cX_validTargets[aq](cJ_elements[cW_idx])
                }
                for (var cM_targetNode, cW_adIdx = 0; cW_adIdx < cI_adCount; cW_adIdx++) { // Renamed cW for clarity
                    cW_adIdx == cI_adCount - 1 ? cg[cy](cL_adNodes[0]) : (cM_targetNode = cW_adIdx == cI_adCount - 1 ? cX_validTargets[cX_validTargets[cx] - 1] : cX_validTargets[b0[bu](cX_validTargets[cx] / cI_adCount) * cW_adIdx], (cM_targetNode = 0 == cW_adIdx ? cX_validTargets[0] : cM_targetNode && cM_targetNode[bG]) && cM_targetNode[aW][cj + bO](cL_adNodes[0], cM_targetNode))
                }
            }
        }
        if (bn && bn != x && ak && null !== cg[bA]) {
            for (var cS_headings = cg[cw]("h2,h3,h4,h5,h6"), cK_tocDiv = aQ[bJ]("div"), cQ_tocPosition = cg[bv](n), cO_tocItems = [], cW_headingIdx = 0; cW_headingIdx < cS_headings[cx]; cW_headingIdx++) { // Renamed variables
                var cV_heading = cS_headings[cW_headingIdx],
                    cP_id = cV_heading[bR][D](/[^\w!?]/g, "_")[D](/__/g, "_"),
                    cN_level = q(cV_heading[bM][D]("H", ""));
                cV_heading[ci] = cP_id, cO_tocItems[aq]({
                    level: cN_level,
                    title: cV_heading[bR],
                    id: cP_id
                })
            }
            null === cQ_tocPosition ? cQ_tocPosition = cg[bA] : cQ_tocPosition[bG] && (cQ_tocPosition = cQ_tocPosition[bG]), 0 < cO_tocItems[cx] && (cK_tocDiv[be] = ak(cO_tocItems)[a8](), cQ_tocPosition && cQ_tocPosition[aW][cj + bO](cK_tocDiv, cQ_tocPosition))
        }
    }
    cA || (aR && (typeof adsbygoogle === cE && (adsbygoogle = []), Defer.js(ce + "pagead2.googlesyndication.com/pagead/js/" + cC + ".js?client=" + aR, cC, 100)), v && v != x && Defer.js(ce + "www.googletagmanager.com/gtag/js?id=" + v, bE, 100, function() {
        function i() {
            dataLayer[aq](arguments)
        }
        i("js", new Date), i(O, v)
    }), bd && bd()), r && Defer.css(ce + Z + "dyn-css/authorization.css?targetBlogID=" + r);
    ae && (aQ[aT] = aQ[aT][D](br, br + b6 + " " + ae + br));
    Defer.dom(".lazyload", 1, "loaded", E);
    Defer.dom("#post-pager", 1, null, y, null, {
        rootMargin: "200%"
    });
    Defer.dom("#pagination", 1, null, cB, null, { // cB is the main pagination setup function
        rootMargin: "200%"
    });
    b5 ? c(!1) : (null !== bC && bC[bk + aS]("lazy", 1), aQ[cc + a4](bL, c), aQ[cc + a4](Y, c), aQ[cc + a4](bV, c));
}();
