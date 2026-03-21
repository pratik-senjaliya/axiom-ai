"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;

            const totalScroll = documentHeight - windowHeight;
            const currentProgress = (scrollTop / totalScroll) * 100;

            setProgress(Math.min(Math.max(currentProgress, 0), 100));
        };

        window.addEventListener("scroll", updateProgress);
        updateProgress(); // Initial calculation

        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-neutral-200 z-50">
            <div
                className="h-full bg-gradient-to-r from-primary-600 to-secondary-500 transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
