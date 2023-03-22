const slider = document.querySelector('#slider');
const  btnNext = document.querySelector('#btnNext');
const  btnPrev = document.querySelector('#btnPrev');
//берем только дочерние элементы и преврашяем их в массив
const sliderItems = Array.from(slider.children);

sliderItems.forEach(function (slide, index){

// скрываем все сладйды кроме первого
 if(index !== 0){
    slide.classList.add('hidden');
 }

// Добовляем индексы
 slide.dataset.index = index;

// Добовляем data атребут activ для первого слайда
sliderItems[0].setAttribute('data-active','');

// Клик по слайдам
slide.addEventListener('click', function(){

// скрываем текущий слайд
slide.classList.add('hidden');
slide.removeAttribute('data-active');

// Находим след слайд
let nextSlideIndex;
if(index + 1 === sliderItems.length){
    nextSlideIndex = 0;
}else{
    nextSlideIndex = index + 1;
}

// находим след слайд
const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

nextSlide.classList.remove('hidden');
nextSlide.setAttribute('data-active','');
 })
});

btnNext.onclick = function(){
    // Скрываем текущий слайд
    const currensSlide = slider.querySelector('[data-active]');
    const currenSlideIndex = +currensSlide.dataset.index;
    currensSlide.classList.add('hidden');
    currensSlide.removeAttribute('data-active');
    
    // Показываем след слайд
    let nextSlideIndex = currenSlideIndex + 1 === sliderItems.length ? 0 : currenSlideIndex +1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove("hidden");
    nextSlide.setAttribute('data-active',"");
    };

btnPrev.onclick = function(){
        // Скрываем текущий слайд
        const currensSlide = slider.querySelector('[data-active]');
        const currenSlideIndex = +currensSlide.dataset.index;
        currensSlide.classList.add('hidden');
        currensSlide.removeAttribute('data-active');
        
        // Показываем след слайд
        let nextSlideIndex = currenSlideIndex  === 0 ? sliderItems.length - 1 : currenSlideIndex -1;
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
        nextSlide.classList.remove("hidden");
        nextSlide.setAttribute('data-active',"");
        };
    
