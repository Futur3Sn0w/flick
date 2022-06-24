var icons = ["Calculator", "Calendar", "Camera", "ClipChamp", "Clock" , "Family Safety Monitor" , "Feedback Hub" , "File Explorer (Windows 11)" , "Get Help" , "Get Started" , "Journal" , "Live Captions" , "Magnify" , "Mail" , "Maps" , "Media Player" , "Messaging" , "Microsoft News" , "Microsoft Store (Light)" , "Microsoft Store (Dark)" , "Microsoft To Do", "Mixed Reality Portal" , "Movies & TV" , "Narrator" , "Notepad" , "Office" , "On-Screen Keyboard" , "OpenCL™ and OpenGL® Compatibility Pack" , "Paint" , "Paint 3D" , "People" , "Phone Link" , "Photos" , "Power Automate" , "Power BI Desktop" , "Print Queue Action Center" , "Quick Assist" , "Screen Sketch" , "Settings" , "Solitare Collection" , "Sticky Notes (Light)" , "Sticky Notes (Dark)" , "Surface" , "Teams" , "Terminal" , "Tips" , "Video Editor" , "Voice Access" , "Voice Recorder" , "Weather" , "Windows Security" , "Windows Subsystem for Linux (Preview)" , "WinFR" , "Xbox Game Bar"];
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