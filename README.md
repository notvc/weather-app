# Weather App

A modern, responsive weather application with a sleek glassmorphism design that provides real-time weather information for any location. Features live search suggestions, geolocation support, and elegant day/night themed weather icons.

## Features

- 🔍 **Live City Search** - Type to search cities with real-time suggestions (debounced for performance)
- 📍 **Geolocation** - Get weather for your current location with one click using Geolocation API
- 🌡️ **Weather Details** - View temperature (°C), humidity (%), wind speed (km/h), and weather conditions
- 🎨 **Glassmorphism Design** - Beautiful frosted glass UI with semi-transparent backgrounds and blur effects
- 🌙 **Dark Mode Toggle** - Double-click on desktop or double-tap on mobile to toggle between light and dark themes
- 💾 **Theme Persistence** - Your theme preference is saved to localStorage
- 📱 **Fully Responsive** - Mobile-first design with breakpoints for tablets and desktops
- 🎭 **Day/Night Icons** - Weather icons adapt based on time of day (6 AM - 7 PM = day, otherwise = night)
- 🌐 **Comprehensive Weather Codes** - 23+ weather conditions with custom SVG icons (clear, cloudy, rainy, snowy, foggy, thunderstorms, etc.)

## Technology Stack

- **HTML5** - Semantic markup with accessibility attributes
- **CSS3** - Advanced styling with CSS variables, Grid, Flexbox, backdrop filters, gradients, and smooth transitions
- **JavaScript (ES6+)** - Event handling, async/await, API integration, localStorage
- **APIs Used**:
  - **Open-Meteo API** - Free weather forecasting API (no API key required)
  - **BigDataCloud Reverse Geocoding** - Convert coordinates to city names
  - **Geocoding API (Open-Meteo)** - Convert city names to coordinates with search suggestions
  - **Geolocation API** - Browser API for user's current location
- **Font Awesome 6.5.1** - Icon library for UI elements
- **Custom Fonts** - Adobe web font family for elegant typography

## File Structure

```
weather_app/
├── index.html           # Main HTML file
├── script.js            # JavaScript logic and API calls
├── style.css            # Stylesheet with responsive design
├── README.md            # This file
├── animated-icons/      # SVG icons for weather conditions
└── fonts/               # Custom font files
    └── abode-webfont/   # Adobe font family
```

## Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No additional setup or dependencies required (all resources are loaded from CDN)

## Usage

### Search by City Name
1. Type the city name in the search input field
2. A dropdown will appear with up to 5 matching cities (search is debounced for better performance)
3. Click on a suggested city or complete typing and press Enter/click search button
4. Weather information for that city will be displayed instantly

### Use Current Location
1. Click the "Use location" button in the navbar
2. Allow the browser to access your device's location
3. Weather for your current location will be fetched and displayed automatically
4. Button shows status: "Locating..." → "Location Found" → "Use Current Location" (after 5 seconds)

### Toggle Dark Mode
- **Desktop**: Double-click anywhere on the page (avoid clicking input fields or buttons)
- **Mobile**: Double-tap anywhere on the page
- Your preference is automatically saved and will persist on next visit

## Weather Information Displayed

- **City Name** - The city and country of the searched location
- **Temperature** - Current temperature in Celsius
- **Humidity** - Current humidity percentage
- **Wind Speed** - Current wind speed in km/h
- **Weather Code** - Human-readable weather description (e.g., "Clear Sky", "Light Rain", "Thunderstorm")

## Features Details

### Live Search with Suggestions
- Debounced search triggers after 100ms of inactivity
- Requires minimum 2 characters to search
- Shows up to 5 matching cities with country information
- Click any suggestion to instantly fetch weather
- Suggestions auto-close when clicking outside

### Glassmorphism Design
- Semi-transparent backgrounds with `rgba(255, 255, 255, 0.1)`
- CSS `backdrop-filter: blur(12px)` for frosted glass effect
- Smooth transitions on all interactive elements (0.3s - 0.6s)
- Gradient backgrounds that change based on theme
- Responsive shadows and border styling

### Dark Mode System
- Two complete color themes:
  - **Light Theme**: Bright green (#00ffb3) and teal accents
  - **Dark Theme**: Deep burgundy (#84182D) and muted purple accents
- CSS variables for easy theme switching
- localStorage persistence across sessions
- Desktop (double-click) and mobile (double-tap) support
- Smooth transitions when switching themes

### Responsive Design
- **Mobile** (<480px): Single column layout, stacked weather info
- **Tablet** (480px-768px): Adjusted spacing and layout
- **Desktop** (>768px): Two-column grid layout with icon and info side-by-side
- Touch-friendly button sizes and spacing
- Readable font sizes across all devices

### Day/Night Icon System
- Weather icons change based on time of day:
  - 6 AM - 7 PM: Day icons
  - 7 PM - 6 AM: Night icons
- WMO Weather Code mapping:
  - 0: Clear Sky
  - 1-2: Mostly/Partly Cloudy
  - 3: Overcast
  - 45-48: Fog/Icy Fog
  - 51-55: Drizzle (light to heavy)
  - 61-65: Rain (light to heavy)
  - 71-75: Snow (light to heavy)
  - 80-82: Showers (light to heavy)
  - 95-99: Thunderstorms (with/without hail)

## Browser Compatibility

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari 13+, Chrome Mobile)

**Requirements:**
- JavaScript enabled
- localStorage API support
- Geolocation API support (optional, for location feature)

## APIs & Data Sources

### Open-Meteo Weather API
- **Endpoint**: `https://api.open-meteo.com/v1/forecast`
- **Free, no API key required**
- Returns: Current temperature, weather code, wind speed, humidity
- Supports: Celsius/Fahrenheit, various weather models

### Open-Meteo Geocoding API
- **Endpoint**: `https://geocoding-api.open-meteo.com/v1/search`
- **Free, no API key required**
- Returns: City coordinates, country information, administrative divisions
- Powers: City search with suggestions

### BigDataCloud Reverse Geocoding
- **Endpoint**: `https://api.bigdatacloud.net/data/reverse-geocode-client`
- **Free tier available**
- Converts: Latitude/Longitude → City name
- Used for: Displaying city name from geolocation coordinates

### Browser Geolocation API
- **Uses device's GPS/IP location**
- **Requires user permission**
- Returns: User's latitude and longitude

## Customization

### Colors
Edit the CSS variables in `:root` section of `style.css`:
```css
:root {
    --primarycolor1: #00ffb3;    /* Bright teal */
    --primarycolor2: #074027;    /* Dark green */
    --secondarycolor1: #00FF62;  /* Lime green */
    --textcolor: #DAF1DE;        /* Light text */
}

[data-theme="dark"] {
    --primarycolor1: #84182D;    /* Burgundy */
    --primarycolor2: #181A2F;    /* Dark blue-gray */
    --textcolor: #FDA481;        /* Warm orange text */
}
```

### Fonts
- Replace Adobe fonts in `fonts/abode-webfont/` with your own
- Update `@font-face` declarations in `style.css`
- Update `--font-logo` CSS variable

### Weather Icon Set
- Replace SVG files in `animated-icons/` directory
- Keep naming convention: `condition-day.svg` / `condition-night.svg`
- Update icon paths in `getWeatherDescription()` function in `script.js`

## Future Improvements

- [ ] 5-day weather forecast
- [ ] Hourly weather breakdown
- [ ] Multiple saved favorite locations
- [ ] Weather alerts and warnings
- [ ] Air quality index (AQI)
- [ ] UV index information
- [ ] Sunrise/Sunset times
- [ ] Atmospheric pressure display
- [ ] Visibility information
- [ ] Precipitation probability
- [ ] Offline mode with service workers and caching
- [ ] Weather history/trends
- [ ] Units conversion (Celsius ↔ Fahrenheit, m/s ↔ km/h)
- [ ] Location sharing feature
- [ ] Weather comparison between cities

## Performance Optimizations

- **Debounced search**: 100ms delay prevents excessive API calls while typing
- **CSS variables**: Enables instant theme switching without DOM manipulation
- **Backdrop filters**: Hardware-accelerated blur effects
- **Minimal dependencies**: No external libraries, pure vanilla JavaScript and CSS
- **Efficient event handling**: Event delegation and proper cleanup
- **localStorage caching**: Instant theme restoration on page load

## Error Handling

- City not found alerts
- API error messages in console
- Graceful fallback for geolocation denials
- Network error handling with user feedback
- Invalid input validation

## Known Limitations

- Weather data requires internet connection
- Geolocation feature requires browser permission and may not work in all regions
- BigDataCloud free tier may have rate limits
- Some weather conditions may not have dedicated icons
- Reverse geocoding may not be 100% accurate in all regions

## Project Structure

```
weather_app/
├── index.html              # Main HTML file with semantic markup
├── script.js               # JavaScript logic (240+ lines)
│   ├── Theme management (localStorage, toggle)
│   ├── Geolocation handling
│   ├── City search with suggestions
│   ├── Weather data fetching
│   └── Weather code mapping (23+ conditions)
├── style.css               # Stylesheet (280+ lines)
│   ├── CSS variables for theming
│   ├── Glassmorphism effects
│   ├── Responsive breakpoints
│   └── Transitions and animations
├── README.md               # This documentation
├── animated-icons/         # SVG weather icons
│   ├── day/ night variants for multiple conditions
│   └── 15+ weather condition icons
└── fonts/abode-webfont/    # Custom font files
    ├── Abode-Light.woff
    └── abode.woff
```

## Getting Started Quickly

1. **Clone/Download**: Get the project files
2. **Open in Browser**: Double-click `index.html` or serve via HTTP server
3. **Search Cities**: Type in the search box and click suggestions
4. **Toggle Theme**: Double-click (desktop) or double-tap (mobile)
5. **Use Location**: Click "Use location" button to get your local weather

## Tips & Tricks

- Search suggestions appear automatically after typing 2+ characters
- Press **Escape** → click outside to close suggestions
- **Double-tap/double-click** on the weather card or navbar to toggle dark mode
- Hover over navbar title to see the underline animation
- Try searching for cities with different spelling variations
- Weather updates instantly when clicking suggestions

## Accessibility

- Semantic HTML5 markup
- ARIA attributes for screen readers
- Keyboard navigation support
- Color contrast compliant
- Touch-friendly button sizes (minimum 44px)

## License

This project is open source and available under the MIT License.

## Credits

- **Weather Data**: Open-Meteo (free weather forecasting)
- **Geocoding**: Open-Meteo Geocoding & BigDataCloud
- **Icons**: Font Awesome 6.5.1
- **Custom Font**: Adobe Web Font Family
- **Browser APIs**: Geolocation, localStorage, Fetch API

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "City not found" | Try alternative spelling or use coordinates via search suggestions |
| Geolocation not working | Check browser permissions and ensure HTTPS (if deployed) |
| Icons not displaying | Verify `animated-icons/` folder exists with correct SVG files |
| Dark mode not saving | Check if localStorage is enabled in browser settings |
| Slow suggestions | Network latency - try using VPN or check internet connection |
| Weather not updating | Ensure active internet connection and API is not rate-limited |

## Contributing

Contributions are welcome! Feel free to:
- Report bugs and issues
- Suggest new features
- Improve documentation
- Submit pull requests with enhancements

## Roadmap

**v1.0** (Current)
- ✅ City search with suggestions
- ✅ Geolocation support
- ✅ Dark/Light theme toggle
- ✅ Responsive design
- ✅ Weather code mapping

**v1.1** (Planned)
- [ ] 5-day forecast
- [ ] Additional weather metrics
- [ ] Saved favorites

**v2.0** (Future)
- [ ] Progressive Web App (PWA)
- [ ] Offline support
- [ ] Weather history

## Version History

**v1.0** - May 2026
- Initial release
- Core weather app functionality
- Dark mode with theme persistence
- Live search with suggestions
- Geolocation support
- Day/night weather icons
- Fully responsive design

## Support & Contact

For issues, suggestions, or feedback:
- Open an issue in the repository
- Check existing issues for solutions
- Review the troubleshooting section

---

**Version:** 1.0.0  
**Last Updated:** May 1, 2026  
**Status:** ✅ Stable & Production Ready  
**Platform:** Web (Browser-based)  
**License:** MIT
