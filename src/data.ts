export type SocialLink = {
  link?: string
  subLinks?: string[]
  title: string
  icon: string
}

export type Icon = {
  class: string
  link: string
}

export const icons: Icon[] = [
  {
    class: 'fas fa-envelope',
    link: 'http://youtube.com/ninja?sub_confirmation=1',
  },
  {
    class: 'fab fa-facebook',
    link: 'http://youtube.com/ninja?sub_confirmation=1',
  },
  {
    class: 'fab fa-tiktok',
    link: 'http://youtube.com/ninja?sub_confirmation=1',
  },
]

export const socialLinks: SocialLink[] = [
  {
    link: 'http://youtube.com/ninja?sub_confirmation=1',
    title: 'Ninja Gaming',
    icon: 'fab fa-youtube',
  },
  {
    link: 'http://youtube.com/ninja?sub_confirmation=1',
    title: 'Ninja Shorts',
    icon: 'fab fa-youtube',
  },
  {
    link: 'http://youtube.com/ninja?sub_confirmation=1',
    title: 'Instagram',
    icon: 'fab fa-instagram',
  },
  {
    link: 'http://youtube.com/ninja?sub_confirmation=1',
    title: 'Facebook',
    icon: 'fab fa-facebook',
  },
  {
    link: 'http://youtube.com/ninja?sub_confirmation=1',
    title: 'Twitter',
    icon: 'fab fa-twitter',
  },
  {
    subLinks: [
      'https://player.twitch.tv?allowfullscreen=true&autoplay=false&channel=ninja&height=350&layout=video-with-chat&parent=pillar.io&referrer=https%3A%2F%2Fpillar.io%2Fninja&theme=dark&width=100%25',
      'https://www.twitch.tv/embed/ninja/chat?parent=pillar.io&darkpopout',
    ],
    title: 'Twitch',
    icon: 'fab fa-twitch',
  },
  {
    link: 'http://youtube.com/ninja?sub_confirmation=1',
    title: 'TikTok',
    icon: 'fab fa-tiktok',
  },
  {
    link: 'http://youtube.com/ninja?sub_confirmation=1',
    title: 'Merch!',
    icon: 'fas fa-shopping-cart',
  },
  {
    link: 'http://youtube.com/ninja?sub_confirmation=1',
    title: 'Text Me!',
    icon: 'fas fa-mobile-alt',
  },
]
