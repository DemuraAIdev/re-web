import React, { useState } from "react";
import { commentsTheme } from "@/config/comment"
const Giscus = ({ mapping }: { mapping: string }) => {
    const [enableLoadComments, setEnabledLoadComments] = useState(true);

    const COMMENTS_ID = "comments-container";


    function LoadComments() {
        setEnabledLoadComments(false);
        const script = document.createElement("script");
        script.src = "https://giscus.app/client.js";
        script.setAttribute("data-repo", process.env.NEXT_PUBLIC_GISCUS_REPO);
        script.setAttribute(
            "data-repo-id",
            process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID
        );
        script.setAttribute(
            "data-category",
            process.env.NEXT_PUBLIC_GISCUS_CATEGORY
        );
        script.setAttribute(
            "data-category-id",
            process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
        );
        script.setAttribute("data-mapping", mapping);
        script.setAttribute(
            "data-reactions-enabled",
            "1"
        );
        script.setAttribute(
            "data-emit-metadata",
            "0"
        );
        script.setAttribute("data-theme", commentsTheme);
        script.setAttribute("crossorigin", "anonymous");
        script.async = true;

        const comments = document.getElementById(COMMENTS_ID);
        if (comments) comments.appendChild(script);

        return () => {
            const comments = document.getElementById(COMMENTS_ID);
            if (comments) comments.innerHTML = "";
        };
    }
    return (
        <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
            {enableLoadComments && (
                <button onClick={LoadComments}>Load comment</button>
            )}
            <div className="giscus" id={COMMENTS_ID} />
        </div>
    );
}
export default Giscus;