'use client';

import { useEffect } from 'react';

export default function Web3FormsScript() {
  useEffect(() => {
    // Add Web3Forms script
    const script = document.createElement('script');
    script.src = 'https://web3forms.com/client/script.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Add hCaptcha script if needed
    const hCaptchaScript = document.createElement('script');
    hCaptchaScript.src = 'https://web3forms.com/client/hCaptcha.js';
    hCaptchaScript.async = true;
    hCaptchaScript.defer = true;
    document.body.appendChild(hCaptchaScript);

    // Add form submission handler
    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      const originalButtonText = submitButton.innerHTML;
      
      try {
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';
        
        // Get form data
        const formData = new FormData(form);
        
        // Submit to Web3Forms
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
        });
        
        const result = await response.json();
        
        if (result.success) {
          // Show success message
          const successMessage = document.createElement('div');
          successMessage.className = 'mt-4 p-4 bg-green-100 text-green-800 rounded-md';
          successMessage.textContent = 'Thank you! Your message has been sent successfully.';
          form.parentNode?.insertBefore(successMessage, form.nextSibling);
          
          // Reset form
          form.reset();
          
          // Remove success message after 5 seconds
          setTimeout(() => {
            successMessage.remove();
          }, 5000);
        } else {
          throw new Error(result.message || 'Failed to send message');
        }
      } catch (error) {
        // Show error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'mt-4 p-4 bg-red-100 text-red-800 rounded-md';
        errorMessage.textContent = 'Failed to send message. Please try again later.';
        form.parentNode?.insertBefore(errorMessage, form.nextSibling);
        
        // Remove error message after 5 seconds
        setTimeout(() => {
          errorMessage.remove();
        }, 5000);
      } finally {
        // Reset button state
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    };

    // Add event listeners to all forms with data-web3forms
    const forms = document.querySelectorAll('form[action*="web3forms.com"]');
    forms.forEach(form => {
      form.addEventListener('submit', handleSubmit);
    });

    // Cleanup
    return () => {
      forms.forEach(form => {
        form.removeEventListener('submit', handleSubmit);
      });
      document.body.removeChild(script);
      document.body.removeChild(hCaptchaScript);
    };
  }, []);

  return null;
}
