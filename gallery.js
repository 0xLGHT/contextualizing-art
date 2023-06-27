window.onload = function() {
    var artworks = [
        // add your artworks here as objects, with keys 'image', 'title', and 'description'
        {
            image: 'Images/feast.png',
            title: 'Feast of the Nouns, 2022',
            description: 'It\'s all going to look so obvious in hindsight.',
        },
        {
            image: 'Images/dead.png',
            title: 'The Dead Need No Crowns, 2022',
            description: 'The game of Life is only fun for the Dead.',
        },
        {
            image: 'Images/blue.png',
            title: 'Bludenza, 2022',
            description: 'It\'s a blue chip anon.',
        },
        {
            image: 'Images/wtf.png',
            title: 'What the fuck is going on, 2022',
            description: 'Can anyone tell me?',
        },
    ];

    var currentIndex = 0;

    function displayArtwork(index) {
        var artworkImageElement = document.getElementById('artwork');
        artworkImageElement.classList.add('fade-out');

        setTimeout(function() {
            artworkImageElement.src = artworks[index].image;
            artworkImageElement.classList.remove('fade-out');
            artworkImageElement.classList.add('fade-in');
        }, 1000);

        document.getElementById('artwork-title').innerText = artworks[index].title;

        var descriptionHtml = artworks[index].description.split('\n').map(function(line) {
            return '<p>' + line + '</p>';
        }).join('');

        document.getElementById('artwork-description').innerHTML = descriptionHtml;
    }

    displayArtwork(currentIndex);

    document.getElementById('prev-button').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : artworks.length - 1;
        displayArtwork(currentIndex);
    });

    document.getElementById('next-button').addEventListener('click', function() {
        currentIndex = (currentIndex < artworks.length - 1) ? currentIndex + 1 : 0;
        displayArtwork(currentIndex);
    });
}

