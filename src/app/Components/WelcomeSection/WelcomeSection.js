"use client"

import { Box } from "@mui/material"
import { motion } from "framer-motion";


export default function WelcomeSection() {


    return (
    <Box>
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
            style={{ flex: 1, minWidth: { md: '300px' } }}
        >
            <div>
            <h1>Hi there! My name is Luis</h1>
            <p>A fullstack developer with a preference in backend development and cloud computing. </p>

            <button className="btn">Projects and more</button>
            </div>
        </motion.div>
    </Box>
    )
}