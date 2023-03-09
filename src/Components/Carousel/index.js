import React, { Component } from 'react'
import Slider from 'react-slick'
import { CarouselData } from './Carousel_data'
import Slide from './Slide'
//Swipe
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

class PreSlide extends Component {
  render() {
    const { index, data, ...props } = this.props
    return (
      <div {...props} className="md:h-[50vw]">
        <Slide
          key={index}
          imagem={data['image']}
          author={data['text']['author']}
          data={data['text']['data']}
          title={data['text']['title']}
          heading={data['text']['heading']}
        />
      </div>
    )
  }
}

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    const settings = {
      autoplay: true,
      adaptiveHeight: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div className="w-full">
          <ul className="flex justify-around" style={{ margin: '0px' }}>
            {' '}
            <div>{dots}</div>{' '}
            <div className="relative w-1/3 pl-10">
              <button
                className="absolute h-10 w-10 right-[35%] text-gray-400 lg:hover:text-[#2B2D42] lg:hover:scale-125 transition-all duration-500 "
                onClick={this.previous}
              >
                <BsArrowLeft className="h-full w-full" />
              </button>

              <button
                className="absolute left-[70%] h-10 w-10 text-gray-400 lg:hover:text-[#2B2D42] lg:hover:scale-125 transition-all duration-500"
                onClick={this.next}
              >
                <BsArrowRight className="h-full w-full" />
              </button>
            </div>
          </ul>
        </div>
      )
    }

    return (
      <>
        <Slider
          ref={c => (this.slider = c)}
          {...settings}
        >
          {CarouselData.map((data, index) => {
            return <PreSlide data={data} index={index} />
          })}
        </Slider>
      </>
    )
  }
}
