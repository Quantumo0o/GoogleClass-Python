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
        aO = typeof currentUrl !== cE ? currentUrl : "", // This is the global 'currentUrl' from Blogger
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

    function co(cH, i) { // cH is param name (e.g. "page"), i is the URL string
        return !!(cH = new ad("[?&]" + cH + "=([^&#=]*)"))[ai](i) && i[aI](cH)[1]
    }

    function S(cK, cO, cM, cN) {
        cK = q(cK), cO = q(cO), cM = q(cM), cN = q(cN);
        var i, cI, cJ = b0[aU](cK / cM);
        cO < 1 ? cO = 1 : cJ < cO && (cO = cJ), cI = cJ <= cN ? (i = 1, cJ) : (cK = b0[aj](cN / 2), cM = b0[aU](cN / 2) - 1, cO <= cK ? (i = 1, cN) : cJ <= cO + cM ? (i = cJ - cN + 1, cJ) : (i = cO - cK, cO + cM));
        for (var cH_loop = (cO - 1) * cM, cN_loop = b0[ag](cH_loop + cM - 1, cK - 1), cP = [], cL = 0; cL < cI + 1 - i; cL++) { // Renamed cH and cN to avoid conflict with outer scope
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
            startIndex: cH_loop, // Was cH
            endIndex: cN_loop,   // Was cN
            pages: cP
        }
    }

    function cs(cK) {
        for (var cI = cK.slice(), i = cI[cx] - 1; 0 < i; i--) {
            var cH_shuffle = b0[aj](b0[bl]() * (i + 1)), // Renamed cH
                cJ = cI[i];
            cI[i] = cI[cH_shuffle], cI[cH_shuffle] = cJ
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
        ae = co("page", M[bf][X]), // Use current browser URL for initial page title
        b5 = null !== bC && 1 == bC[bB + aS]("lazy");
    ! function(i) {
        M[cc + a4](bV, function() {
            var cI, cH_scroll = this[aF]; // Renamed cH
            cH_scroll < i && J(cv, "header-hidden") ? cI = a(function() {
                bz(cv, "header-hidden")
            }, 500) : i < cH_scroll && J(cv, "header-animate") && (b9(cI), I(cv, "header-hidden")), i = cH_scroll
        }, !1)
    }(0);
    var E = function(cK_img) { // Renamed cK
        var cN, cL, cM, i, cI, cJ, cH_imgprop, cO_src; // Renamed cH and cO
        "IMG" == cK_img[bM] && ((cO_src = cK_img[bB + a2]("data-src"))[aI](/(bp.blogspot|googleusercontent)/) ? (cH_imgprop = b5 ? M[bQ] && 1 < M[bQ] ? M[bQ] : 1.5 : 1, cN = (cK_img[cd] * cH_imgprop)[ay](0), cL = (cK_img[aW][cd] * cH_imgprop)[ay](0), cM = (cK_img[aW][aW][cd] * cH_imgprop)[ay](0), i = (cK_img[ck] * cH_imgprop)[ay](0), cI = cO_src[bb]("/"), cJ = cO_src[m]("=") + 1, cH_imgprop = "", cH_imgprop = J(cK_img[aW], "ratio") ? "w" + cN + "-h" + i + "-c" + au : "s" + (cH_imgprop = cN < 30 ? cL < 30 ? cM : cL : cN) + au, cO_src = cO_src[aI](/(img\/a|proxy\/)/) ? cJ ? cO_src[bF](0, cJ) + cH_imgprop : cO_src + "=" + cH_imgprop : cO_src[D](cI[cI[cx] - 2], cH_imgprop), cK_img[bk + a2]("data-src", cO_src)) : cO_src[aI](/(img.youtube|i.ytimg)/) && (cO_src = cO_src[bc](0, cO_src[m]("/")) + "/mqdefault.jpg", cK_img[bk + a2]("data-src", cO_src)))
    };
    var cB = function(cK_paginationElement) { // cK is the pagination element
        var cH_pageSize, cI_label, cQ_labelFeedPath, cN_labelSearchPath, cM_maxResultsUrl, cP_pageUrl, cL_effectivePageSize, cO_currentPageUi;

        function cJ_createPageLink(cU_targetPage, cS_actualCurrentPage, i_textOrSvg) {
            var cR_li = aQ[bJ]("li"),
                cT_span = aQ[bJ]("span");
            I(cT_span, "btn btn-sm rounded-pill jt-icon-center");
            cT_span[be] = i_textOrSvg || cU_targetPage;
            cT_span[bk + a2]("data-page", cU_targetPage);

            if (cU_targetPage == cS_actualCurrentPage) {
                I(cT_span, "jt-btn-primary");
            } else {
                I(cT_span, "jt-btn-light hover-btn-primary");
                cT_span[cc + a4](G, function(cW_event) {
                    var cV_startIndex;
                    cW_event[ca]();
                    var clickedPage = cT_span[bB + a2]("data-page");
                    
                    jo.pagination_target_page = clickedPage; // Store for jo[e+"_date"] callback
                    jo.pagination_page_size = cH_pageSize; // Store for jo[e+"_date"] callback

                    if (1 == clickedPage) {
                        var navUrl = cI_label ? aG + "/search" + cN_labelSearchPath + "?max-results=" + cH_pageSize + "&page=" + clickedPage : aG;
                        M[bf][X] = navUrl;
                    } else {
                        cV_startIndex = (clickedPage - 1) * cH_pageSize;
                        Defer.js(aG + "/feeds/posts/summary/" + cQ_labelFeedPath + "?start-index=" + (cV_startIndex + 1) + "&alt=json&callback=jo." + e + "_date&max-results=1");
                    }
                });
            }
            cR_li[cy](cT_span);
            return cR_li;
        }

        if (cK_paginationElement[bB + a2]("data-pagination") != x) {
            cH_pageSize = cK_paginationElement[bB + a2]("data-posts");
            cI_label = cK_paginationElement[bB + a2]("data-label");
            cQ_labelFeedPath = (cI_label = bP(cI_label)) ? "-/" + cI_label + "/" : "";
            cN_labelSearchPath = cI_label ? "/label/" + cI_label : "";

            Defer.js(aG + "/feeds/posts/summary/" + cQ_labelFeedPath + "?alt=json&callback=jo." + e + "_" + bs + "&max-results=1");

            // MODIFIED: Determine current page for UI from window.location.href
            var currentBrowserUrl = M[bf][X]; // window.location.href
            var decodedBrowserUrl = j(currentBrowserUrl); // j is decodeURIComponent

            cP_pageUrl = co("page", decodedBrowserUrl); // Get 'page' param from browser's current URL
            cO_currentPageUi = cP_pageUrl ? q(cP_pageUrl) : 1; // This is the currentPage for UI rendering

            // cM_maxResultsUrl and cL_effectivePageSize were for possibly overriding cH_pageSize from URL,
            // but for UI rendering, cH_pageSize (from data-posts) and cO_currentPageUi (from current URL) are key.
            
            jo[e + "_" + bs] = function(cU_feedData) { // Callback for initial feed data (total results)
                var cS_feed = cU_feedData.feed,
                    totalItems = q(cS_feed.openSearch$totalResults.$t);
                
                if (q(cH_pageSize) < totalItems) {
                    // Use cO_currentPageUi (from window.location) and cH_pageSize (from data-posts)
                    var paginationData = S(totalItems, cO_currentPageUi, cH_pageSize, 5),
                        cR_ul = aQ[bJ]("ul"),
                        totalPages = paginationData.totalPages,
                        prevLink, firstPageLink, pageLink, lastPageLink, nextLink; // Declare vars

                    if (1 != paginationData.currentPage) {
                        prevLink = cJ_createPageLink(paginationData.currentPage - 1, paginationData.currentPage, '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>');
                        cR_ul[cy](prevLink);
                    }
                    if (!A(paginationData.pages, 1) && paginationData.startPage > 1) { // Ensure "1 .. " doesn't show if 1 is already in pages
                        firstPageLink = cJ_createPageLink(1, paginationData.currentPage, "1 . .");
                        cR_ul[cy](firstPageLink);
                    }
                    
                    for (var cT_idx = 0; cT_idx < paginationData.pages[cx]; cT_idx++) {
                        pageLink = cJ_createPageLink(paginationData.pages[cT_idx], paginationData.currentPage);
                        cR_ul[cy](pageLink);
                    }

                    if (!A(paginationData.pages, totalPages) && paginationData.endPage < totalPages) { // Ensure ".. last" doesn't show if last is already in pages
                        lastPageLink = cJ_createPageLink(totalPages, paginationData.currentPage, ". . " + totalPages);
                        cR_ul[cy](lastPageLink);
                    }
                    if (paginationData.currentPage != totalPages) {
                        nextLink = cJ_createPageLink(paginationData.currentPage + 1, paginationData.currentPage, '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>');
                        cR_ul[cy](nextLink);
                    }
                    
                    cK_paginationElement[be] = "";
                    I(cR_ul, "pagination mb-0");
                    cK_paginationElement[cy](cR_ul);
                    bz(cK_paginationElement, "visually-hidden");
                }
            };

            jo[e + "_date"] = function(feedEntryData) {
                var feedEntry = feedEntryData.feed.entry[0],
                    timestamp = (feedEntry.published.$t[bc](0, 19) + feedEntry.published.$t[bc](23, 29))[D]("+", "%2B"),
                    targetPageNum = jo.pagination_target_page, // From click handler
                    pageSizeNum = jo.pagination_page_size;   // From click handler (original cH_pageSize)

                var finalNavUrl = aG + "/search" + cN_labelSearchPath + "?updated-max=" + timestamp + "&max-results=" + pageSizeNum + "&page=" + targetPageNum;
                M[bf][X] = finalNavUrl;
            };

        } else {
            bz(cK_paginationElement, "visually-hidden");
        }
    };


    function b3(cI_url, cH_element) { // Renamed
        var i_xhr = new bX; // Renamed
        i_xhr[bY](bB, cI_url), i_xhr[cr](bx, P), i_xhr[bh](null), i_xhr[cc + a4](cD, function() {
            var cJ_match = i_xhr[aD][aI](/<title>(.*?)<\/title>/);
            cH_element[be] = cJ_match[1][D](br + cn, "")
        })
    }
    jo[ct] = function(cM_element) { // Renamed
        var cH_id = aH(), // Renamed
            cL_label = cM_element[bB + a2]("data-label"),
            cJ_title = cM_element[bB + a2]("data-title"),
            cQ_items = cM_element[bB + a2]("data-items"),
            cK_shuffle = cM_element[bB + a2]("data-shuffle"),
            cI_noItem = cM_element[bB + a2]("data-no-item"),
            i_funcName = cM_element[bB + a2]("data-func"), // Renamed
            cP_callbackName = cM_element[bB + a2]("data-callback"), // Renamed
            cR_maxResults = cI_noItem ? q(cQ_items) + 1 : cQ_items, // Renamed
            cN_feedLabel = cL_label || cM_element[be], // Renamed
            cO_labelsArray = cN_feedLabel[bb](","), // Renamed
            cL_feedPathPart = "", // Renamed
            cL_feedPathPart = 1 < cO_labelsArray[cx] ? cN_feedLabel ? "-/" + bP(cO_labelsArray[b0[aj](b0[bl]() * cO_labelsArray[cx])]) + "/?" : "?" : cN_feedLabel && cN_feedLabel != x ? "-/" + bP(cN_feedLabel[a8]()) + "/?" : "?";
        Defer.js(aG + "/feeds/posts/summary/" + cL_feedPathPart + "alt=json&callback=jo." + k + "_" + bs + "_" + cH_id + "&max-results=" + cR_maxResults), jo[k + "_" + bs + "_" + cH_id] = function(cX_feed) { // Renamed
            var c1_totalResults = q(cX_feed.feed.openSearch$totalResults.$t), // Renamed
                cZ_categories = cX_feed.feed.category; // Renamed
            if (0 < c1_totalResults) {
                for (var c0_data = { // Renamed
                        title: cJ_title,
                        posts: [],
                        categories: cZ_categories
                    }, cS_entries = cX_feed.feed.entry, cU_count = 0, cV_i = 0; cV_i < cS_entries[cx]; ++cV_i) { // Renamed
                    var cT_post, c2_dateStr, cY_entry = cS_entries[cV_i], // Renamed
                        cW_url = cY_entry.link[cY_entry.link[cx] - 1][X]; // Renamed
                    if (cU_count == cQ_items) {
                        break
                    }
                    cW_url != cI_noItem && (cU_count++, (cT_post = {}).grup_id = cH_id, cT_post.url = cW_url, cT_post.title = cY_entry[aT].$t, cT_post.summary = cY_entry.summary.$t[a8](), cT_post.img = cY_entry.media$thumbnail && cY_entry.media$thumbnail.url, cT_post.author = cY_entry.author[0].name.$t, cT_post.comment = cY_entry.thr$total && cY_entry.thr$total.$t, cT_post.label = cY_entry.category, c2_dateStr = cY_entry.published.$t, cY_entry = (cW_dateObj = new cb(c2_dateStr))[bB + aa](), c2_dateStr = cW_dateObj[bB + a9]() + 1, cW_dateObj = cW_dateObj[bB + a7](), cT_post.date = cW_dateObj + "/" + c2_dateStr + "/" + cY_entry, c0_data.posts[aq](cT_post))
                }
                var funcToCall = M[i_funcName]; // Renamed cX
                typeof funcToCall === bq && 0 < c0_data.posts[cx] && (cK_shuffle && (c0_data.posts = cs(c0_data.posts)[bF](0, cK_shuffle)), cM_element[be] = funcToCall(c0_data)[a8](), bz(cM_element, "visually-hidden"), Defer.dom(".lazy-" + cH_id, 1, "loaded", E), !cP_callbackName || typeof(callbackToCall = M[cP_callbackName]) === bq && callbackToCall()) // Renamed cX
            }
        }
    };
    var y = function(cK_pager) { // Renamed
        for (var cI_links = cK_pager[cw]("a"), i_idx = 0; i_idx < cI_links[cx]; ++i_idx) { // Renamed
            var cH_link = cI_links[i_idx], // Renamed
                cJ_href = cH_link[X], // Renamed
                cL_span = aQ[bJ]("span"); // Renamed
            I(cL_span, "d-block fw-bold pt-2 jt-text-primary"), cH_link[cy](cL_span), b3(cJ_href, cL_span)
        }
    };

    function ah() {
        (bT && bT[F] || f && f[F] ? bz : I)(cv, "header-animate")
    }

    function z(cI_element, i_callback) { // Renamed
        function cJ_handler(cK_event) { // Renamed
            cI_element[V](cK_event[L]) || (i_callback(), cH_remover()) // Renamed
        }
        var cH_remover = function() { // Renamed
            aQ[aM + a4](G, cJ_handler)
        };
        aQ[cc + a4](G, cJ_handler)
    }

    function Q(i_src) { // Renamed
        i_src != cp[X] && (I(ab, "loader"), cp[X] = i_src, cq[bj] = i_src), J(ab, "d-none") && (bz(ab, "d-none"), i_src = N[aC][aI](/<script.*?src='(.*?)'/)[1], Defer.js(i_src, "comment-js", 500, function() {
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
    }), cz && cz[cc + a4](G, function(i_event) { // Renamed
        i_event[ca](), bw(aZ, "dark-mode"), null !== bC && bC[bk + aS]("theme", J(aZ, "dark-mode") ? "dark" : "light")
    }), M[cc + a4](bV, function() {
        (1 <= this[aF] && null !== cv ? I : bz)(cv, "shadow-sm"), (1E3 <= this[aF] && null !== at ? bz : I)(at, "d-none")
    }, !1), cq && cq[cc + a4](cD, function(i_event) { // Renamed
        bz(ab, "loader")
    }), bS && bS[cc + a4](G, function(i_event) { // Renamed
        i_event[ca](), Q(this[X]), "add-comment" != ab[aW][ci] && aQ[w]("add-comment")[cy](ab)
    });
    for (var bH = 0; bH < by[cx]; ++bH) {
        by[bH][cc + a4](G, function(i_event) { // Renamed
            i_event[ca]();
            var commentId = this[bB + a2]("data-comment-id");
            Q(this[X]), ab[aW][ci] != "c" + commentId && aQ[w]("c" + commentId)[cy](ab)
        })
    }
    for (bH = 0; bH < bZ[cx]; ++bH) {
        var bi_form = bZ[bH]; // Renamed
        bi_form[cc + a4](aX, function(cJ_event) { // Renamed
            cJ_event[ca]();
            var cI_targetForm = cJ_event[L]; // Renamed
            I(cI_targetForm, "loading");
            var i_formData = new FormData(cI_targetForm), // Renamed
                cH_payload = "blogID=" + r; // Renamed
            i_formData[aE](function(cL_value, cK_key) { // Renamed
                cH_payload += "&" + bP(cK_key) + "=" + bP(cL_value)
            });
            var contactFormUrl = ce + Z + "contact-form.do";
            var xhr = new bX; // Renamed i
            xhr[bY](av, contactFormUrl), xhr[cr](bx, b8), xhr[bh](cH_payload), xhr[ac] = function() {
                var cK_responseJson; // Renamed
                bz(cI_targetForm, "loading"), 4 === this[cf] && 200 === this[cF] && "" != this[cl] && ((cK_responseJson = an(this[aD][a8]())) && "true" == cK_responseJson.details.emailSentStatus ? (cI_targetForm[C](), bz(cI_targetForm, "send-error"), I(cI_targetForm, "send-success")) : (bz(cI_targetForm, "send-success"), I(cI_targetForm, "send-error")))
            }
        })
    }

    function c(cQ_initLazy) { // Renamed
        if (cQ_initLazy && (aQ[aM + a4](bL, c), aQ[aM + a4](Y, c), aQ[aM + a4](bV, c)), Defer.dom(".custom-posts", 1, null, jo[ct], null, {
                rootMargin: "200%"
            }), 0 < H[cx]) {
            for (var cW_i = 0; cW_i < H[cx]; ++cW_i) { // Renamed
                var cT_noscript = H[cW_i], // Renamed
                    cU_html = cT_noscript[be], // Renamed
                    cH_textarea = aQ[bJ]("textarea");
                cH_textarea[be] = cU_html[D](/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"');
                var divWrapper = aQ[bJ]("div"); // Renamed cU
                divWrapper[be] = cH_textarea.value, 0 == cW_i && I(divWrapper, "feature-image full-width"), cT_noscript[aW][cj + bO](divWrapper, cT_noscript)
            }
            Defer.dom('[lazyload="true"]', 1, "loaded", E, null, {
                rootMargin: "200%"
            })
        }
        if (null !== cg) {
            if (null !== aJ && null !== aP && (aP[be] = aJ[be], aP[bk + a2]("data-no-item", aJ[bB + a2]("data-no-item"))), null !== aA) {
                for (var cJ_elements = cg[cw](bK + "," + bI), cL_adNodes = aA[ch], cI_adCount = cL_adNodes[cx], cX_validTargets = [], cW_idx = 0; cW_idx < cJ_elements[cx]; cW_idx++) {
                    var cR_ignoredParent = cJ_elements[cW_idx][bU](bI);
                    cR_ignoredParent && cJ_elements[cW_idx] != cR_ignoredParent || cX_validTargets[aq](cJ_elements[cW_idx])
                }
                for (var cM_targetNode, cW_adIdx = 0; cW_adIdx < cI_adCount; cW_adIdx++) {
                    cW_adIdx == cI_adCount - 1 ? cg[cy](cL_adNodes[0]) : (cM_targetNode = cW_adIdx == cI_adCount - 1 ? cX_validTargets[cX_validTargets[cx] - 1] : cX_validTargets[b0[bu](cX_validTargets[cx] / cI_adCount) * cW_adIdx], (cM_targetNode = 0 == cW_adIdx && cX_validTargets[cx] > 0 ? cX_validTargets[0] : cM_targetNode && cM_targetNode[bG]) && cM_targetNode[aW][cj + bO](cL_adNodes[0], cM_targetNode))
                }
            }
        }
        if (bn && bn != x && ak && null !== cg[bA]) {
            for (var cS_headings = cg[cw]("h2,h3,h4,h5,h6"), cK_tocDiv = aQ[bJ]("div"), cQ_tocPositionEl = cg[bv](n), cO_tocItems = [], cW_hIdx = 0; cW_hIdx < cS_headings[cx]; cW_hIdx++) { // Renamed
                var cV_heading = cS_headings[cW_hIdx],
                    cP_id = cV_heading[bR][D](/[^\w!?]/g, "_")[D](/__/g, "_"),
                    cN_level = q(cV_heading[bM][D]("H", ""));
                cV_heading[ci] = cP_id, cO_tocItems[aq]({
                    level: cN_level,
                    title: cV_heading[bR],
                    id: cP_id
                })
            }
            null === cQ_tocPositionEl ? cQ_tocPositionEl = cg[bA] : cQ_tocPositionEl && cQ_tocPositionEl[bG] && (cQ_tocPositionEl = cQ_tocPositionEl[bG]), 0 < cO_tocItems[cx] && (cK_tocDiv[be] = ak(cO_tocItems)[a8](), cQ_tocPositionEl && cQ_tocPositionEl[aW][cj + bO](cK_tocDiv, cQ_tocPositionEl))
        }
    }
    cA || (aR && (typeof adsbygoogle === cE && (adsbygoogle = []), Defer.js(ce + "pagead2.googlesyndication.com/pagead/js/" + cC + ".js?client=" + aR, cC, 100)), v && v != x && Defer.js(ce + "www.googletagmanager.com/gtag/js?id=" + v, bE, 100, function() {
        function i() {
            dataLayer[aq](arguments)
        }
        i("js", new Date), i(O, v)
    }), bd && bd()), r && Defer.css(ce + Z + "dyn-css/authorization.css?targetBlogID=" + r);

    // Update page title if on a paginated page (ae was 'page' param from initial aO)
    var pageParamForTitle = co("page", M[bf][X]);
    pageParamForTitle && (aQ[aT] = aQ[aT][D](br, br + b6 + " " + pageParamForTitle + br));

    Defer.dom(".lazyload", 1, "loaded", E);
    Defer.dom("#post-pager", 1, null, y, null, {
        rootMargin: "200%"
    });
    Defer.dom("#pagination", 1, null, cB, null, {
        rootMargin: "200%"
    });
    b5 ? c(!1) : (null !== bC && bC[bk + aS]("lazy", 1), aQ[cc + a4](bL, c), aQ[cc + a4](Y, c), aQ[cc + a4](bV, c));
}();
