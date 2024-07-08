import { Route, Routes } from "react-router-dom";
import {
  QuestionContext,
  IQuestion,
  QuestionnaireContextData,
} from "./context.ts";
import StepView from "./routes/StepView.tsx";
import Home from "./routes/Home.tsx";
import Summary from "./routes/Summary.tsx";
import { useLocalStorage } from "./useLocalStorage.ts";
import Navbar from "./components/Navbar.tsx";
import Container from "./components/Container.tsx";
import Results from "./routes/Results";
import emptyResponse from "./constants/emptyResponse";

import './i18n';
import './App.css';

export const questions: IQuestion[] = [
  {
    id: "ide_selection",
    type: "multiChoice",
    text: "Which Integrated Development Environment (IDE) do you use?",
    options: [
      { title: "Visual Studio Code" },
      { title: "IntelliJ IDEA" },
      { title: "Eclipse" },
      { title: "PyCharm" },
      { title: "Atom" },
      { title: "Sublime Text" },
      { title: "NetBeans" },
      { title: "Other" }
    ]
  },
  {
    id: "languages_used",
    type: "multiChoice",
    text: "Which programming languages are you currently using or learning?",
    options: [
      { title: "JavaScript" },
      { title: "Python" },
      { title: "Java" },
      { title: "Ruby" },
      { title: "C++" },
      { title: "PHP" },
      { title: "Go" },
      { title: "Rust" },
      { title: "Swift" },
      { title: "Kotlin" },
      { title: "C#" },
      { title: ".NET" },
      { title: "SQL" },
      { title: "Other" }
    ]
  },
  {
    id: "frameworks_used",
    type: "multiChoice",
    text: "Which frameworks or libraries are part of your regular toolkit?",
    options: [
      // JavaScript
      { title: "React", conditions: [{ questionId: "languages_used", expectedResponse: "JavaScript" }] },
      { title: "Vue.js", conditions: [{ questionId: "languages_used", expectedResponse: "JavaScript" }] },
      { title: "Angular", conditions: [{ questionId: "languages_used", expectedResponse: "JavaScript" }] },
      { title: "NextJs", conditions: [{ questionId: "languages_used", expectedResponse: "JavaScript" }] },
      { title: "Svelte", conditions: [{ questionId: "languages_used", expectedResponse: "JavaScript" }] },
      { title: "Svelte-Kit", conditions: [{ questionId: "languages_used", expectedResponse: "JavaScript" }] },
      { title: "Node.js", conditions: [{ questionId: "languages_used", expectedResponse: "JavaScript" }] },
      { title: "Express.js", conditions: [{ questionId: "languages_used", expectedResponse: "JavaScript" }] },
      { title: "NestJS", conditions: [{ questionId: "languages_used", expectedResponse: "JavaScript" }] },
      { title: "Meteor", conditions: [{ questionId: "languages_used", expectedResponse: "JavaScript" }] },
      { title: "Lodash", conditions: [{ questionId: "languages_used", expectedResponse: "JavaScript" }] },
      { title: "jQuery", conditions: [{ questionId: "languages_used", expectedResponse: "JavaScript" }] },
      { title: "Moment.js", conditions: [{ questionId: "languages_used", expectedResponse: "JavaScript" }] },
      { title: "Three.js", conditions: [{ questionId: "languages_used", expectedResponse: "JavaScript" }] },

      // Python
      { title: "Django", conditions: [{ questionId: "languages_used", expectedResponse: "Python" }] },
      { title: "Flask", conditions: [{ questionId: "languages_used", expectedResponse: "Python" }] },
      { title: "Pyramid", conditions: [{ questionId: "languages_used", expectedResponse: "Python" }] },
      { title: "FastAPI", conditions: [{ questionId: "languages_used", expectedResponse: "Python" }] },
      { title: "Pandas", conditions: [{ questionId: "languages_used", expectedResponse: "Python" }] },
      { title: "NumPy", conditions: [{ questionId: "languages_used", expectedResponse: "Python" }] },
      { title: "SciPy", conditions: [{ questionId: "languages_used", expectedResponse: "Python" }] },
      { title: "Scikit-learn", conditions: [{ questionId: "languages_used", expectedResponse: "Python" }] },
      { title: "TensorFlow", conditions: [{ questionId: "languages_used", expectedResponse: "Python" }] },
      { title: "PyTorch", conditions: [{ questionId: "languages_used", expectedResponse: "Python" }] },
      { title: "Keras", conditions: [{ questionId: "languages_used", expectedResponse: "Python" }] },

      // Java
      { title: "Spring Boot", conditions: [{ questionId: "languages_used", expectedResponse: "Java" }] },
      { title: "JavaServer Faces (JSF)", conditions: [{ questionId: "languages_used", expectedResponse: "Java" }] },
      { title: "Struts", conditions: [{ questionId: "languages_used", expectedResponse: "Java" }] },
      { title: "Vaadin", conditions: [{ questionId: "languages_used", expectedResponse: "Java" }] },
      { title: "Hibernate", conditions: [{ questionId: "languages_used", expectedResponse: "Java" }] },
      { title: "Spring Cloud", conditions: [{ questionId: "languages_used", expectedResponse: "Java" }] },
      { title: "Micronaut", conditions: [{ questionId: "languages_used", expectedResponse: "Java" }] },
      { title: "Quarkus", conditions: [{ questionId: "languages_used", expectedResponse: "Java" }] },

      // Ruby
      { title: "Ruby on Rails", conditions: [{ questionId: "languages_used", expectedResponse: "Ruby" }] },
      { title: "Sinatra", conditions: [{ questionId: "languages_used", expectedResponse: "Ruby" }] },
      { title: "Hanami", conditions: [{ questionId: "languages_used", expectedResponse: "Ruby" }] },

      // PHP
      { title: "Laravel", conditions: [{ questionId: "languages_used", expectedResponse: "PHP" }] },
      { title: "Symfony", conditions: [{ questionId: "languages_used", expectedResponse: "PHP" }] },
      { title: "CodeIgniter", conditions: [{ questionId: "languages_used", expectedResponse: "PHP" }] },
      { title: "Zend Framework", conditions: [{ questionId: "languages_used", expectedResponse: "PHP" }] },
      { title: "WordPress", conditions: [{ questionId: "languages_used", expectedResponse: "PHP" }] },
      { title: "Drupal", conditions: [{ questionId: "languages_used", expectedResponse: "PHP" }] },
      { title: "Joomla", conditions: [{ questionId: "languages_used", expectedResponse: "PHP" }] },

      // Go
      { title: "Gin", conditions: [{ questionId: "languages_used", expectedResponse: "Go" }] },
      { title: "Revel", conditions: [{ questionId: "languages_used", expectedResponse: "Go" }] },
      { title: "Echo", conditions: [{ questionId: "languages_used", expectedResponse: "Go" }] },
      { title: "Buffalo", conditions: [{ questionId: "languages_used", expectedResponse: "Go" }] },
      { title: "GORM", conditions: [{ questionId: "languages_used", expectedResponse: "Go" }] },
      { title: "Go Kit", conditions: [{ questionId: "languages_used", expectedResponse: "Go" }] },

      // Rust
      { title: "Rocket", conditions: [{ questionId: "languages_used", expectedResponse: "Rust" }] },
      { title: "Actix", conditions: [{ questionId: "languages_used", expectedResponse: "Rust" }] },
      { title: "Tide", conditions: [{ questionId: "languages_used", expectedResponse: "Rust" }] },
      { title: "Tokio", conditions: [{ questionId: "languages_used", expectedResponse: "Rust" }] },
      { title: "Serde", conditions: [{ questionId: "languages_used", expectedResponse: "Rust" }] },
      { title: "Async-std", conditions: [{ questionId: "languages_used", expectedResponse: "Rust" }] },

      // Swift
      { title: "SwiftUI", conditions: [{ questionId: "languages_used", expectedResponse: "Swift" }] },
      { title: "UIKit", conditions: [{ questionId: "languages_used", expectedResponse: "Swift" }] },
      { title: "Vapor", conditions: [{ questionId: "languages_used", expectedResponse: "Swift" }] },
      { title: "Kitura", conditions: [{ questionId: "languages_used", expectedResponse: "Swift" }] },

      // Kotlin
      { title: "Kotlin Multiplatform", conditions: [{ questionId: "languages_used", expectedResponse: "Kotlin" }] },
      { title: "Jetpack Compose", conditions: [{ questionId: "languages_used", expectedResponse: "Kotlin" }] },
      { title: "Ktor", conditions: [{ questionId: "languages_used", expectedResponse: "Kotlin" }] },

      // C#
      { title: "ASP.NET Core", conditions: [{ questionId: "languages_used", expectedResponse: "C#" }] },
      { title: "Blazor", conditions: [{ questionId: "languages_used", expectedResponse: "C#" }] },
      { title: "SignalR", conditions: [{ questionId: "languages_used", expectedResponse: "C#" }] },
      { title: "WPF (Windows Presentation Foundation)", conditions: [{ questionId: "languages_used", expectedResponse: "C#" }] },
      { title: "Windows Forms", conditions: [{ questionId: "languages_used", expectedResponse: "C#" }] },
      { title: "UWP (Universal Windows Platform)", conditions: [{ questionId: "languages_used", expectedResponse: "C#" }] },
      { title: "Unity3D", conditions: [{ questionId: "languages_used", expectedResponse: "C#" }] },
      { title: ".NET MAUI", conditions: [{ questionId: "languages_used", expectedResponse: "C#" }] },
      { title: "Xamarin.Forms", conditions: [{ questionId: "languages_used", expectedResponse: "C#" }] },
      { title: "Azure SDK", conditions: [{ questionId: "languages_used", expectedResponse: "C#" }] },
      { title: ".NET Core", conditions: [{ questionId: "languages_used", expectedResponse: "C#" }] },
      { title: "Orleans", conditions: [{ questionId: "languages_used", expectedResponse: "C#" }] },
      { title: "Entity Framework Core", conditions: [{ questionId: "languages_used", expectedResponse: "C#" }] },
      { title: "ML.NET", conditions: [{ questionId: "languages_used", expectedResponse: "C#" }] },
      { title: "Dapper", conditions: [{ questionId: "languages_used", expectedResponse: "C#" }] },

      // .NET
      { title: ".NET 5", conditions: [{ questionId: "languages_used", expectedResponse: ".NET" }] },
      { title: ".NET 6", conditions: [{ questionId: "languages_used", expectedResponse: ".NET" }] },
      { title: ".NET Core", conditions: [{ questionId: "languages_used", expectedResponse: ".NET" }] },
      { title: "ASP.NET", conditions: [{ questionId: "languages_used", expectedResponse: ".NET" }] },
      { title: "ASP.NET MVC", conditions: [{ questionId: "languages_used", expectedResponse: ".NET" }] },
      { title: "Web API", conditions: [{ questionId: "languages_used", expectedResponse: ".NET" }] },
      { title: "WinForms", conditions: [{ questionId: "languages_used", expectedResponse: ".NET" }] },
      { title: "WPF", conditions: [{ questionId: "languages_used", expectedResponse: ".NET" }] },
      { title: "Entity Framework", conditions: [{ questionId: "languages_used", expectedResponse: ".NET" }] },
      { title: "NuGet Packages", conditions: [{ questionId: "languages_used", expectedResponse: ".NET" }] },
      { title: "NUnit", conditions: [{ questionId: "languages_used", expectedResponse: ".NET" }] },
      { title: "XUnit", conditions: [{ questionId: "languages_used", expectedResponse: ".NET" }] },

      // SQL
      { title: "SQL Server", conditions: [{ questionId: "languages_used", expectedResponse: "SQL" }] },
      { title: "MySQL", conditions: [{ questionId: "languages_used", expectedResponse: "SQL" }] },
      { title: "PostgreSQL", conditions: [{ questionId: "languages_used", expectedResponse: "SQL" }] },
      { title: "SQLite", conditions: [{ questionId: "languages_used", expectedResponse: "SQL" }] },
      { title: "Oracle", conditions: [{ questionId: "languages_used", expectedResponse: "SQL" }] },
      { title: "MariaDB", conditions: [{ questionId: "languages_used", expectedResponse: "SQL" }] },
      { title: "DB2", conditions: [{ questionId: "languages_used", expectedResponse: "SQL" }] },
      { title: "Cassandra", conditions: [{ questionId: "languages_used", expectedResponse: "SQL" }] },
      { title: "Redis", conditions: [{ questionId: "languages_used", expectedResponse: "SQL" }] },
    ]
  },
  {
    id: "doc_preference",
    type: "singleChoice",
    text: "How do you generally prefer your documentation to be structured?",
    options: [
      { title: "Short and concise summaries" },
      { title: "In-depth explanations" },
      { title: "Mixed (concise with links to in-depth)" }
    ]
  },
  {
    id: "preferred_doc_platforms",
    type: "multiChoice",
    text: "Are there specific documentation websites or platforms that you find most useful or prefer?",
    options: [
      { title: "Stack Overflow" },
      { title: "MDN" },
      { title: "W3Schools" },
      { title: "Official documentation of the language/framework" },
      { title: "Other" }
    ]
  },
  {
    id: "search_first_choice",
    type: "singleChoice",
    text: "When facing a coding challenge, where do you typically search first for solutions?",
    options: [
      { title: "Google search" },
      { title: "ChatGPT" },
      { title: "Specific documentation websites" },
      { title: "Coding forums (e.g., Stack Overflow)" },
      { title: "Directly in IDE" }
    ]
  },
  {
    id: "frequent_coding_concepts",
    type: "multiChoice",
    text: "Which of these coding concepts do you often encounter while working with your chosen frameworks or libraries?",
    options: [
      // JavaScript - React, Vue.js, Angular, etc.
      { title: "Components", conditions: [{ questionId: "frameworks_used", expectedResponse: ["React", "Vue.js", "Angular", "Svelte", "Svelte-Kit"] }] },
      { title: "JSX", conditions: [{ questionId: "frameworks_used", expectedResponse: "React" }] },
      { title: "Directives (v-if, v-for)", conditions: [{ questionId: "frameworks_used", expectedResponse: "Vue.js" }] },
      { title: "NgModules", conditions: [{ questionId: "frameworks_used", expectedResponse: "Angular" }] },
      { title: "Server Side Rendering (SSR)", conditions: [{ questionId: "frameworks_used", expectedResponse: ["React", "NextJs", "Vue.js", "Angular"] }] },
      { title: "State Management", conditions: [{ questionId: "frameworks_used", expectedResponse: ["React", "Vue.js", "Angular", "Svelte"] }] },

      // Python - Django, Flask, etc.
      { title: "Object Relational Mapping (ORM)", conditions: [{ questionId: "frameworks_used", expectedResponse: ["Django", "Flask"] }] },
      { title: "Middleware", conditions: [{ questionId: "frameworks_used", expectedResponse: ["Django", "Flask"] }] },
      { title: "Asynchronous Programming", conditions: [{ questionId: "frameworks_used", expectedResponse: "FastAPI" }] },
      { title: "Data Frames", conditions: [{ questionId: "frameworks_used", expectedResponse: "Pandas" }] },
      { title: "Machine Learning", conditions: [{ questionId: "frameworks_used", expectedResponse: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"] }] },

      // Java - Spring Boot, Hibernate, etc.
      { title: "Annotations", conditions: [{ questionId: "frameworks_used", expectedResponse: ["Spring Boot", "Hibernate", "JavaServer Faces (JSF)"] }] },
      { title: "Dependency Injection", conditions: [{ questionId: "frameworks_used", expectedResponse: ["Spring Boot", "JavaServer Faces (JSF)"] }] },
      { title: "JPA Entities", conditions: [{ questionId: "frameworks_used", expectedResponse: "Hibernate" }] },

      // Ruby - Ruby on Rails, Sinatra, etc.
      { title: "Active Record", conditions: [{ questionId: "frameworks_used", expectedResponse: "Ruby on Rails" }] },
      { title: "MVC Architecture", conditions: [{ questionId: "frameworks_used", expectedResponse: ["Ruby on Rails", "Sinatra"] }] },

      // PHP - Laravel, Symfony, etc.
      { title: "MVC Architecture", conditions: [{ questionId: "frameworks_used", expectedResponse: ["Laravel", "Symfony", "CodeIgniter"] }] },
      { title: "Eloquent ORM", conditions: [{ questionId: "frameworks_used", expectedResponse: "Laravel" }] },
      { title: "Twig Templates", conditions: [{ questionId: "frameworks_used", expectedResponse: "Symfony" }] },

      // Go - Gin, Revel, etc.
      { title: "Goroutines", conditions: [{ questionId: "frameworks_used", expectedResponse: ["Gin", "Revel", "Echo", "Buffalo"] }] },
      { title: "Middleware", conditions: [{ questionId: "frameworks_used", expectedResponse: ["Gin", "Echo"] }] },

      // Rust - Rocket, Actix, etc.
      { title: "Ownership & Borrowing", conditions: [{ questionId: "frameworks_used", expectedResponse: ["Rocket", "Actix", "Tide"] }] },
      { title: "Asynchronous Programming", conditions: [{ questionId: "frameworks_used", expectedResponse: ["Rocket", "Actix", "Tide", "Tokio"] }] },

      // Swift - SwiftUI, UIKit, etc.
      { title: "Declarative UI", conditions: [{ questionId: "frameworks_used", expectedResponse: "SwiftUI" }] },
      { title: "Auto Layout", conditions: [{ questionId: "frameworks_used", expectedResponse: "UIKit" }] },

      // Kotlin - Kotlin Multiplatform, Jetpack Compose, etc.
      { title: "Coroutines", conditions: [{ questionId: "frameworks_used", expectedResponse: ["Kotlin Multiplatform", "Ktor"] }] },
      { title: "Declarative UI", conditions: [{ questionId: "frameworks_used", expectedResponse: "Jetpack Compose" }] },

      // C# - ASP.NET Core, Blazor, etc.
      { title: "Middleware", conditions: [{ questionId: "frameworks_used", expectedResponse: "ASP.NET Core" }] },
      { title: "Component Lifecycle", conditions: [{ questionId: "frameworks_used", expectedResponse: "Blazor" }] },
      { title: "Entity Framework", conditions: [{ questionId: "frameworks_used", expectedResponse: ["ASP.NET Core", ".NET Core", "Entity Framework Core"] }] },

      // SQL - SQL Server, MySQL, etc.
      { title: "Joins", conditions: [{ questionId: "frameworks_used", expectedResponse: ["SQL Server", "MySQL", "PostgreSQL", "SQLite", "Oracle"] }] },
      { title: "Transactions", conditions: [{ questionId: "frameworks_used", expectedResponse: ["SQL Server", "MySQL", "PostgreSQL", "SQLite", "Oracle"] }] },
    ]
  },
  {
    id: "recent_queries",
    type: "multipleText",
    text: "Optionally, list a few of" +
        " your recent coding-related search queries or topics you've looked into:"
  }
];
const questionMap = new Map<string, IQuestion>(
  questions.map((question) => [question.id, question]),
);

function App(): React.ReactElement {
  const [answers, setAnswers] = useLocalStorage<{
    [key: string]: string | null;
  }>("DocBrewAnswers", emptyResponse);
  const [storedResults, setStoredResults] = useLocalStorage('DocBrewResults', null);

  const contextValue: QuestionnaireContextData = {
    questions: questionMap,
    answers,
    setAnswers,
    storedResults,
    setStoredResults
  };

  return (
    <QuestionContext.Provider value={contextValue}>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {questions.map((question) => (
            <Route
              path={`/:questionId`}
              key={question.id}
              element={<StepView />}
            />
          ))}
          <Route path="/summary" element={<Summary />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Container>
    </QuestionContext.Provider>
  );
}

export default App;
