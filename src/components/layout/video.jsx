// import { HeroVideoDialog } from "@/registry/magicui/hero-video-dialog"

// export function HeroVideoDialogDemoTopInBottomOut() {
//   return (
//     <div className="relative">
//       <HeroVideoDialog
//         className="block dark:hidden"
//         animationStyle="top-in-bottom-out"
//         videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
//         thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
//         thumbnailAlt="Hero Video"
//       />
//       <HeroVideoDialog
//         className="hidden dark:block"
//         animationStyle="top-in-bottom-out"
//         videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
//         thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
//         thumbnailAlt="Hero Video"
//       />
//     </div>
//   )
// }































import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export function Video() {
  return (
    <div className="min-h-screen text-black">
      {/* HERO SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-700">
            Build Faster with Me
            </h1>

            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
           See how our platform helps you create modern, user-friendly interfaces for fast food restaurants with ease
            </p>

        <HeroVideoDialog
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/UUR1Cnrf9kI"
          thumbnailSrc="https://i.ytimg.com/vi/0rSTtuKU0QM/hqdefault.jpg"
          thumbnailAlt="Product demo video"
          className="mx-auto max-w-3xl"
        />
      </section>
    </div>
  );
}


