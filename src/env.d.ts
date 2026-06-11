/// <reference types="astro/client" />

type HugeIconData = readonly (readonly [string, { readonly [key: string]: string | number }])[]

declare module "@hugeicons/core-free-icons/*" {
  const icon: HugeIconData
  export default icon
}
