import{Controller as t}from"stimulus";import e from"flatpickr";var n={string:["altFormat","altInputClass","ariaDateFormat","conjunction","dateFormat","defaultDate","mode","nextArrow","position","prevArrow"],boolean:["allowInput","altInput","animate","clickOpens","closeOnSelect","disableMobile","enableSeconds","enableTime","inline","noCalendar","shorthandCurrentMonth","static","time_24hr","weekNumbers","wrap"],date:["maxDate","minDate","maxTime","minTime","now"],array:["disable","enable"],number:["defaultHour","defaultMinute","defaultSeconds","hourIncrement","minuteIncrement","showMonths"]},a=["change","open","close","monthChange","yearChange","ready","valueUpdate","dayCreate"],o=["input","calendarContainer","prevMonthNav","nextMonthNav","currentMonthElement","currentYearElement","days"],i=/\%[a-zA-Z]/,r=function(t){if(i.test(t)){var e=t;return Object.keys(p).forEach(function(t){e=e.replace(RegExp(t,"g"),p[t])}),e}return t},p={"%Y":"Y","%y":"y","%C":"Y","%m":"m","%-m":"n","%_m":"n","%B":"F","%^B":"F","%b":"M","%^b":"M","%h":"M","%^h":"M","%d":"d","%-d":"j","%e":"j","%H":"H","%k":"H","%I":"h","%l":"h","%P":"K","%p":"K","%M":"i","%S":"S","%A":"l","%a":"D","%w":"w"};export default function(t){function i(){t.apply(this,arguments)}t&&(i.__proto__=t),(i.prototype=Object.create(t&&t.prototype)).constructor=i;var p={altInputTarget:{configurable:!0}};return i.prototype.initialize=function(){this.config={}},i.prototype.connect=function(){console.log("test3"),this.initializeEvents(),this.initializeOptions(),this.initializeDateFormats(),this.fp=e(this.element,Object.assign({},this.config)),this.initializeElements()},i.prototype.disconnect=function(){this.fp.destroy()},i.prototype.initializeEvents=function(){var t=this;a.forEach(function(e){var n,a="on"+((n=e).charAt(0).toUpperCase()+n.slice(1));t.config[a]=t[e].bind(t)})},i.prototype.initializeOptions=function(){var t=this;Object.keys(n).forEach(function(e){n[e].forEach(function(n){var a=n.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase();t.data.has(a)&&(t.config[n]=t[e](a))})})},i.prototype.initializeDateFormats=function(){this.data.has("date-format")&&(this.config.dateFormat=r(this.data.get("date-format"))),this.data.has("alt-format")&&(this.config.altFormat=r(this.data.get("alt-format"))),this.data.has("aria-date-format")&&(this.config.ariaDateFormat=r(this.data.get("aria-date-format")))},i.prototype.initializeElements=function(){var t=this;o.forEach(function(e){t[e+"Target"]=t.fp[e]})},p.altInputTarget.get=function(){return this.element.querySelector(".flatpickr-input")?this.element.querySelector(".flatpickr-input"):this.element},i.prototype.change=function(){},i.prototype.open=function(){},i.prototype.close=function(){},i.prototype.monthChange=function(){},i.prototype.yearChange=function(){},i.prototype.ready=function(){},i.prototype.valueUpdate=function(){},i.prototype.dayCreate=function(){},i.prototype.string=function(t){return this.data.get(t)},i.prototype.date=function(t){return this.data.get(t)},i.prototype.boolean=function(t){return"true"===this.data.get(t)},i.prototype.array=function(t){return JSON.parse(this.data.get(t))},i.prototype.number=function(t){return parseInt(this.data.get(t))},Object.defineProperties(i.prototype,p),i}(t);
//# sourceMappingURL=stimulus-flatpickr.m.js.map
