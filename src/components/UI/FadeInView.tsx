import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface TProps{
    children: any;
    duration?: number,
    delay?: number,
    type?: string
    ease?: Array<number>|null|string
    x?: number,
    y?: number
}
const FadeInView: React.FC<TProps> = ({ children, delay=0, duration=0.6, type='', ease="easeInOut", x=0, y=-30 }) => {
	return (
		<RevealInViewApp>
			<motion.div
            variants={{
                hidden: { opacity: 0, x, y},
                visible: { opacity: 1, x:0, y:0}
            }}
            initial="hidden"
            whileInView="visible"
            transition={{duration, delay, type, ease}}
            viewport={{ once: true }}
            >{children}</motion.div>
		</RevealInViewApp>
	);
};

export default FadeInView;

const RevealInViewApp = styled.div`
	position: relative;
	overflow: hidden;
    height: 100%;
    width: 100%;

    >div{
        height: 100%;
        width: 100%;
    }
`;
