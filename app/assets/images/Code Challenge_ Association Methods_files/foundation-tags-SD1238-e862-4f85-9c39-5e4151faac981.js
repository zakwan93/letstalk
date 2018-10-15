IRF.siteDId=1238;IRF.siteName="tagmgmt.site.anysite";IRF.util.arrContains=function(arr,val){if(Array.prototype.indexOf){return arr.indexOf(val)>-1
}else{for(var i=0,ii=arr.length;i<ii;i++){if(arr[i]===val){return true}}}};IRF.util.removeListener=function(el,event,fn){if(el.detachEvent){el.detachEvent("on"+event,fn)
}else{el.removeEventListener(event,fn,false)}};IRF.util.extend=function(a,c){for(var b in c){void 0!==c[b]&&(a[b]=c[b])
}return a};IRF.innerStartTime=IRF.now();IRF.scriptErrors=[];IRF.logErrors=function(m,l,ln,id){IRF.scriptErrors.push({tid:id,msg:m,loc:l,line:ln})
};IRF.internalErrorLog=function(error,defaultMsg,loc,tagId){IRF.logErrors((error||defaultMsg),loc,-1,tagId)
};if(IRF.page.debug||true){window.onerror=function(m,u,ln){IRF.logErrors(m,u,ln);
IRF.consoleLog(m+" on line "+ln+" in "+u);return false}}IRF.emptyFn=function(){};
IRF.isDocLoaded=false;IRF.allTagsComplete=false;IRF.eventTagQueue=[];IRF.evt={1:"click",2:"dblclick",3:"mouseover",4:"keydown",5:"keyup",6:"blur",7:"focus",8:"submit",9:"change",10:"hasUpdated"};
IRF.ls={loaded:1,loading:2,queued:3,timeout:4,rejected:5,waiting:6};IRF.ld={load_now:1,try_again:2,dont_load:3};
IRF.dtvt={1:"Cookie",2:"Query Param",3:"Javascript",4:"DOM Element",5:"Hard-coded"};
(function(w){var fn=function(){IRF.isDocLoaded=true;IRF.docLoadedTime=IRF.now()};
if(document.readyState==="complete"){fn()}else{IRF.util.addListener(w,"load",fn)}})(window);
IRF.getLocation=function(loc,locId){if(loc==1){return document.getElementsByTagName("head")[0]||document.getElementsByTagName("script")[0]
}else{if(loc==3){return document.getElementById(locId)}}return document.body};IRF.matchUrl=function(rx){return document.URL.match(new RegExp(rx,"g"))
};IRF.matchesPageGroup=function(tag){var match=null,pgr;for(var x in tag.pg){pgr=tag.pg[x];
if(pgr.e){match=IRF.matchUrl(pgr.e);if(match){tag.spg=x;tag.rm={k:1,a:[pgr.n]};return false
}}}for(var x in tag.pg){pgr=tag.pg[x];if(pgr.i){match=IRF.matchUrl(pgr.i);if(match){tag.spg=x;
return true}}}if(match===null){tag.rm={k:2}}return false};IRF.fireable=function(tag){if(!IRF.isActive(tag)||!IRF.matchesPageGroup(tag)){return IRF.ld.dont_load
}if(tag.sc){if(IRF.page.getTagViewCountForVisit(tag.id)>=tag.sc){tag.rm={k:3,a:[tag.sc]};
return IRF.ld.dont_load}}if(tag.uc){if(IRF.page.getTagViewCountForUser(tag.id)>=tag.uc){tag.rm={k:4,a:[tag.uc]};
return IRF.ld.dont_load}}var ruleMatch,cb=IRF.util.extend({done:false,timer:-1,freqCapReached:function(){this.done=true
},nextTimer:function(additionalWait){if(this.timer<0||additionalWait<=this.timer){this.timer=additionalWait
}},evalTimeout:function(configuredTimeout,timePassed){var additionalWait=configuredTimeout-timePassed;
if(additionalWait<=0){return true}else{this.nextTimer(additionalWait);return false
}},timeOnPage:function(configuredTimeout){return this.evalTimeout(configuredTimeout,IRF.now()-this.start)
},timeInSession:function(configuredTimeout){return this.evalTimeout(configuredTimeout,IRF.now()-this.visit)
}},IRF.page);try{ruleMatch=tag.fr?tag.fr(cb):true}catch(e){ruleMatch=false;IRF.internalErrorLog(e,"Error executing firing rule.","Firing Rule",tag.id)
}if(ruleMatch){return IRF.canLoad(tag)}else{tag.rm={k:5}}if(cb.timer>=0){return IRF.ld.try_again
}return IRF.ld.dont_load};IRF.dependenciesReady=function(rt){if(rt){var tags=IRF.tc,x=0,xx=tags.length;
for(;x<xx;x++){if(IRF.util.arrContains(rt,tags[x].id)){if(tags[x].ls!=IRF.ls.loaded){return false
}}}}return true};IRF.getMatchingDtvs=function(dtv){var dtvs=[],val;for(var m in dtv){val=dtv[m];
if(IRF.dtv.hasOwnProperty(val)){dtvs.push({dtv:IRF.dtv[val],tt:m,id:val})}else{dtvs.push({id:val,tt:m})
}}return dtvs};IRF.doReplace=function(str,regex,expr,regex2){var rVars,match,nVal,matches=str.match(regex);
if(matches){for(var x=0,xx=matches.length;x<xx;x++){rVars=regex2.exec(str);match=rVars[0];
nVal=expr;if(rVars[4]){if(IRF.util.strContains(expr,"[x]")){nVal=expr.replace("[x]","["+rVars[4]+"]")
}else{nVal=expr+"["+rVars[4]+"]"}}else{if(rVars[2]){nVal=expr.split("[x]")[0]+".length"
}}str=str.replace(match,nVal)}}return str};IRF.replaceDynamicValue=function(tag,expr,foundationVal,tok){var dtvStr="#{"+tok+"}",dtvReg=new RegExp(dtvStr,"g"),rStr="\\"+dtvStr+"((\\.length)|(\\[([a-zA-Z0-9])\\]))?",r=new RegExp(rStr,"g"),r2=new RegExp(rStr);
try{if(expr instanceof Array){expr="["+expr.toString()+"]"}if(!tag.h){if(IRF.util.hasValue(foundationVal)){tag.u=tag.u.replace(dtvReg,foundationVal)
}else{tag.u=tag.u.replace(dtvReg,expr)}if(tag.bs){tag.bs=IRF.doReplace(tag.bs,r,expr,r2)
}if(tag.af){tag.af=IRF.doReplace(tag.af,r,expr,r2)}}else{tag.h=IRF.doReplace(tag.h,r,expr,r2);
if(IRF.util.hasValue(foundationVal)){var htmlReg=new RegExp("(<script>(?:[^<](?!/script))*<\/script>)|("+expr+")","gi");
tag.h=tag.h.replace(htmlReg,function(m,scr,fv){return scr||foundationVal})}}}catch(e){IRF.internalErrorLog(e,"Variable Replacement Error","Dynamic Tag Variable",tag.id)
}};IRF.getCustomJavascriptValue=function(code){var val;try{if(code&&typeof code==="function"){val=code(IRF.page)
}else{eval("var fn = "+code);val=fn()}}catch(e){val=undefined;IRF.internalErrorLog(e,"Variable Replacement Error","Dynamic Tag Variable","DTV: "+code)
}return val};IRF.getDomValue=function(dtv){var el=document.getElementById(dtv.c);
if(el){if(dtv.an){return el[dtv.an]}else{return el.value?el.value:el.innerHTML}}return null
};IRF.getDtvReplacementValue=function(dtv,id){var pVal,rtVal;if(dtv.p){pVal=IRF.page.getVariable(id)
}if(dtv.p==0||dtv.po==1||(dtv.p==1&&!pVal)){switch(dtv.t){case 1:rtVal=IRF.util.getCookie(dtv.c);
break;case 2:rtVal=IRF.util.getQueryParam(dtv.c);break;case 3:rtVal=IRF.getCustomJavascriptValue(dtv.c);
break;case 4:rtVal=IRF.getDomValue(dtv);break;case 5:break;case 6:}if(IRF.util.hasValue(rtVal)){return rtVal
}}if(!IRF.util.hasValue(rtVal)&&pVal){return pVal}return null};IRF.page.getVar=function(name){if(IRF.dtv[name]){return IRF.getDtvReplacementValue(IRF.dtv[name],name)
}else{return IRF.eval(name)}};IRF.eval=function(scr,preventLog){try{return eval(scr)
}catch(e){if(!preventLog){IRF.consoleLog(e)}return null}};IRF.tokenValueAvailable=function(tag){var dtv=tag.dtv;
if(dtv){var dtvs=IRF.getMatchingDtvs(dtv);for(var i=0,ii=dtvs.length;i<ii;i++){var d=dtvs[i].dtv,id=dtvs[i].id,val="",fVal=null,tok=dtvs[i].tt,isFoundation=d===undefined;
if(d){val=d.v}if(isFoundation){val=IRF.irfv+id;fVal=IRF.eval(!IRF.util.strContains(val,"[x]")?val:val.replace("[x]","[0]"))
}if((!isFoundation&&IRF.util.hasValue(val))||(isFoundation&&IRF.util.hasValue(fVal))){IRF.replaceDynamicValue(tag,val,fVal,tok)
}else{if(isFoundation){tag.rm={k:6,a:[val]}}else{if(d.t!=3&&d.t!=4){tag.rm={k:7,a:[IRF.dtvt[d.t],d.c]}
}else{if(IRF.isDocLoaded){tag.rm={k:7,a:[IRF.dtvt[d.t],tok]}}else{return IRF.ld.try_again
}}}return IRF.ld.dont_load}}}return IRF.ld.load_now};IRF.isEventComplete=function(t){if(t==2&&!IRF.isDocLoaded){return false
}if(t==3&&!IRF.domReady){return false}return true};IRF.isActive=function(tag){var d=IRF.now();
if((tag.sd&&tag.sd>d)||(tag.ed&&tag.ed<d)){tag.rm={k:8};return false}return true};
IRF.isEventTargetReady=function(evt){if(!evt){return true}return IRF.getLocation(3,evt)?true:false
};IRF.canLoad=function(tag){if(!IRF.domReady){return IRF.ld.try_again}var node=tag.tn||IRF.getLocation(tag.tl,tag.ei);
tag.tn=node;if(IRF.isDocLoaded){var to=10000,tr=IRF.now()-IRF.innerStartTime;if(tr>to){if(!node){tag.rm={k:10,a:tag.ei?[tag.ei]:[tag.tl==1?"head":"body"]}
}if(!IRF.dependenciesReady(tag.rt)){tag.rm={k:11}}if(!IRF.isEventTargetReady(tag.evt)){tag.rm={k:9,a:[tag.evt]}
}tag.rm={k:12,a:to};return IRF.ld.dont_load}}if(!node||!IRF.dependenciesReady(tag.rt)||!IRF.isEventComplete(tag.t)||!IRF.isEventTargetReady(tag.evt)){return IRF.ld.try_again
}if(tag.dtv){return IRF.tokenValueAvailable(tag)}return IRF.ld.load_now};IRF.parseHtml=function(html){var parser=document.createElement("div");
parser.innerHTML="<b>b</b>"+html;parser.removeChild(parser.firstChild);return parser.firstChild
};IRF.doLoadTimeout=function(q){IRF.loadTimeout=setTimeout(function(){IRF.loadTags(q)
},Math.min(200,IRF.page.nextTimeout))};IRF.setupEventHandler=function(tag){var evt=document.getElementById(tag.evt),q=IRF.eventTagQueue,arrIndex=function(arr,val){if(Array.prototype.indexOf){return arr.indexOf(val)
}else{var ind=-1;for(var i=0,ii=arr.length;i<ii;i++){if(arr[i]===val){ind=i;break
}}return ind}},fire=function(){IRF.startLoad(tag);q.splice(arrIndex(q,tag.id),1)};
tag.ls=IRF.ls.waiting;q.push(tag.id);if(tag.ev!=10){var fn=function(){fire();IRF.util.removeListener(evt,IRF.evt[tag.ev],fn)
};IRF.util.addListener(evt,IRF.evt[tag.ev],fn)}else{var html=evt.innerHTML,to=setInterval(function(){if(html!=evt.innerHTML){fire();
clearInterval(to)}},500)}};IRF.createPlaceHolderNode=function(tag){var el=document.createElement("div");
IRF.insertTag(el,tag.tl,tag.tp,tag.ei);return el};IRF.startLoad=function(tag){tag.ls=IRF.ls.loading;
IRF.consoleLog("Loading tag "+tag.n);tag.st=IRF.now();IRF.createAndInsertTag(tag)
};IRF.setDtvs=function(){if(!IRF.allDtvsSet){var dtv,allSet=true,dtvs=IRF.dtv;for(var id in dtvs){dtv=dtvs[id];
if(!IRF.util.hasValue(dtv.v)){dtv.v=IRF.getDtvReplacementValue(dtv,id);if(!IRF.util.hasValue(dtv.v)){allSet=false
}else{if(dtv.p&&(dtv.po||!IRF.page.getVariable(id))){IRF.page.setVariable(id,dtv.v,dtv.ps)
}}}}IRF.allDtvsSet=allSet}};IRF.loadTags=function(tags){IRF.setDtvs();var tag,q=[];
IRF.page.nextTimeout=-1;for(var x=0,len=tags.length;x<len;x++){tag=tags[x];switch(IRF.fireable(tag)){case IRF.ld.load_now:if(tag.evt){IRF.setupEventHandler(tag)
}else{IRF.startLoad(tag)}break;case IRF.ld.try_again:q.push(tag);tag.ls=IRF.ls.queued;
break;case IRF.ld.dont_load:tag.ls=IRF.ls.rejected;IRF.checkAllTagsComplete()}}if(q.length>0||IRF.page.nextTimeout>-1){clearTimeout(IRF.loadTimeout);
return IRF.doLoadTimeout(q)}};IRF.insertTag=function(tag,loc,pos,locId){var el=IRF.getLocation(loc,locId);
if(pos==1&&el.childNodes.length!==0){el.insertBefore(tag,el.childNodes[0])}else{el.appendChild(tag)
}};IRF.windowScopeEval=function(scr,id,loc){try{if(window.execScript){window.execScript(scr)
}else{var fn=function(){window.eval.call(window,scr)};fn()}}catch(e){IRF.internalErrorLog(e,"Inline script error",loc,id)
}};IRF.checkAllTagsComplete=function(){if(!IRF.allTagsComplete){var tags=IRF.tc,allComplete=true,ls;
for(var x=0,xx=tags.length;x<xx;x++){ls=tags[x].ls;if(!ls||ls==IRF.ls.loading||ls==IRF.ls.queued){allComplete=false;
break}}if(allComplete){if(IRF.eventTagQueue.length===0){IRF.taskMgr(IRF.tagLogging,function(){return document.body
},1000)}IRF.allTagsComplete=true;IRF.endTime=IRF.now()}}};IRF.tagLoaded=function(tag){if(tag.af){IRF.windowScopeEval(tag.af,tag.id,"post script")
}tag.ls=IRF.ls.loaded;tag.et=IRF.now();if(tag.sc){IRF.page.incrementTagViewCountForVisit(tag.id)
}if(tag.uc){IRF.page.incrementTagViewCountForUser(tag.id)}IRF.checkAllTagsComplete()
};IRF.doPreTag=function(bs,id){if(bs){IRF.windowScopeEval(bs,id,"pre script")}};IRF.monitorTimeout=function(tag){var to=tag.to?tag.to:5000;
if(to){setTimeout(function(){if(tag.ls!=IRF.ls.loaded&&tag.ls!=IRF.ls.rejected){tag.ls=IRF.ls.timeout;
tag.tn.removeChild(tag.el);tag.el=null;IRF.checkAllTagsComplete()}},to+1)}};IRF.createAndInsertTag=function(tag){IRF.doPreTag(tag.bs,tag.id);
if(tag.u){tag.el=IRF.createTag(tag.u,tag.a,"text/javascript",function(){IRF.tagLoaded(tag)
});IRF.insertTag(tag.el,tag.tl,tag.tp,tag.ei);IRF.monitorTimeout(tag)}else{IRF.tagLoaded(tag)
}};IRF.getTagById=function(id){for(var x=0,tc=IRF.tc,xx=tc.length;x<xx;x++){if(id==tc[x].id){return tc[x]
}}};IRF.getError=function(tagId,tagUrl,msgFn){var errors=IRF.scriptErrors,msg="",error;
for(var x=0,xx=errors.length;x<xx;x++){error=errors[x];if(error.tid==tagId||(tagUrl&&IRF.util.strContains(error.loc,tagUrl))){msg+=msgFn(error)
}}return msg};IRF.tagLoggingJson=function(){var msg,t,tags=IRF.tc,logConfig={acc:IRF.iraid,sd:IRF.deploymentId,t:[],cl:document.cookie.length},getMsg=function(error){return error.msg
},setTagTime=function(tag,t){if(tag.st){t.lb=tag.st-IRF.innerStartTime}if(tag.et){t.ld=tag.et-tag.st
}},x=0,tag,xx=tags.length;for(;x<xx;x++){tag=tags[x];msg=tag.rm?tag.rm.k:IRF.getError(tag.id,tag.u,getMsg).replace(/,/g,"-").replace(/;/g,"-");
t={id:tag.id,ls:tag.ls};if(tag.h){setTagTime(tag,t)}else{if(tag.u&&window.performance){try{var perf=window.performance.getEntriesByName(tag.u)[0];
t.lb=perf.startTime|0;t.ld=perf.duration|0}catch(e){setTagTime(tag,t)}}}if(tag.spg){t.spg=tag.spg
}if(msg!==""){t.msg=msg}logConfig.t.push(t)}return logConfig};IRF.tagLoggingImg=function(domain,json){if(!IRF.hasLogged&&IRF.tc&&IRF.tc.length){var img=document.createElement("img");
img.style.position="absolute";img.style.width=img.style.height="1px";img.src="//"+domain+"/fl/?d="+encodeURI(IRF.JSON.stringify(json));
img.width=img.height=img.border=0;document.body.appendChild(img);IRF.hasLogged=true
}};IRF.tagLogging=function(){if(!IRF.page.debug){IRF.tagLoggingImg(IRF.irlogd.p,IRF.tagLoggingJson())
}};IRF.util.addListener(window,"unload",IRF.tagLogging);IRF.taskMgr=function(task,cond,delay){if(cond()){task()
}else{setTimeout(function(){IRF.taskMgr(task,cond,delay)},delay)}};IRF.dtv={1:{c:function(so){return Math.floor(Math.random()*1000001)
},t:3,p:0,ps:2,po:0}};IRF.tc=[{id:3236,n:"Media Source Tracking",s:2,bs:"",u:"//a.impactradius-tag.com/mediasource-A187849-72ad-44c6-83bc-3d4f458b85e71.js",af:"",tl:2,tp:1,a:1,to:5000,t:1,dw:0,pg:{1684:{i:"(?:(?:.*?))",n:"All Pages"}}}];
IRF.loadTags(IRF.tc);