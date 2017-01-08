//Question  - Designer PDF Viewer
//Link - https://www.hackerrank.com/challenges/designer-pdf-viewer


//Soln
function main() {
    h = readLine().split(' ');
    h = h.map(Number);
    var word = readLine();
    var maxHeight = 0;
    var wordLength = word.length;
    for(var i=0; i<word.length;i++){
        var charIndex = word[i].codePointAt() - 97;
        var height = h[charIndex];
        if(height > maxHeight){
            maxHeight = height;
        }

    }
    console.log(maxHeight*word.length);
}
