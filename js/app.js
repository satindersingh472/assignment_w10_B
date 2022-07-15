// here is the list for steps performed in order to cover the required tasks for assignment
// every step is covered in an order if the debuggers is started from top it will go each and every step showing differences
// changing elements style is done many times
// adding new content to a tag using innerHTML starts on line 62
// adding  a new nested tag using innerHTML starts on line 65
// adding a new tag before an existing tag using outerHTMl starts on line 69
// changing a tag completely using outerHTMl starts on 74




// this line will select the id header in a head section
let header_change = document.querySelector(`#header`);
// following lines will put the border around header id and padding of 20px inside the header box and a margin of 10px
header_change[`style`][`border`] = `2px solid red`;
header_change[`style`][`padding`] = `10px`;
header_change[`style`][`margin`] = `10px`;
// the following line will add some content to the id header
header_change[`innerHTML`] += `Now see the next block`;

// following line will select the main content by get element by id
let main_content_change = document.getElementById(`main_content`);
// following line will put the border around header id and padding of 20px inside the header box and a margin of 10px
main_content_change[`style`][`border`] = `2px solid blue`;
main_content_change[`style`][`padding`] = `10px`;
main_content_change[`style`][`margin`] = `10px`;

// below line will grab the author id 
let author_id = document.getElementById(`author`);
// below lines will change some styles of author id
author_id[`style`][`border`] = `2px solid green`;
author_id[`style`][`padding`] = `20px`;
author_id[`style`][`margin`] = `10px`;


// below line will grab the footer id
let footer_id = document.querySelector(`#footer`);
// below lines will change some style of footer id 
footer_id[`style`][`border`] = `2px solid black`;
footer_id[`style`][`padding`] = `20px`;
footer_id[`style`][`margin`] = `10px`;

// the below line will help selecting the class of heading in all sections i.e head main and footer
let heading_change = document.querySelectorAll(`.heading`);
let count = 0;
// the following while loop will help in changing heading class 
while(count < heading_change.length){
    // this will underline all the tags inside heading class
    heading_change[count][`style`][`textDecoration`] = `underline`;
    heading_change[count][`style`][`fontSize`] = `1.5rem`;
    count++;
}
// get elements by class name will target  class of highlight id 
let class_highlight_id = document.getElementsByClassName(`highlight_id`);
let count_id = 0;
for (count_id=0; count_id < class_highlight_id.length; count_id++){
    // all highlight class will have red color fonts
class_highlight_id[count_id][`style`][`color`] = `red`;
}

// this step will add content to the existing tag using innerHTML
author_id[`innerHTML`] = author_id[`innerHTML`] + ` and also has a github account `;

// this is step to add nested tag inside another tag using innerHTML
let github_link_id = document.getElementById(`github_link`);
github_link_id[`innerHTML`] = `<a href="https://github.com/satindersingh472">Click Here for </a>` + github_link_id[`innerHTML`];

// this is the step to add new tag before an existing tag using outerHTMl
let footer_heading_id = document.querySelector(`#footer_heading`);
footer_heading_id[`outerHTML`] = `<a href="https://facebook.com">Facebook</a>` + 
` <a href="https://youtube.com">Youtube</a>` + footer_heading_id[`outerHTML`];

// this step is for changing a tag completely using outerhtml
let info_id = document.getElementById(`information_about_author`);
info_id[`outerHTML`] = `<p>No information about the author is available</p>`;
