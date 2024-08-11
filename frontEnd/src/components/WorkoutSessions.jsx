import React from 'react'

const WorkoutSession = () => {
  return (
    <div className="workout_session">
      <div className="wrapper">
        <h1>Top Workout Session</h1>
        <p>Join a group of like-minded individuals who share your passion for fitness. The camaraderie and support of your fellow bootcampers will motivate you to push harder and stay committed to your goals.</p>
           <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>featured bootcamp</h1>
        <p>"Joining the Ultimate Fitness Challenge was the best decision I made for my health."</p>
        <p>
          <div className="bootcamps">
            <div>
             <h4>
             Featured Bootcamp: Ultimate Fitness Challenge
             </h4>
             <p>High-Intensity Workouts: Experience a variety of workouts including HIIT (High-Intensity Interval Training), strength training, and endurance exercises that will keep you on your toes and challenge every muscle group.</p>  
            </div>
            <div>
             <h4>
             High-Intensity Workouts: Mix of HIIT, strength, and endurance exercises.
             </h4>
             <p>Expert Trainers: Our certified trainers are dedicated to helping you achieve your fitness goals. They'll guide you through each session, providing personalized advice and ensuring you maintain proper form to prevent injury..</p>  
            </div>
            <div>
             <h4>
             Expert Trainers: Get guidance from certified professionals.
             </h4>
             <p>Nutrition Guidance: Fitness isn't just about exercise; it's also about fueling your body with the right nutrients. Get access to meal plans and nutritional advice tailored to complement your workout regime..</p>  
            </div>
            <div>
             <h4>
             Nutrition Support: Tailored meal plans to fuel your fitness goals.
             </h4>
             <p>Goal Setting: Whether you're aiming to lose weight, build muscle, or improve your overall fitness, our bootcamp will help you set realistic goals and provide the tools you need to achieve them..</p>  
            </div>
          </div>
        </p>
      </div>
    </div>
  )
}

export default WorkoutSession