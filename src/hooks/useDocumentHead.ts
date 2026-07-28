import { useEffect } from 'react';

interface HeadMeta {
  title: string;
  description: string;
  canonicalUrl?: string;
}

export function useDocumentHead({ title, description, canonicalUrl }: HeadMeta) {
  useEffect(() => {
    document.title = title;
    
    // Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Canonical Link
    const targetCanonical = canonicalUrl || `${window.location.origin}${window.location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', targetCanonical);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', targetCanonical);
      document.head.appendChild(linkCanonical);
    }
  }, [title, description, canonicalUrl]);
}

