import { useEffect } from 'react';

interface HeadMeta {
  title: string;
  description: string;
}

export function useDocumentHead({ title, description }: HeadMeta) {
  useEffect(() => {
    // Salva i valori originali per un eventuale ripristino se necessario, 
    // o semplicemente imposta i nuovi valori.
    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
  }, [title, description]);
}
