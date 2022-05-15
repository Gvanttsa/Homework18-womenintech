let data = [
    {
        id: 1,
        imgUrl: 'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=',
        title: 'Slide Title 1',
        url: 'https://google.com'
    },

    {
        id: 2,
        imgUrl: 'https://www.ilmubahasainggris.com/wp-content/uploads/2017/03/NGC.jpg',
        title: 'Slide Title 2',
        url: 'https://google.com'
    },

    {
        id: 3,
        imgUrl: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
        title: 'Slide Title 3',
        url: 'https://google.com'
    },

    {
        id: 4,
        imgUrl: 'https://www.w3schools.com/css/img_5terre.jpg',
        title: 'Slide Title 4',
        url: 'https://google.com'
    },
]


let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let sliderContent = document.getElementById('slider-content');
let dotList = document.getElementsByClassName('dot');

let sliderIndex = 0;

function creatingATag (item) {
    let aTag = document.createElement('a');
    aTag.setAttribute('href', item.url);
    aTag.classList.add('slide');

    return aTag;
}

function createImgTag (item) {
    let tagImg = document.createElement('img');
    tagImg.setAttribute('src', item.imgUrl);
    tagImg.setAttribute('alt', item.title);
    tagImg.classList.add('image-slider');
    
    return tagImg;
}

// function createImgDiv (item) {
//     let imgDiv = document.createElement('div');
//     imgDiv.classList.add('img-slider');
//     imgDiv.append(item.imgUrl);

//     return imgDiv;
// }

function createH2Tag (item) {
    let tagTitle = document.createElement('h2');
    tagTitle.classList.add('slider-title');
    tagTitle.append(item.title);

    return tagTitle;
}

function createDots (item) {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach( (element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id - 1);

        dot.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex=id;
            setSlide();
        }

        dots.appendChild(dot);
    })

    return dots;
}

function setSlide() {
    sliderContent.innerHTML =' ';
    let slideItem = creatingATag(data[sliderIndex]);
    let tagImg = createImgTag(data[sliderIndex]);
    let h2Tag = createH2Tag(data[sliderIndex]);
    let dots = createDots();

    slideItem.appendChild(tagImg);
    slideItem.appendChild(h2Tag);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    console.log(slideItem);
    currenDotActive();

}

function currenDotActive () {
    dotList[sliderIndex].classList.add('active');
}

function arrowLeftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }
    sliderIndex--;
    setSlide();
}
function arrowRightClick() {
    if (sliderIndex >= data.length-1) {
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex++;
    setSlide();
}
arrowLeft.addEventListener('click', arrowLeftClick);
arrowRight.addEventListener('click', arrowRightClick);

setInterval ( () => {
    arrowRightClick();
}, 3000);
setSlide();