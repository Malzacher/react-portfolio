import Left from "../Sections/Left";
import Right from "../Sections/Right";

export default function Portfolio() {
  return (
    <div>
      <h2>02. Portfolio</h2>
      <Left title={"React Based Tic-Tac-Toe"} image={"/react-portfolio/Tic-Tac-Toe.png"} ghLink={"#"} repoLink={"https://github.com/Malzacher/Tic-Tac-Toe"}> I built this Tic Tac Toe game as a learning project using React. The app features a sleek and responsive design with player names, a dynamic game board, and a 'Game Over' screen that displays the winner. Users can easily reset the game and play again with the rematch button. This project helped me deepen my understanding of React's state management and component-based architecture. </Left>
      <Right title={"React Based Todo Application"} image={"/react-portfolio/Todo-Application.png"} ghLink={"#"} repoLink={"https://github.com/Malzacher/Tic-Tac-Toe"}> I created this To-Do app using React to practise state management and component-driven development. The app allows users to add, edit, and delete tasks, with real-time updates to the task list. It features a clean, user-friendly interface and leverages React’s state and props to handle task interactions efficiently. This project helped me enhance my skills in building dynamic and interactive applications.</Right>
      <Left title={"React Based Investment Calculator"} image={"/react-portfolio/Investment-Calculator.png"} ghLink={"#"} repoLink={"https://github.com/Malzacher/Tic-Tac-Toe"}> I developed this Investment Calculator using React to help users estimate the growth of their investments over time. The app allows users to input details such as initial investment, annual contributions, expected return rate, and investment duration. It dynamically calculates and displays the yearly breakdown of investment value, interest earned, and total invested capital in an easy-to-read table. This project enhanced my skills in managing user inputs, performing real-time calculations, and rendering data dynamically in React. </Left>
      <Right title={"Javascript True or False Game"} image={"/react-portfolio/True-Or-False.png"} ghLink={"#"} repoLink={"https://github.com/Malzacher/Tic-Tac-Toe"}> I created this To-Do app using React to practise state management and component-driven development. The app allows users to add, edit, and delete tasks, with real-time updates to the task list. It features a clean, user-friendly interface and leverages React’s state and props to handle task interactions efficiently. This project helped me enhance my skills in building dynamic and interactive applications.</Right>
    </div>
  );
}
