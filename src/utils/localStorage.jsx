// localStorage.clear();

const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "a@a.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription:
          "Prepare and attend client meeting for project update.",
        taskDate: "2024-10-15",
        category: "Meetings",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Documentation",
        taskDescription: "Complete project documentation for phase 1.",
        taskDate: "2024-10-16",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Briefing",
        taskDescription: "Weekly team briefing on progress.",
        taskDate: "2024-10-12",
        category: "Meetings",
      },
    ],
  },
  {
    id: 2,
    firstName: "Rajesh",
    email: "employee2@company.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review code submissions from junior developers.",
        taskDate: "2024-10-16",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update Documentation",
        taskDescription: "Update documentation for module X.",
        taskDate: "2024-10-14",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Research",
        taskDescription: "Conduct research for new project scope.",
        taskDate: "2024-10-13",
        category: "Research",
      },
    ],
  },
  {
    id: 3,
    firstName: "Sunita",
    email: "employee3@company.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 7,
      completed: 3,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "User Testing",
        taskDescription: "Coordinate with users for system testing.",
        taskDate: "2024-10-18",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Feature Analysis",
        taskDescription: "Analyze feasibility of new feature request.",
        taskDate: "2024-10-14",
        category: "Analysis",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Sprint Planning",
        taskDescription: "Prepare sprint plan for upcoming tasks.",
        taskDate: "2024-10-15",
        category: "Planning",
      },
    ],
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@company.com",
    password: "123",
    taskCount: {
      active: 4,
      newTask: 1,
      completed: 8,
      failed: 5,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Bug Fix",
        taskDescription: "Fix bug reported in module Y.",
        taskDate: "2024-10-16",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "System Update",
        taskDescription: "Update system with new patches.",
        taskDate: "2024-10-13",
        category: "Maintenance",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client Report",
        taskDescription: "Generate report for client ABC.",
        taskDate: "2024-10-14",
        category: "Reporting",
      },
    ],
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@company.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 9,
      completed: 4,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deployment",
        taskDescription: "Deploy latest build to production.",
        taskDate: "2024-10-16",
        category: "Deployment",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Resource Allocation",
        taskDescription: "Allocate resources for next sprint.",
        taskDate: "2024-10-15",
        category: "Management",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Presentation",
        taskDescription: "Prepare presentation for client showcase.",
        taskDate: "2024-10-17",
        category: "Presentation",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
