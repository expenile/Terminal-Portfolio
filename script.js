document.addEventListener("DOMContentLoaded", function () {
  const outputElement = document.getElementById("output");
  const commandInput = document.getElementById("commandInput");

  const commands = {
    help: "Available commands: skills, projects, about, contact, social, education, currentstatus, codingprofile, clear",
    skills:
      "Skills:\n- Frontend: HTML, CSS (Bootstrap, Tailwind), JavaScript, React.js, Next.js\n- Backend: Node.js, PostgreSQL, SQL, MongoDB, Appwrite, Supabase",
    projects:
      "Projects:\n- <a href='https://github.com/expenile/Diabetes-Decoded' target='_blank'>Diabetes Decoded</a>\n- <a href='https://github.com/expenile/Fitness-Hub' target='_blank'>Fitness Hub</a>\n- <a href='https://github.com/expenile/E-commerce-API' target='_blank'>E-commerce API</a>\n- <a href='https://github.com/expenile/Voting-App' target='_blank'>Voting Backend</a>",
    about:
      "About Me: I am an aspiring software developer passionate about full-stack development. Currently, I am exploring various technologies to enhance my skills in both frontend and backend development.",
    contact:
      "Contact: You can reach me via email at <a href='mailto:palitbnilesh@gmail.com'>rakshit@example.com</a> or connect with me on <a href='https://www.linkedin.com/in/nileshrpal/' target='_blank'>LinkedIn</a>.",
    social:
      "LinkedIn: <a href='https://www.linkedin.com/in/nileshrpal/' target='_blank'>LinkedIn Profile</a> | GitHub: <a href='https://github.com/expenile' target='_blank'>GitHub</a>",
    education:
      "Education:\n- 10th Grade (MMEHS): 90%\n- 12th Grade (VVEHS): 79%\n- Pursuing B.E in IT (Current CGPA: <9.2>)",
    currentstatus:
      "Current Status: Looking for a job and actively learning new skills in DevOps (Docker, Kubernetes, Kafka, Zookeeper), Real-time features, Machine Learning (ML), Artificial Intelligence (AI), and Python with Django and Flask, currently in the last year.",
    codingprofile:
      "Check out my coding profiles:\n- GitHub: <a href='https://github.com/expenile' target='_blank'>GitHub Profile</a>\n- LeetCode: <a href='https://leetcode.com/u/expenile/' target='_blank'>LeetCode Profile</a>\n- Codeforces: <a href='https://codeforces.com/profile/Expenile' target='_blank'>Codeforces Profile</a>\n- CodeChef: <a href='https://www.codechef.com/users/expenile' target='_blank'>CodeChef Profile</a>\n- CodeStudio: <a href='https://www.naukri.com/code360/profile/5b673f96-f496-4454-844a-dba598e01be1' target='_blank'>CodeStudio Profile</a>.",
    clear: "Terminal cleared. Type 'help' to see available commands.",
  };

  const commandHistory = [];
  let historyIndex = -1;

  function handleCommand(event) {
    if (event.key === "Enter") {
      const command = commandInput.value.trim().toLowerCase();
      commandHistory.push(command);
      historyIndex = commandHistory.length;

      if (command in commands) {
        addOutput(`visitor@portfolio:~$ ${command}`);
        if (command === "clear") {
          outputElement.innerHTML = "";
          addOutput("Welcome to Nilesh Pal's portfolio terminal!");
          addOutput("Type 'help' to see available commands.");
        } else {
          addOutput(commands[command]);
        }
      } else {
        addOutput(`visitor@portfolio:~$ ${command}`);
        addOutput(
          `Command not found: ${command}. Type 'help' for available commands.`
        );
      }
      commandInput.value = "";
    } else if (event.key === "ArrowUp") {
      if (historyIndex > 0) {
        historyIndex--;
        commandInput.value = commandHistory[historyIndex];
      }
    } else if (event.key === "ArrowDown") {
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        commandInput.value = commandHistory[historyIndex] || "";
      }
    }
  }

  function addOutput(text) {
    const newLine = document.createElement("div");
    newLine.innerHTML = text;
    outputElement.appendChild(newLine);
    outputElement.scrollTop = outputElement.scrollHeight;
  }

  addOutput("Type 'help' to see available commands.");

  commandInput.addEventListener("keydown", handleCommand);
});
