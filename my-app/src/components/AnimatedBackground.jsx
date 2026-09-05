import { useEffect } from 'react';
import {animate} from 'animejs'

function AnimatedBackground() {

    useEffect(() => {

        animate('.code-symbol', {
            translateX: () => Math.random() * 100 - 50,
            translateY: () => Math.random() * 100 - 50,
            opacity: [0.05, 0.15],
            duration: () => Math.random() * 3000 + 4000,
            delay: () => Math.random() * 2000,
            direction: 'alternate',
            loop: true,
            ease: 'inOutSine'
        });

    }, []);

    return (
        <div className="background-elements">

            <div className="code-symbol symbol-1">.</div>
            <div className="code-symbol symbol-2">.</div>
            <div className="code-symbol symbol-3">.</div>
            <div className="code-symbol symbol-4">.</div>
            <div className="code-symbol symbol-5">.</div>
            <div className="code-symbol symbol-6">.</div>
            
        </div>
    );

}

export default AnimatedBackground