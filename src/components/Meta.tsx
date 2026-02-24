import { useEffect } from "react";

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
}

export function Meta({ title, description, image, url }: SEOProps) {
    const siteTitle = "Sanjeet | Portfolio";
    const fullTitle = `${title} | ${siteTitle}`;
    const siteUrl = url || "https://mesanjeetk.vercel.app";
    const siteImage = image || "https://mesanjeetk.vercel.app/preview.png";

    useEffect(() => {
        // Update Document Title
        document.title = fullTitle;

        // Update Meta Description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", description);
        } else {
            const meta = document.createElement('meta');
            meta.name = "description";
            meta.content = description;
            document.head.appendChild(meta);
        }

        // Update OpenGraph tags
        const updateOrCreateMeta = (property: string, content: string) => {
            let element = document.querySelector(`meta[property="${property}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute("property", property);
                document.head.appendChild(element);
            }
            element.setAttribute("content", content);
        };

        updateOrCreateMeta("og:title", fullTitle);
        updateOrCreateMeta("og:description", description);
        updateOrCreateMeta("og:image", siteImage);
        updateOrCreateMeta("og:url", siteUrl);
        updateOrCreateMeta("og:type", "website");

        // Twitter Tags
        const updateOrCreateTwitter = (name: string, content: string) => {
            let element = document.querySelector(`meta[name="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute("name", name);
                document.head.appendChild(element);
            }
            element.setAttribute("content", content);
        };

        updateOrCreateTwitter("twitter:card", "summary_large_image");
        updateOrCreateTwitter("twitter:title", fullTitle);
        updateOrCreateTwitter("twitter:description", description);
        updateOrCreateTwitter("twitter:image", siteImage);

    }, [fullTitle, description, siteImage, siteUrl]);

    return null;
}
