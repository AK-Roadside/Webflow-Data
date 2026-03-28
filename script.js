(function(){
'use strict';
var IO='IntersectionObserver' in window;
function rv(){
  var els=document.querySelectorAll('.rv');
  if(!IO){els.forEach(function(e){e.classList.add('v');});return;}
  var o=new IntersectionObserver(function(en){en.forEach(function(e){if(!e.isIntersecting)return;var s=Array.from(e.target.parentElement.querySelectorAll('.rv:not(.v)'));e.target.style.transitionDelay=Math.min(s.indexOf(e.target)*55,160)+'ms';e.target.classList.add('v');o.unobserve(e.target);});},{threshold:.1,rootMargin:'0px 0px -28px 0px'});
  els.forEach(function(e){o.observe(e);});
}
function cards(){
  var c=document.querySelectorAll('.sk');
  if(!IO){c.forEach(function(x){x.classList.add('v');});return;}
  var o=new IntersectionObserver(function(en){en.forEach(function(e){if(!e.isIntersecting)return;var a=Array.from(document.querySelectorAll('.sk:not(.v)'));e.target.style.transitionDelay=Math.min(a.indexOf(e.target)*55,220)+'ms';e.target.classList.add('v');o.unobserve(e.target);});},{threshold:.07,rootMargin:'0px 0px -18px 0px'});
  c.forEach(function(x){o.observe(x);});
}
function why(){
  var items=document.querySelectorAll('.wi'),box=document.querySelector('.cb');
  if(!IO){items.forEach(function(e){e.classList.add('v');});if(box)box.classList.add('v');return;}
  var o=new IntersectionObserver(function(en){en.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add('v');o.unobserve(e.target);});},{threshold:.12});
  items.forEach(function(el,i){el.style.transitionDelay=(i*75)+'ms';o.observe(el);});
  if(box)o.observe(box);
}
function faq(){
  document.querySelectorAll('.fq').forEach(function(b){b.addEventListener('click',function(){var id=this.getAttribute('aria-controls'),ans=document.getElementById(id),open=ans.classList.contains('op');document.querySelectorAll('.fa.op').forEach(function(a){a.classList.remove('op');});document.querySelectorAll('.fq.op').forEach(function(x){x.classList.remove('op');x.setAttribute('aria-expanded','false');});if(!open){ans.classList.add('op');this.classList.add('op');this.setAttribute('aria-expanded','true');}});});
}
function nav(){
  var t=document.getElementById('nt'),n=document.getElementById('mn'),m=document.getElementById('nm');
  if(!t)return;
  function close(){n.classList.remove('no');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open menu');}
  function open(){n.classList.add('no');t.setAttribute('aria-expanded','true');t.setAttribute('aria-label','Close menu');}
  t.addEventListener('click',function(){n.classList.contains('no')?close():open();});
  document.addEventListener('click',function(e){if(n.classList.contains('no')&&!n.contains(e.target))close();});
  n.querySelectorAll('.ni>button.nk').forEach(function(b){b.addEventListener('click',function(){if(!n.classList.contains('no'))return;var d=this.parentElement.querySelector('.dd');if(!d)return;var s=d.style.display==='block';n.querySelectorAll('.dd').forEach(function(x){x.style.display='';});if(!s)d.style.display='block';this.setAttribute('aria-expanded',!s?'true':'false');});});
  if(m)m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){if(n.classList.contains('no'))close();});});
}
rv();cards();why();faq();nav();
})();
