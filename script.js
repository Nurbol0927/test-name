document.addEventListener('DOMContentLoaded', function() {
    loadQuotes();
    loadGallery();
});

function loadQuotes() {
    const quotesContainer = document.getElementById('quotes');
    const quotes = [
        {
            quote: "Не важно, насколько ты силен. Всегда найдется кто-то сильнее.",
            author: "Кэнпачи Зараки"
        },
        {
            quote: "Если тебе не нравится свой мир, его нужно изменить.",
            author: "Ичиго Курасаки"
        },
        {
            quote: "Лучше богато умереть, чем жить бедным жизнью.",
            author: "Орихиме Инуэ"
        },
        {
            quote: "Сильные люди, считают себя счастливыми, потому что могут защищать слабых.",
            author: "Киске Урахара"
        },
        {
            quote: "Жизнь состоит из времени, проведенного между вдохом и выдохом.",
            author: "Уличи Шиба"
        },
        {
            quote: "Не стоит обижаться на тех, кто пытается тебя убить. Это их работа.",
            author: "Ренджи Абараи"
        }
    ];

    quotes.forEach(quote => {
        const quoteElement = document.createElement('div');
        quoteElement.classList.add('quote');
        quoteElement.innerHTML = `
            <p class="quote-text">${quote.quote}</p>
            <p class="quote-author">— ${quote.author}</p>
        `;
        quotesContainer.appendChild(quoteElement);
    });
}

function loadGallery() {
    const galleryContainer = document.querySelector('.image-gallery');
    const images = [
        'images/ichigo.jpg',
        'images/rangiku.jpg',
        'images/byakuya.jpg',
        'images/rukia.jpg',
        'images/kisuke.jpg',
        'images/toshiro.jpg'
    ];

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = 'Персонаж из Блич';
        galleryContainer.appendChild(imgElement);
    });
}
