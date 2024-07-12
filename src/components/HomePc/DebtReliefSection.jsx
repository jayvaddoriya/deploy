import React from "react";
import styles from './HomePc.module.css';
import Image from "next/image";
import classNames from "classnames";
import Slide from "../Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const DebtReliefSection = (props) => {
    const { data } = props
    const { spanText31, spanText32, frame371Props, frame372Props, frame373Props,
    frame374Props, frame511Props, frame512Props} = data;

    return (
        <div className={styles.frame981}>
            <div className={styles.sliderWrapper}>
                <div className={styles.contentContainer}>
                    <Image className={styles.vector} src="/static/img/vector-4@2x.svg" alt="Orange linear sandals." width={180} height={142} />
                    <div className={styles.textsContainer}>
                        <h2 className={styles.gettingBackOnTrac}>
                            <span>{spanText32}</span>
                        </h2>
                        <h3 className={styles.helpingThousandsOf}>
                            <span className={styles.span19}>{spanText31}</span>
                        </h3>
                    </div>
                </div>
                <div className={classNames('w-[1500px]', styles.slider)}>
                    <Swiper
                        slidesPerView={3.5}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        modules={[FreeMode, Pagination, Autoplay]}
                        className="mySwiper"
                        loop={true}
                    >
                        <SwiperSlide>
                            <Slide
                                spanText={frame371Props.spanText}
                                frame38Props={frame371Props.frame38Props}
                                frame39Props={frame371Props.frame39Props}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                spanText={frame372Props.spanText}
                                frame38Props={frame372Props.frame38Props}
                                frame39Props={frame372Props.frame39Props}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                spanText={"Truly Grateful…"}
                                frame38Props={{ children: "Over the past 2 years I’ve had the pleasure of working with Dino… Truly grateful and would highly recommend." }}
                                frame39Props={{ spanText: "- Frank E." }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                spanText={frame373Props.spanText}
                                frame38Props={frame373Props.frame38Props}
                                frame39Props={frame373Props.frame39Props}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                spanText={frame374Props.spanText}
                                frame38Props={frame374Props.frame38Props}
                                frame39Props={frame374Props.frame39Props}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                spanText={frame511Props.spanText}
                                frame38Props={frame511Props.frame38Props}
                                frame39Props={frame511Props.frame39Props}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                spanText={frame512Props.spanText}
                                frame38Props={frame512Props.frame38Props}
                                frame39Props={frame512Props.frame39Props}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                spanText={"Glad I found them..."}
                                frame38Props={{ children: "They are ethical, honest, reliable, dependable and actually caring... They have made a profound difference in my life." }}
                                frame39Props={{ spanText: "- Myles Paulson" }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                spanText={"Best financial decision..."}
                                frame38Props={{ children: "Using them is one of the best financial decisions I made in a long time. Really helpful company and always there to answer my questions and concerns." }}
                                frame39Props={{ spanText: "- Hector Garcia" }}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className={styles.rectangle30}></div>
        </div>
    )
}
export default DebtReliefSection