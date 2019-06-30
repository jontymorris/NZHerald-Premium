// ==UserScript==
// @name     NZHerald Premium
// @version  1
// @grant    none
// @include *nzherald.co.nz*
// ==/UserScript==

/*
* Duplicate article content into a new contianer.
* This makes all the content visible without triggering the hooks
*/
function duplicateContent() {
    let content = document.getElementById('article-content');
    let newContent = document.createElement('Div');

    let children = content.children;
    for (let i=0; i<children.length; i++) {
        // copy each element into a paragraph tag
        let newElement = document.createElement('p');
        newElement.innerHTML = children[i].innerHTML;
        newContent.append(newElement);
    }

    content.parentNode.insertBefore(newContent, content);
}

/*
* Add some styling to clean the site up
*/
function addStyling() {
    let styling = `
        figcaption, .full-screen-img {
            width: 100%;
        }

        .inline-img, #article-content, .article-offer {
            display: none;
        }
    `;

    let element = document.createElement('style');
    element.innerHTML = styling;
    document.body.appendChild(element);
}

// Init
window.onload = function() {
    addStyling();
    duplicateContent();
}