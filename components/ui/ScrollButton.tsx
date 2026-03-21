"use client";

import React from "react";
import { Button, ButtonProps } from "./Button";

interface ScrollButtonProps extends ButtonProps {
    targetId: string;
}

export const ScrollButton: React.FC<ScrollButtonProps> = ({
    targetId,
    onClick,
    ...props
}) => {
    const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Prevent default anchor behavior
        e.preventDefault();

        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        // Call original onClick if provided
        if (onClick) {
            onClick(e);
        }
    };

    return <Button onClick={handleScroll} {...props} />;
};
