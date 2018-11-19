"function" != typeof Function.prototype.bind && (Function.prototype.bind = function(e) {
  var t = Array.prototype.slice.call(arguments, 1), i = this, n = function() {}, s = function() {
    return i.apply(this instanceof n ? this :e || {}, t.concat(Array.prototype.slice.call(arguments)));
  };
  return n.prototype = this.prototype || {}, s.prototype = new n(), s;
}), function() {
  var e = Date, t = Date.CultureStrings ? Date.CultureStrings.lang :null, i = {}, n = {
    getFromKey:function(e, t) {
      var i;
      return i = Date.CultureStrings && Date.CultureStrings[t] && Date.CultureStrings[t][e] ? Date.CultureStrings[t][e] :n.buildFromDefault(e), 
      "/" === e.charAt(0) && (i = n.buildFromRegex(e, t)), i;
    },
    getFromObjectValues:function(e, t) {
      var i, s = {};
      for (i in e) e.hasOwnProperty(i) && (s[i] = n.getFromKey(e[i], t));
      return s;
    },
    getFromObjectKeys:function(e, t) {
      var i, s = {};
      for (i in e) e.hasOwnProperty(i) && (s[n.getFromKey(i, t)] = e[i]);
      return s;
    },
    getFromArray:function(e, t) {
      for (var i = [], s = 0; s < e.length; s++) s in e && (i[s] = n.getFromKey(e[s], t));
      return i;
    },
    buildFromDefault:function(e) {
      var t, i, n, s;
      switch (e) {
       case "name":
        t = "en-US";
        break;

       case "englishName":
       case "nativeName":
        t = "English (United States)";
        break;

       case "twoDigitYearMax":
        t = 2049;
        break;

       case "firstDayOfWeek":
        t = 0;
        break;

       default:
        t = e, n = e.split("_"), i = n.length, i > 1 && "/" !== e.charAt(0) && ("initial" !== (s = n[i - 1].toLowerCase()) && "abbr" !== s || (t = n[0]));
      }
      return t;
    },
    buildFromRegex:function(e, t) {
      return Date.CultureStrings && Date.CultureStrings[t] && Date.CultureStrings[t][e] ? new RegExp(Date.CultureStrings[t][e], "i") :new RegExp(e.replace(new RegExp("/", "g"), ""), "i");
    }
  }, s = function(e, t) {
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
  }, r = function(e, s) {
    var r = s || t;
    return i[e] = e, "object" == typeof e ? e instanceof Array ? n.getFromArray(e, r) :n.getFromObjectKeys(e, r) :n.getFromKey(e, r);
  }, o = function(e) {
    var t = Date.Config.i18n + e + ".js", i = document.getElementsByTagName("head")[0] || document.documentElement, n = document.createElement("script");
    n.src = t;
    var s = {
      done:function() {}
    };
    return n.onload = n.onreadystatechange = function() {
      this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (s.done(), 
      i.removeChild(n));
    }, setTimeout(function() {
      i.insertBefore(n, i.firstChild);
    }, 0), {
      done:function(e) {
        s.done = function() {
          e && setTimeout(e, 0);
        };
      }
    };
  }, a = {
    buildFromMethodHash:function(e) {
      var t;
      for (t in e) e.hasOwnProperty(t) && (e[t] = a[e[t]]());
      return e;
    },
    timeZoneDST:function() {
      return r({
        CHADT:"+1345",
        NZDT:"+1300",
        AEDT:"+1100",
        ACDT:"+1030",
        AZST:"+0500",
        IRDT:"+0430",
        EEST:"+0300",
        CEST:"+0200",
        BST:"+0100",
        PMDT:"-0200",
        ADT:"-0300",
        NDT:"-0230",
        EDT:"-0400",
        CDT:"-0500",
        MDT:"-0600",
        PDT:"-0700",
        AKDT:"-0800",
        HADT:"-0900"
      });
    },
    timeZoneStandard:function() {
      return r({
        LINT:"+1400",
        TOT:"+1300",
        CHAST:"+1245",
        NZST:"+1200",
        NFT:"+1130",
        SBT:"+1100",
        AEST:"+1000",
        ACST:"+0930",
        JST:"+0900",
        CWST:"+0845",
        CT:"+0800",
        ICT:"+0700",
        MMT:"+0630",
        BST:"+0600",
        NPT:"+0545",
        IST:"+0530",
        PKT:"+0500",
        AFT:"+0430",
        MSK:"+0400",
        IRST:"+0330",
        FET:"+0300",
        EET:"+0200",
        CET:"+0100",
        GMT:"+0000",
        UTC:"+0000",
        CVT:"-0100",
        GST:"-0200",
        BRT:"-0300",
        NST:"-0330",
        AST:"-0400",
        EST:"-0500",
        CST:"-0600",
        MST:"-0700",
        PST:"-0800",
        AKST:"-0900",
        MIT:"-0930",
        HST:"-1000",
        SST:"-1100",
        BIT:"-1200"
      });
    },
    timeZones:function(e) {
      var t;
      e.timezones = [];
      for (t in e.abbreviatedTimeZoneStandard) e.abbreviatedTimeZoneStandard.hasOwnProperty(t) && e.timezones.push({
        name:t,
        offset:e.abbreviatedTimeZoneStandard[t]
      });
      for (t in e.abbreviatedTimeZoneDST) e.abbreviatedTimeZoneDST.hasOwnProperty(t) && e.timezones.push({
        name:t,
        offset:e.abbreviatedTimeZoneDST[t],
        dst:!0
      });
      return e.timezones;
    },
    days:function() {
      return r([ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]);
    },
    dayAbbr:function() {
      return r([ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]);
    },
    dayShortNames:function() {
      return r([ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ]);
    },
    dayFirstLetters:function() {
      return r([ "S_Sun_Initial", "M_Mon_Initial", "T_Tues_Initial", "W_Wed_Initial", "T_Thu_Initial", "F_Fri_Initial", "S_Sat_Initial" ]);
    },
    months:function() {
      return r([ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]);
    },
    monthAbbr:function() {
      return r([ "Jan_Abbr", "Feb_Abbr", "Mar_Abbr", "Apr_Abbr", "May_Abbr", "Jun_Abbr", "Jul_Abbr", "Aug_Abbr", "Sep_Abbr", "Oct_Abbr", "Nov_Abbr", "Dec_Abbr" ]);
    },
    formatPatterns:function() {
      return n.getFromObjectValues({
        shortDate:"M/d/yyyy",
        longDate:"dddd, MMMM dd, yyyy",
        shortTime:"h:mm tt",
        longTime:"h:mm:ss tt",
        fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",
        sortableDateTime:"yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",
        rfc1123:"ddd, dd MMM yyyy HH:mm:ss",
        monthDay:"MMMM dd",
        yearMonth:"MMMM, yyyy"
      }, Date.i18n.currentLanguage());
    },
    regex:function() {
      return n.getFromObjectValues({
        inTheMorning:"/( in the )(morn(ing)?)\\b/",
        thisMorning:"/(this )(morn(ing)?)\\b/",
        amThisMorning:"/(\b\\d(am)? )(this )(morn(ing)?)/",
        inTheEvening:"/( in the )(even(ing)?)\\b/",
        thisEvening:"/(this )(even(ing)?)\\b/",
        pmThisEvening:"/(\b\\d(pm)? )(this )(even(ing)?)/",
        jan:"/jan(uary)?/",
        feb:"/feb(ruary)?/",
        mar:"/mar(ch)?/",
        apr:"/apr(il)?/",
        may:"/may/",
        jun:"/jun(e)?/",
        jul:"/jul(y)?/",
        aug:"/aug(ust)?/",
        sep:"/sep(t(ember)?)?/",
        oct:"/oct(ober)?/",
        nov:"/nov(ember)?/",
        dec:"/dec(ember)?/",
        sun:"/^su(n(day)?)?/",
        mon:"/^mo(n(day)?)?/",
        tue:"/^tu(e(s(day)?)?)?/",
        wed:"/^we(d(nesday)?)?/",
        thu:"/^th(u(r(s(day)?)?)?)?/",
        fri:"/fr(i(day)?)?/",
        sat:"/^sa(t(urday)?)?/",
        future:"/^next/",
        past:"/^last|past|prev(ious)?/",
        add:"/^(\\+|aft(er)?|from|hence)/",
        subtract:"/^(\\-|bef(ore)?|ago)/",
        yesterday:"/^yes(terday)?/",
        today:"/^t(od(ay)?)?/",
        tomorrow:"/^tom(orrow)?/",
        now:"/^n(ow)?/",
        millisecond:"/^ms|milli(second)?s?/",
        second:"/^sec(ond)?s?/",
        minute:"/^mn|min(ute)?s?/",
        hour:"/^h(our)?s?/",
        week:"/^w(eek)?s?/",
        month:"/^m(onth)?s?/",
        day:"/^d(ay)?s?/",
        year:"/^y(ear)?s?/",
        shortMeridian:"/^(a|p)/",
        longMeridian:"/^(a\\.?m?\\.?|p\\.?m?\\.?)/",
        timezone:"/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\\s*(\\+|\\-)\\s*\\d\\d\\d\\d?)|gmt|utc)/",
        ordinalSuffix:"/^\\s*(st|nd|rd|th)/",
        timeContext:"/^\\s*(\\:|a(?!u|p)|p)/"
      }, Date.i18n.currentLanguage());
    }
  }, l = function() {
    var e = n.getFromObjectValues({
      name:"name",
      englishName:"englishName",
      nativeName:"nativeName",
      amDesignator:"AM",
      pmDesignator:"PM",
      firstDayOfWeek:"firstDayOfWeek",
      twoDigitYearMax:"twoDigitYearMax",
      dateElementOrder:"mdy"
    }, Date.i18n.currentLanguage()), t = a.buildFromMethodHash({
      dayNames:"days",
      abbreviatedDayNames:"dayAbbr",
      shortestDayNames:"dayShortNames",
      firstLetterDayNames:"dayFirstLetters",
      monthNames:"months",
      abbreviatedMonthNames:"monthAbbr",
      formatPatterns:"formatPatterns",
      regexPatterns:"regex",
      abbreviatedTimeZoneDST:"timeZoneDST",
      abbreviatedTimeZoneStandard:"timeZoneStandard"
    });
    return s(e, t), a.timeZones(e), e;
  };
  e.i18n = {
    __:function(e, t) {
      return r(e, t);
    },
    currentLanguage:function() {
      return t || "en-US";
    },
    setLanguage:function(i, n, s) {
      var r = !1;
      if (n || "en-US" === i || Date.CultureStrings && Date.CultureStrings[i]) t = i, 
      Date.CultureStrings = Date.CultureStrings || {}, Date.CultureStrings.lang = i, Date.CultureInfo = new l(); else if (!Date.CultureStrings || !Date.CultureStrings[i]) if ("undefined" != typeof exports && this.exports !== exports) try {
        require("../i18n/" + i + ".js"), t = i, Date.CultureStrings.lang = i, Date.CultureInfo = new l();
      } catch (e) {
        throw new Error("The DateJS IETF language tag '" + i + "' could not be loaded by Node. It likely does not exist.");
      } else {
        if (!Date.Config || !Date.Config.i18n) return Date.console.error("The DateJS IETF language tag '" + i + "' is not available and has not been loaded."), 
        !1;
        r = !0, o(i).done(function() {
          t = i, Date.CultureStrings = Date.CultureStrings || {}, Date.CultureStrings.lang = i, 
          Date.CultureInfo = new l(), e.Parsing.Normalizer.buildReplaceData(), e.Grammar && e.Grammar.buildGrammarFormats(), 
          s && setTimeout(s, 0);
        });
      }
      e.Parsing.Normalizer.buildReplaceData(), e.Grammar && e.Grammar.buildGrammarFormats(), 
      !r && s && setTimeout(s, 0);
    },
    getLoggedKeys:function() {
      return i;
    },
    updateCultureInfo:function() {
      Date.CultureInfo = new l();
    }
  }, e.i18n.updateCultureInfo();
}(), function() {
  var e = Date, t = e.prototype, i = function(e, t) {
    return t || (t = 2), ("000" + e).slice(-1 * t);
  };
  "undefined" != typeof window && "undefined" != typeof window.console && "undefined" != typeof window.console.log ? e.console = console :e.console = {
    log:function() {},
    error:function() {}
  }, e.Config = e.Config || {}, e.initOverloads = function() {
    e.now ? e._now || (e._now = e.now) :e._now = function() {
      return new Date().getTime();
    }, e.now = function(t) {
      return t ? e.present() :e._now();
    }, t.toISOString || (t.toISOString = function() {
      return this.getUTCFullYear() + "-" + i(this.getUTCMonth() + 1) + "-" + i(this.getUTCDate()) + "T" + i(this.getUTCHours()) + ":" + i(this.getUTCMinutes()) + ":" + i(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z";
    }), t._toString === undefined && (t._toString = t.toString);
  }, e.initOverloads(), e.today = function() {
    return new Date().clearTime();
  }, e.present = function() {
    return new Date();
  }, e.compare = function(e, t) {
    if (isNaN(e) || isNaN(t)) throw new Error(e + " - " + t);
    if (e instanceof Date && t instanceof Date) return e < t ? -1 :e > t ? 1 :0;
    throw new TypeError(e + " - " + t);
  }, e.equals = function(e, t) {
    return 0 === e.compareTo(t);
  }, e.getDayName = function(e) {
    return Date.CultureInfo.dayNames[e];
  }, e.getDayNumberFromName = function(e) {
    for (var t = Date.CultureInfo.dayNames, i = Date.CultureInfo.abbreviatedDayNames, n = Date.CultureInfo.shortestDayNames, s = e.toLowerCase(), r = 0; r < t.length; r++) if (t[r].toLowerCase() === s || i[r].toLowerCase() === s || n[r].toLowerCase() === s) return r;
    return -1;
  }, e.getMonthNumberFromName = function(e) {
    for (var t = Date.CultureInfo.monthNames, i = Date.CultureInfo.abbreviatedMonthNames, n = e.toLowerCase(), s = 0; s < t.length; s++) if (t[s].toLowerCase() === n || i[s].toLowerCase() === n) return s;
    return -1;
  }, e.getMonthName = function(e) {
    return Date.CultureInfo.monthNames[e];
  }, e.isLeapYear = function(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  }, e.getDaysInMonth = function(t, i) {
    return !i && e.validateMonth(t) && (i = t, t = Date.today().getFullYear()), [ 31, e.isLeapYear(t) ? 29 :28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][i];
  }, t.getDaysInMonth = function() {
    return e.getDaysInMonth(this.getFullYear(), this.getMonth());
  }, e.getTimezoneAbbreviation = function(e, t) {
    var i, n = t ? Date.CultureInfo.abbreviatedTimeZoneDST :Date.CultureInfo.abbreviatedTimeZoneStandard;
    for (i in n) if (n.hasOwnProperty(i) && n[i] === e) return i;
    return null;
  }, e.getTimezoneOffset = function(e, t) {
    var i, n = [], s = Date.CultureInfo.timezones;
    for (e || (e = new Date().getTimezone()), i = 0; i < s.length; i++) s[i].name === e.toUpperCase() && n.push(i);
    if (!s[n[0]]) return null;
    if (1 === n.length || !t) return s[n[0]].offset;
    for (i = 0; i < n.length; i++) if (s[n[i]].dst) return s[n[i]].offset;
  }, e.getQuarter = function(e) {
    return e = e || new Date(), [ 1, 2, 3, 4 ][Math.floor(e.getMonth() / 3)];
  }, e.getDaysLeftInQuarter = function(e) {
    e = e || new Date();
    var t = new Date(e);
    return t.setMonth(t.getMonth() + 3 - t.getMonth() % 3, 0), Math.floor((t - e) / 864e5);
  };
  var n = function(e, t, i, n) {
    if (n = n || "Object", void 0 === e) return !1;
    if ("number" != typeof e) throw new TypeError(e + " is not a Number.");
    return !(e < t || e > i);
  };
  e.validateMillisecond = function(e) {
    return n(e, 0, 999, "millisecond");
  }, e.validateSecond = function(e) {
    return n(e, 0, 59, "second");
  }, e.validateMinute = function(e) {
    return n(e, 0, 59, "minute");
  }, e.validateHour = function(e) {
    return n(e, 0, 23, "hour");
  }, e.validateDay = function(t, i, s) {
    return i !== undefined && null !== i && s !== undefined && null !== s && n(t, 1, e.getDaysInMonth(i, s), "day");
  }, e.validateWeek = function(e) {
    return n(e, 0, 53, "week");
  }, e.validateMonth = function(e) {
    return n(e, 0, 11, "month");
  }, e.validateYear = function(e) {
    return n(e, -271822, 275760, "year");
  }, e.validateTimezone = function(e) {
    return 1 === {
      ACDT:1,
      ACST:1,
      ACT:1,
      ADT:1,
      AEDT:1,
      AEST:1,
      AFT:1,
      AKDT:1,
      AKST:1,
      AMST:1,
      AMT:1,
      ART:1,
      AST:1,
      AWDT:1,
      AWST:1,
      AZOST:1,
      AZT:1,
      BDT:1,
      BIOT:1,
      BIT:1,
      BOT:1,
      BRT:1,
      BST:1,
      BTT:1,
      CAT:1,
      CCT:1,
      CDT:1,
      CEDT:1,
      CEST:1,
      CET:1,
      CHADT:1,
      CHAST:1,
      CHOT:1,
      ChST:1,
      CHUT:1,
      CIST:1,
      CIT:1,
      CKT:1,
      CLST:1,
      CLT:1,
      COST:1,
      COT:1,
      CST:1,
      CT:1,
      CVT:1,
      CWST:1,
      CXT:1,
      DAVT:1,
      DDUT:1,
      DFT:1,
      EASST:1,
      EAST:1,
      EAT:1,
      ECT:1,
      EDT:1,
      EEDT:1,
      EEST:1,
      EET:1,
      EGST:1,
      EGT:1,
      EIT:1,
      EST:1,
      FET:1,
      FJT:1,
      FKST:1,
      FKT:1,
      FNT:1,
      GALT:1,
      GAMT:1,
      GET:1,
      GFT:1,
      GILT:1,
      GIT:1,
      GMT:1,
      GST:1,
      GYT:1,
      HADT:1,
      HAEC:1,
      HAST:1,
      HKT:1,
      HMT:1,
      HOVT:1,
      HST:1,
      ICT:1,
      IDT:1,
      IOT:1,
      IRDT:1,
      IRKT:1,
      IRST:1,
      IST:1,
      JST:1,
      KGT:1,
      KOST:1,
      KRAT:1,
      KST:1,
      LHST:1,
      LINT:1,
      MAGT:1,
      MART:1,
      MAWT:1,
      MDT:1,
      MET:1,
      MEST:1,
      MHT:1,
      MIST:1,
      MIT:1,
      MMT:1,
      MSK:1,
      MST:1,
      MUT:1,
      MVT:1,
      MYT:1,
      NCT:1,
      NDT:1,
      NFT:1,
      NPT:1,
      NST:1,
      NT:1,
      NUT:1,
      NZDT:1,
      NZST:1,
      OMST:1,
      ORAT:1,
      PDT:1,
      PET:1,
      PETT:1,
      PGT:1,
      PHOT:1,
      PHT:1,
      PKT:1,
      PMDT:1,
      PMST:1,
      PONT:1,
      PST:1,
      PYST:1,
      PYT:1,
      RET:1,
      ROTT:1,
      SAKT:1,
      SAMT:1,
      SAST:1,
      SBT:1,
      SCT:1,
      SGT:1,
      SLST:1,
      SRT:1,
      SST:1,
      SYOT:1,
      TAHT:1,
      THA:1,
      TFT:1,
      TJT:1,
      TKT:1,
      TLT:1,
      TMT:1,
      TOT:1,
      TVT:1,
      UCT:1,
      ULAT:1,
      UTC:1,
      UYST:1,
      UYT:1,
      UZT:1,
      VET:1,
      VLAT:1,
      VOLT:1,
      VOST:1,
      VUT:1,
      WAKT:1,
      WAST:1,
      WAT:1,
      WEDT:1,
      WEST:1,
      WET:1,
      WST:1,
      YAKT:1,
      YEKT:1,
      Z:1
    }[e];
  }, e.validateTimezoneOffset = function(e) {
    return e > -841 && e < 721;
  };
}(), function() {
  var e = Date, t = e.prototype, i = function(e, t) {
    return t || (t = 2), ("000" + e).slice(-1 * t);
  }, n = function(t) {
    var i, n, s = {}, r = this;
    n = function(i, n, s) {
      if ("day" === i) {
        var o = t.month !== undefined ? t.month :r.getMonth(), a = t.year !== undefined ? t.year :r.getFullYear();
        return e[n](s, a, o);
      }
      return e[n](s);
    };
    for (i in t) if (hasOwnProperty.call(t, i)) {
      var o = "validate" + i.charAt(0).toUpperCase() + i.slice(1);
      e[o] && null !== t[i] && n(i, o, t[i]) && (s[i] = t[i]);
    }
    return s;
  };
  t.clearTime = function() {
    return this.setHours(0), this.setMinutes(0), this.setSeconds(0), this.setMilliseconds(0), 
    this;
  }, t.setTimeToNow = function() {
    var e = new Date();
    return this.setHours(e.getHours()), this.setMinutes(e.getMinutes()), this.setSeconds(e.getSeconds()), 
    this.setMilliseconds(e.getMilliseconds()), this;
  }, t.clone = function() {
    return new Date(this.getTime());
  }, t.compareTo = function(e) {
    return Date.compare(this, e);
  }, t.equals = function(e) {
    return Date.equals(this, e !== undefined ? e :new Date());
  }, t.between = function(e, t) {
    return this.getTime() >= e.getTime() && this.getTime() <= t.getTime();
  }, t.isAfter = function(e) {
    return 1 === this.compareTo(e || new Date());
  }, t.isBefore = function(e) {
    return -1 === this.compareTo(e || new Date());
  }, t.isToday = t.isSameDay = function(e) {
    return this.clone().clearTime().equals((e || new Date()).clone().clearTime());
  }, t.addMilliseconds = function(e) {
    return e ? (this.setTime(this.getTime() + 1 * e), this) :this;
  }, t.addSeconds = function(e) {
    return e ? this.addMilliseconds(1e3 * e) :this;
  }, t.addMinutes = function(e) {
    return e ? this.addMilliseconds(6e4 * e) :this;
  }, t.addHours = function(e) {
    return e ? this.addMilliseconds(36e5 * e) :this;
  }, t.addDays = function(e) {
    return e ? (this.setDate(this.getDate() + 1 * e), this) :this;
  }, t.addWeekdays = function(e) {
    if (!e) return this;
    var t = this.getDay(), i = Math.ceil(Math.abs(e) / 7);
    if (0 !== t && 6 !== t || e > 0 && (this.next().monday(), this.addDays(-1), t = this.getDay()), 
    e < 0) {
      for (;e < 0; ) this.addDays(-1), 0 !== (t = this.getDay()) && 6 !== t && e++;
      return this;
    }
    return (e > 5 || 6 - t <= e) && (e += 2 * i), this.addDays(e);
  }, t.addWeeks = function(e) {
    return e ? this.addDays(7 * e) :this;
  }, t.addMonths = function(t) {
    if (!t) return this;
    var i = this.getDate();
    return this.setDate(1), this.setMonth(this.getMonth() + 1 * t), this.setDate(Math.min(i, e.getDaysInMonth(this.getFullYear(), this.getMonth()))), 
    this;
  }, t.addQuarters = function(e) {
    return e ? this.addMonths(3 * e) :this;
  }, t.addYears = function(e) {
    return e ? this.addMonths(12 * e) :this;
  }, t.add = function(e) {
    if ("number" == typeof e) return this._orient = e, this;
    var t = e;
    return t.day && t.day - this.getDate() != 0 && this.setDate(t.day), t.milliseconds && this.addMilliseconds(t.milliseconds), 
    t.seconds && this.addSeconds(t.seconds), t.minutes && this.addMinutes(t.minutes), 
    t.hours && this.addHours(t.hours), t.weeks && this.addWeeks(t.weeks), t.months && this.addMonths(t.months), 
    t.years && this.addYears(t.years), t.days && this.addDays(t.days), this;
  }, t.getWeek = function(e) {
    var t, i = new Date(this.valueOf());
    e ? (i.addMinutes(i.getTimezoneOffset()), t = i.clone()) :t = this;
    var n = (t.getDay() + 6) % 7;
    i.setDate(i.getDate() - n + 3);
    var s = i.valueOf();
    return i.setMonth(0, 1), 4 !== i.getDay() && i.setMonth(0, 1 + (4 - i.getDay() + 7) % 7), 
    1 + Math.ceil((s - i) / 6048e5);
  }, t.getISOWeek = function() {
    return i(this.getWeek(!0));
  }, t.setWeek = function(e) {
    return e - this.getWeek() == 0 ? 1 !== this.getDay() ? this.moveToDayOfWeek(1, this.getDay() > 1 ? -1 :1) :this :this.moveToDayOfWeek(1, this.getDay() > 1 ? -1 :1).addWeeks(e - this.getWeek());
  }, t.setQuarter = function(e) {
    var t = Math.abs(3 * (e - 1) + 1);
    return this.setMonth(t, 1);
  }, t.getQuarter = function() {
    return Date.getQuarter(this);
  }, t.getDaysLeftInQuarter = function() {
    return Date.getDaysLeftInQuarter(this);
  }, t.moveToNthOccurrence = function(e, t) {
    if ("Weekday" === e) {
      if (t > 0) this.moveToFirstDayOfMonth(), this.is().weekday() && (t -= 1); else {
        if (!(t < 0)) return this;
        this.moveToLastDayOfMonth(), this.is().weekday() && (t += 1);
      }
      return this.addWeekdays(t);
    }
    var i = 0;
    if (t > 0) i = t - 1; else if (-1 === t) return this.moveToLastDayOfMonth(), this.getDay() !== e && this.moveToDayOfWeek(e, -1), 
    this;
    return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(e, 1).addWeeks(i);
  };
  var s = function(e, t, i) {
    return function(n, s) {
      var r = (n - this[e]() + i * (s || 1)) % i;
      return this[t](0 === r ? r += i * (s || 1) :r);
    };
  };
  t.moveToDayOfWeek = s("getDay", "addDays", 7), t.moveToMonth = s("getMonth", "addMonths", 12), 
  t.getOrdinate = function() {
    var e = this.getDate();
    return r(e);
  }, t.getOrdinalNumber = function() {
    return Math.ceil((this.clone().clearTime() - new Date(this.getFullYear(), 0, 1)) / 864e5) + 1;
  }, t.getTimezone = function() {
    return e.getTimezoneAbbreviation(this.getUTCOffset(), this.isDaylightSavingTime());
  }, t.setTimezoneOffset = function(e) {
    var t = this.getTimezoneOffset(), i = -6 * Number(e) / 10;
    return i || 0 === i ? this.addMinutes(i - t) :this;
  }, t.setTimezone = function(t) {
    return this.setTimezoneOffset(e.getTimezoneOffset(t));
  }, t.hasDaylightSavingTime = function() {
    return Date.today().set({
      month:0,
      day:1
    }).getTimezoneOffset() !== Date.today().set({
      month:6,
      day:1
    }).getTimezoneOffset();
  }, t.isDaylightSavingTime = function() {
    return Date.today().set({
      month:0,
      day:1
    }).getTimezoneOffset() !== this.getTimezoneOffset();
  }, t.getUTCOffset = function(e) {
    var t, i = -10 * (e || this.getTimezoneOffset()) / 6;
    return i < 0 ? (t = (i - 1e4).toString(), t.charAt(0) + t.substr(2)) :(t = (i + 1e4).toString(), 
    "+" + t.substr(1));
  }, t.getElapsed = function(e) {
    return (e || new Date()) - this;
  }, t.set = function(e) {
    e = n.call(this, e);
    var t;
    for (t in e) if (hasOwnProperty.call(e, t)) {
      var i, s, r = t.charAt(0).toUpperCase() + t.slice(1);
      "week" !== t && "month" !== t && "timezone" !== t && "timezoneOffset" !== t && (r += "s"), 
      i = "add" + r, s = "get" + r, "month" === t ? i += "s" :"year" === t && (s = "getFullYear"), 
      "day" !== t && "timezone" !== t && "timezoneOffset" !== t && "week" !== t && "hour" !== t ? this[i](e[t] - this[s]()) :"timezone" !== t && "timezoneOffset" !== t && "week" !== t && "hour" !== t || this["set" + r](e[t]);
    }
    return e.day && this.addDays(e.day - this.getDate()), this;
  }, t.moveToFirstDayOfMonth = function() {
    return this.set({
      day:1
    });
  }, t.moveToLastDayOfMonth = function() {
    return this.set({
      day:e.getDaysInMonth(this.getFullYear(), this.getMonth())
    });
  };
  var r = function(e) {
    switch (1 * e) {
     case 1:
     case 21:
     case 31:
      return "st";

     case 2:
     case 22:
      return "nd";

     case 3:
     case 23:
      return "rd";

     default:
      return "th";
    }
  }, o = function(e) {
    var t, i = Date.CultureInfo.formatPatterns;
    switch (e) {
     case "d":
      return this.toString(i.shortDate);

     case "D":
      return this.toString(i.longDate);

     case "F":
      return this.toString(i.fullDateTime);

     case "m":
      return this.toString(i.monthDay);

     case "r":
     case "R":
      return t = this.clone().addMinutes(this.getTimezoneOffset()), t.toString(i.rfc1123) + " GMT";

     case "s":
      return this.toString(i.sortableDateTime);

     case "t":
      return this.toString(i.shortTime);

     case "T":
      return this.toString(i.longTime);

     case "u":
      return t = this.clone().addMinutes(this.getTimezoneOffset()), t.toString(i.universalSortableDateTime);

     case "y":
      return this.toString(i.yearMonth);

     default:
      return !1;
    }
  }, a = function(t) {
    return function(n) {
      if ("\\" === n.charAt(0)) return n.replace("\\", "");
      switch (n) {
       case "hh":
        return i(t.getHours() < 13 ? 0 === t.getHours() ? 12 :t.getHours() :t.getHours() - 12);

       case "h":
        return t.getHours() < 13 ? 0 === t.getHours() ? 12 :t.getHours() :t.getHours() - 12;

       case "HH":
        return i(t.getHours());

       case "H":
        return t.getHours();

       case "mm":
        return i(t.getMinutes());

       case "m":
        return t.getMinutes();

       case "ss":
        return i(t.getSeconds());

       case "s":
        return t.getSeconds();

       case "yyyy":
        return i(t.getFullYear(), 4);

       case "yy":
        return i(t.getFullYear());

       case "y":
        return t.getFullYear();

       case "E":
       case "dddd":
        return Date.CultureInfo.dayNames[t.getDay()];

       case "ddd":
        return Date.CultureInfo.abbreviatedDayNames[t.getDay()];

       case "dd":
        return i(t.getDate());

       case "d":
        return t.getDate();

       case "MMMM":
        return Date.CultureInfo.monthNames[t.getMonth()];

       case "MMM":
        return Date.CultureInfo.abbreviatedMonthNames[t.getMonth()];

       case "MM":
        return i(t.getMonth() + 1);

       case "M":
        return t.getMonth() + 1;

       case "t":
        return t.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) :Date.CultureInfo.pmDesignator.substring(0, 1);

       case "tt":
        return t.getHours() < 12 ? Date.CultureInfo.amDesignator :Date.CultureInfo.pmDesignator;

       case "S":
        return r(t.getDate());

       case "W":
        return t.getWeek();

       case "WW":
        return t.getISOWeek();

       case "Q":
        return "Q" + t.getQuarter();

       case "q":
        return String(t.getQuarter());

       case "z":
        return t.getTimezone();

       case "Z":
       case "X":
        return Date.getTimezoneOffset(t.getTimezone());

       case "ZZ":
        return -60 * t.getTimezoneOffset();

       case "u":
        return t.getDay();

       case "L":
        return e.isLeapYear(t.getFullYear()) ? 1 :0;

       case "B":
        return "@" + (t.getUTCSeconds() + 60 * t.getUTCMinutes() + 3600 * (t.getUTCHours() + 1)) / 86.4;

       default:
        return n;
      }
    };
  };
  t.toString = function(e, t) {
    if (!t && e && 1 === e.length && (output = o.call(this, e), output)) return output;
    var i = a(this);
    return e ? e.replace(/((\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S|q|Q|WW?W?W?)(?![^\[]*\]))/g, i).replace(/\[|\]/g, "") :this._toString();
  };
}(), function() {
  var e = Date, t = e.prototype, i = Number.prototype;
  t._orient = 1, t._nth = null, t._is = !1, t._same = !1, t._isSecond = !1, i._dateElement = "days", 
  t.next = function() {
    return this._move = !0, this._orient = 1, this;
  }, e.next = function() {
    return e.today().next();
  }, t.last = t.prev = t.previous = function() {
    return this._move = !0, this._orient = -1, this;
  }, e.last = e.prev = e.previous = function() {
    return e.today().last();
  }, t.is = function() {
    return this._is = !0, this;
  }, t.same = function() {
    return this._same = !0, this._isSecond = !1, this;
  }, t.today = function() {
    return this.same().day();
  }, t.weekday = function() {
    return this._nth ? c("Weekday").call(this) :this._move ? this.addWeekdays(this._orient) :!!this._is && (this._is = !1, 
    !this.is().sat() && !this.is().sun());
  }, t.weekend = function() {
    return !!this._is && (this._is = !1, this.is().sat() || this.is().sun());
  }, t.at = function(t) {
    return "string" == typeof t ? e.parse(this.toString("d") + " " + t) :this.set(t);
  }, i.fromNow = i.after = function(e) {
    var t = {};
    return t[this._dateElement] = this, (e ? e.clone() :new Date()).add(t);
  }, i.ago = i.before = function(e) {
    var t = {};
    return t["s" !== this._dateElement[this._dateElement.length - 1] ? this._dateElement + "s" :this._dateElement] = -1 * this, 
    (e ? e.clone() :new Date()).add(t);
  };
  var n, s = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/), r = "january february march april may june july august september october november december".split(/\s/), o = "Millisecond Second Minute Hour Day Week Month Year Quarter Weekday".split(/\s/), a = "Milliseconds Seconds Minutes Hours Date Week Month FullYear Quarter".split(/\s/), l = "final first second third fourth fifth".split(/\s/);
  t.toObject = function() {
    for (var e = {}, t = 0; t < o.length; t++) this["get" + a[t]] && (e[o[t].toLowerCase()] = this["get" + a[t]]());
    return e;
  }, e.fromObject = function(e) {
    return e.week = null, Date.today().set(e);
  };
  var c = function(t) {
    return function() {
      if (this._is) return this._is = !1, this.getDay() === t;
      if (this._move && (this._move = null), null !== this._nth) {
        this._isSecond && this.addSeconds(-1 * this._orient), this._isSecond = !1;
        var i = this._nth;
        this._nth = null;
        var n = this.clone().moveToLastDayOfMonth();
        if (this.moveToNthOccurrence(t, i), this > n) throw new RangeError(e.getDayName(t) + " does not occur " + i + " times in the month of " + e.getMonthName(n.getMonth()) + " " + n.getFullYear() + ".");
        return this;
      }
      return this.moveToDayOfWeek(t, this._orient);
    };
  }, u = function(t) {
    return function() {
      var i = e.today(), n = t - i.getDay();
      return 0 === t && 1 === Date.CultureInfo.firstDayOfWeek && 0 !== i.getDay() && (n += 7), 
      i.addDays(n);
    };
  }, h = function(e) {
    return function() {
      return this._is ? (this._is = !1, this.getMonth() === e) :this.moveToMonth(e, this._orient);
    };
  }, d = function(t) {
    return function() {
      return e.today().set({
        month:t,
        day:1
      });
    };
  }, f = function(i, n, s) {
    for (var r = 0; r < i.length; r++) e[i[r].toUpperCase()] = e[i[r].toUpperCase().substring(0, 3)] = r, 
    e[i[r]] = e[i[r].substring(0, 3)] = n(r), t[i[r]] = t[i[r].substring(0, 3)] = s(r);
  };
  f(s, u, c), f(r, d, h);
  for (var p = function(e) {
    return function() {
      if (this._isSecond) return this._isSecond = !1, this;
      if (this._same) {
        this._same = this._is = !1;
        var t = this.toObject(), i = (arguments[0] || new Date()).toObject(), n = "", s = e.toLowerCase();
        s = "s" === s[s.length - 1] ? s.substring(0, s.length - 1) :s;
        for (var r = o.length - 1; r > -1; r--) {
          if (n = o[r].toLowerCase(), t[n] !== i[n]) return !1;
          if (s === n) break;
        }
        return !0;
      }
      return "s" !== e.substring(e.length - 1) && (e += "s"), this._move && (this._move = null), 
      this["add" + e](this._orient);
    };
  }, m = function(e) {
    return function() {
      return this._dateElement = e, this;
    };
  }, g = 0; g < o.length; g++) "weekday" !== (n = o[g].toLowerCase()) && (t[n] = t[n + "s"] = p(o[g]), 
  i[n] = i[n + "s"] = m(n + "s"));
  t._ss = p("Second");
  for (var v = function(e) {
    return function(t) {
      return this._same ? this._ss(arguments[0]) :t || 0 === t ? this.moveToNthOccurrence(t, e) :(this._nth = e, 
      2 !== e || t !== undefined && null !== t ? this :(this._isSecond = !0, this.addSeconds(this._orient)));
    };
  }, y = 0; y < l.length; y++) t[l[y]] = v(0 === y ? -1 :y);
}(), function() {
  "use strict";
  Date.Parsing = {
    Exception:function(e) {
      this.message = "Parse error at '" + e.substring(0, 10) + " ...'";
    }
  };
  var e = Date.Parsing, t = {
    standard:[ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ],
    leap:[ 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335 ]
  };
  e.isLeapYear = function(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  };
  var i = {
    multiReplace:function(e, t) {
      var i;
      for (i in t) if (Object.prototype.hasOwnProperty.call(t, i)) {
        var n;
        "function" == typeof t[i] || (n = t[i] instanceof RegExp ? t[i] :new RegExp(t[i], "g")), 
        e = e.replace(n, i);
      }
      return e;
    },
    getDayOfYearFromWeek:function(e) {
      var t, i, n;
      return e.weekDay = e.weekDay || 0 === e.weekDay ? e.weekDay :1, t = new Date(e.year, 0, 4), 
      i = 0 === t.getDay() ? 7 :t.getDay(), n = i + 3, e.dayOfYear = 7 * e.week + (0 === e.weekDay ? 7 :e.weekDay) - n, 
      e;
    },
    getDayOfYear:function(e, t) {
      e.dayOfYear || (e = i.getDayOfYearFromWeek(e));
      for (var n = 0; n <= t.length; n++) {
        if (e.dayOfYear < t[n] || n === t.length) {
          e.day = e.day ? e.day :e.dayOfYear - t[n - 1];
          break;
        }
        e.month = n;
      }
      return e;
    },
    adjustForTimeZone:function(e, t) {
      var i;
      return "Z" === e.zone.toUpperCase() || 0 === e.zone_hours && 0 === e.zone_minutes ? i = -t.getTimezoneOffset() :(i = 60 * e.zone_hours + (e.zone_minutes || 0), 
      "+" === e.zone_sign && (i *= -1), i -= t.getTimezoneOffset()), t.setMinutes(t.getMinutes() + i), 
      t;
    },
    setDefaults:function(e) {
      return e.year = e.year || Date.today().getFullYear(), e.hours = e.hours || 0, e.minutes = e.minutes || 0, 
      e.seconds = e.seconds || 0, e.milliseconds = e.milliseconds || 0, (e.month || !e.week && !e.dayOfYear) && (e.month = e.month || 0, 
      e.day = e.day || 1), e;
    },
    dataNum:function(e, t, i, n) {
      var s = 1 * e;
      return t ? n ? e ? 1 * t(e) :e :e ? t(s) :e :i ? e && void 0 !== e ? s :e :e ? s :e;
    },
    timeDataProcess:function(e) {
      var t = {};
      for (var n in e.data) e.data.hasOwnProperty(n) && (t[n] = e.ignore[n] ? e.data[n] :i.dataNum(e.data[n], e.mods[n], e.explict[n], e.postProcess[n]));
      return e.data.secmins && (e.data.secmins = 60 * e.data.secmins.replace(",", "."), 
      t.minutes ? t.seconds || (t.seconds = e.data.secmins) :t.minutes = e.data.secmins, 
      delete e.secmins), t;
    },
    buildTimeObjectFromData:function(e) {
      return i.timeDataProcess({
        data:{
          year:e[1],
          month:e[5],
          day:e[7],
          week:e[8],
          dayOfYear:e[10],
          hours:e[15],
          zone_hours:e[23],
          zone_minutes:e[24],
          zone:e[21],
          zone_sign:e[22],
          weekDay:e[9],
          minutes:e[16],
          seconds:e[19],
          milliseconds:e[20],
          secmins:e[18]
        },
        mods:{
          month:function(e) {
            return e - 1;
          },
          weekDay:function(e) {
            return e = Math.abs(e), 7 === e ? 0 :e;
          },
          minutes:function(e) {
            return e.replace(":", "");
          },
          seconds:function(e) {
            return Math.floor(1 * e.replace(":", "").replace(",", "."));
          },
          milliseconds:function(e) {
            return 1e3 * e.replace(",", ".");
          }
        },
        postProcess:{
          minutes:!0,
          seconds:!0,
          milliseconds:!0
        },
        explict:{
          zone_hours:!0,
          zone_minutes:!0
        },
        ignore:{
          zone:!0,
          zone_sign:!0,
          secmins:!0
        }
      });
    },
    addToHash:function(e, t, i) {
      t = t, i = i;
      for (var n = t.length, s = 0; s < n; s++) e[t[s]] = i[s];
      return e;
    },
    combineRegex:function(e, t) {
      return new RegExp("((" + e.source + ")\\s(" + t.source + "))");
    },
    getDateNthString:function(e, t, i) {
      return e ? Date.today().addDays(i).toString("d") :t ? Date.today().last()[i]().toString("d") :void 0;
    },
    buildRegexData:function(e) {
      for (var t = [], i = e.length, n = 0; n < i; n++) "[object Array]" === Object.prototype.toString.call(e[n]) ? t.push(this.combineRegex(e[n][0], e[n][1])) :t.push(e[n]);
      return t;
    }
  };
  e.processTimeObject = function(n) {
    var s, r;
    return i.setDefaults(n), r = e.isLeapYear(n.year) ? t.leap :t.standard, n.month || !n.week && !n.dayOfYear ? n.dayOfYear = r[n.month] + n.day :i.getDayOfYear(n, r), 
    s = new Date(n.year, n.month, n.day, n.hours, n.minutes, n.seconds, n.milliseconds), 
    n.zone && i.adjustForTimeZone(n, s), s;
  }, e.ISO = {
    regex:/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-4])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?\s?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
    parse:function(t) {
      var n, s = t.match(this.regex);
      return s && s.length ? (n = i.buildTimeObjectFromData(s), n.year && (n.year || n.month || n.day || n.week || n.dayOfYear) ? e.processTimeObject(n) :null) :null;
    }
  }, e.Numeric = {
    isNumeric:function(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    regex:/\b([0-1]?[0-9])([0-3]?[0-9])([0-2]?[0-9]?[0-9][0-9])\b/i,
    parse:function(t) {
      var i, n, s = {}, r = Date.CultureInfo.dateElementOrder.split("");
      if (!this.isNumeric(t) || "+" === t[0] && "-" === t[0]) return null;
      if (t.length < 5 && t.indexOf(".") < 0 && t.indexOf("/") < 0) return s.year = t, 
      e.processTimeObject(s);
      if (!(i = t.match(this.regex)) || !i.length) return null;
      for (n = 0; n < r.length; n++) switch (r[n]) {
       case "d":
        s.day = i[n + 1];
        break;

       case "m":
        s.month = i[n + 1] - 1;
        break;

       case "y":
        s.year = i[n + 1];
      }
      return e.processTimeObject(s);
    }
  }, e.Normalizer = {
    regexData:function() {
      var e = Date.CultureInfo.regexPatterns;
      return i.buildRegexData([ e.tomorrow, e.yesterday, [ e.past, e.mon ], [ e.past, e.tue ], [ e.past, e.wed ], [ e.past, e.thu ], [ e.past, e.fri ], [ e.past, e.sat ], [ e.past, e.sun ] ]);
    },
    basicReplaceHash:function() {
      var e = Date.CultureInfo.regexPatterns;
      return {
        January:e.jan.source,
        February:e.feb,
        March:e.mar,
        April:e.apr,
        May:e.may,
        June:e.jun,
        July:e.jul,
        August:e.aug,
        September:e.sep,
        October:e.oct,
        November:e.nov,
        December:e.dec,
        "":/\bat\b/gi,
        " ":/\s{2,}/,
        am:e.inTheMorning,
        "9am":e.thisMorning,
        pm:e.inTheEvening,
        "7pm":e.thisEvening
      };
    },
    keys:function() {
      return [ i.getDateNthString(!0, !1, 1), i.getDateNthString(!0, !1, -1), i.getDateNthString(!1, !0, "monday"), i.getDateNthString(!1, !0, "tuesday"), i.getDateNthString(!1, !0, "wednesday"), i.getDateNthString(!1, !0, "thursday"), i.getDateNthString(!1, !0, "friday"), i.getDateNthString(!1, !0, "saturday"), i.getDateNthString(!1, !0, "sunday") ];
    },
    buildRegexFunctions:function() {
      var e = Date.CultureInfo.regexPatterns, t = Date.i18n.__, i = new RegExp("(\\b\\d\\d?(" + t("AM") + "|" + t("PM") + ")? )(" + e.tomorrow.source.slice(1) + ")", "i"), n = new RegExp(e.today.source + "(?!\\s*([+-]))\\b");
      this.replaceFuncs = [ [ n, function(e) {
        return e.length > 1 ? Date.today().toString("d") :e;
      } ], [ i, function(e, t) {
        return Date.today().addDays(1).toString("d") + " " + t;
      } ], [ e.amThisMorning, function(e, t) {
        return t;
      } ], [ e.pmThisEvening, function(e, t) {
        return t;
      } ] ];
    },
    buildReplaceData:function() {
      this.buildRegexFunctions(), this.replaceHash = i.addToHash(this.basicReplaceHash(), this.keys(), this.regexData());
    },
    stringReplaceFuncs:function(e) {
      for (var t = 0; t < this.replaceFuncs.length; t++) e = e.replace(this.replaceFuncs[t][0], this.replaceFuncs[t][1]);
      return e;
    },
    parse:function(t) {
      t = this.stringReplaceFuncs(t), t = i.multiReplace(t, this.replaceHash);
      try {
        var n = t.split(/([\s\-\.\,\/\x27]+)/);
        3 === n.length && e.Numeric.isNumeric(n[0]) && e.Numeric.isNumeric(n[2]) && n[2].length >= 4 && "d" === Date.CultureInfo.dateElementOrder[0] && (t = "1/" + n[0] + "/" + n[2]);
      } catch (e) {}
      return t;
    }
  }, e.Normalizer.buildReplaceData();
}(), function() {
  for (var e = Date.Parsing, t = e.Operators = {
    rtoken:function(t) {
      return function(i) {
        var n = i.match(t);
        if (n) return [ n[0], i.substring(n[0].length) ];
        throw new e.Exception(i);
      };
    },
    token:function() {
      return function(e) {
        return t.rtoken(new RegExp("^\\s*" + e + "\\s*"))(e);
      };
    },
    stoken:function(e) {
      return t.rtoken(new RegExp("^" + e));
    },
    until:function(e) {
      return function(t) {
        for (var i = [], n = null; t.length; ) {
          try {
            n = e.call(this, t);
          } catch (e) {
            i.push(n[0]), t = n[1];
            continue;
          }
          break;
        }
        return [ i, t ];
      };
    },
    many:function(e) {
      return function(t) {
        for (var i = [], n = null; t.length; ) {
          try {
            n = e.call(this, t);
          } catch (e) {
            return [ i, t ];
          }
          i.push(n[0]), t = n[1];
        }
        return [ i, t ];
      };
    },
    optional:function(e) {
      return function(t) {
        var i = null;
        try {
          i = e.call(this, t);
        } catch (e) {
          return [ null, t ];
        }
        return [ i[0], i[1] ];
      };
    },
    not:function(t) {
      return function(i) {
        try {
          t.call(this, i);
        } catch (e) {
          return [ null, i ];
        }
        throw new e.Exception(i);
      };
    },
    ignore:function(e) {
      return e ? function(t) {
        var i = null;
        return i = e.call(this, t), [ null, i[1] ];
      } :null;
    },
    product:function() {
      for (var e = arguments[0], i = Array.prototype.slice.call(arguments, 1), n = [], s = 0; s < e.length; s++) n.push(t.each(e[s], i));
      return n;
    },
    cache:function(t) {
      var i = {}, n = 0, s = [], r = Date.Config.CACHE_MAX || 1e5, o = null, a = function() {
        if (n === r) for (var e = 0; e < 10; e++) {
          var t = s.shift();
          t && (delete i[t], n--);
        }
      };
      return function(r) {
        a();
        try {
          o = i[r] = i[r] || t.call(this, r);
        } catch (e) {
          o = i[r] = e;
        }
        if (n++, s.push(r), o instanceof e.Exception) throw o;
        return o;
      };
    },
    any:function() {
      var t = arguments;
      return function(i) {
        for (var n = null, s = 0; s < t.length; s++) if (null != t[s]) {
          try {
            n = t[s].call(this, i);
          } catch (e) {
            n = null;
          }
          if (n) return n;
        }
        throw new e.Exception(i);
      };
    },
    each:function() {
      var t = arguments;
      return function(i) {
        for (var n = [], s = null, r = 0; r < t.length; r++) if (null != t[r]) {
          try {
            s = t[r].call(this, i);
          } catch (t) {
            throw new e.Exception(i);
          }
          n.push(s[0]), i = s[1];
        }
        return [ n, i ];
      };
    },
    all:function() {
      var e = arguments, t = t;
      return t.each(t.optional(e));
    },
    sequence:function(i, n, s) {
      return n = n || t.rtoken(/^\s*/), s = s || null, 1 === i.length ? i[0] :function(t) {
        for (var r = null, o = null, a = [], l = 0; l < i.length; l++) {
          try {
            r = i[l].call(this, t);
          } catch (e) {
            break;
          }
          a.push(r[0]);
          try {
            o = n.call(this, r[1]);
          } catch (e) {
            o = null;
            break;
          }
          t = o[1];
        }
        if (!r) throw new e.Exception(t);
        if (o) throw new e.Exception(o[1]);
        if (s) try {
          r = s.call(this, r[1]);
        } catch (t) {
          throw new e.Exception(r[1]);
        }
        return [ a, r ? r[1] :t ];
      };
    },
    between:function(e, i, n) {
      n = n || e;
      var s = t.each(t.ignore(e), i, t.ignore(n));
      return function(e) {
        var t = s.call(this, e);
        return [ [ t[0][0], r[0][2] ], t[1] ];
      };
    },
    list:function(e, i, n) {
      return i = i || t.rtoken(/^\s*/), n = n || null, e instanceof Array ? t.each(t.product(e.slice(0, -1), t.ignore(i)), e.slice(-1), t.ignore(n)) :t.each(t.many(t.each(e, t.ignore(i))), px, t.ignore(n));
    },
    set:function(i, n, s) {
      return n = n || t.rtoken(/^\s*/), s = s || null, function(r) {
        for (var o = null, a = null, l = null, c = null, u = [ [], r ], h = !1, d = 0; d < i.length; d++) {
          l = null, a = null, o = null, h = 1 === i.length;
          try {
            o = i[d].call(this, r);
          } catch (e) {
            continue;
          }
          if (c = [ [ o[0] ], o[1] ], o[1].length > 0 && !h) try {
            l = n.call(this, o[1]);
          } catch (e) {
            h = !0;
          } else h = !0;
          if (h || 0 !== l[1].length || (h = !0), !h) {
            for (var f = [], p = 0; p < i.length; p++) d !== p && f.push(i[p]);
            a = t.set(f, n).call(this, l[1]), a[0].length > 0 && (c[0] = c[0].concat(a[0]), 
            c[1] = a[1]);
          }
          if (c[1].length < u[1].length && (u = c), 0 === u[1].length) break;
        }
        if (0 === u[0].length) return u;
        if (s) {
          try {
            l = s.call(this, u[1]);
          } catch (t) {
            throw new e.Exception(u[1]);
          }
          u[1] = l[1];
        }
        return u;
      };
    },
    forward:function(e, t) {
      return function(i) {
        return e[t].call(this, i);
      };
    },
    replace:function(e, t) {
      return function(i) {
        var n = e.call(this, i);
        return [ t, n[1] ];
      };
    },
    process:function(e, t) {
      return function(i) {
        var n = e.call(this, i);
        return [ t.call(this, n[0]), n[1] ];
      };
    },
    min:function(t, i) {
      return function(n) {
        var s = i.call(this, n);
        if (s[0].length < t) throw new e.Exception(n);
        return s;
      };
    }
  }, i = function(e) {
    function t() {
      var t, i, n = null, s = [];
      return arguments.length > 1 ? n = Array.prototype.slice.call(arguments) :arguments[0] instanceof Array && (n = arguments[0]), 
      n ? (t = n.shift(), t.length > 0 ? (n.unshift(t[i]), s.push(e.apply(null, n)), n.shift(), 
      s) :void 0) :e.apply(null, arguments);
    }
    return t;
  }, n = "optional not ignore cache".split(/\s/), s = 0; s < n.length; s++) t[n[s]] = i(t[n[s]]);
  for (var o = function(e) {
    return function() {
      return arguments[0] instanceof Array ? e.apply(null, arguments[0]) :e.apply(null, arguments);
    };
  }, a = "each any all".split(/\s/), l = 0; l < a.length; l++) t[a[l]] = o(t[a[l]]);
}(), function() {
  var e = Date, t = function(e) {
    for (var i = [], n = 0; n < e.length; n++) e[n] instanceof Array ? i = i.concat(t(e[n])) :e[n] && i.push(e[n]);
    return i;
  }, i = function() {
    if (this.meridian && (this.hour || 0 === this.hour)) {
      if ("a" === this.meridian && this.hour > 11 && Date.Config.strict24hr) throw "Invalid hour and meridian combination";
      if ("p" === this.meridian && this.hour < 12 && Date.Config.strict24hr) throw "Invalid hour and meridian combination";
      "p" === this.meridian && this.hour < 12 ? this.hour = this.hour + 12 :"a" === this.meridian && 12 === this.hour && (this.hour = 0);
    }
  }, n = function() {
    var e = new Date();
    !this.hour && !this.minute || this.month || this.year || this.day || (this.day = e.getDate()), 
    this.year || (this.year = e.getFullYear()), this.month || 0 === this.month || (this.month = e.getMonth()), 
    this.day || (this.day = 1), this.hour || (this.hour = 0), this.minute || (this.minute = 0), 
    this.second || (this.second = 0), this.millisecond || (this.millisecond = 0);
  }, s = {
    getToday:function() {
      return this.now || -1 !== "hour minute second".indexOf(this.unit) ? new Date() :e.today();
    },
    setDaysFromWeekday:function(t, i) {
      var n;
      return i = i || 1, this.unit = "day", n = e.getDayNumberFromName(this.weekday) - t.getDay(), 
      this.days = n ? (n + 7 * i) % 7 :7 * i, this;
    },
    setMonthsFromMonth:function(e, t) {
      var i;
      return t = t || 1, this.unit = "month", i = this.month - e.getMonth(), this.months = i ? (i + 12 * t) % 12 :12 * t, 
      this.month = null, this;
    },
    setDMYFromWeekday:function() {
      var e = Date[this.weekday]();
      return this.day = e.getDate(), this.month || (this.month = e.getMonth()), this.year = e.getFullYear(), 
      this;
    },
    setUnitValue:function(e) {
      !this.value && this.operator && null !== this.operator && this[this.unit + "s"] && null !== this[this.unit + "s"] ? this[this.unit + "s"] = this[this.unit + "s"] + ("add" === this.operator ? 1 :-1) + (this.value || 0) * e :null != this[this.unit + "s"] && null == this.operator || (this.value || (this.value = 1), 
      this[this.unit + "s"] = this.value * e);
    },
    generateDateFromWeeks:function() {
      var e = this.weekday !== undefined ? this.weekday :"today", t = Date[e]().addWeeks(this.weeks);
      return this.now && t.setTimeToNow(), t;
    }
  };
  e.Translator = {
    hour:function(e) {
      return function() {
        this.hour = Number(e);
      };
    },
    minute:function(e) {
      return function() {
        this.minute = Number(e);
      };
    },
    second:function(e) {
      return function() {
        this.second = Number(e);
      };
    },
    secondAndMillisecond:function(e) {
      return function() {
        var t = e.match(/^([0-5][0-9])\.([0-9]{1,3})/);
        this.second = Number(t[1]), this.millisecond = Number(t[2]);
      };
    },
    meridian:function(e) {
      return function() {
        this.meridian = e.slice(0, 1).toLowerCase();
      };
    },
    timezone:function(e) {
      return function() {
        var t = e.replace(/[^\d\+\-]/g, "");
        t.length ? this.timezoneOffset = Number(t) :this.timezone = e.toLowerCase();
      };
    },
    day:function(e) {
      var t = e[0];
      return function() {
        if (this.day = Number(t.match(/\d+/)[0]), this.day < 1) throw "invalid day";
      };
    },
    month:function(e) {
      return function() {
        if (this.month = 3 === e.length ? "jan feb mar apr may jun jul aug sep oct nov dec".indexOf(e) / 4 :Number(e) - 1, 
        this.month < 0) throw "invalid month";
      };
    },
    year:function(e) {
      return function() {
        var t = Number(e);
        this.year = e.length > 2 ? t :t + (t + 2e3 < Date.CultureInfo.twoDigitYearMax ? 2e3 :1900);
      };
    },
    rday:function(e) {
      return function() {
        switch (e) {
         case "yesterday":
          this.days = -1;
          break;

         case "tomorrow":
          this.days = 1;
          break;

         case "today":
          this.days = 0;
          break;

         case "now":
          this.days = 0, this.now = !0;
        }
      };
    },
    finishExact:function(t) {
      var s;
      t = t instanceof Array ? t :[ t ];
      for (var r = 0; r < t.length; r++) t[r] && t[r].call(this);
      if (n.call(this), i.call(this), this.day > e.getDaysInMonth(this.year, this.month)) throw new RangeError(this.day + " is not a valid value for days.");
      return s = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond), 
      this.year < 100 && s.setFullYear(this.year), this.timezone ? s.set({
        timezone:this.timezone
      }) :this.timezoneOffset && s.set({
        timezoneOffset:this.timezoneOffset
      }), s;
    },
    finish:function(n) {
      var r, o, a, l;
      if (n = n instanceof Array ? t(n) :[ n ], 0 === n.length) return null;
      for (var c = 0; c < n.length; c++) "function" == typeof n[c] && n[c].call(this);
      if (this.now && !this.unit && !this.operator) return new Date();
      if (r = s.getToday.call(this), o = !!(this.days && null !== this.days || this.orient || this.operator), 
      a = "past" === this.orient || "subtract" === this.operator ? -1 :1, this.month && "week" === this.unit && (this.value = this.month + 1, 
      delete this.month, delete this.day), !this.month && 0 !== this.month || -1 === "year day hour minute second".indexOf(this.unit) || (this.value || (this.value = this.month + 1), 
      this.month = null, o = !0), o || !this.weekday || this.day || this.days || s.setDMYFromWeekday.call(this), 
      o && this.weekday && "month" !== this.unit && "week" !== this.unit && s.setDaysFromWeekday.call(this, r, a), 
      !this.weekday || "week" === this.unit || this.day || this.days || (l = Date[this.weekday](), 
      this.day = l.getDate(), l.getMonth() !== r.getMonth() && (this.month = l.getMonth())), 
      this.month && "day" === this.unit && this.operator && (this.value || (this.value = this.month + 1), 
      this.month = null), null != this.value && null != this.month && null != this.year && (this.day = 1 * this.value), 
      this.month && !this.day && this.value && (r.set({
        day:1 * this.value
      }), o || (this.day = 1 * this.value)), this.month || !this.value || "month" !== this.unit || this.now || (this.month = this.value, 
      o = !0), o && (this.month || 0 === this.month) && "year" !== this.unit && s.setMonthsFromMonth.call(this, r, a), 
      this.unit || (this.unit = "day"), s.setUnitValue.call(this, a), i.call(this), !this.month && 0 !== this.month || this.day || (this.day = 1), 
      !this.orient && !this.operator && "week" === this.unit && this.value && !this.day && !this.month) return Date.today().setWeek(this.value);
      if ("week" === this.unit && this.weeks && !this.day && !this.month) return s.generateDateFromWeeks.call(this);
      if (o && this.timezone && this.day && this.days && (this.day = this.days), o ? r.add(this) :r.set(this), 
      this.timezone) {
        this.timezone = this.timezone.toUpperCase();
        var u = e.getTimezoneOffset(this.timezone);
        r.hasDaylightSavingTime() && e.getTimezoneAbbreviation(u, r.isDaylightSavingTime()) !== this.timezone && (r.isDaylightSavingTime() ? r.addHours(-1) :r.addHours(1)), 
        r.setTimezoneOffset(u);
      }
      return r;
    }
  };
}(), function() {
  var e = Date;
  e.Grammar = {};
  var t, i = e.Parsing.Operators, n = e.Grammar, s = e.Translator;
  t = function() {
    return i.each(i.any.apply(null, arguments), i.not(n.ctoken2("timeContext")));
  }, n.datePartDelimiter = i.rtoken(/^([\s\-\.\,\/\x27]+)/), n.timePartDelimiter = i.stoken(":"), 
  n.whiteSpace = i.rtoken(/^\s*/), n.generalDelimiter = i.rtoken(/^(([\s\,]|at|@|on)+)/);
  var r = {};
  n.ctoken = function(e) {
    var t = r[e];
    if (!t) {
      for (var n = Date.CultureInfo.regexPatterns, s = e.split(/\s+/), o = [], a = 0; a < s.length; a++) o.push(i.replace(i.rtoken(n[s[a]]), s[a]));
      t = r[e] = i.any.apply(null, o);
    }
    return t;
  }, n.ctoken2 = function(e) {
    return i.rtoken(Date.CultureInfo.regexPatterns[e]);
  };
  var o = function(e, t, s, r) {
    n[e] = r ? i.cache(i.process(i.each(i.rtoken(t), i.optional(n.ctoken2(r))), s)) :i.cache(i.process(i.rtoken(t), s));
  }, a = function(e, t) {
    return i.cache(i.process(n.ctoken2(e), t));
  }, l = {}, c = function(e) {
    return l[e] = l[e] || n.format(e)[0], l[e];
  };
  n.allformats = function(e) {
    var t = [];
    if (e instanceof Array) for (var i = 0; i < e.length; i++) t.push(c(e[i])); else t.push(c(e));
    return t;
  }, n.formats = function(e) {
    if (e instanceof Array) {
      for (var t = [], n = 0; n < e.length; n++) t.push(c(e[n]));
      return i.any.apply(null, t);
    }
    return c(e);
  };
  var u = {
    timeFormats:function() {
      var e, t = [ "h", "hh", "H", "HH", "m", "mm", "s", "ss", "ss.s", "z", "zz" ], r = [ /^(0[0-9]|1[0-2]|[1-9])/, /^(0[0-9]|1[0-2])/, /^([0-1][0-9]|2[0-3]|[0-9])/, /^([0-1][0-9]|2[0-3])/, /^([0-5][0-9]|[0-9])/, /^[0-5][0-9]/, /^([0-5][0-9]|[0-9])/, /^[0-5][0-9]/, /^[0-5][0-9]\.[0-9]{1,3}/, /^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/, /^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/ ], l = [ s.hour, s.hour, s.hour, s.minute, s.minute, s.second, s.second, s.secondAndMillisecond, s.timezone, s.timezone, s.timezone ];
      for (e = 0; e < t.length; e++) o(t[e], r[e], l[e]);
      n.hms = i.cache(i.sequence([ n.H, n.m, n.s ], n.timePartDelimiter)), n.t = a("shortMeridian", s.meridian), 
      n.tt = a("longMeridian", s.meridian), n.zzz = a("timezone", s.timezone), n.timeSuffix = i.each(i.ignore(n.whiteSpace), i.set([ n.tt, n.zzz ])), 
      n.time = i.each(i.optional(i.ignore(i.stoken("T"))), n.hms, n.timeSuffix);
    },
    dateFormats:function() {
      var e, r = function() {
        return i.set(arguments, n.datePartDelimiter);
      }, a = [ "d", "dd", "M", "MM", "y", "yy", "yyy", "yyyy" ], l = [ /^([0-2]\d|3[0-1]|\d)/, /^([0-2]\d|3[0-1])/, /^(1[0-2]|0\d|\d)/, /^(1[0-2]|0\d)/, /^(\d+)/, /^(\d\d)/, /^(\d\d?\d?\d?)/, /^(\d\d\d\d)/ ], c = [ s.day, s.day, s.month, s.month, s.year, s.year, s.year, s.year ], u = [ "ordinalSuffix", "ordinalSuffix" ];
      for (e = 0; e < a.length; e++) o(a[e], l[e], c[e], u[e]);
      n.MMM = n.MMMM = i.cache(i.process(n.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), s.month)), 
      n.ddd = n.dddd = i.cache(i.process(n.ctoken("sun mon tue wed thu fri sat"), function(e) {
        return function() {
          this.weekday = e;
        };
      })), n.day = t(n.d, n.dd), n.month = t(n.M, n.MMM), n.year = t(n.yyyy, n.yy), n.mdy = r(n.ddd, n.month, n.day, n.year), 
      n.ymd = r(n.ddd, n.year, n.month, n.day), n.dmy = r(n.ddd, n.day, n.month, n.year), 
      n.date = function(e) {
        return (n[Date.CultureInfo.dateElementOrder] || n.mdy).call(this, e);
      };
    },
    relative:function() {
      n.orientation = i.process(n.ctoken("past future"), function(e) {
        return function() {
          this.orient = e;
        };
      }), n.operator = i.process(n.ctoken("add subtract"), function(e) {
        return function() {
          this.operator = e;
        };
      }), n.rday = i.process(n.ctoken("yesterday tomorrow today now"), s.rday), n.unit = i.process(n.ctoken("second minute hour day week month year"), function(e) {
        return function() {
          this.unit = e;
        };
      });
    }
  };
  n.buildGrammarFormats = function() {
    r = {}, u.timeFormats(), u.dateFormats(), u.relative(), n.value = i.process(i.rtoken(/^([-+]?\d+)?(st|nd|rd|th)?/), function(e) {
      return function() {
        this.value = e.replace(/\D/g, "");
      };
    }), n.expression = i.set([ n.rday, n.operator, n.value, n.unit, n.orientation, n.ddd, n.MMM ]), 
    n.format = i.process(i.many(i.any(i.process(i.rtoken(/^(dd?d?d?(?!e)|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function(t) {
      if (n[t]) return n[t];
      throw e.Parsing.Exception(t);
    }), i.process(i.rtoken(/^[^dMyhHmstz]+/), function(e) {
      return i.ignore(i.stoken(e));
    }))), function(e) {
      return i.process(i.each.apply(null, e), s.finishExact);
    }), n._start = i.process(i.set([ n.date, n.time, n.expression ], n.generalDelimiter, n.whiteSpace), s.finish);
  }, n.buildGrammarFormats(), n._formats = n.formats([ '"yyyy-MM-ddTHH:mm:ssZ"', "yyyy-MM-ddTHH:mm:ss.sz", "yyyy-MM-ddTHH:mm:ssZ", "yyyy-MM-ddTHH:mm:ssz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mmZ", "yyyy-MM-ddTHH:mmz", "yyyy-MM-ddTHH:mm", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "MMddyyyy", "ddMMyyyy", "Mddyyyy", "ddMyyyy", "Mdyyyy", "dMyyyy", "yyyy", "Mdyy", "dMyy", "d" ]), 
  n.start = function(e) {
    try {
      var t = n._formats.call({}, e);
      if (0 === t[1].length) return t;
    } catch (e) {}
    return n._start.call({}, e);
  };
}(), function() {
  function e(e) {
    var n;
    return e ? e instanceof Date ? e.clone() :(e.length >= 4 && "0" !== e.charAt(0) && "+" !== e.charAt(0) && "-" !== e.charAt(0) && (n = t.Parsing.ISO.parse(e) || t.Parsing.Numeric.parse(e)), 
    n instanceof Date && !isNaN(n.getTime()) ? n :(e = t.Parsing.Normalizer.parse(i.removeOrds(e)), 
    n = i.grammarParser(e), null !== n ? n :i.nativeFallback(e))) :null;
  }
  var t = Date, i = {
    removeOrds:function(e) {
      return ords = e.match(/\b(\d+)(?:st|nd|rd|th)\b/), e = ords && 2 === ords.length ? e.replace(ords[0], ords[1]) :e;
    },
    grammarParser:function(e) {
      var i = null;
      try {
        i = t.Grammar.start.call({}, e.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1"));
      } catch (e) {
        return null;
      }
      return 0 === i[1].length ? i[0] :null;
    },
    nativeFallback:function(e) {
      var t;
      try {
        return t = Date._parse(e), t || 0 === t ? new Date(t) :null;
      } catch (e) {
        return null;
      }
    }
  };
  t._parse || (t._parse = t.parse), t.parse = e, Date.getParseFunction = function(e) {
    var t = Date.Grammar.allformats(e);
    return function(e) {
      for (var i = null, n = 0; n < t.length; n++) {
        try {
          i = t[n].call({}, e);
        } catch (e) {
          continue;
        }
        if (0 === i[1].length) return i[0];
      }
      return null;
    };
  }, t.parseExact = function(e, i) {
    return t.getParseFunction(i)(e);
  };
}(), function() {
  var e = Date, i = e.prototype, n = function(e, t) {
    return t || (t = 2), ("000" + e).slice(-1 * t);
  }, s = {
    d:"dd",
    "%d":"dd",
    D:"ddd",
    "%a":"ddd",
    j:"dddd",
    l:"dddd",
    "%A":"dddd",
    S:"S",
    F:"MMMM",
    "%B":"MMMM",
    m:"MM",
    "%m":"MM",
    M:"MMM",
    "%b":"MMM",
    "%h":"MMM",
    n:"M",
    Y:"yyyy",
    "%Y":"yyyy",
    y:"yy",
    "%y":"yy",
    g:"h",
    "%I":"h",
    G:"H",
    h:"hh",
    H:"HH",
    "%H":"HH",
    i:"mm",
    "%M":"mm",
    s:"ss",
    "%S":"ss",
    "%r":"hh:mm tt",
    "%R":"H:mm",
    "%T":"H:mm:ss",
    "%X":"t",
    "%x":"d",
    "%e":"d",
    "%D":"MM/dd/yy",
    "%n":"\\n",
    "%t":"\\t",
    e:"z",
    T:"z",
    "%z":"z",
    "%Z":"z",
    Z:"ZZ",
    N:"u",
    w:"u",
    "%w":"u",
    W:"W",
    "%V":"W"
  }, r = {
    substitutes:function(e) {
      return s[e];
    },
    interpreted:function(i, s) {
      var r;
      switch (i) {
       case "%u":
        return s.getDay() + 1;

       case "z":
        return s.getOrdinalNumber();

       case "%j":
        return n(s.getOrdinalNumber(), 3);

       case "%U":
        var o = s.clone().set({
          month:0,
          day:1
        }).addDays(-1).moveToDayOfWeek(0), a = s.clone().addDays(1).moveToDayOfWeek(0, -1);
        return a < o ? "00" :n((a.getOrdinalNumber() - o.getOrdinalNumber()) / 7 + 1);

       case "%W":
        return n(s.getWeek());

       case "t":
        return e.getDaysInMonth(s.getFullYear(), s.getMonth());

       case "o":
       case "%G":
        return s.setWeek(s.getISOWeek()).toString("yyyy");

       case "%g":
        return s._format("%G").slice(-2);

       case "a":
       case "%p":
        return t("tt").toLowerCase();

       case "A":
        return t("tt").toUpperCase();

       case "u":
        return n(s.getMilliseconds(), 3);

       case "I":
        return s.isDaylightSavingTime() ? 1 :0;

       case "O":
        return s.getUTCOffset();

       case "P":
        return r = s.getUTCOffset(), r.substring(0, r.length - 2) + ":" + r.substring(r.length - 2);

       case "B":
        var l = new Date();
        return Math.floor((3600 * l.getHours() + 60 * l.getMinutes() + l.getSeconds() + 60 * (l.getTimezoneOffset() + 60)) / 86.4);

       case "c":
        return s.toISOString().replace(/\"/g, "");

       case "U":
        return e.strtotime("now");

       case "%c":
        return t("d") + " " + t("t");

       case "%C":
        return Math.floor(s.getFullYear() / 100 + 1);
      }
    },
    shouldOverrideDefaults:function(e) {
      switch (e) {
       case "%e":
        return !0;

       default:
        return !1;
      }
    },
    parse:function(e, t) {
      var i, n = t || new Date();
      return (i = r.substitutes(e)) ? i :(i = r.interpreted(e, n)) || e;
    }
  };
  e.normalizeFormat = function(e, t) {
    return e.replace(/(%|\\)?.|%%/g, function(e) {
      return r.parse(e, t);
    });
  }, e.strftime = function(e, t) {
    return Date.parse(t)._format(e);
  }, e.strtotime = function(t) {
    var i = e.parse(t);
    return Math.round(e.UTC(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate(), i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()) / 1e3);
  };
  var o = function(t) {
    return function(i) {
      var n, s = !1;
      return "\\" === i.charAt(0) || "%%" === i.substring(0, 2) ? i.replace("\\", "").replace("%%", "%") :(s = r.shouldOverrideDefaults(i), 
      n = e.normalizeFormat(i, t), n ? t.toString(n, s) :void 0);
    };
  };
  i._format = function(e) {
    var t = o(this);
    return e ? e.replace(/(%|\\)?.|%%/g, t) :this._toString();
  }, i.format || (i.format = i._format);
}(), function() {
  "use strict";
  var e = function(e) {
    return function() {
      return this[e];
    };
  }, t = function(e) {
    return function(t) {
      return this[e] = t, this;
    };
  }, i = [ "years", "months", "days", "hours", "minutes", "seconds", "milliseconds" ], n = function(i, n) {
    for (var s = 0; s < n.length; s++) {
      var r = n[s], o = r.slice(0, 1).toUpperCase() + r.slice(1);
      i.prototype[r] = 0, i.prototype["get" + o] = e(r), i.prototype["set" + o] = t(r);
    }
  }, s = function(e, t, i, n, r) {
    if (1 === arguments.length && "number" == typeof e) {
      var o = e < 0 ? -1 :1, a = Math.abs(e);
      this.setDays(Math.floor(a / 864e5) * o), a %= 864e5, this.setHours(Math.floor(a / 36e5) * o), 
      a %= 36e5, this.setMinutes(Math.floor(a / 6e4) * o), a %= 6e4, this.setSeconds(Math.floor(a / 1e3) * o), 
      a %= 1e3, this.setMilliseconds(a * o);
    } else this.set(e, t, i, n, r);
    return this.getTotalMilliseconds = function() {
      return 864e5 * this.getDays() + 36e5 * this.getHours() + 6e4 * this.getMinutes() + 1e3 * this.getSeconds();
    }, this.compareTo = function(e) {
      var t, i = new Date(1970, 1, 1, this.getHours(), this.getMinutes(), this.getSeconds());
      return t = null === e ? new Date(1970, 1, 1, 0, 0, 0) :new Date(1970, 1, 1, e.getHours(), e.getMinutes(), e.getSeconds()), 
      i < t ? -1 :i > t ? 1 :0;
    }, this.equals = function(e) {
      return 0 === this.compareTo(e);
    }, this.add = function(e) {
      return null === e ? this :this.addSeconds(e.getTotalMilliseconds() / 1e3);
    }, this.subtract = function(e) {
      return null === e ? this :this.addSeconds(-e.getTotalMilliseconds() / 1e3);
    }, this.addDays = function(e) {
      return new s(this.getTotalMilliseconds() + 864e5 * e);
    }, this.addHours = function(e) {
      return new s(this.getTotalMilliseconds() + 36e5 * e);
    }, this.addMinutes = function(e) {
      return new s(this.getTotalMilliseconds() + 6e4 * e);
    }, this.addSeconds = function(e) {
      return new s(this.getTotalMilliseconds() + 1e3 * e);
    }, this.addMilliseconds = function(e) {
      return new s(this.getTotalMilliseconds() + e);
    }, this.get12HourHour = function() {
      return this.getHours() > 12 ? this.getHours() - 12 :0 === this.getHours() ? 12 :this.getHours();
    }, this.getDesignator = function() {
      return this.getHours() < 12 ? Date.CultureInfo.amDesignator :Date.CultureInfo.pmDesignator;
    }, this.toString = function(e) {
      this._toString = function() {
        return null !== this.getDays() && this.getDays() > 0 ? this.getDays() + "." + this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds()) :this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds());
      }, this.p = function(e) {
        return e.toString().length < 2 ? "0" + e :e;
      };
      var t = this;
      return e ? e.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g, function(e) {
        switch (e) {
         case "d":
          return t.getDays();

         case "dd":
          return t.p(t.getDays());

         case "H":
          return t.getHours();

         case "HH":
          return t.p(t.getHours());

         case "h":
          return t.get12HourHour();

         case "hh":
          return t.p(t.get12HourHour());

         case "m":
          return t.getMinutes();

         case "mm":
          return t.p(t.getMinutes());

         case "s":
          return t.getSeconds();

         case "ss":
          return t.p(t.getSeconds());

         case "t":
          return (t.getHours() < 12 ? Date.CultureInfo.amDesignator :Date.CultureInfo.pmDesignator).substring(0, 1);

         case "tt":
          return t.getHours() < 12 ? Date.CultureInfo.amDesignator :Date.CultureInfo.pmDesignator;
        }
      }) :this._toString();
    }, this;
  };
  n(s, i.slice(2)), s.prototype.set = function(e, t, i, n, s) {
    this.setDays(e || this.getDays()), this.setHours(t || this.getHours()), this.setMinutes(i || this.getMinutes()), 
    this.setSeconds(n || this.getSeconds()), this.setMilliseconds(s || this.getMilliseconds());
  }, Date.prototype.getTimeOfDay = function() {
    return new s(0, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
  }, Date.TimeSpan = s, "undefined" != typeof window && (window.TimeSpan = s);
}(), function() {
  "use strict";
  var e = [ "years", "months", "days", "hours", "minutes", "seconds", "milliseconds" ], t = function(e) {
    return function() {
      return this[e];
    };
  }, i = function(e) {
    return function(t) {
      return this[e] = t, this;
    };
  }, n = function(e, n) {
    for (var s = 0; s < n.length; s++) {
      var r = n[s], o = r.slice(0, 1).toUpperCase() + r.slice(1);
      e.prototype[r] = 0, e.prototype["get" + o] = t(r), e.prototype["set" + o] = i(r);
    }
  }, s = function(e, t, i, n) {
    function s() {
      t.addMonths(-e), 12 === ++n.months && (n.years++, n.months = 0);
    }
    if (1 === e) for (;t > i; ) s(); else for (;t < i; ) s();
    n.months--, n.months *= e, n.years *= e;
  }, r = function(e, t, i) {
    var n = !1 == (t.isDaylightSavingTime() === i.isDaylightSavingTime());
    n && 1 === e ? t.addHours(-1) :n && t.addHours(1);
  }, o = function(e, t, i, n, o, a, l) {
    if (7 === arguments.length) this.set(e, t, i, n, o, a, l); else if (2 === arguments.length && arguments[0] instanceof Date && arguments[1] instanceof Date) {
      var c = arguments[0].clone(), u = arguments[1].clone(), h = c > u ? 1 :-1;
      this.dates = {
        start:arguments[0].clone(),
        end:arguments[1].clone()
      }, s(h, c, u, this), r(h, c, u);
      var d = u - c;
      if (0 !== d) {
        var f = new TimeSpan(d);
        this.set(this.years, this.months, f.getDays(), f.getHours(), f.getMinutes(), f.getSeconds(), f.getMilliseconds());
      }
    }
    return this;
  };
  n(o, e), o.prototype.set = function(e, t, i, n, s, r, o) {
    this.setYears(e || this.getYears()), this.setMonths(t || this.getMonths()), this.setDays(i || this.getDays()), 
    this.setHours(n || this.getHours()), this.setMinutes(s || this.getMinutes()), this.setSeconds(r || this.getSeconds()), 
    this.setMilliseconds(o || this.getMilliseconds());
  }, Date.TimePeriod = o, "undefined" != typeof window && (window.TimePeriod = o);
}(), function(e, t, i) {
  function n(i) {
    var n = t.console;
    r[i] || (r[i] = !0, e.migrateWarnings.push(i), n && n.warn && !e.migrateMute && (n.warn("JQMIGRATE: " + i), 
    e.migrateTrace && n.trace && n.trace()));
  }
  function s(t, i, s, r) {
    if (Object.defineProperty) try {
      return void Object.defineProperty(t, i, {
        configurable:!0,
        enumerable:!0,
        get:function() {
          return n(r), s;
        },
        set:function(e) {
          n(r), s = e;
        }
      });
    } catch (e) {}
    e._definePropertyBroken = !0, t[i] = s;
  }
  e.migrateVersion = "1.4.1";
  var r = {};
  e.migrateWarnings = [], t.console && t.console.log && t.console.log("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" :" with logging active") + ", version " + e.migrateVersion), 
  e.migrateTrace === i && (e.migrateTrace = !0), e.migrateReset = function() {
    r = {}, e.migrateWarnings.length = 0;
  }, "BackCompat" === document.compatMode && n("jQuery is not compatible with Quirks Mode");
  var o = e("<input/>", {
    size:1
  }).attr("size") && e.attrFn, a = e.attr, l = e.attrHooks.value && e.attrHooks.value.get || function() {
    return null;
  }, c = e.attrHooks.value && e.attrHooks.value.set || function() {
    return i;
  }, u = /^(?:input|button)$/i, h = /^[238]$/, d = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, f = /^(?:checked|selected)$/i;
  s(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, s, r, l) {
    var c = s.toLowerCase(), p = t && t.nodeType;
    return l && (a.length < 4 && n("jQuery.fn.attr( props, pass ) is deprecated"), t && !h.test(p) && (o ? s in o :e.isFunction(e.fn[s]))) ? e(t)[s](r) :("type" === s && r !== i && u.test(t.nodeName) && t.parentNode && n("Can't change the 'type' of an input or button in IE 6/7/8"), 
    !e.attrHooks[c] && d.test(c) && (e.attrHooks[c] = {
      get:function(t, n) {
        var s, r = e.prop(t, n);
        return !0 === r || "boolean" != typeof r && (s = t.getAttributeNode(n)) && !1 !== s.nodeValue ? n.toLowerCase() :i;
      },
      set:function(t, i, n) {
        var s;
        return !1 === i ? e.removeAttr(t, n) :(s = e.propFix[n] || n, s in t && (t[s] = !0), 
        t.setAttribute(n, n.toLowerCase())), n;
      }
    }, f.test(c) && n("jQuery.fn.attr('" + c + "') might use property instead of attribute")), 
    a.call(e, t, s, r));
  }, e.attrHooks.value = {
    get:function(e, t) {
      var i = (e.nodeName || "").toLowerCase();
      return "button" === i ? l.apply(this, arguments) :("input" !== i && "option" !== i && n("jQuery.fn.attr('value') no longer gets properties"), 
      t in e ? e.value :null);
    },
    set:function(e, t) {
      var i = (e.nodeName || "").toLowerCase();
      if ("button" === i) return c.apply(this, arguments);
      "input" !== i && "option" !== i && n("jQuery.fn.attr('value', val) no longer sets properties"), 
      e.value = t;
    }
  };
  var p, m, g = e.fn.init, v = e.find, y = e.parseJSON, b = /^\s*</, w = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, x = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, _ = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
  e.fn.init = function(t, s, r) {
    var o, a;
    return t && "string" == typeof t && !e.isPlainObject(s) && (o = _.exec(e.trim(t))) && o[0] && (b.test(t) || n("$(html) HTML strings must start with '<' character"), 
    o[3] && n("$(html) HTML text after last tag is ignored"), "#" === o[0].charAt(0) && (n("HTML string cannot start with a '#' character"), 
    e.error("JQMIGRATE: Invalid selector string (XSS)")), s && s.context && s.context.nodeType && (s = s.context), 
    e.parseHTML) ? g.call(this, e.parseHTML(o[2], s && s.ownerDocument || s || document, !0), s, r) :(a = g.apply(this, arguments), 
    t && t.selector !== i ? (a.selector = t.selector, a.context = t.context) :(a.selector = "string" == typeof t ? t :"", 
    t && (a.context = t.nodeType ? t :s || document)), a);
  }, e.fn.init.prototype = e.fn, e.find = function(e) {
    var t = Array.prototype.slice.call(arguments);
    if ("string" == typeof e && w.test(e)) try {
      document.querySelector(e);
    } catch (i) {
      e = e.replace(x, function(e, t, i, n) {
        return "[" + t + i + '"' + n + '"]';
      });
      try {
        document.querySelector(e), n("Attribute selector with '#' must be quoted: " + t[0]), 
        t[0] = e;
      } catch (e) {
        n("Attribute selector with '#' was not fixed: " + t[0]);
      }
    }
    return v.apply(this, t);
  };
  var S;
  for (S in v) Object.prototype.hasOwnProperty.call(v, S) && (e.find[S] = v[S]);
  e.parseJSON = function(e) {
    return e ? y.apply(this, arguments) :(n("jQuery.parseJSON requires a valid JSON string"), 
    null);
  }, e.uaMatch = function(e) {
    e = e.toLowerCase();
    var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
    return {
      browser:t[1] || "",
      version:t[2] || "0"
    };
  }, e.browser || (p = e.uaMatch(navigator.userAgent), m = {}, p.browser && (m[p.browser] = !0, 
  m.version = p.version), m.chrome ? m.webkit = !0 :m.webkit && (m.safari = !0), e.browser = m), 
  s(e, "browser", e.browser, "jQuery.browser is deprecated"), e.boxModel = e.support.boxModel = "CSS1Compat" === document.compatMode, 
  s(e, "boxModel", e.boxModel, "jQuery.boxModel is deprecated"), s(e.support, "boxModel", e.support.boxModel, "jQuery.support.boxModel is deprecated"), 
  e.sub = function() {
    function t(e, i) {
      return new t.fn.init(e, i);
    }
    e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, 
    t.sub = this.sub, t.fn.init = function(n, s) {
      var r = e.fn.init.call(this, n, s, i);
      return r instanceof t ? r :t(r);
    }, t.fn.init.prototype = t.fn;
    var i = t(document);
    return n("jQuery.sub() is deprecated"), t;
  }, e.fn.size = function() {
    return n("jQuery.fn.size() is deprecated; use the .length property"), this.length;
  };
  var C = !1;
  e.swap && e.each([ "height", "width", "reliableMarginRight" ], function(t, i) {
    var n = e.cssHooks[i] && e.cssHooks[i].get;
    n && (e.cssHooks[i].get = function() {
      var e;
      return C = !0, e = n.apply(this, arguments), C = !1, e;
    });
  }), e.swap = function(e, t, i, s) {
    var r, o, a = {};
    C || n("jQuery.swap() is undocumented and deprecated");
    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
    r = i.apply(e, s || []);
    for (o in t) e.style[o] = a[o];
    return r;
  }, e.ajaxSetup({
    converters:{
      "text json":e.parseJSON
    }
  });
  var T = e.fn.data;
  e.fn.data = function(t) {
    var s, r, o = this[0];
    return !o || "events" !== t || 1 !== arguments.length || (s = e.data(o, t), r = e._data(o, t), 
    s !== i && s !== r || r === i) ? T.apply(this, arguments) :(n("Use of jQuery.fn.data('events') is deprecated"), 
    r);
  };
  var k = /\/(java|ecma)script/i;
  e.clean || (e.clean = function(t, i, s, r) {
    i = i || document, i = !i.nodeType && i[0] || i, i = i.ownerDocument || i, n("jQuery.clean() is deprecated");
    var o, a, l, c, u = [];
    if (e.merge(u, e.buildFragment(t, i).childNodes), s) for (l = function(e) {
      if (!e.type || k.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) :e) :s.appendChild(e);
    }, o = 0; null != (a = u[o]); o++) e.nodeName(a, "script") && l(a) || (s.appendChild(a), 
    "undefined" != typeof a.getElementsByTagName && (c = e.grep(e.merge([], a.getElementsByTagName("script")), l), 
    u.splice.apply(u, [ o + 1, 0 ].concat(c)), o += c.length));
    return u;
  });
  var M = e.event.add, j = e.event.remove, P = e.event.trigger, E = e.fn.toggle, A = e.fn.live, D = e.fn.die, F = e.fn.load, I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", z = new RegExp("\\b(?:" + I + ")\\b"), L = /(?:^|\s)hover(\.\S+|)\b/, N = function(t) {
    return "string" != typeof t || e.event.special.hover ? t :(L.test(t) && n("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), 
    t && t.replace(L, "mouseenter$1 mouseleave$1"));
  };
  e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), 
  e.event.dispatch && s(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), 
  e.event.add = function(e, t, i, s, r) {
    e !== document && z.test(t) && n("AJAX events should be attached to document: " + t), 
    M.call(this, e, N(t || ""), i, s, r);
  }, e.event.remove = function(e, t, i, n, s) {
    j.call(this, e, N(t) || "", i, n, s);
  }, e.each([ "load", "unload", "error" ], function(t, i) {
    e.fn[i] = function() {
      var e = Array.prototype.slice.call(arguments, 0);
      return "load" === i && "string" == typeof e[0] ? F.apply(this, e) :(n("jQuery.fn." + i + "() is deprecated"), 
      e.splice(0, 0, i), arguments.length ? this.bind.apply(this, e) :(this.triggerHandler.apply(this, e), 
      this));
    };
  }), e.fn.toggle = function(t, i) {
    if (!e.isFunction(t) || !e.isFunction(i)) return E.apply(this, arguments);
    n("jQuery.fn.toggle(handler, handler...) is deprecated");
    var s = arguments, r = t.guid || e.guid++, o = 0, a = function(i) {
      var n = (e._data(this, "lastToggle" + t.guid) || 0) % o;
      return e._data(this, "lastToggle" + t.guid, n + 1), i.preventDefault(), s[n].apply(this, arguments) || !1;
    };
    for (a.guid = r; o < s.length; ) s[o++].guid = r;
    return this.click(a);
  }, e.fn.live = function(t, i, s) {
    return n("jQuery.fn.live() is deprecated"), A ? A.apply(this, arguments) :(e(this.context).on(t, this.selector, i, s), 
    this);
  }, e.fn.die = function(t, i) {
    return n("jQuery.fn.die() is deprecated"), D ? D.apply(this, arguments) :(e(this.context).off(t, this.selector || "**", i), 
    this);
  }, e.event.trigger = function(e, t, i, s) {
    return i || z.test(e) || n("Global events are undocumented and deprecated"), P.call(this, e, t, i || document, s);
  }, e.each(I.split("|"), function(t, i) {
    e.event.special[i] = {
      setup:function() {
        var t = this;
        return t !== document && (e.event.add(document, i + "." + e.guid, function() {
          e.event.trigger(i, Array.prototype.slice.call(arguments, 1), t, !0);
        }), e._data(this, i, e.guid++)), !1;
      },
      teardown:function() {
        return this !== document && e.event.remove(document, i + "." + e._data(this, i)), 
        !1;
      }
    };
  }), e.event.special.ready = {
    setup:function() {
      this === document && n("'ready' event is deprecated");
    }
  };
  var O = e.fn.andSelf || e.fn.addBack, H = e.fn.find;
  if (e.fn.andSelf = function() {
    return n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), O.apply(this, arguments);
  }, e.fn.find = function(e) {
    var t = H.apply(this, arguments);
    return t.context = this.context, t.selector = this.selector ? this.selector + " " + e :e, 
    t;
  }, e.Callbacks) {
    var R = e.Deferred, W = [ [ "resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved" ], [ "reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected" ], [ "notify", "progress", e.Callbacks("memory"), e.Callbacks("memory") ] ];
    e.Deferred = function(t) {
      var i = R(), s = i.promise();
      return i.pipe = s.pipe = function() {
        var t = arguments;
        return n("deferred.pipe() is deprecated"), e.Deferred(function(n) {
          e.each(W, function(r, o) {
            var a = e.isFunction(t[r]) && t[r];
            i[o[1]](function() {
              var t = a && a.apply(this, arguments);
              t && e.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) :n[o[0] + "With"](this === s ? n.promise() :this, a ? [ t ] :arguments);
            });
          }), t = null;
        }).promise();
      }, i.isResolved = function() {
        return n("deferred.isResolved is deprecated"), "resolved" === i.state();
      }, i.isRejected = function() {
        return n("deferred.isRejected is deprecated"), "rejected" === i.state();
      }, t && t.call(i, i), i;
    };
  }
}(jQuery, window), function(e, t) {
  function i(t, i) {
    var s, r, o, a = t.nodeName.toLowerCase();
    return "area" === a ? (s = t.parentNode, r = s.name, !(!t.href || !r || "map" !== s.nodeName.toLowerCase()) && (!!(o = e("img[usemap=#" + r + "]")[0]) && n(o))) :(/input|select|textarea|button|object/.test(a) ? !t.disabled :"a" === a ? t.href || i :i) && n(t);
  }
  function n(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
      return "hidden" === e.css(this, "visibility");
    }).length;
  }
  var s = 0, r = /^ui-id-\d+$/;
  e.ui = e.ui || {}, e.extend(e.ui, {
    version:"1.10.4",
    keyCode:{
      BACKSPACE:8,
      COMMA:188,
      DELETE:46,
      DOWN:40,
      END:35,
      ENTER:13,
      ESCAPE:27,
      HOME:36,
      LEFT:37,
      NUMPAD_ADD:107,
      NUMPAD_DECIMAL:110,
      NUMPAD_DIVIDE:111,
      NUMPAD_ENTER:108,
      NUMPAD_MULTIPLY:106,
      NUMPAD_SUBTRACT:109,
      PAGE_DOWN:34,
      PAGE_UP:33,
      PERIOD:190,
      RIGHT:39,
      SPACE:32,
      TAB:9,
      UP:38
    }
  }), e.fn.extend({
    focus:function(t) {
      return function(i, n) {
        return "number" == typeof i ? this.each(function() {
          var t = this;
          setTimeout(function() {
            e(t).focus(), n && n.call(t);
          }, i);
        }) :t.apply(this, arguments);
      };
    }(e.fn.focus),
    scrollParent:function() {
      var t;
      return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
        return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
      }).eq(0) :this.parents().filter(function() {
        return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
      }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) :t;
    },
    zIndex:function(i) {
      if (i !== t) return this.css("zIndex", i);
      if (this.length) for (var n, s, r = e(this[0]); r.length && r[0] !== document; ) {
        if (("absolute" === (n = r.css("position")) || "relative" === n || "fixed" === n) && (s = parseInt(r.css("zIndex"), 10), 
        !isNaN(s) && 0 !== s)) return s;
        r = r.parent();
      }
      return 0;
    },
    uniqueId:function() {
      return this.each(function() {
        this.id || (this.id = "ui-id-" + ++s);
      });
    },
    removeUniqueId:function() {
      return this.each(function() {
        r.test(this.id) && e(this).removeAttr("id");
      });
    }
  }), e.extend(e.expr[":"], {
    data:e.expr.createPseudo ? e.expr.createPseudo(function(t) {
      return function(i) {
        return !!e.data(i, t);
      };
    }) :function(t, i, n) {
      return !!e.data(t, n[3]);
    },
    focusable:function(t) {
      return i(t, !isNaN(e.attr(t, "tabindex")));
    },
    tabbable:function(t) {
      var n = e.attr(t, "tabindex"), s = isNaN(n);
      return (s || n >= 0) && i(t, !s);
    }
  }), e("<a>").outerWidth(1).jquery || e.each([ "Width", "Height" ], function(i, n) {
    function s(t, i, n, s) {
      return e.each(r, function() {
        i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), 
        s && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
      }), i;
    }
    var r = "Width" === n ? [ "Left", "Right" ] :[ "Top", "Bottom" ], o = n.toLowerCase(), a = {
      innerWidth:e.fn.innerWidth,
      innerHeight:e.fn.innerHeight,
      outerWidth:e.fn.outerWidth,
      outerHeight:e.fn.outerHeight
    };
    e.fn["inner" + n] = function(i) {
      return i === t ? a["inner" + n].call(this) :this.each(function() {
        e(this).css(o, s(this, i) + "px");
      });
    }, e.fn["outer" + n] = function(t, i) {
      return "number" != typeof t ? a["outer" + n].call(this, t) :this.each(function() {
        e(this).css(o, s(this, t, !0, i) + "px");
      });
    };
  }), e.fn.addBack || (e.fn.addBack = function(e) {
    return this.add(null == e ? this.prevObject :this.prevObject.filter(e));
  }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
    return function(i) {
      return arguments.length ? t.call(this, e.camelCase(i)) :t.call(this);
    };
  }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), 
  e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
    disableSelection:function() {
      return this.bind((e.support.selectstart ? "selectstart" :"mousedown") + ".ui-disableSelection", function(e) {
        e.preventDefault();
      });
    },
    enableSelection:function() {
      return this.unbind(".ui-disableSelection");
    }
  }), e.extend(e.ui, {
    plugin:{
      add:function(t, i, n) {
        var s, r = e.ui[t].prototype;
        for (s in n) r.plugins[s] = r.plugins[s] || [], r.plugins[s].push([ i, n[s] ]);
      },
      call:function(e, t, i) {
        var n, s = e.plugins[t];
        if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (n = 0; n < s.length; n++) e.options[s[n][0]] && s[n][1].apply(e.element, i);
      }
    },
    hasScroll:function(t, i) {
      if ("hidden" === e(t).css("overflow")) return !1;
      var n = i && "left" === i ? "scrollLeft" :"scrollTop", s = !1;
      return t[n] > 0 || (t[n] = 1, s = t[n] > 0, t[n] = 0, s);
    }
  });
}(jQuery), function(e, t) {
  var i = 0, n = Array.prototype.slice, s = e.cleanData;
  e.cleanData = function(t) {
    for (var i, n = 0; null != (i = t[n]); n++) try {
      e(i).triggerHandler("remove");
    } catch (e) {}
    s(t);
  }, e.widget = function(t, i, n) {
    var s, r, o, a, l = {}, c = t.split(".")[0];
    t = t.split(".")[1], s = c + "-" + t, n || (n = i, i = e.Widget), e.expr[":"][s.toLowerCase()] = function(t) {
      return !!e.data(t, s);
    }, e[c] = e[c] || {}, r = e[c][t], o = e[c][t] = function(e, t) {
      if (!this._createWidget) return new o(e, t);
      arguments.length && this._createWidget(e, t);
    }, e.extend(o, r, {
      version:n.version,
      _proto:e.extend({}, n),
      _childConstructors:[]
    }), a = new i(), a.options = e.widget.extend({}, a.options), e.each(n, function(t, n) {
      if (!e.isFunction(n)) return void (l[t] = n);
      l[t] = function() {
        var e = function() {
          return i.prototype[t].apply(this, arguments);
        }, s = function(e) {
          return i.prototype[t].apply(this, e);
        };
        return function() {
          var t, i = this._super, r = this._superApply;
          return this._super = e, this._superApply = s, t = n.apply(this, arguments), this._super = i, 
          this._superApply = r, t;
        };
      }();
    }), o.prototype = e.widget.extend(a, {
      widgetEventPrefix:r ? a.widgetEventPrefix || t :t
    }, l, {
      constructor:o,
      namespace:c,
      widgetName:t,
      widgetFullName:s
    }), r ? (e.each(r._childConstructors, function(t, i) {
      var n = i.prototype;
      e.widget(n.namespace + "." + n.widgetName, o, i._proto);
    }), delete r._childConstructors) :i._childConstructors.push(o), e.widget.bridge(t, o);
  }, e.widget.extend = function(i) {
    for (var s, r, o = n.call(arguments, 1), a = 0, l = o.length; a < l; a++) for (s in o[a]) r = o[a][s], 
    o[a].hasOwnProperty(s) && r !== t && (e.isPlainObject(r) ? i[s] = e.isPlainObject(i[s]) ? e.widget.extend({}, i[s], r) :e.widget.extend({}, r) :i[s] = r);
    return i;
  }, e.widget.bridge = function(i, s) {
    var r = s.prototype.widgetFullName || i;
    e.fn[i] = function(o) {
      var a = "string" == typeof o, l = n.call(arguments, 1), c = this;
      return o = !a && l.length ? e.widget.extend.apply(null, [ o ].concat(l)) :o, a ? this.each(function() {
        var n, s = e.data(this, r);
        return s ? e.isFunction(s[o]) && "_" !== o.charAt(0) ? (n = s[o].apply(s, l), n !== s && n !== t ? (c = n && n.jquery ? c.pushStack(n.get()) :n, 
        !1) :void 0) :e.error("no such method '" + o + "' for " + i + " widget instance") :e.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + o + "'");
      }) :this.each(function() {
        var t = e.data(this, r);
        t ? t.option(o || {})._init() :e.data(this, r, new s(o, this));
      }), c;
    };
  }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
    widgetName:"widget",
    widgetEventPrefix:"",
    defaultElement:"<div>",
    options:{
      disabled:!1,
      create:null
    },
    _createWidget:function(t, n) {
      n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = i++, 
      this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), 
      this.bindings = e(), this.hoverable = e(), this.focusable = e(), n !== this && (e.data(n, this.widgetFullName, this), 
      this._on(!0, this.element, {
        remove:function(e) {
          e.target === n && this.destroy();
        }
      }), this.document = e(n.style ? n.ownerDocument :n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), 
      this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
    },
    _getCreateOptions:e.noop,
    _getCreateEventData:e.noop,
    _create:e.noop,
    _init:e.noop,
    destroy:function() {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), 
      this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), 
      this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), 
      this.focusable.removeClass("ui-state-focus");
    },
    _destroy:e.noop,
    widget:function() {
      return this.element;
    },
    option:function(i, n) {
      var s, r, o, a = i;
      if (0 === arguments.length) return e.widget.extend({}, this.options);
      if ("string" == typeof i) if (a = {}, s = i.split("."), i = s.shift(), s.length) {
        for (r = a[i] = e.widget.extend({}, this.options[i]), o = 0; o < s.length - 1; o++) r[s[o]] = r[s[o]] || {}, 
        r = r[s[o]];
        if (i = s.pop(), 1 === arguments.length) return r[i] === t ? null :r[i];
        r[i] = n;
      } else {
        if (1 === arguments.length) return this.options[i] === t ? null :this.options[i];
        a[i] = n;
      }
      return this._setOptions(a), this;
    },
    _setOptions:function(e) {
      var t;
      for (t in e) this._setOption(t, e[t]);
      return this;
    },
    _setOption:function(e, t) {
      return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), 
      this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), 
      this;
    },
    enable:function() {
      return this._setOption("disabled", !1);
    },
    disable:function() {
      return this._setOption("disabled", !0);
    },
    _on:function(t, i, n) {
      var s, r = this;
      "boolean" != typeof t && (n = i, i = t, t = !1), n ? (i = s = e(i), this.bindings = this.bindings.add(i)) :(n = i, 
      i = this.element, s = this.widget()), e.each(n, function(n, o) {
        function a() {
          if (t || !0 !== r.options.disabled && !e(this).hasClass("ui-state-disabled")) return ("string" == typeof o ? r[o] :o).apply(r, arguments);
        }
        "string" != typeof o && (a.guid = o.guid = o.guid || a.guid || e.guid++);
        var l = n.match(/^(\w+)\s*(.*)$/), c = l[1] + r.eventNamespace, u = l[2];
        u ? s.delegate(u, c, a) :i.bind(c, a);
      });
    },
    _off:function(e, t) {
      t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
      e.unbind(t).undelegate(t);
    },
    _delay:function(e, t) {
      function i() {
        return ("string" == typeof e ? n[e] :e).apply(n, arguments);
      }
      var n = this;
      return setTimeout(i, t || 0);
    },
    _hoverable:function(t) {
      this.hoverable = this.hoverable.add(t), this._on(t, {
        mouseenter:function(t) {
          e(t.currentTarget).addClass("ui-state-hover");
        },
        mouseleave:function(t) {
          e(t.currentTarget).removeClass("ui-state-hover");
        }
      });
    },
    _focusable:function(t) {
      this.focusable = this.focusable.add(t), this._on(t, {
        focusin:function(t) {
          e(t.currentTarget).addClass("ui-state-focus");
        },
        focusout:function(t) {
          e(t.currentTarget).removeClass("ui-state-focus");
        }
      });
    },
    _trigger:function(t, i, n) {
      var s, r, o = this.options[t];
      if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t :this.widgetEventPrefix + t).toLowerCase(), 
      i.target = this.element[0], r = i.originalEvent) for (s in r) s in i || (i[s] = r[s]);
      return this.element.trigger(i, n), !(e.isFunction(o) && !1 === o.apply(this.element[0], [ i ].concat(n)) || i.isDefaultPrevented());
    }
  }, e.each({
    show:"fadeIn",
    hide:"fadeOut"
  }, function(t, i) {
    e.Widget.prototype["_" + t] = function(n, s, r) {
      "string" == typeof s && (s = {
        effect:s
      });
      var o, a = s ? !0 === s || "number" == typeof s ? i :s.effect || i :t;
      s = s || {}, "number" == typeof s && (s = {
        duration:s
      }), o = !e.isEmptyObject(s), s.complete = r, s.delay && n.delay(s.delay), o && e.effects && e.effects.effect[a] ? n[t](s) :a !== t && n[a] ? n[a](s.duration, s.easing, r) :n.queue(function(i) {
        e(this)[t](), r && r.call(n[0]), i();
      });
    };
  });
}(jQuery), function(e, t) {
  function i(e, t, i) {
    return [ parseFloat(e[0]) * (f.test(e[0]) ? t / 100 :1), parseFloat(e[1]) * (f.test(e[1]) ? i / 100 :1) ];
  }
  function n(t, i) {
    return parseInt(e.css(t, i), 10) || 0;
  }
  function s(t) {
    var i = t[0];
    return 9 === i.nodeType ? {
      width:t.width(),
      height:t.height(),
      offset:{
        top:0,
        left:0
      }
    } :e.isWindow(i) ? {
      width:t.width(),
      height:t.height(),
      offset:{
        top:t.scrollTop(),
        left:t.scrollLeft()
      }
    } :i.preventDefault ? {
      width:0,
      height:0,
      offset:{
        top:i.pageY,
        left:i.pageX
      }
    } :{
      width:t.outerWidth(),
      height:t.outerHeight(),
      offset:t.offset()
    };
  }
  e.ui = e.ui || {};
  var r, o = Math.max, a = Math.abs, l = Math.round, c = /left|center|right/, u = /top|center|bottom/, h = /[\+\-]\d+(\.[\d]+)?%?/, d = /^\w+/, f = /%$/, p = e.fn.position;
  e.position = {
    scrollbarWidth:function() {
      if (r !== t) return r;
      var i, n, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = s.children()[0];
      return e("body").append(s), i = o.offsetWidth, s.css("overflow", "scroll"), n = o.offsetWidth, 
      i === n && (n = s[0].clientWidth), s.remove(), r = i - n;
    },
    getScrollInfo:function(t) {
      var i = t.isWindow || t.isDocument ? "" :t.element.css("overflow-x"), n = t.isWindow || t.isDocument ? "" :t.element.css("overflow-y"), s = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth;
      return {
        width:"scroll" === n || "auto" === n && t.height < t.element[0].scrollHeight ? e.position.scrollbarWidth() :0,
        height:s ? e.position.scrollbarWidth() :0
      };
    },
    getWithinInfo:function(t) {
      var i = e(t || window), n = e.isWindow(i[0]);
      return {
        element:i,
        isWindow:n,
        isDocument:!!i[0] && 9 === i[0].nodeType,
        offset:i.offset() || {
          left:0,
          top:0
        },
        scrollLeft:i.scrollLeft(),
        scrollTop:i.scrollTop(),
        width:n ? i.width() :i.outerWidth(),
        height:n ? i.height() :i.outerHeight()
      };
    }
  }, e.fn.position = function(t) {
    if (!t || !t.of) return p.apply(this, arguments);
    t = e.extend({}, t);
    var r, f, m, g, v, y, b = e(t.of), w = e.position.getWithinInfo(t.within), x = e.position.getScrollInfo(w), _ = (t.collision || "flip").split(" "), S = {};
    return y = s(b), b[0].preventDefault && (t.at = "left top"), f = y.width, m = y.height, 
    g = y.offset, v = e.extend({}, g), e.each([ "my", "at" ], function() {
      var e, i, n = (t[this] || "").split(" ");
      1 === n.length && (n = c.test(n[0]) ? n.concat([ "center" ]) :u.test(n[0]) ? [ "center" ].concat(n) :[ "center", "center" ]), 
      n[0] = c.test(n[0]) ? n[0] :"center", n[1] = u.test(n[1]) ? n[1] :"center", e = h.exec(n[0]), 
      i = h.exec(n[1]), S[this] = [ e ? e[0] :0, i ? i[0] :0 ], t[this] = [ d.exec(n[0])[0], d.exec(n[1])[0] ];
    }), 1 === _.length && (_[1] = _[0]), "right" === t.at[0] ? v.left += f :"center" === t.at[0] && (v.left += f / 2), 
    "bottom" === t.at[1] ? v.top += m :"center" === t.at[1] && (v.top += m / 2), r = i(S.at, f, m), 
    v.left += r[0], v.top += r[1], this.each(function() {
      var s, c, u = e(this), h = u.outerWidth(), d = u.outerHeight(), p = n(this, "marginLeft"), y = n(this, "marginTop"), C = h + p + n(this, "marginRight") + x.width, T = d + y + n(this, "marginBottom") + x.height, k = e.extend({}, v), M = i(S.my, u.outerWidth(), u.outerHeight());
      "right" === t.my[0] ? k.left -= h :"center" === t.my[0] && (k.left -= h / 2), "bottom" === t.my[1] ? k.top -= d :"center" === t.my[1] && (k.top -= d / 2), 
      k.left += M[0], k.top += M[1], e.support.offsetFractions || (k.left = l(k.left), 
      k.top = l(k.top)), s = {
        marginLeft:p,
        marginTop:y
      }, e.each([ "left", "top" ], function(i, n) {
        e.ui.position[_[i]] && e.ui.position[_[i]][n](k, {
          targetWidth:f,
          targetHeight:m,
          elemWidth:h,
          elemHeight:d,
          collisionPosition:s,
          collisionWidth:C,
          collisionHeight:T,
          offset:[ r[0] + M[0], r[1] + M[1] ],
          my:t.my,
          at:t.at,
          within:w,
          elem:u
        });
      }), t.using && (c = function(e) {
        var i = g.left - k.left, n = i + f - h, s = g.top - k.top, r = s + m - d, l = {
          target:{
            element:b,
            left:g.left,
            top:g.top,
            width:f,
            height:m
          },
          element:{
            element:u,
            left:k.left,
            top:k.top,
            width:h,
            height:d
          },
          horizontal:n < 0 ? "left" :i > 0 ? "right" :"center",
          vertical:r < 0 ? "top" :s > 0 ? "bottom" :"middle"
        };
        f < h && a(i + n) < f && (l.horizontal = "center"), m < d && a(s + r) < m && (l.vertical = "middle"), 
        o(a(i), a(n)) > o(a(s), a(r)) ? l.important = "horizontal" :l.important = "vertical", 
        t.using.call(this, e, l);
      }), u.offset(e.extend(k, {
        using:c
      }));
    });
  }, e.ui.position = {
    fit:{
      left:function(e, t) {
        var i, n = t.within, s = n.isWindow ? n.scrollLeft :n.offset.left, r = n.width, a = e.left - t.collisionPosition.marginLeft, l = s - a, c = a + t.collisionWidth - r - s;
        t.collisionWidth > r ? l > 0 && c <= 0 ? (i = e.left + l + t.collisionWidth - r - s, 
        e.left += l - i) :e.left = c > 0 && l <= 0 ? s :l > c ? s + r - t.collisionWidth :s :l > 0 ? e.left += l :c > 0 ? e.left -= c :e.left = o(e.left - a, e.left);
      },
      top:function(e, t) {
        var i, n = t.within, s = n.isWindow ? n.scrollTop :n.offset.top, r = t.within.height, a = e.top - t.collisionPosition.marginTop, l = s - a, c = a + t.collisionHeight - r - s;
        t.collisionHeight > r ? l > 0 && c <= 0 ? (i = e.top + l + t.collisionHeight - r - s, 
        e.top += l - i) :e.top = c > 0 && l <= 0 ? s :l > c ? s + r - t.collisionHeight :s :l > 0 ? e.top += l :c > 0 ? e.top -= c :e.top = o(e.top - a, e.top);
      }
    },
    flip:{
      left:function(e, t) {
        var i, n, s = t.within, r = s.offset.left + s.scrollLeft, o = s.width, l = s.isWindow ? s.scrollLeft :s.offset.left, c = e.left - t.collisionPosition.marginLeft, u = c - l, h = c + t.collisionWidth - o - l, d = "left" === t.my[0] ? -t.elemWidth :"right" === t.my[0] ? t.elemWidth :0, f = "left" === t.at[0] ? t.targetWidth :"right" === t.at[0] ? -t.targetWidth :0, p = -2 * t.offset[0];
        u < 0 ? ((i = e.left + d + f + p + t.collisionWidth - o - r) < 0 || i < a(u)) && (e.left += d + f + p) :h > 0 && ((n = e.left - t.collisionPosition.marginLeft + d + f + p - l) > 0 || a(n) < h) && (e.left += d + f + p);
      },
      top:function(e, t) {
        var i, n, s = t.within, r = s.offset.top + s.scrollTop, o = s.height, l = s.isWindow ? s.scrollTop :s.offset.top, c = e.top - t.collisionPosition.marginTop, u = c - l, h = c + t.collisionHeight - o - l, d = "top" === t.my[1], f = d ? -t.elemHeight :"bottom" === t.my[1] ? t.elemHeight :0, p = "top" === t.at[1] ? t.targetHeight :"bottom" === t.at[1] ? -t.targetHeight :0, m = -2 * t.offset[1];
        u < 0 ? (n = e.top + f + p + m + t.collisionHeight - o - r, e.top + f + p + m > u && (n < 0 || n < a(u)) && (e.top += f + p + m)) :h > 0 && (i = e.top - t.collisionPosition.marginTop + f + p + m - l, 
        e.top + f + p + m > h && (i > 0 || a(i) < h) && (e.top += f + p + m));
      }
    },
    flipfit:{
      left:function() {
        e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments);
      },
      top:function() {
        e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments);
      }
    }
  }, function() {
    var t, i, n, s, r, o = document.getElementsByTagName("body")[0], a = document.createElement("div");
    t = document.createElement(o ? "div" :"body"), n = {
      visibility:"hidden",
      width:0,
      height:0,
      border:0,
      margin:0,
      background:"none"
    }, o && e.extend(n, {
      position:"absolute",
      left:"-1000px",
      top:"-1000px"
    });
    for (r in n) t.style[r] = n[r];
    t.appendChild(a), i = o || document.documentElement, i.insertBefore(t, i.firstChild), 
    a.style.cssText = "position: absolute; left: 10.7432222px;", s = e(a).offset().left, 
    e.support.offsetFractions = s > 10 && s < 11, t.innerHTML = "", i.removeChild(t);
  }();
}(jQuery), function(e) {
  e.widget("ui.menu", {
    version:"1.10.4",
    defaultElement:"<ul>",
    delay:300,
    options:{
      icons:{
        submenu:"ui-icon-carat-1-e"
      },
      menus:"ul",
      position:{
        my:"left top",
        at:"right top"
      },
      role:"menu",
      blur:null,
      focus:null,
      select:null
    },
    _create:function() {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
        role:this.options.role,
        tabIndex:0
      }).bind("click" + this.eventNamespace, e.proxy(function(e) {
        this.options.disabled && e.preventDefault();
      }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), 
      this._on({
        "mousedown .ui-menu-item > a":function(e) {
          e.preventDefault();
        },
        "click .ui-state-disabled > a":function(e) {
          e.preventDefault();
        },
        "click .ui-menu-item:has(a)":function(t) {
          var i = e(t.target).closest(".ui-menu-item");
          !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), 
          i.has(".ui-menu").length ? this.expand(t) :!this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [ !0 ]), 
          this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
        },
        "mouseenter .ui-menu-item":function(t) {
          var i = e(t.currentTarget);
          i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i);
        },
        mouseleave:"collapseAll",
        "mouseleave .ui-menu":"collapseAll",
        focus:function(e, t) {
          var i = this.active || this.element.children(".ui-menu-item").eq(0);
          t || this.focus(e, i);
        },
        blur:function(t) {
          this._delay(function() {
            e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t);
          });
        },
        keydown:"_keydown"
      }), this.refresh(), this._on(this.document, {
        click:function(t) {
          e(t.target).closest(".ui-menu").length || this.collapseAll(t), this.mouseHandled = !1;
        }
      });
    },
    _destroy:function() {
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), 
      this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
        var t = e(this);
        t.data("ui-menu-submenu-carat") && t.remove();
      }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
    },
    _keydown:function(t) {
      function i(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }
      var n, s, r, o, a, l = !0;
      switch (t.keyCode) {
       case e.ui.keyCode.PAGE_UP:
        this.previousPage(t);
        break;

       case e.ui.keyCode.PAGE_DOWN:
        this.nextPage(t);
        break;

       case e.ui.keyCode.HOME:
        this._move("first", "first", t);
        break;

       case e.ui.keyCode.END:
        this._move("last", "last", t);
        break;

       case e.ui.keyCode.UP:
        this.previous(t);
        break;

       case e.ui.keyCode.DOWN:
        this.next(t);
        break;

       case e.ui.keyCode.LEFT:
        this.collapse(t);
        break;

       case e.ui.keyCode.RIGHT:
        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
        break;

       case e.ui.keyCode.ENTER:
       case e.ui.keyCode.SPACE:
        this._activate(t);
        break;

       case e.ui.keyCode.ESCAPE:
        this.collapse(t);
        break;

       default:
        l = !1, s = this.previousFilter || "", r = String.fromCharCode(t.keyCode), o = !1, 
        clearTimeout(this.filterTimer), r === s ? o = !0 :r = s + r, a = new RegExp("^" + i(r), "i"), 
        n = this.activeMenu.children(".ui-menu-item").filter(function() {
          return a.test(e(this).children("a").text());
        }), n = o && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") :n, 
        n.length || (r = String.fromCharCode(t.keyCode), a = new RegExp("^" + i(r), "i"), 
        n = this.activeMenu.children(".ui-menu-item").filter(function() {
          return a.test(e(this).children("a").text());
        })), n.length ? (this.focus(t, n), n.length > 1 ? (this.previousFilter = r, this.filterTimer = this._delay(function() {
          delete this.previousFilter;
        }, 1e3)) :delete this.previousFilter) :delete this.previousFilter;
      }
      l && t.preventDefault();
    },
    _activate:function(e) {
      this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) :this.select(e));
    },
    refresh:function() {
      var t, i = this.options.icons.submenu, n = this.element.find(this.options.menus);
      this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), 
      n.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
        role:this.options.role,
        "aria-hidden":"true",
        "aria-expanded":"false"
      }).each(function() {
        var t = e(this), n = t.prev("a"), s = e("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
        n.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", n.attr("id"));
      }), t = n.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
        tabIndex:-1,
        role:this._itemRole()
      }), t.children(":not(.ui-menu-item)").each(function() {
        var t = e(this);
        /[^\-\u2014\u2013\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider");
      }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur();
    },
    _itemRole:function() {
      return {
        menu:"menuitem",
        listbox:"option"
      }[this.options.role];
    },
    _setOption:function(e, t) {
      "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), 
      this._super(e, t);
    },
    focus:function(e, t) {
      var i, n;
      this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), 
      n = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), 
      this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), 
      e && "keydown" === e.type ? this._close() :this.timer = this._delay(function() {
        this._close();
      }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), 
      this.activeMenu = t.parent(), this._trigger("focus", e, {
        item:t
      });
    },
    _scrollIntoView:function(t) {
      var i, n, s, r, o, a;
      this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, 
      n = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, s = t.offset().top - this.activeMenu.offset().top - i - n, 
      r = this.activeMenu.scrollTop(), o = this.activeMenu.height(), a = t.height(), s < 0 ? this.activeMenu.scrollTop(r + s) :s + a > o && this.activeMenu.scrollTop(r + s - o + a));
    },
    blur:function(e, t) {
      t || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), 
      this.active = null, this._trigger("blur", e, {
        item:this.active
      }));
    },
    _startOpening:function(e) {
      clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
        this._close(), this._open(e);
      }, this.delay));
    },
    _open:function(t) {
      var i = e.extend({
        of:this.active
      }, this.options.position);
      clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), 
      t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
    },
    collapseAll:function(t, i) {
      clearTimeout(this.timer), this.timer = this._delay(function() {
        var n = i ? this.element :e(t && t.target).closest(this.element.find(".ui-menu"));
        n.length || (n = this.element), this._close(n), this.blur(t), this.activeMenu = n;
      }, this.delay);
    },
    _close:function(e) {
      e || (e = this.active ? this.active.parent() :this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active");
    },
    collapse:function(e) {
      var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      t && t.length && (this._close(), this.focus(e, t));
    },
    expand:function(e) {
      var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
      t && t.length && (this._open(t.parent()), this._delay(function() {
        this.focus(e, t);
      }));
    },
    next:function(e) {
      this._move("next", "first", e);
    },
    previous:function(e) {
      this._move("prev", "last", e);
    },
    isFirstItem:function() {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    },
    isLastItem:function() {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    },
    _move:function(e, t, i) {
      var n;
      this.active && (n = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" :"nextAll"](".ui-menu-item").eq(-1) :this.active[e + "All"](".ui-menu-item").eq(0)), 
      n && n.length && this.active || (n = this.activeMenu.children(".ui-menu-item")[t]()), 
      this.focus(i, n);
    },
    nextPage:function(t) {
      var i, n, s;
      if (!this.active) return void this.next(t);
      this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), 
      this.active.nextAll(".ui-menu-item").each(function() {
        return i = e(this), i.offset().top - n - s < 0;
      }), this.focus(t, i)) :this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" :"first"]()));
    },
    previousPage:function(t) {
      var i, n, s;
      if (!this.active) return void this.next(t);
      this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), 
      this.active.prevAll(".ui-menu-item").each(function() {
        return i = e(this), i.offset().top - n + s > 0;
      }), this.focus(t, i)) :this.focus(t, this.activeMenu.children(".ui-menu-item").first()));
    },
    _hasScroll:function() {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    },
    select:function(t) {
      this.active = this.active || e(t.target).closest(".ui-menu-item");
      var i = {
        item:this.active
      };
      this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i);
    }
  });
}(jQuery), function(e) {
  var t = !1;
  e(document).mouseup(function() {
    t = !1;
  }), e.widget("ui.mouse", {
    version:"1.10.4",
    options:{
      cancel:"input,textarea,button,select,option",
      distance:1,
      delay:0
    },
    _mouseInit:function() {
      var t = this;
      this.element.bind("mousedown." + this.widgetName, function(e) {
        return t._mouseDown(e);
      }).bind("click." + this.widgetName, function(i) {
        if (!0 === e.data(i.target, t.widgetName + ".preventClickEvent")) return e.removeData(i.target, t.widgetName + ".preventClickEvent"), 
        i.stopImmediatePropagation(), !1;
      }), this.started = !1;
    },
    _mouseDestroy:function() {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown:function(i) {
      if (!t) {
        this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
        var n = this, s = 1 === i.which, r = !("string" != typeof this.options.cancel || !i.target.nodeName) && e(i.target).closest(this.options.cancel).length;
        return !(s && !r && this._mouseCapture(i)) || (this.mouseDelayMet = !this.options.delay, 
        this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
          n.mouseDelayMet = !0;
        }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = !1 !== this._mouseStart(i), 
        !this._mouseStarted) ? (i.preventDefault(), !0) :(!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), 
        this._mouseMoveDelegate = function(e) {
          return n._mouseMove(e);
        }, this._mouseUpDelegate = function(e) {
          return n._mouseUp(e);
        }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), 
        i.preventDefault(), t = !0, !0));
      }
    },
    _mouseMove:function(t) {
      return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) :this._mouseStarted ? (this._mouseDrag(t), 
      t.preventDefault()) :(this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), 
      this._mouseStarted ? this._mouseDrag(t) :this._mouseUp(t)), !this._mouseStarted);
    },
    _mouseUp:function(t) {
      return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), 
      this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), 
      this._mouseStop(t)), !1;
    },
    _mouseDistanceMet:function(e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
    },
    _mouseDelayMet:function() {
      return this.mouseDelayMet;
    },
    _mouseStart:function() {},
    _mouseDrag:function() {},
    _mouseStop:function() {},
    _mouseCapture:function() {
      return !0;
    }
  });
}(jQuery), function(e) {
  function t(e, t, i) {
    return e > t && e < t + i;
  }
  function i(e) {
    return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"));
  }
  e.widget("ui.sortable", e.ui.mouse, {
    version:"1.10.4",
    widgetEventPrefix:"sort",
    ready:!1,
    options:{
      appendTo:"parent",
      axis:!1,
      connectWith:!1,
      containment:!1,
      cursor:"auto",
      cursorAt:!1,
      dropOnEmpty:!0,
      forcePlaceholderSize:!1,
      forceHelperSize:!1,
      grid:!1,
      handle:!1,
      helper:"original",
      items:"> *",
      opacity:!1,
      placeholder:!1,
      revert:!1,
      scroll:!0,
      scrollSensitivity:20,
      scrollSpeed:20,
      scope:"default",
      tolerance:"intersect",
      zIndex:1e3,
      activate:null,
      beforeStop:null,
      change:null,
      deactivate:null,
      out:null,
      over:null,
      receive:null,
      remove:null,
      sort:null,
      start:null,
      stop:null,
      update:null
    },
    _create:function() {
      var e = this.options;
      this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), 
      this.floating = !!this.items.length && ("x" === e.axis || i(this.items[0].item)), 
      this.offset = this.element.offset(), this._mouseInit(), this.ready = !0;
    },
    _destroy:function() {
      this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
      for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
      return this;
    },
    _setOption:function(t, i) {
      "disabled" === t ? (this.options[t] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) :e.Widget.prototype._setOption.apply(this, arguments);
    },
    _mouseCapture:function(t, i) {
      var n = null, s = !1, r = this;
      return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(t), 
      e(t.target).parents().each(function() {
        if (e.data(this, r.widgetName + "-item") === r) return n = e(this), !1;
      }), e.data(t.target, r.widgetName + "-item") === r && (n = e(t.target)), !!n && (!(this.options.handle && !i && (e(this.options.handle, n).find("*").addBack().each(function() {
        this === t.target && (s = !0);
      }), !s)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))));
    },
    _mouseStart:function(t, i, n) {
      var s, r, o = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), 
      this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), 
      this.offset = this.currentItem.offset(), this.offset = {
        top:this.offset.top - this.margins.top,
        left:this.offset.left - this.margins.left
      }, e.extend(this.offset, {
        click:{
          left:t.pageX - this.offset.left,
          top:t.pageY - this.offset.top
        },
        parent:this._getParentOffset(),
        relative:this._getRelativeOffset()
      }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), 
      this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, 
      this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), 
      this.domPosition = {
        prev:this.currentItem.prev()[0],
        parent:this.currentItem.parent()[0]
      }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), 
      o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (r = this.document.find("body"), 
      this.storedCursor = r.css("cursor"), r.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(r)), 
      o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), 
      this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), 
      this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
      this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
      !n) for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", t, this._uiHash(this));
      return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), 
      this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), 
      !0;
    },
    _mouseDrag:function(t) {
      var i, n, s, r, o = this.options, a = !1;
      for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), 
      this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + o.scrollSpeed :t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - o.scrollSpeed), 
      this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + o.scrollSpeed :t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - o.scrollSpeed)) :(t.pageY - e(document).scrollTop() < o.scrollSensitivity ? a = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed) :e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (a = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)), 
      t.pageX - e(document).scrollLeft() < o.scrollSensitivity ? a = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed) :e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (a = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed))), 
      !1 !== a && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), 
      this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
      this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
      i = this.items.length - 1; i >= 0; i--) if (n = this.items[i], s = n.item[0], (r = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && !(s === this.currentItem[0] || this.placeholder[1 === r ? "next" :"prev"]()[0] === s || e.contains(this.placeholder[0], s) || "semi-dynamic" === this.options.type && e.contains(this.element[0], s))) {
        if (this.direction = 1 === r ? "down" :"up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
        this._rearrange(t, n), this._trigger("change", t, this._uiHash());
        break;
      }
      return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), 
      this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, 
      !1;
    },
    _mouseStop:function(t, i) {
      if (t) {
        if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), 
        this.options.revert) {
          var n = this, s = this.placeholder.offset(), r = this.options.axis, o = {};
          r && "x" !== r || (o.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 :this.offsetParent[0].scrollLeft)), 
          r && "y" !== r || (o.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 :this.offsetParent[0].scrollTop)), 
          this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
            n._clear(t);
          });
        } else this._clear(t, i);
        return !1;
      }
    },
    cancel:function() {
      if (this.dragging) {
        this._mouseUp({
          target:null
        }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") :this.currentItem.show();
        for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), 
        this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), 
        this.containers[t].containerCache.over = 0);
      }
      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
      "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
      e.extend(this, {
        helper:null,
        dragging:!1,
        reverting:!1,
        _noFinalSort:null
      }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) :e(this.domPosition.parent).prepend(this.currentItem)), 
      this;
    },
    serialize:function(t) {
      var i = this._getItemsAsjQuery(t && t.connected), n = [];
      return t = t || {}, e(i).each(function() {
        var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
        i && n.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] :i[2]));
      }), !n.length && t.key && n.push(t.key + "="), n.join("&");
    },
    toArray:function(t) {
      var i = this._getItemsAsjQuery(t && t.connected), n = [];
      return t = t || {}, i.each(function() {
        n.push(e(t.item || this).attr(t.attribute || "id") || "");
      }), n;
    },
    _intersectsWith:function(e) {
      var t = this.positionAbs.left, i = t + this.helperProportions.width, n = this.positionAbs.top, s = n + this.helperProportions.height, r = e.left, o = r + e.width, a = e.top, l = a + e.height, c = this.offset.click.top, u = this.offset.click.left, h = "x" === this.options.axis || n + c > a && n + c < l, d = "y" === this.options.axis || t + u > r && t + u < o, f = h && d;
      return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" :"height"] > e[this.floating ? "width" :"height"] ? f :r < t + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < o && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l;
    },
    _intersectsWithPointer:function(e) {
      var i = "x" === this.options.axis || t(this.positionAbs.top + this.offset.click.top, e.top, e.height), n = "y" === this.options.axis || t(this.positionAbs.left + this.offset.click.left, e.left, e.width), s = i && n, r = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
      return !!s && (this.floating ? o && "right" === o || "down" === r ? 2 :1 :r && ("down" === r ? 2 :1));
    },
    _intersectsWithSides:function(e) {
      var i = t(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height), n = t(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width), s = this._getDragVerticalDirection(), r = this._getDragHorizontalDirection();
      return this.floating && r ? "right" === r && n || "left" === r && !n :s && ("down" === s && i || "up" === s && !i);
    },
    _getDragVerticalDirection:function() {
      var e = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== e && (e > 0 ? "down" :"up");
    },
    _getDragHorizontalDirection:function() {
      var e = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== e && (e > 0 ? "right" :"left");
    },
    refresh:function(e) {
      return this._refreshItems(e), this.refreshPositions(), this;
    },
    _connectWith:function() {
      var e = this.options;
      return e.connectWith.constructor === String ? [ e.connectWith ] :e.connectWith;
    },
    _getItemsAsjQuery:function(t) {
      function i() {
        a.push(this);
      }
      var n, s, r, o, a = [], l = [], c = this._connectWith();
      if (c && t) for (n = c.length - 1; n >= 0; n--) for (r = e(c[n]), s = r.length - 1; s >= 0; s--) (o = e.data(r[s], this.widgetFullName)) && o !== this && !o.options.disabled && l.push([ e.isFunction(o.options.items) ? o.options.items.call(o.element) :e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o ]);
      for (l.push([ e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
        options:this.options,
        item:this.currentItem
      }) :e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
      n = l.length - 1; n >= 0; n--) l[n][0].each(i);
      return e(a);
    },
    _removeCurrentsFromItems:function() {
      var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = e.grep(this.items, function(e) {
        for (var i = 0; i < t.length; i++) if (t[i] === e.item[0]) return !1;
        return !0;
      });
    },
    _refreshItems:function(t) {
      this.items = [], this.containers = [ this ];
      var i, n, s, r, o, a, l, c, u = this.items, h = [ [ e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
        item:this.currentItem
      }) :e(this.options.items, this.element), this ] ], d = this._connectWith();
      if (d && this.ready) for (i = d.length - 1; i >= 0; i--) for (s = e(d[i]), n = s.length - 1; n >= 0; n--) (r = e.data(s[n], this.widgetFullName)) && r !== this && !r.options.disabled && (h.push([ e.isFunction(r.options.items) ? r.options.items.call(r.element[0], t, {
        item:this.currentItem
      }) :e(r.options.items, r.element), r ]), this.containers.push(r));
      for (i = h.length - 1; i >= 0; i--) for (o = h[i][1], a = h[i][0], n = 0, c = a.length; n < c; n++) l = e(a[n]), 
      l.data(this.widgetName + "-item", o), u.push({
        item:l,
        instance:o,
        width:0,
        height:0,
        left:0,
        top:0
      });
    },
    refreshPositions:function(t) {
      this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      var i, n, s, r;
      for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? e(this.options.toleranceElement, n.item) :n.item, 
      t || (n.width = s.outerWidth(), n.height = s.outerHeight()), r = s.offset(), n.left = r.left, 
      n.top = r.top);
      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) r = this.containers[i].element.offset(), 
      this.containers[i].containerCache.left = r.left, this.containers[i].containerCache.top = r.top, 
      this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), 
      this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      return this;
    },
    _createPlaceholder:function(t) {
      t = t || this;
      var i, n = t.options;
      n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
        element:function() {
          var n = t.currentItem[0].nodeName.toLowerCase(), s = e("<" + n + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
          return "tr" === n ? t.currentItem.children().each(function() {
            e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(s);
          }) :"img" === n && s.attr("src", t.currentItem.attr("src")), i || s.css("visibility", "hidden"), 
          s;
        },
        update:function(e, s) {
          i && !n.forcePlaceholderSize || (s.height() || s.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), 
          s.width() || s.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)));
        }
      }), t.placeholder = e(n.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), 
      n.placeholder.update(t, t.placeholder);
    },
    _contactContainers:function(n) {
      var s, r, o, a, l, c, u, h, d, f, p = null, m = null;
      for (s = this.containers.length - 1; s >= 0; s--) if (!e.contains(this.currentItem[0], this.containers[s].element[0])) if (this._intersectsWith(this.containers[s].containerCache)) {
        if (p && e.contains(this.containers[s].element[0], p.element[0])) continue;
        p = this.containers[s], m = s;
      } else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", n, this._uiHash(this)), 
      this.containers[s].containerCache.over = 0);
      if (p) if (1 === this.containers.length) this.containers[m].containerCache.over || (this.containers[m]._trigger("over", n, this._uiHash(this)), 
      this.containers[m].containerCache.over = 1); else {
        for (o = 1e4, a = null, f = p.floating || i(this.currentItem), l = f ? "left" :"top", 
        c = f ? "width" :"height", u = this.positionAbs[l] + this.offset.click[l], r = this.items.length - 1; r >= 0; r--) e.contains(this.containers[m].element[0], this.items[r].item[0]) && this.items[r].item[0] !== this.currentItem[0] && (f && !t(this.positionAbs.top + this.offset.click.top, this.items[r].top, this.items[r].height) || (h = this.items[r].item.offset()[l], 
        d = !1, Math.abs(h - u) > Math.abs(h + this.items[r][c] - u) && (d = !0, h += this.items[r][c]), 
        Math.abs(h - u) < o && (o = Math.abs(h - u), a = this.items[r], this.direction = d ? "up" :"down")));
        if (!a && !this.options.dropOnEmpty) return;
        if (this.currentContainer === this.containers[m]) return;
        a ? this._rearrange(n, a, null, !0) :this._rearrange(n, null, this.containers[m].element, !0), 
        this._trigger("change", n, this._uiHash()), this.containers[m]._trigger("change", n, this._uiHash(this)), 
        this.currentContainer = this.containers[m], this.options.placeholder.update(this.currentContainer, this.placeholder), 
        this.containers[m]._trigger("over", n, this._uiHash(this)), this.containers[m].containerCache.over = 1;
      }
    },
    _createHelper:function(t) {
      var i = this.options, n = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [ t, this.currentItem ])) :"clone" === i.helper ? this.currentItem.clone() :this.currentItem;
      return n.parents("body").length || e("parent" !== i.appendTo ? i.appendTo :this.currentItem[0].parentNode)[0].appendChild(n[0]), 
      n[0] === this.currentItem[0] && (this._storedCSS = {
        width:this.currentItem[0].style.width,
        height:this.currentItem[0].style.height,
        position:this.currentItem.css("position"),
        top:this.currentItem.css("top"),
        left:this.currentItem.css("left")
      }), n[0].style.width && !i.forceHelperSize || n.width(this.currentItem.width()), 
      n[0].style.height && !i.forceHelperSize || n.height(this.currentItem.height()), 
      n;
    },
    _adjustOffsetFromHelper:function(t) {
      "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
        left:+t[0],
        top:+t[1] || 0
      }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), 
      "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    },
    _getParentOffset:function() {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), 
      t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
        top:0,
        left:0
      }), {
        top:t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left:t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset:function() {
      if ("relative" === this.cssPosition) {
        var e = this.currentItem.position();
        return {
          top:e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left:e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        };
      }
      return {
        top:0,
        left:0
      };
    },
    _cacheMargins:function() {
      this.margins = {
        left:parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top:parseInt(this.currentItem.css("marginTop"), 10) || 0
      };
    },
    _cacheHelperProportions:function() {
      this.helperProportions = {
        width:this.helper.outerWidth(),
        height:this.helper.outerHeight()
      };
    },
    _setContainment:function() {
      var t, i, n, s = this.options;
      "parent" === s.containment && (s.containment = this.helper[0].parentNode), "document" !== s.containment && "window" !== s.containment || (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" === s.containment ? document :window).width() - this.helperProportions.width - this.margins.left, (e("document" === s.containment ? document :window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
      /^(document|window|parent)$/.test(s.containment) || (t = e(s.containment)[0], i = e(s.containment).offset(), 
      n = "hidden" !== e(t).css("overflow"), this.containment = [ i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(t.scrollWidth, t.offsetWidth) :t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(t.scrollHeight, t.offsetHeight) :t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
    },
    _convertPositionTo:function(t, i) {
      i || (i = this.position);
      var n = "absolute" === t ? 1 :-1, s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent :this.offsetParent, r = /(html|body)/i.test(s[0].tagName);
      return {
        top:i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() :r ? 0 :s.scrollTop()) * n,
        left:i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() :r ? 0 :s.scrollLeft()) * n
      };
    },
    _generatePosition:function(t) {
      var i, n, s = this.options, r = t.pageX, o = t.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent :this.offsetParent, l = /(html|body)/i.test(a[0].tagName);
      return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
      this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (r = this.containment[0] + this.offset.click.left), 
      t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), 
      t.pageX - this.offset.click.left > this.containment[2] && (r = this.containment[2] + this.offset.click.left), 
      t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), 
      s.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / s.grid[1]) * s.grid[1], 
      o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i :i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] :i + s.grid[1] :i, 
      n = this.originalPageX + Math.round((r - this.originalPageX) / s.grid[0]) * s.grid[0], 
      r = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n :n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] :n + s.grid[0] :n)), 
      {
        top:o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() :l ? 0 :a.scrollTop()),
        left:r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() :l ? 0 :a.scrollLeft())
      };
    },
    _rearrange:function(e, t, i, n) {
      i ? i[0].appendChild(this.placeholder[0]) :t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] :t.item[0].nextSibling), 
      this.counter = this.counter ? ++this.counter :1;
      var s = this.counter;
      this._delay(function() {
        s === this.counter && this.refreshPositions(!n);
      });
    },
    _clear:function(e, t) {
      function i(e, t, i) {
        return function(n) {
          i._trigger(e, n, t._uiHash(t));
        };
      }
      this.reverting = !1;
      var n, s = [];
      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
      this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (n in this._storedCSS) "auto" !== this._storedCSS[n] && "static" !== this._storedCSS[n] || (this._storedCSS[n] = "");
        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
      } else this.currentItem.show();
      for (this.fromOutside && !t && s.push(function(e) {
        this._trigger("receive", e, this._uiHash(this.fromOutside));
      }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || s.push(function(e) {
        this._trigger("update", e, this._uiHash());
      }), this !== this.currentContainer && (t || (s.push(function(e) {
        this._trigger("remove", e, this._uiHash());
      }), s.push(function(e) {
        return function(t) {
          e._trigger("receive", t, this._uiHash(this));
        };
      }.call(this, this.currentContainer)), s.push(function(e) {
        return function(t) {
          e._trigger("update", t, this._uiHash(this));
        };
      }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) t || s.push(i("deactivate", this, this.containers[n])), 
      this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), 
      this.containers[n].containerCache.over = 0);
      if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), 
      this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), 
      this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" :this._storedZIndex), 
      this.dragging = !1, this.cancelHelperRemoval) {
        if (!t) {
          for (this._trigger("beforeStop", e, this._uiHash()), n = 0; n < s.length; n++) s[n].call(this, e);
          this._trigger("stop", e, this._uiHash());
        }
        return this.fromOutside = !1, !1;
      }
      if (t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
      this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, 
      !t) {
        for (n = 0; n < s.length; n++) s[n].call(this, e);
        this._trigger("stop", e, this._uiHash());
      }
      return this.fromOutside = !1, !0;
    },
    _trigger:function() {
      !1 === e.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
    },
    _uiHash:function(t) {
      var i = t || this;
      return {
        helper:i.helper,
        placeholder:i.placeholder || e([]),
        position:i.position,
        originalPosition:i.originalPosition,
        offset:i.positionAbs,
        item:i.currentItem,
        sender:t ? t.element :null
      };
    }
  });
}(jQuery), function(e) {
  e.widget("ui.autocomplete", {
    version:"1.10.4",
    defaultElement:"<input>",
    options:{
      appendTo:null,
      autoFocus:!1,
      delay:300,
      minLength:1,
      position:{
        my:"left top",
        at:"left bottom",
        collision:"none"
      },
      source:null,
      change:null,
      close:null,
      focus:null,
      open:null,
      response:null,
      search:null,
      select:null
    },
    requestIndex:0,
    pending:0,
    _create:function() {
      var t, i, n, s = this.element[0].nodeName.toLowerCase(), r = "textarea" === s, o = "input" === s;
      this.isMultiLine = !!r || !o && this.element.prop("isContentEditable"), this.valueMethod = this.element[r || o ? "val" :"text"], 
      this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), 
      this._on(this.element, {
        keydown:function(s) {
          if (this.element.prop("readOnly")) return t = !0, n = !0, void (i = !0);
          t = !1, n = !1, i = !1;
          var r = e.ui.keyCode;
          switch (s.keyCode) {
           case r.PAGE_UP:
            t = !0, this._move("previousPage", s);
            break;

           case r.PAGE_DOWN:
            t = !0, this._move("nextPage", s);
            break;

           case r.UP:
            t = !0, this._keyEvent("previous", s);
            break;

           case r.DOWN:
            t = !0, this._keyEvent("next", s);
            break;

           case r.ENTER:
           case r.NUMPAD_ENTER:
            this.menu.active && (t = !0, s.preventDefault(), this.menu.select(s));
            break;

           case r.TAB:
            this.menu.active && this.menu.select(s);
            break;

           case r.ESCAPE:
            this.menu.element.is(":visible") && (this._value(this.term), this.close(s), s.preventDefault());
            break;

           default:
            i = !0, this._searchTimeout(s);
          }
        },
        keypress:function(n) {
          if (t) return t = !1, void (this.isMultiLine && !this.menu.element.is(":visible") || n.preventDefault());
          if (!i) {
            var s = e.ui.keyCode;
            switch (n.keyCode) {
             case s.PAGE_UP:
              this._move("previousPage", n);
              break;

             case s.PAGE_DOWN:
              this._move("nextPage", n);
              break;

             case s.UP:
              this._keyEvent("previous", n);
              break;

             case s.DOWN:
              this._keyEvent("next", n);
            }
          }
        },
        input:function(e) {
          if (n) return n = !1, void e.preventDefault();
          this._searchTimeout(e);
        },
        focus:function() {
          this.selectedItem = null, this.previous = this._value();
        },
        blur:function(e) {
          if (this.cancelBlur) return void delete this.cancelBlur;
          clearTimeout(this.searching), this.close(e), this._change(e);
        }
      }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
        role:null
      }).hide().data("ui-menu"), this._on(this.menu.element, {
        mousedown:function(t) {
          t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
            delete this.cancelBlur;
          });
          var i = this.menu.element[0];
          e(t.target).closest(".ui-menu-item").length || this._delay(function() {
            var t = this;
            this.document.one("mousedown", function(n) {
              n.target === t.element[0] || n.target === i || e.contains(i, n.target) || t.close();
            });
          });
        },
        menufocus:function(t, i) {
          if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), 
          void this.document.one("mousemove", function() {
            e(t.target).trigger(t.originalEvent);
          });
          var n = i.item.data("ui-autocomplete-item");
          !1 !== this._trigger("focus", t, {
            item:n
          }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value) :this.liveRegion.text(n.value);
        },
        menuselect:function(e, t) {
          var i = t.item.data("ui-autocomplete-item"), n = this.previous;
          this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, 
          this._delay(function() {
            this.previous = n, this.selectedItem = i;
          })), !1 !== this._trigger("select", e, {
            item:i
          }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i;
        }
      }), this.liveRegion = e("<span>", {
        role:"status",
        "aria-live":"polite"
      }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
        beforeunload:function() {
          this.element.removeAttr("autocomplete");
        }
      });
    },
    _destroy:function() {
      clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), 
      this.menu.element.remove(), this.liveRegion.remove();
    },
    _setOption:function(e, t) {
      this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), 
      "disabled" === e && t && this.xhr && this.xhr.abort();
    },
    _appendTo:function() {
      var t = this.options.appendTo;
      return t && (t = t.jquery || t.nodeType ? e(t) :this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), 
      t.length || (t = this.document[0].body), t;
    },
    _initSource:function() {
      var t, i, n = this;
      e.isArray(this.options.source) ? (t = this.options.source, this.source = function(i, n) {
        n(e.ui.autocomplete.filter(t, i.term));
      }) :"string" == typeof this.options.source ? (i = this.options.source, this.source = function(t, s) {
        n.xhr && n.xhr.abort(), n.xhr = e.ajax({
          url:i,
          data:t,
          dataType:"json",
          success:function(e) {
            s(e);
          },
          error:function() {
            s([]);
          }
        });
      }) :this.source = this.options.source;
    },
    _searchTimeout:function(e) {
      clearTimeout(this.searching), this.searching = this._delay(function() {
        this.term !== this._value() && (this.selectedItem = null, this.search(null, e));
      }, this.options.delay);
    },
    search:function(e, t) {
      return e = null != e ? e :this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) :!1 !== this._trigger("search", t) ? this._search(e) :void 0;
    },
    _search:function(e) {
      this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, 
      this.source({
        term:e
      }, this._response());
    },
    _response:function() {
      var t = ++this.requestIndex;
      return e.proxy(function(e) {
        t === this.requestIndex && this.__response(e), --this.pending || this.element.removeClass("ui-autocomplete-loading");
      }, this);
    },
    __response:function(e) {
      e && (e = this._normalize(e)), this._trigger("response", null, {
        content:e
      }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), 
      this._trigger("open")) :this._close();
    },
    close:function(e) {
      this.cancelSearch = !0, this._close(e);
    },
    _close:function(e) {
      this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), 
      this.isNewMenu = !0, this._trigger("close", e));
    },
    _change:function(e) {
      this.previous !== this._value() && this._trigger("change", e, {
        item:this.selectedItem
      });
    },
    _normalize:function(t) {
      return t.length && t[0].label && t[0].value ? t :e.map(t, function(t) {
        return "string" == typeof t ? {
          label:t,
          value:t
        } :e.extend({
          label:t.label || t.value,
          value:t.value || t.label
        }, t);
      });
    },
    _suggest:function(t) {
      var i = this.menu.element.empty();
      this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), 
      i.position(e.extend({
        of:this.element
      }, this.options.position)), this.options.autoFocus && this.menu.next();
    },
    _resizeMenu:function() {
      var e = this.menu.element;
      e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()));
    },
    _renderMenu:function(t, i) {
      var n = this;
      e.each(i, function(e, i) {
        n._renderItemData(t, i);
      });
    },
    _renderItemData:function(e, t) {
      return this._renderItem(e, t).data("ui-autocomplete-item", t);
    },
    _renderItem:function(t, i) {
      return e("<li>").append(e("<a>").text(i.label)).appendTo(t);
    },
    _move:function(e, t) {
      return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), 
      void this.menu.blur()) :void this.menu[e](t) :void this.search(null, t);
    },
    widget:function() {
      return this.menu.element;
    },
    _value:function() {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent:function(e, t) {
      this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t), t.preventDefault());
    }
  }), e.extend(e.ui.autocomplete, {
    escapeRegex:function(e) {
      return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    },
    filter:function(t, i) {
      var n = new RegExp(e.ui.autocomplete.escapeRegex(i), "i");
      return e.grep(t, function(e) {
        return n.test(e.label || e.value || e);
      });
    }
  }), e.widget("ui.autocomplete", e.ui.autocomplete, {
    options:{
      messages:{
        noResults:"No search results.",
        results:function(e) {
          return e + (e > 1 ? " results are" :" result is") + " available, use up and down arrow keys to navigate.";
        }
      }
    },
    __response:function(e) {
      var t;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) :this.options.messages.noResults, 
      this.liveRegion.text(t));
    }
  });
}(jQuery), function(e) {
  e.widget("ui.draggable", e.ui.mouse, {
    version:"1.10.4",
    widgetEventPrefix:"drag",
    options:{
      addClasses:!0,
      appendTo:"parent",
      axis:!1,
      connectToSortable:!1,
      containment:!1,
      cursor:"auto",
      cursorAt:!1,
      grid:!1,
      handle:!1,
      helper:"original",
      iframeFix:!1,
      opacity:!1,
      refreshPositions:!1,
      revert:!1,
      revertDuration:500,
      scope:"default",
      scroll:!0,
      scrollSensitivity:20,
      scrollSpeed:20,
      snap:!1,
      snapMode:"both",
      snapTolerance:20,
      stack:!1,
      zIndex:!1,
      drag:null,
      start:null,
      stop:null
    },
    _create:function() {
      "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), 
      this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), 
      this._mouseInit();
    },
    _destroy:function() {
      this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), 
      this._mouseDestroy();
    },
    _mouseCapture:function(t) {
      var i = this.options;
      return !(this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(t), 
      !!this.handle && (e(!0 === i.iframeFix ? "iframe" :i.iframeFix).each(function() {
        e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
          width:this.offsetWidth + "px",
          height:this.offsetHeight + "px",
          position:"absolute",
          opacity:"0.001",
          zIndex:1e3
        }).css(e(this).offset()).appendTo("body");
      }), !0));
    },
    _mouseStart:function(t) {
      var i = this.options;
      return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), 
      this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), 
      this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), 
      this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), 
      this.offset = this.positionAbs = this.element.offset(), this.offset = {
        top:this.offset.top - this.margins.top,
        left:this.offset.left - this.margins.left
      }, this.offset.scroll = !1, e.extend(this.offset, {
        click:{
          left:t.pageX - this.offset.left,
          top:t.pageY - this.offset.top
        },
        parent:this._getParentOffset(),
        relative:this._getRelativeOffset()
      }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, 
      this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), 
      this._setContainment(), !1 === this._trigger("start", t) ? (this._clear(), !1) :(this._cacheHelperProportions(), 
      e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), 
      e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0);
    },
    _mouseDrag:function(t, i) {
      if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), 
      this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), 
      !i) {
        var n = this._uiHash();
        if (!1 === this._trigger("drag", t, n)) return this._mouseUp({}), !1;
        this.position = n.position;
      }
      return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
      this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
      e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1;
    },
    _mouseStop:function(t) {
      var i = this, n = !1;
      return e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), 
      this.dropped && (n = this.dropped, this.dropped = !1), !("original" === this.options.helper && !e.contains(this.element[0].ownerDocument, this.element[0])) && ("invalid" === this.options.revert && !n || "valid" === this.options.revert && n || !0 === this.options.revert || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
        !1 !== i._trigger("stop", t) && i._clear();
      }) :!1 !== this._trigger("stop", t) && this._clear(), !1);
    },
    _mouseUp:function(t) {
      return e("div.ui-draggable-iframeFix").each(function() {
        this.parentNode.removeChild(this);
      }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t);
    },
    cancel:function() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) :this._clear(), 
      this;
    },
    _getHandle:function(t) {
      return !this.options.handle || !!e(t.target).closest(this.element.find(this.options.handle)).length;
    },
    _createHelper:function(t) {
      var i = this.options, n = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [ t ])) :"clone" === i.helper ? this.element.clone().removeAttr("id") :this.element;
      return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode :i.appendTo), 
      n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), 
      n;
    },
    _adjustOffsetFromHelper:function(t) {
      "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
        left:+t[0],
        top:+t[1] || 0
      }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), 
      "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    },
    _getParentOffset:function() {
      var t = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), 
      t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
        top:0,
        left:0
      }), {
        top:t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left:t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset:function() {
      if ("relative" === this.cssPosition) {
        var e = this.element.position();
        return {
          top:e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left:e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        };
      }
      return {
        top:0,
        left:0
      };
    },
    _cacheMargins:function() {
      this.margins = {
        left:parseInt(this.element.css("marginLeft"), 10) || 0,
        top:parseInt(this.element.css("marginTop"), 10) || 0,
        right:parseInt(this.element.css("marginRight"), 10) || 0,
        bottom:parseInt(this.element.css("marginBottom"), 10) || 0
      };
    },
    _cacheHelperProportions:function() {
      this.helperProportions = {
        width:this.helper.outerWidth(),
        height:this.helper.outerHeight()
      };
    },
    _setContainment:function() {
      var t, i, n, s = this.options;
      return s.containment ? "window" === s.containment ? void (this.containment = [ e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]) :"document" === s.containment ? void (this.containment = [ 0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]) :s.containment.constructor === Array ? void (this.containment = s.containment) :("parent" === s.containment && (s.containment = this.helper[0].parentNode), 
      i = e(s.containment), void ((n = i[0]) && (t = "hidden" !== i.css("overflow"), this.containment = [ (parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(n.scrollWidth, n.offsetWidth) :n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(n.scrollHeight, n.offsetHeight) :n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], 
      this.relative_container = i))) :void (this.containment = null);
    },
    _convertPositionTo:function(t, i) {
      i || (i = this.position);
      var n = "absolute" === t ? 1 :-1, s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent :this.offsetParent;
      return this.offset.scroll || (this.offset.scroll = {
        top:s.scrollTop(),
        left:s.scrollLeft()
      }), {
        top:i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() :this.offset.scroll.top) * n,
        left:i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() :this.offset.scroll.left) * n
      };
    },
    _generatePosition:function(t) {
      var i, n, s, r, o = this.options, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent :this.offsetParent, l = t.pageX, c = t.pageY;
      return this.offset.scroll || (this.offset.scroll = {
        top:a.scrollTop(),
        left:a.scrollLeft()
      }), this.originalPosition && (this.containment && (this.relative_container ? (n = this.relative_container.offset(), 
      i = [ this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top ]) :i = this.containment, 
      t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), 
      t.pageY - this.offset.click.top < i[1] && (c = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), 
      t.pageY - this.offset.click.top > i[3] && (c = i[3] + this.offset.click.top)), o.grid && (s = o.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / o.grid[1]) * o.grid[1] :this.originalPageY, 
      c = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s :s - this.offset.click.top >= i[1] ? s - o.grid[1] :s + o.grid[1] :s, 
      r = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] :this.originalPageX, 
      l = i ? r - this.offset.click.left >= i[0] || r - this.offset.click.left > i[2] ? r :r - this.offset.click.left >= i[0] ? r - o.grid[0] :r + o.grid[0] :r)), 
      {
        top:c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() :this.offset.scroll.top),
        left:l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() :this.offset.scroll.left)
      };
    },
    _clear:function() {
      this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), 
      this.helper = null, this.cancelHelperRemoval = !1;
    },
    _trigger:function(t, i, n) {
      return n = n || this._uiHash(), e.ui.plugin.call(this, t, [ i, n ]), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), 
      e.Widget.prototype._trigger.call(this, t, i, n);
    },
    plugins:{},
    _uiHash:function() {
      return {
        helper:this.helper,
        position:this.position,
        originalPosition:this.originalPosition,
        offset:this.positionAbs
      };
    }
  }), e.ui.plugin.add("draggable", "connectToSortable", {
    start:function(t, i) {
      var n = e(this).data("ui-draggable"), s = n.options, r = e.extend({}, i, {
        item:n.element
      });
      n.sortables = [], e(s.connectToSortable).each(function() {
        var i = e.data(this, "ui-sortable");
        i && !i.options.disabled && (n.sortables.push({
          instance:i,
          shouldRevert:i.options.revert
        }), i.refreshPositions(), i._trigger("activate", t, r));
      });
    },
    stop:function(t, i) {
      var n = e(this).data("ui-draggable"), s = e.extend({}, i, {
        item:n.element
      });
      e.each(n.sortables, function() {
        this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, 
        this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), 
        this.instance.options.helper = this.instance.options._helper, "original" === n.options.helper && this.instance.currentItem.css({
          top:"auto",
          left:"auto"
        })) :(this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, s));
      });
    },
    drag:function(t, i) {
      var n = e(this).data("ui-draggable"), s = this;
      e.each(n.sortables, function() {
        var r = !1, o = this;
        this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, 
        this.instance.offset.click = n.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (r = !0, 
        e.each(n.sortables, function() {
          return this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, 
          this.instance.offset.click = n.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (r = !1), 
          r;
        })), r ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(s).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), 
        this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
          return i.helper[0];
        }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), 
        this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = n.offset.click.top, 
        this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, 
        this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, 
        n._trigger("toSortable", t), n.dropped = this.instance.element, n.currentItem = n.element, 
        this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(t)) :this.instance.isOver && (this.instance.isOver = 0, 
        this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), 
        this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, 
        this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), 
        n._trigger("fromSortable", t), n.dropped = !1);
      });
    }
  }), e.ui.plugin.add("draggable", "cursor", {
    start:function() {
      var t = e("body"), i = e(this).data("ui-draggable").options;
      t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor);
    },
    stop:function() {
      var t = e(this).data("ui-draggable").options;
      t._cursor && e("body").css("cursor", t._cursor);
    }
  }), e.ui.plugin.add("draggable", "opacity", {
    start:function(t, i) {
      var n = e(i.helper), s = e(this).data("ui-draggable").options;
      n.css("opacity") && (s._opacity = n.css("opacity")), n.css("opacity", s.opacity);
    },
    stop:function(t, i) {
      var n = e(this).data("ui-draggable").options;
      n._opacity && e(i.helper).css("opacity", n._opacity);
    }
  }), e.ui.plugin.add("draggable", "scroll", {
    start:function() {
      var t = e(this).data("ui-draggable");
      t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset());
    },
    drag:function(t) {
      var i = e(this).data("ui-draggable"), n = i.options, s = !1;
      i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (n.axis && "x" === n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + n.scrollSpeed :t.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - n.scrollSpeed)), 
      n.axis && "y" === n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + n.scrollSpeed :t.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - n.scrollSpeed))) :(n.axis && "x" === n.axis || (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) :e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed))), 
      n.axis && "y" === n.axis || (t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) :e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed)))), 
      !1 !== s && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t);
    }
  }), e.ui.plugin.add("draggable", "snap", {
    start:function() {
      var t = e(this).data("ui-draggable"), i = t.options;
      t.snapElements = [], e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" :i.snap).each(function() {
        var i = e(this), n = i.offset();
        this !== t.element[0] && t.snapElements.push({
          item:this,
          width:i.outerWidth(),
          height:i.outerHeight(),
          top:n.top,
          left:n.left
        });
      });
    },
    drag:function(t, i) {
      var n, s, r, o, a, l, c, u, h, d, f = e(this).data("ui-draggable"), p = f.options, m = p.snapTolerance, g = i.offset.left, v = g + f.helperProportions.width, y = i.offset.top, b = y + f.helperProportions.height;
      for (h = f.snapElements.length - 1; h >= 0; h--) a = f.snapElements[h].left, l = a + f.snapElements[h].width, 
      c = f.snapElements[h].top, u = c + f.snapElements[h].height, v < a - m || g > l + m || b < c - m || y > u + m || !e.contains(f.snapElements[h].item.ownerDocument, f.snapElements[h].item) ? (f.snapElements[h].snapping && f.options.snap.release && f.options.snap.release.call(f.element, t, e.extend(f._uiHash(), {
        snapItem:f.snapElements[h].item
      })), f.snapElements[h].snapping = !1) :("inner" !== p.snapMode && (n = Math.abs(c - b) <= m, 
      s = Math.abs(u - y) <= m, r = Math.abs(a - v) <= m, o = Math.abs(l - g) <= m, n && (i.position.top = f._convertPositionTo("relative", {
        top:c - f.helperProportions.height,
        left:0
      }).top - f.margins.top), s && (i.position.top = f._convertPositionTo("relative", {
        top:u,
        left:0
      }).top - f.margins.top), r && (i.position.left = f._convertPositionTo("relative", {
        top:0,
        left:a - f.helperProportions.width
      }).left - f.margins.left), o && (i.position.left = f._convertPositionTo("relative", {
        top:0,
        left:l
      }).left - f.margins.left)), d = n || s || r || o, "outer" !== p.snapMode && (n = Math.abs(c - y) <= m, 
      s = Math.abs(u - b) <= m, r = Math.abs(a - g) <= m, o = Math.abs(l - v) <= m, n && (i.position.top = f._convertPositionTo("relative", {
        top:c,
        left:0
      }).top - f.margins.top), s && (i.position.top = f._convertPositionTo("relative", {
        top:u - f.helperProportions.height,
        left:0
      }).top - f.margins.top), r && (i.position.left = f._convertPositionTo("relative", {
        top:0,
        left:a
      }).left - f.margins.left), o && (i.position.left = f._convertPositionTo("relative", {
        top:0,
        left:l - f.helperProportions.width
      }).left - f.margins.left)), !f.snapElements[h].snapping && (n || s || r || o || d) && f.options.snap.snap && f.options.snap.snap.call(f.element, t, e.extend(f._uiHash(), {
        snapItem:f.snapElements[h].item
      })), f.snapElements[h].snapping = n || s || r || o || d);
    }
  }), e.ui.plugin.add("draggable", "stack", {
    start:function() {
      var t, i = this.data("ui-draggable").options, n = e.makeArray(e(i.stack)).sort(function(t, i) {
        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0);
      });
      n.length && (t = parseInt(e(n[0]).css("zIndex"), 10) || 0, e(n).each(function(i) {
        e(this).css("zIndex", t + i);
      }), this.css("zIndex", t + n.length));
    }
  }), e.ui.plugin.add("draggable", "zIndex", {
    start:function(t, i) {
      var n = e(i.helper), s = e(this).data("ui-draggable").options;
      n.css("zIndex") && (s._zIndex = n.css("zIndex")), n.css("zIndex", s.zIndex);
    },
    stop:function(t, i) {
      var n = e(this).data("ui-draggable").options;
      n._zIndex && e(i.helper).css("zIndex", n._zIndex);
    }
  });
}(jQuery), function(e) {
  function t(e, t) {
    if (!(e.originalEvent.touches.length > 1)) {
      e.preventDefault();
      var i = e.originalEvent.changedTouches[0], n = document.createEvent("MouseEvents");
      n.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), 
      e.target.dispatchEvent(n);
    }
  }
  if (e.support.touch = "ontouchend" in document, e.support.touch) {
    var i, n = e.ui.mouse.prototype, s = n._mouseInit, r = n._mouseDestroy;
    n._touchStart = function(e) {
      var n = this;
      !i && n._mouseCapture(e.originalEvent.changedTouches[0]) && (i = !0, n._touchMoved = !1, 
      t(e, "mouseover"), t(e, "mousemove"), t(e, "mousedown"));
    }, n._touchMove = function(e) {
      i && (this._touchMoved = !0, t(e, "mousemove"));
    }, n._touchEnd = function(e) {
      i && (t(e, "mouseup"), t(e, "mouseout"), this._touchMoved || t(e, "click"), i = !1);
    }, n._mouseInit = function() {
      var t = this;
      t.element.bind({
        touchstart:e.proxy(t, "_touchStart"),
        touchmove:e.proxy(t, "_touchMove"),
        touchend:e.proxy(t, "_touchEnd")
      }), s.call(t);
    }, n._mouseDestroy = function() {
      var t = this;
      t.element.unbind({
        touchstart:e.proxy(t, "_touchStart"),
        touchmove:e.proxy(t, "_touchMove"),
        touchend:e.proxy(t, "_touchEnd")
      }), r.call(t);
    };
  }
}(jQuery), function(e, t) {
  "use strict";
  e.rails !== t && e.error("jquery-ujs has already been loaded!");
  var i, n = e(document);
  e.rails = i = {
    linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
    buttonClickSelector:"button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
    inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",
    formSubmitSelector:"form",
    formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
    disableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
    enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
    requiredInputSelector:"input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
    fileInputSelector:"input[type=file]:not([disabled])",
    linkDisableSelector:"a[data-disable-with], a[data-disable]",
    buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]",
    csrfToken:function() {
      return e("meta[name=csrf-token]").attr("content");
    },
    csrfParam:function() {
      return e("meta[name=csrf-param]").attr("content");
    },
    CSRFProtection:function(e) {
      var t = i.csrfToken();
      t && e.setRequestHeader("X-CSRF-Token", t);
    },
    refreshCSRFTokens:function() {
      e('form input[name="' + i.csrfParam() + '"]').val(i.csrfToken());
    },
    fire:function(t, i, n) {
      var s = e.Event(i);
      return t.trigger(s, n), !1 !== s.result;
    },
    confirm:function(e) {
      return confirm(e);
    },
    ajax:function(t) {
      return e.ajax(t);
    },
    href:function(e) {
      return e[0].href;
    },
    isRemote:function(e) {
      return e.data("remote") !== t && !1 !== e.data("remote");
    },
    handleRemote:function(n) {
      var s, r, o, a, l, c;
      if (i.fire(n, "ajax:before")) {
        if (a = n.data("with-credentials") || null, l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, 
        n.is("form")) {
          s = n.data("ujs:submit-button-formmethod") || n.attr("method"), r = n.data("ujs:submit-button-formaction") || n.attr("action"), 
          o = e(n[0]).serializeArray();
          var u = n.data("ujs:submit-button");
          u && (o.push(u), n.data("ujs:submit-button", null)), n.data("ujs:submit-button-formmethod", null), 
          n.data("ujs:submit-button-formaction", null);
        } else n.is(i.inputChangeSelector) ? (s = n.data("method"), r = n.data("url"), o = n.serialize(), 
        n.data("params") && (o = o + "&" + n.data("params"))) :n.is(i.buttonClickSelector) ? (s = n.data("method") || "get", 
        r = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) :(s = n.data("method"), 
        r = i.href(n), o = n.data("params") || null);
        return c = {
          type:s || "GET",
          data:o,
          dataType:l,
          beforeSend:function(e, s) {
            if (s.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), 
            !i.fire(n, "ajax:beforeSend", [ e, s ])) return !1;
            n.trigger("ajax:send", e);
          },
          success:function(e, t, i) {
            n.trigger("ajax:success", [ e, t, i ]);
          },
          complete:function(e, t) {
            n.trigger("ajax:complete", [ e, t ]);
          },
          error:function(e, t, i) {
            n.trigger("ajax:error", [ e, t, i ]);
          },
          crossDomain:i.isCrossDomain(r)
        }, a && (c.xhrFields = {
          withCredentials:a
        }), r && (c.url = r), i.ajax(c);
      }
      return !1;
    },
    isCrossDomain:function(e) {
      var t = document.createElement("a");
      t.href = location.href;
      var i = document.createElement("a");
      try {
        return i.href = e, i.href = i.href, !((!i.protocol || ":" === i.protocol) && !i.host || t.protocol + "//" + t.host == i.protocol + "//" + i.host);
      } catch (e) {
        return !0;
      }
    },
    handleMethod:function(n) {
      var s = i.href(n), r = n.data("method"), o = n.attr("target"), a = i.csrfToken(), l = i.csrfParam(), c = e('<form method="post" action="' + s + '"></form>'), u = '<input name="_method" value="' + r + '" type="hidden" />';
      l === t || a === t || i.isCrossDomain(s) || (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'), 
      o && c.attr("target", o), c.hide().append(u).appendTo("body"), c.submit();
    },
    formElements:function(t, i) {
      return t.is("form") ? e(t[0].elements).filter(i) :t.find(i);
    },
    disableFormElements:function(t) {
      i.formElements(t, i.disableSelector).each(function() {
        i.disableFormElement(e(this));
      });
    },
    disableFormElement:function(e) {
      var i, n;
      i = e.is("button") ? "html" :"val", n = e.data("disable-with"), n !== t && (e.data("ujs:enable-with", e[i]()), 
      e[i](n)), e.prop("disabled", !0), e.data("ujs:disabled", !0);
    },
    enableFormElements:function(t) {
      i.formElements(t, i.enableSelector).each(function() {
        i.enableFormElement(e(this));
      });
    },
    enableFormElement:function(e) {
      var i = e.is("button") ? "html" :"val";
      e.data("ujs:enable-with") !== t && (e[i](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), 
      e.prop("disabled", !1), e.removeData("ujs:disabled");
    },
    allowAction:function(e) {
      var t, n = e.data("confirm"), s = !1;
      if (!n) return !0;
      if (i.fire(e, "confirm")) {
        try {
          s = i.confirm(n);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }
        t = i.fire(e, "confirm:complete", [ s ]);
      }
      return s && t;
    },
    blankInputs:function(t, i, n) {
      var s, r, o, a, l = e(), c = i || "input,textarea", u = t.find(c), h = {};
      return u.each(function() {
        s = e(this), s.is("input[type=radio]") ? (a = s.attr("name"), h[a] || (0 === t.find('input[type=radio]:checked[name="' + a + '"]').length && (o = t.find('input[type=radio][name="' + a + '"]'), 
        l = l.add(o)), h[a] = a)) :(r = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") :!!s.val()) === n && (l = l.add(s));
      }), !!l.length && l;
    },
    nonBlankInputs:function(e, t) {
      return i.blankInputs(e, t, !0);
    },
    stopEverything:function(t) {
      return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), 
      !1;
    },
    disableElement:function(e) {
      var n = e.data("disable-with");
      n !== t && (e.data("ujs:enable-with", e.html()), e.html(n)), e.bind("click.railsDisable", function(e) {
        return i.stopEverything(e);
      }), e.data("ujs:disabled", !0);
    },
    enableElement:function(e) {
      e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), 
      e.unbind("click.railsDisable"), e.removeData("ujs:disabled");
    }
  }, i.fire(n, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, n) {
    e.crossDomain || i.CSRFProtection(n);
  }), e(window).on("pageshow.rails", function() {
    e(e.rails.enableSelector).each(function() {
      var t = e(this);
      t.data("ujs:disabled") && e.rails.enableFormElement(t);
    }), e(e.rails.linkDisableSelector).each(function() {
      var t = e(this);
      t.data("ujs:disabled") && e.rails.enableElement(t);
    });
  }), n.delegate(i.linkDisableSelector, "ajax:complete", function() {
    i.enableElement(e(this));
  }), n.delegate(i.buttonDisableSelector, "ajax:complete", function() {
    i.enableFormElement(e(this));
  }), n.delegate(i.linkClickSelector, "click.rails", function(t) {
    var n = e(this), s = n.data("method"), r = n.data("params"), o = t.metaKey || t.ctrlKey;
    if (!i.allowAction(n)) return i.stopEverything(t);
    if (!o && n.is(i.linkDisableSelector) && i.disableElement(n), i.isRemote(n)) {
      if (o && (!s || "GET" === s) && !r) return !0;
      var a = i.handleRemote(n);
      return !1 === a ? i.enableElement(n) :a.fail(function() {
        i.enableElement(n);
      }), !1;
    }
    return s ? (i.handleMethod(n), !1) :void 0;
  }), n.delegate(i.buttonClickSelector, "click.rails", function(t) {
    var n = e(this);
    if (!i.allowAction(n) || !i.isRemote(n)) return i.stopEverything(t);
    n.is(i.buttonDisableSelector) && i.disableFormElement(n);
    var s = i.handleRemote(n);
    return !1 === s ? i.enableFormElement(n) :s.fail(function() {
      i.enableFormElement(n);
    }), !1;
  }), n.delegate(i.inputChangeSelector, "change.rails", function(t) {
    var n = e(this);
    return i.allowAction(n) && i.isRemote(n) ? (i.handleRemote(n), !1) :i.stopEverything(t);
  }), n.delegate(i.formSubmitSelector, "submit.rails", function(n) {
    var s, r, o = e(this), a = i.isRemote(o);
    if (!i.allowAction(o)) return i.stopEverything(n);
    if (o.attr("novalidate") === t) if (o.data("ujs:formnovalidate-button") === t) {
      if ((s = i.blankInputs(o, i.requiredInputSelector, !1)) && i.fire(o, "ajax:aborted:required", [ s ])) return i.stopEverything(n);
    } else o.data("ujs:formnovalidate-button", t);
    if (a) {
      if (r = i.nonBlankInputs(o, i.fileInputSelector)) {
        setTimeout(function() {
          i.disableFormElements(o);
        }, 13);
        var l = i.fire(o, "ajax:aborted:file", [ r ]);
        return l || setTimeout(function() {
          i.enableFormElements(o);
        }, 13), l;
      }
      return i.handleRemote(o), !1;
    }
    setTimeout(function() {
      i.disableFormElements(o);
    }, 13);
  }), n.delegate(i.formInputClickSelector, "click.rails", function(t) {
    var n = e(this);
    if (!i.allowAction(n)) return i.stopEverything(t);
    var s = n.attr("name"), r = s ? {
      name:s,
      value:n.val()
    } :null, o = n.closest("form");
    0 === o.length && (o = e("#" + n.attr("form"))), o.data("ujs:submit-button", r), 
    o.data("ujs:formnovalidate-button", n.attr("formnovalidate")), o.data("ujs:submit-button-formaction", n.attr("formaction")), 
    o.data("ujs:submit-button-formmethod", n.attr("formmethod"));
  }), n.delegate(i.formSubmitSelector, "ajax:send.rails", function(t) {
    this === t.target && i.disableFormElements(e(this));
  }), n.delegate(i.formSubmitSelector, "ajax:complete.rails", function(t) {
    this === t.target && i.enableFormElements(e(this));
  }), e(function() {
    i.refreshCSRFTokens();
  }));
}(jQuery), function() {
  function e(e) {
    function t(t, i, n, s, r, o) {
      for (;r >= 0 && r < o; r += e) {
        var a = s ? s[r] :r;
        n = i(n, t[a], a, t);
      }
      return n;
    }
    return function(i, n, s, r) {
      n = b(n, r, 4);
      var o = !k(i) && y.keys(i), a = (o || i).length, l = e > 0 ? 0 :a - 1;
      return arguments.length < 3 && (s = i[o ? o[l] :l], l += e), t(i, n, s, o, l, a);
    };
  }
  function t(e) {
    return function(t, i, n) {
      i = w(i, n);
      for (var s = T(t), r = e > 0 ? 0 :s - 1; r >= 0 && r < s; r += e) if (i(t[r], r, t)) return r;
      return -1;
    };
  }
  function i(e, t, i) {
    return function(n, s, r) {
      var o = 0, a = T(n);
      if ("number" == typeof r) e > 0 ? o = r >= 0 ? r :Math.max(r + a, o) :a = r >= 0 ? Math.min(r + 1, a) :r + a + 1; else if (i && r && a) return r = i(n, s), 
      n[r] === s ? r :-1;
      if (s !== s) return r = t(u.call(n, o, a), y.isNaN), r >= 0 ? r + o :-1;
      for (r = e > 0 ? o :a - 1; r >= 0 && r < a; r += e) if (n[r] === s) return r;
      return -1;
    };
  }
  function n(e, t) {
    var i = A.length, n = e.constructor, s = y.isFunction(n) && n.prototype || a, r = "constructor";
    for (y.has(e, r) && !y.contains(t, r) && t.push(r); i--; ) (r = A[i]) in e && e[r] !== s[r] && !y.contains(t, r) && t.push(r);
  }
  var s = this, r = s._, o = Array.prototype, a = Object.prototype, l = Function.prototype, c = o.push, u = o.slice, h = a.toString, d = a.hasOwnProperty, f = Array.isArray, p = Object.keys, m = l.bind, g = Object.create, v = function() {}, y = function(e) {
    return e instanceof y ? e :this instanceof y ? void (this._wrapped = e) :new y(e);
  };
  "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), 
  exports._ = y) :s._ = y, y.VERSION = "1.8.3";
  var b = function(e, t, i) {
    if (void 0 === t) return e;
    switch (null == i ? 3 :i) {
     case 1:
      return function(i) {
        return e.call(t, i);
      };

     case 2:
      return function(i, n) {
        return e.call(t, i, n);
      };

     case 3:
      return function(i, n, s) {
        return e.call(t, i, n, s);
      };

     case 4:
      return function(i, n, s, r) {
        return e.call(t, i, n, s, r);
      };
    }
    return function() {
      return e.apply(t, arguments);
    };
  }, w = function(e, t, i) {
    return null == e ? y.identity :y.isFunction(e) ? b(e, t, i) :y.isObject(e) ? y.matcher(e) :y.property(e);
  };
  y.iteratee = function(e, t) {
    return w(e, t, Infinity);
  };
  var x = function(e, t) {
    return function(i) {
      var n = arguments.length;
      if (n < 2 || null == i) return i;
      for (var s = 1; s < n; s++) for (var r = arguments[s], o = e(r), a = o.length, l = 0; l < a; l++) {
        var c = o[l];
        t && void 0 !== i[c] || (i[c] = r[c]);
      }
      return i;
    };
  }, _ = function(e) {
    if (!y.isObject(e)) return {};
    if (g) return g(e);
    v.prototype = e;
    var t = new v();
    return v.prototype = null, t;
  }, S = function(e) {
    return function(t) {
      return null == t ? void 0 :t[e];
    };
  }, C = Math.pow(2, 53) - 1, T = S("length"), k = function(e) {
    var t = T(e);
    return "number" == typeof t && t >= 0 && t <= C;
  };
  y.each = y.forEach = function(e, t, i) {
    t = b(t, i);
    var n, s;
    if (k(e)) for (n = 0, s = e.length; n < s; n++) t(e[n], n, e); else {
      var r = y.keys(e);
      for (n = 0, s = r.length; n < s; n++) t(e[r[n]], r[n], e);
    }
    return e;
  }, y.map = y.collect = function(e, t, i) {
    t = w(t, i);
    for (var n = !k(e) && y.keys(e), s = (n || e).length, r = Array(s), o = 0; o < s; o++) {
      var a = n ? n[o] :o;
      r[o] = t(e[a], a, e);
    }
    return r;
  }, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function(e, t, i) {
    var n;
    if (void 0 !== (n = k(e) ? y.findIndex(e, t, i) :y.findKey(e, t, i)) && -1 !== n) return e[n];
  }, y.filter = y.select = function(e, t, i) {
    var n = [];
    return t = w(t, i), y.each(e, function(e, i, s) {
      t(e, i, s) && n.push(e);
    }), n;
  }, y.reject = function(e, t, i) {
    return y.filter(e, y.negate(w(t)), i);
  }, y.every = y.all = function(e, t, i) {
    t = w(t, i);
    for (var n = !k(e) && y.keys(e), s = (n || e).length, r = 0; r < s; r++) {
      var o = n ? n[r] :r;
      if (!t(e[o], o, e)) return !1;
    }
    return !0;
  }, y.some = y.any = function(e, t, i) {
    t = w(t, i);
    for (var n = !k(e) && y.keys(e), s = (n || e).length, r = 0; r < s; r++) {
      var o = n ? n[r] :r;
      if (t(e[o], o, e)) return !0;
    }
    return !1;
  }, y.contains = y.includes = y.include = function(e, t, i, n) {
    return k(e) || (e = y.values(e)), ("number" != typeof i || n) && (i = 0), y.indexOf(e, t, i) >= 0;
  }, y.invoke = function(e, t) {
    var i = u.call(arguments, 2), n = y.isFunction(t);
    return y.map(e, function(e) {
      var s = n ? t :e[t];
      return null == s ? s :s.apply(e, i);
    });
  }, y.pluck = function(e, t) {
    return y.map(e, y.property(t));
  }, y.where = function(e, t) {
    return y.filter(e, y.matcher(t));
  }, y.findWhere = function(e, t) {
    return y.find(e, y.matcher(t));
  }, y.max = function(e, t, i) {
    var n, s, r = -Infinity, o = -Infinity;
    if (null == t && null != e) {
      e = k(e) ? e :y.values(e);
      for (var a = 0, l = e.length; a < l; a++) (n = e[a]) > r && (r = n);
    } else t = w(t, i), y.each(e, function(e, i, n) {
      ((s = t(e, i, n)) > o || s === -Infinity && r === -Infinity) && (r = e, o = s);
    });
    return r;
  }, y.min = function(e, t, i) {
    var n, s, r = Infinity, o = Infinity;
    if (null == t && null != e) {
      e = k(e) ? e :y.values(e);
      for (var a = 0, l = e.length; a < l; a++) (n = e[a]) < r && (r = n);
    } else t = w(t, i), y.each(e, function(e, i, n) {
      ((s = t(e, i, n)) < o || s === Infinity && r === Infinity) && (r = e, o = s);
    });
    return r;
  }, y.shuffle = function(e) {
    for (var t, i = k(e) ? e :y.values(e), n = i.length, s = Array(n), r = 0; r < n; r++) t = y.random(0, r), 
    t !== r && (s[r] = s[t]), s[t] = i[r];
    return s;
  }, y.sample = function(e, t, i) {
    return null == t || i ? (k(e) || (e = y.values(e)), e[y.random(e.length - 1)]) :y.shuffle(e).slice(0, Math.max(0, t));
  }, y.sortBy = function(e, t, i) {
    return t = w(t, i), y.pluck(y.map(e, function(e, i, n) {
      return {
        value:e,
        index:i,
        criteria:t(e, i, n)
      };
    }).sort(function(e, t) {
      var i = e.criteria, n = t.criteria;
      if (i !== n) {
        if (i > n || void 0 === i) return 1;
        if (i < n || void 0 === n) return -1;
      }
      return e.index - t.index;
    }), "value");
  };
  var M = function(e) {
    return function(t, i, n) {
      var s = {};
      return i = w(i, n), y.each(t, function(n, r) {
        var o = i(n, r, t);
        e(s, n, o);
      }), s;
    };
  };
  y.groupBy = M(function(e, t, i) {
    y.has(e, i) ? e[i].push(t) :e[i] = [ t ];
  }), y.indexBy = M(function(e, t, i) {
    e[i] = t;
  }), y.countBy = M(function(e, t, i) {
    y.has(e, i) ? e[i]++ :e[i] = 1;
  }), y.toArray = function(e) {
    return e ? y.isArray(e) ? u.call(e) :k(e) ? y.map(e, y.identity) :y.values(e) :[];
  }, y.size = function(e) {
    return null == e ? 0 :k(e) ? e.length :y.keys(e).length;
  }, y.partition = function(e, t, i) {
    t = w(t, i);
    var n = [], s = [];
    return y.each(e, function(e, i, r) {
      (t(e, i, r) ? n :s).push(e);
    }), [ n, s ];
  }, y.first = y.head = y.take = function(e, t, i) {
    if (null != e) return null == t || i ? e[0] :y.initial(e, e.length - t);
  }, y.initial = function(e, t, i) {
    return u.call(e, 0, Math.max(0, e.length - (null == t || i ? 1 :t)));
  }, y.last = function(e, t, i) {
    if (null != e) return null == t || i ? e[e.length - 1] :y.rest(e, Math.max(0, e.length - t));
  }, y.rest = y.tail = y.drop = function(e, t, i) {
    return u.call(e, null == t || i ? 1 :t);
  }, y.compact = function(e) {
    return y.filter(e, y.identity);
  };
  var j = function(e, t, i, n) {
    for (var s = [], r = 0, o = n || 0, a = T(e); o < a; o++) {
      var l = e[o];
      if (k(l) && (y.isArray(l) || y.isArguments(l))) {
        t || (l = j(l, t, i));
        var c = 0, u = l.length;
        for (s.length += u; c < u; ) s[r++] = l[c++];
      } else i || (s[r++] = l);
    }
    return s;
  };
  y.flatten = function(e, t) {
    return j(e, t, !1);
  }, y.without = function(e) {
    return y.difference(e, u.call(arguments, 1));
  }, y.uniq = y.unique = function(e, t, i, n) {
    y.isBoolean(t) || (n = i, i = t, t = !1), null != i && (i = w(i, n));
    for (var s = [], r = [], o = 0, a = T(e); o < a; o++) {
      var l = e[o], c = i ? i(l, o, e) :l;
      t ? (o && r === c || s.push(l), r = c) :i ? y.contains(r, c) || (r.push(c), s.push(l)) :y.contains(s, l) || s.push(l);
    }
    return s;
  }, y.union = function() {
    return y.uniq(j(arguments, !0, !0));
  }, y.intersection = function(e) {
    for (var t = [], i = arguments.length, n = 0, s = T(e); n < s; n++) {
      var r = e[n];
      if (!y.contains(t, r)) {
        for (var o = 1; o < i && y.contains(arguments[o], r); o++) ;
        o === i && t.push(r);
      }
    }
    return t;
  }, y.difference = function(e) {
    var t = j(arguments, !0, !0, 1);
    return y.filter(e, function(e) {
      return !y.contains(t, e);
    });
  }, y.zip = function() {
    return y.unzip(arguments);
  }, y.unzip = function(e) {
    for (var t = e && y.max(e, T).length || 0, i = Array(t), n = 0; n < t; n++) i[n] = y.pluck(e, n);
    return i;
  }, y.object = function(e, t) {
    for (var i = {}, n = 0, s = T(e); n < s; n++) t ? i[e[n]] = t[n] :i[e[n][0]] = e[n][1];
    return i;
  }, y.findIndex = t(1), y.findLastIndex = t(-1), y.sortedIndex = function(e, t, i, n) {
    i = w(i, n, 1);
    for (var s = i(t), r = 0, o = T(e); r < o; ) {
      var a = Math.floor((r + o) / 2);
      i(e[a]) < s ? r = a + 1 :o = a;
    }
    return r;
  }, y.indexOf = i(1, y.findIndex, y.sortedIndex), y.lastIndexOf = i(-1, y.findLastIndex), 
  y.range = function(e, t, i) {
    null == t && (t = e || 0, e = 0), i = i || 1;
    for (var n = Math.max(Math.ceil((t - e) / i), 0), s = Array(n), r = 0; r < n; r++, 
    e += i) s[r] = e;
    return s;
  };
  var P = function(e, t, i, n, s) {
    if (!(n instanceof t)) return e.apply(i, s);
    var r = _(e.prototype), o = e.apply(r, s);
    return y.isObject(o) ? o :r;
  };
  y.bind = function(e, t) {
    if (m && e.bind === m) return m.apply(e, u.call(arguments, 1));
    if (!y.isFunction(e)) throw new TypeError("Bind must be called on a function");
    var i = u.call(arguments, 2), n = function() {
      return P(e, n, t, this, i.concat(u.call(arguments)));
    };
    return n;
  }, y.partial = function(e) {
    var t = u.call(arguments, 1), i = function() {
      for (var n = 0, s = t.length, r = Array(s), o = 0; o < s; o++) r[o] = t[o] === y ? arguments[n++] :t[o];
      for (;n < arguments.length; ) r.push(arguments[n++]);
      return P(e, i, this, this, r);
    };
    return i;
  }, y.bindAll = function(e) {
    var t, i, n = arguments.length;
    if (n <= 1) throw new Error("bindAll must be passed function names");
    for (t = 1; t < n; t++) i = arguments[t], e[i] = y.bind(e[i], e);
    return e;
  }, y.memoize = function(e, t) {
    var i = function(n) {
      var s = i.cache, r = "" + (t ? t.apply(this, arguments) :n);
      return y.has(s, r) || (s[r] = e.apply(this, arguments)), s[r];
    };
    return i.cache = {}, i;
  }, y.delay = function(e, t) {
    var i = u.call(arguments, 2);
    return setTimeout(function() {
      return e.apply(null, i);
    }, t);
  }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(e, t, i) {
    var n, s, r, o = null, a = 0;
    i || (i = {});
    var l = function() {
      a = !1 === i.leading ? 0 :y.now(), o = null, r = e.apply(n, s), o || (n = s = null);
    };
    return function() {
      var c = y.now();
      a || !1 !== i.leading || (a = c);
      var u = t - (c - a);
      return n = this, s = arguments, u <= 0 || u > t ? (o && (clearTimeout(o), o = null), 
      a = c, r = e.apply(n, s), o || (n = s = null)) :o || !1 === i.trailing || (o = setTimeout(l, u)), 
      r;
    };
  }, y.debounce = function(e, t, i) {
    var n, s, r, o, a, l = function() {
      var c = y.now() - o;
      c < t && c >= 0 ? n = setTimeout(l, t - c) :(n = null, i || (a = e.apply(r, s), 
      n || (r = s = null)));
    };
    return function() {
      r = this, s = arguments, o = y.now();
      var c = i && !n;
      return n || (n = setTimeout(l, t)), c && (a = e.apply(r, s), r = s = null), a;
    };
  }, y.wrap = function(e, t) {
    return y.partial(t, e);
  }, y.negate = function(e) {
    return function() {
      return !e.apply(this, arguments);
    };
  }, y.compose = function() {
    var e = arguments, t = e.length - 1;
    return function() {
      for (var i = t, n = e[t].apply(this, arguments); i--; ) n = e[i].call(this, n);
      return n;
    };
  }, y.after = function(e, t) {
    return function() {
      if (--e < 1) return t.apply(this, arguments);
    };
  }, y.before = function(e, t) {
    var i;
    return function() {
      return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = null), i;
    };
  }, y.once = y.partial(y.before, 2);
  var E = !{
    toString:null
  }.propertyIsEnumerable("toString"), A = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ];
  y.keys = function(e) {
    if (!y.isObject(e)) return [];
    if (p) return p(e);
    var t = [];
    for (var i in e) y.has(e, i) && t.push(i);
    return E && n(e, t), t;
  }, y.allKeys = function(e) {
    if (!y.isObject(e)) return [];
    var t = [];
    for (var i in e) t.push(i);
    return E && n(e, t), t;
  }, y.values = function(e) {
    for (var t = y.keys(e), i = t.length, n = Array(i), s = 0; s < i; s++) n[s] = e[t[s]];
    return n;
  }, y.mapObject = function(e, t, i) {
    t = w(t, i);
    for (var n, s = y.keys(e), r = s.length, o = {}, a = 0; a < r; a++) n = s[a], o[n] = t(e[n], n, e);
    return o;
  }, y.pairs = function(e) {
    for (var t = y.keys(e), i = t.length, n = Array(i), s = 0; s < i; s++) n[s] = [ t[s], e[t[s]] ];
    return n;
  }, y.invert = function(e) {
    for (var t = {}, i = y.keys(e), n = 0, s = i.length; n < s; n++) t[e[i[n]]] = i[n];
    return t;
  }, y.functions = y.methods = function(e) {
    var t = [];
    for (var i in e) y.isFunction(e[i]) && t.push(i);
    return t.sort();
  }, y.extend = x(y.allKeys), y.extendOwn = y.assign = x(y.keys), y.findKey = function(e, t, i) {
    t = w(t, i);
    for (var n, s = y.keys(e), r = 0, o = s.length; r < o; r++) if (n = s[r], t(e[n], n, e)) return n;
  }, y.pick = function(e, t, i) {
    var n, s, r = {}, o = e;
    if (null == o) return r;
    y.isFunction(t) ? (s = y.allKeys(o), n = b(t, i)) :(s = j(arguments, !1, !1, 1), 
    n = function(e, t, i) {
      return t in i;
    }, o = Object(o));
    for (var a = 0, l = s.length; a < l; a++) {
      var c = s[a], u = o[c];
      n(u, c, o) && (r[c] = u);
    }
    return r;
  }, y.omit = function(e, t, i) {
    if (y.isFunction(t)) t = y.negate(t); else {
      var n = y.map(j(arguments, !1, !1, 1), String);
      t = function(e, t) {
        return !y.contains(n, t);
      };
    }
    return y.pick(e, t, i);
  }, y.defaults = x(y.allKeys, !0), y.create = function(e, t) {
    var i = _(e);
    return t && y.extendOwn(i, t), i;
  }, y.clone = function(e) {
    return y.isObject(e) ? y.isArray(e) ? e.slice() :y.extend({}, e) :e;
  }, y.tap = function(e, t) {
    return t(e), e;
  }, y.isMatch = function(e, t) {
    var i = y.keys(t), n = i.length;
    if (null == e) return !n;
    for (var s = Object(e), r = 0; r < n; r++) {
      var o = i[r];
      if (t[o] !== s[o] || !(o in s)) return !1;
    }
    return !0;
  };
  var D = function(e, t, i, n) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return e === t;
    e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
    var s = h.call(e);
    if (s !== h.call(t)) return !1;
    switch (s) {
     case "[object RegExp]":
     case "[object String]":
      return "" + e == "" + t;

     case "[object Number]":
      return +e != +e ? +t != +t :0 == +e ? 1 / +e == 1 / t :+e == +t;

     case "[object Date]":
     case "[object Boolean]":
      return +e == +t;
    }
    var r = "[object Array]" === s;
    if (!r) {
      if ("object" != typeof e || "object" != typeof t) return !1;
      var o = e.constructor, a = t.constructor;
      if (o !== a && !(y.isFunction(o) && o instanceof o && y.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1;
    }
    i = i || [], n = n || [];
    for (var l = i.length; l--; ) if (i[l] === e) return n[l] === t;
    if (i.push(e), n.push(t), r) {
      if ((l = e.length) !== t.length) return !1;
      for (;l--; ) if (!D(e[l], t[l], i, n)) return !1;
    } else {
      var c, u = y.keys(e);
      if (l = u.length, y.keys(t).length !== l) return !1;
      for (;l--; ) if (c = u[l], !y.has(t, c) || !D(e[c], t[c], i, n)) return !1;
    }
    return i.pop(), n.pop(), !0;
  };
  y.isEqual = function(e, t) {
    return D(e, t);
  }, y.isEmpty = function(e) {
    return null == e || (k(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length :0 === y.keys(e).length);
  }, y.isElement = function(e) {
    return !(!e || 1 !== e.nodeType);
  }, y.isArray = f || function(e) {
    return "[object Array]" === h.call(e);
  }, y.isObject = function(e) {
    var t = typeof e;
    return "function" === t || "object" === t && !!e;
  }, y.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error" ], function(e) {
    y["is" + e] = function(t) {
      return h.call(t) === "[object " + e + "]";
    };
  }), y.isArguments(arguments) || (y.isArguments = function(e) {
    return y.has(e, "callee");
  }), "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(e) {
    return "function" == typeof e || !1;
  }), y.isFinite = function(e) {
    return isFinite(e) && !isNaN(parseFloat(e));
  }, y.isNaN = function(e) {
    return y.isNumber(e) && e !== +e;
  }, y.isBoolean = function(e) {
    return !0 === e || !1 === e || "[object Boolean]" === h.call(e);
  }, y.isNull = function(e) {
    return null === e;
  }, y.isUndefined = function(e) {
    return void 0 === e;
  }, y.has = function(e, t) {
    return null != e && d.call(e, t);
  }, y.noConflict = function() {
    return s._ = r, this;
  }, y.identity = function(e) {
    return e;
  }, y.constant = function(e) {
    return function() {
      return e;
    };
  }, y.noop = function() {}, y.property = S, y.propertyOf = function(e) {
    return null == e ? function() {} :function(t) {
      return e[t];
    };
  }, y.matcher = y.matches = function(e) {
    return e = y.extendOwn({}, e), function(t) {
      return y.isMatch(t, e);
    };
  }, y.times = function(e, t, i) {
    var n = Array(Math.max(0, e));
    t = b(t, i, 1);
    for (var s = 0; s < e; s++) n[s] = t(s);
    return n;
  }, y.random = function(e, t) {
    return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
  }, y.now = Date.now || function() {
    return new Date().getTime();
  };
  var F = {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#x27;",
    "`":"&#x60;"
  }, I = y.invert(F), z = function(e) {
    var t = function(t) {
      return e[t];
    }, i = "(?:" + y.keys(e).join("|") + ")", n = RegExp(i), s = RegExp(i, "g");
    return function(e) {
      return e = null == e ? "" :"" + e, n.test(e) ? e.replace(s, t) :e;
    };
  };
  y.escape = z(F), y.unescape = z(I), y.result = function(e, t, i) {
    var n = null == e ? void 0 :e[t];
    return void 0 === n && (n = i), y.isFunction(n) ? n.call(e) :n;
  };
  var L = 0;
  y.uniqueId = function(e) {
    var t = ++L + "";
    return e ? e + t :t;
  }, y.templateSettings = {
    evaluate:/<%([\s\S]+?)%>/g,
    interpolate:/<%=([\s\S]+?)%>/g,
    escape:/<%-([\s\S]+?)%>/g
  };
  var N = /(.)^/, O = {
    "'":"'",
    "\\":"\\",
    "\r":"r",
    "\n":"n",
    "\u2028":"u2028",
    "\u2029":"u2029"
  }, H = /\\|'|\r|\n|\u2028|\u2029/g, R = function(e) {
    return "\\" + O[e];
  };
  y.template = function(e, t, i) {
    !t && i && (t = i), t = y.defaults({}, t, y.templateSettings);
    var n = RegExp([ (t.escape || N).source, (t.interpolate || N).source, (t.evaluate || N).source ].join("|") + "|$", "g"), s = 0, r = "__p+='";
    e.replace(n, function(t, i, n, o, a) {
      return r += e.slice(s, a).replace(H, R), s = a + t.length, i ? r += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" :n ? r += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" :o && (r += "';\n" + o + "\n__p+='"), 
      t;
    }), r += "';\n", t.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
    try {
      var o = new Function(t.variable || "obj", "_", r);
    } catch (e) {
      throw e.source = r, e;
    }
    var a = function(e) {
      return o.call(this, e, y);
    }, l = t.variable || "obj";
    return a.source = "function(" + l + "){\n" + r + "}", a;
  }, y.chain = function(e) {
    var t = y(e);
    return t._chain = !0, t;
  };
  var W = function(e, t) {
    return e._chain ? y(t).chain() :t;
  };
  y.mixin = function(e) {
    y.each(y.functions(e), function(t) {
      var i = y[t] = e[t];
      y.prototype[t] = function() {
        var e = [ this._wrapped ];
        return c.apply(e, arguments), W(this, i.apply(y, e));
      };
    });
  }, y.mixin(y), y.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
    var t = o[e];
    y.prototype[e] = function() {
      var i = this._wrapped;
      return t.apply(i, arguments), "shift" !== e && "splice" !== e || 0 !== i.length || delete i[0], 
      W(this, i);
    };
  }), y.each([ "concat", "join", "slice" ], function(e) {
    var t = o[e];
    y.prototype[e] = function() {
      return W(this, t.apply(this._wrapped, arguments));
    };
  }), y.prototype.value = function() {
    return this._wrapped;
  }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
    return "" + this._wrapped;
  }, "function" == typeof define && define.amd && define("underscore", [], function() {
    return y;
  });
}.call(this), function(e, t) {
  "use strict";
  function i(e, t) {
    var i, n, s = e.toLowerCase();
    for (t = [].concat(t), i = 0; i < t.length; i += 1) if (n = t[i]) {
      if (n.test && n.test(e)) return !0;
      if (n.toLowerCase() === s) return !0;
    }
  }
  var n = t.prototype.trim, s = t.prototype.trimRight, r = t.prototype.trimLeft, o = function(e) {
    return 1 * e || 0;
  }, a = function(e, t) {
    if (t < 1) return "";
    for (var i = ""; t > 0; ) 1 & t && (i += e), t >>= 1, e += e;
    return i;
  }, l = [].slice, c = function(e) {
    return null == e ? "\\s" :e.source ? e.source :"[" + p.escapeRegExp(e) + "]";
  }, u = {
    lt:"<",
    gt:">",
    quot:'"',
    amp:"&",
    apos:"'"
  }, h = {};
  for (var d in u) h[u[d]] = d;
  h["'"] = "#39";
  var f = function() {
    function e(e) {
      return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
    }
    var i = a, n = function() {
      return n.cache.hasOwnProperty(arguments[0]) || (n.cache[arguments[0]] = n.parse(arguments[0])), 
      n.format.call(null, n.cache[arguments[0]], arguments);
    };
    return n.format = function(n, s) {
      var r, o, a, l, c, u, h, d = 1, p = n.length, m = "", g = [];
      for (o = 0; o < p; o++) if ("string" === (m = e(n[o]))) g.push(n[o]); else if ("array" === m) {
        if (l = n[o], l[2]) for (r = s[d], a = 0; a < l[2].length; a++) {
          if (!r.hasOwnProperty(l[2][a])) throw new Error(f('[_.sprintf] property "%s" does not exist', l[2][a]));
          r = r[l[2][a]];
        } else r = l[1] ? s[l[1]] :s[d++];
        if (/[^s]/.test(l[8]) && "number" != e(r)) throw new Error(f("[_.sprintf] expecting number but found %s", e(r)));
        switch (l[8]) {
         case "b":
          r = r.toString(2);
          break;

         case "c":
          r = t.fromCharCode(r);
          break;

         case "d":
          r = parseInt(r, 10);
          break;

         case "e":
          r = l[7] ? r.toExponential(l[7]) :r.toExponential();
          break;

         case "f":
          r = l[7] ? parseFloat(r).toFixed(l[7]) :parseFloat(r);
          break;

         case "o":
          r = r.toString(8);
          break;

         case "s":
          r = (r = t(r)) && l[7] ? r.substring(0, l[7]) :r;
          break;

         case "u":
          r = Math.abs(r);
          break;

         case "x":
          r = r.toString(16);
          break;

         case "X":
          r = r.toString(16).toUpperCase();
        }
        r = /[def]/.test(l[8]) && l[3] && r >= 0 ? "+" + r :r, u = l[4] ? "0" == l[4] ? "0" :l[4].charAt(1) :" ", 
        h = l[6] - t(r).length, c = l[6] ? i(u, h) :"", g.push(l[5] ? r + c :c + r);
      }
      return g.join("");
    }, n.cache = {}, n.parse = function(e) {
      for (var t = e, i = [], n = [], s = 0; t; ) {
        if (null !== (i = /^[^\x25]+/.exec(t))) n.push(i[0]); else if (null !== (i = /^\x25{2}/.exec(t))) n.push("%"); else {
          if (null === (i = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t))) throw new Error("[_.sprintf] huh?");
          if (i[2]) {
            s |= 1;
            var r = [], o = i[2], a = [];
            if (null === (a = /^([a-z_][a-z_\d]*)/i.exec(o))) throw new Error("[_.sprintf] huh?");
            for (r.push(a[1]); "" !== (o = o.substring(a[0].length)); ) if (null !== (a = /^\.([a-z_][a-z_\d]*)/i.exec(o))) r.push(a[1]); else {
              if (null === (a = /^\[(\d+)\]/.exec(o))) throw new Error("[_.sprintf] huh?");
              r.push(a[1]);
            }
            i[2] = r;
          } else s |= 2;
          if (3 === s) throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
          n.push(i);
        }
        t = t.substring(i[0].length);
      }
      return n;
    }, n;
  }(), p = {
    VERSION:"2.4.0",
    isBlank:function(e) {
      return null == e && (e = ""), /^\s*$/.test(e);
    },
    stripTags:function(e) {
      return null == e ? "" :t(e).replace(/<\/?[^>]+>/g, "");
    },
    capitalize:function(e) {
      return e = null == e ? "" :t(e), e.charAt(0).toUpperCase() + e.slice(1);
    },
    chop:function(e, i) {
      return null == e ? [] :(e = t(e), i = ~~i, i > 0 ? e.match(new RegExp(".{1," + i + "}", "g")) :[ e ]);
    },
    clean:function(e) {
      return p.strip(e).replace(/\s+/g, " ");
    },
    count:function(e, i) {
      if (null == e || null == i) return 0;
      e = t(e), i = t(i);
      for (var n = 0, s = 0, r = i.length; ;) {
        if (-1 === (s = e.indexOf(i, s))) break;
        n++, s += r;
      }
      return n;
    },
    chars:function(e) {
      return null == e ? [] :t(e).split("");
    },
    swapCase:function(e) {
      return null == e ? "" :t(e).replace(/\S/g, function(e) {
        return e === e.toUpperCase() ? e.toLowerCase() :e.toUpperCase();
      });
    },
    escapeHTML:function(e) {
      return null == e ? "" :t(e).replace(/[&<>"']/g, function(e) {
        return "&" + h[e] + ";";
      });
    },
    unescapeHTML:function(e) {
      return null == e ? "" :t(e).replace(/\&([^;]+);/g, function(e, i) {
        var n;
        return i in u ? u[i] :(n = i.match(/^#x([\da-fA-F]+)$/)) ? t.fromCharCode(parseInt(n[1], 16)) :(n = i.match(/^#(\d+)$/)) ? t.fromCharCode(~~n[1]) :e;
      });
    },
    escapeRegExp:function(e) {
      return null == e ? "" :t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    },
    splice:function(e, t, i, n) {
      var s = p.chars(e);
      return s.splice(~~t, ~~i, n), s.join("");
    },
    insert:function(e, t, i) {
      return p.splice(e, t, 0, i);
    },
    include:function(e, i) {
      return "" === i || null != e && -1 !== t(e).indexOf(i);
    },
    join:function() {
      var e = l.call(arguments), t = e.shift();
      return null == t && (t = ""), e.join(t);
    },
    lines:function(e) {
      return null == e ? [] :t(e).split("\n");
    },
    reverse:function(e) {
      return p.chars(e).reverse().join("");
    },
    startsWith:function(e, i) {
      return "" === i || null != e && null != i && (e = t(e), i = t(i), e.length >= i.length && e.slice(0, i.length) === i);
    },
    endsWith:function(e, i) {
      return "" === i || null != e && null != i && (e = t(e), i = t(i), e.length >= i.length && e.slice(e.length - i.length) === i);
    },
    succ:function(e) {
      return null == e ? "" :(e = t(e), e.slice(0, -1) + t.fromCharCode(e.charCodeAt(e.length - 1) + 1));
    },
    titleize:function(e) {
      return null == e ? "" :(e = t(e).toLowerCase(), e.replace(/(?:^|\s|-)\S/g, function(e) {
        return e.toUpperCase();
      }));
    },
    camelize:function(e) {
      return p.trim(e).replace(/[-_\s]+(.)?/g, function(e, t) {
        return t ? t.toUpperCase() :"";
      });
    },
    underscored:function(e) {
      return p.trim(e).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase();
    },
    dasherize:function(e) {
      return p.trim(e).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase();
    },
    classify:function(e) {
      return p.capitalize(p.camelize(t(e).replace(/[\W_]/g, " ")).replace(/\s/g, ""));
    },
    humanize:function(e) {
      return p.capitalize(p.underscored(e).replace(/_id$/, "").replace(/_/g, " "));
    },
    trim:function(e, i) {
      return null == e ? "" :!i && n ? n.call(e) :(i = c(i), t(e).replace(new RegExp("^" + i + "+|" + i + "+$", "g"), ""));
    },
    ltrim:function(e, i) {
      return null == e ? "" :!i && r ? r.call(e) :(i = c(i), t(e).replace(new RegExp("^" + i + "+"), ""));
    },
    rtrim:function(e, i) {
      return null == e ? "" :!i && s ? s.call(e) :(i = c(i), t(e).replace(new RegExp(i + "+$"), ""));
    },
    truncate:function(e, i, n) {
      return null == e ? "" :(e = t(e), n = n || "...", i = ~~i, e.length > i ? e.slice(0, i) + n :e);
    },
    prune:function(e, i, n) {
      if (null == e) return "";
      if (e = t(e), i = ~~i, n = null != n ? t(n) :"...", e.length <= i) return e;
      var s = function(e) {
        return e.toUpperCase() !== e.toLowerCase() ? "A" :" ";
      }, r = e.slice(0, i + 1).replace(/.(?=\W*\w*$)/g, s);
      return r = r.slice(r.length - 2).match(/\w\w/) ? r.replace(/\s*\S+$/, "") :p.rtrim(r.slice(0, r.length - 1)), 
      (r + n).length > e.length ? e :e.slice(0, r.length) + n;
    },
    words:function(e, t) {
      return p.isBlank(e) ? [] :p.trim(e, t).split(t || /\s+/);
    },
    pad:function(e, i, n, s) {
      e = null == e ? "" :t(e), i = ~~i;
      var r = 0;
      switch (n ? n.length > 1 && (n = n.charAt(0)) :n = " ", s) {
       case "right":
        return r = i - e.length, e + a(n, r);

       case "both":
        return r = i - e.length, a(n, Math.ceil(r / 2)) + e + a(n, Math.floor(r / 2));

       default:
        return r = i - e.length, a(n, r) + e;
      }
    },
    lpad:function(e, t, i) {
      return p.pad(e, t, i);
    },
    rpad:function(e, t, i) {
      return p.pad(e, t, i, "right");
    },
    lrpad:function(e, t, i) {
      return p.pad(e, t, i, "both");
    },
    sprintf:f,
    vsprintf:function(e, t) {
      return t.unshift(e), f.apply(null, t);
    },
    toNumber:function(e, t) {
      return e ? (e = p.trim(e), e.match(/^-?\d+(?:\.\d+)?$/) ? o(o(e).toFixed(~~t)) :NaN) :0;
    },
    numberFormat:function(e, t, i, n) {
      if (isNaN(e) || null == e) return "";
      e = e.toFixed(~~t), n = "string" == typeof n ? n :",";
      var s = e.split("."), r = s[0], o = s[1] ? (i || ".") + s[1] :"";
      return r.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + n) + o;
    },
    strRight:function(e, i) {
      if (null == e) return "";
      e = t(e), i = null != i ? t(i) :i;
      var n = i ? e.indexOf(i) :-1;
      return ~n ? e.slice(n + i.length, e.length) :e;
    },
    strRightBack:function(e, i) {
      if (null == e) return "";
      e = t(e), i = null != i ? t(i) :i;
      var n = i ? e.lastIndexOf(i) :-1;
      return ~n ? e.slice(n + i.length, e.length) :e;
    },
    strLeft:function(e, i) {
      if (null == e) return "";
      e = t(e), i = null != i ? t(i) :i;
      var n = i ? e.indexOf(i) :-1;
      return ~n ? e.slice(0, n) :e;
    },
    strLeftBack:function(e, t) {
      if (null == e) return "";
      e += "", t = null != t ? "" + t :t;
      var i = e.lastIndexOf(t);
      return ~i ? e.slice(0, i) :e;
    },
    toSentence:function(e, t, i, n) {
      t = t || ", ", i = i || " and ";
      var s = e.slice(), r = s.pop();
      return e.length > 2 && n && (i = p.rtrim(t) + i), s.length ? s.join(t) + i + r :r;
    },
    toSentenceSerial:function() {
      var e = l.call(arguments);
      return e[3] = !0, p.toSentence.apply(p, e);
    },
    slugify:function(e) {
      if (null == e) return "";
      var i = "\u0105\xe0\xe1\xe4\xe2\xe3\xe5\xe6\u0103\u0107\u0119\xe8\xe9\xeb\xea\xec\xed\xef\xee\u0142\u0144\xf2\xf3\xf6\xf4\xf5\xf8\u015b\u0219\u021b\xf9\xfa\xfc\xfb\xf1\xe7\u017c\u017a", n = new RegExp(c(i), "g");
      return e = t(e).toLowerCase().replace(n, function(e) {
        var t = i.indexOf(e);
        return "aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz".charAt(t) || "-";
      }), p.dasherize(e.replace(/[^\w\s-]/g, ""));
    },
    surround:function(e, t) {
      return [ t, e, t ].join("");
    },
    quote:function(e, t) {
      return p.surround(e, t || '"');
    },
    unquote:function(e, t) {
      return t = t || '"', e[0] === t && e[e.length - 1] === t ? e.slice(1, e.length - 1) :e;
    },
    exports:function() {
      var e = {};
      for (var t in this) this.hasOwnProperty(t) && !t.match(/^(?:include|contains|reverse)$/) && (e[t] = this[t]);
      return e;
    },
    repeat:function(e, i, n) {
      if (null == e) return "";
      if (i = ~~i, null == n) return a(t(e), i);
      for (var s = []; i > 0; s[--i] = e) ;
      return s.join(n);
    },
    naturalCmp:function(e, i) {
      if (e == i) return 0;
      if (!e) return -1;
      if (!i) return 1;
      for (var n = /(\.\d+)|(\d+)|(\D+)/g, s = t(e).toLowerCase().match(n), r = t(i).toLowerCase().match(n), o = Math.min(s.length, r.length), a = 0; a < o; a++) {
        var l = s[a], c = r[a];
        if (l !== c) {
          var u = parseInt(l, 10);
          if (!isNaN(u)) {
            var h = parseInt(c, 10);
            if (!isNaN(h) && u - h) return u - h;
          }
          return l < c ? -1 :1;
        }
      }
      return s.length === r.length ? s.length - r.length :e < i ? -1 :1;
    },
    levenshtein:function(e, i) {
      if (null == e && null == i) return 0;
      if (null == e) return t(i).length;
      if (null == i) return t(e).length;
      e = t(e), i = t(i);
      for (var n, s, r = [], o = 0; o <= i.length; o++) for (var a = 0; a <= e.length; a++) s = o && a ? e.charAt(a - 1) === i.charAt(o - 1) ? n :Math.min(r[a], r[a - 1], n) + 1 :o + a, 
      n = r[a], r[a] = s;
      return r.pop();
    },
    toBoolean:function(e, t, n) {
      return "number" == typeof e && (e = "" + e), "string" != typeof e ? !!e :(e = p.trim(e), 
      !!i(e, t || [ "true", "1" ]) || !i(e, n || [ "false", "0" ]) && void 0);
    }
  };
  p.strip = p.trim, p.lstrip = p.ltrim, p.rstrip = p.rtrim, p.center = p.lrpad, p.rjust = p.lpad, 
  p.ljust = p.rpad, p.contains = p.include, p.q = p.quote, p.toBool = p.toBoolean, 
  "undefined" != typeof exports && ("undefined" != typeof module && module.exports && (module.exports = p), 
  exports._s = p), "function" == typeof define && define.amd && define("underscore.string", [], function() {
    return p;
  }), e._ = e._ || {}, e._.string = e._.str = p;
}(this, String), function() {
  var e;
  e = function() {
    function e() {}
    return e.version = "1.2.0", e.registered_features = {}, e.featurettes_counter = 0, 
    e.register = function(e, t) {
      return this.registered_features[e] = t;
    }, e.load = function() {
      var e, t, i, n, s, r, o, a, l, c, u, h;
      for (i = document.querySelectorAll("[data-featurette]"), t = [], a = 0, c = i.length; a < c; a++) e = i[a], 
      e.featuretteLoading || e.featurette || (t.push(e), e.featuretteLoading = !0);
      for (h = [], l = 0, u = t.length; l < u; l++) e = t[l], n = e.getAttribute("data-featurette"), 
      r = this.registered_features[n], r ? (s = e.id, null != s && "" !== s || (s = "featurette-" + this.featurettes_counter, 
      e.id = s), o = new r(e), e.featurette = o, h.push(this.featurettes_counter += 1)) :window.console ? h.push(console.log("Unknown featurette " + n)) :h.push(void 0);
      return h;
    }, e.get = function(e) {
      var t;
      return null != (t = document.getElementById(e)) ? t.featurette :void 0;
    }, e;
  }(), window.Featurette = e;
}.call(this), function(e, t, i) {
  "use strict";
  function n(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return e.prop ? e.prop.apply(e, t) :e.attr.apply(e, t);
  }
  function s(e, t, i) {
    var n, s;
    for (n in i) i.hasOwnProperty(n) && (s = n.replace(/ |$/g, t.eventNamespace), e.bind(s, i[n]));
  }
  function r(e, t, i) {
    s(e, i, {
      focus:function() {
        t.addClass(i.focusClass);
      },
      blur:function() {
        t.removeClass(i.focusClass), t.removeClass(i.activeClass);
      },
      mouseenter:function() {
        t.addClass(i.hoverClass);
      },
      mouseleave:function() {
        t.removeClass(i.hoverClass), t.removeClass(i.activeClass);
      },
      "mousedown touchbegin":function() {
        e.is(":disabled") || t.addClass(i.activeClass);
      },
      "mouseup touchend":function() {
        t.removeClass(i.activeClass);
      }
    });
  }
  function o(e, t) {
    e.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass);
  }
  function a(e, t, i) {
    i ? e.addClass(t) :e.removeClass(t);
  }
  function l(e, t, i) {
    var n = "checked", s = t.is(":" + n);
    t.prop ? t.prop(n, s) :s ? t.attr(n, n) :t.removeAttr(n), a(e, i.checkedClass, s);
  }
  function c(e, t, i) {
    a(e, i.disabledClass, t.is(":disabled"));
  }
  function u(e, t, i) {
    switch (i) {
     case "after":
      return e.after(t), e.next();

     case "before":
      return e.before(t), e.prev();

     case "wrap":
      return e.wrap(t), e.parent();
    }
    return null;
  }
  function h(e, i, s) {
    var r, o, a;
    return s || (s = {}), s = t.extend({
      bind:{},
      divClass:null,
      divWrap:"wrap",
      spanClass:null,
      spanHtml:null,
      spanWrap:"wrap"
    }, s), r = t("<div />"), o = t("<span />"), i.autoHide && e.is(":hidden") && "none" === e.css("display") && r.hide(), 
    s.divClass && r.addClass(s.divClass), i.wrapperClass && r.addClass(i.wrapperClass), 
    s.spanClass && o.addClass(s.spanClass), a = n(e, "id"), i.useID && a && n(r, "id", i.idPrefix + "-" + a), 
    s.spanHtml && o.html(s.spanHtml), r = u(e, r, s.divWrap), o = u(e, o, s.spanWrap), 
    c(r, e, i), {
      div:r,
      span:o
    };
  }
  function d(e, i) {
    var n;
    return i.wrapperClass ? (n = t("<span />").addClass(i.wrapperClass), n = u(e, n, "wrap")) :null;
  }
  function f() {
    var i, n, s, r;
    return r = "rgb(120,2,153)", n = t('<div style="width:0;height:0;color:' + r + '">'), 
    t("body").append(n), s = n.get(0), i = e.getComputedStyle ? e.getComputedStyle(s, "").color :(s.currentStyle || s.style || {}).color, 
    n.remove(), i.replace(/ /g, "") !== r;
  }
  function p(e) {
    return e ? t("<span />").text(e).html() :"";
  }
  function m() {
    return navigator.cpuClass && !navigator.product;
  }
  function g() {
    return e.XMLHttpRequest !== undefined;
  }
  function v(e) {
    var t;
    return !!e[0].multiple || !(!(t = n(e, "size")) || t <= 1);
  }
  function y() {
    return !1;
  }
  function b(e, t) {
    var i = "none";
    s(e, t, {
      "selectstart dragstart mousedown":y
    }), e.css({
      MozUserSelect:i,
      msUserSelect:i,
      webkitUserSelect:i,
      userSelect:i
    });
  }
  function w(e, t, i) {
    var n = e.val();
    "" === n ? n = i.fileDefaultHtml :(n = n.split(/[\/\\]+/), n = n[n.length - 1]), 
    t.text(n);
  }
  function x(e, t, i) {
    var n, s;
    for (n = [], e.each(function() {
      var e;
      for (e in t) Object.prototype.hasOwnProperty.call(t, e) && (n.push({
        el:this,
        name:e,
        old:this.style[e]
      }), this.style[e] = t[e]);
    }), i(); n.length; ) s = n.pop(), s.el.style[s.name] = s.old;
  }
  function _(e, t) {
    var i;
    i = e.parents(), i.push(e[0]), i = i.not(":visible"), x(i, {
      visibility:"hidden",
      display:"block",
      position:"absolute"
    }, t);
  }
  function S(e, t) {
    return function() {
      e.unwrap().unwrap().unbind(t.eventNamespace);
    };
  }
  var C = !0, T = !1, k = [ {
    match:function(e) {
      return e.is("a, button, :submit, :reset, input[type='button']");
    },
    apply:function(t, i) {
      var a, l, u, d, f;
      return l = i.submitDefaultHtml, t.is(":reset") && (l = i.resetDefaultHtml), d = t.is("a, button") ? function() {
        return t.html() || l;
      } :function() {
        return p(n(t, "value")) || l;
      }, u = h(t, i, {
        divClass:i.buttonClass,
        spanHtml:d()
      }), a = u.div, r(t, a, i), f = !1, s(a, i, {
        "click touchend":function() {
          var i, s, r, o;
          f || t.is(":disabled") || (f = !0, t[0].dispatchEvent ? (i = document.createEvent("MouseEvents"), 
          i.initEvent("click", !0, !0), s = t[0].dispatchEvent(i), t.is("a") && s && (r = n(t, "target"), 
          o = n(t, "href"), r && "_self" !== r ? e.open(o, r) :document.location.href = o)) :t.click(), 
          f = !1);
        }
      }), b(a, i), {
        remove:function() {
          return a.after(t), a.remove(), t.unbind(i.eventNamespace), t;
        },
        update:function() {
          o(a, i), c(a, t, i), t.detach(), u.span.html(d()).append(t);
        }
      };
    }
  }, {
    match:function(e) {
      return e.is(":checkbox");
    },
    apply:function(e, t) {
      var i, n, a;
      return i = h(e, t, {
        divClass:t.checkboxClass
      }), n = i.div, a = i.span, r(e, n, t), s(e, t, {
        "click touchend":function() {
          l(a, e, t);
        }
      }), l(a, e, t), {
        remove:S(e, t),
        update:function() {
          o(n, t), a.removeClass(t.checkedClass), l(a, e, t), c(n, e, t);
        }
      };
    }
  }, {
    match:function(e) {
      return e.is(":file");
    },
    apply:function(e, i) {
      function a() {
        w(e, f, i);
      }
      var l, d, f, p;
      return l = h(e, i, {
        divClass:i.fileClass,
        spanClass:i.fileButtonClass,
        spanHtml:i.fileButtonHtml,
        spanWrap:"after"
      }), d = l.div, p = l.span, f = t("<span />").html(i.fileDefaultHtml), f.addClass(i.filenameClass), 
      f = u(e, f, "after"), n(e, "size") || n(e, "size", d.width() / 10), r(e, d, i), 
      a(), m() ? s(e, i, {
        click:function() {
          e.trigger("change"), setTimeout(a, 0);
        }
      }) :s(e, i, {
        change:a
      }), b(f, i), b(p, i), {
        remove:function() {
          return f.remove(), p.remove(), e.unwrap().unbind(i.eventNamespace);
        },
        update:function() {
          o(d, i), w(e, f, i), c(d, e, i);
        }
      };
    }
  }, {
    match:function(e) {
      if (e.is("input")) {
        var t = (" " + n(e, "type") + " ").toLowerCase();
        return " color date datetime datetime-local email month number password search tel text time url week ".indexOf(t) >= 0;
      }
      return !1;
    },
    apply:function(e, t) {
      var i, s;
      return i = n(e, "type"), e.addClass(t.inputClass), s = d(e, t), r(e, e, t), t.inputAddTypeAsClass && e.addClass(i), 
      {
        remove:function() {
          e.removeClass(t.inputClass), t.inputAddTypeAsClass && e.removeClass(i), s && e.unwrap();
        },
        update:y
      };
    }
  }, {
    match:function(e) {
      return e.is(":radio");
    },
    apply:function(e, i) {
      var a, u, d;
      return a = h(e, i, {
        divClass:i.radioClass
      }), u = a.div, d = a.span, r(e, u, i), s(e, i, {
        "click touchend":function() {
          t.uniform.update(t(':radio[name="' + n(e, "name") + '"]'));
        }
      }), l(d, e, i), {
        remove:S(e, i),
        update:function() {
          o(u, i), l(d, e, i), c(u, e, i);
        }
      };
    }
  }, {
    match:function(e) {
      return !(!e.is("select") || v(e));
    },
    apply:function(e, i) {
      var n, a, l, u;
      return i.selectAutoWidth && _(e, function() {
        u = e.width();
      }), n = h(e, i, {
        divClass:i.selectClass,
        spanHtml:(e.find(":selected:first") || e.find("option:first")).html(),
        spanWrap:"before"
      }), a = n.div, l = n.span, i.selectAutoWidth ? _(e, function() {
        x(t([ l[0], a[0] ]), {
          display:"block"
        }, function() {
          var e;
          e = l.outerWidth() - l.width(), a.width(u + e), l.width(u);
        });
      }) :a.addClass("fixedWidth"), r(e, a, i), s(e, i, {
        change:function() {
          l.html(e.find(":selected").html()), a.removeClass(i.activeClass);
        },
        "click touchend":function() {
          var t = e.find(":selected").html();
          l.html() !== t && e.trigger("change");
        },
        keyup:function() {
          l.html(e.find(":selected").html());
        }
      }), b(l, i), {
        remove:function() {
          return l.remove(), e.unwrap().unbind(i.eventNamespace), e;
        },
        update:function() {
          i.selectAutoWidth ? (t.uniform.restore(e), e.uniform(i)) :(o(a, i), l.html(e.find(":selected").html()), 
          c(a, e, i));
        }
      };
    }
  }, {
    match:function(e) {
      return !(!e.is("select") || !v(e));
    },
    apply:function(e, t) {
      var i;
      return e.addClass(t.selectMultiClass), i = d(e, t), r(e, e, t), {
        remove:function() {
          e.removeClass(t.selectMultiClass), i && e.unwrap();
        },
        update:y
      };
    }
  }, {
    match:function(e) {
      return e.is("textarea");
    },
    apply:function(e, t) {
      var i;
      return e.addClass(t.textareaClass), i = d(e, t), r(e, e, t), {
        remove:function() {
          e.removeClass(t.textareaClass), i && e.unwrap();
        },
        update:y
      };
    }
  } ];
  m() && !g() && (C = !1), t.uniform = {
    defaults:{
      activeClass:"active",
      autoHide:!0,
      buttonClass:"button",
      checkboxClass:"checker",
      checkedClass:"checked",
      disabledClass:"disabled",
      eventNamespace:".uniform",
      fileButtonClass:"action",
      fileButtonHtml:"Choose File",
      fileClass:"uploader",
      fileDefaultHtml:"No file selected",
      filenameClass:"filename",
      focusClass:"focus",
      hoverClass:"hover",
      idPrefix:"uniform",
      inputAddTypeAsClass:!0,
      inputClass:"uniform-input",
      radioClass:"radio",
      resetDefaultHtml:"Reset",
      resetSelector:!1,
      selectAutoWidth:!0,
      selectClass:"selector",
      selectMultiClass:"uniform-multiselect",
      submitDefaultHtml:"Submit",
      textareaClass:"uniform",
      useID:!0,
      wrapperClass:null
    },
    elements:[]
  }, t.fn.uniform = function(i) {
    var n = this;
    return i = t.extend({}, t.uniform.defaults, i), T || (T = !0, f() && (C = !1)), 
    C ? (i.resetSelector && t(i.resetSelector).mouseup(function() {
      e.setTimeout(function() {
        t.uniform.update(n);
      }, 10);
    }), this.each(function() {
      var e, n, s, r = t(this);
      if (r.data("uniformed")) return void t.uniform.update(r);
      for (e = 0; e < k.length; e += 1) if (n = k[e], n.match(r, i)) return s = n.apply(r, i), 
      r.data("uniformed", s), void t.uniform.elements.push(r.get(0));
    })) :this;
  }, t.uniform.restore = t.fn.uniform.restore = function(e) {
    e === i && (e = t.uniform.elements), t(e).each(function() {
      var e, i, n = t(this);
      (i = n.data("uniformed")) && (i.remove(), e = t.inArray(this, t.uniform.elements), 
      e >= 0 && t.uniform.elements.splice(e, 1), n.removeData("uniformed"));
    });
  }, t.uniform.update = t.fn.uniform.update = function(e) {
    e === i && (e = t.uniform.elements), t(e).each(function() {
      var e, i = t(this);
      (e = i.data("uniformed")) && e.update(i, e.options);
    });
  };
}(this, jQuery), function(e) {
  var t, i = {
    className:"autosizejs",
    id:"autosizejs",
    append:"\n",
    callback:!1,
    resizeDelay:10,
    placeholder:!0
  }, n = [ "fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent", "whiteSpace" ], s = e('<textarea tabindex="-1"/>').data("autosize", !0)[0];
  s.style.cssText = "position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;", 
  s.style.lineHeight = "99px", "99px" === e(s).css("lineHeight") && n.push("lineHeight"), 
  s.style.lineHeight = "", e.fn.autosize = function(r) {
    return this.length ? (r = e.extend({}, i, r || {}), s.parentNode !== document.body && e(document.body).append(s), 
    this.each(function() {
      function i() {
        var t, i = window.getComputedStyle ? window.getComputedStyle(d, null) :null;
        i ? (t = parseFloat(i.width), "border-box" !== i.boxSizing && "border-box" !== i.webkitBoxSizing && "border-box" !== i.mozBoxSizing || e.each([ "paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth" ], function(e, n) {
          t -= parseFloat(i[n]);
        })) :t = f.width(), s.style.width = Math.max(t, 0) + "px";
      }
      function o() {
        var o = {};
        if (t = d, s.className = r.className, s.id = r.id, c = parseFloat(f.css("maxHeight")), 
        e.each(n, function(e, t) {
          o[t] = f.css(t);
        }), e(s).css(o).attr("wrap", f.attr("wrap")), i(), window.chrome) {
          var a = d.style.width;
          d.style.width = "0px";
          d.offsetWidth;
          d.style.width = a;
        }
      }
      function a() {
        var e, n;
        t !== d ? o() :i(), !d.value && r.placeholder ? s.value = f.attr("placeholder") || "" :s.value = d.value, 
        s.value += r.append || "", s.style.overflowY = d.style.overflowY, n = parseFloat(d.style.height) || 0, 
        s.scrollTop = 0, s.scrollTop = 9e4, e = s.scrollTop, c && e > c ? (d.style.overflowY = "scroll", 
        e = c) :(d.style.overflowY = "hidden", e < u && (e = u)), e += p, Math.abs(n - e) > .01 && (d.style.height = e + "px", 
        s.className = s.className, m && r.callback.call(d, d), f.trigger("autosize.resized"));
      }
      function l() {
        clearTimeout(h), h = setTimeout(function() {
          var e = f.width();
          e !== v && (v = e, a());
        }, parseInt(r.resizeDelay, 10));
      }
      var c, u, h, d = this, f = e(d), p = 0, m = e.isFunction(r.callback), g = {
        height:d.style.height,
        overflow:d.style.overflow,
        overflowY:d.style.overflowY,
        wordWrap:d.style.wordWrap,
        resize:d.style.resize
      }, v = f.width(), y = f.css("resize");
      f.data("autosize") || (f.data("autosize", !0), "border-box" !== f.css("box-sizing") && "border-box" !== f.css("-moz-box-sizing") && "border-box" !== f.css("-webkit-box-sizing") || (p = f.outerHeight() - f.height()), 
      u = Math.max(parseFloat(f.css("minHeight")) - p || 0, f.height()), f.css({
        overflow:"hidden",
        overflowY:"hidden",
        wordWrap:"break-word"
      }), "vertical" === y ? f.css("resize", "none") :"both" === y && f.css("resize", "horizontal"), 
      "onpropertychange" in d ? "oninput" in d ? f.on("input.autosize keyup.autosize", a) :f.on("propertychange.autosize", function() {
        "value" === event.propertyName && a();
      }) :f.on("input.autosize", a), !1 !== r.resizeDelay && e(window).on("resize.autosize", l), 
      f.on("autosize.resize", a), f.on("autosize.resizeIncludeStyle", function() {
        t = null, a();
      }), f.on("autosize.destroy", function() {
        t = null, clearTimeout(h), e(window).off("resize", l), f.off("autosize").off(".autosize").css(g).removeData("autosize");
      }), a());
    })) :this;
  };
}(jQuery || $), function(e) {
  e.InFieldLabels = function(t, i, n) {
    var s = this;
    s.$label = e(t), s.label = t, s.$field = e(i), s.field = i, s.$label.data("InFieldLabels", s), 
    s.showing = !0, s.init = function() {
      var t;
      s.options = e.extend({}, e.InFieldLabels.defaultOptions, n), s.options.className && s.$label.addClass(s.options.className), 
      setTimeout(function() {
        "" !== s.$field.val() ? (s.$label.hide(), s.showing = !1) :(s.$label.show(), s.showing = !0);
      }, 200), s.$field.focus(function() {
        s.fadeOnFocus();
      }).blur(function() {
        s.checkForEmpty(!0);
      }).bind("keydown.infieldlabel", function(e) {
        s.hideOnChange(e);
      }).bind("paste", function() {
        s.setOpacity(0);
      }).change(function() {
        s.checkForEmpty();
      }).bind("onPropertyChange", function() {
        s.checkForEmpty();
      }).bind("keyup.infieldlabel", function() {
        s.checkForEmpty();
      }), s.options.pollDuration > 0 && (t = setInterval(function() {
        "" !== s.$field.val() && (s.$label.hide(), s.showing = !1, clearInterval(t));
      }, s.options.pollDuration));
    }, s.fadeOnFocus = function() {
      s.showing && s.setOpacity(s.options.fadeOpacity);
    }, s.setOpacity = function(e) {
      s.$label.stop().animate({
        opacity:e
      }, s.options.fadeDuration, function() {
        0 === e && s.$label.hide();
      }), s.showing = e > 0;
    }, s.checkForEmpty = function(e) {
      "" === s.$field.val() ? (s.prepForShow(), s.setOpacity(e ? 1 :s.options.fadeOpacity)) :s.setOpacity(0);
    }, s.prepForShow = function() {
      s.showing || (s.$label.css({
        opacity:0
      }).show(), s.$field.bind("keydown.infieldlabel", function(e) {
        s.hideOnChange(e);
      }));
    }, s.hideOnChange = function(e) {
      16 !== e.keyCode && 9 !== e.keyCode && (s.showing && (s.$label.hide(), s.showing = !1), 
      s.$field.unbind("keydown.infieldlabel"));
    }, s.init();
  }, e.InFieldLabels.defaultOptions = {
    fadeOpacity:.5,
    fadeDuration:300,
    pollDuration:0,
    enabledInputTypes:[ "text", "search", "tel", "url", "email", "password", "number", "textarea" ],
    className:!1
  }, e.fn.inFieldLabels = function(t) {
    var i = t && t.enabledInputTypes || e.InFieldLabels.defaultOptions.enabledInputTypes;
    return this.each(function() {
      var n, s = e(this).attr("for");
      s && (n = document.getElementById(s)) && (-1 === e.inArray(n.type, i) && "TEXTAREA" !== n.nodeName || new e.InFieldLabels(this, n, t));
    });
  };
}(jQuery), function() {
  var e, t, i, n, s = function(e, t) {
    return function() {
      return e.apply(t, arguments);
    };
  }, r = function(e, t) {
    function i() {
      this.constructor = e;
    }
    for (var n in t) o.call(t, n) && (e[n] = t[n]);
    return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, 
    e;
  }, o = {}.hasOwnProperty;
  n = function() {
    function e() {
      this.options_index = 0, this.parsed = [];
    }
    return e.prototype.add_node = function(e) {
      return "OPTGROUP" === e.nodeName.toUpperCase() ? this.add_group(e) :this.add_option(e);
    }, e.prototype.add_group = function(e) {
      var t, i, n, s, r, o;
      for (t = this.parsed.length, this.parsed.push({
        array_index:t,
        group:!0,
        label:e.label,
        title:e.title ? e.title :void 0,
        children:0,
        disabled:e.disabled,
        classes:e.className
      }), r = e.childNodes, o = [], i = 0, n = r.length; i < n; i++) s = r[i], o.push(this.add_option(s, t, e.disabled));
      return o;
    }, e.prototype.add_option = function(e, t, i) {
      if ("OPTION" === e.nodeName.toUpperCase()) return "" !== e.text ? (null != t && (this.parsed[t].children += 1), 
      this.parsed.push({
        array_index:this.parsed.length,
        options_index:this.options_index,
        value:e.value,
        text:e.text,
        html:e.innerHTML,
        title:e.title ? e.title :void 0,
        selected:e.selected,
        disabled:!0 === i ? i :e.disabled,
        group_array_index:t,
        group_label:null != t ? this.parsed[t].label :null,
        classes:e.className,
        style:e.style.cssText
      })) :this.parsed.push({
        array_index:this.parsed.length,
        options_index:this.options_index,
        empty:!0
      }), this.options_index += 1;
    }, e;
  }(), n.select_to_array = function(e) {
    var t, i, s, r, o;
    for (r = new n(), o = e.childNodes, i = 0, s = o.length; i < s; i++) t = o[i], r.add_node(t);
    return r.parsed;
  }, t = function() {
    function e(t, i) {
      this.form_field = t, this.options = null != i ? i :{}, this.label_click_handler = s(this.label_click_handler, this), 
      e.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), 
      this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), 
      this.on_ready());
    }
    return e.prototype.set_default_values = function() {
      return this.click_test_action = function(e) {
        return function(t) {
          return e.test_active_click(t);
        };
      }(this), this.activate_action = function(e) {
        return function(t) {
          return e.activate_field(t);
        };
      }(this), this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, 
      this.result_highlighted = null, this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className), 
      this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, 
      this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, 
      this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, 
      this.group_search = null == this.options.group_search || this.options.group_search, 
      this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, 
      this.max_selected_options = this.options.max_selected_options || Infinity, this.inherit_select_classes = this.options.inherit_select_classes || !1, 
      this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, 
      this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options, 
      this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, 
      this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY, 
      this.case_sensitive_search = this.options.case_sensitive_search || !1, this.hide_results_on_select = null == this.options.hide_results_on_select || this.options.hide_results_on_select;
    }, e.prototype.set_default_text = function() {
      return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") :this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || e.default_multiple_text :this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || e.default_single_text, 
      this.default_text = this.escape_html(this.default_text), this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || e.default_no_result_text;
    }, e.prototype.choice_label = function(e) {
      return this.include_group_label_in_selected && null != e.group_label ? "<b class='group-name'>" + e.group_label + "</b>" + e.html :e.html;
    }, e.prototype.mouse_enter = function() {
      return this.mouse_on_container = !0;
    }, e.prototype.mouse_leave = function() {
      return this.mouse_on_container = !1;
    }, e.prototype.input_focus = function() {
      if (this.is_multiple) {
        if (!this.active_field) return setTimeout(function(e) {
          return function() {
            return e.container_mousedown();
          };
        }(this), 50);
      } else if (!this.active_field) return this.activate_field();
    }, e.prototype.input_blur = function() {
      if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function(e) {
        return function() {
          return e.blur_test();
        };
      }(this), 100);
    }, e.prototype.label_click_handler = function(e) {
      return this.is_multiple ? this.container_mousedown(e) :this.activate_field();
    }, e.prototype.results_option_build = function(e) {
      var t, i, n, s, r, o, a;
      for (t = "", a = 0, o = this.results_data, s = 0, r = o.length; s < r && (i = o[s], 
      n = "", n = i.group ? this.result_add_group(i) :this.result_add_option(i), "" !== n && (a++, 
      t += n), (null != e ? e.first :void 0) && (i.selected && this.is_multiple ? this.choice_build(i) :i.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(i))), 
      !(a >= this.max_shown_results)); s++) ;
      return t;
    }, e.prototype.result_add_option = function(e) {
      var t, i;
      return e.search_match && this.include_option_in_results(e) ? (t = [], e.disabled || e.selected && this.is_multiple || t.push("active-result"), 
      !e.disabled || e.selected && this.is_multiple || t.push("disabled-result"), e.selected && t.push("result-selected"), 
      null != e.group_array_index && t.push("group-option"), "" !== e.classes && t.push(e.classes), 
      i = document.createElement("li"), i.className = t.join(" "), i.style.cssText = e.style, 
      i.setAttribute("data-option-array-index", e.array_index), i.innerHTML = e.highlighted_html || e.html, 
      e.title && (i.title = e.title), this.outerHTML(i)) :"";
    }, e.prototype.result_add_group = function(e) {
      var t, i;
      return (e.search_match || e.group_match) && e.active_options > 0 ? (t = [], t.push("group-result"), 
      e.classes && t.push(e.classes), i = document.createElement("li"), i.className = t.join(" "), 
      i.innerHTML = e.highlighted_html || this.escape_html(e.label), e.title && (i.title = e.title), 
      this.outerHTML(i)) :"";
    }, e.prototype.results_update_field = function() {
      if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), 
      this.results_build(), this.results_showing) return this.winnow_results();
    }, e.prototype.reset_single_select_options = function() {
      var e, t, i, n, s;
      for (i = this.results_data, s = [], e = 0, t = i.length; e < t; e++) n = i[e], n.selected ? s.push(n.selected = !1) :s.push(void 0);
      return s;
    }, e.prototype.results_toggle = function() {
      return this.results_showing ? this.results_hide() :this.results_show();
    }, e.prototype.results_search = function() {
      return this.results_showing ? this.winnow_results() :this.results_show();
    }, e.prototype.winnow_results = function() {
      var e, t, i, n, s, r, o, a, l, c, u, h, d, f, p;
      for (this.no_results_clear(), c = 0, o = this.get_search_text(), e = o.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 
      l = this.get_search_regex(e), a = this.results_data, i = 0, n = a.length; i < n; i++) s = a[i], 
      s.search_match = !1, u = null, h = null, s.highlighted_html = "", this.include_option_in_results(s) && (s.group && (s.group_match = !1, 
      s.active_options = 0), null != s.group_array_index && this.results_data[s.group_array_index] && (u = this.results_data[s.group_array_index], 
      0 === u.active_options && u.search_match && (c += 1), u.active_options += 1), p = s.group ? s.label :s.text, 
      s.group && !this.group_search || (h = this.search_string_match(p, l), s.search_match = null != h, 
      s.search_match && !s.group && (c += 1), s.search_match ? (o.length && (d = h.index, 
      r = p.slice(0, d), t = p.slice(d, d + o.length), f = p.slice(d + o.length), s.highlighted_html = this.escape_html(r) + "<em>" + this.escape_html(t) + "</em>" + this.escape_html(f)), 
      null != u && (u.group_match = !0)) :null != s.group_array_index && this.results_data[s.group_array_index].search_match && (s.search_match = !0)));
      return this.result_clear_highlight(), c < 1 && o.length ? (this.update_results_content(""), 
      this.no_results(o)) :(this.update_results_content(this.results_option_build()), 
      this.winnow_results_set_highlight());
    }, e.prototype.get_search_regex = function(e) {
      var t, i;
      return i = this.search_contains ? e :"(^|\\s|\\b)" + e + "[^\\s]*", this.enable_split_word_search || this.search_contains || (i = "^" + i), 
      t = this.case_sensitive_search ? "" :"i", new RegExp(i, t);
    }, e.prototype.search_string_match = function(e, t) {
      var i;
      return i = t.exec(e), !this.search_contains && (null != i ? i[1] :void 0) && (i.index += 1), 
      i;
    }, e.prototype.choices_count = function() {
      var e, t, i, n;
      if (null != this.selected_option_count) return this.selected_option_count;
      for (this.selected_option_count = 0, n = this.form_field.options, e = 0, t = n.length; e < t; e++) i = n[e], 
      i.selected && (this.selected_option_count += 1);
      return this.selected_option_count;
    }, e.prototype.choices_click = function(e) {
      if (e.preventDefault(), this.activate_field(), !this.results_showing && !this.is_disabled) return this.results_show();
    }, e.prototype.keydown_checker = function(e) {
      var t, i;
      switch (i = null != (t = e.which) ? t :e.keyCode, this.search_field_scale(), 8 !== i && this.pending_backstroke && this.clear_backstroke(), 
      i) {
       case 8:
        this.backstroke_length = this.get_search_field_value().length;
        break;

       case 9:
        this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
        break;

       case 13:
       case 27:
        this.results_showing && e.preventDefault();
        break;

       case 32:
        this.disable_search && e.preventDefault();
        break;

       case 38:
        e.preventDefault(), this.keyup_arrow();
        break;

       case 40:
        e.preventDefault(), this.keydown_arrow();
      }
    }, e.prototype.keyup_checker = function(e) {
      var t, i;
      switch (i = null != (t = e.which) ? t :e.keyCode, this.search_field_scale(), i) {
       case 8:
        this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0 ? this.keydown_backstroke() :this.pending_backstroke || (this.result_clear_highlight(), 
        this.results_search());
        break;

       case 13:
        e.preventDefault(), this.results_showing && this.result_select(e);
        break;

       case 27:
        this.results_showing && this.results_hide();
        break;

       case 9:
       case 16:
       case 17:
       case 18:
       case 38:
       case 40:
       case 91:
        break;

       default:
        this.results_search();
      }
    }, e.prototype.clipboard_event_checker = function() {
      if (!this.is_disabled) return setTimeout(function(e) {
        return function() {
          return e.results_search();
        };
      }(this), 50);
    }, e.prototype.container_width = function() {
      return null != this.options.width ? this.options.width :this.form_field.offsetWidth + "px";
    }, e.prototype.include_option_in_results = function(e) {
      return !(this.is_multiple && !this.display_selected_options && e.selected) && (!(!this.display_disabled_options && e.disabled) && !e.empty);
    }, e.prototype.search_results_touchstart = function(e) {
      return this.touch_started = !0, this.search_results_mouseover(e);
    }, e.prototype.search_results_touchmove = function(e) {
      return this.touch_started = !1, this.search_results_mouseout(e);
    }, e.prototype.search_results_touchend = function(e) {
      if (this.touch_started) return this.search_results_mouseup(e);
    }, e.prototype.outerHTML = function(e) {
      var t;
      return e.outerHTML ? e.outerHTML :(t = document.createElement("div"), t.appendChild(e), 
      t.innerHTML);
    }, e.prototype.get_single_html = function() {
      return '<a class="chosen-single chosen-default">\n  <input class="chosen-search-input" type="text" autocomplete="off" />\n  <span>' + this.default_text + '</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n  </div>\n  <ul class="chosen-results"></ul>\n</div>';
    }, e.prototype.get_multi_html = function() {
      return '<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="' + this.default_text + '" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>';
    }, e.prototype.get_no_results_html = function(e) {
      return '<li class="no-results">\n  ' + this.results_none_found + " <span>" + this.escape_html(e) + "</span>\n</li>";
    }, e.browser_is_supported = function() {
      return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 :!(/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent));
    }, e.default_multiple_text = "Select Some Options", e.default_single_text = "Select an Option", 
    e.default_no_result_text = "No results match", e;
  }(), e = jQuery, e.fn.extend({
    chosen:function(n) {
      return t.browser_is_supported() ? this.each(function() {
        var t, s;
        if (t = e(this), s = t.data("chosen"), "destroy" === n) return void (s instanceof i && s.destroy());
        s instanceof i || t.data("chosen", new i(this, n));
      }) :this;
    }
  }), i = function(t) {
    function i() {
      return i.__super__.constructor.apply(this, arguments);
    }
    return r(i, t), i.prototype.setup = function() {
      return this.form_field_jq = e(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex;
    }, i.prototype.set_up_html = function() {
      var t, i;
      return t = [ "chosen-container" ], t.push("chosen-container-" + (this.is_multiple ? "multi" :"single")), 
      this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className), 
      this.is_rtl && t.push("chosen-rtl"), i = {
        "class":t.join(" "),
        title:this.form_field.title
      }, this.form_field.id.length && (i.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), 
      this.container = e("<div />", i), this.container.width(this.container_width()), 
      this.is_multiple ? this.container.html(this.get_multi_html()) :this.container.html(this.get_single_html()), 
      this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), 
      this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), 
      this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), 
      this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), 
      this.search_container = this.container.find("li.search-field").first()) :(this.search_container = this.container.find("div.chosen-search").first(), 
      this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), 
      this.set_tab_index(), this.set_label_behavior();
    }, i.prototype.on_ready = function() {
      return this.form_field_jq.trigger("chosen:ready", {
        chosen:this
      });
    }, i.prototype.register_observers = function() {
      return this.container.on("touchstart.chosen", function(e) {
        return function(t) {
          e.container_mousedown(t);
        };
      }(this)), this.container.on("touchend.chosen", function(e) {
        return function(t) {
          e.container_mouseup(t);
        };
      }(this)), this.container.on("mousedown.chosen", function(e) {
        return function(t) {
          e.container_mousedown(t);
        };
      }(this)), this.container.on("mouseup.chosen", function(e) {
        return function(t) {
          e.container_mouseup(t);
        };
      }(this)), this.container.on("mouseenter.chosen", function(e) {
        return function(t) {
          e.mouse_enter(t);
        };
      }(this)), this.container.on("mouseleave.chosen", function(e) {
        return function(t) {
          e.mouse_leave(t);
        };
      }(this)), this.search_results.on("mouseup.chosen", function(e) {
        return function(t) {
          e.search_results_mouseup(t);
        };
      }(this)), this.search_results.on("mouseover.chosen", function(e) {
        return function(t) {
          e.search_results_mouseover(t);
        };
      }(this)), this.search_results.on("mouseout.chosen", function(e) {
        return function(t) {
          e.search_results_mouseout(t);
        };
      }(this)), this.search_results.on("mousewheel.chosen DOMMouseScroll.chosen", function(e) {
        return function(t) {
          e.search_results_mousewheel(t);
        };
      }(this)), this.search_results.on("touchstart.chosen", function(e) {
        return function(t) {
          e.search_results_touchstart(t);
        };
      }(this)), this.search_results.on("touchmove.chosen", function(e) {
        return function(t) {
          e.search_results_touchmove(t);
        };
      }(this)), this.search_results.on("touchend.chosen", function(e) {
        return function(t) {
          e.search_results_touchend(t);
        };
      }(this)), this.form_field_jq.on("chosen:updated.chosen", function(e) {
        return function(t) {
          e.results_update_field(t);
        };
      }(this)), this.form_field_jq.on("chosen:activate.chosen", function(e) {
        return function(t) {
          e.activate_field(t);
        };
      }(this)), this.form_field_jq.on("chosen:open.chosen", function(e) {
        return function(t) {
          e.container_mousedown(t);
        };
      }(this)), this.form_field_jq.on("chosen:close.chosen", function(e) {
        return function(t) {
          e.close_field(t);
        };
      }(this)), this.search_field.on("blur.chosen", function(e) {
        return function(t) {
          e.input_blur(t);
        };
      }(this)), this.search_field.on("keyup.chosen", function(e) {
        return function(t) {
          e.keyup_checker(t);
        };
      }(this)), this.search_field.on("keydown.chosen", function(e) {
        return function(t) {
          e.keydown_checker(t);
        };
      }(this)), this.search_field.on("focus.chosen", function(e) {
        return function(t) {
          e.input_focus(t);
        };
      }(this)), this.search_field.on("cut.chosen", function(e) {
        return function(t) {
          e.clipboard_event_checker(t);
        };
      }(this)), this.search_field.on("paste.chosen", function(e) {
        return function(t) {
          e.clipboard_event_checker(t);
        };
      }(this)), this.is_multiple ? this.search_choices.on("click.chosen", function(e) {
        return function(t) {
          e.choices_click(t);
        };
      }(this)) :this.container.on("click.chosen", function(e) {
        e.preventDefault();
      });
    }, i.prototype.destroy = function() {
      return e(this.container[0].ownerDocument).off("click.chosen", this.click_test_action), 
      this.form_field_label.length > 0 && this.form_field_label.off("click.chosen"), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), 
      this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show();
    }, i.prototype.search_field_disabled = function() {
      return this.is_disabled = this.form_field.disabled || this.form_field_jq.parents("fieldset").is(":disabled"), 
      this.container.toggleClass("chosen-disabled", this.is_disabled), this.search_field[0].disabled = this.is_disabled, 
      this.is_multiple || this.selected_item.off("focus.chosen", this.activate_field), 
      this.is_disabled ? this.close_field() :this.is_multiple ? void 0 :this.selected_item.on("focus.chosen", this.activate_field);
    }, i.prototype.container_mousedown = function(t) {
      var i;
      if (!this.is_disabled) return !t || "mousedown" !== (i = t.type) && "touchstart" !== i || this.results_showing || t.preventDefault(), 
      null != t && e(t.target).hasClass("search-choice-close") ? void 0 :(this.active_field ? this.is_multiple || !t || e(t.target)[0] !== this.selected_item[0] && !e(t.target).parents("a.chosen-single").length || (t.preventDefault(), 
      this.results_toggle()) :(this.is_multiple && this.search_field.val(""), e(this.container[0].ownerDocument).on("click.chosen", this.click_test_action), 
      this.results_show()), this.activate_field());
    }, i.prototype.container_mouseup = function(e) {
      if ("ABBR" === e.target.nodeName && !this.is_disabled) return this.results_reset(e);
    }, i.prototype.search_results_mousewheel = function(e) {
      var t;
      if (e.originalEvent && (t = e.originalEvent.deltaY || -e.originalEvent.wheelDelta || e.originalEvent.detail), 
      null != t) return e.preventDefault(), "DOMMouseScroll" === e.type && (t *= 40), 
      this.search_results.scrollTop(t + this.search_results.scrollTop());
    }, i.prototype.blur_test = function() {
      if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field();
    }, i.prototype.close_field = function() {
      return e(this.container[0].ownerDocument).off("click.chosen", this.click_test_action), 
      this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), 
      this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale(), 
      this.search_field.blur();
    }, i.prototype.activate_field = function() {
      if (!this.is_disabled) return this.container.addClass("chosen-container-active"), 
      this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus();
    }, i.prototype.test_active_click = function(t) {
      var i;
      return i = e(t.target).closest(".chosen-container"), i.length && this.container[0] === i[0] ? this.active_field = !0 :this.close_field();
    }, i.prototype.results_build = function() {
      return this.parsing = !0, this.selected_option_count = null, this.results_data = n.select_to_array(this.form_field), 
      this.is_multiple ? this.search_choices.find("li.search-choice").remove() :this.is_multiple || (this.single_set_selected_text(), 
      this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, 
      this.container.addClass("chosen-container-single-nosearch")) :(this.search_field[0].readOnly = !1, 
      this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
        first:!0
      })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), 
      this.parsing = !1;
    }, i.prototype.result_do_highlight = function(e) {
      var t, i, n, s, r;
      if (e.length) {
        if (this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), 
        n = parseInt(this.search_results.css("maxHeight"), 10), r = this.search_results.scrollTop(), 
        s = n + r, i = this.result_highlight.position().top + this.search_results.scrollTop(), 
        (t = i + this.result_highlight.outerHeight()) >= s) return this.search_results.scrollTop(t - n > 0 ? t - n :0);
        if (i < r) return this.search_results.scrollTop(i);
      }
    }, i.prototype.result_clear_highlight = function() {
      return this.result_highlight && this.result_highlight.removeClass("highlighted"), 
      this.result_highlight = null;
    }, i.prototype.results_show = function() {
      return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
        chosen:this
      }), !1) :(this.is_multiple || this.search_container.append(this.search_field), this.container.addClass("chosen-with-drop"), 
      this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.get_search_field_value()), 
      this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen:this
      }));
    }, i.prototype.update_results_content = function(e) {
      return this.search_results.html(e);
    }, i.prototype.results_hide = function() {
      return this.results_showing && (this.result_clear_highlight(), this.is_multiple || (this.selected_item.prepend(this.search_field), 
      this.search_field.focus()), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
        chosen:this
      })), this.results_showing = !1;
    }, i.prototype.set_tab_index = function() {
      var e;
      if (this.form_field.tabIndex) return e = this.form_field.tabIndex, this.form_field.tabIndex = -1, 
      this.search_field[0].tabIndex = e;
    }, i.prototype.set_label_behavior = function() {
      if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = e("label[for='" + this.form_field.id + "']")), 
      this.form_field_label.length > 0) return this.form_field_label.on("click.chosen", this.label_click_handler);
    }, i.prototype.show_search_field_default = function() {
      return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), 
      this.search_field.addClass("default")) :(this.search_field.val(""), this.search_field.removeClass("default"));
    }, i.prototype.search_results_mouseup = function(t) {
      var i;
      if (i = e(t.target).hasClass("active-result") ? e(t.target) :e(t.target).parents(".active-result").first(), 
      i.length) return this.result_highlight = i, this.result_select(t), this.search_field.focus();
    }, i.prototype.search_results_mouseover = function(t) {
      var i;
      if (i = e(t.target).hasClass("active-result") ? e(t.target) :e(t.target).parents(".active-result").first()) return this.result_do_highlight(i);
    }, i.prototype.search_results_mouseout = function(t) {
      if (e(t.target).hasClass("active-result") || e(t.target).parents(".active-result").first()) return this.result_clear_highlight();
    }, i.prototype.choice_build = function(t) {
      var i, n;
      return i = e("<li />", {
        "class":"search-choice"
      }).html("<span>" + this.choice_label(t) + "</span>"), t.disabled ? i.addClass("search-choice-disabled") :(n = e("<a />", {
        "class":"search-choice-close",
        "data-option-array-index":t.array_index
      }), n.on("click.chosen", function(e) {
        return function(t) {
          return e.choice_destroy_link_click(t);
        };
      }(this)), i.append(n)), this.search_container.before(i);
    }, i.prototype.choice_destroy_link_click = function(t) {
      if (t.preventDefault(), t.stopPropagation(), !this.is_disabled) return this.choice_destroy(e(t.target));
    }, i.prototype.choice_destroy = function(e) {
      if (this.result_deselect(e[0].getAttribute("data-option-array-index"))) return this.active_field ? this.search_field.focus() :this.show_search_field_default(), 
      this.is_multiple && this.choices_count() > 0 && this.get_search_field_value().length < 1 && this.results_hide(), 
      e.parents("li").first().remove(), this.search_field_scale();
    }, i.prototype.results_reset = function() {
      if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, 
      this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), 
      this.trigger_form_field_change(), this.active_field) return this.results_hide();
    }, i.prototype.results_reset_cleanup = function() {
      return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove();
    }, i.prototype.result_select = function(e) {
      var t, i;
      if (this.result_highlight) return t = this.result_highlight, this.result_clear_highlight(), 
      this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
        chosen:this
      }), !1) :(this.is_multiple ? t.removeClass("active-result") :this.reset_single_select_options(), 
      t.addClass("result-selected"), i = this.results_data[t[0].getAttribute("data-option-array-index")], 
      i.selected = !0, this.form_field.options[i.options_index].selected = !0, this.selected_option_count = null, 
      this.search_field.val(""), this.is_multiple ? this.choice_build(i) :this.single_set_selected_text(this.choice_label(i)), 
      this.is_multiple && (!this.hide_results_on_select || e.metaKey || e.ctrlKey) ? this.winnow_results() :(this.results_hide(), 
      this.show_search_field_default()), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.trigger_form_field_change({
        selected:this.form_field.options[i.options_index].value
      }), this.current_selectedIndex = this.form_field.selectedIndex, e.preventDefault(), 
      this.search_field_scale());
    }, i.prototype.single_set_selected_text = function(e) {
      return null == e && (e = this.default_text), e === this.default_text ? this.selected_item.addClass("chosen-default") :(this.single_deselect_control_build(), 
      this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(e);
    }, i.prototype.result_deselect = function(e) {
      var t;
      return t = this.results_data[e], !this.form_field.options[t.options_index].disabled && (t.selected = !1, 
      this.form_field.options[t.options_index].selected = !1, this.selected_option_count = null, 
      this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.trigger_form_field_change({
        deselected:this.form_field.options[t.options_index].value
      }), this.search_field_scale(), !0);
    }, i.prototype.single_deselect_control_build = function() {
      if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), 
      this.selected_item.addClass("chosen-single-with-deselect");
    }, i.prototype.get_search_field_value = function() {
      return this.search_field.val();
    }, i.prototype.get_search_text = function() {
      return e.trim(this.get_search_field_value());
    }, i.prototype.escape_html = function(t) {
      return e("<div/>").text(t).html();
    }, i.prototype.winnow_results_set_highlight = function() {
      var e, t;
      if (t = this.is_multiple ? [] :this.search_results.find(".result-selected.active-result"), 
      null != (e = t.length ? t.first() :this.search_results.find(".active-result").first())) return this.result_do_highlight(e);
    }, i.prototype.no_results = function(e) {
      var t;
      return t = this.get_no_results_html(e), this.search_results.append(t), this.form_field_jq.trigger("chosen:no_results", {
        chosen:this
      });
    }, i.prototype.no_results_clear = function() {
      return this.search_results.find(".no-results").remove();
    }, i.prototype.keydown_arrow = function() {
      var e;
      return this.results_showing && this.result_highlight ? (e = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(e) :void 0 :this.results_show();
    }, i.prototype.keyup_arrow = function() {
      var e;
      return this.results_showing || this.is_multiple ? this.result_highlight ? (e = this.result_highlight.prevAll("li.active-result"), 
      e.length ? this.result_do_highlight(e.first()) :(this.choices_count() > 0 && this.results_hide(), 
      this.result_clear_highlight())) :void 0 :this.results_show();
    }, i.prototype.keydown_backstroke = function() {
      var e;
      return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), 
      this.clear_backstroke()) :(e = this.search_container.siblings("li.search-choice").last(), 
      e.length && !e.hasClass("search-choice-disabled") ? (this.pending_backstroke = e, 
      this.single_backstroke_delete ? this.keydown_backstroke() :this.pending_backstroke.addClass("search-choice-focus")) :void 0);
    }, i.prototype.clear_backstroke = function() {
      return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), 
      this.pending_backstroke = null;
    }, i.prototype.search_field_scale = function() {
      var t, i, n, s, r, o, a;
      if (this.is_multiple) {
        for (r = {
          position:"absolute",
          left:"-1000px",
          top:"-1000px",
          display:"none",
          whiteSpace:"pre"
        }, o = [ "fontSize", "fontStyle", "fontWeight", "fontFamily", "lineHeight", "textTransform", "letterSpacing" ], 
        i = 0, n = o.length; i < n; i++) s = o[i], r[s] = this.search_field.css(s);
        return t = e("<div />").css(r), t.text(this.get_search_field_value()), e("body").append(t), 
        a = t.width() + 25, t.remove(), this.container.is(":visible") && (a = Math.min(this.container.outerWidth() - 10, a)), 
        this.search_field.width(a);
      }
    }, i.prototype.trigger_form_field_change = function(e) {
      return this.form_field_jq.trigger("input", e), this.form_field_jq.trigger("change", e);
    }, i;
  }(t);
}.call(this), function(e) {
  "function" == typeof define && define.amd ? define([ "jquery" ], e) :e("object" == typeof exports ? require("jquery") :jQuery);
}(function(e) {
  function t(e) {
    return a.raw ? e :encodeURIComponent(e);
  }
  function i(e) {
    return a.raw ? e :decodeURIComponent(e);
  }
  function n(e) {
    return t(a.json ? JSON.stringify(e) :String(e));
  }
  function s(e) {
    0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
    try {
      return e = decodeURIComponent(e.replace(o, " ")), a.json ? JSON.parse(e) :e;
    } catch (e) {}
  }
  function r(t, i) {
    var n = a.raw ? t :s(t);
    return e.isFunction(i) ? i(n) :n;
  }
  var o = /\+/g, a = e.cookie = function(s, o, l) {
    if (o !== undefined && !e.isFunction(o)) {
      if (l = e.extend({}, a.defaults, l), "number" == typeof l.expires) {
        var c = l.expires, u = l.expires = new Date();
        u.setTime(+u + 864e5 * c);
      }
      return document.cookie = [ t(s), "=", n(o), l.expires ? "; expires=" + l.expires.toUTCString() :"", l.path ? "; path=" + l.path :"", l.domain ? "; domain=" + l.domain :"", l.secure ? "; secure" :"" ].join("");
    }
    for (var h = s ? undefined :{}, d = document.cookie ? document.cookie.split("; ") :[], f = 0, p = d.length; f < p; f++) {
      var m = d[f].split("="), g = i(m.shift()), v = m.join("=");
      if (s && s === g) {
        h = r(v, o);
        break;
      }
      s || (v = r(v)) === undefined || (h[g] = v);
    }
    return h;
  };
  a.defaults = {}, e.removeCookie = function(t, i) {
    return e.cookie(t) !== undefined && (e.cookie(t, "", e.extend({}, i, {
      expires:-1
    })), !e.cookie(t));
  };
}), function(e) {
  function t(t, n, s) {
    var r = this;
    return this.on("click.pjax", t, function(t) {
      var o = e.extend({}, m(n, s));
      o.container || (o.container = e(this).attr("data-pjax") || r), i(t, o);
    });
  }
  function i(t, i, n) {
    n = m(i, n);
    var r = t.currentTarget;
    if ("A" !== r.tagName.toUpperCase()) throw "$.fn.pjax or $.pjax.click requires an anchor element";
    if (!(t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || location.protocol !== r.protocol || location.hostname !== r.hostname || r.href.indexOf("#") > -1 && p(r) == p(location) || t.isDefaultPrevented())) {
      var o = {
        url:r.href,
        container:e(r).attr("data-pjax"),
        target:r
      }, a = e.extend({}, o, n), l = e.Event("pjax:click");
      e(r).trigger(l, [ a ]), l.isDefaultPrevented() || (s(a), t.preventDefault(), e(r).trigger("pjax:clicked", [ a ]));
    }
  }
  function n(t, i, n) {
    n = m(i, n);
    var r = t.currentTarget;
    if ("FORM" !== r.tagName.toUpperCase()) throw "$.pjax.submit requires a form element";
    var o = {
      type:r.method.toUpperCase(),
      url:r.action,
      container:e(r).attr("data-pjax"),
      target:r
    };
    if ("GET" !== o.type && window.FormData !== undefined) o.data = new FormData(r), 
    o.processData = !1, o.contentType = !1; else {
      if (e(r).find(":file").length) return;
      o.data = e(r).serializeArray();
    }
    s(e.extend({}, o, n)), t.preventDefault();
  }
  function s(t) {
    function i(t, i, s) {
      s || (s = {}), s.relatedTarget = n;
      var r = e.Event(t, s);
      return a.trigger(r, i), !r.isDefaultPrevented();
    }
    t = e.extend(!0, {}, e.ajaxSettings, s.defaults, t), e.isFunction(t.url) && (t.url = t.url());
    var n = t.target, r = f(t.url).hash, a = t.context = g(t.container);
    t.data || (t.data = {}), e.isArray(t.data) ? t.data.push({
      name:"_pjax",
      value:a.selector
    }) :t.data._pjax = a.selector;
    var l;
    t.beforeSend = function(e, n) {
      if ("GET" !== n.type && (n.timeout = 0), e.setRequestHeader("X-PJAX", "true"), e.setRequestHeader("X-PJAX-Container", a.selector), 
      !i("pjax:beforeSend", [ e, n ])) return !1;
      n.timeout > 0 && (l = setTimeout(function() {
        i("pjax:timeout", [ e, t ]) && e.abort("timeout");
      }, n.timeout), n.timeout = 0);
      var s = f(n.url);
      r && (s.hash = r), t.requestUrl = d(s);
    }, t.complete = function(e, n) {
      l && clearTimeout(l), i("pjax:complete", [ e, n, t ]), i("pjax:end", [ e, t ]);
    }, t.error = function(e, n, s) {
      var r = b("", e, t), a = i("pjax:error", [ e, n, s, t ]);
      "GET" == t.type && "abort" !== n && a && o(r.url);
    }, t.success = function(n, l, c) {
      var h = s.state, d = "function" == typeof e.pjax.defaults.version ? e.pjax.defaults.version() :e.pjax.defaults.version, p = c.getResponseHeader("X-PJAX-Version"), m = b(n, c, t), g = f(m.url);
      if (r && (g.hash = r, m.url = g.href), d && p && d !== p) return void o(m.url);
      if (!m.contents) return void o(m.url);
      s.state = {
        id:t.id || u(),
        url:m.url,
        title:m.title,
        container:a.selector,
        fragment:t.fragment,
        timeout:t.timeout
      }, (t.push || t.replace) && window.history.replaceState(s.state, m.title, m.url);
      try {
        document.activeElement.blur();
      } catch (e) {}
      m.title && (document.title = m.title), i("pjax:beforeReplace", [ m.contents, t ], {
        state:s.state,
        previousState:h
      }), a.html(m.contents);
      var v = a.find("input[autofocus], textarea[autofocus]").last()[0];
      v && document.activeElement !== v && v.focus(), w(m.scripts);
      var y = t.scrollTo;
      if (r) {
        var x = decodeURIComponent(r.slice(1)), _ = document.getElementById(x) || document.getElementsByName(x)[0];
        _ && (y = e(_).offset().top);
      }
      "number" == typeof y && e(window).scrollTop(y), i("pjax:success", [ n, l, c, t ]);
    }, s.state || (s.state = {
      id:u(),
      url:window.location.href,
      title:document.title,
      container:a.selector,
      fragment:t.fragment,
      timeout:t.timeout
    }, window.history.replaceState(s.state, document.title)), c(s.xhr), s.options = t;
    var p = s.xhr = e.ajax(t);
    return p.readyState > 0 && (t.push && !t.replace && (x(s.state.id, h(a)), window.history.pushState(null, "", t.requestUrl)), 
    i("pjax:start", [ p, t ]), i("pjax:send", [ p, t ])), s.xhr;
  }
  function r(t, i) {
    var n = {
      url:window.location.href,
      push:!1,
      replace:!0,
      scrollTo:!1
    };
    return s(e.extend(n, m(t, i)));
  }
  function o(e) {
    window.history.replaceState(null, "", s.state.url), window.location.replace(e);
  }
  function a(t) {
    M || c(s.xhr);
    var i, n = s.state, r = t.state;
    if (r && r.container) {
      if (M && j == r.url) return;
      if (n) {
        if (n.id === r.id) return;
        i = n.id < r.id ? "forward" :"back";
      }
      var a = E[r.id] || [], l = e(a[0] || r.container), u = a[1];
      if (l.length) {
        n && _(i, n.id, h(l));
        var d = e.Event("pjax:popstate", {
          state:r,
          direction:i
        });
        l.trigger(d);
        var f = {
          id:r.id,
          url:r.url,
          container:l,
          push:!1,
          fragment:r.fragment,
          timeout:r.timeout,
          scrollTo:!1
        };
        if (u) {
          l.trigger("pjax:start", [ null, f ]), s.state = r, r.title && (document.title = r.title);
          var p = e.Event("pjax:beforeReplace", {
            state:r,
            previousState:n
          });
          l.trigger(p, [ u, f ]), l.html(u), l.trigger("pjax:end", [ null, f ]);
        } else s(f);
        l[0].offsetHeight;
      } else o(location.href);
    }
    M = !1;
  }
  function l(t) {
    var i = e.isFunction(t.url) ? t.url() :t.url, n = t.type ? t.type.toUpperCase() :"GET", s = e("<form>", {
      method:"GET" === n ? "GET" :"POST",
      action:i,
      style:"display:none"
    });
    "GET" !== n && "POST" !== n && s.append(e("<input>", {
      type:"hidden",
      name:"_method",
      value:n.toLowerCase()
    }));
    var r = t.data;
    if ("string" == typeof r) e.each(r.split("&"), function(t, i) {
      var n = i.split("=");
      s.append(e("<input>", {
        type:"hidden",
        name:n[0],
        value:n[1]
      }));
    }); else if (e.isArray(r)) e.each(r, function(t, i) {
      s.append(e("<input>", {
        type:"hidden",
        name:i.name,
        value:i.value
      }));
    }); else if ("object" == typeof r) {
      var o;
      for (o in r) s.append(e("<input>", {
        type:"hidden",
        name:o,
        value:r[o]
      }));
    }
    e(document.body).append(s), s.submit();
  }
  function c(t) {
    t && t.readyState < 4 && (t.onreadystatechange = e.noop, t.abort());
  }
  function u() {
    return new Date().getTime();
  }
  function h(e) {
    var t = e.clone();
    return t.find("script").each(function() {
      this.src || jQuery._data(this, "globalEval", !1);
    }), [ e.selector, t.contents() ];
  }
  function d(e) {
    return e.search = e.search.replace(/([?&])(_pjax|_)=[^&]*/g, ""), e.href.replace(/\?($|#)/, "$1");
  }
  function f(e) {
    var t = document.createElement("a");
    return t.href = e, t;
  }
  function p(e) {
    return e.href.replace(/#.*/, "");
  }
  function m(t, i) {
    return t && i ? i.container = t :i = e.isPlainObject(t) ? t :{
      container:t
    }, i.container && (i.container = g(i.container)), i;
  }
  function g(t) {
    if (t = e(t), t.length) {
      if ("" !== t.selector && t.context === document) return t;
      if (t.attr("id")) return e("#" + t.attr("id"));
      throw "cant get selector for pjax container!";
    }
    throw "no pjax container for " + t.selector;
  }
  function v(e, t) {
    return e.filter(t).add(e.find(t));
  }
  function y(t) {
    return e.parseHTML(t, document, !0);
  }
  function b(t, i, n) {
    var s = {}, r = /<html/i.test(t), o = i.getResponseHeader("X-PJAX-URL");
    if (s.url = o ? d(f(o)) :n.requestUrl, r) var a = e(y(t.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])), l = e(y(t.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0])); else var a = l = e(y(t));
    if (0 === l.length) return s;
    if (s.title = v(a, "title").last().text(), n.fragment) {
      if ("body" === n.fragment) var c = l; else var c = v(l, n.fragment).first();
      c.length && (s.contents = "body" === n.fragment ? c :c.contents(), s.title || (s.title = c.attr("title") || c.data("title")));
    } else r || (s.contents = l);
    return s.contents && (s.contents = s.contents.not(function() {
      return e(this).is("title");
    }), s.contents.find("title").remove(), s.scripts = v(s.contents, "script[src]").remove(), 
    s.contents = s.contents.not(s.scripts)), s.title && (s.title = e.trim(s.title)), 
    s;
  }
  function w(t) {
    if (t) {
      var i = e("script[src]");
      t.each(function() {
        var t = this.src;
        if (!i.filter(function() {
          return this.src === t;
        }).length) {
          var n = document.createElement("script"), s = e(this).attr("type");
          s && (n.type = s), n.src = e(this).attr("src"), document.head.appendChild(n);
        }
      });
    }
  }
  function x(e, t) {
    E[e] = t, D.push(e), S(A, 0), S(D, s.defaults.maxCacheLength);
  }
  function _(e, t, i) {
    var n, r;
    E[t] = i, "forward" === e ? (n = D, r = A) :(n = A, r = D), n.push(t), (t = r.pop()) && delete E[t], 
    S(n, s.defaults.maxCacheLength);
  }
  function S(e, t) {
    for (;e.length > t; ) delete E[e.shift()];
  }
  function C() {
    return e("meta").filter(function() {
      var t = e(this).attr("http-equiv");
      return t && "X-PJAX-VERSION" === t.toUpperCase();
    }).attr("content");
  }
  function T() {
    e.fn.pjax = t, e.pjax = s, e.pjax.enable = e.noop, e.pjax.disable = k, e.pjax.click = i, 
    e.pjax.submit = n, e.pjax.reload = r, e.pjax.defaults = {
      timeout:650,
      push:!0,
      replace:!1,
      type:"GET",
      dataType:"html",
      scrollTo:0,
      maxCacheLength:20,
      version:C
    }, e(window).on("popstate.pjax", a);
  }
  function k() {
    e.fn.pjax = function() {
      return this;
    }, e.pjax = l, e.pjax.enable = T, e.pjax.disable = e.noop, e.pjax.click = e.noop, 
    e.pjax.submit = e.noop, e.pjax.reload = function() {
      window.location.reload();
    }, e(window).off("popstate.pjax", a);
  }
  var M = !0, j = window.location.href, P = window.history.state;
  P && P.container && (s.state = P), "state" in window.history && (M = !1);
  var E = {}, A = [], D = [];
  e.inArray("state", e.event.props) < 0 && e.event.props.push("state"), e.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/), 
  e.support.pjax ? T() :k();
}(jQuery), function(e) {
  "function" == typeof define && define.amd ? define([ "jquery" ], e) :e("object" == typeof module && module.exports ? require("jquery") :jQuery);
}(function(e) {
  function t(t) {
    var i = {}, n = /^jQuery\d+$/;
    return e.each(t.attributes, function(e, t) {
      t.specified && !n.test(t.name) && (i[t.name] = t.value);
    }), i;
  }
  function i(t, i) {
    var n = this, r = e(this);
    if (n.value === r.attr(a ? "placeholder-x" :"placeholder") && r.hasClass(f.customClass)) if (n.value = "", 
    r.removeClass(f.customClass), r.data("placeholder-password")) {
      if (r = r.hide().nextAll('input[type="password"]:first').show().attr("id", r.removeAttr("id").data("placeholder-id")), 
      !0 === t) return r[0].value = i, i;
      r.focus();
    } else n == s() && n.select();
  }
  function n(n) {
    var s, r = this, o = e(this), l = r.id;
    if (!n || "blur" !== n.type || !o.hasClass(f.customClass)) if ("" === r.value) {
      if ("password" === r.type) {
        if (!o.data("placeholder-textinput")) {
          try {
            s = o.clone().prop({
              type:"text"
            });
          } catch (i) {
            s = e("<input>").attr(e.extend(t(this), {
              type:"text"
            }));
          }
          s.removeAttr("name").data({
            "placeholder-enabled":!0,
            "placeholder-password":o,
            "placeholder-id":l
          }).bind("focus.placeholder", i), o.data({
            "placeholder-textinput":s,
            "placeholder-id":l
          }).before(s);
        }
        r.value = "", o = o.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", o.data("placeholder-id")).show();
      } else {
        var c = o.data("placeholder-password");
        c && (c[0].value = "", o.attr("id", o.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"));
      }
      o.addClass(f.customClass), o[0].value = o.attr(a ? "placeholder-x" :"placeholder");
    } else o.removeClass(f.customClass);
  }
  function s() {
    try {
      return document.activeElement;
    } catch (e) {}
  }
  var r, o, a = !1, l = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), c = "placeholder" in document.createElement("input") && !l && !a, u = "placeholder" in document.createElement("textarea") && !l && !a, h = e.valHooks, d = e.propHooks, f = {};
  c && u ? (o = e.fn.placeholder = function() {
    return this;
  }, o.input = !0, o.textarea = !0) :(o = e.fn.placeholder = function(t) {
    var s = {
      customClass:"placeholder"
    };
    return f = e.extend({}, s, t), this.filter((c ? "textarea" :":input") + "[" + (a ? "placeholder-x" :"placeholder") + "]").not("." + f.customClass).not(":radio, :checkbox, [type=hidden]").bind({
      "focus.placeholder":i,
      "blur.placeholder":n
    }).data("placeholder-enabled", !0).trigger("blur.placeholder");
  }, o.input = c, o.textarea = u, r = {
    get:function(t) {
      var i = e(t), n = i.data("placeholder-password");
      return n ? n[0].value :i.data("placeholder-enabled") && i.hasClass(f.customClass) ? "" :t.value;
    },
    set:function(t, r) {
      var o, a, l = e(t);
      return "" !== r && (o = l.data("placeholder-textinput"), a = l.data("placeholder-password"), 
      o ? (i.call(o[0], !0, r) || (t.value = r), o[0].value = r) :a && (i.call(t, !0, r) || (a[0].value = r), 
      t.value = r)), l.data("placeholder-enabled") ? ("" === r ? (t.value = r, t != s() && n.call(t)) :(l.hasClass(f.customClass) && i.call(t), 
      t.value = r), l) :(t.value = r, l);
    }
  }, c || (h.input = r, d.value = r), u || (h.textarea = r, d.value = r), e(function() {
    e(document).delegate("form", "submit.placeholder", function() {
      var t = e("." + f.customClass, this).each(function() {
        i.call(this, !0, "");
      });
      setTimeout(function() {
        t.each(n);
      }, 10);
    });
  }), e(window).bind("beforeunload.placeholder", function() {
    var t = !0;
    try {
      "javascript:void(0)" === document.activeElement.toString() && (t = !1);
    } catch (e) {}
    t && e("." + f.customClass).each(function() {
      this.value = "";
    });
  }));
}), function(e) {
  function t(t) {
    if ("string" == typeof t.data) {
      var i = t.handler, n = t.data.toLowerCase().split(" ");
      t.handler = function(t) {
        if (this === t.target || !/textarea|select/i.test(t.target.nodeName) && "text" !== t.target.type) {
          var s = "keypress" !== t.type && e.hotkeys.specialKeys[t.which], r = String.fromCharCode(t.which).toLowerCase(), o = "", a = {};
          t.altKey && "alt" !== s && (o += "alt+"), t.ctrlKey && "ctrl" !== s && (o += "ctrl+"), 
          t.metaKey && !t.ctrlKey && "meta" !== s && (o += "meta+"), t.shiftKey && "shift" !== s && (o += "shift+"), 
          s ? a[o + s] = !0 :(a[o + r] = !0, a[o + e.hotkeys.shiftNums[r]] = !0, "shift+" === o && (a[e.hotkeys.shiftNums[r]] = !0));
          for (var l = 0, c = n.length; l < c; l++) if (a[n[l]]) return i.apply(this, arguments);
        }
      };
    }
  }
  e.hotkeys = {
    version:"0.8",
    specialKeys:{
      8:"backspace",
      9:"tab",
      13:"return",
      16:"shift",
      17:"ctrl",
      18:"alt",
      19:"pause",
      20:"capslock",
      27:"esc",
      32:"space",
      33:"pageup",
      34:"pagedown",
      35:"end",
      36:"home",
      37:"left",
      38:"up",
      39:"right",
      40:"down",
      45:"insert",
      46:"del",
      96:"0",
      97:"1",
      98:"2",
      99:"3",
      100:"4",
      101:"5",
      102:"6",
      103:"7",
      104:"8",
      105:"9",
      106:"*",
      107:"+",
      109:"-",
      110:".",
      111:"/",
      112:"f1",
      113:"f2",
      114:"f3",
      115:"f4",
      116:"f5",
      117:"f6",
      118:"f7",
      119:"f8",
      120:"f9",
      121:"f10",
      122:"f11",
      123:"f12",
      144:"numlock",
      145:"scroll",
      191:"/",
      224:"meta"
    },
    shiftNums:{
      "`":"~",
      "1":"!",
      "2":"@",
      "3":"#",
      "4":"$",
      "5":"%",
      "6":"^",
      "7":"&",
      "8":"*",
      "9":"(",
      "0":")",
      "-":"_",
      "=":"+",
      ";":": ",
      "'":'"',
      ",":"<",
      ".":">",
      "/":"?",
      "\\":"|"
    }
  }, e.each([ "keydown", "keyup", "keypress" ], function() {
    e.event.special[this] = {
      add:t
    };
  });
}(jQuery), function(e, t) {
  var i = {
    BACKSPACE:8,
    TAB:9,
    RETURN:13,
    ESC:27,
    LEFT:37,
    UP:38,
    RIGHT:39,
    DOWN:40,
    COMMA:188,
    SPACE:32,
    HOME:36,
    END:35
  }, n = {
    triggerChar:"@",
    onDataRequest:e.noop,
    minChars:2,
    showAvatars:!0,
    elastic:!0,
    insertSpaceAfterMention:!0,
    classes:{
      autoCompleteItemActive:"active"
    },
    templates:{
      wrapper:t.template('<div class="mentions-input-box"></div>'),
      autocompleteList:t.template('<div class="mentions-autocomplete-list"></div>'),
      autocompleteListItem:t.template('<li data-ref-id="<%= id %>" data-ref-type="<%= type %>" data-display="<%= display %>"><%= content %></li>'),
      autocompleteListItemAvatar:t.template('<img src="<%= avatar %>" />'),
      autocompleteListItemIcon:t.template('<div class="icon <%= icon %>"></div>'),
      mentionsOverlay:t.template('<div class="mentions"><div></div></div>'),
      mentionItemSyntax:t.template("@[<%= value %>](<%= type %>:<%= id %>)"),
      mentionItemHighlight:t.template("<strong><span><%= value %></span></strong>")
    }
  }, s = {
    htmlEncode:function(e) {
      return t.escape(e);
    },
    highlightTerm:function(e, t) {
      return t || t.length ? e.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + t + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<b>$1</b>") :e;
    },
    setCaratPosition:function(e, t) {
      if (e.createTextRange) {
        var i = e.createTextRange();
        i.move("character", t), i.select();
      } else e.selectionStart ? (e.focus(), e.setSelectionRange(t, t)) :e.focus();
    },
    rtrim:function(e) {
      return e.replace(/\s+$/, "");
    }
  }, r = function(r) {
    function o() {
      k = e(T), "true" != k.attr("data-mentions-input") && (M = k.parent(), P = e(r.templates.wrapper()), 
      k.wrapAll(P), P = M.find("> div.mentions-input-box"), k.attr("data-mentions-input", "true"), 
      k.bind("keydown", b), k.bind("keypress", y), k.bind("input", v), k.bind("click", m), 
      k.bind("blur", g), r.elastic && k.elastic());
    }
    function a() {
      j = e(r.templates.autocompleteList()), j.appendTo(P), j.delegate("li", "mousedown", p);
    }
    function l() {
      E = e(r.templates.mentionsOverlay()), E.prependTo(P);
    }
    function c() {
      var e = f();
      t.each(F, function(t) {
        var i = r.templates.mentionItemSyntax(t);
        e = e.replace(t.value, i);
      });
      var i = s.htmlEncode(e);
      t.each(F, function(e) {
        var n = t.extend({}, e, {
          value:s.htmlEncode(e.value)
        }), o = r.templates.mentionItemSyntax(n), a = r.templates.mentionItemHighlight(n);
        i = i.replace(o, a);
      }), i = i.replace(/\n/g, "<br />"), i = i.replace(/ {2}/g, "&nbsp; "), k.data("messageText", e), 
      E.find("div").html(i);
    }
    function u() {
      z = [];
    }
    function h() {
      var e = f();
      F = t.reject(F, function(t) {
        return !t.value || -1 == e.indexOf(t.value);
      }), F = t.compact(F);
    }
    function d(e) {
      var t = f(), i = new RegExp("\\" + r.triggerChar + D, "gi");
      if (match = i.exec(t), match) {
        var n = i.lastIndex - D.length - 1, o = i.lastIndex, a = t.substr(0, n), l = t.substr(o, t.length), h = (a + e.value).length;
        r.insertSpaceAfterMention && (h += 1), F.push(e), u(), D = "", w();
        var d = a + e.value;
        r.insertSpaceAfterMention && (d += " "), d += l, k.val(d), c(), k.focus(), s.setCaratPosition(k[0], h);
      }
    }
    function f() {
      return e.trim(k.val());
    }
    function p() {
      var t = e(this);
      return d(I[t.attr("data-uid")]), !1;
    }
    function m() {
      u();
    }
    function g() {
      w();
    }
    function v() {
      c(), h();
      var e = t.lastIndexOf(z, r.triggerChar);
      e > -1 && (D = z.slice(e + 1).join(""), D = s.rtrim(D), t.defer(t.bind(S, this, D)));
    }
    function y(e) {
      if (e.keyCode !== i.BACKSPACE) {
        var t = String.fromCharCode(e.which || e.keyCode);
        z.push(t);
      }
    }
    function b(n) {
      if (n.keyCode == i.LEFT || n.keyCode == i.RIGHT || n.keyCode == i.HOME || n.keyCode == i.END) return t.defer(u), 
      void (navigator.userAgent.indexOf("MSIE 9") > -1 && t.defer(c));
      if (n.keyCode == i.BACKSPACE) return void (z = z.slice(0, -1 + z.length));
      if (!j.is(":visible")) return !0;
      switch (n.keyCode) {
       case i.UP:
       case i.DOWN:
        var s = null;
        return s = n.keyCode == i.DOWN ? A && A.length ? A.next() :j.find("li").first() :e(A).prev(), 
        s.length && x(s), !1;

       case i.RETURN:
       case i.TAB:
        return !A || !A.length || (A.trigger("mousedown"), !1);
      }
      return !0;
    }
    function w() {
      A = null, j.empty().hide();
    }
    function x(e) {
      e.addClass(r.classes.autoCompleteItemActive), e.siblings().removeClass(r.classes.autoCompleteItemActive), 
      A = e;
    }
    function _(i, n) {
      j.show();
      var o = t.pluck(F, "value");
      if (n = t.reject(n, function(e) {
        return t.include(o, e.name);
      }), !n.length) return void w();
      j.empty();
      var a = e("<ul>").appendTo(j).hide();
      t.each(n, function(n, o) {
        var l = t.uniqueId("mention_");
        I[l] = t.extend({}, n, {
          value:n.name
        });
        var c = e(r.templates.autocompleteListItem({
          id:s.htmlEncode(n.id),
          display:s.htmlEncode(n.name),
          type:s.htmlEncode(n.type),
          username:s.highlightTerm(s.htmlEncode(n.username), i),
          content:s.highlightTerm(s.htmlEncode(n.name), i)
        })).attr("data-uid", l);
        if (0 === o && x(c), r.showAvatars) {
          var u;
          u = e(n.avatar ? r.templates.autocompleteListItemAvatar({
            avatar:n.avatar,
            type:n.type
          }) :r.templates.autocompleteListItemIcon({
            icon:n.icon
          })), u.prependTo(c.find("a"));
        }
        c = c.appendTo(a);
      }), j.show(), a.show();
    }
    function S(e) {
      e && e.length && e.length >= r.minChars ? r.onDataRequest.call(this, "search", e, function(t) {
        _(e, t);
      }) :w();
    }
    function C() {
      k.val(""), F = [], c();
    }
    var T, k, M, j, P, E, A, D, F = [], I = {}, z = [];
    return r = e.extend(!0, {}, n, r), {
      init:function(e) {
        T = e, o(), a(), l(), C(), r.prefillMention && d(r.prefillMention);
      },
      val:function(e) {
        if (t.isFunction(e)) {
          var i = F.length ? k.data("messageText") :f();
          e.call(this, i);
        }
      },
      reset:function() {
        C();
      },
      getMentions:function(e) {
        t.isFunction(e) && e.call(this, F);
      },
      setMentions:function(e, i) {
        k.val(e), insertSpace = r.insertSpaceAfterMention, r.insertSpaceAfterMention = !1, 
        t.each(i, function(e) {
          e.value = e.name, D = e.value, d(e);
        }), r.insertSpaceAfterMention = insertSpace;
      }
    };
  };
  e.fn.mentionsInput = function(i, n) {
    var s = arguments;
    return "object" != typeof i && i || (n = i), this.each(function() {
      var o = e.data(this, "mentionsInput") || e.data(this, "mentionsInput", new r(n));
      return t.isFunction(o[i]) ? o[i].apply(this, Array.prototype.slice.call(s, 1)) :"object" != typeof i && i ? void e.error("Method " + i + " does not exist") :o.init.call(this, this);
    });
  };
}(jQuery, _), function() {
  var e = {}, t = null, i = null, n = null, s = null, r = {}, o = Math.ceil(window.devicePixelRatio) || 1, a = 16 * o, l = {
    width:7,
    height:9,
    font:10 * o + "px arial",
    color:"#ffffff",
    background:"#F03D25",
    fallback:!0,
    crossOrigin:!0,
    abbreviate:!0
  }, c = function() {
    var e = navigator.userAgent.toLowerCase();
    return function(t) {
      return -1 !== e.indexOf(t);
    };
  }(), u = {
    ie:c("trident"),
    chrome:c("chrome"),
    webkit:c("chrome") || c("safari"),
    safari:c("safari") && !c("chrome"),
    mozilla:c("mozilla") && !c("chrome") && !c("safari")
  }, h = function() {
    for (var e = document.getElementsByTagName("link"), t = 0, i = e.length; t < i; t++) if ((e[t].getAttribute("rel") || "").match(/\bicon\b/i)) return e[t];
    return !1;
  }, d = function() {
    for (var e = document.getElementsByTagName("link"), t = 0, i = e.length; t < i; t++) {
      "undefined" != typeof e[t] && (e[t].getAttribute("rel") || "").match(/\bicon\b/i) && e[t].parentNode.removeChild(e[t]);
    }
  }, f = function() {
    if (!i || !t) {
      var e = h();
      t = e ? e.getAttribute("href") :"/favicon.ico", i || (i = t);
    }
    return t;
  }, p = function() {
    return s || (s = document.createElement("canvas"), s.width = a, s.height = a), s;
  }, m = function(e) {
    if (e) {
      d();
      var t = document.createElement("link");
      t.type = "image/x-icon", t.rel = "icon", t.href = e, document.getElementsByTagName("head")[0].appendChild(t);
    }
  }, g = function(e, t) {
    if (!p().getContext || u.ie || u.safari || "force" === r.fallback) return v(e);
    var i = p().getContext("2d"), t = t || "#000000", s = f();
    n = document.createElement("img"), n.onload = function() {
      i.clearRect(0, 0, a, a), i.drawImage(n, 0, 0, n.width, n.height, 0, 0, a, a), (e + "").length > 0 && y(i, e, t), 
      b();
    }, !s.match(/^data/) && r.crossOrigin && (n.crossOrigin = "anonymous"), n.src = s;
  }, v = function(e) {
    if (r.fallback) {
      var t = document.title;
      "(" === t[0] && (t = t.slice(t.indexOf(" "))), (e + "").length > 0 ? document.title = "(" + e + ") " + t :document.title = t;
    }
  }, y = function(e, t) {
    "number" == typeof t && t > 99 && r.abbreviate && (t = w(t));
    var i = (t + "").length - 1, n = r.width * o + 6 * o * i, s = r.height * o, l = a - s, c = a - n - o, h = 16 * o, d = 16 * o, f = 2 * o;
    e.font = (u.webkit ? "bold " :"") + r.font, e.fillStyle = r.background, e.strokeStyle = r.background, 
    e.lineWidth = o, e.beginPath(), e.moveTo(c + f, l), e.quadraticCurveTo(c, l, c, l + f), 
    e.lineTo(c, h - f), e.quadraticCurveTo(c, h, c + f, h), e.lineTo(d - f, h), e.quadraticCurveTo(d, h, d, h - f), 
    e.lineTo(d, l + f), e.quadraticCurveTo(d, l, d - f, l), e.closePath(), e.fill(), 
    e.beginPath(), e.strokeStyle = "rgba(0,0,0,0.3)", e.moveTo(c + f / 2, h), e.lineTo(d - f / 2, h), 
    e.stroke(), e.fillStyle = r.color, e.textAlign = "right", e.textBaseline = "top", 
    e.fillText(t, 2 === o ? 29 :15, u.mozilla ? 7 * o :6 * o);
  }, b = function() {
    p().getContext && m(p().toDataURL());
  }, w = function(e) {
    for (var t = [ [ "G", 1e9 ], [ "M", 1e6 ], [ "k", 1e3 ] ], i = 0; i < t.length; ++i) if (e >= t[i][1]) {
      e = x(e / t[i][1]) + t[i][0];
      break;
    }
    return e;
  }, x = function(e, t) {
    return new Number(e).toFixed(t);
  };
  e.setOptions = function(e) {
    r = {}, e.colour && (e.color = e.colour);
    for (var t in l) r[t] = e.hasOwnProperty(t) ? e[t] :l[t];
    return this;
  }, e.setImage = function(e) {
    return t = e, b(), this;
  }, e.setBubble = function(e, t) {
    return e = e || "", g(e, t), this;
  }, e.reset = function() {
    t = i, m(i);
  }, e.setOptions(l), "function" == typeof define && define.amd ? define(e) :"undefined" != typeof module ? module.exports = e :window.Tinycon = e;
}(), function() {
  "use strict";
  var e = this, t = e.Chart, i = function(e) {
    this.canvas = e.canvas, this.ctx = e;
    var t = function(e, t) {
      return e["offset" + t] ? e["offset" + t] :document.defaultView.getComputedStyle(e).getPropertyValue(t);
    }, i = this.width = t(e.canvas, "Width"), s = this.height = t(e.canvas, "Height");
    e.canvas.width = i, e.canvas.height = s;
    var i = this.width = e.canvas.width, s = this.height = e.canvas.height;
    return this.aspectRatio = this.width / this.height, n.retinaScale(this), this;
  };
  i.defaults = {
    global:{
      animation:!0,
      animationSteps:60,
      animationEasing:"easeOutQuart",
      showScale:!0,
      scaleOverride:!1,
      scaleSteps:null,
      scaleStepWidth:null,
      scaleStartValue:null,
      scaleLineColor:"rgba(0,0,0,.1)",
      scaleLineWidth:1,
      scaleShowLabels:!0,
      scaleLabel:"<%=value%>",
      scaleIntegersOnly:!0,
      scaleBeginAtZero:!1,
      scaleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      scaleFontSize:12,
      scaleFontStyle:"normal",
      scaleFontColor:"#666",
      responsive:!1,
      maintainAspectRatio:!0,
      showTooltips:!0,
      customTooltips:!1,
      tooltipEvents:[ "mousemove", "touchstart", "touchmove", "mouseout" ],
      tooltipFillColor:"rgba(0,0,0,0.8)",
      tooltipFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      tooltipFontSize:14,
      tooltipFontStyle:"normal",
      tooltipFontColor:"#fff",
      tooltipTitleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      tooltipTitleFontSize:14,
      tooltipTitleFontStyle:"bold",
      tooltipTitleFontColor:"#fff",
      tooltipYPadding:6,
      tooltipXPadding:6,
      tooltipCaretSize:8,
      tooltipCornerRadius:6,
      tooltipXOffset:10,
      tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%= value %>",
      multiTooltipTemplate:"<%= value %>",
      multiTooltipKeyBackground:"#fff",
      onAnimationProgress:function() {},
      onAnimationComplete:function() {}
    }
  }, i.types = {};
  var n = i.helpers = {}, s = n.each = function(e, t, i) {
    var n = Array.prototype.slice.call(arguments, 3);
    if (e) if (e.length === +e.length) {
      var s;
      for (s = 0; s < e.length; s++) t.apply(i, [ e[s], s ].concat(n));
    } else for (var r in e) t.apply(i, [ e[r], r ].concat(n));
  }, r = n.clone = function(e) {
    var t = {};
    return s(e, function(i, n) {
      e.hasOwnProperty(n) && (t[n] = i);
    }), t;
  }, o = n.extend = function(e) {
    return s(Array.prototype.slice.call(arguments, 1), function(t) {
      s(t, function(i, n) {
        t.hasOwnProperty(n) && (e[n] = i);
      });
    }), e;
  }, a = n.merge = function() {
    var e = Array.prototype.slice.call(arguments, 0);
    return e.unshift({}), o.apply(null, e);
  }, l = n.indexOf = function(e, t) {
    if (Array.prototype.indexOf) return e.indexOf(t);
    for (var i = 0; i < e.length; i++) if (e[i] === t) return i;
    return -1;
  }, c = (n.where = function(e, t) {
    var i = [];
    return n.each(e, function(e) {
      t(e) && i.push(e);
    }), i;
  }, n.findNextWhere = function(e, t, i) {
    i || (i = -1);
    for (var n = i + 1; n < e.length; n++) {
      var s = e[n];
      if (t(s)) return s;
    }
  }, n.findPreviousWhere = function(e, t, i) {
    i || (i = e.length);
    for (var n = i - 1; n >= 0; n--) {
      var s = e[n];
      if (t(s)) return s;
    }
  }, n.inherits = function(e) {
    var t = this, i = e && e.hasOwnProperty("constructor") ? e.constructor :function() {
      return t.apply(this, arguments);
    }, n = function() {
      this.constructor = i;
    };
    return n.prototype = t.prototype, i.prototype = new n(), i.extend = c, e && o(i.prototype, e), 
    i.__super__ = t.prototype, i;
  }), u = n.noop = function() {}, h = n.uid = function() {
    var e = 0;
    return function() {
      return "chart-" + e++;
    };
  }(), d = n.warn = function(e) {
    window.console && "function" == typeof window.console.warn && console.warn(e);
  }, f = n.amd = "function" == typeof define && define.amd, p = n.isNumber = function(e) {
    return !isNaN(parseFloat(e)) && isFinite(e);
  }, m = n.max = function(e) {
    return Math.max.apply(Math, e);
  }, g = n.min = function(e) {
    return Math.min.apply(Math, e);
  }, v = (n.cap = function(e, t, i) {
    if (p(t)) {
      if (e > t) return t;
    } else if (p(i) && e < i) return i;
    return e;
  }, n.getDecimalPlaces = function(e) {
    return e % 1 != 0 && p(e) ? e.toString().split(".")[1].length :0;
  }), y = n.radians = function(e) {
    return e * (Math.PI / 180);
  }, b = (n.getAngleFromPoint = function(e, t) {
    var i = t.x - e.x, n = t.y - e.y, s = Math.sqrt(i * i + n * n), r = 2 * Math.PI + Math.atan2(n, i);
    return i < 0 && n < 0 && (r += 2 * Math.PI), {
      angle:r,
      distance:s
    };
  }, n.aliasPixel = function(e) {
    return e % 2 == 0 ? 0 :.5;
  }), w = (n.splineCurve = function(e, t, i, n) {
    var s = Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)), r = Math.sqrt(Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2)), o = n * s / (s + r), a = n * r / (s + r);
    return {
      inner:{
        x:t.x - o * (i.x - e.x),
        y:t.y - o * (i.y - e.y)
      },
      outer:{
        x:t.x + a * (i.x - e.x),
        y:t.y + a * (i.y - e.y)
      }
    };
  }, n.calculateOrderOfMagnitude = function(e) {
    return Math.floor(Math.log(e) / Math.LN10);
  }), x = (n.calculateScaleRange = function(e, t, i, n, s) {
    var r = 2, o = Math.floor(t / (1.5 * i)), a = r >= o, l = m(e), c = g(e);
    l === c && (l += .5, c >= .5 && !n ? c -= .5 :l += .5);
    for (var u = Math.abs(l - c), h = w(u), d = Math.ceil(l / (1 * Math.pow(10, h))) * Math.pow(10, h), f = n ? 0 :Math.floor(c / (1 * Math.pow(10, h))) * Math.pow(10, h), p = d - f, v = Math.pow(10, h), y = Math.round(p / v); (y > o || 2 * y < o) && !a; ) if (y > o) v *= 2, 
    (y = Math.round(p / v)) % 1 != 0 && (a = !0); else if (s && h >= 0) {
      if (v / 2 % 1 != 0) break;
      v /= 2, y = Math.round(p / v);
    } else v /= 2, y = Math.round(p / v);
    return a && (y = r, v = p / y), {
      steps:y,
      stepValue:v,
      min:f,
      max:f + y * v
    };
  }, n.template = function(e, t) {
    function i(e, t) {
      var i = /\W/.test(e) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") :n[e] = n[e];
      return t ? i(t) :i;
    }
    if (e instanceof Function) return e(t);
    var n = {};
    return i(e, t);
  }), _ = (n.generateLabels = function(e, t, i, n) {
    var r = new Array(t);
    return labelTemplateString && s(r, function(t, s) {
      r[s] = x(e, {
        value:i + n * (s + 1)
      });
    }), r;
  }, n.easingEffects = {
    linear:function(e) {
      return e;
    },
    easeInQuad:function(e) {
      return e * e;
    },
    easeOutQuad:function(e) {
      return -1 * e * (e - 2);
    },
    easeInOutQuad:function(e) {
      return (e /= .5) < 1 ? .5 * e * e :-.5 * (--e * (e - 2) - 1);
    },
    easeInCubic:function(e) {
      return e * e * e;
    },
    easeOutCubic:function(e) {
      return 1 * ((e = e / 1 - 1) * e * e + 1);
    },
    easeInOutCubic:function(e) {
      return (e /= .5) < 1 ? .5 * e * e * e :.5 * ((e -= 2) * e * e + 2);
    },
    easeInQuart:function(e) {
      return e * e * e * e;
    },
    easeOutQuart:function(e) {
      return -1 * ((e = e / 1 - 1) * e * e * e - 1);
    },
    easeInOutQuart:function(e) {
      return (e /= .5) < 1 ? .5 * e * e * e * e :-.5 * ((e -= 2) * e * e * e - 2);
    },
    easeInQuint:function(e) {
      return 1 * (e /= 1) * e * e * e * e;
    },
    easeOutQuint:function(e) {
      return 1 * ((e = e / 1 - 1) * e * e * e * e + 1);
    },
    easeInOutQuint:function(e) {
      return (e /= .5) < 1 ? .5 * e * e * e * e * e :.5 * ((e -= 2) * e * e * e * e + 2);
    },
    easeInSine:function(e) {
      return -1 * Math.cos(e / 1 * (Math.PI / 2)) + 1;
    },
    easeOutSine:function(e) {
      return 1 * Math.sin(e / 1 * (Math.PI / 2));
    },
    easeInOutSine:function(e) {
      return -.5 * (Math.cos(Math.PI * e / 1) - 1);
    },
    easeInExpo:function(e) {
      return 0 === e ? 1 :1 * Math.pow(2, 10 * (e / 1 - 1));
    },
    easeOutExpo:function(e) {
      return 1 === e ? 1 :1 * (1 - Math.pow(2, -10 * e / 1));
    },
    easeInOutExpo:function(e) {
      return 0 === e ? 0 :1 === e ? 1 :(e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) :.5 * (2 - Math.pow(2, -10 * --e));
    },
    easeInCirc:function(e) {
      return e >= 1 ? e :-1 * (Math.sqrt(1 - (e /= 1) * e) - 1);
    },
    easeOutCirc:function(e) {
      return 1 * Math.sqrt(1 - (e = e / 1 - 1) * e);
    },
    easeInOutCirc:function(e) {
      return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) :.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    },
    easeInElastic:function(e) {
      var t = 1.70158, i = 0, n = 1;
      return 0 === e ? 0 :1 == (e /= 1) ? 1 :(i || (i = .3), n < Math.abs(1) ? (n = 1, 
      t = i / 4) :t = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (e -= 1)) * Math.sin((1 * e - t) * (2 * Math.PI) / i));
    },
    easeOutElastic:function(e) {
      var t = 1.70158, i = 0, n = 1;
      return 0 === e ? 0 :1 == (e /= 1) ? 1 :(i || (i = .3), n < Math.abs(1) ? (n = 1, 
      t = i / 4) :t = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((1 * e - t) * (2 * Math.PI) / i) + 1);
    },
    easeInOutElastic:function(e) {
      var t = 1.70158, i = 0, n = 1;
      return 0 === e ? 0 :2 == (e /= .5) ? 1 :(i || (i = .3 * 1.5 * 1), n < Math.abs(1) ? (n = 1, 
      t = i / 4) :t = i / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? n * Math.pow(2, 10 * (e -= 1)) * Math.sin((1 * e - t) * (2 * Math.PI) / i) * -.5 :n * Math.pow(2, -10 * (e -= 1)) * Math.sin((1 * e - t) * (2 * Math.PI) / i) * .5 + 1);
    },
    easeInBack:function(e) {
      var t = 1.70158;
      return 1 * (e /= 1) * e * ((t + 1) * e - t);
    },
    easeOutBack:function(e) {
      var t = 1.70158;
      return 1 * ((e = e / 1 - 1) * e * ((t + 1) * e + t) + 1);
    },
    easeInOutBack:function(e) {
      var t = 1.70158;
      return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 :.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
    },
    easeInBounce:function(e) {
      return 1 - _.easeOutBounce(1 - e);
    },
    easeOutBounce:function(e) {
      return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e * 1 :e < 2 / 2.75 ? 1 * (7.5625 * (e -= 1.5 / 2.75) * e + .75) :e < 2.5 / 2.75 ? 1 * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) :1 * (7.5625 * (e -= 2.625 / 2.75) * e + .984375);
    },
    easeInOutBounce:function(e) {
      return e < .5 ? .5 * _.easeInBounce(2 * e) :.5 * _.easeOutBounce(2 * e - 1) + .5;
    }
  }), S = n.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
      return window.setTimeout(e, 1e3 / 60);
    };
  }(), C = n.cancelAnimFrame = function() {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(e) {
      return window.clearTimeout(e, 1e3 / 60);
    };
  }(), T = (n.animationLoop = function(e, t, i, n, s, r) {
    var o = 0, a = _[i] || _.linear, l = function() {
      o++;
      var i = o / t, c = a(i);
      e.call(r, c, i, o), n.call(r, c, i), o < t ? r.animationFrame = S(l) :s.apply(r);
    };
    S(l);
  }, n.getRelativePosition = function(e) {
    var t, i, n = e.originalEvent || e, s = e.currentTarget || e.srcElement, r = s.getBoundingClientRect();
    return n.touches ? (t = n.touches[0].clientX - r.left, i = n.touches[0].clientY - r.top) :(t = n.clientX - r.left, 
    i = n.clientY - r.top), {
      x:t,
      y:i
    };
  }, n.addEvent = function(e, t, i) {
    e.addEventListener ? e.addEventListener(t, i) :e.attachEvent ? e.attachEvent("on" + t, i) :e["on" + t] = i;
  }), k = n.removeEvent = function(e, t, i) {
    e.removeEventListener ? e.removeEventListener(t, i, !1) :e.detachEvent ? e.detachEvent("on" + t, i) :e["on" + t] = u;
  }, M = (n.bindEvents = function(e, t, i) {
    e.events || (e.events = {}), s(t, function(t) {
      e.events[t] = function() {
        i.apply(e, arguments);
      }, T(e.chart.canvas, t, e.events[t]);
    });
  }, n.unbindEvents = function(e, t) {
    s(t, function(t, i) {
      k(e.chart.canvas, i, t);
    });
  }), j = n.getMaximumWidth = function(e) {
    return e.parentNode.clientWidth;
  }, P = n.getMaximumHeight = function(e) {
    return e.parentNode.clientHeight;
  }, E = (n.getMaximumSize = n.getMaximumWidth, n.retinaScale = function(e) {
    var t = e.ctx, i = e.canvas.width, n = e.canvas.height;
    window.devicePixelRatio && (t.canvas.style.width = i + "px", t.canvas.style.height = n + "px", 
    t.canvas.height = n * window.devicePixelRatio, t.canvas.width = i * window.devicePixelRatio, 
    t.scale(window.devicePixelRatio, window.devicePixelRatio));
  }), A = n.clear = function(e) {
    e.ctx.clearRect(0, 0, e.width, e.height);
  }, D = n.fontString = function(e, t, i) {
    return t + " " + e + "px " + i;
  }, F = n.longestText = function(e, t, i) {
    e.font = t;
    var n = 0;
    return s(i, function(t) {
      var i = e.measureText(t).width;
      n = i > n ? i :n;
    }), n;
  }, I = n.drawRoundedRectangle = function(e, t, i, n, s, r) {
    e.beginPath(), e.moveTo(t + r, i), e.lineTo(t + n - r, i), e.quadraticCurveTo(t + n, i, t + n, i + r), 
    e.lineTo(t + n, i + s - r), e.quadraticCurveTo(t + n, i + s, t + n - r, i + s), 
    e.lineTo(t + r, i + s), e.quadraticCurveTo(t, i + s, t, i + s - r), e.lineTo(t, i + r), 
    e.quadraticCurveTo(t, i, t + r, i), e.closePath();
  };
  i.instances = {}, i.Type = function(e, t, n) {
    this.options = t, this.chart = n, this.id = h(), i.instances[this.id] = this, t.responsive && this.resize(), 
    this.initialize.call(this, e);
  }, o(i.Type.prototype, {
    initialize:function() {
      return this;
    },
    clear:function() {
      return A(this.chart), this;
    },
    stop:function() {
      return C(this.animationFrame), this;
    },
    resize:function(e) {
      this.stop();
      var t = this.chart.canvas, i = j(this.chart.canvas), n = this.options.maintainAspectRatio ? i / this.chart.aspectRatio :P(this.chart.canvas);
      return t.width = this.chart.width = i, t.height = this.chart.height = n, E(this.chart), 
      "function" == typeof e && e.apply(this, Array.prototype.slice.call(arguments, 1)), 
      this;
    },
    reflow:u,
    render:function(e) {
      return e && this.reflow(), this.options.animation && !e ? n.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) :(this.draw(), 
      this.options.onAnimationComplete.call(this)), this;
    },
    generateLegend:function() {
      return x(this.options.legendTemplate, this);
    },
    destroy:function() {
      this.clear(), M(this, this.events);
      var e = this.chart.canvas;
      e.width = this.chart.width, e.height = this.chart.height, e.style.removeProperty ? (e.style.removeProperty("width"), 
      e.style.removeProperty("height")) :(e.style.removeAttribute("width"), e.style.removeAttribute("height")), 
      delete i.instances[this.id];
    },
    showTooltip:function(e, t) {
      if ("undefined" == typeof this.activeElements && (this.activeElements = []), function(e) {
        var t = !1;
        return e.length !== this.activeElements.length ? t = !0 :(s(e, function(e, i) {
          e !== this.activeElements[i] && (t = !0);
        }, this), t);
      }.call(this, e) || t) {
        if (this.activeElements = e, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), 
        e.length > 0) if (this.datasets && this.datasets.length > 1) {
          for (var r, o, a = this.datasets.length - 1; a >= 0 && (r = this.datasets[a].points || this.datasets[a].bars || this.datasets[a].segments, 
          -1 === (o = l(r, e[0]))); a--) ;
          var c = [], u = [], h = function() {
            var e, t, i, s, r, a = [], l = [], h = [];
            return n.each(this.datasets, function(t) {
              e = t.points || t.bars || t.segments, e[o] && e[o].hasValue() && a.push(e[o]);
            }), n.each(a, function(e) {
              l.push(e.x), h.push(e.y), c.push(n.template(this.options.multiTooltipTemplate, e)), 
              u.push({
                fill:e._saved.fillColor || e.fillColor,
                stroke:e._saved.strokeColor || e.strokeColor
              });
            }, this), r = g(h), i = m(h), s = g(l), t = m(l), {
              x:s > this.chart.width / 2 ? s :t,
              y:(r + i) / 2
            };
          }.call(this, o);
          new i.MultiTooltip({
            x:h.x,
            y:h.y,
            xPadding:this.options.tooltipXPadding,
            yPadding:this.options.tooltipYPadding,
            xOffset:this.options.tooltipXOffset,
            fillColor:this.options.tooltipFillColor,
            textColor:this.options.tooltipFontColor,
            fontFamily:this.options.tooltipFontFamily,
            fontStyle:this.options.tooltipFontStyle,
            fontSize:this.options.tooltipFontSize,
            titleTextColor:this.options.tooltipTitleFontColor,
            titleFontFamily:this.options.tooltipTitleFontFamily,
            titleFontStyle:this.options.tooltipTitleFontStyle,
            titleFontSize:this.options.tooltipTitleFontSize,
            cornerRadius:this.options.tooltipCornerRadius,
            labels:c,
            legendColors:u,
            legendColorBackground:this.options.multiTooltipKeyBackground,
            title:e[0].label,
            chart:this.chart,
            ctx:this.chart.ctx,
            custom:this.options.customTooltips
          }).draw();
        } else s(e, function(e) {
          var t = e.tooltipPosition();
          new i.Tooltip({
            x:Math.round(t.x),
            y:Math.round(t.y),
            xPadding:this.options.tooltipXPadding,
            yPadding:this.options.tooltipYPadding,
            fillColor:this.options.tooltipFillColor,
            textColor:this.options.tooltipFontColor,
            fontFamily:this.options.tooltipFontFamily,
            fontStyle:this.options.tooltipFontStyle,
            fontSize:this.options.tooltipFontSize,
            caretHeight:this.options.tooltipCaretSize,
            cornerRadius:this.options.tooltipCornerRadius,
            text:x(this.options.tooltipTemplate, e),
            chart:this.chart,
            custom:this.options.customTooltips
          }).draw();
        }, this);
        return this;
      }
    },
    toBase64Image:function() {
      return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
    }
  }), i.Type.extend = function(e) {
    var t = this, n = function() {
      return t.apply(this, arguments);
    };
    if (n.prototype = r(t.prototype), o(n.prototype, e), n.extend = i.Type.extend, e.name || t.prototype.name) {
      var s = e.name || t.prototype.name, l = i.defaults[t.prototype.name] ? r(i.defaults[t.prototype.name]) :{};
      i.defaults[s] = o(l, e.defaults), i.types[s] = n, i.prototype[s] = function(e, t) {
        var r = a(i.defaults.global, i.defaults[s], t || {});
        return new n(e, r, this);
      };
    } else d("Name not provided for this chart, so it hasn't been registered");
    return t;
  }, i.Element = function(e) {
    o(this, e), this.initialize.apply(this, arguments), this.save();
  }, o(i.Element.prototype, {
    initialize:function() {},
    restore:function(e) {
      return e ? s(e, function(e) {
        this[e] = this._saved[e];
      }, this) :o(this, this._saved), this;
    },
    save:function() {
      return this._saved = r(this), delete this._saved._saved, this;
    },
    update:function(e) {
      return s(e, function(e, t) {
        this._saved[t] = this[t], this[t] = e;
      }, this), this;
    },
    transition:function(e, t) {
      return s(e, function(e, i) {
        this[i] = (e - this._saved[i]) * t + this._saved[i];
      }, this), this;
    },
    tooltipPosition:function() {
      return {
        x:this.x,
        y:this.y
      };
    },
    hasValue:function() {
      return p(this.value);
    }
  }), i.Element.extend = c, i.Point = i.Element.extend({
    display:!0,
    inRange:function(e, t) {
      var i = this.hitDetectionRadius + this.radius;
      return Math.pow(e - this.x, 2) + Math.pow(t - this.y, 2) < Math.pow(i, 2);
    },
    draw:function() {
      if (this.display) {
        var e = this.ctx;
        e.beginPath(), e.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), e.closePath(), 
        e.strokeStyle = this.strokeColor, e.lineWidth = this.strokeWidth, e.fillStyle = this.fillColor, 
        e.fill(), e.stroke();
      }
    }
  }), i.Arc = i.Element.extend({
    inRange:function(e, t) {
      var i = n.getAngleFromPoint(this, {
        x:e,
        y:t
      }), s = i.angle >= this.startAngle && i.angle <= this.endAngle, r = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
      return s && r;
    },
    tooltipPosition:function() {
      var e = this.startAngle + (this.endAngle - this.startAngle) / 2, t = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
      return {
        x:this.x + Math.cos(e) * t,
        y:this.y + Math.sin(e) * t
      };
    },
    draw:function() {
      var e = this.ctx;
      e.beginPath(), e.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), 
      e.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), e.closePath(), 
      e.strokeStyle = this.strokeColor, e.lineWidth = this.strokeWidth, e.fillStyle = this.fillColor, 
      e.fill(), e.lineJoin = "bevel", this.showStroke && e.stroke();
    }
  }), i.Rectangle = i.Element.extend({
    draw:function() {
      var e = this.ctx, t = this.width / 2, i = this.x - t, n = this.x + t, s = this.base - (this.base - this.y), r = this.strokeWidth / 2;
      this.showStroke && (i += r, n -= r, s += r), e.beginPath(), e.fillStyle = this.fillColor, 
      e.strokeStyle = this.strokeColor, e.lineWidth = this.strokeWidth, e.moveTo(i, this.base), 
      e.lineTo(i, s), e.lineTo(n, s), e.lineTo(n, this.base), e.fill(), this.showStroke && e.stroke();
    },
    height:function() {
      return this.base - this.y;
    },
    inRange:function(e, t) {
      return e >= this.x - this.width / 2 && e <= this.x + this.width / 2 && t >= this.y && t <= this.base;
    }
  }), i.Tooltip = i.Element.extend({
    draw:function() {
      var e = this.chart.ctx;
      e.font = D(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", 
      this.yAlign = "above";
      var t = this.caretPadding = 2, i = e.measureText(this.text).width + 2 * this.xPadding, n = this.fontSize + 2 * this.yPadding, s = n + this.caretHeight + t;
      this.x + i / 2 > this.chart.width ? this.xAlign = "left" :this.x - i / 2 < 0 && (this.xAlign = "right"), 
      this.y - s < 0 && (this.yAlign = "below");
      var r = this.x - i / 2, o = this.y - s;
      if (e.fillStyle = this.fillColor, this.custom) this.custom(this); else {
        switch (this.yAlign) {
         case "above":
          e.beginPath(), e.moveTo(this.x, this.y - t), e.lineTo(this.x + this.caretHeight, this.y - (t + this.caretHeight)), 
          e.lineTo(this.x - this.caretHeight, this.y - (t + this.caretHeight)), e.closePath(), 
          e.fill();
          break;

         case "below":
          o = this.y + t + this.caretHeight, e.beginPath(), e.moveTo(this.x, this.y + t), 
          e.lineTo(this.x + this.caretHeight, this.y + t + this.caretHeight), e.lineTo(this.x - this.caretHeight, this.y + t + this.caretHeight), 
          e.closePath(), e.fill();
        }
        switch (this.xAlign) {
         case "left":
          r = this.x - i + (this.cornerRadius + this.caretHeight);
          break;

         case "right":
          r = this.x - (this.cornerRadius + this.caretHeight);
        }
        I(e, r, o, i, n, this.cornerRadius), e.fill(), e.fillStyle = this.textColor, e.textAlign = "center", 
        e.textBaseline = "middle", e.fillText(this.text, r + i / 2, o + n / 2);
      }
    }
  }), i.MultiTooltip = i.Element.extend({
    initialize:function() {
      this.font = D(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = D(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), 
      this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, 
      this.ctx.font = this.titleFont;
      var e = this.ctx.measureText(this.title).width, t = F(this.ctx, this.font, this.labels) + this.fontSize + 3, i = m([ t, e ]);
      this.width = i + 2 * this.xPadding;
      var n = this.height / 2;
      this.y - n < 0 ? this.y = n :this.y + n > this.chart.height && (this.y = this.chart.height - n), 
      this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width :this.x += this.xOffset;
    },
    getLineHeight:function(e) {
      var t = this.y - this.height / 2 + this.yPadding, i = e - 1;
      return 0 === e ? t + this.titleFontSize / 2 :t + (1.5 * this.fontSize * i + this.fontSize / 2) + 1.5 * this.titleFontSize;
    },
    draw:function() {
      if (this.custom) this.custom(this); else {
        I(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
        var e = this.ctx;
        e.fillStyle = this.fillColor, e.fill(), e.closePath(), e.textAlign = "left", e.textBaseline = "middle", 
        e.fillStyle = this.titleTextColor, e.font = this.titleFont, e.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), 
        e.font = this.font, n.each(this.labels, function(t, i) {
          e.fillStyle = this.textColor, e.fillText(t, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)), 
          e.fillStyle = this.legendColorBackground, e.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize), 
          e.fillStyle = this.legendColors[i].fill, e.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize);
        }, this);
      }
    }
  }), i.Scale = i.Element.extend({
    initialize:function() {
      this.fit();
    },
    buildYLabels:function() {
      this.yLabels = [];
      for (var e = v(this.stepValue), t = 0; t <= this.steps; t++) this.yLabels.push(x(this.templateString, {
        value:(this.min + t * this.stepValue).toFixed(e)
      }));
      this.yLabelWidth = this.display && this.showLabels ? F(this.ctx, this.font, this.yLabels) :0;
    },
    addXLabel:function(e) {
      this.xLabels.push(e), this.valuesCount++, this.fit();
    },
    removeXLabel:function() {
      this.xLabels.shift(), this.valuesCount--, this.fit();
    },
    fit:function() {
      this.startPoint = this.display ? this.fontSize :0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 :this.height, 
      this.startPoint += this.padding, this.endPoint -= this.padding;
      var e, t = this.endPoint - this.startPoint;
      for (this.calculateYRange(t), this.buildYLabels(), this.calculateXLabelRotation(); t > this.endPoint - this.startPoint; ) t = this.endPoint - this.startPoint, 
      e = this.yLabelWidth, this.calculateYRange(t), this.buildYLabels(), e < this.yLabelWidth && this.calculateXLabelRotation();
    },
    calculateXLabelRotation:function() {
      this.ctx.font = this.font;
      var e, t = this.ctx.measureText(this.xLabels[0]).width, i = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
      if (this.xScalePaddingRight = i / 2 + 3, this.xScalePaddingLeft = t / 2 > this.yLabelWidth + 10 ? t / 2 :this.yLabelWidth + 10, 
      this.xLabelRotation = 0, this.display) {
        var n, s = F(this.ctx, this.font, this.xLabels);
        this.xLabelWidth = s;
        for (var r = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > r && 0 === this.xLabelRotation || this.xLabelWidth > r && this.xLabelRotation <= 90 && this.xLabelRotation > 0; ) n = Math.cos(y(this.xLabelRotation)), 
        e = n * t, n * i, e + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = e + this.fontSize / 2), 
        this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = n * s;
        this.xLabelRotation > 0 && (this.endPoint -= Math.sin(y(this.xLabelRotation)) * s + 3);
      } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding;
    },
    calculateYRange:u,
    drawingArea:function() {
      return this.startPoint - this.endPoint;
    },
    calculateY:function(e) {
      var t = this.drawingArea() / (this.min - this.max);
      return this.endPoint - t * (e - this.min);
    },
    calculateX:function(e) {
      var t = (this.xLabelRotation, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)), i = t / Math.max(this.valuesCount - (this.offsetGridLines ? 0 :1), 1), n = i * e + this.xScalePaddingLeft;
      return this.offsetGridLines && (n += i / 2), Math.round(n);
    },
    update:function(e) {
      n.extend(this, e), this.fit();
    },
    draw:function() {
      var e = this.ctx, t = (this.endPoint - this.startPoint) / this.steps, i = Math.round(this.xScalePaddingLeft);
      this.display && (e.fillStyle = this.textColor, e.font = this.font, s(this.yLabels, function(s, r) {
        var o = this.endPoint - t * r, a = Math.round(o), l = this.showHorizontalLines;
        e.textAlign = "right", e.textBaseline = "middle", this.showLabels && e.fillText(s, i - 10, o), 
        0 !== r || l || (l = !0), l && e.beginPath(), r > 0 ? (e.lineWidth = this.gridLineWidth, 
        e.strokeStyle = this.gridLineColor) :(e.lineWidth = this.lineWidth, e.strokeStyle = this.lineColor), 
        a += n.aliasPixel(e.lineWidth), l && (e.moveTo(i, a), e.lineTo(this.width, a), e.stroke(), 
        e.closePath()), e.lineWidth = this.lineWidth, e.strokeStyle = this.lineColor, e.beginPath(), 
        e.moveTo(i - 5, a), e.lineTo(i, a), e.stroke(), e.closePath();
      }, this), s(this.xLabels, function(t, i) {
        var n = this.calculateX(i) + b(this.lineWidth), s = this.calculateX(i - (this.offsetGridLines ? .5 :0)) + b(this.lineWidth), r = this.xLabelRotation > 0, o = this.showVerticalLines;
        0 !== i || o || (o = !0), o && e.beginPath(), i > 0 ? (e.lineWidth = this.gridLineWidth, 
        e.strokeStyle = this.gridLineColor) :(e.lineWidth = this.lineWidth, e.strokeStyle = this.lineColor), 
        o && (e.moveTo(s, this.endPoint), e.lineTo(s, this.startPoint - 3), e.stroke(), 
        e.closePath()), e.lineWidth = this.lineWidth, e.strokeStyle = this.lineColor, e.beginPath(), 
        e.moveTo(s, this.endPoint), e.lineTo(s, this.endPoint + 5), e.stroke(), e.closePath(), 
        e.save(), e.translate(n, r ? this.endPoint + 12 :this.endPoint + 8), e.rotate(-1 * y(this.xLabelRotation)), 
        e.font = this.font, e.textAlign = r ? "right" :"center", e.textBaseline = r ? "middle" :"top", 
        e.fillText(t, 0, 0), e.restore();
      }, this));
    }
  }), i.RadialScale = i.Element.extend({
    initialize:function() {
      this.size = g([ this.height, this.width ]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) :this.size / 2;
    },
    calculateCenterOffset:function(e) {
      var t = this.drawingArea / (this.max - this.min);
      return (e - this.min) * t;
    },
    update:function() {
      this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) :this.size / 2 :this.setScaleSize(), 
      this.buildYLabels();
    },
    buildYLabels:function() {
      this.yLabels = [];
      for (var e = v(this.stepValue), t = 0; t <= this.steps; t++) this.yLabels.push(x(this.templateString, {
        value:(this.min + t * this.stepValue).toFixed(e)
      }));
    },
    getCircumference:function() {
      return 2 * Math.PI / this.valuesCount;
    },
    setScaleSize:function() {
      var e, t, i, n, s, r, o, a, l, c, u, h, d = g([ this.height / 2 - this.pointLabelFontSize - 5, this.width / 2 ]), f = this.width, m = 0;
      for (this.ctx.font = D(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), 
      t = 0; t < this.valuesCount; t++) e = this.getPointPosition(t, d), i = this.ctx.measureText(x(this.templateString, {
        value:this.labels[t]
      })).width + 5, 0 === t || t === this.valuesCount / 2 ? (n = i / 2, e.x + n > f && (f = e.x + n, 
      s = t), e.x - n < m && (m = e.x - n, o = t)) :t < this.valuesCount / 2 ? e.x + i > f && (f = e.x + i, 
      s = t) :t > this.valuesCount / 2 && e.x - i < m && (m = e.x - i, o = t);
      l = m, c = Math.ceil(f - this.width), r = this.getIndexAngle(s), a = this.getIndexAngle(o), 
      u = c / Math.sin(r + Math.PI / 2), h = l / Math.sin(a + Math.PI / 2), u = p(u) ? u :0, 
      h = p(h) ? h :0, this.drawingArea = d - (h + u) / 2, this.setCenterPoint(h, u);
    },
    setCenterPoint:function(e, t) {
      var i = this.width - t - this.drawingArea, n = e + this.drawingArea;
      this.xCenter = (n + i) / 2, this.yCenter = this.height / 2;
    },
    getIndexAngle:function(e) {
      return e * (2 * Math.PI / this.valuesCount) - Math.PI / 2;
    },
    getPointPosition:function(e, t) {
      var i = this.getIndexAngle(e);
      return {
        x:Math.cos(i) * t + this.xCenter,
        y:Math.sin(i) * t + this.yCenter
      };
    },
    draw:function() {
      if (this.display) {
        var e = this.ctx;
        if (s(this.yLabels, function(t, i) {
          if (i > 0) {
            var n, s = i * (this.drawingArea / this.steps), r = this.yCenter - s;
            if (this.lineWidth > 0) if (e.strokeStyle = this.lineColor, e.lineWidth = this.lineWidth, 
            this.lineArc) e.beginPath(), e.arc(this.xCenter, this.yCenter, s, 0, 2 * Math.PI), 
            e.closePath(), e.stroke(); else {
              e.beginPath();
              for (var o = 0; o < this.valuesCount; o++) n = this.getPointPosition(o, this.calculateCenterOffset(this.min + i * this.stepValue)), 
              0 === o ? e.moveTo(n.x, n.y) :e.lineTo(n.x, n.y);
              e.closePath(), e.stroke();
            }
            if (this.showLabels) {
              if (e.font = D(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                var a = e.measureText(t).width;
                e.fillStyle = this.backdropColor, e.fillRect(this.xCenter - a / 2 - this.backdropPaddingX, r - this.fontSize / 2 - this.backdropPaddingY, a + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY);
              }
              e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = this.fontColor, 
              e.fillText(t, this.xCenter, r);
            }
          }
        }, this), !this.lineArc) {
          e.lineWidth = this.angleLineWidth, e.strokeStyle = this.angleLineColor;
          for (var t = this.valuesCount - 1; t >= 0; t--) {
            if (this.angleLineWidth > 0) {
              var i = this.getPointPosition(t, this.calculateCenterOffset(this.max));
              e.beginPath(), e.moveTo(this.xCenter, this.yCenter), e.lineTo(i.x, i.y), e.stroke(), 
              e.closePath();
            }
            var n = this.getPointPosition(t, this.calculateCenterOffset(this.max) + 5);
            e.font = D(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), 
            e.fillStyle = this.pointLabelFontColor;
            var r = this.labels.length, o = this.labels.length / 2, a = o / 2, l = t < a || t > r - a, c = t === a || t === r - a;
            e.textAlign = 0 === t ? "center" :t === o ? "center" :t < o ? "left" :"right", e.textBaseline = c ? "middle" :l ? "bottom" :"top", 
            e.fillText(this.labels[t], n.x, n.y);
          }
        }
      }
    }
  }), n.addEvent(window, "resize", function() {
    var e;
    return function() {
      clearTimeout(e), e = setTimeout(function() {
        s(i.instances, function(e) {
          e.options.responsive && e.resize(e.render, !0);
        });
      }, 50);
    };
  }()), f ? define(function() {
    return i;
  }) :"object" == typeof module && module.exports && (module.exports = i), e.Chart = i, 
  i.noConflict = function() {
    return e.Chart = t, i;
  };
}.call(this), function() {
  "use strict";
  var e = this, t = e.Chart, i = t.helpers, n = {
    scaleBeginAtZero:!0,
    scaleShowGridLines:!0,
    scaleGridLineColor:"rgba(0,0,0,.05)",
    scaleGridLineWidth:1,
    scaleShowHorizontalLines:!0,
    scaleShowVerticalLines:!0,
    barShowStroke:!0,
    barStrokeWidth:2,
    barValueSpacing:5,
    barDatasetSpacing:1,
    legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
  };
  t.Type.extend({
    name:"Bar",
    defaults:n,
    initialize:function(e) {
      var n = this.options;
      this.ScaleClass = t.Scale.extend({
        offsetGridLines:!0,
        calculateBarX:function(e, t, i) {
          var s = this.calculateBaseWidth(), r = this.calculateX(i) - s / 2, o = this.calculateBarWidth(e);
          return r + o * t + t * n.barDatasetSpacing + o / 2;
        },
        calculateBaseWidth:function() {
          return this.calculateX(1) - this.calculateX(0) - 2 * n.barValueSpacing;
        },
        calculateBarWidth:function(e) {
          return (this.calculateBaseWidth() - (e - 1) * n.barDatasetSpacing) / e;
        }
      }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(e) {
        var t = "mouseout" !== e.type ? this.getBarsAtEvent(e) :[];
        this.eachBars(function(e) {
          e.restore([ "fillColor", "strokeColor" ]);
        }), i.each(t, function(e) {
          e.fillColor = e.highlightFill, e.strokeColor = e.highlightStroke;
        }), this.showTooltip(t);
      }), this.BarClass = t.Rectangle.extend({
        strokeWidth:this.options.barStrokeWidth,
        showStroke:this.options.barShowStroke,
        ctx:this.chart.ctx
      }), i.each(e.datasets, function(t) {
        var n = {
          label:t.label || null,
          fillColor:t.fillColor,
          strokeColor:t.strokeColor,
          bars:[]
        };
        this.datasets.push(n), i.each(t.data, function(i, s) {
          n.bars.push(new this.BarClass({
            value:i,
            label:e.labels[s],
            datasetLabel:t.label,
            strokeColor:t.strokeColor,
            fillColor:t.fillColor,
            highlightFill:t.highlightFill || t.fillColor,
            highlightStroke:t.highlightStroke || t.strokeColor
          }));
        }, this);
      }, this), this.buildScale(e.labels), this.BarClass.prototype.base = this.scale.endPoint, 
      this.eachBars(function(e, t, n) {
        i.extend(e, {
          width:this.scale.calculateBarWidth(this.datasets.length),
          x:this.scale.calculateBarX(this.datasets.length, n, t),
          y:this.scale.endPoint
        }), e.save();
      }, this), this.render();
    },
    update:function() {
      this.scale.update(), i.each(this.activeElements, function(e) {
        e.restore([ "fillColor", "strokeColor" ]);
      }), this.eachBars(function(e) {
        e.save();
      }), this.render();
    },
    eachBars:function(e) {
      i.each(this.datasets, function(t, n) {
        i.each(t.bars, e, this, n);
      }, this);
    },
    getBarsAtEvent:function(e) {
      for (var t, n = [], s = i.getRelativePosition(e), r = function(e) {
        n.push(e.bars[t]);
      }, o = 0; o < this.datasets.length; o++) for (t = 0; t < this.datasets[o].bars.length; t++) if (this.datasets[o].bars[t].inRange(s.x, s.y)) return i.each(this.datasets, r), 
      n;
      return n;
    },
    buildScale:function(e) {
      var t = this, n = function() {
        var e = [];
        return t.eachBars(function(t) {
          e.push(t.value);
        }), e;
      }, s = {
        templateString:this.options.scaleLabel,
        height:this.chart.height,
        width:this.chart.width,
        ctx:this.chart.ctx,
        textColor:this.options.scaleFontColor,
        fontSize:this.options.scaleFontSize,
        fontStyle:this.options.scaleFontStyle,
        fontFamily:this.options.scaleFontFamily,
        valuesCount:e.length,
        beginAtZero:this.options.scaleBeginAtZero,
        integersOnly:this.options.scaleIntegersOnly,
        calculateYRange:function(e) {
          var t = i.calculateScaleRange(n(), e, this.fontSize, this.beginAtZero, this.integersOnly);
          i.extend(this, t);
        },
        xLabels:e,
        font:i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
        lineWidth:this.options.scaleLineWidth,
        lineColor:this.options.scaleLineColor,
        showHorizontalLines:this.options.scaleShowHorizontalLines,
        showVerticalLines:this.options.scaleShowVerticalLines,
        gridLineWidth:this.options.scaleShowGridLines ? this.options.scaleGridLineWidth :0,
        gridLineColor:this.options.scaleShowGridLines ? this.options.scaleGridLineColor :"rgba(0,0,0,0)",
        padding:this.options.showScale ? 0 :this.options.barShowStroke ? this.options.barStrokeWidth :0,
        showLabels:this.options.scaleShowLabels,
        display:this.options.showScale
      };
      this.options.scaleOverride && i.extend(s, {
        calculateYRange:i.noop,
        steps:this.options.scaleSteps,
        stepValue:this.options.scaleStepWidth,
        min:this.options.scaleStartValue,
        max:this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
      }), this.scale = new this.ScaleClass(s);
    },
    addData:function(e, t) {
      i.each(e, function(e, i) {
        this.datasets[i].bars.push(new this.BarClass({
          value:e,
          label:t,
          x:this.scale.calculateBarX(this.datasets.length, i, this.scale.valuesCount + 1),
          y:this.scale.endPoint,
          width:this.scale.calculateBarWidth(this.datasets.length),
          base:this.scale.endPoint,
          strokeColor:this.datasets[i].strokeColor,
          fillColor:this.datasets[i].fillColor
        }));
      }, this), this.scale.addXLabel(t), this.update();
    },
    removeData:function() {
      this.scale.removeXLabel(), i.each(this.datasets, function(e) {
        e.bars.shift();
      }, this), this.update();
    },
    reflow:function() {
      i.extend(this.BarClass.prototype, {
        y:this.scale.endPoint,
        base:this.scale.endPoint
      });
      var e = i.extend({
        height:this.chart.height,
        width:this.chart.width
      });
      this.scale.update(e);
    },
    draw:function(e) {
      var t = e || 1;
      this.clear();
      this.chart.ctx;
      this.scale.draw(t), i.each(this.datasets, function(e, n) {
        i.each(e.bars, function(e, i) {
          e.hasValue() && (e.base = this.scale.endPoint, e.transition({
            x:this.scale.calculateBarX(this.datasets.length, n, i),
            y:this.scale.calculateY(e.value),
            width:this.scale.calculateBarWidth(this.datasets.length)
          }, t).draw());
        }, this);
      }, this);
    }
  });
}.call(this), function() {
  "use strict";
  var e = this, t = e.Chart, i = t.helpers, n = {
    segmentShowStroke:!0,
    segmentStrokeColor:"#fff",
    segmentStrokeWidth:2,
    percentageInnerCutout:50,
    animationSteps:100,
    animationEasing:"easeOutBounce",
    animateRotate:!0,
    animateScale:!1,
    legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
  };
  t.Type.extend({
    name:"Doughnut",
    defaults:n,
    initialize:function(e) {
      this.segments = [], this.outerRadius = (i.min([ this.chart.width, this.chart.height ]) - this.options.segmentStrokeWidth / 2) / 2, 
      this.SegmentArc = t.Arc.extend({
        ctx:this.chart.ctx,
        x:this.chart.width / 2,
        y:this.chart.height / 2
      }), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(e) {
        var t = "mouseout" !== e.type ? this.getSegmentsAtEvent(e) :[];
        i.each(this.segments, function(e) {
          e.restore([ "fillColor" ]);
        }), i.each(t, function(e) {
          e.fillColor = e.highlightColor;
        }), this.showTooltip(t);
      }), this.calculateTotal(e), i.each(e, function(e, t) {
        this.addData(e, t, !0);
      }, this), this.render();
    },
    getSegmentsAtEvent:function(e) {
      var t = [], n = i.getRelativePosition(e);
      return i.each(this.segments, function(e) {
        e.inRange(n.x, n.y) && t.push(e);
      }, this), t;
    },
    addData:function(e, t, i) {
      var n = t || this.segments.length;
      this.segments.splice(n, 0, new this.SegmentArc({
        value:e.value,
        outerRadius:this.options.animateScale ? 0 :this.outerRadius,
        innerRadius:this.options.animateScale ? 0 :this.outerRadius / 100 * this.options.percentageInnerCutout,
        fillColor:e.color,
        highlightColor:e.highlight || e.color,
        showStroke:this.options.segmentShowStroke,
        strokeWidth:this.options.segmentStrokeWidth,
        strokeColor:this.options.segmentStrokeColor,
        startAngle:1.5 * Math.PI,
        circumference:this.options.animateRotate ? 0 :this.calculateCircumference(e.value),
        label:e.label
      })), i || (this.reflow(), this.update());
    },
    calculateCircumference:function(e) {
      return 2 * Math.PI * (Math.abs(e) / this.total);
    },
    calculateTotal:function(e) {
      this.total = 0, i.each(e, function(e) {
        this.total += Math.abs(e.value);
      }, this);
    },
    update:function() {
      this.calculateTotal(this.segments), i.each(this.activeElements, function(e) {
        e.restore([ "fillColor" ]);
      }), i.each(this.segments, function(e) {
        e.save();
      }), this.render();
    },
    removeData:function(e) {
      var t = i.isNumber(e) ? e :this.segments.length - 1;
      this.segments.splice(t, 1), this.reflow(), this.update();
    },
    reflow:function() {
      i.extend(this.SegmentArc.prototype, {
        x:this.chart.width / 2,
        y:this.chart.height / 2
      }), this.outerRadius = (i.min([ this.chart.width, this.chart.height ]) - this.options.segmentStrokeWidth / 2) / 2, 
      i.each(this.segments, function(e) {
        e.update({
          outerRadius:this.outerRadius,
          innerRadius:this.outerRadius / 100 * this.options.percentageInnerCutout
        });
      }, this);
    },
    draw:function(e) {
      var t = e || 1;
      this.clear(), i.each(this.segments, function(e, i) {
        e.transition({
          circumference:this.calculateCircumference(e.value),
          outerRadius:this.outerRadius,
          innerRadius:this.outerRadius / 100 * this.options.percentageInnerCutout
        }, t), e.endAngle = e.startAngle + e.circumference, e.draw(), 0 === i && (e.startAngle = 1.5 * Math.PI), 
        i < this.segments.length - 1 && (this.segments[i + 1].startAngle = e.endAngle);
      }, this);
    }
  }), t.types.Doughnut.extend({
    name:"Pie",
    defaults:i.merge(n, {
      percentageInnerCutout:0
    })
  });
}.call(this), function() {
  "use strict";
  var e = this, t = e.Chart, i = t.helpers, n = {
    scaleShowGridLines:!0,
    scaleGridLineColor:"rgba(0,0,0,.05)",
    scaleGridLineWidth:1,
    scaleShowHorizontalLines:!0,
    scaleShowVerticalLines:!0,
    bezierCurve:!0,
    bezierCurveTension:.4,
    pointDot:!0,
    pointDotRadius:4,
    pointDotStrokeWidth:1,
    pointHitDetectionRadius:20,
    datasetStroke:!0,
    datasetStrokeWidth:2,
    datasetFill:!0,
    legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
  };
  t.Type.extend({
    name:"Line",
    defaults:n,
    initialize:function(e) {
      this.PointClass = t.Point.extend({
        strokeWidth:this.options.pointDotStrokeWidth,
        radius:this.options.pointDotRadius,
        display:this.options.pointDot,
        hitDetectionRadius:this.options.pointHitDetectionRadius,
        ctx:this.chart.ctx,
        inRange:function(e) {
          return Math.pow(e - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2);
        }
      }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(e) {
        var t = "mouseout" !== e.type ? this.getPointsAtEvent(e) :[];
        this.eachPoints(function(e) {
          e.restore([ "fillColor", "strokeColor" ]);
        }), i.each(t, function(e) {
          e.fillColor = e.highlightFill, e.strokeColor = e.highlightStroke;
        }), this.showTooltip(t);
      }), i.each(e.datasets, function(t) {
        var n = {
          label:t.label || null,
          fillColor:t.fillColor,
          strokeColor:t.strokeColor,
          pointColor:t.pointColor,
          pointStrokeColor:t.pointStrokeColor,
          points:[]
        };
        this.datasets.push(n), i.each(t.data, function(i, s) {
          n.points.push(new this.PointClass({
            value:i,
            label:e.labels[s],
            datasetLabel:t.label,
            strokeColor:t.pointStrokeColor,
            fillColor:t.pointColor,
            highlightFill:t.pointHighlightFill || t.pointColor,
            highlightStroke:t.pointHighlightStroke || t.pointStrokeColor
          }));
        }, this), this.buildScale(e.labels), this.eachPoints(function(e, t) {
          i.extend(e, {
            x:this.scale.calculateX(t),
            y:this.scale.endPoint
          }), e.save();
        }, this);
      }, this), this.render();
    },
    update:function() {
      this.scale.update(), i.each(this.activeElements, function(e) {
        e.restore([ "fillColor", "strokeColor" ]);
      }), this.eachPoints(function(e) {
        e.save();
      }), this.render();
    },
    eachPoints:function(e) {
      i.each(this.datasets, function(t) {
        i.each(t.points, e, this);
      }, this);
    },
    getPointsAtEvent:function(e) {
      var t = [], n = i.getRelativePosition(e);
      return i.each(this.datasets, function(e) {
        i.each(e.points, function(e) {
          e.inRange(n.x, n.y) && t.push(e);
        });
      }, this), t;
    },
    buildScale:function(e) {
      var n = this, s = function() {
        var e = [];
        return n.eachPoints(function(t) {
          e.push(t.value);
        }), e;
      }, r = {
        templateString:this.options.scaleLabel,
        height:this.chart.height,
        width:this.chart.width,
        ctx:this.chart.ctx,
        textColor:this.options.scaleFontColor,
        fontSize:this.options.scaleFontSize,
        fontStyle:this.options.scaleFontStyle,
        fontFamily:this.options.scaleFontFamily,
        valuesCount:e.length,
        beginAtZero:this.options.scaleBeginAtZero,
        integersOnly:this.options.scaleIntegersOnly,
        calculateYRange:function(e) {
          var t = i.calculateScaleRange(s(), e, this.fontSize, this.beginAtZero, this.integersOnly);
          i.extend(this, t);
        },
        xLabels:e,
        font:i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
        lineWidth:this.options.scaleLineWidth,
        lineColor:this.options.scaleLineColor,
        showHorizontalLines:this.options.scaleShowHorizontalLines,
        showVerticalLines:this.options.scaleShowVerticalLines,
        gridLineWidth:this.options.scaleShowGridLines ? this.options.scaleGridLineWidth :0,
        gridLineColor:this.options.scaleShowGridLines ? this.options.scaleGridLineColor :"rgba(0,0,0,0)",
        padding:this.options.showScale ? 0 :this.options.pointDotRadius + this.options.pointDotStrokeWidth,
        showLabels:this.options.scaleShowLabels,
        display:this.options.showScale
      };
      this.options.scaleOverride && i.extend(r, {
        calculateYRange:i.noop,
        steps:this.options.scaleSteps,
        stepValue:this.options.scaleStepWidth,
        min:this.options.scaleStartValue,
        max:this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
      }), this.scale = new t.Scale(r);
    },
    addData:function(e, t) {
      i.each(e, function(e, i) {
        this.datasets[i].points.push(new this.PointClass({
          value:e,
          label:t,
          x:this.scale.calculateX(this.scale.valuesCount + 1),
          y:this.scale.endPoint,
          strokeColor:this.datasets[i].pointStrokeColor,
          fillColor:this.datasets[i].pointColor
        }));
      }, this), this.scale.addXLabel(t), this.update();
    },
    removeData:function() {
      this.scale.removeXLabel(), i.each(this.datasets, function(e) {
        e.points.shift();
      }, this), this.update();
    },
    reflow:function() {
      var e = i.extend({
        height:this.chart.height,
        width:this.chart.width
      });
      this.scale.update(e);
    },
    draw:function(e) {
      var t = e || 1;
      this.clear();
      var n = this.chart.ctx, s = function(e) {
        return null !== e.value;
      }, r = function(e, t, n) {
        return i.findNextWhere(t, s, n) || e;
      }, o = function(e, t, n) {
        return i.findPreviousWhere(t, s, n) || e;
      };
      this.scale.draw(t), i.each(this.datasets, function(e) {
        var a = i.where(e.points, s);
        i.each(e.points, function(e, i) {
          e.hasValue() && e.transition({
            y:this.scale.calculateY(e.value),
            x:this.scale.calculateX(i)
          }, t);
        }, this), this.options.bezierCurve && i.each(a, function(e, t) {
          var n = t > 0 && t < a.length - 1 ? this.options.bezierCurveTension :0;
          e.controlPoints = i.splineCurve(o(e, a, t), e, r(e, a, t), n), e.controlPoints.outer.y > this.scale.endPoint ? e.controlPoints.outer.y = this.scale.endPoint :e.controlPoints.outer.y < this.scale.startPoint && (e.controlPoints.outer.y = this.scale.startPoint), 
          e.controlPoints.inner.y > this.scale.endPoint ? e.controlPoints.inner.y = this.scale.endPoint :e.controlPoints.inner.y < this.scale.startPoint && (e.controlPoints.inner.y = this.scale.startPoint);
        }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = e.strokeColor, 
        n.beginPath(), i.each(a, function(e, t) {
          if (0 === t) n.moveTo(e.x, e.y); else if (this.options.bezierCurve) {
            var i = o(e, a, t);
            n.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, e.controlPoints.inner.x, e.controlPoints.inner.y, e.x, e.y);
          } else n.lineTo(e.x, e.y);
        }, this), n.stroke(), this.options.datasetFill && a.length > 0 && (n.lineTo(a[a.length - 1].x, this.scale.endPoint), 
        n.lineTo(a[0].x, this.scale.endPoint), n.fillStyle = e.fillColor, n.closePath(), 
        n.fill()), i.each(a, function(e) {
          e.draw();
        });
      }, this);
    }
  });
}.call(this), function() {
  "use strict";
  var e = this, t = e.Chart, i = t.helpers, n = {
    scaleShowLabelBackdrop:!0,
    scaleBackdropColor:"rgba(255,255,255,0.75)",
    scaleBeginAtZero:!0,
    scaleBackdropPaddingY:2,
    scaleBackdropPaddingX:2,
    scaleShowLine:!0,
    segmentShowStroke:!0,
    segmentStrokeColor:"#fff",
    segmentStrokeWidth:2,
    animationSteps:100,
    animationEasing:"easeOutBounce",
    animateRotate:!0,
    animateScale:!1,
    legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
  };
  t.Type.extend({
    name:"PolarArea",
    defaults:n,
    initialize:function(e) {
      this.segments = [], this.SegmentArc = t.Arc.extend({
        showStroke:this.options.segmentShowStroke,
        strokeWidth:this.options.segmentStrokeWidth,
        strokeColor:this.options.segmentStrokeColor,
        ctx:this.chart.ctx,
        innerRadius:0,
        x:this.chart.width / 2,
        y:this.chart.height / 2
      }), this.scale = new t.RadialScale({
        display:this.options.showScale,
        fontStyle:this.options.scaleFontStyle,
        fontSize:this.options.scaleFontSize,
        fontFamily:this.options.scaleFontFamily,
        fontColor:this.options.scaleFontColor,
        showLabels:this.options.scaleShowLabels,
        showLabelBackdrop:this.options.scaleShowLabelBackdrop,
        backdropColor:this.options.scaleBackdropColor,
        backdropPaddingY:this.options.scaleBackdropPaddingY,
        backdropPaddingX:this.options.scaleBackdropPaddingX,
        lineWidth:this.options.scaleShowLine ? this.options.scaleLineWidth :0,
        lineColor:this.options.scaleLineColor,
        lineArc:!0,
        width:this.chart.width,
        height:this.chart.height,
        xCenter:this.chart.width / 2,
        yCenter:this.chart.height / 2,
        ctx:this.chart.ctx,
        templateString:this.options.scaleLabel,
        valuesCount:e.length
      }), this.updateScaleRange(e), this.scale.update(), i.each(e, function(e, t) {
        this.addData(e, t, !0);
      }, this), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(e) {
        var t = "mouseout" !== e.type ? this.getSegmentsAtEvent(e) :[];
        i.each(this.segments, function(e) {
          e.restore([ "fillColor" ]);
        }), i.each(t, function(e) {
          e.fillColor = e.highlightColor;
        }), this.showTooltip(t);
      }), this.render();
    },
    getSegmentsAtEvent:function(e) {
      var t = [], n = i.getRelativePosition(e);
      return i.each(this.segments, function(e) {
        e.inRange(n.x, n.y) && t.push(e);
      }, this), t;
    },
    addData:function(e, t, i) {
      var n = t || this.segments.length;
      this.segments.splice(n, 0, new this.SegmentArc({
        fillColor:e.color,
        highlightColor:e.highlight || e.color,
        label:e.label,
        value:e.value,
        outerRadius:this.options.animateScale ? 0 :this.scale.calculateCenterOffset(e.value),
        circumference:this.options.animateRotate ? 0 :this.scale.getCircumference(),
        startAngle:1.5 * Math.PI
      })), i || (this.reflow(), this.update());
    },
    removeData:function(e) {
      var t = i.isNumber(e) ? e :this.segments.length - 1;
      this.segments.splice(t, 1), this.reflow(), this.update();
    },
    calculateTotal:function(e) {
      this.total = 0, i.each(e, function(e) {
        this.total += e.value;
      }, this), this.scale.valuesCount = this.segments.length;
    },
    updateScaleRange:function(e) {
      var t = [];
      i.each(e, function(e) {
        t.push(e.value);
      });
      var n = this.options.scaleOverride ? {
        steps:this.options.scaleSteps,
        stepValue:this.options.scaleStepWidth,
        min:this.options.scaleStartValue,
        max:this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
      } :i.calculateScaleRange(t, i.min([ this.chart.width, this.chart.height ]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
      i.extend(this.scale, n, {
        size:i.min([ this.chart.width, this.chart.height ]),
        xCenter:this.chart.width / 2,
        yCenter:this.chart.height / 2
      });
    },
    update:function() {
      this.calculateTotal(this.segments), i.each(this.segments, function(e) {
        e.save();
      }), this.reflow(), this.render();
    },
    reflow:function() {
      i.extend(this.SegmentArc.prototype, {
        x:this.chart.width / 2,
        y:this.chart.height / 2
      }), this.updateScaleRange(this.segments), this.scale.update(), i.extend(this.scale, {
        xCenter:this.chart.width / 2,
        yCenter:this.chart.height / 2
      }), i.each(this.segments, function(e) {
        e.update({
          outerRadius:this.scale.calculateCenterOffset(e.value)
        });
      }, this);
    },
    draw:function(e) {
      var t = e || 1;
      this.clear(), i.each(this.segments, function(e, i) {
        e.transition({
          circumference:this.scale.getCircumference(),
          outerRadius:this.scale.calculateCenterOffset(e.value)
        }, t), e.endAngle = e.startAngle + e.circumference, 0 === i && (e.startAngle = 1.5 * Math.PI), 
        i < this.segments.length - 1 && (this.segments[i + 1].startAngle = e.endAngle), 
        e.draw();
      }, this), this.scale.draw();
    }
  });
}.call(this), function() {
  "use strict";
  var e = this, t = e.Chart, i = t.helpers;
  t.Type.extend({
    name:"Radar",
    defaults:{
      scaleShowLine:!0,
      angleShowLineOut:!0,
      scaleShowLabels:!1,
      scaleBeginAtZero:!0,
      angleLineColor:"rgba(0,0,0,.1)",
      angleLineWidth:1,
      pointLabelFontFamily:"'Arial'",
      pointLabelFontStyle:"normal",
      pointLabelFontSize:10,
      pointLabelFontColor:"#666",
      pointDot:!0,
      pointDotRadius:3,
      pointDotStrokeWidth:1,
      pointHitDetectionRadius:20,
      datasetStroke:!0,
      datasetStrokeWidth:2,
      datasetFill:!0,
      legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    },
    initialize:function(e) {
      this.PointClass = t.Point.extend({
        strokeWidth:this.options.pointDotStrokeWidth,
        radius:this.options.pointDotRadius,
        display:this.options.pointDot,
        hitDetectionRadius:this.options.pointHitDetectionRadius,
        ctx:this.chart.ctx
      }), this.datasets = [], this.buildScale(e), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(e) {
        var t = "mouseout" !== e.type ? this.getPointsAtEvent(e) :[];
        this.eachPoints(function(e) {
          e.restore([ "fillColor", "strokeColor" ]);
        }), i.each(t, function(e) {
          e.fillColor = e.highlightFill, e.strokeColor = e.highlightStroke;
        }), this.showTooltip(t);
      }), i.each(e.datasets, function(t) {
        var n = {
          label:t.label || null,
          fillColor:t.fillColor,
          strokeColor:t.strokeColor,
          pointColor:t.pointColor,
          pointStrokeColor:t.pointStrokeColor,
          points:[]
        };
        this.datasets.push(n), i.each(t.data, function(i, s) {
          var r;
          this.scale.animation || (r = this.scale.getPointPosition(s, this.scale.calculateCenterOffset(i))), 
          n.points.push(new this.PointClass({
            value:i,
            label:e.labels[s],
            datasetLabel:t.label,
            x:this.options.animation ? this.scale.xCenter :r.x,
            y:this.options.animation ? this.scale.yCenter :r.y,
            strokeColor:t.pointStrokeColor,
            fillColor:t.pointColor,
            highlightFill:t.pointHighlightFill || t.pointColor,
            highlightStroke:t.pointHighlightStroke || t.pointStrokeColor
          }));
        }, this);
      }, this), this.render();
    },
    eachPoints:function(e) {
      i.each(this.datasets, function(t) {
        i.each(t.points, e, this);
      }, this);
    },
    getPointsAtEvent:function(e) {
      var t = i.getRelativePosition(e), n = i.getAngleFromPoint({
        x:this.scale.xCenter,
        y:this.scale.yCenter
      }, t), s = 2 * Math.PI / this.scale.valuesCount, r = Math.round((n.angle - 1.5 * Math.PI) / s), o = [];
      return (r >= this.scale.valuesCount || r < 0) && (r = 0), n.distance <= this.scale.drawingArea && i.each(this.datasets, function(e) {
        o.push(e.points[r]);
      }), o;
    },
    buildScale:function(e) {
      this.scale = new t.RadialScale({
        display:this.options.showScale,
        fontStyle:this.options.scaleFontStyle,
        fontSize:this.options.scaleFontSize,
        fontFamily:this.options.scaleFontFamily,
        fontColor:this.options.scaleFontColor,
        showLabels:this.options.scaleShowLabels,
        showLabelBackdrop:this.options.scaleShowLabelBackdrop,
        backdropColor:this.options.scaleBackdropColor,
        backdropPaddingY:this.options.scaleBackdropPaddingY,
        backdropPaddingX:this.options.scaleBackdropPaddingX,
        lineWidth:this.options.scaleShowLine ? this.options.scaleLineWidth :0,
        lineColor:this.options.scaleLineColor,
        angleLineColor:this.options.angleLineColor,
        angleLineWidth:this.options.angleShowLineOut ? this.options.angleLineWidth :0,
        pointLabelFontColor:this.options.pointLabelFontColor,
        pointLabelFontSize:this.options.pointLabelFontSize,
        pointLabelFontFamily:this.options.pointLabelFontFamily,
        pointLabelFontStyle:this.options.pointLabelFontStyle,
        height:this.chart.height,
        width:this.chart.width,
        xCenter:this.chart.width / 2,
        yCenter:this.chart.height / 2,
        ctx:this.chart.ctx,
        templateString:this.options.scaleLabel,
        labels:e.labels,
        valuesCount:e.datasets[0].data.length
      }), this.scale.setScaleSize(), this.updateScaleRange(e.datasets), this.scale.buildYLabels();
    },
    updateScaleRange:function(e) {
      var t = function() {
        var t = [];
        return i.each(e, function(e) {
          e.data ? t = t.concat(e.data) :i.each(e.points, function(e) {
            t.push(e.value);
          });
        }), t;
      }(), n = this.options.scaleOverride ? {
        steps:this.options.scaleSteps,
        stepValue:this.options.scaleStepWidth,
        min:this.options.scaleStartValue,
        max:this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
      } :i.calculateScaleRange(t, i.min([ this.chart.width, this.chart.height ]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
      i.extend(this.scale, n);
    },
    addData:function(e, t) {
      this.scale.valuesCount++, i.each(e, function(e, i) {
        var n = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(e));
        this.datasets[i].points.push(new this.PointClass({
          value:e,
          label:t,
          x:n.x,
          y:n.y,
          strokeColor:this.datasets[i].pointStrokeColor,
          fillColor:this.datasets[i].pointColor
        }));
      }, this), this.scale.labels.push(t), this.reflow(), this.update();
    },
    removeData:function() {
      this.scale.valuesCount--, this.scale.labels.shift(), i.each(this.datasets, function(e) {
        e.points.shift();
      }, this), this.reflow(), this.update();
    },
    update:function() {
      this.eachPoints(function(e) {
        e.save();
      }), this.reflow(), this.render();
    },
    reflow:function() {
      i.extend(this.scale, {
        width:this.chart.width,
        height:this.chart.height,
        size:i.min([ this.chart.width, this.chart.height ]),
        xCenter:this.chart.width / 2,
        yCenter:this.chart.height / 2
      }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels();
    },
    draw:function(e) {
      var t = e || 1, n = this.chart.ctx;
      this.clear(), this.scale.draw(), i.each(this.datasets, function(e) {
        i.each(e.points, function(e, i) {
          e.hasValue() && e.transition(this.scale.getPointPosition(i, this.scale.calculateCenterOffset(e.value)), t);
        }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = e.strokeColor, 
        n.beginPath(), i.each(e.points, function(e, t) {
          0 === t ? n.moveTo(e.x, e.y) :n.lineTo(e.x, e.y);
        }, this), n.closePath(), n.stroke(), n.fillStyle = e.fillColor, n.fill(), i.each(e.points, function(e) {
          e.hasValue() && e.draw();
        });
      }, this);
    }
  });
}.call(this), function(e, t) {
  "function" == typeof define && define.amd ? define("Chartist", [], function() {
    return e.Chartist = t();
  }) :"object" == typeof exports ? module.exports = t() :e.Chartist = t();
}(this, function() {
  var e = {
    version:"0.10.0"
  };
  return function(e, t, i) {
    "use strict";
    i.namespaces = {
      svg:"http://www.w3.org/2000/svg",
      xmlns:"http://www.w3.org/2000/xmlns/",
      xhtml:"http://www.w3.org/1999/xhtml",
      xlink:"http://www.w3.org/1999/xlink",
      ct:"http://gionkunz.github.com/chartist-js/ct"
    }, i.noop = function(e) {
      return e;
    }, i.alphaNumerate = function(e) {
      return String.fromCharCode(97 + e % 26);
    }, i.extend = function(e) {
      var t, n, s;
      for (e = e || {}, t = 1; t < arguments.length; t++) {
        n = arguments[t];
        for (var r in n) s = n[r], "object" != typeof s || null === s || s instanceof Array ? e[r] = s :e[r] = i.extend(e[r], s);
      }
      return e;
    }, i.replaceAll = function(e, t, i) {
      return e.replace(new RegExp(t, "g"), i);
    }, i.ensureUnit = function(e, t) {
      return "number" == typeof e && (e += t), e;
    }, i.quantity = function(e) {
      if ("string" == typeof e) {
        var t = /^(\d+)\s*(.*)$/g.exec(e);
        return {
          value:+t[1],
          unit:t[2] || undefined
        };
      }
      return {
        value:e
      };
    }, i.querySelector = function(e) {
      return e instanceof Node ? e :t.querySelector(e);
    }, i.times = function(e) {
      return Array.apply(null, new Array(e));
    }, i.sum = function(e, t) {
      return e + (t || 0);
    }, i.mapMultiply = function(e) {
      return function(t) {
        return t * e;
      };
    }, i.mapAdd = function(e) {
      return function(t) {
        return t + e;
      };
    }, i.serialMap = function(e, t) {
      var n = [], s = Math.max.apply(null, e.map(function(e) {
        return e.length;
      }));
      return i.times(s).forEach(function(i, s) {
        var r = e.map(function(e) {
          return e[s];
        });
        n[s] = t.apply(null, r);
      }), n;
    }, i.roundWithPrecision = function(e, t) {
      var n = Math.pow(10, t || i.precision);
      return Math.round(e * n) / n;
    }, i.precision = 8, i.escapingMap = {
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&#039;"
    }, i.serialize = function(e) {
      return null === e || e === undefined ? e :("number" == typeof e ? e = "" + e :"object" == typeof e && (e = JSON.stringify({
        data:e
      })), Object.keys(i.escapingMap).reduce(function(e, t) {
        return i.replaceAll(e, t, i.escapingMap[t]);
      }, e));
    }, i.deserialize = function(e) {
      if ("string" != typeof e) return e;
      e = Object.keys(i.escapingMap).reduce(function(e, t) {
        return i.replaceAll(e, i.escapingMap[t], t);
      }, e);
      try {
        e = JSON.parse(e), e = e.data !== undefined ? e.data :e;
      } catch (e) {}
      return e;
    }, i.createSvg = function(e, t, n, s) {
      var r;
      return t = t || "100%", n = n || "100%", Array.prototype.slice.call(e.querySelectorAll("svg")).filter(function(e) {
        return e.getAttributeNS(i.namespaces.xmlns, "ct");
      }).forEach(function(t) {
        e.removeChild(t);
      }), r = new i.Svg("svg").attr({
        width:t,
        height:n
      }).addClass(s).attr({
        style:"width: " + t + "; height: " + n + ";"
      }), e.appendChild(r._node), r;
    }, i.normalizeData = function(e, t, n) {
      var s, r = {
        raw:e,
        normalized:{}
      };
      return r.normalized.series = i.getDataArray({
        series:e.series || []
      }, t, n), s = r.normalized.series.every(function(e) {
        return e instanceof Array;
      }) ? Math.max.apply(null, r.normalized.series.map(function(e) {
        return e.length;
      })) :r.normalized.series.length, r.normalized.labels = (e.labels || []).slice(), 
      Array.prototype.push.apply(r.normalized.labels, i.times(Math.max(0, s - r.normalized.labels.length)).map(function() {
        return "";
      })), t && i.reverseData(r.normalized), r;
    }, i.safeHasProperty = function(e, t) {
      return null !== e && "object" == typeof e && e.hasOwnProperty(t);
    }, i.isDataHoleValue = function(e) {
      return null === e || e === undefined || "number" == typeof e && isNaN(e);
    }, i.reverseData = function(e) {
      e.labels.reverse(), e.series.reverse();
      for (var t = 0; t < e.series.length; t++) "object" == typeof e.series[t] && e.series[t].data !== undefined ? e.series[t].data.reverse() :e.series[t] instanceof Array && e.series[t].reverse();
    }, i.getDataArray = function(e, t, n) {
      function s(e) {
        if (i.safeHasProperty(e, "value")) return s(e.value);
        if (i.safeHasProperty(e, "data")) return s(e.data);
        if (e instanceof Array) return e.map(s);
        if (i.isDataHoleValue(e)) return undefined;
        if (n) {
          var t = {};
          return "string" == typeof n ? t[n] = i.getNumberOrUndefined(e) :t.y = i.getNumberOrUndefined(e), 
          t.x = e.hasOwnProperty("x") ? i.getNumberOrUndefined(e.x) :t.x, t.y = e.hasOwnProperty("y") ? i.getNumberOrUndefined(e.y) :t.y, 
          t;
        }
        return i.getNumberOrUndefined(e);
      }
      return e.series.map(s);
    }, i.normalizePadding = function(e, t) {
      return t = t || 0, "number" == typeof e ? {
        top:e,
        right:e,
        bottom:e,
        left:e
      } :{
        top:"number" == typeof e.top ? e.top :t,
        right:"number" == typeof e.right ? e.right :t,
        bottom:"number" == typeof e.bottom ? e.bottom :t,
        left:"number" == typeof e.left ? e.left :t
      };
    }, i.getMetaData = function(e, t) {
      var i = e.data ? e.data[t] :e[t];
      return i ? i.meta :undefined;
    }, i.orderOfMagnitude = function(e) {
      return Math.floor(Math.log(Math.abs(e)) / Math.LN10);
    }, i.projectLength = function(e, t, i) {
      return t / i.range * e;
    }, i.getAvailableHeight = function(e, t) {
      return Math.max((i.quantity(t.height).value || e.height()) - (t.chartPadding.top + t.chartPadding.bottom) - t.axisX.offset, 0);
    }, i.getHighLow = function(e, t, n) {
      function s(e) {
        if (e === undefined) return undefined;
        if (e instanceof Array) for (var t = 0; t < e.length; t++) s(e[t]); else {
          var i = n ? +e[n] :+e;
          o && i > r.high && (r.high = i), a && i < r.low && (r.low = i);
        }
      }
      t = i.extend({}, t, n ? t["axis" + n.toUpperCase()] :{});
      var r = {
        high:t.high === undefined ? -Number.MAX_VALUE :+t.high,
        low:t.low === undefined ? Number.MAX_VALUE :+t.low
      }, o = t.high === undefined, a = t.low === undefined;
      return (o || a) && s(e), (t.referenceValue || 0 === t.referenceValue) && (r.high = Math.max(t.referenceValue, r.high), 
      r.low = Math.min(t.referenceValue, r.low)), r.high <= r.low && (0 === r.low ? r.high = 1 :r.low < 0 ? r.high = 0 :r.high > 0 ? r.low = 0 :(r.high = 1, 
      r.low = 0)), r;
    }, i.isNumeric = function(e) {
      return null !== e && isFinite(e);
    }, i.isFalseyButZero = function(e) {
      return !e && 0 !== e;
    }, i.getNumberOrUndefined = function(e) {
      return i.isNumeric(e) ? +e :undefined;
    }, i.isMultiValue = function(e) {
      return "object" == typeof e && ("x" in e || "y" in e);
    }, i.getMultiValue = function(e, t) {
      return i.isMultiValue(e) ? i.getNumberOrUndefined(e[t || "y"]) :i.getNumberOrUndefined(e);
    }, i.rho = function(e) {
      function t(e, i) {
        return e % i == 0 ? i :t(i, e % i);
      }
      function i(e) {
        return e * e + 1;
      }
      if (1 === e) return e;
      var n, s = 2, r = 2;
      if (e % 2 == 0) return 2;
      do {
        s = i(s) % e, r = i(i(r)) % e, n = t(Math.abs(s - r), e);
      } while (1 === n);
      return n;
    }, i.getBounds = function(e, t, n, s) {
      function r(e, t) {
        return e === (e += t) && (e *= 1 + (t > 0 ? p :-p)), e;
      }
      var o, a, l, c = 0, u = {
        high:t.high,
        low:t.low
      };
      u.valueRange = u.high - u.low, u.oom = i.orderOfMagnitude(u.valueRange), u.step = Math.pow(10, u.oom), 
      u.min = Math.floor(u.low / u.step) * u.step, u.max = Math.ceil(u.high / u.step) * u.step, 
      u.range = u.max - u.min, u.numberOfSteps = Math.round(u.range / u.step);
      var h = i.projectLength(e, u.step, u), d = h < n, f = s ? i.rho(u.range) :0;
      if (s && i.projectLength(e, 1, u) >= n) u.step = 1; else if (s && f < u.step && i.projectLength(e, f, u) >= n) u.step = f; else for (;;) {
        if (d && i.projectLength(e, u.step, u) <= n) u.step *= 2; else {
          if (d || !(i.projectLength(e, u.step / 2, u) >= n)) break;
          if (u.step /= 2, s && u.step % 1 != 0) {
            u.step *= 2;
            break;
          }
        }
        if (c++ > 1e3) throw new Error("Exceeded maximum number of iterations while optimizing scale step!");
      }
      var p = 2.221e-16;
      for (u.step = Math.max(u.step, p), a = u.min, l = u.max; a + u.step <= u.low; ) a = r(a, u.step);
      for (;l - u.step >= u.high; ) l = r(l, -u.step);
      u.min = a, u.max = l, u.range = u.max - u.min;
      var m = [];
      for (o = u.min; o <= u.max; o = r(o, u.step)) {
        var g = i.roundWithPrecision(o);
        g !== m[m.length - 1] && m.push(g);
      }
      return u.values = m, u;
    }, i.polarToCartesian = function(e, t, i, n) {
      var s = (n - 90) * Math.PI / 180;
      return {
        x:e + i * Math.cos(s),
        y:t + i * Math.sin(s)
      };
    }, i.createChartRect = function(e, t, n) {
      var s = !(!t.axisX && !t.axisY), r = s ? t.axisY.offset :0, o = s ? t.axisX.offset :0, a = e.width() || i.quantity(t.width).value || 0, l = e.height() || i.quantity(t.height).value || 0, c = i.normalizePadding(t.chartPadding, n);
      a = Math.max(a, r + c.left + c.right), l = Math.max(l, o + c.top + c.bottom);
      var u = {
        padding:c,
        width:function() {
          return this.x2 - this.x1;
        },
        height:function() {
          return this.y1 - this.y2;
        }
      };
      return s ? ("start" === t.axisX.position ? (u.y2 = c.top + o, u.y1 = Math.max(l - c.bottom, u.y2 + 1)) :(u.y2 = c.top, 
      u.y1 = Math.max(l - c.bottom - o, u.y2 + 1)), "start" === t.axisY.position ? (u.x1 = c.left + r, 
      u.x2 = Math.max(a - c.right, u.x1 + 1)) :(u.x1 = c.left, u.x2 = Math.max(a - c.right - r, u.x1 + 1))) :(u.x1 = c.left, 
      u.x2 = Math.max(a - c.right, u.x1 + 1), u.y2 = c.top, u.y1 = Math.max(l - c.bottom, u.y2 + 1)), 
      u;
    }, i.createGrid = function(e, t, n, s, r, o, a, l) {
      var c = {};
      c[n.units.pos + "1"] = e, c[n.units.pos + "2"] = e, c[n.counterUnits.pos + "1"] = s, 
      c[n.counterUnits.pos + "2"] = s + r;
      var u = o.elem("line", c, a.join(" "));
      l.emit("draw", i.extend({
        type:"grid",
        axis:n,
        index:t,
        group:o,
        element:u
      }, c));
    }, i.createGridBackground = function(e, t, i, n) {
      var s = e.elem("rect", {
        x:t.x1,
        y:t.y2,
        width:t.width(),
        height:t.height()
      }, i, !0);
      n.emit("draw", {
        type:"gridBackground",
        group:e,
        element:s
      });
    }, i.createLabel = function(e, t, n, s, r, o, a, l, c, u, h) {
      var d, f = {};
      if (f[r.units.pos] = e + a[r.units.pos], f[r.counterUnits.pos] = a[r.counterUnits.pos], 
      f[r.units.len] = t, f[r.counterUnits.len] = Math.max(0, o - 10), u) {
        var p = '<span class="' + c.join(" ") + '" style="' + r.units.len + ": " + Math.round(f[r.units.len]) + "px; " + r.counterUnits.len + ": " + Math.round(f[r.counterUnits.len]) + 'px">' + s[n] + "</span>";
        d = l.foreignObject(p, i.extend({
          style:"overflow: visible;"
        }, f));
      } else d = l.elem("text", f, c.join(" ")).text(s[n]);
      h.emit("draw", i.extend({
        type:"label",
        axis:r,
        index:n,
        group:l,
        element:d,
        text:s[n]
      }, f));
    }, i.getSeriesOption = function(e, t, i) {
      if (e.name && t.series && t.series[e.name]) {
        var n = t.series[e.name];
        return n.hasOwnProperty(i) ? n[i] :t[i];
      }
      return t[i];
    }, i.optionsProvider = function(t, n, s) {
      function r(t) {
        var r = a;
        if (a = i.extend({}, c), n) for (l = 0; l < n.length; l++) {
          var o = e.matchMedia(n[l][0]);
          o.matches && (a = i.extend(a, n[l][1]));
        }
        s && t && s.emit("optionsChanged", {
          previousOptions:r,
          currentOptions:a
        });
      }
      function o() {
        u.forEach(function(e) {
          e.removeListener(r);
        });
      }
      var a, l, c = i.extend({}, t), u = [];
      if (!e.matchMedia) throw "window.matchMedia not found! Make sure you're using a polyfill.";
      if (n) for (l = 0; l < n.length; l++) {
        var h = e.matchMedia(n[l][0]);
        h.addListener(r), u.push(h);
      }
      return r(), {
        removeMediaQueryListeners:o,
        getCurrentOptions:function() {
          return i.extend({}, a);
        }
      };
    }, i.splitIntoSegments = function(e, t, n) {
      var s = {
        increasingX:!1,
        fillHoles:!1
      };
      n = i.extend({}, s, n);
      for (var r = [], o = !0, a = 0; a < e.length; a += 2) i.getMultiValue(t[a / 2].value) === undefined ? n.fillHoles || (o = !0) :(n.increasingX && a >= 2 && e[a] <= e[a - 2] && (o = !0), 
      o && (r.push({
        pathCoordinates:[],
        valueData:[]
      }), o = !1), r[r.length - 1].pathCoordinates.push(e[a], e[a + 1]), r[r.length - 1].valueData.push(t[a / 2]));
      return r;
    };
  }(window, document, e), function(e, t, i) {
    "use strict";
    i.Interpolation = {}, i.Interpolation.none = function(e) {
      var t = {
        fillHoles:!1
      };
      return e = i.extend({}, t, e), function(t, n) {
        for (var s = new i.Svg.Path(), r = !0, o = 0; o < t.length; o += 2) {
          var a = t[o], l = t[o + 1], c = n[o / 2];
          i.getMultiValue(c.value) !== undefined ? (r ? s.move(a, l, !1, c) :s.line(a, l, !1, c), 
          r = !1) :e.fillHoles || (r = !0);
        }
        return s;
      };
    }, i.Interpolation.simple = function(e) {
      var t = {
        divisor:2,
        fillHoles:!1
      };
      e = i.extend({}, t, e);
      var n = 1 / Math.max(1, e.divisor);
      return function(t, s) {
        for (var r, o, a, l = new i.Svg.Path(), c = 0; c < t.length; c += 2) {
          var u = t[c], h = t[c + 1], d = (u - r) * n, f = s[c / 2];
          f.value !== undefined ? (a === undefined ? l.move(u, h, !1, f) :l.curve(r + d, o, u - d, h, u, h, !1, f), 
          r = u, o = h, a = f) :e.fillHoles || (r = u = a = undefined);
        }
        return l;
      };
    }, i.Interpolation.cardinal = function(e) {
      var t = {
        tension:1,
        fillHoles:!1
      };
      e = i.extend({}, t, e);
      var n = Math.min(1, Math.max(0, e.tension)), s = 1 - n;
      return function t(r, o) {
        var a = i.splitIntoSegments(r, o, {
          fillHoles:e.fillHoles
        });
        if (a.length) {
          if (a.length > 1) {
            var l = [];
            return a.forEach(function(e) {
              l.push(t(e.pathCoordinates, e.valueData));
            }), i.Svg.Path.join(l);
          }
          if (r = a[0].pathCoordinates, o = a[0].valueData, r.length <= 4) return i.Interpolation.none()(r, o);
          for (var c, u = new i.Svg.Path().move(r[0], r[1], !1, o[0]), h = 0, d = r.length; d - 2 * !c > h; h += 2) {
            var f = [ {
              x:+r[h - 2],
              y:+r[h - 1]
            }, {
              x:+r[h],
              y:+r[h + 1]
            }, {
              x:+r[h + 2],
              y:+r[h + 3]
            }, {
              x:+r[h + 4],
              y:+r[h + 5]
            } ];
            c ? h ? d - 4 === h ? f[3] = {
              x:+r[0],
              y:+r[1]
            } :d - 2 === h && (f[2] = {
              x:+r[0],
              y:+r[1]
            }, f[3] = {
              x:+r[2],
              y:+r[3]
            }) :f[0] = {
              x:+r[d - 2],
              y:+r[d - 1]
            } :d - 4 === h ? f[3] = f[2] :h || (f[0] = {
              x:+r[h],
              y:+r[h + 1]
            }), u.curve(n * (-f[0].x + 6 * f[1].x + f[2].x) / 6 + s * f[2].x, n * (-f[0].y + 6 * f[1].y + f[2].y) / 6 + s * f[2].y, n * (f[1].x + 6 * f[2].x - f[3].x) / 6 + s * f[2].x, n * (f[1].y + 6 * f[2].y - f[3].y) / 6 + s * f[2].y, f[2].x, f[2].y, !1, o[(h + 2) / 2]);
          }
          return u;
        }
        return i.Interpolation.none()([]);
      };
    }, i.Interpolation.monotoneCubic = function(e) {
      var t = {
        fillHoles:!1
      };
      return e = i.extend({}, t, e), function t(n, s) {
        var r = i.splitIntoSegments(n, s, {
          fillHoles:e.fillHoles,
          increasingX:!0
        });
        if (r.length) {
          if (r.length > 1) {
            var o = [];
            return r.forEach(function(e) {
              o.push(t(e.pathCoordinates, e.valueData));
            }), i.Svg.Path.join(o);
          }
          if (n = r[0].pathCoordinates, s = r[0].valueData, n.length <= 4) return i.Interpolation.none()(n, s);
          var a, l, c = [], u = [], h = n.length / 2, d = [], f = [], p = [], m = [];
          for (a = 0; a < h; a++) c[a] = n[2 * a], u[a] = n[2 * a + 1];
          for (a = 0; a < h - 1; a++) p[a] = u[a + 1] - u[a], m[a] = c[a + 1] - c[a], f[a] = p[a] / m[a];
          for (d[0] = f[0], d[h - 1] = f[h - 2], a = 1; a < h - 1; a++) 0 === f[a] || 0 === f[a - 1] || f[a - 1] > 0 != f[a] > 0 ? d[a] = 0 :(d[a] = 3 * (m[a - 1] + m[a]) / ((2 * m[a] + m[a - 1]) / f[a - 1] + (m[a] + 2 * m[a - 1]) / f[a]), 
          isFinite(d[a]) || (d[a] = 0));
          for (l = new i.Svg.Path().move(c[0], u[0], !1, s[0]), a = 0; a < h - 1; a++) l.curve(c[a] + m[a] / 3, u[a] + d[a] * m[a] / 3, c[a + 1] - m[a] / 3, u[a + 1] - d[a + 1] * m[a] / 3, c[a + 1], u[a + 1], !1, s[a + 1]);
          return l;
        }
        return i.Interpolation.none()([]);
      };
    }, i.Interpolation.step = function(e) {
      var t = {
        postpone:!0,
        fillHoles:!1
      };
      return e = i.extend({}, t, e), function(t, n) {
        for (var s, r, o, a = new i.Svg.Path(), l = 0; l < t.length; l += 2) {
          var c = t[l], u = t[l + 1], h = n[l / 2];
          h.value !== undefined ? (o === undefined ? a.move(c, u, !1, h) :(e.postpone ? a.line(c, r, !1, o) :a.line(s, u, !1, h), 
          a.line(c, u, !1, h)), s = c, r = u, o = h) :e.fillHoles || (s = r = o = undefined);
        }
        return a;
      };
    };
  }(window, document, e), function(e, t, i) {
    "use strict";
    i.EventEmitter = function() {
      function e(e, t) {
        n[e] = n[e] || [], n[e].push(t);
      }
      function t(e, t) {
        n[e] && (t ? (n[e].splice(n[e].indexOf(t), 1), 0 === n[e].length && delete n[e]) :delete n[e]);
      }
      function i(e, t) {
        n[e] && n[e].forEach(function(e) {
          e(t);
        }), n["*"] && n["*"].forEach(function(i) {
          i(e, t);
        });
      }
      var n = [];
      return {
        addEventHandler:e,
        removeEventHandler:t,
        emit:i
      };
    };
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e) {
      var t = [];
      if (e.length) for (var i = 0; i < e.length; i++) t.push(e[i]);
      return t;
    }
    function s(e, t) {
      var n = t || this.prototype || i.Class, s = Object.create(n);
      i.Class.cloneDefinitions(s, e);
      var r = function() {
        var e, t = s.constructor || function() {};
        return e = this === i ? Object.create(s) :this, t.apply(e, Array.prototype.slice.call(arguments, 0)), 
        e;
      };
      return r.prototype = s, r["super"] = n, r.extend = this.extend, r;
    }
    function r() {
      var e = n(arguments), t = e[0];
      return e.splice(1, e.length - 1).forEach(function(e) {
        Object.getOwnPropertyNames(e).forEach(function(i) {
          delete t[i], Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i));
        });
      }), t;
    }
    i.Class = {
      extend:s,
      cloneDefinitions:r
    };
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e, t, n) {
      return e && (this.data = e || {}, this.data.labels = this.data.labels || [], this.data.series = this.data.series || [], 
      this.eventEmitter.emit("data", {
        type:"update",
        data:this.data
      })), t && (this.options = i.extend({}, n ? this.options :this.defaultOptions, t), 
      this.initializeTimeoutId || (this.optionsProvider.removeMediaQueryListeners(), this.optionsProvider = i.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter))), 
      this.initializeTimeoutId || this.createChart(this.optionsProvider.getCurrentOptions()), 
      this;
    }
    function s() {
      return this.initializeTimeoutId ? e.clearTimeout(this.initializeTimeoutId) :(e.removeEventListener("resize", this.resizeListener), 
      this.optionsProvider.removeMediaQueryListeners()), this;
    }
    function r(e, t) {
      return this.eventEmitter.addEventHandler(e, t), this;
    }
    function o(e, t) {
      return this.eventEmitter.removeEventHandler(e, t), this;
    }
    function a() {
      e.addEventListener("resize", this.resizeListener), this.optionsProvider = i.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter), 
      this.eventEmitter.addEventHandler("optionsChanged", function() {
        this.update();
      }.bind(this)), this.options.plugins && this.options.plugins.forEach(function(e) {
        e instanceof Array ? e[0](this, e[1]) :e(this);
      }.bind(this)), this.eventEmitter.emit("data", {
        type:"initial",
        data:this.data
      }), this.createChart(this.optionsProvider.getCurrentOptions()), this.initializeTimeoutId = undefined;
    }
    function l(e, t, n, s, r) {
      this.container = i.querySelector(e), this.data = t || {}, this.data.labels = this.data.labels || [], 
      this.data.series = this.data.series || [], this.defaultOptions = n, this.options = s, 
      this.responsiveOptions = r, this.eventEmitter = i.EventEmitter(), this.supportsForeignObject = i.Svg.isSupported("Extensibility"), 
      this.supportsAnimations = i.Svg.isSupported("AnimationEventsAttribute"), this.resizeListener = function() {
        this.update();
      }.bind(this), this.container && (this.container.__chartist__ && this.container.__chartist__.detach(), 
      this.container.__chartist__ = this), this.initializeTimeoutId = setTimeout(a.bind(this), 0);
    }
    i.Base = i.Class.extend({
      constructor:l,
      optionsProvider:undefined,
      container:undefined,
      svg:undefined,
      eventEmitter:undefined,
      createChart:function() {
        throw new Error("Base chart type can't be instantiated!");
      },
      update:n,
      detach:s,
      on:r,
      off:o,
      version:i.version,
      supportsForeignObject:!1
    });
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e, n, s, r, o) {
      e instanceof Element ? this._node = e :(this._node = t.createElementNS(i.namespaces.svg, e), 
      "svg" === e && this.attr({
        "xmlns:ct":i.namespaces.ct
      })), n && this.attr(n), s && this.addClass(s), r && (o && r._node.firstChild ? r._node.insertBefore(this._node, r._node.firstChild) :r._node.appendChild(this._node));
    }
    function s(e, t) {
      return "string" == typeof e ? t ? this._node.getAttributeNS(t, e) :this._node.getAttribute(e) :(Object.keys(e).forEach(function(t) {
        if (e[t] !== undefined) if (-1 !== t.indexOf(":")) {
          var n = t.split(":");
          this._node.setAttributeNS(i.namespaces[n[0]], t, e[t]);
        } else this._node.setAttribute(t, e[t]);
      }.bind(this)), this);
    }
    function r(e, t, n, s) {
      return new i.Svg(e, t, n, this, s);
    }
    function o() {
      return this._node.parentNode instanceof SVGElement ? new i.Svg(this._node.parentNode) :null;
    }
    function a() {
      for (var e = this._node; "svg" !== e.nodeName; ) e = e.parentNode;
      return new i.Svg(e);
    }
    function l(e) {
      var t = this._node.querySelector(e);
      return t ? new i.Svg(t) :null;
    }
    function c(e) {
      var t = this._node.querySelectorAll(e);
      return t.length ? new i.Svg.List(t) :null;
    }
    function u() {
      return this._node;
    }
    function h(e, n, s, r) {
      if ("string" == typeof e) {
        var o = t.createElement("div");
        o.innerHTML = e, e = o.firstChild;
      }
      e.setAttribute("xmlns", i.namespaces.xmlns);
      var a = this.elem("foreignObject", n, s, r);
      return a._node.appendChild(e), a;
    }
    function d(e) {
      return this._node.appendChild(t.createTextNode(e)), this;
    }
    function f() {
      for (;this._node.firstChild; ) this._node.removeChild(this._node.firstChild);
      return this;
    }
    function p() {
      return this._node.parentNode.removeChild(this._node), this.parent();
    }
    function m(e) {
      return this._node.parentNode.replaceChild(e._node, this._node), e;
    }
    function g(e, t) {
      return t && this._node.firstChild ? this._node.insertBefore(e._node, this._node.firstChild) :this._node.appendChild(e._node), 
      this;
    }
    function v() {
      return this._node.getAttribute("class") ? this._node.getAttribute("class").trim().split(/\s+/) :[];
    }
    function y(e) {
      return this._node.setAttribute("class", this.classes(this._node).concat(e.trim().split(/\s+/)).filter(function(e, t, i) {
        return i.indexOf(e) === t;
      }).join(" ")), this;
    }
    function b(e) {
      var t = e.trim().split(/\s+/);
      return this._node.setAttribute("class", this.classes(this._node).filter(function(e) {
        return -1 === t.indexOf(e);
      }).join(" ")), this;
    }
    function w() {
      return this._node.setAttribute("class", ""), this;
    }
    function x() {
      return this._node.getBoundingClientRect().height;
    }
    function _() {
      return this._node.getBoundingClientRect().width;
    }
    function S(e, t, n) {
      return t === undefined && (t = !0), Object.keys(e).forEach(function(s) {
        function r(e, t) {
          var r, o, a, l = {};
          e.easing && (a = e.easing instanceof Array ? e.easing :i.Svg.Easing[e.easing], delete e.easing), 
          e.begin = i.ensureUnit(e.begin, "ms"), e.dur = i.ensureUnit(e.dur, "ms"), a && (e.calcMode = "spline", 
          e.keySplines = a.join(" "), e.keyTimes = "0;1"), t && (e.fill = "freeze", l[s] = e.from, 
          this.attr(l), o = i.quantity(e.begin || 0).value, e.begin = "indefinite"), r = this.elem("animate", i.extend({
            attributeName:s
          }, e)), t && setTimeout(function() {
            try {
              r._node.beginElement();
            } catch (t) {
              l[s] = e.to, this.attr(l), r.remove();
            }
          }.bind(this), o), n && r._node.addEventListener("beginEvent", function() {
            n.emit("animationBegin", {
              element:this,
              animate:r._node,
              params:e
            });
          }.bind(this)), r._node.addEventListener("endEvent", function() {
            n && n.emit("animationEnd", {
              element:this,
              animate:r._node,
              params:e
            }), t && (l[s] = e.to, this.attr(l), r.remove());
          }.bind(this));
        }
        e[s] instanceof Array ? e[s].forEach(function(e) {
          r.bind(this)(e, !1);
        }.bind(this)) :r.bind(this)(e[s], t);
      }.bind(this)), this;
    }
    function C(e) {
      var t = this;
      this.svgElements = [];
      for (var n = 0; n < e.length; n++) this.svgElements.push(new i.Svg(e[n]));
      Object.keys(i.Svg.prototype).filter(function(e) {
        return -1 === [ "constructor", "parent", "querySelector", "querySelectorAll", "replace", "append", "classes", "height", "width" ].indexOf(e);
      }).forEach(function(e) {
        t[e] = function() {
          var n = Array.prototype.slice.call(arguments, 0);
          return t.svgElements.forEach(function(t) {
            i.Svg.prototype[e].apply(t, n);
          }), t;
        };
      });
    }
    i.Svg = i.Class.extend({
      constructor:n,
      attr:s,
      elem:r,
      parent:o,
      root:a,
      querySelector:l,
      querySelectorAll:c,
      getNode:u,
      foreignObject:h,
      text:d,
      empty:f,
      remove:p,
      replace:m,
      append:g,
      classes:v,
      addClass:y,
      removeClass:b,
      removeAllClasses:w,
      height:x,
      width:_,
      animate:S
    }), i.Svg.isSupported = function(e) {
      return t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#" + e, "1.1");
    };
    var T = {
      easeInSine:[ .47, 0, .745, .715 ],
      easeOutSine:[ .39, .575, .565, 1 ],
      easeInOutSine:[ .445, .05, .55, .95 ],
      easeInQuad:[ .55, .085, .68, .53 ],
      easeOutQuad:[ .25, .46, .45, .94 ],
      easeInOutQuad:[ .455, .03, .515, .955 ],
      easeInCubic:[ .55, .055, .675, .19 ],
      easeOutCubic:[ .215, .61, .355, 1 ],
      easeInOutCubic:[ .645, .045, .355, 1 ],
      easeInQuart:[ .895, .03, .685, .22 ],
      easeOutQuart:[ .165, .84, .44, 1 ],
      easeInOutQuart:[ .77, 0, .175, 1 ],
      easeInQuint:[ .755, .05, .855, .06 ],
      easeOutQuint:[ .23, 1, .32, 1 ],
      easeInOutQuint:[ .86, 0, .07, 1 ],
      easeInExpo:[ .95, .05, .795, .035 ],
      easeOutExpo:[ .19, 1, .22, 1 ],
      easeInOutExpo:[ 1, 0, 0, 1 ],
      easeInCirc:[ .6, .04, .98, .335 ],
      easeOutCirc:[ .075, .82, .165, 1 ],
      easeInOutCirc:[ .785, .135, .15, .86 ],
      easeInBack:[ .6, -.28, .735, .045 ],
      easeOutBack:[ .175, .885, .32, 1.275 ],
      easeInOutBack:[ .68, -.55, .265, 1.55 ]
    };
    i.Svg.Easing = T, i.Svg.List = i.Class.extend({
      constructor:C
    });
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e, t, n, s, r, o) {
      var a = i.extend({
        command:r ? e.toLowerCase() :e.toUpperCase()
      }, t, o ? {
        data:o
      } :{});
      n.splice(s, 0, a);
    }
    function s(e, t) {
      e.forEach(function(i, n) {
        w[i.command.toLowerCase()].forEach(function(s, r) {
          t(i, s, n, r, e);
        });
      });
    }
    function r(e, t) {
      this.pathElements = [], this.pos = 0, this.close = e, this.options = i.extend({}, x, t);
    }
    function o(e) {
      return e !== undefined ? (this.pos = Math.max(0, Math.min(this.pathElements.length, e)), 
      this) :this.pos;
    }
    function a(e) {
      return this.pathElements.splice(this.pos, e), this;
    }
    function l(e, t, i, s) {
      return n("M", {
        x:+e,
        y:+t
      }, this.pathElements, this.pos++, i, s), this;
    }
    function c(e, t, i, s) {
      return n("L", {
        x:+e,
        y:+t
      }, this.pathElements, this.pos++, i, s), this;
    }
    function u(e, t, i, s, r, o, a, l) {
      return n("C", {
        x1:+e,
        y1:+t,
        x2:+i,
        y2:+s,
        x:+r,
        y:+o
      }, this.pathElements, this.pos++, a, l), this;
    }
    function h(e, t, i, s, r, o, a, l, c) {
      return n("A", {
        rx:+e,
        ry:+t,
        xAr:+i,
        lAf:+s,
        sf:+r,
        x:+o,
        y:+a
      }, this.pathElements, this.pos++, l, c), this;
    }
    function d(e) {
      var t = e.replace(/([A-Za-z])([0-9])/g, "$1 $2").replace(/([0-9])([A-Za-z])/g, "$1 $2").split(/[\s,]+/).reduce(function(e, t) {
        return t.match(/[A-Za-z]/) && e.push([]), e[e.length - 1].push(t), e;
      }, []);
      "Z" === t[t.length - 1][0].toUpperCase() && t.pop();
      var n = t.map(function(e) {
        var t = e.shift(), n = w[t.toLowerCase()];
        return i.extend({
          command:t
        }, n.reduce(function(t, i, n) {
          return t[i] = +e[n], t;
        }, {}));
      }), s = [ this.pos, 0 ];
      return Array.prototype.push.apply(s, n), Array.prototype.splice.apply(this.pathElements, s), 
      this.pos += n.length, this;
    }
    function f() {
      var e = Math.pow(10, this.options.accuracy);
      return this.pathElements.reduce(function(t, i) {
        var n = w[i.command.toLowerCase()].map(function(t) {
          return this.options.accuracy ? Math.round(i[t] * e) / e :i[t];
        }.bind(this));
        return t + i.command + n.join(",");
      }.bind(this), "") + (this.close ? "Z" :"");
    }
    function p(e, t) {
      return s(this.pathElements, function(i, n) {
        i[n] *= "x" === n[0] ? e :t;
      }), this;
    }
    function m(e, t) {
      return s(this.pathElements, function(i, n) {
        i[n] += "x" === n[0] ? e :t;
      }), this;
    }
    function g(e) {
      return s(this.pathElements, function(t, i, n, s, r) {
        var o = e(t, i, n, s, r);
        (o || 0 === o) && (t[i] = o);
      }), this;
    }
    function v(e) {
      var t = new i.Svg.Path(e || this.close);
      return t.pos = this.pos, t.pathElements = this.pathElements.slice().map(function(e) {
        return i.extend({}, e);
      }), t.options = i.extend({}, this.options), t;
    }
    function y(e) {
      var t = [ new i.Svg.Path() ];
      return this.pathElements.forEach(function(n) {
        n.command === e.toUpperCase() && 0 !== t[t.length - 1].pathElements.length && t.push(new i.Svg.Path()), 
        t[t.length - 1].pathElements.push(n);
      }), t;
    }
    function b(e, t, n) {
      for (var s = new i.Svg.Path(t, n), r = 0; r < e.length; r++) for (var o = e[r], a = 0; a < o.pathElements.length; a++) s.pathElements.push(o.pathElements[a]);
      return s;
    }
    var w = {
      m:[ "x", "y" ],
      l:[ "x", "y" ],
      c:[ "x1", "y1", "x2", "y2", "x", "y" ],
      a:[ "rx", "ry", "xAr", "lAf", "sf", "x", "y" ]
    }, x = {
      accuracy:3
    };
    i.Svg.Path = i.Class.extend({
      constructor:r,
      position:o,
      remove:a,
      move:l,
      line:c,
      curve:u,
      arc:h,
      scale:p,
      translate:m,
      transform:g,
      parse:d,
      stringify:f,
      clone:v,
      splitByCommand:y
    }), i.Svg.Path.elementDescriptions = w, i.Svg.Path.join = b;
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e, t, i, n) {
      this.units = e, this.counterUnits = e === r.x ? r.y :r.x, this.chartRect = t, this.axisLength = t[e.rectEnd] - t[e.rectStart], 
      this.gridOffset = t[e.rectOffset], this.ticks = i, this.options = n;
    }
    function s(e, t, n, s, r) {
      var o = s["axis" + this.units.pos.toUpperCase()], a = this.ticks.map(this.projectValue.bind(this)), l = this.ticks.map(o.labelInterpolationFnc);
      a.forEach(function(c, u) {
        var h, d = {
          x:0,
          y:0
        };
        h = a[u + 1] ? a[u + 1] - c :Math.max(this.axisLength - c, 30), i.isFalseyButZero(l[u]) && "" !== l[u] || ("x" === this.units.pos ? (c = this.chartRect.x1 + c, 
        d.x = s.axisX.labelOffset.x, "start" === s.axisX.position ? d.y = this.chartRect.padding.top + s.axisX.labelOffset.y + (n ? 5 :20) :d.y = this.chartRect.y1 + s.axisX.labelOffset.y + (n ? 5 :20)) :(c = this.chartRect.y1 - c, 
        d.y = s.axisY.labelOffset.y - (n ? h :0), "start" === s.axisY.position ? d.x = n ? this.chartRect.padding.left + s.axisY.labelOffset.x :this.chartRect.x1 - 10 :d.x = this.chartRect.x2 + s.axisY.labelOffset.x + 10), 
        o.showGrid && i.createGrid(c, u, this, this.gridOffset, this.chartRect[this.counterUnits.len](), e, [ s.classNames.grid, s.classNames[this.units.dir] ], r), 
        o.showLabel && i.createLabel(c, h, u, l, this, o.offset, d, t, [ s.classNames.label, s.classNames[this.units.dir], "start" === o.position ? s.classNames[o.position] :s.classNames.end ], n, r));
      }.bind(this));
    }
    var r = {
      x:{
        pos:"x",
        len:"width",
        dir:"horizontal",
        rectStart:"x1",
        rectEnd:"x2",
        rectOffset:"y2"
      },
      y:{
        pos:"y",
        len:"height",
        dir:"vertical",
        rectStart:"y2",
        rectEnd:"y1",
        rectOffset:"x1"
      }
    };
    i.Axis = i.Class.extend({
      constructor:n,
      createGridAndLabels:s,
      projectValue:function() {
        throw new Error("Base axis can't be instantiated!");
      }
    }), i.Axis.units = r;
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e, t, n, s) {
      var r = s.highLow || i.getHighLow(t, s, e.pos);
      this.bounds = i.getBounds(n[e.rectEnd] - n[e.rectStart], r, s.scaleMinSpace || 20, s.onlyInteger), 
      this.range = {
        min:this.bounds.min,
        max:this.bounds.max
      }, i.AutoScaleAxis["super"].constructor.call(this, e, n, this.bounds.values, s);
    }
    function s(e) {
      return this.axisLength * (+i.getMultiValue(e, this.units.pos) - this.bounds.min) / this.bounds.range;
    }
    i.AutoScaleAxis = i.Axis.extend({
      constructor:n,
      projectValue:s
    });
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e, t, n, s) {
      var r = s.highLow || i.getHighLow(t, s, e.pos);
      this.divisor = s.divisor || 1, this.ticks = s.ticks || i.times(this.divisor).map(function(e, t) {
        return r.low + (r.high - r.low) / this.divisor * t;
      }.bind(this)), this.ticks.sort(function(e, t) {
        return e - t;
      }), this.range = {
        min:r.low,
        max:r.high
      }, i.FixedScaleAxis["super"].constructor.call(this, e, n, this.ticks, s), this.stepLength = this.axisLength / this.divisor;
    }
    function s(e) {
      return this.axisLength * (+i.getMultiValue(e, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
    }
    i.FixedScaleAxis = i.Axis.extend({
      constructor:n,
      projectValue:s
    });
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e, t, n, s) {
      i.StepAxis["super"].constructor.call(this, e, n, s.ticks, s);
      var r = Math.max(1, s.ticks.length - (s.stretch ? 1 :0));
      this.stepLength = this.axisLength / r;
    }
    function s(e, t) {
      return this.stepLength * t;
    }
    i.StepAxis = i.Axis.extend({
      constructor:n,
      projectValue:s
    });
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e) {
      var t = i.normalizeData(this.data, e.reverseData, !0);
      this.svg = i.createSvg(this.container, e.width, e.height, e.classNames.chart);
      var n, s, o = this.svg.elem("g").addClass(e.classNames.gridGroup), a = this.svg.elem("g"), l = this.svg.elem("g").addClass(e.classNames.labelGroup), c = i.createChartRect(this.svg, e, r.padding);
      n = e.axisX.type === undefined ? new i.StepAxis(i.Axis.units.x, t.normalized.series, c, i.extend({}, e.axisX, {
        ticks:t.normalized.labels,
        stretch:e.fullWidth
      })) :e.axisX.type.call(i, i.Axis.units.x, t.normalized.series, c, e.axisX), s = e.axisY.type === undefined ? new i.AutoScaleAxis(i.Axis.units.y, t.normalized.series, c, i.extend({}, e.axisY, {
        high:i.isNumeric(e.high) ? e.high :e.axisY.high,
        low:i.isNumeric(e.low) ? e.low :e.axisY.low
      })) :e.axisY.type.call(i, i.Axis.units.y, t.normalized.series, c, e.axisY), n.createGridAndLabels(o, l, this.supportsForeignObject, e, this.eventEmitter), 
      s.createGridAndLabels(o, l, this.supportsForeignObject, e, this.eventEmitter), e.showGridBackground && i.createGridBackground(o, c, e.classNames.gridBackground, this.eventEmitter), 
      t.raw.series.forEach(function(r, o) {
        var l = a.elem("g");
        l.attr({
          "ct:series-name":r.name,
          "ct:meta":i.serialize(r.meta)
        }), l.addClass([ e.classNames.series, r.className || e.classNames.series + "-" + i.alphaNumerate(o) ].join(" "));
        var u = [], h = [];
        t.normalized.series[o].forEach(function(e, a) {
          var l = {
            x:c.x1 + n.projectValue(e, a, t.normalized.series[o]),
            y:c.y1 - s.projectValue(e, a, t.normalized.series[o])
          };
          u.push(l.x, l.y), h.push({
            value:e,
            valueIndex:a,
            meta:i.getMetaData(r, a)
          });
        }.bind(this));
        var d = {
          lineSmooth:i.getSeriesOption(r, e, "lineSmooth"),
          showPoint:i.getSeriesOption(r, e, "showPoint"),
          showLine:i.getSeriesOption(r, e, "showLine"),
          showArea:i.getSeriesOption(r, e, "showArea"),
          areaBase:i.getSeriesOption(r, e, "areaBase")
        }, f = "function" == typeof d.lineSmooth ? d.lineSmooth :d.lineSmooth ? i.Interpolation.monotoneCubic() :i.Interpolation.none(), p = f(u, h);
        if (d.showPoint && p.pathElements.forEach(function(t) {
          var a = l.elem("line", {
            x1:t.x,
            y1:t.y,
            x2:t.x + .01,
            y2:t.y
          }, e.classNames.point).attr({
            "ct:value":[ t.data.value.x, t.data.value.y ].filter(i.isNumeric).join(","),
            "ct:meta":i.serialize(t.data.meta)
          });
          this.eventEmitter.emit("draw", {
            type:"point",
            value:t.data.value,
            index:t.data.valueIndex,
            meta:t.data.meta,
            series:r,
            seriesIndex:o,
            axisX:n,
            axisY:s,
            group:l,
            element:a,
            x:t.x,
            y:t.y
          });
        }.bind(this)), d.showLine) {
          var m = l.elem("path", {
            d:p.stringify()
          }, e.classNames.line, !0);
          this.eventEmitter.emit("draw", {
            type:"line",
            values:t.normalized.series[o],
            path:p.clone(),
            chartRect:c,
            index:o,
            series:r,
            seriesIndex:o,
            seriesMeta:r.meta,
            axisX:n,
            axisY:s,
            group:l,
            element:m
          });
        }
        if (d.showArea && s.range) {
          var g = Math.max(Math.min(d.areaBase, s.range.max), s.range.min), v = c.y1 - s.projectValue(g);
          p.splitByCommand("M").filter(function(e) {
            return e.pathElements.length > 1;
          }).map(function(e) {
            var t = e.pathElements[0], i = e.pathElements[e.pathElements.length - 1];
            return e.clone(!0).position(0).remove(1).move(t.x, v).line(t.x, t.y).position(e.pathElements.length + 1).line(i.x, v);
          }).forEach(function(i) {
            var a = l.elem("path", {
              d:i.stringify()
            }, e.classNames.area, !0);
            this.eventEmitter.emit("draw", {
              type:"area",
              values:t.normalized.series[o],
              path:i.clone(),
              series:r,
              seriesIndex:o,
              axisX:n,
              axisY:s,
              chartRect:c,
              index:o,
              group:l,
              element:a
            });
          }.bind(this));
        }
      }.bind(this)), this.eventEmitter.emit("created", {
        bounds:s.bounds,
        chartRect:c,
        axisX:n,
        axisY:s,
        svg:this.svg,
        options:e
      });
    }
    function s(e, t, n, s) {
      i.Line["super"].constructor.call(this, e, t, r, i.extend({}, r, n), s);
    }
    var r = {
      axisX:{
        offset:30,
        position:"end",
        labelOffset:{
          x:0,
          y:0
        },
        showLabel:!0,
        showGrid:!0,
        labelInterpolationFnc:i.noop,
        type:undefined
      },
      axisY:{
        offset:40,
        position:"start",
        labelOffset:{
          x:0,
          y:0
        },
        showLabel:!0,
        showGrid:!0,
        labelInterpolationFnc:i.noop,
        type:undefined,
        scaleMinSpace:20,
        onlyInteger:!1
      },
      width:undefined,
      height:undefined,
      showLine:!0,
      showPoint:!0,
      showArea:!1,
      areaBase:0,
      lineSmooth:!0,
      showGridBackground:!1,
      low:undefined,
      high:undefined,
      chartPadding:{
        top:15,
        right:15,
        bottom:5,
        left:10
      },
      fullWidth:!1,
      reverseData:!1,
      classNames:{
        chart:"ct-chart-line",
        label:"ct-label",
        labelGroup:"ct-labels",
        series:"ct-series",
        line:"ct-line",
        point:"ct-point",
        area:"ct-area",
        grid:"ct-grid",
        gridGroup:"ct-grids",
        gridBackground:"ct-grid-background",
        vertical:"ct-vertical",
        horizontal:"ct-horizontal",
        start:"ct-start",
        end:"ct-end"
      }
    };
    i.Line = i.Base.extend({
      constructor:s,
      createChart:n
    });
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e) {
      var t, n;
      e.distributeSeries ? (t = i.normalizeData(this.data, e.reverseData, e.horizontalBars ? "x" :"y"), 
      t.normalized.series = t.normalized.series.map(function(e) {
        return [ e ];
      })) :t = i.normalizeData(this.data, e.reverseData, e.horizontalBars ? "x" :"y"), 
      this.svg = i.createSvg(this.container, e.width, e.height, e.classNames.chart + (e.horizontalBars ? " " + e.classNames.horizontalBars :""));
      var s = this.svg.elem("g").addClass(e.classNames.gridGroup), o = this.svg.elem("g"), a = this.svg.elem("g").addClass(e.classNames.labelGroup);
      if (e.stackBars && 0 !== t.normalized.series.length) {
        var l = i.serialMap(t.normalized.series, function() {
          return Array.prototype.slice.call(arguments).map(function(e) {
            return e;
          }).reduce(function(e, t) {
            return {
              x:e.x + (t && t.x) || 0,
              y:e.y + (t && t.y) || 0
            };
          }, {
            x:0,
            y:0
          });
        });
        n = i.getHighLow([ l ], e, e.horizontalBars ? "x" :"y");
      } else n = i.getHighLow(t.normalized.series, e, e.horizontalBars ? "x" :"y");
      n.high = +e.high || (0 === e.high ? 0 :n.high), n.low = +e.low || (0 === e.low ? 0 :n.low);
      var c, u, h, d, f, p = i.createChartRect(this.svg, e, r.padding);
      u = e.distributeSeries && e.stackBars ? t.normalized.labels.slice(0, 1) :t.normalized.labels, 
      e.horizontalBars ? (c = d = e.axisX.type === undefined ? new i.AutoScaleAxis(i.Axis.units.x, t.normalized.series, p, i.extend({}, e.axisX, {
        highLow:n,
        referenceValue:0
      })) :e.axisX.type.call(i, i.Axis.units.x, t.normalized.series, p, i.extend({}, e.axisX, {
        highLow:n,
        referenceValue:0
      })), h = f = e.axisY.type === undefined ? new i.StepAxis(i.Axis.units.y, t.normalized.series, p, {
        ticks:u
      }) :e.axisY.type.call(i, i.Axis.units.y, t.normalized.series, p, e.axisY)) :(h = d = e.axisX.type === undefined ? new i.StepAxis(i.Axis.units.x, t.normalized.series, p, {
        ticks:u
      }) :e.axisX.type.call(i, i.Axis.units.x, t.normalized.series, p, e.axisX), c = f = e.axisY.type === undefined ? new i.AutoScaleAxis(i.Axis.units.y, t.normalized.series, p, i.extend({}, e.axisY, {
        highLow:n,
        referenceValue:0
      })) :e.axisY.type.call(i, i.Axis.units.y, t.normalized.series, p, i.extend({}, e.axisY, {
        highLow:n,
        referenceValue:0
      })));
      var m = e.horizontalBars ? p.x1 + c.projectValue(0) :p.y1 - c.projectValue(0), g = [];
      h.createGridAndLabels(s, a, this.supportsForeignObject, e, this.eventEmitter), c.createGridAndLabels(s, a, this.supportsForeignObject, e, this.eventEmitter), 
      e.showGridBackground && i.createGridBackground(s, p, e.classNames.gridBackground, this.eventEmitter), 
      t.raw.series.forEach(function(n, s) {
        var r, a, l = s - (t.raw.series.length - 1) / 2;
        r = e.distributeSeries && !e.stackBars ? h.axisLength / t.normalized.series.length / 2 :e.distributeSeries && e.stackBars ? h.axisLength / 2 :h.axisLength / t.normalized.series[s].length / 2, 
        a = o.elem("g"), a.attr({
          "ct:series-name":n.name,
          "ct:meta":i.serialize(n.meta)
        }), a.addClass([ e.classNames.series, n.className || e.classNames.series + "-" + i.alphaNumerate(s) ].join(" ")), 
        t.normalized.series[s].forEach(function(o, u) {
          var v, y, b, w;
          if (w = e.distributeSeries && !e.stackBars ? s :e.distributeSeries && e.stackBars ? 0 :u, 
          v = e.horizontalBars ? {
            x:p.x1 + c.projectValue(o && o.x ? o.x :0, u, t.normalized.series[s]),
            y:p.y1 - h.projectValue(o && o.y ? o.y :0, w, t.normalized.series[s])
          } :{
            x:p.x1 + h.projectValue(o && o.x ? o.x :0, w, t.normalized.series[s]),
            y:p.y1 - c.projectValue(o && o.y ? o.y :0, u, t.normalized.series[s])
          }, h instanceof i.StepAxis && (h.options.stretch || (v[h.units.pos] += r * (e.horizontalBars ? -1 :1)), 
          v[h.units.pos] += e.stackBars || e.distributeSeries ? 0 :l * e.seriesBarDistance * (e.horizontalBars ? -1 :1)), 
          b = g[u] || m, g[u] = b - (m - v[h.counterUnits.pos]), o !== undefined) {
            var x = {};
            x[h.units.pos + "1"] = v[h.units.pos], x[h.units.pos + "2"] = v[h.units.pos], !e.stackBars || "accumulate" !== e.stackMode && e.stackMode ? (x[h.counterUnits.pos + "1"] = m, 
            x[h.counterUnits.pos + "2"] = v[h.counterUnits.pos]) :(x[h.counterUnits.pos + "1"] = b, 
            x[h.counterUnits.pos + "2"] = g[u]), x.x1 = Math.min(Math.max(x.x1, p.x1), p.x2), 
            x.x2 = Math.min(Math.max(x.x2, p.x1), p.x2), x.y1 = Math.min(Math.max(x.y1, p.y2), p.y1), 
            x.y2 = Math.min(Math.max(x.y2, p.y2), p.y1);
            var _ = i.getMetaData(n, u);
            y = a.elem("line", x, e.classNames.bar).attr({
              "ct:value":[ o.x, o.y ].filter(i.isNumeric).join(","),
              "ct:meta":i.serialize(_)
            }), this.eventEmitter.emit("draw", i.extend({
              type:"bar",
              value:o,
              index:u,
              meta:_,
              series:n,
              seriesIndex:s,
              axisX:d,
              axisY:f,
              chartRect:p,
              group:a,
              element:y
            }, x));
          }
        }.bind(this));
      }.bind(this)), this.eventEmitter.emit("created", {
        bounds:c.bounds,
        chartRect:p,
        axisX:d,
        axisY:f,
        svg:this.svg,
        options:e
      });
    }
    function s(e, t, n, s) {
      i.Bar["super"].constructor.call(this, e, t, r, i.extend({}, r, n), s);
    }
    var r = {
      axisX:{
        offset:30,
        position:"end",
        labelOffset:{
          x:0,
          y:0
        },
        showLabel:!0,
        showGrid:!0,
        labelInterpolationFnc:i.noop,
        scaleMinSpace:30,
        onlyInteger:!1
      },
      axisY:{
        offset:40,
        position:"start",
        labelOffset:{
          x:0,
          y:0
        },
        showLabel:!0,
        showGrid:!0,
        labelInterpolationFnc:i.noop,
        scaleMinSpace:20,
        onlyInteger:!1
      },
      width:undefined,
      height:undefined,
      high:undefined,
      low:undefined,
      referenceValue:0,
      chartPadding:{
        top:15,
        right:15,
        bottom:5,
        left:10
      },
      seriesBarDistance:15,
      stackBars:!1,
      stackMode:"accumulate",
      horizontalBars:!1,
      distributeSeries:!1,
      reverseData:!1,
      showGridBackground:!1,
      classNames:{
        chart:"ct-chart-bar",
        horizontalBars:"ct-horizontal-bars",
        label:"ct-label",
        labelGroup:"ct-labels",
        series:"ct-series",
        bar:"ct-bar",
        grid:"ct-grid",
        gridGroup:"ct-grids",
        gridBackground:"ct-grid-background",
        vertical:"ct-vertical",
        horizontal:"ct-horizontal",
        start:"ct-start",
        end:"ct-end"
      }
    };
    i.Bar = i.Base.extend({
      constructor:s,
      createChart:n
    });
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e, t, i) {
      var n = t.x > e.x;
      return n && "explode" === i || !n && "implode" === i ? "start" :n && "implode" === i || !n && "explode" === i ? "end" :"middle";
    }
    function s(e) {
      var t, s, r, a, l, c = i.normalizeData(this.data), u = [], h = e.startAngle;
      this.svg = i.createSvg(this.container, e.width, e.height, e.donut ? e.classNames.chartDonut :e.classNames.chartPie), 
      s = i.createChartRect(this.svg, e, o.padding), r = Math.min(s.width() / 2, s.height() / 2), 
      l = e.total || c.normalized.series.reduce(function(e, t) {
        return e + t;
      }, 0);
      var d = i.quantity(e.donutWidth);
      "%" === d.unit && (d.value *= r / 100), r -= e.donut ? d.value / 2 :0, a = "outside" === e.labelPosition || e.donut ? r :"center" === e.labelPosition ? 0 :r / 2, 
      a += e.labelOffset;
      var f = {
        x:s.x1 + s.width() / 2,
        y:s.y2 + s.height() / 2
      }, p = 1 === c.raw.series.filter(function(e) {
        return e.hasOwnProperty("value") ? 0 !== e.value :0 !== e;
      }).length;
      c.raw.series.forEach(function(e, t) {
        u[t] = this.svg.elem("g", null, null);
      }.bind(this)), e.showLabel && (t = this.svg.elem("g", null, null)), c.raw.series.forEach(function(s, o) {
        if (0 !== c.normalized.series[o] || !e.ignoreEmptyValues) {
          u[o].attr({
            "ct:series-name":s.name
          }), u[o].addClass([ e.classNames.series, s.className || e.classNames.series + "-" + i.alphaNumerate(o) ].join(" "));
          var m = l > 0 ? h + c.normalized.series[o] / l * 360 :0, g = Math.max(0, h - (0 === o || p ? 0 :.2));
          m - g >= 359.99 && (m = g + 359.99);
          var v = i.polarToCartesian(f.x, f.y, r, g), y = i.polarToCartesian(f.x, f.y, r, m), b = new i.Svg.Path(!e.donut).move(y.x, y.y).arc(r, r, 0, m - h > 180, 0, v.x, v.y);
          e.donut || b.line(f.x, f.y);
          var w = u[o].elem("path", {
            d:b.stringify()
          }, e.donut ? e.classNames.sliceDonut :e.classNames.slicePie);
          if (w.attr({
            "ct:value":c.normalized.series[o],
            "ct:meta":i.serialize(s.meta)
          }), e.donut && w.attr({
            style:"stroke-width: " + d.value + "px"
          }), this.eventEmitter.emit("draw", {
            type:"slice",
            value:c.normalized.series[o],
            totalDataSum:l,
            index:o,
            meta:s.meta,
            series:s,
            group:u[o],
            element:w,
            path:b.clone(),
            center:f,
            radius:r,
            startAngle:h,
            endAngle:m
          }), e.showLabel) {
            var x;
            x = 1 === c.raw.series.length ? {
              x:f.x,
              y:f.y
            } :i.polarToCartesian(f.x, f.y, a, h + (m - h) / 2);
            var _;
            _ = c.normalized.labels && !i.isFalseyButZero(c.normalized.labels[o]) ? c.normalized.labels[o] :c.normalized.series[o];
            var S = e.labelInterpolationFnc(_, o);
            if (S || 0 === S) {
              var C = t.elem("text", {
                dx:x.x,
                dy:x.y,
                "text-anchor":n(f, x, e.labelDirection)
              }, e.classNames.label).text("" + S);
              this.eventEmitter.emit("draw", {
                type:"label",
                index:o,
                group:t,
                element:C,
                text:"" + S,
                x:x.x,
                y:x.y
              });
            }
          }
          h = m;
        }
      }.bind(this)), this.eventEmitter.emit("created", {
        chartRect:s,
        svg:this.svg,
        options:e
      });
    }
    function r(e, t, n, s) {
      i.Pie["super"].constructor.call(this, e, t, o, i.extend({}, o, n), s);
    }
    var o = {
      width:undefined,
      height:undefined,
      chartPadding:5,
      classNames:{
        chartPie:"ct-chart-pie",
        chartDonut:"ct-chart-donut",
        series:"ct-series",
        slicePie:"ct-slice-pie",
        sliceDonut:"ct-slice-donut",
        label:"ct-label"
      },
      startAngle:0,
      total:undefined,
      donut:!1,
      donutWidth:60,
      showLabel:!0,
      labelOffset:0,
      labelPosition:"inside",
      labelInterpolationFnc:i.noop,
      labelDirection:"neutral",
      reverseData:!1,
      ignoreEmptyValues:!1
    };
    i.Pie = i.Base.extend({
      constructor:r,
      createChart:s,
      determineAnchorPosition:n
    });
  }(window, document, e), e;
}), function(e, t) {
  "function" == typeof define && define.amd ? define([ "chartist" ], function(i) {
    return e.returnExportsGlobal = t(i);
  }) :"object" == typeof exports ? module.exports = t(require("chartist")) :e["Chartist.plugins.tooltips"] = t(Chartist);
}(this, function(e) {
  return function(e, t, i) {
    "use strict";
    function n(e) {
      r(e, "tooltip-show") || (e.className = e.className + " tooltip-show");
    }
    function s(e) {
      var t = new RegExp("tooltip-show\\s*", "gi");
      e.className = e.className.replace(t, "").trim();
    }
    function r(e, t) {
      return (" " + e.getAttribute("class") + " ").indexOf(" " + t + " ") > -1;
    }
    function o(e, t) {
      do {
        e = e.nextSibling;
      } while (e && !r(e, t));
      return e;
    }
    function a(e) {
      return e.innerText || e.textContent;
    }
    var l = {
      currency:undefined,
      currencyFormatCallback:undefined,
      tooltipOffset:{
        x:0,
        y:-20
      },
      anchorToPoint:!1,
      appendToBody:!1,
      "class":undefined,
      pointClass:"ct-point"
    };
    i.plugins = i.plugins || {}, i.plugins.tooltip = function(c) {
      return c = i.extend({}, l, c), function(l) {
        function u(e, t, i) {
          f.addEventListener(e, function(e) {
            t && !r(e.target, t) || i(e);
          });
        }
        function h(t) {
          m = m || p.offsetHeight, g = g || p.offsetWidth;
          var i, n, s = -g / 2 + c.tooltipOffset.x, r = -m + c.tooltipOffset.y;
          if (c.appendToBody) p.style.top = t.pageY + r + "px", p.style.left = t.pageX + s + "px"; else {
            var o = f.getBoundingClientRect(), a = t.pageX - o.left - e.pageXOffset, l = t.pageY - o.top - e.pageYOffset;
            !0 === c.anchorToPoint && t.target.x2 && t.target.y2 && (i = parseInt(t.target.x2.baseVal.value), 
            n = parseInt(t.target.y2.baseVal.value)), p.style.top = (n || l) + r + "px", p.style.left = (i || a) + s + "px";
          }
        }
        var d = c.pointClass;
        l instanceof i.Bar ? d = "ct-bar" :l instanceof i.Pie && (d = l.options.donut ? "ct-slice-donut" :"ct-slice-pie");
        var f = l.container, p = f.querySelector(".chartist-tooltip");
        p || (p = t.createElement("div"), p.className = c["class"] ? "chartist-tooltip " + c["class"] :"chartist-tooltip", 
        c.appendToBody ? t.body.appendChild(p) :f.appendChild(p));
        var m = p.offsetHeight, g = p.offsetWidth;
        s(p), u("mouseover", d, function(e) {
          var s = e.target, r = "", u = l instanceof i.Pie ? s :s.parentNode, d = u ? s.parentNode.getAttribute("ct:meta") || s.parentNode.getAttribute("ct:series-name") :"", f = s.getAttribute("ct:meta") || d || "", v = !!f, y = s.getAttribute("ct:value");
          if (c.transformTooltipTextFnc && "function" == typeof c.transformTooltipTextFnc && (y = c.transformTooltipTextFnc(y)), 
          c.tooltipFnc && "function" == typeof c.tooltipFnc) r = c.tooltipFnc(f, y); else {
            if (c.metaIsHTML) {
              var b = t.createElement("textarea");
              b.innerHTML = f, f = b.value;
            }
            if (f = '<span class="chartist-tooltip-meta">' + f + "</span>", v) r += f + "<br>"; else if (l instanceof i.Pie) {
              var w = o(s, "ct-label");
              w && (r += a(w) + "<br>");
            }
            y && (c.currency && (y = c.currencyFormatCallback != undefined ? c.currencyFormatCallback(y, c) :c.currency + y.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")), 
            y = '<span class="chartist-tooltip-value">' + y + "</span>", r += y);
          }
          r && (p.innerHTML = r, h(e), n(p), m = p.offsetHeight, g = p.offsetWidth);
        }), u("mouseout", d, function() {
          s(p);
        }), u("mousemove", null, function(e) {
          !1 === c.anchorToPoint && h(e);
        });
      };
    };
  }(window, document, e), e.plugins.tooltips;
});

var Hogan = {};

!function(e, t) {
  function i(e, t, i) {
    var n;
    return t && "object" == typeof t && (null != t[e] ? n = t[e] :i && t.get && "function" == typeof t.get && (n = t.get(e))), 
    n;
  }
  function n(e, t, i, n) {
    function s() {}
    function r() {}
    s.prototype = e, r.prototype = e.subs;
    var o, a = new s();
    a.subs = new r(), a.subsText = {}, a.ib();
    for (o in t) a.subs[o] = t[o], a.subsText[o] = n;
    for (o in i) a.partials[o] = i[o];
    return a;
  }
  function s(e) {
    return String(null === e || e === undefined ? "" :e);
  }
  function r(e) {
    return e = s(e), h.test(e) ? e.replace(o, "&amp;").replace(a, "&lt;").replace(l, "&gt;").replace(c, "&#39;").replace(u, "&quot;") :e;
  }
  e.Template = function(e, t, i, n) {
    e = e || {}, this.r = e.code || this.r, this.c = i, this.options = n || {}, this.text = t || "", 
    this.partials = e.partials || {}, this.subs = e.subs || {}, this.ib();
  }, e.Template.prototype = {
    r:function() {
      return "";
    },
    v:r,
    t:s,
    render:function(e, t, i) {
      return this.ri([ e ], t || {}, i);
    },
    ri:function(e, t, i) {
      return this.r(e, t, i);
    },
    ep:function(e, t) {
      var i = this.partials[e], s = t[i.name];
      if (i.instance && i.base == s) return i.instance;
      if ("string" == typeof s) {
        if (!this.c) throw new Error("No compiler available.");
        s = this.c.compile(s, this.options);
      }
      return s ? (this.partials[e].base = s, i.subs && (this.activeSub === undefined && (t.stackText = this.text), 
      s = n(s, i.subs, i.partials, t.stackText || this.text)), this.partials[e].instance = s, 
      s) :null;
    },
    rp:function(e, t, i, n) {
      var s = this.ep(e, i);
      return s ? s.ri(t, i, n) :"";
    },
    rs:function(e, t, i) {
      var n = e[e.length - 1];
      if (!d(n)) return void i(e, t, this);
      for (var s = 0; s < n.length; s++) e.push(n[s]), i(e, t, this), e.pop();
    },
    s:function(e, t, i, n, s, r, o) {
      var a;
      return (!d(e) || 0 !== e.length) && ("function" == typeof e && (e = this.ms(e, t, i, n, s, r, o)), 
      a = !!e, !n && a && t && t.push("object" == typeof e ? e :t[t.length - 1]), a);
    },
    d:function(e, t, n, s) {
      var r, o = e.split("."), a = this.f(o[0], t, n, s), l = this.options.modelGet, c = null;
      if ("." === e && d(t[t.length - 2])) a = t[t.length - 1]; else for (var u = 1; u < o.length; u++) r = i(o[u], a, l), 
      null != r ? (c = a, a = r) :a = "";
      return !(s && !a) && (s || "function" != typeof a || (t.push(c), a = this.mv(a, t, n), 
      t.pop()), a);
    },
    f:function(e, t, n, s) {
      for (var r = !1, o = null, a = !1, l = this.options.modelGet, c = t.length - 1; c >= 0; c--) if (o = t[c], 
      null != (r = i(e, o, l))) {
        a = !0;
        break;
      }
      return a ? (s || "function" != typeof r || (r = this.mv(r, t, n)), r) :!s && "";
    },
    ls:function(e, t, i, n, r) {
      var o = this.options.delimiters;
      return this.options.delimiters = r, this.b(this.ct(s(e.call(t, n)), t, i)), this.options.delimiters = o, 
      !1;
    },
    ct:function(e, t, i) {
      if (this.options.disableLambda) throw new Error("Lambda features disabled.");
      return this.c.compile(e, this.options).render(t, i);
    },
    b:t ? function(e) {
      this.buf.push(e);
    } :function(e) {
      this.buf += e;
    },
    fl:t ? function() {
      var e = this.buf.join("");
      return this.buf = [], e;
    } :function() {
      var e = this.buf;
      return this.buf = "", e;
    },
    ib:function() {
      this.buf = t ? [] :"";
    },
    ms:function(e, t, i, n, s, r, o) {
      var a, l = t[t.length - 1], c = e.call(l);
      return "function" == typeof c ? !!n || (a = this.activeSub && this.subsText[this.activeSub] ? this.subsText[this.activeSub] :this.text, 
      this.ls(c, l, i, a.substring(s, r), o)) :c;
    },
    mv:function(e, t, i) {
      var n = t[t.length - 1], r = e.call(n);
      return "function" == typeof r ? this.ct(s(r.call(n)), n, i) :r;
    },
    sub:function(e, t, i, n) {
      var s = this.subs[e];
      s && (this.activeSub = e, s(t, i, this, n), this.activeSub = !1);
    }
  };
  var o = /&/g, a = /</g, l = />/g, c = /\'/g, u = /\"/g, h = /[&<>\"\']/, d = Array.isArray || function(e) {
    return "[object Array]" === Object.prototype.toString.call(e);
  };
}("undefined" != typeof exports ? exports :Hogan), function(e) {
  function t(e) {
    "}" === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1));
  }
  function i(e) {
    return e.trim ? e.trim() :e.replace(/^\s*|\s*$/g, "");
  }
  function n(e, t, i) {
    if (t.charAt(i) != e.charAt(0)) return !1;
    for (var n = 1, s = e.length; n < s; n++) if (t.charAt(i + n) != e.charAt(n)) return !1;
    return !0;
  }
  function s(t, i, n, a) {
    var l = [], c = null, u = null, h = null;
    for (u = n[n.length - 1]; t.length > 0; ) {
      if (h = t.shift(), u && "<" == u.tag && !(h.tag in b)) throw new Error("Illegal content in < super tag.");
      if (e.tags[h.tag] <= e.tags.$ || r(h, a)) n.push(h), h.nodes = s(t, h.tag, n, a); else {
        if ("/" == h.tag) {
          if (0 === n.length) throw new Error("Closing tag without opener: /" + h.n);
          if (c = n.pop(), h.n != c.n && !o(h.n, c.n, a)) throw new Error("Nesting error: " + c.n + " vs. " + h.n);
          return c.end = h.i, l;
        }
        "\n" == h.tag && (h.last = 0 == t.length || "\n" == t[0].tag);
      }
      l.push(h);
    }
    if (n.length > 0) throw new Error("missing closing tag: " + n.pop().n);
    return l;
  }
  function r(e, t) {
    for (var i = 0, n = t.length; i < n; i++) if (t[i].o == e.n) return e.tag = "#", 
    !0;
  }
  function o(e, t, i) {
    for (var n = 0, s = i.length; n < s; n++) if (i[n].c == e && i[n].o == t) return !0;
  }
  function a(e) {
    var t = [];
    for (var i in e) t.push('"' + c(i) + '": function(c,p,t,i) {' + e[i] + "}");
    return "{ " + t.join(",") + " }";
  }
  function l(e) {
    var t = [];
    for (var i in e.partials) t.push('"' + c(i) + '":{name:"' + c(e.partials[i].name) + '", ' + l(e.partials[i]) + "}");
    return "partials: {" + t.join(",") + "}, subs: " + a(e.subs);
  }
  function c(e) {
    return e.replace(y, "\\\\").replace(m, '\\"').replace(g, "\\n").replace(v, "\\r");
  }
  function u(e) {
    return ~e.indexOf(".") ? "d" :"f";
  }
  function h(e, t) {
    var i = "<" + (t.prefix || ""), n = i + e.n + w++;
    return t.partials[n] = {
      name:e.n,
      partials:{}
    }, t.code += 't.b(t.rp("' + c(n) + '",c,p,"' + (e.indent || "") + '"));', n;
  }
  function d(e, t) {
    t.code += "t.b(t.t(t." + u(e.n) + '("' + c(e.n) + '",c,p,0)));';
  }
  function f(e) {
    return "t.b(" + e + ");";
  }
  var p = /\S/, m = /\"/g, g = /\n/g, v = /\r/g, y = /\\/g;
  e.tags = {
    "#":1,
    "^":2,
    "<":3,
    $:4,
    "/":5,
    "!":6,
    ">":7,
    "=":8,
    _v:9,
    "{":10,
    "&":11,
    _t:12
  }, e.scan = function(s, r) {
    function o() {
      v.length > 0 && (y.push({
        tag:"_t",
        text:new String(v)
      }), v = "");
    }
    function a() {
      for (var t = !0, i = x; i < y.length; i++) if (!(t = e.tags[y[i].tag] < e.tags._v || "_t" == y[i].tag && null === y[i].text.match(p))) return !1;
      return t;
    }
    function l(e, t) {
      if (o(), e && a()) for (var i, n = x; n < y.length; n++) y[n].text && ((i = y[n + 1]) && ">" == i.tag && (i.indent = y[n].text.toString()), 
      y.splice(n, 1)); else t || y.push({
        tag:"\n"
      });
      b = !1, x = y.length;
    }
    function c(e, t) {
      var n = "=" + S, s = e.indexOf(n, t), r = i(e.substring(e.indexOf("=", t) + 1, s)).split(" ");
      return _ = r[0], S = r[r.length - 1], s + n.length - 1;
    }
    var u = s.length, h = 0, d = 1, f = h, m = null, g = null, v = "", y = [], b = !1, w = 0, x = 0, _ = "{{", S = "}}";
    for (r && (r = r.split(" "), _ = r[0], S = r[1]), w = 0; w < u; w++) f == h ? n(_, s, w) ? (--w, 
    o(), f = d) :"\n" == s.charAt(w) ? l(b) :v += s.charAt(w) :f == d ? (w += _.length - 1, 
    g = e.tags[s.charAt(w + 1)], m = g ? s.charAt(w + 1) :"_v", "=" == m ? (w = c(s, w), 
    f = h) :(g && w++, f = 2), b = w) :n(S, s, w) ? (y.push({
      tag:m,
      n:i(v),
      otag:_,
      ctag:S,
      i:"/" == m ? b - _.length :w + S.length
    }), v = "", w += S.length - 1, f = h, "{" == m && ("}}" == S ? w++ :t(y[y.length - 1]))) :v += s.charAt(w);
    return l(b, !0), y;
  };
  var b = {
    _t:!0,
    "\n":!0,
    $:!0,
    "/":!0
  };
  e.stringify = function(t) {
    return "{code: function (c,p,i) { " + e.wrapMain(t.code) + " }," + l(t) + "}";
  };
  var w = 0;
  e.generate = function(t, i, n) {
    w = 0;
    var s = {
      code:"",
      subs:{},
      partials:{}
    };
    return e.walk(t, s), n.asString ? this.stringify(s, i, n) :this.makeTemplate(s, i, n);
  }, e.wrapMain = function(e) {
    return 'var t=this;t.b(i=i||"");' + e + "return t.fl();";
  }, e.template = e.Template, e.makeTemplate = function(e, t, i) {
    var n = this.makePartials(e);
    return n.code = new Function("c", "p", "i", this.wrapMain(e.code)), new this.template(n, t, this, i);
  }, e.makePartials = function(e) {
    var t, i = {
      subs:{},
      partials:e.partials,
      name:e.name
    };
    for (t in i.partials) i.partials[t] = this.makePartials(i.partials[t]);
    for (t in e.subs) i.subs[t] = new Function("c", "p", "t", "i", e.subs[t]);
    return i;
  }, e.codegen = {
    "#":function(t, i) {
      i.code += "if(t.s(t." + u(t.n) + '("' + c(t.n) + '",c,p,1),c,p,0,' + t.i + "," + t.end + ',"' + t.otag + " " + t.ctag + '")){t.rs(c,p,function(c,p,t){', 
      e.walk(t.nodes, i), i.code += "});c.pop();}";
    },
    "^":function(t, i) {
      i.code += "if(!t.s(t." + u(t.n) + '("' + c(t.n) + '",c,p,1),c,p,1,0,0,"")){', e.walk(t.nodes, i), 
      i.code += "};";
    },
    ">":h,
    "<":function(t, i) {
      var n = {
        partials:{},
        code:"",
        subs:{},
        inPartial:!0
      };
      e.walk(t.nodes, n);
      var s = i.partials[h(t, i)];
      s.subs = n.subs, s.partials = n.partials;
    },
    $:function(t, i) {
      var n = {
        subs:{},
        code:"",
        partials:i.partials,
        prefix:t.n
      };
      e.walk(t.nodes, n), i.subs[t.n] = n.code, i.inPartial || (i.code += 't.sub("' + c(t.n) + '",c,p,i);');
    },
    "\n":function(e, t) {
      t.code += f('"\\n"' + (e.last ? "" :" + i"));
    },
    _v:function(e, t) {
      t.code += "t.b(t.v(t." + u(e.n) + '("' + c(e.n) + '",c,p,0)));';
    },
    _t:function(e, t) {
      t.code += f('"' + c(e.text) + '"');
    },
    "{":d,
    "&":d
  }, e.walk = function(t, i) {
    for (var n, s = 0, r = t.length; s < r; s++) (n = e.codegen[t[s].tag]) && n(t[s], i);
    return i;
  }, e.parse = function(e, t, i) {
    return i = i || {}, s(e, "", [], i.sectionTags || []);
  }, e.cache = {}, e.cacheKey = function(e, t) {
    return [ e, !!t.asString, !!t.disableLambda, t.delimiters, !!t.modelGet ].join("||");
  }, e.compile = function(t, i) {
    i = i || {};
    var n = e.cacheKey(t, i), s = this.cache[n];
    return s || (s = this.generate(this.parse(this.scan(t, i.delimiters), t, i), t, i), 
    this.cache[n] = s);
  };
}("undefined" != typeof exports ? exports :Hogan);

var mejs = mejs || {};

mejs.version = "2.23.5", mejs.meIndex = 0, mejs.plugins = {
  silverlight:[ {
    version:[ 3, 0 ],
    types:[ "video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg" ]
  } ],
  flash:[ {
    version:[ 9, 0, 124 ],
    types:[ "video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mp4", "audio/mpeg", "video/dailymotion", "video/x-dailymotion", "application/x-mpegURL", "audio/ogg" ]
  } ],
  youtube:[ {
    version:null,
    types:[ "video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube" ]
  } ],
  vimeo:[ {
    version:null,
    types:[ "video/vimeo", "video/x-vimeo" ]
  } ]
}, mejs.Utility = {
  encodeUrl:function(e) {
    return encodeURIComponent(e);
  },
  escapeHTML:function(e) {
    return e.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;");
  },
  absolutizeUrl:function(e) {
    var t = document.createElement("div");
    return t.innerHTML = '<a href="' + this.escapeHTML(e) + '">x</a>', t.firstChild.href;
  },
  getScriptPath:function(e) {
    for (var t, i, n, s, r, o = 0, a = "", l = "", c = document.getElementsByTagName("script"), u = c.length, h = e.length; o < u; o++) {
      for (n = c[o].src, i = n.lastIndexOf("/"), i > -1 ? (r = n.substring(i + 1), s = n.substring(0, i + 1)) :(r = n, 
      s = ""), t = 0; t < h; t++) if (l = e[t], r.indexOf(l) > -1) {
        a = s;
        break;
      }
      if ("" !== a) break;
    }
    return a;
  },
  calculateTimeFormat:function(e, t, i) {
    e < 0 && (e = 0), void 0 === i && (i = 25);
    var n = t.timeFormat, s = n[0], r = n[1] == n[0], o = r ? 2 :1, a = ":", l = Math.floor(e / 3600) % 24, c = Math.floor(e / 60) % 60, u = Math.floor(e % 60), h = Math.floor((e % 1 * i).toFixed(3)), d = [ [ h, "f" ], [ u, "s" ], [ c, "m" ], [ l, "h" ] ];
    n.length < o && (a = n[o]);
    for (var f = !1, p = 0, m = d.length; p < m; p++) if (-1 !== n.indexOf(d[p][1])) f = !0; else if (f) {
      for (var g = !1, v = p; v < m; v++) if (d[v][0] > 0) {
        g = !0;
        break;
      }
      if (!g) break;
      r || (n = s + n), n = d[p][1] + a + n, r && (n = d[p][1] + n), s = d[p][1];
    }
    t.currentTimeFormat = n;
  },
  twoDigitsString:function(e) {
    return e < 10 ? "0" + e :String(e);
  },
  secondsToTimeCode:function(e, t) {
    if (e < 0 && (e = 0), "object" != typeof t) {
      var n = "m:ss";
      n = arguments[1] ? "hh:mm:ss" :n, n = arguments[2] ? n + ":ff" :n, t = {
        currentTimeFormat:n,
        framesPerSecond:arguments[3] || 25
      };
    }
    var s = t.framesPerSecond;
    void 0 === s && (s = 25);
    var n = t.currentTimeFormat, r = Math.floor(e / 3600) % 24, o = Math.floor(e / 60) % 60, a = Math.floor(e % 60), l = Math.floor((e % 1 * s).toFixed(3));
    lis = [ [ l, "f" ], [ a, "s" ], [ o, "m" ], [ r, "h" ] ];
    var c = n;
    for (i = 0, len = lis.length; i < len; i++) c = c.replace(lis[i][1] + lis[i][1], this.twoDigitsString(lis[i][0])), 
    c = c.replace(lis[i][1], lis[i][0]);
    return c;
  },
  timeCodeToSeconds:function(e, t, i, n) {
    void 0 === i ? i = !1 :void 0 === n && (n = 25);
    var s = e.split(":"), r = parseInt(s[0], 10), o = parseInt(s[1], 10), a = parseInt(s[2], 10), l = 0;
    return i && (l = parseInt(s[3]) / n), 3600 * r + 60 * o + a + l;
  },
  convertSMPTEtoSeconds:function(e) {
    if ("string" != typeof e) return !1;
    e = e.replace(",", ".");
    var t = 0, i = -1 != e.indexOf(".") ? e.split(".")[1].length :0, n = 1;
    e = e.split(":").reverse();
    for (var s = 0; s < e.length; s++) n = 1, s > 0 && (n = Math.pow(60, s)), t += Number(e[s]) * n;
    return Number(t.toFixed(i));
  },
  removeSwf:function(e) {
    var t = document.getElementById(e);
    t && /object|embed/i.test(t.nodeName) && (mejs.MediaFeatures.isIE ? (t.style.display = "none", 
    function() {
      4 == t.readyState ? mejs.Utility.removeObjectInIE(e) :setTimeout(arguments.callee, 10);
    }()) :t.parentNode.removeChild(t));
  },
  removeObjectInIE:function(e) {
    var t = document.getElementById(e);
    if (t) {
      for (var i in t) "function" == typeof t[i] && (t[i] = null);
      t.parentNode.removeChild(t);
    }
  },
  determineScheme:function(e) {
    return e && -1 != e.indexOf("://") ? e.substr(0, e.indexOf("://") + 3) :"//";
  },
  debounce:function(e, t, i) {
    var n;
    return function() {
      var s = this, r = arguments, o = function() {
        n = null, i || e.apply(s, r);
      }, a = i && !n;
      clearTimeout(n), n = setTimeout(o, t), a && e.apply(s, r);
    };
  },
  isNodeAfter:function(e, t) {
    return !!(e && t && "function" == typeof e.compareDocumentPosition && e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_PRECEDING);
  }
}, mejs.PluginDetector = {
  hasPluginVersion:function(e, t) {
    var i = this.plugins[e];
    return t[1] = t[1] || 0, t[2] = t[2] || 0, i[0] > t[0] || i[0] == t[0] && i[1] > t[1] || i[0] == t[0] && i[1] == t[1] && i[2] >= t[2];
  },
  nav:window.navigator,
  ua:window.navigator.userAgent.toLowerCase(),
  plugins:[],
  addPlugin:function(e, t, i, n, s) {
    this.plugins[e] = this.detectPlugin(t, i, n, s);
  },
  detectPlugin:function(e, t, i, n) {
    var s, r, o, a = [ 0, 0, 0 ];
    if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[e]) {
      if ((s = this.nav.plugins[e].description) && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[t] || this.nav.mimeTypes[t].enabledPlugin)) for (a = s.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), 
      r = 0; r < a.length; r++) a[r] = parseInt(a[r].match(/\d+/), 10);
    } else if ("undefined" != typeof window.ActiveXObject) try {
      o = new ActiveXObject(i), o && (a = n(o));
    } catch (e) {}
    return a;
  }
}, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(e) {
  var t = [], i = e.GetVariable("$version");
  return i && (i = i.split(" ")[1].split(","), t = [ parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10) ]), 
  t;
}), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(e) {
  var t = [ 0, 0, 0, 0 ], i = function(e, t, i, n) {
    for (;e.isVersionSupported(t[0] + "." + t[1] + "." + t[2] + "." + t[3]); ) t[i] += n;
    t[i] -= n;
  };
  return i(e, t, 0, 1), i(e, t, 1, 1), i(e, t, 2, 1e4), i(e, t, 2, 1e3), i(e, t, 2, 100), 
  i(e, t, 2, 10), i(e, t, 2, 1), i(e, t, 3, 1), t;
}), mejs.MediaFeatures = {
  init:function() {
    var e, t, i = this, n = document, s = mejs.PluginDetector.nav, r = mejs.PluginDetector.ua.toLowerCase(), o = [ "source", "track", "audio", "video" ];
    i.isiPad = null !== r.match(/ipad/i), i.isiPhone = null !== r.match(/iphone/i), 
    i.isiOS = i.isiPhone || i.isiPad, i.isAndroid = null !== r.match(/android/i), i.isBustedAndroid = null !== r.match(/android 2\.[12]/), 
    i.isBustedNativeHTTPS = "https:" === location.protocol && (null !== r.match(/android [12]\./) || null !== r.match(/macintosh.* version.* safari/)), 
    i.isIE = -1 != s.appName.toLowerCase().indexOf("microsoft") || null !== s.appName.toLowerCase().match(/trident/gi), 
    i.isChrome = null !== r.match(/chrome/gi), i.isChromium = null !== r.match(/chromium/gi), 
    i.isFirefox = null !== r.match(/firefox/gi), i.isWebkit = null !== r.match(/webkit/gi), 
    i.isGecko = null !== r.match(/gecko/gi) && !i.isWebkit && !i.isIE, i.isOpera = null !== r.match(/opera/gi), 
    i.hasTouch = "ontouchstart" in window, i.svgAsImg = !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
    for (e = 0; e < o.length; e++) t = document.createElement(o[e]);
    i.supportsMediaTag = "undefined" != typeof t.canPlayType || i.isBustedAndroid;
    try {
      t.canPlayType("video/mp4");
    } catch (e) {
      i.supportsMediaTag = !1;
    }
    i.supportsPointerEvents = function() {
      var e, t = document.createElement("x"), i = document.documentElement, n = window.getComputedStyle;
      return "pointerEvents" in t.style && (t.style.pointerEvents = "auto", t.style.pointerEvents = "x", 
      i.appendChild(t), e = n && "auto" === n(t, "").pointerEvents, i.removeChild(t), 
      !!e);
    }(), i.hasFirefoxPluginMovingProblem = !1, i.hasiOSFullScreen = "undefined" != typeof t.webkitEnterFullscreen, 
    i.hasNativeFullscreen = "undefined" != typeof t.requestFullscreen, i.hasWebkitNativeFullScreen = "undefined" != typeof t.webkitRequestFullScreen, 
    i.hasMozNativeFullScreen = "undefined" != typeof t.mozRequestFullScreen, i.hasMsNativeFullScreen = "undefined" != typeof t.msRequestFullscreen, 
    i.hasTrueNativeFullScreen = i.hasWebkitNativeFullScreen || i.hasMozNativeFullScreen || i.hasMsNativeFullScreen, 
    i.nativeFullScreenEnabled = i.hasTrueNativeFullScreen, i.hasMozNativeFullScreen ? i.nativeFullScreenEnabled = document.mozFullScreenEnabled :i.hasMsNativeFullScreen && (i.nativeFullScreenEnabled = document.msFullscreenEnabled), 
    i.isChrome && (i.hasiOSFullScreen = !1), i.hasTrueNativeFullScreen && (i.fullScreenEventName = "", 
    i.hasWebkitNativeFullScreen ? i.fullScreenEventName = "webkitfullscreenchange" :i.hasMozNativeFullScreen ? i.fullScreenEventName = "mozfullscreenchange" :i.hasMsNativeFullScreen && (i.fullScreenEventName = "MSFullscreenChange"), 
    i.isFullScreen = function() {
      return i.hasMozNativeFullScreen ? n.mozFullScreen :i.hasWebkitNativeFullScreen ? n.webkitIsFullScreen :i.hasMsNativeFullScreen ? null !== n.msFullscreenElement :void 0;
    }, i.requestFullScreen = function(e) {
      i.hasWebkitNativeFullScreen ? e.webkitRequestFullScreen() :i.hasMozNativeFullScreen ? e.mozRequestFullScreen() :i.hasMsNativeFullScreen && e.msRequestFullscreen();
    }, i.cancelFullScreen = function() {
      i.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() :i.hasMozNativeFullScreen ? document.mozCancelFullScreen() :i.hasMsNativeFullScreen && document.msExitFullscreen();
    }), i.hasiOSFullScreen && r.match(/mac os x 10_5/i) && (i.hasNativeFullScreen = !1, 
    i.hasiOSFullScreen = !1);
  }
}, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
  pluginType:"native",
  isFullScreen:!1,
  setCurrentTime:function(e) {
    this.currentTime = e;
  },
  setMuted:function(e) {
    this.muted = e;
  },
  setVolume:function(e) {
    this.volume = e;
  },
  stop:function() {
    this.pause();
  },
  setSrc:function(e) {
    for (var t = this.getElementsByTagName("source"); t.length > 0; ) this.removeChild(t[0]);
    if ("string" == typeof e) this.src = e; else {
      var i, n;
      for (i = 0; i < e.length; i++) if (n = e[i], this.canPlayType(n.type)) {
        this.src = n.src;
        break;
      }
    }
  },
  setVideoSize:function(e, t) {
    this.width = e, this.height = t;
  }
}, mejs.PluginMediaElement = function(e, t, i) {
  this.id = e, this.pluginType = t, this.src = i, this.events = {}, this.attributes = {};
}, mejs.PluginMediaElement.prototype = {
  pluginElement:null,
  pluginType:"",
  isFullScreen:!1,
  playbackRate:-1,
  defaultPlaybackRate:-1,
  seekable:[],
  played:[],
  paused:!0,
  ended:!1,
  seeking:!1,
  duration:0,
  error:null,
  tagName:"",
  muted:!1,
  volume:1,
  currentTime:0,
  play:function() {
    null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.playVideo() :this.pluginApi.playMedia(), 
    this.paused = !1);
  },
  load:function() {
    null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType || this.pluginApi.loadMedia(), 
    this.paused = !1);
  },
  pause:function() {
    null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? 1 == this.pluginApi.getPlayerState() && this.pluginApi.pauseVideo() :this.pluginApi.pauseMedia(), 
    this.paused = !0);
  },
  stop:function() {
    null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.stopVideo() :this.pluginApi.stopMedia(), 
    this.paused = !0);
  },
  canPlayType:function(e) {
    var t, i, n, s = mejs.plugins[this.pluginType];
    for (t = 0; t < s.length; t++) if (n = s[t], mejs.PluginDetector.hasPluginVersion(this.pluginType, n.version)) for (i = 0; i < n.types.length; i++) if (e == n.types[i]) return "probably";
    return "";
  },
  positionFullscreenButton:function(e, t, i) {
    null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(e), Math.floor(t), i);
  },
  hideFullscreenButton:function() {
    null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton();
  },
  setSrc:function(e) {
    if ("string" == typeof e) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(e)), 
    this.src = mejs.Utility.absolutizeUrl(e); else {
      var t, i;
      for (t = 0; t < e.length; t++) if (i = e[t], this.canPlayType(i.type)) {
        this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(i.src)), this.src = mejs.Utility.absolutizeUrl(i.src);
        break;
      }
    }
  },
  setCurrentTime:function(e) {
    null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.seekTo(e) :this.pluginApi.setCurrentTime(e), 
    this.currentTime = e);
  },
  setVolume:function(e) {
    null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.setVolume(100 * e) :this.pluginApi.setVolume(e), 
    this.volume = e);
  },
  setMuted:function(e) {
    null != this.pluginApi && ("youtube" == this.pluginType ? (e ? this.pluginApi.mute() :this.pluginApi.unMute(), 
    this.muted = e, this.dispatchEvent({
      type:"volumechange"
    })) :this.pluginApi.setMuted(e), this.muted = e);
  },
  setVideoSize:function(e, t) {
    this.pluginElement && this.pluginElement.style && (this.pluginElement.style.width = e + "px", 
    this.pluginElement.style.height = t + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(e, t);
  },
  setFullscreen:function(e) {
    null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(e);
  },
  enterFullScreen:function() {
    null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0);
  },
  exitFullScreen:function() {
    null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1);
  },
  addEventListener:function(e, t) {
    this.events[e] = this.events[e] || [], this.events[e].push(t);
  },
  removeEventListener:function(e, t) {
    if (!e) return this.events = {}, !0;
    var i = this.events[e];
    if (!i) return !0;
    if (!t) return this.events[e] = [], !0;
    for (var n = 0; n < i.length; n++) if (i[n] === t) return this.events[e].splice(n, 1), 
    !0;
    return !1;
  },
  dispatchEvent:function(e) {
    var t, i = this.events[e.type];
    if (i) for (t = 0; t < i.length; t++) i[t].apply(this, [ e ]);
  },
  hasAttribute:function(e) {
    return e in this.attributes;
  },
  removeAttribute:function(e) {
    delete this.attributes[e];
  },
  getAttribute:function(e) {
    return this.hasAttribute(e) ? this.attributes[e] :null;
  },
  setAttribute:function(e, t) {
    this.attributes[e] = t;
  },
  remove:function() {
    mejs.Utility.removeSwf(this.pluginElement.id);
  }
}, mejs.MediaElementDefaults = {
  mode:"auto",
  plugins:[ "flash", "silverlight", "youtube", "vimeo" ],
  enablePluginDebug:!1,
  httpsBasicAuthSite:!1,
  type:"",
  pluginPath:mejs.Utility.getScriptPath([ "mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js" ]),
  flashName:"flashmediaelement.swf",
  flashStreamer:"",
  flashScriptAccess:"sameDomain",
  enablePluginSmoothing:!1,
  enablePseudoStreaming:!1,
  pseudoStreamingStartQueryParam:"start",
  silverlightName:"silverlightmediaelement.xap",
  defaultVideoWidth:480,
  defaultVideoHeight:270,
  pluginWidth:-1,
  pluginHeight:-1,
  pluginVars:[],
  timerRate:250,
  startVolume:.8,
  customError:"",
  success:function() {},
  error:function() {}
}, mejs.MediaElement = function(e, t) {
  return mejs.HtmlMediaElementShim.create(e, t);
}, mejs.HtmlMediaElementShim = {
  create:function(e, t) {
    var i, n, s = {}, r = "string" == typeof e ? document.getElementById(e) :e, o = r.tagName.toLowerCase(), a = "audio" === o || "video" === o, l = a ? r.getAttribute("src") :r.getAttribute("href"), c = r.getAttribute("poster"), u = r.getAttribute("autoplay"), h = r.getAttribute("preload"), d = r.getAttribute("controls");
    for (n in mejs.MediaElementDefaults) s[n] = mejs.MediaElementDefaults[n];
    for (n in t) s[n] = t[n];
    return l = void 0 === l || null === l || "" == l ? null :l, c = void 0 === c || null === c ? "" :c, 
    h = void 0 === h || null === h || "false" === h ? "none" :h, u = !(void 0 === u || null === u || "false" === u), 
    d = !(void 0 === d || null === d || "false" === d), i = this.determinePlayback(r, s, mejs.MediaFeatures.supportsMediaTag, a, l), 
    i.url = null !== i.url ? mejs.Utility.absolutizeUrl(i.url) :"", i.scheme = mejs.Utility.determineScheme(i.url), 
    "native" == i.method ? (mejs.MediaFeatures.isBustedAndroid && (r.src = i.url, r.addEventListener("click", function() {
      r.play();
    }, !1)), this.updateNative(i, s, u, h)) :"" !== i.method ? this.createPlugin(i, s, c, u, h, d) :(this.createErrorMessage(i, s, c), 
    this);
  },
  determinePlayback:function(e, t, i, n, s) {
    var r, o, a, l, c, u, h, d, f, p, m, g = [], v = {
      method:"",
      url:"",
      htmlMediaElement:e,
      isVideo:"audio" !== e.tagName.toLowerCase(),
      scheme:""
    };
    if ("undefined" != typeof t.type && "" !== t.type) if ("string" == typeof t.type) g.push({
      type:t.type,
      url:s
    }); else for (r = 0; r < t.type.length; r++) g.push({
      type:t.type[r],
      url:s
    }); else if (null !== s) u = this.formatType(s, e.getAttribute("type")), g.push({
      type:u,
      url:s
    }); else for (r = 0; r < e.childNodes.length; r++) c = e.childNodes[r], 1 == c.nodeType && "source" == c.tagName.toLowerCase() && (s = c.getAttribute("src"), 
    u = this.formatType(s, c.getAttribute("type")), (!(m = c.getAttribute("media")) || !window.matchMedia || window.matchMedia && window.matchMedia(m).matches) && g.push({
      type:u,
      url:s
    }));
    if (!n && g.length > 0 && null !== g[0].url && this.getTypeFromFile(g[0].url).indexOf("audio") > -1 && (v.isVideo = !1), 
    v.isVideo && mejs.MediaFeatures.isBustedAndroid && (e.canPlayType = function(e) {
      return null !== e.match(/video\/(mp4|m4v)/gi) ? "maybe" :"";
    }), v.isVideo && mejs.MediaFeatures.isChromium && (e.canPlayType = function(e) {
      return null !== e.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" :"";
    }), i && ("auto" === t.mode || "auto_plugin" === t.mode || "native" === t.mode) && (!mejs.MediaFeatures.isBustedNativeHTTPS || !0 !== t.httpsBasicAuthSite)) {
      for (n || (p = document.createElement(v.isVideo ? "video" :"audio"), e.parentNode.insertBefore(p, e), 
      e.style.display = "none", v.htmlMediaElement = e = p), r = 0; r < g.length; r++) if ("video/m3u8" == g[r].type || "" !== e.canPlayType(g[r].type).replace(/no/, "") || "" !== e.canPlayType(g[r].type.replace(/mp3/, "mpeg")).replace(/no/, "") || "" !== e.canPlayType(g[r].type.replace(/m4a/, "mp4")).replace(/no/, "")) {
        v.method = "native", v.url = g[r].url;
        break;
      }
      if ("native" === v.method && (null !== v.url && (e.src = v.url), "auto_plugin" !== t.mode)) return v;
    }
    if ("auto" === t.mode || "auto_plugin" === t.mode || "shim" === t.mode) for (r = 0; r < g.length; r++) for (u = g[r].type, 
    o = 0; o < t.plugins.length; o++) for (h = t.plugins[o], d = mejs.plugins[h], a = 0; a < d.length; a++) if (f = d[a], 
    null == f.version || mejs.PluginDetector.hasPluginVersion(h, f.version)) for (l = 0; l < f.types.length; l++) if (u.toLowerCase() == f.types[l].toLowerCase()) return v.method = h, 
    v.url = g[r].url, v;
    return "auto_plugin" === t.mode && "native" === v.method ? v :("" === v.method && g.length > 0 && (v.url = g[0].url), 
    v);
  },
  formatType:function(e, t) {
    return e && !t ? this.getTypeFromFile(e) :t && ~t.indexOf(";") ? t.substr(0, t.indexOf(";")) :t;
  },
  getTypeFromFile:function(e) {
    e = e.split("?")[0];
    var t = e.substring(e.lastIndexOf(".") + 1).toLowerCase(), i = /(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(t) ? "video/" :"audio/";
    return this.getTypeFromExtension(t, i);
  },
  getTypeFromExtension:function(e, t) {
    switch (t = t || "", e) {
     case "mp4":
     case "m4v":
     case "m4a":
     case "f4v":
     case "f4a":
      return t + "mp4";

     case "flv":
      return t + "x-flv";

     case "webm":
     case "webma":
     case "webmv":
      return t + "webm";

     case "ogg":
     case "oga":
     case "ogv":
      return t + "ogg";

     case "m3u8":
      return "application/x-mpegurl";

     case "ts":
      return t + "mp2t";

     default:
      return t + e;
    }
  },
  createErrorMessage:function(e, t, i) {
    var n = e.htmlMediaElement, s = document.createElement("div"), r = t.customError;
    s.className = "me-cannotplay";
    try {
      s.style.width = n.width + "px", s.style.height = n.height + "px";
    } catch (e) {}
    r || (r = '<a href="' + e.url + '">', "" !== i && (r += '<img src="' + i + '" width="100%" height="100%" alt="" />'), 
    r += "<span>" + mejs.i18n.t("mejs.download-file") + "</span></a>"), s.innerHTML = r, 
    n.parentNode.insertBefore(s, n), n.style.display = "none", t.error(n);
  },
  createPlugin:function(e, t, i, n, s, r) {
    var o, a, l, c = e.htmlMediaElement, u = 1, h = 1, d = "me_" + e.method + "_" + mejs.meIndex++, f = new mejs.PluginMediaElement(d, e.method, e.url), p = document.createElement("div");
    f.tagName = c.tagName;
    for (var m = 0; m < c.attributes.length; m++) {
      var g = c.attributes[m];
      g.specified && f.setAttribute(g.name, g.value);
    }
    for (a = c.parentNode; null !== a && null != a.tagName && "body" !== a.tagName.toLowerCase() && null != a.parentNode && null != a.parentNode.tagName && null != a.parentNode.constructor && "ShadowRoot" === a.parentNode.constructor.name; ) {
      if ("p" === a.parentNode.tagName.toLowerCase()) {
        a.parentNode.parentNode.insertBefore(a, a.parentNode);
        break;
      }
      a = a.parentNode;
    }
    if (e.isVideo ? (u = t.pluginWidth > 0 ? t.pluginWidth :t.videoWidth > 0 ? t.videoWidth :null !== c.getAttribute("width") ? c.getAttribute("width") :t.defaultVideoWidth, 
    h = t.pluginHeight > 0 ? t.pluginHeight :t.videoHeight > 0 ? t.videoHeight :null !== c.getAttribute("height") ? c.getAttribute("height") :t.defaultVideoHeight, 
    u = mejs.Utility.encodeUrl(u), h = mejs.Utility.encodeUrl(h)) :t.enablePluginDebug && (u = 320, 
    h = 240), f.success = t.success, p.className = "me-plugin", p.id = d + "_container", 
    e.isVideo ? c.parentNode.insertBefore(p, c) :document.body.insertBefore(p, document.body.childNodes[0]), 
    "flash" === e.method || "silverlight" === e.method) {
      var v = "audio/mp4" === c.getAttribute("type"), y = c.getElementsByTagName("source");
      if (y && !v) for (var m = 0, b = y.length; m < b; m++) "audio/mp4" === y[m].getAttribute("type") && (v = !0);
      l = [ "id=" + d, "isvideo=" + (e.isVideo || v ? "true" :"false"), "autoplay=" + (n ? "true" :"false"), "preload=" + s, "width=" + u, "startvolume=" + t.startVolume, "timerrate=" + t.timerRate, "flashstreamer=" + t.flashStreamer, "height=" + h, "pseudostreamstart=" + t.pseudoStreamingStartQueryParam ], 
      null !== e.url && ("flash" == e.method ? l.push("file=" + mejs.Utility.encodeUrl(e.url)) :l.push("file=" + e.url)), 
      t.enablePluginDebug && l.push("debug=true"), t.enablePluginSmoothing && l.push("smoothing=true"), 
      t.enablePseudoStreaming && l.push("pseudostreaming=true"), r && l.push("controls=true"), 
      t.pluginVars && (l = l.concat(t.pluginVars)), window[d + "_init"] = function() {
        switch (f.pluginType) {
         case "flash":
          f.pluginElement = f.pluginApi = document.getElementById(d);
          break;

         case "silverlight":
          f.pluginElement = document.getElementById(f.id), f.pluginApi = f.pluginElement.Content.MediaElementJS;
        }
        null != f.pluginApi && f.success && f.success(f, c);
      }, window[d + "_event"] = function(e, t) {
        var i, n, s;
        i = {
          type:e,
          target:f
        };
        for (n in t) f[n] = t[n], i[n] = t[n];
        s = t.bufferedTime || 0, i.target.buffered = i.buffered = {
          start:function() {
            return 0;
          },
          end:function() {
            return s;
          },
          length:1
        }, f.dispatchEvent(i);
      };
    }
    switch (e.method) {
     case "silverlight":
      p.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + d + '" name="' + d + '" width="' + u + '" height="' + h + '" class="mejs-shim"><param name="initParams" value="' + l.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + t.pluginPath + t.silverlightName + '" /></object>';
      break;

     case "flash":
      mejs.MediaFeatures.isIE ? (o = document.createElement("div"), p.appendChild(o), 
      o.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + d + '" width="' + u + '" height="' + h + '" class="mejs-shim"><param name="movie" value="' + t.pluginPath + t.flashName + "?" + new Date().getTime() + '" /><param name="flashvars" value="' + l.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + t.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') :p.innerHTML = '<embed id="' + d + '" name="' + d + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="' + t.flashScriptAccess + '" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + t.pluginPath + t.flashName + '" flashvars="' + l.join("&") + '" width="' + u + '" height="' + h + '" scale="default"class="mejs-shim"></embed>';
      break;

     case "youtube":
      var w;
      if (-1 != e.url.lastIndexOf("youtu.be")) w = e.url.substr(e.url.lastIndexOf("/") + 1), 
      -1 != w.indexOf("?") && (w = w.substr(0, w.indexOf("?"))); else {
        var x = e.url.match(/[?&]v=([^&#]+)|&|#|$/);
        x && (w = x[1]);
      }
      youtubeSettings = {
        container:p,
        containerId:p.id,
        pluginMediaElement:f,
        pluginId:d,
        videoId:w,
        height:h,
        width:u,
        scheme:e.scheme,
        variables:t.youtubeIframeVars
      }, window.postMessage ? mejs.YouTubeApi.enqueueIframe(youtubeSettings) :mejs.PluginDetector.hasPluginVersion("flash", [ 10, 0, 0 ]) && mejs.YouTubeApi.createFlash(youtubeSettings, t);
      break;

     case "vimeo":
      var _ = d + "_player";
      if (f.vimeoid = e.url.substr(e.url.lastIndexOf("/") + 1), p.innerHTML = '<iframe src="' + e.scheme + "player.vimeo.com/video/" + f.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + _ + '" width="' + u + '" height="' + h + '" frameborder="0" class="mejs-shim" id="' + _ + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', 
      "function" == typeof $f) {
        var S = $f(p.childNodes[0]), C = -1;
        S.addEvent("ready", function() {
          function e(e, t, i, n) {
            var s = {
              type:i,
              target:t
            };
            "timeupdate" == i && (t.currentTime = s.currentTime = n.seconds, t.duration = s.duration = n.duration), 
            t.dispatchEvent(s);
          }
          S.playVideo = function() {
            S.api("play");
          }, S.stopVideo = function() {
            S.api("unload");
          }, S.pauseVideo = function() {
            S.api("pause");
          }, S.seekTo = function(e) {
            S.api("seekTo", e);
          }, S.setVolume = function(e) {
            S.api("setVolume", e);
          }, S.setMuted = function(e) {
            e ? (S.lastVolume = S.api("getVolume"), S.api("setVolume", 0)) :(S.api("setVolume", S.lastVolume), 
            delete S.lastVolume);
          }, S.getPlayerState = function() {
            return C;
          }, S.addEvent("play", function() {
            C = 1, e(S, f, "play"), e(S, f, "playing");
          }), S.addEvent("pause", function() {
            C = 2, e(S, f, "pause");
          }), S.addEvent("finish", function() {
            C = 0, e(S, f, "ended");
          }), S.addEvent("playProgress", function(t) {
            e(S, f, "timeupdate", t);
          }), S.addEvent("seek", function(t) {
            C = 3, e(S, f, "seeked", t);
          }), S.addEvent("loadProgress", function(t) {
            C = 3, e(S, f, "progress", t);
          }), f.pluginElement = p, f.pluginApi = S, f.success(f, f.pluginElement);
        });
      } else console.warn("You need to include froogaloop for vimeo to work");
    }
    return c.style.display = "none", c.removeAttribute("autoplay"), f;
  },
  updateNative:function(e, t) {
    var i, n = e.htmlMediaElement;
    for (i in mejs.HtmlMediaElement) n[i] = mejs.HtmlMediaElement[i];
    return t.success(n, n), n;
  }
}, mejs.YouTubeApi = {
  isIframeStarted:!1,
  isIframeLoaded:!1,
  loadIframeApi:function(e) {
    if (!this.isIframeStarted) {
      var t = document.createElement("script");
      t.src = e.scheme + "www.youtube.com/player_api";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(t, i), this.isIframeStarted = !0;
    }
  },
  iframeQueue:[],
  enqueueIframe:function(e) {
    this.isLoaded ? this.createIframe(e) :(this.loadIframeApi(e), this.iframeQueue.push(e));
  },
  createIframe:function(e) {
    var t = e.pluginMediaElement, i = {
      controls:0,
      wmode:"transparent"
    }, n = new YT.Player(e.containerId, {
      height:e.height,
      width:e.width,
      videoId:e.videoId,
      playerVars:mejs.$.extend({}, i, e.variables),
      events:{
        onReady:function() {
          n.setVideoSize = function(e, t) {
            n.setSize(e, t);
          }, e.pluginMediaElement.pluginApi = n, e.pluginMediaElement.pluginElement = document.getElementById(e.containerId), 
          t.success(t, t.pluginElement), mejs.YouTubeApi.createEvent(n, t, "canplay"), setInterval(function() {
            mejs.YouTubeApi.createEvent(n, t, "timeupdate");
          }, 250), "undefined" != typeof t.attributes.autoplay && n.playVideo();
        },
        onStateChange:function(e) {
          mejs.YouTubeApi.handleStateChange(e.data, n, t);
        }
      }
    });
  },
  createEvent:function(e, t, i) {
    var n = {
      type:i,
      target:t
    };
    if (e && e.getDuration) {
      t.currentTime = n.currentTime = e.getCurrentTime(), t.duration = n.duration = e.getDuration(), 
      n.paused = t.paused, n.ended = t.ended, n.muted = e.isMuted(), n.volume = e.getVolume() / 100, 
      n.bytesTotal = e.getVideoBytesTotal(), n.bufferedBytes = e.getVideoBytesLoaded();
      var s = n.bufferedBytes / n.bytesTotal * n.duration;
      n.target.buffered = n.buffered = {
        start:function() {
          return 0;
        },
        end:function() {
          return s;
        },
        length:1
      };
    }
    t.dispatchEvent(n);
  },
  iFrameReady:function() {
    for (this.isLoaded = !0, this.isIframeLoaded = !0; this.iframeQueue.length > 0; ) {
      var e = this.iframeQueue.pop();
      this.createIframe(e);
    }
  },
  flashPlayers:{},
  createFlash:function(e) {
    this.flashPlayers[e.pluginId] = e;
    var t, i = e.scheme + "www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + e.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
    mejs.MediaFeatures.isIE ? (t = document.createElement("div"), e.container.appendChild(t), 
    t.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + e.scheme + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e.pluginId + '" width="' + e.width + '" height="' + e.height + '" class="mejs-shim"><param name="movie" value="' + i + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + options.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /></object>') :e.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + e.pluginId + '" data="' + i + '" width="' + e.width + '" height="' + e.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="' + options.flashScriptAccess + '"><param name="wmode" value="transparent"></object>';
  },
  flashReady:function(e) {
    var t = this.flashPlayers[e], i = document.getElementById(e), n = t.pluginMediaElement;
    n.pluginApi = n.pluginElement = i, t.success(n, n.pluginElement), i.cueVideoById(t.videoId);
    var s = t.containerId + "_callback";
    window[s] = function(e) {
      mejs.YouTubeApi.handleStateChange(e, i, n);
    }, i.addEventListener("onStateChange", s), setInterval(function() {
      mejs.YouTubeApi.createEvent(i, n, "timeupdate");
    }, 250), mejs.YouTubeApi.createEvent(i, n, "canplay");
  },
  handleStateChange:function(e, t, i) {
    switch (e) {
     case -1:
      i.paused = !0, i.ended = !0, mejs.YouTubeApi.createEvent(t, i, "loadedmetadata");
      break;

     case 0:
      i.paused = !1, i.ended = !0, mejs.YouTubeApi.createEvent(t, i, "ended");
      break;

     case 1:
      i.paused = !1, i.ended = !1, mejs.YouTubeApi.createEvent(t, i, "play"), mejs.YouTubeApi.createEvent(t, i, "playing");
      break;

     case 2:
      i.paused = !0, i.ended = !1, mejs.YouTubeApi.createEvent(t, i, "pause");
      break;

     case 3:
      mejs.YouTubeApi.createEvent(t, i, "progress");
    }
  }
}, window.onYouTubePlayerAPIReady = function() {
  mejs.YouTubeApi.iFrameReady();
}, window.onYouTubePlayerReady = function(e) {
  mejs.YouTubeApi.flashReady(e);
}, window.mejs = mejs, window.MediaElement = mejs.MediaElement, function(e, t, i) {
  var n = {
    "default":"en",
    locale:{
      language:i.i18n && i.i18n.locale.language || "",
      strings:i.i18n && i.i18n.locale.strings || {}
    },
    pluralForms:[ function() {
      return arguments[1];
    }, function() {
      var e = arguments;
      return 1 === e[0] ? e[1] :e[2];
    }, function() {
      var e = arguments;
      return [ 0, 1 ].indexOf(e[0]) > -1 ? e[1] :e[2];
    }, function() {
      var e = arguments;
      return e[0] % 10 == 1 && e[0] % 100 != 11 ? e[1] :0 !== e[0] ? e[2] :e[3];
    }, function() {
      var e = arguments;
      return 1 === e[0] || 11 === e[0] ? e[1] :2 === e[0] || 12 === e[0] ? e[2] :e[0] > 2 && e[0] < 20 ? e[3] :e[4];
    }, function() {
      return 1 === args[0] ? args[1] :0 === args[0] || args[0] % 100 > 0 && args[0] % 100 < 20 ? args[2] :args[3];
    }, function() {
      var e = arguments;
      return e[0] % 10 == 1 && e[0] % 100 != 11 ? e[1] :e[0] % 10 >= 2 && (e[0] % 100 < 10 || e[0] % 100 >= 20) ? e[2] :[ 3 ];
    }, function() {
      var e = arguments;
      return e[0] % 10 == 1 && e[0] % 100 != 11 ? e[1] :e[0] % 10 >= 2 && e[0] % 10 <= 4 && (e[0] % 100 < 10 || e[0] % 100 >= 20) ? e[2] :e[3];
    }, function() {
      var e = arguments;
      return 1 === e[0] ? e[1] :e[0] >= 2 && e[0] <= 4 ? e[2] :e[3];
    }, function() {
      var e = arguments;
      return 1 === e[0] ? e[1] :e[0] % 10 >= 2 && e[0] % 10 <= 4 && (e[0] % 100 < 10 || e[0] % 100 >= 20) ? e[2] :e[3];
    }, function() {
      var e = arguments;
      return e[0] % 100 == 1 ? e[2] :e[0] % 100 == 2 ? e[3] :e[0] % 100 == 3 || e[0] % 100 == 4 ? e[4] :e[1];
    }, function() {
      var e = arguments;
      return 1 === e[0] ? e[1] :2 === e[0] ? e[2] :e[0] > 2 && e[0] < 7 ? e[3] :e[0] > 6 && e[0] < 11 ? e[4] :e[5];
    }, function() {
      var e = arguments;
      return 0 === e[0] ? e[1] :1 === e[0] ? e[2] :2 === e[0] ? e[3] :e[0] % 100 >= 3 && e[0] % 100 <= 10 ? e[4] :e[0] % 100 >= 11 ? e[5] :e[6];
    }, function() {
      var e = arguments;
      return 1 === e[0] ? e[1] :0 === e[0] || e[0] % 100 > 1 && e[0] % 100 < 11 ? e[2] :e[0] % 100 > 10 && e[0] % 100 < 20 ? e[3] :e[4];
    }, function() {
      var e = arguments;
      return e[0] % 10 == 1 ? e[1] :e[0] % 10 == 2 ? e[2] :e[3];
    }, function() {
      var e = arguments;
      return 11 !== e[0] && e[0] % 10 == 1 ? e[1] :e[2];
    }, function() {
      var e = arguments;
      return 1 === e[0] ? e[1] :e[0] % 10 >= 2 && e[0] % 10 <= 4 && (e[0] % 100 < 10 || e[0] % 100 >= 20) ? e[2] :e[3];
    }, function() {
      var e = arguments;
      return 1 === e[0] ? e[1] :2 === e[0] ? e[2] :8 !== e[0] && 11 !== e[0] ? e[3] :e[4];
    }, function() {
      var e = arguments;
      return 0 === e[0] ? e[1] :e[2];
    }, function() {
      var e = arguments;
      return 1 === e[0] ? e[1] :2 === e[0] ? e[2] :3 === e[0] ? e[3] :e[4];
    }, function() {
      var e = arguments;
      return 0 === e[0] ? e[1] :1 === e[0] ? e[2] :e[3];
    } ],
    getLanguage:function() {
      var e = n.locale.language || n["default"];
      return /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/.exec(e) ? e :n["default"];
    },
    t:function(e, t) {
      if ("string" == typeof e && e.length) {
        var i, s, r = n.getLanguage(), o = function(e, t, i) {
          return "object" != typeof e || "number" != typeof t || "number" != typeof i ? e :"string" == typeof e ? e :n.pluralForms[i].apply(null, [ t ].concat(e));
        }, a = function(e) {
          var t = {
            "&":"&amp;",
            "<":"&lt;",
            ">":"&gt;",
            '"':"&quot;"
          };
          return e.replace(/[&<>"]/g, function(e) {
            return t[e];
          });
        };
        return n.locale.strings && n.locale.strings[r] && (i = n.locale.strings[r][e], "number" == typeof t && (s = n.locale.strings[r]["mejs.plural-form"], 
        i = o.apply(null, [ i, t, s ]))), !i && n.locale.strings && n.locale.strings[n["default"]] && (i = n.locale.strings[n["default"]][e], 
        "number" == typeof t && (s = n.locale.strings[n["default"]]["mejs.plural-form"], 
        i = o.apply(null, [ i, t, s ]))), i = i || e, "number" == typeof t && (i = i.replace("%1", t)), 
        a(i);
      }
      return e;
    }
  };
  "undefined" != typeof mejsL10n && (n.locale.language = mejsL10n.language), i.i18n = n;
}(document, window, mejs), function(e) {
  "use strict";
  "undefined" != typeof mejsL10n && (e[mejsL10n.language] = mejsL10n.strings);
}(mejs.i18n.locale.strings), function(e) {
  "use strict";
  e.en === undefined && (e.en = {
    "mejs.plural-form":1,
    "mejs.download-file":"Download File",
    "mejs.fullscreen-off":"Turn off Fullscreen",
    "mejs.fullscreen-on":"Go Fullscreen",
    "mejs.download-video":"Download Video",
    "mejs.fullscreen":"Fullscreen",
    "mejs.time-jump-forward":[ "Jump forward 1 second", "Jump forward %1 seconds" ],
    "mejs.play":"Play",
    "mejs.pause":"Pause",
    "mejs.close":"Close",
    "mejs.time-slider":"Time Slider",
    "mejs.time-help-text":"Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
    "mejs.time-skip-back":[ "Skip back 1 second", "Skip back %1 seconds" ],
    "mejs.captions-subtitles":"Captions/Subtitles",
    "mejs.none":"None",
    "mejs.mute-toggle":"Mute Toggle",
    "mejs.volume-help-text":"Use Up/Down Arrow keys to increase or decrease volume.",
    "mejs.unmute":"Unmute",
    "mejs.mute":"Mute",
    "mejs.volume-slider":"Volume Slider",
    "mejs.video-player":"Video Player",
    "mejs.audio-player":"Audio Player",
    "mejs.ad-skip":"Skip ad",
    "mejs.ad-skip-info":[ "Skip in 1 second", "Skip in %1 seconds" ],
    "mejs.source-chooser":"Source Chooser"
  });
}(mejs.i18n.locale.strings), "undefined" != typeof jQuery ? mejs.$ = jQuery :"undefined" != typeof Zepto ? (mejs.$ = Zepto, 
Zepto.fn.outerWidth = function(e) {
  var t = $(this).width();
  return e && (t += parseInt($(this).css("margin-right"), 10), t += parseInt($(this).css("margin-left"), 10)), 
  t;
}) :"undefined" != typeof ender && (mejs.$ = ender), function(e) {
  mejs.MepDefaults = {
    poster:"",
    showPosterWhenEnded:!1,
    defaultVideoWidth:480,
    defaultVideoHeight:270,
    videoWidth:-1,
    videoHeight:-1,
    defaultAudioWidth:400,
    defaultAudioHeight:30,
    defaultSeekBackwardInterval:function(e) {
      return .05 * e.duration;
    },
    defaultSeekForwardInterval:function(e) {
      return .05 * e.duration;
    },
    setDimensions:!0,
    audioWidth:-1,
    audioHeight:-1,
    startVolume:.8,
    loop:!1,
    autoRewind:!0,
    enableAutosize:!0,
    timeFormat:"",
    alwaysShowHours:!1,
    showTimecodeFrameCount:!1,
    framesPerSecond:25,
    autosizeProgress:!0,
    alwaysShowControls:!1,
    hideVideoControlsOnLoad:!1,
    clickToPlayPause:!0,
    controlsTimeoutDefault:1500,
    controlsTimeoutMouseEnter:2500,
    controlsTimeoutMouseLeave:1e3,
    iPadUseNativeControls:!1,
    iPhoneUseNativeControls:!1,
    AndroidUseNativeControls:!1,
    features:[ "playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen" ],
    isVideo:!0,
    stretching:"auto",
    enableKeyboard:!0,
    pauseOtherPlayers:!0,
    keyActions:[ {
      keys:[ 32, 179 ],
      action:function(e, t) {
        mejs.MediaFeatures.isFirefox || (t.paused || t.ended ? t.play() :t.pause());
      }
    }, {
      keys:[ 38 ],
      action:function(e, t) {
        e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), 
        e.startControlsTimer());
        var i = Math.min(t.volume + .1, 1);
        t.setVolume(i);
      }
    }, {
      keys:[ 40 ],
      action:function(e, t) {
        e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), 
        e.startControlsTimer());
        var i = Math.max(t.volume - .1, 0);
        t.setVolume(i);
      }
    }, {
      keys:[ 37, 227 ],
      action:function(e, t) {
        if (!isNaN(t.duration) && t.duration > 0) {
          e.isVideo && (e.showControls(), e.startControlsTimer());
          var i = Math.max(t.currentTime - e.options.defaultSeekBackwardInterval(t), 0);
          t.setCurrentTime(i);
        }
      }
    }, {
      keys:[ 39, 228 ],
      action:function(e, t) {
        if (!isNaN(t.duration) && t.duration > 0) {
          e.isVideo && (e.showControls(), e.startControlsTimer());
          var i = Math.min(t.currentTime + e.options.defaultSeekForwardInterval(t), t.duration);
          t.setCurrentTime(i);
        }
      }
    }, {
      keys:[ 70 ],
      action:function(e) {
        "undefined" != typeof e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() :e.enterFullScreen());
      }
    }, {
      keys:[ 77 ],
      action:function(e) {
        e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), 
        e.startControlsTimer()), e.media.muted ? e.setMuted(!1) :e.setMuted(!0);
      }
    } ]
  }, mejs.mepIndex = 0, mejs.players = {}, mejs.MediaElementPlayer = function(t, i) {
    if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(t, i);
    var n = this;
    return n.$media = n.$node = e(t), n.node = n.media = n.$media[0], n.node ? "undefined" != typeof n.node.player ? n.node.player :(void 0 === i && (i = n.$node.data("mejsoptions")), 
    n.options = e.extend({}, mejs.MepDefaults, i), n.options.timeFormat || (n.options.timeFormat = "mm:ss", 
    n.options.alwaysShowHours && (n.options.timeFormat = "hh:mm:ss"), n.options.showTimecodeFrameCount && (n.options.timeFormat += ":ff")), 
    mejs.Utility.calculateTimeFormat(0, n.options, n.options.framesPerSecond || 25), 
    n.id = "mep_" + mejs.mepIndex++, mejs.players[n.id] = n, n.init(), n) :void 0;
  }, mejs.MediaElementPlayer.prototype = {
    hasFocus:!1,
    controlsAreVisible:!0,
    init:function() {
      var t = this, i = mejs.MediaFeatures, n = e.extend(!0, {}, t.options, {
        success:function(e, i) {
          t.meReady(e, i);
        },
        error:function(e) {
          t.handleError(e);
        }
      }), s = t.media.tagName.toLowerCase();
      if (t.isDynamic = "audio" !== s && "video" !== s, t.isDynamic ? t.isVideo = t.options.isVideo :t.isVideo = "audio" !== s && t.options.isVideo, 
      i.isiPad && t.options.iPadUseNativeControls || i.isiPhone && t.options.iPhoneUseNativeControls) t.$media.attr("controls", "controls"), 
      i.isiPad && null !== t.media.getAttribute("autoplay") && t.play(); else if (i.isAndroid && t.options.AndroidUseNativeControls) ; else if (t.isVideo || !t.isVideo && t.options.features.length) {
        t.$media.removeAttr("controls");
        var r = t.isVideo ? mejs.i18n.t("mejs.video-player") :mejs.i18n.t("mejs.audio-player");
        e('<span class="mejs-offscreen">' + r + "</span>").insertBefore(t.$media), t.container = e('<div id="' + t.id + '" class="mejs-container ' + (mejs.MediaFeatures.svgAsImg ? "svg" :"no-svg") + '" tabindex="0" role="application" aria-label="' + r + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(t.$media[0].className).insertBefore(t.$media).focus(function(e) {
          if (!t.controlsAreVisible && !t.hasFocus && t.controlsEnabled && (t.showControls(!0), 
          !t.hasMsNativeFullScreen)) {
            var i = ".mejs-playpause-button > button";
            mejs.Utility.isNodeAfter(e.relatedTarget, t.container[0]) && (i = ".mejs-controls .mejs-button:last-child > button");
            t.container.find(i).focus();
          }
        }), t.options.features.length || t.container.css("background", "transparent").find(".mejs-controls").hide(), 
        t.isVideo && "fill" === t.options.stretching && !t.container.parent("mejs-fill-container").length && (t.outerContainer = t.$media.parent(), 
        t.container.wrap('<div class="mejs-fill-container"/>')), t.container.addClass((i.isAndroid ? "mejs-android " :"") + (i.isiOS ? "mejs-ios " :"") + (i.isiPad ? "mejs-ipad " :"") + (i.isiPhone ? "mejs-iphone " :"") + (t.isVideo ? "mejs-video " :"mejs-audio ")), 
        t.container.find(".mejs-mediaelement").append(t.$media), t.node.player = t, t.controls = t.container.find(".mejs-controls"), 
        t.layers = t.container.find(".mejs-layers");
        var o = t.isVideo ? "video" :"audio", a = o.substring(0, 1).toUpperCase() + o.substring(1);
        t.options[o + "Width"] > 0 || t.options[o + "Width"].toString().indexOf("%") > -1 ? t.width = t.options[o + "Width"] :"" !== t.media.style.width && null !== t.media.style.width ? t.width = t.media.style.width :null !== t.media.getAttribute("width") ? t.width = t.$media.attr("width") :t.width = t.options["default" + a + "Width"], 
        t.options[o + "Height"] > 0 || t.options[o + "Height"].toString().indexOf("%") > -1 ? t.height = t.options[o + "Height"] :"" !== t.media.style.height && null !== t.media.style.height ? t.height = t.media.style.height :null !== t.$media[0].getAttribute("height") ? t.height = t.$media.attr("height") :t.height = t.options["default" + a + "Height"], 
        t.setPlayerSize(t.width, t.height), n.pluginWidth = t.width, n.pluginHeight = t.height;
      } else t.isVideo || t.options.features.length || t.$media.hide();
      mejs.MediaElement(t.$media[0], n), "undefined" != typeof t.container && t.options.features.length && t.controlsAreVisible && t.container.trigger("controlsshown");
    },
    showControls:function(e) {
      var t = this;
      e = void 0 === e || e, t.controlsAreVisible || (e ? (t.controls.removeClass("mejs-offscreen").stop(!0, !0).fadeIn(200, function() {
        t.controlsAreVisible = !0, t.container.trigger("controlsshown");
      }), t.container.find(".mejs-control").removeClass("mejs-offscreen").stop(!0, !0).fadeIn(200, function() {
        t.controlsAreVisible = !0;
      })) :(t.controls.removeClass("mejs-offscreen").css("display", "block"), t.container.find(".mejs-control").removeClass("mejs-offscreen").css("display", "block"), 
      t.controlsAreVisible = !0, t.container.trigger("controlsshown")), t.setControlsSize());
    },
    hideControls:function(t) {
      var i = this;
      t = void 0 === t || t, !i.controlsAreVisible || i.options.alwaysShowControls || i.keyboardAction || i.media.paused || i.media.ended || (t ? (i.controls.stop(!0, !0).fadeOut(200, function() {
        e(this).addClass("mejs-offscreen").css("display", "block"), i.controlsAreVisible = !1, 
        i.container.trigger("controlshidden");
      }), i.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function() {
        e(this).addClass("mejs-offscreen").css("display", "block");
      })) :(i.controls.addClass("mejs-offscreen").css("display", "block"), i.container.find(".mejs-control").addClass("mejs-offscreen").css("display", "block"), 
      i.controlsAreVisible = !1, i.container.trigger("controlshidden")));
    },
    controlsTimer:null,
    startControlsTimer:function(e) {
      var t = this;
      e = void 0 !== e ? e :t.options.controlsTimeoutDefault, t.killControlsTimer("start"), 
      t.controlsTimer = setTimeout(function() {
        t.hideControls(), t.killControlsTimer("hide");
      }, e);
    },
    killControlsTimer:function() {
      var e = this;
      null !== e.controlsTimer && (clearTimeout(e.controlsTimer), delete e.controlsTimer, 
      e.controlsTimer = null);
    },
    controlsEnabled:!0,
    disableControls:function() {
      var e = this;
      e.killControlsTimer(), e.hideControls(!1), this.controlsEnabled = !1;
    },
    enableControls:function() {
      var e = this;
      e.showControls(!1), e.controlsEnabled = !0;
    },
    meReady:function(t, i) {
      var n, s, r = this, o = mejs.MediaFeatures, a = i.getAttribute("autoplay"), l = !(void 0 === a || null === a || "false" === a);
      if (!r.created) {
        if (r.created = !0, r.media = t, r.domNode = i, !(o.isAndroid && r.options.AndroidUseNativeControls || o.isiPad && r.options.iPadUseNativeControls || o.isiPhone && r.options.iPhoneUseNativeControls)) {
          if (!r.isVideo && !r.options.features.length) return l && "native" == t.pluginType && r.play(), 
          void (r.options.success && ("string" == typeof r.options.success ? window[r.options.success](r.media, r.domNode, r) :r.options.success(r.media, r.domNode, r)));
          r.buildposter(r, r.controls, r.layers, r.media), r.buildkeyboard(r, r.controls, r.layers, r.media), 
          r.buildoverlays(r, r.controls, r.layers, r.media), r.findTracks();
          for (n in r.options.features) if (s = r.options.features[n], r["build" + s]) try {
            r["build" + s](r, r.controls, r.layers, r.media);
          } catch (e) {}
          r.container.trigger("controlsready"), r.setPlayerSize(r.width, r.height), r.setControlsSize(), 
          r.isVideo && (mejs.MediaFeatures.hasTouch && !r.options.alwaysShowControls ? r.$media.bind("touchstart", function() {
            r.controlsAreVisible ? r.hideControls(!1) :r.controlsEnabled && r.showControls(!1);
          }) :(r.clickToPlayPauseCallback = function() {
            if (r.options.clickToPlayPause) {
              r.media.paused ? r.play() :r.pause();
              var e = r.$media.closest(".mejs-container").find(".mejs-overlay-button"), t = e.attr("aria-pressed");
              e.attr("aria-pressed", !t);
            }
          }, r.media.addEventListener("click", r.clickToPlayPauseCallback, !1), r.container.bind("mouseenter", function() {
            r.controlsEnabled && (r.options.alwaysShowControls || (r.killControlsTimer("enter"), 
            r.showControls(), r.startControlsTimer(r.options.controlsTimeoutMouseEnter)));
          }).bind("mousemove", function() {
            r.controlsEnabled && (r.controlsAreVisible || r.showControls(), r.options.alwaysShowControls || r.startControlsTimer(r.options.controlsTimeoutMouseEnter));
          }).bind("mouseleave", function() {
            r.controlsEnabled && (r.media.paused || r.options.alwaysShowControls || r.startControlsTimer(r.options.controlsTimeoutMouseLeave));
          })), r.options.hideVideoControlsOnLoad && r.hideControls(!1), l && !r.options.alwaysShowControls && r.hideControls(), 
          r.options.enableAutosize && r.media.addEventListener("loadedmetadata", function(e) {
            r.options.videoHeight <= 0 && null === r.domNode.getAttribute("height") && !isNaN(e.target.videoHeight) && (r.setPlayerSize(e.target.videoWidth, e.target.videoHeight), 
            r.setControlsSize(), r.media.setVideoSize(e.target.videoWidth, e.target.videoHeight));
          }, !1)), r.media.addEventListener("play", function() {
            var e;
            for (e in mejs.players) {
              var t = mejs.players[e];
              t.id == r.id || !r.options.pauseOtherPlayers || t.paused || t.ended || t.pause(), 
              t.hasFocus = !1;
            }
            r.hasFocus = !0;
          }, !1), r.media.addEventListener("ended", function() {
            if (r.options.autoRewind) try {
              r.media.setCurrentTime(0), window.setTimeout(function() {
                e(r.container).find(".mejs-overlay-loading").parent().hide();
              }, 20);
            } catch (e) {}
            "youtube" === r.media.pluginType ? r.media.stop() :r.media.pause(), r.setProgressRail && r.setProgressRail(), 
            r.setCurrentRail && r.setCurrentRail(), r.options.loop ? r.play() :!r.options.alwaysShowControls && r.controlsEnabled && r.showControls();
          }, !1), r.media.addEventListener("loadedmetadata", function() {
            mejs.Utility.calculateTimeFormat(r.duration, r.options, r.options.framesPerSecond || 25), 
            r.updateDuration && r.updateDuration(), r.updateCurrent && r.updateCurrent(), r.isFullScreen || (r.setPlayerSize(r.width, r.height), 
            r.setControlsSize());
          }, !1);
          var c = null;
          r.media.addEventListener("timeupdate", function() {
            c !== this.duration && (c = this.duration, mejs.Utility.calculateTimeFormat(c, r.options, r.options.framesPerSecond || 25), 
            r.updateDuration && r.updateDuration(), r.updateCurrent && r.updateCurrent(), r.setControlsSize());
          }, !1), r.container.focusout(function(t) {
            if (t.relatedTarget) {
              var i = e(t.relatedTarget);
              r.keyboardAction && 0 === i.parents(".mejs-container").length && (r.keyboardAction = !1, 
              r.isVideo && !r.options.alwaysShowControls && r.hideControls(!0));
            }
          }), setTimeout(function() {
            r.setPlayerSize(r.width, r.height), r.setControlsSize();
          }, 50), r.globalBind("resize", function() {
            r.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || r.setPlayerSize(r.width, r.height), 
            r.setControlsSize();
          }), "youtube" == r.media.pluginType && (o.isiOS || o.isAndroid) && (r.container.find(".mejs-overlay-play").hide(), 
          r.container.find(".mejs-poster").hide());
        }
        l && "native" == t.pluginType && r.play(), r.options.success && ("string" == typeof r.options.success ? window[r.options.success](r.media, r.domNode, r) :r.options.success(r.media, r.domNode, r));
      }
    },
    handleError:function(e) {
      var t = this;
      t.controls && t.controls.hide(), t.options.error && t.options.error(e);
    },
    setPlayerSize:function(e, t) {
      var i = this;
      if (!i.options.setDimensions) return !1;
      switch (void 0 !== e && (i.width = e), void 0 !== t && (i.height = t), i.options.stretching) {
       case "fill":
        i.isVideo ? this.setFillMode() :this.setDimensions(i.width, i.height);
        break;

       case "responsive":
        this.setResponsiveMode();
        break;

       case "none":
        this.setDimensions(i.width, i.height);
        break;

       default:
        !0 === this.hasFluidMode() ? this.setResponsiveMode() :this.setDimensions(i.width, i.height);
      }
    },
    hasFluidMode:function() {
      var e = this;
      return e.height.toString().indexOf("%") > 0 || "none" !== e.$node.css("max-width") && "t.width" !== e.$node.css("max-width") || e.$node[0].currentStyle && "100%" === e.$node[0].currentStyle.maxWidth;
    },
    setResponsiveMode:function() {
      var t = this, i = function() {
        return t.isVideo ? t.media.videoWidth && t.media.videoWidth > 0 ? t.media.videoWidth :null !== t.media.getAttribute("width") ? t.media.getAttribute("width") :t.options.defaultVideoWidth :t.options.defaultAudioWidth;
      }(), n = function() {
        return t.isVideo ? t.media.videoHeight && t.media.videoHeight > 0 ? t.media.videoHeight :null !== t.media.getAttribute("height") ? t.media.getAttribute("height") :t.options.defaultVideoHeight :t.options.defaultAudioHeight;
      }(), s = t.container.parent().closest(":visible").width(), r = t.container.parent().closest(":visible").height(), o = t.isVideo || !t.options.autosizeProgress ? parseInt(s * n / i, 10) :n;
      (isNaN(o) || 0 !== r && o > r && r > n) && (o = r), t.container.parent().length > 0 && "body" === t.container.parent()[0].tagName.toLowerCase() && (s = e(window).width(), 
      o = e(window).height()), o && s && (t.container.width(s).height(o), t.$media.add(t.container.find(".mejs-shim")).width("100%").height("100%"), 
      t.isVideo && t.media.setVideoSize && t.media.setVideoSize(s, o), t.layers.children(".mejs-layer").width("100%").height("100%"));
    },
    setFillMode:function() {
      var e = this, t = e.outerContainer;
      t.width() || t.height(e.$media.width()), t.height() || t.height(e.$media.height());
      var i = t.width(), n = t.height();
      e.setDimensions("100%", "100%"), e.container.find(".mejs-poster img").css("display", "block"), 
      targetElement = e.container.find("object, embed, iframe, video");
      var s = e.height, r = e.width, o = i, a = s * i / r, l = r * n / s, c = n, u = !(l > i), h = u ? Math.floor(o) :Math.floor(l), d = u ? Math.floor(a) :Math.floor(c);
      u ? (targetElement.height(d).width(i), e.media.setVideoSize && e.media.setVideoSize(i, d)) :(targetElement.height(n).width(h), 
      e.media.setVideoSize && e.media.setVideoSize(h, n)), targetElement.css({
        "margin-left":Math.floor((i - h) / 2),
        "margin-top":0
      });
    },
    setDimensions:function(e, t) {
      var i = this;
      i.container.width(e).height(t), i.layers.children(".mejs-layer").width(e).height(t);
    },
    setControlsSize:function() {
      var t = this, i = 0, n = 0, s = t.controls.find(".mejs-time-rail"), r = t.controls.find(".mejs-time-total"), o = s.siblings(), a = o.last(), l = null, c = t.options && !t.options.autosizeProgress;
      if (t.container.is(":visible") && s.length && s.is(":visible")) {
        c && (n = parseInt(s.css("width"), 10)), 0 !== n && n || (o.each(function() {
          var t = e(this);
          "absolute" != t.css("position") && t.is(":visible") && (i += e(this).outerWidth(!0));
        }), n = t.controls.width() - i - (s.outerWidth(!0) - s.width()));
        do {
          c || s.width(n), r.width(n - (r.outerWidth(!0) - r.width())), "absolute" != a.css("position") && (l = a.length ? a.position() :null, 
          n--);
        } while (null !== l && l.top.toFixed(2) > 0 && n > 0);
        t.container.trigger("controlsresize");
      }
    },
    buildposter:function(t, i, n, s) {
      var r = this, o = e('<div class="mejs-poster mejs-layer"></div>').appendTo(n), a = t.$media.attr("poster");
      "" !== t.options.poster && (a = t.options.poster), a ? r.setPoster(a) :o.hide(), 
      s.addEventListener("play", function() {
        o.hide();
      }, !1), t.options.showPosterWhenEnded && t.options.autoRewind && s.addEventListener("ended", function() {
        o.show();
      }, !1);
    },
    setPoster:function(t) {
      var i = this, n = i.container.find(".mejs-poster"), s = n.find("img");
      0 === s.length && (s = e('<img width="100%" height="100%" alt="" />').appendTo(n)), 
      s.attr("src", t), n.css({
        "background-image":"url(" + t + ")"
      });
    },
    buildoverlays:function(t, i, n, s) {
      var r = this;
      if (t.isVideo) {
        var o = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(n), a = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(n), l = e('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button" role="button" aria-label="' + mejs.i18n.t("mejs.play") + '" aria-pressed="false"></div></div>').appendTo(n).bind("click", function() {
          if (r.options.clickToPlayPause) {
            s.paused && s.play();
            var t = e(this).find(".mejs-overlay-button"), i = t.attr("aria-pressed");
            t.attr("aria-pressed", !!i);
          }
        });
        s.addEventListener("play", function() {
          l.hide(), o.hide(), i.find(".mejs-time-buffering").hide(), a.hide();
        }, !1), s.addEventListener("playing", function() {
          l.hide(), o.hide(), i.find(".mejs-time-buffering").hide(), a.hide();
        }, !1), s.addEventListener("seeking", function() {
          o.show(), i.find(".mejs-time-buffering").show();
        }, !1), s.addEventListener("seeked", function() {
          o.hide(), i.find(".mejs-time-buffering").hide();
        }, !1), s.addEventListener("pause", function() {
          mejs.MediaFeatures.isiPhone || l.show();
        }, !1), s.addEventListener("waiting", function() {
          o.show(), i.find(".mejs-time-buffering").show();
        }, !1), s.addEventListener("loadeddata", function() {
          o.show(), i.find(".mejs-time-buffering").show(), mejs.MediaFeatures.isAndroid && (s.canplayTimeout = window.setTimeout(function() {
            if (document.createEvent) {
              var e = document.createEvent("HTMLEvents");
              return e.initEvent("canplay", !0, !0), s.dispatchEvent(e);
            }
          }, 300));
        }, !1), s.addEventListener("canplay", function() {
          o.hide(), i.find(".mejs-time-buffering").hide(), clearTimeout(s.canplayTimeout);
        }, !1), s.addEventListener("error", function(e) {
          r.handleError(e), o.hide(), l.hide(), a.show(), a.find(".mejs-overlay-error").html("Error loading this resource");
        }, !1), s.addEventListener("keydown", function(e) {
          r.onkeydown(t, s, e);
        }, !1);
      }
    },
    buildkeyboard:function(t, i, n, s) {
      var r = this;
      r.container.keydown(function() {
        r.keyboardAction = !0;
      }), r.globalBind("keydown", function(i) {
        return t.hasFocus = 0 !== e(i.target).closest(".mejs-container").length && e(i.target).closest(".mejs-container").attr("id") === t.$media.closest(".mejs-container").attr("id"), 
        r.onkeydown(t, s, i);
      }), r.globalBind("click", function(i) {
        t.hasFocus = 0 !== e(i.target).closest(".mejs-container").length;
      });
    },
    onkeydown:function(e, t, i) {
      if (e.hasFocus && e.options.enableKeyboard) for (var n = 0, s = e.options.keyActions.length; n < s; n++) for (var r = e.options.keyActions[n], o = 0, a = r.keys.length; o < a; o++) if (i.keyCode == r.keys[o]) return "function" == typeof i.preventDefault && i.preventDefault(), 
      r.action(e, t, i.keyCode, i), !1;
      return !0;
    },
    findTracks:function() {
      var t = this, i = t.$media.find("track");
      t.tracks = [], i.each(function(i, n) {
        n = e(n), t.tracks.push({
          srclang:n.attr("srclang") ? n.attr("srclang").toLowerCase() :"",
          src:n.attr("src"),
          kind:n.attr("kind"),
          label:n.attr("label") || "",
          entries:[],
          isLoaded:!1
        });
      });
    },
    changeSkin:function(e) {
      this.container[0].className = "mejs-container " + e, this.setPlayerSize(this.width, this.height), 
      this.setControlsSize();
    },
    play:function() {
      this.load(), this.media.play();
    },
    pause:function() {
      try {
        this.media.pause();
      } catch (e) {}
    },
    load:function() {
      this.isLoaded || this.media.load(), this.isLoaded = !0;
    },
    setMuted:function(e) {
      this.media.setMuted(e);
    },
    setCurrentTime:function(e) {
      this.media.setCurrentTime(e);
    },
    getCurrentTime:function() {
      return this.media.currentTime;
    },
    setVolume:function(e) {
      this.media.setVolume(e);
    },
    getVolume:function() {
      return this.media.volume;
    },
    setSrc:function(e) {
      var t = this;
      if ("youtube" === t.media.pluginType) {
        var i;
        if ("string" != typeof e) {
          var n, s;
          for (n = 0; n < e.length; n++) if (s = e[n], this.canPlayType(s.type)) {
            e = s.src;
            break;
          }
        }
        if (-1 !== e.lastIndexOf("youtu.be")) i = e.substr(e.lastIndexOf("/") + 1), -1 !== i.indexOf("?") && (i = i.substr(0, i.indexOf("?"))); else {
          var r = e.match(/[?&]v=([^&#]+)|&|#|$/);
          r && (i = r[1]);
        }
        null !== t.media.getAttribute("autoplay") ? t.media.pluginApi.loadVideoById(i) :t.media.pluginApi.cueVideoById(i);
      } else t.media.setSrc(e);
    },
    remove:function() {
      var e, t, i = this;
      i.container.prev(".mejs-offscreen").remove();
      for (e in i.options.features) if (t = i.options.features[e], i["clean" + t]) try {
        i["clean" + t](i);
      } catch (e) {}
      i.isDynamic ? i.$node.insertBefore(i.container) :(i.$media.prop("controls", !0), 
      i.$node.clone().insertBefore(i.container).show(), i.$node.remove()), "native" !== i.media.pluginType && i.media.remove(), 
      delete mejs.players[i.id], "object" == typeof i.container && i.container.remove(), 
      i.globalUnbind(), delete i.node.player;
    },
    rebuildtracks:function() {
      var e = this;
      e.findTracks(), e.buildtracks(e, e.controls, e.layers, e.media);
    },
    resetSize:function() {
      var e = this;
      setTimeout(function() {
        e.setPlayerSize(e.width, e.height), e.setControlsSize();
      }, 50);
    }
  }, function() {
    function t(t, n) {
      var s = {
        d:[],
        w:[]
      };
      return e.each((t || "").split(" "), function(e, t) {
        var r = t + "." + n;
        0 === r.indexOf(".") ? (s.d.push(r), s.w.push(r)) :s[i.test(t) ? "w" :"d"].push(r);
      }), s.d = s.d.join(" "), s.w = s.w.join(" "), s;
    }
    var i = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
    mejs.MediaElementPlayer.prototype.globalBind = function(i, n, s) {
      var r = this, o = r.node ? r.node.ownerDocument :document;
      i = t(i, r.id), i.d && e(o).bind(i.d, n, s), i.w && e(window).bind(i.w, n, s);
    }, mejs.MediaElementPlayer.prototype.globalUnbind = function(i, n) {
      var s = this, r = s.node ? s.node.ownerDocument :document;
      i = t(i, s.id), i.d && e(r).unbind(i.d, n), i.w && e(window).unbind(i.w, n);
    };
  }(), void 0 !== e && (e.fn.mediaelementplayer = function(t) {
    return !1 === t ? this.each(function() {
      var t = e(this).data("mediaelementplayer");
      t && t.remove(), e(this).removeData("mediaelementplayer");
    }) :this.each(function() {
      e(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, t));
    }), this;
  }, e(document).ready(function() {
    e(".mejs-player").mediaelementplayer();
  })), window.MediaElementPlayer = mejs.MediaElementPlayer;
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    playText:"",
    pauseText:""
  }), e.extend(MediaElementPlayer.prototype, {
    buildplaypause:function(t, i, n, s) {
      function r(e) {
        "play" === e ? (u.removeClass("mejs-play").addClass("mejs-pause"), h.attr({
          title:c,
          "aria-label":c
        })) :(u.removeClass("mejs-pause").addClass("mejs-play"), h.attr({
          title:l,
          "aria-label":l
        }));
      }
      var o = this, a = o.options, l = a.playText ? a.playText :mejs.i18n.t("mejs.play"), c = a.pauseText ? a.pauseText :mejs.i18n.t("mejs.pause"), u = e('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + o.id + '" title="' + l + '" aria-label="' + c + '"></button></div>').appendTo(i).click(function(e) {
        return e.preventDefault(), s.paused ? s.play() :s.pause(), !1;
      }), h = u.find("button");
      r("pse"), s.addEventListener("play", function() {
        r("play");
      }, !1), s.addEventListener("playing", function() {
        r("play");
      }, !1), s.addEventListener("pause", function() {
        r("pse");
      }, !1), s.addEventListener("paused", function() {
        r("pse");
      }, !1);
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    stopText:"Stop"
  }), e.extend(MediaElementPlayer.prototype, {
    buildstop:function(t, i, n, s) {
      var r = this;
      e('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + r.id + '" title="' + r.options.stopText + '" aria-label="' + r.options.stopText + '"></button></div>').appendTo(i).click(function() {
        s.paused || s.pause(), s.currentTime > 0 && (s.setCurrentTime(0), s.pause(), i.find(".mejs-time-current").width("0px"), 
        i.find(".mejs-time-handle").css("left", "0px"), i.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0, t.options)), 
        i.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0, t.options)), 
        n.find(".mejs-poster").show());
      });
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    enableProgressTooltip:!0,
    progressHelpText:""
  }), e.extend(MediaElementPlayer.prototype, {
    buildprogress:function(t, i, n, s) {
      var r = this, o = !1, a = !1, l = 0, c = !1, u = t.options.autoRewind, h = (r.options.progressHelpText ? r.options.progressHelpText :mejs.i18n.t("mejs.time-help-text"), 
      t.options.enableProgressTooltip ? '<span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span>' :"");
      e('<div class="mejs-time-rail"><span  class="mejs-time-total mejs-time-slider"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span>' + h + "</span></div>").appendTo(i), 
      i.find(".mejs-time-buffering").hide(), r.total = i.find(".mejs-time-total"), r.loaded = i.find(".mejs-time-loaded"), 
      r.current = i.find(".mejs-time-current"), r.handle = i.find(".mejs-time-handle"), 
      r.timefloat = i.find(".mejs-time-float"), r.timefloatcurrent = i.find(".mejs-time-float-current"), 
      r.slider = i.find(".mejs-time-slider");
      var d = function(e) {
        var i, n = r.total.offset(), a = r.total.width(), l = 0, c = 0, u = 0;
        i = e.originalEvent && e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0].pageX :e.changedTouches ? e.changedTouches[0].pageX :e.pageX, 
        s.duration && (i < n.left ? i = n.left :i > a + n.left && (i = a + n.left), u = i - n.left, 
        l = u / a, c = l <= .02 ? 0 :l * s.duration, o && c !== s.currentTime && s.setCurrentTime(c), 
        mejs.MediaFeatures.hasTouch || (r.timefloat.css("left", u), r.timefloatcurrent.html(mejs.Utility.secondsToTimeCode(c, t.options)), 
        r.timefloat.show()));
      }, f = function() {
        var e = s.currentTime, i = mejs.i18n.t("mejs.time-slider"), n = mejs.Utility.secondsToTimeCode(e, t.options), o = s.duration;
        r.slider.attr({
          "aria-label":i,
          "aria-valuemin":0,
          "aria-valuemax":o,
          "aria-valuenow":e,
          "aria-valuetext":n,
          role:"slider",
          tabindex:0
        });
      }, p = function() {
        new Date() - l >= 1e3 && s.play();
      };
      r.slider.bind("focus", function() {
        t.options.autoRewind = !1;
      }), r.slider.bind("blur", function() {
        t.options.autoRewind = u;
      }), r.slider.bind("keydown", function(e) {
        new Date() - l >= 1e3 && (c = s.paused);
        var i = e.keyCode, n = s.duration, r = s.currentTime, o = t.options.defaultSeekForwardInterval(s), a = t.options.defaultSeekBackwardInterval(s);
        switch (i) {
         case 37:
         case 40:
          r -= a;
          break;

         case 39:
         case 38:
          r += o;
          break;

         case 36:
          r = 0;
          break;

         case 35:
          r = n;
          break;

         case 32:
         case 13:
          return void (s.paused ? s.play() :s.pause());

         default:
          return;
        }
        return r = r < 0 ? 0 :r >= n ? n :Math.floor(r), l = new Date(), c || s.pause(), 
        r < s.duration && !c && setTimeout(p, 1100), s.setCurrentTime(r), e.preventDefault(), 
        e.stopPropagation(), !1;
      }), r.total.bind("mousedown touchstart", function(e) {
        1 !== e.which && 0 !== e.which || (o = !0, d(e), r.globalBind("mousemove.dur touchmove.dur", function(e) {
          d(e);
        }), r.globalBind("mouseup.dur touchend.dur", function() {
          o = !1, "undefined" != typeof r.timefloat && r.timefloat.hide(), r.globalUnbind(".dur");
        }));
      }).bind("mouseenter", function() {
        a = !0, r.globalBind("mousemove.dur", function(e) {
          d(e);
        }), "undefined" == typeof r.timefloat || mejs.MediaFeatures.hasTouch || r.timefloat.show();
      }).bind("mouseleave", function() {
        a = !1, o || (r.globalUnbind(".dur"), "undefined" != typeof r.timefloat && r.timefloat.hide());
      }), s.addEventListener("progress", function(e) {
        t.setProgressRail(e), t.setCurrentRail(e);
      }, !1), s.addEventListener("timeupdate", function(e) {
        t.setProgressRail(e), t.setCurrentRail(e), f(e);
      }, !1), r.container.on("controlsresize", function(e) {
        t.setProgressRail(e), t.setCurrentRail(e);
      });
    },
    setProgressRail:function(e) {
      var t = this, i = e !== undefined ? e.target :t.media, n = null;
      i && i.buffered && i.buffered.length > 0 && i.buffered.end && i.duration ? n = i.buffered.end(i.buffered.length - 1) / i.duration :i && i.bytesTotal !== undefined && i.bytesTotal > 0 && i.bufferedBytes !== undefined ? n = i.bufferedBytes / i.bytesTotal :e && e.lengthComputable && 0 !== e.total && (n = e.loaded / e.total), 
      null !== n && (n = Math.min(1, Math.max(0, n)), t.loaded && t.total && t.loaded.width(t.total.width() * n));
    },
    setCurrentRail:function() {
      var e = this;
      if (e.media.currentTime !== undefined && e.media.duration && e.total && e.handle) {
        var t = Math.round(e.total.width() * e.media.currentTime / e.media.duration), i = t - Math.round(e.handle.outerWidth(!0) / 2);
        e.current.width(t), e.handle.css("left", i);
      }
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    duration:-1,
    timeAndDurationSeparator:"<span> | </span>"
  }), e.extend(MediaElementPlayer.prototype, {
    buildcurrent:function(t, i, n, s) {
      var r = this;
      e('<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">' + mejs.Utility.secondsToTimeCode(0, t.options) + "</span></div>").appendTo(i), 
      r.currenttime = r.controls.find(".mejs-currenttime"), s.addEventListener("timeupdate", function() {
        r.controlsAreVisible && t.updateCurrent();
      }, !1);
    },
    buildduration:function(t, i, n, s) {
      var r = this;
      i.children().last().find(".mejs-currenttime").length > 0 ? e(r.options.timeAndDurationSeparator + '<span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(r.options.duration, r.options) + "</span>").appendTo(i.find(".mejs-time")) :(i.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"), 
      e('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(r.options.duration, r.options) + "</span></div>").appendTo(i)), 
      r.durationD = r.controls.find(".mejs-duration"), s.addEventListener("timeupdate", function() {
        r.controlsAreVisible && t.updateDuration();
      }, !1);
    },
    updateCurrent:function() {
      var e = this, t = e.media.currentTime;
      isNaN(t) && (t = 0), e.currenttime && e.currenttime.html(mejs.Utility.secondsToTimeCode(t, e.options));
    },
    updateDuration:function() {
      var e = this, t = e.media.duration;
      e.options.duration > 0 && (t = e.options.duration), isNaN(t) && (t = 0), e.container.toggleClass("mejs-long-video", t > 3600), 
      e.durationD && t > 0 && e.durationD.html(mejs.Utility.secondsToTimeCode(t, e.options));
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    muteText:mejs.i18n.t("mejs.mute-toggle"),
    allyVolumeControlText:mejs.i18n.t("mejs.volume-help-text"),
    hideVolumeOnTouchDevices:!0,
    audioVolume:"horizontal",
    videoVolume:"vertical"
  }), e.extend(MediaElementPlayer.prototype, {
    buildvolume:function(t, i, n, s) {
      if (!mejs.MediaFeatures.isAndroid && !mejs.MediaFeatures.isiOS || !this.options.hideVolumeOnTouchDevices) {
        var r = this, o = r.isVideo ? r.options.videoVolume :r.options.audioVolume, a = "horizontal" == o ? e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + r.id + '" title="' + r.options.muteText + '" aria-label="' + r.options.muteText + '"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">' + r.options.allyVolumeControlText + '</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>').appendTo(i) :e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + r.id + '" title="' + r.options.muteText + '" aria-label="' + r.options.muteText + '"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">' + r.options.allyVolumeControlText + '</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>').appendTo(i), l = r.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"), c = r.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"), u = r.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"), h = r.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"), d = function(e, t) {
          if (!l.is(":visible") && void 0 === t) return l.show(), d(e, !0), void l.hide();
          e = Math.max(0, e), e = Math.min(e, 1), 0 === e ? (a.removeClass("mejs-mute").addClass("mejs-unmute"), 
          a.children("button").attr("title", mejs.i18n.t("mejs.unmute")).attr("aria-label", mejs.i18n.t("mejs.unmute"))) :(a.removeClass("mejs-unmute").addClass("mejs-mute"), 
          a.children("button").attr("title", mejs.i18n.t("mejs.mute")).attr("aria-label", mejs.i18n.t("mejs.mute")));
          var i = c.position();
          if ("vertical" == o) {
            var n = c.height(), s = n - n * e;
            h.css("top", Math.round(i.top + s - h.height() / 2)), u.height(n - s), u.css("top", i.top + s);
          } else {
            var r = c.width(), f = r * e;
            h.css("left", Math.round(i.left + f - h.width() / 2)), u.width(Math.round(f));
          }
        }, f = function(e) {
          var t = null, i = c.offset();
          if ("vertical" === o) {
            var n = c.height();
            if (t = (n - (e.pageY - i.top)) / n, 0 === i.top || 0 === i.left) return;
          } else {
            var r = c.width();
            t = (e.pageX - i.left) / r;
          }
          t = Math.max(0, t), t = Math.min(t, 1), d(t), 0 === t ? s.setMuted(!0) :s.setMuted(!1), 
          s.setVolume(t);
        }, p = !1, m = !1;
        a.hover(function() {
          l.show(), m = !0;
        }, function() {
          m = !1, p || "vertical" != o || l.hide();
        });
        var g = function() {
          var e = Math.floor(100 * s.volume);
          l.attr({
            "aria-label":mejs.i18n.t("mejs.volume-slider"),
            "aria-valuemin":0,
            "aria-valuemax":100,
            "aria-valuenow":e,
            "aria-valuetext":e + "%",
            role:"slider",
            tabindex:0
          });
        };
        l.bind("mouseover", function() {
          m = !0;
        }).bind("mousedown", function(e) {
          return f(e), r.globalBind("mousemove.vol", function(e) {
            f(e);
          }), r.globalBind("mouseup.vol", function() {
            p = !1, r.globalUnbind(".vol"), m || "vertical" != o || l.hide();
          }), p = !0, !1;
        }).bind("keydown", function(e) {
          var t = e.keyCode, i = s.volume;
          switch (t) {
           case 38:
            i = Math.min(i + .1, 1);
            break;

           case 40:
            i = Math.max(0, i - .1);
            break;

           default:
            return !0;
          }
          return p = !1, d(i), s.setVolume(i), !1;
        }), a.find("button").click(function() {
          s.setMuted(!s.muted);
        }), a.find("button").bind("focus", function() {
          l.show();
        }), s.addEventListener("volumechange", function(e) {
          p || (s.muted ? (d(0), a.removeClass("mejs-mute").addClass("mejs-unmute")) :(d(s.volume), 
          a.removeClass("mejs-unmute").addClass("mejs-mute"))), g(e);
        }, !1), 0 === t.options.startVolume && s.setMuted(!0), "native" === s.pluginType && s.setVolume(t.options.startVolume), 
        r.container.on("controlsresize", function() {
          s.muted ? (d(0), a.removeClass("mejs-mute").addClass("mejs-unmute")) :(d(s.volume), 
          a.removeClass("mejs-unmute").addClass("mejs-mute"));
        });
      }
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    usePluginFullScreen:!0,
    newWindowCallback:function() {
      return "";
    },
    fullscreenText:""
  }), e.extend(MediaElementPlayer.prototype, {
    isFullScreen:!1,
    isNativeFullScreen:!1,
    isInIframe:!1,
    fullscreenMode:"",
    buildfullscreen:function(t, i, n, s) {
      if (t.isVideo) {
        t.isInIframe = window.location != window.parent.location, s.addEventListener("loadstart", function() {
          t.detectFullscreenMode();
        });
        var r = this, o = null, a = r.options.fullscreenText ? r.options.fullscreenText :mejs.i18n.t("mejs.fullscreen"), l = e('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + r.id + '" title="' + a + '" aria-label="' + a + '"></button></div>').appendTo(i).on("click", function() {
          mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || t.isFullScreen ? t.exitFullScreen() :t.enterFullScreen();
        }).on("mouseover", function() {
          if ("plugin-hover" == r.fullscreenMode) {
            null !== o && (clearTimeout(o), delete o);
            var e = l.offset(), i = t.container.offset();
            s.positionFullscreenButton(e.left - i.left, e.top - i.top, !0);
          }
        }).on("mouseout", function() {
          "plugin-hover" == r.fullscreenMode && (null !== o && (clearTimeout(o), delete o), 
          o = setTimeout(function() {
            s.hideFullscreenButton();
          }, 1500));
        });
        if (t.fullscreenBtn = l, r.globalBind("keydown", function(e) {
          27 == e.keyCode && (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || r.isFullScreen) && t.exitFullScreen();
        }), r.normalHeight = 0, r.normalWidth = 0, mejs.MediaFeatures.hasTrueNativeFullScreen) {
          var c = function() {
            t.isFullScreen && (mejs.MediaFeatures.isFullScreen() ? (t.isNativeFullScreen = !0, 
            t.setControlsSize()) :(t.isNativeFullScreen = !1, t.exitFullScreen()));
          };
          t.globalBind(mejs.MediaFeatures.fullScreenEventName, c);
        }
      }
    },
    detectFullscreenMode:function() {
      var e = this, t = "", i = mejs.MediaFeatures;
      return i.hasTrueNativeFullScreen && "native" === e.media.pluginType ? t = "native-native" :i.hasTrueNativeFullScreen && "native" !== e.media.pluginType && !i.hasFirefoxPluginMovingProblem ? t = "plugin-native" :e.usePluginFullScreen ? mejs.MediaFeatures.supportsPointerEvents ? (t = "plugin-click", 
      e.createPluginClickThrough()) :t = "plugin-hover" :t = "fullwindow", e.fullscreenMode = t, 
      t;
    },
    isPluginClickThroughCreated:!1,
    createPluginClickThrough:function() {
      var t = this;
      if (!t.isPluginClickThroughCreated) {
        var i, n, s = !1, r = function() {
          if (s) {
            for (var e in o) o[e].hide();
            t.fullscreenBtn.css("pointer-events", ""), t.controls.css("pointer-events", ""), 
            t.media.removeEventListener("click", t.clickToPlayPauseCallback), s = !1;
          }
        }, o = {}, a = [ "top", "left", "right", "bottom" ], l = function() {
          var e = fullscreenBtn.offset().left - t.container.offset().left, n = fullscreenBtn.offset().top - t.container.offset().top, s = fullscreenBtn.outerWidth(!0), r = fullscreenBtn.outerHeight(!0), a = t.container.width(), l = t.container.height();
          for (i in o) o[i].css({
            position:"absolute",
            top:0,
            left:0
          });
          o.top.width(a).height(n), o.left.width(e).height(r).css({
            top:n
          }), o.right.width(a - e - s).height(r).css({
            top:n,
            left:e + s
          }), o.bottom.width(a).height(l - r - n).css({
            top:n + r
          });
        };
        for (t.globalBind("resize", function() {
          l();
        }), i = 0, n = a.length; i < n; i++) o[a[i]] = e('<div class="mejs-fullscreen-hover" />').appendTo(t.container).mouseover(r).hide();
        fullscreenBtn.on("mouseover", function() {
          if (!t.isFullScreen) {
            var e = fullscreenBtn.offset(), n = player.container.offset();
            media.positionFullscreenButton(e.left - n.left, e.top - n.top, !1), t.fullscreenBtn.css("pointer-events", "none"), 
            t.controls.css("pointer-events", "none"), t.media.addEventListener("click", t.clickToPlayPauseCallback);
            for (i in o) o[i].show();
            l(), s = !0;
          }
        }), media.addEventListener("fullscreenchange", function() {
          t.isFullScreen = !t.isFullScreen, t.isFullScreen ? t.media.removeEventListener("click", t.clickToPlayPauseCallback) :t.media.addEventListener("click", t.clickToPlayPauseCallback), 
          r();
        }), t.globalBind("mousemove", function(e) {
          if (s) {
            var i = fullscreenBtn.offset();
            (e.pageY < i.top || e.pageY > i.top + fullscreenBtn.outerHeight(!0) || e.pageX < i.left || e.pageX > i.left + fullscreenBtn.outerWidth(!0)) && (fullscreenBtn.css("pointer-events", ""), 
            t.controls.css("pointer-events", ""), s = !1);
          }
        }), t.isPluginClickThroughCreated = !0;
      }
    },
    cleanfullscreen:function(e) {
      e.exitFullScreen();
    },
    containerSizeTimeout:null,
    enterFullScreen:function() {
      var t = this;
      if (mejs.MediaFeatures.isiOS && mejs.MediaFeatures.hasiOSFullScreen && "function" == typeof t.media.webkitEnterFullscreen) return void t.media.webkitEnterFullscreen();
      e(document.documentElement).addClass("mejs-fullscreen"), t.normalHeight = t.container.height(), 
      t.normalWidth = t.container.width(), "native-native" === t.fullscreenMode || "plugin-native" === t.fullscreenMode ? (mejs.MediaFeatures.requestFullScreen(t.container[0]), 
      t.isInIframe && setTimeout(function i() {
        if (t.isNativeFullScreen) {
          var n = e(window).width(), s = screen.width;
          Math.abs(s - n) > s * .002 ? t.exitFullScreen() :setTimeout(i, 500);
        }
      }, 1e3)) :t.fullscreeMode, t.container.addClass("mejs-container-fullscreen").width("100%").height("100%"), 
      t.containerSizeTimeout = setTimeout(function() {
        t.container.css({
          width:"100%",
          height:"100%"
        }), t.setControlsSize();
      }, 500), "native" === t.media.pluginType ? t.$media.width("100%").height("100%") :(t.container.find(".mejs-shim").width("100%").height("100%"), 
      setTimeout(function() {
        var i = e(window), n = i.width(), s = i.height();
        t.media.setVideoSize(n, s);
      }, 500)), t.layers.children("div").width("100%").height("100%"), t.fullscreenBtn && t.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"), 
      t.setControlsSize(), t.isFullScreen = !0;
      var i = Math.min(screen.width / t.width, screen.height / t.height);
      t.container.find(".mejs-captions-text").css("font-size", 100 * i + "%"), t.container.find(".mejs-captions-text").css("line-height", "normal"), 
      t.container.find(".mejs-captions-position").css("bottom", "45px"), t.container.trigger("enteredfullscreen");
    },
    exitFullScreen:function() {
      var t = this;
      clearTimeout(t.containerSizeTimeout), mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || t.isFullScreen) && mejs.MediaFeatures.cancelFullScreen(), 
      e(document.documentElement).removeClass("mejs-fullscreen"), t.container.removeClass("mejs-container-fullscreen").width(t.normalWidth).height(t.normalHeight), 
      "native" === t.media.pluginType ? t.$media.width(t.normalWidth).height(t.normalHeight) :(t.container.find(".mejs-shim").width(t.normalWidth).height(t.normalHeight), 
      t.media.setVideoSize(t.normalWidth, t.normalHeight)), t.layers.children("div").width(t.normalWidth).height(t.normalHeight), 
      t.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"), t.setControlsSize(), 
      t.isFullScreen = !1, t.container.find(".mejs-captions-text").css("font-size", ""), 
      t.container.find(".mejs-captions-text").css("line-height", ""), t.container.find(".mejs-captions-position").css("bottom", ""), 
      t.container.trigger("exitedfullscreen");
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    speeds:[ "2.00", "1.50", "1.25", "1.00", "0.75" ],
    defaultSpeed:"1.00",
    speedChar:"x"
  }), e.extend(MediaElementPlayer.prototype, {
    buildspeed:function(t, i, n, s) {
      var r = this;
      if ("native" == r.media.pluginType) {
        for (var o = null, a = null, l = null, c = null, u = [], h = !1, d = 0, f = r.options.speeds.length; d < f; d++) {
          var p = r.options.speeds[d];
          "string" == typeof p ? (u.push({
            name:p + r.options.speedChar,
            value:p
          }), p === r.options.defaultSpeed && (h = !0)) :(u.push(p), p.value === r.options.defaultSpeed && (h = !0));
        }
        h || u.push({
          name:r.options.defaultSpeed + r.options.speedChar,
          value:r.options.defaultSpeed
        }), u.sort(function(e, t) {
          return parseFloat(t.value) - parseFloat(e.value);
        });
        var m = function(e) {
          for (d = 0, f = u.length; d < f; d++) if (u[d].value === e) return u[d].name;
        }, g = '<div class="mejs-button mejs-speed-button"><button type="button">' + m(r.options.defaultSpeed) + '</button><div class="mejs-speed-selector"><ul>';
        for (d = 0, il = u.length; d < il; d++) c = r.id + "-speed-" + u[d].value, g += '<li><input type="radio" name="speed" value="' + u[d].value + '" id="' + c + '" ' + (u[d].value === r.options.defaultSpeed ? " checked" :"") + ' /><label for="' + c + '" ' + (u[d].value === r.options.defaultSpeed ? ' class="mejs-speed-selected"' :"") + ">" + u[d].name + "</label></li>";
        g += "</ul></div></div>", o = e(g).appendTo(i), a = o.find(".mejs-speed-selector"), 
        l = r.options.defaultSpeed, s.addEventListener("loadedmetadata", function() {
          l && (s.playbackRate = parseFloat(l));
        }, !0), a.on("click", 'input[type="radio"]', function() {
          var t = e(this).attr("value");
          l = t, s.playbackRate = parseFloat(t), o.find("button").html(m(t)), o.find(".mejs-speed-selected").removeClass("mejs-speed-selected"), 
          o.find('input[type="radio"]:checked').next().addClass("mejs-speed-selected");
        }), o.one("mouseenter focusin", function() {
          a.height(o.find(".mejs-speed-selector ul").outerHeight(!0) + o.find(".mejs-speed-translations").outerHeight(!0)).css("top", -1 * a.height() + "px");
        });
      }
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    startLanguage:"",
    tracksText:"",
    tracksAriaLive:!1,
    hideCaptionsButtonWhenEmpty:!0,
    toggleCaptionsButtonWhenOnlyOne:!1,
    slidesSelector:""
  }), e.extend(MediaElementPlayer.prototype, {
    hasChapters:!1,
    cleartracks:function(e) {
      e && (e.captions && e.captions.remove(), e.chapters && e.chapters.remove(), e.captionsText && e.captionsText.remove(), 
      e.captionsButton && e.captionsButton.remove());
    },
    buildtracks:function(t, i, n, s) {
      if (0 !== t.tracks.length) {
        var r, o, a = this, l = a.options.tracksAriaLive ? 'role="log" aria-live="assertive" aria-atomic="false"' :"", c = a.options.tracksText ? a.options.tracksText :mejs.i18n.t("mejs.captions-subtitles");
        if (a.domNode.textTracks) for (r = a.domNode.textTracks.length - 1; r >= 0; r--) a.domNode.textTracks[r].mode = "hidden";
        a.cleartracks(t, i, n, s), t.chapters = e('<div class="mejs-chapters mejs-layer"></div>').prependTo(n).hide(), 
        t.captions = e('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" ' + l + '><span class="mejs-captions-text"></span></div></div>').prependTo(n).hide(), 
        t.captionsText = t.captions.find(".mejs-captions-text"), t.captionsButton = e('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + a.id + '" title="' + c + '" aria-label="' + c + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + t.id + '_captions" id="' + t.id + '_captions_none" value="none" checked="checked" /><label for="' + t.id + '_captions_none">' + mejs.i18n.t("mejs.none") + "</label></li></ul></div></div>").appendTo(i);
        var u = 0;
        for (r = 0; r < t.tracks.length; r++) "subtitles" !== (o = t.tracks[r].kind) && "captions" !== o || u++;
        for (a.options.toggleCaptionsButtonWhenOnlyOne && 1 == u ? t.captionsButton.on("click", function() {
          null === t.selectedTrack ? lang = t.tracks[0].srclang :lang = "none", t.setTrack(lang);
        }) :(t.captionsButton.on("mouseenter focusin", function() {
          e(this).find(".mejs-captions-selector").removeClass("mejs-offscreen");
        }).on("click", "input[type=radio]", function() {
          lang = this.value, t.setTrack(lang);
        }), t.captionsButton.on("mouseleave focusout", function() {
          e(this).find(".mejs-captions-selector").addClass("mejs-offscreen");
        })), t.options.alwaysShowControls ? t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") :t.container.bind("controlsshown", function() {
          t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover");
        }).bind("controlshidden", function() {
          s.paused || t.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover");
        }), t.trackToLoad = -1, t.selectedTrack = null, t.isLoadingTrack = !1, r = 0; r < t.tracks.length; r++) "subtitles" !== (o = t.tracks[r].kind) && "captions" !== o || t.addTrackButton(t.tracks[r].srclang, t.tracks[r].label);
        t.loadNextTrack(), s.addEventListener("timeupdate", function() {
          t.displayCaptions();
        }, !1), "" !== t.options.slidesSelector && (t.slidesContainer = e(t.options.slidesSelector), 
        s.addEventListener("timeupdate", function() {
          t.displaySlides();
        }, !1)), s.addEventListener("loadedmetadata", function() {
          t.displayChapters();
        }, !1), t.container.hover(function() {
          t.hasChapters && (t.chapters.removeClass("mejs-offscreen"), t.chapters.fadeIn(200).height(t.chapters.find(".mejs-chapter").outerHeight()));
        }, function() {
          t.hasChapters && !s.paused && t.chapters.fadeOut(200, function() {
            e(this).addClass("mejs-offscreen"), e(this).css("display", "block");
          });
        }), a.container.on("controlsresize", function() {
          a.adjustLanguageBox();
        }), null !== t.node.getAttribute("autoplay") && t.chapters.addClass("mejs-offscreen");
      }
    },
    setTrack:function(e) {
      var t, i = this;
      if ("none" == e) i.selectedTrack = null, i.captionsButton.removeClass("mejs-captions-enabled"); else for (t = 0; t < i.tracks.length; t++) if (i.tracks[t].srclang == e) {
        null === i.selectedTrack && i.captionsButton.addClass("mejs-captions-enabled"), 
        i.selectedTrack = i.tracks[t], i.captions.attr("lang", i.selectedTrack.srclang), 
        i.displayCaptions();
        break;
      }
    },
    loadNextTrack:function() {
      var e = this;
      e.trackToLoad++, e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0, e.loadTrack(e.trackToLoad)) :(e.isLoadingTrack = !1, 
      e.checkForTracks());
    },
    loadTrack:function(t) {
      var i = this, n = i.tracks[t], s = function() {
        n.isLoaded = !0, i.enableTrackButton(n.srclang, n.label), i.loadNextTrack();
      };
      n.src === undefined && "" === n.src || e.ajax({
        url:n.src,
        dataType:"text",
        success:function(e) {
          "string" == typeof e && /<tt\s+xml/gi.exec(e) ? n.entries = mejs.TrackFormatParser.dfxp.parse(e) :n.entries = mejs.TrackFormatParser.webvtt.parse(e), 
          s(), "chapters" == n.kind && i.media.addEventListener("play", function() {
            i.media.duration > 0 && i.displayChapters(n);
          }, !1), "slides" == n.kind && i.setupSlides(n);
        },
        error:function() {
          i.removeTrackButton(n.srclang), i.loadNextTrack();
        }
      });
    },
    enableTrackButton:function(t, i) {
      var n = this;
      "" === i && (i = mejs.language.codes[t] || t), n.captionsButton.find("input[value=" + t + "]").prop("disabled", !1).siblings("label").html(i), 
      n.options.startLanguage == t && e("#" + n.id + "_captions_" + t).prop("checked", !0).trigger("click"), 
      n.adjustLanguageBox();
    },
    removeTrackButton:function(e) {
      var t = this;
      t.captionsButton.find("input[value=" + e + "]").closest("li").remove(), t.adjustLanguageBox();
    },
    addTrackButton:function(t, i) {
      var n = this;
      "" === i && (i = mejs.language.codes[t] || t), n.captionsButton.find("ul").append(e('<li><input type="radio" name="' + n.id + '_captions" id="' + n.id + "_captions_" + t + '" value="' + t + '" disabled="disabled" /><label for="' + n.id + "_captions_" + t + '">' + i + " (loading)</label></li>")), 
      n.adjustLanguageBox(), n.container.find(".mejs-captions-translations option[value=" + t + "]").remove();
    },
    adjustLanguageBox:function() {
      var e = this;
      e.captionsButton.find(".mejs-captions-selector").height(e.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + e.captionsButton.find(".mejs-captions-translations").outerHeight(!0));
    },
    checkForTracks:function() {
      var e = this, t = !1;
      if (e.options.hideCaptionsButtonWhenEmpty) {
        for (var i = 0; i < e.tracks.length; i++) {
          var n = e.tracks[i].kind;
          if (("subtitles" === n || "captions" === n) && e.tracks[i].isLoaded) {
            t = !0;
            break;
          }
        }
        t || (e.captionsButton.hide(), e.setControlsSize());
      }
    },
    displayCaptions:function() {
      if ("undefined" != typeof this.tracks) {
        var e, t = this, i = t.selectedTrack;
        if (null !== i && i.isLoaded) {
          for (e = 0; e < i.entries.times.length; e++) if (t.media.currentTime >= i.entries.times[e].start && t.media.currentTime <= i.entries.times[e].stop) return t.captionsText.html(i.entries.text[e]).attr("class", "mejs-captions-text " + (i.entries.times[e].identifier || "")), 
          void t.captions.show().height(0);
          t.captions.hide();
        } else t.captions.hide();
      }
    },
    setupSlides:function(e) {
      var t = this;
      t.slides = e, t.slides.entries.imgs = [ t.slides.entries.text.length ], t.showSlide(0);
    },
    showSlide:function(t) {
      if ("undefined" != typeof this.tracks && "undefined" != typeof this.slidesContainer) {
        var i = this, n = i.slides.entries.text[t], s = i.slides.entries.imgs[t];
        void 0 === s || "undefined" == typeof s.fadeIn ? i.slides.entries.imgs[t] = s = e('<img src="' + n + '">').on("load", function() {
          s.appendTo(i.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut();
        }) :s.is(":visible") || s.is(":animated") || s.fadeIn().siblings(":visible").fadeOut();
      }
    },
    displaySlides:function() {
      if ("undefined" != typeof this.slides) {
        var e, t = this, i = t.slides;
        for (e = 0; e < i.entries.times.length; e++) if (t.media.currentTime >= i.entries.times[e].start && t.media.currentTime <= i.entries.times[e].stop) return void t.showSlide(e);
      }
    },
    displayChapters:function() {
      var e, t = this;
      for (e = 0; e < t.tracks.length; e++) if ("chapters" == t.tracks[e].kind && t.tracks[e].isLoaded) {
        t.drawChapters(t.tracks[e]), t.hasChapters = !0;
        break;
      }
    },
    drawChapters:function(t) {
      var i, n, s = this, r = 0, o = 0;
      for (s.chapters.empty(), i = 0; i < t.entries.times.length; i++) n = t.entries.times[i].stop - t.entries.times[i].start, 
      r = Math.floor(n / s.media.duration * 100), (r + o > 100 || i == t.entries.times.length - 1 && r + o < 100) && (r = 100 - o), 
      s.chapters.append(e('<div class="mejs-chapter" rel="' + t.entries.times[i].start + '" style="left: ' + o.toString() + "%;width: " + r.toString() + '%;"><div class="mejs-chapter-block' + (i == t.entries.times.length - 1 ? " mejs-chapter-block-last" :"") + '"><span class="ch-title">' + t.entries.text[i] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(t.entries.times[i].start, s.options) + "&ndash;" + mejs.Utility.secondsToTimeCode(t.entries.times[i].stop, s.options) + "</span></div></div>")), 
      o += r;
      s.chapters.find("div.mejs-chapter").click(function() {
        s.media.setCurrentTime(parseFloat(e(this).attr("rel"))), s.media.paused && s.media.play();
      }), s.chapters.show();
    }
  }), mejs.language = {
    codes:{
      af:"Afrikaans",
      sq:"Albanian",
      ar:"Arabic",
      be:"Belarusian",
      bg:"Bulgarian",
      ca:"Catalan",
      zh:"Chinese",
      "zh-cn":"Chinese Simplified",
      "zh-tw":"Chinese Traditional",
      hr:"Croatian",
      cs:"Czech",
      da:"Danish",
      nl:"Dutch",
      en:"English",
      et:"Estonian",
      fl:"Filipino",
      fi:"Finnish",
      fr:"French",
      gl:"Galician",
      de:"German",
      el:"Greek",
      ht:"Haitian Creole",
      iw:"Hebrew",
      hi:"Hindi",
      hu:"Hungarian",
      is:"Icelandic",
      id:"Indonesian",
      ga:"Irish",
      it:"Italian",
      ja:"Japanese",
      ko:"Korean",
      lv:"Latvian",
      lt:"Lithuanian",
      mk:"Macedonian",
      ms:"Malay",
      mt:"Maltese",
      no:"Norwegian",
      fa:"Persian",
      pl:"Polish",
      pt:"Portuguese",
      ro:"Romanian",
      ru:"Russian",
      sr:"Serbian",
      sk:"Slovak",
      sl:"Slovenian",
      es:"Spanish",
      sw:"Swahili",
      sv:"Swedish",
      tl:"Tagalog",
      th:"Thai",
      tr:"Turkish",
      uk:"Ukrainian",
      vi:"Vietnamese",
      cy:"Welsh",
      yi:"Yiddish"
    }
  }, mejs.TrackFormatParser = {
    webvtt:{
      pattern_timecode:/^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
      parse:function(t) {
        for (var i, n, s, r = 0, o = mejs.TrackFormatParser.split2(t, /\r?\n/), a = {
          text:[],
          times:[]
        }; r < o.length; r++) {
          if ((i = this.pattern_timecode.exec(o[r])) && r < o.length) {
            for (r - 1 >= 0 && "" !== o[r - 1] && (s = o[r - 1]), r++, n = o[r], r++; "" !== o[r] && r < o.length; ) n = n + "\n" + o[r], 
            r++;
            n = e.trim(n).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), 
            a.text.push(n), a.times.push({
              identifier:s,
              start:0 === mejs.Utility.convertSMPTEtoSeconds(i[1]) ? .2 :mejs.Utility.convertSMPTEtoSeconds(i[1]),
              stop:mejs.Utility.convertSMPTEtoSeconds(i[3]),
              settings:i[5]
            });
          }
          s = "";
        }
        return a;
      }
    },
    dfxp:{
      parse:function(t) {
        t = e(t).filter("tt");
        var i, n, s = 0, r = t.children("div").eq(0), o = r.find("p"), a = t.find("#" + r.attr("style")), l = {
          text:[],
          times:[]
        };
        if (a.length) {
          var c = a.removeAttr("id").get(0).attributes;
          if (c.length) for (i = {}, s = 0; s < c.length; s++) i[c[s].name.split(":")[1]] = c[s].value;
        }
        for (s = 0; s < o.length; s++) {
          var u, h = {
            start:null,
            stop:null,
            style:null
          };
          if (o.eq(s).attr("begin") && (h.start = mejs.Utility.convertSMPTEtoSeconds(o.eq(s).attr("begin"))), 
          !h.start && o.eq(s - 1).attr("end") && (h.start = mejs.Utility.convertSMPTEtoSeconds(o.eq(s - 1).attr("end"))), 
          o.eq(s).attr("end") && (h.stop = mejs.Utility.convertSMPTEtoSeconds(o.eq(s).attr("end"))), 
          !h.stop && o.eq(s + 1).attr("begin") && (h.stop = mejs.Utility.convertSMPTEtoSeconds(o.eq(s + 1).attr("begin"))), 
          i) {
            u = "";
            for (var d in i) u += d + ":" + i[d] + ";";
          }
          u && (h.style = u), 0 === h.start && (h.start = .2), l.times.push(h), n = e.trim(o.eq(s).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), 
          l.text.push(n);
        }
        return l;
      }
    },
    split2:function(e, t) {
      return e.split(t);
    }
  }, 3 != "x\n\ny".split(/\n/gi).length && (mejs.TrackFormatParser.split2 = function(e, t) {
    var i, n = [], s = "";
    for (i = 0; i < e.length; i++) s += e.substring(i, i + 1), t.test(s) && (n.push(s.replace(t, "")), 
    s = "");
    return n.push(s), n;
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    sourcechooserText:""
  }), e.extend(MediaElementPlayer.prototype, {
    buildsourcechooser:function(t, i, n, s) {
      var r, o = this, a = o.options.sourcechooserText ? o.options.sourcechooserText :mejs.i18n.t("mejs.source-chooser");
      t.sourcechooserButton = e('<div class="mejs-button mejs-sourcechooser-button"><button type="button" role="button" aria-haspopup="true" aria-owns="' + o.id + '" title="' + a + '" aria-label="' + a + '"></button><div class="mejs-sourcechooser-selector mejs-offscreen" role="menu" aria-expanded="false" aria-hidden="true"><ul></ul></div></div>').appendTo(i).hover(function() {
        clearTimeout(r), t.showSourcechooserSelector();
      }, function() {
        e(this);
        r = setTimeout(function() {
          t.hideSourcechooserSelector();
        }, 500);
      }).on("keydown", function(i) {
        switch (i.keyCode) {
         case 32:
          mejs.MediaFeatures.isFirefox || t.showSourcechooserSelector(), e(this).find(".mejs-sourcechooser-selector").find("input[type=radio]:checked").first().focus();
          break;

         case 13:
          t.showSourcechooserSelector(), e(this).find(".mejs-sourcechooser-selector").find("input[type=radio]:checked").first().focus();
          break;

         case 27:
          t.hideSourcechooserSelector(), e(this).find("button").focus();
          break;

         default:
          return !0;
        }
      }).on("focusout", mejs.Utility.debounce(function() {
        setTimeout(function() {
          e(document.activeElement).closest(".mejs-sourcechooser-selector").length || t.hideSourcechooserSelector();
        }, 0);
      }, 100)).delegate("input[type=radio]", "click", function() {
        e(this).attr("aria-selected", !0).attr("checked", "checked"), e(this).closest(".mejs-sourcechooser-selector").find("input[type=radio]").not(this).attr("aria-selected", "false").removeAttr("checked");
        var t = this.value;
        if (s.currentSrc != t) {
          var i = s.currentTime, n = s.paused;
          s.pause(), s.setSrc(t), s.addEventListener("loadedmetadata", function() {
            s.currentTime = i;
          }, !0);
          var r = function() {
            n || s.play(), s.removeEventListener("canplay", r, !0);
          };
          s.addEventListener("canplay", r, !0), s.load();
        }
      }).delegate("button", "click", function() {
        e(this).siblings(".mejs-sourcechooser-selector").hasClass("mejs-offscreen") ? (t.showSourcechooserSelector(), 
        e(this).siblings(".mejs-sourcechooser-selector").find("input[type=radio]:checked").first().focus()) :t.hideSourcechooserSelector();
      });
      for (var l in this.node.children) {
        var c = this.node.children[l];
        "SOURCE" !== c.nodeName || "probably" != s.canPlayType(c.type) && "maybe" != s.canPlayType(c.type) || t.addSourceButton(c.src, c.title, c.type, s.src == c.src);
      }
    },
    addSourceButton:function(t, i, n, s) {
      var r = this;
      "" !== i && i != undefined || (i = t), n = n.split("/")[1], r.sourcechooserButton.find("ul").append(e('<li><input type="radio" name="' + r.id + '_sourcechooser" id="' + r.id + "_sourcechooser_" + i + n + '" role="menuitemradio" value="' + t + '" ' + (s ? 'checked="checked"' :"") + 'aria-selected="' + s + '" /><label for="' + r.id + "_sourcechooser_" + i + n + '" aria-hidden="true">' + i + " (" + n + ")</label></li>")), 
      r.adjustSourcechooserBox();
    },
    adjustSourcechooserBox:function() {
      var e = this;
      e.sourcechooserButton.find(".mejs-sourcechooser-selector").height(e.sourcechooserButton.find(".mejs-sourcechooser-selector ul").outerHeight(!0));
    },
    hideSourcechooserSelector:function() {
      this.sourcechooserButton.find(".mejs-sourcechooser-selector").addClass("mejs-offscreen").attr("aria-expanded", "false").attr("aria-hidden", "true").find("input[type=radio]").attr("tabindex", "-1");
    },
    showSourcechooserSelector:function() {
      this.sourcechooserButton.find(".mejs-sourcechooser-selector").removeClass("mejs-offscreen").attr("aria-expanded", "true").attr("aria-hidden", "false").find("input[type=radio]").attr("tabindex", "0");
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    contextMenuItems:[ {
      render:function(e) {
        return "undefined" == typeof e.enterFullScreen ? null :e.isFullScreen ? mejs.i18n.t("mejs.fullscreen-off") :mejs.i18n.t("mejs.fullscreen-on");
      },
      click:function(e) {
        e.isFullScreen ? e.exitFullScreen() :e.enterFullScreen();
      }
    }, {
      render:function(e) {
        return e.media.muted ? mejs.i18n.t("mejs.unmute") :mejs.i18n.t("mejs.mute");
      },
      click:function(e) {
        e.media.muted ? e.setMuted(!1) :e.setMuted(!0);
      }
    }, {
      isSeparator:!0
    }, {
      render:function() {
        return mejs.i18n.t("mejs.download-video");
      },
      click:function(e) {
        window.location.href = e.media.currentSrc;
      }
    } ]
  }), e.extend(MediaElementPlayer.prototype, {
    buildcontextmenu:function(t) {
      t.contextMenu = e('<div class="mejs-contextmenu"></div>').appendTo(e("body")).hide(), 
      t.container.bind("contextmenu", function(e) {
        if (t.isContextMenuEnabled) return e.preventDefault(), t.renderContextMenu(e.clientX - 1, e.clientY - 1), 
        !1;
      }), t.container.bind("click", function() {
        t.contextMenu.hide();
      }), t.contextMenu.bind("mouseleave", function() {
        t.startContextMenuTimer();
      });
    },
    cleancontextmenu:function(e) {
      e.contextMenu.remove();
    },
    isContextMenuEnabled:!0,
    enableContextMenu:function() {
      this.isContextMenuEnabled = !0;
    },
    disableContextMenu:function() {
      this.isContextMenuEnabled = !1;
    },
    contextMenuTimeout:null,
    startContextMenuTimer:function() {
      var e = this;
      e.killContextMenuTimer(), e.contextMenuTimer = setTimeout(function() {
        e.hideContextMenu(), e.killContextMenuTimer();
      }, 750);
    },
    killContextMenuTimer:function() {
      var e = this.contextMenuTimer;
      null != e && (clearTimeout(e), delete e, e = null);
    },
    hideContextMenu:function() {
      this.contextMenu.hide();
    },
    renderContextMenu:function(t, i) {
      for (var n = this, s = "", r = n.options.contextMenuItems, o = 0, a = r.length; o < a; o++) if (r[o].isSeparator) s += '<div class="mejs-contextmenu-separator"></div>'; else {
        var l = r[o].render(n);
        null != l && (s += '<div class="mejs-contextmenu-item" data-itemindex="' + o + '" id="element-' + 1e6 * Math.random() + '">' + l + "</div>");
      }
      n.contextMenu.empty().append(e(s)).css({
        top:i,
        left:t
      }).show(), n.contextMenu.find(".mejs-contextmenu-item").each(function() {
        var t = e(this), i = parseInt(t.data("itemindex"), 10), s = n.options.contextMenuItems[i];
        "undefined" != typeof s.show && s.show(t, n), t.click(function() {
          "undefined" != typeof s.click && s.click(n), n.contextMenu.hide();
        });
      }), setTimeout(function() {
        n.killControlsTimer("rev3");
      }, 100);
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    skipBackInterval:30,
    skipBackText:""
  }), e.extend(MediaElementPlayer.prototype, {
    buildskipback:function(t, i, n, s) {
      var r = this, o = mejs.i18n.t("mejs.time-skip-back", r.options.skipBackInterval), a = r.options.skipBackText ? r.options.skipBackText :o;
      e('<div class="mejs-button mejs-skip-back-button"><button type="button" aria-controls="' + r.id + '" title="' + a + '" aria-label="' + a + '">' + r.options.skipBackInterval + "</button></div>").appendTo(i).click(function() {
        s.setCurrentTime(Math.max(s.currentTime - r.options.skipBackInterval, 0)), e(this).find("button").blur();
      });
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    postrollCloseText:""
  }), e.extend(MediaElementPlayer.prototype, {
    buildpostroll:function(t, i, n) {
      var s = this, r = s.options.postrollCloseText ? s.options.postrollCloseText :mejs.i18n.t("mejs.close"), o = s.container.find('link[rel="postroll"]').attr("href");
      void 0 !== o && (t.postroll = e('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + r + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(n).hide(), 
      s.media.addEventListener("ended", function() {
        e.ajax({
          dataType:"html",
          url:o,
          success:function(e) {
            n.find(".mejs-postroll-layer-content").html(e);
          }
        }), t.postroll.show();
      }, !1));
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    markerColor:"#E9BC3D",
    markers:[],
    markerCallback:function() {}
  }), e.extend(MediaElementPlayer.prototype, {
    buildmarkers:function(e, t, i, n) {
      var s = 0, r = -1, o = -1, a = -1, l = -1;
      for (s = 0; s < e.options.markers.length; ++s) t.find(".mejs-time-total").append('<span class="mejs-time-marker"></span>');
      n.addEventListener("durationchange", function() {
        e.setmarkers(t);
      }), n.addEventListener("timeupdate", function() {
        for (r = Math.floor(n.currentTime), a > r ? l > r && (l = -1) :a = r, s = 0; s < e.options.markers.length; ++s) o = Math.floor(e.options.markers[s]), 
        r === o && o !== l && (e.options.markerCallback(n, n.currentTime), l = o);
      }, !1);
    },
    setmarkers:function(t) {
      var i, n = this, s = 0;
      for (s = 0; s < n.options.markers.length; ++s) Math.floor(n.options.markers[s]) <= n.media.duration && Math.floor(n.options.markers[s]) >= 0 && (i = 100 * Math.floor(n.options.markers[s]) / n.media.duration, 
      e(t.find(".mejs-time-marker")[s]).css({
        width:"1px",
        left:i + "%",
        background:n.options.markerColor
      }));
    }
  });
}(mejs.$), function(e, t) {
  "function" == typeof define && define.amd ? define([], t) :"undefined" != typeof module && module.exports ? module.exports = t() :e.lscache = t();
}(this, function() {
  function e() {
    var e = "__lscachetest__", i = e;
    if (void 0 !== f) return f;
    try {
      if (!localStorage) return !1;
    } catch (e) {
      return !1;
    }
    try {
      a(e, i), l(e), f = !0;
    } catch (e) {
      f = !(!t(e) || !localStorage.length);
    }
    return f;
  }
  function t(e) {
    return !!(e && "QUOTA_EXCEEDED_ERR" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name || "QuotaExceededError" === e.name);
  }
  function i() {
    return void 0 === p && (p = null != window.JSON), p;
  }
  function n(e) {
    return e.replace(/[[\]{}()*+?.\\^$|]/g, "\\$&");
  }
  function s(e) {
    return e + g;
  }
  function r() {
    return Math.floor(new Date().getTime() / y);
  }
  function o(e) {
    return localStorage.getItem(m + w + e);
  }
  function a(e, t) {
    localStorage.removeItem(m + w + e), localStorage.setItem(m + w + e, t);
  }
  function l(e) {
    localStorage.removeItem(m + w + e);
  }
  function c(e) {
    for (var t = new RegExp("^" + m + n(w) + "(.*)"), i = localStorage.length - 1; i >= 0; --i) {
      var r = localStorage.key(i);
      r = r && r.match(t), (r = r && r[1]) && r.indexOf(g) < 0 && e(r, s(r));
    }
  }
  function u(e) {
    var t = s(e);
    l(e), l(t);
  }
  function h(e) {
    var t = s(e), i = o(t);
    if (i) {
      var n = parseInt(i, v);
      if (r() >= n) return l(e), l(t), !0;
    }
  }
  function d(e, t) {
    x && "console" in window && "function" == typeof window.console.warn && (window.console.warn("lscache - " + e), 
    t && window.console.warn("lscache - The error was: " + t.message));
  }
  var f, p, m = "lscache-", g = "-cacheexpiration", v = 10, y = 6e4, b = Math.floor(864e13 / y), w = "", x = !1;
  return {
    set:function(n, h, f) {
      if (e() && i()) {
        try {
          h = JSON.stringify(h);
        } catch (e) {
          return;
        }
        try {
          a(n, h);
        } catch (e) {
          if (!t(e)) return void d("Could not add item with key '" + n + "'", e);
          var p, m = [];
          c(function(e, t) {
            var i = o(t);
            i = i ? parseInt(i, v) :b, m.push({
              key:e,
              size:(o(e) || "").length,
              expiration:i
            });
          }), m.sort(function(e, t) {
            return t.expiration - e.expiration;
          });
          for (var g = (h || "").length; m.length && g > 0; ) p = m.pop(), d("Cache is full, removing item with key '" + n + "'"), 
          u(p.key), g -= p.size;
          try {
            a(n, h);
          } catch (e) {
            return void d("Could not add item with key '" + n + "', perhaps it's too big?", e);
          }
        }
        f ? a(s(n), (r() + f).toString(v)) :l(s(n));
      }
    },
    get:function(t) {
      if (!e()) return null;
      if (h(t)) return null;
      var n = o(t);
      if (!n || !i()) return n;
      try {
        return JSON.parse(n);
      } catch (e) {
        return n;
      }
    },
    remove:function(t) {
      e() && u(t);
    },
    supported:function() {
      return e();
    },
    flush:function() {
      e() && c(function(e) {
        u(e);
      });
    },
    flushExpired:function() {
      e() && c(function(e) {
        h(e);
      });
    },
    setBucket:function(e) {
      w = e;
    },
    resetBucket:function() {
      w = "";
    },
    enableWarnings:function(e) {
      x = e;
    }
  };
}), function() {
  "use strict";
  if ("undefined" != typeof window && window.addEventListener) {
    var e, t, i = Object.create(null), n = function() {
      clearTimeout(t), t = setTimeout(e, 100);
    }, s = function() {}, r = function() {
      var e;
      window.addEventListener("resize", n, !1), window.addEventListener("orientationchange", n, !1), 
      window.MutationObserver ? (e = new MutationObserver(n), e.observe(document.documentElement, {
        childList:!0,
        subtree:!0,
        attributes:!0
      }), s = function() {
        try {
          e.disconnect(), window.removeEventListener("resize", n, !1), window.removeEventListener("orientationchange", n, !1);
        } catch (e) {}
      }) :(document.documentElement.addEventListener("DOMSubtreeModified", n, !1), s = function() {
        document.documentElement.removeEventListener("DOMSubtreeModified", n, !1), window.removeEventListener("resize", n, !1), 
        window.removeEventListener("orientationchange", n, !1);
      });
    }, o = function(e) {
      function t(e) {
        var t;
        return e.protocol !== undefined ? t = e :(t = document.createElement("a"), t.href = e), 
        t.protocol.replace(/:/g, "") + t.host;
      }
      var i, n, s;
      return window.XMLHttpRequest && (i = new XMLHttpRequest(), n = t(location), s = t(e), 
      i = i.withCredentials === undefined && "" !== s && s !== n ? XDomainRequest || undefined :XMLHttpRequest), 
      i;
    }, a = "http://www.w3.org/1999/xlink";
    e = function() {
      function e() {
        0 === (w -= 1) && (s(), r());
      }
      function t(e) {
        return function() {
          !0 !== i[e.base] && (e.useEl.setAttributeNS(a, "xlink:href", "#" + e.hash), e.useEl.hasAttribute("href") && e.useEl.setAttribute("href", "#" + e.hash));
        };
      }
      function n(t) {
        return function() {
          var i, n = document.body, s = document.createElement("x");
          t.onload = null, s.innerHTML = t.responseText, i = s.getElementsByTagName("svg")[0], 
          i && (i.setAttribute("aria-hidden", "true"), i.style.position = "absolute", i.style.width = 0, 
          i.style.height = 0, i.style.overflow = "hidden", n.insertBefore(i, n.firstChild)), 
          e();
        };
      }
      function l(t) {
        return function() {
          t.onerror = null, t.ontimeout = null, e();
        };
      }
      var c, u, h, d, f, p, m, g, v, y, b = "", w = 0;
      for (s(), v = document.getElementsByTagName("use"), f = 0; f < v.length; f += 1) {
        try {
          u = v[f].getBoundingClientRect();
        } catch (e) {
          u = !1;
        }
        d = v[f].getAttribute("href") || v[f].getAttributeNS(a, "href") || v[f].getAttribute("xlink:href"), 
        g = d && d.split ? d.split("#") :[ "", "" ], c = g[0], h = g[1], p = u && 0 === u.left && 0 === u.right && 0 === u.top && 0 === u.bottom, 
        u && 0 === u.width && 0 === u.height && !p ? (b && !c.length && h && !document.getElementById(h) && (c = b), 
        v[f].hasAttribute("href") && v[f].setAttributeNS(a, "xlink:href", d), c.length && (y = i[c], 
        !0 !== y && setTimeout(t({
          useEl:v[f],
          base:c,
          hash:h
        }), 0), y === undefined && (m = o(c)) !== undefined && (y = new m(), i[c] = y, y.onload = n(y), 
        y.onerror = l(y), y.ontimeout = l(y), y.open("GET", c), y.send(), w += 1))) :p ? c.length && i[c] && setTimeout(t({
          useEl:v[f],
          base:c,
          hash:h
        }), 0) :i[c] === undefined ? i[c] = !0 :i[c].onload && (i[c].abort(), delete i[c].onload, 
        i[c] = !0);
      }
      v = "", w += 1, e();
    };
    var l;
    l = function() {
      window.removeEventListener("load", l, !1), t = setTimeout(e, 0);
    }, "complete" !== document.readyState ? window.addEventListener("load", l, !1) :l();
  }
}(), function(e, t) {
  "function" == typeof define && define.amd ? define(t) :"object" == typeof exports ? module.exports = t() :e.NProgress = t();
}(this, function() {
  function e(e, t, i) {
    return e < t ? t :e > i ? i :e;
  }
  function t(e) {
    return 100 * (-1 + e);
  }
  function i(e, i, n) {
    var s;
    return s = "translate3d" === c.positionUsing ? {
      transform:"translate3d(" + t(e) + "%,0,0)"
    } :"translate" === c.positionUsing ? {
      transform:"translate(" + t(e) + "%,0)"
    } :{
      "margin-left":t(e) + "%"
    }, s.transition = "all " + i + "ms " + n, s;
  }
  function n(e, t) {
    return ("string" == typeof e ? e :o(e)).indexOf(" " + t + " ") >= 0;
  }
  function s(e, t) {
    var i = o(e), s = i + t;
    n(i, t) || (e.className = s.substring(1));
  }
  function r(e, t) {
    var i, s = o(e);
    n(e, t) && (i = s.replace(" " + t + " ", " "), e.className = i.substring(1, i.length - 1));
  }
  function o(e) {
    return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
  }
  function a(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  var l = {};
  l.version = "0.2.0";
  var c = l.settings = {
    minimum:.08,
    easing:"ease",
    positionUsing:"",
    speed:200,
    trickle:!0,
    trickleRate:.02,
    trickleSpeed:800,
    showSpinner:!0,
    barSelector:'[role="bar"]',
    spinnerSelector:'[role="spinner"]',
    parent:"body",
    template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };
  l.configure = function(e) {
    var t, i;
    for (t in e) (i = e[t]) !== undefined && e.hasOwnProperty(t) && (c[t] = i);
    return this;
  }, l.status = null, l.set = function(t) {
    var n = l.isStarted();
    t = e(t, c.minimum, 1), l.status = 1 === t ? null :t;
    var s = l.render(!n), r = s.querySelector(c.barSelector), o = c.speed, a = c.easing;
    return s.offsetWidth, u(function(e) {
      "" === c.positionUsing && (c.positionUsing = l.getPositioningCSS()), h(r, i(t, o, a)), 
      1 === t ? (h(s, {
        transition:"none",
        opacity:1
      }), s.offsetWidth, setTimeout(function() {
        h(s, {
          transition:"all " + o + "ms linear",
          opacity:0
        }), setTimeout(function() {
          l.remove(), e();
        }, o);
      }, o)) :setTimeout(e, o);
    }), this;
  }, l.isStarted = function() {
    return "number" == typeof l.status;
  }, l.start = function() {
    l.status || l.set(0);
    var e = function() {
      setTimeout(function() {
        l.status && (l.trickle(), e());
      }, c.trickleSpeed);
    };
    return c.trickle && e(), this;
  }, l.done = function(e) {
    return e || l.status ? l.inc(.3 + .5 * Math.random()).set(1) :this;
  }, l.inc = function(t) {
    var i = l.status;
    return i ? ("number" != typeof t && (t = (1 - i) * e(Math.random() * i, .1, .95)), 
    i = e(i + t, 0, .994), l.set(i)) :l.start();
  }, l.trickle = function() {
    return l.inc(Math.random() * c.trickleRate);
  }, function() {
    var e = 0, t = 0;
    l.promise = function(i) {
      return i && "resolved" !== i.state() ? (0 === t && l.start(), e++, t++, i.always(function() {
        t--, 0 === t ? (e = 0, l.done()) :l.set((e - t) / e);
      }), this) :this;
    };
  }(), l.render = function(e) {
    if (l.isRendered()) return document.getElementById("nprogress");
    s(document.documentElement, "nprogress-busy");
    var i = document.createElement("div");
    i.id = "nprogress", i.innerHTML = c.template;
    var n, r = i.querySelector(c.barSelector), o = e ? "-100" :t(l.status || 0), u = document.querySelector(c.parent);
    return h(r, {
      transition:"all 0 linear",
      transform:"translate3d(" + o + "%,0,0)"
    }), c.showSpinner || (n = i.querySelector(c.spinnerSelector)) && a(n), u != document.body && s(u, "nprogress-custom-parent"), 
    u.appendChild(i), i;
  }, l.remove = function() {
    r(document.documentElement, "nprogress-busy"), r(document.querySelector(c.parent), "nprogress-custom-parent");
    var e = document.getElementById("nprogress");
    e && a(e);
  }, l.isRendered = function() {
    return !!document.getElementById("nprogress");
  }, l.getPositioningCSS = function() {
    var e = document.body.style, t = "WebkitTransform" in e ? "Webkit" :"MozTransform" in e ? "Moz" :"msTransform" in e ? "ms" :"OTransform" in e ? "O" :"";
    return t + "Perspective" in e ? "translate3d" :t + "Transform" in e ? "translate" :"margin";
  };
  var u = function() {
    function e() {
      var i = t.shift();
      i && i(e);
    }
    var t = [];
    return function(i) {
      t.push(i), 1 == t.length && e();
    };
  }(), h = function() {
    function e(e) {
      return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
        return t.toUpperCase();
      });
    }
    function t(e) {
      var t = document.body.style;
      if (e in t) return e;
      for (var i, n = s.length, r = e.charAt(0).toUpperCase() + e.slice(1); n--; ) if ((i = s[n] + r) in t) return i;
      return e;
    }
    function i(i) {
      return i = e(i), r[i] || (r[i] = t(i));
    }
    function n(e, t, n) {
      t = i(t), e.style[t] = n;
    }
    var s = [ "Webkit", "O", "Moz", "ms" ], r = {};
    return function(e, t) {
      var i, s, r = arguments;
      if (2 == r.length) for (i in t) (s = t[i]) !== undefined && t.hasOwnProperty(i) && n(e, i, s); else n(e, r[1], r[2]);
    };
  }();
  return l;
}), function($) {
  $.extend({
    metadata:{
      defaults:{
        type:"class",
        name:"metadata",
        cre:/(\{.*\})/,
        single:"metadata"
      },
      setType:function(e, t) {
        this.defaults.type = e, this.defaults.name = t;
      },
      get:function(elem, opts) {
        var data, m, e, attr, settings = $.extend({}, this.defaults, opts);
        if (settings.single.length || (settings.single = "metadata"), data = $.data(elem, settings.single)) return data;
        if (data = "{}", "class" === settings.type) (m = settings.cre.exec(elem.className)) && (data = m[1]); else if ("elem" === settings.type) {
          if (!elem.getElementsByTagName) return undefined;
          e = elem.getElementsByTagName(settings.name), e.length && (data = $.trim(e[0].innerHTML));
        } else elem.getAttribute !== undefined && (attr = elem.getAttribute(settings.name)) && (data = attr);
        return data.indexOf("{") < 0 && (data = "{" + data + "}"), data = eval("(" + data + ")"), 
        $.data(elem, settings.single, data), data;
      }
    }
  }), $.fn.metadata = function(e) {
    return $.metadata.get(this[0], e);
  };
}(jQuery), function(e) {
  "use strict";
  var t = e.tablesorter = {
    version:"2.28.4",
    parsers:[],
    widgets:[],
    defaults:{
      theme:"default",
      widthFixed:!1,
      showProcessing:!1,
      headerTemplate:"{content}",
      onRenderTemplate:null,
      onRenderHeader:null,
      cancelSelection:!0,
      tabIndex:!0,
      dateFormat:"mmddyyyy",
      sortMultiSortKey:"shiftKey",
      sortResetKey:"ctrlKey",
      usNumberFormat:!0,
      delayInit:!1,
      serverSideSorting:!1,
      resort:!0,
      headers:{},
      ignoreCase:!0,
      sortForce:null,
      sortList:[],
      sortAppend:null,
      sortStable:!1,
      sortInitialOrder:"asc",
      sortLocaleCompare:!1,
      sortReset:!1,
      sortRestart:!1,
      emptyTo:"bottom",
      stringTo:"max",
      duplicateSpan:!0,
      textExtraction:"basic",
      textAttribute:"data-text",
      textSorter:null,
      numberSorter:null,
      initWidgets:!0,
      widgetClass:"widget-{name}",
      widgets:[],
      widgetOptions:{
        zebra:[ "even", "odd" ]
      },
      initialized:null,
      tableClass:"",
      cssAsc:"",
      cssDesc:"",
      cssNone:"",
      cssHeader:"",
      cssHeaderRow:"",
      cssProcessing:"",
      cssChildRow:"tablesorter-childRow",
      cssInfoBlock:"tablesorter-infoOnly",
      cssNoSort:"tablesorter-noSort",
      cssIgnoreRow:"tablesorter-ignoreRow",
      cssIcon:"tablesorter-icon",
      cssIconNone:"",
      cssIconAsc:"",
      cssIconDesc:"",
      pointerClick:"click",
      pointerDown:"mousedown",
      pointerUp:"mouseup",
      selectorHeaders:"> thead th, > thead td",
      selectorSort:"th, td",
      selectorRemove:".remove-me",
      debug:!1,
      headerList:[],
      empties:{},
      strings:{},
      parsers:[],
      globalize:0,
      imgAttr:0
    },
    css:{
      table:"tablesorter",
      cssHasChild:"tablesorter-hasChildRow",
      childRow:"tablesorter-childRow",
      colgroup:"tablesorter-colgroup",
      header:"tablesorter-header",
      headerRow:"tablesorter-headerRow",
      headerIn:"tablesorter-header-inner",
      icon:"tablesorter-icon",
      processing:"tablesorter-processing",
      sortAsc:"tablesorter-headerAsc",
      sortDesc:"tablesorter-headerDesc",
      sortNone:"tablesorter-headerUnSorted"
    },
    language:{
      sortAsc:"Ascending sort applied, ",
      sortDesc:"Descending sort applied, ",
      sortNone:"No sort applied, ",
      sortDisabled:"sorting is disabled",
      nextAsc:"activate to apply an ascending sort",
      nextDesc:"activate to apply a descending sort",
      nextNone:"activate to remove the sort"
    },
    regex:{
      templateContent:/\{content\}/g,
      templateIcon:/\{icon\}/g,
      templateName:/\{name\}/i,
      spaces:/\s+/g,
      nonWord:/\W/g,
      formElements:/(input|select|button|textarea)/i,
      chunk:/(^([+\-]?(?:\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
      chunks:/(^\\0|\\0$)/,
      hex:/^0x[0-9a-f]+$/i,
      comma:/,/g,
      digitNonUS:/[\s|\.]/g,
      digitNegativeTest:/^\s*\([.\d]+\)/,
      digitNegativeReplace:/^\s*\(([.\d]+)\)/,
      digitTest:/^[\-+(]?\d+[)]?$/,
      digitReplace:/[,.'"\s]/g
    },
    string:{
      max:1,
      min:-1,
      emptymin:1,
      emptymax:-1,
      zero:0,
      none:0,
      "null":0,
      top:!0,
      bottom:!1
    },
    keyCodes:{
      enter:13
    },
    dates:{},
    instanceMethods:{},
    setup:function(i, n) {
      if (!i || !i.tHead || 0 === i.tBodies.length || !0 === i.hasInitialized) return void (n.debug && (i.hasInitialized ? console.warn("Stopping initialization. Tablesorter has already been initialized") :console.error("Stopping initialization! No table, thead or tbody", i)));
      var s = "", r = e(i), o = e.metadata;
      i.hasInitialized = !1, i.isProcessing = !0, i.config = n, e.data(i, "tablesorter", n), 
      n.debug && (console[console.group ? "group" :"log"]("Initializing tablesorter v" + t.version), 
      e.data(i, "startoveralltimer", new Date())), n.supportsDataObject = function(e) {
        return e[0] = parseInt(e[0], 10), e[0] > 1 || 1 === e[0] && parseInt(e[1], 10) >= 4;
      }(e.fn.jquery.split(".")), n.emptyTo = n.emptyTo.toLowerCase(), n.stringTo = n.stringTo.toLowerCase(), 
      n.last = {
        sortList:[],
        clickedIndex:-1
      }, /tablesorter\-/.test(r.attr("class")) || (s = "" !== n.theme ? " tablesorter-" + n.theme :""), 
      n.table = i, n.$table = r.addClass(t.css.table + " " + n.tableClass + s).attr("role", "grid"), 
      n.$headers = r.find(n.selectorHeaders), n.namespace ? n.namespace = "." + n.namespace.replace(t.regex.nonWord, "") :n.namespace = ".tablesorter" + Math.random().toString(16).slice(2), 
      n.$table.children().children("tr").attr("role", "row"), n.$tbodies = r.children("tbody:not(." + n.cssInfoBlock + ")").attr({
        "aria-live":"polite",
        "aria-relevant":"all"
      }), n.$table.children("caption").length && (s = n.$table.children("caption")[0], 
      s.id || (s.id = n.namespace.slice(1) + "caption"), n.$table.attr("aria-labelledby", s.id)), 
      n.widgetInit = {}, n.textExtraction = n.$table.attr("data-text-extraction") || n.textExtraction || "basic", 
      t.buildHeaders(n), t.fixColumnWidth(i), t.addWidgetFromClass(i), t.applyWidgetOptions(i), 
      t.setupParsers(n), n.totalRows = 0, t.validateOptions(n), n.delayInit || t.buildCache(n), 
      t.bindEvents(i, n.$headers, !0), t.bindMethods(n), n.supportsDataObject && "undefined" != typeof r.data().sortlist ? n.sortList = r.data().sortlist :o && r.metadata() && r.metadata().sortlist && (n.sortList = r.metadata().sortlist), 
      t.applyWidget(i, !0), n.sortList.length > 0 ? t.sortOn(n, n.sortList, {}, !n.initWidgets) :(t.setHeadersCss(n), 
      n.initWidgets && t.applyWidget(i, !1)), n.showProcessing && r.unbind("sortBegin" + n.namespace + " sortEnd" + n.namespace).bind("sortBegin" + n.namespace + " sortEnd" + n.namespace, function(e) {
        clearTimeout(n.timerProcessing), t.isProcessing(i), "sortBegin" === e.type && (n.timerProcessing = setTimeout(function() {
          t.isProcessing(i, !0);
        }, 500));
      }), i.hasInitialized = !0, i.isProcessing = !1, n.debug && (console.log("Overall initialization time:" + t.benchmark(e.data(i, "startoveralltimer"))), 
      n.debug && console.groupEnd && console.groupEnd()), r.triggerHandler("tablesorter-initialized", i), 
      "function" == typeof n.initialized && n.initialized(i);
    },
    bindMethods:function(i) {
      var n = i.$table, s = i.namespace, r = "sortReset update updateRows updateAll updateHeaders addRows updateCell updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(s + " ");
      n.unbind(r.replace(t.regex.spaces, " ")).bind("sortReset" + s, function(e, i) {
        e.stopPropagation(), t.sortReset(this.config, i);
      }).bind("updateAll" + s, function(e, i, n) {
        e.stopPropagation(), t.updateAll(this.config, i, n);
      }).bind("update" + s + " updateRows" + s, function(e, i, n) {
        e.stopPropagation(), t.update(this.config, i, n);
      }).bind("updateHeaders" + s, function(e, i) {
        e.stopPropagation(), t.updateHeaders(this.config, i);
      }).bind("updateCell" + s, function(e, i, n, s) {
        e.stopPropagation(), t.updateCell(this.config, i, n, s);
      }).bind("addRows" + s, function(e, i, n, s) {
        e.stopPropagation(), t.addRows(this.config, i, n, s);
      }).bind("updateComplete" + s, function() {
        this.isUpdating = !1;
      }).bind("sorton" + s, function(e, i, n, s) {
        e.stopPropagation(), t.sortOn(this.config, i, n, s);
      }).bind("appendCache" + s, function(i, n, s) {
        i.stopPropagation(), t.appendCache(this.config, s), e.isFunction(n) && n(this);
      }).bind("updateCache" + s, function(e, i, n) {
        e.stopPropagation(), t.updateCache(this.config, i, n);
      }).bind("applyWidgetId" + s, function(e, i) {
        e.stopPropagation(), t.applyWidgetId(this, i);
      }).bind("applyWidgets" + s, function(e, i) {
        e.stopPropagation(), t.applyWidget(this, i);
      }).bind("refreshWidgets" + s, function(e, i, n) {
        e.stopPropagation(), t.refreshWidgets(this, i, n);
      }).bind("removeWidget" + s, function(e, i, n) {
        e.stopPropagation(), t.removeWidget(this, i, n);
      }).bind("destroy" + s, function(e, i, n) {
        e.stopPropagation(), t.destroy(this, i, n);
      }).bind("resetToLoadState" + s, function(n) {
        n.stopPropagation(), t.removeWidget(this, !0, !1);
        var s = e.extend(!0, {}, i.originalSettings);
        i = e.extend(!0, t.defaults, s), i.originalSettings = s, this.hasInitialized = !1, 
        t.setup(this, i);
      });
    },
    bindEvents:function(i, n, s) {
      i = e(i)[0];
      var r, o = i.config, a = o.namespace, l = null;
      !0 !== s && (n.addClass(a.slice(1) + "_extra_headers"), (r = e.fn.closest ? n.closest("table")[0] :n.parents("table")[0]) && "TABLE" === r.nodeName && r !== i && e(r).addClass(a.slice(1) + "_extra_table")), 
      r = (o.pointerDown + " " + o.pointerUp + " " + o.pointerClick + " sort keyup ").replace(t.regex.spaces, " ").split(" ").join(a + " "), 
      n.find(o.selectorSort).add(n.filter(o.selectorSort)).unbind(r).bind(r, function(i, s) {
        var r, a, c, u = e(i.target), h = " " + i.type + " ";
        if (!(1 !== (i.which || i.button) && !h.match(" " + o.pointerClick + " | sort | keyup ") || " keyup " === h && i.which !== t.keyCodes.enter || h.match(" " + o.pointerClick + " ") && "undefined" != typeof i.which || h.match(" " + o.pointerUp + " ") && l !== i.target && !0 !== s)) {
          if (h.match(" " + o.pointerDown + " ")) return l = i.target, c = u.jquery.split("."), 
          void ("1" === c[0] && c[1] < 4 && i.preventDefault());
          if (l = null, t.regex.formElements.test(i.target.nodeName) || u.hasClass(o.cssNoSort) || u.parents("." + o.cssNoSort).length > 0 || u.parents("button").length > 0) return !o.cancelSelection;
          o.delayInit && t.isEmptyObject(o.cache) && t.buildCache(o), r = e.fn.closest ? e(this).closest("th, td") :/TH|TD/.test(this.nodeName) ? e(this) :e(this).parents("th, td"), 
          c = n.index(r), o.last.clickedIndex = c < 0 ? r.attr("data-column") :c, a = o.$headers[o.last.clickedIndex], 
          a && !a.sortDisabled && t.initSort(o, a, i);
        }
      }), o.cancelSelection && n.attr("unselectable", "on").bind("selectstart", !1).css({
        "user-select":"none",
        MozUserSelect:"none"
      });
    },
    buildHeaders:function(i) {
      var n, s, r, o;
      for (i.headerList = [], i.headerContent = [], i.sortVars = [], i.debug && (r = new Date()), 
      i.columns = t.computeColumnIndex(i.$table.children("thead, tfoot").children("tr")), 
      s = i.cssIcon ? '<i class="' + (i.cssIcon === t.css.icon ? t.css.icon :i.cssIcon + " " + t.css.icon) + '"></i>' :"", 
      i.$headers = e(e.map(i.$table.find(i.selectorHeaders), function(n, r) {
        var o, a, l, c, u, h = e(n);
        if (!h.parent().hasClass(i.cssIgnoreRow)) return o = t.getColumnData(i.table, i.headers, r, !0), 
        i.headerContent[r] = h.html(), "" === i.headerTemplate || h.find("." + t.css.headerIn).length || (c = i.headerTemplate.replace(t.regex.templateContent, h.html()).replace(t.regex.templateIcon, h.find("." + t.css.icon).length ? "" :s), 
        i.onRenderTemplate && (a = i.onRenderTemplate.apply(h, [ r, c ])) && "string" == typeof a && (c = a), 
        h.html('<div class="' + t.css.headerIn + '">' + c + "</div>")), i.onRenderHeader && i.onRenderHeader.apply(h, [ r, i, i.$table ]), 
        l = parseInt(h.attr("data-column"), 10), n.column = l, u = t.getOrder(t.getData(h, o, "sortInitialOrder") || i.sortInitialOrder), 
        i.sortVars[l] = {
          count:-1,
          order:u ? i.sortReset ? [ 1, 0, 2 ] :[ 1, 0 ] :i.sortReset ? [ 0, 1, 2 ] :[ 0, 1 ],
          lockedOrder:!1
        }, u = t.getData(h, o, "lockedOrder") || !1, void 0 !== u && !1 !== u && (i.sortVars[l].lockedOrder = !0, 
        i.sortVars[l].order = t.getOrder(u) ? [ 1, 1 ] :[ 0, 0 ]), i.headerList[r] = n, 
        h.addClass(t.css.header + " " + i.cssHeader).parent().addClass(t.css.headerRow + " " + i.cssHeaderRow).attr("role", "row"), 
        i.tabIndex && h.attr("tabindex", 0), n;
      })), i.$headerIndexed = [], o = 0; o < i.columns; o++) t.isEmptyObject(i.sortVars[o]) && (i.sortVars[o] = {}), 
      n = i.$headers.filter('[data-column="' + o + '"]'), i.$headerIndexed[o] = n.length ? n.not(".sorter-false").length ? n.not(".sorter-false").filter(":last") :n.filter(":last") :e();
      i.$table.find(i.selectorHeaders).attr({
        scope:"col",
        role:"columnheader"
      }), t.updateHeader(i), i.debug && (console.log("Built headers:" + t.benchmark(r)), 
      console.log(i.$headers));
    },
    addInstanceMethods:function(i) {
      e.extend(t.instanceMethods, i);
    },
    setupParsers:function(e, i) {
      var n, s, r, o, a, l, c, u, h, d, f, p, m, g, v = e.table, y = 0, b = {};
      if (e.$tbodies = e.$table.children("tbody:not(." + e.cssInfoBlock + ")"), m = void 0 === i ? e.$tbodies :i, 
      0 === (g = m.length)) return e.debug ? console.warn("Warning: *Empty table!* Not building a parser cache") :"";
      for (e.debug && (p = new Date(), console[console.group ? "group" :"log"]("Detecting parsers for each column")), 
      s = {
        extractors:[],
        parsers:[]
      }; y < g; ) {
        if (n = m[y].rows, n.length) for (a = 0, o = e.columns, l = 0; l < o; l++) {
          if ((c = e.$headerIndexed[a]) && c.length && (u = t.getColumnData(v, e.headers, a), 
          f = t.getParserById(t.getData(c, u, "extractor")), d = t.getParserById(t.getData(c, u, "sorter")), 
          h = "false" === t.getData(c, u, "parser"), e.empties[a] = (t.getData(c, u, "empty") || e.emptyTo || (e.emptyToBottom ? "bottom" :"top")).toLowerCase(), 
          e.strings[a] = (t.getData(c, u, "string") || e.stringTo || "max").toLowerCase(), 
          h && (d = t.getParserById("no-parser")), f || (f = !1), d || (d = t.detectParserForColumn(e, n, -1, a)), 
          e.debug && (b["(" + a + ") " + c.text()] = {
            parser:d.id,
            extractor:f ? f.id :"none",
            string:e.strings[a],
            empty:e.empties[a]
          }), s.parsers[a] = d, s.extractors[a] = f, (r = c[0].colSpan - 1) > 0)) for (a += r, 
          o += r; r + 1 > 0; ) s.parsers[a - r] = d, s.extractors[a - r] = f, r--;
          a++;
        }
        y += s.parsers.length ? g :1;
      }
      e.debug && (t.isEmptyObject(b) ? console.warn("  No parsers detected!") :console[console.table ? "table" :"log"](b), 
      console.log("Completed detecting parsers" + t.benchmark(p)), console.groupEnd && console.groupEnd()), 
      e.parsers = s.parsers, e.extractors = s.extractors;
    },
    addParser:function(e) {
      var i, n = t.parsers.length, s = !0;
      for (i = 0; i < n; i++) t.parsers[i].id.toLowerCase() === e.id.toLowerCase() && (s = !1);
      s && (t.parsers[t.parsers.length] = e);
    },
    getParserById:function(e) {
      if ("false" == e) return !1;
      var i, n = t.parsers.length;
      for (i = 0; i < n; i++) if (t.parsers[i].id.toLowerCase() === e.toString().toLowerCase()) return t.parsers[i];
      return !1;
    },
    detectParserForColumn:function(i, n, s, r) {
      for (var o, a, l, c = t.parsers.length, u = !1, h = "", d = !0; "" === h && d; ) s++, 
      l = n[s], l && s < 50 ? l.className.indexOf(t.cssIgnoreRow) < 0 && (u = n[s].cells[r], 
      h = t.getElementText(i, u, r), a = e(u), i.debug && console.log("Checking if value was empty on row " + s + ", column: " + r + ': "' + h + '"')) :d = !1;
      for (;--c >= 0; ) if ((o = t.parsers[c]) && "text" !== o.id && o.is && o.is(h, i.table, u, a)) return o;
      return t.getParserById("text");
    },
    getElementText:function(i, n, s) {
      if (!n) return "";
      var r, o = i.textExtraction || "", a = n.jquery ? n :e(n);
      return "string" == typeof o ? "basic" === o && void 0 !== (r = a.attr(i.textAttribute)) ? e.trim(r) :e.trim(n.textContent || a.text()) :"function" == typeof o ? e.trim(o(a[0], i.table, s)) :"function" == typeof (r = t.getColumnData(i.table, o, s)) ? e.trim(r(a[0], i.table, s)) :e.trim(a[0].textContent || a.text());
    },
    getParsedText:function(e, i, n, s) {
      void 0 === s && (s = t.getElementText(e, i, n));
      var r = "" + s, o = e.parsers[n], a = e.extractors[n];
      return o && (a && "function" == typeof a.format && (s = a.format(s, e.table, i, n)), 
      r = "no-parser" === o.id ? "" :o.format("" + s, e.table, i, n), e.ignoreCase && "string" == typeof r && (r = r.toLowerCase())), 
      r;
    },
    buildCache:function(i, n, s) {
      var r, o, a, l, c, u, h, d, f, p, m, g, v, y, b, w, x, _, S, C, T, k, M = i.table, j = i.parsers;
      if (i.$tbodies = i.$table.children("tbody:not(." + i.cssInfoBlock + ")"), h = void 0 === s ? i.$tbodies :s, 
      i.cache = {}, i.totalRows = 0, !j) return i.debug ? console.warn("Warning: *Empty table!* Not building a cache") :"";
      for (i.debug && (g = new Date()), i.showProcessing && t.isProcessing(M, !0), u = 0; u < h.length; u++) {
        for (w = [], r = i.cache[u] = {
          normalized:[]
        }, v = h[u] && h[u].rows.length || 0, l = 0; l < v; ++l) if (y = {
          child:[],
          raw:[]
        }, d = e(h[u].rows[l]), f = [], !d.hasClass(i.selectorRemove.slice(1))) if (d.hasClass(i.cssChildRow) && 0 !== l) for (T = r.normalized.length - 1, 
        b = r.normalized[T][i.columns], b.$row = b.$row.add(d), d.prev().hasClass(i.cssChildRow) || d.prev().addClass(t.css.cssHasChild), 
        p = d.children("th, td"), T = b.child.length, b.child[T] = [], _ = 0, C = i.columns, 
        c = 0; c < C; c++) m = p[c], m && (b.child[T][c] = t.getParsedText(i, m, c), (x = p[c].colSpan - 1) > 0 && (_ += x, 
        C += x)), _++; else {
          for (y.$row = d, y.order = l, _ = 0, C = i.columns, c = 0; c < C; ++c) {
            if ((m = d[0].cells[c]) && _ < i.columns && (S = "undefined" != typeof j[_], !S && i.debug && console.warn("No parser found for row: " + l + ", column: " + c + '; cell containing: "' + e(m).text() + '"; does it have a header?'), 
            o = t.getElementText(i, m, _), y.raw[_] = o, a = t.getParsedText(i, m, _, o), f[_] = a, 
            S && "numeric" === (j[_].type || "").toLowerCase() && (w[_] = Math.max(Math.abs(a) || 0, w[_] || 0)), 
            (x = m.colSpan - 1) > 0)) {
              for (k = 0; k <= x; ) a = i.duplicateSpan || 0 === k ? o :"string" != typeof i.textExtraction ? t.getElementText(i, m, _ + k) || "" :"", 
              y.raw[_ + k] = a, f[_ + k] = a, k++;
              _ += x, C += x;
            }
            _++;
          }
          f[i.columns] = y, r.normalized[r.normalized.length] = f;
        }
        r.colMax = w, i.totalRows += r.normalized.length;
      }
      if (i.showProcessing && t.isProcessing(M), i.debug) {
        for (T = Math.min(5, i.cache[0].normalized.length), console[console.group ? "group" :"log"]("Building cache for " + i.totalRows + " rows (showing " + T + " rows in log) and " + i.columns + " columns" + t.benchmark(g)), 
        o = {}, c = 0; c < i.columns; c++) for (_ = 0; _ < T; _++) o["row: " + _] || (o["row: " + _] = {}), 
        o["row: " + _][i.$headerIndexed[c].text()] = i.cache[0].normalized[_][c];
        console[console.table ? "table" :"log"](o), console.groupEnd && console.groupEnd();
      }
      e.isFunction(n) && n(M);
    },
    getColumnText:function(i, n, s, r) {
      i = e(i)[0];
      var o, a, l, c, u, h, d, f, p, m, g = "function" == typeof s, v = "all" === n, y = {
        raw:[],
        parsed:[],
        $cell:[]
      }, b = i.config;
      if (!t.isEmptyObject(b)) {
        for (u = b.$tbodies.length, o = 0; o < u; o++) for (l = b.cache[o].normalized, h = l.length, 
        a = 0; a < h; a++) c = l[a], r && !c[b.columns].$row.is(r) || (m = !0, f = v ? c.slice(0, b.columns) :c[n], 
        c = c[b.columns], d = v ? c.raw :c.raw[n], p = v ? c.$row.children() :c.$row.children().eq(n), 
        g && (m = s({
          tbodyIndex:o,
          rowIndex:a,
          parsed:f,
          raw:d,
          $row:c.$row,
          $cell:p
        })), !1 !== m && (y.parsed[y.parsed.length] = f, y.raw[y.raw.length] = d, y.$cell[y.$cell.length] = p));
        return y;
      }
      b.debug && console.warn("No cache found - aborting getColumnText function!");
    },
    setHeadersCss:function(i) {
      var n, s, r, o = i.sortList, a = o.length, l = t.css.sortNone + " " + i.cssNone, c = [ t.css.sortAsc + " " + i.cssAsc, t.css.sortDesc + " " + i.cssDesc ], u = [ i.cssIconAsc, i.cssIconDesc, i.cssIconNone ], h = [ "ascending", "descending" ], d = i.$table.find("tfoot tr").children("td, th").add(e(i.namespace + "_extra_headers")).removeClass(c.join(" "));
      for (i.$headers.add(e("thead " + i.namespace + "_extra_headers")).removeClass(c.join(" ")).addClass(l).attr("aria-sort", "none").find("." + t.css.icon).removeClass(u.join(" ")).addClass(u[2]), 
      s = 0; s < a; s++) if (2 !== o[s][1] && (n = i.$headers.filter(function(e) {
        for (var n = !0, s = i.$headers.eq(e), r = parseInt(s.attr("data-column"), 10), o = r + i.$headers[e].colSpan; r < o; r++) n = !!n && (n || t.isValueInArray(r, i.sortList) > -1);
        return n;
      }), n = n.not(".sorter-false").filter('[data-column="' + o[s][0] + '"]' + (1 === a ? ":last" :"")), 
      n.length)) {
        for (r = 0; r < n.length; r++) n[r].sortDisabled || n.eq(r).removeClass(l).addClass(c[o[s][1]]).attr("aria-sort", h[o[s][1]]).find("." + t.css.icon).removeClass(u[2]).addClass(u[o[s][1]]);
        d.length && d.filter('[data-column="' + o[s][0] + '"]').removeClass(l).addClass(c[o[s][1]]);
      }
      for (a = i.$headers.length, s = 0; s < a; s++) t.setColumnAriaLabel(i, i.$headers.eq(s));
    },
    setColumnAriaLabel:function(i, n, s) {
      if (n.length) {
        var r = parseInt(n.attr("data-column"), 10), o = i.sortVars[r], a = n.hasClass(t.css.sortAsc) ? "sortAsc" :n.hasClass(t.css.sortDesc) ? "sortDesc" :"sortNone", l = e.trim(n.text()) + ": " + t.language[a];
        n.hasClass("sorter-false") || !1 === s ? l += t.language.sortDisabled :(a = (o.count + 1) % o.order.length, 
        s = o.order[a], l += t.language[0 === s ? "nextAsc" :1 === s ? "nextDesc" :"nextNone"]), 
        n.attr("aria-label", l);
      }
    },
    updateHeader:function(e) {
      var i, n, s, r, o = e.table, a = e.$headers.length;
      for (i = 0; i < a; i++) s = e.$headers.eq(i), r = t.getColumnData(o, e.headers, i, !0), 
      n = "false" === t.getData(s, r, "sorter") || "false" === t.getData(s, r, "parser"), 
      t.setColumnSort(e, s, n);
    },
    setColumnSort:function(e, t, i) {
      var n = e.table.id;
      t[0].sortDisabled = i, t[i ? "addClass" :"removeClass"]("sorter-false").attr("aria-disabled", "" + i), 
      e.tabIndex && (i ? t.removeAttr("tabindex") :t.attr("tabindex", "0")), n && (i ? t.removeAttr("aria-controls") :t.attr("aria-controls", n));
    },
    updateHeaderSortCount:function(i, n) {
      var s, r, o, a, l, c, u, h, d = n || i.sortList, f = d.length;
      for (i.sortList = [], a = 0; a < f; a++) if (u = d[a], (s = parseInt(u[0], 10)) < i.columns) {
        switch (i.sortVars[s].order || (h = t.getOrder(i.sortInitialOrder) ? i.sortReset ? [ 1, 0, 2 ] :[ 1, 0 ] :i.sortReset ? [ 0, 1, 2 ] :[ 0, 1 ], 
        i.sortVars[s].order = h, i.sortVars[s].count = 0), h = i.sortVars[s].order, r = ("" + u[1]).match(/^(1|d|s|o|n)/), 
        r = r ? r[0] :"") {
         case "1":
         case "d":
          r = 1;
          break;

         case "s":
          r = l || 0;
          break;

         case "o":
          c = h[(l || 0) % h.length], r = 0 === c ? 1 :1 === c ? 0 :2;
          break;

         case "n":
          r = h[++i.sortVars[s].count % h.length];
          break;

         default:
          r = 0;
        }
        l = 0 === a ? r :l, o = [ s, parseInt(r, 10) || 0 ], i.sortList[i.sortList.length] = o, 
        r = e.inArray(o[1], h), i.sortVars[s].count = r >= 0 ? r :o[1] % h.length;
      }
    },
    updateAll:function(e, i, n) {
      var s = e.table;
      s.isUpdating = !0, t.refreshWidgets(s, !0, !0), t.buildHeaders(e), t.bindEvents(s, e.$headers, !0), 
      t.bindMethods(e), t.commonUpdate(e, i, n);
    },
    update:function(e, i, n) {
      e.table.isUpdating = !0, t.updateHeader(e), t.commonUpdate(e, i, n);
    },
    updateHeaders:function(e, i) {
      e.table.isUpdating = !0, t.buildHeaders(e), t.bindEvents(e.table, e.$headers, !0), 
      t.resortComplete(e, i);
    },
    updateCell:function(i, n, s, r) {
      if (t.isEmptyObject(i.cache)) return t.updateHeader(i), void t.commonUpdate(i, s, r);
      i.table.isUpdating = !0, i.$table.find(i.selectorRemove).remove();
      var o, a, l, c, u, h, d = i.$tbodies, f = e(n), p = d.index(e.fn.closest ? f.closest("tbody") :f.parents("tbody").filter(":first")), m = i.cache[p], g = e.fn.closest ? f.closest("tr") :f.parents("tr").filter(":first");
      if (n = f[0], d.length && p >= 0) {
        if (l = d.eq(p).find("tr").index(g), u = m.normalized[l], (h = g[0].cells.length) !== i.columns) for (c = 0, 
        o = !1, a = 0; a < h; a++) o || g[0].cells[a] === n ? o = !0 :c += g[0].cells[a].colSpan; else c = f.index();
        o = t.getElementText(i, n, c), u[i.columns].raw[c] = o, o = t.getParsedText(i, n, c, o), 
        u[c] = o, u[i.columns].$row = g, "numeric" === (i.parsers[c].type || "").toLowerCase() && (m.colMax[c] = Math.max(Math.abs(o) || 0, m.colMax[c] || 0)), 
        o = "undefined" !== s ? s :i.resort, !1 !== o ? t.checkResort(i, o, r) :t.resortComplete(i, r);
      } else i.debug && console.error("updateCell aborted, tbody missing or not within the indicated table"), 
      i.table.isUpdating = !1;
    },
    addRows:function(i, n, s, r) {
      var o, a, l, c, u, h, d, f, p, m, g, v, y, b = "string" == typeof n && 1 === i.$tbodies.length && /<tr/.test(n || ""), w = i.table;
      if (b) n = e(n), i.$tbodies.append(n); else if (!(n && n instanceof jQuery && (e.fn.closest ? n.closest("table")[0] :n.parents("table")[0]) === i.table)) return i.debug && console.error("addRows method requires (1) a jQuery selector reference to rows that have already been added to the table, or (2) row HTML string to be added to a table with only one tbody"), 
      !1;
      if (w.isUpdating = !0, t.isEmptyObject(i.cache)) t.updateHeader(i), t.commonUpdate(i, s, r); else {
        for (u = n.filter("tr").attr("role", "row").length, l = i.$tbodies.index(n.parents("tbody").filter(":first")), 
        i.parsers && i.parsers.length || t.setupParsers(i), c = 0; c < u; c++) {
          for (p = 0, d = n[c].cells.length, f = i.cache[l].normalized.length, g = [], m = {
            child:[],
            raw:[],
            $row:n.eq(c),
            order:f
          }, h = 0; h < d; h++) v = n[c].cells[h], o = t.getElementText(i, v, p), m.raw[p] = o, 
          a = t.getParsedText(i, v, p, o), g[p] = a, "numeric" === (i.parsers[p].type || "").toLowerCase() && (i.cache[l].colMax[p] = Math.max(Math.abs(a) || 0, i.cache[l].colMax[p] || 0)), 
          y = v.colSpan - 1, y > 0 && (p += y), p++;
          g[i.columns] = m, i.cache[l].normalized[f] = g;
        }
        t.checkResort(i, s, r);
      }
    },
    updateCache:function(e, i, n) {
      e.parsers && e.parsers.length || t.setupParsers(e, n), t.buildCache(e, i, n);
    },
    appendCache:function(e, i) {
      var n, s, r, o, a, l, c, u = e.table, h = e.widgetOptions, d = e.$tbodies, f = [], p = e.cache;
      if (t.isEmptyObject(p)) return e.appender ? e.appender(u, f) :u.isUpdating ? e.$table.triggerHandler("updateComplete", u) :"";
      for (e.debug && (c = new Date()), l = 0; l < d.length; l++) if (r = d.eq(l), r.length) {
        for (o = t.processTbody(u, r, !0), n = p[l].normalized, s = n.length, a = 0; a < s; a++) f[f.length] = n[a][e.columns].$row, 
        e.appender && (!e.pager || e.pager.removeRows && h.pager_removeRows || e.pager.ajax) || o.append(n[a][e.columns].$row);
        t.processTbody(u, o, !1);
      }
      e.appender && e.appender(u, f), e.debug && console.log("Rebuilt table" + t.benchmark(c)), 
      i || e.appender || t.applyWidget(u), u.isUpdating && e.$table.triggerHandler("updateComplete", u);
    },
    commonUpdate:function(e, i, n) {
      e.$table.find(e.selectorRemove).remove(), t.setupParsers(e), t.buildCache(e), t.checkResort(e, i, n);
    },
    initSort:function(i, n, s) {
      if (i.table.isUpdating) return setTimeout(function() {
        t.initSort(i, n, s);
      }, 50);
      var r, o, a, l, c, u, h, d = !s[i.sortMultiSortKey], f = i.table, p = i.$headers.length, m = parseInt(e(n).attr("data-column"), 10), g = i.sortVars[m].order;
      if (i.$table.triggerHandler("sortStart", f), u = (i.sortVars[m].count + 1) % g.length, 
      i.sortVars[m].count = s[i.sortResetKey] ? 2 :u, i.sortRestart) for (a = 0; a < p; a++) h = i.$headers.eq(a), 
      u = parseInt(h.attr("data-column"), 10), m !== u && (d || h.hasClass(t.css.sortNone)) && (i.sortVars[u].count = -1);
      if (d) {
        if (i.sortList = [], i.last.sortList = [], null !== i.sortForce) for (r = i.sortForce, 
        o = 0; o < r.length; o++) r[o][0] !== m && (i.sortList[i.sortList.length] = r[o]);
        if ((l = g[i.sortVars[m].count]) < 2 && (i.sortList[i.sortList.length] = [ m, l ], 
        n.colSpan > 1)) for (o = 1; o < n.colSpan; o++) i.sortList[i.sortList.length] = [ m + o, l ], 
        i.sortVars[m + o].count = e.inArray(l, g);
      } else if (i.sortList = e.extend([], i.last.sortList), t.isValueInArray(m, i.sortList) >= 0) for (o = 0; o < i.sortList.length; o++) u = i.sortList[o], 
      u[0] === m && (u[1] = g[i.sortVars[m].count], 2 === u[1] && (i.sortList.splice(o, 1), 
      i.sortVars[m].count = -1)); else if ((l = g[i.sortVars[m].count]) < 2 && (i.sortList[i.sortList.length] = [ m, l ], 
      n.colSpan > 1)) for (o = 1; o < n.colSpan; o++) i.sortList[i.sortList.length] = [ m + o, l ], 
      i.sortVars[m + o].count = e.inArray(l, g);
      if (i.last.sortList = e.extend([], i.sortList), i.sortList.length && i.sortAppend && (r = e.isArray(i.sortAppend) ? i.sortAppend :i.sortAppend[i.sortList[0][0]], 
      !t.isEmptyObject(r))) for (o = 0; o < r.length; o++) if (r[o][0] !== m && t.isValueInArray(r[o][0], i.sortList) < 0) {
        if (l = r[o][1], c = ("" + l).match(/^(a|d|s|o|n)/)) switch (u = i.sortList[0][1], 
        c[0]) {
         case "d":
          l = 1;
          break;

         case "s":
          l = u;
          break;

         case "o":
          l = 0 === u ? 1 :0;
          break;

         case "n":
          l = (u + 1) % g.length;
          break;

         default:
          l = 0;
        }
        i.sortList[i.sortList.length] = [ r[o][0], l ];
      }
      i.$table.triggerHandler("sortBegin", f), setTimeout(function() {
        t.setHeadersCss(i), t.multisort(i), t.appendCache(i), i.$table.triggerHandler("sortBeforeEnd", f), 
        i.$table.triggerHandler("sortEnd", f);
      }, 1);
    },
    multisort:function(e) {
      var i, n, s, r, o, a = e.table, l = [], c = 0, u = e.textSorter || "", h = e.sortList, d = h.length, f = e.$tbodies.length;
      if (!e.serverSideSorting && !t.isEmptyObject(e.cache)) {
        if (e.debug && (n = new Date()), "object" == typeof u) for (s = e.columns; s--; ) "function" == typeof (o = t.getColumnData(a, u, s)) && (l[s] = o);
        for (i = 0; i < f; i++) s = e.cache[i].colMax, r = e.cache[i].normalized, r.sort(function(i, n) {
          var r, o, f, p, m, g, v;
          for (r = 0; r < d; r++) {
            if (f = h[r][0], p = h[r][1], c = 0 === p, e.sortStable && i[f] === n[f] && 1 === d) return i[e.columns].order - n[e.columns].order;
            if (o = /n/i.test(t.getSortType(e.parsers, f)), o && e.strings[f] ? (o = "boolean" == typeof t.string[e.strings[f]] ? (c ? 1 :-1) * (t.string[e.strings[f]] ? -1 :1) :e.strings[f] ? t.string[e.strings[f]] || 0 :0, 
            m = e.numberSorter ? e.numberSorter(i[f], n[f], c, s[f], a) :t["sortNumeric" + (c ? "Asc" :"Desc")](i[f], n[f], o, s[f], f, e)) :(g = c ? i :n, 
            v = c ? n :i, m = "function" == typeof u ? u(g[f], v[f], c, f, a) :"function" == typeof l[f] ? l[f](g[f], v[f], c, f, a) :t["sortNatural" + (c ? "Asc" :"Desc")](i[f], n[f], f, e)), 
            m) return m;
          }
          return i[e.columns].order - n[e.columns].order;
        });
        e.debug && console.log("Applying sort " + h.toString() + t.benchmark(n));
      }
    },
    resortComplete:function(t, i) {
      t.table.isUpdating && t.$table.triggerHandler("updateComplete", t.table), e.isFunction(i) && i(t.table);
    },
    checkResort:function(i, n, s) {
      var r = e.isArray(n) ? n :i.sortList;
      !1 === (void 0 === n ? i.resort :n) || i.serverSideSorting || i.table.isProcessing ? (t.resortComplete(i, s), 
      t.applyWidget(i.table, !1)) :r.length ? t.sortOn(i, r, function() {
        t.resortComplete(i, s);
      }, !0) :t.sortReset(i, function() {
        t.resortComplete(i, s), t.applyWidget(i.table, !1);
      });
    },
    sortOn:function(i, n, s, r) {
      var o = i.table;
      i.$table.triggerHandler("sortStart", o), t.updateHeaderSortCount(i, n), t.setHeadersCss(i), 
      i.delayInit && t.isEmptyObject(i.cache) && t.buildCache(i), i.$table.triggerHandler("sortBegin", o), 
      t.multisort(i), t.appendCache(i, r), i.$table.triggerHandler("sortBeforeEnd", o), 
      i.$table.triggerHandler("sortEnd", o), t.applyWidget(o), e.isFunction(s) && s(o);
    },
    sortReset:function(i, n) {
      i.sortList = [], t.setHeadersCss(i), t.multisort(i), t.appendCache(i), e.isFunction(n) && n(i.table);
    },
    getSortType:function(e, t) {
      return e && e[t] ? e[t].type || "" :"";
    },
    getOrder:function(e) {
      return /^d/i.test(e) || 1 === e;
    },
    sortNatural:function(e, i) {
      if (e === i) return 0;
      var n, s, r, o, a, l, c = t.regex;
      if (c.hex.test(i)) {
        if (n = parseInt((e || "").match(c.hex), 16), s = parseInt((i || "").match(c.hex), 16), 
        n < s) return -1;
        if (n > s) return 1;
      }
      for (n = (e || "").replace(c.chunk, "\\0$1\\0").replace(c.chunks, "").split("\\0"), 
      s = (i || "").replace(c.chunk, "\\0$1\\0").replace(c.chunks, "").split("\\0"), l = Math.max(n.length, s.length), 
      a = 0; a < l; a++) {
        if (r = isNaN(n[a]) ? n[a] || 0 :parseFloat(n[a]) || 0, o = isNaN(s[a]) ? s[a] || 0 :parseFloat(s[a]) || 0, 
        isNaN(r) !== isNaN(o)) return isNaN(r) ? 1 :-1;
        if (typeof r != typeof o && (r += "", o += ""), r < o) return -1;
        if (r > o) return 1;
      }
      return 0;
    },
    sortNaturalAsc:function(e, i, n, s) {
      if (e === i) return 0;
      var r = t.string[s.empties[n] || s.emptyTo];
      return "" === e && 0 !== r ? "boolean" == typeof r ? r ? -1 :1 :-r || -1 :"" === i && 0 !== r ? "boolean" == typeof r ? r ? 1 :-1 :r || 1 :t.sortNatural(e, i);
    },
    sortNaturalDesc:function(e, i, n, s) {
      if (e === i) return 0;
      var r = t.string[s.empties[n] || s.emptyTo];
      return "" === e && 0 !== r ? "boolean" == typeof r ? r ? -1 :1 :r || 1 :"" === i && 0 !== r ? "boolean" == typeof r ? r ? 1 :-1 :-r || -1 :t.sortNatural(i, e);
    },
    sortText:function(e, t) {
      return e > t ? 1 :e < t ? -1 :0;
    },
    getTextValue:function(e, t, i) {
      if (i) {
        var n, s = e ? e.length :0, r = i + t;
        for (n = 0; n < s; n++) r += e.charCodeAt(n);
        return t * r;
      }
      return 0;
    },
    sortNumericAsc:function(e, i, n, s, r, o) {
      if (e === i) return 0;
      var a = t.string[o.empties[r] || o.emptyTo];
      return "" === e && 0 !== a ? "boolean" == typeof a ? a ? -1 :1 :-a || -1 :"" === i && 0 !== a ? "boolean" == typeof a ? a ? 1 :-1 :a || 1 :(isNaN(e) && (e = t.getTextValue(e, n, s)), 
      isNaN(i) && (i = t.getTextValue(i, n, s)), e - i);
    },
    sortNumericDesc:function(e, i, n, s, r, o) {
      if (e === i) return 0;
      var a = t.string[o.empties[r] || o.emptyTo];
      return "" === e && 0 !== a ? "boolean" == typeof a ? a ? -1 :1 :a || 1 :"" === i && 0 !== a ? "boolean" == typeof a ? a ? 1 :-1 :-a || -1 :(isNaN(e) && (e = t.getTextValue(e, n, s)), 
      isNaN(i) && (i = t.getTextValue(i, n, s)), i - e);
    },
    sortNumeric:function(e, t) {
      return e - t;
    },
    addWidget:function(e) {
      e.id && !t.isEmptyObject(t.getWidgetById(e.id)) && console.warn('"' + e.id + '" widget was loaded more than once!'), 
      t.widgets[t.widgets.length] = e;
    },
    hasWidget:function(t, i) {
      return t = e(t), t.length && t[0].config && t[0].config.widgetInit[i] || !1;
    },
    getWidgetById:function(e) {
      var i, n, s = t.widgets.length;
      for (i = 0; i < s; i++) if ((n = t.widgets[i]) && n.id && n.id.toLowerCase() === e.toLowerCase()) return n;
    },
    applyWidgetOptions:function(i) {
      var n, s, r = i.config, o = r.widgets.length;
      if (o) for (n = 0; n < o; n++) (s = t.getWidgetById(r.widgets[n])) && s.options && (r.widgetOptions = e.extend(!0, {}, s.options, r.widgetOptions), 
      e.extend(!0, t.defaults.widgetOptions, s.options));
    },
    addWidgetFromClass:function(e) {
      var i, n, s = e.config, r = "^" + s.widgetClass.replace(t.regex.templateName, "(\\S+)+") + "$", o = new RegExp(r, "g"), a = (e.className || "").split(t.regex.spaces);
      if (a.length) for (i = a.length, n = 0; n < i; n++) a[n].match(o) && (s.widgets[s.widgets.length] = a[n].replace(o, "$1"));
    },
    applyWidgetId:function(i, n, s) {
      i = e(i)[0];
      var r, o, a, l = i.config, c = l.widgetOptions, u = t.getWidgetById(n);
      u && (a = u.id, r = !1, e.inArray(a, l.widgets) < 0 && (l.widgets[l.widgets.length] = a), 
      l.debug && (o = new Date()), !s && l.widgetInit[a] || (l.widgetInit[a] = !0, i.hasInitialized && t.applyWidgetOptions(i), 
      "function" == typeof u.init && (r = !0, l.debug && console[console.group ? "group" :"log"]("Initializing " + a + " widget"), 
      u.init(i, u, l, c))), s || "function" != typeof u.format || (r = !0, l.debug && console[console.group ? "group" :"log"]("Updating " + a + " widget"), 
      u.format(i, l, c, !1)), l.debug && r && (console.log("Completed " + (s ? "initializing " :"applying ") + a + " widget" + t.benchmark(o)), 
      console.groupEnd && console.groupEnd()));
    },
    applyWidget:function(i, n, s) {
      i = e(i)[0];
      var r, o, a, l, c, u = i.config, h = [];
      if (!1 === n || !i.hasInitialized || !i.isApplyingWidgets && !i.isUpdating) {
        if (u.debug && (c = new Date()), t.addWidgetFromClass(i), clearTimeout(u.timerReady), 
        u.widgets.length) {
          for (i.isApplyingWidgets = !0, u.widgets = e.grep(u.widgets, function(t, i) {
            return e.inArray(t, u.widgets) === i;
          }), a = u.widgets || [], o = a.length, r = 0; r < o; r++) l = t.getWidgetById(a[r]), 
          l && l.id ? (l.priority || (l.priority = 10), h[r] = l) :u.debug && console.warn('"' + a[r] + '" widget code does not exist!');
          for (h.sort(function(e, t) {
            return e.priority < t.priority ? -1 :e.priority === t.priority ? 0 :1;
          }), o = h.length, u.debug && console[console.group ? "group" :"log"]("Start " + (n ? "initializing" :"applying") + " widgets"), 
          r = 0; r < o; r++) (l = h[r]) && l.id && t.applyWidgetId(i, l.id, n);
          u.debug && console.groupEnd && console.groupEnd(), n || "function" != typeof s || s(i);
        }
        u.timerReady = setTimeout(function() {
          i.isApplyingWidgets = !1, e.data(i, "lastWidgetApplication", new Date()), u.$table.triggerHandler("tablesorter-ready");
        }, 10), u.debug && (l = u.widgets.length, console.log("Completed " + (!0 === n ? "initializing " :"applying ") + l + " widget" + (1 !== l ? "s" :"") + t.benchmark(c)));
      }
    },
    removeWidget:function(i, n, s) {
      i = e(i)[0];
      var r, o, a, l, c = i.config;
      if (!0 === n) for (n = [], l = t.widgets.length, a = 0; a < l; a++) (o = t.widgets[a]) && o.id && (n[n.length] = o.id); else n = (e.isArray(n) ? n.join(",") :n || "").toLowerCase().split(/[\s,]+/);
      for (l = n.length, r = 0; r < l; r++) o = t.getWidgetById(n[r]), a = e.inArray(n[r], c.widgets), 
      a >= 0 && !0 !== s && c.widgets.splice(a, 1), o && o.remove && (c.debug && console.log((s ? "Refreshing" :"Removing") + ' "' + n[r] + '" widget'), 
      o.remove(i, c, c.widgetOptions, s), c.widgetInit[n[r]] = !1);
    },
    refreshWidgets:function(i, n, s) {
      i = e(i)[0];
      var r, o, a = i.config, l = a.widgets, c = t.widgets, u = c.length, h = [], d = function(t) {
        e(t).triggerHandler("refreshComplete");
      };
      for (r = 0; r < u; r++) (o = c[r]) && o.id && (n || e.inArray(o.id, l) < 0) && (h[h.length] = o.id);
      t.removeWidget(i, h.join(","), !0), !0 !== s ? (t.applyWidget(i, n || !1, d), n && t.applyWidget(i, !1, d)) :d(i);
    },
    benchmark:function(e) {
      return " (" + (new Date().getTime() - e.getTime()) + " ms)";
    },
    log:function() {
      console.log(arguments);
    },
    isEmptyObject:function(e) {
      for (var t in e) return !1;
      return !0;
    },
    isValueInArray:function(e, t) {
      var i, n = t && t.length || 0;
      for (i = 0; i < n; i++) if (t[i][0] === e) return i;
      return -1;
    },
    formatFloat:function(i, n) {
      if ("string" != typeof i || "" === i) return i;
      var s;
      return i = (n && n.config ? !1 !== n.config.usNumberFormat :void 0 === n || n) ? i.replace(t.regex.comma, "") :i.replace(t.regex.digitNonUS, "").replace(t.regex.comma, "."), 
      t.regex.digitNegativeTest.test(i) && (i = i.replace(t.regex.digitNegativeReplace, "-$1")), 
      s = parseFloat(i), isNaN(s) ? e.trim(i) :s;
    },
    isDigit:function(e) {
      return isNaN(e) ? t.regex.digitTest.test(e.toString().replace(t.regex.digitReplace, "")) :"" !== e;
    },
    computeColumnIndex:function(t, i) {
      var n, s, r, o, a, l, c, u, h, d, f = i && i.columns || 0, p = [], m = new Array(f);
      for (n = 0; n < t.length; n++) for (l = t[n].cells, s = 0; s < l.length; s++) {
        for (a = l[s], c = a.parentNode.rowIndex, u = a.rowSpan || 1, h = a.colSpan || 1, 
        "undefined" == typeof p[c] && (p[c] = []), r = 0; r < p[c].length + 1; r++) if ("undefined" == typeof p[c][r]) {
          d = r;
          break;
        }
        for (f && a.cellIndex === d || (a.setAttribute ? a.setAttribute("data-column", d) :e(a).attr("data-column", d)), 
        r = c; r < c + u; r++) for ("undefined" == typeof p[r] && (p[r] = []), m = p[r], 
        o = d; o < d + h; o++) m[o] = "x";
      }
      return m.length;
    },
    fixColumnWidth:function(i) {
      i = e(i)[0];
      var n, s, r, o, a, l = i.config, c = l.$table.children("colgroup");
      if (c.length && c.hasClass(t.css.colgroup) && c.remove(), l.widthFixed && 0 === l.$table.children("colgroup").length) {
        for (c = e('<colgroup class="' + t.css.colgroup + '">'), n = l.$table.width(), r = l.$tbodies.find("tr:first").children(":visible"), 
        o = r.length, a = 0; a < o; a++) s = parseInt(r.eq(a).width() / n * 1e3, 10) / 10 + "%", 
        c.append(e("<col>").css("width", s));
        l.$table.prepend(c);
      }
    },
    getData:function(t, i, n) {
      var s, r, o = "", a = e(t);
      return a.length ? (s = !!e.metadata && a.metadata(), r = " " + (a.attr("class") || ""), 
      void 0 !== a.data(n) || void 0 !== a.data(n.toLowerCase()) ? o += a.data(n) || a.data(n.toLowerCase()) :s && "undefined" != typeof s[n] ? o += s[n] :i && "undefined" != typeof i[n] ? o += i[n] :" " !== r && r.match(" " + n + "-") && (o = r.match(new RegExp("\\s" + n + "-([\\w-]+)"))[1] || ""), 
      e.trim(o)) :"";
    },
    getColumnData:function(t, i, n, s, r) {
      if ("object" != typeof i || null === i) return i;
      t = e(t)[0];
      var o, a, l = t.config, c = r || l.$headers, u = l.$headerIndexed && l.$headerIndexed[n] || c.filter('[data-column="' + n + '"]:last');
      if ("undefined" != typeof i[n]) return s ? i[n] :i[c.index(u)];
      for (a in i) if ("string" == typeof a && (o = u.filter(a).add(u.find(a)), o.length)) return i[a];
    },
    isProcessing:function(i, n, s) {
      i = e(i);
      var r = i[0].config, o = s || i.find("." + t.css.header);
      n ? (void 0 !== s && r.sortList.length > 0 && (o = o.filter(function() {
        return !this.sortDisabled && t.isValueInArray(parseFloat(e(this).attr("data-column")), r.sortList) >= 0;
      })), i.add(o).addClass(t.css.processing + " " + r.cssProcessing)) :i.add(o).removeClass(t.css.processing + " " + r.cssProcessing);
    },
    processTbody:function(t, i, n) {
      if (t = e(t)[0], n) return t.isProcessing = !0, i.before('<colgroup class="tablesorter-savemyplace"/>'), 
      e.fn.detach ? i.detach() :i.remove();
      var s = e(t).find("colgroup.tablesorter-savemyplace");
      i.insertAfter(s), s.remove(), t.isProcessing = !1;
    },
    clearTableBody:function(t) {
      e(t)[0].config.$tbodies.children().detach();
    },
    characterEquivalents:{
      a:"\xe1\xe0\xe2\xe3\xe4\u0105\xe5",
      A:"\xc1\xc0\xc2\xc3\xc4\u0104\xc5",
      c:"\xe7\u0107\u010d",
      C:"\xc7\u0106\u010c",
      e:"\xe9\xe8\xea\xeb\u011b\u0119",
      E:"\xc9\xc8\xca\xcb\u011a\u0118",
      i:"\xed\xec\u0130\xee\xef\u0131",
      I:"\xcd\xcc\u0130\xce\xcf",
      o:"\xf3\xf2\xf4\xf5\xf6\u014d",
      O:"\xd3\xd2\xd4\xd5\xd6\u014c",
      ss:"\xdf",
      SS:"\u1e9e",
      u:"\xfa\xf9\xfb\xfc\u016f",
      U:"\xda\xd9\xdb\xdc\u016e"
    },
    replaceAccents:function(e) {
      var i, n = "[", s = t.characterEquivalents;
      if (!t.characterRegex) {
        t.characterRegexArray = {};
        for (i in s) "string" == typeof i && (n += s[i], t.characterRegexArray[i] = new RegExp("[" + s[i] + "]", "g"));
        t.characterRegex = new RegExp(n + "]");
      }
      if (t.characterRegex.test(e)) for (i in s) "string" == typeof i && (e = e.replace(t.characterRegexArray[i], i));
      return e;
    },
    validateOptions:function(i) {
      var n, s, r, o, a = "headers sortForce sortList sortAppend widgets".split(" "), l = i.originalSettings;
      if (l) {
        i.debug && (o = new Date());
        for (n in l) if ("undefined" === (r = typeof t.defaults[n])) console.warn('Tablesorter Warning! "table.config.' + n + '" option not recognized'); else if ("object" === r) for (s in l[n]) r = t.defaults[n] && typeof t.defaults[n][s], 
        e.inArray(n, a) < 0 && "undefined" === r && console.warn('Tablesorter Warning! "table.config.' + n + "." + s + '" option not recognized');
        i.debug && console.log("validate options time:" + t.benchmark(o));
      }
    },
    restoreHeaders:function(i) {
      var n, s, r = e(i)[0].config, o = r.$table.find(r.selectorHeaders), a = o.length;
      for (n = 0; n < a; n++) s = o.eq(n), s.find("." + t.css.headerIn).length && s.html(r.headerContent[n]);
    },
    destroy:function(i, n, s) {
      if (i = e(i)[0], i.hasInitialized) {
        t.removeWidget(i, !0, !1);
        var r, o = e(i), a = i.config, l = a.debug, c = o.find("thead:first"), u = c.find("tr." + t.css.headerRow).removeClass(t.css.headerRow + " " + a.cssHeaderRow), h = o.find("tfoot:first > tr").children("th, td");
        !1 === n && e.inArray("uitheme", a.widgets) >= 0 && (o.triggerHandler("applyWidgetId", [ "uitheme" ]), 
        o.triggerHandler("applyWidgetId", [ "zebra" ])), c.find("tr").not(u).remove(), r = "sortReset update updateRows updateAll updateHeaders updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets removeWidget destroy mouseup mouseleave " + "keypress sortBegin sortEnd resetToLoadState ".split(" ").join(a.namespace + " "), 
        o.removeData("tablesorter").unbind(r.replace(t.regex.spaces, " ")), a.$headers.add(h).removeClass([ t.css.header, a.cssHeader, a.cssAsc, a.cssDesc, t.css.sortAsc, t.css.sortDesc, t.css.sortNone ].join(" ")).removeAttr("data-column").removeAttr("aria-label").attr("aria-disabled", "true"), 
        u.find(a.selectorSort).unbind("mousedown mouseup keypress ".split(" ").join(a.namespace + " ").replace(t.regex.spaces, " ")), 
        t.restoreHeaders(i), o.toggleClass(t.css.table + " " + a.tableClass + " tablesorter-" + a.theme, !1 === n), 
        i.hasInitialized = !1, delete i.config.cache, "function" == typeof s && s(i), l && console.log("tablesorter has been removed");
      }
    }
  };
  e.fn.tablesorter = function(i) {
    return this.each(function() {
      var n = this, s = e.extend(!0, {}, t.defaults, i, t.instanceMethods);
      s.originalSettings = i, !n.hasInitialized && t.buildTable && "TABLE" !== this.nodeName ? t.buildTable(n, s) :t.setup(n, s);
    });
  }, window.console && window.console.log || (t.logs = [], console = {}, console.log = console.warn = console.error = console.table = function() {
    var e = arguments.length > 1 ? arguments :arguments[0];
    t.logs[t.logs.length] = {
      date:Date.now(),
      log:e
    };
  }), t.addParser({
    id:"no-parser",
    is:function() {
      return !1;
    },
    format:function() {
      return "";
    },
    type:"text"
  }), t.addParser({
    id:"text",
    is:function() {
      return !0;
    },
    format:function(i, n) {
      var s = n.config;
      return i && (i = e.trim(s.ignoreCase ? i.toLocaleLowerCase() :i), i = s.sortLocaleCompare ? t.replaceAccents(i) :i), 
      i;
    },
    type:"text"
  }), t.regex.nondigit = /[^\w,. \-()]/g, t.addParser({
    id:"digit",
    is:function(e) {
      return t.isDigit(e);
    },
    format:function(i, n) {
      var s = t.formatFloat((i || "").replace(t.regex.nondigit, ""), n);
      return i && "number" == typeof s ? s :i ? e.trim(i && n.config.ignoreCase ? i.toLocaleLowerCase() :i) :i;
    },
    type:"numeric"
  }), t.regex.currencyReplace = /[+\-,. ]/g, t.regex.currencyTest = /^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/, 
  t.addParser({
    id:"currency",
    is:function(e) {
      return e = (e || "").replace(t.regex.currencyReplace, ""), t.regex.currencyTest.test(e);
    },
    format:function(i, n) {
      var s = t.formatFloat((i || "").replace(t.regex.nondigit, ""), n);
      return i && "number" == typeof s ? s :i ? e.trim(i && n.config.ignoreCase ? i.toLocaleLowerCase() :i) :i;
    },
    type:"numeric"
  }), t.regex.urlProtocolTest = /^(https?|ftp|file):\/\//, t.regex.urlProtocolReplace = /(https?|ftp|file):\/\/(www\.)?/, 
  t.addParser({
    id:"url",
    is:function(e) {
      return t.regex.urlProtocolTest.test(e);
    },
    format:function(i) {
      return i ? e.trim(i.replace(t.regex.urlProtocolReplace, "")) :i;
    },
    type:"text"
  }), t.regex.dash = /-/g, t.regex.isoDate = /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/, t.addParser({
    id:"isoDate",
    is:function(e) {
      return t.regex.isoDate.test(e);
    },
    format:function(e) {
      var i = e ? new Date(e.replace(t.regex.dash, "/")) :e;
      return i instanceof Date && isFinite(i) ? i.getTime() :e;
    },
    type:"numeric"
  }), t.regex.percent = /%/g, t.regex.percentTest = /(\d\s*?%|%\s*?\d)/, t.addParser({
    id:"percent",
    is:function(e) {
      return t.regex.percentTest.test(e) && e.length < 15;
    },
    format:function(e, i) {
      return e ? t.formatFloat(e.replace(t.regex.percent, ""), i) :e;
    },
    type:"numeric"
  }), t.addParser({
    id:"image",
    is:function(e, t, i, n) {
      return n.find("img").length > 0;
    },
    format:function(t, i, n) {
      return e(n).find("img").attr(i.config.imgAttr || "alt") || t;
    },
    parsed:!0,
    type:"text"
  }), t.regex.dateReplace = /(\S)([AP]M)$/i, t.regex.usLongDateTest1 = /^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i, 
  t.regex.usLongDateTest2 = /^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i, t.addParser({
    id:"usLongDate",
    is:function(e) {
      return t.regex.usLongDateTest1.test(e) || t.regex.usLongDateTest2.test(e);
    },
    format:function(e) {
      var i = e ? new Date(e.replace(t.regex.dateReplace, "$1 $2")) :e;
      return i instanceof Date && isFinite(i) ? i.getTime() :e;
    },
    type:"numeric"
  }), t.regex.shortDateTest = /(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/, 
  t.regex.shortDateReplace = /[\-.,]/g, t.regex.shortDateXXY = /(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, 
  t.regex.shortDateYMD = /(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/, t.convertFormat = function(e, i) {
    e = (e || "").replace(t.regex.spaces, " ").replace(t.regex.shortDateReplace, "/"), 
    "mmddyyyy" === i ? e = e.replace(t.regex.shortDateXXY, "$3/$1/$2") :"ddmmyyyy" === i ? e = e.replace(t.regex.shortDateXXY, "$3/$2/$1") :"yyyymmdd" === i && (e = e.replace(t.regex.shortDateYMD, "$1/$2/$3"));
    var n = new Date(e);
    return n instanceof Date && isFinite(n) ? n.getTime() :"";
  }, t.addParser({
    id:"shortDate",
    is:function(e) {
      return e = (e || "").replace(t.regex.spaces, " ").replace(t.regex.shortDateReplace, "/"), 
      t.regex.shortDateTest.test(e);
    },
    format:function(e, i, n, s) {
      if (e) {
        var r = i.config, o = r.$headerIndexed[s], a = o.length && o.data("dateFormat") || t.getData(o, t.getColumnData(i, r.headers, s), "dateFormat") || r.dateFormat;
        return o.length && o.data("dateFormat", a), t.convertFormat(e, a) || e;
      }
      return e;
    },
    type:"numeric"
  }), t.regex.timeTest = /^(0?[1-9]|1[0-2]):([0-5]\d)(\s[AP]M)$|^((?:[01]\d|[2][0-4]):[0-5]\d)$/i, 
  t.regex.timeMatch = /(0?[1-9]|1[0-2]):([0-5]\d)(\s[AP]M)|((?:[01]\d|[2][0-4]):[0-5]\d)/i, 
  t.addParser({
    id:"time",
    is:function(e) {
      return t.regex.timeTest.test(e);
    },
    format:function(e) {
      var i, n = (e || "").match(t.regex.timeMatch), s = new Date(e), r = e && (null !== n ? n[0] :"00:00 AM"), o = r ? new Date("2000/01/01 " + r.replace(t.regex.dateReplace, "$1 $2")) :r;
      return o instanceof Date && isFinite(o) ? (i = s instanceof Date && isFinite(s) ? s.getTime() :0, 
      i ? parseFloat(o.getTime() + "." + s.getTime()) :o.getTime()) :e;
    },
    type:"numeric"
  }), t.addParser({
    id:"metadata",
    is:function() {
      return !1;
    },
    format:function(t, i, n) {
      var s = i.config, r = s.parserMetadataName ? s.parserMetadataName :"sortValue";
      return e(n).metadata()[r];
    },
    type:"numeric"
  }), t.addWidget({
    id:"zebra",
    priority:90,
    format:function(t, i, n) {
      var s, r, o, a, l, c, u, h = new RegExp(i.cssChildRow, "i"), d = i.$tbodies.add(e(i.namespace + "_extra_table").children("tbody:not(." + i.cssInfoBlock + ")"));
      for (l = 0; l < d.length; l++) for (o = 0, s = d.eq(l).children("tr:visible").not(i.selectorRemove), 
      u = s.length, c = 0; c < u; c++) r = s.eq(c), h.test(r[0].className) || o++, a = o % 2 == 0, 
      r.removeClass(n.zebra[a ? 1 :0]).addClass(n.zebra[a ? 0 :1]);
    },
    remove:function(e, i, n, s) {
      if (!s) {
        var r, o, a = i.$tbodies, l = (n.zebra || [ "even", "odd" ]).join(" ");
        for (r = 0; r < a.length; r++) o = t.processTbody(e, a.eq(r), !0), o.children().removeClass(l), 
        t.processTbody(e, o, !1);
      }
    }
  });
}(jQuery), function(e) {
  "function" == typeof define && define.amd ? define([ "jquery" ], e) :"object" == typeof module && "object" == typeof module.exports ? module.exports = e(require("jquery")) :e(jQuery);
}(function(e) {
  return function(e, t, i) {
    "use strict";
    var n = e.tablesorter || {};
    n.storage = function(s, r, o, a) {
      s = e(s)[0];
      var l, c, u, h = !1, d = {}, f = s.config, p = f && f.widgetOptions, m = a && a.useSessionStorage || p && p.storage_useSessionStorage ? "sessionStorage" :"localStorage", g = e(s), v = a && a.id || g.attr(a && a.group || p && p.storage_group || "data-table-group") || p && p.storage_tableId || s.id || e(".tablesorter").index(g), y = a && a.url || g.attr(a && a.page || p && p.storage_page || "data-table-page") || p && p.storage_fixedUrl || f && f.fixedUrl || t.location.pathname;
      if (e.extend(!0, n.defaults, {
        fixedUrl:"",
        widgetOptions:{
          storage_fixedUrl:"",
          storage_group:"",
          storage_page:"",
          storage_tableId:"",
          storage_useSessionStorage:""
        }
      }), m in t) try {
        t[m].setItem("_tmptest", "temp"), h = !0, t[m].removeItem("_tmptest");
      } catch (e) {
        f && f.debug && console.warn(m + " is not supported in this browser");
      }
      if (e.parseJSON && (h ? d = e.parseJSON(t[m][r] || "null") || {} :(c = i.cookie.split(/[;\s|=]/), 
      l = e.inArray(r, c) + 1, d = 0 !== l ? e.parseJSON(c[l] || "null") || {} :{})), 
      void 0 === o || !t.JSON || !JSON.hasOwnProperty("stringify")) return d && d[y] ? d[y][v] :"";
      d[y] || (d[y] = {}), d[y][v] = o, h ? t[m][r] = JSON.stringify(d) :(u = new Date(), 
      u.setTime(u.getTime() + 31536e6), i.cookie = r + "=" + JSON.stringify(d).replace(/\"/g, '"') + "; expires=" + u.toGMTString() + "; path=/");
    };
  }(e, window, document), function(e) {
    "use strict";
    var t = e.tablesorter || {};
    t.themes = {
      bootstrap:{
        table:"table table-bordered table-striped",
        caption:"caption",
        header:"bootstrap-header",
        sortNone:"",
        sortAsc:"",
        sortDesc:"",
        active:"",
        hover:"",
        icons:"",
        iconSortNone:"bootstrap-icon-unsorted",
        iconSortAsc:"icon-chevron-up glyphicon glyphicon-chevron-up",
        iconSortDesc:"icon-chevron-down glyphicon glyphicon-chevron-down",
        filterRow:"",
        footerRow:"",
        footerCells:"",
        even:"",
        odd:""
      },
      jui:{
        table:"ui-widget ui-widget-content ui-corner-all",
        caption:"ui-widget-content",
        header:"ui-widget-header ui-corner-all ui-state-default",
        sortNone:"",
        sortAsc:"",
        sortDesc:"",
        active:"ui-state-active",
        hover:"ui-state-hover",
        icons:"ui-icon",
        iconSortNone:"ui-icon-carat-2-n-s ui-icon-caret-2-n-s",
        iconSortAsc:"ui-icon-carat-1-n ui-icon-caret-1-n",
        iconSortDesc:"ui-icon-carat-1-s ui-icon-caret-1-s",
        filterRow:"",
        footerRow:"",
        footerCells:"",
        even:"ui-widget-content",
        odd:"ui-state-default"
      }
    }, e.extend(t.css, {
      wrapper:"tablesorter-wrapper"
    }), t.addWidget({
      id:"uitheme",
      priority:10,
      format:function(i, n, s) {
        var r, o, a, l, c, u, h, d, f, p, m, g, v, y = t.themes, b = n.$table.add(e(n.namespace + "_extra_table")), w = n.$headers.add(e(n.namespace + "_extra_headers")), x = n.theme || "jui", _ = y[x] || {}, S = e.trim([ _.sortNone, _.sortDesc, _.sortAsc, _.active ].join(" ")), C = e.trim([ _.iconSortNone, _.iconSortDesc, _.iconSortAsc ].join(" "));
        for (n.debug && (c = new Date()), b.hasClass("tablesorter-" + x) && n.theme === n.appliedTheme && s.uitheme_applied || (s.uitheme_applied = !0, 
        p = y[n.appliedTheme] || {}, v = !e.isEmptyObject(p), m = v ? [ p.sortNone, p.sortDesc, p.sortAsc, p.active ].join(" ") :"", 
        g = v ? [ p.iconSortNone, p.iconSortDesc, p.iconSortAsc ].join(" ") :"", v && (s.zebra[0] = e.trim(" " + s.zebra[0].replace(" " + p.even, "")), 
        s.zebra[1] = e.trim(" " + s.zebra[1].replace(" " + p.odd, "")), n.$tbodies.children().removeClass([ p.even, p.odd ].join(" "))), 
        _.even && (s.zebra[0] += " " + _.even), _.odd && (s.zebra[1] += " " + _.odd), b.children("caption").removeClass(p.caption || "").addClass(_.caption), 
        d = b.removeClass((n.appliedTheme ? "tablesorter-" + (n.appliedTheme || "") :"") + " " + (p.table || "")).addClass("tablesorter-" + x + " " + (_.table || "")).children("tfoot"), 
        n.appliedTheme = n.theme, d.length && d.children("tr").removeClass(p.footerRow || "").addClass(_.footerRow).children("th, td").removeClass(p.footerCells || "").addClass(_.footerCells), 
        w.removeClass((v ? [ p.header, p.hover, m ].join(" ") :"") || "").addClass(_.header).not(".sorter-false").unbind("mouseenter.tsuitheme mouseleave.tsuitheme").bind("mouseenter.tsuitheme mouseleave.tsuitheme", function(t) {
          e(this)["mouseenter" === t.type ? "addClass" :"removeClass"](_.hover || "");
        }), w.each(function() {
          var i = e(this);
          i.find("." + t.css.wrapper).length || i.wrapInner('<div class="' + t.css.wrapper + '" style="position:relative;height:100%;width:100%"></div>');
        }), n.cssIcon && w.find("." + t.css.icon).removeClass(v ? [ p.icons, g ].join(" ") :"").addClass(_.icons || ""), 
        t.hasWidget(n.table, "filter") && (o = function() {
          b.children("thead").children("." + t.css.filterRow).removeClass(v ? p.filterRow || "" :"").addClass(_.filterRow || "");
        }, s.filter_initialized ? o() :b.one("filterInit", function() {
          o();
        }))), r = 0; r < n.columns; r++) u = n.$headers.add(e(n.namespace + "_extra_headers")).not(".sorter-false").filter('[data-column="' + r + '"]'), 
        h = t.css.icon ? u.find("." + t.css.icon) :e(), f = w.not(".sorter-false").filter('[data-column="' + r + '"]:last'), 
        f.length && (u.removeClass(S), h.removeClass(C), f[0].sortDisabled ? h.removeClass(_.icons || "") :(a = _.sortNone, 
        l = _.iconSortNone, f.hasClass(t.css.sortAsc) ? (a = [ _.sortAsc, _.active ].join(" "), 
        l = _.iconSortAsc) :f.hasClass(t.css.sortDesc) && (a = [ _.sortDesc, _.active ].join(" "), 
        l = _.iconSortDesc), u.addClass(a), h.addClass(l || "")));
        n.debug && console.log("Applying " + x + " theme" + t.benchmark(c));
      },
      remove:function(e, i, n, s) {
        if (n.uitheme_applied) {
          var r = i.$table, o = i.appliedTheme || "jui", a = t.themes[o] || t.themes.jui, l = r.children("thead").children(), c = a.sortNone + " " + a.sortDesc + " " + a.sortAsc, u = a.iconSortNone + " " + a.iconSortDesc + " " + a.iconSortAsc;
          r.removeClass("tablesorter-" + o + " " + a.table), n.uitheme_applied = !1, s || (r.find(t.css.header).removeClass(a.header), 
          l.unbind("mouseenter.tsuitheme mouseleave.tsuitheme").removeClass(a.hover + " " + c + " " + a.active).filter("." + t.css.filterRow).removeClass(a.filterRow), 
          l.find("." + t.css.icon).removeClass(a.icons + " " + u));
        }
      }
    });
  }(e), function(e) {
    "use strict";
    var t = e.tablesorter || {};
    t.addWidget({
      id:"columns",
      priority:30,
      options:{
        columns:[ "primary", "secondary", "tertiary" ]
      },
      format:function(i, n, s) {
        var r, o, a, l, c, u, h, d, f = n.$table, p = n.$tbodies, m = n.sortList, g = m.length, v = s && s.columns || [ "primary", "secondary", "tertiary" ], y = v.length - 1;
        for (h = v.join(" "), o = 0; o < p.length; o++) r = t.processTbody(i, p.eq(o), !0), 
        a = r.children("tr"), a.each(function() {
          if (c = e(this), "none" !== this.style.display && (u = c.children().removeClass(h), 
          m && m[0] && (u.eq(m[0][0]).addClass(v[0]), g > 1))) for (d = 1; d < g; d++) u.eq(m[d][0]).addClass(v[d] || v[y]);
        }), t.processTbody(i, r, !1);
        if (l = !1 !== s.columns_thead ? [ "thead tr" ] :[], !1 !== s.columns_tfoot && l.push("tfoot tr"), 
        l.length && (a = f.find(l.join(",")).children().removeClass(h), g)) for (d = 0; d < g; d++) a.filter('[data-column="' + m[d][0] + '"]').addClass(v[d] || v[y]);
      },
      remove:function(i, n, s) {
        var r, o, a = n.$tbodies, l = (s.columns || [ "primary", "secondary", "tertiary" ]).join(" ");
        for (n.$headers.removeClass(l), n.$table.children("tfoot").children("tr").children("th, td").removeClass(l), 
        r = 0; r < a.length; r++) o = t.processTbody(i, a.eq(r), !0), o.children("tr").each(function() {
          e(this).children().removeClass(l);
        }), t.processTbody(i, o, !1);
      }
    });
  }(e), function(e) {
    "use strict";
    var t, i, n = e.tablesorter || {}, s = n.css, r = n.keyCodes;
    e.extend(s, {
      filterRow:"tablesorter-filter-row",
      filter:"tablesorter-filter",
      filterDisabled:"disabled",
      filterRowHide:"hideme"
    }), e.extend(r, {
      backSpace:8,
      escape:27,
      space:32,
      left:37,
      down:40
    }), n.addWidget({
      id:"filter",
      priority:50,
      options:{
        filter_cellFilter:"",
        filter_childRows:!1,
        filter_childByColumn:!1,
        filter_childWithSibs:!0,
        filter_columnAnyMatch:!0,
        filter_columnFilters:!0,
        filter_cssFilter:"",
        filter_defaultAttrib:"data-value",
        filter_defaultFilter:{},
        filter_excludeFilter:{},
        filter_external:"",
        filter_filteredRow:"filtered",
        filter_formatter:null,
        filter_functions:null,
        filter_hideEmpty:!0,
        filter_hideFilters:!1,
        filter_ignoreCase:!0,
        filter_liveSearch:!0,
        filter_matchType:{
          input:"exact",
          select:"exact"
        },
        filter_onlyAvail:"filter-onlyAvail",
        filter_placeholder:{
          search:"",
          select:""
        },
        filter_reset:null,
        filter_resetOnEsc:!0,
        filter_saveFilters:!1,
        filter_searchDelay:300,
        filter_searchFiltered:!0,
        filter_selectSource:null,
        filter_selectSourceSeparator:"|",
        filter_serversideFiltering:!1,
        filter_startsWith:!1,
        filter_useParsedData:!1
      },
      format:function(e, i, n) {
        i.$table.hasClass("hasFilters") || t.init(e, i, n);
      },
      remove:function(t, i, r, o) {
        var a, l, c = i.$table, u = i.$tbodies, h = "addRows updateCell update updateRows updateComplete appendCache filterReset filterEnd search ".split(" ").join(i.namespace + "filter ");
        if (c.removeClass("hasFilters").unbind(h.replace(n.regex.spaces, " ")).find("." + s.filterRow).remove(), 
        r.filter_initialized = !1, !o) {
          for (a = 0; a < u.length; a++) l = n.processTbody(t, u.eq(a), !0), l.children().removeClass(r.filter_filteredRow).show(), 
          n.processTbody(t, l, !1);
          r.filter_reset && e(document).undelegate(r.filter_reset, "click" + i.namespace + "filter");
        }
      }
    }), t = n.filter = {
      regex:{
        regex:/^\/((?:\\\/|[^\/])+)\/([migyu]{0,5})?$/,
        child:/tablesorter-childRow/,
        filtered:/filtered/,
        type:/undefined|number/,
        exact:/(^[\"\'=]+)|([\"\'=]+$)/g,
        operators:/[<>=]/g,
        query:"(q|query)",
        wild01:/\?/g,
        wild0More:/\*/g,
        quote:/\"/g,
        isNeg1:/(>=?\s*-\d)/,
        isNeg2:/(<=?\s*\d)/
      },
      types:{
        or:function(n, s, r) {
          if ((i.orTest.test(s.iFilter) || i.orSplit.test(s.filter)) && !i.regex.test(s.filter)) {
            var o, a, l, c, u = e.extend({}, s), h = s.filter.split(i.orSplit), d = s.iFilter.split(i.orSplit), f = h.length;
            for (o = 0; o < f; o++) {
              u.nestedFilters = !0, u.filter = "" + (t.parseFilter(n, h[o], s) || ""), u.iFilter = "" + (t.parseFilter(n, d[o], s) || ""), 
              l = "(" + (t.parseFilter(n, u.filter, s) || "") + ")";
              try {
                if (c = new RegExp(s.isMatch ? l :"^" + l + "$", n.widgetOptions.filter_ignoreCase ? "i" :""), 
                a = c.test(u.exact) || t.processTypes(n, u, r)) return a;
              } catch (e) {
                return null;
              }
            }
            return a || !1;
          }
          return null;
        },
        and:function(n, s, r) {
          if (i.andTest.test(s.filter)) {
            var o, a, l, c, u, h = e.extend({}, s), d = s.filter.split(i.andSplit), f = s.iFilter.split(i.andSplit), p = d.length;
            for (o = 0; o < p; o++) {
              h.nestedFilters = !0, h.filter = "" + (t.parseFilter(n, d[o], s) || ""), h.iFilter = "" + (t.parseFilter(n, f[o], s) || ""), 
              c = ("(" + (t.parseFilter(n, h.filter, s) || "") + ")").replace(i.wild01, "\\S{1}").replace(i.wild0More, "\\S*");
              try {
                u = new RegExp(s.isMatch ? c :"^" + c + "$", n.widgetOptions.filter_ignoreCase ? "i" :""), 
                l = u.test(h.exact) || t.processTypes(n, h, r), a = 0 === o ? l :a && l;
              } catch (e) {
                return null;
              }
            }
            return a || !1;
          }
          return null;
        },
        regex:function(e, t) {
          if (i.regex.test(t.filter)) {
            var n, s = t.filter_regexCache[t.index] || i.regex.exec(t.filter), r = s instanceof RegExp;
            try {
              r || (t.filter_regexCache[t.index] = s = new RegExp(s[1], s[2])), n = s.test(t.exact);
            } catch (e) {
              n = !1;
            }
            return n;
          }
          return null;
        },
        operators:function(s, r) {
          if (i.operTest.test(r.iFilter) && "" !== r.iExact) {
            var o, a, l, c = s.table, u = r.parsed[r.index], h = n.formatFloat(r.iFilter.replace(i.operators, ""), c), d = s.parsers[r.index] || {}, f = h;
            return (u || "numeric" === d.type) && (l = e.trim("" + r.iFilter.replace(i.operators, "")), 
            a = t.parseFilter(s, l, r, !0), h = "number" != typeof a || "" === a || isNaN(a) ? h :a), 
            !u && "numeric" !== d.type || isNaN(h) || "undefined" == typeof r.cache ? (l = isNaN(r.iExact) ? r.iExact.replace(n.regex.nondigit, "") :r.iExact, 
            o = n.formatFloat(l, c)) :o = r.cache, i.gtTest.test(r.iFilter) ? a = i.gteTest.test(r.iFilter) ? o >= h :o > h :i.ltTest.test(r.iFilter) && (a = i.lteTest.test(r.iFilter) ? o <= h :o < h), 
            a || "" !== f || (a = !0), a;
          }
          return null;
        },
        notMatch:function(n, s) {
          if (i.notTest.test(s.iFilter)) {
            var r, o = s.iFilter.replace("!", ""), a = t.parseFilter(n, o, s) || "";
            return i.exact.test(a) ? "" === (a = a.replace(i.exact, "")) || e.trim(a) !== s.iExact :(r = s.iExact.search(e.trim(a)), 
            "" === a || (s.anyMatch ? r < 0 :!(n.widgetOptions.filter_startsWith ? 0 === r :r >= 0)));
          }
          return null;
        },
        exact:function(n, s) {
          if (i.exact.test(s.iFilter)) {
            var r = s.iFilter.replace(i.exact, ""), o = t.parseFilter(n, r, s) || "";
            return s.anyMatch ? e.inArray(o, s.rowArray) >= 0 :o == s.iExact;
          }
          return null;
        },
        range:function(e, s) {
          if (i.toTest.test(s.iFilter)) {
            var r, o, a, l, c = e.table, u = s.index, h = s.parsed[u], d = s.iFilter.split(i.toSplit);
            return o = d[0].replace(n.regex.nondigit, "") || "", a = n.formatFloat(t.parseFilter(e, o, s), c), 
            o = d[1].replace(n.regex.nondigit, "") || "", l = n.formatFloat(t.parseFilter(e, o, s), c), 
            (h || "numeric" === e.parsers[u].type) && (r = e.parsers[u].format("" + d[0], c, e.$headers.eq(u), u), 
            a = "" === r || isNaN(r) ? a :r, r = e.parsers[u].format("" + d[1], c, e.$headers.eq(u), u), 
            l = "" === r || isNaN(r) ? l :r), !h && "numeric" !== e.parsers[u].type || isNaN(a) || isNaN(l) ? (o = isNaN(s.iExact) ? s.iExact.replace(n.regex.nondigit, "") :s.iExact, 
            r = n.formatFloat(o, c)) :r = s.cache, a > l && (o = a, a = l, l = o), r >= a && r <= l || "" === a || "" === l;
          }
          return null;
        },
        wild:function(e, n) {
          if (i.wildOrTest.test(n.iFilter)) {
            var s = "" + (t.parseFilter(e, n.iFilter, n) || "");
            !i.wildTest.test(s) && n.nestedFilters && (s = n.isMatch ? s :"^(" + s + ")$");
            try {
              return new RegExp(s.replace(i.wild01, "\\S{1}").replace(i.wild0More, "\\S*"), e.widgetOptions.filter_ignoreCase ? "i" :"").test(n.exact);
            } catch (e) {
              return null;
            }
          }
          return null;
        },
        fuzzy:function(e, n) {
          if (i.fuzzyTest.test(n.iFilter)) {
            var s, r = 0, o = n.iExact.length, a = n.iFilter.slice(1), l = t.parseFilter(e, a, n) || "";
            for (s = 0; s < o; s++) n.iExact[s] === l[r] && (r += 1);
            return r === l.length;
          }
          return null;
        }
      },
      init:function(r) {
        n.language = e.extend(!0, {}, {
          to:"to",
          or:"or",
          and:"and"
        }, n.language);
        var o, a, l, c, u, h, d, f, p = r.config, m = p.widgetOptions;
        if (p.$table.addClass("hasFilters"), p.lastSearch = [], m.filter_searchTimer = null, 
        m.filter_initTimer = null, m.filter_formatterCount = 0, m.filter_formatterInit = [], 
        m.filter_anyColumnSelector = '[data-column="all"],[data-column="any"]', m.filter_multipleColumnSelector = '[data-column*="-"],[data-column*=","]', 
        h = "\\{" + i.query + "\\}", e.extend(i, {
          child:new RegExp(p.cssChildRow),
          filtered:new RegExp(m.filter_filteredRow),
          alreadyFiltered:new RegExp("(\\s+(" + n.language.or + "|-|" + n.language.to + ")\\s+)", "i"),
          toTest:new RegExp("\\s+(-|" + n.language.to + ")\\s+", "i"),
          toSplit:new RegExp("(?:\\s+(?:-|" + n.language.to + ")\\s+)", "gi"),
          andTest:new RegExp("\\s+(" + n.language.and + "|&&)\\s+", "i"),
          andSplit:new RegExp("(?:\\s+(?:" + n.language.and + "|&&)\\s+)", "gi"),
          orTest:new RegExp("(\\||\\s+" + n.language.or + "\\s+)", "i"),
          orSplit:new RegExp("(?:\\s+(?:" + n.language.or + ")\\s+|\\|)", "gi"),
          iQuery:new RegExp(h, "i"),
          igQuery:new RegExp(h, "ig"),
          operTest:/^[<>]=?/,
          gtTest:/>/,
          gteTest:/>=/,
          ltTest:/</,
          lteTest:/<=/,
          notTest:/^\!/,
          wildOrTest:/[\?\*\|]/,
          wildTest:/\?\*/,
          fuzzyTest:/^~/,
          exactTest:/[=\"\|!]/
        }), h = p.$headers.filter(".filter-false, .parser-false").length, !1 !== m.filter_columnFilters && h !== p.$headers.length && t.buildRow(r, p, m), 
        l = "addRows updateCell update updateRows updateComplete appendCache filterReset " + "filterResetSaved filterEnd search ".split(" ").join(p.namespace + "filter "), 
        p.$table.bind(l, function(i, o) {
          return h = m.filter_hideEmpty && e.isEmptyObject(p.cache) && !(p.delayInit && "appendCache" === i.type), 
          p.$table.find("." + s.filterRow).toggleClass(m.filter_filteredRow, h), /(search|filter)/.test(i.type) || (i.stopPropagation(), 
          t.buildDefault(r, !0)), "filterReset" === i.type ? (p.$table.find("." + s.filter).add(m.filter_$externalFilters).val(""), 
          t.searching(r, [])) :"filterResetSaved" === i.type ? n.storage(r, "tablesorter-filters", "") :"filterEnd" === i.type ? t.buildDefault(r, !0) :(o = "search" === i.type ? o :"updateComplete" === i.type ? p.$table.data("lastSearch") :"", 
          /(update|add)/.test(i.type) && "updateComplete" !== i.type && (p.lastCombinedFilter = null, 
          p.lastSearch = [], setTimeout(function() {
            p.$table.triggerHandler("filterFomatterUpdate");
          }, 100)), t.searching(r, o, !0)), !1;
        }), m.filter_reset && (m.filter_reset instanceof e ? m.filter_reset.click(function() {
          p.$table.triggerHandler("filterReset");
        }) :e(m.filter_reset).length && e(document).undelegate(m.filter_reset, "click" + p.namespace + "filter").delegate(m.filter_reset, "click" + p.namespace + "filter", function() {
          p.$table.triggerHandler("filterReset");
        })), m.filter_functions) for (u = 0; u < p.columns; u++) if (d = n.getColumnData(r, m.filter_functions, u)) if (c = p.$headerIndexed[u].removeClass("filter-select"), 
        f = !(c.hasClass("filter-false") || c.hasClass("parser-false")), o = "", !0 === d && f) t.buildSelect(r, u); else if ("object" == typeof d && f) {
          for (a in d) "string" == typeof a && (o += "" === o ? '<option value="">' + (c.data("placeholder") || c.attr("data-placeholder") || m.filter_placeholder.select || "") + "</option>" :"", 
          h = a, l = a, a.indexOf(m.filter_selectSourceSeparator) >= 0 && (h = a.split(m.filter_selectSourceSeparator), 
          l = h[1], h = h[0]), o += "<option " + (l === h ? "" :'data-function-name="' + a + '" ') + 'value="' + h + '">' + l + "</option>");
          p.$table.find("thead").find("select." + s.filter + '[data-column="' + u + '"]').append(o), 
          l = m.filter_selectSource, d = "function" == typeof l || n.getColumnData(r, l, u), 
          d && t.buildSelect(p.table, u, "", !0, c.hasClass(m.filter_onlyAvail));
        }
        t.buildDefault(r, !0), t.bindSearch(r, p.$table.find("." + s.filter), !0), m.filter_external && t.bindSearch(r, m.filter_external), 
        m.filter_hideFilters && t.hideFilters(p), p.showProcessing && (l = "filterStart filterEnd ".split(" ").join(p.namespace + "filter "), 
        p.$table.unbind(l.replace(n.regex.spaces, " ")).bind(l, function(t, i) {
          c = i ? p.$table.find("." + s.header).filter("[data-column]").filter(function() {
            return "" !== i[e(this).data("column")];
          }) :"", n.isProcessing(r, "filterStart" === t.type, i ? c :"");
        })), p.filteredRows = p.totalRows, l = "tablesorter-initialized pagerBeforeInitialized ".split(" ").join(p.namespace + "filter "), 
        p.$table.unbind(l.replace(n.regex.spaces, " ")).bind(l, function() {
          t.completeInit(this);
        }), p.pager && p.pager.initialized && !m.filter_initialized ? (p.$table.triggerHandler("filterFomatterUpdate"), 
        setTimeout(function() {
          t.filterInitComplete(p);
        }, 100)) :m.filter_initialized || t.completeInit(r);
      },
      completeInit:function(e) {
        var i = e.config, s = i.widgetOptions, r = t.setDefaults(e, i, s) || [];
        r.length && (i.delayInit && "" === r.join("") || n.setFilters(e, r, !0)), i.$table.triggerHandler("filterFomatterUpdate"), 
        setTimeout(function() {
          s.filter_initialized || t.filterInitComplete(i);
        }, 100);
      },
      formatterUpdated:function(e, t) {
        var i = e && e.closest("table")[0].config.widgetOptions;
        i && !i.filter_initialized && (i.filter_formatterInit[t] = 1);
      },
      filterInitComplete:function(i) {
        var n, s, r = i.widgetOptions, o = 0, a = function() {
          r.filter_initialized = !0, i.lastSearch = i.$table.data("lastSearch"), i.$table.triggerHandler("filterInit", i), 
          t.findRows(i.table, i.lastSearch || []);
        };
        if (e.isEmptyObject(r.filter_formatter)) a(); else {
          for (s = r.filter_formatterInit.length, n = 0; n < s; n++) 1 === r.filter_formatterInit[n] && o++;
          clearTimeout(r.filter_initTimer), r.filter_initialized || o !== r.filter_formatterCount ? r.filter_initialized || (r.filter_initTimer = setTimeout(function() {
            a();
          }, 500)) :a();
        }
      },
      processFilters:function(e, t) {
        var i, n = [], s = t ? encodeURIComponent :decodeURIComponent, r = e.length;
        for (i = 0; i < r; i++) e[i] && (n[i] = s(e[i]));
        return n;
      },
      setDefaults:function(i, s, r) {
        var o, a, l, c, u, h = n.getFilters(i) || [];
        if (r.filter_saveFilters && n.storage && (a = n.storage(i, "tablesorter-filters") || [], 
        (o = e.isArray(a)) && "" === a.join("") || !o || (h = t.processFilters(a))), "" === h.join("")) for (u = s.$headers.add(r.filter_$externalFilters).filter("[" + r.filter_defaultAttrib + "]"), 
        l = 0; l <= s.columns; l++) c = l === s.columns ? "all" :l, h[l] = u.filter('[data-column="' + c + '"]').attr(r.filter_defaultAttrib) || h[l] || "";
        return s.$table.data("lastSearch", h), h;
      },
      parseFilter:function(e, t, i, n) {
        return n || i.parsed[i.index] ? e.parsers[i.index].format(t, e.table, [], i.index) :t;
      },
      buildRow:function(i, r, o) {
        var a, l, c, u, h, d, f, p, m, g = o.filter_cellFilter, v = r.columns, y = e.isArray(g), b = '<tr role="row" class="' + s.filterRow + " " + r.cssIgnoreRow + '">';
        for (c = 0; c < v; c++) r.$headerIndexed[c].length && (m = r.$headerIndexed[c] && r.$headerIndexed[c][0].colSpan || 0, 
        b += m > 1 ? '<td data-column="' + c + "-" + (c + m - 1) + '" colspan="' + m + '"' :'<td data-column="' + c + '"', 
        b += y ? g[c] ? ' class="' + g[c] + '"' :"" :"" !== g ? ' class="' + g + '"' :"", 
        b += "></td>");
        for (r.$filters = e(b += "</tr>").appendTo(r.$table.children("thead").eq(0)).children("td"), 
        c = 0; c < v; c++) d = !1, (u = r.$headerIndexed[c]) && u.length && (a = t.getColumnElm(r, r.$filters, c), 
        p = n.getColumnData(i, o.filter_functions, c), h = o.filter_functions && p && "function" != typeof p || u.hasClass("filter-select"), 
        l = n.getColumnData(i, r.headers, c), d = "false" === n.getData(u[0], l, "filter") || "false" === n.getData(u[0], l, "parser"), 
        h ? b = e("<select>").appendTo(a) :(p = n.getColumnData(i, o.filter_formatter, c), 
        p ? (o.filter_formatterCount++, b = p(a, c), b && 0 === b.length && (b = a.children("input")), 
        b && (0 === b.parent().length || b.parent().length && b.parent()[0] !== a[0]) && a.append(b)) :b = e('<input type="search">').appendTo(a), 
        b && (m = u.data("placeholder") || u.attr("data-placeholder") || o.filter_placeholder.search || "", 
        b.attr("placeholder", m))), b && (f = (e.isArray(o.filter_cssFilter) ? "undefined" != typeof o.filter_cssFilter[c] ? o.filter_cssFilter[c] || "" :"" :o.filter_cssFilter) || "", 
        b.addClass(s.filter + " " + f).attr("data-column", a.attr("data-column")), d && (b.attr("placeholder", "").addClass(s.filterDisabled)[0].disabled = !0)));
      },
      bindSearch:function(i, s, o) {
        if (i = e(i)[0], s = e(s), s.length) {
          var a, l = i.config, c = l.widgetOptions, u = l.namespace + "filter", h = c.filter_$externalFilters;
          !0 !== o && (a = c.filter_anyColumnSelector + "," + c.filter_multipleColumnSelector, 
          c.filter_$anyMatch = s.filter(a), h && h.length ? c.filter_$externalFilters = c.filter_$externalFilters.add(s) :c.filter_$externalFilters = s, 
          n.setFilters(i, l.$table.data("lastSearch") || [], !1 === o)), a = "keypress keyup keydown search change input ".split(" ").join(u + " "), 
          s.attr("data-lastSearchTime", new Date().getTime()).unbind(a.replace(n.regex.spaces, " ")).bind("keydown" + u, function(e) {
            if (e.which === r.escape && !i.config.widgetOptions.filter_resetOnEsc) return !1;
          }).bind("keyup" + u, function(s) {
            c = i.config.widgetOptions;
            var o = parseInt(e(this).attr("data-column"), 10), a = "boolean" == typeof c.filter_liveSearch ? c.filter_liveSearch :n.getColumnData(i, c.filter_liveSearch, o);
            if (void 0 === a && (a = c.filter_liveSearch.fallback || !1), e(this).attr("data-lastSearchTime", new Date().getTime()), 
            s.which === r.escape) this.value = c.filter_resetOnEsc ? "" :l.lastSearch[o]; else {
              if (!1 === a) return;
              if ("" !== this.value && ("number" == typeof a && this.value.length < a || s.which !== r.enter && s.which !== r.backSpace && (s.which < r.space || s.which >= r.left && s.which <= r.down))) return;
            }
            t.searching(i, !0, !0, o);
          }).bind("search change keypress input ".split(" ").join(u + " "), function(s) {
            var o = parseInt(e(this).attr("data-column"), 10), a = "boolean" == typeof c.filter_liveSearch ? c.filter_liveSearch :n.getColumnData(i, c.filter_liveSearch, o);
            !i.config.widgetOptions.filter_initialized || s.which !== r.enter && "search" !== s.type && ("change" !== s.type && "input" !== s.type || !0 !== a || this.value === l.lastSearch[o]) || (s.preventDefault(), 
            e(this).attr("data-lastSearchTime", new Date().getTime()), t.searching(i, "keypress" !== s.type, !0, o));
          });
        }
      },
      searching:function(e, i, s, r) {
        var o, a = e.config.widgetOptions;
        void 0 === r ? o = !1 :void 0 === (o = "boolean" == typeof a.filter_liveSearch ? a.filter_liveSearch :n.getColumnData(e, a.filter_liveSearch, r)) && (o = a.filter_liveSearch.fallback || !1), 
        clearTimeout(a.filter_searchTimer), void 0 === i || !0 === i ? a.filter_searchTimer = setTimeout(function() {
          t.checkFilters(e, i, s);
        }, o ? a.filter_searchDelay :10) :t.checkFilters(e, i, s);
      },
      checkFilters:function(i, r, o) {
        var a = i.config, l = a.widgetOptions, c = e.isArray(r), u = c ? r :n.getFilters(i, !0), h = (u || []).join("");
        if (e.isEmptyObject(a.cache)) return void (a.delayInit && (!a.pager || a.pager && a.pager.initialized) && n.updateCache(a, function() {
          t.checkFilters(i, !1, o);
        }));
        if (c && (n.setFilters(i, u, !1, !0 !== o), l.filter_initialized || (a.lastCombinedFilter = "")), 
        l.filter_hideFilters && a.$table.find("." + s.filterRow).triggerHandler(t.hideFiltersCheck(a) ? "mouseleave" :"mouseenter"), 
        a.lastCombinedFilter !== h || !1 === r) {
          if (!1 === r && (a.lastCombinedFilter = null, a.lastSearch = []), u = u || [], u = Array.prototype.map ? u.map(String) :u.join("\ufffd").split("\ufffd"), 
          l.filter_initialized && a.$table.triggerHandler("filterStart", [ u ]), !a.showProcessing) return t.findRows(i, u, h), 
          !1;
          setTimeout(function() {
            return t.findRows(i, u, h), !1;
          }, 30);
        }
      },
      hideFiltersCheck:function(e) {
        if ("function" == typeof e.widgetOptions.filter_hideFilters) {
          var t = e.widgetOptions.filter_hideFilters(e);
          if ("boolean" == typeof t) return t;
        }
        return "" === n.getFilters(e.$table).join("");
      },
      hideFilters:function(i, n) {
        var r;
        (n || i.$table).find("." + s.filterRow).addClass(s.filterRowHide).bind("mouseenter mouseleave", function(n) {
          var o = n, a = e(this);
          clearTimeout(r), r = setTimeout(function() {
            /enter|over/.test(o.type) ? a.removeClass(s.filterRowHide) :e(document.activeElement).closest("tr")[0] !== a[0] && a.toggleClass(s.filterRowHide, t.hideFiltersCheck(i));
          }, 200);
        }).find("input, select").bind("focus blur", function(n) {
          var o = n, a = e(this).closest("tr");
          clearTimeout(r), r = setTimeout(function() {
            clearTimeout(r), a.toggleClass(s.filterRowHide, t.hideFiltersCheck(i) && "focus" !== o.type);
          }, 200);
        });
      },
      defaultFilter:function(t, n) {
        if ("" === t) return t;
        var s = i.iQuery, r = n.match(i.igQuery).length, o = r > 1 ? e.trim(t).split(/\s/) :[ e.trim(t) ], a = o.length - 1, l = 0, c = n;
        for (a < 1 && r > 1 && (o[1] = o[0]); s.test(c); ) c = c.replace(s, o[l++] || ""), 
        s.test(c) && l < a && "" !== (o[l] || "") && (c = n.replace(s, c));
        return c;
      },
      getLatestSearch:function(t) {
        return t ? t.sort(function(t, i) {
          return e(i).attr("data-lastSearchTime") - e(t).attr("data-lastSearchTime");
        }) :t || e();
      },
      findRange:function(e, t, i) {
        var n, s, r, o, a, l, c, u, h, d = [];
        if (/^[0-9]+$/.test(t)) return [ parseInt(t, 10) ];
        if (!i && /-/.test(t)) for (s = t.match(/(\d+)\s*-\s*(\d+)/g), h = s ? s.length :0, 
        u = 0; u < h; u++) {
          for (r = s[u].split(/\s*-\s*/), o = parseInt(r[0], 10) || 0, a = parseInt(r[1], 10) || e.columns - 1, 
          o > a && (n = o, o = a, a = n), a >= e.columns && (a = e.columns - 1); o <= a; o++) d[d.length] = o;
          t = t.replace(s[u], "");
        }
        if (!i && /,/.test(t)) for (l = t.split(/\s*,\s*/), h = l.length, c = 0; c < h; c++) "" !== l[c] && (u = parseInt(l[c], 10)) < e.columns && (d[d.length] = u);
        if (!d.length) for (u = 0; u < e.columns; u++) d[d.length] = u;
        return d;
      },
      getColumnElm:function(i, n, s) {
        return n.filter(function() {
          var n = t.findRange(i, e(this).attr("data-column"));
          return e.inArray(s, n) > -1;
        });
      },
      multipleColumns:function(i, n) {
        var s = i.widgetOptions, r = s.filter_initialized || !n.filter(s.filter_anyColumnSelector).length, o = e.trim(t.getLatestSearch(n).attr("data-column") || "");
        return t.findRange(i, o, !r);
      },
      processTypes:function(i, n, s) {
        var r, o = null, a = null;
        for (r in t.types) e.inArray(r, s.excludeMatch) < 0 && null === a && null !== (a = t.types[r](i, n, s)) && (o = a);
        return o;
      },
      matchType:function(e, t) {
        var i, n = e.widgetOptions, r = e.$headerIndexed[t];
        return r.hasClass("filter-exact") ? i = !1 :r.hasClass("filter-match") ? i = !0 :(n.filter_columnFilters ? r = e.$filters.find("." + s.filter).add(n.filter_$externalFilters).filter('[data-column="' + t + '"]') :n.filter_$externalFilters && (r = n.filter_$externalFilters.filter('[data-column="' + t + '"]')), 
        i = !!r.length && "match" === e.widgetOptions.filter_matchType[(r[0].nodeName || "").toLowerCase()]), 
        i;
      },
      processRow:function(s, r, o) {
        var a, l, c, u, h, d = s.widgetOptions, f = !0, p = d.filter_$anyMatch && d.filter_$anyMatch.length, m = d.filter_$anyMatch && d.filter_$anyMatch.length ? t.multipleColumns(s, d.filter_$anyMatch) :[];
        if (r.$cells = r.$row.children(), r.anyMatchFlag && m.length > 1 || r.anyMatchFilter && !p) {
          if (r.anyMatch = !0, r.isMatch = !0, r.rowArray = r.$cells.map(function(t) {
            if (e.inArray(t, m) > -1 || r.anyMatchFilter && !p) return r.parsed[t] ? h = r.cacheArray[t] :(h = r.rawArray[t], 
            h = e.trim(d.filter_ignoreCase ? h.toLowerCase() :h), s.sortLocaleCompare && (h = n.replaceAccents(h))), 
            h;
          }).get(), r.filter = r.anyMatchFilter, r.iFilter = r.iAnyMatchFilter, r.exact = r.rowArray.join(" "), 
          r.iExact = d.filter_ignoreCase ? r.exact.toLowerCase() :r.exact, r.cache = r.cacheArray.slice(0, -1).join(" "), 
          o.excludeMatch = o.noAnyMatch, null !== (l = t.processTypes(s, r, o))) f = l; else if (d.filter_startsWith) for (f = !1, 
          m = Math.min(s.columns, r.rowArray.length); !f && m > 0; ) m--, f = f || 0 === r.rowArray[m].indexOf(r.iFilter); else f = (r.iExact + r.childRowText).indexOf(r.iFilter) >= 0;
          if (r.anyMatch = !1, r.filters.join("") === r.filter) return f;
        }
        for (m = 0; m < s.columns; m++) r.filter = r.filters[m], r.index = m, o.excludeMatch = o.excludeFilter[m], 
        r.filter && (r.cache = r.cacheArray[m], a = r.parsed[m] ? r.cache :r.rawArray[m] || "", 
        r.exact = s.sortLocaleCompare ? n.replaceAccents(a) :a, r.iExact = !i.type.test(typeof r.exact) && d.filter_ignoreCase ? r.exact.toLowerCase() :r.exact, 
        r.isMatch = t.matchType(s, m), a = f, u = d.filter_columnFilters ? s.$filters.add(d.filter_$externalFilters).filter('[data-column="' + m + '"]').find("select option:selected").attr("data-function-name") || "" :"", 
        s.sortLocaleCompare && (r.filter = n.replaceAccents(r.filter)), d.filter_defaultFilter && i.iQuery.test(o.defaultColFilter[m]) && (r.filter = t.defaultFilter(r.filter, o.defaultColFilter[m])), 
        r.iFilter = d.filter_ignoreCase ? (r.filter || "").toLowerCase() :r.filter, c = o.functions[m], 
        l = null, c && (!0 === c ? l = r.isMatch ? ("" + r.iExact).search(r.iFilter) >= 0 :r.filter === r.exact :"function" == typeof c ? l = c(r.exact, r.cache, r.filter, m, r.$row, s, r) :"function" == typeof c[u || r.filter] && (h = u || r.filter, 
        l = c[h](r.exact, r.cache, r.filter, m, r.$row, s, r))), null === l ? (l = t.processTypes(s, r, o), 
        null !== l ? a = l :(h = (r.iExact + r.childRowText).indexOf(t.parseFilter(s, r.iFilter, r)), 
        a = !d.filter_startsWith && h >= 0 || d.filter_startsWith && 0 === h)) :a = l, f = !!a && f);
        return f;
      },
      findRows:function(s, r, o) {
        if (s.config.lastCombinedFilter !== o && s.config.widgetOptions.filter_initialized) {
          var a, l, c, u, h, d, f, p, m, g, v, y, b, w, x, _, S, C, T, k, M, j, P, E = e.extend([], r), A = s.config, D = A.widgetOptions, F = {
            anyMatch:!1,
            filters:r,
            filter_regexCache:[]
          }, I = {
            noAnyMatch:[ "range", "operators" ],
            functions:[],
            excludeFilter:[],
            defaultColFilter:[],
            defaultAnyFilter:n.getColumnData(s, D.filter_defaultFilter, A.columns, !0) || ""
          };
          for (F.parsed = [], m = 0; m < A.columns; m++) F.parsed[m] = D.filter_useParsedData || A.parsers && A.parsers[m] && A.parsers[m].parsed || n.getData && "parsed" === n.getData(A.$headerIndexed[m], n.getColumnData(s, A.headers, m), "filter") || A.$headerIndexed[m].hasClass("filter-parsed"), 
          I.functions[m] = n.getColumnData(s, D.filter_functions, m) || A.$headerIndexed[m].hasClass("filter-select"), 
          I.defaultColFilter[m] = n.getColumnData(s, D.filter_defaultFilter, m) || "", I.excludeFilter[m] = (n.getColumnData(s, D.filter_excludeFilter, m, !0) || "").split(/\s+/);
          for (A.debug && (console.log("Filter: Starting filter widget search", r), w = new Date()), 
          A.filteredRows = 0, A.totalRows = 0, o = (E || []).join(""), f = 0; f < A.$tbodies.length; f++) {
            if (p = n.processTbody(s, A.$tbodies.eq(f), !0), m = A.columns, l = A.cache[f].normalized, 
            u = e(e.map(l, function(e) {
              return e[m].$row.get();
            })), "" === o || D.filter_serversideFiltering) u.removeClass(D.filter_filteredRow).not("." + A.cssChildRow).css("display", ""); else {
              if (u = u.not("." + A.cssChildRow), a = u.length, (D.filter_$anyMatch && D.filter_$anyMatch.length || "undefined" != typeof r[A.columns]) && (F.anyMatchFlag = !0, 
              F.anyMatchFilter = "" + (r[A.columns] || D.filter_$anyMatch && t.getLatestSearch(D.filter_$anyMatch).val() || ""), 
              D.filter_columnAnyMatch)) {
                for (T = F.anyMatchFilter.split(i.andSplit), k = !1, _ = 0; _ < T.length; _++) M = T[_].split(":"), 
                M.length > 1 && (isNaN(M[0]) ? e.each(A.headerContent, function(e, t) {
                  t.toLowerCase().indexOf(M[0]) > -1 && (j = e, r[j] = M[1]);
                }) :j = parseInt(M[0], 10) - 1, j >= 0 && j < A.columns && (r[j] = M[1], T.splice(_, 1), 
                _--, k = !0));
                k && (F.anyMatchFilter = T.join(" && "));
              }
              if (C = D.filter_searchFiltered, v = A.lastSearch || A.$table.data("lastSearch") || [], 
              C) for (_ = 0; _ < m + 1; _++) x = r[_] || "", C || (_ = m), C = C && v.length && 0 === x.indexOf(v[_] || "") && !i.alreadyFiltered.test(x) && !i.exactTest.test(x) && !(i.isNeg1.test(x) || i.isNeg2.test(x)) && !("" !== x && A.$filters && A.$filters.filter('[data-column="' + _ + '"]').find("select").length && !t.matchType(A, _));
              for (S = u.not("." + D.filter_filteredRow).length, C && 0 === S && (C = !1), A.debug && console.log("Filter: Searching through " + (C && S < a ? S :"all") + " rows"), 
              F.anyMatchFlag && (A.sortLocaleCompare && (F.anyMatchFilter = n.replaceAccents(F.anyMatchFilter)), 
              D.filter_defaultFilter && i.iQuery.test(I.defaultAnyFilter) && (F.anyMatchFilter = t.defaultFilter(F.anyMatchFilter, I.defaultAnyFilter), 
              C = !1), F.iAnyMatchFilter = D.filter_ignoreCase && A.ignoreCase ? F.anyMatchFilter.toLowerCase() :F.anyMatchFilter), 
              d = 0; d < a; d++) if (P = u[d].className, !(d && i.child.test(P) || C && i.filtered.test(P))) {
                if (F.$row = u.eq(d), F.rowIndex = d, F.cacheArray = l[d], c = F.cacheArray[A.columns], 
                F.rawArray = c.raw, F.childRowText = "", !D.filter_childByColumn) {
                  for (P = "", g = c.child, _ = 0; _ < g.length; _++) P += " " + g[_].join(" ") || "";
                  F.childRowText = D.filter_childRows ? D.filter_ignoreCase ? P.toLowerCase() :P :"";
                }
                if (y = !1, b = t.processRow(A, F, I), h = c.$row, x = !!b, g = c.$row.filter(":gt(0)"), 
                D.filter_childRows && g.length) {
                  if (D.filter_childByColumn) for (D.filter_childWithSibs || (g.addClass(D.filter_filteredRow), 
                  h = h.eq(0)), _ = 0; _ < g.length; _++) F.$row = g.eq(_), F.cacheArray = c.child[_], 
                  F.rawArray = F.cacheArray, x = t.processRow(A, F, I), y = y || x, !D.filter_childWithSibs && x && g.eq(_).removeClass(D.filter_filteredRow);
                  y = y || b;
                } else y = x;
                h.toggleClass(D.filter_filteredRow, !y)[0].display = y ? "" :"none";
              }
            }
            A.filteredRows += u.not("." + D.filter_filteredRow).length, A.totalRows += u.length, 
            n.processTbody(s, p, !1);
          }
          A.lastCombinedFilter = o, A.lastSearch = E, A.$table.data("lastSearch", E), D.filter_saveFilters && n.storage && n.storage(s, "tablesorter-filters", t.processFilters(E, !0)), 
          A.debug && console.log("Completed filter widget search" + n.benchmark(w)), D.filter_initialized && (A.$table.triggerHandler("filterBeforeEnd", A), 
          A.$table.triggerHandler("filterEnd", A)), setTimeout(function() {
            n.applyWidget(A.table);
          }, 0);
        }
      },
      getOptionSource:function(i, s, r) {
        i = e(i)[0];
        var o = i.config, a = o.widgetOptions, l = !1, c = a.filter_selectSource, u = o.$table.data("lastSearch") || [], h = "function" == typeof c || n.getColumnData(i, c, s);
        if (r && "" !== u[s] && (r = !1), !0 === h) l = c(i, s, r); else {
          if (h instanceof e || "string" === e.type(h) && h.indexOf("</option>") >= 0) return h;
          e.isArray(h) ? l = h :"object" === e.type(c) && h && (l = h(i, s, r));
        }
        return !1 === l && (l = t.getOptions(i, s, r)), t.processOptions(i, s, l);
      },
      processOptions:function(t, i, s) {
        if (!e.isArray(s)) return !1;
        t = e(t)[0];
        var r, o, a, l, c, u, h = t.config, d = void 0 !== i && null !== i && i >= 0 && i < h.columns, f = !!d && h.$headerIndexed[i].hasClass("filter-select-sort-desc"), p = [];
        if (s = e.grep(s, function(t, i) {
          return !!t.text || e.inArray(t, s) === i;
        }), d && h.$headerIndexed[i].hasClass("filter-select-nosort")) return s;
        for (l = s.length, a = 0; a < l; a++) o = s[a], u = o.text ? o.text :o, c = (d && h.parsers && h.parsers.length && h.parsers[i].format(u, t, [], i) || u).toString(), 
        c = h.widgetOptions.filter_ignoreCase ? c.toLowerCase() :c, o.text ? (o.parsed = c, 
        p[p.length] = o) :p[p.length] = {
          text:o,
          parsed:c
        };
        for (r = h.textSorter || "", p.sort(function(e, s) {
          var o = f ? s.parsed :e.parsed, a = f ? e.parsed :s.parsed;
          return d && "function" == typeof r ? r(o, a, !0, i, t) :d && "object" == typeof r && r.hasOwnProperty(i) ? r[i](o, a, !0, i, t) :!n.sortNatural || n.sortNatural(o, a);
        }), s = [], l = p.length, a = 0; a < l; a++) s[s.length] = p[a];
        return s;
      },
      getOptions:function(t, i, s) {
        t = e(t)[0];
        var r, o, a, l, c, u, h, d, f = t.config, p = f.widgetOptions, m = [];
        for (o = 0; o < f.$tbodies.length; o++) for (c = f.cache[o], a = f.cache[o].normalized.length, 
        r = 0; r < a; r++) if (l = c.row ? c.row[r] :c.normalized[r][f.columns].$row[0], 
        !s || !l.className.match(p.filter_filteredRow)) if (p.filter_useParsedData || f.parsers[i].parsed || f.$headerIndexed[i].hasClass("filter-parsed")) {
          if (m[m.length] = "" + c.normalized[r][i], p.filter_childRows && p.filter_childByColumn) for (d = c.normalized[r][f.columns].$row.length - 1, 
          u = 0; u < d; u++) m[m.length] = "" + c.normalized[r][f.columns].child[u][i];
        } else if (m[m.length] = c.normalized[r][f.columns].raw[i], p.filter_childRows && p.filter_childByColumn) for (d = c.normalized[r][f.columns].$row.length, 
        u = 1; u < d; u++) h = c.normalized[r][f.columns].$row.eq(u).children().eq(i), m[m.length] = "" + n.getElementText(f, h, i);
        return m;
      },
      buildSelect:function(n, r, o, a, l) {
        if (n = e(n)[0], r = parseInt(r, 10), n.config.cache && !e.isEmptyObject(n.config.cache)) {
          var c, u, h, d, f, p, m, g = n.config, v = g.widgetOptions, y = g.$headerIndexed[r], b = '<option value="">' + (y.data("placeholder") || y.attr("data-placeholder") || v.filter_placeholder.select || "") + "</option>", w = g.$table.find("thead").find("select." + s.filter + '[data-column="' + r + '"]').val();
          if (void 0 !== o && "" !== o || (o = t.getOptionSource(n, r, l)), e.isArray(o)) {
            for (c = 0; c < o.length; c++) if (m = o[c], m.text) {
              m["data-function-name"] = "undefined" == typeof m.value ? m.text :m.value, b += "<option";
              for (u in m) m.hasOwnProperty(u) && "text" !== u && (b += " " + u + '="' + m[u] + '"');
              m.value || (b += ' value="' + m.text + '"'), b += ">" + m.text + "</option>";
            } else "" + m != "[object Object]" && (h = m = ("" + m).replace(i.quote, "&quot;"), 
            u = h, h.indexOf(v.filter_selectSourceSeparator) >= 0 && (d = h.split(v.filter_selectSourceSeparator), 
            u = d[0], h = d[1]), b += "" !== m ? "<option " + (u === h ? "" :'data-function-name="' + m + '" ') + 'value="' + u + '">' + h + "</option>" :"");
            o = [];
          }
          f = (g.$filters ? g.$filters :g.$table.children("thead")).find("." + s.filter), 
          v.filter_$externalFilters && (f = f && f.length ? f.add(v.filter_$externalFilters) :v.filter_$externalFilters), 
          p = f.filter('select[data-column="' + r + '"]'), p.length && (p[a ? "html" :"append"](b), 
          e.isArray(o) || p.append(o).val(w), p.val(w));
        }
      },
      buildDefault:function(e, i) {
        var s, r, o, a = e.config, l = a.widgetOptions, c = a.columns;
        for (s = 0; s < c; s++) r = a.$headerIndexed[s], o = !(r.hasClass("filter-false") || r.hasClass("parser-false")), 
        (r.hasClass("filter-select") || !0 === n.getColumnData(e, l.filter_functions, s)) && o && t.buildSelect(e, s, "", i, r.hasClass(l.filter_onlyAvail));
      }
    }, i = t.regex, n.getFilters = function(i, n, r, o) {
      var a, l, c, u, h = [], d = i ? e(i)[0].config :"", f = d ? d.widgetOptions :"";
      if (!0 !== n && f && !f.filter_columnFilters || e.isArray(r) && r.join("") === d.lastCombinedFilter) return e(i).data("lastSearch");
      if (d && (d.$filters && (l = d.$filters.find("." + s.filter)), f.filter_$externalFilters && (l = l && l.length ? l.add(f.filter_$externalFilters) :f.filter_$externalFilters), 
      l && l.length)) for (h = r || [], a = 0; a < d.columns + 1; a++) u = a === d.columns ? f.filter_anyColumnSelector + "," + f.filter_multipleColumnSelector :'[data-column="' + a + '"]', 
      c = l.filter(u), c.length && (c = t.getLatestSearch(c), e.isArray(r) ? (o && c.length > 1 && (c = c.slice(1)), 
      a === d.columns && (u = c.filter(f.filter_anyColumnSelector), c = u.length ? u :c), 
      c.val(r[a]).trigger("change" + d.namespace)) :(h[a] = c.val() || "", a === d.columns ? c.slice(1).filter('[data-column*="' + c.attr("data-column") + '"]').val(h[a]) :c.slice(1).val(h[a])), 
      a === d.columns && c.length && (f.filter_$anyMatch = c));
      return h;
    }, n.setFilters = function(i, s, r, o) {
      var a = i ? e(i)[0].config :"", l = n.getFilters(i, !0, s, o);
      return void 0 === r && (r = !0), a && r && (a.lastCombinedFilter = null, a.lastSearch = [], 
      t.searching(a.table, s, o), a.$table.triggerHandler("filterFomatterUpdate")), 0 !== l.length;
    };
  }(e), function(e, t) {
    "use strict";
    var i = e.tablesorter || {};
    e.extend(i.css, {
      sticky:"tablesorter-stickyHeader",
      stickyVis:"tablesorter-sticky-visible",
      stickyHide:"tablesorter-sticky-hidden",
      stickyWrap:"tablesorter-sticky-wrapper"
    }), i.addHeaderResizeEvent = function(t, i, n) {
      if (t = e(t)[0], t.config) {
        var s = {
          timer:250
        }, r = e.extend({}, s, n), o = t.config, a = o.widgetOptions, l = function(e) {
          var t, i, n, s, r, l, c = o.$headers.length;
          for (a.resize_flag = !0, i = [], t = 0; t < c; t++) n = o.$headers.eq(t), s = n.data("savedSizes") || [ 0, 0 ], 
          r = n[0].offsetWidth, l = n[0].offsetHeight, r === s[0] && l === s[1] || (n.data("savedSizes", [ r, l ]), 
          i.push(n[0]));
          i.length && !1 !== e && o.$table.triggerHandler("resize", [ i ]), a.resize_flag = !1;
        };
        if (clearInterval(a.resize_timer), i) return a.resize_flag = !1, !1;
        l(!1), a.resize_timer = setInterval(function() {
          a.resize_flag || l();
        }, r.timer);
      }
    }, i.addWidget({
      id:"stickyHeaders",
      priority:54,
      options:{
        stickyHeaders:"",
        stickyHeaders_appendTo:null,
        stickyHeaders_attachTo:null,
        stickyHeaders_xScroll:null,
        stickyHeaders_yScroll:null,
        stickyHeaders_offset:0,
        stickyHeaders_filteredToTop:!0,
        stickyHeaders_cloneId:"-sticky",
        stickyHeaders_addResizeEvent:!0,
        stickyHeaders_includeCaption:!0,
        stickyHeaders_zIndex:2
      },
      format:function(n, s, r) {
        if (!(s.$table.hasClass("hasStickyHeaders") || e.inArray("filter", s.widgets) >= 0 && !s.$table.hasClass("hasFilters"))) {
          var o, a, l, c, u = s.$table, h = e(r.stickyHeaders_attachTo), d = s.namespace + "stickyheaders ", f = e(r.stickyHeaders_yScroll || r.stickyHeaders_attachTo || t), p = e(r.stickyHeaders_xScroll || r.stickyHeaders_attachTo || t), m = u.children("thead:first"), g = m.children("tr").not(".sticky-false").children(), v = u.children("tfoot"), y = isNaN(r.stickyHeaders_offset) ? e(r.stickyHeaders_offset) :"", b = y.length ? y.height() || 0 :parseInt(r.stickyHeaders_offset, 10) || 0, w = u.parent().closest("." + i.css.table).hasClass("hasStickyHeaders") ? u.parent().closest("table.tablesorter")[0].config.widgetOptions.$sticky.parent() :[], x = w.length ? w.height() :0, _ = r.$sticky = u.clone().addClass("containsStickyHeaders " + i.css.sticky + " " + r.stickyHeaders + " " + s.namespace.slice(1) + "_extra_table").wrap('<div class="' + i.css.stickyWrap + '">'), S = _.parent().addClass(i.css.stickyHide).css({
            position:h.length ? "absolute" :"fixed",
            padding:parseInt(_.parent().parent().css("padding-left"), 10),
            top:b + x,
            left:0,
            visibility:"hidden",
            zIndex:r.stickyHeaders_zIndex || 2
          }), C = _.children("thead:first"), T = "", k = 0, M = function(e, i) {
            var n, s, r, o, a, l = e.filter(":visible"), c = l.length;
            for (n = 0; n < c; n++) o = i.filter(":visible").eq(n), a = l.eq(n), "border-box" === a.css("box-sizing") ? s = a.outerWidth() :"collapse" === o.css("border-collapse") ? t.getComputedStyle ? s = parseFloat(t.getComputedStyle(a[0], null).width) :(r = parseFloat(a.css("border-width")), 
            s = a.outerWidth() - parseFloat(a.css("padding-left")) - parseFloat(a.css("padding-right")) - r) :s = a.width(), 
            o.css({
              width:s,
              "min-width":s,
              "max-width":s
            });
          }, j = function() {
            b = y.length ? y.height() || 0 :parseInt(r.stickyHeaders_offset, 10) || 0, k = 0, 
            S.css({
              left:h.length ? parseInt(h.css("padding-left"), 10) || 0 :u.offset().left - parseInt(u.css("margin-left"), 10) - p.scrollLeft() - k,
              width:u.outerWidth()
            }), M(u, _), M(g, c);
          }, P = function(t) {
            if (u.is(":visible")) {
              x = w.length ? w.offset().top - f.scrollTop() + w.height() :0;
              var n = u.offset(), s = e.isWindow(f[0]), o = e.isWindow(p[0]), a = h.length ? s ? f.scrollTop() :f.offset().top :f.scrollTop(), l = r.stickyHeaders_includeCaption ? 0 :u.children("caption").height() || 0, c = a + b + x - l, d = u.height() - (S.height() + (v.height() || 0)) - l, m = c > n.top && c < n.top + d ? "visible" :"hidden", g = {
                visibility:m
              };
              h.length && (g.top = s ? c - h.offset().top :h.scrollTop()), o && (g.left = u.offset().left - parseInt(u.css("margin-left"), 10) - p.scrollLeft() - k), 
              w.length && (g.top = (g.top || 0) + b + x), S.removeClass(i.css.stickyVis + " " + i.css.stickyHide).addClass("visible" === m ? i.css.stickyVis :i.css.stickyHide).css(g), 
              (m !== T || t) && (j(), T = m);
            }
          };
          if (h.length && !h.css("position") && h.css("position", "relative"), _.attr("id") && (_[0].id += r.stickyHeaders_cloneId), 
          _.find("thead:gt(0), tr.sticky-false").hide(), _.find("tbody, tfoot").remove(), 
          _.find("caption").toggle(r.stickyHeaders_includeCaption), c = C.children().children(), 
          _.css({
            height:0,
            width:0,
            margin:0
          }), c.find("." + i.css.resizer).remove(), u.addClass("hasStickyHeaders").bind("pagerComplete" + d, function() {
            j();
          }), i.bindEvents(n, C.children().children("." + i.css.header)), r.stickyHeaders_appendTo ? e(r.stickyHeaders_appendTo).append(S) :u.after(S), 
          s.onRenderHeader) for (l = C.children("tr").children(), a = l.length, o = 0; o < a; o++) s.onRenderHeader.apply(l.eq(o), [ o, s, _ ]);
          p.add(f).unbind("scroll resize ".split(" ").join(d).replace(/\s+/g, " ")).bind("scroll resize ".split(" ").join(d), function(e) {
            P("resize" === e.type);
          }), s.$table.unbind("stickyHeadersUpdate" + d).bind("stickyHeadersUpdate" + d, function() {
            P(!0);
          }), r.stickyHeaders_addResizeEvent && i.addHeaderResizeEvent(n), u.hasClass("hasFilters") && r.filter_columnFilters && (u.bind("filterEnd" + d, function() {
            var n = e(document.activeElement).closest("td"), o = n.parent().children().index(n);
            S.hasClass(i.css.stickyVis) && r.stickyHeaders_filteredToTop && (t.scrollTo(0, u.position().top), 
            o >= 0 && s.$filters && s.$filters.eq(o).find("a, select, input").filter(":visible").focus());
          }), i.filter.bindSearch(u, c.find("." + i.css.filter)), r.filter_hideFilters && i.filter.hideFilters(s, _)), 
          r.stickyHeaders_addResizeEvent && u.bind("resize" + s.namespace + "stickyheaders", function() {
            j();
          }), u.triggerHandler("stickyHeadersInit");
        }
      },
      remove:function(n, s, r) {
        var o = s.namespace + "stickyheaders ";
        s.$table.removeClass("hasStickyHeaders").unbind("pagerComplete resize filterEnd stickyHeadersUpdate ".split(" ").join(o).replace(/\s+/g, " ")).next("." + i.css.stickyWrap).remove(), 
        r.$sticky && r.$sticky.length && r.$sticky.remove(), e(t).add(r.stickyHeaders_xScroll).add(r.stickyHeaders_yScroll).add(r.stickyHeaders_attachTo).unbind("scroll resize ".split(" ").join(o).replace(/\s+/g, " ")), 
        i.addHeaderResizeEvent(n, !0);
      }
    });
  }(e, window), function(e, t) {
    "use strict";
    var i = e.tablesorter || {};
    e.extend(i.css, {
      resizableContainer:"tablesorter-resizable-container",
      resizableHandle:"tablesorter-resizable-handle",
      resizableNoSelect:"tablesorter-disableSelection",
      resizableStorage:"tablesorter-resizable"
    }), e(function() {
      var t = "<style>body." + i.css.resizableNoSelect + " { -ms-user-select: none; -moz-user-select: -moz-none;-khtml-user-select: none; -webkit-user-select: none; user-select: none; }." + i.css.resizableContainer + " { position: relative; height: 1px; }." + i.css.resizableHandle + " { position: absolute; display: inline-block; width: 8px;top: 1px; cursor: ew-resize; z-index: 3; user-select: none; -moz-user-select: none; }</style>";
      e("head").append(t);
    }), i.resizable = {
      init:function(t, n) {
        if (!t.$table.hasClass("hasResizable")) {
          t.$table.addClass("hasResizable");
          var s, r, o, a, l = t.$table, c = l.parent(), u = parseInt(l.css("margin-top"), 10), h = n.resizable_vars = {
            useStorage:i.storage && !1 !== n.resizable,
            $wrap:c,
            mouseXPosition:0,
            $target:null,
            $next:null,
            overflow:"auto" === c.css("overflow") || "scroll" === c.css("overflow") || "auto" === c.css("overflow-x") || "scroll" === c.css("overflow-x"),
            storedSizes:[]
          };
          for (i.resizableReset(t.table, !0), h.tableWidth = l.width(), h.fullWidth = Math.abs(c.width() - h.tableWidth) < 20, 
          h.useStorage && h.overflow && (i.storage(t.table, "tablesorter-table-original-css-width", h.tableWidth), 
          a = i.storage(t.table, "tablesorter-table-resized-width") || "auto", i.resizable.setWidth(l, a, !0)), 
          n.resizable_vars.storedSizes = o = (h.useStorage ? i.storage(t.table, i.css.resizableStorage) :[]) || [], 
          i.resizable.setWidths(t, n, o), i.resizable.updateStoredSizes(t, n), n.$resizable_container = e('<div class="' + i.css.resizableContainer + '">').css({
            top:u
          }).insertBefore(l), r = 0; r < t.columns; r++) s = t.$headerIndexed[r], a = i.getColumnData(t.table, t.headers, r), 
          "false" === i.getData(s, a, "resizable") || e('<div class="' + i.css.resizableHandle + '">').appendTo(n.$resizable_container).attr({
            "data-column":r,
            unselectable:"on"
          }).data("header", s).bind("selectstart", !1);
          i.resizable.bindings(t, n);
        }
      },
      updateStoredSizes:function(e, t) {
        var i, n, s = e.columns, r = t.resizable_vars;
        for (r.storedSizes = [], i = 0; i < s; i++) n = e.$headerIndexed[i], r.storedSizes[i] = n.is(":visible") ? n.width() :0;
      },
      setWidth:function(e, t, i) {
        e.css({
          width:t,
          "min-width":i ? t :"",
          "max-width":i ? t :""
        });
      },
      setWidths:function(t, n, s) {
        var r, o, a = n.resizable_vars, l = e(t.namespace + "_extra_headers"), c = t.$table.children("colgroup").children("col");
        if (s = s || a.storedSizes || [], s.length) {
          for (r = 0; r < t.columns; r++) i.resizable.setWidth(t.$headerIndexed[r], s[r], a.overflow), 
          l.length && (o = l.eq(r).add(c.eq(r)), i.resizable.setWidth(o, s[r], a.overflow));
          o = e(t.namespace + "_extra_table"), o.length && !i.hasWidget(t.table, "scroller") && i.resizable.setWidth(o, t.$table.outerWidth(), a.overflow);
        }
      },
      setHandlePosition:function(t, n) {
        var s, r = t.$table.height(), o = n.$resizable_container.children(), a = Math.floor(o.width() / 2);
        i.hasWidget(t.table, "scroller") && (r = 0, t.$table.closest("." + i.css.scrollerWrap).children().each(function() {
          var t = e(this);
          r += t.filter('[style*="height"]').length ? t.height() :t.children("table").height();
        })), s = t.$table.position().left, o.each(function() {
          var i = e(this), o = parseInt(i.attr("data-column"), 10), l = t.columns - 1, c = i.data("header");
          c && (c.is(":visible") ? (o < l || o === l && n.resizable_addLastColumn) && i.css({
            display:"inline-block",
            height:r,
            left:c.position().left - s + c.outerWidth() - a
          }) :i.hide());
        });
      },
      toggleTextSelection:function(t, n, s) {
        var r = t.namespace + "tsresize";
        n.resizable_vars.disabled = s, e("body").toggleClass(i.css.resizableNoSelect, s), 
        s ? e("body").attr("unselectable", "on").bind("selectstart" + r, !1) :e("body").removeAttr("unselectable").unbind("selectstart" + r);
      },
      bindings:function(n, s) {
        var r = n.namespace + "tsresize";
        s.$resizable_container.children().bind("mousedown", function(t) {
          var r, o = s.resizable_vars, a = e(n.namespace + "_extra_headers"), l = e(t.target).data("header");
          r = parseInt(l.attr("data-column"), 10), o.$target = l = l.add(a.filter('[data-column="' + r + '"]')), 
          o.target = r, o.$next = t.shiftKey || s.resizable_targetLast ? l.parent().children().not(".resizable-false").filter(":last") :l.nextAll(":not(.resizable-false)").eq(0), 
          r = parseInt(o.$next.attr("data-column"), 10), o.$next = o.$next.add(a.filter('[data-column="' + r + '"]')), 
          o.next = r, o.mouseXPosition = t.pageX, i.resizable.updateStoredSizes(n, s), i.resizable.toggleTextSelection(n, s, !0);
        }), e(document).bind("mousemove" + r, function(e) {
          var t = s.resizable_vars;
          t.disabled && 0 !== t.mouseXPosition && t.$target && (s.resizable_throttle ? (clearTimeout(t.timer), 
          t.timer = setTimeout(function() {
            i.resizable.mouseMove(n, s, e);
          }, isNaN(s.resizable_throttle) ? 5 :s.resizable_throttle)) :i.resizable.mouseMove(n, s, e));
        }).bind("mouseup" + r, function() {
          s.resizable_vars.disabled && (i.resizable.toggleTextSelection(n, s, !1), i.resizable.stopResize(n, s), 
          i.resizable.setHandlePosition(n, s));
        }), e(t).bind("resize" + r + " resizeEnd" + r, function() {
          i.resizable.setHandlePosition(n, s);
        }), n.$table.bind("columnUpdate" + r + " pagerComplete" + r, function() {
          i.resizable.setHandlePosition(n, s);
        }).find("thead:first").add(e(n.namespace + "_extra_table").find("thead:first")).bind("contextmenu" + r, function() {
          var e = 0 === s.resizable_vars.storedSizes.length;
          return i.resizableReset(n.table), i.resizable.setHandlePosition(n, s), s.resizable_vars.storedSizes = [], 
          e;
        });
      },
      mouseMove:function(t, n, s) {
        if (0 !== n.resizable_vars.mouseXPosition && n.resizable_vars.$target) {
          var r, o = 0, a = n.resizable_vars, l = a.$next, c = a.storedSizes[a.target], u = s.pageX - a.mouseXPosition;
          if (a.overflow) {
            if (c + u > 0) {
              for (a.storedSizes[a.target] += u, i.resizable.setWidth(a.$target, a.storedSizes[a.target], !0), 
              r = 0; r < t.columns; r++) o += a.storedSizes[r];
              i.resizable.setWidth(t.$table.add(e(t.namespace + "_extra_table")), o);
            }
            l.length || (a.$wrap[0].scrollLeft = t.$table.width());
          } else a.fullWidth ? (a.storedSizes[a.target] += u, a.storedSizes[a.next] -= u, 
          i.resizable.setWidths(t, n)) :(a.storedSizes[a.target] += u, i.resizable.setWidths(t, n));
          a.mouseXPosition = s.pageX, t.$table.triggerHandler("stickyHeadersUpdate");
        }
      },
      stopResize:function(e, t) {
        var n = t.resizable_vars;
        i.resizable.updateStoredSizes(e, t), n.useStorage && (i.storage(e.table, i.css.resizableStorage, n.storedSizes), 
        i.storage(e.table, "tablesorter-table-resized-width", e.$table.width())), n.mouseXPosition = 0, 
        n.$target = n.$next = null, e.$table.triggerHandler("stickyHeadersUpdate");
      }
    }, i.addWidget({
      id:"resizable",
      priority:40,
      options:{
        resizable:!0,
        resizable_addLastColumn:!1,
        resizable_widths:[],
        resizable_throttle:!1,
        resizable_targetLast:!1,
        resizable_fullWidth:null
      },
      init:function(e, t, n, s) {
        i.resizable.init(n, s);
      },
      format:function(e, t, n) {
        i.resizable.setHandlePosition(t, n);
      },
      remove:function(t, n, s, r) {
        if (s.$resizable_container) {
          var o = n.namespace + "tsresize";
          n.$table.add(e(n.namespace + "_extra_table")).removeClass("hasResizable").children("thead").unbind("contextmenu" + o), 
          s.$resizable_container.remove(), i.resizable.toggleTextSelection(n, s, !1), i.resizableReset(t, r), 
          e(document).unbind("mousemove" + o + " mouseup" + o);
        }
      }
    }), i.resizableReset = function(t, n) {
      e(t).each(function() {
        var e, s, r = this.config, o = r && r.widgetOptions, a = o.resizable_vars;
        if (t && r && r.$headerIndexed.length) {
          for (a.overflow && a.tableWidth && (i.resizable.setWidth(r.$table, a.tableWidth, !0), 
          a.useStorage && i.storage(t, "tablesorter-table-resized-width", "auto")), e = 0; e < r.columns; e++) s = r.$headerIndexed[e], 
          o.resizable_widths && o.resizable_widths[e] ? i.resizable.setWidth(s, o.resizable_widths[e], a.overflow) :s.hasClass("resizable-false") || i.resizable.setWidth(s, "", a.overflow);
          r.$table.triggerHandler("stickyHeadersUpdate"), i.storage && !n && i.storage(this, i.css.resizableStorage, {});
        }
      });
    };
  }(e, window), function(e) {
    "use strict";
    var t = e.tablesorter || {};
    t.addWidget({
      id:"saveSort",
      priority:20,
      options:{
        saveSort:!0
      },
      init:function(e, t, i, n) {
        t.format(e, i, n, !0);
      },
      format:function(i, n, s, r) {
        var o, a, l = n.$table, c = !1 !== s.saveSort, u = {
          sortList:n.sortList
        };
        n.debug && (a = new Date()), l.hasClass("hasSaveSort") ? c && i.hasInitialized && t.storage && (t.storage(i, "tablesorter-savesort", u), 
        n.debug && console.log("saveSort widget: Saving last sort: " + n.sortList + t.benchmark(a))) :(l.addClass("hasSaveSort"), 
        u = "", t.storage && (o = t.storage(i, "tablesorter-savesort"), u = o && o.hasOwnProperty("sortList") && e.isArray(o.sortList) ? o.sortList :"", 
        n.debug && console.log('saveSort: Last sort loaded: "' + u + '"' + t.benchmark(a)), 
        l.bind("saveSortReset", function(e) {
          e.stopPropagation(), t.storage(i, "tablesorter-savesort", "");
        })), r && u && u.length > 0 ? n.sortList = u :i.hasInitialized && u && u.length > 0 && t.sortOn(n, u));
      },
      remove:function(e, i) {
        i.$table.removeClass("hasSaveSort"), t.storage && t.storage(e, "tablesorter-savesort", "");
      }
    });
  }(e), e.tablesorter;
}), function() {
  var e = this;
  (function() {
    (function() {
      var e = [].slice;
      this.LocalTime = {
        config:{},
        run:function() {
          return this.getController().processElements();
        },
        process:function() {
          var t, i, n, s;
          for (i = 1 <= arguments.length ? e.call(arguments, 0) :[], n = 0, s = i.length; n < s; n++) t = i[n], 
          this.getController().processElement(t);
          return i.length;
        },
        getController:function() {
          return null != this.controller ? this.controller :this.controller = new t.Controller();
        }
      };
    }).call(this);
  }).call(e);
  var t = e.LocalTime;
  (function() {
    (function() {
      t.config.i18n = {
        en:{
          date:{
            dayNames:[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            abbrDayNames:[ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            monthNames:[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            abbrMonthNames:[ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            yesterday:"yesterday",
            today:"today",
            tomorrow:"tomorrow",
            on:"on {date}",
            formats:{
              "default":"%b %e, %Y",
              thisYear:"%b %e"
            }
          },
          time:{
            am:"am",
            pm:"pm",
            singular:"a {time}",
            singularAn:"an {time}",
            elapsed:"{time} ago",
            second:"second",
            seconds:"seconds",
            minute:"minute",
            minutes:"minutes",
            hour:"hour",
            hours:"hours",
            formats:{
              "default":"%l:%M%P"
            }
          },
          datetime:{
            at:"{date} at {time}",
            formats:{
              "default":"%B %e, %Y at %l:%M%P %Z"
            }
          }
        }
      };
    }).call(this), function() {
      t.config.locale = "en", t.config.defaultLocale = "en";
    }.call(this), function() {
      t.config.timerInterval = 6e4;
    }.call(this), function() {
      var e, i, n;
      n = !isNaN(Date.parse("2011-01-01T12:00:00-05:00")), t.parseDate = function(e) {
        return e = e.toString(), n || (e = i(e)), new Date(Date.parse(e));
      }, e = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|[-+]?[\d:]+)$/, i = function(t) {
        var i, n, s, r, o, a, l, c, u;
        if (s = t.match(e)) return s[0], c = s[1], o = s[2], i = s[3], n = s[4], r = s[5], 
        l = s[6], u = s[7], "Z" !== u && (a = u.replace(":", "")), c + "/" + o + "/" + i + " " + n + ":" + r + ":" + l + " GMT" + [ a ];
      };
    }.call(this), function() {
      t.elementMatchesSelector = function() {
        var e, t, i, n, s, r;
        return e = document.documentElement, t = null != (i = null != (n = null != (s = null != (r = e.matches) ? r :e.matchesSelector) ? s :e.webkitMatchesSelector) ? n :e.mozMatchesSelector) ? i :e.msMatchesSelector, 
        function(e, i) {
          if ((null != e ? e.nodeType :void 0) === Node.ELEMENT_NODE) return t.call(e, i);
        };
      }();
    }.call(this), function() {
      var e, i, n;
      e = t.config, n = e.i18n, t.getI18nValue = function(s, r) {
        var o, a;
        return null == s && (s = ""), o = (null != r ? r :{
          locale:e.locale
        }).locale, a = i(n[o], s), null != a ? a :o !== e.defaultLocale ? t.getI18nValue(s, {
          locale:e.defaultLocale
        }) :void 0;
      }, t.translate = function(e, i, n) {
        var s, r, o;
        null == i && (i = {}), o = t.getI18nValue(e, n);
        for (s in i) r = i[s], o = o.replace("{" + s + "}", r);
        return o;
      }, i = function(e, t) {
        var i, n, s, r, o;
        for (o = e, r = t.split("."), i = 0, s = r.length; i < s; i++) {
          if (n = r[i], null == o[n]) return null;
          o = o[n];
        }
        return o;
      };
    }.call(this), function() {
      var e, i, n, s, r;
      e = t.getI18nValue, r = t.translate, t.strftime = s = function(t, o) {
        var a, l, c, u, h, d, f;
        return l = t.getDay(), a = t.getDate(), h = t.getMonth(), f = t.getFullYear(), c = t.getHours(), 
        u = t.getMinutes(), d = t.getSeconds(), o.replace(/%([%aAbBcdeHIlmMpPSwyYZ])/g, function(o) {
          switch (o[0], o[1]) {
           case "%":
            return "%";

           case "a":
            return e("date.abbrDayNames")[l];

           case "A":
            return e("date.dayNames")[l];

           case "b":
            return e("date.abbrMonthNames")[h];

           case "B":
            return e("date.monthNames")[h];

           case "c":
            return t.toString();

           case "d":
            return i(a);

           case "e":
            return a;

           case "H":
            return i(c);

           case "I":
            return i(s(t, "%l"));

           case "l":
            return 0 === c || 12 === c ? 12 :(c + 12) % 12;

           case "m":
            return i(h + 1);

           case "M":
            return i(u);

           case "p":
            return r("time." + (c > 11 ? "pm" :"am")).toUpperCase();

           case "P":
            return r("time." + (c > 11 ? "pm" :"am"));

           case "S":
            return i(d);

           case "w":
            return l;

           case "y":
            return i(f % 100);

           case "Y":
            return f;

           case "Z":
            return n(t);
          }
        });
      }, i = function(e) {
        return ("0" + e).slice(-2);
      }, n = function(e) {
        var t, i, n, s, r;
        return r = e.toString(), (t = null != (i = r.match(/\(([\w\s]+)\)$/)) ? i[1] :void 0) ? /\s/.test(t) ? t.match(/\b(\w)/g).join("") :t :(t = null != (n = r.match(/(\w{3,4})\s\d{4}$/)) ? n[1] :void 0) ? t :(t = null != (s = r.match(/(UTC[\+\-]\d+)/)) ? s[1] :void 0) ? t :"";
      };
    }.call(this), function() {
      t.CalendarDate = function() {
        function e(e, t, i) {
          this.date = new Date(Date.UTC(e, t - 1)), this.date.setUTCDate(i), this.year = this.date.getUTCFullYear(), 
          this.month = this.date.getUTCMonth() + 1, this.day = this.date.getUTCDate(), this.value = this.date.getTime();
        }
        return e.fromDate = function(e) {
          return new this(e.getFullYear(), e.getMonth() + 1, e.getDate());
        }, e.today = function() {
          return this.fromDate(new Date());
        }, e.prototype.equals = function(e) {
          return (null != e ? e.value :void 0) === this.value;
        }, e.prototype.is = function(e) {
          return this.equals(e);
        }, e.prototype.isToday = function() {
          return this.is(this.constructor.today());
        }, e.prototype.occursOnSameYearAs = function(e) {
          return this.year === (null != e ? e.year :void 0);
        }, e.prototype.occursThisYear = function() {
          return this.occursOnSameYearAs(this.constructor.today());
        }, e.prototype.daysSince = function(e) {
          if (e) return (this.date - e.date) / 864e5;
        }, e.prototype.daysPassed = function() {
          return this.constructor.today().daysSince(this);
        }, e;
      }();
    }.call(this), function() {
      var e, i, n;
      i = t.strftime, n = t.translate, e = t.getI18nValue, t.RelativeTime = function() {
        function s(e) {
          this.date = e, this.calendarDate = t.CalendarDate.fromDate(this.date);
        }
        return s.prototype.toString = function() {
          var e, t;
          return (t = this.toTimeElapsedString()) ? n("time.elapsed", {
            time:t
          }) :(e = this.toWeekdayString()) ? (t = this.toTimeString(), n("datetime.at", {
            date:e,
            time:t
          })) :n("date.on", {
            date:this.toDateString()
          });
        }, s.prototype.toTimeOrDateString = function() {
          return this.calendarDate.isToday() ? this.toTimeString() :this.toDateString();
        }, s.prototype.toTimeElapsedString = function() {
          var e, t, i, s, r;
          return i = new Date().getTime() - this.date.getTime(), s = Math.round(i / 1e3), 
          t = Math.round(s / 60), e = Math.round(t / 60), i < 0 ? null :s < 10 ? (r = n("time.second"), 
          n("time.singular", {
            time:r
          })) :s < 45 ? s + " " + n("time.seconds") :s < 90 ? (r = n("time.minute"), n("time.singular", {
            time:r
          })) :t < 45 ? t + " " + n("time.minutes") :t < 90 ? (r = n("time.hour"), n("time.singularAn", {
            time:r
          })) :e < 24 ? e + " " + n("time.hours") :"";
        }, s.prototype.toWeekdayString = function() {
          switch (this.calendarDate.daysPassed()) {
           case 0:
            return n("date.today");

           case 1:
            return n("date.yesterday");

           case -1:
            return n("date.tomorrow");

           case 2:
           case 3:
           case 4:
           case 5:
           case 6:
            return i(this.date, "%A");

           default:
            return "";
          }
        }, s.prototype.toDateString = function() {
          var t;
          return t = e(this.calendarDate.occursThisYear() ? "date.formats.thisYear" :"date.formats.default"), 
          i(this.date, t);
        }, s.prototype.toTimeString = function() {
          return i(this.date, e("time.formats.default"));
        }, s;
      }();
    }.call(this), function() {
      var e, i = function(e, t) {
        return function() {
          return e.apply(t, arguments);
        };
      };
      e = t.elementMatchesSelector, t.PageObserver = function() {
        function t(e, t) {
          this.selector = e, this.callback = t, this.processInsertion = i(this.processInsertion, this), 
          this.processMutations = i(this.processMutations, this);
        }
        return t.prototype.start = function() {
          if (!this.started) return this.observeWithMutationObserver() || this.observeWithMutationEvent(), 
          this.started = !0;
        }, t.prototype.observeWithMutationObserver = function() {
          var e;
          if ("undefined" != typeof MutationObserver && null !== MutationObserver) return e = new MutationObserver(this.processMutations), 
          e.observe(document.documentElement, {
            childList:!0,
            subtree:!0
          }), !0;
        }, t.prototype.observeWithMutationEvent = function() {
          return addEventListener("DOMNodeInserted", this.processInsertion, !1), !0;
        }, t.prototype.findSignificantElements = function(t) {
          var i;
          return i = [], (null != t ? t.nodeType :void 0) === Node.ELEMENT_NODE && (e(t, this.selector) && i.push(t), 
          i.push.apply(i, t.querySelectorAll(this.selector))), i;
        }, t.prototype.processMutations = function(e) {
          var t, i, n, s, r, o, a, l;
          for (t = [], i = 0, s = e.length; i < s; i++) switch (o = e[i], o.type) {
           case "childList":
            for (l = o.addedNodes, n = 0, r = l.length; n < r; n++) a = l[n], t.push.apply(t, this.findSignificantElements(a));
          }
          return this.notify(t);
        }, t.prototype.processInsertion = function(e) {
          var t;
          return t = this.findSignificantElements(e.target), this.notify(t);
        }, t.prototype.notify = function(e) {
          if (null != e ? e.length :void 0) return "function" == typeof this.callback ? this.callback(e) :void 0;
        }, t;
      }();
    }.call(this), function() {
      var e, i, n, s, r = function(e, t) {
        return function() {
          return e.apply(t, arguments);
        };
      };
      n = t.parseDate, s = t.strftime, i = t.getI18nValue, e = t.config, t.Controller = function() {
        function o() {
          this.processElements = r(this.processElements, this), this.pageObserver = new t.PageObserver(a, this.processElements);
        }
        var a, l, c;
        return a = "time[data-local]:not([data-localized])", o.prototype.start = function() {
          if (!this.started) return this.processElements(), this.startTimer(), this.pageObserver.start(), 
          this.started = !0;
        }, o.prototype.startTimer = function() {
          var t;
          if (t = e.timerInterval) return null != this.timer ? this.timer :this.timer = setInterval(this.processElements, t);
        }, o.prototype.processElements = function(e) {
          var t, i, n;
          for (null == e && (e = document.querySelectorAll(a)), i = 0, n = e.length; i < n; i++) t = e[i], 
          this.processElement(t);
          return e.length;
        }, o.prototype.processElement = function(e) {
          var t, r, o, a, u;
          if (t = e.getAttribute("datetime"), r = e.getAttribute("data-format"), o = e.getAttribute("data-local"), 
          a = n(t), !isNaN(a)) return e.hasAttribute("title") || (u = s(a, i("datetime.formats.default")), 
          e.setAttribute("title", u)), e.textContent = function() {
            switch (o) {
             case "time":
              return l(e), s(a, r);

             case "date":
              return l(e), c(a).toDateString();

             case "time-ago":
              return c(a).toString();

             case "time-or-date":
              return c(a).toTimeOrDateString();

             case "weekday":
              return c(a).toWeekdayString();

             case "weekday-or-date":
              return c(a).toWeekdayString() || c(a).toDateString();
            }
          }();
        }, l = function(e) {
          return e.setAttribute("data-localized", "");
        }, c = function(e) {
          return new t.RelativeTime(e);
        }, o;
      }();
    }.call(this), function() {
      var e, i, n, s;
      s = !1, e = function() {
        return document.attachEvent ? "complete" === document.readyState :"loading" !== document.readyState;
      }, i = function(e) {
        var t;
        return null != (t = "function" == typeof requestAnimationFrame ? requestAnimationFrame(e) :void 0) ? t :setTimeout(e, 17);
      }, n = function() {
        var e;
        return e = t.getController(), e.start();
      }, t.start = function() {
        if (!s) return s = !0, "undefined" != typeof MutationObserver && null !== MutationObserver || e() ? n() :i(n);
      }, window.LocalTime === t && t.start();
    }.call(this);
  }).call(this), "object" == typeof module && module.exports ? module.exports = t :"function" == typeof define && define.amd && define(t);
}.call(this);
//# sourceMappingURL=/assets/maps/application_vendor-ef34223767e1092af0ab70369734f9b8f339dd91bbce7b4a04d1bb84ff33ad8a.js.map
