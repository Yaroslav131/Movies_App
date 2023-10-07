import { ImageProps } from 'react-native';
import { IMAGES } from '@assets/images';
import {
  FilmSession, LanguageDictionary, Seat,
} from '@/types';

export const SPONSERS_DATA: ImageProps[] = [IMAGES.marvelIcon, IMAGES.dcIcon, IMAGES.warnerIcon, IMAGES.netflixIcon];

export const languageDictionary: { en: LanguageDictionary, ru: LanguageDictionary } = {
  en: {
    SELECT_LANGUAGE: 'Select language',
    NOTIFICATIONS: 'NOTIFICATIONS',
    WELCOME_TEXT: 'Great Movies in the best cinema! We care about your comfort.',
    SIGNUP_CREATE_ACCOUNT_TEXT: 'Create an Account',
    SIGNIN_TEXT: 'Sign in to an account',
    SIGNIN_BUTTON_TEXT: 'Sign in',
    SIGNUP_BUTTON_TEXT: 'Sign Up',
    SIGNUP_CONTINUE_WITH_GOOGLE_TEXT: 'Continue with Google',
    SIGNUP_CONTINUE_WITH_FACEBOOK_TEXT: 'Continue with Facebook',
    SIGNUP_SIGNUP_WITH_GITHUB_TEXT: 'Sign up with GitHub',
    ALREADY_HAS_ACCOUNT_TEXT: 'Already has an account? ',
    LOGIN_TEXT: ' Login please.',
    VERSION_TEXT: '2023 Version 0.0.1.',
    CREATE_ACC_TEXT: 'Create an account',
    NAME_PLACE_HOLDER: 'Enter your name',
    SERNAME_PLACE_HOLDER: 'Enter your sername',
    EMAIL_PLACE_HOLDER: 'Enter your email',
    PASSWORD_PLACE_HOLDER: 'Enter your password',
    CREATE_PASSWORD_PLACE_HOLDER: 'Enter strong password',
    NAME_IS_REQUIRED: 'Name is required',
    EMAIL_IS_REQUIRED: 'Email is required',
    VALID_EMAIL: 'Please enter a valid email',
    PASSWORD_IS_REQUIRED: 'Password is required',
    PASSWORD_SMALL_LETTER: 'Password must have a lowercase letter',
    PASSWORD_CAPITAL_LETTER: 'Password must have an uppercase letter',
    PASSWORD_NUMBER: 'Password must have a number',
    PASSWORD_MIN_LENGTH: (min: number) => `Password must be at least ${min} characters`,
    PASSWORD_DIFFICULTY_TEXT: 'Password complexity:',
    COMING_SOON_TEXT: 'Coming Soon',
    NOW_SHOWING_TEXT: 'Now Showing',
    FILM_NAME: 'The Batman',
    BUY_TICKET: 'Tickets Available',
    GET_TICKET: 'Get Tickets',
    ABOUT: 'About',
    FILM_CATEGORIES: [
      { value: 'drama', label: 'Drama' },
      { value: 'comedy', label: 'Comedy' },
      { value: 'action', label: 'Action' },
      { value: 'fantasy', label: 'Fantasy' },
      { value: 'animation', label: 'Animation' },
    ],
    LESS_TEXT: 'less',
    MORE_TEXT: 'more',
    COMMENTS: 'Comments',
    COMMENT_IS_REQUIRED: 'Comment is required',
    COMMENT_PLACE_HOLDER: 'Your comment',
    COMMENT_TOO_LONG: 'Your comment too long',
    SEND: 'Send',
    BOKKING_HEADER_TEXT: 'Choose Cinema & Seats',
    SCHEDULE: 'Schedule',
    DATE: 'Date',
    CINEMA: 'Cinema',
    SEATS_AVAILABLE: 'Seats available',
    SEATS: 'Seats',
    SCREEN: 'Screen',
    SEAT_BUTTONS: ['Available', 'Reserved', 'Selected'],
    BOOK_NOW: 'Book Now',
    CHOOSE_DAY: 'Choose visiting day',
    SEARCH_MOVIE: 'Search movie in the top',
    GENRE: 'Genre',
    AUTHORS: 'Authors',
    MORE: 'More',
    READ_MORE_TEXT: 'Read more',
    TOO_LONG: 'Too long',
    FILTERS: 'FILTERS',
    YEAR: 'Year',
    RAITING: 'Raiting',
    DIRECTORS: 'Directors',
    SELECT_DIRECTORS: 'Select derector',
    GENRES: 'Genres',
    SELECT_GENRES: 'Select genre',
    RESET: 'RESET',
    FILM_RATING: "Film's rating",
    ACTORS: 'Actors',
    REVIEWS: 'REVIEWS',
    DELETE: 'Delete',
    BACK: 'Back',
    MONTH_NAMES: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ],
    EDIT_PROFILE_INFO: 'EDIT PROFILE INFO',
    SETTINGS: 'SETTINGS',
    PRIVATE_POLICY: 'PRIVATE POLICY',
    LOG_OUT: 'LOG OUT',
    CANCEL: 'Cancel',
    WHITE: 'WHITE',
    BLACK: 'BLACK',
    EDIT_PROFILE: 'Edit your profile',
    CHANGE_PERSONAL_DATE: 'Change your personal data',
    CHANGE_PASSWORD: 'Change your password',
    EDIT: 'Edit',
    ENTER_PASSWORD: 'Enter your current password',
    ENTER_NEW_PASSWORD: 'Enter new password',
    PASSWORD_NOT_CORRECT: 'Current password is not correct',
  },
  ru: {
    SELECT_LANGUAGE: 'Выберите язык',
    NOTIFICATIONS: 'Уведомления',
    WELCOME_TEXT: 'Отличные фильмы в лучшем кинотеатре! Мы заботимся о вашем комфорте.',
    SIGNUP_CREATE_ACCOUNT_TEXT: 'Создать аккаунт',
    SIGNIN_TEXT: 'Войти в аккаунт',
    SIGNIN_BUTTON_TEXT: 'Войти',
    SIGNUP_BUTTON_TEXT: 'Зарегистрироваться',
    SIGNUP_CONTINUE_WITH_GOOGLE_TEXT: 'Продолжить с Google',
    SIGNUP_CONTINUE_WITH_FACEBOOK_TEXT: 'Продолжить с Facebook',
    SIGNUP_SIGNUP_WITH_GITHUB_TEXT: 'Зарегистрироваться с помощью GitHub',
    ALREADY_HAS_ACCOUNT_TEXT: 'Уже есть аккаунт? ',
    LOGIN_TEXT: ' Пожалуйста, войдите.',
    VERSION_TEXT: 'Версия 2023 0.0.1.',
    CREATE_ACC_TEXT: 'Создать аккаунт',
    NAME_PLACE_HOLDER: 'Введите ваше имя',
    SERNAME_PLACE_HOLDER: 'Введите вашу фамилию',
    EMAIL_PLACE_HOLDER: 'Введите вашу почту',
    PASSWORD_PLACE_HOLDER: 'Введите ваш пароль',
    CREATE_PASSWORD_PLACE_HOLDER: 'Введите надежный пароль',
    NAME_IS_REQUIRED: 'Имя обязательно',
    EMAIL_IS_REQUIRED: 'Email обязателен',
    VALID_EMAIL: 'Пожалуйста, введите действительный email',
    PASSWORD_IS_REQUIRED: 'Пароль обязателен',
    PASSWORD_SMALL_LETTER: 'Пароль должен содержать строчную букву',
    PASSWORD_CAPITAL_LETTER: 'Пароль должен содержать заглавную букву',
    PASSWORD_NUMBER: 'Пароль должен содержать цифру',
    PASSWORD_MIN_LENGTH: (min: number) => `Пароль должен содержать не менее ${min} символов`,
    PASSWORD_DIFFICULTY_TEXT: 'Сложность пароля:',
    COMING_SOON_TEXT: 'Скоро в прокате',
    NOW_SHOWING_TEXT: 'Сейчас в прокате',
    FILM_NAME: 'Бэтмен',
    BUY_TICKET: 'Билеты доступны',
    GET_TICKET: 'Купить билет',
    ABOUT: 'О фильме',
    FILM_CATEGORIES: [
      { value: 'drama', label: 'Драма' },
      { value: 'comedy', label: 'Комедия' },
      { value: 'action', label: 'Экшен' },
      { value: 'fantasy', label: 'Фантастика' },
      { value: 'animation', label: 'Мультики' },
    ],
    LESS_TEXT: 'меньше',
    MORE_TEXT: 'больше',
    COMMENTS: 'Комментарии',
    COMMENT_IS_REQUIRED: 'Комментарий обязателен',
    COMMENT_PLACE_HOLDER: 'Ваш комментарий',
    COMMENT_TOO_LONG: 'Ваш комментарий слишком длинный',
    SEND: 'Отправить',
    BOKKING_HEADER_TEXT: 'Выберите кинотеатр и места',
    SCHEDULE: 'Расписание',
    DATE: 'Дата',
    CINEMA: 'Кинотеатр',
    SEATS_AVAILABLE: 'Доступные места',
    SEATS: 'Места',
    SCREEN: 'Экран',
    SEAT_BUTTONS: ['Available', 'Reserved', 'Selected'],
    BOOK_NOW: 'Забронировать сейчас',
    CHOOSE_DAY: 'Выберите день посещения',
    SEARCH_MOVIE: 'Поиск фильма в верхней части',
    GENRE: 'Жанр',
    AUTHORS: 'Авторы',
    MORE: 'Ещё',
    READ_MORE_TEXT: 'Подробнее',
    TOO_LONG: 'Слишком длинно',
    FILTERS: 'Фильтры',
    YEAR: 'Год',
    RAITING: 'Рейтинг',
    DIRECTORS: 'Режиссёры',
    SELECT_DIRECTORS: 'Выберите режиссёра',
    GENRES: 'Жанры',
    SELECT_GENRES: 'Выберите жанр',
    RESET: 'Сбросить',
    FILM_RATING: 'Рейтинг фильма',
    ACTORS: 'Актёры',
    REVIEWS: 'Отзывы',
    DELETE: 'Удалить',
    BACK: 'Назад',
    MONTH_NAMES: [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
    ],
    EDIT_PROFILE_INFO: 'ИЗМЕНИТЬ ПРОФИЛЬ',
    SETTINGS: 'НАСТРОЙКИ',
    PRIVATE_POLICY: 'КОНФИДЕЦИАЛЬНОСТЬ',
    LOG_OUT: 'ВЫЙТИ',
    CANCEL: 'Отмена',
    WHITE: 'БЕЛЫЙ',
    BLACK: 'ЧЕРНЫЙ',
    EDIT_PROFILE: 'Изменить профиль',
    CHANGE_PERSONAL_DATE: 'Изменить личные данные',
    CHANGE_PASSWORD: 'Изменить пароль',
    EDIT: 'Редактировать',
    ENTER_PASSWORD: 'Введите текущий пароль',
    ENTER_NEW_PASSWORD: 'Введите новый пароль',
    PASSWORD_NOT_CORRECT: 'Текущий пароль неверен',
  },
};

export const languages = [{ label: 'en', value: 'en' }, { label: 'ru', value: 'ru' }];
export const CURRENT_LANGUAGE = 'en';

export const OFF = 'OFF';
export const ON = 'ON';

export const MAX_REVIEWS_LENGTH = 200;
export const MIN_FILTER_YEAR = 1920;
export const MAX_FILTER_YEAR = new Date().getFullYear();
export const MIN_FILTER_RANING = 0;
export const MAX_FILTER_RANING = 10;

function formatDateToYYYYMMDD(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export const mockFilmSessions: FilmSession[] = [
  {
    id: '1',
    coast: 15,
    timeStart: '15:00',
    timeEnd: '17:00',
    date: formatDateToYYYYMMDD(new Date()),
    cinema: 'Cinema City',
    seats: generateSeats(7, 8),
  },
  {
    id: '2',
    coast: 15,
    timeStart: '18:30',
    timeEnd: '20:30',
    date: formatDateToYYYYMMDD(new Date()),
    cinema: 'Movieplex',
    seats: generateSeats(7, 8),
  },
];

function generateSeats(rows: number, seatsPerRow: number): Seat[] {
  const seats: Seat[] = [];
  for (let row = 1; row <= rows; row++) {
    for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber++) {
      seats.push({
        isAvailable: true,
        row,
        ticketId: '',
        seatNumber,
      });
    }
  }
  return seats;
}

export const USER_ID = 'fszMoiKgD1WnxjAazWhI4dVuvGB2';
export const NATIFICATIONS_DELAY = 12;

export const PRIVATE_POLICY_URI = 'https://www.modsen-software.com/';
export const MAX_SYNOPSIS_LENGTH = 50;

export const fetchDataByCategoryData = [
  {
    genre: [
      'Action',
      'Comedy',
      'Thriller',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMWMzYWE2NDgtN2JiMy00MTZlLWJhODktYzBmMDg4NjUwYTYxXkEyXkFqcGdeQXVyNTM1Mzk2ODI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt6244266',
    imdbrating: 7.8,
    released: 2020,
    synopsis: 'Two days after the 2016 U.S. Presidential Election, a young careerist is abducted by an at-large intelligence operative carrying a mysterious briefcase, while being hotly pursued by a driven agency director and her dull-witted team.',
    title: 'Counterintelligence',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Thriller',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMmUyYTU5MjItMGNhOC00ZGFhLTkwYjctMjBmNTlkOTIzYmM1XkEyXkFqcGdeQXVyOTUyOTM3MDc@._V1_UY268_CR110,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt9286908',
    imdbrating: 7.6,
    released: 2020,
    synopsis: 'In a bid to save the last of his family, Gutjuk, a young Aboriginal man, teams up with ex-soldier Travis to track down Baywara, the most dangerous warrior in the Territory, his uncle.',
    title: 'High Ground',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Adventure',
      'Animation',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt9580138',
    imdbrating: 7.5,
    released: 2020,
    synopsis: 'Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones.',
    title: "Mortal Kombat Legends: Scorpion's Revenge",
    type: 'movie',
  },
  {
    genre: [
      'Action',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMjM5NjY3ODU5Nl5BMl5BanBnXkFtZTgwMDQ0NjEzNTE@._V1_UY268_CR3,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt2766800',
    imdbrating: 7.4,
    released: 2020,
    synopsis: 'The life of Grainne Uaile, the 16th century Pirate Queen from Ireland.',
    title: 'Grainne Uaile: The Movie',
    type: 'movie',
  },
  {
    genre: [
      'Action',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BZjA3YmI2YzgtYzkzNi00MTM1LWJhNTAtZjg0ZDQyYjliYzMyXkEyXkFqcGdeQXVyMzM0OTc4NQ@@._V1_UY268_CR16,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt5518714',
    imdbrating: 7.4,
    released: 2020,
    synopsis: 'Ratnik, is the story of a World War III soldier returning home after a quarterly phase rotation programme, only to find out that her home front has now descended into some kind of chaos. ...',
    title: 'Ratnik',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Comedy',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BZDk4ZDM0YmQtOTRjMC00MmYyLTgyZjAtNzE3YzVhZWM3MmMzXkEyXkFqcGdeQXVyMTEyOTgxMDA5._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt11690838',
    imdbrating: 7.3,
    released: 2020,
    synopsis: "Fritz, a young Tongan man grappling with his wrestling superstar father Baron To'a's legacy, both metaphorically and literally following in his deceased father's footsteps by fighting for the return of his dad's stolen championship belt.",
    title: "The Legend of Baron To'a",
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Sci-Fi',
      'Thriller',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMjlkZTJjMDQtMzI1My00YmViLWE0M2ItZTEwMzk1NDhlNDkwXkEyXkFqcGdeQXVyMzgxODI0MTk@._V1_UY268_CR1,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt7638348',
    imdbrating: 7.2,
    released: 2020,
    synopsis: 'A retired special forces officer is trapped in a never ending time loop on the day of his death.',
    title: 'Boss Level',
    type: 'movie',
  },
  {
    genre: [
      'Action',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BOTlkOTk1ZGQtMDM0Yi00OTQ5LWE3MDEtOGMxMTg3YjEwOTIyXkEyXkFqcGdeQXVyMjUxMzU3MTM@._V1_UY268_CR10,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt6984230',
    imdbrating: 7.2,
    released: 2020,
    synopsis: "Top special agent Lucinda Kavsky works for a secret part of the CIA. She's given a special assignment but then set up by her own agency.",
    title: 'The Serpent',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Horror',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BNGNhZTk5M2MtMzUzYy00NmZkLTljZmItZTU5MDU4Y2M0N2I4XkEyXkFqcGdeQXVyMjM1NTY3Njk@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt5654204',
    imdbrating: 7.2,
    released: 2020,
    synopsis: 'A romantic spring getaway turns sinister when unexpected visitors join the party in a high-tech house that no one can escape.',
    title: '#Slaughterhouse',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Adventure',
      'Drama',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMDdiM2UwYTctYmRlZi00YmE4LTlhZTAtODhmYjFiMGFlMDcyXkEyXkFqcGdeQXVyMTQ2OTU2OTQ@._V1_UY268_CR5,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt3380766',
    imdbrating: 7.2,
    released: 2020,
    synopsis: "King's Gambit is an Independent, live-action feature film set in present-day Florida about Bryce, a man who uses a mystic journal to alter the world around him.",
    title: "King's Gambit",
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Drama',
      'History',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BZTFkZjYxNWItZmE2MC00MGE4LWIxYTgtZmIzOWM1YmI2YWEzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt6048922',
    imdbrating: 7.1,
    released: 2020,
    synopsis: 'Early in World War II, an inexperienced U.S. Navy captain must lead an Allied convoy being stalked by Nazi U-boat wolfpacks.',
    title: 'Greyhound',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Horror',
      'Thriller',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BODAzZDc2NGEtODZmMS00YWE5LWIxZmEtZWRiMzI1MzgwNjVmXkEyXkFqcGdeQXVyOTA2OTEwNA@@._V1_UY268_CR4,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt10126136',
    imdbrating: 7.1,
    released: 2020,
    synopsis: "Elite military personnel Caitlin Ross retires from service after suffering from PTSD. Along with former team member and close friend Brad Johnson, they opted for the 'easy life' and now ...",
    title: 'Tribal Get Out Alive',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Comedy',
      'Mystery',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BOTdhMDY2OWQtZDBjOC00ZTJiLTkzMTktODA3MDJkMTJkOGJkXkEyXkFqcGdeQXVyNjkzMzA2Njk@._V1_UY268_CR5,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt10370822',
    imdbrating: 7.1,
    released: 2020,
    synopsis: 'A major crime occurs in Tokyo when detectives Tang Ren and Qin Feng are invited to investigate the crime by Noda Hiroshi. A battle between the strongest detectives in Asia is about to break out with bursts of laughter.',
    title: 'Detective Chinatown 3',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Drama',
      'Thriller',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BYTA3MDRlMzgtM2RjMS00MTgwLTgyNzktNmVhN2M2OGQwODg0XkEyXkFqcGdeQXVyMzcwMjQzMw@@._V1_UY268_CR9,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt10820008',
    imdbrating: 6.9,
    released: 2020,
    synopsis: 'An idealistic woman is kidnapped and forced to compete in an underground fight ring. Every night is a fight for her life as she plans to overthrow her captors and save the lives of many others doomed to the same endless cycle.',
    title: 'Unchained',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Horror',
      'Sport',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BOTE3MzRkODctZjJmNi00NTI1LTk3NmItZTMxNzg2NWJkZDBiXkEyXkFqcGdeQXVyNjQyNjgwNjU@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt7397552',
    imdbrating: 6.8,
    released: 2020,
    synopsis: '',
    title: 'Adrenaline Rush',
    type: 'movie',
  },
  {
    genre: [
      'Action',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMjllMzgyMWQtMWM1Mi00OGQyLThlYjItNTJjNzE0ZWVhMjRmXkEyXkFqcGdeQXVyMTExMjM4OTQ@._V1_UY268_CR110,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt8365306',
    imdbrating: 6.8,
    released: 2020,
    synopsis: 'An ex-convict released from prison comes to the aid of a young prostitute from a gang. He has one day to stay out of trouble before he leaves to start his new life. As events accelerate out...',
    title: 'Relentless',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Thriller',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt8936646',
    imdbrating: 6.7,
    released: 2020,
    synopsis: "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
    title: 'Extraction',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Thriller',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMzcyMzU4MDUtM2JhOC00ZDg2LTg5MGMtZjc2OGMyMjhlMGE2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt7737786',
    imdbrating: 6.7,
    released: 2020,
    synopsis: 'A family struggles for survival in the face of a cataclysmic natural disaster.',
    title: 'Greenland',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Adventure',
      'Fantasy',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt7556122',
    imdbrating: 6.7,
    released: 2020,
    synopsis: 'A covert team of immortal mercenaries are suddenly exposed and must now fight to keep their identity a secret just as an unexpected new member is discovered.',
    title: 'The Old Guard',
    type: 'movie',
  },
  {
    genre: [
      'Action',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BOGMxNDZmYzQtMTE5Ny00NDAxLWE0OTYtMjVhODcwMWViN2MxXkEyXkFqcGdeQXVyMjYwODI4Mw@@._V1_UY268_CR4,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt6458744',
    imdbrating: 6.7,
    released: 2020,
    synopsis: "'In the year 2035, survivors of a now almost completely evacuated post-apocalyptic Britain compete for a government bounty to retrieve a mysterious bio weapon known only as Unit Eleven...'",
    title: 'Unit Eleven',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Drama',
      'History',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BNWYyMzNjY2EtODVmYi00ODBmLWIyNGMtNDdhMGViY2RhNjcxXkEyXkFqcGdeQXVyNDExMzMxNjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt3833480',
    imdbrating: 6.7,
    released: 2020,
    synopsis: 'A small team of U.S. soldiers battle against hundreds of Taliban fighters in Afghanistan.',
    title: 'The Outpost',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Drama',
      'Thriller',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BNmZkNmU3ODItNWE1Yi00ZDA4LTk1M2EtMDlkOGQ3YTk0ZmIzXkEyXkFqcGdeQXVyMTM5MjI4Mjc@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt8332454',
    imdbrating: 6.6,
    released: 2020,
    synopsis: 'A small town community comes together to eradicate the heroin epidemic from its midst by whatever means necessary.',
    title: 'Shooting Heroin',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Comedy',
      'Crime',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt1502397',
    imdbrating: 6.6,
    released: 2020,
    synopsis: 'Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.',
    title: 'Bad Boys for Life',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Adventure',
      'Comedy',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt3794354',
    imdbrating: 6.6,
    released: 2020,
    synopsis: 'After discovering a small, blue, fast hedgehog, a small-town police officer must help him defeat an evil genius who wants to do experiments on him.',
    title: 'Sonic the Hedgehog',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Horror',
      'Thriller',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BNjg4MjRhZjgtNTIxOS00MmRjLTg4NTEtNjBkNzkwZjAxMjMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt8244784',
    imdbrating: 6.5,
    released: 2020,
    synopsis: "Twelve strangers wake up in a clearing. They don't know where they are, or how they got there. They don't know they've been chosen - for a very specific purpose - The Hunt.",
    title: 'The Hunt',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Comedy',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BZjk0ZTk4OTQtYWYyZC00MTU5LTkxMjQtZDRlYjRkN2Y3ZjA5XkEyXkFqcGdeQXVyOTA1MDE3OA@@._V1_UY268_CR4,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt11041352',
    imdbrating: 6.5,
    released: 2020,
    synopsis: "An American action star from the 90's is shooting a movie in Bulgaria, while three of his (now grown up) fans try to meet their childhood idol. After a series of bad decisions, the three ...",
    title: 'Action',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Adventure',
      'Animation',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BZWY2MDEzNjYtOWVlMC00MGYzLWFhNjUtMTAzZTQ4MmQ3N2U4XkEyXkFqcGdeQXVyOTMwNjU3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt10841384',
    imdbrating: 6.4,
    released: 2020,
    synopsis: 'A group of brave superheroes has to come together to save the multiverse from evil terrorist birds.',
    title: 'The Forevers',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Comedy',
      'Family',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BNzMyOWRjYjUtMjc2OC00MWUyLWEzODktYWZlZDYxYjk4MDViXkEyXkFqcGdeQXVyODE0OTU5Nzg@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt8242084',
    imdbrating: 6.3,
    released: 2020,
    synopsis: 'A hardened CIA operative finds himself at the mercy of a precocious 9-year-old girl, having been sent undercover to surveil her family.',
    title: 'My Spy',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Comedy',
      'Crime',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMTdkOTEwYjMtNDA1YS00YzVlLTg0NWUtMmQzNDZhYWUxZmIyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt8629748',
    imdbrating: 6.2,
    released: 2020,
    synopsis: 'When two Boston police officers are murdered, ex-cop Spenser teams up with his no-nonsense roommate, Hawk, to take down criminals.',
    title: 'Spenser Confidential',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Thriller',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BZTI0ZGIxZTEtMWQxMi00MDVhLWFmNWQtNmU5ZWNhYjJmYjJkXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt10059518',
    imdbrating: 6.2,
    released: 2020,
    synopsis: 'After a confrontation with an unstable man at an intersection, a woman becomes the target of his rage.',
    title: 'Unhinged',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Adventure',
      'Crime',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMzQ3NTQxMjItODBjYi00YzUzLWE1NzQtZTBlY2Y2NjZlNzkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt7713068',
    imdbrating: 6.1,
    released: 2020,
    synopsis: 'After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.',
    title: 'Harley Quinn: Birds of Prey',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Crime',
      'Thriller',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BYjE2MjIwMmYtM2ZiMy00MzdmLTkyNTYtNmFiNjM5MDJhMGVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt7149730',
    imdbrating: 6.1,
    released: 2020,
    synopsis: 'A reformed hunter living in isolation on a wildlife sanctuary becomes involved in a deadly game of cat and mouse when he and the local Sheriff set out to track a vicious killer who may have kidnapped his daughter years ago.',
    title: 'The Silencing',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Comedy',
      'Crime',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BNzU1ZTE4YzAtOWNkYi00YWE4LThmY2YtMDNlYzU2ZTgxYTc2XkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt8851668',
    imdbrating: 6,
    released: 2020,
    synopsis: 'A couple (Issa Rae and Kumail Nanjiani) experiences a defining moment in their relationship when they are unintentionally embroiled in a murder mystery.',
    title: 'The Lovebirds',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Crime',
      'Sci-Fi',
    ],
    imageurl: [],
    imdbid: 'tt7550000',
    imdbrating: 6,
    released: 2020,
    synopsis: 'When a pill that gives its users unpredictable superpowers for five minutes hits the streets of New Orleans, a teenage dealer and a local cop must team with an ex-soldier to take down the group responsible for its creation.',
    title: 'Project Power',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Adventure',
      'Sci-Fi',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BZTE5MzE4ODMtOTAyMS00YTI1LWJlOTEtNTg3NTQ4ZTQ4ZDM0XkEyXkFqcGdeQXVyMzA5MDU4ODg@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt7018506',
    imdbrating: 7.8,
    released: 2019,
    synopsis: 'When the electromagnet super-powered hero known as, Static and his tech-savvy partner, Gear face off against the power-pulsing Boom, they also uncover a darker plan in the works by a most sinister of villains.',
    title: 'Static: Dawn of the Meta-Breed',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Biography',
      'Documentary',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BZjQzNTljMDMtYjk4OC00NDlmLWEzYmItYjY0ZmQ2NTRkYjhhXkEyXkFqcGdeQXVyOTg5Nzg2Mg@@._V1_UY268_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt10728282',
    imdbrating: 7.8,
    released: 2019,
    synopsis: 'The groundbreaking and often game-changing reporting of legendary foreign correspondent and author Robert Fisk is profiled in the latest from acclaimed documentarian Yung Chang (Up the Yangtze).',
    title: 'This Is Not a Movie',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Adventure',
      'Animation',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BM2MxY2QwYTAtMDM1My00MTc0LWEwZjktMDdjODY2NWJiNDg2XkEyXkFqcGdeQXVyODY3ODQ2MTk@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt9430698',
    imdbrating: 7.7,
    released: 2019,
    synopsis: "Pirates from around the world gather at the Pirates Expo to join the hunt for Gol D. Roger's lost treasure.",
    title: 'One Piece: Stampede',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Biography',
      'Drama',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMDA4MTBiYWQtYWQ5Zi00MDU5LWEwYTUtNzJmN2JmYzZhYTQ4XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY268_CR2,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt10011102',
    imdbrating: 7.7,
    released: 2019,
    synopsis: "The journey of Indian film industry's first stunt woman Reshma Pathan, it will trace the life of Reshma and her stint in movies as a body double for various actresses. Bidita Bag plays the lead role of feisty stunt-woman.",
    title: 'The Sholay Girl',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Crime',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BOWEyOWFjMTQtOGQxMC00NWI5LTgxNDktMDhhNDhiMTBhMzMzXkEyXkFqcGdeQXVyODQ3MDAxNTg@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt7981144',
    imdbrating: 7.6,
    released: 2019,
    synopsis: 'An ex drug dealer known by his street name D Stacks (Maurice McFadden) is on the quest to get revenge for the murders of his family. His best friend Q (Shawn Washington) is always by his ...',
    title: 'EyeCon',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Sci-Fi',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BM2M3Y2MzZjAtOTNlYS00ZGJkLWE1MjItMGYzMDgyYzRiNDBhXkEyXkFqcGdeQXVyMDczOTUwOA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt8325786',
    imdbrating: 7.5,
    released: 2019,
    synopsis: "IN OUR future, one simple breath could mean life or death. As we search for a solution, pollution engulfs our world. If we don't find an answer fast, all living things shall perish. We are ...",
    title: 'Wu Xia 2 the Code',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Adventure',
      'Sci-Fi',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt6320628',
    imdbrating: 7.5,
    released: 2019,
    synopsis: 'Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.',
    title: 'Spider-Man: Far from Home',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Crime',
      'Thriller',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt6146586',
    imdbrating: 7.5,
    released: 2019,
    synopsis: "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    title: 'John Wick: Chapter 3 - Parabellum',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Adventure',
      'Animation',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt2386490',
    imdbrating: 7.5,
    released: 2019,
    synopsis: "When Hiccup discovers Toothless isn't the only Night Fury, he must seek \"The Hidden World\", a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.",
    title: 'How to Train Your Dragon: The Hidden World',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Adventure',
      'Animation',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BY2E4MGUwMmUtNzUxMS00Y2MyLTg5NmItNTU1MTMwZjYxNTlkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt10627720',
    imdbrating: 7.5,
    released: 2019,
    synopsis: 'Born with unique powers, a boy is recruited to fight demons and save the community that fears him.',
    title: 'Ne Zha',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Crime',
      'Drama',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BYzE1ZTRkZDgtNTUyOS00MzRmLWE4NzUtZGNmZDgxOWI3Mzc4XkEyXkFqcGdeQXVyMzc4ODY4MTk@._V1_UY268_CR4,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt10264732',
    imdbrating: 7.5,
    released: 2019,
    synopsis: "'Muna' is the story of a spirited girl raised by her grandmother; the last surviving member of their family. Muna's driving desire to provide a better life for herself and grandmother in ...",
    title: 'Muna',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Adventure',
      'Animation',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BZTYyY2NlMzktZWE4Yi00ZjkxLWJjZGItNTgyMDU3YTc4MTlkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt6739094',
    imdbrating: 7.5,
    released: 2019,
    synopsis: 'ZIM discovers his almighty leaders never had any intention of coming to Earth and he loses confidence in himself for the first time in his life, which is the big break his human nemesis, Dib has been waiting for.',
    title: 'Invader ZIM: Enter the Florpus',
    type: 'tvMovie',
  },
  {
    genre: [
      'Action',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BMGQ2NTU3YzctYTAxZS00NTY3LWFjNzktYzI5MDAwMzBjOGFmXkEyXkFqcGdeQXVyMjI1MDQzNzI@._V1_UY268_CR16,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt1988832',
    imdbrating: 7.4,
    released: 2019,
    synopsis: "A scientist is targeted by an unlimited amount of contract killers for reasons he doesn't know.",
    title: "Assassins' Contract",
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Sci-Fi',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BZWM2YmEzYzctNTkxMi00MzA3LTg5YWQtNzc3ZDA1NGE0NjYzXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt11905336',
    imdbrating: 7.4,
    released: 2019,
    synopsis: 'Emperor Palpatine dispatches a legion of imperial stormtroopers to the forest planet of Cilpar to retrieve a valuable asset.',
    title: 'Star Wars: Hand of the Empire',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Adventure',
      'Comedy',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BNjNiYzEzNGMtZGE3My00NDhiLWJlNDctZjNmMzIwNDk5NzA1XkEyXkFqcGdeQXVyMTAyNDM2NTYw._V1_UY268_CR3,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt10791138',
    imdbrating: 7.4,
    released: 2019,
    synopsis: 'Maks Fadeev, the young journalist, investigate the case "Forest of the dead sharks". He return to the forest for save the world, because evil became the invasion at the Earth.',
    title: 'Murders in the forest of the dead sharks',
    type: 'movie',
  },
  {
    genre: [
      'Action',
      'Thriller',
    ],
    imageurl: [
      'https://m.media-amazon.com/images/M/MV5BNDExYmMwMzktYTY2YS00NGQ2LWFkOTgtNWE1OTJjNGNkN2JkXkEyXkFqcGdeQXVyMjExMDE1MzQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
    ],
    imdbid: 'tt10773408',
    imdbrating: 7.4,
    released: 2019,
    synopsis: 'Recovering from the attempt on his life, Jack Stone sets his sights on his former boss and most trusted ally; General Howard Doyle, the man now known to be the founder of the Vortex crime ...',
    title: 'Jack Stone: End of the Line',
    type: 'movie',
  },
];

export const top100FilmsDate = [
  {
    rank: 1,
    title: 'The Shawshank Redemption',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg',
    rating: '9.3',
    id: 'top1',
    year: 1994,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    trailer: 'https://www.youtube.com/embed/NmzuHjWmXOc',
    genre: ['Drama'],
    director: ['Frank Darabont'],
    writers: [
      "Stephen King (based on the short novel 'Rita Hayworth and the Shawshank Redemption' by)",
      'Frank Darabont (screenplay by)',
    ],
    imdbid: 'tt0111161',
  },
  {
    rank: 2,
    title: 'The Godfather',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
    rating: '9.2',
    id: 'top2',
    year: 1972,
    image:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    trailer: 'https://www.youtube.com/embed/sY1S34973zA',
    genre: ['Crime', 'Drama'],
    director: ['Francis Ford Coppola'],
    writers: ['Mario Puzo (screenplay by)', 'Francis Ford Coppola (screenplay by)'],
    imdbid: 'tt0068646',
  },
  {
    rank: 1,
    title: 'The Shawshank Redemption',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg',
    rating: '9.3',
    id: 'top1',
    year: 1994,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    trailer: 'https://www.youtube.com/embed/NmzuHjWmXOc',
    genre: ['Drama'],
    director: ['Frank Darabont'],
    writers: [
      "Stephen King (based on the short novel 'Rita Hayworth and the Shawshank Redemption' by)",
      'Frank Darabont (screenplay by)',
    ],
    imdbid: 'tt0111161',
  },
  {
    rank: 2,
    title: 'The Godfather',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
    rating: '9.2',
    id: 'top2',
    year: 1972,
    image:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    trailer: 'https://www.youtube.com/embed/sY1S34973zA',
    genre: ['Crime', 'Drama'],
    director: ['Francis Ford Coppola'],
    writers: ['Mario Puzo (screenplay by)', 'Francis Ford Coppola (screenplay by)'],
    imdbid: 'tt0068646',
  }, {
    rank: 1,
    title: 'The Shawshank Redemption',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg',
    rating: '9.3',
    id: 'top1',
    year: 1994,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    trailer: 'https://www.youtube.com/embed/NmzuHjWmXOc',
    genre: ['Drama'],
    director: ['Frank Darabont'],
    writers: [
      "Stephen King (based on the short novel 'Rita Hayworth and the Shawshank Redemption' by)",
      'Frank Darabont (screenplay by)',
    ],
    imdbid: 'tt0111161',
  },
  {
    rank: 2,
    title: 'The Godfather',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
    rating: '9.2',
    id: 'top2',
    year: 1972,
    image:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    trailer: 'https://www.youtube.com/embed/sY1S34973zA',
    genre: ['Crime', 'Drama'],
    director: ['Francis Ford Coppola'],
    writers: ['Mario Puzo (screenplay by)', 'Francis Ford Coppola (screenplay by)'],
    imdbid: 'tt0068646',
  }, {
    rank: 1,
    title: 'The Shawshank Redemption',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg',
    rating: '9.3',
    id: 'top1',
    year: 1994,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    trailer: 'https://www.youtube.com/embed/NmzuHjWmXOc',
    genre: ['Drama'],
    director: ['Frank Darabont'],
    writers: [
      "Stephen King (based on the short novel 'Rita Hayworth and the Shawshank Redemption' by)",
      'Frank Darabont (screenplay by)',
    ],
    imdbid: 'tt0111161',
  },
  {
    rank: 2,
    title: 'The Godfather',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
    rating: '9.2',
    id: 'top2',
    year: 1972,
    image:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    trailer: 'https://www.youtube.com/embed/sY1S34973zA',
    genre: ['Crime', 'Drama'],
    director: ['Francis Ford Coppola'],
    writers: ['Mario Puzo (screenplay by)', 'Francis Ford Coppola (screenplay by)'],
    imdbid: 'tt0068646',
  }, {
    rank: 1,
    title: 'The Shawshank Redemption',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg',
    rating: '9.3',
    id: 'top1',
    year: 1994,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    trailer: 'https://www.youtube.com/embed/NmzuHjWmXOc',
    genre: ['Drama'],
    director: ['Frank Darabont'],
    writers: [
      "Stephen King (based on the short novel 'Rita Hayworth and the Shawshank Redemption' by)",
      'Frank Darabont (screenplay by)',
    ],
    imdbid: 'tt0111161',
  },
  {
    rank: 2,
    title: 'The Godfather',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
    rating: '9.2',
    id: 'top2',
    year: 1972,
    image:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    trailer: 'https://www.youtube.com/embed/sY1S34973zA',
    genre: ['Crime', 'Drama'],
    director: ['Francis Ford Coppola'],
    writers: ['Mario Puzo (screenplay by)', 'Francis Ford Coppola (screenplay by)'],
    imdbid: 'tt0068646',
  },
];

export const movieInfoDate = {
  imdbid: 'tt7286456',
  numVotes: 849733,
  people: [
    {
      category: 'producer',
      characters: null,
      job: 'producer',
      peopleid: 'nm0177896',
    },
    {
      category: 'actor',
      characters: [
        'Arthur Fleck',
      ],
      job: null,
      peopleid: 'nm0001618',
    },
    {
      category: 'actress',
      characters: [
        'Sophie Dumond',
      ],
      job: null,
      peopleid: 'nm5939164',
    },
    {
      category: 'actress',
      characters: [
        'Penny Fleck',
      ],
      job: null,
      peopleid: 'nm0175814',
    },
    {
      category: 'director',
      characters: null,
      job: null,
      peopleid: 'nm0680846',
    },
    {
      category: 'writer',
      characters: null,
      job: 'written by',
      peopleid: 'nm0798788',
    },
    {
      category: 'writer',
      characters: null,
      job: 'based on characters created by',
      peopleid: 'nm0004170',
    },
    {
      category: 'writer',
      characters: null,
      job: 'based on characters created by',
      peopleid: 'nm0277730',
    },
    {
      category: 'writer',
      characters: null,
      job: 'based on characters created by',
      peopleid: 'nm1047603',
    },
    {
      category: 'actor',
      characters: [
        'Murray Franklin',
      ],
      job: null,
      peopleid: 'nm0000134',
    },
  ],
  plotSummary: "\n            The story takes place in Gotham City, 1981.Arthur Fleck (Joaquin Phoenix) works as a clown-for-hire for a company called Ha-Ha's. He struggles with severe depression personally but finds some form of optimism in performing for others and trying to make people laugh. He is tasked with advertising a store by dancing and waving a sign around. On one such occasion, the sign gets snatched by a group of punk teens, forcing Arthur to chase them into an alley. They smash the sign against his face and proceed to mercilessly kick him while he's down.In this era, Gotham is struggling with crime, unemployment, and poverty. Arthur visits a social worker for his medication, as well as his ongoing mental health issues. On the bus ride home, a small child looks at Arthur. He makes silly faces that amuse the boy, but his mother tells Arthur to leave him alone. Arthur begins to laugh hysterically and uncontrollably. When the mother questions him, he hands her a card that explains that he has a mental condition that causes him to laugh the way that he does.Arthur returns home to a high-rise apartment project, where he lives with his ailing mother, Penny (Frances Conroy). After dinner, they sit and watch a TV talk show with host Murray Franklin (Robert DeNiro). Arthur imagines himself being on the show and getting Murray's attention. In his fantasy, Arthur charms the audience and Murray by telling them that he takes care of his mother. Murray relates to Arthur and invites him up on stage in front of everyone, where they share a familial embrace. It is revealed that Penny used to work for Thomas Wayne (Brett Cullen) and is obsessed with the millionaire and has been currently writing to him to try and better their living situation.At Ha-Ha's, Arthur is given a gun for protection by his co-worker Randall (Glenn Fleschler) after he hears about the mugging incident. Arthur is both reluctant and relieved to receive such a gift as firearms are outlawed at work but soon finds his confidence growing after receiving the weapon. However, soon after this, he is confronted by his cold and unfeeling boss, who reprimands him for losing the sign and takes the cost of it out of his pay. Arthur responds only by smiling bitterly.Arthur meets and becomes infatuated with one of his neighbors, a single mother named Sophie Dumond (Zazie Beetz). She speaks to him politely about relating issues that he can relate to. However, while trying to make an impression with her, he appears awkward and weird around her. At one point, he spends his day following her. Later, she comes by his apartment and asks if he was following her, and he admits that he was, but she doesn't seem put off by it. He invites her to a stand-up comedy show that he is performing at. She is hesitant but is won over by his charm and sense of humor. Arthur watches comedians perform to help him gain some insight into the craft, but feels more awkward and out of place as his over-the-top laughter is not genuine.Arthur goes to the comedy club for his performance. His nervousness consumes him and, as a coping mechanism, unintentionally finds himself laughing so hard that he can barely speak. He then begins going off into his routine, which isn't very funny. Sophie appears to be in the audience... the only person who is laughing at Arthur's jokes. This gives him the comfort he needs to continue to joke despite his inner torment and turmoil.Arthur later goes to a children's hospital to entertain them as a clown. He brought his gun with him, and it falls out on the floor. Arthur's boss later chews him out for this. Arthur pleads for a second chance, but his boss refuses and fires him on the spot. To top things off, Randall throws Arthur under the bus by claiming that Arthur got the gun himself. On the subway train ride home from Ha-Ha's in full clown getup, Arthur spots three drunk young Wall Street types working for Wayne Enterprises harassing a woman. Arthur starts laughing unintentionally and draws the attention of the men, while the woman wisely flees from that car. The men approach Arthur and mock him and his laughter before they start to beat him. Arthur fights back in self-defense, but they team up, and relentlessly beat him to the floor. Having had enough, Arthur then pulls out his gun and shoots two of them dead in self-defense before following the last guy out of the train and murdering him on the stairs.In shock over what he just did, Arthur retreats into a nearby public men's room. After a moment of frantic contemplation, he finds a force rising within him, and he begins to dance by himself. At this moment, he sees himself in the dirty mirror as a battered and smeared and yet powerful clown and begins to embrace it. He hides the gun and then returns to the apartment where he meets and kisses Sophie for the first time.The news of the three murders spreads, with some seeing it as an attack on the wealthy, while others support the act. Thomas Wayne speaks out and condemns it, labeling the lower class as \"clowns,\" which becomes a symbol they readily embrace. The next day, Arthur cleans out his locker at Ha Ha's but not before confronting Randall about betraying him and breaking the time punching machine. He then leaves, feeling high-spirited and free. News reports show clown rioters protesting through the city and wreaking trouble, condemning the higher privileged. Arthur sees that he has inadvertently caused this and begins to see his true potential, which makes him genuinely delighted.Arthur later finds one of Penny's letters to Thomas, which indicates that Arthur is Thomas' son. Arthur goes to Wayne Manor, where he meets young Bruce Wayne (Dante Pereira-Olson). After performing a magic trick for Bruce, he sticks his hands through the gate and forces Bruce to smile, realizing deep within that they may or may not be brothers. However, Alfred (Douglas Hodge) comes to intervene and tell Arthur to leave. Arthur mentions his mother and her involvement with Thomas. Alfred says he remembers Penny, but that she was lying to him. Arthur attacks and nearly strangles Alfred through the bars but then notices that Bruce is watching. Arthur then gets hold of himself and flees the Wayne premises.That evening, Arthur finds Thomas at a public art theater event. Arthur infiltrates the theater by impersonating an usher. He follows Thomas Wayne into a men's room and tries to confront him with the potential of him being his father. Arthur mentions Penny, whom Thomas also remembers. He says she was delusional and that there's no way Arthur could be his son. Thomas also explains that Penny never told Arthur that he was adopted, which Arthur strongly rejects before uncontrollably laughing in Thomas's face. Thomas, unaware of Arthur's condition, becomes defensive and punches Arthur in the face before having the man is thrown out of the building. Arthur returns home, where he tortures himself by slamming his head on the refrigerator in a fit of depression and longing.Two police detectives, Burke (Shea Wigham) and Garrity (Bill Camp) go to Arthur's apartment to question him on the subway murders due to the word that the suspect was wearing clown make-up, and they know Arthur lost his job earlier that day. Arthur denies any involvement and gets the detectives to leave. Not long after, Penny falls ill and is hospitalized. Sophie sits by Arthur as he tends to his mother. In the hospital, Arthur sees that Murray's show is playing a clip from his stand-up routine, but he is hurt to see that Murray only played it to mock Arthur.Arthur later receives a phone call from a rep for Murray's show. He is invited to appear as a guest, which Arthur reluctantly accepts. After studying other interviews on the comedy show, Arthur decides to commit suicide in front of the live audience, thinking it will make them laugh.Seeking hard proof, Arthur goes to Arkham Asylum and speaks to a clerk, Carl (Brian Tyree Henry), who has a file on Penny. When Carl says he can't give Arthur the info he wants, Arthur snatches the file and runs away to read it. Once away and hidden in a stairwell, Arthur opens the documents and reads them, finding that Thomas was telling the truth... according to the documents. The reality is that Penny adopted Arthur after he was found abandoned, and she abused him, tying him to a radiator and beating him alongside her abusive boyfriend. One part of the file mentions Arthur having a head injury, which is most likely what caused his laughing condition. Arthur returns to the hospital and tells Penny that he thought his life was a tragedy, but he sees it's a \"fucking comedy.\" With that, he smothers Penny to death.Arthur goes back home and breaks into Sophie's apartment. She sees him and is terrified, asking him to leave for the sake of her daughter. Arthur asks her if she has ever had \"a really bad day,\" to which she replies that she doesn't even know him. Through this, it is revealed that every other moment featuring Sophie was just in Arthur's head. A broken and frustrated Arthur apologizes for his intrusion and leaves Sophie alone, storming out of her apartment.Arthur starts to get ready for his appearance on Murray's show and paints his face white. He is visited in his apartment by Randall and another former co-worker, a dwarf named Gary (Leigh Gill). They offer condolences after they hear about Penny's death, but then Randall begins mentioning Burke and Garrity going to their apartments to question them about the subway murders. Arthur realizes that Randall is only seeking a way to use Arthur in order to cover his own butt and then snaps, brutally stabbing Randall twice in the face before smashing his head against the wall. A terrified Gary questions Arthur's deeds and begs to be let go. Arthur agrees to before playfully scaring him as a prank. Gary tries to undo the lock on Arthur's door but is unable to due to his height. He asks Arthur to open the door for him to which Arthur immediately agrees, pausing once to thank Gary for being the only person in his life who was nice to him. Arthur kisses Gary on the forehead and lets him go.Arthur then dyes his hair green, puts on full clown make-up, and dons a burgundy suit. He then dances down the stairways, fully embracing his insanity and carefree life. Burke and Garrity find Arthur dancing in the street and move in to arrest him. Arthur runs, and they chase him into the subway train where dozens of other Gotham citizens are dressed like clowns after being inspired by the murders. Arthur hides his face with a clown mask, which he steals from a protester and inadvertently starts a brawl in the train cars. As the detectives pursue Arthur, one clown gets in the way, and Burke accidentally shoots him dead when they struggle with his gun. The clowns pull the detectives out of the subway and start beating them relentlessly, allowing Arthur to get away, moving smoothly through the police forces which swarm the area.At the TV station, Arthur meets Murray and his agent Gene (Marc Maron). Before he goes on, Arthur asks Murray to introduce him as \"Joker,\" since Murray referred to him as such when playing his clip. Murray asks Arthur if his clown make-up has political agendas behind it to which Arthur replies, \"I don't believe in that. I don't believe in anything.\" While waiting to be introduced, Arthur sees Murray broadcasting a clip of a struggling Arthur trying to tell a joke. This causes Arthur's mind and plans to change, and then he dances out into the spotlight.Arthur goes out as the show begins. He awkwardly tells Murray a joke, which he finds funny for its dark humor though nobody else does. After being confronted with this, Arthur continues by admitting to the subway murders. Murray and the audience slowly realize that Arthur is serious. Arthur argues that the audience only cares for the victims because Thomas Wayne spoke for them, but anyone else like Arthur would be ignored and walked over. Murray and the audience grow angrier with Arthur, but so does he. Murray scolds Arthur, which escalates into Arthur snapping and telling another joke, grinning giddily. \"What do you get when you cross a mentally ill loner with a society that abandons him and treats him like trash?!\" he asks, only for Murray to try shutting him off before calling for the police. An enraged Arthur then screams, \"You get what you fucking' deserve!\" before blowing Murray's brains out in front of everyone. The audience runs away in terror, and the news of the murder immediately hits the airwaves. Arthur then laughs genuinely for the first time in his life.Gotham is now overrun by rioting citizens dressed as clowns after hearing about what Arthur did. The Waynes leave a movie theater to find the chaos in the streets. Thomas takes his wife Martha (Carrie Louise Putrello) and Bruce into an alley, but one clown follows them and tells Thomas he is getting what he deserves using the punchline that Arthur used on the Murray Franklin show. With that, he shoots Thomas and Martha dead in front of Bruce.Meanwhile, Arthur has been arrested and is being taken by the police. Arthur looks out the window and laughs gleefully as he sees the destruction and chaos he has caused. Just then, the clowns in an ambulance run into the car, killing the cops and freeing Arthur, who is injured and unconscious. When he awakes, Arthur finds himself surrounded by a mob of cheering mobsters in clown masks. The rioters then cheer Arthur on as he stands on a car and embraces their admiration, now that he has gotten the recognition he has long desired. He dances to their cheering and then pauses, finding that his nose is bleeding profusely. He then spreads the blood across his upper lip and grins before standing before them, elevated like a god.Sometime later, Arthur is locked up in Arkham. He laughs after telling this story and visualizes a young Bruce standing over his parents in the alley. Realizing that he has, in a way, turned Bruce into himself, Arthur laughs some more, finding this genuinely hilarious. He meets a new social worker (April Grace) and says he wants to tell her a joke, but she wouldn't get it. A few minutes later, Arthur then steps out of the room, leaving a trail of bloody footprints behind before he is chased around by orderlies.\n    ",
  quotes: [
    "\n\nArthur Fleck:\n[written in notebook]\nThe worst part of having a mental illness is people expect you to behave as if you don't.     ",
    "\n\nArthur Fleck:\nI used to think that my life was a tragedy, but now I realize, it's a fucking comedy.     ",
    "\n\nArthur Fleck:\nFor my whole life, I didn't know if I even really existed. But I do, and people are starting to notice.     ",
    "\n\nArthur Fleck:\nYou don't listen, do you? I don't think you ever really hear me. You just ask the same questions every week. \"How's your job?\" \"Are you having any negative thoughts?\" All I have are negative thoughts.     ",
    '\n\nArthur Fleck:\nMurray, one small thing? \nMurray Franklin:\nYeah? \nArthur Fleck:\nWhen you bring me out, can you introduce me as Joker?     ',
  ],
  reviews: [
    "I was a person that saw all the hype and claims of masterpiece as overreacting and overblown excitement for another Joker based film. I thought this looked solid at best and even a bit too pretentious in the trailer, but in here to say I was incredibly wrong. This is a massive achievement of cinema that's extremely rare in a day and age of cgi nonsense and reboots. While this is somewhat of a reboot of sorts, the standalone origin tale is impeccable from start to finish and echoes resemblance to the best joker origin comics from the past. Joaquin bleeds, sweats, and cries his every drop into this magnificently dedicated performance. Heath Ledger would be proud. This is undoubtedly the greatest acting performance since Heath's joker. The directing and writing is slickly brilliant and the bleak settings and tones are palpable throughout. When this film was over the place was blown away and every audience member was awestruck that they witnessed a film that could still transport them into a character's world and very existence. Believe the hype. This is going to be revered as a transcending masterpiece of cinema.",
    "Every once in a while a movie comes, that truly makes an impact. Joaquin's performance and scenography in all it's brilliance. Grotesque, haunting and cringy. Hard to watch at times,... but so mesmerizing, you won't blink an eye watching it. Tragic, but with seriously funny moments. Emotional rollercoaster - sometimes, with multiple emotions popping-up at the same time.this is far from a typical action-riddled predictable super-hero movie - it's a proper psychological thriller/drama, with the single best character development I have ever seen.",
    'This is a movie that only those who have felt alone and isolated can truly relate to it. You understand the motive and you feel sorry for the character. A lot of people will see this movie and think that it encourages violence. But truly, this movie should encourage each and every one of us to become a better person, treat everyone with respect and make each other feel like they belong in this world, instead of making them feel isolated.',
    "Truly a masterpiece, The Best Hollywood film of 2019, one of the Best films of the decade... And truly the Best film to bring a comic book so chillingly and realistically to real ife.\nRemarkable Direction, Cinematography, Music and the Acting.\nSome people are surprised to find it DISTURBING and VIOLENT, but it's a necessity and message.\nIt's about society and reflects those underappreciated/unrecognized/bullied people, proving they can do something too.\nThe way it shows class difference, corruption and how rich and talented rule others around them is not exaggerated and that's what makes it different.\nIt's BELIEVABLE.\nThere could be multiple JOKERs living in our society that could shake those around them in much bitter way than the film shows making people uncomforting people.\nConsider this a wake up call, a message, but first a film. A PERFECT film.",
    "Joaquin Phoenix gives a tour de force performance, fearless and stunning in its emotional depth and physicality. It's impossible to talk about this without referencing Heath Ledger's Oscar-winning performance from The Dark Knight, widely considered the definitive live-action portrayal of the Joker, so let's talk about it. The fact is, everyone is going to be stunned by what Phoenix accomplishes, because it's what many thought impossible - a portrayal that matches and potentially exceeds that of The Dark Knight's Clown Prince of Crime",
  ],
  title: 'Joker',
  trailerUrl: [
    'https://imdb.com/title/tt7286456/videoplayer/vi1723318041?ref_=tt_pv_vi_aiv_1',
    'https://imdb.com/title/tt7286456/videoplayer/vi2883960089?ref_=tt_pv_vi_aiv_2',
    'https://imdb.com/title/tt7286456/videoplayer/vi2059058969?ref_=tt_pv_vi_aiv_3',
  ],
};

export const filmByTitleDate = {
  genre: [
    'Action',
  ],
  imageurl: [
    'https://m.media-amazon.com/images/M/MV5BZjA3YmI2YzgtYzkzNi00MTM1LWJhNTAtZjg0ZDQyYjliYzMyXkEyXkFqcGdeQXVyMzM0OTc4NQ@@._V1_UY268_CR16,0,182,268_AL_.jpg',
  ],
  imdbid: 'tt5518714',
  imdbrating: 7.4,
  released: 2020,
  synopsis: 'Ratnik, is the story of a World War III soldier returning home after a quarterly phase rotation programme, only to find out that her home front has now descended into some kind of chaos. ...',
  title: 'Ratnik',
  type: 'movie',
};