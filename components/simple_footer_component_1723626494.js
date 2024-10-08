/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1723626494", {
    template: `
    <div class="flex">
        <aside class="w-64 h-screen bg-white dark:bg-gray-800 p-4 shadow-lg">
            <nav>
                <ul>
                    <li class="mb-4">
                        <a href="#" class="flex items-center text-gray-700 dark:text-white hover:bg-purple-100 dark:hover:bg-purple-700 p-2 rounded-lg transition duration-300">
                            <i class='bx bx-home mr-2 text-purple-600'></i>
                            Home
                        </a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="flex items-center text-gray-700 dark:text-white hover:bg-purple-100 dark:hover:bg-purple-700 p-2 rounded-lg transition duration-300">
                            <i class='bx bx-book mr-2 text-purple-600'></i>
                            Books
                        </a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="flex items-center text-gray-700 dark:text-white hover:bg-purple-100 dark:hover:bg-purple-700 p-2 rounded-lg transition duration-300">
                            <i class='bx bx-user mr-2 text-purple-600'></i>
                            Profile
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
        <footer id="footer-section" class="flex-1 bg-white dark:bg-gray-800">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            LibraryConnect
                        </a>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center justify-between">
                    <div id="footer-text" class="flex-1 block text-sm text-center md:text-left text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
                        © 2023 LibraryConnect. Empowering readers and connecting communities through knowledge.
                    </div>
                    <div class="flex justify-center space-x-4 mb-4 md:mb-0">
                        <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                            <i class='bx bx-envelope mr-2'></i>Subscribe
                        </button>
                        <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                            <i class='bx bx-phone mr-2'></i>Contact Us
                        </button>
                    </div>
                    <div class="w-full md:w-auto">
                        <form class="flex space-x-2">
                            <input type="email" placeholder="Enter your email" class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                            <button type="submit" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer> 
    </div>
    `,
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
