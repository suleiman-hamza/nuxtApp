<script setup >
import { motion } from "motion-v"
definePageMeta({
    layout: "folio"
})

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

/**
 * ==============   Styles   ================
 */

const image = {
  maxWidth: "80vw",
}

const shape = {
  strokeWidth: 10,
  strokeLinecap: "round",
  fill: "transparent",
}
</script>

<template>
    <section class="portfolio border-2 border-blue-500 p-4">
        <p class="text-[#dedede] mb-8">The portfolio center</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur eaque eum exercitationem quia et facilis quisquam nostrum similique autem officia optio ab eius suscipit qui voluptas, dolorum aut non? Quis possimus ex sequi corrupti ratione qui itaque vero provident quos ducimus! Exercitationem doloribus officiis illum, quod temporibus repudiandae est nesciunt alias architecto. Doloremque quae sequi veniam architecto sunt ullam laboriosam. Ipsa velit pariatur iste eligendi consectetur enim officiis aperiam adipisci optio nisi laudantium fuga sint distinctio doloribus, totam repellat beatae qui exercitationem modi dolorum deleniti culpa facere. Explicabo porro officiis, fugit sint asperiores dolor aspernatur rerum laboriosam mollitia saepe eveniet maiores reprehenderit esse expedita, nemo impedit harum. Ad commodi saepe dolorum ipsa, hic ullam dicta, qui doloribus, aperiam eligendi est quo fuga. Dignissimos sit quia suscipit, voluptatibus possimus rem ratione rerum perferendis laboriosam temporibus soluta aperiam molestias ut laudantium. Sunt, quibusdam nam vero odit tempore consectetur voluptas nisi dolorem temporibus cum explicabo omnis ea recusandae voluptate! Eum officiis molestias numquam, magnam quasi necessitatibus voluptatibus modi odio placeat cum eveniet nemo fugiat repellendus fuga possimus dolorem similique veritatis ex voluptates. Repellat modi beatae deleniti impedit officiis sit iure optio, ex animi distinctio repellendus neque architecto, necessitatibus suscipit nam qui dolorem. Ratione.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias voluptatum qui? Non ab eum iure nisi delectus inventore sunt cupiditate magni libero corrupti ad quo dolores culpa accusamus facilis dolorum nesciunt, eveniet hic obcaecati aliquam aspernatur deserunt est dignissimos ex. Facere neque molestiae earum ad hic minima reiciendis explicabo, magni maxime qui repellendus eius veritatis iusto non laboriosam, dolorum temporibus dolore. Sapiente, et laboriosam odit delectus veritatis dolore ullam atque aliquid magni facilis nobis! Cupiditate totam ullam, porro molestias harum sed consequatur rerum esse aut quibusdam, maxime sapiente error distinctio ipsum quam sunt inventore aliquid dolore dignissimos id minus quidem. Tempora quae architecto numquam itaque dolores eveniet non, sequi reprehenderit earum modi nam temporibus. Illo, fugiat deleniti. Qui, eius ea repudiandae tempora voluptatibus natus quos, fugit non distinctio provident quam eligendi soluta maiores. Beatae, nulla exercitationem quae quisquam rerum voluptates voluptas, labore maxime minima quasi laboriosam ipsam fugiat accusamus repudiandae aperiam dicta nesciunt tempore corrupti odit voluptate deleniti ducimus a aliquam. Temporibus quasi molestias nihil quibusdam quae, aspernatur saepe perferendis, soluta eaque placeat exercitationem possimus voluptates in doloremque molestiae hic illo mollitia autem. Dolores, omnis illum? Nihil, repudiandae eaque ut magni optio modi. Adipisci earum quae iure quis. Dignissimos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias voluptatum qui? Non ab eum iure nisi delectus inventore sunt cupiditate magni libero corrupti ad quo dolores culpa accusamus facilis dolorum nesciunt, eveniet hic obcaecati aliquam aspernatur deserunt est dignissimos ex. Facere neque molestiae earum ad hic minima reiciendis explicabo, magni maxime qui repellendus eius veritatis iusto non laboriosam, dolorum temporibus dolore. Sapiente, et laboriosam odit delectus veritatis dolore ullam atque aliquid magni facilis nobis! Cupiditate totam ullam, porro molestias harum sed consequatur rerum esse aut quibusdam, maxime sapiente error distinctio ipsum quam sunt inventore aliquid dolore dignissimos id minus quidem. Tempora quae architecto numquam itaque dolores eveniet non, sequi reprehenderit earum modi nam temporibus. Illo, fugiat deleniti. Qui, eius ea repudiandae tempora voluptatibus natus quos, fugit non distinctio provident quam eligendi soluta maiores. Beatae, nulla exercitationem quae quisquam rerum voluptates voluptas, labore maxime minima quasi laboriosam ipsam fugiat accusamus repudiandae aperiam dicta nesciunt tempore corrupti odit voluptate deleniti ducimus a aliquam. Temporibus quasi molestias nihil quibusdam quae, aspernatur saepe perferendis, soluta eaque placeat exercitationem possimus voluptates in doloremque molestiae hic illo mollitia autem. Dolores, omnis illum? Nihil, repudiandae eaque ut magni optio modi. Adipisci earum quae iure quis. Dignissimos.</p>
        <motion.div
            class="box mb-4"
            :initial="{ rotate: 0 }"
            :animate="{ rotate: 360 }"
            :transition="{ duration: 1 }"
        />
        <motion.div 
            class="w-[100px] h-[100px] bg-teal-400 rounded-md"
            :initial="{ scale: 1 }"
            :whileInView="{ scale: 1.5 }"
            :transition="{ type: 'spring' }"
        />
        <section class="m-8 border-2 p-4">
            <motion.svg
    width="600"
    height="600"
    viewBox="0 0 600 600"
    initial="hidden"
    animate="visible"
    :style="image"
  >
    <motion.circle
      class="circle-path"
      cx="100"
      cy="100"
      r="80"
      stroke="#ff0088"
      :variants="draw"
      :custom="1"
      :style="shape"
    />
    <motion.line
      x1="220"
      y1="30"
      x2="360"
      y2="170"
      stroke="#4ff0b7"
      :variants="draw"
      :custom="2"
      :style="shape"
    />
    <motion.line
      x1="220"
      y1="170"
      x2="360"
      y2="30"
      stroke="#4ff0b7"
      :variants="draw"
      :custom="2.5"
      :style="shape"
    />
    <motion.rect
      width="140"
      height="140"
      x="410"
      y="30"
      rx="20"
      stroke="#0d63f8"
      :variants="draw"
      :custom="3"
      :style="shape"
    />
    <motion.circle
      cx="100"
      cy="300"
      r="80"
      stroke="#0d63f8"
      :variants="draw"
      :custom="2"
      :style="shape"
    />
    <motion.line
      x1="220"
      y1="230"
      x2="360"
      y2="370"
      stroke="#ff0088"
      :custom="3"
      :variants="draw"
      :style="shape"
    />
    <motion.line
      x1="220"
      y1="370"
      x2="360"
      y2="230"
      stroke="#ff0088"
      :custom="3.5"
      :variants="draw"
      :style="shape"
    />
    <motion.rect
      width="140"
      height="140"
      x="410"
      y="230"
      rx="20"
      stroke="#4ff0b7"
      :custom="4"
      :variants="draw"
      :style="shape"
    />
    <motion.circle
      cx="100"
      cy="500"
      r="80"
      stroke="#4ff0b7"
      :variants="draw"
      :custom="3"
      :style="shape"
    />
    <motion.line
      x1="220"
      y1="430"
      x2="360"
      y2="570"
      stroke="#0d63f8"
      :variants="draw"
      :custom="4"
      :style="shape"
    />
    <motion.line
      x1="220"
      y1="570"
      x2="360"
      y2="430"
      stroke="#0d63f8"
      :variants="draw"
      :custom="4.5"
      :style="shape"
    />
    <motion.rect
      width="140"
      height="140"
      x="410"
      y="430"
      rx="20"
      stroke="#ff0088"
      :variants="draw"
      :custom="5"
      :style="shape"
    />
  </motion.svg>
        </section>
    </section>
</template>

<style lang="css" scoped>
.box {
    width: 100px;
    height: 100px;
    background-color: #0cdcf7;
    border-radius: 5px;
}
</style>