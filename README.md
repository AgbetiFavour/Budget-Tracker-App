# Budget Tracker App

## Description
The Budget Tracker App is a responsive web application built using React.js and Chakra UI. It allows users to:

- Add income and expenses with category selection.
- View a graphical summary of spending by category.
- Check their local weather using the OpenWeather API.

---

## Features

1. **Dashboard**:
   - Add income and expenses with appropriate categories.
   - View a bar graph or pie chart summarizing your expenses.
2. **Weather Widget**:
   - Displays the current weather based on the user's location.
3. **Responsive Design**:
   - Works seamlessly across devices (mobile, tablet, desktop).

---

## Technologies Used

- **Frontend**:
  - React.js
  - Chakra UI (for UI components and styling)
- **State Management**:
  - React Context API
- **API Integration**:
  - OpenWeather API
- **Graphing Library**:
  - Recharts

---


## Installation

1. **Clone the Repository**:
   ```bash
   git clone (https://github.com/AgbetiFavour/Budget-Tracker-App.git)
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```


3. **Run the App**:
   ```bash
   npm start
   ```

---

## Usage

1. **Adding Transactions**:
   - Navigate to the dashboard.
   - Fill out the form to add income or expenses, selecting a category.
   - Click "Add" to save the transaction.

2. **Viewing Spending Summary**:
   - A pie chart will automatically update to reflect your spending by category.

3. **Checking Weather**:
   - The weather widget on the dashboard will display your local weather.

---

## Project Structure

```
project-directory
├── public
├── src
│   ├── components
│   │   ├── AddTransactionForm.jsx
│   │   ├── SpendingChart.jsx
│   │   └── WeatherWidget.jsx
│   ├── context
│   │   └── BudgetContext.js
│   ├── pages
│   │   └── Dashboard.jsx
│   ├── App.js
│   ├── index.js
│   └── styles
│       └── theme.js
```

---

