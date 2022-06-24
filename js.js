var icons = ["Calculator", "Calendar", "Camera", "ClipChamp", "Clock" , "Family Safety Monitor" , "Feedback Hub" , "File Explorer (Windows 11)" , "Get Help" , "Get Started" , "Journal" , "Live Captions" , "Magnify" , "Mail" , "Maps" , "Media Player" , "Messaging" , "Microsoft News" , "Microsoft Store (Light)" , "Microsoft Store (Dark)" , "Microsoft To Do"];
var indxAmt = icons.length;
var temp;
var previewBox = document.getElementById('lrgPrev');

typeof globalThis;

var gridBox = document.getElementById('grid'),
    iconBox = document.getElementById('icon'),
    clone;

    icons.forEach(function (iconInd, index) {
    clone = iconBox.cloneNode();
    clone.setAttribute('style', 'background-image: url("Icons/' + iconInd + '.png")');
    clone.setAttribute('data-iconName', iconInd);
    gridBox.appendChild(clone);

    clone.onclick = function () {
        previewBox.setAttribute('style', 'background-image: url("Icons/' + iconInd + '.png")');
        previewBox.setAttribute('data-iconName', clone.getAttribute('data-iconName'));
    };

});