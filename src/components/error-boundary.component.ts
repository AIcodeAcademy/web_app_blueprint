const html = String.raw;

type ErrorBoundaryOptions = {
  message?: string;
  retry?: () => void;
};

export function renderErrorBoundary(
  error: unknown,
  options: ErrorBoundaryOptions = {},
): HTMLElement {
  const container = document.createElement('div');
  container.className = 'error-boundary';
  container.setAttribute('role', 'alert');
  container.setAttribute('aria-label', 'Investment calculation error');
  container.setAttribute('aria-live', 'assertive');

  const defaultMessage = 'An unexpected error occurred';
  const errorMessage = error instanceof Error ? error.message : defaultMessage;
  const displayMessage = options.message || errorMessage;

  const content = html`
    <div class="error-content">
      <p class="error-message" role="alert">${displayMessage}</p>
      ${options.retry
        ? html`<button type="button" class="retry-button" aria-label="Try calculation again">
            Try Again
          </button>`
        : ''}
    </div>
  `;

  container.innerHTML = content;

  if (options.retry) {
    const retryButton = container.querySelector('.retry-button');
    retryButton?.addEventListener('click', options.retry);
  }

  return container;
}
