(function () {
    'use strict';

    function initArticleImageLightbox() {
        var content = document.querySelector('.content-body');

        if (!content) {
            return;
        }

        var images = content.querySelectorAll('img:not(.avatar):not(.captcha-image)');
        Array.prototype.forEach.call(images, function (image) {
            if (image.closest('a, form') || !image.src || image.src.indexOf('data:') === 0) {
                return;
            }

            var link = document.createElement('a');
            var fullImageUrl = image.currentSrc || image.src;
            var description = image.getAttribute('alt') || image.getAttribute('title') || 'Zobrazit obrázek';

            link.href = fullImageUrl;
            link.setAttribute('rel', 'lightbox[article-images]');
            link.setAttribute('aria-label', description + ' – otevřít obrázek');
            link.className = 'auto-lightbox-link';
            image.parentNode.insertBefore(link, image);
            link.appendChild(image);
        });
    }

    function initThemeToggle() {
        initArticleImageLightbox();

        var root = document.documentElement;
        var storageKey = 'dtiskari-color-theme';
        var button = document.querySelector('.theme-toggle');

        if (!button) { return; }

        function setTheme(theme) {
            var isDark = theme === 'dark';
            root.setAttribute('data-theme', isDark ? 'dark' : 'light');
            button.setAttribute('aria-pressed', String(isDark));
            button.querySelector('.theme-toggle-icon').textContent = isDark ? '☀' : '☾';
            button.querySelector('.theme-toggle-label').textContent = isDark ? 'Světlý režim' : 'Tmavý režim';
        }

        var savedTheme = null;
        try {
            savedTheme = window.localStorage.getItem(storageKey);
        } catch (error) {
            // Continue with the system preference when browser storage is unavailable.
        }

        var initialTheme = savedTheme === 'dark' || savedTheme === 'light'
            ? savedTheme
            : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(initialTheme);

        button.addEventListener('click', function () {
            var nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            setTheme(nextTheme);
            try {
                window.localStorage.setItem(storageKey, nextTheme);
            } catch (error) {
                // The control still works for the current page without browser storage.
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeToggle);
    } else {
        initThemeToggle();
    }
}());
