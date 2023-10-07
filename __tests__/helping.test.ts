import {
  timeAgo,
  getId,
  checkPasswordComplexity,
  getMiddleIndex,
  getMiddleOffset,
  getLenghtOffset,
  convertCommentsObjectToArray,
  divideSeatsBySeatNumber,
  isSeatInArray,
  formatDate,
  getFilmSessionsByDate,
} from '../src/helpingFunctions/index';
import { FilmCommentsType, FilmSession, Seat } from '../src/types/index';

describe('getId', () => {
  it('should generate a valid UUID', () => {
    const id = getId();
    expect(id).toMatch(/^[a-f0-9-]+$/i);
  });
});

describe('checkPasswordComplexity', () => {
  it('should return "High" for a complex password', () => {
    const password = 'Abc123.!';
    expect(checkPasswordComplexity(password)).toBe('High');
  });

  it('should return "Medium" for a moderately complex password', () => {
    const password = 'Abc123';
    expect(checkPasswordComplexity(password)).toBe('Medium');
  });

  it('should return "Low" for a simple password', () => {
    const password = 'abcd';
    expect(checkPasswordComplexity(password)).toBe('Low');
  });

  it('should return "Invalid" for an invalid password', () => {
    const password = '123'; // Меньше 4 символов
    expect(checkPasswordComplexity(password)).toBe('Invalid');
  });
});

describe('getMiddleIndex', () => {
  it('should return the middle index for an odd length', () => {
    expect(getMiddleIndex(5)).toBe(1);
  });

  it('should return the middle index for an even length', () => {
    expect(getMiddleIndex(6)).toBe(2);
  });
});

describe('getMiddleOffset', () => {
  it('should calculate the middle offset correctly', () => {
    expect(getMiddleOffset(1, 100)).toBe(50);
  });
});

describe('getLenghtOffset', () => {
  it('should calculate the length offset correctly', () => {
    expect(getLenghtOffset(5, 100)).toBe(200);
  });
});

describe('convertCommentsObjectToArray', () => {
  it('should convert comments object to array correctly', () => {
    const commentsObject = {
      '1': { comment: 'Comment 1', userId: 'user1', data: '2023-01-01' },
      '2': { comment: 'Comment 2', userId: 'user2', data: '2023-01-02' },
    };

    const expectedArray: FilmCommentsType[] = [
      { comment: 'Comment 1', userid: 'user1', date: '2023-01-01' },
      { comment: 'Comment 2', userid: 'user2', date: '2023-01-02' },
    ];

    expect(convertCommentsObjectToArray(commentsObject)).toEqual(expectedArray);
  });
});

describe('timeAgo', () => {
  it('should calculate time ago correctly', () => {
    const currentTime = new Date('2023-01-03T12:00:00Z').getTime();
    const date = '2023-01-01T12:00:00Z';

    jest.spyOn(Date, 'now').mockImplementation(() => currentTime);

    expect(timeAgo(date)).toBe('2d');
  });
});

describe('Function Tests', () => {
  test('divideSeatsBySeatNumber should split seats correctly', () => {
    const seats: Seat[] = [
      { row: 1, seatNumber: 3, ticketId: '123', isAvailable: true },
      { row: 2, seatNumber: 6, ticketId: '124', isAvailable: false },
      { row: 3, seatNumber: 2, ticketId: '125', isAvailable: true },

    ];

    const [seatsArray1, seatsArray2] = divideSeatsBySeatNumber(seats);

    expect(seatsArray1).toHaveLength(2);
    expect(seatsArray2).toHaveLength(1);

  });

  test('isSeatInArray should correctly identify a seat in the array', () => {
    const seatToFind: Seat = { row: 1, seatNumber: 3, ticketId: '123', isAvailable: true };
    const seatArray: Seat[] = [
      { row: 1, seatNumber: 3, ticketId: '123', isAvailable: true },
      { row: 2, seatNumber: 6, ticketId: '124', isAvailable: false },
      { row: 3, seatNumber: 2, ticketId: '125', isAvailable: true },

    ];

    const result = isSeatInArray(seatToFind, seatArray);

    expect(result).toBe(true)
  });

  test('formatDate should format date correctly', () => {
    const date = new Date('2023-10-07');

    const formattedDate = formatDate(date);

    expect(formattedDate).toBe('October 7, 2023');
  });

  test('getFilmSessionsByDate should filter sessions correctly', () => {
    const date = new Date('2023-10-07');
    const filmSessions: FilmSession[] = [
      {
        id: '1',
        coast: 10,
        timeStart: '10:00 AM',
        timeEnd: '12:00 PM',
        date: '2023-10-07',
        cinema: 'Cinema 1',
        seats: [],
      },
      {
        id: '2',
        coast: 12,
        timeStart: '2:00 PM',
        timeEnd: '4:00 PM',
        date: '2023-10-08',
        cinema: 'Cinema 2',
        seats: [],
      },
    ];

    const filteredSessions = getFilmSessionsByDate(filmSessions, date);

    expect(filteredSessions).toHaveLength(1);
    expect(filteredSessions[0].date).toBe('2023-10-07');
  })
})