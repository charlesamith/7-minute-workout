class WorkoutApp {
  constructor() {
    this.workouts = {
      original: [
        {
          name: 'Jumping Jacks',
          description: 'Stand with feet together and arms at your sides. Jump up while simultaneously spreading your legs to shoulder-width apart and raising your arms overhead. Jump back to the starting position and repeat in a continuous, rhythmic motion.'
        },
        {
          name: 'Wall Sit',
          description: 'Stand with your back against a wall and feet shoulder-width apart, about 2 feet from the wall. Slowly slide down until your thighs are parallel to the floor, as if sitting in an invisible chair. Keep your back flat against the wall and hold this position while engaging your core.'
        },
        {
          name: 'Push-Ups',
          description: 'Start in a plank position with hands placed slightly wider than shoulder-width apart. Lower your body until your chest nearly touches the floor, keeping your body in a straight line from head to heels. Push back up to the starting position while maintaining proper form throughout the movement.'
        },
        {
          name: 'Abdominal Crunches',
          description: 'Lie on your back with knees bent and feet flat on the floor, hands behind your head or crossed over your chest. Lift your shoulders and upper back off the ground by contracting your abdominal muscles. Lower back down slowly, keeping tension in your abs throughout the movement.'
        },
        {
          name: 'Step-Ups onto a Chair',
          description: 'Stand in front of a sturdy chair or platform with feet hip-width apart. Step up with one foot, placing your entire foot on the chair, then bring the other foot up. Step back down with the same foot that went up first, then alternate which foot leads for the next repetition.'
        },
        {
          name: 'Squats',
          description: 'Stand with feet shoulder-width apart and toes slightly turned out. Lower your body by pushing your hips back and bending your knees as if sitting into a chair, keeping your chest up and knees tracking over your toes. Descend until your thighs are parallel to the floor, then drive through your heels to return to standing.'
        },
        {
          name: 'Triceps Dips on a Chair',
          description: 'Sit on the edge of a sturdy chair with hands gripping the seat beside your hips. Slide your body forward off the chair, supporting your weight with your arms. Lower your body by bending your elbows until they reach about 90 degrees, then push back up by straightening your arms.'
        },
        {
          name: 'Plank',
          description: 'Start in a push-up position, then lower onto your forearms with elbows directly under your shoulders. Keep your body in a straight line from head to heels, engaging your core, glutes, and leg muscles. Hold this position while breathing normally, avoiding sagging hips or raised buttocks.'
        },
        {
          name: 'High Knees (Running in Place)',
          description: 'Stand with feet hip-width apart and begin running in place. Drive your knees up toward your chest as high as possible with each step, aiming to bring your thighs parallel to the floor. Pump your arms naturally and maintain a quick tempo while staying light on your feet.'
        },
        {
          name: 'Lunges',
          description: 'Stand with feet hip-width apart, then take a large step forward with one leg. Lower your body until both knees are bent at 90-degree angles, with your front thigh parallel to the floor and back knee nearly touching the ground. Push through your front heel to return to the starting position, then alternate legs.'
        },
        {
          name: 'Push-Ups with Rotation',
          description: 'Perform a standard push-up, then as you push back up, rotate your body to one side while lifting the corresponding arm toward the ceiling. Your body should form a T-shape at the top of the movement. Return to the push-up position and repeat, alternating the direction of rotation with each repetition.'
        },
        {
          name: 'Side Plank',
          description: 'Lie on your side with legs extended and feet stacked on top of each other. Prop yourself up on your forearm with elbow directly under your shoulder. Lift your hips off the ground, creating a straight line from your head to your feet. Hold this position while engaging your core and keeping your body aligned.'
        }
      ],
      lowImpact1: [
        {
          name: 'Standing march with high knees and pumping arms',
          description: 'Stand tall with feet hip-width apart and begin marching in place. Lift your knees as high as comfortable, ideally bringing your thighs parallel to the floor. Pump your arms in opposition to your legs in a natural running motion, maintaining good posture throughout the movement.'
        },
        {
          name: 'Standing alternating knee drives with opposite elbow pulls',
          description: 'Stand with feet hip-width apart and arms extended overhead. Drive one knee up toward your chest while simultaneously pulling the opposite elbow down toward that knee. Focus on engaging your core as you bring elbow and knee together, then return to starting position and repeat on the other side.'
        },
        {
          name: 'Controlled air squats',
          description: 'Stand with feet shoulder-width apart and perform squats with deliberate, slow movements. Take 2-3 seconds to lower down into the squat position, pause briefly at the bottom, then take 2-3 seconds to rise back up. Focus on perfect form, proper knee tracking, and full range of motion rather than speed.'
        },
        {
          name: 'Standing alternating leg raises with arm circles',
          description: 'Stand on one leg while lifting the other leg out to the side as high as comfortable. While holding this position, make small circles with your arms, first forward then backward. Keep your core engaged for balance, then switch legs and repeat the movement pattern.'
        },
        {
          name: 'Standing bicycle crunches',
          description: 'Stand with feet hip-width apart and hands behind your head in a traditional crunch position. Bring one knee up toward your chest while rotating your torso to bring the opposite elbow toward that knee. Return to starting position and repeat on the other side, mimicking the motion of bicycle crunches while standing.'
        },
        {
          name: 'Controlled front kicks with arm punches',
          description: 'Stand with feet hip-width apart in a stable position. Kick one leg forward in a controlled manner, extending through the heel and keeping your core engaged for balance. As you kick, throw alternating punches with your arms, coordinating the upper and lower body movements while maintaining your balance.'
        },
        {
          name: 'Standing reverse lunges with arm raises',
          description: 'Start in a standing position, then step one foot back into a reverse lunge, lowering until both knees are bent at 90 degrees. As you lunge back, raise both arms overhead in a smooth motion. Push through your front heel to return to standing while lowering your arms, then alternate legs.'
        },
        {
          name: 'Standing torso twists with arm extensions',
          description: 'Stand with feet shoulder-width apart and arms extended straight out to your sides at shoulder height. Rotate your torso from side to side while keeping your hips facing forward and feet planted. Focus on the rotation coming from your core muscles while maintaining extended arms throughout the movement.'
        },
        {
          name: 'Squat pulses with arm circles',
          description: 'Lower into a squat position with thighs parallel to the floor and hold this position. Perform small pulsing movements up and down within the squat range while making continuous circles with your arms. Keep your core engaged and weight distributed evenly through your feet throughout the exercise.'
        },
        {
          name: 'Standing leg abductions with overhead reaches',
          description: 'Stand on one leg while lifting the other leg straight out to the side as high as comfortable. As you lift your leg, reach both arms overhead and slightly toward the lifted leg side. Focus on maintaining balance through your core while performing this multi-planar movement, then switch sides.'
        },
        {
          name: 'Speed skaters',
          description: 'Start in a slight squat position and leap laterally to one side, landing on the outside foot while bringing the inside leg behind the landing leg. Swing your arms across your body for momentum and balance, then immediately leap to the other side. Keep the movement fluid and continuous while staying low in your stance.'
        },
        {
          name: 'Standing mountain climbers',
          description: 'Stand upright with feet hip-width apart and begin alternately driving your knees up toward your chest in a rapid, running-like motion. Keep your core engaged and upper body stable while your legs work dynamically. Pump your arms naturally in opposition to your legs as if running in place with high knees.'
        }
      ],
      lowImpact2: [
        {
          name: 'Wall push-ups with speed',
          description: 'Stand arm\'s length away from a wall with feet hip-width apart. Place your palms flat against the wall at shoulder height and width. Perform push-ups against the wall with a faster tempo than normal, focusing on quick, controlled movements while maintaining proper form and full range of motion.'
        },
        {
          name: 'Standing march with high knees',
          description: 'Stand tall with good posture and begin marching in place, lifting your knees as high as comfortable toward your chest. Maintain a steady rhythm while pumping your arms naturally in opposition to your legs. Keep your core engaged and focus on landing softly with each step.'
        },
        {
          name: 'Wall slides',
          description: 'Stand with your back against a wall, feet about 2 feet away from the wall and shoulder-width apart. Slowly slide down the wall by bending your knees until your thighs are parallel to the floor, then slide back up. Keep your back flat against the wall throughout the movement and control both the descent and ascent.'
        },
        {
          name: 'Standing knee drives with wall support',
          description: 'Stand next to a wall and place one hand on it for balance and support. Drive your outside knee up toward your chest as high as comfortable, then lower it back down with control. Focus on engaging your core and hip flexors while using the wall to maintain stability throughout the movement.'
        },
        {
          name: 'Wall isometric chest press pulses',
          description: 'Stand facing a wall with your palms pressed flat against it at chest height, arms extended. Apply steady pressure against the wall as if trying to push it, then add small pulsing movements while maintaining this pressure. Keep your core engaged and body in a straight line while performing the isometric holds and pulses.'
        },
        {
          name: 'Air squats with wall touch',
          description: 'Stand with your back about 6 inches from a wall and perform squats, using the wall as a depth reference by lightly touching it with your glutes at the bottom of each squat. This helps ensure consistent depth and proper hip movement patterns while providing tactile feedback for form.'
        },
        {
          name: 'Standing reverse flies',
          description: 'Stand with feet hip-width apart and arms extended straight out in front of you at shoulder height. Squeeze your shoulder blades together as you pull your arms back and out to your sides, creating a wide arc motion. Focus on engaging the muscles between your shoulder blades while keeping your arms straight and controlled.'
        },
        {
          name: 'Wall calf raises with arm circles',
          description: 'Stand facing a wall with your hands lightly touching it for balance. Rise up onto your toes by lifting your heels as high as possible, hold briefly, then lower back down. While performing calf raises, make small circles with your arms, adding an upper body coordination element to the exercise.'
        },
        {
          name: 'Standing reverse lunges with wall support',
          description: 'Stand next to a wall with one hand lightly touching it for balance support. Step one foot back into a reverse lunge position, lowering until both knees are bent at 90 degrees. Use the wall for stability as needed while focusing on proper lunge form, then return to standing and alternate legs.'
        },
        {
          name: 'Wall angel slides',
          description: 'Stand with your back against a wall, arms at your sides touching the wall. Slowly slide your arms up the wall in a snow angel motion, keeping your back and arms in contact with the wall throughout the movement. Focus on the range of motion in your shoulders while maintaining wall contact.'
        },
        {
          name: 'Speed skaters with wall support',
          description: 'Stand next to a wall for balance support and perform lateral skating movements from side to side. Step laterally in one direction while bringing the opposite leg behind in a skating motion, using the wall for balance when needed. Keep the movement controlled while working on lateral stability and coordination.'
        },
        {
          name: 'Standing torso twists with arm extensions',
          description: 'Stand with feet shoulder-width apart and arms extended straight out to your sides at shoulder height. Rotate your torso from left to right while keeping your hips square and feet planted firmly on the ground. Focus on the rotation coming from your core muscles while maintaining extended arms and good posture throughout the movement.'
        }
      ]
    };

    this.difficulties = {
      beginner: { work: 30, rest: 30 },
      intermediate: { work: 40, rest: 20 },
      advanced: { work: 45, rest: 15 }
    };

    this.currentWorkout = [];
    this.currentSet = 1;
    this.totalSets = 3;
    this.currentExerciseIndex = 0;
    this.currentTime = 0;
    this.isWorking = true;
    this.isPaused = false;
    this.isRunning = false;
    this.soundEnabled = true;
    this.timer = null;
    this.difficulty = this.difficulties.beginner;
    this.audioContext = null;
    this.audioInitialized = false;

    this.initializeElements();
    this.attachEventListeners();
    this.showSetupScreen();
  }

  initializeElements() {
    // Screens
    this.setupScreen = document.getElementById('setupScreen');
    this.workoutScreen = document.getElementById('workoutScreen');
    this.completeScreen = document.getElementById('completeScreen');

    // Setup controls
    this.workoutTypeSelect = document.getElementById('workoutType');
    this.difficultySelect = document.getElementById('difficultyLevel');
    this.numberOfSetsSelect = document.getElementById('numberOfSets');
    this.startButton = document.getElementById('startWorkout');

    // Workout display
    this.timerDisplay = document.getElementById('timer');
    this.phaseIndicator = document.getElementById('phaseIndicator');
    this.currentExerciseDisplay = document.getElementById('currentExerciseName');
    this.exerciseDescriptionDisplay = document.getElementById('exerciseDescription');
    this.nextExerciseDisplay = document.getElementById('nextExercise');
    this.currentSetDisplay = document.getElementById('currentSet');
    this.totalSetsDisplay = document.getElementById('totalSets');
    this.currentExerciseNumberDisplay = document.getElementById('currentExercise');

    // Controls
    this.pauseButton = document.getElementById('pauseButton');
    this.skipButton = document.getElementById('skipButton');
    this.quitButton = document.getElementById('quitButton');
    this.soundToggle = document.getElementById('soundToggle');

    // Countdown
    this.countdownOverlay = document.getElementById('countdownOverlay');
    this.countdownNumber = document.getElementById('countdownNumber');

    // Complete screen
    this.restartButton = document.getElementById('restartButton');
    this.completedSetsDisplay = document.getElementById('completedSets');
    this.totalExercisesDisplay = document.getElementById('totalExercises');
  }

  attachEventListeners() {
    this.startButton.addEventListener('click', () => this.startWorkout());
    this.pauseButton.addEventListener('click', () => this.togglePause());
    this.skipButton.addEventListener('click', () => this.skipCurrent());
    this.quitButton.addEventListener('click', () => this.quitWorkout());
    this.soundToggle.addEventListener('click', () => this.toggleSound());
    this.restartButton.addEventListener('click', () => this.showSetupScreen());

    // Add touch event to initialize audio on iOS
    document.addEventListener('touchstart', () => this.initializeAudio(), { once: true });
    document.addEventListener('click', () => this.initializeAudio(), { once: true });
  }

  initializeAudio() {
    if (this.audioInitialized) return;
    
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // For iOS, we need to resume the context after user interaction
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }
      
      this.audioInitialized = true;
    } catch (error) {
      console.log('Audio context initialization failed:', error);
      this.soundEnabled = false;
      this.updateSoundIcon();
    }
  }

  async playSound(type) {
    if (!this.soundEnabled || !this.audioContext) return;

    try {
      // Ensure context is running (important for iOS)
      if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      const now = this.audioContext.currentTime;

      if (type === 'start') {
        // High-pitched beep for start
        oscillator.frequency.setValueAtTime(800, now);
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.3, now + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        oscillator.start(now);
        oscillator.stop(now + 0.3);
      } else if (type === 'rest') {
        // Lower-pitched beep for rest
        oscillator.frequency.setValueAtTime(400, now);
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.3, now + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        oscillator.start(now);
        oscillator.stop(now + 0.5);
      } else if (type === 'countdown') {
        // Short tick for countdown
        oscillator.frequency.setValueAtTime(600, now);
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.2, now + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        oscillator.start(now);
        oscillator.stop(now + 0.1);
      }
    } catch (error) {
      console.log('Sound playback failed:', error);
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    this.updateSoundIcon();
  }

  updateSoundIcon() {
    const soundIcon = this.soundToggle.querySelector('.sound-icon');
    soundIcon.textContent = this.soundEnabled ? '🔊' : '🔇';
  }

  showSetupScreen() {
    this.setupScreen.classList.add('active');
    this.workoutScreen.classList.remove('active');
    this.completeScreen.classList.remove('active');
    this.isRunning = false;
    if (this.timer) clearInterval(this.timer);
  }

  startWorkout() {
    // Initialize audio on workout start (iOS requirement)
    this.initializeAudio();
    
    const workoutType = this.workoutTypeSelect.value;
    const difficulty = this.difficultySelect.value;
    this.totalSets = parseInt(this.numberOfSetsSelect.value);

    this.currentWorkout = this.workouts[workoutType];
    this.difficulty = this.difficulties[difficulty];
    
    this.currentSet = 1;
    this.currentExerciseIndex = 0;
    this.isWorking = true;
    this.isPaused = false;

    this.setupScreen.classList.remove('active');
    this.workoutScreen.classList.add('active');

    this.updateDisplay();
    this.startTimer();
  }

  updateDisplay() {
    this.currentSetDisplay.textContent = `Set ${this.currentSet}`;
    this.totalSetsDisplay.textContent = this.totalSets;
    this.currentExerciseNumberDisplay.textContent = `Exercise ${this.currentExerciseIndex + 1}`;
    
    if (this.isWorking) {
      const currentExercise = this.currentWorkout[this.currentExerciseIndex];
      this.currentExerciseDisplay.textContent = currentExercise.name;
      this.exerciseDescriptionDisplay.textContent = currentExercise.description;
    } else {
      this.currentExerciseDisplay.textContent = 'Rest';
      this.exerciseDescriptionDisplay.textContent = 'Take a breather and prepare for the next exercise. Use this time to hydrate, catch your breath, and mentally prepare for the upcoming movement.';
    }

    this.phaseIndicator.textContent = this.isWorking ? 'WORK' : 'REST';
    this.phaseIndicator.className = this.isWorking ? '' : 'rest';

    // Show next exercise during work phase (last 5 seconds) or during rest
    if ((this.isWorking && this.currentTime <= 5) || !this.isWorking) {
      const nextIndex = this.currentExerciseIndex + 1;
      if (nextIndex < this.currentWorkout.length) {
        this.nextExerciseDisplay.textContent = `Next: ${this.currentWorkout[nextIndex].name}`;
        this.nextExerciseDisplay.classList.add('show');
      } else if (this.currentSet < this.totalSets) {
        this.nextExerciseDisplay.textContent = `Next: ${this.currentWorkout[0].name} (Set ${this.currentSet + 1})`;
        this.nextExerciseDisplay.classList.add('show');
      } else {
        this.nextExerciseDisplay.textContent = 'Final exercise!';
        this.nextExerciseDisplay.classList.add('show');
      }
    } else {
      this.nextExerciseDisplay.classList.remove('show');
    }

    this.updateTimer();
  }

  updateTimer() {
    const minutes = Math.floor(this.currentTime / 60);
    const seconds = this.currentTime % 60;
    this.timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  startTimer() {
    this.currentTime = this.isWorking ? this.difficulty.work : this.difficulty.rest;
    this.isRunning = true;
    
    // Play sound for phase start
    this.playSound(this.isWorking ? 'start' : 'rest');

    this.timer = setInterval(() => {
      if (!this.isPaused) {
        this.currentTime--;

        // Show countdown for last 3 seconds of a set
        if (this.isWorking && this.currentExerciseIndex === this.currentWorkout.length - 1 && 
            this.currentTime <= 3 && this.currentTime > 0) {
          this.showCountdown(this.currentTime);
        }

        this.updateTimer();
        
        // Update display for next exercise preview
        this.updateDisplay();

        if (this.currentTime <= 0) {
          this.nextPhase();
        }
      }
    }, 1000);
  }

  showCountdown(number) {
    this.countdownNumber.textContent = number;
    this.countdownOverlay.classList.add('active');
    this.playSound('countdown');
    
    setTimeout(() => {
      this.countdownOverlay.classList.remove('active');
    }, 800);
  }

  nextPhase() {
    clearInterval(this.timer);

    if (this.isWorking) {
      // Switch to rest
      this.isWorking = false;
      this.startTimer();
    } else {
      // Move to next exercise
      this.currentExerciseIndex++;
      
      if (this.currentExerciseIndex >= this.currentWorkout.length) {
        // Set complete
        this.currentSet++;
        this.currentExerciseIndex = 0;
        
        if (this.currentSet > this.totalSets) {
          // Workout complete
          this.completeWorkout();
          return;
        }
      }
      
      this.isWorking = true;
      this.startTimer();
    }

    this.updateDisplay();
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    this.pauseButton.textContent = this.isPaused ? 'Resume' : 'Pause';
  }

  skipCurrent() {
    if (this.isRunning) {
      clearInterval(this.timer);
      this.nextPhase();
    }
  }

  quitWorkout() {
    if (confirm('Are you sure you want to quit the workout?')) {
      this.showSetupScreen();
    }
  }

  completeWorkout() {
    this.isRunning = false;
    if (this.timer) clearInterval(this.timer);

    this.completedSetsDisplay.textContent = this.totalSets;
    this.totalExercisesDisplay.textContent = this.totalSets * 12;

    this.workoutScreen.classList.remove('active');
    this.completeScreen.classList.add('active');
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new WorkoutApp();
});