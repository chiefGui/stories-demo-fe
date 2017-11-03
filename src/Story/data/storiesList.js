import {
  FaLanguage,
  FaBook,
  FaPlane,
  FaSignOut,
  FaBriefcase
} from 'react-icons/lib/fa'

// Life icons
import IconHaircut from '../../Images/icons/hair-cut-tool.svg'
import IconPower from '../../Images/icons/power.svg'
import IconTravel from '../../Images/icons/travel.svg'
import IconSoloTravel from '../../Images/icons/hiker.svg'
import IconPaintHair from '../../Images/icons/hair-dye-kit.svg'
import IconWedding from '../../Images/icons/wedding-rings.svg'
import IconMegaphone from '../../Images/icons/megaphone.svg'
import IconFeedingADog from '../../Images/icons/feeding-a-dog.svg'
import IconDog from '../../Images/icons/dog.svg'
import IconCat from '../../Images/icons/cat.svg'

// Career icons
import IconUniversity from '../../Images/icons/school.svg'
import IconPhD from '../../Images/icons/mortarboard.svg'
import IconPromotion from '../../Images/icons/success.svg'
import IconHappy from '../../Images/icons/happy.svg'
import IconHandshake from '../../Images/icons/handshake.svg'
import IconTeacher from '../../Images/icons/teacher-teaching-with-a-stick.svg'

export default {
  life: [
    {
      label: 'Helped a street dog',
      payload: 'helped-a-street-dog',
      icon: IconFeedingADog
    },
    {
      label: 'Adopted a dog',
      payload: 'adopted-a-dog',
      icon: IconDog
    },
    {
      label: 'Adopted a cat',
      payload: 'adopted-a-cat',
      icon: IconCat
    },
    {
      label: 'Travelled alone for the first time',
      payload: 'travelled-alone-for-the-first-time',
      icon: IconSoloTravel
    },
    {
      label: 'Travelled to a different country for the first time',
      payload: 'traveleld-to-a-different-countr-for-the-first-time',
      icon: IconTravel
    },
    {
      label: 'Reported a sexual harassment occurance',
      payload: 'reported-a-sexual-harassment-occurance',
      icon: IconMegaphone
    },
    {
      label: 'Won a fight for a right',
      payload: 'won-a-fight-for-a-right',
      icon: IconPower
    },
    {
      label: 'Changed haircut',
      payload: 'changed-haircut',
      icon: IconHaircut
    },
    {
      label: 'Painted my hair',
      payload: 'painted-my-hair',
      icon: IconPaintHair
    },
    {
      label: 'Got married',
      payload: 'got-married',
      icon: IconWedding
    }
  ],

  career: [
    {
      label: 'Got a new mentor',
      payload: 'got-a-new-mentor',
      icon: IconTeacher
    },
    {
      label: 'Got a new job',
      payload: 'got-a-new-job',
      icon: FaBriefcase
    },
    {
      label: 'Got a promotion',
      payload: 'got-a-promotion',
      icon: IconPromotion
    },
    {
      label: 'Got my dream job',
      payload: 'got-my-dream-job',
      icon: IconHappy
    },
    {
      label: 'Closed a deal',
      payload: 'closed-a-deal',
      icon: IconHandshake
    },
    {
      label: 'Travelled for work for the first time',
      payload: 'travelled-for-work-for-the-first-time',
      icon: FaPlane
    },
    {
      label: 'Started university',
      payload: 'started-university',
      icon: IconUniversity
    },
    {
      label: 'Started Ph.D',
      payload: 'started-phd',
      icon: IconPhD
    },
    {
      label: 'Quit an oppressive job',
      payload: 'quit-an-oppressive-job',
      icon: FaSignOut
    },
    {
      label: 'Published a book',
      payload: 'published-a-book',
      icon: FaBook
    },
    {
      label: 'Started learning a new language',
      payload: 'started-learning-a-new-language',
      icon: FaLanguage
    }
  ]
}
