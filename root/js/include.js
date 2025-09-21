/**
 * Dynamically load HTML parts into the page
 * 
 * @param {string} id - The ID of the element to load content into
 * @param {string} file - The path to the HTML file to load
 */

async function loadPart(id, file) {
    try {
        const res = await fetch(file); // fetch the file
        if (!res.ok) { // when res is not OK
            throw new Error(`Failed to load ${file}: ${res.status}`); // throw an error
        }
        const html = await res.text(); // get the text content
        // insert the HTML into the element with the ID from the param
        document.getElementById(id).innerHTML = html;
    } catch (err) {
        console.error(err); // log any errors to the console
    }
}
