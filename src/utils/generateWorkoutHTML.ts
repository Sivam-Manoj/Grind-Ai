export function generateWorkoutHTML(workoutPlan: any): string {
  // Check for necessary fields in workoutPlan object
  if (
    !workoutPlan.workout_plan ||
    !workoutPlan.workout_plan.muscle_groups ||
    Object.keys(workoutPlan.workout_plan.muscle_groups).length === 0
  ) {
    console.error('⚠️ Invalid workout plan format:', workoutPlan);
    return '<h2>Error: Invalid Workout Plan Data</h2>';
  }

  const {
    workout_plan,
    meal_plan,
    caloric_deficit_strategy,
    budget_plan,
    summary,
  } = workoutPlan;

  // Generate Workout Plan Table for each muscle group
  let exercisesHTML = '';
  Object.keys(workout_plan.muscle_groups).forEach((muscleGroup: string) => {
    const exercises = workout_plan.muscle_groups[muscleGroup].exercises;
    exercisesHTML += `
      <h3>${
        muscleGroup.charAt(0).toUpperCase() + muscleGroup.slice(1)
      } Exercises</h3>
      <table>
        <tr>
          <th>Exercise</th>
          <th>Sets</th>
          <th>Reps</th>
          <th>Rest</th>
          <th>Benefits</th>
          <th>Execution</th>
        </tr>
        ${exercises
          .map(
            (exercise: any) => `
          <tr>
            <td>${exercise.name}</td>
            <td>${exercise.sets}</td>
            <td>${exercise.reps}</td>
            <td>${exercise.rest}</td>
            <td>${exercise.benefits}</td>
            <td>${exercise.execution}</td>
          </tr>
        `
          )
          .join('')}
      </table>
    `;
  });

  // Generate Meal Plan
  let mealPlanHTML = '';
  Object.keys(meal_plan).forEach((mealType: string) => {
    const meal = meal_plan[mealType];
    mealPlanHTML += `
      <h3>${mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h3>
      <table>
        <tr>
          <th>Category</th>
          <th>Examples</th>
        </tr>
        <tr>
          <td>${meal.category}</td>
          <td>${meal.examples.join(', ')}</td>
        </tr>
      </table>
    `;
  });

  // Generate Budget-Friendly Meal List
  let budgetMealsHTML = '';
  ['protein', 'carbs', 'fats'].forEach((category: string) => {
    if (budget_plan.affordable_meals[category]) {
      budgetMealsHTML += `
        <h3>${category.charAt(0).toUpperCase() + category.slice(1)} Options</h3>
        <table>
          <tr>
            <th>Meal</th>
            <th>Protein</th>
            <th>Carbs</th>
            <th>Fats</th>
            <th>Calories</th>
          </tr>
          ${budget_plan.affordable_meals[category]
            .map(
              (meal: any) => `
            <tr>
              <td>${meal.name}</td>
              <td>${meal.protein}</td>
              <td>${meal.carbs}</td>
              <td>${meal.fat}</td>
              <td>${meal.calories}</td>
            </tr>
          `
            )
            .join('')}
        </table>
      `;
    }
  });

  // Generate Caloric Deficit Strategy
  const caloricDeficitHTML = `
    <table>
      <tr>
        <th>Target Daily Calories</th>
        <th>${caloric_deficit_strategy.daily_target_calories} kcal</th>
      </tr>
      <tr>
        <th>Weight Projection(monthly)</th>
        <th>${caloric_deficit_strategy.weight_projection.monthly_expected_change}</th>
      </tr>
      <tr>
        <th>Fat Loss Prediction(weekly)</th>
        <th>${caloric_deficit_strategy.weight_projection.fat_loss_prediction}</th>
      </tr>
      <tr>
        <th>Recommended Macros</th>
        <th>Protein: ${caloric_deficit_strategy.recommended_macros.protein}, Carbs: ${caloric_deficit_strategy.recommended_macros.carbs}, Fats: ${caloric_deficit_strategy.recommended_macros.fats}</th>
      </tr>
    </table>
  `;

  return `
   <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f8f9fa;
            padding: 0;
            margin: 0;
            color: #333;
          }
          .container {
            background: white;
            padding: 25px;
            margin: 0 auto;
            border-radius: 12px;
            max-width: 800px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            page-break-after: always;
          }
          h1 {
            background: linear-gradient(45deg, #6a11cb, #2575fc);
            color: white;
            padding: 12px 25px;
            border-radius: 5px;
            font-size: 24px;
            margin: 0;
          }
          h2, h3 {
            color: #2c3e50;
            margin-top: 20px;
            font-weight: bold;
          }
          h2 {
            background-color: #3498db;
            color: white;
            padding: 10px;
            border-radius: 5px;
            font-size: 20px;
            margin-bottom: 20px;
          }
          .summary {
            background-color: #eaf2f8;
            padding: 15px;
            border-radius: 10px;
            font-style: italic;
            margin-bottom: 20px;
            font-size: 14px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background: #fff;
            border-radius: 8px;
            overflow: hidden;
          }
          th, td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: center;
          }
          th {
            background-color: #007bff;
            color: white;
            font-size: 14px;
          }
          tr:nth-child(even) {
            background-color: #f2f2f2;
          }
          tr:hover {
            background-color: #e1e1e1;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          ul li {
            background-color: #e3f2fd;
            padding: 8px;
            margin: 5px 0;
            border-radius: 5px;
            font-size: 14px;
          }
          .section-title {
            background-color: #e74c3c;
            color: white;
            padding: 10px;
            text-align: left;
            font-size: 18px;
            margin-top: 20px;
          }
          .budget-meals ul {
            padding-left: 20px;
            margin-top: 15px;
          }
          @page {
            size: A4;
            margin: 10mm;
          }
          .container {
            max-width: 800px;
          }
          h1 {
            text-align: left;
            font-size: 28px;
          }
          .section-title {
            text-align: left;
            padding-left: 10px;
            font-size: 18px;
          }
          h3 {
            font-size: 14px;
            margin-bottom: 10px;
          }
          .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            padding: 10px;
          }
          .footer span {
            font-size: 14px;
            color: #888;
          }
          .footer .flame-icon {
            font-size: 20px;
            color: #f39c12;
            margin-right: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1> Ai Fitness Plan</h1>

          <div class="summary">
            <strong>Summary:</strong> ${summary}
          </div>

          <h2 class="section-title">🏋️ Workout Plan - ${workout_plan.duration}</h2>
          ${exercisesHTML}

          <h2 class="section-title">🥗 Meal Plan</h2>
          ${mealPlanHTML}

          <h2 class="section-title">🔥 Caloric Deficit Strategy</h2>
          ${caloricDeficitHTML}

          <h2 class="section-title">💰 Budget-Friendly Meal Options</h2>
          <div class="budget-meals">
            ${budgetMealsHTML}
          </div>
        </div>

        <!-- Footer Section -->
        <div class="footer">
          <span><i class="flame-icon">🔥</i> Grid AI</span>
          <span>Developed by Manoj</span>
        </div>
      </body>
    </html>
  `;
}
