(function(){
'use strict';

function initReveal(){
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('vis');});return;}
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting)return;
      var sib=Array.from(e.target.parentElement.querySelectorAll('.reveal:not(.vis)'));
      var i=sib.indexOf(e.target);
      e.target.style.transitionDelay=Math.min(i*55,160)+'ms';
      e.target.classList.add('vis');
      obs.unobserve(e.target);
    });
  },{threshold:0.1,rootMargin:'0px 0px -28px 0px'});
  els.forEach(function(e){obs.observe(e);});
}

function initCards(){
  var cards=document.querySelectorAll('.svc-card');
  if(!('IntersectionObserver' in window)){cards.forEach(function(c){c.classList.add('vis');});return;}
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting)return;
      var all=Array.from(document.querySelectorAll('.svc-card:not(.vis)'));
      var i=all.indexOf(e.target);
      e.target.style.transitionDelay=Math.min(i*55,220)+'ms';
      e.target.classList.add('vis');
      obs.unobserve(e.target);
    });
  },{threshold:0.07,rootMargin:'0px 0px -18px 0px'});
  cards.forEach(function(c){obs.observe(c);});
}

function initWhy(){
  var items=document.querySelectorAll('.why-item');
  var box=document.querySelector('.cta-box');
  if(!('IntersectionObserver' in window)){items.forEach(function(e){e.classList.add('vis');});if(box)box.classList.add('vis');return;}
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting)return;
      e.target.classList.add('vis');obs.unobserve(e.target);
    });
  },{threshold:0.12});
  items.forEach(function(el,i){el.style.transitionDelay=(i*75)+'ms';obs.observe(el);});
  if(box)obs.observe(box);
}

function initFaq(){
  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.addEventListener('click',function(){
      var id=this.getAttribute('aria-controls');
      var ans=document.getElementById(id);
      var isOpen=ans.classList.contains('open');
      document.querySelectorAll('.faq-a.open').forEach(function(a){a.classList.remove('open');});
      document.querySelectorAll('.faq-q.open').forEach(function(b){b.classList.remove('open');b.setAttribute('aria-expanded','false');});
      if(!isOpen){ans.classList.add('open');this.classList.add('open');this.setAttribute('aria-expanded','true');}
    });
  });
}

function initNav(){
  var toggle=document.getElementById('nav-toggle');
  var nav=document.getElementById('main-nav');
  var menu=document.getElementById('nav-menu');
  if(!toggle)return;

  function closeNav(){nav.classList.remove('nav-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu');}
  function openNav(){nav.classList.add('nav-open');toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','Close menu');}

  toggle.addEventListener('click',function(){if(nav.classList.contains('nav-open')){closeNav();}else{openNav();}});
  document.addEventListener('click',function(e){if(nav.classList.contains('nav-open')&&!nav.contains(e.target)){closeNav();}});

  nav.querySelectorAll('.nav-item>button.nav-link').forEach(function(btn){
    btn.addEventListener('click',function(){
      if(!nav.classList.contains('nav-open'))return;
      var dd=this.parentElement.querySelector('.dropdown');
      if(!dd)return;
      var showing=dd.style.display==='block';
      nav.querySelectorAll('.dropdown').forEach(function(d){d.style.display='';});
      if(!showing)dd.style.display='block';
      this.setAttribute('aria-expanded',!showing?'true':'false');
    });
  });

  if(menu){
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){if(nav.classList.contains('nav-open')){closeNav();}});
    });
  }
}

initReveal();
initCards();
initWhy();
initFaq();
initNav();
})();