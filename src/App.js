import React from "react"; //npx create-react-app amq, npm install, npm run build, cd amq, npm start
import { BrowserRouter, Routes, Route } from "react-router-dom"; //npm install react-router-dom --save
import HomePage from "./pages/Home";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/About";
import Layout from "./pages/Laout";
import NoPage from "./pages/Nopage";

export default function App(){
  return (
    <BrowserRouter>
      <Routes basename={process.env.NODE_ENV === 'production'?'/new-deploy':''}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="About" element={<AboutPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/*
1. npx create-react-app appName
2. npm install gh-pages --save-dev
3. Go to github.com then create repository
4. Go package.json file add property and value: 
   {"homepage":"URL", "predeploy":"npm run build", "deploy":"gh-pages -d build",}
5. git init 
   git remote add origin https://github.com/AMQIsmail/new-deploy.git
   npm run build
   npm run deploy
*/

/*
1. git status
2. git add .
*/

// basename={process.env.NODE_ENV === 'production'?'/new-deploy':''}

// echo "# new-deploy" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/AMQIsmail/new-deploy.git
// git push -u origin main

// git remote add origin https://github.com/AMQIsmail/new-deploy.git
// git branch -M main
// git push -u origin main