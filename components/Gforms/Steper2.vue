<template>
  <div class="">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <nav aria-label="Progress">
      <ol
        class="flex-wrap border border-gray-300 divide-y divide-gray-300 rounded-md md:flex md:divide-y-0"
      >
        <li class="relative md:flex-1 md:flex">
          <!-- Current Step -->
          <NuxtLink
            to="/governance"
            class="flex items-center px-6 py-4 text-sm font-sm hover:bg-blue-400"
            aria-current="step"
          >
            <span
              class="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-blue-600 rounded-full "
            >
              <span class="text-gray-900">01</span>
            </span>
            <span class="ml-2 text-xs text-gray-900 font-small">
              Governance Capture Form</span
            >
          </NuxtLink>

          <!-- Arrow separator for lg screens and up -->
          <div
            class="absolute top-0 right-0 hidden w-5 h-full md:block"
            aria-hidden="true"
          >
            <svg
              class="w-full h-full text-gray-300"
              viewBox="0 0 22 80"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 -2L20 40L0 82"
                vector-effect="non-scaling-stroke"
                stroke="currentcolor"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </li>
        <li class="relative md:flex-1 md:flex">
          <!-- Current Step -->
          <NuxtLink
            to="/board"
            class="flex items-center px-6 py-4 text-sm font-sm hover:bg-blue-400"
            aria-current="step"
          >
            <span
              class="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-blue-600 rounded-full "
            >
              <span class="text-gray-900">02</span>
            </span>
            <span class="ml-2 text-xs text-gray-900 font-small"
              >Board Composition</span
            >
          </NuxtLink>

          <!-- Arrow separator for lg screens and up -->
          <div
            class="absolute top-0 right-0 hidden w-5 h-full md:block"
            aria-hidden="true"
          >
            <svg
              class="w-full h-full text-gray-300"
              viewBox="0 0 22 80"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 -2L20 40L0 82"
                vector-effect="non-scaling-stroke"
                stroke="currentcolor"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </li>
        <li class="relative md:flex-1 md:flex">
          <!-- Current Step -->
          <NuxtLink
            to="/executive"
            class="flex items-center px-6 py-4 text-sm font-sm hover:bg-blue-400"
            aria-current="step"
          >
            <span
              class="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-blue-600 rounded-full "
            >
              <span class="text-gray-900">03</span>
            </span>
            <span class="ml-2 text-xs text-gray-900 font-small"
              >Executive Table</span
            >
          </NuxtLink>
        </li>
      </ol>
    </nav>
  </div>
</template>
<script>
export default {
  computed: {},
  data() {
    return {
      step: 1,
      fname: "",
      lname: ""
    };
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    }
  }
};
</script>
