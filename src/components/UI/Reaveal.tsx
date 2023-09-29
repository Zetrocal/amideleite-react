import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface TProps{
    children: any;
    duration?: number,
    delay?: number,
    type?: string
    ease?: Array<number>|null
}
const Reveal: React.FC<TProps> = ({ children, delay=0.15, duration=0.8, type='', ease=null }) => {
	return (
		<RevealApp>
			<motion.div
            variants={{
                hidden: { opacity: 0},
                visible: { opacity: 1}
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{duration, delay, type, ease }}
            >{children}</motion.div>
		</RevealApp>
	);
};

export default Reveal;

const RevealApp = styled.div`
	position: relative;
	overflow: hidden;
    height: 100%;
    width: 100%;

    >div{
        height: 100%;
        width: 100%;
    }
`;
