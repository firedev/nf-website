// Modern Theme Switcher with Enhanced UX
class ThemeSwitcher {
  constructor() {
    this.currentTheme = this.getInitialTheme();
    this.init();
  }

  getInitialTheme() {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme;
    }
    
    // Fall back to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }

  init() {
    // Apply initial theme immediately to prevent FOUC
    this.applyTheme(this.currentTheme, false);
    
    // Create toggle button with enhanced styling
    this.createToggleButton();
    
    // Listen for system preference changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addListener((e) => {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
          const newTheme = e.matches ? 'dark' : 'light';
          this.currentTheme = newTheme;
          this.applyTheme(newTheme, true);
          this.updateButtonState();
        }
      });
    }
    
    // Handle visibility change to sync with system
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && !localStorage.getItem('theme')) {
        const systemTheme = this.getSystemTheme();
        if (systemTheme !== this.currentTheme) {
          this.currentTheme = systemTheme;
          this.applyTheme(systemTheme, true);
          this.updateButtonState();
        }
      }
    });
  }

  getSystemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  createToggleButton() {
    const mount = document.getElementById('theme-switcher');
    if (!mount) return;

    // Create modern toggle button
    const button = document.createElement('button');
    button.id = 'wha';
    button.setAttribute('aria-label', 'Toggle dark mode');
    button.setAttribute('title', 'Toggle dark mode');
    button.className = 'theme-toggle-btn';
    
    // Create icons
    const sunIcon = this.createIcon('sun');
    const moonIcon = this.createIcon('moon');
    
    button.appendChild(sunIcon);
    button.appendChild(moonIcon);
    
    // Add styles
    this.addToggleStyles();
    
    // Position button
    // position: fixed;
    // top: 20px;
    // right: 20px;
    // z-index: 1000;
    button.style.cssText = `
      border: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 50%;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    // Add click handler
    button.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggle();
    });
    
    // Add to page
    mount.appendChild(button);
    this.toggleButton = button;
    
    // Update initial state
    this.updateButtonState();
  }

  createIcon(type) {
    const icon = document.createElement('div');
    icon.className = `theme-icon theme-icon-${type}`;
    
    if (type === 'sun') {
      icon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      `;
    } else {
      icon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      `;
    }
    
    return icon;
  }

  addToggleStyles() {
    if (document.getElementById('theme-toggle-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'theme-toggle-styles';
    styles.textContent = `
      .theme-toggle-btn {
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: #1a1a1a;
      }
      
      .theme-toggle-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
      }
      
      .theme-toggle-btn:active {
        transform: scale(0.95);
      }
      
      .theme-icon {
        position: absolute;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .theme-icon-sun {
        opacity: 1;
        transform: rotate(0deg) scale(1);
      }
      
      .theme-icon-moon {
        opacity: 0;
        transform: rotate(90deg) scale(0.5);
      }
      
      /* Dark theme styles */
      :root.theme-dark .theme-toggle-btn {
        background: var(--dark-surface-1);
        color: #f5f5f5;
      }
      
      :root.theme-dark .theme-icon-sun {
        opacity: 0;
        transform: rotate(-90deg) scale(0.5);
      }
      
      :root.theme-dark .theme-icon-moon {
        opacity: 1;
        transform: rotate(0deg) scale(1);
      }
      
      /* Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .theme-toggle-btn,
        .theme-icon {
          transition: none !important;
        }
        
        .theme-toggle-btn:hover {
          transform: none !important;
        }
      }
      
      /* Mobile adjustments */
      @media (max-width: 768px) {
        .theme-toggle-btn {
          top: 16px;
          right: 16px;
          width: 44px;
          height: 44px;
        }
      }
    `;
    
    document.head.appendChild(styles);
  }

  applyTheme(theme, animate = true) {
    const root = document.documentElement;
    
    // Add transition class for smooth animation
    if (animate) {
      root.style.transition = 'color 0.3s ease, background-color 0.3s ease';
      setTimeout(() => {
        root.style.transition = '';
      }, 300);
    }
    
    // Apply theme class
    if (theme === 'dark') {
      root.classList.add('theme-dark');
    } else {
      root.classList.remove('theme-dark');
    }
    
    // Update meta theme-color for mobile browsers
    this.updateMetaThemeColor(theme);
    
    // Emit custom event for other components
    window.dispatchEvent(new CustomEvent('themechange', { 
      detail: { theme, previousTheme: this.currentTheme } 
    }));
  }

  updateMetaThemeColor(theme) {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      document.head.appendChild(metaThemeColor);
    }
    
    metaThemeColor.content = theme === 'dark' ? '#0f0f0f' : '#ffffff';
  }

  updateButtonState() {
    if (this.toggleButton) {
      const isDark = this.currentTheme === 'dark';
      this.toggleButton.setAttribute('aria-label', 
        isDark ? 'Switch to light mode' : 'Switch to dark mode'
      );
      this.toggleButton.setAttribute('title', 
        isDark ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }
  }

  toggle() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.currentTheme = newTheme;
    
    // Save preference
    localStorage.setItem('theme', newTheme);
    
    // Apply theme with animation
    this.applyTheme(newTheme, true);
    
    // Update button state
    this.updateButtonState();
    
    // Analytics (if available)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'theme_toggle', {
        'custom_parameter': newTheme
      });
    }
  }

  // Public method to get current theme
  getCurrentTheme() {
    return this.currentTheme;
  }

  // Public method to set theme programmatically
  setTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      this.currentTheme = theme;
      localStorage.setItem('theme', theme);
      this.applyTheme(theme, true);
      this.updateButtonState();
    }
  }
}

// Initialize theme switcher when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.themeSwitcher = new ThemeSwitcher();
  });
} else {
  window.themeSwitcher = new ThemeSwitcher();
}

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeSwitcher;
} 