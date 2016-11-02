/**
 * Created by acer on 02-Nov-16.
 */
function htmlEscape(input) {
    console.log("<ul>");
    for (var i = 0; i < input.length; i++) {
        let str = '<li>';
        str+=escapeHtml(input[i]);
        str += '</li>';
        console.log(str);
        str="";
    }
    console.log("</ul>");

    function escapeHtml(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;');
    }
}