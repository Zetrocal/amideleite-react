import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface TProps{
    children: any;
    duration?: number,
    delay?: number,
    type?: string
    ease?: Array<number>|null|string
}
const RevealInView: React.FC<TProps> = ({ children, delay=0.15, duration=0.8, type='', ease=null }) => {
	return (
		<RevealInViewApp>
			<motion.div
            variants={{
                hidden: { opacity: 0},
                visible: { opacity: 1}
            }}
            initial="hidden"
            whileInView="visible"
            transition={{duration, delay, type, ease }}
            viewport={{ once: true }}
            >{children}</motion.div>
		</RevealInViewApp>
	);
};

export default RevealInView;

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
