(function() {
  var t;
  t = function() {
    function t() {}
    return t.version = "1.2.0", t.registered_features = {}, t.featurettes_counter = 0, 
    t.register = function(t, e) {
      return this.registered_features[t] = e;
    }, t.load = function() {
      var t, e, i, r, s, n, o, a, l, h, u, c;
      for (i = document.querySelectorAll("[data-featurette]"), e = [], a = 0, h = i.length; a < h; a++) t = i[a], 
      t.featuretteLoading || t.featurette || (e.push(t), t.featuretteLoading = !0);
      for (c = [], l = 0, u = e.length; l < u; l++) t = e[l], r = t.getAttribute("data-featurette"), 
      n = this.registered_features[r], n ? (s = t.id, null != s && "" !== s || (s = "featurette-" + this.featurettes_counter, 
      t.id = s), o = new n(t), t.featurette = o, c.push(this.featurettes_counter += 1)) :window.console ? c.push(console.log("Unknown featurette " + r)) :c.push(void 0);
      return c;
    }, t.get = function(t) {
      var e;
      return null != (e = document.getElementById(t)) ? e.featurette :void 0;
    }, t;
  }(), window.Featurette = t;
}).call(this), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["community/filter_breadcrumb"] = new Hogan.Template({
  code:function(t, e, i) {
    var r = this;
    return r.b(i = i || ""), r.b('<ul id="filter-breadcrumb-tags">'), r.b("\n" + i), 
    r.b("  <li>"), r.b("\n" + i), r.b("    Showing results for:"), r.b("\n" + i), r.b("  </li>"), 
    r.b("\n"), r.b("\n" + i), r.b("  "), r.b(r.t(r.f("tags", t, e, 0))), r.b("\n" + i), 
    r.b('  <li class="filter-reset clear-results">'), r.b("\n" + i), r.b('    <a href="/community" data-filter-clear-tags>'), 
    r.b("\n" + i), r.b("      "), r.b(r.t(r.f("icon_close", t, e, 0))), r.b("\n" + i), 
    r.b("    </a>"), r.b("\n" + i), r.b("  </li>"), r.b("\n" + i), r.b("</ul>"), r.b("\n"), 
    r.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["profile/github_repo"] = new Hogan.Template({
  code:function(t, e, i) {
    var r = this;
    return r.b(i = i || ""), r.b('<li class="grid-50 tablet-grid-50">'), r.b("\n" + i), 
    r.b('  <div class="content-block">'), r.b("\n" + i), r.b('    <div class="content-meta">'), 
    r.b("\n" + i), r.b('      <a href="'), r.b(r.v(r.f("repoUrl", t, e, 0))), r.b('">'), 
    r.b("\n" + i), r.b('        <span class="icon icon-github"></span>'), r.b("\n" + i), 
    r.b("        <strong>GitHub Repository</strong>"), r.b("\n" + i), r.b("        <h3>"), 
    r.b(r.v(r.f("repoName", t, e, 0))), r.b("</h3>"), r.b("\n" + i), r.b("      </a>"), 
    r.b("\n" + i), r.b('      <p class="description">'), r.b(r.v(r.f("repoDescription", t, e, 0))), 
    r.b("</p>"), r.b("\n" + i), r.b('      <div class="content-actions-container content-stats">'), 
    r.b("\n" + i), r.b("        <ul>"), r.b("\n" + i), r.b("          <li>"), r.b("\n" + i), 
    r.b('            <a href="'), r.b(r.v(r.f("repoForksUrl", t, e, 0))), r.b('">'), 
    r.b("\n" + i), r.b("              <strong>"), r.b(r.v(r.f("repoForks", t, e, 0))), 
    r.b("</strong>"), r.b("\n" + i), r.b("              <p>Forks</p>"), r.b("\n" + i), 
    r.b("            </a>"), r.b("\n" + i), r.b("          </li>"), r.b("\n" + i), r.b("          <li>"), 
    r.b("\n" + i), r.b('            <a href="'), r.b(r.v(r.f("repoStargazersUrl", t, e, 0))), 
    r.b('">'), r.b("\n" + i), r.b("              <strong>"), r.b(r.v(r.f("repoStargazers", t, e, 0))), 
    r.b("</strong>"), r.b("\n" + i), r.b("              <p>Stargazers</p>"), r.b("\n" + i), 
    r.b("            </a>"), r.b("\n" + i), r.b("          </li>"), r.b("\n" + i), r.b("        </ul>"), 
    r.b("\n" + i), r.s(r.f("repoOwner", t, e, 1), t, e, 0, 754, 784, "{{ }}") && (r.rs(t, e, function(t, e, r) {
      r.b("        <p>Owner</p>"), r.b("\n" + i);
    }), t.pop()), r.s(r.f("repoOwner", t, e, 1), t, e, 1, 0, 0, "") || (r.b("        <p>Contributor</p>"), 
    r.b("\n" + i)), r.b("      </div>"), r.b("\n" + i), r.b("    </div>"), r.b("\n" + i), 
    r.b("  </div>"), r.b("\n" + i), r.b("</li>"), r.b("\n"), r.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/feedback_error"] = new Hogan.Template({
  code:function(t, e, i) {
    var r = this;
    return r.b(i = i || ""), r.b('<div class="box-actions icons-only alert error">'), 
    r.b("\n" + i), r.b('  <div class="box-action-text markdown-zone">'), r.b("\n" + i), 
    r.s(r.f("degree_exam", t, e, 1), t, e, 1, 0, 0, "") || (r.b("      "), r.b(r.t(r.f("alert_error_icon", t, e, 0))), 
    r.b("\n" + i), r.b("      <strong>Bummer!</strong>"), r.b("\n" + i), r.s(r.f("response", t, e, 1), t, e, 0, 195, 225, "{{ }}") && (r.rs(t, e, function(t, e, r) {
      r.b("        "), r.b(r.t(r.f("response", t, e, 0))), r.b("\n" + i);
    }), t.pop()), r.s(r.f("response", t, e, 1), t, e, 1, 0, 0, "") || (r.b("        Unfortunately, that answer is incorrect."), 
    r.b("\n" + i))), r.b("  </div>"), r.b("\n" + i), r.b('  <div class="box-action-buttons" data-featurette="analytics-click-event" data-target="button[data-ask-question]" data-event-category="button" data-event-action="Opened Ask a Question Modal" data-event-label="Source: Feedback Bar on Quiz Pages">'), 
    r.b("\n" + i), r.s(r.f("degree_exam", t, e, 1), t, e, 1, 0, 0, "") || (r.b('      <a href="'), 
    r.b(r.t(r.f("skip_quiz_url", t, e, 0))), r.b('" class="button secondary">Skip Quiz</a>'), 
    r.b("\n" + i), r.b('      <a href="'), r.b(r.t(r.f("review_video_url", t, e, 0))), 
    r.b('" class="button secondary">Review Video</a>'), r.b("\n" + i), r.b('      <button class="button" id="ask-question" data-featurette="async-modal-trigger" data-src="'), 
    r.b(r.v(r.f("get_help_url", t, e, 0))), r.b("\" data-params='"), r.b(r.t(r.f("step_params", t, e, 0))), 
    r.b('\' data-stack="true" data-target="new_forum_post_form" data-ask-question>Get Help</button>'), 
    r.b("\n" + i)), r.s(r.f("finished", t, e, 1), t, e, 1, 0, 0, "") || (r.b('      <button class="button primary icon-on-right" data-next-question>Next Question '), 
    r.b(r.t(r.f("icon_right_arrow", t, e, 0))), r.b("</button>"), r.b("\n" + i)), r.s(r.f("final_exam", t, e, 1), t, e, 1, 0, 0, "") || r.s(r.f("finished", t, e, 1), t, e, 0, 1226, 1310, "{{ }}") && (r.rs(t, e, function(t, e, r) {
      r.b('        <button class="button primary" data-finish-quiz>Finish Quiz</button>'), 
      r.b("\n" + i);
    }), t.pop()), r.b("  </div>"), r.b("\n" + i), r.b("</div>"), r.b("\n"), r.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/feedback_neutral"] = new Hogan.Template({
  code:function(t, e, i) {
    var r = this;
    return r.b(i = i || ""), r.b('<div class="box-actions icons-only alert info">'), 
    r.b("\n" + i), r.b('  <p class="box-action-text">'), r.b(r.t(r.f("instruction", t, e, 0))), 
    r.b("</p>"), r.b("\n" + i), r.s(r.f("degree_exam", t, e, 1), t, e, 1, 0, 0, "") || (r.b('    <div class="box-action-buttons" data-featurette="analytics-click-event" data-target="button[data-ask-question]" data-event-category="button" data-event-action="Opened Ask a Question Modal" data-event-label="Source: Feedback Bar on Quiz Pages">'), 
    r.b("\n" + i), r.b('      <a href="'), r.b(r.t(r.f("skip_quiz_url", t, e, 0))), 
    r.b('" class="button secondary">Skip Quiz</a>'), r.b("\n" + i), r.b('      <a href="'), 
    r.b(r.t(r.f("review_video_url", t, e, 0))), r.b('" class="button secondary">Review Video</a>'), 
    r.b("\n" + i), r.b('      <button id="ask-question" class="button secondary" data-featurette="async-modal-trigger" data-stack="true" data-src="'), 
    r.b(r.t(r.f("get_help_url", t, e, 0))), r.b("\" data-params='"), r.b(r.t(r.f("step_params", t, e, 0))), 
    r.b('\' data-target="new_forum_post_form" data-ask-question>Get Help</button>'), 
    r.b("\n" + i), r.b('      <button class="button primary disabled icon-on-right" data-next-question>Next Question '), 
    r.b(r.t(r.f("icon_right_arrow", t, e, 0))), r.b("</button>"), r.b("\n" + i), r.b("    </div>"), 
    r.b("\n" + i)), r.b("</div>"), r.b("\n"), r.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/feedback_success"] = new Hogan.Template({
  code:function(t, e, i) {
    var r = this;
    return r.b(i = i || ""), r.b('<div class="box-actions icons-only alert success">'), 
    r.b("\n" + i), r.b('  <div class="box-action-text markdown-zone">'), r.b("\n" + i), 
    r.s(r.f("degree_exam", t, e, 1), t, e, 1, 0, 0, "") || (r.b("      "), r.b(r.t(r.f("alert_success_icon", t, e, 0))), 
    r.b("\n" + i), r.b("      <strong>Well done!</strong>"), r.b("\n" + i), r.s(r.f("response", t, e, 1), t, e, 0, 202, 232, "{{ }}") && (r.rs(t, e, function(t, e, r) {
      r.b("        "), r.b(r.t(r.f("response", t, e, 0))), r.b("\n" + i);
    }), t.pop()), r.s(r.f("response", t, e, 1), t, e, 1, 0, 0, "") || (r.b("        That's the correct answer."), 
    r.b("\n" + i))), r.b("  </div>"), r.b("\n" + i), r.b('  <div class="box-action-buttons">'), 
    r.b("\n" + i), r.s(r.f("finished", t, e, 1), t, e, 1, 0, 0, "") || (r.b('      <button class="button primary icon-on-right" data-next-question>Next Question '), 
    r.b(r.t(r.f("icon_right_arrow", t, e, 0))), r.b("</button>"), r.b("\n" + i)), r.s(r.f("final_exam", t, e, 1), t, e, 1, 0, 0, "") || r.s(r.f("finished", t, e, 1), t, e, 0, 577, 661, "{{ }}") && (r.rs(t, e, function(t, e, r) {
      r.b('        <button class="button primary" data-finish-quiz>Finish Quiz</button>'), 
      r.b("\n" + i);
    }), t.pop()), r.b("  </div>"), r.b("\n" + i), r.b("</div>"), r.b("\n"), r.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/fill_in_the_blank"] = new Hogan.Template({
  code:function(t, e, i) {
    var r = this;
    return r.b(i = i || ""), r.b('<ul class="quiz-answers fill-in-blank">'), r.b("\n" + i), 
    r.s(r.f("answers", t, e, 1), t, e, 0, 54, 288, "{{ }}") && (r.rs(t, e, function(t, e, r) {
      r.b("  <li>"), r.b("\n" + i), r.b('    <form id="fill-in-blank" class="'), r.b(r.v(r.f("answer_class", t, e, 0))), 
      r.b('" data-quiz-fitb-form-action="'), r.b(r.v(r.f("href", t, e, 0))), r.b('">'), 
      r.b("\n" + i), r.b("      "), r.b(r.t(r.f("answer", t, e, 0))), r.b("\n" + i), r.b('      <input type="submit" value="Submit Answer" id="submit" class="button button-primary">'), 
      r.b("\n" + i), r.b("    </form>"), r.b("\n" + i), r.b("  </li>"), r.b("\n" + i);
    }), t.pop()), r.b("</ul>"), r.b("\n"), r.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/multiple_choice"] = new Hogan.Template({
  code:function(t, e, i) {
    var r = this;
    return r.b(i = i || ""), r.b('<ul class="quiz-answers multiple-choice">'), r.b("\n" + i), 
    r.s(r.f("answers", t, e, 1), t, e, 0, 56, 242, "{{ }}") && (r.rs(t, e, function(t, e, r) {
      r.b("  <li>"), r.b("\n" + i), r.b('    <a href="'), r.b(r.v(r.f("href", t, e, 0))), 
      r.b('" data-quiz-answer-key="'), r.b(r.t(r.f("abcd", t, e, 0))), r.b('">'), r.b("\n" + i), 
      r.b('      <strong class="abc">'), r.b(r.t(r.f("abcd", t, e, 0))), r.b("</strong>"), 
      r.b("\n" + i), r.b('      <div class="'), r.b(r.v(r.f("answer_class", t, e, 0))), 
      r.b('">'), r.b(r.t(r.f("answer", t, e, 0))), r.b("</div>"), r.b("\n" + i), r.b("    </a>"), 
      r.b("\n" + i), r.b("  </li>"), r.b("\n" + i);
    }), t.pop()), r.b("</ul>"), r.b("\n"), r.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/question"] = new Hogan.Template({
  code:function(t, e, i) {
    var r = this;
    return r.b(i = i || ""), r.s(r.f("video", t, e, 1), t, e, 0, 10, 25, "{{ }}") && (r.rs(t, e, function(t, e, r) {
      r.b("  "), r.b(r.t(r.f("video", t, e, 0))), r.b("\n" + i);
    }), t.pop()), r.s(r.f("image", t, e, 1), t, e, 0, 46, 87, "{{ }}") && (r.rs(t, e, function(t, e, i) {
      i.b('<img src="'), i.b(i.v(i.f("image", t, e, 0))), i.b('" alt="Quiz Question">');
    }), t.pop()), r.b("\n" + i), r.b('<h1 class="question-count">Quiz Question '), r.b(r.v(r.f("current_question", t, e, 0))), 
    r.b(" of "), r.b(r.v(r.f("total_questions", t, e, 0))), r.b("</h1>"), r.b("\n" + i), 
    r.b('<div data-question-feedback-url="'), r.b(r.t(r.f("question_feedback_url", t, e, 0))), 
    r.b('">'), r.b("\n" + i), r.b('  <div class="'), r.b(r.v(r.f("question_class", t, e, 0))), 
    r.b('">'), r.b("\n" + i), r.b("    "), r.b(r.t(r.f("question", t, e, 0))), r.b("\n" + i), 
    r.b("  </div>"), r.b("\n" + i), r.b("</div>"), r.b("\n"), r.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/true_false"] = new Hogan.Template({
  code:function(t, e, i) {
    var r = this;
    return r.b(i = i || ""), r.b('<ul class="quiz-answers true-false">'), r.b("\n" + i), 
    r.s(r.f("answers", t, e, 1), t, e, 0, 51, 172, "{{ }}") && (r.rs(t, e, function(t, e, r) {
      r.b("  <li>"), r.b("\n" + i), r.b('    <a href="'), r.b(r.v(r.f("href", t, e, 0))), 
      r.b('" data-quiz-answer-key="'), r.b(r.t(r.f("answer", t, e, 0))), r.b('">'), r.b("\n" + i), 
      r.b("      <strong>"), r.b(r.v(r.f("answer", t, e, 0))), r.b("</strong>"), r.b("\n" + i), 
      r.b("    </a>"), r.b("\n" + i), r.b("  </li>"), r.b("\n" + i);
    }), t.pop()), r.b("</ul>"), r.b("\n"), r.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["signup/field_error"] = new Hogan.Template({
  code:function(t, e, i) {
    var r = this;
    return r.b(i = i || ""), r.b("<p class='error-message'>"), r.b(r.v(r.f("error", t, e, 0))), 
    r.b("</p>"), r.b("\n"), r.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["signup/form_message"] = new Hogan.Template({
  code:function(t, e, i) {
    var r = this;
    return r.b(i = i || ""), r.b('<div class="global-message-container global-message-error featurette in-app" data-featurette="global-message-container" style="display: block;">'), 
    r.b("\n" + i), r.b('  <div class="global-message error">'), r.b("\n" + i), r.b('    <div class="row">'), 
    r.b("\n" + i), r.b('      <div class="twelve columns">'), r.b("\n" + i), r.b("        <strong>Bummer!</strong> <p>"), 
    r.b(r.v(r.f("message", t, e, 0))), r.b("</p>"), r.b("\n" + i), r.b('        <a class="close-message"><span class="icon icon-close"></span></a>'), 
    r.b("\n" + i), r.b("      </div>"), r.b("\n" + i), r.b("    </div>"), r.b("\n" + i), 
    r.b("  </div>"), r.b("\n" + i), r.b("</div>"), r.b("\n"), r.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["videos/launch_console"] = new Hogan.Template({
  code:function(t, e, i) {
    var r = this;
    return r.b(i = i || ""), r.b('<div class="mejs-button mejs-console-button">'), r.b("\n" + i), 
    r.b('  <button class="button" data-track-click-event>'), r.b(r.t(r.f("icon", t, e, 0))), 
    r.b(" Launch Console</button>"), r.b("\n" + i), r.b("</div>"), r.b("\n"), r.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["videos/launch_sql_playground"] = new Hogan.Template({
  code:function(t, e, i) {
    var r = this;
    return r.b(i = i || ""), r.b('<div class="mejs-button mejs-sql-playground-button">'), 
    r.b("\n" + i), r.b('  <button class="button" data-track-click-event>'), r.b(r.t(r.f("icon", t, e, 0))), 
    r.b(" Launch SQL Playground</button>"), r.b("\n" + i), r.b("</div>"), r.b("\n"), 
    r.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["videos/launch_workspace"] = new Hogan.Template({
  code:function(t, e, i) {
    var r = this;
    return r.b(i = i || ""), r.b('<div class="mejs-button mejs-workspaces-button">'), 
    r.b("\n" + i), r.b('  <button class="button" data-track-click-event data-featurette="async-modal-trigger" data-src="/videos/'), 
    r.b(r.v(r.f("videoId", t, e, 0))), r.b('/launch_workspace" data-target="launch-workspace-modal">'), 
    r.b("\n" + i), r.b("    "), r.b(r.t(r.f("icon", t, e, 0))), r.b(" Launch Workspace"), 
    r.b("\n" + i), r.b("  </button>"), r.b("\n" + i), r.b("</div>"), r.b("\n"), r.b("\n"), 
    r.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), function() {
  $(function() {
    return $(".cheatsheet-toggle").on("click", function(t) {
      return t.preventDefault(), $(this).closest("form").find(".markdown-cheatsheet").slideToggle(200);
    }), $(".cheatsheet-close").on("click", function(t) {
      return t.preventDefault(), $(this).closest("form").find(".markdown-cheatsheet").slideUp(200);
    }), $("#edit-post").on("click", function(t) {
      return t.preventDefault(), $("#display-post").hide(), $("#edit-post-form").show(), 
      $("textarea.autogrow").trigger("autosize.resize");
    }), $("#cancel-edit-post").on("click", function(t) {
      return t.preventDefault(), $("#edit-post-form").hide(), $("#display-post").show(), 
      $("textarea.autogrow").trigger("autosize.resize");
    }), $(".new_forum_post button[type=submit], .discussion-reply button[type=submit]").on("click", function() {
      return _.defer(function(t) {
        return function() {
          return $(t).attr({
            disabled:"disabled"
          });
        };
      }(this));
    }), $(".post-preview-toggle").on("mousedown", function(t) {
      return t.preventDefault(), $(this).closest(".form-item").find("textarea").focus();
    }), $(".code-attachment-filename").on("click", function() {
      var t;
      return t = $(this).closest("#container").find(".card.course.forum-card a.title").attr("href"), 
      window.open(t);
    });
  });
}.call(this), function() {
  $(function() {
    var t;
    return t = function() {
      function t() {}
      return t.modals = {}, t.handleTrigger = function(e) {
        var i, r;
        return !(!$.browser.mobile && !e.metaKey && 2 !== e.which) || (t.container || (t.container = $("#mini-profile-container")), 
        e.preventDefault(), r = $(e.currentTarget), i = r.data("profile-name"), t.modals[i] ? t.modals[i].showOverlay() :t.createModalFor(i));
      }, t.createModalFor = function(t) {
        var e;
        return e = $("<div class='modal mini-profile' id='mini-profile-" + t + "' style='display: none'/>"), 
        e.load("/mini_profile/" + t, function(i) {
          return function() {
            return i.container.append(e), e.find(".chart").length && new Featurette.registered_features["points-chart"](e.find(".chart")[0]), 
            i.modals[t] = new Featurette.registered_features.modal(e[0]), i.modals[t].showOverlay();
          };
        }(this));
      }, t;
    }(), $(document).on("click", "[data-behavior=mini-profile-trigger]", t.handleTrigger);
  });
}.call(this), function() {
  mejs.MediaElementDefaults.pluginPath = "", mejs.MediaElementDefaults.flashName = "/flash/flashmediaelement.swf", 
  $("body").on("click", ".mejs-captions-selector input", function() {
    return setTimeout(function() {
      return function() {
        return $("body").click();
      };
    }(), 0);
  });
}.call(this), function() {
  this.Treehouse = {
    data:window.appData ? JSON.parse(window.appData) :{},
    onFirstInit:function(t) {
      return this.firstInitCallbacks.push(t);
    },
    firstInitCallbacks:[],
    onInit:function(t) {
      return this.initCallbacks.push(t);
    },
    initCallbacks:[],
    init:function() {
      var t, e, i, r, s, n, o, a;
      if (!this.firstInitFired) {
        for (n = this.firstInitCallbacks, e = 0, r = n.length; e < r; e++) (t = n[e])();
        this.firstInitFired = !0;
      }
      for (o = this.initCallbacks, a = [], i = 0, s = o.length; i < s; i++) t = o[i], 
      a.push(t());
      return a;
    },
    cleanup:function(t) {
      var e;
      if (e = Featurette.get(t.id)) return "function" == typeof e.stopListening ? e.stopListening() :void 0;
    },
    debug:function() {
      if (window.console) return console.log(Array.prototype.slice.call(arguments));
    }
  };
}.call(this), function() {
  Treehouse.onFirstInit(function() {
    return function() {
      var t;
      t = $.cleanData, $.cleanData = function(e) {
        var i, r, s;
        for (r = 0, s = e.length; r < s; r++) i = e[r], $(i).trigger("removed");
        return t(e);
      };
    }(), $(document).on("removed", "[data-featurette]", function(t) {
      return Treehouse.cleanup(t.target);
    }), null == $.cookie("notbot") && $.post("/visitors/not-bot", {
      _method:"PUT"
    }), $(document).on("click touch", ".menu-toggle", function(t) {
      return t.preventDefault(), $(t.currentTarget).toggleClass("is-checked");
    }), $(document).on("click", ".clickonce", function(t) {
      var e;
      return e = $(t.currentTarget), e.hasClass("disabled") ? t.preventDefault() :e.addClass("disabled");
    }), $(document).on("click", "a[data-pjax-container-id]", function(t) {
      var e;
      return e = $(this).data("pjax-container-id"), $.pjax.click(t, {
        container:"#" + e,
        timeout:0,
        push:!1,
        scrollTo:!1
      });
    }), $(document).on("pjax:end", function() {
      return Treehouse.init();
    }), jQuery.migrateMute = !0, jQuery.migrateTrace = !1;
  }), Treehouse.onInit(function() {
    return Featurette.load(), $("html").hasClass("marketing-layout") || $(".form-item label").not(".prefill, .in-field-label-processed, .ghost-form label").inFieldLabels().addClass("in-field-label-processed"), 
    $(".autogrow").not(".autogrow-processed").autosize({
      append:""
    }).addClass("autogrow-processed"), $("input, textarea").not(".placeholder-processed").placeholder().addClass("placeholder-processed"), 
    $(".ghost-form input, .ghost-form textarea, .ghost-form select").off("focus.ghost-form, blur.ghost-form").on("focus.ghost-form", function() {
      return $(this).closest(".form-item, .adjacent-form-item").addClass("filled focused");
    }).on("blur.ghost-form", function() {
      if ($(this).closest(".form-item, .adjacent-form-item").removeClass("filled"), "" === this.value) return $(this).closest(".form-item, .adjacent-form-item").removeClass("focused");
    }).each(function() {
      if ("" !== this.value) return $(this).closest(".form-item, .adjacent-form-item").addClass("focused");
    }), $(".button-toggle label input[type=radio]").change(function() {
      $(this).attr("name") ? $(this).parent().addClass("selected").siblings().removeClass("selected") :$(this).parent().toggleClass("selected");
    });
  });
}.call(this), function() {
  jQuery.fn.cssAnimate = function(t) {
    return null == t && (t = 400), this.addClass("animating"), setTimeout(function(t) {
      return function() {
        return t.removeClass("animating");
      };
    }(this), t), this;
  };
}.call(this), function() {
  Treehouse.onFirstInit(function() {
    return $(document).on("pjax:start", function() {
      var t;
      return null != (t = Featurette.get("layout")) ? t.loading() :void 0;
    }), $(document).on("pjax:end", function() {
      var t;
      return null != (t = Featurette.get("layout")) && t.loaded(), "undefined" != typeof _gaq && null !== _gaq ? _gaq.push([ "_trackPageview" ]) :void 0;
    });
  });
}.call(this), function() {
  Treehouse.onInit(function() {
    var t;
    return t = "select, input:file", $(t).not('.editor textarea, select.drop-down, select[multiple], select[data-featurette="form-select"], select[data-featurette="department-select"], select[data-featurette="department-member-autocomplete"], #track_assignment_user_ids.uniform-processed').uniform({
      autoHide:!1,
      fileButtonClass:"button secondary",
      selectClass:"form-element"
    }).addClass("uniform-processed"), $("#track_assignment_user_ids").chosen({
      width:"100%"
    });
  });
}.call(this), function() {
  Treehouse.currentUser = Treehouse.data.user, Treehouse.isLoggedIn = null != Treehouse.currentUser, 
  Treehouse.isLoggedIn && (Treehouse.personalizationPromise = $.getJSON("/personalization").promise());
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  Treehouse.Cache = function() {
    function e(e) {
      null == e && (e = {}), this.flush = t(this.flush, this), this.exists = t(this.exists, this), 
      this.fetch = t(this.fetch, this), this["delete"] = t(this["delete"], this), this.write = t(this.write, this), 
      this.read = t(this.read, this), this.namespace = this.compileNamespace(e.namespace), 
      this.defaultTtl = e.defaultTtl || 720;
    }
    return e.prototype.compileNamespace = function(t) {
      var e, i, r;
      if (null === t && (t = ""), _.isString(t)) return t.replace(/\/$/, "") + "/";
      if (i = [], _.isObject(t)) {
        if (t.appVersion && (e = Treehouse.data.app_version, i.push("appVersion:" + (e || _.now()))), 
        t.currentUser) {
          if (!(r = Treehouse.currentUser.id)) throw new Error("A Treehouse.currentUser is required.");
          i.push("user:" + r);
        }
        return t.namespace && i.push(t.namespace), _.compact(i).join("/") + "/";
      }
      return "/";
    }, e.prototype.read = function(t) {
      return lscache.setBucket(this.namespace), lscache.get(t);
    }, e.prototype.write = function(t, e, i) {
      return null == i && (i = this.defaultTtl), lscache.setBucket(this.namespace), lscache.set(t, e, i), 
      !0;
    }, e.prototype["delete"] = function(t) {
      return lscache.setBucket(this.namespace), lscache.remove(t);
    }, e.prototype.fetch = function(t, e, i) {
      var r;
      return null == i && (i = this.defaultTtl), r = this.read(t), r || (r = _.isFunction(e) ? e() :e, 
      this.write(t, r, i)), r;
    }, e.prototype.exists = function(t) {
      return null !== this.read(t);
    }, e.prototype.flush = function() {
      return lscache.setBucket(this.namespace), lscache.flush();
    }, e.flush = function() {
      return lscache.setBucket(""), lscache.flush();
    }, e;
  }(), lscache.flushExpired(), Treehouse.cache = new Treehouse.Cache();
}.call(this), function() {
  var t, e, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty, s = [].slice;
  e = function() {
    function t(t) {
      var e;
      e = $(t).find(".tooltip").parent().find(":input"), e.focus(function() {
        var t;
        if (t = $(this).parent().find(".tooltip"), !(t.data("hide-on-mobile") && $(window).width() <= 480)) return t.fadeIn();
      }), e.blur(function() {
        return $(this).parent().find(".tooltip").fadeOut();
      }), $(t).submit(function() {
        return $(t).find("button#submit").html("Processing..."), $(t).find("button#submit").attr("disabled", "true");
      });
    }
    return t;
  }(), window.StandardForm = e, t = function(t) {
    function e(t) {
      this.accountForm = $(t), this.accountEmail = this.accountForm.find("input[name='account_signup[email]'], #person_email"), 
      this.planId = this.accountForm.find("#plan").val(), e.__super__.constructor.call(this, this.accountForm), 
      this.accountEmail.change(function(t) {
        return function() {
          return t.verifyEmailAddress();
        };
      }(this));
    }
    return i(e, t), e.prototype.verifyEmailAddress = function() {
      var t, e, i, r;
      return e = this.accountEmail, i = e.siblings("label"), t = e.val(), r = $("meta[name='csrf-token']").attr("content"), 
      this.clearFormErrors(e), $.ajax("/account/email_address", {
        type:"POST",
        dataType:"json",
        data:{
          email:t
        },
        headers:{
          "X-CSRF-Token":r
        },
        error:function(t) {
          return function(r) {
            var s;
            return t.unwrapErrors(e, i), t.clearFormErrors(e), e.siblings("label").wrap('<div class="field_with_errors" />'), 
            e.wrap('<div class="field_with_errors" />'), s = JSON.parse(r.responseText), e.after("<p class='error-message'>" + s.error + "</p>");
          };
        }(this),
        success:function(t) {
          return function() {
            if (t.unwrapErrors(e, i), null == e.val()) return t.clearFormErrors(e);
          };
        }(this)
      });
    }, e.prototype.unwrapErrors = function() {
      var t, e, i, r, n;
      for (e = 1 <= arguments.length ? s.call(arguments, 0) :[], n = [], i = 0, r = e.length; i < r; i++) t = e[i], 
      t.closest("div").hasClass("field_with_errors") ? n.push(t.unwrap()) :n.push(void 0);
      return n;
    }, e.prototype.clearFormErrors = function(t) {
      return t.siblings("p.error-message").remove();
    }, e;
  }(e), window.AccountForm = t;
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  Treehouse.View = function() {
    function e(e) {
      this.uniqueAttributeValue = t(this.uniqueAttributeValue, this), this.clearElementsCache = t(this.clearElementsCache, this), 
      this.cid = _.uniqueId("featurette-view-"), this.el = $(e), this.data = this.el.data(), 
      this.elements = [];
    }
    return e.prototype.listeningTo = [], e.prototype.get = function(t) {
      var e;
      return (e = this.elements)[t] || (e[t] = this.el.find(t));
    }, e.prototype.clearElementsCache = function() {
      return this.elements = [];
    }, e.prototype.on = function(t, e, i) {
      return i ? this.el.on(this.addNamespace(t), e, i) :(i = e, this.el.on(this.addNamespace(t), i));
    }, e.prototype.listenTo = function(t, e, i, r) {
      if (null == r && (r = {}), this.listeningTo = _.union(this.listeningTo, [ t ]), 
      $(t).on(this.addNamespace(e), i), r.triggerImmediately) return $(t).trigger(e);
    }, e.prototype.stopListening = function() {
      var t, e, i, r, s;
      for (this.el.off(this.addNamespace()), r = this.listeningTo, s = [], t = 0, e = r.length; t < e; t++) i = r[t], 
      s.push($(i).off(this.addNamespace()));
      return s;
    }, e.prototype.addNamespace = function(t) {
      return null == t && (t = ""), t + "." + this.cid;
    }, e.prototype.escapeHtmlTags = function(t) {
      return $("<div />").text(t).html();
    }, e.prototype.uniqueAttributeValue = function(t) {
      return this.get("[" + t + "]").attr("" + t);
    }, e;
  }();
}.call(this), function() {
  Treehouse.SearchableView = {
    mixin:function(t) {
      return _.extend(t, Treehouse.SearchableView.prototype), t.on("keyup", "[data-searchable-field]", _.debounce(t.onSearch.bind(t), 100));
    }
  }, Treehouse.SearchableView.prototype = {
    onSearch:function(t) {
      return this.updateSearch($(t.currentTarget));
    },
    updateSearch:function(t) {
      var e, i, r;
      return i = t.val().trim().toLowerCase(), r = t.closest("[data-searchable]").find("[data-searchable-results] [data-searchable-text]"), 
      i && i.length ? (e = r.filter(function() {
        return $(this).attr("data-searchable-text").toLowerCase().indexOf(i) >= 0;
      }), r.hide(), e.show()) :r.css("display", "");
    }
  };
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("alert", Treehouse.Alert = function(i) {
    function r() {
      this.closeAlert = t(this.closeAlert, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", "[data-close-alert]", this.closeAlert), this.el.hasClass("fixed") && $("html").addClass("has-fixed-alert");
    }
    return e(r, i), r.prototype.closeAlert = function(t) {
      if (t.preventDefault(), this.el.addClass("closed"), 0 === $(".alert.fixed:not(.closed)").length) return $("html.has-fixed-alert").addClass("closed-all-fixed-alerts");
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("avatar", Treehouse.Avatar = function(i) {
    function r() {
      this.hover = t(this.hover, this), r.__super__.constructor.apply(this, arguments), 
      this.on("hover", this.hover), this.chart = this.get('[data-featurette="points-chart"]');
    }
    return e(r, i), r.prototype.hover = function() {
      return this.chart.trigger("chart:build");
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.SimpleDropDown = function(i) {
    function r() {
      this.closeDropDown = t(this.closeDropDown, this), this.onOutClick = t(this.onOutClick, this), 
      this.toggleDropDown = t(this.toggleDropDown, this), this.onWindowClick = t(this.onWindowClick, this), 
      this.onLabelClick = t(this.onLabelClick, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", ".dropdown-parent-label", this.onLabelClick), this.listenTo(window, "click", this.onWindowClick);
    }
    return e(r, i), r.prototype.isShown = !1, r.prototype.onLabelClick = function(t) {
      return t.preventDefault(), this.toggleDropDown();
    }, r.prototype.onWindowClick = function(t) {
      if (this.el.has(t.target).length <= 0) return this.onOutClick();
    }, r.prototype.toggleDropDown = function() {
      return this.get(".dropdown-child").toggle(!this.isShown), this.isShown = !this.isShown;
    }, r.prototype.onOutClick = function() {
      return this.closeDropDown();
    }, r.prototype.closeDropDown = function() {
      if (this.isShown) return this.toggleDropDown();
    }, r;
  }(Treehouse.View), Featurette.register("simple-drop-down", Treehouse.SimpleDropDown);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("dialog", Treehouse.Dialog = function(i) {
    function r() {
      this.hide = t(this.hide, this), this.show = t(this.show, this), this.enterOrEscKeyPressed = t(this.enterOrEscKeyPressed, this), 
      this.tabKeyPressed = t(this.tabKeyPressed, this), this.onKeyUp = t(this.onKeyUp, this), 
      this.preventTarpFromHiding = t(this.preventTarpFromHiding, this), this.listenToEvents = t(this.listenToEvents, this), 
      r.__super__.constructor.apply(this, arguments), this.tarp = new Treehouse.Dialog.Tarp($("[data-dialog-tarp]")), 
      this.container = new Treehouse.Dialog.Container($("[data-dialog-container]")), this.el.is('[data-featurette="dialog"]') && this.listenToEvents();
    }
    return e(r, i), r.prototype.listenToEvents = function() {
      return this.video = this.get("video"), this.closeButton = this.get("[data-close-dialog]"), 
      this.on("click", this.preventTarpFromHiding), this.on("click", "[data-close-dialog]", this.hide), 
      this.video.get(0).addEventListener("ended", this.hide), this.listenTo(document, "keyup", this.onKeyUp);
    }, r.prototype.preventTarpFromHiding = function(t) {
      return t.stopPropagation();
    }, r.prototype.onKeyUp = function(t) {
      if (this.tabKeyPressed(t) && this.closeButton.focus(), this.enterOrEscKeyPressed(t)) return this.hide(t);
    }, r.prototype.tabKeyPressed = function(t) {
      return 9 === t.which;
    }, r.prototype.enterOrEscKeyPressed = function(t) {
      return 13 === t.which || 27 === t.which;
    }, r.prototype.show = function(t) {
      return this.trigger = t, this.el.attr({
        tabindex:0
      }), this.el.focus(), this.el.addClass("active").siblings().removeClass("active"), 
      this.tarp.show(), this.video.trigger("play");
    }, r.prototype.hide = function(t) {
      if (this.el.removeClass("active"), this.video.trigger("pause"), this.tarp.hide(), 
      this.enterOrEscKeyPressed(t)) return this.trigger.focus();
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Dialog.Tarp = function(i) {
    function r() {
      this.hide = t(this.hide, this), this.show = t(this.show, this), this.onEscPressed = t(this.onEscPressed, this), 
      this.listenToEvents = t(this.listenToEvents, this), this.insert = t(this.insert, this), 
      r.__super__.constructor.apply(this, arguments), this.el.length > 0 || (this.el = this.insert(), 
      this.listenToEvents());
    }
    return e(r, i), r.prototype.insert = function() {
      return $(document.body).append('<div class="dialog-tarp" data-dialog-tarp> <div class="dialog-container" data-dialog-container></div> </div>'), 
      $("[data-dialog-tarp]");
    }, r.prototype.listenToEvents = function() {
      return this.on("click", this.hide), this.listenTo(document, "keyup", this.onEscPressed);
    }, r.prototype.onEscPressed = function(t) {
      if (27 === t.which) return this.hide();
    }, r.prototype.show = function() {
      return this.el.addClass("active");
    }, r.prototype.hide = function() {
      return this.el.removeClass("active"), this.el.find("video").trigger("pause");
    }, r;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("dialog-trigger", Treehouse.Dialog.Trigger = function(i) {
    function r() {
      this.onSuccess = t(this.onSuccess, this), this.loadDialog = t(this.loadDialog, this), 
      this.onClick = t(this.onClick, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", this.onClick);
    }
    return e(r, i), r.prototype.onClick = function(t) {
      return t.preventDefault(), this.el.data("loaded-dialog") ? this.dialog.show(this.el) :(this.loadDialog(), 
      this.el.addClass("loading"));
    }, r.prototype.loadDialog = function() {
      return $.get(this.el.attr("href"), {}, this.onSuccess);
    }, r.prototype.onSuccess = function(t) {
      return this.el.data("loaded-dialog", !0), this.el.removeClass("loading"), this.dialog = this.container.insertDialog(t), 
      this.dialog.show(this.el);
    }, r;
  }(Treehouse.Dialog));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Dialog.Container = function(i) {
    function r() {
      this.insertDialog = t(this.insertDialog, this), r.__super__.constructor.apply(this, arguments);
    }
    return e(r, i), r.prototype.insertDialog = function(t) {
      return this.el.append(t), this.dialog = this.el.find('[data-featurette="dialog"]').last(), 
      Featurette.load(), Featurette.get(this.dialog.attr("id"));
    }, r;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.StarRating = function(i) {
    function r() {
      this.onRatingChosen = t(this.onRatingChosen, this), r.__super__.constructor.apply(this, arguments), 
      this.on("change", ":radio", this.onRatingChosen);
    }
    return e(r, i), r.prototype.onRatingChosen = function() {
      return this.el.addClass("rating-chosen");
    }, r;
  }(Treehouse.View), Featurette.register("star-rating", Treehouse.StarRating);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("modal", Treehouse.Modal = function(i) {
    function r(e) {
      this.onKeyup = t(this.onKeyup, this), this.closeOverlay = t(this.closeOverlay, this), 
      this.safeCloseOverlay = t(this.safeCloseOverlay, this), this.playVideo = t(this.playVideo, this), 
      r.__super__.constructor.call(this, e), this.on("click", ".modal-close, .modal-close-extra, [data-modal-close]", this.safeCloseOverlay), 
      this.listenTo(document, "keyup", this.onKeyup);
    }
    return e(r, i), r.stack = [], r.closeCurrentModal = function(t) {
      var e;
      if (null == t && (t = {}), (e = this.stack.pop()) && (e.safeCloseOverlay(), t.stack)) return this.addToStack(e);
    }, r.addToStack = function(t) {
      return this.stack.push(t);
    }, r.showLastModal = function() {
      var t;
      return null != (t = this.stack.pop()) ? t.showOverlay({
        restoring:!0
      }) :void 0;
    }, r.prototype.showOverlay = function(t) {
      return null == t && (t = {}), this.constructor.closeCurrentModal({
        stack:t.stack
      }), this.constructor.addToStack(this), this.tarp().show(function(t) {
        return function() {
          var e, i;
          return i = "fixed" === t.el.css("position") ? 0 :$(window).scrollTop(), e = i + $(window).height(), 
          _.defer(function() {
            return $(window).scrollTop(i);
          }), t.el.show().css({
            top:e,
            opacity:0
          }).animate({
            top:i,
            opacity:1
          }, 150), t.el.addClass("modal-active"), t.el.trigger("modal:show"), t.el.data("modal-video-autoplay") && t.playVideo(), 
          t.isVisible = !0;
        };
      }(this));
    }, r.prototype.playVideo = function() {
      return this.el.find("video").trigger("play").on("ended", function(t) {
        return function() {
          return t.closeOverlay();
        };
      }(this));
    }, r.prototype.safeCloseOverlay = function(t) {
      return null != t && t.preventDefault(), !!this.data.uncloseable || this.closeOverlay();
    }, r.prototype.closeOverlay = function() {
      return this.el.find("video").trigger("pause"), this.tarp().hide(), this.el.hide(), 
      this.el.removeClass("modal-active"), this.el.trigger("modal:close"), this.isVisible = !1, 
      this.constructor.stack.pop(), this.constructor.showLastModal();
    }, r.prototype.onKeyup = function(t) {
      if (27 === t.which && this.isVisible) return this.safeCloseOverlay();
    }, r.prototype.tarp = function() {
      return this.tarpEl || (this.tarpEl = Featurette.get("tarp"));
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, i) {
    function r() {
      this.constructor = t;
    }
    for (var s in i) e.call(i, s) && (t[s] = i[s]);
    return r.prototype = i.prototype, t.prototype = new r(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("help-modal", function(e) {
    function i() {
      return i.__super__.constructor.apply(this, arguments);
    }
    return t(i, e), i.prototype.showOverlay = function() {
      return Featurette.get("help-form").resetContactForm(), i.__super__.showOverlay.apply(this, arguments);
    }, i;
  }(Treehouse.Modal));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("wizard-modal", function(i) {
    function r() {
      return this.closeOverlay = t(this.closeOverlay, this), r.__super__.constructor.apply(this, arguments);
    }
    return e(r, i), r.prototype.showOverlay = function(t) {
      if (null == t && (t = {}), r.__super__.showOverlay.apply(this, arguments), !t.restoring) return $(document).trigger("wizard-opened");
    }, r.prototype.closeOverlay = function(t) {
      if (null == t && (t = {}), r.__super__.closeOverlay.apply(this, arguments), !t.stack) return $(document).trigger("wizard-closed");
    }, r;
  }(Treehouse.Modal));
}.call(this), function() {
  var t = function(t, i) {
    function r() {
      this.constructor = t;
    }
    for (var s in i) e.call(i, s) && (t[s] = i[s]);
    return r.prototype = i.prototype, t.prototype = new r(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("quiz-error-modal", function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.on("click", "button", this.closeOverlay);
    }
    return t(i, e), i.prototype.setError = function(t) {
      return this.el.find("#quiz-error-modal-text").text(t);
    }, i.prototype.closeOverlay = function() {
      return this.setError(""), i.__super__.closeOverlay.call(this);
    }, i;
  }(Treehouse.Modal));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("workspace-settings-modal", Treehouse.WorkspaceSettingsModal = function(i) {
    function r(e) {
      this.onDeleteWorkspace = t(this.onDeleteWorkspace, this), r.__super__.constructor.call(this, e), 
      this.on("click", "a.delete", this.onDeleteWorkspace);
    }
    return e(r, i), r.prototype.onDeleteWorkspace = function() {
      return !!confirm("This will permanently delete everything within this workspace and cannot be undone. Do you still want to delete?") && (this.closeOverlay(), 
      $("#workspace-" + this.el.data("workspace-id") + " .deletion-cover").show());
    }, r;
  }(Treehouse.Modal));
}.call(this), function() {
  var t = function(t, i) {
    function r() {
      this.constructor = t;
    }
    for (var s in i) e.call(i, s) && (t[s] = i[s]);
    return r.prototype = i.prototype, t.prototype = new r(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("code-challenge-error-modal", function(e) {
    function i() {
      return i.__super__.constructor.apply(this, arguments);
    }
    return t(i, e), i.prototype.setError = function(t) {
      return this.el.find("#challenge-error-modal-text").text(t);
    }, i.prototype.closeOverlay = function() {
      return this.setError(""), i.__super__.closeOverlay.call(this);
    }, i;
  }(Treehouse.Modal));
}.call(this), function() {
  var t = function(t, i) {
    function r() {
      this.constructor = t;
    }
    for (var s in i) e.call(i, s) && (t[s] = i[s]);
    return r.prototype = i.prototype, t.prototype = new r(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("track-changelog-modal", function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), $(function(t) {
        return function() {
          if (!0 === t.el.data("previewing")) return t.showOverlay();
        };
      }(this));
    }
    return t(i, e), i;
  }(Treehouse.Modal));
}.call(this), function() {
  var t = function(t, i) {
    function r() {
      this.constructor = t;
    }
    for (var s in i) e.call(i, s) && (t[s] = i[s]);
    return r.prototype = i.prototype, t.prototype = new r(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("degree-exam-end-modal", function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.redirectlink, this.on("click", "button", this.closeOverlay);
    }
    return t(i, e), i.prototype.setMessage = function(t) {
      return this.el.find("#degree-exam-end-modal-text").text(t);
    }, i.prototype.setRedirectLink = function(t) {
      return this.redirectlink = t;
    }, i.prototype.closeOverlay = function() {
      return window.onbeforeunload = null, window.location = this.redirectlink, i.__super__.closeOverlay.call(this);
    }, i;
  }(Treehouse.Modal));
}.call(this), function() {
  var t = function(t, i) {
    function r() {
      this.constructor = t;
    }
    for (var s in i) e.call(i, s) && (t[s] = i[s]);
    return r.prototype = i.prototype, t.prototype = new r(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("tarp", function(e) {
    function i(t) {
      i.__super__.constructor.call(this, t), this.on("click touchstart", function() {
        return Treehouse.Modal.closeCurrentModal();
      });
    }
    return t(i, e), i.prototype.show = function(t) {
      return this.el.css({
        opacity:0
      }).show().animate({
        opacity:1
      }, 100, t);
    }, i.prototype.hide = function() {
      return this.el.hide();
    }, i;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("table-expander", function(i) {
    function r() {
      this.toggle = t(this.toggle, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", this.data.expander, this.toggle), this.rows = this.el.find("tr:gt(" + this.data.rows + ")"), 
      this.rows.hide();
    }
    return e(r, i), r.prototype.toggle = function() {
      return this.get(this.data.expander).toggleClass("target-expanded"), this.rows.toggle();
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  Featurette.register("nav-select", function() {
    function e(e) {
      this.updateLocation = t(this.updateLocation, this), this.el = $(e), this.el.on("change", this.updateLocation);
    }
    return e.prototype.updateLocation = function() {
      return window.location = this.el.val();
    }, e;
  }());
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.updateTotalOnce = e(this.updateTotalOnce, this), this.updateTotal = e(this.updateTotal, this), 
      this.el = $(t), this.pointsUpdated = !1, this.el[0] && Treehouse.personalizationPromise.then(function(t) {
        return function(e) {
          return t.loadedPointsDonut(e.points);
        };
      }(this));
    }
    return t.prototype.loadedPointsDonut = function(t) {
      return this.el.find("#menu-points-donut").append(t), Featurette.load();
    }, t.prototype.updateTotal = function(t) {
      return t ? this.el.find("#points-counter").html(this.addCommas(t)) :$.get("/user/total_points", function(t) {
        return function(e) {
          return t.el.find("#points-counter").html(t.addCommas(e.points));
        };
      }(this));
    }, t.prototype.updateTotalOnce = function() {
      if (!this.pointsUpdated) return this.updateTotal(), this.pointsUpdated = !0;
    }, t.prototype.addCommas = function(t) {
      return t.toString().replace(/\,/g, "").replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }, t;
  }(), Treehouse.PointsCounter = new t("#profile");
}.call(this), function() {
  Treehouse.queryString = function() {
    var t, e, i, r, s, n;
    if (i = new Object(), !(s = location.href.split("?")[1])) return i;
    for (n = s.split("&"), t = 0, e = n.length; t < e; t++) r = n[t], r = r.split("="), 
    i[r[0]] = r[1];
    return i;
  };
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Quiz = function(i) {
    function r() {
      this.render = t(this.render, this), this.finishQuiz = t(this.finishQuiz, this), 
      this.processError = t(this.processError, this), this.processResponse = t(this.processResponse, this), 
      this.submit = t(this.submit, this), r.__super__.constructor.apply(this, arguments), 
      this.quizData = this.data.quiz, this.feedbackEl = this.el.find("[data-quiz-element=feedback]"), 
      this.questionEl = this.el.find("[data-quiz-element=question]"), this.answersEl = this.el.find("[data-quiz-element=answers]"), 
      this.examControlEl = this.el.find("[data-quiz-element=exam_controls]"), this.render();
    }
    return e(r, i), r.prototype.submit = function(t, e) {
      return null == e && (e = {}), this.quizData.quiz_attempt && (e.quiz_attempt = this.quizData.quiz_attempt), 
      $.ajax({
        type:"POST",
        url:t,
        data:e,
        dataType:"json",
        success:this.processResponse,
        error:function(t) {
          return function(e) {
            return t.processError(e);
          };
        }(this)
      });
    }, r.prototype.processResponse = function(t) {
      return this.quizData = t, this.generateFeedback(), Treehouse.init();
    }, r.prototype.processError = function(t) {
      var e, i;
      return e = Featurette.get("quiz-error-modal"), i = JSON.parse(t.responseText), i.inadequate_permissions ? e.setError("You do not have access to take this Quiz. Please upgrade your account.") :e.setError("Oops! Something went wrong. Please try answering the question again."), 
      e.showOverlay({
        stack:!0
      }), this.render();
    }, r.prototype.finishQuiz = function() {
      switch ($("[data-report-question-link]").hide(), this.quizData.quiz_status) {
       case "passed":
        return Treehouse.PointsCounter.updateTotal(), this.showPassed();

       case "failed":
        return this.showFailed();
      }
    }, r.prototype.showFailed = function() {
      return $(document).trigger("step-failed");
    }, r.prototype.showPassed = function() {
      return $(document).trigger("step-passed");
    }, r.prototype.render = function() {
      return this.clearFeedback(), this.generateQuestion(), this.generateAnswers(), Treehouse.init();
    }, r.prototype.generateQuestion = function() {
      var t;
      return t = HoganTemplates["quizzes/question"].render(this.quizData.question), this.questionEl.html(t).find("a").attr("target", "_blank");
    }, r.prototype.generateAnswers = function() {
      var t, e;
      return null != (e = this.answersView) && "function" == typeof e.empty && e.empty(), 
      t = function() {
        switch (this.quizData.question.question_type) {
         case "MultipleChoice":
          return Treehouse.Quiz.MultipleChoice;

         case "TrueFalse":
          return Treehouse.Quiz.TrueFalse;

         case "FillInTheBlank":
          return Treehouse.Quiz.FillInTheBlank;
        }
      }.call(this), this.answersView = new t(this.answersEl, {
        submit:this.submit,
        answers:_.pick(this.quizData, "answers")
      }), this.answersView.render();
    }, r.prototype.renderFeedback = function(t) {
      var e, i;
      return this.quizData.degree_exam || (e = this.el.find("[data-quiz-answer-key].selected"), 
      e.addClass(t)), null != (i = this.feedbackView) && i.stopListening(), this.feedbackView = new Treehouse.Quiz.Feedback(this.feedbackEl, {
        nextQuestion:this.render,
        finishQuiz:this.finishQuiz,
        quizStatus:this.quizData.quiz_status,
        questionPassed:this.quizData.answer_passed,
        feedbackText:this.quizData.feedback,
        instruction:this.quizData.question.instruction,
        feedbackType:t,
        degreeExam:this.quizData.degree_exam,
        reviewVideoUrl:this.quizData.question.review_video_url
      }), this.feedbackView.render();
    }, r.prototype.generateFeedback = function() {
      return this.quizData.answer_passed ? this.renderFeedback("success") :this.renderFeedback("error"), 
      this.feedbackEl.find("a").attr("target", "_blank");
    }, r.prototype.clearFeedback = function() {
      return this.renderFeedback("neutral");
    }, r;
  }(Treehouse.View), Featurette.register("quiz", Treehouse.Quiz);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.restoreSubmitText = e(this.restoreSubmitText, this), this.enableSubmitButton = e(this.enableSubmitButton, this), 
      this.disableSubmitButton = e(this.disableSubmitButton, this), this.getSubmitButton = e(this.getSubmitButton, this), 
      this.clearComments = e(this.clearComments, this), this.getComments = e(this.getComments, this), 
      this.handleFeedbackChanged = e(this.handleFeedbackChanged, this), this.submitError = e(this.submitError, this), 
      this.submitSuccess = e(this.submitSuccess, this), this.submitFeedback = e(this.submitFeedback, this), 
      this.initialize = e(this.initialize, this), r.__super__.constructor.apply(this, arguments), 
      this.on("change", "input[type=radio]", this.handleFeedbackChanged), this.on("change keyup paste", "[data-comments]", this.handleFeedbackChanged), 
      this.on("click", "[data-submit-feedback]", this.submitFeedback), $("#quiz_question_feedback_modal").on("modal:show", this.initialize);
    }
    return i(r, t), r.prototype.initialize = function() {
      return this.disableSubmitButton(), this.clearRadioSelection(), this.clearComments(), 
      this.get("[data-feedback-input]").show(), this.get("[data-submit-success],[data-submit-error]").hide(), 
      this.get("[data-comments-optional]").removeClass("hidden"), this.get("[data-comments-required]").addClass("hidden");
    }, r.prototype.submitFeedback = function(t) {
      var e, i;
      return t.preventDefault(), this.get("[data-submit-error]").hide(), this.disableSubmitButton(), 
      this.getSubmitButton().text("Processing..."), e = {
        quiz_question_feedback:{
          category:this.getSelectedRadioValue(),
          comments:this.getComments()
        }
      }, i = $.ajax({
        url:this.questionFeedbackUrl(),
        type:"POST",
        contentType:"application/json",
        data:JSON.stringify(e)
      }), i.success(this.submitSuccess), i.fail(this.submitError), i.always(this.restoreSubmitText);
    }, r.prototype.submitSuccess = function() {
      return this.get("[data-submit-success]").show(), this.get("[data-feedback-input]").hide(), 
      this.get("[data-submit-error]").hide();
    }, r.prototype.submitError = function() {
      return this.get("[data-submit-error]").show(), this.enableSubmitButton();
    }, r.prototype.questionFeedbackUrl = function() {
      return $("[data-question-feedback-url]").attr("data-question-feedback-url");
    }, r.prototype.handleFeedbackChanged = function(t) {
      var e, i, r, s;
      return r = this.getSelectedRadioValue(), i = r && "other" !== r, e = "other" === r, 
      s = e && this.getComments().length > 0 || i, s ? this.enableSubmitButton() :this.disableSubmitButton(), 
      this.get("[data-comments-optional]").toggleClass("hidden", e), this.get("[data-comments-required]").toggleClass("hidden", !e), 
      t.stopPropagation();
    }, r.prototype.getComments = function() {
      return this.get("[data-feedback-input] [data-comments]").val();
    }, r.prototype.clearComments = function() {
      return this.get("[data-feedback-input] [data-comments]").val("");
    }, r.prototype.getSelectedRadioValue = function() {
      return $("[data-feedback-input] input[type=radio]:checked").val();
    }, r.prototype.clearRadioSelection = function() {
      return $("[data-feedback-input] input[type=radio]:checked").prop("checked", !1);
    }, r.prototype.getSubmitButton = function() {
      return this.get("[data-submit-feedback]");
    }, r.prototype.disableSubmitButton = function() {
      return this.getSubmitButton().prop("disabled", !0).addClass("disabled").removeClass("primary");
    }, r.prototype.enableSubmitButton = function() {
      return this.getSubmitButton().prop("disabled", !1).removeClass("disabled").addClass("primary");
    }, r.prototype.restoreSubmitText = function() {
      return this.getSubmitButton().text("Report Question");
    }, r;
  }(Treehouse.View), Featurette.register("quiz-question-feedback-modal", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.ExamQuiz = function(i) {
    function r() {
      this.completeDegreeExam = t(this.completeDegreeExam, this), this.render = t(this.render, this), 
      this.examQuizNavAlert = t(this.examQuizNavAlert, this), this.processError = t(this.processError, this), 
      this.processResponse = t(this.processResponse, this), this.submitSelectedAnswer = t(this.submitSelectedAnswer, this), 
      this.setSelectedAnswer = t(this.setSelectedAnswer, this), r.__super__.constructor.apply(this, arguments), 
      this.selectedAnswer, this.submitAnswerButtonContent = "<button id='submit-selected-answer' class='button primary'>Submit Answer</button>", 
      this.listenTo(window, "beforeunload", this.examQuizNavAlert), this.on("click", "#submit-selected-answer", this.submitSelectedAnswer), 
      this.render();
    }
    return e(r, i), r.prototype.setSelectedAnswer = function(t) {
      return this.enableSubmitButton(), this.selectedAnswer = t;
    }, r.prototype.submitSelectedAnswer = function() {
      var t;
      return this.disable(), t = {}, this.quizData.quiz_attempt && (t.quiz_attempt = this.quizData.quiz_attempt), 
      $.ajax({
        type:"POST",
        url:this.selectedAnswer,
        data:t,
        dataType:"json",
        success:this.processResponse,
        error:this.processError
      });
    }, r.prototype.processResponse = function(t) {
      return this.quizData = t, "unfinished" !== t.quiz_status ? t.degree_exam_completed ? this.completeDegreeExam() :this.showDegreeExamBreak() :this.render(), 
      Treehouse.init();
    }, r.prototype.processError = function(t) {
      var e, i, r, s;
      if (e = Featurette.get("quiz-error-modal"), e.setError("Oops! Something went wrong. Please try answering the question again."), 
      401 === t.status) {
        if (r = JSON.parse(t.responseText), r.exam_ended) return s = r.redirect_url, i = Featurette.get("degree-exam-end-modal"), 
        i.setRedirectLink(s), i.setMessage("Your exam session time has expired. All of your answers have been saved and submitted for grading."), 
        void i.showOverlay({
          stack:!0
        });
        e.setError("Your exam session is locked! To resume with this exam, please ask your proctor to unlock your session.");
      }
      return e.showOverlay({
        stack:!0
      }), this.render();
    }, r.prototype.examQuizNavAlert = function() {
      if ("unfinished" === this.quizData.quiz_status) return "If you leave now, you'll lose your progress!";
      window.onbeforeunload = null;
    }, r.prototype.showDegreeExamBreak = function() {
      return Featurette.get("degree-exam-break-modal").showOverlay();
    }, r.prototype.render = function() {
      return this.generateQuestion(), this.generateAnswers(), this.generateDegreeExamControls(), 
      Treehouse.init();
    }, r.prototype.generateDegreeExamControls = function() {
      return this.canReselectAnswer(this.quizData) ? (this.examControlEl.html(this.submitAnswerButtonContent), 
      this.disableSubmitButton(), this.examControlEl.show()) :this.examControlEl.hide();
    }, r.prototype.generateAnswers = function() {
      var t;
      return null != (t = this.answersView) && "function" == typeof t.empty && t.empty(), 
      this.answersView = function() {
        switch (this.quizData.question.question_type) {
         case "MultipleChoice":
          return new Treehouse.Quiz.ExamMultipleChoice(this.answersEl, {
            setSelectedAnswer:this.setSelectedAnswer,
            answers:_.pick(this.quizData, "answers")
          });

         case "TrueFalse":
          return new Treehouse.Quiz.ExamTrueFalse(this.answersEl, {
            setSelectedAnswer:this.setSelectedAnswer,
            answers:_.pick(this.quizData, "answers")
          });

         case "FillInTheBlank":
          return new Treehouse.Quiz.FillInTheBlank(this.answersEl, {
            submit:this.submit,
            answers:_.pick(this.quizData, "answers")
          });
        }
      }.call(this), this.answersView.render();
    }, r.prototype.disable = function() {
      return this.disableSubmitButton(), this.answersEl.find(".quiz-answers a").addClass("inactive"), 
      this.isDisabled = !0;
    }, r.prototype.disableSubmitButton = function() {
      return $("#submit-selected-answer").attr("disabled", !0), $("#submit-selected-answer").addClass("inactive");
    }, r.prototype.enableSubmitButton = function() {
      return $("#submit-selected-answer").removeAttr("disabled"), $("#submit-selected-answer").removeClass("inactive");
    }, r.prototype.canReselectAnswer = function(t) {
      var e;
      return "MultipleChoice" === (e = t.question.question_type) || "TrueFalse" === e;
    }, r.prototype.completeDegreeExam = function() {
      return $.ajax({
        type:"POST",
        url:this.quizData.degree_exam_completion_url,
        error:this.processError,
        success:function(t, e, i) {
          return window.location = i.getResponseHeader("Location");
        }
      });
    }, r;
  }(Treehouse.Quiz), Featurette.register("exam_quiz", Treehouse.ExamQuiz);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Quiz.Feedback = function(i) {
    function r(e, i) {
      this.quizFinished = t(this.quizFinished, this), this.finishQuizProxy = t(this.finishQuizProxy, this), 
      this.nextQuestionProxy = t(this.nextQuestionProxy, this), this.onKeyUp = t(this.onKeyUp, this), 
      r.__super__.constructor.apply(this, arguments), this.quizStatus = i.quizStatus, 
      this.questionPassed = i.questionPassed, this.feedbackText = i.feedbackText, this.nextQuestion = i.nextQuestion, 
      this.finishQuiz = i.finishQuiz, this.feedbackType = i.feedbackType, this.instruction = i.instruction, 
      this.degreeExam = i.degreeExam, this.reviewVideoUrl = i.reviewVideoUrl, this.on("click", "[data-next-question]", this.nextQuestionProxy), 
      this.on("click", "[data-finish-quiz]", this.finishQuizProxy);
    }
    return e(r, i), r.prototype.render = function() {
      return "error" !== this.feedbackType && "success" !== this.feedbackType || this.listenTo(document, "keyup", this.onKeyUp), 
      this.el.html(HoganTemplates["quizzes/feedback_" + this.feedbackType].render({
        degree_exam:this.degreeExam,
        finished:this.quizFinished(),
        passed:this.questionPassed,
        response:this.feedbackText,
        instruction:this.instruction,
        skip_quiz_url:this.el.data("skip-quiz-url"),
        review_video_url:this.reviewVideoUrl,
        icon_play:this.el.data("icon-play"),
        icon_right_arrow:this.el.data("icon-right-arrow"),
        alert_success_icon:this.el.data("alert-success-icon"),
        alert_error_icon:this.el.data("alert-error-icon"),
        step_params:JSON.stringify({
          step_type:"Quiz",
          step_id:this.el.data("quiz-id")
        }),
        get_help_url:this.el.data("get-help-url")
      }));
    }, r.prototype.empty = function() {
      return this.el.empty(), this.stopListening();
    }, r.prototype.onKeyUp = function(t) {
      if (13 === t.which) return this.nextQuestionProxy(), this.finishQuizProxy();
    }, r.prototype.nextQuestionProxy = function() {
      if ("unfinished" === this.quizStatus) return this.nextQuestion();
    }, r.prototype.finishQuizProxy = function() {
      if (this.quizFinished()) return this.finishQuiz(), this.stopListening();
    }, r.prototype.quizFinished = function() {
      return "passed" === this.quizStatus || "failed" === this.quizStatus;
    }, r;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Quiz.MultipleChoice = function(i) {
    function r(e, i) {
      this.options = i, this.onClick = t(this.onClick, this), this.onKeyUp = t(this.onKeyUp, this), 
      r.__super__.constructor.apply(this, arguments), this.listenTo(document, "keyup", this.onKeyUp), 
      this.on("click", "[data-quiz-answer-key]", this.onClick);
    }
    return e(r, i), r.prototype.template = "quizzes/multiple_choice", r.prototype.render = function() {
      return this.el.html(HoganTemplates[this.template].render(this.options.answers));
    }, r.prototype.onKeyUp = function(t) {
      var e, i;
      if (!this.isDisabled) return (i = this.keyCodes()[t.which]) ? (e = this.el.find("[data-quiz-answer-key=" + i + "]"), 
      this.submitProxy(e)) :void 0;
    }, r.prototype.onClick = function(t) {
      if ("function" == typeof t.preventDefault && t.preventDefault(), !this.isDisabled) return this.submitProxy($(t.currentTarget));
    }, r.prototype.submitProxy = function(t) {
      return this.options.submit(t.attr("href")), t.addClass("selected"), this.disable();
    }, r.prototype.disable = function() {
      return this.el.find(".quiz-answers a").addClass("inactive"), this.isDisabled = !0;
    }, r.prototype.empty = function() {
      return this.el.empty(), this.stopListening();
    }, r.prototype.keyCodes = function() {
      return this.cachedKeyCodes ? this.cachedKeyCodes :(this.cachedKeyCodes = {}, this.options.answers.answers.forEach(function(t) {
        return function(e) {
          return t.cachedKeyCodes[e.abcd.charCodeAt()] = e.abcd;
        };
      }(this)), this.cachedKeyCodes);
    }, r;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, i) {
    function r() {
      this.constructor = t;
    }
    for (var s in i) e.call(i, s) && (t[s] = i[s]);
    return r.prototype = i.prototype, t.prototype = new r(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Treehouse.Quiz.TrueFalse = function(e) {
    function i() {
      return i.__super__.constructor.apply(this, arguments);
    }
    return t(i, e), i.prototype.template = "quizzes/true_false", i.prototype.keyCodes = function() {
      return null != this.cachedKeyCodes ? this.cachedKeyCodes :this.cachedKeyCodes = {
        70:"False",
        84:"True"
      };
    }, i;
  }(Treehouse.Quiz.MultipleChoice);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Quiz.FillInTheBlank = function(i) {
    function r(e, i) {
      this.options = i, this.enterKeyHandler = t(this.enterKeyHandler, this), this.onFormSubmit = t(this.onFormSubmit, this), 
      r.__super__.constructor.apply(this, arguments), this.on("submit", "[data-quiz-fitb-form-action]", this.onFormSubmit), 
      this.on("keydown", "[contenteditable='true']", this.enterKeyHandler);
    }
    return e(r, i), r.prototype.onFormSubmit = function(t) {
      var e, i, r, s;
      if (null != t && t.preventDefault(), !this.isDisabled) return i = this.el.find("form[data-quiz-fitb-form-action]"), 
      r = i.data("quiz-fitb-form-action"), s = i.find("[contenteditable='true']"), e = {
        fitb_answers:this.serializedFormData(s)
      }, s.blur().prop("contenteditable", !1), this.options.submit(r, e), this.disable();
    }, r.prototype.enterKeyHandler = function(t) {
      if (13 === t.which) return this.onFormSubmit();
    }, r.prototype.serializedFormData = function(t) {
      var e;
      return e = {}, t.each(function(t, i) {
        e[t] = {
          name:i.id,
          value:i.textContent
        };
      }), e;
    }, r.prototype.disable = function() {
      return this.el.find(".quiz-answers").addClass("inactive"), this.isDisabled = !0;
    }, r.prototype.render = function() {
      var t;
      return t = HoganTemplates["quizzes/fill_in_the_blank"].render(this.options.answers), 
      this.el.html(t).find("a").attr("target", "_blank"), this.el.find("[contenteditable='true']:first").focus();
    }, r.prototype.empty = function() {
      return this.el.empty(), this.stopListening();
    }, r;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Quiz.ExamMultipleChoice = function(i) {
    function r(e, i) {
      this.options = i, this.onKeyUp = t(this.onKeyUp, this), this.onClick = t(this.onClick, this), 
      r.__super__.constructor.apply(this, arguments);
    }
    return e(r, i), r.prototype.template = "quizzes/multiple_choice", r.prototype.onClick = function(t) {
      var e;
      if ("function" == typeof t.preventDefault && t.preventDefault(), !this.isDisabled) return this.resetAnswerStyles(), 
      e = $(t.currentTarget), e.addClass("selected"), this.el.find(".quiz-answers a").addClass("inactive"), 
      this.options.setSelectedAnswer(e.attr("href"));
    }, r.prototype.onKeyUp = function(t) {
      var e, i;
      if (!this.isDisabled) return (i = this.keyCodes()[t.which]) ? (this.resetAnswerStyles(), 
      e = this.el.find("[data-quiz-answer-key=" + i + "]"), e.addClass("selected"), this.options.setSelectedAnswer(e.attr("href"))) :void 0;
    }, r.prototype.resetAnswerStyles = function() {
      return this.el.find(".quiz-answers a").removeClass("inactive"), this.el.find(".quiz-answers a").removeClass("selected");
    }, r;
  }(Treehouse.Quiz.MultipleChoice);
}.call(this), function() {
  var t = function(t, i) {
    function r() {
      this.constructor = t;
    }
    for (var s in i) e.call(i, s) && (t[s] = i[s]);
    return r.prototype = i.prototype, t.prototype = new r(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Treehouse.Quiz.ExamTrueFalse = function(e) {
    function i() {
      return i.__super__.constructor.apply(this, arguments);
    }
    return t(i, e), i.prototype.template = "quizzes/true_false", i.prototype.keyCodes = function() {
      return null != this.cachedKeyCodes ? this.cachedKeyCodes :this.cachedKeyCodes = {
        70:"False",
        84:"True"
      };
    }, i;
  }(Treehouse.Quiz.ExamMultipleChoice);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.showTopicChoicePanel = e(this.showTopicChoicePanel, this), this.showRetakeWarningPanel = e(this.showRetakeWarningPanel, this), 
      r.__super__.constructor.apply(this, arguments), this.on("click", "a[data-goto-retake-warning-panel]", this.showRetakeWarningPanel), 
      this.on("click", "a[data-goto-topic-choice-panel]", this.showTopicChoicePanel);
    }
    return i(r, t), r.prototype.showRetakeWarningPanel = function(t) {
      return t.preventDefault(), this.get("[data-panel-intro]").addClass("hidden"), this.get("[data-panel-retake-warning]").removeClass("hidden");
    }, r.prototype.showTopicChoicePanel = function(t) {
      return t.preventDefault(), this.get("[data-panel-retake-warning]").addClass("hidden"), 
      this.get("[data-panel-topic-choice]").removeClass("hidden");
    }, r;
  }(Treehouse.View), Featurette.register("assessment-info", t);
}.call(this), function() {
  var t = function(t, i) {
    function r() {
      this.constructor = t;
    }
    for (var s in i) e.call(i, s) && (t[s] = i[s]);
    return r.prototype = i.prototype, t.prototype = new r(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  (function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.on("click", "[data-info-toggle]", this.toggleInfoPanel), 
      this.on("click", "[data-tag-toggle]", this.toggleTagQuestionReview);
    }
    t(i, e), i.prototype.toggleInfoPanel = function(t) {
      var e, i;
      return t.preventDefault(), i = $(t.target), e = i.closest(".assessment-course-result"), 
      e.toggleClass("expanded"), e.find(".assessment-course-result__content").slideToggle(500);
    }, i.prototype.toggleTagQuestionReview = function(t) {
      var e, i, r;
      return t.preventDefault(), r = $(t.target), e = r.closest(".assessment-course-result"), 
      e.find("[data-result-percentage]").removeClass("hidden"), e.find("[data-review-tag]").addClass("hidden"), 
      i = e.find("[data-tag-toggle]").data("tag-toggle"), $.ajax({
        type:"POST",
        url:i
      });
    }, Featurette.register("assessment-results-activity-info", i);
  })(Treehouse.View);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.toggleSteps = e(this.toggleSteps, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", ".toggle-steps", this.toggleSteps), this.on("pjax:end", this.clearElementsCache), 
      this.expanded = this.get(".steps-list:visible").length > 0;
    }
    return i(r, t), r.prototype.toggleSteps = function(t) {
      return t.preventDefault(), this.expanded ? this.contract() :this.expand();
    }, r.prototype.expand = function(t) {
      return null == t && (t = "fast"), this.get(".steps-list").stop(!0, !0).slideDown(t), 
      this.get(".toggle-steps").addClass("selected"), this.get(".toggle-steps").addClass("selected"), 
      this.expanded = !0;
    }, r.prototype.contract = function(t) {
      return null == t && (t = "fast"), this.get(".steps-list").stop(!0, !0).slideUp(t), 
      this.get(".toggle-steps").removeClass("selected"), this.get(".toggle-steps").removeClass("selected"), 
      this.expanded = !1;
    }, r;
  }(Treehouse.View), Featurette.register("expandable-content-card", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("truncate-tags", Treehouse.TruncateTags = function(i) {
    function r() {
      this.truncate = t(this.truncate, this), r.__super__.constructor.apply(this, arguments), 
      this.listenTo(window, "resize", _.throttle(this.truncate, 500), {
        triggerImmediately:!0
      });
    }
    return e(r, i), r.prototype.truncate = function() {
      return this.get(".tags").each(function() {
        return function(t, e) {
          var i, r, s, n, o;
          if (e = $(e), o = e.find(".truncated-tags ul"), r = e.innerWidth(), i = e.children(":not(.truncated-tags)"), 
          o.empty(), i.show(), e.removeClass("truncated"), s = _.find(i, function(t) {
            return t.offsetWidth + t.offsetLeft > r;
          })) return n = i.slice(i.index(s), i.length + 1), n.hide(), n.clone().appendTo(o), 
          e.addClass("truncated"), o.find("li").show();
        };
      }());
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("track-update-actions", function(i) {
    function r() {
      this.updateCopy = t(this.updateCopy, this), this.showErrorUpdate = t(this.showErrorUpdate, this), 
      this.showConfirmUpdate = t(this.showConfirmUpdate, this), this.updateTrack = t(this.updateTrack, this), 
      this.declineUpdate = t(this.declineUpdate, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", "[data-decline-update]", this.declineUpdate), this.on("click", "[data-update-track]", this.updateTrack);
    }
    return e(r, i), r.prototype.declineUpdate = function() {
      return this.el.addClass("showing-confirmation"), this.updateCopy("declined");
    }, r.prototype.updateTrack = function(t) {
      return t.preventDefault(), this.get("[data-update-track]").html("Updating..."), 
      $.ajax({
        url:this.get("[data-update-track]").attr("href"),
        type:"PUT",
        success:function(t) {
          return function() {
            return t.showConfirmUpdate();
          };
        }(this),
        error:function(t) {
          return function() {
            return t.showErrorUpdate();
          };
        }(this)
      }), !1;
    }, r.prototype.showConfirmUpdate = function() {
      return this.el.addClass("updated-track"), this.updateCopy("accepted");
    }, r.prototype.showErrorUpdate = function() {
      return this.el.addClass("failed-update"), this.updateCopy("failed");
    }, r.prototype.updateCopy = function(t) {
      return $([ "title", "description" ]).each(function(e) {
        return function(i, r) {
          var s;
          return s = e.get("[data-track-update-" + r + "]"), s.html(s.data(t + "-update"));
        };
      }(this));
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t, e, i, r = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, s = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) n.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, n = {}.hasOwnProperty;
  t = function(t) {
    function e(t) {
      this.updateCardEstimate = r(this.updateCardEstimate, this), this.personalize = r(this.personalize, this), 
      this.handlePersonalize = r(this.handlePersonalize, this), this.handleBookmarkChange = r(this.handleBookmarkChange, this), 
      this.handleBookmarkChanged = r(this.handleBookmarkChanged, this), this.bookmarkableFeaturette = r(this.bookmarkableFeaturette, this), 
      this.handleBookmarkError = r(this.handleBookmarkError, this), this.handleBookmarkChanged = r(this.handleBookmarkChanged, this), 
      this.handleBookmarkAdded = r(this.handleBookmarkAdded, this), this.isActivityType = r(this.isActivityType, this), 
      this.identity = r(this.identity, this), this.deconstructor = r(this.deconstructor, this);
      e.__super__.constructor.call(this, t), this.personalization = Treehouse.ActivityProgress.instance(), 
      this.el.parents("[data-no-personalization]").count > 0 || !0 === this.personalization.registerInterest(this.identity(), this.el.attr("id")) && this.listenTo(document, "personalize", this.handlePersonalize), 
      this.listenTo("body", "bookmark:changed", this.handleBookmarkChanged), this.on("bookmark:change", this.handleBookmarkChange), 
      this.on("bookmark:added", this.handleBookmarkAdded), this.on("bookmark:error", this.handleBookmarkError), 
      this.el.on("remove", this.deconstructor), this.el.find(".card-estimate").data("initial-value", this.el.find(".card-estimate").html()), 
      this.queueableTarp = new Treehouse.Library.QueueableTarp(this.el.find(".queueable-tarp"));
    }
    return s(e, t), e.prototype.deconstructor = function() {
      return this.personalization.unregisterInterest(this.identity(), this), this.stopListening();
    }, e.prototype.identity = function() {
      return this.el.attr("data-activity");
    }, e.prototype.isActivityType = function(t) {
      var e;
      return t = _.string.dasherize(t.trim()), e = [ "bonus-content-series", "syllabus", "workshop", "instruction" ], 
      e.indexOf(t) >= 0 && this.el.hasClass(t);
    }, e.prototype.handleBookmarkAdded = function() {
      return this.queueableTarp.show("added");
    }, e.prototype.handleBookmarkChanged = function() {
      return this.personalization.expire(this.identity());
    }, e.prototype.handleBookmarkError = function() {
      return this.queueableTarp.displayError();
    }, e.prototype.bookmarkableFeaturette = function() {
      return Featurette.get(this.el.find("[data-featurette='bookmarkable']").attr("id"));
    }, e.prototype.handleBookmarkChanged = function(t, e, i) {
      if (e === this.identity()) {
        if (i === Treehouse.Library.Bookmarkable.NOT_BOOKMARKED) return this.el.removeClass("bookmarked");
        if (i === Treehouse.Library.Bookmarkable.BOOKMARKED) return this.el.addClass("bookmarked");
      }
    }, e.prototype.handleBookmarkChange = function() {
      return this.personalization.expire(this.identity());
    }, e.prototype.handlePersonalize = function(t, e, i) {
      if (e === this.identity()) return this.personalize(i);
    }, e.prototype.personalize = function(t) {
      var e, i, r, s, n, o, a, l;
      if (this.inProgress = t.in_progress, this.percentComplete = t.percent_complete, 
      this.completed = t.completed, this.skipped = t.skipped, this.upcoming = t.upcoming, 
      r = this.get(".card-estimate").data("initial-value"), this.skipped ? this.updateCardEstimate("You have placed out of this course! (It typically takes approximately " + r + " to complete.)", "Tested out") :this.completed ? this.updateCardEstimate("You have completed this course! (It typically takes approximately " + r + " to complete.)", "Complete") :this.inProgress && this.updateCardEstimate("You have approximately " + t.formatted_time_left + " left of " + r + " to complete this activity.", t.formatted_time_left + " left"), 
      a = this.el.find(".card-stages").children(), t.stage_progress_classes) for (i = s = 0, 
      n = a.length; s < n; i = ++s) o = a[i], $(o).addClass(t.stage_progress_classes[i]); else this.inProgress && a.first().addClass("current");
      return this.inProgress && this.el.find(".card-actions .resume a").text("Resume"), 
      this.skipped ? this.el.find(".card-status-title").html("Tested out") :this.completed ? (l = this.isActivityType("bonus_content_series") || this.isActivityType("workshop") || this.isActivityType("instruction") ? "Complete" :t.points_earned + " points achieved", 
      this.el.find(".card-status-title").html(l)) :(null != t.next_step_url || t.bookmarked) && (this.el.find(".card-actions .resume a").attr("href", t.next_step_url), 
      this.el.find(".current-step").append(t.next_step_title), "forum" !== this.el.data("location") && this.el.find(".current-step > svg").hide(), 
      this.el.find(".current-step").removeClass("hidden"), this.el.find("." + t.next_step_type.toLowerCase() + "-22-icon").show(), 
      this.el.find(".card-actions").removeClass("hidden")), this.upcoming && this.el.addClass("upcoming"), 
      this.inProgress && this.el.addClass("in-progress"), this.completed && this.el.addClass("completed"), 
      e = this.bookmarkableFeaturette(), e && e.setState(t.bookmarked), this.el.addClass("personalized");
    }, e.prototype.updateCardEstimate = function(t, e) {
      var i;
      return i = this.get(".card-estimate"), i.data("initial-value") && i.attr("title", t), 
      i.html(e);
    }, e;
  }(Treehouse.View), null != (e = this.Treehouse) && null != (i = e.Library) && (i.Card = t), 
  Featurette.register("library-card", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  Treehouse.Library || (Treehouse.Library = {}), Treehouse.Library.Bookmarkable = function(t) {
    function r() {
      this.trigger = e(this.trigger, this), this.handleBookmarkChanged = e(this.handleBookmarkChanged, this), 
      this.success = e(this.success, this), this.error = e(this.error, this), this.loaded = e(this.loaded, this), 
      this.loading = e(this.loading, this), this.sendRequest = e(this.sendRequest, this), 
      this.unbookmark = e(this.unbookmark, this), this.bookmark = e(this.bookmark, this), 
      this.setState = e(this.setState, this), this.isBookmarked = e(this.isBookmarked, this), 
      this.activityId = e(this.activityId, this), r.__super__.constructor.apply(this, arguments), 
      this.el.data("bookmarked") || this.el.data("bookmarked", !1), this.on("click", "a.bookmark, a.unbookmark, .undo", this.sendRequest), 
      this.listenTo("body", "bookmark:changed", this.handleBookmarkChanged), this.el.on("remove", this.stopListening);
    }
    return i(r, t), r.BOOKMARKED = "bookmarked", r.NOT_BOOKMARKED = "not-bookmarked", 
    r.prototype.activityId = function() {
      return this.el.data("activity") || this.el.parents("[data-activity]").data("activity");
    }, r.prototype.isBookmarked = function() {
      return this.el.data("bookmarked");
    }, r.prototype.setState = function(t) {
      return this.el.data("bookmarked", t === r.BOOKMARKED || !0 === t), this.trigger("bookmark:changed");
    }, r.prototype.bookmark = function() {
      if (!this.isBookmarked()) return this.el.find("a.bookmark").click();
    }, r.prototype.unbookmark = function() {
      if (this.isBookmarked()) return this.el.find("a.unbookmark").click();
    }, r.prototype.sendRequest = function(t) {
      var e;
      return e = $(t.currentTarget), t.preventDefault(), $.ajax({
        dataType:"text",
        type:e.data("method"),
        url:e.attr("href"),
        beforeSend:this.loading,
        complete:this.loaded,
        error:this.error,
        success:this.success
      }), !1;
    }, r.prototype.loading = function() {
      return this.el.addClass("loading"), this.trigger("bookmark:change");
    }, r.prototype.loaded = function() {
      return this.el.removeClass("loading");
    }, r.prototype.error = function() {
      return this.trigger("bookmark:error"), this.tarp.displayError();
    }, r.prototype.success = function(t) {
      return this.setState(!this.isBookmarked()), _.defer(function(e) {
        return function() {
          return e.trigger("bookmark:" + t);
        };
      }(this));
    }, r.prototype.handleBookmarkChanged = function(t, e, i) {
      if (e === this.activityId() && (i === r.NOT_BOOKMARKED && this.el.removeClass("bookmarked"), 
      i === r.BOOKMARKED)) return this.el.addClass("bookmarked");
    }, r.prototype.trigger = function(t) {
      var e;
      return e = !0 === this.isBookmarked() ? r.BOOKMARKED :r.NOT_BOOKMARKED, this.el.trigger(t, [ this.activityId(), e ]);
    }, r;
  }(Treehouse.View), t = Treehouse.Library.Bookmarkable, Featurette.register("bookmarkable", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Library.QueueableTarp = function(i) {
    function r(e) {
      this.trigger = t(this.trigger, this), this.displayError = t(this.displayError, this), 
      this.show = t(this.show, this), r.__super__.constructor.call(this, e);
    }
    return e(r, i), r.prototype.show = function(t) {
      var e;
      return this.get(".confirmation-tarp:not(.undo):visible").stop(!0, !0).fadeOut(150), 
      this.get(".undo").is(":visible") ? this.get(".undo:visible").stop(!0, !0).delay(50).fadeOut(150, callback) :(e = this.get("." + t), 
      e.show().delay(4e3).fadeOut(300));
    }, r.prototype.displayError = function() {
      return this.get(".error").show();
    }, r.prototype.trigger = function(t) {
      return this.el.trigger(t);
    }, r;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  Treehouse.ActivityProgress = function() {
    function e() {
      this.expire = t(this.expire, this), this.missingActivities = t(this.missingActivities, this), 
      this.cycle = t(this.cycle, this), this.broadcast = t(this.broadcast, this), this.failedToLoadData = t(this.failedToLoadData, this), 
      this.loadedData = t(this.loadedData, this), this.unregisterInterest = t(this.unregisterInterest, this), 
      this.registerInterest = t(this.registerInterest, this);
      var e, i, r, s;
      this.enabled() && (r = Treehouse.currentUser.cache_marks.progress, e = Treehouse.currentUser.cache_marks.bookmarks, 
      s = Treehouse.currentUser.cache_marks.queue, i = "progress:" + r + "/bookmarks:" + e + "/queue:" + s, 
      this.cache = new Treehouse.Cache({
        namespace:{
          namespace:i,
          currentUser:!0
        }
      }), this.registeredActivities = {}, this.pendingActivities = []);
    }
    return e.instance = function() {
      return null != this._instance ? this._instance :this._instance = new Treehouse.ActivityProgress();
    }, e.prototype.enabled = function() {
      return !0 === Treehouse.isLoggedIn;
    }, e.prototype.registerInterest = function(t, e) {
      var i;
      return !!this.enabled() && (!!t && (i = e + ": " + t, this.registeredActivities[i] = t, 
      _.defer(function(e) {
        return function() {
          return e.broadcast(t);
        };
      }(this)), _.defer(this.cycle), !0));
    }, e.prototype.unregisterInterest = function(t, e) {
      var i;
      return !!this.enabled() && (i = e + ": " + t, !!this.registeredActivities[i] && delete this.registeredActivities[i]);
    }, e.prototype.loadedData = function(t, e) {
      return delete this.pendingActivities[_.indexOf(this.pendingActivities, t)], this.cache.write(t, e), 
      this.broadcast(t);
    }, e.prototype.failedToLoadData = function(t) {
      return delete this.pendingActivities[_.indexOf(this.pendingActivities, t)], $(document).trigger("personalize:failure", t);
    }, e.prototype.broadcast = function(t) {
      var e;
      return !!(e = this.cache.read(t)) && ($(document).trigger("personalize", [ t, e ]), 
      !0);
    }, e.prototype.cycle = function() {
      var t;
      if (this.enabled()) return t = this.chunkArray(this.missingActivities(), 30), _.each(t, function(t) {
        return function(e) {
          if (e.length > 0) return t.pendingActivities = _.union(t.pendingActivities, e), 
          new Treehouse.ActivityProgress.Request(e);
        };
      }(this));
    }, e.prototype.missingActivities = function() {
      var t;
      return t = _.select(_.values(this.registeredActivities), function(t) {
        return function(e) {
          return t.cache.exists(e);
        };
      }(this)), _.difference(_.values(this.registeredActivities), t, this.pendingActivities);
    }, e.prototype.expire = function(t) {
      return this.cache["delete"](t), $(document).trigger("personalize:expired", t);
    }, e.prototype.chunkArray = function(t, e) {
      return null == e && (e = 15), [].concat.apply([], t.map(function(i, r) {
        return r % e ? [] :[ t.slice(r, r + e) ];
      }));
    }, e;
  }(), Treehouse.ActivityProgress.Request = function() {
    function e(e) {
      this.handleErrorResponse = t(this.handleErrorResponse, this), this.handleSuccessResponse = t(this.handleSuccessResponse, this), 
      this.activityIds = e, $.isEmptyObject(e) || $.ajax({
        type:"POST",
        url:"/progress",
        data:{
          activities:e
        },
        success:this.handleSuccessResponse,
        error:this.handleErrorResponse
      });
    }
    return e.prototype.handleSuccessResponse = function(t) {
      return _.each(t, function() {
        return function(t) {
          return Treehouse.ActivityProgress.instance().loadedData(t.identity, t);
        };
      }());
    }, e.prototype.handleErrorResponse = function() {
      return _.each(this.activityIds, function() {
        return function(t) {
          return Treehouse.ActivityProgress.instance().failedToLoadData(t);
        };
      }());
    }, e;
  }();
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.createChart = e(this.createChart, this), this.dataSeries = e(this.dataSeries, this), 
      this.goalSeries = e(this.goalSeries, this), this.getDays = e(this.getDays, this), 
      this.getDay = e(this.getDay, this), r.__super__.constructor.apply(this, arguments), 
      this.days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], this.yMinimum = 4, 
      this.createChart();
    }
    return i(r, t), r.prototype.getDay = function(t) {
      return this.days[Date.parse(t).getDay()];
    }, r.prototype.getDays = function() {
      return this.data.step.stats.map(function(t) {
        return function(e) {
          return t.getDay(e[0]);
        };
      }(this));
    }, r.prototype.goalSeries = function() {
      return _.range(this.data.step.stats.length).map(function(t) {
        return function() {
          return t.data.totalSteps;
        };
      }(this));
    }, r.prototype.dataSeries = function() {
      return this.data.step.stats.map(function(t) {
        return function(e) {
          return {
            meta:t.getDay(e[0]),
            value:e[1]
          };
        };
      }(this));
    }, r.prototype.createChart = function() {
      var t;
      return t = this.dataSeries(), new Chartist.Line(this.el.get(0), {
        labels:this.getDays(),
        series:[ this.goalSeries(), t ]
      }, {
        high:Math.max.apply(Math, t.map(_.property("value")).concat(this.yMinimum)),
        fullWidth:!0,
        lineSmooth:Chartist.Interpolation.simple({
          divisor:2
        }),
        axisY:{
          onlyInteger:!0
        },
        axisX:{
          showGrid:!1
        },
        classNames:{
          point:"ct-point " + this.data.topicStrokeClass
        },
        plugins:[ Chartist.plugins.tooltip({
          tooltipFnc:function(t) {
            return function(e, i) {
              var r;
              return r = "1" === i ? "step" :"steps", '<div class="chartist-tooltip-box">\n  <strong class="ct-tooltip-date ' + t.data.topicColorClass + '">' + e + '</strong>\n  <span class="ct-tooltip-steps-complete">' + i + " " + r + "</span>\n</div>";
            };
          }(this)
        }) ]
      }).on("draw", function(t) {
        return function(e) {
          var i, r;
          return "line" === e.type ? 0 === e.seriesIndex ? e.group.addClass("ct-series-goal") :(e.element.addClass(t.data.topicStrokeClass), 
          r = e.element._node.getTotalLength(), e.element.attr({
            "stroke-dasharray":r + "px " + r + "px"
          }), e.element.animate({
            "stroke-dashoffset":{
              dur:2e3,
              from:r + "px",
              to:"0px",
              easing:Chartist.Svg.Easing.easeOutQuint,
              fill:"freeze"
            }
          })) :"point" === e.type ? (i = new Chartist.Svg("circle", {
            r:4,
            cx:e.x,
            cy:e.y,
            "ct:meta":e.meta,
            "ct:value":e.series[e.index].value
          }, "ct-point ct-circle " + t.data.topicStrokeClass), e.value.y >= t.data.totalSteps && i.addClass("ct-goal-completed " + t.data.topicFillClass), 
          e.element.replace(i)) :void 0;
        };
      }(this));
    }, r;
  }(Treehouse.View), Featurette.register("learning-flow-weekly-progress", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.Degree && (Treehouse.Degree = {}), Treehouse.Degree.ProgressChart = function(i) {
    function r() {
      this.yAxisMax = t(this.yAxisMax, this), this.getDays = t(this.getDays, this), r.__super__.constructor.apply(this, arguments), 
      new Chartist.Line(this.el.get(0), {
        labels:this.getDays(),
        series:[ this.data.stats.map(_.property(1)) ]
      }, {
        high:this.yAxisMax(),
        fullWidth:!0,
        lineSmooth:Chartist.Interpolation.simple({
          divisor:2
        }),
        axisY:{
          onlyInteger:!0,
          labelInterpolationFnc:function(t, e) {
            return 0 === e ? "&nbsp;" :t;
          }
        },
        axisX:{
          showGrid:!1
        },
        plugins:[ Chartist.plugins.tooltip({
          tooltipFnc:function(t, e) {
            return '<div class="chartist-tooltip-box">\n  <div class="stat">\n    <span class="stat-data">' + (e || 0) + "</span>\n  </div>\n</div>";
          }
        }) ]
      });
    }
    return e(r, i), r.prototype.getDays = function() {
      var t;
      return t = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], this.data.stats.map(function(e) {
        return t[Date.parse(e[0]).getDay()];
      });
    }, r.prototype.yAxisMax = function() {
      return Math.max.apply(Math, this.data.stats.map(_.property(1)).concat(3)) + 1;
    }, r;
  }(Treehouse.View), Featurette.register("dashboard/degree/progress-chart", Treehouse.Degree.ProgressChart);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.Degree && (Treehouse.Degree = {}), Treehouse.Degree.Dashboard = function(i) {
    function r() {
      this.dismissNewBadgeOnPeerReviewTabHeader = t(this.dismissNewBadgeOnPeerReviewTabHeader, this), 
      this.replayCurrentInstructionVideo = t(this.replayCurrentInstructionVideo, this), 
      this.loadInstructionControls = t(this.loadInstructionControls, this), this.resetReviewClass = t(this.resetReviewClass, this), 
      this.scheduleSession = t(this.scheduleSession, this), this.submitReviewForm = t(this.submitReviewForm, this), 
      this.enableReviewForm = t(this.enableReviewForm, this), this.switchPanel = t(this.switchPanel, this), 
      this.onPjaxEnd = t(this.onPjaxEnd, this), this.onPjaxStart = t(this.onPjaxStart, this), 
      this.loadFilters = t(this.loadFilters, this), r.__super__.constructor.apply(this, arguments), 
      this.activityContainer = this.get("[data-degree-activity-container]"), this.panelsParent = this.get("#degree-views"), 
      this.on("submit", "[data-panel='" + this.reviewPanel + "'] form", this.submitReviewForm), 
      this.on("change", "[data-panel='" + this.reviewPanel + "'] [name='" + this.ratingInput + "']", this.enableReviewForm), 
      this.on("click", "[data-action='schedule-session']", this.scheduleSession), this.on("click", ".show-instruction", this.loadInstruction), 
      this.on("click", ".hide-instruction", this.hideInstruction), this.on("click", "[data-instruction-complete]", this.completeInstruction), 
      this.on("click", ".rewatch-video", this.replayCurrentInstructionVideo), this.on("click", "[data-acknowledge-url]", this.acknowledgeCompletedProject), 
      this.on("click", "[data-degree-activity-alert-dismiss]", this.dismissActivityAlert), 
      this.on("click", ".degree-completed-activities-toggle", this.toggleCompletedList), 
      this.on("click", "a[data-filter-value=peer-reviews]", this.dismissNewBadgeOnPeerReviewTabHeader), 
      this.on("click", ".card-degree-unit-courses", this.toggleCardOpen), this.activityContainer.on("pjax:start", this.onPjaxStart), 
      this.activityContainer.on("pjax:end", this.onPjaxEnd), this.listenTo(window, "hashchange", this.switchPanel), 
      this.get(".current-activity video").size() && this.get(".current-activity video").get(0).addEventListener("ended", this.loadInstructionControls), 
      location.hash && this.switchPanel(), _.delay(this.loadFilters, 100);
    }
    return e(r, i), r.prototype.pendingReviewClass = "pending-review", r.prototype.sessionReminderClass = "session-reminder", 
    r.prototype.overviewPanel = "overview", r.prototype.mentorshipPanel = "mentorship", 
    r.prototype.reviewPanel = "review", r.prototype.ratingInput = "degree_mentorship_session_review[rating]", 
    r.prototype.reviewConfirmationPanel = "review-confirmation", r.prototype.loadFilters = function() {
      return this.filters || (this.filters = new Filters({
        basePath:"home",
        container:"[data-degree-activity-container]",
        binds:{
          view:Featurette.get("view")
        }
      }));
    }, r.prototype.onPjaxStart = function() {
      return this.activityContainer.addClass("transparent-while-loading");
    }, r.prototype.onPjaxEnd = function() {
      return this.activityContainer.removeClass("transparent-while-loading");
    }, r.prototype.switchPanel = function(t) {
      return location.hash && (t = location.hash.replace("#", "")), !!this.get("[data-panel='" + t + "']").length && (this.get("[data-panel]").hide(), 
      this.get("[data-panel='" + t + "']").show(), t !== this.overviewPanel ? this.get("[data-panel='" + this.mentorshipPanel + "']").show() :void 0);
    }, r.prototype.dismissActivityAlert = function(t) {
      return t.preventDefault(), $(t.currentTarget).parents("[data-degree-activity-container]").addClass("degree-activity-alert-dismissed"), 
      $.ajax({
        type:"DELETE",
        url:"/home/dismiss-activity-alert",
        data:{
          alert:$(t.target).data("degree-activity-alert-dismiss")
        }
      });
    }, r.prototype.enableReviewForm = function(t) {
      var e;
      return e = $(t.currentTarget), e.closest("form").find("[disabled]").removeAttr("disabled");
    }, r.prototype.submitReviewForm = function(t) {
      var e;
      return e = $(t.currentTarget), t.preventDefault(), $.ajax({
        url:e.attr("action"),
        type:e.attr("method"),
        data:e.serialize(),
        beforeSend:function(t) {
          return function() {
            return e.find(".error").hide(), t.panelsParent.addClass("loading");
          };
        }(this),
        success:function(t) {
          return function() {
            return t.panelsParent.removeClass("loading"), t.resetReviewClass(), location.hash = t.reviewConfirmationPanel;
          };
        }(this),
        error:function(t) {
          return function() {
            return e.find(".error").show(), t.panelsParent.removeClass("loading");
          };
        }(this)
      });
    }, r.prototype.scheduleSession = function() {
      return this.get('[data-panel="schedule"]').hide(), this.get('[data-panel="schedule-confirmation"]').show();
    }, r.prototype.resetReviewClass = function() {
      return this.get("." + this.pendingReviewClass).removeClass(this.pendingReviewClass);
    }, r.prototype.loadInstruction = function(t) {
      var e, i;
      return e = $(t.target).closest(".curriculum-activity").find(".instruction-video"), 
      i = $(t.target).closest(".curriculum-activity").find(".instructable"), e.addClass("active"), 
      e.find("video").trigger("play"), i.addClass("active");
    }, r.prototype.hideInstruction = function(t) {
      var e, i;
      return e = $(t.target).closest(".curriculum-activity").find(".instruction-video"), 
      i = $(t.target).closest(".curriculum-activity").find(".instructable"), e.removeClass("active"), 
      e.find("video").trigger("pause"), i.removeClass("active");
    }, r.prototype.completeInstruction = function(t) {
      var e, i;
      return t.preventDefault(), i = $(t.target), e = i.closest(".degree-activity-item"), 
      $.ajax({
        type:"PUT",
        url:i.attr("data-instruction-complete-url"),
        success:function(t) {
          return t && e.next().replaceWith(t), e.remove();
        }
      });
    }, r.prototype.loadInstructionControls = function() {
      return this.get(".completed-overlay").addClass("active");
    }, r.prototype.replayCurrentInstructionVideo = function(t) {
      return t.preventDefault(), this.get(".completed-overlay").removeClass("active"), 
      $(t.target).closest(".current-activity").find("video").trigger("play");
    }, r.prototype.acknowledgeCompletedProject = function(t) {
      var e;
      return t.preventDefault(), e = $(t.currentTarget), e.closest("[data-degree-activity-item]").addClass("degree-activity-item-dismissed"), 
      $.ajax({
        type:"PUT",
        url:e.attr("data-acknowledge-url")
      });
    }, r.prototype.toggleCompletedList = function(t) {
      return $(t.currentTarget).parent(".degree-completed-activities").toggleClass("active");
    }, r.prototype.dismissNewBadgeOnPeerReviewTabHeader = function() {
      return this.get("[data-peer-review-tab-header-new-badge]").hide();
    }, r.prototype.toggleCardOpen = function(t) {
      return $(t.target).closest(".card-box").toggleClass("card-degree-open");
    }, r;
  }(Treehouse.View), Featurette.register("dashboard/degree/home", Treehouse.Degree.Dashboard);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.Degree && (Treehouse.Degree = {}), Treehouse.Degree.CodeReviewNavigation = function(i) {
    function r() {
      this.toggleLoading = t(this.toggleLoading, this), r.__super__.constructor.apply(this, arguments), 
      this.pjaxContainer = $("[data-pjax-container]"), this.pjaxContainer.on("pjax:start", this.toggleLoading), 
      this.pjaxContainer.on("pjax:end", this.toggleLoading), this.on("click", "[data-pjax-click]", this.handlePjaxNav);
    }
    return e(r, i), r.prototype.toggleLoading = function() {
      return this.get(".breadcrumb-title-icon").toggle(), this.pjaxContainer.toggleClass("transparent-while-loading");
    }, r.prototype.handlePjaxNav = function(t) {
      return $.pjax.click(t, {
        container:"[data-pjax-container]",
        fragment:"[data-pjax-container]"
      });
    }, r;
  }(Treehouse.View), Featurette.register("degree/code-review-navigation", Treehouse.Degree.CodeReviewNavigation);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.Degree && (Treehouse.Degree = {}), Treehouse.Degree.CodeReviewGradeForm = function(i) {
    function r() {
      this.boilerplateComments = t(this.boilerplateComments, this), this.matchesAnyBoilerplate = t(this.matchesAnyBoilerplate, this), 
      this.loadCommentsBoilerplate = t(this.loadCommentsBoilerplate, this), this.loadOverallFeedback = t(this.loadOverallFeedback, this), 
      this.validateComments = t(this.validateComments, this), this.validateTimeSpent = t(this.validateTimeSpent, this), 
      this.validateGrade = t(this.validateGrade, this), this.isValid = t(this.isValid, this), 
      this.handleSubmit = t(this.handleSubmit, this), this.enableSubmitButton = t(this.enableSubmitButton, this), 
      this.handleReviewChanged = t(this.handleReviewChanged, this), this.handleGradeChanged = t(this.handleGradeChanged, this), 
      this.navigationAlert = t(this.navigationAlert, this), this.navigationAlertPjax = t(this.navigationAlertPjax, this), 
      r.__super__.constructor.apply(this, arguments), this.on("change", "[data-grade-radio]", this.handleGradeChanged), 
      this.on("input", "[data-billable-minutes]", this.handleReviewChanged), this.on("change keyup paste", "[data-comments]", this.handleReviewChanged), 
      this.on("click", "[data-toggle-feedback]", this.togglePreviousFeedback), this.on("submit", this.handleSubmit), 
      $("[data-pjax-container]").on("pjax:beforeSend", this.navigationAlertPjax), $(window).on("beforeunload", this.navigationAlert), 
      this.handleReviewChanged(), this.loadOverallFeedback(), this.isContentChanged = !1;
    }
    return e(r, i), r.prototype.navigationAlertPjax = function(t) {
      if (this.isContentChanged) return confirm("If you leave now, you'll lose your progress!\nAre you sure you want to leave?") ? (this.isContentChanged = !1, 
      !0) :t.preventDefault();
    }, r.prototype.navigationAlert = function() {
      if (this.isContentChanged) return "If you leave now, you'll lose your progress!";
      window.onbeforeunload = null;
    }, r.prototype.handleGradeChanged = function() {
      return this.isContentChanged = !0, this.loadCommentsBoilerplate(), this.handleReviewChanged();
    }, r.prototype.handleReviewChanged = function() {
      return this.isContentChanged = !0, this.enableSubmitButton();
    }, r.prototype.enableSubmitButton = function() {
      var t;
      return t = this.get("[data-submit-button]"), t.prop("disabled", !this.isValid()), 
      t.toggleClass("disabled", !this.isValid());
    }, r.prototype.handleSubmit = function(t) {
      if (this.isContentChanged = !1, this.data.pjaxSubmit) return t.preventDefault(), 
      $.pjax.submit(t, {
        container:"[data-pjax-container]",
        fragment:"[data-pjax-container]"
      });
    }, r.prototype.togglePreviousFeedback = function(t) {
      return t.preventDefault(), $(t.currentTarget).parent().toggleClass("close");
    }, r.prototype.isValid = function() {
      return this.validateGrade() && this.validateTimeSpent() && this.validateComments();
    }, r.prototype.validateGrade = function() {
      var t;
      return t = this.get("[data-grade-radio]"), 0 === t.length || t.is(":checked");
    }, r.prototype.validateTimeSpent = function() {
      var t;
      return t = this.get("[data-billable-minutes]"), 0 === t.length || parseInt(t.val()) >= 0;
    }, r.prototype.validateComments = function() {
      var t;
      return t = this.get("[data-comments]"), 0 === t.length || t.val().trim().length > 0;
    }, r.prototype.loadOverallFeedback = function() {
      var t, e;
      if (t = this.get("[data-comments]"), e = this.get("[data-feedback-template]").text()) return t.val(e), 
      this.isContentChanged = !0, this.enableSubmitButton();
    }, r.prototype.loadCommentsBoilerplate = function() {
      var t, e, i, r;
      if (r = $("[data-grade-radio]:checked").val().replace("_", "-"), e = this.get("[data-comments]"), 
      i = e.val(), !i.trim().length || this.matchesAnyBoilerplate(i)) return t = this.get("[data-boilerplate-" + r + "]").text(), 
      e.val(t);
    }, r.prototype.matchesAnyBoilerplate = function(t) {
      return $.inArray(t, this.boilerplateComments()) > -1;
    }, r.prototype.boilerplateComments = function() {
      return [ this.get("[data-boilerplate-needs-work]").text(), this.get("[data-boilerplate-meets-expectations]").text(), this.get("[data-boilerplate-exceeds-expectations]").text() ];
    }, r;
  }(Treehouse.View), Featurette.register("degree/code-review-grade-form", Treehouse.Degree.CodeReviewGradeForm);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.Degree && (Treehouse.Degree = {}), Treehouse.Degree.CodeReviewRating = function(i) {
    function r() {
      this.submitRatingForm = t(this.submitRatingForm, this), this.handleRatingChanged = t(this.handleRatingChanged, this), 
      r.__super__.constructor.apply(this, arguments), this.on("submit", "form", this.submitRatingForm), 
      this.on("change", "input:radio", this.handleRatingChanged);
    }
    return e(r, i), r.prototype.handleRatingChanged = function() {
      return this.get("[data-comment-panel]").show();
    }, r.prototype.submitRatingForm = function(t) {
      var e;
      return e = $(t.currentTarget), t.preventDefault(), $.ajax({
        url:e.attr("action"),
        type:e.attr("method"),
        data:e.serialize(),
        beforeSend:function(t) {
          return function() {
            return e.find(".error").hide(), t.get("input[type=submit]").attr("value", "Loading...").addClass("disabled");
          };
        }(this),
        success:function(t) {
          return function() {
            return t.el.addClass("submitted"), t.get("[data-thank-you-panel]").show(), t.get("[data-low-rating-panel]").toggle(t.isOneStarRating()), 
            t.get("[data-comment-panel]").hide(), t.get("input[type=submit]").attr("value", "Submit").removeClass("disabled");
          };
        }(this),
        error:function(t) {
          return function() {
            return e.find(".error").show(), t.get("input[type=submit]").attr("value", "Submit").removeClass("disabled");
          };
        }(this)
      });
    }, r.prototype.isOneStarRating = function() {
      return $("input#star-rating-1:checked").length > 0;
    }, r;
  }(Treehouse.View), Featurette.register("degree/code-review-rating", Treehouse.Degree.CodeReviewRating);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Degree.ProjectSubmissionForm = function(i) {
    function r() {
      this.submit = t(this.submit, this), r.__super__.constructor.apply(this, arguments), 
      this.on("submit", "form", this.submit), this.on("pjax:error", this.error);
    }
    return e(r, i), r.prototype.submit = function(t) {
      return t.preventDefault(), this.get("#confirm_original_work").is(":checked") ? $.pjax.submit(t, "#project-submission-content", {
        fragment:"#project-submission-content",
        push:!1,
        scrollTo:!1
      }) :(alert("Please confirm that the project you are submitting is your original work before continuing."), 
      !1);
    }, r.prototype.error = function() {
      return window.location.pathname = "/500";
    }, r;
  }(Treehouse.View), Featurette.register("degree/project-submission-form", Treehouse.Degree.ProjectSubmissionForm);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.Degree && (Treehouse.Degree = {}), Treehouse.Degree.TestResultsDispute = function(i) {
    function r() {
      this.submitDisputeForm = t(this.submitDisputeForm, this), this.updateSubmitButton = t(this.updateSubmitButton, this), 
      this.showDisputeForm = t(this.showDisputeForm, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", ".pt-dispute-button", this.showDisputeForm), this.on("change", "textarea", _.throttle(this.updateSubmitButton, 100)), 
      this.on("keyup", "textarea", _.throttle(this.updateSubmitButton, 100)), this.updateSubmitButton();
    }
    return e(r, i), r.prototype.showDisputeForm = function(t) {
      return t.preventDefault(), this.get("[data-comment-panel]").show();
    }, r.prototype.updateSubmitButton = function() {
      var t;
      return t = "" === this.get("textarea").val().trim(), this.get("input[type=submit]").prop("disabled", t).toggleClass("disabled", t);
    }, r.prototype.submitDisputeForm = function(t) {
      return t.preventDefault(), $(t.currentTarget);
    }, r;
  }(Treehouse.View), Featurette.register("degree/test-results-dispute", Treehouse.Degree.TestResultsDispute);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.Account && (Treehouse.Account = {}), Treehouse.Account.Enrollment = function(i) {
    function r() {
      this.degreeTotalPriceElement = t(this.degreeTotalPriceElement, this), this.setCurrentDegreeDetails = t(this.setCurrentDegreeDetails, this), 
      this.getCurrentDegreeDetails = t(this.getCurrentDegreeDetails, this), this.restoreDegreeDetails = t(this.restoreDegreeDetails, this), 
      this.saveDegreeDetails = t(this.saveDegreeDetails, this), this.selectCurrentDegree = t(this.selectCurrentDegree, this), 
      this.setActionButtonDefaultState = t(this.setActionButtonDefaultState, this), this.setActionButtonEnablement = t(this.setActionButtonEnablement, this), 
      this.handleDegreeSelection = t(this.handleDegreeSelection, this), this.togglePlanPanel = t(this.togglePlanPanel, this), 
      this.showTechdegreePanel = t(this.showTechdegreePanel, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", "a[data-select-techdegree]", this.togglePlanPanel), this.on("click", "button[data-cancel-techdegree-selection]", this.togglePlanPanel), 
      this.on("change", ".plan-techdegree-selection-list input", this.handleDegreeSelection), 
      this.on("change", ".techdegree-price-selection-item input", this.showTechdegreePanel);
    }
    return e(r, i), r.prototype.showTechdegreePanel = function() {
      var t;
      return t = this.selectedPriceTierElement().data("priceTier") || "plan_addons_tier_199", 
      this.get(".techdegree-topic-selection").removeClass("hidden"), this.get("[data-degree-price-tier]").hide(), 
      this.get("[data-degree-price-tier=" + t + "]").show();
    }, r.prototype.togglePlanPanel = function(t) {
      var e;
      return t.preventDefault(), e = this.get(".plan-techdegree-selection"), e.is(":visible") ? (this.restoreDegreeDetails(), 
      this.get("a[data-select-techdegree]").removeClass("disabled"), this.get("input[name=techdegree-selection]").prop("checked", !1), 
      this.get("a[data-enroll-techdegree]").addClass("disabled"), $("html, body").animate({
        scrollTop:0
      }, "slow")) :(this.get("[data-degree-referral-info]").hide(), this.saveDegreeDetails(), 
      this.get("a[data-select-techdegree]").addClass("disabled"), this.selectCurrentDegree(), 
      this.setActionButtonDefaultState(), this.showTechdegreePanel()), e.toggle();
    }, r.prototype.handleDegreeSelection = function() {
      var t;
      return t = this.selectedTechdegreeElement(), this.setCurrentDegreeDetails({
        title:t.data("degreeTitle"),
        totalPrice:t.data("degreeTotalPrice"),
        alternatePrice:t.data("degreeAlternatePrice"),
        price:t.data("degreePrice")
      }), this.setActionButtonEnablement(t);
    }, r.prototype.setActionButtonEnablement = function(t) {
      var e;
      return t.data("degreeId"), e = t.data("planAddonId"), this.data.currentPlanAddonId === e ? (this.setActionButtonDefaultState(), 
      this.get("[data-degree-referral-info]").hide()) :(this.get("[data-enroll-techdegree]").hide(), 
      this.get("[data-enroll-techdegree=" + e + "]").show().removeClass("disabled"), this.get("[data-degree-referral-info]").show());
    }, r.prototype.setActionButtonDefaultState = function() {
      return this.get("[data-enroll-techdegree]").hide().addClass("disabled"), this.get("[data-enroll-techdegree]").first().show();
    }, r.prototype.selectCurrentDegree = function() {
      if (this.data.currentPriceTier && this.data.currentPlanAddonId) return this.get("li[data-price-tier='" + this.data.currentPriceTier + "'] input").prop("checked", !0), 
      this.get("li[data-plan-addon-id='" + this.data.currentPlanAddonId + "'] input").prop("checked", !0), 
      this.showTechdegreePanel();
    }, r.prototype.selectedPriceTierElement = function() {
      return $("input[name=techdegree-price-selection]:checked").closest("li");
    }, r.prototype.selectedTechdegreeElement = function() {
      return $("input[name=techdegree-selection]:checked").closest("li");
    }, r.prototype.saveDegreeDetails = function() {
      return this.savedDegreeDetails = this.getCurrentDegreeDetails();
    }, r.prototype.restoreDegreeDetails = function() {
      return this.savedDegreeDetails && this.setCurrentDegreeDetails(this.savedDegreeDetails), 
      this.savedDegreeDetails = null;
    }, r.prototype.getCurrentDegreeDetails = function() {
      var t;
      return t = this.get(".plan-techdegree"), {
        title:t.find("[data-selected-degree-title]").text(),
        totalPrice:this.degreeTotalPriceElement().text(),
        alternatePrice:t.find("[data-selected-degree-alternate-price]").text(),
        price:t.find("[data-selected-degree-price]").text()
      };
    }, r.prototype.setCurrentDegreeDetails = function(t) {
      return this.get(".plan-selected-degree").text(t.title), this.degreeTotalPriceElement().text(t.totalPrice), 
      this.get(".plan-techdegree").find("[data-selected-degree-price]").text(t.price), 
      this.get(".plan-techdegree").find("[data-selected-degree-alternate-price]").text(t.alternatePrice);
    }, r.prototype.degreeTotalPriceElement = function() {
      return this.data.onTechdegree ? this.get(".plan-techdegree").find("[data-plan-total-price]") :this.get(".plan-techdegree").find("[data-selected-degree-total-price]");
    }, r;
  }(Treehouse.View), Featurette.register("account/enrollment", Treehouse.Account.Enrollment);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("update-profile-url", Treehouse.Account.UpdateProfileUrl = function(i) {
    function r() {
      this.handleProfileNameChange = t(this.handleProfileNameChange, this), r.__super__.constructor.apply(this, arguments), 
      this.on("keyup", "#person_profile_name", this.handleProfileNameChange);
    }
    return e(r, i), r.prototype.handleProfileNameChange = function() {
      var t, e;
      return t = this.get("#person_profile_name").val(), e = this.get(".profile-url-name"), 
      e.text(t);
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty, r = [].indexOf || function(t) {
    for (var e = 0, i = this.length; e < i; e++) if (e in this && this[e] === t) return e;
    return -1;
  };
  Treehouse.States = function(t) {
    var e;
    return (e = Treehouse.States.instances)[t] || (e[t] = new Treehouse.StateMachine(document, t));
  }, Treehouse.States.instances = {}, Treehouse.onInit(function() {
    var t;
    return t = $("[data-state-group]").map(function(t, e) {
      return $(e).attr("data-state-group");
    }), _.chain(t).uniq().each(function(t) {
      return Treehouse.States(t);
    });
  }), Treehouse.StateMachine = function(i) {
    function s(e, i) {
      if (this.group = i, this.init = t(this.init, this), null == e) throw "Undefined state group `" + this.group + "`";
      s.__super__.constructor.apply(this, arguments), this.functions = {}, this.init(), 
      Treehouse.onInit(this.init);
    }
    return e(s, i), s.prototype.init = function() {
      if (this.states = this.get("[data-state-group='" + this.group + "'][data-state]").map(function(t, e) {
        return $(e).attr("data-state");
      }), this.stopListening(), this.listeners(), this.transitionIn = function(t) {
        return t.show(), t.addClass("active");
      }, this.transitionOut = function(t) {
        return t.hide(), t.removeClass("active");
      }, this.states[0] && !this.currentState) return this.transition(this.states[0]);
    }, s.prototype.listeners = function() {
      return this.listenTo("[data-state-transition-next='" + this.group + "']", "click", function(t) {
        return function(e) {
          var i;
          return e.preventDefault(), i = _.indexOf(t.states, t.currentState), i !== t.states.length - 1 ? t.transition(t.states[i + 1]) :t.transition(t.states[0]);
        };
      }(this)), this.listenTo("[data-state-transition-previous='" + this.group + "']", "click", function(t) {
        return function(e) {
          var i;
          return e.preventDefault(), i = _.indexOf(t.states, t.currentState), 0 !== i ? t.transition(t.states[i - 1]) :t.transition(t.states[t.states.length - 1]);
        };
      }(this)), this.listenTo("[data-state-group='" + this.group + "'][data-state-transition]", "click", function(t) {
        return function(e) {
          return e.preventDefault(), t.transition($(e.currentTarget).attr("data-state-transition"));
        };
      }(this));
    }, s.prototype.transition = function(t) {
      var e;
      if (r.call(this.states, t) < 0) throw "Undefined state `" + t + "`";
      if (t !== this.currentState) return this.transitionOut(this.get("[data-state-group='" + this.group + "'][data-state][data-state!='" + t + "']")), 
      this.transitionIn(this.get("[data-state-group='" + this.group + "'][data-state='" + t + "']")), 
      "function" == typeof (e = this.functions)[t] && e[t](), _.each(this.states, function(e) {
        return function(i) {
          return $("[data-state-group='" + e.group + "'][data-state-transition='" + i + "']").toggleClass("active", i === t);
        };
      }(this)), this.currentState = t, $(document).trigger("transition:" + this.group + ":" + t);
    }, s.prototype.on = function(t, e) {
      return this.functions[t] = e;
    }, s.prototype.off = function(t) {
      return this.functions[t] = null;
    }, s;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("welcome-panel", Treehouse.WelcomePanel = function(i) {
    function r() {
      this.closePanel = t(this.closePanel, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", "[data-close-panel]", this.closePanel);
    }
    return e(r, i), r.prototype.closePanel = function(t) {
      return t.preventDefault(), this.el.cssAnimate(290).addClass("closed"), $.post(this.data.url, {
        key:this.data.key
      });
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("filter-select", function(i) {
    function r() {
      this.refresh = t(this.refresh, this), this.updateSelectValue = t(this.updateSelectValue, this), 
      r.__super__.constructor.apply(this, arguments), this.on("change", this.refresh), 
      this.path = window.location.pathname, this.updateSelectValue();
    }
    return e(r, i), r.prototype.updateSelectValue = function() {
      var t, e;
      if ((e = this.path.indexOf(this.data.filter + ":")) > 1) return t = this.path.substr(e + this.data.filter.length + 1), 
      this.el.val(t);
    }, r.prototype.refresh = function() {
      return window.location = "/" + this.data.path + "/" + this.data.filter + ":" + this.el.val();
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("control-bar", Treehouse.ControlBar = function(i) {
    function r() {
      this.updateFilterLabel = t(this.updateFilterLabel, this), this.updateFilterLabels = t(this.updateFilterLabels, this), 
      this.findDropdownMenu = t(this.findDropdownMenu, this), this.hideAllDropdowns = t(this.hideAllDropdowns, this), 
      this.hideAllDropdownsUnlessFilterForm = t(this.hideAllDropdownsUnlessFilterForm, this), 
      this.toggleDropdown = t(this.toggleDropdown, this), r.__super__.constructor.apply(this, arguments), 
      this.container = this.get(".search-container"), this.on("click", ".dropdown-parent-label", this.toggleDropdown), 
      this.listenTo(document, "click", this.hideAllDropdownsUnlessFilterForm), this.listenTo(document, "filters:serialized", this.updateFilterLabels);
    }
    return e(r, i), r.prototype.toggleDropdown = function(t) {
      var e;
      return e = this.findDropdownMenu($(t.target)), e.is(":visible") ? e.hide() :(this.hideAllDropdowns(), 
      e.show()), !1;
    }, r.prototype.hideAllDropdownsUnlessFilterForm = function(t) {
      var e;
      if (e = this.get(".filter-form"), !e.is(t.target) && 0 === e.has(t.target).length) return this.hideAllDropdowns();
    }, r.prototype.hideAllDropdowns = function() {
      return this.get(".filter-dropdown").hide();
    }, r.prototype.findDropdownMenu = function(t) {
      return t.is("a") ? t.siblings(".filter-dropdown") :t.parent().siblings(".filter-dropdown");
    }, r.prototype.updateFilterLabels = function() {
      return _.each($(".dropdown-parent-label"), this.updateFilterLabel);
    }, r.prototype.updateFilterLabel = function(t) {
      var e, i;
      return e = $(t), i = e.siblings("ul").find("li a.selected").text(), e.find(".currently-selected").text("" + i);
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("form-select", Treehouse.FormSelect = function(i) {
    function r() {
      this.toggleEmptyState = t(this.toggleEmptyState, this), r.__super__.constructor.apply(this, arguments), 
      this.options = this.el.children(), this.on("change", this.toggleEmptyState), this.el.chosen({
        allow_single_deselect:!0,
        display_selected_options:!1,
        single_backstroke_delete:!1,
        disable_search:this.el.is('[data-search="disabled"]'),
        width:"100%"
      });
    }
    return e(r, i), r.prototype.toggleEmptyState = function() {
      var t;
      return t = this.el.val(), this.el.next().toggleClass("chosen-drop-empty", null !== t && t.length === this.options.length);
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t, e;
  e = function(t, e) {
    var i;
    return null == e && (e = {}), i = {}, $.each(t.data(), function(t, e) {
      var r;
      if (null !== (r = t.match(/analytics([^Event][A-Za-z].*)/))) return i[r[1].toLowerCase()] = e;
    }), delete i.initialized, _.extend(i, e);
  }, t = function() {
    return $("[data-analytics-event]").each(function() {
      var t, i, r;
      if (i = $(this), !0 !== i.data("analyticsInitialized")) return r = i.data("analyticsEvent"), 
      t = i.data("analyticsAction"), "clicked" === t ? "undefined" != typeof analytics && null !== analytics && analytics.trackLink(i, r, function() {
        return e(i);
      }) :"clicked:internal" === t ? i.on("click", function() {
        return "undefined" != typeof analytics && null !== analytics ? analytics.track(r, e(i, {
          action:"clicked"
        })) :void 0;
      }) :"viewed" === t ? "undefined" != typeof analytics && null !== analytics && analytics.track(r, e(i)) :"closed" === t && i.is("a") ? "undefined" != typeof analytics && null !== analytics && analytics.trackLink(i, r, function() {
        return e(i);
      }) :console.warn("Could not initialize analytics, please provide a recognized data-analytics-action. Provided: " + t + " Element: ", i), 
      i.data("analyticsInitialized", !0);
    });
  }, $(document).ready(t), $(document).on("pjax:success", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Layout = function(i) {
    function r() {
      this.moveMarkupToTarget = t(this.moveMarkupToTarget, this), this.moveMarkupOnTabletBreakpoint = t(this.moveMarkupOnTabletBreakpoint, this), 
      this.isMobile = t(this.isMobile, this), this.isTablet = t(this.isTablet, this), 
      this.toggleScrollingStates = t(this.toggleScrollingStates, this), this.scrollTo = t(this.scrollTo, this), 
      this.getScrollTop = t(this.getScrollTop, this), this.setScrollTop = t(this.setScrollTop, this), 
      this.hamburgerButtonBlur = t(this.hamburgerButtonBlur, this), this.hamburgerButtonClicked = t(this.hamburgerButtonClicked, this), 
      this.loaded = t(this.loaded, this), this.loading = t(this.loading, this), this.setVariables = t(this.setVariables, this), 
      r.__super__.constructor.apply(this, arguments), this.html = $("html"), this.window = $(window), 
      this.document = $(document), this.elements = {}, this.elements.hero = new Treehouse.Layout.Hero(this.el.find("[data-layout-element=hero]"), this), 
      this.on("click", "[data-hamburger-button]", this.hamburgerButtonClicked), this.listenTo(document, "click", this.hamburgerButtonBlur), 
      this.listenTo(document, "scroll", this.toggleScrollingStates, {
        triggerImmediately:!0
      }), this.listenTo(window, "resize", _.throttle(this.setVariables, 750), {
        triggerImmediately:!0
      }), this.listenTo(window, "resize", _.throttle(this.moveMarkupOnTabletBreakpoint, 750), {
        triggerImmediately:!0
      }), this.listenTo(window, "load", this.loaded);
    }
    return e(r, i), r.prototype.setVariables = function() {
      return this.windowWidth = this.window.width(), this.windowHeight = this.window.height(), 
      this.documentHeight = this.document.height();
    }, r.prototype.loading = function() {
      return this.el.addClass("loading").removeClass("loaded");
    }, r.prototype.loaded = function() {
      return this.el.addClass("loaded").removeClass("loading");
    }, r.prototype.hamburgerButtonClicked = function(t) {
      return t.preventDefault(), t.stopPropagation(), this.el.toggleClass("hamburger-button-clicked");
    }, r.prototype.hamburgerButtonBlur = function() {
      return this.el.removeClass("hamburger-button-clicked"), this.get("[data-header]").scrollTop(0);
    }, r.prototype.setScrollTop = function() {
      return this.scrollTop = this.document.scrollTop();
    }, r.prototype.getScrollTop = function() {
      return this.scrollTop;
    }, r.prototype.scrollTo = function(t) {
      return $("html, body").animate({
        scrollTop:t - 70,
        600:600
      });
    }, r.prototype.toggleScrollingStates = function() {
      return this.setScrollTop(), this.el.toggleClass("scrolling", this.getScrollTop() > 0), 
      this.el.toggleClass("scrolling-down", (this.getScrollTop() > this.lastScrollPosition || this.getScrollTop() + this.windowHeight >= this.documentHeight) && this.getScrollTop() > 0), 
      this.el.toggleClass("scrolling-up", this.getScrollTop() < this.lastScrollPosition && this.getScrollTop() > 0 && this.getScrollTop() + this.windowHeight < this.documentHeight), 
      this.lastScrollPosition = this.getScrollTop();
    }, r.prototype.isTablet = function() {
      return this.windowWidth < 959;
    }, r.prototype.isMobile = function() {
      return this.windowWidth < 679;
    }, r.prototype.moveMarkupOnTabletBreakpoint = function() {
      return !this.movedToTarget && this.isTablet() ? (this.moveMarkupToTarget(this.get("[data-markup-move]"), this.get("[data-markup-move-target]")), 
      this.movedToTarget = !0, this.movedToOrigin = !1, this.window.trigger("resize")) :this.movedToOrigin || !this.movedToTarget || this.isTablet() ? void 0 :(this.moveMarkupToTarget(this.get("[data-markup-move-target]"), this.get("[data-markup-move]")), 
      this.movedToTarget = !1, this.movedToOrigin = !0, this.window.trigger("resize"));
    }, r.prototype.moveMarkupToTarget = function(t, e) {
      return e.html(t.contents().clone(!0)), t.html("");
    }, r;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Layout.Hero = function(i) {
    function r(e, i) {
      this.layout = i, this.removeClass = t(this.removeClass, this), this.addClass = t(this.addClass, this), 
      this.onVideoEnd = t(this.onVideoEnd, this), this.onVideoPause = t(this.onVideoPause, this), 
      this.onVideoPlay = t(this.onVideoPlay, this), this.stopVideo = t(this.stopVideo, this), 
      this.stopVideoOnEsc = t(this.stopVideoOnEsc, this), this.playVideo = t(this.playVideo, this), 
      this.scrolling = t(this.scrolling, this), this.addBackground = t(this.addBackground, this), 
      this.addVideoEvents = t(this.addVideoEvents, this), r.__super__.constructor.apply(this, arguments), 
      this.el.length > 0 && (this.on("click", "[data-hero-video-play]", this.playVideo), 
      this.on("click", "[data-hero-video-stop]", this.stopVideo), this.listenTo(document, "scroll", _.throttle(this.scrolling, 150), {
        triggerImmediately:!0
      }), this.listenTo(document, "keyup", this.stopVideoOnEsc), this.addBackground(), 
      this.addVideoEvents());
    }
    return e(r, i), r.prototype.addVideoEvents = function() {
      var t;
      if (t = this.get("video"), t.length > 0) return this.video = t.get(0), this.video.addEventListener("play", this.onVideoPlay), 
      this.video.addEventListener("ended", this.onVideoEnd), this.video.addEventListener("pause", this.onVideoPause), 
      this.listenTo(document, "video-playing", this.onVideoPlay), this.listenTo(document, "video-paused", this.onVideoPause), 
      this.listenTo(document, "video-ended", this.onVideoEnd);
    }, r.prototype.addBackground = function() {
      var t;
      return t = this.get("[data-hero-background]"), t.length > 0 && this.el.css("background-image", "url(" + t.attr("src") + ")"), 
      this.addClass("hero-loaded");
    }, r.prototype.scrolling = function() {
      return this.layout.el.toggleClass("scrolled-past-hero", this.layout.document.scrollTop() > this.el.outerHeight());
    }, r.prototype.playVideo = function() {
      return this.layout.el.hasClass("ipad") ? (this.el.find(".mejs-overlay-play").click(), 
      this.onVideoPlay()) :this.get("video").trigger("play");
    }, r.prototype.stopVideoOnEsc = function(t) {
      if (27 === t.which) return this.stopVideo();
    }, r.prototype.stopVideo = function() {
      return this.get("video").trigger("stop"), this.addClass("hero-video-stopped");
    }, r.prototype.onVideoPlay = function() {
      return this.addClass("hero-video-playing hero-video-in-progress"), this.removeClass("hero-video-played hero-video-paused hero-video-stopped");
    }, r.prototype.onVideoPause = function() {
      return this.addClass("hero-video-paused"), this.removeClass("hero-video-playing");
    }, r.prototype.onVideoEnd = function() {
      if (this.addClass("hero-video-played"), this.removeClass("hero-video-playing hero-video-paused hero-video-in-progress"), 
      this.layout.el.hasClass("ios")) return this.video.webkitExitFullScreen();
    }, r.prototype.addClass = function(t) {
      return this.el.addClass(t), this.layout.el.addClass(t);
    }, r.prototype.removeClass = function(t) {
      return this.el.removeClass(t), this.layout.el.removeClass(t);
    }, r;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Layout.Application = function(i) {
    function r() {
      this.sendAnalyticsEvent = t(this.sendAnalyticsEvent, this), this.showAccountDropdown = t(this.showAccountDropdown, this), 
      this.hideDropdowns = t(this.hideDropdowns, this), this.showDropdown = t(this.showDropdown, this), 
      this.toggleMobileNav = t(this.toggleMobileNav, this), this.scrollToTop = t(this.scrollToTop, this), 
      this.updateHeaderCtaText = t(this.updateHeaderCtaText, this), this.cloneHeaderCta = t(this.cloneHeaderCta, this), 
      r.__super__.constructor.apply(this, arguments), this.header = this.get("[data-header]"), 
      this.headerCta = this.get("[data-header-cta]"), this.on("click", "[data-breadcrumb-link]", this.scrollToTop), 
      this.on("click", "[data-hamburger-button]", this.toggleMobileNav), this.on("click", "[data-dropdown-toggle='profile']", this.showAccountDropdown), 
      this.on("click", "[data-track-analytics]", this.sendAnalyticsEvent), this.listenTo("[data-nav-item]", "dropdown:show", this.showDropdown), 
      this.listenTo(document, "click", this.hideDropdowns), this.listenTo(document, "ready", this.cloneHeaderCta), 
      this.listenTo(window, "resize", _.throttle(this.updateHeaderCtaText, 800), {
        triggerImmediately:!0
      }), this.elements.learningFlowStep = new Treehouse.Layout.Application.LearningFlowStep(this.el.find("[data-layout-element=learning-flow-step]"), this), 
      this.elements.stageProgress = new Treehouse.Layout.Application.StageProgress(this.el.find("[data-layout-element=stage-progress]"), this), 
      this.listenTo(document, "pjax:start", function() {
        return NProgress.start();
      }), this.listenTo(document, "pjax:end", function() {
        return NProgress.done();
      }), NProgress.configure({
        parent:"[data-header]",
        template:'<div class="header-loading-bar" role="bar"></div>',
        trickleRate:.05,
        trickleSpeed:300
      });
    }
    return e(r, i), r.prototype.cloneHeaderCta = function() {
      if (this.headerCta.length > 0) return this.el.addClass("header-has-button"), this.headerCta = this.headerCta.clone(!0), 
      this.headerCta.data("tablet-text", this.headerCta.html()), this.get("[data-nav]").append(this.headerCta.attr({
        "class":"button button-primary header-button"
      }));
    }, r.prototype.updateHeaderCtaText = function() {
      var t;
      return this.headerCta && (t = this.headerCta.data("header-cta-mobile-text")), this.isMobile() && t ? this.headerCta.html(t) :this.headerCta.html(this.headerCta.data("tablet-text"));
    }, r.prototype.scrollToTop = function(t) {
      return t.preventDefault(), this.scrollTo(0);
    }, r.prototype.toggleMobileNav = function() {
      return this.hideDropdowns();
    }, r.prototype.showDropdown = function(t, e) {
      if (e = $(e), !e.hasClass("dropdown-show")) return t.stopPropagation(), e.addClass("dropdown-show").siblings().removeClass("dropdown-show"), 
      this.el.removeClass("hamburger-button-clicked");
    }, r.prototype.hideDropdowns = function() {
      return this.header.find("[data-nav-item]").removeClass("dropdown-show");
    }, r.prototype.showAccountDropdown = function(t) {
      if (!this.isMobile()) return t.preventDefault(), this.showDropdown(t, "[data-nav-item='profile']");
    }, r.prototype.sendAnalyticsEvent = function() {
      var t;
      if (t = [ "eventCategory", "eventAction", "eventLabel", "eventValue" ], this.eventAttrs = _.pick(this.data, t), 
      "undefined" != typeof ga && null !== ga) return ga("send", "event", this.eventAttrs);
    }, r;
  }(Treehouse.Layout), Featurette.register("application-layout", Treehouse.Layout.Application);
}.call(this), function() {
  var t = function(t, i) {
    function r() {
      this.constructor = t;
    }
    for (var s in i) e.call(i, s) && (t[s] = i[s]);
    return r.prototype = i.prototype, t.prototype = new r(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("nav-list-mobile-select", function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.on("change", this.updateWindowLocation);
    }
    return t(i, e), i.prototype.updateWindowLocation = function(t) {
      return window.location = $(t.currentTarget).val();
    }, i;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Layout.Application.LearningFlowStep = function(i) {
    function r(e, i) {
      this.layout = i, this.addPagination = t(this.addPagination, this), this.bindFeedbackFeaturette = t(this.bindFeedbackFeaturette, this), 
      this.onPjaxLoaded = t(this.onPjaxLoaded, this), this.onPjaxLoading = t(this.onPjaxLoading, this), 
      this.setHeight = t(this.setHeight, this), this.onStepCompleted = t(this.onStepCompleted, this), 
      this.onStepFailed = t(this.onStepFailed, this), this.replayVideo = t(this.replayVideo, this), 
      this.showStepRatingForm = t(this.showStepRatingForm, this), r.__super__.constructor.apply(this, arguments), 
      this.el.length > 0 && (this.video = this.el.find("[data-step-video]").get(0), this.on("click", "[data-rate-step]", this.showStepRatingForm), 
      this.on("click", "[data-replay-video]", this.replayVideo), this.on("click", "[data-new-goal]", this.createNewContentSuggestion), 
      this.on("pjax:start", "[data-step-overlay]", this.onPjaxLoading), this.on("pjax:success", "[data-step-overlay]", this.onPjaxLoaded), 
      this.listenTo(window, "resize", _.throttle(this.setHeight, 750)), "Video" === this.data.stepType && this.listenTo(document, "video-ended", this.onStepCompleted), 
      this.listenTo(document, "step-passed", this.onStepCompleted), this.listenTo(document, "step-failed", this.onStepFailed), 
      this.listenTo(document, "transition:learning-flow-overlay:progress-report", this.renderChart));
    }
    return e(r, i), r.prototype.renderChart = function() {
      return Featurette.get("learning-flow-chart").createChart();
    }, r.prototype.showStepRatingForm = function() {
      return this.layout.el.addClass("rate-step"), this.layout.document.trigger("show-step-feedback");
    }, r.prototype.replayVideo = function() {
      return this.layout.el.removeClass("step-completed"), this.video.play();
    }, r.prototype.createNewContentSuggestion = function() {
      return $.ajax({
        type:"PUT",
        url:"/content_suggestion"
      });
    }, r.prototype.onStepFailed = function() {
      return $.pjax({
        push:!1,
        url:this.data.learningFlowStepFailedUrl,
        container:"[data-step-overlay]",
        timeout:0
      }), this.layout.el.addClass("step-failed");
    }, r.prototype.onStepCompleted = function() {
      return $("[data-report-question-link]").hide(), $.pjax({
        push:!1,
        url:this.data.learningFlowStepCompletedUrl,
        container:"[data-step-overlay]",
        timeout:0
      });
    }, r.prototype.setHeight = function() {
      var t, e;
      if (this.pjaxLoaded) return t = [], this.get(".step-overlay-container").each(function(e, i) {
        return t.push($(i).outerHeight());
      }), e = _.max(t), this.get("[data-step-overlay]").css("height", e + 75);
    }, r.prototype.onPjaxLoading = function() {
      return this.layout.el.addClass("step-overlay-loading");
    }, r.prototype.onPjaxLoaded = function() {
      return this.layout.el.addClass("step-completed").removeClass("step-overlay-loading"), 
      this.layout.document.trigger("step-completed"), this.addPagination(), this.bindFeedbackFeaturette(), 
      this.pjaxLoaded = !0, this.setHeight();
    }, r.prototype.bindFeedbackFeaturette = function() {
      return new Treehouse.Layout.Application.LearningFlowStep.Feedback(this.get("[data-step-message=feedback]"), this.layout, this);
    }, r.prototype.addPagination = function() {
      return _.each(this.get(".step-overlay-container"), function() {
        return function(t, e) {
          return $(e).attr("data-state");
        };
      }());
    }, r;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Layout.Application.LearningFlowStep.Feedback = function(i) {
    function r(e, i, s) {
      this.layout = i, this.container = s, this.onCancel = t(this.onCancel, this), this.onDone = t(this.onDone, this), 
      this.toggleLoadingState = t(this.toggleLoadingState, this), this.onError = t(this.onError, this), 
      this.onSuccess = t(this.onSuccess, this), this.onSubmit = t(this.onSubmit, this), 
      this.onRatingChosen = t(this.onRatingChosen, this), this.initLabel = t(this.initLabel, this), 
      r.__super__.constructor.apply(this, arguments), this.trigger = this.container.el.find("[data-rate-step]"), 
      this.initLabel(), this.on("change", ":radio", this.onRatingChosen), this.on("submit", this.onSubmit), 
      this.on("click", "[data-cancel]", this.onCancel), this.on("click", "[data-done]", this.onDone);
    }
    return e(r, i), r.prototype.initLabel = function() {
      return this.label = this.get("[data-step-feedback-label]"), this.label.data("default", this.label.text());
    }, r.prototype.onRatingChosen = function() {
      var t;
      return this.rating = parseInt(this.el.find("input:checked").val()), this.el.addClass("step-rating-chosen"), 
      this.get("[data-submit]").removeAttr("disabled").removeClass("disabled"), t = function() {
        switch (this.rating) {
         case 1:
          return this.label.data("when-rating-chosen").replace(/\{@rating\} stars/, this.rating + " star");

         case 2:
         case 3:
          return this.label.data("when-rating-chosen").replace(/\{@rating\}/, this.rating);

         default:
          return this.label.data("when-rating-chosen").replace(/only \{@rating\}/, this.rating);
        }
      }.call(this), this.label.html(t);
    }, r.prototype.onSubmit = function(t) {
      return t.preventDefault(), $.ajax({
        type:"post",
        url:this.el.attr("action"),
        data:this.el.serialize(),
        success:this.onSuccess,
        error:this.onError,
        beforeSend:this.toggleLoadingState,
        complete:this.toggleLoadingState
      });
    }, r.prototype.onSuccess = function() {
      return this.rating = parseInt(this.el.find("input:checked").val()), this.el.addClass("success"), 
      this.label.html(this.label.data("success")), this.trigger.addClass("step-rated").find("svg").each(function(t) {
        return function(e, i) {
          var r, s;
          return i = $(i), s = i.attr("class"), r = e < t.rating ? s + " has-topic-fill add-" + t.data.topicSlug + "-fill has-topic-stroke add-" + t.data.topicSlug + "-stroke" :s.replace(/has-topic-(.*)|add-(.*)-(.*)/, ""), 
          i.attr("class", r);
        };
      }(this));
    }, r.prototype.onError = function() {
      return this.el.addClass("error"), this.label.html(this.label.data("error"));
    }, r.prototype.toggleLoadingState = function() {
      return this.el.toggleClass("loading");
    }, r.prototype.onDone = function(t) {
      return t.preventDefault(), this.layout.el.removeClass("rate-step"), this.container.el.removeClass("rate-step"), 
      setTimeout(function(t) {
        return function() {
          return t.el.removeClass("success"), t.label.html(t.label.data("default"));
        };
      }(this), 500);
    }, r.prototype.onCancel = function(t) {
      return t.preventDefault(), this.layout.el.removeClass("rate-step"), this.container.el.removeClass("rate-step");
    }, r;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("notifications", Treehouse.Layout.Notifications = function(i) {
    function r() {
      this.markNotificationsRead = t(this.markNotificationsRead, this), this.showNotificationsDropdown = t(this.showNotificationsDropdown, this), 
      r.__super__.constructor.apply(this, arguments), this.dropdown = this.get("[data-notification-dropdown]"), 
      this.ul = this.dropdown.find("> ul"), this.on("click", "[data-dropdown-toggle='notifications']", this.showNotificationsDropdown), 
      this.listenTo(document, "notifications:mark-read", this.markNotificationsRead), 
      Treehouse.personalizationPromise.then(function(t) {
        return function(e) {
          return t.loadedNotifications(e.notifications);
        };
      }(this));
    }
    return e(r, i), r.prototype.loadedNotifications = function(t) {
      return this.document.trigger("notifications:count:set", t.unread_count), this.dropdown.find(".loading").remove(), 
      this.dropdown.append(t.html), this.ul = this.dropdown.find("> ul");
    }, r.prototype.showNotificationsDropdown = function(t) {
      if (this.isTablet() || t.preventDefault(), !this.isTablet() && !this.el.hasClass("dropdown-show")) return t.stopPropagation(), 
      this.el.trigger("dropdown:show", this.el).removeClass("unread"), this.document.trigger("notifications:mark-read");
    }, r.prototype.markNotificationsRead = function() {
      var t, e;
      if (this.el.removeClass("unread"), this.document.trigger("notifications:count:reset"), 
      e = this.ul.find("input").serializeArray(), e.length) return t = "/notifications/mark-read", 
      $.post(t, e, function(t) {
        return function() {
          return t.ul.find(".notification.unread").removeClass("unread"), t.ul.find('input[name="unread[]"]').remove(), 
          !0;
        };
      }(this));
    }, r;
  }(Treehouse.Layout));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("notifications-count", Treehouse.Layout.NotificationsCount = function(i) {
    function r() {
      this.triggerUpdate = t(this.triggerUpdate, this), this.resetCount = t(this.resetCount, this), 
      this.incrementCount = t(this.incrementCount, this), this.setCount = t(this.setCount, this), 
      this.updateNotificationCount = t(this.updateNotificationCount, this), r.__super__.constructor.apply(this, arguments), 
      this.count = 0, this.listenTo(document, "notifications:count:set", this.setCount), 
      this.listenTo(document, "notifications:count:reset", this.resetCount), this.listenTo(document, "notifications:count:increment", this.incrementCount), 
      this.listenTo(document, "notifications:count:updated", this.updateNotificationCount), 
      Tinycon.setOptions({
        colour:"#ffffff",
        background:"#ea6c6c"
      }), Tinycon.setBubble(this.count);
    }
    return e(r, i), r.prototype.updateNotificationCount = function(t, e) {
      return this.el.text(e).parents("li").toggleClass("unread", e > 0), this.el.toggleClass("header-nav-item-notifications-count-double-digits", e >= 10), 
      Tinycon.setBubble(e);
    }, r.prototype.setCount = function(t, e) {
      return this.count = e, this.triggerUpdate();
    }, r.prototype.incrementCount = function() {
      return this.count++, this.triggerUpdate();
    }, r.prototype.resetCount = function(t) {
      return this.setCount(t, 0);
    }, r.prototype.triggerUpdate = function() {
      return this.el.toggleClass("header-nav-item-notifications-count-hidden", 0 === this.count), 
      this.document.trigger("notifications:count:updated", this.count);
    }, r;
  }(Treehouse.Layout));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Layout.Application.StageProgress = function(i) {
    function r(e, i) {
      this.layout = i, this.onVideoEnd = t(this.onVideoEnd, this), this.onVideoTimeUpdate = t(this.onVideoTimeUpdate, this), 
      this.onVideoPlay = t(this.onVideoPlay, this), this.isVideoPlaying = t(this.isVideoPlaying, this), 
      this.cancelPageRefresh = t(this.cancelPageRefresh, this), this.setComplete = t(this.setComplete, this), 
      this.unsetComplete = t(this.unsetComplete, this), this.updateProgress = t(this.updateProgress, this), 
      this.toggleStepIcons = t(this.toggleStepIcons, this), this.listenToEvents = t(this.listenToEvents, this), 
      this.onLoaded = t(this.onLoaded, this), r.__super__.constructor.apply(this, arguments), 
      this.listenTo(document, "stage-progress-loaded", this.onLoaded);
    }
    return e(r, i), r.prototype.onLoaded = function() {
      return this.steps = this.get("[data-stage-progress-item]"), this.stepIconWidth = 42, 
      this.stepDotWidth = 20, this.numberOfSteps = this.steps.length, this.video = this.layout.el.find("video").get(0), 
      this.currentStepRadial = this.get(".current svg.circle-progress"), this.listenToEvents();
    }, r.prototype.listenToEvents = function() {
      if (this.on("click", "li.current", this.cancelPageRefresh), this.listenTo(window, "resize", _.throttle(this.toggleStepIcons, 750), {
        triggerImmediately:!0
      }), this.video && (this.video.addEventListener("play", this.onVideoPlay), this.video.addEventListener("ended", this.onVideoEnd), 
      this.video.addEventListener("timeupdate", _.throttle(this.onVideoTimeUpdate, 2500)), 
      this.isVideoPlaying())) return this.onVideoPlay();
    }, r.prototype.toggleStepIcons = function() {
      return this.el.toggleClass("show-mobile-steps", this.numberOfSteps * this.stepIconWidth > this.el.width() - 250), 
      this.el.toggleClass("hide-dividers", this.numberOfSteps * this.stepDotWidth > this.el.width() - 200);
    }, r.prototype.updateProgress = function(t) {
      var e;
      return this.radialProgress || (this.radialProgress = Featurette.get(this.currentStepRadial.attr("id"))), 
      null != (e = this.radialProgress) ? e.setProgress(t) :void 0;
    }, r.prototype.unsetComplete = function() {
      return this.el.find(".current").removeClass("completed");
    }, r.prototype.setComplete = function() {
      return this.el.find(".current").addClass("completed");
    }, r.prototype.cancelPageRefresh = function(t) {
      return t.preventDefault();
    }, r.prototype.isVideoPlaying = function() {
      return !this.video.paused && !this.video.ended;
    }, r.prototype.onVideoPlay = function() {
      return this.unsetComplete(), this.el.addClass("video-playing");
    }, r.prototype.onVideoTimeUpdate = function() {
      var t;
      return t = this.video.currentTime / this.video.duration * 100, this.updateProgress(t);
    }, r.prototype.onVideoEnd = function() {
      return this.el.removeClass("video-playing"), this.updateProgress(100), this.setComplete();
    }, r;
  }(Treehouse.View);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.showImagePreview = e(this.showImagePreview, this), this.el = $(t), $("#contact-method-selector").on("change", this.contactMethodToggle), 
      $(".radio-replacement-wrapper").on("click", this.replaceRadios), $("#job_company_logo").on("change", this.showImagePreview), 
      this.contactMethodInit(), this.setupRadios();
    }
    return t.prototype.contactMethodInit = function() {
      var t, e;
      return t = $(".contact_email"), e = $(".contact_url"), "" !== e.children("input").val() ? ($("#contact-method-selector").val("url"), 
      t.hide()) :($("#contact-method-selector").val("email"), e.hide());
    }, t.prototype.contactMethodToggle = function() {
      var t;
      return t = $("#contact-method-selector").val(), $("#contact-method-selector-wrapper input").val("").parents(".form-item").hide(), 
      $(".contact_" + t).show();
    }, t.prototype.replaceRadios = function(t) {
      var e;
      return e = $(t.delegateTarget), e.siblings(".radio-replacement-wrapper").removeClass("selected"), 
      e.addClass("selected"), e.find("input[type='radio']").attr("checked", "checked");
    }, t.prototype.setupRadios = function() {
      var t;
      return t = $(".radio-replacement-wrapper input[type='radio']:checked"), 0 === t.length ? $(".radio-collection").each(function(t, e) {
        return $(e).find(":radio").first().attr("checked", "checked").parents(".radio-replacement-wrapper").addClass("selected");
      }) :t.parent().addClass("selected");
    }, t.prototype.highlightRadioContainer = function(t) {
      return $(t).parents(".radio-replacement-wrapper").addClass("selected");
    }, t.prototype.showImagePreview = function(t) {
      if (window.File && window.FileReader && window.FileList && window.Blob) return _.each(t.target.files, function(t) {
        var e;
        return e = new FileReader(), e.onload = function(t) {
          var e;
          return e = $(".company-logo").empty(), $("<img src='" + t.target.result + "' />").appendTo(e).hide().show(250), 
          $(".company-logo").css({
            "background-image":"background-image",
            none:"none"
          });
        }, e.readAsDataURL(t);
      });
    }, t;
  }(), Featurette.register("job-form", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("library-index", function(i) {
    function r() {
      this.dynamicTitle = t(this.dynamicTitle, this), this.noResults = t(this.noResults, this), 
      this.updateBreadcrumb = t(this.updateBreadcrumb, this), this.onPjaxEnd = t(this.onPjaxEnd, this), 
      this.onPjaxStart = t(this.onPjaxStart, this), this.listeners = t(this.listeners, this), 
      r.__super__.constructor.apply(this, arguments), this.container = $("#library-pjax"), 
      _.delay(this.listeners, 100), _.delay(this.dynamicTitle, 200);
    }
    return e(r, i), r.prototype.listeners = function() {
      return this.container.on("pjax:start", this.onPjaxStart), this.container.on("pjax:end", this.onPjaxEnd), 
      this.filters = new Filters({
        basePath:"library",
        container:"#library-pjax",
        binds:{
          topic:Featurette.get("topic"),
          type:Featurette.get("type"),
          q:$("#q"),
          sort:Featurette.get("sort")
        }
      }), this.on("click", ".form-search .search-button", function(t) {
        return function(e) {
          return t.filters.update(e);
        };
      }(this));
    }, r.prototype.onPjaxStart = function() {
      return this.container.addClass("transparent-while-loading");
    }, r.prototype.onPjaxEnd = function() {
      return this.updateBreadcrumb(), this.dynamicTitle(), this.noResults(), this.container.removeClass("transparent-while-loading");
    }, r.prototype.updateBreadcrumb = function() {
      return $(document).trigger("library:updated", "/library");
    }, r.prototype.noResults = function() {
      if ($("#no-results").hide(), 0 === this.container.find(":not(#upcoming-releases) ul.card-list li.card").length) return $("#no-results").stop().show();
    }, r.prototype.dynamicTitle = function() {
      return $(".topic-heading").length > 0 ? $(".primary-heading h1").html("<a class='all-topics' href='/library'><span class='icon icon-left'></span> Library</a>") :$(".primary-heading h1").html("Library"), 
      $(document).on("click", "a.all-topics", function(t) {
        return t.preventDefault(), Featurette.get("topic").val("");
      });
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("tracks-index", function(i) {
    function r() {
      this.onPjaxEnd = t(this.onPjaxEnd, this), this.onPjaxStart = t(this.onPjaxStart, this), 
      this.listeners = t(this.listeners, this), r.__super__.constructor.apply(this, arguments), 
      this.container = $("#tracks-pjax"), _.delay(this.listeners, 100);
    }
    return e(r, i), r.prototype.listeners = function() {
      return this.container.on("pjax:start", this.onPjaxStart), this.container.on("pjax:end", this.onPjaxEnd), 
      this.filters = new Filters({
        basePath:"tracks",
        container:"#tracks-pjax",
        binds:{
          topic:Featurette.get("topic")
        }
      });
    }, r.prototype.onPjaxStart = function() {
      return this.container.addClass("transparent-while-loading");
    }, r.prototype.onPjaxEnd = function() {
      return this.container.removeClass("transparent-while-loading");
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r(t) {
      this.getUrlParameter = e(this.getUrlParameter, this), this.filterChange = e(this.filterChange, this), 
      this.filterOptions = e(this.filterOptions, this), this.setupFilters = e(this.setupFilters, this), 
      r.__super__.constructor.apply(this, arguments), this.baseUrl = $(t).data("refresh-url"), 
      this.setupFilters();
    }
    return i(r, t), r.prototype.setupFilters = function() {
      return _.delay(function(t) {
        return function() {
          return $(".filter-container").on("change", t.filterChange);
        };
      }(this), 100);
    }, r.prototype.filterOptions = function() {
      var t;
      return t = {}, t.search = this.searchInput(), t.sort = Featurette.get("sort"), Featurette.get("filter") && (t.filter = Featurette.get("filter")), 
      t;
    }, r.prototype.filterChange = function(t) {
      var e;
      return $(t.target).attr("id"), e = this.baseUrl + "?sort_by=" + this.getUrlParameter("sort_by", "Video"), 
      this.el.find(".filter-container").each(function() {
        return e = e + "&" + $(this).data("filter-name") + "=" + $(this).find("ul .selected").data("filter-value");
      }), window.location.href = e;
    }, r.prototype.getUrlParameter = function(t, e) {
      var i, r, s, n, o, a;
      for (s = window.location.search.substring(1), a = s.split("&"), i = 0, r = a.length; i < r; i++) if (o = a[i], 
      n = o.split("="), n[0] === t) return n[1];
      return e;
    }, r;
  }(Treehouse.View), Featurette.register("organization-leaderboard", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.listeners = e(this.listeners, this), this.element = $(t), this.container = $("#users-stats-pjax"), 
      _.delay(this.listeners, 100);
    }
    return t.prototype.listeners = function() {
      return this.container.on("pjax:end", this.noResults), this.filters = new Filters({
        basePath:"account/users/stats",
        container:"#users-stats-pjax",
        binds:{
          within:Featurette.get("within")
        }
      });
    }, t;
  }(), Featurette.register("users-stats", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.onPjaxEnd = e(this.onPjaxEnd, this), this.onPjaxStart = e(this.onPjaxStart, this), 
      this.pageNavigation = e(this.pageNavigation, this), this.deleteWorkspace = e(this.deleteWorkspace, this), 
      this.deleteMultipleWorkspaces = e(this.deleteMultipleWorkspaces, this), this.upDateWorkSpaceCapacityCount = e(this.upDateWorkSpaceCapacityCount, this), 
      this.unCheckSelectAllOnPjaxEnd = e(this.unCheckSelectAllOnPjaxEnd, this), this.unCheckSelectAllCheckBox = e(this.unCheckSelectAllCheckBox, this), 
      this.checkSelectAllCheckBox = e(this.checkSelectAllCheckBox, this), this.removeSelectedClass = e(this.removeSelectedClass, this), 
      this.addSelectedClass = e(this.addSelectedClass, this), this.checkedWorkspaces = e(this.checkedWorkspaces, this), 
      this.hideWorkSpaceDeleteBar = e(this.hideWorkSpaceDeleteBar, this), this.selectedWorkspaceCount = e(this.selectedWorkspaceCount, this), 
      this.showWorkSpaceDeleteBar = e(this.showWorkSpaceDeleteBar, this), this.unCheckAllWorkSpaces = e(this.unCheckAllWorkSpaces, this), 
      this.selectAllWorkspaces = e(this.selectAllWorkspaces, this), this.cancelDeleteWorkspaces = e(this.cancelDeleteWorkspaces, this), 
      this.toggleBulkDeleteButtons = e(this.toggleBulkDeleteButtons, this), this.listeners = e(this.listeners, this), 
      r.__super__.constructor.apply(this, arguments), this.container = $("#workspaces-pjax"), 
      this.page = this.container.find('input[name="current_page"]'), this.bulkDeleteButton = $("[data-delete-workspaces-button]"), 
      this.cancelDeleteWorkspacesButton = $("[data-unselect-checked-workspaces]"), this.selectAllWorkspacesCheckbox = $("[data-select-all]"), 
      _.defer(this.listeners);
    }
    return i(r, t), r.prototype.listeners = function() {
      return this.container.on("pjax:start", this.onPjaxStart), this.container.on("pjax:end", this.onPjaxEnd), 
      this.container.on("click", ".workspace-delete", this.deleteWorkspace), this.container.on("click", ".pagination-nav", this.pageNavigation), 
      this.container.on("change", "input:checkbox[name='delete_workspaces[]']", this.toggleBulkDeleteButtons), 
      this.bulkDeleteButton.on("click", this.deleteMultipleWorkspaces), this.cancelDeleteWorkspacesButton.on("click", this.cancelDeleteWorkspaces), 
      this.selectAllWorkspacesCheckbox.on("change", this.selectAllWorkspaces), this.filters = new Filters({
        basePath:"workspaces",
        container:this.container,
        binds:{
          q:this.get("#q"),
          sort:Featurette.get("sort"),
          env:Featurette.get("env"),
          content:Featurette.get("content-filter"),
          page:this.page
        }
      }), $(document).trigger("filters:serialized");
    }, r.prototype.toggleBulkDeleteButtons = function() {
      return this.checkSelectAllCheckBox(), this.removeSelectedClass(), this.addSelectedClass(), 
      this.unCheckSelectAllCheckBox(), this.checkedWorkspaces().length > 0 ? this.showWorkSpaceDeleteBar() :(this.hideWorkSpaceDeleteBar(), 
      this.selectedWorkspaceCount());
    }, r.prototype.cancelDeleteWorkspaces = function() {
      return this.unCheckAllWorkSpaces(), this.hideWorkSpaceDeleteBar(), this.toggleBulkDeleteButtons(), 
      $("[data-select-all]").prop("checked", !1);
    }, r.prototype.selectAllWorkspaces = function() {
      return $("[data-select-all]").is(":checked") ? (this.showWorkSpaceDeleteBar(), $(".workspace-item").addClass("selected-workspace"), 
      $("input:checkbox[name='delete_workspaces[]']").prop("checked", !0), $("[data-selected-count]").html(this.checkedWorkspaces().length + " selected")) :(this.unCheckAllWorkSpaces(), 
      this.hideWorkSpaceDeleteBar(), this.selectedWorkspaceCount());
    }, r.prototype.unCheckAllWorkSpaces = function() {
      return $(".workspace-item").removeClass("selected-workspace"), $("input:checkbox[name='delete_workspaces[]']").prop("checked", !1);
    }, r.prototype.showWorkSpaceDeleteBar = function() {
      return this.selectedWorkspaceCount(), $("[data-hidden-bulk-delete-buttons]").removeClass("hidden"), 
      $("[data-hide-new-workspace-button]").addClass("hidden");
    }, r.prototype.selectedWorkspaceCount = function() {
      return $("[data-selected-count]").html(this.checkedWorkspaces().length + " selected");
    }, r.prototype.hideWorkSpaceDeleteBar = function() {
      return $("[data-hidden-bulk-delete-buttons]").addClass("hidden"), $("[data-hide-new-workspace-button]").removeClass("hidden");
    }, r.prototype.checkedWorkspaces = function() {
      return this.container.find("input:checkbox[name='delete_workspaces[]']:checked");
    }, r.prototype.addSelectedClass = function() {
      return this.checkedWorkspaces().each(function() {
        return $("#workspace-" + $(this).val()).addClass("selected-workspace");
      });
    }, r.prototype.removeSelectedClass = function() {
      return $("[type=checkbox]:not(:checked)").each(function() {
        return $("#workspace-" + $(this).val()).removeClass("selected-workspace");
      });
    }, r.prototype.checkSelectAllCheckBox = function() {
      if (this.checkedWorkspaces().length === $("input:checkbox[name='delete_workspaces[]']").length) return $("input:checkbox[name='select_all']").prop("checked", !0);
    }, r.prototype.unCheckSelectAllCheckBox = function() {
      if ($("input:checkbox[name='delete_workspaces[]']").length > this.checkedWorkspaces().length) return $("input:checkbox[name='select_all']").prop("checked", !1);
    }, r.prototype.unCheckSelectAllOnPjaxEnd = function() {
      return $("input:checkbox[name='select_all']").prop("checked", !1);
    }, r.prototype.upDateWorkSpaceCapacityCount = function(t) {
      var e, i;
      return e = $("[data-workspace-capacity-count]").text(), i = e - t, $("[data-workspace-capacity-count]").text(i);
    }, r.prototype.deleteMultipleWorkspaces = function(t) {
      var e, i, r;
      if (t.preventDefault(), i = $("[data-delete-workspaces-button]").data("url"), r = [], 
      e = this.checkedWorkspaces().each(function() {
        return r.push($(this).val());
      }), confirm("Are you sure you want to delete all " + this.checkedWorkspaces().length + " of these workspaces?")) return $.pjax({
        container:this.container,
        url:i,
        type:"PUT",
        push:!1,
        data:{
          ids:r
        }
      }, this.upDateWorkSpaceCapacityCount(e.length));
    }, r.prototype.deleteWorkspace = function(t) {
      if (t.preventDefault(), confirm("Are you sure you want to delete this workspace entirely?")) return $.pjax({
        container:this.container,
        url:t.currentTarget.href,
        type:"DELETE",
        push:!1,
        timeout:!1,
        data:this.filters.data()
      });
    }, r.prototype.pageNavigation = function(t) {
      var e;
      return t.preventDefault(), (e = t.currentTarget.href.match(/page=(\d*)/)[1]) && this.page.val(parseInt(e)), 
      this.filters.update();
    }, r.prototype.onPjaxStart = function() {
      return this.container.addClass("transparent-while-loading");
    }, r.prototype.onPjaxEnd = function() {
      return this.container.removeClass("transparent-while-loading"), this.toggleBulkDeleteButtons(), 
      this.unCheckSelectAllOnPjaxEnd();
    }, r;
  }(Treehouse.View), Featurette.register("workspaces-index", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("info-tooltip", Treehouse.InfoTooltip = function(i) {
    function r() {
      this.closeToolip = t(this.closeToolip, this), this.toggleTooltip = t(this.toggleTooltip, this), 
      this.hideTooltip = t(this.hideTooltip, this), this.showTooltip = t(this.showTooltip, this), 
      r.__super__.constructor.apply(this, arguments), this.tooltip = this.get(".tooltip"), 
      this.displaying = !1, "click" === this.el.data("event") ? (this.el.on("click", this.toggleTooltip), 
      $(document).on("click", this.closeToolip)) :(this.tooltip.hide(), this.el.on("mouseover", this.showTooltip), 
      this.el.on("mouseout", this.hideTooltip));
    }
    return e(r, i), r.prototype.showTooltip = function(t) {
      if (!this.displaying) return this.tooltip.show(), this.displaying = !0, t.stopPropagation();
    }, r.prototype.hideTooltip = function(t) {
      if (this.displaying) return this.tooltip.hide(), this.displaying = !1, t.stopPropagation();
    }, r.prototype.toggleTooltip = function(t) {
      return t.stopPropagation(), this.tooltip.toggleClass("tooltip-showing").parent().siblings().children().removeClass("tooltip-showing"), 
      this.el.toggleClass("tooltip-showing").siblings().removeClass("tooltip-showing");
    }, r.prototype.closeToolip = function() {
      return this.tooltip.removeClass("tooltip-showing"), this.el.removeClass("tooltip-showing");
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, i) {
    function r() {
      this.constructor = t;
    }
    for (var s in i) e.call(i, s) && (t[s] = i[s]);
    return r.prototype = i.prototype, t.prototype = new r(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("tooltip", Treehouse.Tooltip = function(e) {
    function i(t) {
      var e;
      i.__super__.constructor.apply(this, arguments), this.id = t.id, e = $(t), e.hide(), 
      this.class_to_close = e.attr("data-class-to-close"), e.find(".close-tooltip").click(function(t) {
        return function() {
          return t.close();
        };
      }(this)), "true" !== e.attr("data-hide") && setTimeout(function() {
        return e.fadeIn();
      }, 200);
    }
    return t(i, e), i.prototype.close = function() {
      var t, e;
      if (t = $("#" + this.id), t.fadeOut(), this.class_to_close && $("." + this.class_to_close).fadeOut(), 
      e = t.attr("data-flag")) return $.post("/dashboard/flag", {
        _method:"PUT",
        flag:e
      });
    }, i;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("upgrade-tooltip", function(i) {
    function r() {
      this.init = t(this.init, this), r.__super__.constructor.apply(this, arguments), 
      this.on("pjax:end", _.bind(this.init, this)), this.init();
    }
    return e(r, i), r.prototype.init = function() {
      if (!0 === this.el.data("hide-tooltip")) return this.get(".upgrade-tooltip").remove();
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.removeField = e(this.removeField, this), this.addNewField = e(this.addNewField, this), 
      this.createNestedField = e(this.createNestedField, this), this.el = $(t), this.createNestedField("language", ".add-new-language", ".remove-language", ".profile-languages", "#language-fields-template"), 
      this.createNestedField("award", ".add-new-award", ".remove-award", ".profile-awards", "#award-fields-template"), 
      this.createNestedField("publication", ".add-new-publication", ".remove-publication", ".profile-publications", "#publication-fields-template");
    }
    return t.prototype.createNestedField = function(t, e, i, r, s) {
      if (this.el.on("click", e, {
        title:t,
        templateName:s
      }, this.addNewField), this.el.on("click", i, {
        wrapperClass:r,
        removeLink:i
      }, this.removeField), 1 === this.el.find(r + ":visible").length) return this.el.find(r + ":visible:first " + i).hide();
    }, t.prototype.addNewField = function(t) {
      var e, i, r, s;
      return t.preventDefault(), s = this.el.find(t.data.templateName).html(), i = new Date().getTime(), 
      r = new RegExp("new_" + t.data.title, "g"), e = $(s.replace(r, i)), $(t.currentTarget).before(e), 
      Treehouse.init(), e.find(":input:first").focus();
    }, t.prototype.removeField = function(t) {
      if (t.preventDefault(), $(t.currentTarget).prev("input[type=hidden]").val("1"), 
      $(t.currentTarget).closest("div").hide(), 1 === this.el.find(t.data.wrapperClass + ":visible").length) return this.el.find(t.data.wrapperClass + ":visible:first " + t.data.removeLink).hide();
    }, t;
  }(), Featurette.register("accounts-form", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("analytics-click-event", function(i) {
    function r() {
      this.sendEvent = t(this.sendEvent, this);
      var e;
      r.__super__.constructor.apply(this, arguments), e = [ "eventCategory", "eventAction", "eventLabel", "eventValue" ], 
      this.eventAttrs = _.pick(this.data, e), this.data.target ? this.on("click", this.data.target, this.sendEvent) :this.on("click", this.sendEvent);
    }
    return e(r, i), r.prototype.sendEvent = function() {
      if ("undefined" != typeof ga && null !== ga) return ga("send", "event", this.eventAttrs);
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.success = e(this.success, this), this.listener = e(this.listener, this), this.element = $(t), 
      this.element.click(this.listener);
    }
    return t.prototype.listener = function(t) {
      var e;
      return t.preventDefault(), e = this.element.data("user-id"), $.post("" + window.location.origin + window.location.pathname + "/request_answer", {
        user_id:e
      }, this.success);
    }, t.prototype.success = function() {
      return this.element.text("Asked").addClass("disabled").attr("disabled", "disabled");
    }, t;
  }(), Featurette.register("ask-to-answer", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  Featurette.register("async-icon", Treehouse.AsyncIcon = function() {
    function e(e) {
      this.loadingIcon = t(this.loadingIcon, this), this.loaded = t(this.loaded, this), 
      this.loading = t(this.loading, this), this.el = $(e), this.target = $(this.el.data("target")), 
      this.target.length > 0 && (this.target.on("loading", function(t) {
        return function() {
          return t.loading();
        };
      }(this)), this.target.on("loaded", function(t) {
        return function() {
          return t.loaded();
        };
      }(this)));
    }
    return e.prototype.loading = function() {
      return this.el.css("display", "none"), this.loadingIcon().css("display", "inline-block");
    }, e.prototype.loaded = function() {
      return this.el.css("display", "inline-block"), this.loadingIcon().css("display", "none");
    }, e.prototype.loadingIcon = function() {
      return this.el.siblings(this.el.data("loading-icon"));
    }, e;
  }());
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.strategies = e(this.strategies, this), this.updateElement = e(this.updateElement, this), 
      this.loadElement = e(this.loadElement, this), r.__super__.constructor.apply(this, arguments), 
      this.url = this.data.url, this.strategy = this.data.strategy || "update", this.loadElement();
    }
    return i(r, t), r.prototype.loadElement = function() {
      return $.get(this.url, function(t) {
        return function(e) {
          return t.updateElement(e), t.data.onloadEvent && $(document).trigger(t.data.onloadEvent), 
          Treehouse.init();
        };
      }(this));
    }, r.prototype.updateElement = function(t) {
      return this.strategies()[this.strategy](t);
    }, r.prototype.strategies = function() {
      return {
        update:function(t) {
          return function(e) {
            return t.el.html(e);
          };
        }(this),
        replace:function(t) {
          return function(e) {
            return t.el.replaceWith(e);
          };
        }(this)
      };
    }, r;
  }(Treehouse.View), Featurette.register("async-element", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.CircleProgress = function(i) {
    function r() {
      this.setProgress = t(this.setProgress, this), r.__super__.constructor.apply(this, arguments), 
      this.progress = this.el.data("progress"), this.circumference = this.el.data("diameter") * Math.PI, 
      this.progressBars = this.get("[data-progress-base-overlay], [data-progress-bar]"), 
      this.setProgress(this.progress);
    }
    return e(r, i), r.prototype.setProgress = function(t) {
      return this.progress = t, this.progressBars.attr("stroke-dashoffset", ((100 - this.progress) / 100 * this.circumference).toFixed(3) + "px");
    }, r;
  }(Treehouse.View), Featurette.register("circle-progress", Treehouse.CircleProgress);
}.call(this), function() {
  var t, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.on("click", ".view-all", this.toggleCardVisibility), 
      this.document = $(document);
    }
    return e(i, t), i.prototype.toggleCardVisibility = function(t) {
      var e, i, r;
      return e = $(t.target), i = e.parents(".collapsible-container"), r = i.find("ul.card-list"), 
      r.hasClass("collapsed") ? (r.removeClass("collapsed"), e.text(e.data("view-all-text"))) :(r.addClass("collapsed"), 
      e.text(e.data("view-collapsed-text")));
    }, i;
  }(Treehouse.View), Featurette.register("collapsible-card-list", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      return this.playVideo = e(this.playVideo, this), this.closeOverlay = e(this.closeOverlay, this), 
      r.__super__.constructor.apply(this, arguments);
    }
    return i(r, t), r.prototype.closeOverlay = function() {
      var t;
      return r.__super__.closeOverlay.apply(this, arguments), t = Featurette.get(this.el.find("video").attr("id")), 
      t.reset();
    }, r.prototype.playVideo = function() {
      return this.el.find("video").trigger("play");
    }, r;
  }(Treehouse.Modal), Featurette.register("course-trailer-modal", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.onSubmit = e(this.onSubmit, this), this.onAdminRemove = e(this.onAdminRemove, this), 
      this.onAdminSelected = e(this.onAdminSelected, this), r.__super__.constructor.apply(this, arguments), 
      this.el.on("submit", this.onSubmit), this.el.on("change", ".department-admin select", this.onAdminSelected), 
      this.el.on("click", ".remove-field", this.onAdminRemove);
    }
    return i(r, t), r.prototype.onAdminSelected = function(t) {
      var e, i;
      return e = $(t.target), i = e.find(":selected"), this.addRowForAdmin(i), this.disableAdmin(i), 
      this.resetDropdown(e);
    }, r.prototype.addRowForAdmin = function(t) {
      return this.el.find(".department-administrators").append(this.staticRowForAdmin(t));
    }, r.prototype.staticRowForAdmin = function(t) {
      var e, i, r;
      return e = this.el.find("#department-administrator-fields-template").html(), i = new Date().getTime(), 
      e = e.replace(/new_department_administrator/g, i), r = $(e), r.find("input[name*=user_id]").val(t.val()), 
      r.find(".selected-admin").text(t.text()), r;
    }, r.prototype.disableAdmin = function(t) {
      return t.prop("disabled", !0).trigger("chosen:updated");
    }, r.prototype.resetDropdown = function(t) {
      return t.val("").trigger("chosen:updated");
    }, r.prototype.onAdminRemove = function(t) {
      var e, i;
      return t.preventDefault(), e = $(t.target).parents(".department-admin"), i = e.find("input[name*=user_id]").val(), 
      e.hide(), e.find("input[name*=_destroy]").val("1"), this.el.find("option[value=" + i + "]").prop("disabled", !1).trigger("chosen:updated");
    }, r.prototype.onSubmit = function(t) {
      var e, i;
      return t.preventDefault(), e = t.currentTarget, null != (i = Featurette.get("layout")) && i.loading(), 
      $.ajax({
        url:e.action,
        type:e.method,
        data:this.el.serialize(),
        success:function() {
          return function() {
            return location.reload();
          };
        }(),
        error:function(t) {
          return function(e) {
            var i;
            return t.el.parent().html(e.responseText), Treehouse.init(), null != (i = Featurette.get("layout")) ? i.loaded() :void 0;
          };
        }(this)
      });
    }, r;
  }(Treehouse.View), Featurette.register("department-form", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.populateMemberOptions = e(this.populateMemberOptions, this), this.updateChosen = e(this.updateChosen, this), 
      this.lookupMembers = e(this.lookupMembers, this), r.__super__.constructor.apply(this, arguments), 
      this.on("chosen:showing_dropdown", this.lookupMembers);
    }
    return i(r, t), r.prototype.lookupMembers = function() {
      return $.ajax({
        url:this.el.data("autocomplete-url"),
        dataType:"json",
        success:this.updateChosen
      });
    }, r.prototype.updateChosen = function(t) {
      return this.populateMemberOptions(t), this.el.trigger("chosen:updated");
    }, r.prototype.populateMemberOptions = function(t) {
      var e;
      return e = t.reduce(function(t, e) {
        return t += "<option value='" + e.value + "'>" + e.label + "</option>";
      }, ""), this.el.html(e);
    }, r;
  }(Treehouse.FormSelect), Featurette.register("department-member-autocomplete", t);
}.call(this), function() {
  var t, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i(t) {
      i.__super__.constructor.apply(this, arguments), this.on("change", function(e, i) {
        if ("Add a department..." === i.selected) return window.location = $(t).data("departments-path");
      });
    }
    return e(i, t), i;
  }(Treehouse.FormSelect), Featurette.register("department-select", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.EditBillingForm = function(i) {
    function r() {
      this.clearFormErrors = t(this.clearFormErrors, this), this.unwrapErrors = t(this.unwrapErrors, this), 
      this.displayValidationError = t(this.displayValidationError, this), this.displayCardTokenizerError = t(this.displayCardTokenizerError, this), 
      this.displayValidationErrors = t(this.displayValidationErrors, this), this.authPaypal = t(this.authPaypal, this), 
      this.setupCardTokenizer = t(this.setupCardTokenizer, this), this.validateFields = t(this.validateFields, this), 
      this.finalizeForm = t(this.finalizeForm, this), this.onFormSubmit = t(this.onFormSubmit, this), 
      this.togglePaymentMethod = t(this.togglePaymentMethod, this), r.__super__.constructor.apply(this, arguments), 
      this.creditCardValidator = new Treehouse.CreditCardValidator(this.el), this.on("change", "input[name='payment_method_type']", this.togglePaymentMethod), 
      this.on("submit", this.onFormSubmit), this.togglePaymentMethod(), this.setupCardTokenizer();
    }
    return e(r, i), r.prototype.togglePaymentMethod = function() {
      switch (this.paymentMethodType = this.get("input[name='payment_method_type']").filter(":checked").val(), 
      this.paymentMethodType) {
       case "paypal":
        return this.get(".credit-card-chosen").hide(), this.get(".paypal-chosen").show();

       case "credit_card":
        return this.get(".paypal-chosen").hide(), this.get(".credit-card-chosen").show();

       case "manual":
        return this.get(".credit-card-chosen").hide(), this.get(".paypal-chosen").show();
      }
    }, r.prototype.onFormSubmit = function(t) {
      if (t.preventDefault(), t.stopPropagation(), "credit_card" === this.paymentMethodType) {
        if (!this.validateFields()) return;
        return this.cardTokenizer.tokenizeCard(this.get("#credit_card_number").val(), this.get("#credit_card_month").val(), this.get("#credit_card_year").val(), this.get("#credit_card_cvv").val());
      }
      if ("paypal" === this.paymentMethodType) return this.authPaypal();
    }, r.prototype.finalizeForm = function() {
      return this.get("#credit_card_number").val(""), this.get("#credit_card_cvv").val(""), 
      this.el.get(0).submit();
    }, r.prototype.validateFields = function() {
      return this.clearFormErrors(), "credit_card" === this.paymentMethodType && this.creditCardValidator.validate(), 
      this.errors = $.extend({}, this.creditCardValidator.errors), !Object.keys(this.errors).length || (this.displayValidationErrors(), 
      !1);
    }, r.prototype.setupCardTokenizer = function() {
      var t;
      return t = this.el.data("tokenizer-config"), this.cardTokenizer = new Treehouse.CreditCardTokenizer(this.el.get(0).id, {
        client_token:t.client_token,
        merchant_id:t.merchant_id,
        environment:BraintreeData.environments[t.environment]
      }, this.finalizeForm);
    }, r.prototype.authPaypal = function() {
      var t;
      return t = this.el.data("tokenizer-config"), braintree.setup(t.client_token, "custom", {
        paypal:{
          headless:!0,
          singleUse:!1,
          locale:"en_US",
          enableShippingAddress:!1
        },
        dataCollector:{
          paypal:!0
        },
        onReady:function() {
          return function(t) {
            return t.paypal.initAuthFlow();
          };
        }(),
        onPaymentMethodReceived:function(t) {
          return function(e) {
            return t.el.find("[data-braintree-name=payment_method_nonce]").val(e.nonce), t.finalizeForm();
          };
        }(this)
      });
    }, r.prototype.displayValidationErrors = function() {
      var t, e, i, r;
      i = this.errors, r = [];
      for (e in i) t = i[e], r.push(this.displayValidationError(this.get("#" + e), t));
      return r;
    }, r.prototype.displayCardTokenizerError = function() {
      return this.displayValidationError(this.get("#credit_card_number"), "There was a problem verifying your credit card details.");
    }, r.prototype.displayValidationError = function(t, e) {
      var i, r;
      return i = t, i.siblings().andSelf().wrapAll('<div class="field_with_errors" />'), 
      r = HoganTemplates["signup/field_error"].render({
        error:e
      }), i.after(r);
    }, r.prototype.unwrapErrors = function() {
      return $(".field_with_errors").each(function() {
        var t;
        return t = $(this), t.find("p.error-message").remove(), t.children().unwrap();
      });
    }, r.prototype.clearFormErrors = function() {
      return this.creditCardValidator.clearErrors(), this.hasErrors = !1, this.unwrapErrors();
    }, r;
  }(Treehouse.View), Featurette.register("edit-billing-form", Treehouse.EditBillingForm);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.listener = e(this.listener, this), this.init = e(this.init, this), r.__super__.constructor.apply(this, arguments), 
      this.filters = "a[data-filter-value]", this.el.on("filter-list:updated", this.init), 
      this.el.trigger("filter-list:updated"), this.initialValue();
    }
    return i(r, t), r.prototype.init = function() {
      return this.get(this.filters).off("click", this.listener).on("click", this.listener);
    }, r.prototype.initialValue = function() {
      var t;
      if ((t = Treehouse.queryString()[this.el.attr("id")]) && this.val(t.replace(/\+/g, " ")), 
      void 0 === this.val()) return this.val("");
    }, r.prototype.listener = function(t) {
      var e;
      return t.preventDefault(), e = $(t.target), this.val(e.data("filter-value"));
    }, r.prototype.val = function(t, e) {
      var i;
      return null == e && (e = !0), void 0 === t ? this.get(this.filters).filter(".selected").first().data("filter-value") :(this.get(this.filters).removeClass("selected"), 
      i = this.get(this.filters).filter("[data-filter-value='" + t + "']"), 1 === i.length && i.addClass("selected"), 
      this.get("[data-filter-list-current-value]").html(i.html()), e ? this.el.trigger("change") :void 0);
    }, r;
  }(Treehouse.View), Featurette.register("filter-list", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r(t) {
      this.removeEmptyCategories = e(this.removeEmptyCategories, this), this.populateTemplateGroup = e(this.populateTemplateGroup, this), 
      this.populateForkedWorkspaceSelect = e(this.populateForkedWorkspaceSelect, this), 
      this.resetTemplateSelect = e(this.resetTemplateSelect, this), this.filterTemplates = e(this.filterTemplates, this), 
      this.id = t.id, r.__super__.constructor.apply(this, arguments), this.forkedWorkspaceSelect = $("select#workspace_forked_workspace_id"), 
      this.imageSelect = $("#image_id"), this.el.on("change", this.filterTemplates), this.populateForkedWorkspaceSelect();
    }
    return i(r, t), r.prototype.filterTemplates = function() {
      var t;
      return this.resetTemplateSelect(), t = $("#image_id").val(), "" !== t && (this.forkedWorkspaceSelect.find("option[data-image-id!='" + t + "']").remove(), 
      this.removeEmptyCategories()), this.forkedWorkspaceSelect.trigger("change");
    }, r.prototype.resetTemplateSelect = function() {
      return this.forkedWorkspaceSelect.empty(), this.populateForkedWorkspaceSelect();
    }, r.prototype.populateForkedWorkspaceSelect = function() {
      var t, e, i;
      t = {
        "Content Templates":this.forkedWorkspaceSelect.data("content-templates"),
        Templates:this.forkedWorkspaceSelect.data("starter-templates"),
        "Your Workspaces":this.forkedWorkspaceSelect.data("user-workspaces")
      };
      for (e in t) i = t[e], this.populateTemplateGroup(e, i);
      return this.removeEmptyCategories();
    }, r.prototype.populateTemplateGroup = function(t, e) {
      var i, r, s, n, o, a;
      for (n = $("<optgroup label='" + t + "'></optgroup>"), this.forkedWorkspaceSelect.append(n), 
      o = [], i = 0, r = e.length; i < r; i++) a = e[i], s = $("<option value='" + a.id + "' data-image-id='" + a.image_id + "'></option>"), 
      s.text(a.title), o.push(n.append(s));
      return o;
    }, r.prototype.removeEmptyCategories = function() {
      return this.forkedWorkspaceSelect.find("optgroup:empty").remove();
    }, r;
  }(Treehouse.View), Featurette.register("filter-workspace-templates", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.setPopoverOffset = e(this.setPopoverOffset, this), this.hideDropdown = e(this.hideDropdown, this), 
      this.listener = e(this.listener, this), r.__super__.constructor.apply(this, arguments), 
      this.listenTo(document, "click", this.hideDropdown), this.$discussionTools = $(".discussion-tools"), 
      this.layout = Featurette.get("layout"), this.popover = this.get(".popover"), this.toggle = this.get(".popover-toggle"), 
      this.on("click", "[data-popover-toggle]", this.listener);
    }
    return i(r, t), r.prototype.listener = function() {
      return this.setPopoverOffset(), this.popover.toggle(), this.toggle.toggleClass("selected");
    }, r.prototype.hideDropdown = function(t) {
      var e;
      if (e = $(t.target).closest(".discussion-tools"), this.$discussionTools.not(e).find(".popover").hide().end().find(".popover-toggle").removeClass("selected"), 
      !e.length) return this.el.find(".popover").hide().end().find(".popover-toggle").removeClass("selected");
    }, r.prototype.setPopoverOffset = function() {
      return this.layout.isMobile() && "comment" !== this.el.data("item-type") ? this.popover.removeClass("popover-offset-right").addClass("popover-offset-left") :this.popover.removeClass("popover-offset-left").addClass("popover-offset-right");
    }, r;
  }(Treehouse.View), Featurette.register("forum-moderation-tools", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.renderRepos = e(this.renderRepos, this), this.getRepos = e(this.getRepos, this), 
      this.el = $(t), this.githubUsername = this.el.data("github-username"), this.githubSection = this.el.find("ul"), 
      this.getRepos(this.githubUsername, this.githubSection, this.renderRepos);
    }
    return t.prototype.getRepos = function(t, e) {
      var i, r;
      return i = "https://api.github.com/users/" + t + "/repos", r = this, $.ajax({
        url:i,
        dataType:"jsonp",
        crossDomain:!0,
        success:function(i) {
          var s;
          return s = i.data, s = $.grep(s, function(t) {
            return !t.fork;
          }), s.sort(function(t, e) {
            return e.watchers_count - t.watchers_count;
          }), s = $(s), r.renderRepos(s, t, e);
        }
      });
    }, t.prototype.renderRepos = function(t, e, i) {
      if (t.length > 0 && (i.parent().removeClass("hidden"), t.each(function(t) {
        var r, s;
        return r = {
          repoName:this.name,
          repoDescription:this.description,
          repoUrl:this.html_url,
          repoForksUrl:this.html_url + "/network",
          repoForks:this.forks + " fork" + (1 === this.forks ? "" :"s"),
          repoStargazersUrl:this.html_url + "/stargazers",
          repoStargazers:this.watchers + " stargazer" + (1 === this.watchers ? "" :"s"),
          repoOwner:this.owner.login === e
        }, s = HoganTemplates["profile/github_repo"].render(r), t > 1 && (s = $(s).hide()), 
        i.append(s);
      }), t.length > 2)) return this.setToggle(i);
    }, t.prototype.setToggle = function(t) {
      return t.parent().find("div.show-all-repos").removeClass("hidden"), t.parent().find("div.show-all-repos a.button").click(function() {
        return function(e) {
          var i;
          return t.find("li.grid-50.tablet-grid-50").slice(2).slideToggle(), i = $(e.target), 
          i.text("See all repositories" === i.text() ? "Hide repositories" :"See all repositories");
        };
      }());
    }, t;
  }(), Featurette.register("github-profile", t);
}.call(this), function() {
  var t;
  t = function() {
    function t(t) {
      this.id = t.id, $(t).find("#contact-form .honey-pot-field").remove(), this.resetContactForm(), 
      $(t).find("#contact-form").submit(function(t) {
        return function(e) {
          return t.handleSubmit(e);
        };
      }(this));
    }
    return t.prototype.resetContactForm = function() {
      var t;
      return t = $("#" + this.id), t.find("#contact-form input").add("#" + this.id + " #contact-form textarea").removeClass("field_with_errors"), 
      t.find(".error-message").hide(), t.find(".message").hide(), window.element = t, 
      this.hasBeenSubmitted && t.find("#contact-form").show(), this.hasBeenSubmitted && t.find(".form-footer .button").show(), 
      this.hasBeenSubmitted = !1;
    }, t.prototype.handleSubmit = function(t) {
      var e;
      return e = $("#" + this.id), this.resetContactForm(), e.find("#contact-form").hide(), 
      e.find(".form-footer .button").hide(), e.find(".message.waiting").show(), $.ajax({
        url:"/contact.json",
        type:"POST",
        dataType:"json",
        data:e.find("form").serialize(),
        error:function() {
          return function() {
            return e.find(".message").hide(), e.find(".message.error").show();
          };
        }(),
        success:function(t) {
          return function(i) {
            return e.find(".message").hide(), $.isEmptyObject(i.errors) ? (e.find(".message.success").show(), 
            t.hasBeenSubmitted = !0, e.find("#contact-form textarea").val("")) :(e.find(".message.error").show(), 
            e.find("#contact-form").show(), e.find(".form-footer .button").show(), $.each(i.errors, function(t, i) {
              return e.find("#contact_form_" + t).addClass("field_with_errors").closest("div.form-item").find(".error-message").show().text(i[0]);
            }));
          };
        }(this)
      }), t.preventDefault();
    }, t;
  }(), Featurette.register("help-form", t);
}.call(this), function() {
  var t, e, i = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, r = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  e = function(t) {
    function e() {
      this.launch = i(this.launch, this), this.onClick = i(this.onClick, this), e.__super__.constructor.apply(this, arguments), 
      this.setup(), this.el;
    }
    return r(e, t), e.prototype.setup = function() {
      return this.on("click", this.onClick);
    }, e.prototype.onClick = function(t) {
      return this.launch(this.data.id), null != t ? t.preventDefault() :void 0;
    }, e.prototype.launchOpts = "top=100,left=100,height=768,width=1024,scrollbars=0,location=0,menubar=0,toolbar=0", 
    e.prototype.launch = function(t) {
      var e, i, r;
      return e = "/workspaces/" + t, null != this.win ? this.win.location = e :this.win = window.open(e, null, this.launchOpts), 
      null == this.win && alert("It looks like your pop up blocker blocked the workspace window."), 
      this.win = null, null != (i = Featurette.get(this.el.closest(".modal").attr("id"))) && i.closeOverlay(), 
      null != (r = $(".video-alert .alert")) ? r.remove() :void 0;
    }, e;
  }(Treehouse.View), t = function(t) {
    function e() {
      return this.onError = i(this.onError, this), this.onCreate = i(this.onCreate, this), 
      this.submit = i(this.submit, this), e.__super__.constructor.apply(this, arguments);
    }
    return r(e, t), e.prototype.setup = function() {
      return this.on("submit", this.submit), this.resetErrors(), this.callbackUrl = this.data.callbackUrl, 
      this.redirectUrl = this.data.redirect_url;
    }, e.prototype.submit = function(t) {
      var e, i, r, s;
      return this.resetErrors(), s = this.get("#workspace_title"), 0 === s.val().length ? (i = "<span class='error-message'>A title is required</span>", 
      s.addClass("field_with_errors").after(i), null != t && t.preventDefault(), !1) :(this.win = window.open("about:blank", null, this.launchOpts), 
      e = {
        title:s.val(),
        item_type:this.get("#workspace_item_type").val(),
        item_id:this.get("#workspace_item_id").val(),
        forked_workspace_id:this.get("#workspace_forked_workspace_id").val(),
        workspace_template_group_id:this.get("#workspace_workspace_template_group_id").val()
      }, r = this.get("#source").val(), $.ajax({
        url:"/workspaces",
        type:"POST",
        dataType:"json",
        contentType:"application/json",
        processData:!1,
        headers:{
          "X-CSRF-Token":$("meta[name='csrf-token']").attr("content")
        },
        data:JSON.stringify({
          source:r,
          workspace:e
        }),
        success:function(t) {
          return function(e) {
            return t.onCreate(e.workspace);
          };
        }(this),
        error:function(t) {
          return function(e) {
            return t.onError(e);
          };
        }(this)
      }), null != t ? t.preventDefault() :void 0);
    }, e.prototype.onCreate = function(t) {
      return this.launch(t.id), null != this.redirectUrl ? _.delay(function(t) {
        return function() {
          return location.href = t.redirectUrl;
        };
      }(this), 1e3) :location.pathname.match(/^\/workspaces/) ? _.delay(function() {
        return location.reload();
      }, 1e3) :null != this.callbackUrl ? this.performCallback() :void 0;
    }, e.prototype.onError = function(t) {
      var e, i, r, s, n;
      n = $.parseJSON(t.responseText).errors, (i = n.base) && (delete n.base, this.get(".field-container").first().before("<div class='error message'><p>" + i[0] + "</p></div>"));
      for (e in n) r = n[e], this.get("#workspace_" + e).addClass("field_with_errors").after("<span class='error-message'>" + r[0] + "</span>");
      return null != (s = this.win) ? s.close() :void 0;
    }, e.prototype.resetErrors = function() {
      return this.get(".error-message").remove();
    }, e.prototype.performCallback = function() {
      return $.ajax({
        type:"GET",
        url:this.callbackUrl,
        success:function() {
          return function(t) {
            return $("#workspaces-tab-content").html(t), Treehouse.init();
          };
        }()
      });
    }, e;
  }(e), Featurette.register("launch-workspace", e), Featurette.register("launch-new-workspace", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.onStepPassed = e(this.onStepPassed, this), this.pollStatus = e(this.pollStatus, this), 
      this.submitFile = e(this.submitFile, this), this.showUploadDialog = e(this.showUploadDialog, this), 
      r.__super__.constructor.apply(this, arguments), this.on("click", ".upload button", this.showUploadDialog), 
      this.on("change", ".local-code-challenge-file-submission", this.submitFile), this.uploadForm = this.get(".upload form"), 
      this.uploadBtn = this.get(".upload button"), this.fileUpload = this.get(".local-code-challenge-file-submission"), 
      "submitted" === this.data.submissionStatus ? this.pollStatus() :"passed" === this.data.submissionStatus && this.data.showLastResults && _.delay(this.onStepPassed, 2e3);
    }
    return i(r, t), r.prototype.maxUploadSize = 5242880, r.prototype.validZipHeader = [ 80, 75, 3, 4 ], 
    r.prototype.showUploadDialog = function(t) {
      return t.preventDefault(), t.stopPropagation(), this.fileUpload.trigger("click"), 
      !1;
    }, r.prototype.submitFile = function(t) {
      var e;
      if (t.preventDefault(), t.stopPropagation(), e = this.fileUpload[0].files[0]) return this.validateAndUpload(e);
    }, r.prototype.validateAndUpload = function(t) {
      var e;
      return t.name.match(/\.zip$/i) ? t.size > this.maxUploadSize ? this.showUploadError(t, "cannot exceed 5 MB") :(e = new FileReader(), 
      e.onload = function(e) {
        return function(i) {
          var r;
          return r = _.toArray(new Uint8Array(i.target.result, 0, 4)), _.isEqual(r, e.validZipHeader) ? e.uploadFile() :e.showUploadError(t, "is not a valid .zip file");
        };
      }(this), e.readAsArrayBuffer(t)) :this.showUploadError(t, "is not a valid .zip file");
    }, r.prototype.uploadFile = function() {
      return this.uploadForm.submit(), this.uploadBtn.prop("disabled", !0).addClass("disabled");
    }, r.prototype.showUploadError = function(t, e) {
      return alert('Oops, "' + t.name + '" ' + e + "."), this.uploadBtn.prop("disabled", !1).removeClass("disabled"), 
      this.fileUpload.val(null), !1;
    }, r.prototype.pollStatus = function() {
      return $.getJSON(decodeURIComponent(this.data.statusUrl), function(t) {
        return function(e) {
          var i, r;
          if (location.pathname === t.data.url) return r = e.submission, "passed" === (i = r.status) || "failed" === i || "errored" === i ? location.reload() :_.delay(t.pollStatus, 2e3);
        };
      }(this));
    }, r.prototype.onStepPassed = function() {
      return $(document).trigger("step-passed");
    }, r;
  }(Treehouse.View), Featurette.register("local-code-challenge", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.locationSource = e(this.locationSource, this), this.el = $(t).autocomplete({
        minLength:5,
        source:this.locationSource,
        open:function() {
          return $(this).autocomplete("widget").zIndex(5);
        }
      });
    }
    return t.prototype.locationSource = function(t, e) {
      return $.ajax({
        url:this.el.data("autocomplete-url"),
        data:{
          q:t.term
        },
        dataType:"json",
        success:e
      });
    }, t;
  }(), Featurette.register("location-autocomplete", t);
}.call(this), function() {
  var t, e, i, r = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, s = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) n.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, n = {}.hasOwnProperty;
  t = function(t) {
    function e() {
      this.undoSelectChanges = r(this.undoSelectChanges, this), this.showError = r(this.showError, this), 
      this.hideError = r(this.hideError, this), this.showConfirmation = r(this.showConfirmation, this), 
      this.hideConfirmation = r(this.hideConfirmation, this), this.showDetails = r(this.showDetails, this), 
      this.hideDetails = r(this.hideDetails, this), this.triggerUpdate = r(this.triggerUpdate, this), 
      this.performAction = r(this.performAction, this), this.cancelAction = r(this.cancelAction, this), 
      this.disableButton = r(this.disableButton, this), this.updateStatus = r(this.updateStatus, this), 
      this.updateDepartment = r(this.updateDepartment, this), this.departmentSelect = r(this.departmentSelect, this), 
      this.statusSelect = r(this.statusSelect, this), e.__super__.constructor.apply(this, arguments), 
      this.status = this.statusSelect().find("option:selected").val(), this.department = this.departmentSelect().find("option:selected").val(), 
      this.on("change", "select[name=department]", this.updateDepartment), this.on("change", "select[name=status]", this.updateStatus), 
      this.on("click", ".member-action-confirmation button.secondary", this.cancelAction), 
      this.on("click", "button.primary", this.disableButton), this.on("click", ".update-department button.primary", this.updateDepartment), 
      this.on("click", ".member-action-confirmation button.primary", this.performAction), 
      this.on("click", ".member-action-error button", this.hideError);
    }
    return s(e, t), e.prototype.statusSelect = function() {
      return this.get("select[name=status]");
    }, e.prototype.departmentSelect = function() {
      return this.get("select[name=department]");
    }, e.prototype.updateDepartment = function() {
      var t, e, i, r;
      if (t = this.departmentSelect().data("action"), i = this.departmentSelect().data("member-type"), 
      r = this.departmentSelect().find("option:selected").val(), e = {
        member_type:i,
        department_id:r
      }, r !== this.department) return $.ajax(t, {
        type:"PUT",
        data:e
      }).done(function(t) {
        return function() {
          return t.triggerUpdate();
        };
      }(this)).fail(function(t) {
        return function() {
          return t.undoSelectChanges(), t.showError();
        };
      }(this));
    }, e.prototype.updateStatus = function() {
      var t;
      if ((t = this.statusSelect().find("option:selected").val()) !== this.status) return this.showConfirmation(t);
    }, e.prototype.disableButton = function(t) {
      return this.disable(t.target);
    }, e.prototype.cancelAction = function() {
      return this.hideConfirmation(), this.showDetails(), this.undoSelectChanges();
    }, e.prototype.performAction = function(t) {
      var e, i, r;
      return i = $(t.target).data("url"), r = $(t.target).data("method"), null != (e = Featurette.get("layout")) && e.loading(), 
      $("#member-table").addClass("transparent-while-loading"), $.ajax(i, {
        type:r
      }).done(function(t) {
        return function() {
          return t.triggerUpdate();
        };
      }(this)).fail(function(t) {
        return function(e) {
          var i, r;
          return null != (r = Featurette.get("layout")) && r.loaded(), $("#member-table").removeClass("transparent-while-loading"), 
          t.undoSelectChanges(), 422 === e.status && (i = e.responseText), t.showError(i);
        };
      }(this));
    }, e.prototype.triggerUpdate = function() {
      return this.el.trigger("organization-member:updated");
    }, e.prototype.hideDetails = function() {
      return this.hide(this.get(".member-row"));
    }, e.prototype.showDetails = function() {
      return this.show(this.get(".member-row"));
    }, e.prototype.hideConfirmation = function() {
      return this.hide(this.get(".member-action-confirmation")), this.enable(this.get("button.primary"));
    }, e.prototype.showConfirmation = function(t) {
      return this.hideDetails(), this.show(this.get(".member-action-confirmation." + t));
    }, e.prototype.hideError = function() {
      return this.hide(this.get(".member-action-error")), this.showDetails();
    }, e.prototype.showError = function(t) {
      if (this.hideDetails(), this.hideConfirmation(), this.show(this.get(".member-action-error")), 
      t) return this.get(".member-action-error span").html(t);
    }, e.prototype.undoSelectChanges = function() {
      return this.statusSelect().val(this.status).change(), this.departmentSelect().val(this.department).change();
    }, e.prototype.hide = function(t) {
      return t.addClass("hidden");
    }, e.prototype.show = function(t) {
      return t.removeClass("hidden");
    }, e.prototype.disable = function(t) {
      var e;
      return e = $(t), e.prop("disabled", !0), e.addClass("disabled");
    }, e.prototype.enable = function(t) {
      var e;
      return e = $(t), e.prop("disabled", !1), e.removeClass("disabled");
    }, e;
  }(Treehouse.View), null != (e = this.Treehouse) && null != (i = e.Organizations) && (i.MemberRow = t), 
  Featurette.register("Treehouse.Organizations.MemberRow", t);
}.call(this), function() {
  var t, e, i, r = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, s = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) n.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, n = {}.hasOwnProperty, o = [].indexOf || function(t) {
    for (var e = 0, i = this.length; e < i; e++) if (e in this && this[e] === t) return e;
    return -1;
  };
  t = function(t) {
    function e() {
      this.hideBulkSuccess = r(this.hideBulkSuccess, this), this.updateRowCount = r(this.updateRowCount, this), 
      this.toggleBulkActionOptions = r(this.toggleBulkActionOptions, this), this.toggleSelectAll = r(this.toggleSelectAll, this), 
      this.performBulkAction = r(this.performBulkAction, this), this.hideBulkError = r(this.hideBulkError, this), 
      this.disableUsersBulkAction = r(this.disableUsersBulkAction, this), this.confirmBulkAction = r(this.confirmBulkAction, this), 
      this.updateMembersList = r(this.updateMembersList, this), this.resetDateFilters = r(this.resetDateFilters, this), 
      this.checkForBlankDateInputs = r(this.checkForBlankDateInputs, this), this.applyDateFilters = r(this.applyDateFilters, this), 
      this.filterOptions = r(this.filterOptions, this), this.setupFilters = r(this.setupFilters, this), 
      this.addMembersToOrganization = r(this.addMembersToOrganization, this), this.disableInvitationForm = r(this.disableInvitationForm, this), 
      this.enableInvitationForm = r(this.enableInvitationForm, this), this.verifyAvailableSeats = r(this.verifyAvailableSeats, this), 
      this.removeInvitation = r(this.removeInvitation, this), this.hideCSVFileError = r(this.hideCSVFileError, this), 
      this.uploadCSV = r(this.uploadCSV, this), this.resetForm = r(this.resetForm, this), 
      this.handlePagination = r(this.handlePagination, this), this.showCSVForm = r(this.showCSVForm, this), 
      this.showNewMemberForm = r(this.showNewMemberForm, this), this.loaded = r(this.loaded, this), 
      this.loading = r(this.loading, this), e.__super__.constructor.apply(this, arguments), 
      this.on("click", "#add-member-button", this.showNewMemberForm), this.on("click", "#toggle-csv", this.showCSVForm), 
      this.on("click", "#add-member-button.secondary, button[type=cancel]", this.resetForm), 
      this.on("click", ".upload-file", this.uploadCSV), this.on("click", "#csv-file-upload", this.hideCSVFileError), 
      this.on("click", ".remove-row", this.removeInvitation), this.on("submit", "#new-member-form", this.addMembersToOrganization), 
      this.on("click", "[data-element='apply-date-filters']", this.applyDateFilters), 
      this.on("click", "[data-element='reset-date-filters']", this.resetDateFilters), 
      this.on("click", ".pagination-container a", this.handlePagination), this.on("change", "[data-element='bulk-select-all']", this.toggleSelectAll), 
      this.on("change", "[data-element='bulk-checkbox']", this.updateRowCount), this.on("click", "[data-element='select-bulk'] button", this.confirmBulkAction), 
      this.on("click", "[data-element='confirm-bulk'] button.primary", this.performBulkAction), 
      this.on("click", "[data-element='confirm-bulk'] button.secondary", this.disableUsersBulkAction), 
      this.on("click", "[data-element='bulk-error'] button", this.hideBulkError), this.on("click", "[data-element='bulk-success'] button", this.hideBulkSuccess), 
      this.on("change", "[data-element='select-bulk'] select", this.toggleBulkActionOptions), 
      this.on("pjax:start", this.clearElementsCache), this.on("pjax:end", this.setupFilters), 
      this.on("pjax:start", this.loading), this.on("pjax:end", this.loaded), this.listenTo("body", "organization-member:updated", this.updateMembersList), 
      this.setupFilters();
    }
    return s(e, t), e.prototype.loading = function() {
      var t;
      return null != (t = Featurette.get("layout")) && t.loading(), this.el.addClass("transparent-while-loading");
    }, e.prototype.loaded = function() {
      var t;
      return null != (t = Featurette.get("layout")) && t.loaded(), this.el.removeClass("transparent-while-loading");
    }, e.prototype.showNewMemberForm = function() {
      return this.show(this.get("#new-member-form")), this.get("#add-member-button").addClass("secondary"), 
      this.get("#invitations__email").select();
    }, e.prototype.showCSVForm = function(t) {
      return t.preventDefault(), this.el.find("#new-member-form").addClass("csv-upload-active");
    }, e.prototype.handlePagination = function(t) {
      return this.paginatedPageState = t.currentTarget.href, $.pjax.click(t, {
        container:this.el
      });
    }, e.prototype.resetForm = function(t) {
      return t.preventDefault(), $.pjax({
        url:this.paginatedPageState || window.location.href,
        type:"GET",
        cache:!1,
        push:!1,
        scrollTo:!1,
        container:this.el
      });
    }, e.prototype.uploadCSV = function(t) {
      var e, i, r, s;
      return t.preventDefault(), e = document.getElementById("csv-file-upload").files[0], 
      s = $("meta[name='csrf-token']").attr("content"), e && this.isValidCSVFileSpec(e) ? (r = new FormData(), 
      r.append("csv_file", e, e.name), i = this.getFiltersFromUrl(), $.pjax({
        url:this.el.data("file-upload-path") + i,
        type:"POST",
        data:r,
        headers:{
          "X-CSRF-Token":s
        },
        cache:!1,
        contentType:!1,
        processData:!1,
        container:this.el,
        push:!1,
        scrollTo:!1
      })) :void this.show(this.get("[data-element='csv-file-error']"));
    }, e.prototype.hideCSVFileError = function() {
      return this.hide(this.get("[data-element='csv-file-error']"));
    }, e.prototype.isValidCSVFileSpec = function(t) {
      return t.type.match("text/csv") || /\.csv$/i.test(t.name);
    }, e.prototype.removeInvitation = function(t) {
      var e;
      return t.preventDefault(), e = $(t.currentTarget).closest(".member-upload-list"), 
      e.remove(), this.verifyAvailableSeats();
    }, e.prototype.verifyAvailableSeats = function() {
      return parseInt(this.data.seatsAvailable) < this.el.find(".member-upload-list").length ? this.disableInvitationForm() :(this.enableInvitationForm(), 
      this.get(".alert-banner.error").remove());
    }, e.prototype.enableInvitationForm = function() {
      return this.get(".send-invitations-actions button[type='submit']").attr("disabled", !1).addClass("primary").removeClass("disabled");
    }, e.prototype.disableInvitationForm = function() {
      return this.get(".send-invitations-actions button[type='submit']").attr("disabled", !1).addClass("disabled").removeClass("primary");
    }, e.prototype.addMembersToOrganization = function(t) {
      var e, i;
      return t.preventDefault(), i = this.get("#new-member-form"), e = this.getFiltersFromUrl(), 
      $.pjax({
        url:i.attr("action") + e,
        type:"POST",
        data:i.serialize(),
        container:this.el,
        push:!1,
        scrollTo:this.el.offset().top - 20
      });
    }, e.prototype.setupFilters = function() {
      return this.setupDateFilters(), _.delay(function(t) {
        return function() {
          return new Filters({
            basePath:"organization/members",
            container:t.el,
            binds:t.filterOptions()
          });
        };
      }(this), 100);
    }, e.prototype.filterOptions = function() {
      var t;
      return t = {}, t.search = this.get("#search"), t.sort = Featurette.get("org-members-sort"), 
      Featurette.get("org-members-department-filter") && (t.department = Featurette.get("org-members-department-filter")), 
      Featurette.get("org-members-curriculum-filter") && (t.curriculum = Featurette.get("org-members-curriculum-filter")), 
      t.status = Featurette.get("org-members-status-filter"), t.dates = Featurette.get("org-members-dates-filter"), 
      t;
    }, e.prototype.setupDateFilters = function() {
      var t;
      if (t = location.pathname.match(/dates:(\d{1,2}-\D{3}-\d{4}..\d{1,2}-\D{3}-\d{4})/)) return this.get("[data-element='dates-filter']").attr("data-filter-value", t[1]);
    }, e.prototype.applyDateFilters = function() {
      var t, e, i, r, s, n, o, a, l, h, u, c;
      return this.get(".org-date-picker select").parent().removeClass("field_with_errors"), 
      this.checkForBlankDateInputs() ? (r = parseInt(this.get("#from_month").val()) - 1, 
      i = parseInt(this.get("#from_day").val()), s = parseInt(this.get("#from_year").val()), 
      a = parseInt(this.get("#to_month").val()) - 1, o = parseInt(this.get("#to_day").val()), 
      l = parseInt(this.get("#to_year").val()), e = new Date(s, r, i), n = new Date(l, a, o), 
      u = Date.validateDay(i, s, r), c = Date.validateDay(o, l, a), h = e < n, this.checkFilterDates(u, c, h) ? (t = e.toString("d-MMM-yyyy") + ".." + n.toString("d-MMM-yyyy"), 
      this.get("[data-element='dates-filter']").attr("data-filter-value", t).click()) :void 0) :this.show(this.get("[data-element='dates-error']"));
    }, e.prototype.checkForBlankDateInputs = function() {
      var t;
      return t = !0, this.get(".org-date-picker select").each(function() {
        if ("" === $(this).val()) return t = !1, $(this).parent().addClass("field_with_errors");
      }), t;
    }, e.prototype.checkFilterDates = function(t, e, i) {
      return t && e ? !!i || (this.show(this.get("[data-element='dates-error']")), this.get(".org-date-picker select").parent().addClass("field_with_errors"), 
      !1) :(this.show(this.get("[data-element='dates-error']")), t || this.get("[data-element='from-date'] select").parent().addClass("field_with_errors"), 
      e || this.get("[data-element='to-date'] select").parent().addClass("field_with_errors"), 
      !1);
    }, e.prototype.resetDateFilters = function() {
      return this.get("[data-element='dates-filter']").attr("data-filter-value", "").click();
    }, e.prototype.updateMembersList = function(t, e) {
      return t.preventDefault(), t.currentTarget.href && (this.paginatedPageState = t.currentTarget.href), 
      $.pjax({
        url:this.paginatedPageState || window.location.href,
        container:this.el,
        push:!1,
        scrollTo:!!e && this.el.offset().top - 20
      }).done(function(t) {
        return function() {
          if (e) return t.showBulkSuccess(e);
        };
      }(this));
    }, e.prototype.confirmBulkAction = function() {
      var t;
      if ((t = this.get("[data-element='select-bulk'] select").val()) && this.runBulkChecks(t)) return this.hide(this.get("[data-element='select-bulk']")), 
      this.show(this.get("[data-action='" + t + "']"));
    }, e.prototype.disableUsersBulkAction = function() {
      return this.hide(this.get("[data-element='confirm-bulk']")), this.show(this.get("[data-element='select-bulk']"));
    }, e.prototype.showBulkError = function(t) {
      if (this.hide(this.get("[data-element='select-bulk']")), this.hide(this.get("[data-element='confirm-bulk']")), 
      this.show(this.get("[data-element='bulk-error']")), t) return this.get("[data-element='bulk-error'] span").html(t);
    }, e.prototype.hideBulkError = function() {
      return this.hide(this.get("[data-element='bulk-error']")), this.show(this.get("[data-element='select-bulk']"));
    }, e.prototype.performBulkAction = function(t) {
      var e, i, r, s, n;
      if (n = $(t.target).closest(".member-action-confirmation").data("action"), i = this.runBulkChecks(n)) return r = $(t.target).data("url"), 
      s = $(t.target).data("method"), this.loading(), e = {
        member_ids:i
      }, "change-department" === n && (e.department_id = this.get("[data-element='bulk-department-assignment'] select").val()), 
      $.ajax(r, {
        type:s,
        data:e
      }).done(function(e) {
        return function() {
          var r;
          return r = e.bulkSuccessMessage(i.length, n), e.updateMembersList(t, r);
        };
      }(this)).fail(function(t) {
        return function(e) {
          var i;
          return t.loaded(), 422 === e.status && (i = e.responseText), t.showBulkError(i);
        };
      }(this));
    }, e.prototype.runBulkChecks = function(t) {
      var e, i, r, s;
      return i = this.getMemberInfo(), r = i.statuses, s = this.requiredStatus(t), 0 === r.length ? (this.showBulkError("You have not selected any rows."), 
      !1) :this.checkArrayItemsAreAll(r, s) ? i.ids :(e = this.actionWords(t), this.showBulkError("Not all the selected rows can have " + e[0] + "s " + e[1] + "."), 
      !1);
    }, e.prototype.requiredStatus = function(t) {
      switch (t) {
       case "enable-users":
        return [ "disabled" ];

       case "disable-users":
        return [ "enabled" ];

       case "resend-invitations":
       case "cancel-invitations":
        return [ "invited" ];

       case "change-department":
        return [ "enabled" ];

       case "delete-users":
        return [ "enabled", "disabled" ];
      }
    }, e.prototype.actionWords = function(t) {
      switch (t) {
       case "enable-users":
        return [ "account", "reactivated" ];

       case "disable-users":
        return [ "account", "disabled" ];

       case "resend-invitations":
        return [ "invitation", "resent" ];

       case "cancel-invitations":
        return [ "invitation", "canceled" ];

       case "change-department":
        return [ "department", "reassigned" ];

       case "delete-users":
        return [ "account", "deleted" ];
      }
    }, e.prototype.bulkSuccessMessage = function(t, e) {
      var i;
      return i = this.actionWords(e), 1 === t ? "The 1 member you selected has successfully had their " + i[0] + " " + i[1] + "." :"The " + t + " members you selected have successfully had their " + i[0] + "s " + i[1] + ".";
    }, e.prototype.getMemberInfo = function() {
      var t;
      return t = {
        ids:[],
        statuses:[]
      }, this.get("[data-element='bulk-checkbox']").filter(":checked").each(function() {
        return t.ids.push($(this).val()), t.statuses.push($(this).closest("tr").find("#status").val());
      }), t;
    }, e.prototype.checkArrayItemsAreAll = function(t, e) {
      return t.every(function(t) {
        return o.call(e, t) >= 0;
      });
    }, e.prototype.toggleSelectAll = function(t) {
      return t.target.checked ? this.get("[data-element='bulk-checkbox']").prop("checked", !0) :this.get("[data-element='bulk-checkbox']").prop("checked", !1), 
      this.updateRowCount();
    }, e.prototype.toggleBulkActionOptions = function() {
      return "change-department" === this.get("[data-element='select-bulk'] select").val() ? this.get("[data-element='bulk-department-assignment']").removeClass("hidden") :this.get("[data-element='bulk-department-assignment']").addClass("hidden");
    }, e.prototype.updateRowCount = function() {
      var t;
      return t = this.get("[data-element='bulk-checkbox']").filter(":checked").length, 
      this.get(".selected-count").html(t), 1 === t ? this.hide(this.get(".plural")) :this.show(this.get(".plural")), 
      this.checkForSelectAll();
    }, e.prototype.checkForSelectAll = function() {
      return this.get("[data-element='bulk-checkbox']").length === this.get("[data-element='bulk-checkbox']").filter(":checked").length ? this.get("[data-element='bulk-select-all']").prop("checked", !0) :this.get("[data-element='bulk-select-all']").prop("checked", !1);
    }, e.prototype.showBulkSuccess = function(t) {
      return this.show(this.get("[data-element='bulk-success']")), this.get("[data-element='bulk-success'] span").html(t);
    }, e.prototype.hideBulkSuccess = function() {
      return this.hide(this.get("[data-element='bulk-success']"));
    }, e.prototype.show = function(t) {
      return t.removeClass("hidden");
    }, e.prototype.hide = function(t) {
      return t.addClass("hidden");
    }, e.prototype.getFiltersFromUrl = function() {
      return location.pathname.replace("/organization/members", "");
    }, e;
  }(Treehouse.View), null != (e = this.Treehouse) && null != (i = e.Organizations) && (i.MembersTable = t), 
  Featurette.register("Treehouse.Organizations.MembersTable", t);
}.call(this), function() {
  var t, e, i, r = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function e() {
      e.__super__.constructor.apply(this, arguments), this.on("change", ".field_with_errors select", this.clearError), 
      this.on("input", ".field_with_errors input[type='text']", this.clearError);
    }
    return r(e, t), e.prototype.clearError = function() {
      var t;
      if (t = $(event.target).closest(".form-item"), t.find(".error-message").addClass("hidden"), 
      t.find(".field_with_errors").removeClass("field_with_errors"), 0 === $(".error-message").not(".hidden").length) return $(".alert-banner.error").addClass("hidden");
    }, e;
  }(Treehouse.View), null != (e = this.Treehouse) && null != (i = e.Organizations) && (i.InvitationsTable = t), 
  Featurette.register("Treehouse.Organizations.InvitationsTable", t);
}.call(this), function() {
  var t, e, i, r = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, s = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) n.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, n = {}.hasOwnProperty;
  t = function(t) {
    function e() {
      this.validateAllInvitations = r(this.validateAllInvitations, this), this.validateInvitation = r(this.validateInvitation, this), 
      this.validateLastName = r(this.validateLastName, this), this.validateFirstName = r(this.validateFirstName, this), 
      this.validateEmail = r(this.validateEmail, this), this.validatePassword = r(this.validatePassword, this), 
      this.completeMembersStep = r(this.completeMembersStep, this), this.completeBillingContactStep = r(this.completeBillingContactStep, this), 
      this.completePasswordStep = r(this.completePasswordStep, this), e.__super__.constructor.apply(this, arguments), 
      this.beginFirstStep(), this.on("change", "#organization_user_password", this.validatePassword), 
      this.on("change", "#organization_billing_contact_email", this.validateEmail), this.on("change", "#organization_billing_contact_first_name", this.validateFirstName), 
      this.on("change", "#organization_billing_contact_last_name", this.validateLastName), 
      this.on("change", ".organization_invitation_email", this.validateInvitation), this.on("click", "[data-onboarding-step='password'] .button.primary", this.completePasswordStep), 
      this.on("click", "[data-onboarding-step='billing_contact'] .button.primary", this.completeBillingContactStep), 
      this.on("click", "[data-onboarding-step='members'] .button.primary", this.completeMembersStep);
    }
    return s(e, t), e.prototype.beginFirstStep = function() {
      return this.get("[data-onboarding-step]").hide(), this.get("[data-onboarding-step-number='1']").show();
    }, e.prototype.completePasswordStep = function(t) {
      if (this.validatePassword()) return this.goToNextStep(t);
    }, e.prototype.completeBillingContactStep = function(t) {
      if (this.validateEmail() && this.validateFirstName() && this.validateLastName()) return this.goToNextStep(t);
    }, e.prototype.completeMembersStep = function(t) {
      if (this.validateAllInvitations()) return this.el.addClass("transparent-while-loading"), 
      $(t.target).attr("disabled", !0), this.get("#organization_onboarding_form").get(0).submit();
    }, e.prototype.goToNextStep = function(t) {
      var e, i, r, s;
      return e = $(t.target).closest("[data-onboarding-step]"), r = e.next(), i = e.data("onboardingStep"), 
      s = r.data("onboardingStep"), e.hide(), r.show(), this.get("[data-onboarding-title-step='" + i + "']").removeClass("current"), 
      this.get("[data-onboarding-title-step='" + s + "']").addClass("current"), this.get("[data-onboarding-title-step='" + i + "'] span").html("&nbsp;").addClass("finished");
    }, e.prototype.validatePassword = function() {
      var t, e, i;
      return i = this.get("#organization_user_password"), this.clearValidationError(i), 
      e = i.val(), !(e.length < 6) || (t = "Password must be at least 6 characters.", 
      this.displayValidationError(i, t), !1);
    }, e.prototype.validateEmail = function() {
      return this.validateEmailFormat(this.get("#organization_billing_contact_email"));
    }, e.prototype.validateFirstName = function() {
      return this.validatePresence(this.get("#organization_billing_contact_first_name"));
    }, e.prototype.validateLastName = function() {
      return this.validatePresence(this.get("#organization_billing_contact_last_name"));
    }, e.prototype.validateInvitation = function(t) {
      return this.validateEmailFormat($(t.target), !0);
    }, e.prototype.validateAllInvitations = function() {
      var t;
      return t = !0, this.get(".organization_invitation_email").each(function(e) {
        return function(i, r) {
          if (!e.validateEmailFormat($(r), !0)) return t = !1;
        };
      }(this)), t;
    }, e.prototype.validatePresence = function(t) {
      return this.clearValidationError(t), 0 !== t.val().length || (this.displayValidationError(t, "This is required."), 
      !1);
    }, e.prototype.validateEmailFormat = function(t, e) {
      return this.clearValidationError(t), !!this.isValidEmailFormat(t, e) || (this.displayValidationError(t, "Email address is invalid."), 
      !1);
    }, e.prototype.isValidEmailFormat = function(t, e) {
      var i;
      return i = RegExp(/^[A-Z0-9_\.%\+\-']+@(?:[A-Z0-9\-]+\.)+(?:[A-Z]{2,13})$/i), e ? i.test(t.val()) || 0 === t.val().length :i.test(t.val());
    }, e.prototype.displayValidationError = function(t, e) {
      var i, r;
      return i = t, t.is("select") && (i = t.parent()), i.siblings("label").wrap("<div class='field_with_errors'>"), 
      i.wrap("<div class='field_with_errors'>"), r = HoganTemplates["signup/field_error"].render({
        error:e
      }), i.after(r);
    }, e.prototype.clearValidationError = function(t) {
      var e;
      return e = t.closest(".field_with_errors"), this.unwrapError(e);
    }, e.prototype.unwrapError = function(t) {
      if (t) return t.find("p.error-message").remove(), t.children().unwrap();
    }, e;
  }(Treehouse.View), null != (e = this.Treehouse) && null != (i = e.Organizations) && (i.Onboarding = t), 
  Featurette.register("Treehouse.Organizations.Onboarding", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.toggleStateProvinceField = e(this.toggleStateProvinceField, this), r.__super__.constructor.apply(this, arguments), 
      this.prefix = this.el.data("prefix"), this.on("change", "#" + this.prefix + "_country", this.toggleStateProvinceField), 
      this.toggleStateProvinceField();
    }
    return i(r, t), r.prototype.toggleStateProvinceField = function() {
      return "US" === this.get("#" + this.prefix + "_country").val() ? (this.get("#state_province_non_us").addClass("hidden"), 
      this.get("#state_province").removeClass("hidden")) :(this.get("#state_province").addClass("hidden"), 
      this.get("#state_province_non_us").removeClass("hidden"));
    }, r;
  }(Treehouse.View), Featurette.register("organization-settings", t);
}.call(this), function() {
  var t, e, i, r = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, s = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) n.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, n = {}.hasOwnProperty;
  t = function(t) {
    function e() {
      this.toggleExpiredLicenses = r(this.toggleExpiredLicenses, this), e.__super__.constructor.apply(this, arguments), 
      this.on("click", "#toggle-expired", this.toggleExpiredLicenses);
    }
    return s(e, t), e.prototype.toggleExpiredLicenses = function(t) {
      return t.preventDefault(), this.expanded ? this.contract() :this.expand();
    }, e.prototype.expand = function() {
      return this.get("#expired-table").stop(!0, !0).show(), this.get("#toggle-expired").addClass("selected"), 
      this.get("#toggle-expired span").text("Hide"), this.expanded = !0;
    }, e.prototype.contract = function() {
      return this.get("#expired-table").stop(!0, !0).hide(), this.get("#toggle-expired").removeClass("selected"), 
      this.get("#toggle-expired span").text("Show"), this.expanded = !1;
    }, e;
  }(Treehouse.View), null != (e = this.Treehouse) && null != (i = e.Organizations) && (i.Degrees = t), 
  Featurette.register("Treehouse.Organizations.Degrees", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.ConfirmationBar = function(i) {
    function r() {
      this.cancel = t(this.cancel, this), this.submit = t(this.submit, this), this.showConfirmation = t(this.showConfirmation, this), 
      r.__super__.constructor.apply(this, arguments), this.on("click", ".show-confirmation", this.showConfirmation), 
      this.on("click", ".confirmation-bar-buttons .primary", this.submit), this.on("click", ".confirmation-bar-buttons .secondary", this.cancel);
    }
    return e(r, i), r.prototype.showConfirmation = function(t) {
      return t.preventDefault(), this.get(".member-row").addClass("hidden"), this.get(".techdegree-action-confirmation").removeClass("hidden");
    }, r.prototype.submit = function() {
      return this.get("form").submit(), $(".grid-container").addClass("transparent-while-loading");
    }, r.prototype.cancel = function() {
      return this.get(".techdegree-action-confirmation").addClass("hidden"), this.get(".member-row").removeClass("hidden");
    }, r;
  }(Treehouse.View);
}.call(this), function() {
  var t, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i() {
      i.__super__.constructor.apply(this, arguments);
    }
    return e(i, t), i.prototype.showConfirmation = function(t) {
      var e;
      if (t.preventDefault(), this.get("select").val()) return i.__super__.showConfirmation.apply(this, arguments), 
      e = this.get(".chosen-single").text().trim(), this.get(".assignee-name").text(e);
    }, i;
  }(Treehouse.ConfirmationBar), Featurette.register("assign-degree-to-user", t);
}.call(this), function() {
  var t, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i() {
      i.__super__.constructor.apply(this, arguments);
    }
    return e(i, t), i;
  }(Treehouse.ConfirmationBar), Featurette.register("remove-dept-degree-allocation", t);
}.call(this), function() {
  var t, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.availableSeats = parseInt(this.get(".available-seats").text());
    }
    return e(i, t), i.prototype.showConfirmation = function() {
      var t;
      return i.__super__.showConfirmation.apply(this, arguments), t = this.get("#number_to_allocate").val(), 
      this.get(".seats-to-allocate").text(t), this.get(".remaining-seats").text(this.availableSeats - t);
    }, i;
  }(Treehouse.ConfirmationBar), Featurette.register("allocate-degree-to-dept", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.dateChanged = e(this.dateChanged, this), r.__super__.constructor.apply(this, arguments), 
      this.on("change keyup", "[data-assignment-due-on]", this.dateChanged), this.dateChanged();
    }
    return i(r, t), r.prototype.dateChanged = function() {
      var t, e;
      return e = this.get("[data-assignment-due-on]").val(), t = new Date(e + " 23:59:59"), 
      this.updateHint(t);
    }, r.prototype.updateHint = function(t) {
      var e, i, r, s, n;
      if (t && !isNaN(t.getTime())) return e = (t - new Date()) / 1e3 / 60 / 60 / 24, 
      this.get("[data-due-date-hint]").hide(), Math.ceil(e) >= 7 ? (n = Math.max(1, e / 7), 
      r = this.data.estimatedMinutes / n, s = r / 5, this.get("[data-per-week]").text(this.formatMinutes(r)), 
      this.get("[data-per-weekday]").text(this.formatMinutes(s)), this.get("[data-due-date-hint-weekly]").show()) :Math.ceil(e) >= 1 ? (i = this.data.estimatedMinutes / Math.ceil(e), 
      this.get("[data-per-day]").text(this.formatMinutes(i)), this.get("[data-due-date-hint-daily]").show()) :void 0;
    }, r.prototype.formatMinutes = function(t) {
      var e;
      return e = t / 60, e = Math.round(10 * e) / 10, t = Math.ceil(t), 1 === t ? "1 minute" :t < 60 ? t + " minutes" :1 === e ? "1 hour" :e + " hours";
    }, r;
  }(Treehouse.View), Featurette.register("Treehouse.Organizations.DueDateHint", t);
}.call(this), function() {
  var t = function(t, i) {
    function r() {
      this.constructor = t;
    }
    for (var s in i) e.call(i, s) && (t[s] = i[s]);
    return r.prototype = i.prototype, t.prototype = new r(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  (function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.on("click", "[data-detail-toggle-button]", this.toggleActivityDetails), 
      this.on("click", "[data-detail-auto-expand]", this.expandActivityDetails), $(document).on("ready pjax:end", this.setupDrag), 
      $(window).on("resize", _.throttle(this.setupDrag, 750));
    }
    t(i, e), i.prototype.toggleActivityDetails = function(t) {
      var e, i;
      return t.preventDefault(), i = $(t.target), e = i.closest("[data-detail-toggle]"), 
      e.toggleClass("expanded"), e.find("[data-detail-toggle-text-expand]").toggleClass("hidden"), 
      e.find("[data-detail-toggle-text-collapse]").toggleClass("hidden");
    }, i.prototype.expandActivityDetails = function(t) {
      var e, i;
      return i = $(t.target), e = i.closest("[data-detail-toggle]"), e.on("pjax:end", function() {
        return e.addClass("expanded"), e.find("[data-detail-toggle-text-expand]").addClass("hidden"), 
        e.find("[data-detail-toggle-text-collapse]").removeClass("hidden");
      });
    }, i.prototype.setupDrag = function() {
      var t;
      return t = $(".member-assign__courselink-container").width(), $(".member-assign__courselink-container").each(function(e, i) {
        var r, s;
        return s = $(i).children(".member-assign__container-scroll"), r = -1 * (s.width() - t), 
        s.width() > t ? (s.addClass("draggable"), s.draggable({
          axis:"x",
          containment:[ r, 0, 40, 0 ]
        })) :(s.removeClass("draggable"), s.draggable().draggable("disable"));
      });
    }, Featurette.register("org-member-track-progress", i);
  })(Treehouse.View);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.onFormSubmit = e(this.onFormSubmit, this);
      var i;
      this.textarea = $(t), this.form = this.textarea.closest("form"), this.textarea.mentionsInput({
        onDataRequest:this.onDataRequest,
        triggerChar:"@",
        minChars:1,
        showAvatars:!0,
        elastic:!1,
        templates:{
          autocompleteList:_.template('<ul class="user-tagging"></ul>'),
          autocompleteListItem:_.template('<li data-ref-id="<%= id %>" data-ref-type="<%= type %>" data-display="<%= display %>"><a><strong><%= content %></strong><p>@<%= username %></p></a></li>'),
          autocompleteListItemAvatar:_.template('<div class="deprecated-avatar <%= type %>" style="background-image: url(<%= avatar %>)"></div>')
        }
      }), (i = this.textarea.data("mentions")) && this.textarea.mentionsInput("setMentions", this.textarea.data("mentions-body"), i), 
      this.form.on("submit", this.onFormSubmit);
    }
    return t.prototype.onFormSubmit = function() {
      return this.textarea.mentionsInput("val", function(t) {
        return function(e) {
          var i;
          return i = $("<input type='hidden' name='" + t.textarea.attr("name") + "'/>"), i.val(e), 
          t.textarea.after(i), t.textarea.attr("name", "gui_body");
        };
      }(this));
    }, t.prototype.onDataRequest = function(t, e, i) {
      return $.getJSON("/user/mention_search.json", {
        query:e
      }, function(t) {
        return i.call(this, t);
      });
    }, t;
  }(), Featurette.register("mentions", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.always = e(this.always, this), this.fail = e(this.fail, this), this.done = e(this.done, this), 
      this.submit = e(this.submit, this), this.element = $(t), this.form = this.element.find("form#" + this.element.data("form")), 
      $(document).on("submit", "#" + this.form.attr("id"), this.submit);
    }
    return t.prototype.submit = function(t) {
      var e;
      return t.preventDefault(), e = $.ajax({
        cache:!1,
        type:"post",
        url:this.form.attr("action"),
        data:this.form.serialize(),
        dataType:"json"
      }), e.done(this.done), e.fail(this.fail), e.always(this.always);
    }, t.prototype.done = function(t) {
      return t.redirect ? location.href = t.redirect :this.element.html(response.responseText), 
      this.form.trigger("modal-form:done");
    }, t.prototype.fail = function(t) {
      var e, i, r;
      e = $.parseJSON(t.responseText).errors;
      for (i in e) r = e[i], this.form.find("[name$='[" + i + "]']").after($("<div class='field_with_errors'><p class='error-message'>" + r.shift() + "</p></div>"));
      return this.form.trigger("modal-form:fail");
    }, t.prototype.always = function() {
      return this.element.find(".form-item label:not(.prefill)").inFieldLabels();
    }, t;
  }(), Featurette.register("modal-form", t);
}.call(this), function() {
  var t, e, i = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, r = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  e = function() {
    function t(t) {
      this.handleElementClick = i(this.handleElementClick, this), this.modal = i(this.modal, this), 
      this.triggerModal = i(this.triggerModal, this), this.id = t.id, this.element = $(t), 
      this.target = this.element.attr("data-target"), this.stack = this.element.data("stack"), 
      this.element.attr("data-mobile-fallback") && $(window).width() <= 480 || this.element.click(this.handleElementClick);
    }
    return t.prototype.triggerModal = function() {
      return this.element.trigger("modal:trigger"), this.modal().showOverlay({
        stack:this.stack
      });
    }, t.prototype.modal = function() {
      return Featurette.get(this.target);
    }, t.prototype.handleElementClick = function(t) {
      if (t.preventDefault(), !this.element.is(".disabled")) return this.triggerModal();
    }, t;
  }(), Featurette.register("modal-trigger", e), t = function(t) {
    function e(t) {
      this.loadAsyncModal = i(this.loadAsyncModal, this), this.handleElementClick = i(this.handleElementClick, this), 
      e.__super__.constructor.call(this, t), this.loading = !1, this.element.data("disable-while-loading") || this.element.data("disable-while-loading", "true"), 
      this.parentLi = this.element.parent("li");
    }
    return r(e, t), e.prototype.handleElementClick = function(t) {
      return this.element.is(".disabled") || this.loadAsyncModal(function(t) {
        return function() {
          return t.triggerModal();
        };
      }(this)), t.preventDefault();
    }, e.prototype.loadAsyncModal = function(t) {
      var e;
      return (!this.loading || !0 !== this.element.data("disable-while-loading")) && (this.loading = !0, 
      this.element.addClass("loading"), this.parentLi.addClass("loading"), this.element.trigger("loading"), 
      e = this.modal(), this.src = this.element.data("src"), this.params = this.element.data("params") || {}, 
      $.get(this.src, this.params, function(i) {
        return function(r) {
          return $(e.el).html(r), Featurette.load(), i.loading = !1, i.element.removeClass("loading"), 
          i.parentLi.removeClass("loading"), i.element.trigger("loaded"), Treehouse.init(), 
          t();
        };
      }(this)).fail(function() {
        return function(t) {
          if (401 === t.status && t.getResponseHeader("content-type").match("application/json")) return location.href = $.parseJSON(t.responseText).redirect;
        };
      }()));
    }, e;
  }(e), Featurette.register("async-modal-trigger", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.toggleButton = e(this.toggleButton, this), this.toggleForm = e(this.toggleForm, this), 
      r.__super__.constructor.apply(this, arguments), this.on("click", ".organization-goal-button", this.toggleForm);
    }
    return i(r, t), r.prototype.toggleForm = function(t) {
      return this.get(".organization-goal-form").toggleClass("viewing-org-goal editing-org-goal"), 
      this.get(".organization-goal-form").hasClass("editing-org-goal") ? (t.preventDefault(), 
      this.toggleButton("Save goal", !1)) :this.toggleButton("Save goal", !0);
    }, r.prototype.toggleButton = function(t, e) {
      return this.get(".organization-goal-button").val(t).toggleClass("button-primary"), 
      this.get(".organization-goal-input").attr("readonly", e);
    }, r;
  }(Treehouse.View), Featurette.register("organization-goal", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.hideDateFields = e(this.hideDateFields, this), this.showDateFields = e(this.showDateFields, this), 
      this.hideStatusField = e(this.hideStatusField, this), this.showStatusField = e(this.showStatusField, this), 
      this.onTypeChange = e(this.onTypeChange, this), r.__super__.constructor.apply(this, arguments), 
      this.dateFields = this.get("#content-report-dates"), this.statusField = this.get("#content-report-status"), 
      this.on("change", "[name=report_type]", this.onTypeChange);
    }
    return i(r, t), r.prototype.onTypeChange = function(t) {
      var e;
      return e = t.currentTarget.value, "course_progress" === e || "activity" === e ? this.showDateFields() :this.hideDateFields(), 
      "invites" === e ? this.hideStatusField() :this.showStatusField();
    }, r.prototype.showStatusField = function() {
      return this.statusField.removeClass("hidden");
    }, r.prototype.hideStatusField = function() {
      return this.statusField.addClass("hidden");
    }, r.prototype.showDateFields = function() {
      return this.dateFields.removeClass("hidden");
    }, r.prototype.hideDateFields = function() {
      return this.dateFields.addClass("hidden");
    }, r;
  }(Treehouse.View), Featurette.register("organization-reports-form", t);
}.call(this), function() {
  var t, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i(t) {
      this.element = $(t), this.element.hover(this.updateChart, this.restoreChart);
    }
    return e(i, t), i.prototype.updateChart = function(t) {
      var e, i, r;
      return Treehouse.restoreOrganizationStats = !1, r = $(t.target).closest(".stat"), 
      e = $(r), $(".stat").removeClass("selected"), e.addClass("selected"), i = $(e.data("target")), 
      i.data("title", e.data("title")), i.data("label", e.data("label")), i.data("stats", e.data("stats")), 
      i.data("chart-class", e.data("chart-class")), i.data("tooltip-label", e.data("tooltip-label")), 
      Featurette.get("stats-line-chart").updateChart(i);
    }, i.prototype.restoreChart = function(t) {
      return Treehouse.restoreOrganizationStats = !0, _.delay(function() {
        return function() {
          var e, i, r;
          if (Treehouse.restoreOrganizationStats) return r = $(t.target).closest(".stat"), 
          e = $(r), $(".stat").removeClass("selected"), i = $(e.data("target")), i.data("title", i.data("default-title")), 
          i.data("label", i.data("default-label")), i.data("stats", i.data("default-stats")), 
          i.data("chart-class", i.data("default-chart-class")), i.data("tooltip-label", i.data("default-tooltip-label")), 
          Featurette.get("stats-line-chart").updateChart(i);
        };
      }(), 250);
    }, i;
  }(Treehouse.View), Featurette.register("organization-stats-category", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("points-chart", function(i) {
    function r() {
      this.draw = t(this.draw, this), this.created = t(this.created, this), this.build = t(this.build, this), 
      this.collectData = t(this.collectData, this), r.__super__.constructor.apply(this, arguments), 
      this.animated = this.data.animatePoints, this.collectData(), this.data.initializeLater || this.build(), 
      this.listenTo(this.el, "chart:build", this.build);
    }
    return e(r, i), r.prototype.collectData = function() {
      if (this.points = _.map(this.data.points, function(t, e) {
        return {
          value:t,
          className:"add-" + e + "-stroke"
        };
      }), !_.reduce(this.points, function(t, e) {
        return t + e.value;
      }, 0)) return this.points.push({
        value:1
      });
    }, r.prototype.build = function() {
      if (!this.built) return this.chart = new Chartist.Pie(this.el.get(0), {
        series:this.points
      }, {
        height:this.data.height,
        width:this.data.width,
        donut:!0,
        donutWidth:this.data.donutWidth,
        chartPadding:this.data.padding || 0,
        showLabel:!1
      }).on("created", this.created).on("draw", this.draw);
    }, r.prototype.created = function() {
      return this.built = !0, this.chart.detach();
    }, r.prototype.draw = function(t) {
      var e;
      if ("slice" === t.type && this.animated) return e = t.element._node.getTotalLength(), 
      t.element.attr({
        "stroke-dasharray":e + "px " + e + "px"
      }), t.element.attr({
        "stroke-dashoffset":-e + "px"
      }), setTimeout(function() {
        return t.element.attr({
          "stroke-dashoffset":"0px"
        });
      }, 10);
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, i) {
    function r() {
      this.constructor = t;
    }
    for (var s in i) e.call(i, s) && (t[s] = i[s]);
    return r.prototype = i.prototype, t.prototype = new r(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("radial-progress", function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.progress = (parseInt(this.get(".progress").text(), 10) || 0) / 100, 
      this.stroke = this.data.stroke ? parseInt(this.data.stroke, 10) :8, this.render();
    }
    return t(i, e), i.prototype.render = function() {
      var t, e, i, r;
      return t = 100 - this.stroke, e = t / 2, r = '<svg width="100%" height="100%" viewBox="0 0 100 100">\n  <path class="background" fill="none" stroke-width="' + this.stroke + '" d="\n    M50,' + this.stroke / 2 + "\n    a" + e + "," + e + " 0 0,1 0," + t + "\n    a" + e + "," + e + " 0 0,1 0," + -t + '\n  "/>\n  <path class="foreground" fill="none" stroke-width="' + this.stroke + '" d="\n    M50,' + this.stroke / 2 + "\n    a" + e + "," + e + " 0 0,1 0," + t + "\n    a" + e + "," + e + " 0 0,1 0," + -t + '\n  "/>\n</svg>', 
      this.el.append(r), this.path = this.el.find("path.foreground")[0], this.pathLength = this.path.getTotalLength(), 
      this.path.style.strokeDasharray = this.pathLength + " " + this.pathLength, this.data.animate ? (i = this.progress, 
      this.setProgress(0), _.defer(function(t) {
        return function() {
          return t.setProgress(i);
        };
      }(this))) :this.setProgress(this.progress);
    }, i.prototype.setProgress = function(t) {
      return this.progress = Math.max(0, Math.min(t, 1)), this.get(".progress").text(Math.round(100 * this.progress) + "%"), 
      this.path.style.strokeDashoffset = this.pathLength - this.progress * this.pathLength, 
      this.el.toggleClass("unstarted", 0 === this.progress);
    }, i;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.pingItGood = e(this.pingItGood, this), this.pingStyles = e(this.pingStyles, this), 
      this.el = $(t), setInterval(this.pingItGood, 5e3), this.location = this.el.data("location");
    }
    return t.prototype.pingStyles = function() {
      return {
        position:"absolute",
        top:this.el.position().top,
        left:this.el.position().left,
        width:this.el.width() + parseInt(this.el.css("border-top-width")) + parseInt(this.el.css("border-bottom-width")),
        height:this.el.height() + parseInt(this.el.css("border-left-width")) + parseInt(this.el.css("border-right-width")),
        marginTop:this.el.css("margin-top"),
        marginBottom:this.el.css("margin-bottom"),
        marginLeft:this.el.css("margin-left"),
        marginRight:this.el.css("margin-right"),
        borderTopLeftRadius:this.el.css("border-top-left-radius"),
        borderTopRightRadius:this.el.css("border-top-right-radius"),
        borderBottomLeftRadius:this.el.css("border-bottom-left-radius"),
        borderBottomRightRadius:this.el.css("border-bottom-right-radius"),
        zIndex:this.el.css("z-index") - 1,
        animation:"sonarPing" + this.location + " 1.3s ease-out 250ms"
      };
    }, t.prototype.pingItGood = function() {
      return this.ping && this.ping.remove(), this.ping = $('<span class="ping"></span>').css(this.pingStyles()), 
      this.el.after(this.ping);
    }, t;
  }(), Featurette.register("sonar-ping", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.createChart = e(this.createChart, this), this.setTitleAndLabel = e(this.setTitleAndLabel, this), 
      this.updateChart = e(this.updateChart, this), r.__super__.constructor.apply(this, arguments), 
      this.updateChart();
    }
    return i(r, t), r.prototype.updateChart = function() {
      return this.setTitleAndLabel(), this.createChart();
    }, r.prototype.setTitleAndLabel = function() {
      return this.get(".title").text(this.data.title), this.get(".label").text(this.data.label);
    }, r.prototype.createChart = function() {
      return new Chartist.Line(this.get(".chart").get(0), {
        labels:this.data.stats.map(function(t) {
          return function(e) {
            return t.labelDate(e[0]);
          };
        }(this)),
        series:[ this.data.stats.map(function(t) {
          return function(e) {
            return {
              meta:t.data.title,
              value:e[1]
            };
          };
        }(this)) ]
      }, {
        fullWidth:!0,
        lineSmooth:Chartist.Interpolation.simple({
          divisor:2
        }),
        axisY:{
          onlyInteger:!0,
          labelInterpolationFnc:function(t, e) {
            return 0 === e ? "&nbsp;" :t;
          }
        },
        axisX:{
          labelInterpolationFnc:function(t, e) {
            if (!(e % 2)) return t;
          },
          showGrid:!1
        },
        classNames:{
          chart:"ct-chart-line " + this.data.chartClass
        },
        plugins:[ Chartist.plugins.tooltip({
          tooltipFnc:function(t, e) {
            return '<div class="chartist-tooltip-box">\n  <div class="stat">\n    <span class="stat-meta">' + t + '</span>:\n    <span class="stat-data">' + (e || 0) + "</span>\n  </div>\n</div>";
          }
        }) ]
      }, [ [ "(max-width: 800px)", {
        axisX:{
          labelInterpolationFnc:function(t, e) {
            if (!(e % 5)) return t;
          }
        }
      } ] ]);
    }, r.prototype.labelDate = function(t) {
      var e, i, r;
      return e = Date.parse(t), r = e.getMonth() + 1, i = e.getDate(), r + "/" + i;
    }, r;
  }(Treehouse.View), Featurette.register("stats-line-chart", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("tabbed-content", Treehouse.TabbedContent = function(i) {
    function r() {
      this.switchTabs = t(this.switchTabs, this), this.showContent = t(this.showContent, this), 
      this.getContent = t(this.getContent, this);
      var e;
      r.__super__.constructor.apply(this, arguments), this.on("click", "> .tabs ul li", this.switchTabs), 
      e = this.data.currentTab || 0, this.showContent(e);
    }
    return e(r, i), r.prototype.getContent = function(t) {
      return this.el.find("> .tabbed-content > [data-tab-content]").eq(t);
    }, r.prototype.showContent = function(t) {
      var e;
      return e = this.getContent(t), e.trigger("tabs:show"), e.siblings().trigger("tabs:hide"), 
      e.show().siblings().hide();
    }, r.prototype.switchTabs = function(t) {
      var e;
      if (t.preventDefault(), e = $(t.currentTarget), e.addClass("current").siblings().removeClass("current"), 
      this.showContent(e.index()), this.isMobile()) return this.scrollTo(this.getContent(e.index()).offset().top);
    }, r;
  }(Treehouse.Layout));
}.call(this), function() {
  var t, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.on("click", ".test-with-content .test-name", this.toggleTest);
    }
    return e(i, t), i.prototype.toggleTest = function(t) {
      var e;
      return t.preventDefault(), e = $(t.target), e.is(".test-output") || (e = e.parents(".test-output")), 
      e.toggleClass("test-open");
    }, i;
  }(Treehouse.View), Featurette.register("test-results", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.updateButtonEnablement = e(this.updateButtonEnablement, this), this.hideAllPanels = e(this.hideAllPanels, this), 
      this.selectAssignees = e(this.selectAssignees, this), this.createAssignmentError = e(this.createAssignmentError, this), 
      this.createAssignmentSuccess = e(this.createAssignmentSuccess, this), this.createAssignment = e(this.createAssignment, this), 
      this.selectAssignmentElement = e(this.selectAssignmentElement, this), this.selectAssignment = e(this.selectAssignment, this), 
      this.showCreateAssignment = e(this.showCreateAssignment, this), this.updateDepartmentSelection = e(this.updateDepartmentSelection, this), 
      this.selectAssignee = e(this.selectAssignee, this), this.showSelectAssignees = e(this.showSelectAssignees, this), 
      this.showSelectAssignment = e(this.showSelectAssignment, this), r.__super__.constructor.apply(this, arguments), 
      Treehouse.SearchableView.mixin(this), this.on("click", "[data-select-assignment-next]:enabled", this.showSelectAssignees), 
      this.on("click", "[data-select-assignment-create]", this.showCreateAssignment), 
      this.on("click", "[data-select-assignees-assign]", this.selectAssignees), this.on("click", "[data-select-assignees-back]", this.showSelectAssignment), 
      this.on("click", "[data-create-assignment-next]", this.createAssignment), this.on("click", "[data-create-assignment-back]", this.showSelectAssignment), 
      this.on("click", "[data-select-assignee]", this.selectAssignee), this.on("click", "[data-select-assignment]", this.selectAssignment), 
      this.data.preselectedTrackAssignmentId ? (this.selectedAssignmentId = this.data.preselectedTrackAssignmentId, 
      this.showSelectAssignees()) :this.data.showCreateAssignment ? this.showCreateAssignment() :this.showSelectAssignment();
    }
    return i(r, t), r.prototype.showSelectAssignment = function(t) {
      return null != t && t.preventDefault(), this.hideAllPanels(), this.get("[data-select-assignment-panel]").show();
    }, r.prototype.showSelectAssignees = function(t) {
      return null != t && t.preventDefault(), this.hideAllPanels(), this.get("[data-select-assignees-panel]").show(), 
      this.loadAssignees();
    }, r.prototype.loadAssignees = function() {
      var t, e, i;
      if (t = this.get("[data-assignees]"), t.data("trackAssignmentId") !== this.selectedAssignmentId) return e = this.get("[data-select-assignees-panel] [data-searchable-field]"), 
      this.updateSearch(e.val("").prop("disabled", !0)), this.get("[data-select-assignees-assign]").prop("disabled", !0).addClass("disabled"), 
      i = t.data().assigneesUrl.replace(":id", this.selectedAssignmentId), t.addClass("loading").load(i, function(i) {
        return function(r, s) {
          if (t.removeClass("loading"), e.prop("disabled", !1), i.get("[data-select-assignees-assign]").prop("disabled", !1).removeClass("disabled"), 
          "error" !== s) return t.data("trackAssignmentId", i.selectedAssignmentId);
        };
      }(this));
    }, r.prototype.getAssignees = function() {
      return this.get("[data-assignees]").find("[data-user-id]");
    }, r.prototype.getMembersInDepartment = function(t) {
      var e;
      return e = t.data("userIds").toString().split(","), this.getAssignees().filter(function() {
        return e.indexOf($(this).data("userId").toString()) >= 0;
      });
    }, r.prototype.selectAssignee = function(t) {
      var e, i;
      return t.preventDefault(), i = $(t.target).closest("li"), i.data("userId") ? (i.toggleClass("selected"), 
      this.updateDepartmentSelection()) :i.data("userIds") ? (e = i.hasClass("selected"), 
      this.getMembersInDepartment(i).add(i).each(function() {
        return $(this).toggleClass("selected", !e);
      })) :void 0;
    }, r.prototype.updateDepartmentSelection = function() {
      return this.get("[data-assignees]").find("[data-user-ids]").each(function(t) {
        return function(e, i) {
          var r, s;
          return i = $(i), s = t.getMembersInDepartment(i), r = s.length > 0 && s.length === s.filter(".selected").length, 
          i.toggleClass("selected", r);
        };
      }(this));
    }, r.prototype.showCreateAssignment = function(t) {
      return null != t && t.preventDefault(), this.hideAllPanels(), this.get("[data-assignment-name]").val(""), 
      this.get("[data-assignment-due-on]").val(""), this.get("[data-create-assignment-panel]").show();
    }, r.prototype.selectAssignment = function(t) {
      var e;
      return t.preventDefault(), e = $(t.target).closest("li"), this.selectAssignmentElement(e);
    }, r.prototype.selectAssignmentElement = function(t) {
      return $("[data-select-assignment-panel] li").removeClass("selected"), t.addClass("selected"), 
      this.selectedAssignmentId = t.attr("data-track-assignment-id"), this.updateButtonEnablement();
    }, r.prototype.createAssignment = function(t) {
      var e;
      return t.preventDefault(), this.get("[data-create-assignment-error]").hide(), this.get("[data-create-assignment-progress]").show(), 
      e = $.post(this.data.createAssignmentUrl, {
        track_assignment:{
          name:this.get("[data-assignment-name]").val(),
          due_on:this.get("[data-assignment-due-on]").val()
        }
      }), e.success(this.createAssignmentSuccess), e.fail(this.createAssignmentError);
    }, r.prototype.createAssignmentSuccess = function(t) {
      var e, i;
      return this.get("[data-create-assignment-error]").hide(), this.get("[data-create-assignment-progress]").hide(), 
      this.get("[data-no-assignments]").hide(), e = this.get("[data-track-assignments]"), 
      e.prepend(t), i = e.children().first(), this.selectAssignmentElement(i), this.showSelectAssignees(event);
    }, r.prototype.createAssignmentError = function() {
      return this.get("[data-create-assignment-progress]").hide(), this.get("[data-create-assignment-error]").show();
    }, r.prototype.selectAssignees = function(t) {
      var e, i;
      return t.preventDefault(), this.get("[data-select-assignees-assign]").text("Saving...").prop("disabled", !0).addClass("disabled"), 
      i = this.getAssignees().filter(".selected").map(function() {
        return $(this).data("userId");
      }).toArray(), e = this.get("[data-join-track]").prop("checked"), $.ajax({
        url:this.data.createAssignmentUrl + "/" + this.selectedAssignmentId,
        type:"PUT",
        contentType:"application/json",
        data:JSON.stringify({
          track_assignment:{
            user_ids:i
          },
          join_track:e
        }),
        complete:function() {
          return location.reload();
        }
      });
    }, r.prototype.hideAllPanels = function() {
      return this.get("[data-select-assignment-panel]").hide(), this.get("[data-select-assignees-panel]").hide(), 
      this.get("[data-create-assignment-panel]").hide();
    }, r.prototype.updateButtonEnablement = function() {
      return this.get("[data-select-assignment-next]").prop("disabled", !this.selectedAssignmentId).toggleClass("disabled", !this.selectedAssignmentId);
    }, r;
  }(Treehouse.View), Featurette.register("track-assignment-modal", t);
}.call(this), function() {
  var t, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i() {
      i.__super__.constructor.apply(this, arguments), Treehouse.SearchableView.mixin(this);
    }
    return e(i, t), i;
  }(Treehouse.View), Featurette.register("track-progress-modal", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.clearTopicSelection = e(this.clearTopicSelection, this), this.reenableSubmitButton = e(this.reenableSubmitButton, this), 
      this.disableSubmitButton = e(this.disableSubmitButton, this), this.updateTopicNextButtonEnablement = e(this.updateTopicNextButtonEnablement, this), 
      this.updateDetailsNextButtonEnablement = e(this.updateDetailsNextButtonEnablement, this), 
      this.hideAllPanels = e(this.hideAllPanels, this), this.submitError = e(this.submitError, this), 
      this.submitSuccess = e(this.submitSuccess, this), this.submitNewTrackRequest = e(this.submitNewTrackRequest, this), 
      this.selectTopic = e(this.selectTopic, this), this.selectTrack = e(this.selectTrack, this), 
      this.showPanelByHref = e(this.showPanelByHref, this), this.initialize = e(this.initialize, this), 
      r.__super__.constructor.apply(this, arguments), this.on("click", "[data-panel-link]", this.showPanelByHref), 
      this.on("click", "[data-track-id]", this.selectTrack), this.on("click", "[data-difficulty-panel-submit]", this.submitNewTrackRequest), 
      this.on("click", "[data-topic-class]", this.selectTopic), this.on("click", ".difficulty-choice", this.selectDifficulty), 
      this.on("change keyup paste", "input:text", this.updateDetailsNextButtonEnablement), 
      this.get("[data-difficulty-sortable]").sortable(), $("#new_track_modal_id").on("modal:show", this.initialize);
    }
    return i(r, t), r.prototype.initialize = function() {
      return this.get("input:text").val(""), this.clearTopicSelection(), this.updateDetailsNextButtonEnablement(), 
      this.updateTopicNextButtonEnablement(), this.showPanel("#new-track-intro");
    }, r.prototype.showPanelByHref = function(t) {
      var e;
      if (t.preventDefault(), e = $(t.currentTarget), !e.is(".disabled")) return this.showPanel(e.attr("href"));
    }, r.prototype.showPanel = function(t) {
      return this.hideAllPanels(), this.get(t).show();
    }, r.prototype.selectTrack = function(t) {
      var e, i, r;
      return r = $(t.currentTarget).toggleClass("selected"), this.get("#new-track-select [data-track-id]").not(r).removeClass("selected"), 
      i = this.get("#new-track-select .button.next"), e = i.attr("data-href-pattern").replace(":track_id", r.attr("data-track-id")), 
      i.attr("data-src", e).toggleClass("disabled", !r.is(".selected"));
    }, r.prototype.selectTopic = function(t) {
      var e, i;
      return t.preventDefault(), e = $(t.currentTarget), e.toggleClass("selected"), i = e.attr("data-topic-class"), 
      this.updateTopicNextButtonEnablement(), this.el.find("#new-track-difficulty li.topic-" + i).toggleClass("selected");
    }, r.prototype.selectDifficulty = function(t) {
      var e, i;
      return t.preventDefault(), i = $(t.target), i.closest(".dropdown-child").find(".selected").removeClass("selected"), 
      i.addClass("selected"), e = i.text(), i.closest(".dropdown-parent").find("[data-selected-difficulty]").text(e), 
      i.closest("[data-difficulty]").attr("data-difficulty", e);
    }, r.prototype.submitNewTrackRequest = function(t) {
      var e, i;
      return t.preventDefault(), this.get("[data-submit-error]").hide(), this.disableSubmitButton(), 
      e = {
        new_track_data:{
          topic_data:this.getTopicData()
        }
      }, this.get("input:text").serializeArray().forEach(function(t) {
        return e.new_track_data[t.name] = t.value;
      }), i = $.ajax({
        url:this.data.requestNewTrackUrl,
        type:"POST",
        contentType:"application/json",
        data:JSON.stringify(e)
      }), i.success(this.submitSuccess), i.fail(this.submitError), i.always(this.reenableSubmitButton);
    }, r.prototype.getTopicData = function() {
      return $.map(this.el.find("li[data-topic-name].selected"), function(t) {
        var e;
        return e = $(t).attr("data-difficulty"), 0 === e.length && (e = "Beginner"), [ [ $(t).attr("data-topic-name"), e ] ];
      });
    }, r.prototype.submitSuccess = function() {
      return this.get("[data-submit-error]").hide(), this.showPanel("#new-track-complete");
    }, r.prototype.submitError = function() {
      return this.get("[data-submit-error]").show();
    }, r.prototype.hideAllPanels = function() {
      return this.get("[data-panel]").hide();
    }, r.prototype.updateDetailsNextButtonEnablement = function() {
      var t;
      return t = _.all(this.get("input:text"), function(t) {
        return t.value.length > 0;
      }), this.get("[data-details-panel-next]").toggleClass("disabled", !t);
    }, r.prototype.updateTopicNextButtonEnablement = function() {
      var t;
      return t = this.el.find("[data-topics] .selected").length > 0, this.get("[data-topic-panel-next]").toggleClass("disabled", !t);
    }, r.prototype.disableSubmitButton = function() {
      return this.get("[data-difficulty-panel-submit]").text("Processing...").prop("disabled", !0).addClass("disabled");
    }, r.prototype.reenableSubmitButton = function() {
      return this.get("[data-difficulty-panel-submit]").text("Request New Track").prop("disabled", !1).removeClass("disabled");
    }, r.prototype.clearTopicSelection = function() {
      return this.el.find("[data-topics] .selected").removeClass("selected"), this.el.find("[data-difficulty-sortable] .selected").removeClass("selected"), 
      this.get("[data-difficulty]").attr("data-difficulty", ""), this.get("[data-selected-difficulty]").text("Select Difficulty");
    }, r;
  }(Treehouse.View), Featurette.register("new-track-modal", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.indicateReportLoaded = e(this.indicateReportLoaded, this), this.indicateReportLoading = e(this.indicateReportLoading, this), 
      this.indicateReportSelected = e(this.indicateReportSelected, this), this.loadReport = e(this.loadReport, this), 
      this.removeMember = e(this.removeMember, this), this.filterMembersBySearch = e(this.filterMembersBySearch, this), 
      this.filterMembersByStatus = e(this.filterMembersByStatus, this), this.clearSearchOnEscape = e(this.clearSearchOnEscape, this), 
      this.clearSearchInput = e(this.clearSearchInput, this), this.clearSearch = e(this.clearSearch, this), 
      this.onSearch = e(this.onSearch, this), this.initTable = e(this.initTable, this), 
      r.__super__.constructor.apply(this, arguments), this.on("submit", "form[data-member-search]", function() {
        return !1;
      }), this.on("keyup", "form[data-member-search] input", _.debounce(this.onSearch, 200)), 
      this.on("keydown", "form[data-member-search] input", this.clearSearchOnEscape), 
      this.on("click", "[data-search-clear]", this.clearSearch), this.on("click", "[data-remove-member]", this.removeMember), 
      this.on("click", "a[data-report-detail-url]", this.loadReport), this.initTable();
    }
    return i(r, t), r.prototype.keyCodeEscape = 27, r.prototype.initTable = function() {
      return this.el.find(".members-table").tablesorter({
        sortList:[ [ 0, 0 ] ]
      });
    }, r.prototype.onSearch = function() {
      var t, e;
      return t = this.get("form[data-member-search] input"), e = t.val(), this.filterMembersBySearch(e);
    }, r.prototype.clearSearch = function(t) {
      return t.preventDefault(), this.clearSearchInput(), this.filterMembersBySearch("");
    }, r.prototype.clearSearchInput = function() {
      var t;
      return t = this.get("form[data-member-search] input"), t.val("");
    }, r.prototype.clearSearchOnEscape = function(t) {
      if (t.keyCode === this.keyCodeEscape) return this.clearSearch(t);
    }, r.prototype.filterMembersByStatus = function(t, e) {
      var i;
      return i = this.el.find("[data-row-status=" + t + "]"), i.toggle(e);
    }, r.prototype.filterMembersBySearch = function(t) {
      var e, i;
      return t = t.trim().toLowerCase(), i = this.get("[data-row-searchable]"), t && t.length ? (e = i.filter(function() {
        return $(this).attr("data-row-searchable").toLowerCase().indexOf(t) >= 0;
      }), i.hide(), e.show()) :i.show();
    }, r.prototype.removeMember = function(t) {
      var e, i, r;
      return t.preventDefault(), e = $(t.currentTarget), i = e.closest("[data-row-remove-url]"), 
      r = i.attr("data-row-remove-url"), e.html("Removing...").prop("disabled", !0).addClass("disabled"), 
      $.ajax({
        url:r,
        type:"DELETE",
        success:function(t) {
          return function() {
            return t.updateMemberCount(i.closest("tbody").children("tr").length - 1), i.fadeOut(400, function() {
              return $(this).remove();
            });
          };
        }(this)
      });
    }, r.prototype.updateMemberCount = function(t) {
      var e;
      return e = 1 === t ? "1 member" :t + " members", $("[data-assignment-count]").text(e);
    }, r.prototype.loadReport = function(t) {
      var e, i;
      return t.preventDefault(), e = $(t.currentTarget), this.indicateReportSelected(e), 
      this.indicateReportLoading(), this.clearSearchInput(), i = e.attr("data-report-detail-url"), 
      $.ajax({
        url:i,
        type:"GET",
        success:function(t) {
          return function(e) {
            return t.get("[data-details-table]").html(e), t.indicateReportLoaded(), t.initTable(), 
            t.clearElementsCache();
          };
        }(this),
        fail:function() {
          return targetDiv.html("Oops, something went wrong. Please try again.");
        }
      });
    }, r.prototype.indicateReportSelected = function(t) {
      var e;
      return this.get("a[data-report-detail-url]").removeClass("selected"), t.addClass("selected"), 
      e = t.attr("data-report-detail-label"), this.get("[data-selected-report-detail-label]").text(e);
    }, r.prototype.indicateReportLoading = function() {
      return this.get("[data-details-table]").addClass("transparent-while-loading"), this.get("[data-report-loading]").addClass("loading");
    }, r.prototype.indicateReportLoaded = function() {
      return this.get("[data-details-table]").removeClass("transparent-while-loading"), 
      this.get("[data-report-loading]").removeClass("loading");
    }, r;
  }(Treehouse.View), Featurette.register("user-track-assignments-report", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("video-player", function(i) {
    function r(e) {
      this.storePlaybackPreferences = t(this.storePlaybackPreferences, this), this.onLanguageSelect = t(this.onLanguageSelect, this), 
      this.onVolumeChanged = t(this.onVolumeChanged, this), this.exitFullScreen = t(this.exitFullScreen, this), 
      this.launchSqlPlayground = t(this.launchSqlPlayground, this), this.launchConsole = t(this.launchConsole, this), 
      this.launchWorkspace = t(this.launchWorkspace, this), this.addSqlPlaygroundButton = t(this.addSqlPlaygroundButton, this), 
      this.addConsoleButton = t(this.addConsoleButton, this), this.addWorkspacesButton = t(this.addWorkspacesButton, this), 
      this.rewind = t(this.rewind, this), this.getSpeedsHTML = t(this.getSpeedsHTML, this), 
      this.addSpeedControls = t(this.addSpeedControls, this), this.addRewindButton = t(this.addRewindButton, this), 
      this.getIcon = t(this.getIcon, this), this.getIcons = t(this.getIcons, this), this.appendButton = t(this.appendButton, this), 
      this.prependButton = t(this.prependButton, this), this.updateButton = t(this.updateButton, this), 
      this.getButtonHTML = t(this.getButtonHTML, this), this.markLongDurations = t(this.markLongDurations, this), 
      this.timeContainers = t(this.timeContainers, this), this.minimumTimeForCompletion = t(this.minimumTimeForCompletion, this), 
      this.durationInSeconds = t(this.durationInSeconds, this), this.durationInMinutes = t(this.durationInMinutes, this), 
      this.updateControls = t(this.updateControls, this), this.reset = t(this.reset, this), 
      this.setSpeed = t(this.setSpeed, this), this.onSpeedChange = t(this.onSpeedChange, this), 
      this.transitionToPlaying = t(this.transitionToPlaying, this), this.transitionToPaused = t(this.transitionToPaused, this), 
      this.onEnd = t(this.onEnd, this), this.ensureCorrectPlaybackRate = t(this.ensureCorrectPlaybackRate, this), 
      this.trackVideoEnd = t(this.trackVideoEnd, this), this.trackVideoView = t(this.trackVideoView, this), 
      this.sendViewingSegment = t(this.sendViewingSegment, this), this.trackViewingSegment = t(this.trackViewingSegment, this), 
      this.setMuted = t(this.setMuted, this), this.setStartTime = t(this.setStartTime, this), 
      this.initializeStartTime = t(this.initializeStartTime, this), this.makeCaptionsDraggable = t(this.makeCaptionsDraggable, this), 
      this.addEvents = t(this.addEvents, this), this.onMediaPlayerLoad = t(this.onMediaPlayerLoad, this), 
      this.setControlsSize = t(this.setControlsSize, this), this.resetCaptionLocation = t(this.resetCaptionLocation, this), 
      this.toggleMaxWidthState = t(this.toggleMaxWidthState, this), this.setVideoHeight = t(this.setVideoHeight, this), 
      this.onResize = t(this.onResize, this);
      var i;
      r.__super__.constructor.apply(this, arguments), this.stageProgressBar = $("[data-layout-element=stage-progress]"), 
      this.header = $("[data-header]"), this.videoMaxWidth = 1280, this.cookieExpiration = 1095, 
      this.language = this.data.startLanguage || $.cookie("captionLanguage"), this.playbackRate = parseFloat(this.data.playbackRate || $.cookie("playbackRate") || 1), 
      this.resumeTime = parseInt(this.data.resume), this.data.autoplay && (this.autoplay = !0), 
      i = {
        enableAutosize:!0,
        alwaysShowControls:this.el.hasClass("fixed-controls"),
        success:this.onMediaPlayerLoad,
        startLanguage:this.language,
        setDimensions:!1,
        startVolume:$.cookie("volume") ? $.cookie("volume") :1
      }, this.data.playbackPreferencesUrl && (this.playbackPreferencesUrl = this.data.playbackPreferencesUrl), 
      this.player = new MediaElementPlayer(e, i), this.updateControls(), this.setMuted(), 
      this.setSpeed(this.playbackRate), this.playing = !1, this.enableChromeFreezeFix(), 
      this.initializeStartTime(), this.resumeTime && !this.autoplay && $("#resume-video-overlay").addClass("active"), 
      this.sendViewingSegment = _.throttle(_.bind(this.sendViewingSegment, this), 5e3), 
      this.videoViewReported = !1, setInterval(function(t) {
        return function() {
          if (t.playing) return t.sendViewingSegment(t.mejsObj.currentTime);
        };
      }(this), 15e3);
    }
    return e(r, i), r.prototype.speeds = [ .5, .75, 1, 1.1, 1.25, 1.5, 1.75, 2 ], r.prototype.onResize = function() {
      if (this.setVideoHeight(), this.toggleMaxWidthState(), this.captions) return this.resetCaptionLocation();
    }, r.prototype.setVideoHeight = function() {
      var t, e, i, r, s, n, o, a;
      return n = this.container.find("video"), a = $(window).height(), r = this.header.outerHeight(!0), 
      t = 30, s = this.stageProgressBar.height(), i = this.container.find(".mejs-controls").height(), 
      e = r + s + t, o = this.player && this.player.isFullScreen ? a - i :a - e - i - 30, 
      n.css("max-height", o);
    }, r.prototype.toggleMaxWidthState = function() {
      return this.container.toggleClass("max-width-reached", this.container.width() > this.videoMaxWidth + 20);
    }, r.prototype.resetCaptionLocation = function() {
      return this.captions.css({
        top:"",
        left:""
      });
    }, r.prototype.setControlsSize = function() {
      if (this.el.is(":visible")) return this.player.setControlsSize(), clearInterval(this.interval);
    }, r.prototype.onMediaPlayerLoad = function(t, e) {
      return this.container = this.el.parents(".mejs-container"), this.addEvents(t, e), 
      this.makeCaptionsDraggable();
    }, r.prototype.addEvents = function(t) {
      var e;
      return this.container.on("click", ".mejs-rewind-button", this.rewind).on("click", ".mejs-workspaces-button", this.launchWorkspace).on("click", ".mejs-console-button", this.launchConsole).on("click", ".mejs-sql-playground-button", this.launchSqlPlayground).on("click", ".mejs-speed", this.onSpeedChange).on("change", ".mejs-captions-selector input:radio", this.onLanguageSelect), 
      this.mejsObj = t, t.addEventListener("loadedmetadata", this.setStartTime), t.addEventListener("pause", this.transitionToPaused), 
      t.addEventListener("play", this.transitionToPlaying), t.addEventListener("timeupdate", this.trackViewingSegment), 
      null != t.playbackRate && t.addEventListener("timeupdate", this.ensureCorrectPlaybackRate), 
      t.addEventListener("ended", this.onEnd), t.addEventListener("volumechange", this.onVolumeChanged), 
      this.interval = window.setInterval(this.setControlsSize, 1e3), this.container.addClass(this.el.attr("class")), 
      this.listenTo(window, "resize", _.throttle(this.onResize, 750), {
        triggerImmediately:!0
      }), $(window).bind("beforeunload", function(t) {
        return function() {
          t.sendViewingSegment(t.mejsObj.currentTime);
        };
      }(this)), this.autoplay && (e = function() {
        return t.play();
      }, _.delay(e, 1e3)), this.listenTo("[data-start-video], [data-resume-video]", "click", function(e) {
        return function(i) {
          return e.startTime = $(i.currentTarget).is("[data-resume-video]") ? e.resumeTime :0, 
          e.hideOverlays(), t.play();
        };
      }(this));
    }, r.prototype.makeCaptionsDraggable = function() {
      return this.captions = this.container.find(".mejs-captions-text"), this.captions.draggable({
        containment:".mejs-mediaelement",
        scroll:!1
      });
    }, r.prototype.initializeStartTime = function() {
      return this.startTime = this.resumeTime && this.resumeTime < this.durationInSeconds() ? this.resumeTime :0;
    }, r.prototype.setStartTime = function() {
      if (this.startTime) return this.mejsObj.setCurrentTime(this.startTime);
    }, r.prototype.setMuted = function() {
      if (this.mejsObj && "true" === $.cookie("muted")) return this.mejsObj.setMuted(!0);
    }, r.prototype.trackViewingSegment = function() {
      if (this.playing) return null == this.startTime ? this.startTime = this.mejsObj.currentTime :Math.abs(this.currentTime - this.mejsObj.currentTime) > 2 && (this.sendViewingSegment(this.currentTime), 
      this.startTime = this.mejsObj.currentTime), this.currentTime = this.mejsObj.currentTime;
    }, r.prototype.sendViewingSegment = function(t) {
      if ($("html").hasClass("logged-in") && null != this.startTime && t > this.startTime) return t >= this.minimumTimeForCompletion() && this.trackVideoView(), 
      $.ajax(this.data.trackVideoSegmentUrl, {
        type:"PUT",
        data:{
          admin_preview:this.data.adminPreview,
          preview:this.data.preview,
          started:this.startTime,
          ended:t
        },
        timeout:2e3
      }), this.startTime = null;
    }, r.prototype.trackVideoView = function() {
      if (!this.videoViewReported) return this.videoViewReported = !0, $.ajax(this.data.trackVideoViewUrl, {
        type:"PUT",
        timeout:2e3,
        data:{
          admin_preview:this.data.adminPreview,
          preview:this.data.preview
        }
      }).success(function() {
        return function() {
          return Treehouse.PointsCounter.updateTotalOnce();
        };
      }()).error(function(t) {
        return function() {
          return t.videoViewReported = !1;
        };
      }(this));
    }, r.prototype.trackVideoEnd = function() {
      if ($("html").hasClass("logged-in") && !this.data.preview && !this.data.adminPreview) return "undefined" != typeof analytics && null !== analytics ? analytics.track("video.ended", {
        userId:Treehouse.currentUser.id,
        videoId:this.data.videoId
      }) :void 0;
    }, r.prototype.ensureCorrectPlaybackRate = function() {
      if (this.playbackRate !== this.player.media.playbackRate) return this.setSpeed(this.playbackRate);
    }, r.prototype.onEnd = function() {
      var t;
      return this.exitFullScreen(), this.trackVideoEnd(), t = $("#next-step-overlay"), 
      t.addClass("active"), this.player.container.addClass("mejs-treehouse-is-ended").removeClass("mejs-treehouse-is-paused mejs-treehouse-is-playing"), 
      $(document).trigger("video-ended"), !0;
    }, r.prototype.transitionToPaused = function() {
      return this.playing = !1, this.sendViewingSegment(this.mejsObj.currentTime), this.player.container.addClass("mejs-treehouse-is-paused"), 
      this.player.container.removeClass("mejs-treehouse-is-playing"), $(document).trigger("video-paused");
    }, r.prototype.transitionToPlaying = function() {
      return this.playing = !0, this.player.container.addClass("mejs-treehouse-is-playing"), 
      this.player.container.removeClass("mejs-treehouse-is-paused"), this.setSpeed(this.playbackRate), 
      $(document).trigger("video-playing"), setTimeout(this.maxWidthState, 500);
    }, r.prototype.onSpeedChange = function(t) {
      return this.setSpeed($(t.currentTarget).data("speed"));
    }, r.prototype.setSpeed = function(t) {
      var e, i;
      return t !== this.playbackRate && _.defer(this.storePlaybackPreferences), this.playbackRate = this.player.media.playbackRate = t, 
      i = $("#" + this.player.id).find(".mejs-speed"), i.removeClass("current-speed"), 
      i.filter("[data-speed='" + this.playbackRate + "']").addClass("current-speed"), 
      e = $(".mejs-speed-button"), e.removeClass("mejs-speed-15x mejs-speed-2x"), this.playbackRate >= 2 ? e.addClass("mejs-speed-2x") :this.playbackRate >= 1.5 ? e.addClass("mejs-speed-15x") :void 0;
    }, r.prototype.reset = function() {
      try {
        return this.player.pause(), this.player.setCurrentTime(0);
      } catch (t) {}
    }, r.prototype.updateControls = function() {
      return this.updateButton("playpause", {
        icons:[ "play", "pause" ]
      }), this.updateButton("volume"), this.updateButton("captions"), this.updateButton("fullscreen"), 
      this.addSpeedControls(), this.addRewindButton(), this.addConsoleButton(), this.addWorkspacesButton(), 
      this.addSqlPlaygroundButton(), this.markLongDurations(), this.disableContextMenu();
    }, r.prototype.disableContextMenu = function() {
      return $("#video-container, #video-container video").on("contextmenu", function(t) {
        return t.preventDefault(), !1;
      });
    }, r.prototype.durationInMinutes = function() {
      return this.durationInSeconds() / 60;
    }, r.prototype.durationInSeconds = function() {
      return this.data.duration / 1e3;
    }, r.prototype.minimumTimeForCompletion = function() {
      return this.data.minimumTimeForCompletion;
    }, r.prototype.timeContainers = function() {
      return this.player.container.find(".mejs-time");
    }, r.prototype.markLongDurations = function() {
      if (this.durationInMinutes() >= 60) return this.timeContainers().addClass("long-duration");
    }, r.prototype.getButtonHTML = function(t, e) {
      return '<div class="mejs-button mejs-' + t + '-button">' + e + "</div>";
    }, r.prototype.updateButton = function(t, e) {
      var i;
      return null == e && (e = {}), i = e.icons ? e.icons :[ t ], $("#" + this.player.id).find(".mejs-" + t + "-button button").html(this.getIcons(i));
    }, r.prototype.prependButton = function(t, e) {
      return $("#" + this.player.id).find(".mejs-duration-container").after(this.getButtonHTML(t, e));
    }, r.prototype.appendButton = function(t, e) {
      return $("#" + this.player.id).find(".mejs-controls").append(HoganTemplates[t].render(e));
    }, r.prototype.getIcons = function(t) {
      var e;
      return e = "", $(t).each(function(t) {
        return function(i, r) {
          return e += t.getIcon(r);
        };
      }(this)), e;
    }, r.prototype.getIcon = function(t) {
      return _.unescape(this.el.data(t + "-icon"));
    }, r.prototype.addRewindButton = function() {
      return this.prependButton("rewind", "<button>" + this.getIcon("rewind") + "</button>");
    }, r.prototype.addSpeedControls = function() {
      if (null != this.player.media.playbackRate && "flash" !== this.player.media.pluginType) return this.prependButton("speed", "<button>" + this.getIcon("speed") + '</button> <div class="mejs-speed-controls"> <ol>' + this.getSpeedsHTML() + "</ol> </div>");
    }, r.prototype.getSpeedsHTML = function() {
      var t, e, i, r, s;
      for (s = "", i = this.speeds.reverse(), t = 0, e = i.length; t < e; t++) r = i[t], 
      s += '<li class="mejs-speed" data-speed="' + r + '">' + r + 'x <span class="speed-tooltip">' + r + "x</span></li>";
      return s;
    }, r.prototype.rewind = function() {
      return this.player.setCurrentTime(this.el.context.currentTime - 10);
    }, r.prototype.addWorkspacesButton = function() {
      var t;
      if (this.el.data("workspaces")) return t = this.el.data("videoId"), this.appendButton("videos/launch_workspace", {
        videoId:t,
        icon:this.getIcon("workspaces")
      }), Treehouse.init();
    }, r.prototype.addConsoleButton = function() {
      if (this.el.data("console")) return this.appendButton("videos/launch_console", {
        icon:this.getIcon("workspaces")
      });
    }, r.prototype.addSqlPlaygroundButton = function() {
      if (this.el.data("sql-playground-url")) return this.appendButton("videos/launch_sql_playground", {
        icon:this.getIcon("workspaces")
      });
    }, r.prototype.launchWorkspace = function() {
      return this.exitFullScreen();
    }, r.prototype.launchConsole = function() {
      if (this.exitFullScreen(), !window.open("https://console.teamtreehouse.com/window", null, "top=100,left=100,height=600,width=800,scrollbars=0,location=0,menubar=0,toolbar=0")) return alert("It looks like your pop up blocker blocked the console window.");
    }, r.prototype.launchSqlPlayground = function() {
      if (this.exitFullScreen(), !window.open(this.el.data("sql-playground-url"), null, "top=100,left=100,height=600,width=1000,scrollbars=0,location=0,menubar=0,toolbar=0")) return alert("It looks like your pop up blocker blocked the console window.");
    }, r.prototype.exitFullScreen = function() {
      if (this.player.isFullScreen) return this.player.exitFullScreen();
    }, r.prototype.enableChromeFreezeFix = function() {
      return this.el.on("error", function() {
        var t, e;
        return e = this, t = e.currentTime, $(e).one("loadeddata", function() {
          return function() {
            return e.currentTime = t;
          };
        }()), setTimeout(function() {
          return function() {
            return e.load();
          };
        }(), 100);
      });
    }, r.prototype.onVolumeChanged = function() {
      return $.cookie("volume", this.mejsObj.volume, {
        expires:this.cookieExpiration
      }), $.cookie("muted", this.mejsObj.muted, {
        expires:this.cookieExpiration
      });
    }, r.prototype.onLanguageSelect = function(t) {
      var e;
      if (e = t.currentTarget.value, "none" === e && (e = null), e !== this.language) return this.language = e, 
      this.storePlaybackPreferences();
    }, r.prototype.storePlaybackPreferences = function() {
      if ($.cookie("captionLanguage", this.language, {
        expires:this.cookieExpiration
      }), $.cookie("playbackRate", this.playbackRate, {
        expires:this.cookieExpiration
      }), this.playbackPreferencesUrl) return $.post(this.playbackPreferencesUrl, {
        language:this.language,
        playback_rate:this.playbackRate
      });
    }, r.prototype.hideOverlays = function() {
      return $("#resume-video-overlay, #next-step-overlay").removeClass("active");
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r(t) {
      var i, s, n, o, a;
      this.el = t, this.updateCurrentStepClass = e(this.updateCurrentStepClass, this), 
      this.prevStep = e(this.prevStep, this), this.nextStep = e(this.nextStep, this), 
      this.handleKeyEvent = e(this.handleKeyEvent, this), this.indicatorClicked = e(this.indicatorClicked, this), 
      this.locationHash = e(this.locationHash, this), this.hashStep = e(this.hashStep, this), 
      this.onHashChange = e(this.onHashChange, this), this.onWizardClosed = e(this.onWizardClosed, this), 
      this.onWizardOpened = e(this.onWizardOpened, this), this.id = this.el.id, r.__super__.constructor.apply(this, arguments), 
      this.allowCycle = null != (i = this.el.data("wizard-cycle")) && i, this.transitionSpeed = null != (s = this.el.data("wizard-transition-speed")) ? s :300, 
      this.enableArrowKeys = null != (n = this.el.data("wizard-enable-arrow-keys")) && n, 
      this.updateLocationHash = null != (o = this.el.data("wizard-update-location-hash")) && o, 
      this.ignoreTotalSteps = null != (a = this.el.data("wizard-ignore-total-steps")) && a, 
      this.steps = this.el.find(".step"), this.stepIndicators = this.el.find(".step-indicator"), 
      this.document = $(document), this.totalSteps = this.steps.length, this.initialStep = this.el.data("wizard-initial-step") || 1, 
      this.currentStep = this.hashStep(), this.history = [], this.on("click", ".next-step:not(.disabled)", this.nextStep), 
      this.on("click", ".prev-step:not(.disabled)", this.prevStep), this.on("click", ".step-indicator", this.indicatorClicked), 
      this.enableArrowKeys && this.on("keydown", this.handleKeyEvent), this.listenTo(document, "wizard-opened", this.onWizardOpened), 
      this.listenTo(document, "wizard-closed", this.onWizardClosed), this.updateLocationHash && $(window).on("hashchange", this.onHashChange), 
      this.advanceStep(this.currentStep);
    }
    return i(r, t), r.prototype.onWizardOpened = function() {}, r.prototype.onWizardClosed = function() {
      return this.currentStep = this.initialStep, this.advanceStep(this.currentStep);
    }, r.prototype.onHashChange = function() {
      var t;
      if (location.hash !== "#step-" + this.currentStep) return t = this.hashStep(), this.advanceStep(t);
    }, r.prototype.hashStep = function() {
      var t;
      return t = location.hash.match(/^#step-(\d+)$/), t ? parseInt(t[1]) :this.initialStep;
    }, r.prototype.locationHash = function() {
      return location.hash.match(/^#(.+)/)[1];
    }, r.prototype.indicatorClicked = function(t) {
      var e;
      if (null != (null != t ? t.currentTarget :void 0)) return e = $(t.currentTarget).data("step-indicator-step"), 
      null != e && this.advanceStep(e), t.preventDefault();
    }, r.prototype.handleKeyEvent = function(t) {
      if (!this.el.find("input, textarea").is(":focus")) switch (t.keyCode) {
       case 37:
        return this.prevStep();

       case 39:
        return this.nextStep();
      }
    }, r.prototype.nextStep = function(t) {
      var e, i;
      return i = null != (e = $(null != t ? t.currentTarget :void 0).data("step")) ? e :this.currentStep + 1, 
      this.advanceStep(i), this.document.trigger("wizard-next-step"), null != t && t.preventDefault(), 
      i;
    }, r.prototype.prevStep = function(t) {
      var e, i;
      return i = null != (e = $(null != t ? t.currentTarget :void 0).data("step")) ? e :this.currentStep - 1, 
      this.advanceStep(i), this.document.trigger("wizard-previous-step"), null != t && t.preventDefault(), 
      i;
    }, r.prototype.advanceStep = function(t) {
      var e;
      return e = this.currentStep, this.ignoreTotalSteps ? this.currentStep = t :(this.allowCycle || t >= 1 && t <= this.totalSteps) && (this.currentStep = t % this.totalSteps || this.totalSteps), 
      this.currentStep === e ? (this.steps.filter(".step-" + this.currentStep).is(":visible") || (this.steps.hide(), 
      this.steps.filter(".step-" + this.currentStep + ":first").show()), this.updateCurrentStepClass()) :this.steps.filter(".current-wizard-step").fadeOut(this.transitionSpeed, function(t) {
        return function() {
          return t.get(".step-" + t.currentStep + ":first").fadeIn(t.transitionSpeed), t.updateCurrentStepClass();
        };
      }(this)), this.updateLocationHash && (location.hash = "#step-" + this.currentStep), 
      "function" == typeof this.onStepChanged ? this.onStepChanged() :void 0;
    }, r.prototype.updateCurrentStepClass = function() {
      return this.steps.removeClass("current-wizard-step"), this.stepIndicators.removeClass("current-wizard-step"), 
      this.get(".step-" + this.currentStep + ", .step-indicator-" + this.currentStep).addClass("current-wizard-step");
    }, r;
  }(Treehouse.View), window.Wizard = t, Featurette.register("wizard", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.enableForStudent = e(this.enableForStudent, this), this.removeWorkspaceNavHighlight = e(this.removeWorkspaceNavHighlight, this), 
      this.highlightWorkspaceNav = e(this.highlightWorkspaceNav, this), this.findWorkspaceNav = e(this.findWorkspaceNav, this), 
      this.addWorkspaceNav = e(this.addWorkspaceNav, this), this.onWizardClosed = e(this.onWizardClosed, this), 
      this.onWizardOpened = e(this.onWizardOpened, this), this.onStepChanged = e(this.onStepChanged, this), 
      this.selectExistingWorkspace = e(this.selectExistingWorkspace, this), r.__super__.constructor.apply(this, arguments), 
      this.launchExistingWorkspaceButton = this.el.find(".step.existing-workspace .launch-button"), 
      this.workspaceWelcomeIsPresent = this.steps.filter(".workspace-welcome").length > 0, 
      this.workspaceWelcomeIsPresent && (this.currentStep = this.initialStep = 0, this.advanceStep(this.currentStep)), 
      this.on("click", ".step.existing-workspace .workspace-heading a", this.selectExistingWorkspace);
    }
    return i(r, t), r.prototype.selectExistingWorkspace = function(t) {
      var e;
      return e = $(t.currentTarget), e.closest(".workspace-heading").addClass("selected").siblings().removeClass("selected"), 
      this.launchExistingWorkspaceButton.data("id", e.data("workspace-id")), t.preventDefault();
    }, r.prototype.onStepChanged = function() {
      if (this.workspaceWelcomeIsPresent && this.currentStep > 0) return this.initialStep = 1, 
      this.removeWorkspaceNavHighlight();
    }, r.prototype.onWizardOpened = function() {
      if (this.workspaceWelcomeIsPresent) return this.addWorkspaceNav(), 0 === this.currentStep && this.highlightWorkspaceNav(), 
      this.enableForStudent();
    }, r.prototype.onWizardClosed = function() {
      return r.__super__.onWizardClosed.apply(this, arguments), this.removeWorkspaceNavHighlight();
    }, r.prototype.addWorkspaceNav = function() {
      var t;
      if (!(this.findWorkspaceNav().length > 0)) return t = "<li>\n  <a href='/workspaces'>\n    <span class='icon icon-workspaces'></span>\n    <span class='nav-tooltip'>Workspaces</span>\n  </a>\n</li>", 
      $(".global-nav .bottom-anchored").before(t);
    }, r.prototype.findWorkspaceNav = function() {
      return $(".global-nav a[href='/workspaces']");
    }, r.prototype.highlightWorkspaceNav = function() {
      var t;
      return t = this.findWorkspaceNav(), $("#shelf").css("z-index", 501), t.addClass("selected").css({
        overflow:"visible"
      }), t.find(".nav-tooltip").css({
        left:70,
        opacity:1
      });
    }, r.prototype.removeWorkspaceNavHighlight = function() {
      var t;
      return $("#shelf").removeAttr("style"), t = this.findWorkspaceNav(), t.removeClass("selected").removeAttr("style"), 
      t.find(".nav-tooltip").removeAttr("style");
    }, r.prototype.enableForStudent = function() {
      return $.post("/workspaces/enable_for_student");
    }, r;
  }(Wizard), Featurette.register("launch-workspace-wizard", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.toggle = e(this.toggle, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", ".expandable", this.toggle), "undefined" != typeof io && null !== io && this.subscribe();
    }
    return i(r, t), r.prototype.subscribe = function() {
      var t, e;
      if (t = this.el.data("statusChannel")) return e = this.el.data("eventPusherUrl"), 
      this.socket = io(e, {
        query:"channel=" + t
      }), this.socket.on("message", function() {
        return location.reload();
      });
    }, r.prototype.toggle = function(t) {
      var e, i;
      return t.preventDefault(), i = $(t.currentTarget).find(".expandable-toggle"), e = $(t.currentTarget).find(".expandable-content"), 
      $(i).toggleClass("selected"), e.is(":visible") ? this.contract(e) :this.expand(e);
    }, r.prototype.expand = function(t) {
      return t.stop(!0, !0).slideDown("fast");
    }, r.prototype.contract = function(t) {
      return t.stop(!0, !0).slideUp("fast");
    }, r;
  }(Treehouse.View), Featurette.register("degree-project-content", t);
}.call(this), function() {
  var t = function(t, i) {
    function r() {
      this.constructor = t;
    }
    for (var s in i) e.call(i, s) && (t[s] = i[s]);
    return r.prototype = i.prototype, t.prototype = new r(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Treehouse.MarketingTrackVisit = function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.trackVisit({
        page:this.data.page
      }), null != window.optimizely && this.waitForOptimizelyData(function(t) {
        return function() {
          var e;
          if (e = t.optimizelyExperimentData(window.optimizely.get("state")), e.length > 0) return t.trackVisit({
            optimizelyIds:JSON.stringify(e)
          });
        };
      }(this));
    }
    return t(i, e), i.prototype.waitForOptimizelyData = function(t) {
      var e;
      return (e = function() {
        return null != window.optimizely.data ? t() :setTimeout(e, 100);
      })();
    }, i.prototype.trackVisit = function(t) {
      return $.ajax("/track_visit", {
        type:"POST",
        data:t,
        timeout:2e3
      });
    }, i.prototype.optimizelyExperimentData = function(t) {
      var e, i, r, s, n, o;
      for (r = [], o = t.getVariationMap(), s = 0, n = o.length; s < n; s++) i = o[s], 
      e = {
        optimizelyExperimentId:i,
        optimizelyVariationId:o[i].id,
        optimizelyVariationName:o[i].name
      }, r.push(e);
      return r;
    }, i;
  }(Treehouse.View), Featurette.register("marketing-track-visit", Treehouse.MarketingTrackVisit);
}.call(this), function() {
  var t, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.formId = this.data.formid, 
      this.marketoAppId = this.data.marketoAppid, this.marketoEndpoint = this.data.marketoEndpoint, 
      this.successBlock = this.get(".show-on-form-success"), this.showSuccessMessage = this.data.showSuccessMessage, 
      this.loadForm(this.formId, this.marketoAppId, this.marketoEndpoint, this.onSuccess);
    }
    return e(i, t), i.prototype.loadForm = function(t, e, i, r) {
      return MktoForms2.loadForm(i, e, t, function(t) {
        return function(e) {
          t.el.trigger("marketoform:loaded", e.getFormElem()), t.showSuccessMessage && e.onSuccess(function(t, i) {
            return r(e, t, i);
          });
        };
      }(this));
    }, i.prototype.onSuccess = function(t) {
      return t.getFormElem().hide(), $(".show-on-form-success").removeClass("hide-xs"), 
      !1;
    }, i;
  }(Treehouse.View), Featurette.register("marketo-form", t);
}.call(this), function() {
  var TreehouseTour, bind = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  TreehouseTour = function() {
    function TreehouseTour(t) {
      this.element = t, this.killTour = bind(this.killTour, this), this.prevTourStep = bind(this.prevTourStep, this), 
      this.nextTourStep = bind(this.nextTourStep, this), this.startTour = bind(this.startTour, this), 
      this.moveTour = bind(this.moveTour, this), this.scrollStep = bind(this.scrollStep, this), 
      this.stepIndicator = bind(this.stepIndicator, this), this.fadeOutStep = bind(this.fadeOutStep, this), 
      this.positionElement = bind(this.positionElement, this), this.fadeInStep = bind(this.fadeInStep, this), 
      this.handleKeyEvent = bind(this.handleKeyEvent, this), this.offscreenCheck = bind(this.offscreenCheck, this), 
      this.handlePosition = bind(this.handlePosition, this), this.applyOffsets = bind(this.applyOffsets, this), 
      this.tourSteps = bind(this.tourSteps, this), this.tourRefresh = bind(this.tourRefresh, this), 
      this.element.length && ($(document).on("tour:refresh", this.tourRefresh), $(document).on("pjax:end", function(t) {
        return function() {
          return _.delay(t.tourRefresh, 2500);
        };
      }(this)), $(document).trigger("tour:refresh"), $(window).on("resize", _.throttle(function(t) {
        return function() {
          if ($(window).width() < 1022) return t.killTour();
        };
      }(this), 200)));
    }
    return TreehouseTour.prototype.tourRefresh = function() {
      var t, e, i, r;
      return this.$modalTarp = $(".modal-tarp"), this.$tourContainer = $("[data-tour]"), 
      this.$tourTips = $(this.tourSteps()), this.$window = $(window), this.$body = $("body"), 
      this.$headerElements = $("[data-content], .fixed-heading"), this.totalTourSteps = this.$tourTips.length - 1, 
      this.windowHeight = this.$window.height(), this.windowWidth = this.$window.width(), 
      this.modalTarpWidth = this.$modalTarp.outerWidth(), this.classToggleSpeed = 100, 
      this.fadeSpeed = 300, this.smoothScrollSpeed = 400, this.currentStep = 0, this.parentCollection = [], 
      this.tourControlBarClass = "tour-control-bar", this.tourBarPrevClass = "tour-prev", 
      this.tourBarNextClass = "tour-next", this.tourBarCloseClass = "tour-close", this.tourStepIndicatorClass = "step-indicator", 
      this.tourActionListClass = "tour-actions", this.tourTitle = this.$tourContainer.data("tour"), 
      this.tourControlBar = "<div class='" + this.tourControlBarClass + " closed'><div><h3>" + this.tourTitle + "</h3><ul class='" + this.tourActionListClass + "'><li><a class='" + this.tourBarPrevClass + "' data-tour-trigger-prev>Previous Step<svg viewBox='0 0 12 12' class='left-arrow-icon icon'><path d='M0.3,5.3C0.3,5.3,0.3,5.3,0.3,5.3l5-5c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L3.4,5H11c0.6,0,1,0.4,1,1s-0.4,1-1,1H3.5l3.3,3.3c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0l-5-5C-0.1,6.3-0.1,5.7,0.3,5.3z'/></svg></a></li><li class='" + this.tourStepIndicatorClass + "'><span>- of -</span></li><li><a class='" + this.tourBarNextClass + "' data-tour-trigger-step>Next Step<svg viewBox='0 0 12 12'class='right-arrow-icon icon'><path d='M11.7,6.7l-5,5c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4L8.6,7H1C0.5,7,0,6.6,0,6s0.4-1,1-1h7.6L5.3,1.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5,5c0,0,0,0,0,0C12.1,5.7,12.1,6.3,11.7,6.7z'/></svg></a></li><li><a class='" + this.tourBarCloseClass + "' data-tour-trigger-death>Close Tour<svg viewBox='0 0 12 12'class='close-icon icon'><path d='M8.2,6l3.3-3.3c0.6-0.6,0.6-1.6,0-2.2s-1.6-0.6-2.2,0L6,3.8L2.7,0.5c-0.6-0.6-1.6-0.6-2.2,0s-0.6,1.6,0,2.2L3.8,6L0.5,9.3c-0.6,0.6-0.6,1.6,0,2.2c0.6,0.6,1.6,0.6,2.2,0L6,8.2l3.3,3.3c0.6,0.6,1.6,0.6,2.2,0c0.6-0.6,0.6-1.6,0-2.2L8.2,6z'/> </svg></a></li></ul></div></div>", 
      this.applyOffsets(), this.$body.append(this.tourControlBar), this.$tourContainer.children("a").on("click", function(t) {
        return t.preventDefault();
      }), i = "[data-tour-trigger-start]", r = "[data-tour-trigger-step]", e = "[data-tour-trigger-prev]", 
      t = "[data-tour-trigger-death]", $(i).off("click", this.startTour), $(r).off("click", this.nextTourStep), 
      $(e).off("click", this.prevTourStep), $(t).off("click", this.killTour), $(i).on("click", this.startTour), 
      $(r).on("click", this.nextTourStep), $(e).on("click", this.prevTourStep), $(t).on("click", this.killTour), 
      $(document).keydown(this.handleKeyEvent);
    }, TreehouseTour.prototype.tourSteps = function() {
      return _.filter(this.$tourContainer.children("li"), function() {
        return function(t) {
          var e;
          return null == (e = $(t).data("tour-step-if")) || $(e).length > 0;
        };
      }());
    }, TreehouseTour.prototype.applyOffsets = function() {
      return $(this.$tourTips).each(function() {
        var t, e;
        return e = $(this).data("tour-step-selector"), t = $(e).offset().top, $(this).attr("data-offset", t);
      });
    }, TreehouseTour.prototype.handlePosition = function(t, e) {
      var i, r;
      return r = t.data("tour-position"), i = this.offscreenCheck(t, e), i && ("top" === r ? (r = "bottom", 
      t.removeClass("tour-top").addClass("tour-bottom")) :"right" === r ? (r = "left", 
      t.removeClass("tour-right").addClass("tour-left")) :"bottom" === r ? (r = "top", 
      t.removeClass("tour-bottom").addClass("tour-top")) :"left" === r && (r = "right", 
      t.removeClass("tour-left").addClass("tour-right"))), t.attr("data-tour-position", r), 
      t.css({
        left:e[r].left,
        top:e[r].top
      });
    }, TreehouseTour.prototype.offscreenCheck = function(t, e) {
      var i, r;
      return t.offset(), r = t.data("tour-position"), i = !1, "top" === r ? i = e[r].top < 0 :"right" === r ? i = e[r].left + t.outerWidth() > this.windowWidth :"bottom" === r ? i = e[r].top + t.height() > $(document).height() :"left" === r && (i = e[r].left < 0), 
      i;
    }, TreehouseTour.prototype.handleKeyEvent = function(t) {
      var e, i, r;
      if ("[data-tour-trigger-start]", r = "[data-tour-trigger-step]", i = "[data-tour-trigger-prev]", 
      e = "[data-tour-trigger-death]", this.$modalTarp.hasClass("tarp-opened")) switch (t.keyCode) {
       case 27:
        return this.killTour(), $(e).addClass("active"), setTimeout(function() {
          return $(e).removeClass("active");
        }, this.classToggleSpeed);

       case 37:
        return $(i).hasClass("inactive-step") || ($(i).addClass("active"), setTimeout(function() {
          return $(i).removeClass("active");
        }, this.classToggleSpeed)), this.prevTourStep();

       case 39:
        return $(r).hasClass("inactive-step") || ($(r).addClass("active"), setTimeout(function() {
          return $(r).removeClass("active");
        }, this.classToggleSpeed)), this.nextTourStep();
      }
    }, TreehouseTour.prototype.fadeInStep = function(firstStep) {
      var currentStep;
      return currentStep = $(this.$tourTips[this.currentStep]), currentStep.data("on-enter") && eval(currentStep.data("on-enter")), 
      this.positionElement(currentStep, firstStep), currentStep.delay(this.smoothScrollSpeed - 100).fadeIn(this.fadeSpeed), 
      $(this.parentCollection[this.currentStep]).addClass("active-tour-step");
    }, TreehouseTour.prototype.positionElement = function(t) {
      var e, i, r, s, n, o, a, l, h, u, c, p, d, f, g, m;
      return e = $(t.data("tour-step-selector")), 0 === e.length ? null :(e.is(":visible") || e.show(), 
      n = e.offset().top, s = e.offset().left, a = e.outerWidth(), r = e.outerHeight(), 
      c = 10, i = s + a / 2, o = n + r / 2, p = parseInt(t.data("tour-step-width"), 10), 
      parseInt(t.height(), 10), t.css("width", null != (h = p + "px") ? h :""), m = t.outerWidth(), 
      f = t.outerHeight(), d = m / 2, g = f / 2, e.addClass("tour-parent"), this.parentCollection.push(e), 
      void 0 !== $(t).data("tour-step-include-siblings") && (u = e.siblings(":visible"), 
      u.addClass("active-tour-siblings")), l = {
        top:{
          left:i - d,
          top:n - f - c
        },
        right:{
          left:s + a + c,
          top:o - g
        },
        bottom:{
          left:i - d,
          top:n + r + c
        },
        left:{
          left:s - m - c,
          top:o - g
        }
      }, this.handlePosition(t, l));
    }, TreehouseTour.prototype.fadeOutStep = function() {
      var t;
      return t = $(".tour-parent"), t.removeClass("active-tour-step"), t.siblings().removeClass("active-tour-siblings"), 
      this.$tourTips.fadeOut(this.fadeSpeed);
    }, TreehouseTour.prototype.stepIndicator = function() {
      return $("." + this.tourStepIndicatorClass + " span").text(this.currentStep + 1 + " of " + (this.totalTourSteps + 1));
    }, TreehouseTour.prototype.scrollStep = function() {
      var t, e, i, r;
      switch (this.$tourTips = $(this.$tourTips), i = this.$tourTips.eq(this.currentStep).data("offset"), 
      t = this.$tourTips.eq(this.currentStep).outerHeight(), e = this.$tourTips.eq(this.currentStep).data("tour-position"), 
      $(this.$tourTips.eq(this.currentStep)).outerHeight(), r = $(this.$tourTips.eq(this.currentStep).data("tour-step-selector")).height() > this.windowHeight ? i / 2 - t :i - t - this.windowHeight / 3, 
      e) {
       case "top":
        return $("html, body").animate({
          scrollTop:r
        }, this.smoothScrollSpeed);

       case "right":
        return $("html, body").animate({
          scrollTop:i - this.windowHeight / 2
        }, this.smoothScrollSpeed);

       case "bottom":
        return $("html, body").animate({
          scrollTop:i + (t - this.windowHeight / 2)
        }, this.smoothScrollSpeed);

       case "left":
        return $("html, body").animate({
          scrollTop:i - this.windowHeight / 2
        }, this.smoothScrollSpeed);
      }
    }, TreehouseTour.prototype.moveTour = function(t, e) {
      switch (null == e && (e = !1), this.fadeOutStep(), t) {
       case 1:
        this.currentStep = this.currentStep + 1;
        break;

       case 0:
        this.currentStep = 0;
        break;

       case -1:
        this.currentStep = this.currentStep - 1;
        break;

       case null:
        this.currentStep = !1;
      }
      return this.scrollStep(), this.fadeInStep(e), this.stepIndicator(), 0 === this.currentStep ? $("." + this.tourBarPrevClass).addClass("inactive-step") :this.currentStep === this.totalTourSteps ? $("." + this.tourBarNextClass).addClass("inactive-step") :($("." + this.tourBarNextClass).removeClass("inactive-step"), 
      $("." + this.tourBarPrevClass).removeClass("inactive-step"));
    }, TreehouseTour.prototype.startTour = function(t) {
      return t.preventDefault(), this.moveTour(0, !0), this.$modalTarp.addClass("tarp-opened"), 
      this.$headerElements.addClass("tour-active"), $("." + this.tourControlBarClass).removeClass("closed"), 
      "undefined" != typeof Sidebar && null !== Sidebar && (Sidebar.nofix = !0), $(window).trigger("resize");
    }, TreehouseTour.prototype.nextTourStep = function() {
      if (this.currentStep < this.totalTourSteps) return this.moveTour(1);
    }, TreehouseTour.prototype.prevTourStep = function() {
      if (this.currentStep > 0) return this.moveTour(-1);
    }, TreehouseTour.prototype.killTour = function() {
      if (this.$headerElements.hasClass("tour-active")) return this.fadeOutStep(), $("." + this.tourControlBarClass).addClass("closed"), 
      this.$headerElements.removeClass("tour-active"), this.$modalTarp.delay(50).removeClass("tarp-opened"), 
      $("html, body").animate({
        scrollTop:0
      }, 5), "undefined" != typeof Sidebar && null !== Sidebar && (Sidebar.nofix = !1), 
      $(window).trigger("resize");
    }, TreehouseTour;
  }(), $(function() {
    return new TreehouseTour($("[data-tour]"));
  });
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  window.Filters = function() {
    function e(e) {
      if (this.options = e, this.deserializeState = t(this.deserializeState, this), this.serializeState = t(this.serializeState, this), 
      this.reset = t(this.reset, this), this.update = t(this.update, this), this.data = t(this.data, this), 
      "object" != typeof this.options) throw "options are not an object literal";
      if (null == this.options.container) throw "didn't pass 'container' option";
      if ("object" != typeof this.options.binds) throw "didn't pass 'binds' option";
      if ("string" != typeof this.options.basePath) throw "didn't pass 'basePath' option";
      this.binds = this.options.binds, this.container = $(this.options.container), _.each(this.binds, function(t) {
        return function(e) {
          var i;
          return e instanceof jQuery && e.is("[type='text']") ? (i = null, e.on("keyup", function() {
            return clearTimeout(i), i = setTimeout(t.update, 750);
          }), e.on("keydown", function() {
            return clearTimeout(i);
          }), e.on("keydown", function(t) {
            if (13 === t.which) return t.preventDefault();
          })) :e instanceof jQuery && e.is("[type='hidden']") ? e.on("filter:change", t.update) :e.el.on("change", t.update);
        };
      }(this)), this.container.on("pjax:error pjax:timeout", function() {
        return !1;
      }), this.container.on("pjax:end", function() {
        return Treehouse.init();
      }), $(document).on("click", ".filter-reset", this.reset), $(document).on("click", "[data-filter-list-val]", function(t) {
        return function(e) {
          var i, r, s;
          if (e.preventDefault(), r = $(e.currentTarget), r.toggleClass("selected"), i = r.data("filter-list-val").split(":"), 
          s = t.binds[i[0]], s.val(i[1]), s instanceof jQuery) return s.trigger("filter:change");
        };
      }(this)), this.deserializeState();
    }
    return e.prototype.data = function() {
      var t;
      return t = new Object(), _.each(this.binds, function(e, i) {
        return t[i] = e.val();
      }), t;
    }, e.prototype.update = function(t) {
      return t && t.preventDefault(), this.serializeState(), $.pjax({
        push:!1,
        url:"/" + this.options.basePath,
        container:this.container,
        data:this.data(),
        scrollTo:!1
      }), !1;
    }, e.prototype.reset = function() {
      return _.each(this.binds, function(t) {
        return t.val("");
      });
    }, e.prototype.serializeState = function() {
      var t;
      return t = _.reduce(this.binds, function() {
        return function(t, e, i) {
          return e = e.val(), void 0 === e && (e = ""), e = String(e).replace(" ", "-"), e && t.push(i + ":" + e), 
          t;
        };
      }(), []), t = t.join("/"), history.replaceState(null, null, "/" + this.options.basePath + "/" + t), 
      $(document).trigger("filters:serialized");
    }, e.prototype.deserializeState = function() {
      var t;
      return t = location.pathname.split("?")[0], t = t.replace(this.options.basePath, ""), 
      t = t.split("/"), _.each(t, function(t) {
        return function(e) {
          var i, r, s;
          if ("" !== e) return r = e.split(":"), i = r[0], s = r[1], i in t.binds ? (t.binds[i].val(s, !1), 
          $(document).trigger("filter:deserialized", [ e ])) :void 0;
        };
      }(this)), $(document).trigger("filters:deserialized"), Treehouse.init();
    }, e;
  }();
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("dashboard-index", function(i) {
    function r() {
      this.loadFilters = t(this.loadFilters, this), r.__super__.constructor.apply(this, arguments), 
      this.viewingAll = !1, this.listenTo(document, "bookmark:removed", function(t) {
        return function(e) {
          return t.filters.update(e);
        };
      }(this)), _.delay(this.loadFilters, 100), this.on("pjax:end", this.clearElementsCache);
    }
    return e(r, i), r.prototype.loadFilters = function() {
      return this.filters || (this.filters = new Filters({
        basePath:"home",
        container:"#home-pjax",
        binds:{
          view:Featurette.get("view")
        }
      }));
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("degree-marketing-banner", Treehouse.DegreeMarketingBanner = function(i) {
    function r() {
      this.click = t(this.click, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", "[data-close-marketing-banner]", this.click);
    }
    return e(r, i), r.prototype.click = function() {
      return this.el.remove(), $.post("/degree_memberships/optout");
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.SubuserDegreeAlert = function(i) {
    function r() {
      this.dismissExpirationAlert = t(this.dismissExpirationAlert, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", ".subuser-expired-td-alert .close-alert", this.dismissExpirationAlert);
    }
    return e(r, i), r.prototype.dismissExpirationAlert = function() {
      return $.post(this.el.data("dismiss-expiration-alert-path"));
    }, r;
  }(Treehouse.View), Featurette.register("subuser-degree-alert", Treehouse.SubuserDegreeAlert);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("questions-tab", Treehouse.QuestionsTab = function(i) {
    function r() {
      this.loadQuestions = t(this.loadQuestions, this), r.__super__.constructor.apply(this, arguments), 
      this.tab = $("#tab-questions"), this.discussions = this.get(".discussion-list"), 
      this.step_type = this.discussions.data("step-type"), this.step_id = this.discussions.data("step-id") || 0, 
      this.step_id && this.discussions.size() && this.loadQuestions();
    }
    return e(r, i), r.prototype.loadQuestions = function() {
      var t;
      return t = {
        limit:15,
        sort:"high-quality"
      }, t[this.step_type] = this.step_id, $.ajax({
        url:"/community/step_suggested_posts",
        data:t,
        dataType:"json",
        success:function(t) {
          return function(e) {
            return t.discussions.html(e.html), "" === e.html ? (t.el.addClass("no-questions"), 
            t.el.find("[data-related-questions]").attr("class", "grid-100")) :t.tab.find("a").append('<span class="discussions-counter">' + t.discussions.find(".discussion-meta").size() + "</span>");
          };
        }(this)
      });
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, i) {
    function r() {
      this.constructor = t;
    }
    for (var s in i) e.call(i, s) && (t[s] = i[s]);
    return r.prototype = i.prototype, t.prototype = new r(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("teachers-notes-tab", Treehouse.TeachersNotesTab = function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.el.find("[data-teachers-notes] a").attr("target", "_blank");
    }
    return t(i, e), i;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("radial-progress-example", Treehouse.RadialProgressExample = function(i) {
    function r() {
      this.updateProgress = t(this.updateProgress, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", "ul li", this.updateProgress);
    }
    return e(r, i), r.prototype.updateProgress = function(t) {
      var e;
      return t.preventDefault(), e = $(t.currentTarget), e.addClass("current").siblings().removeClass("current"), 
      Featurette.get(this.el.find("svg").attr("id")).setProgress(parseInt(e.find("a").get(0).text));
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("treehouse-email-notifications", Treehouse.TreehouseEmailNotifications = function(i) {
    function r() {
      this.disableAllEmail = t(this.disableAllEmail, this), this.emailPreferenceSelect = t(this.emailPreferenceSelect, this), 
      this.loadEloquaSubscriptions = t(this.loadEloquaSubscriptions, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", "[name='notification_preferences[disable_all_email]']", this.disableAllEmail), 
      this.on("click", "[data-email-preference]", this.emailPreferenceSelect), this.data.loadSubscriptions && this.waitForGlobal("_elqInitialized", this.loadEloquaSubscriptions);
    }
    return e(r, i), r.prototype.loadEloquaSubscriptions = function() {
      var t;
      return t = "<C_EmailAddress>" + this.data.email + "</C_EmailAddress>", window._elqQ.push([ "elqDataLookup", this.data.subscriptionsDataLookupKey, t ]), 
      this.waitForGlobal("GetElqGroupMembershipStatus", function(t) {
        return function() {
          return t.get("[data-subscription-lookup-id]").each(function() {
            var t, e;
            return t = $(this), e = GetElqGroupMembershipStatus(t.data("subscriptionLookupId")), 
            t.attr("checked", e);
          });
        };
      }(this));
    }, r.prototype.emailPreferenceSelect = function(t) {
      if (t.target.checked) return this.get("[name='notification_preferences[disable_all_email]']").prop("checked", !1);
    }, r.prototype.disableAllEmail = function(t) {
      if (t.target.checked) return this.get("[data-email-preference]").prop("checked", !1);
    }, r.prototype.waitForGlobal = function(t, e) {
      var i;
      return (i = function() {
        return null != window[t] ? e() :setTimeout(i, 50);
      })();
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r(t) {
      this.onHelpVideoEnd = e(this.onHelpVideoEnd, this), this.playHelpVideo = e(this.playHelpVideo, this), 
      this.collectSurveyData = e(this.collectSurveyData, this), this.submitSurveyData = e(this.submitSurveyData, this), 
      this.onSkipSurvey = e(this.onSkipSurvey, this), this.onCompleteSurvey = e(this.onCompleteSurvey, this), 
      this.onTopicFilterClicked = e(this.onTopicFilterClicked, this), this.onTrackListing = e(this.onTrackListing, this), 
      this.onHashChange = e(this.onHashChange, this), this.onHelpClicked = e(this.onHelpClicked, this), 
      this.unanswerQuestion = e(this.unanswerQuestion, this), this.answerQuestion = e(this.answerQuestion, this), 
      this.advanceStep = e(this.advanceStep, this), this.nextStep = e(this.nextStep, this), 
      this.listenToEvents = e(this.listenToEvents, this), r.__super__.constructor.call(this, t), 
      this.helpVideo = this.get("[data-help-video]"), this.helpVideoContainer = this.helpVideo.parents("[data-help-video-container]"), 
      this.surveyData = {}, this.listenToEvents();
    }
    return i(r, t), r.prototype.listenToEvents = function() {
      if (this.on("click", "li.topic-filter a", this.onTopicFilterClicked), this.on("click", "[data-submit-survey]", this.onCompleteSurvey), 
      this.on("click", "[data-replay-help-video]", this.playHelpVideo), this.on("click", "[data-back-button]", this.onBackClicked), 
      this.on("click", "[data-leads-to=help]", this.onHelpClicked), this.on("click", "[data-skip-survey]", this.onSkipSurvey), 
      this.on("click", "[data-leads-to=track_listing]", this.onTrackListing), this.helpVideo && this.helpVideo.get(0)) return this.helpVideo.get(0).addEventListener("ended", this.onHelpVideoEnd);
    }, r.prototype.nextStep = function(t) {
      return this.answerQuestion(t), r.__super__.nextStep.apply(this, arguments);
    }, r.prototype.advanceStep = function() {
      return r.__super__.advanceStep.apply(this, arguments), this.unanswerQuestion();
    }, r.prototype.answerQuestion = function(t) {
      var e;
      return e = $(t.currentTarget), $.ajax("/surveys/" + this.el.data("purpose") + "/answer_question", {
        data:{
          question_id:e.closest(".step").data("question-id"),
          answer_id:e.data("answer-id")
        },
        type:"PUT"
      });
    }, r.prototype.unanswerQuestion = function() {
      var t;
      if (t = $("." + this.locationHash()).data("question-id")) return $.ajax("/surveys/" + this.el.data("purpose") + "/unanswer_question", {
        data:{
          question_id:t
        },
        type:"DELETE"
      });
    }, r.prototype.onBackClicked = function(t) {
      return t.preventDefault(), window.history.go(-1);
    }, r.prototype.onHelpClicked = function() {
      return this.surveyData.not_sure = !0;
    }, r.prototype.onHashChange = function(t) {
      var e, i, s, n, o;
      for (t.preventDefault(), n = this.get("[data-featurette='video-player']"), i = 0, 
      s = n.length; i < s; i++) e = n[i], null != (o = Featurette.get(e.id)) && o.reset();
      return $("html,body").animate({
        scrollTop:0
      }), r.__super__.onHashChange.apply(this, arguments);
    }, r.prototype.onTrackListing = function(t) {
      return t.stopPropagation(), t.preventDefault(), this.surveyData.action_to_take = "track_listing", 
      this.onCompleteSurvey(t);
    }, r.prototype.onTopicFilterClicked = function(t) {
      return t.stopPropagation(), t.preventDefault(), this.surveyData.topic_id = $(t.currentTarget).parent().data("topic-id"), 
      this.surveyData.action_to_take = "library", this.onCompleteSurvey(t);
    }, r.prototype.onCompleteSurvey = function(t) {
      var e;
      return t.preventDefault(), this.collectSurveyData(t), e = $(t.currentTarget).data("track-join-url"), 
      e ? ($.rails.disableFormElements(this.el), this.joinTrack(e).fail(this.redirectToDashboard).done(function(t) {
        return function() {
          return t.submitSurveyData("PUT", "/surveys/" + t.el.data("purpose") + "/complete");
        };
      }(this))) :this.submitSurveyData("PUT", "/surveys/" + this.el.data("purpose") + "/complete");
    }, r.prototype.joinTrack = function(t) {
      return $.ajax(t, {
        type:"PUT"
      });
    }, r.prototype.onSkipSurvey = function(t) {
      return t.preventDefault(), this.surveyData.skipped = !0, this.surveyData.step_skipped = $(t.currentTarget).closest(".step").data("step-skipped"), 
      this.submitSurveyData("PUT", "/surveys/" + this.el.data("purpose") + "/complete");
    }, r.prototype.submitSurveyData = function(t, e) {
      return $.ajax(e, {
        data:{
          survey_response:this.surveyData
        },
        type:t,
        error:this.redirectToDashboard,
        success:this.redirectAfterSubmit
      });
    }, r.prototype.redirectAfterSubmit = function(t, e, i) {
      return window.location = i.getResponseHeader("Location");
    }, r.prototype.redirectToDashboard = function() {
      return window.location.replace("/home");
    }, r.prototype.collectSurveyData = function(t) {
      var e;
      return this.surveyData.track_to_join = $(t.currentTarget).data("track-id"), (e = this.surveyData).action_to_take || (e.action_to_take = $(t.currentTarget).data("action-to-take"));
    }, r.prototype.playHelpVideo = function(t) {
      return t.preventDefault(), this.helpVideoContainer.removeClass("video-ended"), this.helpVideo.trigger("play");
    }, r.prototype.onHelpVideoEnd = function() {
      return this.helpVideoContainer.addClass("video-ended").removeClass("box-content").addClass("box-header"), 
      this.get("[data-help-video-box-header]").addClass("video-ended");
    }, r;
  }(Wizard), Featurette.register("surveys-wizard", t), window.SurveyWizard = t;
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.SurveysToggleDescription = function(i) {
    function r() {
      this.toggleDescription = t(this.toggleDescription, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", "[data-show-track-card=true], [data-info-icon]", this.toggleDescription);
    }
    return e(r, i), r.prototype.toggleDescription = function(t) {
      return t.preventDefault(), t.stopPropagation(), this.el.toggleClass("showing-description").siblings().removeClass("showing-description");
    }, r;
  }(Treehouse.View), Featurette.register("surveys-toggle-description", Treehouse.SurveysToggleDescription);
}.call(this), function() {
  var t;
  t = function() {
    function t(t) {
      this.$el = $(t), this.id = this.$el.data("item-id"), this.type = this.$el.data("item-type"), 
      this.$showEl = $("#show-" + this.type + "-" + this.id), this.$editEl = $("#edit-" + this.type + "-" + this.id), 
      this.$cancelEl = $("#cancel-edit-" + this.type + "-" + this.id), this.$followButton = $("a[data-featurette='follow']"), 
      this.$el.click(function(t) {
        return function() {
          if (t.previousValue = t.$editEl.find(".new-discussion textarea").val(), t.$showEl.hide(), 
          t.$editEl.show(), "post" === t.type) return t.$followButton.hide();
        };
      }(this)), this.$cancelEl.click(function(t) {
        return function(e) {
          return e.preventDefault(), t.$editEl.hide(), t.$showEl.show(), t.$editEl.find(".new-discussion textarea").val(t.previousValue), 
          t.$followButton.show();
        };
      }(this));
    }
    return t;
  }(), Featurette.register("forum-editing", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.success = e(this.success, this), this.dismissAnswerRequest = e(this.dismissAnswerRequest, this), 
      this.$el = $(t), this.post = this.$el.closest(".discussion-item-sticky"), this.post_link = this.post.find(".discussion-title a"), 
      this.post_link.size() ? (this.view = "index", this.post_slug_url = this.post_link.prop("href")) :(this.view = "show", 
      this.post_slug_url = window.location.pathname), this.$el.click(this.dismissAnswerRequest);
    }
    return t.prototype.dismissAnswerRequest = function() {
      return $.post(this.post_slug_url + "/dismiss_request", {}, this.success);
    }, t.prototype.success = function() {
      return "index" === this.view ? $("#sort a.selected").click() :this.$el.parent().hide();
    }, t;
  }(), Featurette.register("forum-answer-request-dismissal", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("forum-post-preview", function(i) {
    function r(e) {
      this.reset = t(this.reset, this), this.togglePreviewButton = t(this.togglePreviewButton, this), 
      this.error = t(this.error, this), this.success = t(this.success, this), this.listener = t(this.listener, this), 
      r.__super__.constructor.apply(this, arguments), this.$el = $(e), this.$formitem = this.$el.closest(".form-item"), 
      this.$textarea = this.$formitem.find("textarea"), this.$mentions = this.$formitem.find(".mentions"), 
      this.$preview = this.$formitem.find(".forum-preview"), this.$attachedCode = this.$el.closest("form").find("#attached_code"), 
      this.$tooltip = this.$el.find(".tooltip strong"), this.on("click", this.listener), 
      this.$textarea.on("input", this.togglePreviewButton);
    }
    return e(r, i), r.prototype.listener = function(t) {
      var e, i;
      return t.preventDefault(), this.$textarea.focus(), this.$el.toggleClass("selected"), 
      this.$formitem.find("label").focus(), this.$el.hasClass("selected") ? (this.$tooltip.text("Compose"), 
      e = this.$textarea.val(), this.$el.closest("form").find("#attach_code").is(":checked") && (e = this.$textarea.val() + "\n\n" + this.$attachedCode.val()), 
      i = $.post("/community/preview", {
        post_body:e
      }), i.success(this.success), i.fail(this.error)) :(this.$tooltip.text("Preview"), 
      this.$preview.hide(), this.$textarea.show(), this.$textarea.focus());
    }, r.prototype.success = function(t) {
      return this.$preview.html(t.html), this.$preview.show(), this.$mentions.hide(), 
      this.$textarea.hide();
    }, r.prototype.error = function() {
      return alert("There was a problem generating a preview. Please try again."), this.$preview.html(""), 
      this.$mentions.show(), this.$textarea.show();
    }, r.prototype.togglePreviewButton = function(t) {
      return t.preventDefault(), "" === this.$textarea.val() ? this.$el.fadeOut() :this.$el.fadeIn();
    }, r.prototype.reset = function() {
      return this.$preview.html("").hide(), this.$textarea.show(), this.$tooltip.text("Preview"), 
      this.$el.removeClass("selected");
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("filter-tag-breadcrumb", function(i) {
    function r() {
      this.render = t(this.render, this), this.callback = t(this.callback, this), this.updateBreadcrumb = t(this.updateBreadcrumb, this), 
      this.clearBreadcrumb = t(this.clearBreadcrumb, this);
      var e;
      r.__super__.constructor.apply(this, arguments), e = $(document), e.on("click", "#filter-breadcrumb [data-filter-tag]", this.updateBreadcrumb), 
      e.on("click", ".tags [data-filter-tag]", this.render), e.on("filter:deserialized", this.callback), 
      this.on("click", "[data-filter-clear-tags]", this.clearBreadcrumb);
    }
    return e(r, i), r.prototype.clearBreadcrumb = function(t) {
      return Featurette.get("forum-index").deselectAll(t), this.el.hide();
    }, r.prototype.updateBreadcrumb = function(t) {
      var e, i;
      return e = $(t.target), i = e.data("filter-list-val"), "topic" === e.data("filter-tag-type") ? this.clearBreadcrumb() :this.el.find("[data-filter-list-val='" + i + "'][data-filter-tag]").parent().nextUntil("li.clear-results").remove();
    }, r.prototype.callback = function(t, e) {
      var i;
      if (i = $("[data-filter-list-val='" + e + "'][data-filter-tag]"), i.length) return this.render({
        target:i
      });
    }, r.prototype.render = function(t) {
      var e, i, r;
      if (e = $(t.target), "topic" !== e.data("filter-tag-type")) return i = e.data("filter-list-val"), 
      e = e.closest("ul.tags").clone(), e.find("[data-filter-list-val='" + i + "'][data-filter-tag]").parent().nextAll().remove(), 
      r = HoganTemplates["community/filter_breadcrumb"].render({
        tags:e.html(),
        icon_close:this.el.data("icon-close")
      }), this.el.html(r), this.el.show();
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("forum-index", function(i) {
    function r() {
      this.deselectAll = t(this.deselectAll, this), this.onPjaxEnd = t(this.onPjaxEnd, this), 
      this.onPjaxStart = t(this.onPjaxStart, this), this.listeners = t(this.listeners, this), 
      r.__super__.constructor.apply(this, arguments), this.container = $("[data-forums-pjax]"), 
      _.defer(this.listeners);
    }
    return e(r, i), r.prototype.listeners = function() {
      return this.container.on("pjax:start", this.onPjaxStart), this.container.on("pjax:end", this.onPjaxEnd), 
      this.filters = new Filters({
        basePath:"community",
        container:"[data-forums-pjax]",
        binds:{
          sort:Featurette.get("sort"),
          topic:Featurette.get("topic"),
          q:$("#q"),
          stage:$("#stage_id"),
          syllabus:$("#syllabus_id"),
          video:$("#video_id"),
          quiz:$("#quiz_id"),
          "code-challenge":$("#code-challenge_id"),
          "degree-project":$("#degree-project_id"),
          "local-code-challenge":$("#local-code-challenge_id")
        }
      }), this.on("click", ".form-search .search-button", function(t) {
        return function(e) {
          return t.filters.update(e);
        };
      }(this)), this.on("click", "[data-filter-tag]", this.deselectAll), this.on("click", "#topic li", function(t) {
        return function(e) {
          return t.deselectAll(e), Featurette.get("filter-breadcrumb").clearBreadcrumb(e), 
          t.filters.update(e), $(".filters-container").hide();
        };
      }(this)), $(document).on("filters:serialized", function() {
        return function() {
          return $("#forum_post_topic_id option").each(function() {
            if (this.text.toLowerCase() === Featurette.get("topic").val().replace("-", " ")) return this.selected = !0;
          }), $.uniform.update();
        };
      }());
    }, r.prototype.onPjaxStart = function() {
      return this.container.addClass("transparent-while-loading");
    }, r.prototype.onPjaxEnd = function() {
      return this.container.removeClass("transparent-while-loading");
    }, r.prototype.deselectAll = function(t) {
      return $("#stage_id, #syllabus_id, #video_id, #quiz_id, #code-challenge_id, #degree-project_id, #local-code-challenge-id").not($(t.currentTarget).data("filter-tag-type") + "_id").val("");
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.loadForumTips = e(this.loadForumTips, this), this.findAttachedCode = e(this.findAttachedCode, this), 
      this.toggleAttachedCode = e(this.toggleAttachedCode, this), this.searchForSimilarPosts = e(this.searchForSimilarPosts, this), 
      this.pollQuestions = e(this.pollQuestions, this), this.syncQuestion = e(this.syncQuestion, this), 
      this.nextStep = e(this.nextStep, this), this.onWizardClosed = e(this.onWizardClosed, this), 
      this.onWizardOpened = e(this.onWizardOpened, this), r.__super__.constructor.apply(this, arguments), 
      this.on("keyup", "[data-post-title], [data-question-details]", this.handleTextInputKeys), 
      this.titles = [ "Ask a Question", "Is your question unique?", "Add question details" ], 
      this.title = this.el.closest(".contained").find("h1"), this.noResults = this.el.find(".no-existing-questions"), 
      this.questionsContainer = this.el.find(".suggested-questions ul"), this.postBody = this.el.find("#forum_post_body"), 
      this.attachedCode = this.el.find("#attached_code"), this.attachedFiles = this.el.find(".code-attachments"), 
      this.has_errors = !1, this.transitionSpeed = 0, this.steps.filter(".step-2").find('[name="forum_post[subject]"]').on("keyup", _.throttle(this.pollQuestions, 2e3)), 
      this.el.find("#attach_code").on("change", this.toggleAttachedCode), this.steps.find("textarea").on("change, blur, keyup", $.proxy(this.validate, this)), 
      this.steps.find("select").on("change", $.proxy(this.validate, this));
    }
    return i(r, t), r.prototype.onWizardOpened = function() {
      return this.currentStepPage = this.steps.filter(".step-" + this.currentStep), this.setStepTitle(), 
      this.clearFields(), this.validate(), this.findAttachedCode(), this.loadForumTips();
    }, r.prototype.onWizardClosed = function() {
      return r.__super__.onWizardClosed.apply(this, arguments), this.clearFields(), this.question = "";
    }, r.prototype.nextStep = function() {
      return r.__super__.nextStep.apply(this, arguments), this.currentStepPage = this.steps.filter(".step-" + this.currentStep), 
      this.syncQuestion(), this.setStepTitle(), this.validate();
    }, r.prototype.clearFields = function() {
      return this.el.find("textarea").val("").blur(), Featurette.get("forum-post-preview").reset();
    }, r.prototype.syncQuestion = function() {
      return this.question = this.currentStepPage.prev().find('[name="forum_post[subject]"]').val(), 
      this.steps.find('[name="forum_post[subject]"]').val(this.question).blur(), 2 === this.currentStep && this.searchForSimilarPosts(), 
      this.steps.find('[name="forum_post[subject]"]:visible').trigger("autosize.resize");
    }, r.prototype.pollQuestions = function() {
      var t;
      if (t = this.question, this.question = this.currentStepPage.find('[name="forum_post[subject]"]').val().trim(), 
      t !== this.question && "" !== this.question) return this.searchForSimilarPosts();
    }, r.prototype.validate = function() {
      var t, e, i;
      return t = this.currentStepPage.find("textarea"), e = this.el, i = !1, t.each(function() {
        if ("" === this.value.trim()) return i = !0;
      }), 3 === this.currentStep && "Choose a topic..." === this.currentStepPage.find("select option:selected").text() && (i = !0), 
      this.has_errors = i, this.has_errors ? e.find("button.button-primary").attr("disabled", !0).addClass("inactive disabled") :this.resetErrors(), 
      !0;
    }, r.prototype.resetErrors = function() {
      return this.currentStepPage.find(".error-message").remove(), this.currentStepPage.find("button").attr("disabled", !1).removeClass("inactive disabled"), 
      this.has_errors = !1, !0;
    }, r.prototype.setStepTitle = function() {
      return this.title.text(this.titles[this.currentStep - 1]);
    }, r.prototype.searchForSimilarPosts = function() {
      return $.ajax({
        url:window.location.origin + "/community/suggested_posts",
        data:{
          q:this.question
        },
        dataType:"json",
        success:function(t) {
          return function(e) {
            return t.questionsContainer.empty(), "" === e.html.trim() ? (t.noResults.show(), 
            t.questionsContainer.hide()) :(t.noResults.hide(), t.questionsContainer.show().append(e.html));
          };
        }(this)
      });
    }, r.prototype.toggleAttachedCode = function() {
      return this.attachedFiles.toggle();
    }, r.prototype.findAttachedCode = function() {
      var t, e, i, r, s, n, o, a, l, h, u, c, p;
      if (t = "", document.getElementById("react-cc-submission")) for (u = document.getElementById("react-cc-submission").getAttribute("data-submission"), 
      s = JSON.parse(u).files, n = 0, a = s.length; n < a; n++) i = s[n], c = i.content, 
      r = i.source, this.attachedFiles.append("<div class='file'><span class='icon icon-doc'></span>" + r + "</div>"), 
      t += "\n\n```" + r + "\n" + c + "\n```"; else if (null != Featurette.get("cc-container") && (p = Featurette.get("cc-container").workspace)) for (h = p.editors, 
      o = 0, l = h.length; o < l; o++) e = h[o], c = $(e.codeMirror.getTextArea()), i = c.data("file"), 
      this.attachedFiles.empty(), this.attachedFiles.append("<div class='file'><span class='icon icon-doc'></span>" + i + "</div>"), 
      t += "\n\n```" + i + "\n" + e.getValue() + "\n```";
      return this.attachedCode.val(t);
    }, r.prototype.loadForumTips = function() {
      return $.ajax({
        url:"/community/forum_tips",
        dataType:"html",
        success:function() {
          return function(t) {
            return $("body").append($(t)), Featurette.load();
          };
        }()
      });
    }, r.prototype.handleTextInputKeys = function(t) {
      return t.stopPropagation();
    }, r;
  }(Wizard), window.ForumPostWizard = t, Featurette.register("forum-post-wizard", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.error = e(this.error, this), this.success = e(this.success, this), this.listener = e(this.listener, this), 
      r.__super__.constructor.apply(this, arguments), this.on("click", this.listener);
    }
    return i(r, t), r.prototype.listener = function(t) {
      var e;
      return t.stopPropagation(), t.preventDefault(), this.el.attr("disabled", "disabled"), 
      e = $.post(this.el.prop("href"), {
        _method:this.data.method
      }), e.success(this.success), e.fail(this.error);
    }, r.prototype.success = function() {
      return this.el.removeAttr("disabled"), "not-following" === this.data.status ? (this.el.html(this.data.unfollowHtml).addClass("secondary").attr("href", this.data.unfollowUrl), 
      this.data.status = "following", this.data.method = "delete") :(this.el.html(this.data.followHtml).removeClass("secondary").attr("href", this.data.followUrl), 
      this.data.status = "not-following", this.data.method = "put");
    }, r.prototype.error = function() {
      return this.el.removeAttr("disabled"), alert("Doh! There was a problem with your request. Try again.");
    }, r;
  }(Treehouse.View), Featurette.register("follow", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.cancelNewComment = e(this.cancelNewComment, this), this.showNewComment = e(this.showNewComment, this), 
      this.$el = $(t), this.id = this.$el.data("item-id"), this.type = this.$el.data("item-type"), 
      this.$newEl = $("#new-" + this.type + "-comment-" + this.id), this.$cancelEl = $("#cancel-new-" + this.type + "-comment-" + this.id), 
      this.$followButton = $("a[data-featurette='follow']"), this.$mobileDiscussionButtons = $(".discussion-mobile-buttons"), 
      this.$editForumPost = $(".edit_forum_post"), this.$el.click(this.showNewComment), 
      this.$cancelEl.click(this.cancelNewComment);
    }
    return t.prototype.showNewComment = function(t) {
      return t.preventDefault(), "post" === this.type && this.$followButton.hide(), this.$mobileDiscussionButtons.hide(), 
      this.$mobileDiscussionButtons.find(".discussion-answer-post").hide(), this.$newEl.show();
    }, t.prototype.cancelNewComment = function(t) {
      if (t.preventDefault(), this.$newEl.hide().find("textarea").val(""), this.$mobileDiscussionButtons.show(), 
      this.$mobileDiscussionButtons.find("#discussion-answer-post-alt").show(), !this.$editForumPost.is(":visible")) return this.$followButton.show();
    }, t;
  }(), Featurette.register("forum-commenting", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("bookmark-actions", function(i) {
    function r() {
      this.confirmAction = t(this.confirmAction, this), this.cancelAction = t(this.cancelAction, this), 
      this.triggerAction = t(this.triggerAction, this), r.__super__.constructor.apply(this, arguments), 
      this.on("pjax:end", _.bind(this.init, this)), this.init();
    }
    return e(r, i), r.prototype.init = function() {
      return this.clearElementsCache(), this.stopListening(), this.on("click", "[data-add-bookmark]", this.triggerAction), 
      this.on("click", "[data-cancel-bookmark]", this.cancelAction), this.on("click", "[data-confirm-bookmark]", this.confirmAction);
    }, r.prototype.triggerAction = function(t) {
      return t.preventDefault(), this.get("[data-bookmark-tarp]").show().css({
        opacity:"1"
      });
    }, r.prototype.cancelAction = function(t) {
      return t.preventDefault(), this.get("[data-bookmark-tarp]").css({
        opacity:"0"
      }), this.el.delay(200).queue(function(t) {
        return function() {
          return t.get("[data-bookmark-tarp]").hide(), t.el.dequeue();
        };
      }(this));
    }, r.prototype.confirmAction = function(t) {
      return t.preventDefault(), this.el.data("remove-card-url") ? (this.removeCard(), 
      this.get("[data-bookmark-tarp]").css({
        opacity:"0"
      }), this.el.closest("li").addClass("destroyed"), this.el.delay(500).queue(function(t) {
        return function() {
          return t.el.closest("li").hide(), t.el.dequeue();
        };
      }(this))) :(this.addCard(), this.get("[data-bookmark-tarp-text]").html("<h4>Bookmarked!</h4>"), 
      this.el.delay(1e3).queue(function(t) {
        return function() {
          return t.get("[data-bookmark-tarp]").css({
            opacity:"0"
          }), t.el.closest(".lesson-card").find(".lesson-progress").removeClass("toggle-add-option"), 
          t.el.dequeue, t.el.remove();
        };
      }(this)));
    }, r.prototype.removeCard = function() {
      return $.ajax(this.el.data("remove-card-url"), {
        type:"DELETE"
      });
    }, r.prototype.addCard = function() {
      return $.post(this.el.data("add-card-url"));
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.loadMobileAnswerForm = e(this.loadMobileAnswerForm, this), this.dismissAnswer = e(this.dismissAnswer, this), 
      r.__super__.constructor.apply(this, arguments), this.on("click", "[data-cancel-forum-answer]", this.dismissAnswer), 
      this.$mobileButtons = this.el.closest(".discussion-mobile-buttons"), this.$mobileAddAnswerButton = this.$mobileButtons.find("#discussion-answer-post-alt"), 
      this.$mobileAddAnswerButton.on("click", this.loadMobileAnswerForm);
    }
    return i(r, t), r.prototype.dismissAnswer = function(t) {
      return t.stopPropagation(), t.preventDefault(), this.el.hide(), this.$mobileAddAnswerButton.show();
    }, r.prototype.loadMobileAnswerForm = function(t) {
      return t.preventDefault(), this.$mobileButtons.find(".discussion-answer-post").show(), 
      this.$mobileAddAnswerButton.hide();
    }, r;
  }(Treehouse.View), Featurette.register("forum-answering", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.updateVotingCount = e(this.updateVotingCount, this), this.vote = e(this.vote, this), 
      this.selectBest = e(this.selectBest, this), this.$el = $(t), this.id = this.$el.data("answer-id"), 
      this.cancelVoteUrl = this.$el.data("cancel-vote-url"), this.$answerWrap = this.$el.find(".discussion-highlight"), 
      this.$avatar = this.$el.find(".avatar"), this.$bestEl = this.$el.find(".vote-best-answer"), 
      this.$upvoteEl = this.$el.find(".vote-up"), this.$downvoteEl = this.$el.find(".vote-down"), 
      this.$bestEl.find("a").click(this.selectBest), this.$upvoteEl.find("a").click(this.vote), 
      this.$downvoteEl.find("a").click(this.vote);
    }
    return t.prototype.selectBest = function(t) {
      var e, i;
      return t.preventDefault(), i = this.$bestEl.find("a").data("url"), this.$answerWrap.hasClass("discussion-answer-best") ? (e = this.$answerWrap, 
      this.$answerWrap.removeClass("discussion-answer-best"), this.$avatar.removeClass("avatar-light-green-bg"), 
      this.$bestEl.addClass("selected")) :(e = $(".discussion-answer-best"), e.removeClass("discussion-answer-best"), 
      e.find(".vote-best-answer").addClass("selected"), this.$answerWrap.addClass("discussion-answer-best"), 
      this.$avatar.addClass("avatar-light-green-bg"), this.$bestEl.removeClass("selected")), 
      $.ajax({
        url:i,
        type:"POST",
        error:function(t) {
          return function() {
            return t.$answerWrap.removeClass("discussion-answer-best"), t.$bestEl.addClass("selected"), 
            e.addClass("discussion-answer-best"), e.find(".vote-best-answer").removeClass("selected"), 
            alert("There was a problem marking the answer as best.");
          };
        }(this)
      });
    }, t.prototype.vote = function(t) {
      var e, i, r, s, n, o, a, l, h, u, c, p;
      return t.preventDefault(), e = $(t.currentTarget), l = this.$upvoteEl.find(".vote-count").text(), 
      s = this.$el.find(".voted"), s.length > 0 && (h = s.parent().hasClass("vote-up") ? 1 :-1), 
      o = e.parent().hasClass("vote-up") ? 1 :-1, i = this.$upvoteEl.find(".vote-count"), 
      e.hasClass("voted") ? (p = this.cancelVoteUrl, e.removeClass("voted"), a = parseInt(null != (u = i.text()) ? u :0) - o) :(p = e.data("url"), 
      r = this.$el.find(".voted"), r.removeClass("voted"), e.addClass("voted"), n = parseInt(null != (c = i.text()) ? c :0), 
      a = null != h ? n - (h - o) :n + o), i.text(a), $.ajax({
        url:p,
        type:"POST",
        success:this.updateVotingCount,
        error:function(t) {
          return function() {
            return e.removeClass("voted"), r.addClass("voted"), t.updateVotingCount(l), alert("There was a problem counting your vote.");
          };
        }(this)
      });
    }, t.prototype.updateVotingCount = function(t) {
      var e, i;
      return i = null != (e = parseInt(t)) ? e :0, this.$upvoteEl.find(".vote-count").text(i), 
      this.$upvoteEl.find("a").toggleClass("vote-count-zero", 0 === i);
    }, t;
  }(), Featurette.register("forum-voting", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.loadBoard = e(this.loadBoard, this), this.selectTopic = e(this.selectTopic, this), 
      this.selectPeriod = e(this.selectPeriod, this), this.el = $(t), this.type = this.el.data("type"), 
      this.periodSelector = this.el.find(".periods a"), this.topicSelector = this.el.find("select"), 
      this.board = this.el.siblings(".leaderboard-list"), this.topicSelector.on("change", this.selectTopic), 
      this.periodSelector.on("click", this.selectPeriod);
    }
    return t.prototype.selectPeriod = function(t) {
      return t.preventDefault(), $(t.target).addClass("selected").closest("li").siblings().find("a").removeClass("selected"), 
      this.loadBoard();
    }, t.prototype.selectTopic = function() {
      return this.topicSelector.siblings("span").text(this.topicSelector.find("option:selected").text()), 
      this.loadBoard();
    }, t.prototype.loadBoard = function() {
      return $.ajax({
        url:"/community/leaderboard",
        data:{
          board_type:this.type,
          topic:this.topicSelector.find("option:selected").val(),
          period:this.periodSelector.closest("ul").find("a.selected").data("period")
        },
        success:function(t) {
          return function(e) {
            return t.board.empty(), t.board.append(e), t.board.find(".icon").css("background-color", t.topicSelector.find(":selected").data("color"));
          };
        }(this)
      });
    }, t;
  }(), Featurette.register("leaderboards-navigation", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.CreditCardValidator = function(i) {
    function r() {
      this.clearErrors = t(this.clearErrors, this), this.addError = t(this.addError, this), 
      this.validateLuhn = t(this.validateLuhn, this), this.validateCardNumber = t(this.validateCardNumber, this), 
      this.validatePresence = t(this.validatePresence, this), this.validate = t(this.validate, this), 
      r.__super__.constructor.apply(this, arguments), this.fieldPrefix = "credit_card", 
      this.fields = [ "number", "cvv", "month", "year" ], this.errors = {};
    }
    return e(r, i), r.prototype.validate = function() {
      return this.clearErrors(), this.validatePresence() && this.validateCardNumber();
    }, r.prototype.validatePresence = function() {
      var t, e, i, r;
      r = !0, i = this.fields;
      for (e in i) t = i[e], "" === this.get("#" + this.fieldPrefix + "_" + t).val() && (this.addError(t, "This is required."), 
      r = !1);
      return r;
    }, r.prototype.validateCardNumber = function() {
      var t;
      return t = new RegExp("^[0-9]{14,20}$"), !(!t.test(this.get("#" + this.fieldPrefix + "_number").val().replace(/\s+/g, "")) || !this.validateLuhn()) || (this.addError("number", "There was a problem verifying your credit card details."), 
      !1);
    }, r.prototype.validateLuhn = function() {
      var t, e;
      return e = !0, t = this.get("#" + this.fieldPrefix + "_number").val().replace(/\s+/g, ""), 
      _(t.split("")).reduceRight(function(t, i) {
        return i = parseInt(i), (e = !e) && (i *= 2), i > 9 && (i -= 9), t + i;
      }, 0) % 10 == 0;
    }, r.prototype.addError = function(t, e) {
      return this.errors[this.fieldPrefix + "_" + t] = e;
    }, r.prototype.clearErrors = function() {
      return this.errors = {};
    }, r;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  Treehouse.CreditCardTokenizer = function() {
    function e(e, i, r, s) {
      this.updateNonce = t(this.updateNonce, this), this.tokenizeCard = t(this.tokenizeCard, this), 
      this.form = $("#" + e), this.paymentMethodNonce = this.form.find("[data-braintree-name=payment_method_nonce]"), 
      this.successCallback = r, this.failureCallback = s, this.client = new braintree.api.Client({
        clientToken:i.client_token
      }), BraintreeData.setup(i.merchant_id, e, i.environment);
    }
    return e.prototype.tokenizeCard = function(t, e, i, r) {
      return this.client.tokenizeCard({
        number:t,
        expirationDate:e + "/" + i,
        cvv:r
      }, this.updateNonce);
    }, e.prototype.updateNonce = function(t, e) {
      return t ? this.failureCallback() :(this.paymentMethodNonce.val(e), this.successCallback());
    }, e;
  }();
}.call(this);

var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global :this || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
  "use strict";
  _gsScope._gsDefine("TweenMax", [ "core.Animation", "core.SimpleTimeline", "TweenLite" ], function(t, e, i) {
    var r = function(t) {
      var e, i = [], r = t.length;
      for (e = 0; e !== r; i.push(t[e++])) ;
      return i;
    }, s = function(t, e, i) {
      var r, s, n = t.cycle;
      for (r in n) s = n[r], t[r] = "function" == typeof s ? s.call(e[i], i) :s[i % s.length];
      delete t.cycle;
    }, n = function(t, e, r) {
      i.call(this, t, e, r), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, 
      this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = n.prototype.render;
    }, o = 1e-10, a = i._internals, l = a.isSelector, h = a.isArray, u = n.prototype = i.to({}, .1, {}), c = [];
    n.version = "1.18.2", u.constructor = n, u.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, 
    n.getTweensOf = i.getTweensOf, n.lagSmoothing = i.lagSmoothing, n.ticker = i.ticker, 
    n.render = i.render, u.invalidate = function() {
      return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, 
      this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this);
    }, u.updateTo = function(t, e) {
      var r, s = this.ratio, n = this.vars.immediateRender || t.immediateRender;
      e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, 
      this._uncache(!1), this._gc ? this._enabled(!0, !1) :this._timeline.insert(this, this._startTime - this._delay));
      for (r in t) this.vars[r] = t[r];
      if (this._initted || n) if (e) this._initted = !1, n && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), 
      this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), 
      this._time / this._duration > .998) {
        var o = this._totalTime;
        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1);
      } else if (this._initted = !1, this._init(), this._time > 0 || n) for (var a, l = 1 / (1 - s), h = this._firstPT; h; ) a = h.s + h.c, 
      h.c *= l, h.s = a - h.c, h = h._next;
      return this;
    }, u.render = function(t, e, i) {
      this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
      var r, s, n, l, h, u, c, p, d = this._dirty ? this.totalDuration() :this._totalDuration, f = this._time, g = this._totalTime, m = this._cycle, y = this._duration, _ = this._rawPrevTime;
      if (t >= d - 1e-7 ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, 
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) :0) :(this._time = y, 
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) :1), this._reversed || (r = !0, 
      s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), 
      (0 > _ || 0 >= t && t >= -1e-7 || _ === o && "isPause" !== this.data) && _ !== t && (i = !0, 
      _ > o && (s = "onReverseComplete")), this._rawPrevTime = p = !e || t || _ === t ? t :o)) :1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, 
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) :0, (0 !== g || 0 === y && _ > 0) && (s = "onReverseComplete", 
      r = this._reversed), 0 > t && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || i) && (_ >= 0 && (i = !0), 
      this._rawPrevTime = p = !e || t || _ === t ? t :o)), this._initted || (i = !0)) :(this._totalTime = this._time = t, 
      0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 
      0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, 
      this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time), this._time > y ? this._time = y :this._time < 0 && (this._time = 0)), 
      this._easeType ? (h = this._time / y, u = this._easeType, c = this._easePower, (1 === u || 3 === u && h >= .5) && (h = 1 - h), 
      3 === u && (h *= 2), 1 === c ? h *= h :2 === c ? h *= h * h :3 === c ? h *= h * h * h :4 === c && (h *= h * h * h * h), 
      1 === u ? this.ratio = 1 - h :2 === u ? this.ratio = h :this._time / y < .5 ? this.ratio = h / 2 :this.ratio = 1 - h / 2) :this.ratio = this._ease.getRatio(this._time / y)), 
      f === this._time && !i && m === this._cycle) return void (g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
      if (!this._initted) {
        if (this._init(), !this._initted || this._gc) return;
        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = f, 
        this._totalTime = g, this._rawPrevTime = _, this._cycle = m, a.lazyTweens.push(this), 
        void (this._lazy = [ t, e ]);
        this._time && !r ? this.ratio = this._ease.getRatio(this._time / y) :r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 :1));
      }
      for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0), 
      0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) :s || (s = "_dummyGS")), 
      this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this._callback("onStart"))), 
      n = this._firstPT; n; ) n.f ? n.t[n.p](n.c * this.ratio + n.s) :n.t[n.p] = n.c * this.ratio + n.s, 
      n = n._next;
      this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), 
      e || (this._totalTime !== g || r) && this._callback("onUpdate")), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), 
      s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), 
      r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), 
      !e && this.vars[s] && this._callback(s), 0 === y && this._rawPrevTime === o && p !== o && (this._rawPrevTime = 0));
    }, n.to = function(t, e, i) {
      return new n(t, e, i);
    }, n.from = function(t, e, i) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(t, e, i);
    }, n.fromTo = function(t, e, i, r) {
      return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, 
      new n(t, e, r);
    }, n.staggerTo = n.allTo = function(t, e, o, a, u, p, d) {
      a = a || 0;
      var f, g, m, y, _ = 0, v = [], b = function() {
        o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), u.apply(d || o.callbackScope || this, p || c);
      }, w = o.cycle, T = o.startAt && o.startAt.cycle;
      for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = r(t))), 
      t = t || [], 0 > a && (t = r(t), t.reverse(), a *= -1), f = t.length - 1, m = 0; f >= m; m++) {
        g = {};
        for (y in o) g[y] = o[y];
        if (w && s(g, t, m), T) {
          T = g.startAt = {};
          for (y in o.startAt) T[y] = o.startAt[y];
          s(g.startAt, t, m);
        }
        g.delay = _ + (g.delay || 0), m === f && u && (g.onComplete = b), v[m] = new n(t[m], e, g), 
        _ += a;
      }
      return v;
    }, n.staggerFrom = n.allFrom = function(t, e, i, r, s, o, a) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(t, e, i, r, s, o, a);
    }, n.staggerFromTo = n.allFromTo = function(t, e, i, r, s, o, a, l) {
      return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, 
      n.staggerTo(t, e, r, s, o, a, l);
    }, n.delayedCall = function(t, e, i, r, s) {
      return new n(e, 0, {
        delay:t,
        onComplete:e,
        onCompleteParams:i,
        callbackScope:r,
        onReverseComplete:e,
        onReverseCompleteParams:i,
        immediateRender:!1,
        useFrames:s,
        overwrite:0
      });
    }, n.set = function(t, e) {
      return new n(t, 0, e);
    }, n.isTweening = function(t) {
      return i.getTweensOf(t, !0).length > 0;
    };
    var p = function(t, e) {
      for (var r = [], s = 0, n = t._first; n; ) n instanceof i ? r[s++] = n :(e && (r[s++] = n), 
      r = r.concat(p(n, e)), s = r.length), n = n._next;
      return r;
    }, d = n.getAllTweens = function(e) {
      return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e));
    };
    n.killAll = function(t, i, r, s) {
      null == i && (i = !0), null == r && (r = !0);
      var n, o, a, l = d(0 != s), h = l.length, u = i && r && s;
      for (a = 0; h > a; a++) o = l[a], (u || o instanceof e || (n = o.target === o.vars.onComplete) && r || i && !n) && (t ? o.totalTime(o._reversed ? 0 :o.totalDuration()) :o._enabled(!1, !1));
    }, n.killChildTweensOf = function(t, e) {
      if (null != t) {
        var s, o, u, c, p, d = a.tweenLookup;
        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = r(t)), h(t)) for (c = t.length; --c > -1; ) n.killChildTweensOf(t[c], e); else {
          s = [];
          for (u in d) for (o = d[u].target.parentNode; o; ) o === t && (s = s.concat(d[u].tweens)), 
          o = o.parentNode;
          for (p = s.length, c = 0; p > c; c++) e && s[c].totalTime(s[c].totalDuration()), 
          s[c]._enabled(!1, !1);
        }
      }
    };
    var f = function(t, i, r, s) {
      i = !1 !== i, r = !1 !== r, s = !1 !== s;
      for (var n, o, a = d(s), l = i && r && s, h = a.length; --h > -1; ) o = a[h], (l || o instanceof e || (n = o.target === o.vars.onComplete) && r || i && !n) && o.paused(t);
    };
    return n.pauseAll = function(t, e, i) {
      f(!0, t, e, i);
    }, n.resumeAll = function(t, e, i) {
      f(!1, t, e, i);
    }, n.globalTimeScale = function(e) {
      var r = t._rootTimeline, s = i.ticker.time;
      return arguments.length ? (e = e || o, r._startTime = s - (s - r._startTime) * r._timeScale / e, 
      r = t._rootFramesTimeline, s = i.ticker.frame, r._startTime = s - (s - r._startTime) * r._timeScale / e, 
      r._timeScale = t._rootTimeline._timeScale = e, e) :r._timeScale;
    }, u.progress = function(t) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t :t) + this._cycle * (this._duration + this._repeatDelay), !1) :this._time / this.duration();
    }, u.totalProgress = function(t) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, !1) :this._totalTime / this.totalDuration();
    }, u.time = function(t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), 
      this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) :0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), 
      this.totalTime(t, e)) :this._time;
    }, u.duration = function(e) {
      return arguments.length ? t.prototype.duration.call(this, e) :this._duration;
    }, u.totalDuration = function(t) {
      return arguments.length ? -1 === this._repeat ? this :this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) :(this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 :this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, 
      this._dirty = !1), this._totalDuration);
    }, u.repeat = function(t) {
      return arguments.length ? (this._repeat = t, this._uncache(!0)) :this._repeat;
    }, u.repeatDelay = function(t) {
      return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) :this._repeatDelay;
    }, u.yoyo = function(t) {
      return arguments.length ? (this._yoyo = t, this) :this._yoyo;
    }, n;
  }, !0), _gsScope._gsDefine("TimelineLite", [ "core.Animation", "core.SimpleTimeline", "TweenLite" ], function(t, e, i) {
    var r = function(t) {
      e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, 
      this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, 
      this._onUpdate = this.vars.onUpdate;
      var i, r, s = this.vars;
      for (r in s) i = s[r], l(i) && -1 !== i.join("").indexOf("{self}") && (s[r] = this._swapSelfInParams(i));
      l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger);
    }, s = 1e-10, n = i._internals, o = r._internals = {}, a = n.isSelector, l = n.isArray, h = n.lazyTweens, u = n.lazyRender, c = _gsScope._gsDefine.globals, p = function(t) {
      var e, i = {};
      for (e in t) i[e] = t[e];
      return i;
    }, d = function(t, e, i) {
      var r, s, n = t.cycle;
      for (r in n) s = n[r], t[r] = "function" == typeof s ? s.call(e[i], i) :s[i % s.length];
      delete t.cycle;
    }, f = o.pauseCallback = function() {}, g = function(t) {
      var e, i = [], r = t.length;
      for (e = 0; e !== r; i.push(t[e++])) ;
      return i;
    }, m = r.prototype = new e();
    return r.version = "1.18.2", m.constructor = r, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, 
    m.to = function(t, e, r, s) {
      var n = r.repeat && c.TweenMax || i;
      return e ? this.add(new n(t, e, r), s) :this.set(t, r, s);
    }, m.from = function(t, e, r, s) {
      return this.add((r.repeat && c.TweenMax || i).from(t, e, r), s);
    }, m.fromTo = function(t, e, r, s, n) {
      var o = s.repeat && c.TweenMax || i;
      return e ? this.add(o.fromTo(t, e, r, s), n) :this.set(t, s, n);
    }, m.staggerTo = function(t, e, s, n, o, l, h, u) {
      var c, f, m = new r({
        onComplete:l,
        onCompleteParams:h,
        callbackScope:u,
        smoothChildTiming:this.smoothChildTiming
      }), y = s.cycle;
      for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = g(t)), 
      n = n || 0, 0 > n && (t = g(t), t.reverse(), n *= -1), f = 0; f < t.length; f++) c = p(s), 
      c.startAt && (c.startAt = p(c.startAt), c.startAt.cycle && d(c.startAt, t, f)), 
      y && d(c, t, f), m.to(t[f], e, c, f * n);
      return this.add(m, o);
    }, m.staggerFrom = function(t, e, i, r, s, n, o, a) {
      return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, r, s, n, o, a);
    }, m.staggerFromTo = function(t, e, i, r, s, n, o, a, l) {
      return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, 
      this.staggerTo(t, e, r, s, n, o, a, l);
    }, m.call = function(t, e, r, s) {
      return this.add(i.delayedCall(0, t, e, r), s);
    }, m.set = function(t, e, r) {
      return r = this._parseTimeOrLabel(r, 0, !0), null == e.immediateRender && (e.immediateRender = r === this._time && !this._paused), 
      this.add(new i(t, 0, e), r);
    }, r.exportRoot = function(t, e) {
      t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
      var s, n, o = new r(t), a = o._timeline;
      for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, 
      s = a._first; s; ) n = s._next, e && s instanceof i && s.target === s.vars.onComplete || o.add(s, s._startTime - s._delay), 
      s = n;
      return a.add(o, 0), o;
    }, m.add = function(s, n, o, a) {
      var h, u, c, p, d, f;
      if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, s)), !(s instanceof t)) {
        if (s instanceof Array || s && s.push && l(s)) {
          for (o = o || "normal", a = a || 0, h = n, u = s.length, c = 0; u > c; c++) l(p = s[c]) && (p = new r({
            tweens:p
          })), this.add(p, h), "string" != typeof p && "function" != typeof p && ("sequence" === o ? h = p._startTime + p.totalDuration() / p._timeScale :"start" === o && (p._startTime -= p.delay())), 
          h += a;
          return this._uncache(!0);
        }
        if ("string" == typeof s) return this.addLabel(s, n);
        if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
        s = i.delayedCall(0, s);
      }
      if (e.prototype.add.call(this, s, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (d = this, 
      f = d.rawTime() > s._startTime; d._timeline; ) f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) :d._gc && d._enabled(!0, !1), 
      d = d._timeline;
      return this;
    }, m.remove = function(e) {
      if (e instanceof t) {
        this._remove(e, !1);
        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline :t._rootTimeline;
        return e._startTime = (e._paused ? e._pauseTime :i._time) - (e._reversed ? e.totalDuration() - e._totalTime :e._totalTime) / e._timeScale, 
        this;
      }
      if (e instanceof Array || e && e.push && l(e)) {
        for (var r = e.length; --r > -1; ) this.remove(e[r]);
        return this;
      }
      return "string" == typeof e ? this.removeLabel(e) :this.kill(null, e);
    }, m._remove = function(t, i) {
      e.prototype._remove.call(this, t, i);
      var r = this._last;
      return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), 
      this._totalTime = this._totalDuration) :this._time = this._totalTime = this._duration = this._totalDuration = 0, 
      this;
    }, m.append = function(t, e) {
      return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
    }, m.insert = m.insertMultiple = function(t, e, i, r) {
      return this.add(t, e || 0, i, r);
    }, m.appendMultiple = function(t, e, i, r) {
      return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r);
    }, m.addLabel = function(t, e) {
      return this._labels[t] = this._parseTimeOrLabel(e), this;
    }, m.addPause = function(t, e, r, s) {
      var n = i.delayedCall(0, f, r, s || this);
      return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, 
      this.add(n, t);
    }, m.removeLabel = function(t) {
      return delete this._labels[t], this;
    }, m.getLabelTime = function(t) {
      return null != this._labels[t] ? this._labels[t] :-1;
    }, m._parseTimeOrLabel = function(e, i, r, s) {
      var n;
      if (s instanceof t && s.timeline === this) this.remove(s); else if (s && (s instanceof Array || s.push && l(s))) for (n = s.length; --n > -1; ) s[n] instanceof t && s[n].timeline === this && this.remove(s[n]);
      if ("string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof e && null == this._labels[i] ? e - this.duration() :0, r);
      if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration()); else {
        if (-1 === (n = e.indexOf("="))) return null == this._labels[e] ? r ? this._labels[e] = this.duration() + i :i :this._labels[e] + i;
        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, r) :this.duration();
      }
      return Number(e) + i;
    }, m.seek = function(t, e) {
      return this.totalTime("number" == typeof t ? t :this._parseTimeOrLabel(t), !1 !== e);
    }, m.stop = function() {
      return this.paused(!0);
    }, m.gotoAndPlay = function(t, e) {
      return this.play(t, e);
    }, m.gotoAndStop = function(t, e) {
      return this.pause(t, e);
    }, m.render = function(t, e, i) {
      this._gc && this._enabled(!0, !1);
      var r, n, o, a, l, c, p, d = this._dirty ? this.totalDuration() :this._totalDuration, f = this._time, g = this._startTime, m = this._timeScale, y = this._paused;
      if (t >= d - 1e-7) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (n = !0, 
      a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0, 
      this._rawPrevTime > s && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t :s, 
      t = d + 1e-4; else if (1e-7 > t) if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", 
      n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = n = !0, 
      a = "onReverseComplete") :this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t; else {
        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t :s, 
        0 === t && n) for (r = this._first; r && 0 === r._startTime; ) r._duration || (n = !1), 
        r = r._next;
        t = 0, this._initted || (l = !0);
      } else {
        if (this._hasPause && !this._forcingPlayhead && !e) {
          if (t >= f) for (r = this._first; r && r._startTime <= t && !c; ) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (c = r), 
          r = r._next; else for (r = this._last; r && r._startTime >= t && !c; ) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (c = r), 
          r = r._prev;
          c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay));
        }
        this._totalTime = this._time = this._rawPrevTime = t;
      }
      if (this._time !== f && this._first || i || l || c) {
        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 
        0 === f && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), 
        (p = this._time) >= f) for (r = this._first; r && (o = r._next, p === this._time && (!this._paused || y)); ) (r._active || r._startTime <= p && !r._paused && !r._gc) && (c === r && this.pause(), 
        r._reversed ? r.render((r._dirty ? r.totalDuration() :r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) :r.render((t - r._startTime) * r._timeScale, e, i)), 
        r = o; else for (r = this._last; r && (o = r._prev, p === this._time && (!this._paused || y)); ) {
          if (r._active || r._startTime <= f && !r._paused && !r._gc) {
            if (c === r) {
              for (c = r._prev; c && c.endTime() > this._time; ) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale :(t - c._startTime) * c._timeScale, e, i), 
              c = c._prev;
              c = null, this.pause();
            }
            r._reversed ? r.render((r._dirty ? r.totalDuration() :r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) :r.render((t - r._startTime) * r._timeScale, e, i);
          }
          r = o;
        }
        this._onUpdate && (e || (h.length && u(), this._callback("onUpdate"))), a && (this._gc || (g === this._startTime || m !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (n && (h.length && u(), 
        this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), 
        !e && this.vars[a] && this._callback(a)));
      }
    }, m._hasPausedChild = function() {
      for (var t = this._first; t; ) {
        if (t._paused || t instanceof r && t._hasPausedChild()) return !0;
        t = t._next;
      }
      return !1;
    }, m.getChildren = function(t, e, r, s) {
      s = s || -9999999999;
      for (var n = [], o = this._first, a = 0; o; ) o._startTime < s || (o instanceof i ? !1 !== e && (n[a++] = o) :(!1 !== r && (n[a++] = o), 
      !1 !== t && (n = n.concat(o.getChildren(!0, e, r)), a = n.length))), o = o._next;
      return n;
    }, m.getTweensOf = function(t, e) {
      var r, s, n = this._gc, o = [], a = 0;
      for (n && this._enabled(!0, !0), r = i.getTweensOf(t), s = r.length; --s > -1; ) (r[s].timeline === this || e && this._contains(r[s])) && (o[a++] = r[s]);
      return n && this._enabled(!1, !0), o;
    }, m.recent = function() {
      return this._recent;
    }, m._contains = function(t) {
      for (var e = t.timeline; e; ) {
        if (e === this) return !0;
        e = e.timeline;
      }
      return !1;
    }, m.shiftChildren = function(t, e, i) {
      i = i || 0;
      for (var r, s = this._first, n = this._labels; s; ) s._startTime >= i && (s._startTime += t), 
      s = s._next;
      if (e) for (r in n) n[r] >= i && (n[r] += t);
      return this._uncache(!0);
    }, m._kill = function(t, e) {
      if (!t && !e) return this._enabled(!1, !1);
      for (var i = e ? this.getTweensOf(e) :this.getChildren(!0, !0, !1), r = i.length, s = !1; --r > -1; ) i[r]._kill(t, e) && (s = !0);
      return s;
    }, m.clear = function(t) {
      var e = this.getChildren(!1, !0, !0), i = e.length;
      for (this._time = this._totalTime = 0; --i > -1; ) e[i]._enabled(!1, !1);
      return !1 !== t && (this._labels = {}), this._uncache(!0);
    }, m.invalidate = function() {
      for (var e = this._first; e; ) e.invalidate(), e = e._next;
      return t.prototype.invalidate.call(this);
    }, m._enabled = function(t, i) {
      if (t === this._gc) for (var r = this._first; r; ) r._enabled(t, !0), r = r._next;
      return e.prototype._enabled.call(this, t, i);
    }, m.totalTime = function() {
      this._forcingPlayhead = !0;
      var e = t.prototype.totalTime.apply(this, arguments);
      return this._forcingPlayhead = !1, e;
    }, m.duration = function(t) {
      return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), 
      this) :(this._dirty && this.totalDuration(), this._duration);
    }, m.totalDuration = function(t) {
      if (!arguments.length) {
        if (this._dirty) {
          for (var e, i, r = 0, s = this._last, n = 999999999999; s; ) e = s._prev, s._dirty && s.totalDuration(), 
          s._startTime > n && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) :n = s._startTime, 
          s._startTime < 0 && !s._paused && (r -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale), 
          this.shiftChildren(-s._startTime, !1, -9999999999), n = 0), i = s._startTime + s._totalDuration / s._timeScale, 
          i > r && (r = i), s = e;
          this._duration = this._totalDuration = r, this._dirty = !1;
        }
        return this._totalDuration;
      }
      return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) :this;
    }, m.paused = function(e) {
      if (!e) for (var i = this._first, r = this._time; i; ) i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), 
      i = i._next;
      return t.prototype.paused.apply(this, arguments);
    }, m.usesFrames = function() {
      for (var e = this._timeline; e._timeline; ) e = e._timeline;
      return e === t._rootFramesTimeline;
    }, m.rawTime = function() {
      return this._paused ? this._totalTime :(this._timeline.rawTime() - this._startTime) * this._timeScale;
    }, r;
  }, !0), _gsScope._gsDefine("TimelineMax", [ "TimelineLite", "TweenLite", "easing.Ease" ], function(t, e, i) {
    var r = function(e) {
      t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, 
      this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0;
    }, s = 1e-10, n = e._internals, o = n.lazyTweens, a = n.lazyRender, l = new i(null, null, 1, 0), h = r.prototype = new t();
    return h.constructor = r, h.kill()._gc = !1, r.version = "1.18.2", h.invalidate = function() {
      return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, 
      this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this);
    }, h.addCallback = function(t, i, r, s) {
      return this.add(e.delayedCall(0, t, r, s), i);
    }, h.removeCallback = function(t, e) {
      if (t) if (null == e) this._kill(null, t); else for (var i = this.getTweensOf(t, !1), r = i.length, s = this._parseTimeOrLabel(e); --r > -1; ) i[r]._startTime === s && i[r]._enabled(!1, !1);
      return this;
    }, h.removePause = function(e) {
      return this.removeCallback(t._internals.pauseCallback, e);
    }, h.tweenTo = function(t, i) {
      i = i || {};
      var r, s, n, o = {
        ease:l,
        useFrames:this.usesFrames(),
        immediateRender:!1
      };
      for (s in i) o[s] = i[s];
      return o.time = this._parseTimeOrLabel(t), r = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, 
      n = new e(this, r, o), o.onStart = function() {
        n.target.paused(!0), n.vars.time !== n.target.time() && r === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale), 
        i.onStart && n._callback("onStart");
      }, n;
    }, h.tweenFromTo = function(t, e, i) {
      i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
        onComplete:this.seek,
        onCompleteParams:[ t ],
        callbackScope:this
      }, i.immediateRender = !1 !== i.immediateRender;
      var r = this.tweenTo(e, i);
      return r.duration(Math.abs(r.vars.time - t) / this._timeScale || .001);
    }, h.render = function(t, e, i) {
      this._gc && this._enabled(!0, !1);
      var r, n, l, h, u, c, p, d, f = this._dirty ? this.totalDuration() :this._totalDuration, g = this._duration, m = this._time, y = this._totalTime, _ = this._startTime, v = this._timeScale, b = this._rawPrevTime, w = this._paused, T = this._cycle;
      if (t >= f - 1e-7) this._locked || (this._totalTime = f, this._cycle = this._repeat), 
      this._reversed || this._hasPausedChild() || (n = !0, h = "onComplete", u = !!this._timeline.autoRemoveChildren, 
      0 === this._duration && (0 >= t && t >= -1e-7 || 0 > b || b === s) && b !== t && this._first && (u = !0, 
      b > s && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t :s, 
      this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 :(this._time = g, t = g + 1e-4); else if (1e-7 > t) if (this._locked || (this._totalTime = this._cycle = 0), 
      this._time = 0, (0 !== m || 0 === g && b !== s && (b > 0 || 0 > t && b >= 0) && !this._locked) && (h = "onReverseComplete", 
      n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = n = !0, 
      h = "onReverseComplete") :b >= 0 && this._first && (u = !0), this._rawPrevTime = t; else {
        if (this._rawPrevTime = g || !e || t || this._rawPrevTime === t ? t :s, 0 === t && n) for (r = this._first; r && 0 === r._startTime; ) r._duration || (n = !1), 
        r = r._next;
        t = 0, this._initted || (u = !0);
      } else if (0 === g && 0 > b && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 
      0 !== this._repeat && (c = g + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 
      0 !== this._cycle && this._cycle === this._totalTime / c && this._cycle--, this._time = this._totalTime - this._cycle * c, 
      this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time), this._time > g ? (this._time = g, 
      t = g + 1e-4) :this._time < 0 ? this._time = t = 0 :t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
        if ((t = this._time) >= m) for (r = this._first; r && r._startTime <= t && !p; ) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (p = r), 
        r = r._next; else for (r = this._last; r && r._startTime >= t && !p; ) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (p = r), 
        r = r._prev;
        p && (this._time = t = p._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay));
      }
      if (this._cycle !== T && !this._locked) {
        var k = this._yoyo && 0 != (1 & T), C = k === (this._yoyo && 0 != (1 & this._cycle)), x = this._totalTime, S = this._cycle, P = this._rawPrevTime, $ = this._time;
        if (this._totalTime = T * g, this._cycle < T ? k = !k :this._totalTime += g, this._time = m, 
        this._rawPrevTime = 0 === g ? b - 1e-4 :b, this._cycle = T, this._locked = !0, m = k ? 0 :g, 
        this.render(m, e, 0 === g), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), 
        m !== this._time) return;
        if (C && (m = k ? g + 1e-4 :-1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !w) return;
        this._time = $, this._totalTime = x, this._cycle = S, this._rawPrevTime = P;
      }
      if (!(this._time !== m && this._first || i || u || p)) return void (y !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
      if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== y && t > 0 && (this._active = !0), 
      0 === y && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), 
      (d = this._time) >= m) for (r = this._first; r && (l = r._next, d === this._time && (!this._paused || w)); ) (r._active || r._startTime <= this._time && !r._paused && !r._gc) && (p === r && this.pause(), 
      r._reversed ? r.render((r._dirty ? r.totalDuration() :r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) :r.render((t - r._startTime) * r._timeScale, e, i)), 
      r = l; else for (r = this._last; r && (l = r._prev, d === this._time && (!this._paused || w)); ) {
        if (r._active || r._startTime <= m && !r._paused && !r._gc) {
          if (p === r) {
            for (p = r._prev; p && p.endTime() > this._time; ) p.render(p._reversed ? p.totalDuration() - (t - p._startTime) * p._timeScale :(t - p._startTime) * p._timeScale, e, i), 
            p = p._prev;
            p = null, this.pause();
          }
          r._reversed ? r.render((r._dirty ? r.totalDuration() :r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) :r.render((t - r._startTime) * r._timeScale, e, i);
        }
        r = l;
      }
      this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), h && (this._locked || this._gc || (_ === this._startTime || v !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (n && (o.length && a(), 
      this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), 
      !e && this.vars[h] && this._callback(h)));
    }, h.getActive = function(t, e, i) {
      null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
      var r, s, n = [], o = this.getChildren(t, e, i), a = 0, l = o.length;
      for (r = 0; l > r; r++) s = o[r], s.isActive() && (n[a++] = s);
      return n;
    }, h.getLabelAfter = function(t) {
      t || 0 !== t && (t = this._time);
      var e, i = this.getLabelsArray(), r = i.length;
      for (e = 0; r > e; e++) if (i[e].time > t) return i[e].name;
      return null;
    }, h.getLabelBefore = function(t) {
      null == t && (t = this._time);
      for (var e = this.getLabelsArray(), i = e.length; --i > -1; ) if (e[i].time < t) return e[i].name;
      return null;
    }, h.getLabelsArray = function() {
      var t, e = [], i = 0;
      for (t in this._labels) e[i++] = {
        time:this._labels[t],
        name:t
      };
      return e.sort(function(t, e) {
        return t.time - e.time;
      }), e;
    }, h.progress = function(t, e) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t :t) + this._cycle * (this._duration + this._repeatDelay), e) :this._time / this.duration();
    }, h.totalProgress = function(t, e) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, e) :this._totalTime / this.totalDuration();
    }, h.totalDuration = function(e) {
      return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) :this :(this._dirty && (t.prototype.totalDuration.call(this), 
      this._totalDuration = -1 === this._repeat ? 999999999999 :this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), 
      this._totalDuration);
    }, h.time = function(t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), 
      this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) :0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), 
      this.totalTime(t, e)) :this._time;
    }, h.repeat = function(t) {
      return arguments.length ? (this._repeat = t, this._uncache(!0)) :this._repeat;
    }, h.repeatDelay = function(t) {
      return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) :this._repeatDelay;
    }, h.yoyo = function(t) {
      return arguments.length ? (this._yoyo = t, this) :this._yoyo;
    }, h.currentLabel = function(t) {
      return arguments.length ? this.seek(t, !0) :this.getLabelBefore(this._time + 1e-8);
    }, r;
  }, !0), function() {
    var t = 180 / Math.PI, e = [], i = [], r = [], s = {}, n = _gsScope._gsDefine.globals, o = function(t, e, i, r) {
      this.a = t, this.b = e, this.c = i, this.d = r, this.da = r - t, this.ca = i - t, 
      this.ba = e - t;
    }, a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", l = function(t, e, i, r) {
      var s = {
        a:t
      }, n = {}, o = {}, a = {
        c:r
      }, l = (t + e) / 2, h = (e + i) / 2, u = (i + r) / 2, c = (l + h) / 2, p = (h + u) / 2, d = (p - c) / 8;
      return s.b = l + (t - l) / 4, n.b = c + d, s.c = n.a = (s.b + n.b) / 2, n.c = o.a = (c + p) / 2, 
      o.b = p - d, a.b = u + (r - u) / 4, o.c = a.a = (o.b + a.b) / 2, [ s, n, o, a ];
    }, h = function(t, s, n, o, a) {
      var h, u, c, p, d, f, g, m, y, _, v, b, w, T = t.length - 1, k = 0, C = t[0].a;
      for (h = 0; T > h; h++) d = t[k], u = d.a, c = d.d, p = t[k + 1].d, a ? (v = e[h], 
      b = i[h], w = (b + v) * s * .25 / (o ? .5 :r[h] || .5), f = c - (c - u) * (o ? .5 * s :0 !== v ? w / v :0), 
      g = c + (p - c) * (o ? .5 * s :0 !== b ? w / b :0), m = c - (f + ((g - f) * (3 * v / (v + b) + .5) / 4 || 0))) :(f = c - (c - u) * s * .5, 
      g = c + (p - c) * s * .5, m = c - (f + g) / 2), f += m, g += m, d.c = y = f, d.b = 0 !== h ? C :C = d.a + .6 * (d.c - d.a), 
      d.da = c - u, d.ca = y - u, d.ba = C - u, n ? (_ = l(u, C, y, c), t.splice(k, 1, _[0], _[1], _[2], _[3]), 
      k += 4) :k++, C = g;
      d = t[k], d.b = C, d.c = C + .4 * (d.d - C), d.da = d.d - d.a, d.ca = d.c - d.a, 
      d.ba = C - d.a, n && (_ = l(d.a, C, d.c, d.d), t.splice(k, 1, _[0], _[1], _[2], _[3]));
    }, u = function(t, r, s, n) {
      var a, l, h, u, c, p, d = [];
      if (n) for (t = [ n ].concat(t), l = t.length; --l > -1; ) "string" == typeof (p = t[l][r]) && "=" === p.charAt(1) && (t[l][r] = n[r] + Number(p.charAt(0) + p.substr(2)));
      if (0 > (a = t.length - 2)) return d[0] = new o(t[0][r], 0, 0, t[-1 > a ? 0 :1][r]), 
      d;
      for (l = 0; a > l; l++) h = t[l][r], u = t[l + 1][r], d[l] = new o(h, 0, 0, u), 
      s && (c = t[l + 2][r], e[l] = (e[l] || 0) + (u - h) * (u - h), i[l] = (i[l] || 0) + (c - u) * (c - u));
      return d[l] = new o(t[l][r], 0, 0, t[l + 1][r]), d;
    }, c = function(t, n, o, l, c, p) {
      var d, f, g, m, y, _, v, b, w = {}, T = [], k = p || t[0];
      c = "string" == typeof c ? "," + c + "," :a, null == n && (n = 1);
      for (f in t[0]) T.push(f);
      if (t.length > 1) {
        for (b = t[t.length - 1], v = !0, d = T.length; --d > -1; ) if (f = T[d], Math.abs(k[f] - b[f]) > .05) {
          v = !1;
          break;
        }
        v && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3]);
      }
      for (e.length = i.length = r.length = 0, d = T.length; --d > -1; ) f = T[d], s[f] = -1 !== c.indexOf("," + f + ","), 
      w[f] = u(t, f, s[f], p);
      for (d = e.length; --d > -1; ) e[d] = Math.sqrt(e[d]), i[d] = Math.sqrt(i[d]);
      if (!l) {
        for (d = T.length; --d > -1; ) if (s[f]) for (g = w[T[d]], _ = g.length - 1, m = 0; _ > m; m++) y = g[m + 1].da / i[m] + g[m].da / e[m], 
        r[m] = (r[m] || 0) + y * y;
        for (d = r.length; --d > -1; ) r[d] = Math.sqrt(r[d]);
      }
      for (d = T.length, m = o ? 4 :1; --d > -1; ) f = T[d], g = w[f], h(g, n, o, l, s[f]), 
      v && (g.splice(0, m), g.splice(g.length - m, m));
      return w;
    }, p = function(t, e, i) {
      e = e || "soft";
      var r, s, n, a, l, h, u, c, p, d, f, g = {}, m = "cubic" === e ? 3 :2, y = "soft" === e, _ = [];
      if (y && i && (t = [ i ].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
      for (p in t[0]) _.push(p);
      for (h = _.length; --h > -1; ) {
        for (p = _[h], g[p] = l = [], d = 0, c = t.length, u = 0; c > u; u++) r = null == i ? t[u][p] :"string" == typeof (f = t[u][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) :Number(f), 
        y && u > 1 && c - 1 > u && (l[d++] = (r + l[d - 2]) / 2), l[d++] = r;
        for (c = d - m + 1, d = 0, u = 0; c > u; u += m) r = l[u], s = l[u + 1], n = l[u + 2], 
        a = 2 === m ? 0 :l[u + 3], l[d++] = f = 3 === m ? new o(r, s, n, a) :new o(r, (2 * s + r) / 3, (2 * s + n) / 3, n);
        l.length = d;
      }
      return g;
    }, d = function(t, e, i) {
      for (var r, s, n, o, a, l, h, u, c, p, d, f = 1 / i, g = t.length; --g > -1; ) for (p = t[g], 
      n = p.a, o = p.d - n, a = p.c - n, l = p.b - n, r = s = 0, u = 1; i >= u; u++) h = f * u, 
      c = 1 - h, r = s - (s = (h * h * o + 3 * c * (h * a + c * l)) * h), d = g * i + u - 1, 
      e[d] = (e[d] || 0) + r * r;
    }, f = function(t, e) {
      e = e >> 0 || 6;
      var i, r, s, n, o = [], a = [], l = 0, h = 0, u = e - 1, c = [], p = [];
      for (i in t) d(t[i], o, e);
      for (s = o.length, r = 0; s > r; r++) l += Math.sqrt(o[r]), n = r % e, p[n] = l, 
      n === u && (h += l, n = r / e >> 0, c[n] = p, a[n] = h, l = 0, p = []);
      return {
        length:h,
        lengths:a,
        segments:c
      };
    }, g = _gsScope._gsDefine.plugin({
      propName:"bezier",
      priority:-1,
      version:"1.3.4",
      API:2,
      global:!0,
      init:function(t, e, i) {
        this._target = t, e instanceof Array && (e = {
          values:e
        }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 :parseInt(e.timeResolution, 10);
        var r, s, n, o, a, l = e.values || [], h = {}, u = l[0], d = e.autoRotate || i.vars.orientToBezier;
        this._autoRotate = d ? d instanceof Array ? d :[ [ "x", "y", "rotation", !0 === d ? 0 :Number(d) || 0 ] ] :null;
        for (r in u) this._props.push(r);
        for (n = this._props.length; --n > -1; ) r = this._props[n], this._overwriteProps.push(r), 
        s = this._func[r] = "function" == typeof t[r], h[r] = s ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r :"get" + r.substr(3)]() :parseFloat(t[r]), 
        a || h[r] !== l[0][r] && (a = h);
        if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(l, isNaN(e.curviness) ? 1 :e.curviness, !1, "thruBasic" === e.type, e.correlate, a) :p(l, e.type, h), 
        this._segCount = this._beziers[r].length, this._timeRes) {
          var g = f(this._beziers, this._timeRes);
          this._length = g.length, this._lengths = g.lengths, this._segments = g.segments, 
          this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], 
          this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
        }
        if (d = this._autoRotate) for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [ d ]), 
        n = d.length; --n > -1; ) {
          for (o = 0; 3 > o; o++) r = d[n][o], this._func[r] = "function" == typeof t[r] && t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r :"get" + r.substr(3)];
          r = d[n][2], this._initialRotations[n] = this._func[r] ? this._func[r].call(this._target) :this._target[r];
        }
        return this._startRatio = i.vars.runBackwards ? 1 :0, !0;
      },
      set:function(e) {
        var i, r, s, n, o, a, l, h, u, c, p = this._segCount, d = this._func, f = this._target, g = e !== this._startRatio;
        if (this._timeRes) {
          if (u = this._lengths, c = this._curSeg, e *= this._length, s = this._li, e > this._l2 && p - 1 > s) {
            for (h = p - 1; h > s && (this._l2 = u[++s]) <= e; ) ;
            this._l1 = u[s - 1], this._li = s, this._curSeg = c = this._segments[s], this._s2 = c[this._s1 = this._si = 0];
          } else if (e < this._l1 && s > 0) {
            for (;s > 0 && (this._l1 = u[--s]) >= e; ) ;
            0 === s && e < this._l1 ? this._l1 = 0 :s++, this._l2 = u[s], this._li = s, this._curSeg = c = this._segments[s], 
            this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si];
          }
          if (i = s, e -= this._l1, s = this._si, e > this._s2 && s < c.length - 1) {
            for (h = c.length - 1; h > s && (this._s2 = c[++s]) <= e; ) ;
            this._s1 = c[s - 1], this._si = s;
          } else if (e < this._s1 && s > 0) {
            for (;s > 0 && (this._s1 = c[--s]) >= e; ) ;
            0 === s && e < this._s1 ? this._s1 = 0 :s++, this._s2 = c[s], this._si = s;
          }
          a = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec;
        } else i = 0 > e ? 0 :e >= 1 ? p - 1 :p * e >> 0, a = (e - i * (1 / p)) * p;
        for (r = 1 - a, s = this._props.length; --s > -1; ) n = this._props[s], o = this._beziers[n][i], 
        l = (a * a * o.da + 3 * r * (a * o.ca + r * o.ba)) * a + o.a, this._round[n] && (l = Math.round(l)), 
        d[n] ? f[n](l) :f[n] = l;
        if (this._autoRotate) {
          var m, y, _, v, b, w, T, k = this._autoRotate;
          for (s = k.length; --s > -1; ) n = k[s][2], w = k[s][3] || 0, T = !0 === k[s][4] ? 1 :t, 
          o = this._beziers[k[s][0]], m = this._beziers[k[s][1]], o && m && (o = o[i], m = m[i], 
          y = o.a + (o.b - o.a) * a, v = o.b + (o.c - o.b) * a, y += (v - y) * a, v += (o.c + (o.d - o.c) * a - v) * a, 
          _ = m.a + (m.b - m.a) * a, b = m.b + (m.c - m.b) * a, _ += (b - _) * a, b += (m.c + (m.d - m.c) * a - b) * a, 
          l = g ? Math.atan2(b - _, v - y) * T + w :this._initialRotations[s], d[n] ? f[n](l) :f[n] = l);
        }
      }
    }), m = g.prototype;
    g.bezierThrough = c, g.cubicToQuadratic = l, g._autoCSS = !0, g.quadraticToCubic = function(t, e, i) {
      return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
    }, g._cssRegister = function() {
      var t = n.CSSPlugin;
      if (t) {
        var e = t._internals, i = e._parseToProxy, r = e._setPluginRatio, s = e.CSSPropTween;
        e._registerComplexSpecialProp("bezier", {
          parser:function(t, e, n, o, a, l) {
            e instanceof Array && (e = {
              values:e
            }), l = new g();
            var h, u, c, p = e.values, d = p.length - 1, f = [], m = {};
            if (0 > d) return a;
            for (h = 0; d >= h; h++) c = i(t, p[h], o, a, l, d !== h), f[h] = c.end;
            for (u in e) m[u] = e[u];
            return m.values = f, a = new s(t, "bezier", 0, 0, c.pt, 2), a.data = c, a.plugin = l, 
            a.setRatio = r, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = !0 === m.autoRotate ? 0 :Number(m.autoRotate), 
            m.autoRotate = null != c.end.left ? [ [ "left", "top", "rotation", h, !1 ] ] :null != c.end.x && [ [ "x", "y", "rotation", h, !1 ] ]), 
            m.autoRotate && (o._transform || o._enableTransforms(!1), c.autoRotate = o._target._gsTransform), 
            l._onInitTween(c.proxy, m, o._tween), a;
          }
        });
      }
    }, m._roundProps = function(t, e) {
      for (var i = this._overwriteProps, r = i.length; --r > -1; ) (t[i[r]] || t.bezier || t.bezierThrough) && (this._round[i[r]] = e);
    }, m._kill = function(t) {
      var e, i, r = this._props;
      for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], 
      i = r.length; --i > -1; ) r[i] === e && r.splice(i, 1);
      return this._super._kill.call(this, t);
    };
  }(), _gsScope._gsDefine("plugins.CSSPlugin", [ "plugins.TweenPlugin", "TweenLite" ], function(t, e) {
    var i, r, s, n, o = function() {
      t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio;
    }, a = _gsScope._gsDefine.globals, l = {}, h = o.prototype = new t("css");
    h.constructor = o, o.version = "1.18.2", o.API = 2, o.defaultTransformPerspective = 0, 
    o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, h = "px", o.suffixMap = {
      top:h,
      right:h,
      bottom:h,
      left:h,
      width:h,
      height:h,
      fontSize:h,
      padding:h,
      margin:h,
      perspective:h,
      lineHeight:""
    };
    var u, c, p, d, f, g, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g, y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, b = /(?:\d|\-|\+|=|#|\.)*/g, w = /opacity *= *([^)]*)/i, T = /opacity:([^;]*)/i, k = /alpha\(opacity *=.+?\)/i, C = /^(rgb|hsl)/, x = /([A-Z])/g, S = /-([a-z])/gi, P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, $ = function(t, e) {
      return e.toUpperCase();
    }, D = /(?:Left|Right|Width)/i, F = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, A = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, O = /,(?=[^\)]*(?:\(|$))/gi, E = Math.PI / 180, z = 180 / Math.PI, R = {}, B = document, M = function(t) {
      return B.createElementNS ? B.createElementNS("http://www.w3.org/1999/xhtml", t) :B.createElement(t);
    }, V = M("div"), j = M("img"), I = o._internals = {
      _specialProps:l
    }, L = navigator.userAgent, q = function() {
      var t = L.indexOf("Android"), e = M("a");
      return p = -1 !== L.indexOf("Safari") && -1 === L.indexOf("Chrome") && (-1 === t || Number(L.substr(t + 8, 1)) > 3), 
      f = p && Number(L.substr(L.indexOf("Version/") + 8, 1)) < 6, d = -1 !== L.indexOf("Firefox"), 
      (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(L) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(L)) && (g = parseFloat(RegExp.$1)), 
      !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity));
    }(), N = function(t) {
      return w.test("string" == typeof t ? t :(t.currentStyle ? t.currentStyle.filter :t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 :1;
    }, W = function(t) {
      window.console && console.log(t);
    }, H = "", U = "", Q = function(t, e) {
      e = e || V;
      var i, r, s = e.style;
      if (void 0 !== s[t]) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1), i = [ "O", "Moz", "ms", "Ms", "Webkit" ], 
      r = 5; --r > -1 && void 0 === s[i[r] + t]; ) ;
      return r >= 0 ? (U = 3 === r ? "ms" :i[r], H = "-" + U.toLowerCase() + "-", U + t) :null;
    }, X = B.defaultView ? B.defaultView.getComputedStyle :function() {}, K = o.getStyle = function(t, e, i, r, s) {
      var n;
      return q || "opacity" !== e ? (!r && t.style[e] ? n = t.style[e] :(i = i || X(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(x, "-$1").toLowerCase()) :t.currentStyle && (n = t.currentStyle[e]), 
      null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n :s) :N(t);
    }, Y = I.convertToPixels = function(t, i, r, s, n) {
      if ("px" === s || !s) return r;
      if ("auto" === s || !r) return 0;
      var a, l, h, u = D.test(i), c = t, p = V.style, d = 0 > r;
      if (d && (r = -r), "%" === s && -1 !== i.indexOf("border")) a = r / 100 * (u ? t.clientWidth :t.clientHeight); else {
        if (p.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;", 
        "%" !== s && c.appendChild && "v" !== s.charAt(0) && "rem" !== s) p[u ? "borderLeftWidth" :"borderTopWidth"] = r + s; else {
          if (c = t.parentNode || B.body, l = c._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * r / 100;
          p[u ? "width" :"height"] = r + s;
        }
        c.appendChild(V), a = parseFloat(V[u ? "offsetWidth" :"offsetHeight"]), c.removeChild(V), 
        u && "%" === s && !1 !== o.cacheWidths && (l = c._gsCache = c._gsCache || {}, l.time = h, 
        l.width = a / r * 100), 0 !== a || n || (a = Y(t, i, r, s, !0));
      }
      return d ? -a :a;
    }, G = I.calculateOffset = function(t, e, i) {
      if ("absolute" !== K(t, "position", i)) return 0;
      var r = "left" === e ? "Left" :"Top", s = K(t, "margin" + r, i);
      return t["offset" + r] - (Y(t, e, parseFloat(s), s.replace(b, "")) || 0);
    }, Z = function(t, e) {
      var i, r, s, n = {};
      if (e = e || X(t, null)) if (i = e.length) for (;--i > -1; ) s = e[i], (-1 === s.indexOf("-transform") || xt === s) && (n[s.replace(S, $)] = e.getPropertyValue(s)); else for (i in e) (-1 === i.indexOf("Transform") || Ct === i) && (n[i] = e[i]); else if (e = t.currentStyle || t.style) for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(S, $)] = e[i]);
      return q || (n.opacity = N(t)), r = Mt(t, e, !1), n.rotation = r.rotation, n.skewX = r.skewX, 
      n.scaleX = r.scaleX, n.scaleY = r.scaleY, n.x = r.x, n.y = r.y, Pt && (n.z = r.z, 
      n.rotationX = r.rotationX, n.rotationY = r.rotationY, n.scaleZ = r.scaleZ), n.filters && delete n.filters, 
      n;
    }, J = function(t, e, i, r, s) {
      var n, o, a, l = {}, h = t.style;
      for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (n = i[o]) || s && s[o]) && -1 === o.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[o] = "auto" !== n || "left" !== o && "top" !== o ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[o] || "" === e[o].replace(v, "") ? n :0 :G(t, o), 
      void 0 !== h[o] && (a = new ft(h, o, h[o], a)));
      if (r) for (o in r) "className" !== o && (l[o] = r[o]);
      return {
        difs:l,
        firstMPT:a
      };
    }, tt = {
      width:[ "Left", "Right" ],
      height:[ "Top", "Bottom" ]
    }, et = [ "marginLeft", "marginRight", "marginTop", "marginBottom" ], it = function(t, e, i) {
      var r = parseFloat("width" === e ? t.offsetWidth :t.offsetHeight), s = tt[e], n = s.length;
      for (i = i || X(t, null); --n > -1; ) r -= parseFloat(K(t, "padding" + s[n], i, !0)) || 0, 
      r -= parseFloat(K(t, "border" + s[n] + "Width", i, !0)) || 0;
      return r;
    }, rt = function(t, e) {
      if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
      (null == t || "" === t) && (t = "0 0");
      var i = t.split(" "), r = -1 !== t.indexOf("left") ? "0%" :-1 !== t.indexOf("right") ? "100%" :i[0], s = -1 !== t.indexOf("top") ? "0%" :-1 !== t.indexOf("bottom") ? "100%" :i[1];
      return null == s ? s = "center" === r ? "50%" :"0" :"center" === s && (s = "50%"), 
      ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), 
      t = r + " " + s + (i.length > 2 ? " " + i[2] :""), e && (e.oxp = -1 !== r.indexOf("%"), 
      e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), 
      e.ox = parseFloat(r.replace(v, "")), e.oy = parseFloat(s.replace(v, "")), e.v = t), 
      e || t;
    }, st = function(t, e) {
      return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) :parseFloat(t) - parseFloat(e);
    }, nt = function(t, e) {
      return null == t ? e :"string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e :parseFloat(t);
    }, ot = function(t, e, i, r) {
      var s, n, o, a, l, h = 1e-6;
      return null == t ? a = e :"number" == typeof t ? a = t :(s = 360, n = t.split("_"), 
      l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) :parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 :z) - (l ? 0 :e), 
      n.length && (r && (r[i] = e + o), -1 !== t.indexOf("short") && (o %= s) !== o % (s / 2) && (o = 0 > o ? o + s :o - s), 
      -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * s) % s - (o / s | 0) * s :-1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * s) % s - (o / s | 0) * s)), 
      a = e + o), h > a && a > -h && (a = 0), a;
    }, at = {
      aqua:[ 0, 255, 255 ],
      lime:[ 0, 255, 0 ],
      silver:[ 192, 192, 192 ],
      black:[ 0, 0, 0 ],
      maroon:[ 128, 0, 0 ],
      teal:[ 0, 128, 128 ],
      blue:[ 0, 0, 255 ],
      navy:[ 0, 0, 128 ],
      white:[ 255, 255, 255 ],
      fuchsia:[ 255, 0, 255 ],
      olive:[ 128, 128, 0 ],
      yellow:[ 255, 255, 0 ],
      orange:[ 255, 165, 0 ],
      gray:[ 128, 128, 128 ],
      purple:[ 128, 0, 128 ],
      green:[ 0, 128, 0 ],
      red:[ 255, 0, 0 ],
      pink:[ 255, 192, 203 ],
      cyan:[ 0, 255, 255 ],
      transparent:[ 255, 255, 255, 0 ]
    }, lt = function(t, e, i) {
      return t = 0 > t ? t + 1 :t > 1 ? t - 1 :t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 :.5 > t ? i :2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 :e) + .5 | 0;
    }, ht = o.parseColor = function(t, e) {
      var i, r, s, n, o, a, l, h, u, c, p;
      if (t) if ("number" == typeof t) i = [ t >> 16, t >> 8 & 255, 255 & t ]; else {
        if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t]) i = at[t]; else if ("#" === t.charAt(0)) 4 === t.length && (r = t.charAt(1), 
        s = t.charAt(2), n = t.charAt(3), t = "#" + r + r + s + s + n + n), t = parseInt(t.substr(1), 16), 
        i = [ t >> 16, t >> 8 & 255, 255 & t ]; else if ("hsl" === t.substr(0, 3)) if (i = p = t.match(m), 
        e) {
          if (-1 !== t.indexOf("=")) return t.match(y);
        } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, 
        s = .5 >= l ? l * (a + 1) :l + a - l * a, r = 2 * l - s, i.length > 3 && (i[3] = Number(t[3])), 
        i[0] = lt(o + 1 / 3, r, s), i[1] = lt(o, r, s), i[2] = lt(o - 1 / 3, r, s); else i = t.match(m) || at.transparent;
        i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]));
      } else i = at.black;
      return e && !p && (r = i[0] / 255, s = i[1] / 255, n = i[2] / 255, h = Math.max(r, s, n), 
      u = Math.min(r, s, n), l = (h + u) / 2, h === u ? o = a = 0 :(c = h - u, a = l > .5 ? c / (2 - h - u) :c / (h + u), 
      o = h === r ? (s - n) / c + (n > s ? 6 :0) :h === s ? (n - r) / c + 2 :(r - s) / c + 4, 
      o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), 
      i;
    }, ut = function(t, e) {
      var i, r, s, n = t.match(ct) || [], o = 0, a = n.length ? "" :t;
      for (i = 0; i < n.length; i++) r = n[i], s = t.substr(o, t.indexOf(r, o) - o), o += s.length + r.length, 
      r = ht(r, e), 3 === r.length && r.push(1), a += s + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] :"rgba(" + r.join(",")) + ")";
      return a;
    }, ct = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
    for (h in at) ct += "|" + h + "\\b";
    ct = new RegExp(ct + ")", "gi"), o.colorStringFilter = function(t) {
      var e, i = t[0] + t[1];
      ct.lastIndex = 0, ct.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), 
      t[0] = ut(t[0], e), t[1] = ut(t[1], e));
    }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
    var pt = function(t, e, i, r) {
      if (null == t) return function(t) {
        return t;
      };
      var s, n = e ? (t.match(ct) || [ "" ])[0] :"", o = t.split(n).join("").match(_) || [], a = t.substr(0, t.indexOf(o[0])), l = ")" === t.charAt(t.length - 1) ? ")" :"", h = -1 !== t.indexOf(" ") ? " " :",", u = o.length, c = u > 0 ? o[0].replace(m, "") :"";
      return u ? s = e ? function(t) {
        var e, p, d, f;
        if ("number" == typeof t) t += c; else if (r && O.test(t)) {
          for (f = t.replace(O, "|").split("|"), d = 0; d < f.length; d++) f[d] = s(f[d]);
          return f.join(",");
        }
        if (e = (t.match(ct) || [ n ])[0], p = t.split(e).join("").match(_) || [], d = p.length, 
        u > d--) for (;++d < u; ) p[d] = i ? p[(d - 1) / 2 | 0] :o[d];
        return a + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" :"");
      } :function(t) {
        var e, n, p;
        if ("number" == typeof t) t += c; else if (r && O.test(t)) {
          for (n = t.replace(O, "|").split("|"), p = 0; p < n.length; p++) n[p] = s(n[p]);
          return n.join(",");
        }
        if (e = t.match(_) || [], p = e.length, u > p--) for (;++p < u; ) e[p] = i ? e[(p - 1) / 2 | 0] :o[p];
        return a + e.join(h) + l;
      } :function(t) {
        return t;
      };
    }, dt = function(t) {
      return t = t.split(","), function(e, i, r, s, n, o, a) {
        var l, h = (i + "").split(" ");
        for (a = {}, l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
        return s.parse(e, a, n, o);
      };
    }, ft = (I._setPluginRatio = function(t) {
      this.plugin.setRatio(t);
      for (var e, i, r, s, n, o = this.data, a = o.proxy, l = o.firstMPT, h = 1e-6; l; ) e = a[l.v], 
      l.r ? e = Math.round(e) :h > e && e > -h && (e = 0), l.t[l.p] = e, l = l._next;
      if (o.autoRotate && (o.autoRotate.rotation = a.rotation), 1 === t || 0 === t) for (l = o.firstMPT, 
      n = 1 === t ? "e" :"b"; l; ) {
        if (i = l.t, i.type) {
          if (1 === i.type) {
            for (s = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++) s += i["xn" + r] + i["xs" + (r + 1)];
            i[n] = s;
          }
        } else i[n] = i.s + i.xs0;
        l = l._next;
      }
    }, function(t, e, i, r, s) {
      this.t = t, this.p = e, this.v = i, this.r = s, r && (r._prev = this, this._next = r);
    }), gt = (I._parseToProxy = function(t, e, i, r, s, n) {
      var o, a, l, h, u, c = r, p = {}, d = {}, f = i._transform, g = R;
      for (i._transform = null, R = e, r = u = i.parse(t, e, r, s), R = g, n && (i._transform = f, 
      c && (c._prev = null, c._prev && (c._prev._next = null))); r && r !== c; ) {
        if (r.type <= 1 && (a = r.p, d[a] = r.s + r.c, p[a] = r.s, n || (h = new ft(r, "s", a, h, r.r), 
        r.c = 0), 1 === r.type)) for (o = r.l; --o > 0; ) l = "xn" + o, a = r.p + "_" + l, 
        d[a] = r.data[l], p[a] = r[l], n || (h = new ft(r, l, a, h, r.rxp[l]));
        r = r._next;
      }
      return {
        proxy:p,
        end:d,
        firstMPT:h,
        pt:u
      };
    }, I.CSSPropTween = function(t, e, r, s, o, a, l, h, u, c, p) {
      this.t = t, this.p = e, this.s = r, this.c = s, this.n = l || e, t instanceof gt || n.push(this.n), 
      this.r = h, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === c ? r :c, 
      this.e = void 0 === p ? r + s :p, o && (this._next = o, o._prev = this);
    }), mt = function(t, e, i, r, s, n) {
      var o = new gt(t, e, i, r - i, s, -1, n);
      return o.b = i, o.e = o.xs0 = r, o;
    }, yt = o.parseComplex = function(t, e, i, r, s, n, o, a, l, h) {
      i = i || n || "", o = new gt(t, e, 0, 0, o, h ? 2 :1, null, !1, a, i, r), r += "";
      var c, p, d, f, g, _, v, b, w, T, k, C, x, S = i.split(", ").join(",").split(" "), P = r.split(", ").join(",").split(" "), $ = S.length, D = !1 !== u;
      for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(O, ", ").split(" "), 
      P = P.join(" ").replace(O, ", ").split(" "), $ = S.length), $ !== P.length && (S = (n || "").split(" "), 
      $ = S.length), o.plugin = l, o.setRatio = h, ct.lastIndex = 0, c = 0; $ > c; c++) if (f = S[c], 
      g = P[c], (b = parseFloat(f)) || 0 === b) o.appendXtra("", b, st(g, b), g.replace(y, ""), D && -1 !== g.indexOf("px"), !0); else if (s && ct.test(f)) C = "," === g.charAt(g.length - 1) ? ")," :")", 
      x = -1 !== g.indexOf("hsl") && q, f = ht(f, x), g = ht(g, x), w = f.length + g.length > 6, 
      w && !q && 0 === g[3] ? (o["xs" + o.l] += o.l ? " transparent" :"transparent", o.e = o.e.split(P[c]).join("transparent")) :(q || (w = !1), 
      x ? o.appendXtra(w ? "hsla(" :"hsl(", f[0], st(g[0], f[0]), ",", !1, !0).appendXtra("", f[1], st(g[1], f[1]), "%,", !1).appendXtra("", f[2], st(g[2], f[2]), w ? "%," :"%" + C, !1) :o.appendXtra(w ? "rgba(" :"rgb(", f[0], g[0] - f[0], ",", !0, !0).appendXtra("", f[1], g[1] - f[1], ",", !0).appendXtra("", f[2], g[2] - f[2], w ? "," :C, !0), 
      w && (f = f.length < 4 ? 1 :f[3], o.appendXtra("", f, (g.length < 4 ? 1 :g[3]) - f, C, !1))), 
      ct.lastIndex = 0; else if (_ = f.match(m)) {
        if (!(v = g.match(y)) || v.length !== _.length) return o;
        for (d = 0, p = 0; p < _.length; p++) k = _[p], T = f.indexOf(k, d), o.appendXtra(f.substr(d, T - d), Number(k), st(v[p], k), "", D && "px" === f.substr(T + k.length, 2), 0 === p), 
        d = T + k.length;
        o["xs" + o.l] += f.substr(d);
      } else o["xs" + o.l] += o.l ? " " + g :g;
      if (-1 !== r.indexOf("=") && o.data) {
        for (C = o.xs0 + o.data.s, c = 1; c < o.l; c++) C += o["xs" + c] + o.data["xn" + c];
        o.e = C + o["xs" + c];
      }
      return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o;
    }, _t = 9;
    for (h = gt.prototype, h.l = h.pr = 0; --_t > 0; ) h["xn" + _t] = 0, h["xs" + _t] = "";
    h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, 
    h.appendXtra = function(t, e, i, r, s, n) {
      var o = this, a = o.l;
      return o["xs" + a] += n && a ? " " + t :t || "", i || 0 === a || o.plugin ? (o.l++, 
      o.type = o.setRatio ? 2 :1, o["xs" + o.l] = r || "", a > 0 ? (o.data["xn" + a] = e + i, 
      o.rxp["xn" + a] = s, o["xn" + a] = e, o.plugin || (o.xfirst = new gt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, s, o.pr), 
      o.xfirst.xs0 = 0), o) :(o.data = {
        s:e + i
      }, o.rxp = {}, o.s = e, o.c = i, o.r = s, o)) :(o["xs" + a] += e + (r || ""), o);
    };
    var vt = function(t, e) {
      e = e || {}, this.p = e.prefix ? Q(t) || t :t, l[t] = l[this.p] = this, this.format = e.formatter || pt(e.defaultValue, e.color, e.collapsible, e.multi), 
      e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, 
      this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0;
    }, bt = I._registerComplexSpecialProp = function(t, e, i) {
      "object" != typeof e && (e = {
        parser:i
      });
      var r, s = t.split(","), n = e.defaultValue;
      for (i = i || [ n ], r = 0; r < s.length; r++) e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || n, 
      new vt(s[r], e);
    }, wt = function(t) {
      if (!l[t]) {
        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
        bt(t, {
          parser:function(t, i, r, s, n, o, h) {
            var u = a.com.greensock.plugins[e];
            return u ? (u._cssRegister(), l[r].parse(t, i, r, s, n, o, h)) :(W("Error: " + e + " js file not loaded."), 
            n);
          }
        });
      }
    };
    h = vt.prototype, h.parseComplex = function(t, e, i, r, s, n) {
      var o, a, l, h, u, c, p = this.keyword;
      if (this.multi && (O.test(i) || O.test(e) ? (a = e.replace(O, "|").split("|"), l = i.replace(O, "|").split("|")) :p && (a = [ e ], 
      l = [ i ])), l) {
        for (h = l.length > a.length ? l.length :a.length, o = 0; h > o; o++) e = a[o] = a[o] || this.dflt, 
        i = l[o] = l[o] || this.dflt, p && (u = e.indexOf(p), c = i.indexOf(p), u !== c && (-1 === c ? a[o] = a[o].split(p).join("") :-1 === u && (a[o] += " " + p)));
        e = a.join(", "), i = l.join(", ");
      }
      return yt(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n);
    }, h.parse = function(t, e, i, r, n, o) {
      return this.parseComplex(t.style, this.format(K(t, this.p, s, !1, this.dflt)), this.format(e), n, o);
    }, o.registerSpecialProp = function(t, e, i) {
      bt(t, {
        parser:function(t, r, s, n, o, a) {
          var l = new gt(t, s, 0, 0, o, 2, s, !1, i);
          return l.plugin = a, l.setRatio = e(t, r, n._tween, s), l;
        },
        priority:i
      });
    }, o.useSVGTransformAttr = p || d;
    var Tt, kt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Ct = Q("transform"), xt = H + "transform", St = Q("transformOrigin"), Pt = null !== Q("perspective"), $t = I.Transform = function() {
      this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(!1 === o.defaultForce3D || !Pt) && (o.defaultForce3D || "auto");
    }, Dt = window.SVGElement, Ft = function(t, e, i) {
      var r, s = B.createElementNS("http://www.w3.org/2000/svg", t), n = /([a-z])([A-Z])/g;
      for (r in i) s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]);
      return e.appendChild(s), s;
    }, At = B.documentElement, Ot = function() {
      var t, e, i, r = g || /Android/i.test(L) && !window.chrome;
      return B.createElementNS && !r && (t = Ft("svg", At), e = Ft("rect", t, {
        width:100,
        height:50,
        x:100
      }), i = e.getBoundingClientRect().width, e.style[St] = "50% 50%", e.style[Ct] = "scaleX(0.5)", 
      r = i === e.getBoundingClientRect().width && !(d && Pt), At.removeChild(t)), r;
    }(), Et = function(t, e, i, r, s) {
      var n, a, l, h, u, c, p, d, f, g, m, y, _, v, b = t._gsTransform, w = Bt(t, !0);
      b && (_ = b.xOrigin, v = b.yOrigin), (!r || (n = r.split(" ")).length < 2) && (p = t.getBBox(), 
      e = rt(e).split(" "), n = [ (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width :parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height :parseFloat(e[1])) + p.y ]), 
      i.xOrigin = h = parseFloat(n[0]), i.yOrigin = u = parseFloat(n[1]), r && w !== Rt && (c = w[0], 
      p = w[1], d = w[2], f = w[3], g = w[4], m = w[5], y = c * f - p * d, a = h * (f / y) + u * (-d / y) + (d * m - f * g) / y, 
      l = h * (-p / y) + u * (c / y) - (c * m - p * g) / y, h = i.xOrigin = n[0] = a, 
      u = i.yOrigin = n[1] = l), b && (s || !1 !== s && !1 !== o.defaultSmoothOrigin ? (a = h - _, 
      l = u - v, b.xOffset += a * w[0] + l * w[2] - a, b.yOffset += a * w[1] + l * w[3] - l) :b.xOffset = b.yOffset = 0), 
      t.setAttribute("data-svg-origin", n.join(" "));
    }, zt = function(t) {
      return !!(Dt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM));
    }, Rt = [ 1, 0, 0, 1, 0, 0 ], Bt = function(t, e) {
      var i, r, s, n, o, a = t._gsTransform || new $t(), l = 1e5;
      if (Ct ? r = K(t, xt, null, !0) :t.currentStyle && (r = t.currentStyle.filter.match(F), 
      r = r && 4 === r.length ? [ r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), a.x || 0, a.y || 0 ].join(",") :""), 
      i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, (a.svg || t.getBBox && zt(t)) && (i && -1 !== (t.style[Ct] + "").indexOf("matrix") && (r = t.style[Ct], 
      i = 0), s = t.getAttribute("transform"), i && s && (-1 !== s.indexOf("matrix") ? (r = s, 
      i = 0) :-1 !== s.indexOf("translate") && (r = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", 
      i = 0))), i) return Rt;
      for (s = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], _t = s.length; --_t > -1; ) n = Number(s[_t]), 
      s[_t] = (o = n - (n |= 0)) ? (o * l + (0 > o ? -.5 :.5) | 0) / l + n :n;
      return e && s.length > 6 ? [ s[0], s[1], s[4], s[5], s[12], s[13] ] :s;
    }, Mt = I.getTransform = function(t, i, r, n) {
      if (t._gsTransform && r && !n) return t._gsTransform;
      var a, l, h, u, c, p, d = r ? t._gsTransform || new $t() :new $t(), f = d.scaleX < 0, g = 2e-5, m = 1e5, y = Pt ? parseFloat(K(t, St, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 :0, _ = parseFloat(o.defaultTransformPerspective) || 0;
      if (d.svg = !(!t.getBBox || !zt(t)), d.svg && (Et(t, K(t, St, s, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), 
      Tt = o.useSVGTransformAttr || Ot), (a = Bt(t)) !== Rt) {
        if (16 === a.length) {
          var v, b, w, T, k, C = a[0], x = a[1], S = a[2], P = a[3], $ = a[4], D = a[5], F = a[6], A = a[7], O = a[8], E = a[9], R = a[10], B = a[12], M = a[13], V = a[14], j = a[11], I = Math.atan2(F, R);
          d.zOrigin && (V = -d.zOrigin, B = O * V - a[12], M = E * V - a[13], V = R * V + d.zOrigin - a[14]), 
          d.rotationX = I * z, I && (T = Math.cos(-I), k = Math.sin(-I), v = $ * T + O * k, 
          b = D * T + E * k, w = F * T + R * k, O = $ * -k + O * T, E = D * -k + E * T, R = F * -k + R * T, 
          j = A * -k + j * T, $ = v, D = b, F = w), I = Math.atan2(-S, R), d.rotationY = I * z, 
          I && (T = Math.cos(-I), k = Math.sin(-I), v = C * T - O * k, b = x * T - E * k, 
          w = S * T - R * k, E = x * k + E * T, R = S * k + R * T, j = P * k + j * T, C = v, 
          x = b, S = w), I = Math.atan2(x, C), d.rotation = I * z, I && (T = Math.cos(-I), 
          k = Math.sin(-I), C = C * T + $ * k, b = x * T + D * k, D = x * -k + D * T, F = S * -k + F * T, 
          x = b), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, 
          d.rotationY = 180 - d.rotationY), d.scaleX = (Math.sqrt(C * C + x * x) * m + .5 | 0) / m, 
          d.scaleY = (Math.sqrt(D * D + E * E) * m + .5 | 0) / m, d.scaleZ = (Math.sqrt(F * F + R * R) * m + .5 | 0) / m, 
          d.skewX = 0, d.perspective = j ? 1 / (0 > j ? -j :j) :0, d.x = B, d.y = M, d.z = V, 
          d.svg && (d.x -= d.xOrigin - (d.xOrigin * C - d.yOrigin * $), d.y -= d.yOrigin - (d.yOrigin * x - d.xOrigin * D));
        } else if ((!Pt || n || !a.length || d.x !== a[4] || d.y !== a[5] || !d.rotationX && !d.rotationY) && (void 0 === d.x || "none" !== K(t, "display", i))) {
          var L = a.length >= 6, q = L ? a[0] :1, N = a[1] || 0, W = a[2] || 0, H = L ? a[3] :1;
          d.x = a[4] || 0, d.y = a[5] || 0, h = Math.sqrt(q * q + N * N), u = Math.sqrt(H * H + W * W), 
          c = q || N ? Math.atan2(N, q) * z :d.rotation || 0, p = W || H ? Math.atan2(W, H) * z + c :d.skewX || 0, 
          Math.abs(p) > 90 && Math.abs(p) < 270 && (f ? (h *= -1, p += 0 >= c ? 180 :-180, 
          c += 0 >= c ? 180 :-180) :(u *= -1, p += 0 >= p ? 180 :-180)), d.scaleX = h, d.scaleY = u, 
          d.rotation = c, d.skewX = p, Pt && (d.rotationX = d.rotationY = d.z = 0, d.perspective = _, 
          d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * q + d.yOrigin * W), d.y -= d.yOrigin - (d.xOrigin * N + d.yOrigin * H));
        }
        d.zOrigin = y;
        for (l in d) d[l] < g && d[l] > -g && (d[l] = 0);
      }
      return r && (t._gsTransform = d, d.svg && (Tt && t.style[Ct] ? e.delayedCall(.001, function() {
        Lt(t.style, Ct);
      }) :!Tt && t.getAttribute("transform") && e.delayedCall(.001, function() {
        t.removeAttribute("transform");
      }))), d;
    }, Vt = function(t) {
      var e, i, r = this.data, s = -r.rotation * E, n = s + r.skewX * E, o = 1e5, a = (Math.cos(s) * r.scaleX * o | 0) / o, l = (Math.sin(s) * r.scaleX * o | 0) / o, h = (Math.sin(n) * -r.scaleY * o | 0) / o, u = (Math.cos(n) * r.scaleY * o | 0) / o, c = this.t.style, p = this.t.currentStyle;
      if (p) {
        i = l, l = -h, h = -i, e = p.filter, c.filter = "";
        var d, f, m = this.t.offsetWidth, y = this.t.offsetHeight, _ = "absolute" !== p.position, v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + u, T = r.x + m * r.xPercent / 100, k = r.y + y * r.yPercent / 100;
        if (null != r.ox && (d = (r.oxp ? m * r.ox * .01 :r.ox) - m / 2, f = (r.oyp ? y * r.oy * .01 :r.oy) - y / 2, 
        T += d - (d * a + f * l), k += f - (d * h + f * u)), _ ? (d = m / 2, f = y / 2, 
        v += ", Dx=" + (d - (d * a + f * l) + T) + ", Dy=" + (f - (d * h + f * u) + k) + ")") :v += ", sizingMethod='auto expand')", 
        -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(A, v) :c.filter = v + " " + e, 
        (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === u && (_ && -1 === v.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), 
        !_) {
          var C, x, S, P = 8 > g ? 1 :-1;
          for (d = r.ieOffsetX || 0, f = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > a ? -a :a) * m + (0 > l ? -l :l) * y)) / 2 + T), 
          r.ieOffsetY = Math.round((y - ((0 > u ? -u :u) * y + (0 > h ? -h :h) * m)) / 2 + k), 
          _t = 0; 4 > _t; _t++) x = et[_t], C = p[x], i = -1 !== C.indexOf("px") ? parseFloat(C) :Y(this.t, x, parseFloat(C), C.replace(b, "")) || 0, 
          S = i !== r[x] ? 2 > _t ? -r.ieOffsetX :-r.ieOffsetY :2 > _t ? d - r.ieOffsetX :f - r.ieOffsetY, 
          c[x] = (r[x] = Math.round(i - S * (0 === _t || 2 === _t ? 1 :P))) + "px";
        }
      }
    }, jt = I.set3DTransformRatio = I.setTransformRatio = function(t) {
      var e, i, r, s, n, o, a, l, h, u, c, p, f, g, m, y, _, v, b, w, T, k, C, x = this.data, S = this.t.style, P = x.rotation, $ = x.rotationX, D = x.rotationY, F = x.scaleX, A = x.scaleY, O = x.scaleZ, z = x.x, R = x.y, B = x.z, M = x.svg, V = x.perspective, j = x.force3D;
      if (((1 === t || 0 === t) && "auto" === j && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !j) && !B && !V && !D && !$ && 1 === O || Tt && M || !Pt) return void (P || x.skewX || M ? (P *= E, 
      k = x.skewX * E, C = 1e5, e = Math.cos(P) * F, s = Math.sin(P) * F, i = Math.sin(P - k) * -A, 
      n = Math.cos(P - k) * A, k && "simple" === x.skewType && (_ = Math.tan(k), _ = Math.sqrt(1 + _ * _), 
      i *= _, n *= _, x.skewY && (e *= _, s *= _)), M && (z += x.xOrigin - (x.xOrigin * e + x.yOrigin * i) + x.xOffset, 
      R += x.yOrigin - (x.xOrigin * s + x.yOrigin * n) + x.yOffset, Tt && (x.xPercent || x.yPercent) && (g = this.t.getBBox(), 
      z += .01 * x.xPercent * g.width, R += .01 * x.yPercent * g.height), g = 1e-6, g > z && z > -g && (z = 0), 
      g > R && R > -g && (R = 0)), b = (e * C | 0) / C + "," + (s * C | 0) / C + "," + (i * C | 0) / C + "," + (n * C | 0) / C + "," + z + "," + R + ")", 
      M && Tt ? this.t.setAttribute("transform", "matrix(" + b) :S[Ct] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" :"matrix(") + b) :S[Ct] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" :"matrix(") + F + ",0,0," + A + "," + z + "," + R + ")");
      if (d && (g = 1e-4, g > F && F > -g && (F = O = 2e-5), g > A && A > -g && (A = O = 2e-5), 
      !V || x.z || x.rotationX || x.rotationY || (V = 0)), P || x.skewX) P *= E, m = e = Math.cos(P), 
      y = s = Math.sin(P), x.skewX && (P -= x.skewX * E, m = Math.cos(P), y = Math.sin(P), 
      "simple" === x.skewType && (_ = Math.tan(x.skewX * E), _ = Math.sqrt(1 + _ * _), 
      m *= _, y *= _, x.skewY && (e *= _, s *= _))), i = -y, n = m; else {
        if (!(D || $ || 1 !== O || V || M)) return void (S[Ct] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) translate3d(" :"translate3d(") + z + "px," + R + "px," + B + "px)" + (1 !== F || 1 !== A ? " scale(" + F + "," + A + ")" :""));
        e = n = 1, i = s = 0;
      }
      h = 1, r = o = a = l = u = c = 0, p = V ? -1 / V :0, f = x.zOrigin, g = 1e-6, w = ",", 
      T = "0", P = D * E, P && (m = Math.cos(P), y = Math.sin(P), a = -y, u = p * -y, 
      r = e * y, o = s * y, h = m, p *= m, e *= m, s *= m), P = $ * E, P && (m = Math.cos(P), 
      y = Math.sin(P), _ = i * m + r * y, v = n * m + o * y, l = h * y, c = p * y, r = i * -y + r * m, 
      o = n * -y + o * m, h *= m, p *= m, i = _, n = v), 1 !== O && (r *= O, o *= O, h *= O, 
      p *= O), 1 !== A && (i *= A, n *= A, l *= A, c *= A), 1 !== F && (e *= F, s *= F, 
      a *= F, u *= F), (f || M) && (f && (z += r * -f, R += o * -f, B += h * -f + f), 
      M && (z += x.xOrigin - (x.xOrigin * e + x.yOrigin * i) + x.xOffset, R += x.yOrigin - (x.xOrigin * s + x.yOrigin * n) + x.yOffset), 
      g > z && z > -g && (z = T), g > R && R > -g && (R = T), g > B && B > -g && (B = 0)), 
      b = x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix3d(" :"matrix3d(", 
      b += (g > e && e > -g ? T :e) + w + (g > s && s > -g ? T :s) + w + (g > a && a > -g ? T :a), 
      b += w + (g > u && u > -g ? T :u) + w + (g > i && i > -g ? T :i) + w + (g > n && n > -g ? T :n), 
      $ || D || 1 !== O ? (b += w + (g > l && l > -g ? T :l) + w + (g > c && c > -g ? T :c) + w + (g > r && r > -g ? T :r), 
      b += w + (g > o && o > -g ? T :o) + w + (g > h && h > -g ? T :h) + w + (g > p && p > -g ? T :p) + w) :b += ",0,0,0,0,1,0,", 
      b += z + w + R + w + B + w + (V ? 1 + -B / V :1) + ")", S[Ct] = b;
    };
    h = $t.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, 
    h.scaleX = h.scaleY = h.scaleZ = 1, bt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
      parser:function(t, e, i, r, n, a, l) {
        if (r._lastParsedTransform === l) return n;
        r._lastParsedTransform = l;
        var h, u, c, p, d, f, g, m, y, _, v = t._gsTransform, b = t.style, w = 1e-6, T = kt.length, k = l, C = {}, x = "transformOrigin";
        if (l.display ? (p = K(t, "display"), b.display = "block", h = Mt(t, s, !0, l.parseTransform), 
        b.display = p) :h = Mt(t, s, !0, l.parseTransform), r._transform = h, "string" == typeof k.transform && Ct) p = V.style, 
        p[Ct] = k.transform, p.display = "block", p.position = "absolute", B.body.appendChild(V), 
        u = Mt(V, null, !1), B.body.removeChild(V), u.perspective || (u.perspective = h.perspective), 
        null != k.xPercent && (u.xPercent = nt(k.xPercent, h.xPercent)), null != k.yPercent && (u.yPercent = nt(k.yPercent, h.yPercent)); else if ("object" == typeof k) {
          if (u = {
            scaleX:nt(null != k.scaleX ? k.scaleX :k.scale, h.scaleX),
            scaleY:nt(null != k.scaleY ? k.scaleY :k.scale, h.scaleY),
            scaleZ:nt(k.scaleZ, h.scaleZ),
            x:nt(k.x, h.x),
            y:nt(k.y, h.y),
            z:nt(k.z, h.z),
            xPercent:nt(k.xPercent, h.xPercent),
            yPercent:nt(k.yPercent, h.yPercent),
            perspective:nt(k.transformPerspective, h.perspective)
          }, null != (m = k.directionalRotation)) if ("object" == typeof m) for (p in m) k[p] = m[p]; else k.rotation = m;
          "string" == typeof k.x && -1 !== k.x.indexOf("%") && (u.x = 0, u.xPercent = nt(k.x, h.xPercent)), 
          "string" == typeof k.y && -1 !== k.y.indexOf("%") && (u.y = 0, u.yPercent = nt(k.y, h.yPercent)), 
          u.rotation = ot("rotation" in k ? k.rotation :"shortRotation" in k ? k.shortRotation + "_short" :"rotationZ" in k ? k.rotationZ :h.rotation, h.rotation, "rotation", C), 
          Pt && (u.rotationX = ot("rotationX" in k ? k.rotationX :"shortRotationX" in k ? k.shortRotationX + "_short" :h.rotationX || 0, h.rotationX, "rotationX", C), 
          u.rotationY = ot("rotationY" in k ? k.rotationY :"shortRotationY" in k ? k.shortRotationY + "_short" :h.rotationY || 0, h.rotationY, "rotationY", C)), 
          u.skewX = null == k.skewX ? h.skewX :ot(k.skewX, h.skewX), u.skewY = null == k.skewY ? h.skewY :ot(k.skewY, h.skewY), 
          (c = u.skewY - h.skewY) && (u.skewX += c, u.rotation += c);
        }
        for (Pt && null != k.force3D && (h.force3D = k.force3D, g = !0), h.skewType = k.skewType || h.skewType || o.defaultSkewType, 
        (f = h.force3D || h.z || h.rotationX || h.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == k.scale || (u.scaleZ = 1); --T > -1; ) i = kt[T], 
        ((d = u[i] - h[i]) > w || -w > d || null != k[i] || null != R[i]) && (g = !0, n = new gt(h, i, h[i], d, n), 
        i in C && (n.e = C[i]), n.xs0 = 0, n.plugin = a, r._overwriteProps.push(n.n));
        return d = k.transformOrigin, h.svg && (d || k.svgOrigin) && (y = h.xOffset, _ = h.yOffset, 
        Et(t, rt(d), u, k.svgOrigin, k.smoothOrigin), n = mt(h, "xOrigin", (v ? h :u).xOrigin, u.xOrigin, n, x), 
        n = mt(h, "yOrigin", (v ? h :u).yOrigin, u.yOrigin, n, x), (y !== h.xOffset || _ !== h.yOffset) && (n = mt(h, "xOffset", v ? y :h.xOffset, h.xOffset, n, x), 
        n = mt(h, "yOffset", v ? _ :h.yOffset, h.yOffset, n, x)), d = Tt ? null :"0px 0px"), 
        (d || Pt && f && h.zOrigin) && (Ct ? (g = !0, i = St, d = (d || K(t, i, s, !1, "50% 50%")) + "", 
        n = new gt(b, i, 0, 0, n, -1, x), n.b = b[i], n.plugin = a, Pt ? (p = h.zOrigin, 
        d = d.split(" "), h.zOrigin = (d.length > 2 && (0 === p || "0px" !== d[2]) ? parseFloat(d[2]) :p) || 0, 
        n.xs0 = n.e = d[0] + " " + (d[1] || "50%") + " 0px", n = new gt(h, "zOrigin", 0, 0, n, -1, n.n), 
        n.b = p, n.xs0 = n.e = h.zOrigin) :n.xs0 = n.e = d) :rt(d + "", h)), g && (r._transformType = h.svg && Tt || !f && 3 !== this._transformType ? 2 :3), 
        n;
      },
      prefix:!0
    }), bt("boxShadow", {
      defaultValue:"0px 0px 0px 0px #999",
      prefix:!0,
      color:!0,
      multi:!0,
      keyword:"inset"
    }), bt("borderRadius", {
      defaultValue:"0px",
      parser:function(t, e, i, n, o) {
        e = this.format(e);
        var a, l, h, u, c, p, d, f, g, m, y, _, v, b, w, T, k = [ "borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius" ], C = t.style;
        for (g = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), a = e.split(" "), 
        l = 0; l < k.length; l++) this.p.indexOf("border") && (k[l] = Q(k[l])), c = u = K(t, k[l], s, !1, "0px"), 
        -1 !== c.indexOf(" ") && (u = c.split(" "), c = u[0], u = u[1]), p = h = a[l], d = parseFloat(c), 
        _ = c.substr((d + "").length), v = "=" === p.charAt(1), v ? (f = parseInt(p.charAt(0) + "1", 10), 
        p = p.substr(2), f *= parseFloat(p), y = p.substr((f + "").length - (0 > f ? 1 :0)) || "") :(f = parseFloat(p), 
        y = p.substr((f + "").length)), "" === y && (y = r[i] || _), y !== _ && (b = Y(t, "borderLeft", d, _), 
        w = Y(t, "borderTop", d, _), "%" === y ? (c = b / g * 100 + "%", u = w / m * 100 + "%") :"em" === y ? (T = Y(t, "borderLeft", 1, "em"), 
        c = b / T + "em", u = w / T + "em") :(c = b + "px", u = w + "px"), v && (p = parseFloat(c) + f + y, 
        h = parseFloat(u) + f + y)), o = yt(C, k[l], c + " " + u, p + " " + h, !1, "0px", o);
        return o;
      },
      prefix:!0,
      formatter:pt("0px 0px 0px 0px", !1, !0)
    }), bt("backgroundPosition", {
      defaultValue:"0 0",
      parser:function(t, e, i, r, n, o) {
        var a, l, h, u, c, p, d = "background-position", f = s || X(t, null), m = this.format((f ? g ? f.getPropertyValue(d + "-x") + " " + f.getPropertyValue(d + "-y") :f.getPropertyValue(d) :t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), y = this.format(e);
        if (-1 !== m.indexOf("%") != (-1 !== y.indexOf("%")) && (p = K(t, "backgroundImage").replace(P, "")) && "none" !== p) {
          for (a = m.split(" "), l = y.split(" "), j.setAttribute("src", p), h = 2; --h > -1; ) m = a[h], 
          (u = -1 !== m.indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (c = 0 === h ? t.offsetWidth - j.width :t.offsetHeight - j.height, 
          a[h] = u ? parseFloat(m) / 100 * c + "px" :parseFloat(m) / c * 100 + "%");
          m = a.join(" ");
        }
        return this.parseComplex(t.style, m, y, n, o);
      },
      formatter:rt
    }), bt("backgroundSize", {
      defaultValue:"0 0",
      formatter:rt
    }), bt("perspective", {
      defaultValue:"0px",
      prefix:!0
    }), bt("perspectiveOrigin", {
      defaultValue:"50% 50%",
      prefix:!0
    }), bt("transformStyle", {
      prefix:!0
    }), bt("backfaceVisibility", {
      prefix:!0
    }), bt("userSelect", {
      prefix:!0
    }), bt("margin", {
      parser:dt("marginTop,marginRight,marginBottom,marginLeft")
    }), bt("padding", {
      parser:dt("paddingTop,paddingRight,paddingBottom,paddingLeft")
    }), bt("clip", {
      defaultValue:"rect(0px,0px,0px,0px)",
      parser:function(t, e, i, r, n, o) {
        var a, l, h;
        return 9 > g ? (l = t.currentStyle, h = 8 > g ? " " :",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", 
        e = this.format(e).split(",").join(h)) :(a = this.format(K(t, this.p, s, !1, this.dflt)), 
        e = this.format(e)), this.parseComplex(t.style, a, e, n, o);
      }
    }), bt("textShadow", {
      defaultValue:"0px 0px 0px #999",
      color:!0,
      multi:!0
    }), bt("autoRound,strictUnits", {
      parser:function(t, e, i, r, s) {
        return s;
      }
    }), bt("border", {
      defaultValue:"0px solid #000",
      parser:function(t, e, i, r, n, o) {
        return this.parseComplex(t.style, this.format(K(t, "borderTopWidth", s, !1, "0px") + " " + K(t, "borderTopStyle", s, !1, "solid") + " " + K(t, "borderTopColor", s, !1, "#000")), this.format(e), n, o);
      },
      color:!0,
      formatter:function(t) {
        var e = t.split(" ");
        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ct) || [ "#000" ])[0];
      }
    }), bt("borderWidth", {
      parser:dt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
    }), bt("float,cssFloat,styleFloat", {
      parser:function(t, e, i, r, s) {
        var n = t.style, o = "cssFloat" in n ? "cssFloat" :"styleFloat";
        return new gt(n, o, 0, 0, s, -1, i, !1, 0, n[o], e);
      }
    });
    var It = function(t) {
      var e, i = this.t, r = i.filter || K(this.data, "filter") || "", s = this.s + this.c * t | 0;
      100 === s && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), 
      e = !K(this.data, "filter")) :(i.filter = r.replace(k, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"), 
      -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") :i.filter = r.replace(w, "opacity=" + s));
    };
    bt("opacity,alpha,autoAlpha", {
      defaultValue:"1",
      parser:function(t, e, i, r, n, o) {
        var a = parseFloat(K(t, "opacity", s, !1, "1")), l = t.style, h = "autoAlpha" === i;
        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 :1) * parseFloat(e.substr(2)) + a), 
        h && 1 === a && "hidden" === K(t, "visibility", s) && 0 !== e && (a = 0), q ? n = new gt(l, "opacity", a, e - a, n) :(n = new gt(l, "opacity", 100 * a, 100 * (e - a), n), 
        n.xn1 = h ? 1 :0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", 
        n.data = t, n.plugin = o, n.setRatio = It), h && (n = new gt(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== a ? "inherit" :"hidden", 0 === e ? "hidden" :"inherit"), 
        n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n;
      }
    });
    var Lt = function(t, e) {
      e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), 
      t.removeProperty(e.replace(x, "-$1").toLowerCase())) :t.removeAttribute(e));
    }, qt = function(t) {
      if (this.t._gsClassPT = this, 1 === t || 0 === t) {
        this.t.setAttribute("class", 0 === t ? this.b :this.e);
        for (var e = this.data, i = this.t.style; e; ) e.v ? i[e.p] = e.v :Lt(i, e.p), e = e._next;
        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
      } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
    };
    bt("className", {
      parser:function(t, e, r, n, o, a, l) {
        var h, u, c, p, d, f = t.getAttribute("class") || "", g = t.style.cssText;
        if (o = n._classNamePT = new gt(t, r, 0, 0, o, 2), o.setRatio = qt, o.pr = -11, 
        i = !0, o.b = f, u = Z(t, s), c = t._gsClassPT) {
          for (p = {}, d = c.data; d; ) p[d.p] = 1, d = d._next;
          c.setRatio(1);
        }
        return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e :f.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) :""), 
        t.setAttribute("class", o.e), h = J(t, u, Z(t), l, p), t.setAttribute("class", f), 
        o.data = h.firstMPT, t.style.cssText = g, o = o.xfirst = n.parse(t, h.difs, o, a);
      }
    });
    var Nt = function(t) {
      if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
        var e, i, r, s, n, o = this.t.style, a = l.transform.parse;
        if ("all" === this.e) o.cssText = "", s = !0; else for (e = this.e.split(" ").join("").split(","), 
        r = e.length; --r > -1; ) i = e[r], l[i] && (l[i].parse === a ? s = !0 :i = "transformOrigin" === i ? St :l[i].p), 
        Lt(o, i);
        s && (Lt(o, Ct), (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"), 
        this.t.removeAttribute("transform")), delete this.t._gsTransform));
      }
    };
    for (bt("clearProps", {
      parser:function(t, e, r, s, n) {
        return n = new gt(t, r, 0, 0, n, 2), n.setRatio = Nt, n.e = e, n.pr = -10, n.data = s._tween, 
        i = !0, n;
      }
    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), _t = h.length; _t--; ) wt(h[_t]);
    h = o.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, a) {
      if (!t.nodeType) return !1;
      this._target = t, this._tween = a, this._vars = e, u = e.autoRound, i = !1, r = e.suffixMap || o.suffixMap, 
      s = X(t, ""), n = this._overwriteProps;
      var h, d, g, m, y, _, v, b, w, k = t.style;
      if (c && "" === k.zIndex && ("auto" === (h = K(t, "zIndex", s)) || "" === h) && this._addLazySet(k, "zIndex", 0), 
      "string" == typeof e && (m = k.cssText, h = Z(t, s), k.cssText = m + ";" + e, h = J(t, h, Z(t)).difs, 
      !q && T.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, k.cssText = m), e.className ? this._firstPT = d = l.className.parse(t, e.className, "className", this, null, null, e) :this._firstPT = d = this.parse(t, e, null), 
      this._transformType) {
        for (w = 3 === this._transformType, Ct ? p && (c = !0, "" === k.zIndex && ("auto" === (v = K(t, "zIndex", s)) || "" === v) && this._addLazySet(k, "zIndex", 0), 
        f && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" :"hidden"))) :k.zoom = 1, 
        g = d; g && g._next; ) g = g._next;
        b = new gt(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, g), b.setRatio = Ct ? jt :Vt, 
        b.data = this._transform || Mt(t, s, !0), b.tween = a, b.pr = -1, n.pop();
      }
      if (i) {
        for (;d; ) {
          for (_ = d._next, g = m; g && g.pr > d.pr; ) g = g._next;
          (d._prev = g ? g._prev :y) ? d._prev._next = d :m = d, (d._next = g) ? g._prev = d :y = d, 
          d = _;
        }
        this._firstPT = m;
      }
      return !0;
    }, h.parse = function(t, e, i, n) {
      var o, a, h, c, p, d, f, g, m, y, _ = t.style;
      for (o in e) d = e[o], a = l[o], a ? i = a.parse(t, d, o, this, i, n, e) :(p = K(t, o, s) + "", 
      m = "string" == typeof d, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || m && C.test(d) ? (m || (d = ht(d), 
      d = (d.length > 3 ? "rgba(" :"rgb(") + d.join(",") + ")"), i = yt(_, o, p, d, !0, "transparent", i, 0, n)) :!m || -1 === d.indexOf(" ") && -1 === d.indexOf(",") ? (h = parseFloat(p), 
      f = h || 0 === h ? p.substr((h + "").length) :"", ("" === p || "auto" === p) && ("width" === o || "height" === o ? (h = it(t, o, s), 
      f = "px") :"left" === o || "top" === o ? (h = G(t, o, s), f = "px") :(h = "opacity" !== o ? 0 :1, 
      f = "")), y = m && "=" === d.charAt(1), y ? (c = parseInt(d.charAt(0) + "1", 10), 
      d = d.substr(2), c *= parseFloat(d), g = d.replace(b, "")) :(c = parseFloat(d), 
      g = m ? d.replace(b, "") :""), "" === g && (g = o in r ? r[o] :f), d = c || 0 === c ? (y ? c + h :c) + g :e[o], 
      f !== g && "" !== g && (c || 0 === c) && h && (h = Y(t, o, h, f), "%" === g ? (h /= Y(t, o, 100, "%") / 100, 
      !0 !== e.strictUnits && (p = h + "%")) :"em" === g || "rem" === g || "vw" === g || "vh" === g ? h /= Y(t, o, 1, g) :"px" !== g && (c = Y(t, o, c, g), 
      g = "px"), y && (c || 0 === c) && (d = c + h + g)), y && (c += h), !h && 0 !== h || !c && 0 !== c ? void 0 !== _[o] && (d || d + "" != "NaN" && null != d) ? (i = new gt(_, o, c || h || 0, 0, i, -1, o, !1, 0, p, d), 
      i.xs0 = "none" !== d || "display" !== o && -1 === o.indexOf("Style") ? d :p) :W("invalid " + o + " tween value: " + e[o]) :(i = new gt(_, o, h, c - h, i, 0, o, !1 !== u && ("px" === g || "zIndex" === o), 0, p, d), 
      i.xs0 = g)) :i = yt(_, o, p, d, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
      return i;
    }, h.setRatio = function(t) {
      var e, i, r, s = this._firstPT, n = 1e-6;
      if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime) for (;s; ) {
        if (e = s.c * t + s.s, s.r ? e = Math.round(e) :n > e && e > -n && (e = 0), s.type) if (1 === s.type) if (2 === (r = s.l)) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2; else if (3 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3; else if (4 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4; else if (5 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5; else {
          for (i = s.xs0 + e + s.xs1, r = 1; r < s.l; r++) i += s["xn" + r] + s["xs" + (r + 1)];
          s.t[s.p] = i;
        } else -1 === s.type ? s.t[s.p] = s.xs0 :s.setRatio && s.setRatio(t); else s.t[s.p] = e + s.xs0;
        s = s._next;
      } else for (;s; ) 2 !== s.type ? s.t[s.p] = s.b :s.setRatio(t), s = s._next; else for (;s; ) {
        if (2 !== s.type) if (s.r && -1 !== s.type) if (e = Math.round(s.s + s.c), s.type) {
          if (1 === s.type) {
            for (r = s.l, i = s.xs0 + e + s.xs1, r = 1; r < s.l; r++) i += s["xn" + r] + s["xs" + (r + 1)];
            s.t[s.p] = i;
          }
        } else s.t[s.p] = e + s.xs0; else s.t[s.p] = s.e; else s.setRatio(t);
        s = s._next;
      }
    }, h._enableTransforms = function(t) {
      this._transform = this._transform || Mt(this._target, s, !0), this._transformType = this._transform.svg && Tt || !t && 3 !== this._transformType ? 2 :3;
    };
    var Wt = function() {
      this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
    };
    h._addLazySet = function(t, e, i) {
      var r = this._firstPT = new gt(t, e, 0, 0, this._firstPT, 2);
      r.e = i, r.setRatio = Wt, r.data = this;
    }, h._linkCSSP = function(t, e, i, r) {
      return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next :this._firstPT === t && (this._firstPT = t._next, 
      r = !0), i ? i._next = t :r || null !== this._firstPT || (this._firstPT = t), t._next = e, 
      t._prev = i), t;
    }, h._kill = function(e) {
      var i, r, s, n = e;
      if (e.autoAlpha || e.alpha) {
        n = {};
        for (r in e) n[r] = e[r];
        n.opacity = 1, n.autoAlpha && (n.visibility = 1);
      }
      return e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) :s === this._firstPT && (this._firstPT = i._next), 
      i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), 
      t.prototype._kill.call(this, n);
    };
    var Ht = function(t, e, i) {
      var r, s, n, o;
      if (t.slice) for (s = t.length; --s > -1; ) Ht(t[s], e, i); else for (r = t.childNodes, 
      s = r.length; --s > -1; ) n = r[s], o = n.type, n.style && (e.push(Z(n)), i && i.push(n)), 
      1 !== o && 9 !== o && 11 !== o || !n.childNodes.length || Ht(n, e, i);
    };
    return o.cascadeTo = function(t, i, r) {
      var s, n, o, a, l = e.to(t, i, r), h = [ l ], u = [], c = [], p = [], d = e._internals.reservedProps;
      for (t = l._targets || l.target, Ht(t, u, p), l.render(i, !0, !0), Ht(t, c), l.render(0, !0, !0), 
      l._enabled(!0), s = p.length; --s > -1; ) if (n = J(p[s], u[s], c[s]), n.firstMPT) {
        n = n.difs;
        for (o in r) d[o] && (n[o] = r[o]);
        a = {};
        for (o in n) a[o] = u[s][o];
        h.push(e.fromTo(p[s], i, a, n));
      }
      return h;
    }, t.activate([ o ]), o;
  }, !0), function() {
    var t = _gsScope._gsDefine.plugin({
      propName:"roundProps",
      version:"1.5",
      priority:-1,
      API:2,
      init:function(t, e, i) {
        return this._tween = i, !0;
      }
    }), e = function(t) {
      for (;t; ) t.f || t.blob || (t.r = 1), t = t._next;
    }, i = t.prototype;
    i._onInitAllProps = function() {
      for (var t, i, r, s = this._tween, n = s.vars.roundProps.join ? s.vars.roundProps :s.vars.roundProps.split(","), o = n.length, a = {}, l = s._propLookup.roundProps; --o > -1; ) a[n[o]] = 1;
      for (o = n.length; --o > -1; ) for (t = n[o], i = s._firstPT; i; ) r = i._next, 
      i.pg ? i.t._roundProps(a, !0) :i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) :(this._add(i.t, t, i.s, i.c), 
      r && (r._prev = i._prev), i._prev ? i._prev._next = r :s._firstPT === i && (s._firstPT = r), 
      i._next = i._prev = null, s._propLookup[t] = l)), i = r;
      return !1;
    }, i._add = function(t, e, i, r) {
      this._addTween(t, e, i, i + r, e, !0), this._overwriteProps.push(e);
    };
  }(), function() {
    _gsScope._gsDefine.plugin({
      propName:"attr",
      API:2,
      version:"0.5.0",
      init:function(t, e) {
        var i;
        if ("function" != typeof t.setAttribute) return !1;
        for (i in e) this._addTween(t, "setAttribute", t.getAttribute(i) + "", e[i] + "", i, !1, i), 
        this._overwriteProps.push(i);
        return !0;
      }
    });
  }(), _gsScope._gsDefine.plugin({
    propName:"directionalRotation",
    version:"0.2.1",
    API:2,
    init:function(t, e) {
      "object" != typeof e && (e = {
        rotation:e
      }), this.finals = {};
      var i, r, s, n, o, a, l = !0 === e.useRadians ? 2 * Math.PI :360, h = 1e-6;
      for (i in e) "useRadians" !== i && (a = (e[i] + "").split("_"), r = a[0], s = parseFloat("function" != typeof t[i] ? t[i] :t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i :"get" + i.substr(3)]()), 
      n = this.finals[i] = "string" == typeof r && "=" === r.charAt(1) ? s + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) :Number(r) || 0, 
      o = n - s, a.length && (r = a.join("_"), -1 !== r.indexOf("short") && (o %= l) !== o % (l / 2) && (o = 0 > o ? o + l :o - l), 
      -1 !== r.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * l) % l - (o / l | 0) * l :-1 !== r.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * l) % l - (o / l | 0) * l)), 
      (o > h || -h > o) && (this._addTween(t, i, s, s + o, i), this._overwriteProps.push(i)));
      return !0;
    },
    set:function(t) {
      var e;
      if (1 !== t) this._super.setRatio.call(this, t); else for (e = this._firstPT; e; ) e.f ? e.t[e.p](this.finals[e.p]) :e.t[e.p] = this.finals[e.p], 
      e = e._next;
    }
  })._autoCSS = !0, _gsScope._gsDefine("easing.Back", [ "easing.Ease" ], function(t) {
    var e, i, r, s = _gsScope.GreenSockGlobals || _gsScope, n = s.com.greensock, o = 2 * Math.PI, a = Math.PI / 2, l = n._class, h = function(e, i) {
      var r = l("easing." + e, function() {}, !0), s = r.prototype = new t();
      return s.constructor = r, s.getRatio = i, r;
    }, u = t.register || function() {}, c = function(t, e, i, r) {
      var s = l("easing." + t, {
        easeOut:new e(),
        easeIn:new i(),
        easeInOut:new r()
      }, !0);
      return u(s, t), s;
    }, p = function(t, e, i) {
      this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t);
    }, d = function(e, i) {
      var r = l("easing." + e, function(t) {
        this._p1 = t || 0 === t ? t :1.70158, this._p2 = 1.525 * this._p1;
      }, !0), s = r.prototype = new t();
      return s.constructor = r, s.getRatio = i, s.config = function(t) {
        return new r(t);
      }, r;
    }, f = c("Back", d("BackOut", function(t) {
      return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
    }), d("BackIn", function(t) {
      return t * t * ((this._p1 + 1) * t - this._p1);
    }), d("BackInOut", function(t) {
      return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) :.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
    })), g = l("easing.SlowMo", function(t, e, i) {
      e = e || 0 === e ? e :.7, null == t ? t = .7 :t > 1 && (t = 1), this._p = 1 !== t ? e :0, 
      this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i;
    }, !0), m = g.prototype = new t();
    return m.constructor = g, m.getRatio = function(t) {
      var e = t + (.5 - t) * this._p;
      return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t :e - (t = 1 - t / this._p1) * t * t * t * e :t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t :e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t :this._calcEnd ? 1 :e;
    }, g.ease = new g(.7, .7), m.config = g.config = function(t, e, i) {
      return new g(t, e, i);
    }, e = l("easing.SteppedEase", function(t) {
      t = t || 1, this._p1 = 1 / t, this._p2 = t + 1;
    }, !0), m = e.prototype = new t(), m.constructor = e, m.getRatio = function(t) {
      return 0 > t ? t = 0 :t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1;
    }, m.config = e.config = function(t) {
      return new e(t);
    }, i = l("easing.RoughEase", function(e) {
      e = e || {};
      for (var i, r, s, n, o, a, l = e.taper || "none", h = [], u = 0, c = 0 | (e.points || 20), d = c, f = !1 !== e.randomize, g = !0 === e.clamp, m = e.template instanceof t ? e.template :null, y = "number" == typeof e.strength ? .4 * e.strength :.4; --d > -1; ) i = f ? Math.random() :1 / c * d, 
      r = m ? m.getRatio(i) :i, "none" === l ? s = y :"out" === l ? (n = 1 - i, s = n * n * y) :"in" === l ? s = i * i * y :.5 > i ? (n = 2 * i, 
      s = n * n * .5 * y) :(n = 2 * (1 - i), s = n * n * .5 * y), f ? r += Math.random() * s - .5 * s :d % 2 ? r += .5 * s :r -= .5 * s, 
      g && (r > 1 ? r = 1 :0 > r && (r = 0)), h[u++] = {
        x:i,
        y:r
      };
      for (h.sort(function(t, e) {
        return t.x - e.x;
      }), a = new p(1, 1, null), d = c; --d > -1; ) o = h[d], a = new p(o.x, o.y, a);
      this._prev = new p(0, 0, 0 !== a.t ? a :a.next);
    }, !0), m = i.prototype = new t(), m.constructor = i, m.getRatio = function(t) {
      var e = this._prev;
      if (t > e.t) {
        for (;e.next && t >= e.t; ) e = e.next;
        e = e.prev;
      } else for (;e.prev && t <= e.t; ) e = e.prev;
      return this._prev = e, e.v + (t - e.t) / e.gap * e.c;
    }, m.config = function(t) {
      return new i(t);
    }, i.ease = new i(), c("Bounce", h("BounceOut", function(t) {
      return 1 / 2.75 > t ? 7.5625 * t * t :2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 :2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 :7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    }), h("BounceIn", function(t) {
      return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t :2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) :2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) :1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
    }), h("BounceInOut", function(t) {
      var e = .5 > t;
      return t = e ? 1 - 2 * t :2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t :2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 :2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 :7.5625 * (t -= 2.625 / 2.75) * t + .984375, 
      e ? .5 * (1 - t) :.5 * t + .5;
    })), c("Circ", h("CircOut", function(t) {
      return Math.sqrt(1 - (t -= 1) * t);
    }), h("CircIn", function(t) {
      return -(Math.sqrt(1 - t * t) - 1);
    }), h("CircInOut", function(t) {
      return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) :.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    })), r = function(e, i, r) {
      var s = l("easing." + e, function(t, e) {
        this._p1 = t >= 1 ? t :1, this._p2 = (e || r) / (1 > t ? t :1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), 
        this._p2 = o / this._p2;
      }, !0), n = s.prototype = new t();
      return n.constructor = s, n.getRatio = i, n.config = function(t, e) {
        return new s(t, e);
      }, s;
    }, c("Elastic", r("ElasticOut", function(t) {
      return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1;
    }, .3), r("ElasticIn", function(t) {
      return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2);
    }, .3), r("ElasticInOut", function(t) {
      return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 :this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1;
    }, .45)), c("Expo", h("ExpoOut", function(t) {
      return 1 - Math.pow(2, -10 * t);
    }), h("ExpoIn", function(t) {
      return Math.pow(2, 10 * (t - 1)) - .001;
    }), h("ExpoInOut", function(t) {
      return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) :.5 * (2 - Math.pow(2, -10 * (t - 1)));
    })), c("Sine", h("SineOut", function(t) {
      return Math.sin(t * a);
    }), h("SineIn", function(t) {
      return 1 - Math.cos(t * a);
    }), h("SineInOut", function(t) {
      return -.5 * (Math.cos(Math.PI * t) - 1);
    })), l("easing.EaseLookup", {
      find:function(e) {
        return t.map[e];
      }
    }, !0), u(s.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), 
    f;
  }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function(t, e) {
  "use strict";
  var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
  if (!i.TweenLite) {
    var r, s, n, o, a, l = function(t) {
      var e, r = t.split("."), s = i;
      for (e = 0; e < r.length; e++) s[r[e]] = s = s[r[e]] || {};
      return s;
    }, h = l("com.greensock"), u = 1e-10, c = function(t) {
      var e, i = [], r = t.length;
      for (e = 0; e !== r; i.push(t[e++])) ;
      return i;
    }, p = function() {}, d = function() {
      var t = Object.prototype.toString, e = t.call([]);
      return function(i) {
        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e);
      };
    }(), f = {}, g = function(r, s, n, o) {
      this.sc = f[r] ? f[r].sc :[], f[r] = this, this.gsClass = null, this.func = n;
      var a = [];
      this.check = function(h) {
        for (var u, c, p, d, m, y = s.length, _ = y; --y > -1; ) (u = f[s[y]] || new g(s[y], [])).gsClass ? (a[y] = u.gsClass, 
        _--) :h && u.sc.push(this);
        if (0 === _ && n) for (c = ("com.greensock." + r).split("."), p = c.pop(), d = l(c.join("."))[p] = this.gsClass = n.apply(n, a), 
        o && (i[p] = d, m = "undefined" != typeof module && module.exports, !m && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" :"") + r.split(".").pop(), [], function() {
          return d;
        }) :r === e && m && (module.exports = d)), y = 0; y < this.sc.length; y++) this.sc[y].check();
      }, this.check(!0);
    }, m = t._gsDefine = function(t, e, i, r) {
      return new g(t, e, i, r);
    }, y = h._class = function(t, e, i) {
      return e = e || function() {}, m(t, [], function() {
        return e;
      }, i), e;
    };
    m.globals = i;
    var _ = [ 0, 0, 1, 1 ], v = [], b = y("easing.Ease", function(t, e, i, r) {
      this._func = t, this._type = i || 0, this._power = r || 0, this._params = e ? _.concat(e) :_;
    }, !0), w = b.map = {}, T = b.register = function(t, e, i, r) {
      for (var s, n, o, a, l = e.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1; ) for (n = l[u], 
      s = r ? y("easing." + n, null, !0) :h.easing[n] || {}, o = c.length; --o > -1; ) a = c[o], 
      w[n + "." + a] = w[a + n] = s[a] = t.getRatio ? t :t[a] || new t();
    };
    for (n = b.prototype, n._calcEnd = !1, n.getRatio = function(t) {
      if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
      var e = this._type, i = this._power, r = 1 === e ? 1 - t :2 === e ? t :.5 > t ? 2 * t :2 * (1 - t);
      return 1 === i ? r *= r :2 === i ? r *= r * r :3 === i ? r *= r * r * r :4 === i && (r *= r * r * r * r), 
      1 === e ? 1 - r :2 === e ? r :.5 > t ? r / 2 :1 - r / 2;
    }, r = [ "Linear", "Quad", "Cubic", "Quart", "Quint,Strong" ], s = r.length; --s > -1; ) n = r[s] + ",Power" + s, 
    T(new b(null, null, 1, s), n, "easeOut", !0), T(new b(null, null, 2, s), n, "easeIn" + (0 === s ? ",easeNone" :"")), 
    T(new b(null, null, 3, s), n, "easeInOut");
    w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
    var k = y("events.EventDispatcher", function(t) {
      this._listeners = {}, this._eventTarget = t || this;
    });
    n = k.prototype, n.addEventListener = function(t, e, i, r, s) {
      s = s || 0;
      var n, l, h = this._listeners[t], u = 0;
      for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1; ) n = h[l], 
      n.c === e && n.s === i ? h.splice(l, 1) :0 === u && n.pr < s && (u = l + 1);
      h.splice(u, 0, {
        c:e,
        s:i,
        up:r,
        pr:s
      }), this !== o || a || o.wake();
    }, n.removeEventListener = function(t, e) {
      var i, r = this._listeners[t];
      if (r) for (i = r.length; --i > -1; ) if (r[i].c === e) return void r.splice(i, 1);
    }, n.dispatchEvent = function(t) {
      var e, i, r, s = this._listeners[t];
      if (s) for (e = s.length, i = this._eventTarget; --e > -1; ) (r = s[e]) && (r.up ? r.c.call(r.s || i, {
        type:t,
        target:i
      }) :r.c.call(r.s || i));
    };
    var C = t.requestAnimationFrame, x = t.cancelAnimationFrame, S = Date.now || function() {
      return new Date().getTime();
    }, P = S();
    for (r = [ "ms", "moz", "webkit", "o" ], s = r.length; --s > -1 && !C; ) C = t[r[s] + "RequestAnimationFrame"], 
    x = t[r[s] + "CancelAnimationFrame"] || t[r[s] + "CancelRequestAnimationFrame"];
    y("Ticker", function(t, e) {
      var i, r, s, n, l, h = this, c = S(), d = !(!1 === e || !C) && "auto", f = 500, g = 33, m = "tick", y = function(t) {
        var e, o, a = S() - P;
        a > f && (c += a - g), P += a, h.time = (P - c) / 1e3, e = h.time - l, (!i || e > 0 || !0 === t) && (h.frame++, 
        l += e + (e >= n ? .004 :n - e), o = !0), !0 !== t && (s = r(y)), o && h.dispatchEvent(m);
      };
      k.call(h), h.time = h.frame = 0, h.tick = function() {
        y(!0);
      }, h.lagSmoothing = function(t, e) {
        f = t || 1 / u, g = Math.min(e, f, 0);
      }, h.sleep = function() {
        null != s && (d && x ? x(s) :clearTimeout(s), r = p, s = null, h === o && (a = !1));
      }, h.wake = function(t) {
        null !== s ? h.sleep() :t ? c += -P + (P = S()) :h.frame > 10 && (P = S() - f + 5), 
        r = 0 === i ? p :d && C ? C :function(t) {
          return setTimeout(t, 1e3 * (l - h.time) + 1 | 0);
        }, h === o && (a = !0), y(2);
      }, h.fps = function(t) {
        return arguments.length ? (i = t, n = 1 / (i || 60), l = this.time + n, void h.wake()) :i;
      }, h.useRAF = function(t) {
        return arguments.length ? (h.sleep(), d = t, void h.fps(i)) :d;
      }, h.fps(t), setTimeout(function() {
        "auto" === d && h.frame < 5 && "hidden" !== document.visibilityState && h.useRAF(!1);
      }, 1500);
    }), n = h.Ticker.prototype = new h.events.EventDispatcher(), n.constructor = h.Ticker;
    var $ = y("core.Animation", function(t, e) {
      if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, 
      this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, 
      this._reversed = !0 === e.reversed, Q) {
        a || o.wake();
        var i = this.vars.useFrames ? U :Q;
        i.add(this, i._time), this.vars.paused && this.paused(!0);
      }
    });
    o = $.ticker = new h.Ticker(), n = $.prototype, n._dirty = n._gc = n._initted = n._paused = !1, 
    n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, 
    n._paused = !1;
    var D = function() {
      a && S() - P > 2e3 && o.wake(), setTimeout(D, 2e3);
    };
    D(), n.play = function(t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
    }, n.pause = function(t, e) {
      return null != t && this.seek(t, e), this.paused(!0);
    }, n.resume = function(t, e) {
      return null != t && this.seek(t, e), this.paused(!1);
    }, n.seek = function(t, e) {
      return this.totalTime(Number(t), !1 !== e);
    }, n.restart = function(t, e) {
      return this.reversed(!1).paused(!1).totalTime(t ? -this._delay :0, !1 !== e, !0);
    }, n.reverse = function(t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
    }, n.render = function() {}, n.invalidate = function() {
      return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, 
      (this._gc || !this.timeline) && this._enabled(!0), this;
    }, n.isActive = function() {
      var t, e = this._timeline, i = this._startTime;
      return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale;
    }, n._enabled = function(t, e) {
      return a || o.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) :!t && this.timeline && this._timeline._remove(this, !0)), 
      !1;
    }, n._kill = function() {
      return this._enabled(!1, !1);
    }, n.kill = function(t, e) {
      return this._kill(t, e), this;
    }, n._uncache = function(t) {
      for (var e = t ? this :this.timeline; e; ) e._dirty = !0, e = e.timeline;
      return this;
    }, n._swapSelfInParams = function(t) {
      for (var e = t.length, i = t.concat(); --e > -1; ) "{self}" === t[e] && (i[e] = this);
      return i;
    }, n._callback = function(t) {
      var e = this.vars;
      e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || v);
    }, n.eventCallback = function(t, e, i, r) {
      if ("on" === (t || "").substr(0, 2)) {
        var s = this.vars;
        if (1 === arguments.length) return s[t];
        null == e ? delete s[t] :(s[t] = e, s[t + "Params"] = d(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) :i, 
        s[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e);
      }
      return this;
    }, n.delay = function(t) {
      return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), 
      this._delay = t, this) :this._delay;
    }, n.duration = function(t) {
      return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), 
      this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), 
      this) :(this._dirty = !1, this._duration);
    }, n.totalDuration = function(t) {
      return this._dirty = !1, arguments.length ? this.duration(t) :this._totalDuration;
    }, n.time = function(t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration :t, e)) :this._time;
    }, n.totalTime = function(t, e, i) {
      if (a || o.wake(), !arguments.length) return this._totalTime;
      if (this._timeline) {
        if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
          this._dirty && this.totalDuration();
          var r = this._totalDuration, s = this._timeline;
          if (t > r && !i && (t = r), this._startTime = (this._paused ? this._pauseTime :s._time) - (this._reversed ? r - t :t) / this._timeScale, 
          s._dirty || this._uncache(!1), s._timeline) for (;s._timeline; ) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), 
          s = s._timeline;
        }
        this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (z.length && K(), 
        this.render(t, e, !1), z.length && K());
      }
      return this;
    }, n.progress = n.totalProgress = function(t, e) {
      var i = this.duration();
      return arguments.length ? this.totalTime(i * t, e) :i ? this._time / i :this.ratio;
    }, n.startTime = function(t) {
      return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), 
      this) :this._startTime;
    }, n.endTime = function(t) {
      return this._startTime + (0 != t ? this.totalDuration() :this.duration()) / this._timeScale;
    }, n.timeScale = function(t) {
      if (!arguments.length) return this._timeScale;
      if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
        var e = this._pauseTime, i = e || 0 === e ? e :this._timeline.totalTime();
        this._startTime = i - (i - this._startTime) * this._timeScale / t;
      }
      return this._timeScale = t, this._uncache(!1);
    }, n.reversed = function(t) {
      return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime :this._totalTime, !0)), 
      this) :this._reversed;
    }, n.paused = function(t) {
      if (!arguments.length) return this._paused;
      var e, i, r = this._timeline;
      return t != this._paused && r && (a || t || o.wake(), e = r.rawTime(), i = e - this._pauseTime, 
      !t && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e :null, 
      this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime :(e - this._startTime) / this._timeScale, 
      this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), 
      this;
    };
    var F = y("core.SimpleTimeline", function(t) {
      $.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0;
    });
    n = F.prototype = new $(), n.constructor = F, n.kill()._gc = !1, n._first = n._last = n._recent = null, 
    n._sortChildren = !1, n.add = n.insert = function(t, e) {
      var i, r;
      if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), 
      t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), 
      i = this._last, this._sortChildren) for (r = t._startTime; i && i._startTime > r; ) i = i._prev;
      return i ? (t._next = i._next, i._next = t) :(t._next = this._first, this._first = t), 
      t._next ? t._next._prev = t :this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), 
      this;
    }, n._remove = function(t, e) {
      return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next :this._first === t && (this._first = t._next), 
      t._next ? t._next._prev = t._prev :this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, 
      t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), 
      this;
    }, n.render = function(t, e, i) {
      var r, s = this._first;
      for (this._totalTime = this._time = this._rawPrevTime = t; s; ) r = s._next, (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() :s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) :s.render((t - s._startTime) * s._timeScale, e, i)), 
      s = r;
    }, n.rawTime = function() {
      return a || o.wake(), this._totalTime;
    };
    var A = y("TweenLite", function(e, i, r) {
      if ($.call(this, i, r), this.render = A.prototype.render, null == e) throw "Cannot tween a null target.";
      this.target = e = "string" != typeof e ? e :A.selector(e) || e;
      var s, n, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
      if (this._overwrite = l = null == l ? H[A.defaultOverwrite] :"number" == typeof l ? l >> 0 :H[l], 
      (a || e instanceof Array || e.push && d(e)) && "number" != typeof e[0]) for (this._targets = o = c(e), 
      this._propLookup = [], this._siblings = [], s = 0; s < o.length; s++) n = o[s], 
      n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (o.splice(s--, 1), 
      this._targets = o = o.concat(c(n))) :(this._siblings[s] = Y(n, this, !1), 1 === l && this._siblings[s].length > 1 && Z(n, this, null, 1, this._siblings[s])) :"string" == typeof (n = o[s--] = A.selector(n)) && o.splice(s + 1, 1) :o.splice(s--, 1); else this._propLookup = {}, 
      this._siblings = Y(e, this, !1), 1 === l && this._siblings.length > 1 && Z(e, this, null, 1, this._siblings);
      (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -u, 
      this.render(-this._delay));
    }, !0), O = function(e) {
      return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType);
    }, E = function(t, e) {
      var i, r = {};
      for (i in t) W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!L[i] || L[i] && L[i]._autoCSS) || (r[i] = t[i], 
      delete t[i]);
      t.css = r;
    };
    n = A.prototype = new $(), n.constructor = A, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, 
    n._notifyPluginsOfEnabled = n._lazy = !1, A.version = "1.18.2", A.defaultEase = n._ease = new b(null, null, 1, 1), 
    A.defaultOverwrite = "auto", A.ticker = o, A.autoSleep = 120, A.lagSmoothing = function(t, e) {
      o.lagSmoothing(t, e);
    }, A.selector = t.$ || t.jQuery || function(e) {
      var i = t.$ || t.jQuery;
      return i ? (A.selector = i, i(e)) :"undefined" == typeof document ? e :document.querySelectorAll ? document.querySelectorAll(e) :document.getElementById("#" === e.charAt(0) ? e.substr(1) :e);
    };
    var z = [], R = {}, B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, M = function(t) {
      for (var e, i = this._firstPT, r = 1e-6; i; ) e = i.blob ? t ? this.join("") :this.start :i.c * t + i.s, 
      i.r ? e = Math.round(e) :r > e && e > -r && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) :i.t[i.p](e) :i.t[i.p] = e, 
      i = i._next;
    }, V = function(t, e, i, r) {
      var s, n, o, a, l, h, u, c = [ t, e ], p = 0, d = "", f = 0;
      for (c.start = t, i && (i(c), t = c[0], e = c[1]), c.length = 0, s = t.match(B) || [], 
      n = e.match(B) || [], r && (r._next = null, r.blob = 1, c._firstPT = r), l = n.length, 
      a = 0; l > a; a++) u = n[a], h = e.substr(p, e.indexOf(u, p) - p), d += h || !a ? h :",", 
      p += h.length, f ? f = (f + 1) % 5 :"rgba(" === h.substr(-5) && (f = 1), u === s[a] || s.length <= a ? d += u :(d && (c.push(d), 
      d = ""), o = parseFloat(s[a]), c.push(o), c._firstPT = {
        _next:c._firstPT,
        t:c,
        p:c.length - 1,
        s:o,
        c:("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) :parseFloat(u) - o) || 0,
        f:0,
        r:f && 4 > f
      }), p += u.length;
      return d += e.substr(p), d && c.push(d), c.setRatio = M, c;
    }, j = function(t, e, i, r, s, n, o, a) {
      var l, h, u = "get" === i ? t[e] :i, c = typeof t[e], p = "string" == typeof r && "=" === r.charAt(1), d = {
        t:t,
        p:e,
        s:u,
        f:"function" === c,
        pg:0,
        n:s || e,
        r:n,
        pr:0,
        c:p ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) :parseFloat(r) - u || 0
      };
      return "number" !== c && ("function" === c && "get" === i && (h = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e :"get" + e.substr(3), 
      d.s = u = o ? t[h](o) :t[h]()), "string" == typeof u && (o || isNaN(u)) ? (d.fp = o, 
      l = V(u, r, a || A.defaultStringFilter, d), d = {
        t:l,
        p:"setRatio",
        s:0,
        c:1,
        f:2,
        pg:0,
        n:s || e,
        pr:0
      }) :p || (d.s = parseFloat(u), d.c = parseFloat(r) - d.s || 0)), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), 
      this._firstPT = d, d) :void 0;
    }, I = A._internals = {
      isArray:d,
      isSelector:O,
      lazyTweens:z,
      blobDif:V
    }, L = A._plugins = {}, q = I.tweenLookup = {}, N = 0, W = I.reservedProps = {
      ease:1,
      delay:1,
      overwrite:1,
      onComplete:1,
      onCompleteParams:1,
      onCompleteScope:1,
      useFrames:1,
      runBackwards:1,
      startAt:1,
      onUpdate:1,
      onUpdateParams:1,
      onUpdateScope:1,
      onStart:1,
      onStartParams:1,
      onStartScope:1,
      onReverseComplete:1,
      onReverseCompleteParams:1,
      onReverseCompleteScope:1,
      onRepeat:1,
      onRepeatParams:1,
      onRepeatScope:1,
      easeParams:1,
      yoyo:1,
      immediateRender:1,
      repeat:1,
      repeatDelay:1,
      data:1,
      paused:1,
      reversed:1,
      autoCSS:1,
      lazy:1,
      onOverwrite:1,
      callbackScope:1,
      stringFilter:1
    }, H = {
      none:0,
      all:1,
      auto:2,
      concurrent:3,
      allOnStart:4,
      preexisting:5,
      "true":1,
      "false":0
    }, U = $._rootFramesTimeline = new F(), Q = $._rootTimeline = new F(), X = 30, K = I.lazyRender = function() {
      var t, e = z.length;
      for (R = {}; --e > -1; ) (t = z[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), 
      t._lazy = !1);
      z.length = 0;
    };
    Q._startTime = o.time, U._startTime = o.frame, Q._active = U._active = !0, setTimeout(K, 1), 
    $._updateRoot = A.render = function() {
      var t, e, i;
      if (z.length && K(), Q.render((o.time - Q._startTime) * Q._timeScale, !1, !1), U.render((o.frame - U._startTime) * U._timeScale, !1, !1), 
      z.length && K(), o.frame >= X) {
        X = o.frame + (parseInt(A.autoSleep, 10) || 120);
        for (i in q) {
          for (e = q[i].tweens, t = e.length; --t > -1; ) e[t]._gc && e.splice(t, 1);
          0 === e.length && delete q[i];
        }
        if ((!(i = Q._first) || i._paused) && A.autoSleep && !U._first && 1 === o._listeners.tick.length) {
          for (;i && i._paused; ) i = i._next;
          i || o.sleep();
        }
      }
    }, o.addEventListener("tick", $._updateRoot);
    var Y = function(t, e, i) {
      var r, s, n = t._gsTweenID;
      if (q[n || (t._gsTweenID = n = "t" + N++)] || (q[n] = {
        target:t,
        tweens:[]
      }), e && (r = q[n].tweens, r[s = r.length] = e, i)) for (;--s > -1; ) r[s] === e && r.splice(s, 1);
      return q[n].tweens;
    }, G = function(t, e, i, r) {
      var s, n, o = t.vars.onOverwrite;
      return o && (s = o(t, e, i, r)), o = A.onOverwrite, o && (n = o(t, e, i, r)), !1 !== s && !1 !== n;
    }, Z = function(t, e, i, r, s) {
      var n, o, a, l;
      if (1 === r || r >= 4) {
        for (l = s.length, n = 0; l > n; n++) if ((a = s[n]) !== e) a._gc || a._kill(null, t, e) && (o = !0); else if (5 === r) break;
        return o;
      }
      var h, c = e._startTime + u, p = [], d = 0, f = 0 === e._duration;
      for (n = s.length; --n > -1; ) (a = s[n]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || J(e, 0, f), 
      0 === J(a, h, f) && (p[d++] = a)) :a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((f || !a._initted) && c - a._startTime <= 2e-10 || (p[d++] = a)));
      for (n = d; --n > -1; ) if (a = p[n], 2 === r && a._kill(i, t, e) && (o = !0), 2 !== r || !a._firstPT && a._initted) {
        if (2 !== r && !G(a, e)) continue;
        a._enabled(!1, !1) && (o = !0);
      }
      return o;
    }, J = function(t, e, i) {
      for (var r = t._timeline, s = r._timeScale, n = t._startTime; r._timeline; ) {
        if (n += r._startTime, s *= r._timeScale, r._paused) return -100;
        r = r._timeline;
      }
      return n /= s, n > e ? n - e :i && n === e || !t._initted && 2 * u > n - e ? u :(n += t.totalDuration() / t._timeScale / s) > e + u ? 0 :n - e - u;
    };
    n._init = function() {
      var t, e, i, r, s, n = this.vars, o = this._overwrittenProps, a = this._duration, l = !!n.immediateRender, h = n.ease;
      if (n.startAt) {
        this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};
        for (r in n.startAt) s[r] = n.startAt[r];
        if (s.overwrite = !1, s.immediateRender = !0, s.lazy = l && !1 !== n.lazy, s.startAt = s.delay = null, 
        this._startAt = A.to(this.target, 0, s), l) if (this._time > 0) this._startAt = null; else if (0 !== a) return;
      } else if (n.runBackwards && 0 !== a) if (this._startAt) this._startAt.render(-1, !0), 
      this._startAt.kill(), this._startAt = null; else {
        0 !== this._time && (l = !1), i = {};
        for (r in n) W[r] && "autoCSS" !== r || (i[r] = n[r]);
        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && !1 !== n.lazy, i.immediateRender = l, 
        this._startAt = A.to(this.target, 0, i), l) {
          if (0 === this._time) return;
        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
      }
      if (this._ease = h = h ? h instanceof b ? h :"function" == typeof h ? new b(h, n.easeParams) :w[h] || A.defaultEase :A.defaultEase, 
      n.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, n.easeParams)), 
      this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, 
      this._targets) for (t = this._targets.length; --t > -1; ) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] :null) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, o);
      if (e && A._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), 
      n.runBackwards) for (i = this._firstPT; i; ) i.s += i.c, i.c = -i.c, i = i._next;
      this._onUpdate = n.onUpdate, this._initted = !0;
    }, n._initProps = function(e, i, r, s) {
      var n, o, a, l, h, u;
      if (null == e) return !1;
      R[e._gsTweenID] && K(), this.vars.css || e.style && e !== t && e.nodeType && L.css && !1 !== this.vars.autoCSS && E(this.vars, e);
      for (n in this.vars) if (u = this.vars[n], W[n]) u && (u instanceof Array || u.push && d(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[n] = u = this._swapSelfInParams(u, this)); else if (L[n] && (l = new L[n]())._onInitTween(e, this.vars[n], this)) {
        for (this._firstPT = h = {
          _next:this._firstPT,
          t:l,
          p:"setRatio",
          s:0,
          c:1,
          f:1,
          n:n,
          pg:1,
          pr:l._priority
        }, o = l._overwriteProps.length; --o > -1; ) i[l._overwriteProps[o]] = this._firstPT;
        (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), 
        h._next && (h._next._prev = h);
      } else i[n] = j.call(this, e, n, "get", u, n, 0, null, this.vars.stringFilter);
      return s && this._kill(s, e) ? this._initProps(e, i, r, s) :this._overwrite > 1 && this._firstPT && r.length > 1 && Z(e, this, i, this._overwrite, r) ? (this._kill(i, e), 
      this._initProps(e, i, r, s)) :(this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (R[e._gsTweenID] = !0), 
      a);
    }, n.render = function(t, e, i) {
      var r, s, n, o, a = this._time, l = this._duration, h = this._rawPrevTime;
      if (t >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) :1, 
      this._reversed || (r = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 
      0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), 
      (0 > h || 0 >= t && t >= -1e-7 || h === u && "isPause" !== this.data) && h !== t && (i = !0, 
      h > u && (s = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t :u); else if (1e-7 > t) this._totalTime = this._time = 0, 
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) :0, (0 !== a || 0 === l && h > 0) && (s = "onReverseComplete", 
      r = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== u || "isPause" !== this.data) && (i = !0), 
      this._rawPrevTime = o = !e || t || h === t ? t :u)), this._initted || (i = !0); else if (this._totalTime = this._time = t, 
      this._easeType) {
        var c = t / l, p = this._easeType, d = this._easePower;
        (1 === p || 3 === p && c >= .5) && (c = 1 - c), 3 === p && (c *= 2), 1 === d ? c *= c :2 === d ? c *= c * c :3 === d ? c *= c * c * c :4 === d && (c *= c * c * c * c), 
        this.ratio = 1 === p ? 1 - c :2 === p ? c :.5 > t / l ? c / 2 :1 - c / 2;
      } else this.ratio = this._ease.getRatio(t / l);
      if (this._time !== a || i) {
        if (!this._initted) {
          if (this._init(), !this._initted || this._gc) return;
          if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, 
          this._rawPrevTime = h, z.push(this), void (this._lazy = [ t, e ]);
          this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) :r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 :1));
        }
        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 
        0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) :s || (s = "_dummyGS")), 
        this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), 
        n = this._firstPT; n; ) n.f ? n.t[n.p](n.c * this.ratio + n.s) :n.t[n.p] = n.c * this.ratio + n.s, 
        n = n._next;
        this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), 
        e || (this._time !== a || r) && this._callback("onUpdate")), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), 
        r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), 
        !e && this.vars[s] && this._callback(s), 0 === l && this._rawPrevTime === u && o !== u && (this._rawPrevTime = 0));
      }
    }, n._kill = function(t, e, i) {
      if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, 
      this._enabled(!1, !1);
      e = "string" != typeof e ? e || this._targets || this.target :A.selector(e) || e;
      var r, s, n, o, a, l, h, u, c, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
      if ((d(e) || O(e)) && "number" != typeof e[0]) for (r = e.length; --r > -1; ) this._kill(t, e[r], i) && (l = !0); else {
        if (this._targets) {
          for (r = this._targets.length; --r > -1; ) if (e === this._targets[r]) {
            a = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], 
            s = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} :"all";
            break;
          }
        } else {
          if (e !== this.target) return !1;
          a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} :"all";
        }
        if (a) {
          if (h = t || a, u = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill), 
          i && (A.onOverwrite || this.vars.onOverwrite)) {
            for (n in h) a[n] && (c || (c = []), c.push(n));
            if ((c || !t) && !G(this, i, e, c)) return !1;
          }
          for (n in h) (o = a[n]) && (p && (o.f ? o.t[o.p](o.s) :o.t[o.p] = o.s, l = !0), 
          o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next :o === this._firstPT && (this._firstPT = o._next), 
          o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[n]), u && (s[n] = 1);
          !this._firstPT && this._initted && this._enabled(!1, !1);
        }
      }
      return l;
    }, n.invalidate = function() {
      return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, 
      this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} :[], 
      $.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, 
      this.render(-this._delay)), this;
    }, n._enabled = function(t, e) {
      if (a || o.wake(), t && this._gc) {
        var i, r = this._targets;
        if (r) for (i = r.length; --i > -1; ) this._siblings[i] = Y(r[i], this, !0); else this._siblings = Y(this.target, this, !0);
      }
      return $.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(t ? "_onEnable" :"_onDisable", this);
    }, A.to = function(t, e, i) {
      return new A(t, e, i);
    }, A.from = function(t, e, i) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new A(t, e, i);
    }, A.fromTo = function(t, e, i, r) {
      return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, 
      new A(t, e, r);
    }, A.delayedCall = function(t, e, i, r, s) {
      return new A(e, 0, {
        delay:t,
        onComplete:e,
        onCompleteParams:i,
        callbackScope:r,
        onReverseComplete:e,
        onReverseCompleteParams:i,
        immediateRender:!1,
        lazy:!1,
        useFrames:s,
        overwrite:0
      });
    }, A.set = function(t, e) {
      return new A(t, 0, e);
    }, A.getTweensOf = function(t, e) {
      if (null == t) return [];
      t = "string" != typeof t ? t :A.selector(t) || t;
      var i, r, s, n;
      if ((d(t) || O(t)) && "number" != typeof t[0]) {
        for (i = t.length, r = []; --i > -1; ) r = r.concat(A.getTweensOf(t[i], e));
        for (i = r.length; --i > -1; ) for (n = r[i], s = i; --s > -1; ) n === r[s] && r.splice(i, 1);
      } else for (r = Y(t).concat(), i = r.length; --i > -1; ) (r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
      return r;
    }, A.killTweensOf = A.killDelayedCallsTo = function(t, e, i) {
      "object" == typeof e && (i = e, e = !1);
      for (var r = A.getTweensOf(t, e), s = r.length; --s > -1; ) r[s]._kill(i, t);
    };
    var tt = y("plugins.TweenPlugin", function(t, e) {
      this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], 
      this._priority = e || 0, this._super = tt.prototype;
    }, !0);
    if (n = tt.prototype, tt.version = "1.18.0", tt.API = 2, n._firstPT = null, n._addTween = j, 
    n.setRatio = M, n._kill = function(t) {
      var e, i = this._overwriteProps, r = this._firstPT;
      if (null != t[this._propName]) this._overwriteProps = []; else for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1);
      for (;r; ) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, 
      r._prev = null) :this._firstPT === r && (this._firstPT = r._next)), r = r._next;
      return !1;
    }, n._roundProps = function(t, e) {
      for (var i = this._firstPT; i; ) (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), 
      i = i._next;
    }, A._onPluginEvent = function(t, e) {
      var i, r, s, n, o, a = e._firstPT;
      if ("_onInitAllProps" === t) {
        for (;a; ) {
          for (o = a._next, r = s; r && r.pr > a.pr; ) r = r._next;
          (a._prev = r ? r._prev :n) ? a._prev._next = a :s = a, (a._next = r) ? r._prev = a :n = a, 
          a = o;
        }
        a = e._firstPT = s;
      }
      for (;a; ) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
      return i;
    }, tt.activate = function(t) {
      for (var e = t.length; --e > -1; ) t[e].API === tt.API && (L[new t[e]()._propName] = t[e]);
      return !0;
    }, m.plugin = function(t) {
      if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
      var e, i = t.propName, r = t.priority || 0, s = t.overwriteProps, n = {
        init:"_onInitTween",
        set:"setRatio",
        kill:"_kill",
        round:"_roundProps",
        initAll:"_onInitAllProps"
      }, o = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
        tt.call(this, i, r), this._overwriteProps = s || [];
      }, !0 === t.global), a = o.prototype = new tt(i);
      a.constructor = o, o.API = t.API;
      for (e in n) "function" == typeof t[e] && (a[n[e]] = t[e]);
      return o.version = t.version, tt.activate([ o ]), o;
    }, r = t._gsQueue) {
      for (s = 0; s < r.length; s++) r[s]();
      for (n in f) f[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n);
    }
    a = !1;
  }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global :this || window, "TweenMax");

var $pinata = $("#pinata-body"), pinataLeft, pinataTop, tween = TweenMax.from("#pinata", 3, {
  y:-50,
  ease:Elastic.easeOut
}), tl = new TimelineMax({
  repeat:-1
}), tweenEye = TweenMax.to(".pinata-eye", 10, {
  rotation:720,
  transformOrigin:"90% 55%",
  ease:Elastic.easeOut,
  paused:!0
});

tl.to("#pinata", .5, {
  transformOrigin:"center top",
  rotation:3,
  repeat:1,
  yoyo:!0,
  ease:Sine.easeOut
}).to("#pinata", .5, {
  transformOrigin:"center top",
  rotation:-3,
  repeat:1,
  yoyo:!0,
  ease:Sine.easeOut
}), $(".pinata-container").click(function(t) {
  function e() {
    tl.restart() ? tweenEye.restart() :tl.restart();
  }
  tl.pause(), tweenEye.restart() ? tweenEye.play() :tweenEye.restart();
  var i = $pinata.offset().top - t.pageY + 83, r = $pinata.offset().left - t.pageX + 83;
  TweenMax.to("#pinata", .5, {
    rotation:(i - r) / 3,
    repeat:1,
    yoyo:!0,
    ease:Circ.easeOut,
    paused:!0,
    onComplete:e
  }).play();
}), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("degrees-show", Treehouse.DegreesShow = function(i) {
    function r() {
      this.toggleCurriculum = t(this.toggleCurriculum, this), this.toggleProjects = t(this.toggleProjects, this), 
      this.onScroll = t(this.onScroll, this), this.onResize = t(this.onResize, this), 
      r.__super__.constructor.apply(this, arguments), this.document = $(document), this.window = $(window), 
      this.skillsSection = this.el.find("[data-section-skills]"), this.skillsSectionPosition = this.skillsSection.offset().top, 
      this.skillsSectionHeight = this.skillsSection.outerHeight(), this.topicCharts = this.el.find("[data-degree-topic-chart]"), 
      this.on("click", "[data-show-projects-button]", this.toggleProjects), this.on("click", "[data-project]", this.showProjectDescription), 
      this.on("click", "[data-show-curriculum-button]", this.toggleCurriculum), this.listenTo(this.document, "scroll", this.onScroll, {
        triggerImmediately:!0
      }), this.listenTo(this.window, "resize", this.onResize, {
        triggerImmediately:!0
      }), this.buildTopicDonuts();
    }
    return e(r, i), r.prototype.showProjectDescription = function(t) {
      var e;
      return e = $(t.currentTarget), e.addClass("card-description-show").siblings().removeClass("card-description-show"), 
      setTimeout(function() {
        return function() {
          return $("html, body").animate({
            scrollTop:e.offset().top - 90,
            600:600
          });
        };
      }(), 300);
    }, r.prototype.onResize = function() {
      return this.windowHeight = this.window.height();
    }, r.prototype.onScroll = function() {
      if (!this.classAdded && this.document.scrollTop() + this.windowHeight >= this.skillsSectionPosition + this.skillsSectionHeight) return this.skillsSection.addClass("animate-donuts"), 
      this.classAdded = !0;
    }, r.prototype.toggleProjects = function(t) {
      return t.preventDefault(), this.el.toggleClass("degrees-show-projects-show");
    }, r.prototype.toggleCurriculum = function(t) {
      return t.preventDefault(), this.el.toggleClass("degrees-show-stats-show");
    }, r.prototype.buildTopicDonuts = function() {
      var t;
      return t = _.map(this.skillsSection.data("topics"), function(t) {
        return {
          name:t.name,
          value:t.value,
          className:"add-" + t.slug + "-stroke"
        };
      }), $(t).each(function(t) {
        return function(e, i) {
          var r, s, n;
          return s = 8, r = 2 * s * e + 110, n = t.topicCharts.length - e - 1, new Chartist.Pie(t.topicCharts.get(n), {
            series:[ i, {
              name:"",
              value:100 - i.value,
              className:""
            } ]
          }, {
            height:r + "px",
            width:r + "px",
            high:100,
            low:0,
            donut:!0,
            donutWidth:0 === e ? s :s + 1,
            showLabel:!1,
            startAngle:15 * e,
            chartPadding:0
          }).on("draw", t.drawDonut);
        };
      }(this));
    }, r.prototype.drawDonut = function(t) {
      var e;
      if ("slice" === t.type) return e = t.element._node.getTotalLength(), t.element.attr({
        "stroke-dasharray":e + "px " + e + "px"
      }), t.element.attr({
        "stroke-dashoffset":-e + "px"
      });
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("degrees-pricing", Treehouse.DegreesPricing = function(i) {
    function r() {
      this.toggleTdTopicChoice = t(this.toggleTdTopicChoice, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", "[data-toggle-td-choice]", this.toggleTdTopicChoice);
    }
    return e(r, i), r.prototype.toggleTdTopicChoice = function(t) {
      return t.preventDefault(), this.get(".degrees-index-enroll-degrees").removeClass("hidden");
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r() {
      this.backToPlans = e(this.backToPlans, this), this.choosePlan = e(this.choosePlan, this), 
      r.__super__.constructor.apply(this, arguments), this.on("click", "[data-choose-plan]", this.choosePlan), 
      this.on("click", "[data-back-to-plans]", this.backToPlans);
    }
    return i(r, t), r.prototype.choosePlan = function(t) {
      var e, i;
      return t.preventDefault(), i = $(t.currentTarget), e = this.get(".degree-selection-" + i.data("choose-plan")), 
      this.get("#degrees-index-enroll").fadeOut(0, function() {
        return e.fadeIn(250);
      });
    }, r.prototype.backToPlans = function(t) {
      var e;
      return t.preventDefault(), e = this.get("#degrees-index-enroll"), this.get(".degrees-selection-panel").fadeOut(0, function() {
        return e.fadeIn(250);
      });
    }, r;
  }(Treehouse.View), Featurette.register("degree-plans", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function r() {
      this.constructor = t;
    }
    for (var s in e) i.call(e, s) && (t[s] = e[s]);
    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("degree-selection", function(i) {
    function r() {
      this.selectDegree = t(this.selectDegree, this), r.__super__.constructor.apply(this, arguments), 
      this.on("click", ".degrees-index-enroll-degrees-button", this.selectDegree);
    }
    return e(r, i), r.prototype.selectDegree = function(t) {
      var e;
      return e = $(t.currentTarget), this.el.find(".selected").removeClass("selected"), 
      e.addClass("selected");
    }, r;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  t = function(t) {
    function r(t) {
      this.collectSurveyData = e(this.collectSurveyData, this), this.redirectToSurvey = e(this.redirectToSurvey, this), 
      this.redirectToSignup = e(this.redirectToSignup, this), this.redirectAfterSubmit = e(this.redirectAfterSubmit, this), 
      this.submitSurveyData = e(this.submitSurveyData, this), this.onSkipSurvey = e(this.onSkipSurvey, this), 
      this.onCompleteSurvey = e(this.onCompleteSurvey, this), this.onHashChange = e(this.onHashChange, this), 
      this.nextStep = e(this.nextStep, this), this.onSelectAnswer = e(this.onSelectAnswer, this), 
      this.onFirstAnswer = e(this.onFirstAnswer, this), this.onBackClicked = e(this.onBackClicked, this), 
      this.listenToEvents = e(this.listenToEvents, this), r.__super__.constructor.call(this, t), 
      this.el.find(".next-step").addClass("disabled");
    }
    return i(r, t), r.prototype.listenToEvents = function() {
      return this.on("click", "[data-submit-survey]", this.onCompleteSurvey), this.on("click", "[data-back-button]", this.onBackClicked), 
      this.on("click", "[data-skip-survey]", this.onSkipSurvey), this.on("click", "[data-answer]", this.onSelectAnswer), 
      this.on("click", "[data-answer-first-question]", this.onFirstAnswer);
    }, r.prototype.onBackClicked = function() {
      if (this.currentStep !== this.initialStep) return r.__super__.onBackClicked.apply(this, arguments);
    }, r.prototype.onFirstAnswer = function(t) {
      var e;
      return e = $(t.currentTarget), $.ajax("/surveys/" + this.el.data("purpose") + "/answer_question", {
        data:{
          question_id:this.el.data("wizard-initial-step"),
          answer_id:e.data("answer-id")
        },
        type:"PUT",
        error:this.redirectToSurvey,
        success:this.redirectToSurvey
      });
    }, r.prototype.onSelectAnswer = function(t) {
      var e, i;
      return e = $(t.currentTarget), i = this.el.find(".next-step:visible"), i.data("step", e.data("step")), 
      i.data("answer-id", e.data("answer-id")), this.el.find(".survey-marketing-button").removeClass("disabled").addClass("button-primary"), 
      i.removeClass("disabled");
    }, r.prototype.nextStep = function() {
      return !this.el.find(".next-step:visible").hasClass("disabled") && r.__super__.nextStep.apply(this, arguments);
    }, r.prototype.onHashChange = function(t) {
      return t.preventDefault(), $("html,body").animate({
        scrollTop:0
      }), r.__super__.onHashChange.apply(this, arguments);
    }, r.prototype.onCompleteSurvey = function(t) {
      return t.preventDefault(), this.collectSurveyData(t), this.submitSurveyData("PUT", "/surveys/" + this.el.data("purpose") + "/complete");
    }, r.prototype.onSkipSurvey = function(t) {
      return t.preventDefault(), this.surveyData.skipped = !0, this.surveyData.step_skipped = $(t.currentTarget).closest(".step").data("step-skipped"), 
      this.submitSurveyData("PUT", "/surveys/" + this.el.data("purpose") + "/complete");
    }, r.prototype.submitSurveyData = function(t, e) {
      return $.ajax(e, {
        data:{
          survey_response:this.surveyData
        },
        type:t,
        error:this.redirectToSignup,
        success:this.redirectAfterSubmit
      });
    }, r.prototype.redirectAfterSubmit = function(t, e, i) {
      return this.signupLocation ? window.location = this.signupLocation :window.location = i.getResponseHeader("Location");
    }, r.prototype.redirectToSignup = function() {
      return this.signupLocation ? window.location.replace(this.signupLocation) :window.location.replace("/");
    }, r.prototype.redirectToSurvey = function() {
      return window.location.replace(this.el.data("survey-path"));
    }, r.prototype.collectSurveyData = function(t) {
      var e;
      return this.signupLocation = $(t.currentTarget).attr("href"), this.surveyData.degree_to_join = $(t.currentTarget).data("degree-id"), 
      this.surveyData.track_to_join = $(t.currentTarget).data("track-id"), (e = this.surveyData).action_to_take || (e.action_to_take = $(t.currentTarget).data("action-to-take")), 
      this.surveyData.skipped = !1;
    }, r;
  }(SurveyWizard), Featurette.register("marketing-survey-wizard", t);
}.call(this), Treehouse.init();
//# sourceMappingURL=/assets/maps/application-881140e1cabda51136b64fb635ab1f015aadd481f4264577be0cd8baf5b5eff2.js.map
