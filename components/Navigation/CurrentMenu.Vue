<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="min-h-screen bg-gray-50">
    <nav class="border-b border-gray-200 ">
      <div class="mx-auto ml-6 mr-8 max-w-auto sm:px-6 lg:px-0">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex items-center flex-shrink-0">
              <img
                class="block w-auto h-16 lg:hidden"
                src="/EAS_logo.png"
                alt="Workflow"
              />
              <img
                class="hidden w-auto h-16 lg:block"
                src="/EAS_logo.png"
                alt="Workflow"
              />
            </div>
            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              <a
                href="/"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Home
              </a>

              <NuxtLink
                to="/governance"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              >
                Governance
              </NuxtLink>

              <NuxtLink
                to="/environment"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              >
                Environmental
              </NuxtLink>
              <!--
              <NuxtLink
                to="/finance"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              >
                Finance Products
              </NuxtLink> -->
              <NuxtLink
                to="/totaljobs"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              >
                Social
              </NuxtLink>
              <NuxtLink
                to="/transformation"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              >
                Transformation
              </NuxtLink>
              <!-- <NuxtLink
                to="/training"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              >
                Other
              </NuxtLink> -->
            </div>
          </div>
          <div class="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <nuxt-link
              class="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
              to="/signin"
            >
              Sign in</nuxt-link
            >
            <nuxt-link
              class="inline-flex items-center justify-center px-4 py-2 ml-8 font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700"
              to="/signup"
            >
              Sign up</nuxt-link
            >
          </div>
          <div class="flex items-center -mr-2 sm:hidden">
            <!-- Mobile menu button -->
            <button
              @click="showMobile = !showMobile"
              type="button"
              class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
              <svg
                class="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
              <svg
                class="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div v-show="showMobile" class="sm:hidden" id="mobile-menu">
        <div class="pt-2 pb-3 space-y-1">
          <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" -->
          <NuxtLink to="/" class="block py-2 pl-3 pr-4 text-base font-medium">
            Home
          </NuxtLink>

          <NuxtLink
            to="/governance"
            class="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
          >
            Governance
          </NuxtLink>

          <NuxtLink
            to="/environment"
            class="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
          >
            Environmental
          </NuxtLink>
          <NuxtLink
            to="/totaljobs"
            class="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
          >
            Social
          </NuxtLink>
          <NuxtLink
            to="/transformation"
            class="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
          >
            Transformation
          </NuxtLink>
          <!-- <NuxtLink
            to="/training"
            class="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
          >
            Other
          </NuxtLink> -->
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div>
            <nuxt-link
              class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
              to="/signup"
            >
              Sign up</nuxt-link
            >
            <p class="mt-6 text-base font-medium text-center text-gray-500">
              Existing customer?
              <nuxt-link
                class="text-indigo-600 hover:text-indigo-500"
                to="/signin"
                >Sign in</nuxt-link
              >
            </p>
          </div>
        </div>
      </div>
    </nav>

    <!-- <main>
       <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">-->
    <div class="bg-gray-50">
      <!-- Replace with your content -->
      <Nuxt />
      <!-- /End replace -->
    </div>
    <!--</main> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobile: false,
      showProfile: false,
      buttonApply: false
    };
  }
};
</script>

<style>
/* home route and active route will show in bold as it matches / and /NuxtLinkbout */
a.nuxt-link-active {
  font-weight: 900;
  color: #2d2e6d;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #2d2e6d;
}
</style>
