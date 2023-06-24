<div class="markdown prose w-full break-words dark:prose-invert dark">
  <h1>Recipe Finder</h1>
  <p>🍽️ Recipe Finder is a web application that allows users to search and discover various recipes. Whether you're
    looking for a quick weeknight dinner idea or planning a special meal, Recipe Finder has got you covered!</p>
  <h2>Features</h2>
  <p>✨ Recipe Finder offers the following features:</p>
  <ul>
    <li><strong>Search:</strong> Easily search for recipes based on keywords, ingredients, or specific dietary
      requirements, refine your search results by applying filters such as cooking time, difficulty level, or cuisine
      type.
      Recipe Details: Get detailed information about each recipe, including ingredients, instructions, nutritional
      facts, and more.
    </li>
    <li><strong>Recipe Details:</strong> Get detailed information about each recipe, including ingredients,
      instructions, nutritional facts, and more.
    </li>
  </ul>
  <h2>Tech Stack</h2>
  <p>🛠️ Recipe Finder is built using the following technologies:</p>
  <ul>
    <li><strong>React:</strong> A JavaScript library for building user interfaces.</li>
    <li><strong>TypeScript:</strong> A typed superset of JavaScript that compiles to plain JavaScript.</li>
    <li><strong>Redux Toolkit:</strong> A state management library that simplifies the process of managing state in
      React applications.
    </li>
    <li><strong>React Router DOM:</strong> A routing library for React that enables navigation and routing between
      different components.
    </li>
  </ul>
  <h2>Getting Started</h2>
  <p>Follow the steps below to get the Recipe Finder project up and running on your local machine:</p>
  <ol>
    <li><p>Clone the repository:</p>
      <pre><div class="bg-black rounded-md mb-4"><div
        class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button
        class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                        width="1em" xmlns="http://www.w3.org/2000/svg"><path
        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8"
                                                                                                  height="4" rx="1"
                                                                                                  ry="1"></rect></svg>Copy code</button></div><div
        class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git <span class="hljs-built_in">clone</span> https://github.com/Kitrop/recipeFoodReact
</code></div></div></pre>
    </li>
    <li><p>Navigate to the project directory:</p>
      <pre><div class="bg-black rounded-md mb-4"><div
        class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button
        class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                        width="1em" xmlns="http://www.w3.org/2000/svg"><path
        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8"
                                                                                                  height="4" rx="1"
                                                                                                  ry="1"></rect></svg>Copy code</button></div><div
        class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash"><span
        class="hljs-built_in">cd</span> recipeFoodReact
</code></div></div></pre>
    </li>
    <li><p>Install the dependencies:</p>
      <pre><div class="bg-black rounded-md mb-4"><div
        class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button
        class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                        width="1em" xmlns="http://www.w3.org/2000/svg"><path
        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8"
                                                                                                  height="4" rx="1"
                                                                                                  ry="1"></rect></svg>Copy code</button></div><div
        class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm install
</code></div></div></pre>
    </li>
    <li><p>Start the development server:</p>
      <pre><div class="bg-black rounded-md mb-4"><div
        class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button
        class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                        width="1em" xmlns="http://www.w3.org/2000/svg"><path
        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8"
                                                                                                  height="4" rx="1"
                                                                                                  ry="1"></rect></svg>Copy code</button></div><div
        class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm start
</code></div></div></pre>
    </li>
    <li><p>Open your browser and visit <code>http://localhost:3000</code> to see the application in action.</p></li>
  </ol>
  <h2>Contributing</h2>
  <p>🤝 We welcome contributions to improve Recipe Finder! To contribute, follow these steps:</p>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a new branch: <code>git checkout -b my-feature-branch</code>.</li>
    <li>Make your changes and commit them: <code>git commit -m "Add some feature"</code>.</li>
    <li>Push to the branch: <code>git push origin my-feature-branch</code>.</li>
    <li>Submit a pull request detailing your changes.</li>
  </ol>
  <h2>Acknowledgements</h2>
  <p>🙏 We would like to express our gratitude to the following resources and libraries that have contributed to the
    development of Recipe Finder:</p>
  <ul>
    <li><a href="https://reactrouter.com/" target="_new">React-router-dom</a></li>
    <li><a href="https://redux-toolkit.js.org/" target="_new">Redux Toolkit</a></li>
  </ul>
  <h2>Contact</h2>
  <p>📧 For any inquiries or feedback, please contact us at <a href="mailto:zhenya.shabolin.03@gmail.com" target="_new">zhenya.shabolin.03@gmail.com</a>.
  <p>Or telegram<a href="https://t.me/ShbEvg" target="_new">https://t.me/ShbEvg</a>.
  </p>
  <p>Let's get cooking and explore the world of delicious recipes together! 🍳🌍</p></div>