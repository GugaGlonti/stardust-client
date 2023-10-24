export const window = `
2xl:max-w-screen-2xl
xl:max-w-screen-xl
lg:max-w-screen-lg
md:max-w-screen-md
sm:max-w-screen-sm`;

export const removeText = Array.from({ length: 64 })
  .map(i => 'REMOVE /// REPLACE ///')
  .join('');
