const API_BASE_URL = 'https://api.frontendexpert.io/api/fe/testimonials';
const PAGE_SIZE = 5;

let canFetchTestimonials = true
let afterID = null;

canFetchTestimonials.addEventListener('scroll', handleScroll)

fetchAndappendTestimonials();

function handleScroll(){
    if(!canFetchTestimonials)
        true;
    const bottomSpaceLeftToScroll = this.scrollHeight - this.scrollTop - this.clientHeight;

    if(bottomSpaceLeftToScroll > 0)
        return;
    fetchAndappendTestimonials();
}

async function fetchAndappendTestimonials(){
    canFetchTestimonials = false;
    const url = createTestimonialUrl();
    const response = await fetch(url);
    const {testimonails, hasNext} = await response.json();


    const fragment = document.createDocumentFragment();
    testimonails.forEach(({message}) => {
        fragment.appendChild(createTestimonialElement(message))
    });
    testimonialcontainer.appendChild(fragment);

    if(hasNext){
        afterId = testimonials[testimonials.length - 1].id;
    }
    else{
        testimonailContainer.removeEventListener('scroll', handleScroll);
    }

    canFetchTestimonials = true;
}

function createTestimonialElement(message){
    const testimonialElement = document.createElement('p');
    testimonialElement.classList.add('testimonial')
    testimonialElement.textcontent = message;
    return testimonialElement;
}

function createTestimonialsUrl(){
    const url = new URL(API_BASE_URL);
    url.searchParams.set('limit', PAGE_SIZE)

    if(afterID != null){
        url.searchParams.set('after', afterID)
    }
    return url;
}