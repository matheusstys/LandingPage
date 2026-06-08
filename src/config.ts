export const config = {
  name: 'Lucas Quaggio',
  whatsapp: '11975579185',   // só números: ex. 11999998888
  instagram: 'lucas.quaggio', // sem @: ex. matheusstys
  price: 'R$ 497',
  deliveryTime: '24 horas',
} as const

export type Config = typeof config

export const links = {
  whatsapp: (msg: string) =>
    `https://wa.me/55${config.whatsapp}?text=${encodeURIComponent(msg)}`,
  instagram: `https://instagram.com/${config.instagram}`,
} as const
