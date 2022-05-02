//Este archivo hay que colocarlo dentro de slider/components, nose xq se rompe cuando lo muevo y le cambio las importaciones
class Slider extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
		this.setStyleTag();
		this.setTemplates();
	}

	static get observedAttributes() {
		return ['current'];
	}

	connectedCallback() {
		this.setSlider();
	}

	attributeChangedCallback(_name, oldValue, newValue) {
		if (oldValue !== newValue) this.updateSlideStyles();
	}

	goToSlide(index) {
		const currentIndex = this.getCurrentIndex();
		this.setAttribute('current', index ?? 0);
		this.setAnimationDirectionProperty(currentIndex < index ? 1 : -1);
	}

	goToNextSlide() {
		let currentIndex = this.getCurrentIndex();
		let index;

		if (this.infinite) {
			index = (currentIndex + 1) % this.count;
		} else {
			index = currentIndex < this.count - 1 ? currentIndex + 1 : currentIndex;
		}

		this.goToSlide(index);
		this.setAnimationDirectionProperty(1);
	}

	/**
	 * Goes to the previous slide
	 */
	goToPreviousSlide() {
		let currentIndex = this.getCurrentIndex();
		let index;

		if (this.infinite) {
			index = currentIndex === 0 ? this.count - 1 : currentIndex - 1;
		} else {
			index = currentIndex > 0 ? currentIndex - 1 : currentIndex;
		}

		this.goToSlide(index);
		this.setAnimationDirectionProperty(-1);
	}

	get count() {
		return this.slides.length;
	}

	setSlider() {
		this.setMainContainer();
		this.setSlides();
		this.setNavigationButtonsActions();
		this.goToSlide();
	}

	setMainContainer() {
		const template = this.sliderTemplate.cloneNode(true);
		this.mainContainer = template.content.children[0];
		this.shadowRoot.append(this.mainContainer);
	}

	setSlides() {
		for (const slide of this.slides) {
			const template = this.slideTemplate.cloneNode(true);
			const slideElement = template.content.children[0];
			const h2 = slideElement.querySelector('#slide-title');
			const p = slideElement.querySelector('#slide-description');

			slideElement.style.backgroundImage = `url(${slide.background})`;
			h2.textContent = slide.title;
			p.textContent = slide.description;
			this.mainContainer.append(slideElement);
		}
	}

	setNavigationButtonsActions() {
		const prevButton = this.mainContainer.querySelector('.slider-prev-btn');
		const nextButton = this.mainContainer.querySelector('.slider-next-btn');

		prevButton.addEventListener('pointerdown', e => this.goToPreviousSlide(e));
		nextButton.addEventListener('pointerdown', e => this.goToNextSlide(e));
	}

	updateSlideStyles() {
		const currentIndex = this.getCurrentIndex();
		const slides = this.mainContainer.querySelectorAll('.slide');
		for (const [index, slide] of slides.entries()) {
			slide.classList[index === currentIndex ? 'add' : 'remove']('visible');
		}
	}

	setStyleTag() {
		const linkElem = document.createElement('link');
		linkElem.setAttribute('rel', 'stylesheet');
		linkElem.setAttribute('href', '/components/slider.css');
		this.shadowRoot.append(linkElem);
	}

	setTemplates() {
		const sliderTemplate = document.querySelector('#slider-template');
		const slideTemplate = document.querySelector('#slide-template');
		this.sliderTemplate = sliderTemplate;
		this.slideTemplate = slideTemplate;
		sliderTemplate.remove();
		slideTemplate.remove();
	}

	setAnimationDirectionProperty(direction) {
		this.mainContainer.style.setProperty('--animation-direction', direction);
	}

	getCurrentIndex() {
		return +this.getAttribute('current');
	}
}

// The component definition
customElements.define('app-slider', Slider);

export function setSlider(slides, infinite = false) {
	const slider = document.createElement('app-slider');
	slider.slides = slides;
	slider.infinite = infinite;
	return slider;
}
