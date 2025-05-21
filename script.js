document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        // Display the file name
        document.getElementById('fileName').textContent = `Selected file: ${file.name}`;
        
        // Check if the file is an image for preview
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const preview = document.getElementById('imagePreview');
                preview.src = e.target.result;
                preview.style.display = 'block';
            };

            reader.readAsDataURL(file);
        } else {
            // Hide the image preview if it's not an image file
            document.getElementById('imagePreview').style.display = 'none';
        }
    }
});

function handleSubmit() {
    // Your existing code for displaying the result blocks
    const price = "50rs";
    const benefits = "Rich in vitamins and antioxidants.<br>Contain anti cancer compounds<br>May support bone health";
    const weather = "Sunny, 25°C";

    document.getElementById('priceBlock').innerHTML = `<h2>Price</h2><p>${price}</p>`;
    document.getElementById('benefitsBlock').innerHTML = `<h2>Benefits</h2><p>${benefits}</p>`;
    document.getElementById('weatherBlock').innerHTML = `<h2>Weather</h2><p>${weather}</p>`;

    document.getElementById('resultSection').style.display = 'block';
    document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth' });
}



