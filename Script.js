window.onscroll = function() {
    const button = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function createFooter() {
    const footer = document.createElement('footer');
    footer.style.backgroundColor = '#71503a'; // Style the footer
    footer.style.color = 'white';
    footer.style.padding = '20px';
    footer.style.textAlign = 'center';
    footer.style.position = 'relative';
    footer.style.width = '100%';

    // Add the content to the footer
    footer.innerHTML = `
        <p>This website is a product of Zachary Castaneda \u00A9 2024</p>
    `;

    // Append the footer to the body
    document.body.appendChild(footer);
}

// Call the function to create and add the footer
createFooter();


const text = "\"Bringing Modernity to your Professional Workplace\"";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Delay of 100ms between letters
    }
}

typeWriter();