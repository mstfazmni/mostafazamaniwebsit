    var slideIndex = 0;

    // Function to show the next image in the slideshow
    function showNextSlide() {
        var slides = document.getElementsByClassName("img-slides");

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        slides[slideIndex].style.display = "block";

        setTimeout(showNextSlide, 3000); 
    }

// ---------------------

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); 
        sendMessage(); 
        this.reset(); // Reset the form after submission
    });

    function sendMessage() {
        alert('Message sent successfully!');
    }
});

// ---------------------

//writing my name again and again
   var myNameElement = document.getElementById("myName");
    var nameToWrite = "Mostafa Zamani";
    var index = 0;

    function writeName() {
        if (index < nameToWrite.length) {
            myNameElement.innerHTML += nameToWrite.charAt(index);
            index++;
            setTimeout(writeName, 300);
        } else {
            // reset
            index = 0;
            myNameElement.innerHTML = "";
            setTimeout(writeName, 1000); 
        }
    }

    writeName();




    