import {useEffect, useRef} from 'react';
import {animate, splitText, stagger} from 'animejs';

function About() {

    const textRef = useRef(null);
    const splitRef = useRef(null); //reference to active split instance

    useEffect(() => {
        //ensure elements exists
        if(!textRef.current) return;

        // init text splitter on the DOM
        // IntersectionObserver watches when the element enters/leaves the viewport
        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                // Trigger animation only when the text scrolls into view

                if (entry.isIntersecting) {
                    // Clean up any old split states before rebuilding it
                    if (splitRef.current) {
                        splitRef.current.revert();
                    }

                    // 1. Initialize split text layout
                    splitRef.current = splitText(textRef.current, { lines: true });

                    // 2. Play the staggered word-by-word animation
                    splitRef.current.addEffect(({ words }) => {
                        animate(words, {
                            opacity: [0, 1],
                            translateY: ['20px', '0px'],
                            duration: 500,
                            ease: 'out(3)',
                            delay: stagger(45) // Slightly faster stagger for a snappy feel
                        });
                    });
                }
            });
        }, 
        
        {
            threshold: 0.15 // Triggers when at least 15% of the paragraph is visible
        });

        // Begin monitoring the paragraph element
        observer.observe(textRef.current);

        // Component unmount cleanup function
        return () => {
            observer.disconnect();
            if (splitRef.current) splitRef.current.revert();
        };
    }, []);

    return(
        <div className = "about-container" id = "about">
            <div className = "about-heading">

            <h2>/ About me</h2>
            <div className = "about-heading-line"></div>
            </div>

            <p className = "about-text" ref={textRef}>
                Hello, my name is Zed Saranillo and I'm currently a San Jose State University student studying Software Engineering.
                I have mostly made projects in games and web development, but I am always trying to improve my skills
                and learn new technologies to become a better developer!
            </p>
        </div>
    );
}

export default About