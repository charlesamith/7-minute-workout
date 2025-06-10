# 7-Minute Workout App

A fully functional, open-source 7-minute workout application that can be run locally or deployed to any web server.

## Features

- **3 Workout Types**: Original*, Low Impact 1, and Low Impact 2
- **3 Difficulty Levels**: Beginner, Intermediate, and Advanced
- **Customizable Sets**: Choose 1-10 sets (default: 3)
- **Audio Cues**: Distinct sounds for work/rest phases with toggle option
- **Voice Announcements**: Natural female voice guidance with exercise names, countdowns, and phase transitions
- **Smart Countdown**: 3-second audio countdown (beeps + voice) when 3 seconds remain in each phase
- **Exercise Descriptions**: Clear instructions for proper form
- **Progress Tracking**: Visual indicators for current set and exercise
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Independent Audio Controls**: Separate toggles for sound effects and voice announcements

\* The "Original" [7-Minute Workout](https://journals.lww.com/acsm-healthfitness/Fulltext/2013/05000/HIGH_INTENSITY_CIRCUIT_TRAINING_USING_BODY_WEIGHT_.5.aspx), detailed in the May/June 2013 issue of the American College of Sports Medicine's Health & Fitness Journal, features 12 high-intensity exercises performed for 30 seconds each, interspersed with 10-second rest periods.

## Audio Features

### Voice Announcements
- **Exercise Names**: Announces each exercise name at the start
- **Phase Transitions**: "Start" for work phases, "Rest time" for rest periods
- **Completion**: Motivational completion message
- **Natural Speech**: Uses the best available US English female voice on your device

### Sound Effects
- **Work Phase**: High-pitched tone to signal exercise start
- **Rest Phase**: Lower-pitched tone for rest periods
- **Countdown**: Audio beeps during the final 3 seconds of each phase

### Audio Controls
- **🔊/🔇**: Toggle sound effects (beeps and tones)
- **🗣️/🤐**: Toggle voice announcements independently
- **Smart Detection**: Automatically finds the most natural-sounding female voice available

## Running the App

### Option 1: Try It Out

[Try the 7-Minute Workout App on GitHub](https://charlesamith.github.io/7-minute-workout/)

### Option 2: Local File (No Server Required)

Simply open `index.html` in your web browser:

1. **Windows**: Double-click `index.html` or right-click → "Open with" → your browser
2. **Mac**: Double-click `index.html` or drag it to your browser
3. **Linux**: Double-click `index.html` or use `xdg-open index.html`

**Note**: Audio features may be limited when running as a local file due to browser security restrictions.

### Option 3: Deploy to Web Server

Upload all files to your web server. The app is completely static and requires no server-side processing.

**Files to upload:**
- `index.html`
- `styles.css`
- `script.js`

## Workout Details

### Original Workout
12 exercises including jumping jacks, wall sits, push-ups, crunches, squats, planks, and more.

### Low Impact 1
12 standing exercises perfect for beginners or those with joint concerns.

### Low Impact 2
12 wall-supported exercises for maximum accessibility and safety.

### Difficulty Levels
- **Beginner**: 30s work / 30s rest
- **Intermediate**: 40s work / 20s rest  
- **Advanced**: 45s work / 15s rest

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

**Voice Features**: Requires browsers with Web Speech API support. Most modern browsers include natural-sounding voices, with the best quality typically found on:
- **Windows**: Microsoft Zira/Eva voices
- **macOS/iOS**: Samantha, Victoria, Allison voices  
- **Android**: Google Text-to-Speech voices

## License

GNU General Public License (GPL) - This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation.