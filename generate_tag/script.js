// //Bases
// let generateDiv = function(c, b) {
//   let div = document.createElement('div');
//   if (c) {
//     div.classList.add(c);
//   } 
//   if (b) {
//     div.classList.add(b);
//   } 
//   return div
// }

// let generateContainer = function() {
//   return generateDiv('container');
// }

// let generateP = function(c, b) {
//   let p = document.createElement('p');
//   if (c) {
//     p.classList.add(c);
//   } 
//   if (b) {
//     p.classList.add(b);
//   }
//   return p
// }

// let generateLi = function() {
//   return document.createElement('li');
// }

// let generateA = function() {
//   return document.createElement('a');
// }

// let generateSpan = function() {
//   return document.createElement('span');
// }

// let generateLiWithA = function() {
//   let aSiteNav = generateA();
//   let liWithA = generateLi(); //x3
//   liWithA.appendChild(aSiteNav); 
//   return liWithA;
// }

// let generateSiteSectionCell = function() {
//   let siteSectionCell = generateDiv('grid-cell')
//   siteSectionCell.appendChild(generateH3()).appendChild(generateSpan());//x3
//   siteSectionCell.appendChild(generateP());
//   return siteSectionCell;
// }

// let generateUl = function(c, b) {
//   let ul = document.createElement('ul');
//   if (c) {
//     ul.classList.add(c);
//   } 
//   if (b) {
//     ul.classList.add(b);
//   }
//   return ul
// }

// let generateSiteSection = function(c) {
//   let SiteSection = document.createElement('div');
//   SiteSection.classList.add('site-section');
//   if (c) {
//     SiteSection.classList.add(c);
//   } 
//   return SiteSection;
// }

// let generateH2 = function() {
//   return document.createElement('h2');
// }

// let generateH3 = function() {
//   return document.createElement('h3');
// }

// // Header 

// let generateHeader = function() {

//     let siteHeader = generateDiv('site-header', 'clearfix');

//       let siteLogo = generateDiv('site-logo');

//         let spanStar = generateSpan();
//         spanStar.classList.add('star');

//       let siteNav = generateUl('site-nav', 'inline-blick-list');

//     let sitePromo = generateDiv('site-promo');

//       let h1 = document.createElement('h1');

//       let pSitePromo = generateP('description');

//       let ctaOption = generateDiv('cta-option');

//         let aCta1 = generateA();
//         aCta1.classList.add('btn', 'btn-download');

//         let aCta2 = generateA();
//         aCta2.classList.add('last-update');

//   //Tout imbriquer

//   //site-header
//   let imbricationSiteHeader = siteHeader;
//   imbricationSiteHeader.appendChild(siteLogo).appendChild(spanStar);
//   imbricationSiteHeader.appendChild(siteNav);
//   for(let i = 0; i < 3; i++) {
//     siteNav.appendChild(generateLiWithA());
//   }

//   //site-promo
//   let imbricationPromo = sitePromo;
  
//   imbricationPromo.appendChild(h1);
//   imbricationPromo.appendChild(pSitePromo);
//   imbricationPromo.appendChild(ctaOption).appendChild(aCta1);
//   imbricationPromo.appendChild(ctaOption).appendChild(aCta2);

//   //Les deux dans container
//   let content = generateContainer();
//   content.appendChild(imbricationSiteHeader);
//   content.appendChild(imbricationPromo);
//   return content;
// }


// //Section 1
// let generateSection1 = function() { 

//       let siteSectionH2 = generateH2();

//       let siteSectionGrid = generateDiv('grid');
   
//   //Tout imbriquer

//   //
//   let imbricationSiteSection1 = generateSiteSection();
//   let siteSectionContainer = generateContainer();

//   imbricationSiteSection1;
//   imbricationSiteSection1.appendChild(siteSectionContainer).appendChild(siteSectionH2);
//   siteSectionContainer.appendChild(siteSectionGrid);

//   for(let i = 0; i < 4; i++) {
//     siteSectionContainer.querySelector('.grid').appendChild(generateSiteSectionCell());
//   }
//   return imbricationSiteSection1;
// }

// //Section 2
// let generateSection2 = function() { 

//   let siteSection2 = generateSiteSection('site-section-video');
//   siteSection2.appendChild(generateH2());

//   siteSection2.appendChild(generateDiv('content')).appendChild(generateP('new'));
//   siteSection2.querySelector('.content').appendChild(generateUl('new'));
//   for(let i = 0; i < 8; i++) {
//     siteSection2.querySelector('.content ul').appendChild(generateLi());
//   }
  
//   return siteSection2;
// }



// //Section 3
// let generateSection3 = function() { 
//   let siteSection3 = generateSiteSection();
//   siteSection3.appendChild(generateH2());
//   siteSection3.appendChild(generateP('in-the-wild'));

//   for(let i = 0; i < 9; i++) {
//     siteSection3.querySelector('.in-the-wild').appendChild(generateA());
//   }

//   siteSection3.appendChild(generateDiv('cta-option')).appendChild(generateA());
//   siteSection3.querySelector('.cta-option a').classList.add('btn', 'btn-download')
//   return siteSection3;
// }



// //aside
// let generateAside = function() { 
//   let aside = generateDiv('aside')
//   aside.appendChild(generateContainer()).appendChild(generateUl('inline-block-list'));

//   let ul = aside.querySelector('.container ul.inline-block-list')
//   for(let i = 0; i < 3; i++) {
//     ul.appendChild(generateLi()).appendChild(generateA());
//   }
//   console.log(ul);
//   return aside;
// }
// //add li a 


// // Footer
// let generateFooter = function() { 
//   let footer = document.createElement('footer');
//   footer.classList.add('twitter-wjs'); 

//   for(let i = 0; i < 3; i++) {
//     footer.appendChild(generateP());
//   }

//   let footerPs = footer.querySelectorAll('p');

//   for(let i = 0; i < 2; i++) {
//     footerPs[0].appendChild(document.createElement('iframe'));
//   }

//   for(let i = 0; i < 3; i++) {
//     footerPs[1].appendChild(generateA());
//   }

//   for(let i = 0; i < 6; i++) {
//     footerPs[2].appendChild(generateA());
//   }
//   return footer;
// }

// //cibler le body
// //mettre le header, section1/2/3, aside et footer dans body 

// document.body.insertBefore(
//   generateHeader(),
//   document.querySelector('script')
// );

// document.body.insertBefore(
//   generateSection1(),
//   document.querySelector('script')
// );

// document.body.insertBefore(
//   generateSection2(),
//   document.querySelector('script')
// );

// document.body.insertBefore(
//   generateSection3(),
//   document.querySelector('script')
// );

// document.body.insertBefore(
//   generateAside(),
//   document.querySelector('script')
// );

// document.body.insertBefore(
//   generateFooter(),
//   document.querySelector('script')
// );


// //Generer du contenu 
// let tags = document.querySelectorAll('h1, h2, h3, p, a, ul.new li, div.site-logo, .cta-option a');
// let tags_2 = document.querySelectorAll('div.site-logo, .site-nav a, .inline-block-list li a');

// for(let i = 0; i < tags.length; i++) {
//   tags[i].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
// }

// for(let i = 0; i < tags_2.length; i++) {
//   tags_2[i].innerHTML = "Lorem";
// } 


// let ul = document.createElement('ul');
// let listeHTML = ['a', 'b', 'c','d','e','f'];
// for(let liHTML of listeHTML){
//   let li = document.createElement('li');
//   li.innerHTML = liHTML;
//   ul.appendChild(li);
// }
// document.body.appendChild(ul)

// function createNode(tag, elementParent, contenuHTML, id, nomClass){
//   let elem = document.createElement(tag);
//   if(typeof id !== 'undefined'){
//     elem.setAttribute('id',id);
//   }
//   if(typeof nomClass !== 'undefined'){
//     elem.className = nomClass;
//   }
//   if(typeof contenuHTML !== 'undefined'){
//     elem.innerHTML = contenuHTML;
//   }
//   document.querySelector(elementParent).appendChild(elem);
// }
// createNode('ul','body','','monID','maClass');
// let listeHTML = ['a', 'b', 'c','d','e','f'];
// for(let liHTML of listeHTML){
//   createNode('li','#monID',liHTML);
// }






let createNode = function (tag, parentElement, contentHtml, arrayAttr) {
  let element = document.createElement(tag);

  // if tag == textNode ! 
  // faire un textNode
  // sinon faire le reste 

  if (typeof contentHtml !== undefined) {
    element.innerHTML = contentHtml;
  }

  if (typeof arrayAttr !== undefined) {
    for(let i = 0; i < arrayAttr.length; i++) {
      element.setAttribute(arrayAttr[i][0], arrayAttr[i][1]);
    }
  }
 
  document.querySelector(parentElement).appendChild(element);
}

createNode('div', 'body', '', [['class', 'container']]);
createNode('div', 'div.container', '', [['class', 'site-header clearfix']]);
createNode('div', 'div.site-header', 'HTML5 Boilerplate', [['class', 'site-logo']]);

createNode('ul', 'div.site-header', '', [['class', 'site-nav inline-blick-list']]);
createNode('li', 'ul.site-nav', '', '');
createNode('li', 'ul.site-nav', '', '');
createNode('li', 'ul.site-nav', '', '');

createNode('div', 'div.container', '', [['class', 'site-promo']]);
createNode('h1', 'div.site-promo', 'The web’s most popular front-end template', '');
createNode('p', 'div.site-promo', 'HTML5 Boilerplate helps you build', [['class', 'description']]);
createNode('div', 'div.site-promo', '', [['class', 'cta-option']]);

let hrefA = ['https://github.com/h5bp/html5-boilerplate', 'https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/TOC.md', 'https://h5bp.org'];
let contentA = ['Source code', 'Docs', 'Other projects'];

for (let i = 0; i < hrefA.length; i++) {
  createNode('a', `ul.site-nav li:nth-child(${i + 1})`, contentA[i], [['href', hrefA[i]]]);
}

createNode('a', 'div.cta-option', '', [['class', 'btn btn-download'], ['href', 'https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip']]);
createNode('a', 'div.cta-option', '', [['class', 'btn btn-download'], ['href', 'https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip']]);

// element.closest('selecteur') => aller chercher le premier parent qui correspond au selecteur 
