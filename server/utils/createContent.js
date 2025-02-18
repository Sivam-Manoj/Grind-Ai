"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContent = void 0;
const createContent = (age, gender, weight, workoutPlan, budgetStyle) => {
    return `Generate a structured JSON fitness plan for a ${age}-year-old ${gender} weighing ${weight}kg, following a ${workoutPlan} workout plan with a ${budgetStyle} budget style.

  The plan should include:
  1️⃣ **Workout Plan** - Exercises categorized by all muscle groups if fatloss give calorie burning excersie, each with at least 4 exercises, including sets, reps, rest periods, benefits, and execution steps.
  2️⃣ **Meal Plan** - Categorized food options (e.g., High-Protein Foods, Low-Sugar Options, Healthy Fats).
  3️⃣ **Caloric Strategy** - Calculate daily target calories, predict weight change for a month, and break down fat loss/gain for a week.
  4️⃣ **Budget Meal Plan** - Provide affordable meal options based on the budget style (Rich, Standard, Poor).
  5️⃣ **AI Summary** - Explain the reasoning behind the choices in the plan.

  The response **must** be in the following JSON format:
  {
    "summary": "string",
    "workout_plan": {
      "type": "${workoutPlan}",
      "duration": "string",
      "muscle_groups": {
        "muscle_group": {
          "exercises": [
            { "name": "string", "sets": number, "reps": number, "rest": "string", "benefits": "string", "execution": "string" }
          ]
        }
      }
    },
    "meal_plan": {
      "breakfast": { "category": "string", "examples": ["string"] },
      "lunch": { "category": "string", "examples": ["string"] },
      "dinner": { "category": "string", "examples": ["string"] },
      "snacks": { "category": "string", "examples": ["string"] }
    },
    "caloric_deficit_strategy": {
      "daily_target_calories": number,
      "weight_projection": {
        "monthly_expected_change": "string",
        "fat_loss_prediction": "string"
      },
      "recommended_macros": {
        "protein": "${(weight * 2.2).toFixed(1)}g",
        "carbs": "calculated_value",
        "fats": "calculated_value"
      }
    },
    "budget_plan": {
      "budgetStyle": "${budgetStyle}",
      "weekly_grocery_budget": "string",
      "affordable_meals": {
        "protein": [
          { "name": "Chicken Breast", "protein": "31g", "carbs": "0g", "fat": "3.6g", "calories": "165 kcal" },
          { "name": "Tofu", "protein": "8g", "carbs": "2g", "fat": "4.8g", "calories": "76 kcal" },
          { "name": "Lentils", "protein": "9g", "carbs": "20g", "fat": "0.4g", "calories": "116 kcal" },
          { "name": "Eggs", "protein": "13g", "carbs": "1.1g", "fat": "10g", "calories": "155 kcal" }
        ],
        "carbs": [
          { "name": "Brown Rice", "protein": "2.6g", "carbs": "23g", "fat": "0.9g", "calories": "111 kcal" },
          { "name": "Oats", "protein": "11g", "carbs": "66g", "fat": "6.9g", "calories": "389 kcal" },
          { "name": "Sweet Potatoes", "protein": "1.6g", "carbs": "20g", "fat": "0.1g", "calories": "86 kcal" },
          { "name": "Quinoa", "protein": "4.1g", "carbs": "21g", "fat": "1.9g", "calories": "120 kcal" }
        ],
        "fats": [
          { "name": "Avocado", "protein": "2g", "carbs": "9g", "fat": "15g", "calories": "160 kcal" },
          { "name": "Peanut Butter", "protein": "25g", "carbs": "20g", "fat": "50g", "calories": "588 kcal" },
          { "name": "Olive Oil", "protein": "0g", "carbs": "0g", "fat": "100g", "calories": "884 kcal" },
          { "name": "Almonds", "protein": "21g", "carbs": "22g", "fat": "49g", "calories": "576 kcal" }
        ]
      }
    }
  }`;
};
exports.createContent = createContent;
