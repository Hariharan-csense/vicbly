'use client';

import { useEffect } from 'react';

export default function RemoveFdProcessedId() {
  useEffect(() => {
    // Remove all fdprocessedid attributes
    const removeFdProcessedId = () => {
      document.querySelectorAll('[fdprocessedid]').forEach(el => {
        el.removeAttribute('fdprocessedid');
      });
    };

    // Run on initial load
    removeFdProcessedId();

    // Set up a MutationObserver to catch dynamically added elements
    const observer = new MutationObserver((mutations) => {
      let shouldRemove = false;
      
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          shouldRemove = true;
        }
      });
      
      if (shouldRemove) {
        removeFdProcessedId();
      }
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return null;
}
